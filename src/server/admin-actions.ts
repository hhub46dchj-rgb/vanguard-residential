"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/types";
import { auth } from "@/auth";

export type LeadKind = "sellers" | "investors" | "partners";

function isValidStatus(s: string): s is LeadStatus {
  return (LEAD_STATUSES as readonly string[]).includes(s);
}

/** Update a lead's status. Revalidates the relevant admin list/detail pages. */
export async function updateLeadStatus(
  kind: LeadKind,
  id: string,
  status: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const session = await auth();
  if (!session?.user) return { ok: false, error: "Unauthorized" };
  if (!isValidStatus(status)) return { ok: false, error: "Invalid status" };

  try {
    if (kind === "sellers") await prisma.sellerLead.update({ where: { id }, data: { status } });
    else if (kind === "investors") await prisma.investorLead.update({ where: { id }, data: { status } });
    else await prisma.partnerLead.update({ where: { id }, data: { status } });
  } catch {
    return { ok: false, error: "Could not update lead" };
  }

  revalidatePath(`/admin/${kind}`);
  revalidatePath(`/admin/${kind}/${id}`);
  revalidatePath("/admin");
  return { ok: true };
}
