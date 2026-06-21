import Link from "next/link";
import { Badge, statusTone } from "@/components/ui/Badge";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { EmptyState } from "@/components/admin/EmptyState";
import { formatDateTime } from "@/lib/types";
import type { LeadKind } from "@/server/admin-actions";
import type { LucideIcon } from "lucide-react";

export interface LeadColumn<T> {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  /** Hide this column on small screens. */
  hideOnMobile?: boolean;
}

export interface LeadTableProps<T extends { id: string; status: string; createdAt: Date }> {
  kind: LeadKind;
  rows: T[];
  columns: LeadColumn<T>[];
  emptyTitle: string;
  emptyMessage: string;
  emptyIcon: LucideIcon;
}

export function LeadTable<T extends { id: string; status: string; createdAt: Date }>({
  kind,
  rows,
  columns,
  emptyTitle,
  emptyMessage,
  emptyIcon,
}: LeadTableProps<T>) {
  if (rows.length === 0) {
    return <EmptyState icon={emptyIcon} title={emptyTitle} message={emptyMessage} />;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card">
      {/* Desktop / tablet: table */}
      <table className="hidden w-full text-left sm:table">
        <thead>
          <tr className="border-b border-navy-100 bg-navy-50/40 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {columns.map((c) => (
              <th key={c.key} className="px-5 py-3">
                {c.header}
              </th>
            ))}
            <th className="px-5 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy-50">
          {rows.map((row) => (
            <tr key={row.id} className="group transition-colors hover:bg-navy-50/40">
              {columns.map((c) => (
                <td key={c.key} className="px-5 py-3.5 text-sm text-navy-800">
                  <Link
                    href={`/admin/${kind}/${row.id}`}
                    className="after:absolute after:inset-0 group-hover:text-emerald-600"
                  >
                    {c.render(row)}
                  </Link>
                </td>
              ))}
              <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                <div className="relative z-10">
                  <StatusSelect kind={kind} id={row.id} status={row.status} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile: stacked cards */}
      <ul className="divide-y divide-navy-50 sm:hidden">
        {rows.map((row) => (
          <li key={row.id}>
            <Link
              href={`/admin/${kind}/${row.id}`}
              className="block px-4 py-3.5 transition-colors hover:bg-navy-50/40"
            >
              {columns
                .filter((c) => !c.hideOnMobile)
                .map((c, i) => (
                  <div key={c.key} className={i === 0 ? "" : "mt-1"}>
                    {i === 0 ? (
                      <p className="text-sm font-semibold text-navy-900">{c.render(row)}</p>
                    ) : (
                      <p className="text-xs text-slate-500">{c.render(row)}</p>
                    )}
                  </div>
                ))}
              <div className="mt-2 flex items-center justify-between">
                <Badge tone={statusTone(row.status)}>{row.status}</Badge>
                <span className="text-[11px] text-slate-400">
                  {formatDateTime(row.createdAt)}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
