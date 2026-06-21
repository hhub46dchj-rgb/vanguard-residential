import { Home } from "lucide-react";
import { prisma } from "@/lib/db";
import { LeadTable, type LeadColumn } from "@/components/admin/LeadTable";
import { money, formatDateTime } from "@/lib/types";
import type { SellerLead } from "@prisma/client";

export const metadata = { title: "Sellers — Vanguard Admin" };

export default async function SellersAdminPage() {
  const rows = await prisma.sellerLead.findMany({ orderBy: { createdAt: "desc" } });

  const columns: LeadColumn<SellerLead>[] = [
    {
      key: "owner",
      header: "Owner",
      render: (r) => <span className="font-semibold text-navy-900">{r.ownerName}</span>,
    },
    { key: "prop", header: "Property", render: (r) => `${r.address}, ${r.city}, ${r.state}` },
    {
      key: "price",
      header: "Asking",
      render: (r) => money(r.askingPrice),
      hideOnMobile: true,
    },
    {
      key: "bed",
      header: "Bd / Ba",
      render: (r) => `${r.bedrooms ?? "—"} / ${r.bathrooms ?? "—"}`,
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-navy-900">Sellers</h1>
          <p className="mt-1 text-sm text-slate-500">
            {rows.length} lead{rows.length === 1 ? "" : "s"} from homeowners.
          </p>
        </div>
      </div>

      <LeadTable
        kind="sellers"
        rows={rows}
        columns={columns}
        emptyIcon={Home}
        emptyTitle="No seller leads yet"
        emptyMessage="When a homeowner submits the Seller form, they'll appear here."
      />
    </div>
  );
}
