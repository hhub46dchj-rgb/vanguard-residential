import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * VRA monogram — a shield-like mark evoking trust + residential roofs.
 * Inline SVG keeps it crisp at any size and inherits currentColor.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9", className)}
      fill="none"
      aria-hidden="true"
    >
      {/* Shield outline */}
      <path
        d="M24 3 6 9v13c0 11 7.6 18.5 18 23 10.4-4.5 18-12 18-23V9L24 3Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path
        d="M24 3 6 9v13c0 11 7.6 18.5 18 23 10.4-4.5 18-12 18-23V9L24 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Pitched roof */}
      <path
        d="M14 22 24 13l10 9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "A" frame / door */}
      <path
        d="M17 34V23m14 0v11M14 34h20"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface LogoProps {
  /** Light text for use on dark/navy backgrounds. */
  variant?: "dark" | "light";
  href?: string | null;
  className?: string;
  showWordmark?: boolean;
}

export function Logo({
  variant = "dark",
  href = "/",
  className,
  showWordmark = true,
}: LogoProps) {
  const accent = variant === "light" ? "text-white" : "text-navy-900";
  const sub = variant === "light" ? "text-emerald-300" : "text-emerald-600";

  const content = (
    <span className={cn("flex items-center gap-5", className)}>
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-white p-2 shadow-xl ring-2 ring-gray-200 ring-offset-2 ring-offset-black">
        <Image
          src="/photos/logo.jpg"
          alt="Vanguard Residential Acquisitions logo"
          fill
          className="object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          sizes="80px"
          priority
        />
      </div>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={cn("text-2xl font-bold tracking-tight sm:text-3xl", accent)}>
            Vanguard Residential
          </span>
          <span className={cn("text-lg font-semibold uppercase tracking-[0.18em]", sub)}>
            Acquisitions
          </span>
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} className="inline-flex shrink-0">
      {content}
    </Link>
  );
}
