import Link from "next/link";
import { Home, Wallet, Handshake, ArrowRight, Clock } from "lucide-react";
import { prisma } from "@/lib/db";
import { Badge, statusTone } from "@/components/ui/Badge";
import { formatDateTime } from "@/lib/types";
import { EmptyState } from "@/components/admin/EmptyState";
import type { LeadKind } from "@/server/admin-actions";

export const metadata = { title: "Overview — Vanguard Admin" };

// Minimal shape we read from each table for the "recent" feed.
type RecentLead = {
  id: string;
  name: string;
  detail: string;
  status: string;
  createdAt: Date;
  kind: LeadKind;
};

export default async function AdminOverview() {
  const [sellers, investors, partners] = await Promise.all([
    prisma.sellerLead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
    prisma.investorLead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
    prisma.partnerLead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  const [sellerCount, investorCount, partnerCount] = await Promise.all([
    prisma.sellerLead.count(),
    prisma.investorLead.count(),
    prisma.partnerLead.count(),
  ]);

  const newCount =
    (await prisma.sellerLead.count({ where: { status: "new" } })) +
    (await prisma.investorLead.count({ where: { status: "new" } })) +
    (await prisma.partnerLead.count({ where: { status: "new" } }));

  // Merge the three lists into one "recent activity" feed, newest first.
  const recent: RecentLead[] = [
    ...sellers.map((s) => ({
      id: s.id,
      name: s.ownerName,
      detail: `${s.address}, ${s.city}, ${s.state}`,
      status: s.status,
      createdAt: s.createdAt,
      kind: "sellers" as const,
    })),
    ...investors.map((i) => ({
      id: i.id,
      name: i.contactName,
      detail: i.companyName ?? "—",
      status: i.status,
      createdAt: i.createdAt,
      kind: "investors" as const,
    })),
    ...partners.map((p) => ({
      id: p.id,
      name: p.contactName,
      detail: p.assistanceType === "dispositions" ? "Dispositions" : "Acquisitions",
      status: p.status,
      createdAt: p.createdAt,
      kind: "partners" as const,
    })),
  ].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  const stats = [
    { label: "Sellers", count: sellerCount, href: "/admin/sellers", icon: Home, accent: "text-emerald-600" },
    { label: "Investors", count: investorCount, href: "/admin/investors", icon: Wallet, accent: "text-navy-700" },
    { label: "Partners", count: partnerCount, href: "/admin/partners", icon: Handshake, accent: "text-emerald-600" },
  ];

  const kindHref = (k: LeadKind, id: string) => `/admin/${k}/${id}`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-900">Overview</h1>
        <p className="mt-1 text-sm text-slate-500">
          {newCount > 0 ? (
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {newCount} new lead{newCount === 1 ? "" : "s"} awaiting review
            </span>
          ) : (
            "All caught up — no new leads."
          )}
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="group flex items-center justify-between rounded-2xl border border-navy-100 bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-emerald-300"
          >
            <div>
              <p className="text-sm font-medium text-slate-500">{s.label}</p>
              <p className="mt-1 text-3xl font-bold text-navy-900">{s.count}</p>
            </div>
            <s.icon className={"h-8 w-8 " + s.accent} />
          </Link>
        ))}
      </div>

      {/* Recent activity */}
      <div className="rounded-2xl border border-navy-100 bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-navy-900">
            Recent activity
          </h2>
          <Clock className="h-4 w-4 text-slate-400" />
        </div>

        {recent.length === 0 ? (
          <div className="p-5">
            <EmptyState
              icon={Clock}
              title="No leads yet"
              message="Submissions from the Sellers, Investors, and Partners forms will appear here."
            />
          </div>
        ) : (
          <ul className="divide-y divide-navy-50">
            {recent.slice(0, 8).map((lead) => (
              <li key={`${lead.kind}-${lead.id}`}>
                <Link
                  href={kindHref(lead.kind, lead.id)}
                  className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-navy-50/50"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate text-sm font-semibold text-navy-900">{lead.name}</p>
                      <span className="hidden shrink-0 rounded-md bg-navy-50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy-500 sm:inline">
                        {lead.kind.replace(/s$/, "")}
                      </span>
                    </div>
                    <p className="truncate text-xs text-slate-500">{lead.detail}</p>
                  </div>
                  <Badge tone={statusTone(lead.status)} className="hidden sm:inline-flex">
                    {lead.status}
                  </Badge>
                  <span className="hidden text-xs text-slate-400 md:block">
                    {formatDateTime(lead.createdAt)}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-emerald-500" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
