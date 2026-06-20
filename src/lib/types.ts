/** Lead lifecycle states shared across seller / investor / partner pipelines. */
export type LeadStatus = "new" | "contacted" | "closed";

export const LEAD_STATUSES: LeadStatus[] = ["new", "contacted", "closed"];

export function money(n: number | bigint | null | undefined): string {
  if (n == null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(n));
}

export function formatDateTime(d: Date | string): string {
  const date = typeof d === "string" ? new Date(d) : d;
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
