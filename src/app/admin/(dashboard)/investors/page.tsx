import { Wallet } from "lucide-react";
import { prisma } from "@/lib/db";
import { LeadTable, type LeadColumn } from "@/components/admin/LeadTable";
import { money, formatDateTime } from "@/lib/types";
import type { InvestorLead } from "@prisma/client";

export const metadata = { title: "Investors — Vanguard Admin" };

export default async function InvestorsAdminPage() {
  const rows = await prisma.investorLead.findMany({ orderBy: { createdAt: "desc" } });

  const columns: LeadColumn<InvestorLead>[] = [
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
      key: "area",
      header: "Target areas",
      render: (r) => r.targetAreas ?? "—",
      hideOnMobile: true,
    },
    {
      key: "budget",
      header: "Max budget",
      render: (r) => money(r.maxBudget),
      hideOnMobile: true,
    },
    {
      key: "strategy",
      header: "Strategy",
      render: (r) => r.strategy ?? "—",
      hideOnMobile: true,
    },
    {
      key: "pof",
      header: "POF",
      render: (r) =>
        r.proofOfFunds ? (
          <span className="font-medium text-emerald-600">Verified</span>
        ) : (
          <span className="text-slate-400">No</span>
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
        <h1 className="text-2xl font-bold text-navy-900">Investors</h1>
        <p className="mt-1 text-sm text-slate-500">
          {rows.length} buyer{rows.length === 1 ? "" : "s"} on the network.
        </p>
      </div>

      <LeadTable
        kind="investors"
        rows={rows}
        columns={columns}
        emptyIcon={Wallet}
        emptyTitle="No investor leads yet"
        emptyMessage="When an investor joins the buyer list, they'll appear here."
      />
    </div>
  );
}
