import { Handshake } from "lucide-react";
import { prisma } from "@/lib/db";
import { LeadTable, type LeadColumn } from "@/components/admin/LeadTable";
import { formatDateTime } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import type { PartnerLead } from "@prisma/client";

export const metadata = { title: "Partners — Vanguard Admin" };

export default async function PartnersAdminPage() {
  const rows = await prisma.partnerLead.findMany({ orderBy: { createdAt: "desc" } });

  const columns: LeadColumn<PartnerLead>[] = [
    {
      key: "contact",
      header: "Contact",
      render: (r) => (
        <span>
          <span className="font-semibold text-navy-900">{r.contactName}</span>
          {r.companyName && (
            <span className="block text-xs text-slate-500">{r.companyName}</span>
          )}
        </span>
      ),
    },
    {
      key: "type",
      header: "Assistance",
      render: (r) => (
        <Badge tone={r.assistanceType === "dispositions" ? "emerald" : "closed"}>
          {r.assistanceType}
        </Badge>
      ),
    },
    {
      key: "ctx",
      header: "Details",
      render: (r) => (
        <span className="line-clamp-1 text-slate-500">{r.contextDetails}</span>
      ),
      hideOnMobile: true,
    },
    {
      key: "date",
      header: "Received",
      render: (r) => formatDateTime(r.createdAt),
      hideOnMobile: true,
    },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Partners</h1>
        <p className="mt-1 text-sm text-slate-500">
          {rows.length} joint-venture request{rows.length === 1 ? "" : "s"}.
        </p>
      </div>

      <LeadTable
        kind="partners"
        rows={rows}
        columns={columns}
        emptyIcon={Handshake}
        emptyTitle="No partner requests yet"
        emptyMessage="When a co-wholesaler or company opens a partnership, they'll appear here."
      />
    </div>
  );
}
