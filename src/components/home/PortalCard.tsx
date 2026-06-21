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
        "group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 sm:p-10",
        "shadow-card-xl transition-all duration-500",
        "hover:-translate-y-3 hover:border-emerald-300 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-emerald-50/50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
      )}
    >
      <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-gray-200">
        {image ? (
          <Image
            src={image}
            alt={`${title} portal icon`}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl"
            sizes="192px"
            priority
          />
        ) : (
          <span
            className={cn(
              "inline-flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-white transition-all duration-500 group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:scale-110 shadow-lg",
              iconClassName,
            )}
          >
            <Icon className="h-12 w-12" />
          </span>
        )}
      </div>

      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
        {audience}
      </p>
      <h3 className="mt-3 text-2xl font-bold text-navy-900">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-700">{description}</p>

      <ul className="mt-5 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-sm text-slate-800">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            {b}
          </li>
        ))}
      </ul>

      <span className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-navy-800 transition-all duration-300 group-hover:text-emerald-600">
        {cta}
        <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" />
      </span>
    </Link>
  );
}
