import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "new" | "contacted" | "closed" | "neutral" | "emerald";

const tones: Record<Tone, string> = {
  new: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  contacted: "bg-amber-50 text-amber-700 ring-amber-600/20",
  closed: "bg-navy-50 text-navy-700 ring-navy-500/20",
  neutral: "bg-slate-100 text-slate-600 ring-slate-500/20",
  emerald: "bg-emerald-500 text-white ring-emerald-600/30",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ring-1 ring-inset",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}

/** Map a lead status string to its badge tone. */
export function statusTone(status: string): Tone {
  switch (status) {
    case "new":
      return "new";
    case "contacted":
      return "contacted";
    case "closed":
      return "closed";
    default:
      return "neutral";
  }
}
