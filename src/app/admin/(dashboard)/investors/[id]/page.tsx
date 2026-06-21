import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { LeadDetail } from "@/components/admin/LeadDetail";
import { money } from "@/lib/types";

export const metadata = { title: "Investor Lead — Vanguard Admin" };

export default async function InvestorDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await prisma.investorLead.findUnique({ where: { id } });
  if (!lead) notFound();

  return (
    <LeadDetail
      kind="investors"
      id={lead.id}
      status={lead.status}
      createdAt={lead.createdAt}
      title={lead.contactName}
      subtitle={lead.companyName ?? "Independent buyer"}
      rows={[
        { label: "Phone", value: lead.phone },
        { label: "Email", value: lead.email },
        { label: "Company", value: lead.companyName },
        { label: "Max budget", value: money(lead.maxBudget) },
        { label: "Strategy", value: lead.strategy },
        { label: "Preferred types", value: lead.preferredTypes },
        {
          label: "Proof of funds",
          value: lead.proofOfFunds ? "Verified — cash buyer / LOC" : "Not confirmed",
        },
        { label: "Target areas", value: lead.targetAreas },
      ]}
      note={{ label: "Notes", value: lead.notes }}
    />
  );
}
