import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { LeadDetail } from "@/components/admin/LeadDetail";
import { money } from "@/lib/types";

export const metadata = { title: "Seller Lead — Vanguard Admin" };

export default async function SellerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await prisma.sellerLead.findUnique({ where: { id } });
  if (!lead) notFound();

  return (
    <LeadDetail
      kind="sellers"
      id={lead.id}
      status={lead.status}
      createdAt={lead.createdAt}
      title={lead.ownerName}
      subtitle={`${lead.address}, ${lead.city}, ${lead.state} ${lead.zip}`}
      rows={[
        { label: "Phone", value: lead.phone },
        { label: "Email", value: lead.email },
        { label: "Asking price", value: money(lead.askingPrice) },
        { label: "Property type", value: lead.propertyType },
        { label: "Year built", value: lead.yearBuilt?.toString() },
        {
          label: "Square footage",
          value: lead.squareFootage ? `${lead.squareFootage} sqft` : null,
        },
        { label: "Bedrooms", value: lead.bedrooms?.toString() },
        { label: "Bathrooms", value: lead.bathrooms?.toString() },
        { label: "Occupancy", value: lead.occupancyStatus },
        { label: "Roof age", value: lead.roofAge },
        { label: "HVAC condition", value: lead.hvacCondition },
      ]}
      note={{ label: "Repair needs / notes", value: lead.repairNotes }}
    />
  );
}
