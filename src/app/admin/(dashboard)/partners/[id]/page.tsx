import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { LeadDetail } from "@/components/admin/LeadDetail";

export const metadata = { title: "Partner Lead — Vanguard Admin" };

export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await prisma.partnerLead.findUnique({ where: { id } });
  if (!lead) notFound();

  const isDisp = lead.assistanceType === "dispositions";

  return (
    <LeadDetail
      kind="partners"
      id={lead.id}
      status={lead.status}
      createdAt={lead.createdAt}
      title={lead.contactName}
      subtitle={lead.companyName ?? "Independent partner"}
      rows={[
        { label: "Phone", value: lead.phone },
        { label: "Email", value: lead.email },
        { label: "Company", value: lead.companyName },
        {
          label: "Assistance with",
          value: isDisp ? "Dispositions" : "Acquisitions",
        },
      ]}
      note={{
        label: isDisp ? "Contract / property details" : "Market to source",
        value: lead.contextDetails,
      }}
    />
  );
}
