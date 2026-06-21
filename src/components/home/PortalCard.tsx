import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface PortalCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  audience: string;
  description: string;
  bullets: string[];
  cta: string;
  /** Optional tailwind gradient for the icon chip. */
  iconClassName?: string;
  /** Optional image for the portal */
  image?: string;
}

export function PortalCard({
  href,
  icon: Icon,
  title,
  audience,
  description,
  bullets,
  cta,
  iconClassName,
  image,
}: PortalCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 sm:p-7",
        "shadow-card transition-all duration-300",
        "hover:-translate-y-1 hover:border-emerald-300 hover:shadow-glow",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
      )}
    >
      <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-xl bg-navy-50">
        {image ? (
          <Image
            src={image}
            alt={`${title} portal icon`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="80px"
          />
        ) : (
          <span
            className={cn(
              "inline-flex h-full w-full items-center justify-center rounded-xl bg-navy-800 text-white transition-colors group-hover:bg-emerald-500",
              iconClassName,
            )}
          >
            <Icon className="h-8 w-8" />
          </span>
        )}
      </div>

      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
        {audience}
      </p>
      <h3 className="mt-2 text-xl font-bold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {b}
          </li>
        ))}
      </ul>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors group-hover:text-emerald-600">
        {cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
