import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge, statusTone } from "@/components/ui/Badge";
import { StatusSelect } from "@/components/admin/StatusSelect";
import { formatDateTime } from "@/lib/types";
import type { LeadKind } from "@/server/admin-actions";

export interface DetailRow {
  label: string;
  value: string | null | undefined;
}

/** A single labelled field in the detail view. */
function Row({ label, value }: DetailRow) {
  const display = value && value.toString().trim() !== "" ? value : "—";
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-navy-50 px-5 py-3.5 sm:grid-cols-[160px_1fr]">
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </dt>
      <dd className="text-sm text-navy-800 whitespace-pre-wrap break-words">{display}</dd>
    </div>
  );
}

export interface LeadDetailProps {
  kind: LeadKind;
  id: string;
  status: string;
  createdAt: Date;
  title: string;
  subtitle?: string;
  rows: DetailRow[];
  /** Optional long-form note shown in its own block at the bottom. */
  note?: { label: string; value: string | null | undefined };
}

export function LeadDetail({
  kind,
  id,
  status,
  createdAt,
  title,
  subtitle,
  rows,
  note,
}: LeadDetailProps) {
  return (
    <div className="space-y-5">
      <Link
        href={`/admin/${kind}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-navy-800"
      >
        <ArrowLeft className="h-4 w-4" /> Back to {kind}
      </Link>

      <div className="rounded-2xl border border-navy-100 bg-white shadow-card">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-navy-100 px-5 py-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold text-navy-900">{title}</h1>
              <Badge tone={statusTone(status)}>{status}</Badge>
            </div>
            {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
            <p className="mt-1.5 text-xs text-slate-400">
              Received {formatDateTime(createdAt)}
            </p>
          </div>
          <div className="shrink-0">
            <StatusSelect kind={kind} id={id} status={status} />
          </div>
        </div>

        {/* Rows */}
        <dl>
          {rows.map((r) => (
            <Row key={r.label} {...r} />
          ))}
        </dl>

        {/* Long note */}
        {note && note.value && note.value.trim() !== "" && (
          <div className="px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              {note.label}
            </p>
            <p className="mt-1.5 rounded-xl bg-navy-50/60 p-4 text-sm leading-relaxed text-navy-800 whitespace-pre-wrap">
              {note.value}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
