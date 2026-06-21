"use server";

import { sendLeadEmail } from "@/lib/email";
import {
  sellerSchema,
  investorSchema,
  partnerSchema,
  type SellerInput,
  type InvestorInput,
  type PartnerInput,
} from "@/lib/schemas";

export type ActionResult<T = undefined> =
  | { ok: true; data: T }
  | { ok: false; error: string };

function money(n: number | null | undefined): string {
  if (n == null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export async function submitSellerLead(
  raw: SellerInput,
): Promise<ActionResult> {
  const parsed = sellerSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const d = parsed.data;

  try {
    await sendLeadEmail({
      type: "New Seller Lead",
      subject: `🏠 Seller Lead: ${d.ownerName} — ${d.address}, ${d.city}, ${d.state}`,
      rows: [
        { label: "Owner Name", value: d.ownerName },
        { label: "Phone", value: d.phone },
        { label: "Email", value: d.email },
        { label: "Address", value: `${d.address}, ${d.city}, ${d.state} ${d.zip}` },
        { label: "Asking Price", value: money(d.askingPrice) },
        { label: "Property Type", value: d.propertyType ?? "—" },
        { label: "Year Built", value: d.yearBuilt?.toString() ?? "—" },
        { label: "Square Footage", value: d.squareFootage ? `${d.squareFootage} sqft` : "—" },
        { label: "Bed / Bath", value: `${d.bedrooms ?? "?"} bd / ${d.bathrooms ?? "?"} ba` },
        { label: "Occupancy", value: d.occupancyStatus ?? "—" },
        { label: "Roof Age", value: d.roofAge ?? "—" },
        { label: "HVAC Condition", value: d.hvacCondition ?? "—" },
        { label: "Repair Needs / Notes", value: d.repairNotes ?? "—" },
      ],
    });
  } catch (err) {
    console.error("Seller email failed", err);
    return { ok: false, error: "Could not send your submission. Please try again." };
  }

  return { ok: true, data: undefined };
}

export async function submitInvestorLead(
  raw: InvestorInput,
): Promise<ActionResult> {
  const parsed = investorSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const d = parsed.data;

  try {
    await sendLeadEmail({
      type: "New Investor Lead",
      subject: `💼 Investor Lead: ${d.contactName}${d.companyName ? ` — ${d.companyName}` : ""}`,
      rows: [
        { label: "Contact", value: d.contactName },
        { label: "Company", value: d.companyName ?? "—" },
        { label: "Phone", value: d.phone },
        { label: "Email", value: d.email },
        { label: "Target Areas", value: d.targetAreas ?? "—" },
        { label: "Max Budget / Deal", value: money(d.maxBudget) },
        { label: "Strategy", value: d.strategy ?? "—" },
        { label: "Preferred Types", value: d.preferredTypes ?? "—" },
        { label: "Proof of Funds", value: d.proofOfFunds ? "Confirmed — cash buyer / LOC" : "Not confirmed" },
        { label: "Notes", value: d.notes ?? "—" },
      ],
    });
  } catch (err) {
    console.error("Investor email failed", err);
    return { ok: false, error: "Could not send your submission. Please try again." };
  }

  return { ok: true, data: undefined };
}

export async function submitPartnerLead(
  raw: PartnerInput,
): Promise<ActionResult> {
  const parsed = partnerSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }
  const d = parsed.data;

  const isDisp = d.assistanceType === "dispositions";

  try {
    await sendLeadEmail({
      type: isDisp ? "JV — Dispositions Help" : "JV — Acquisitions Help",
      subject: `🤝 JV ${isDisp ? "Dispositions" : "Acquisitions"}: ${d.contactName}`,
      rows: [
        { label: "Assistance With", value: isDisp ? "Dispositions" : "Acquisitions" },
        { label: "Company", value: d.companyName ?? "—" },
        { label: "Contact", value: d.contactName },
        { label: "Phone", value: d.phone },
        { label: "Email", value: d.email },
        {
          label: isDisp ? "Contract / Property Details" : "Market to Source",
          value: d.contextDetails,
        },
      ],
    });
  } catch (err) {
    console.error("Partner email failed", err);
    return { ok: false, error: "Could not send your submission. Please try again." };
  }

  return { ok: true, data: undefined };
}
