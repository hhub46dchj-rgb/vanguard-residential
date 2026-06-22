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
    <span className={cn("flex items-center gap-2 sm:gap-4", className)}>
      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg shadow-lg sm:h-16 sm:w-16 sm:rounded-xl md:h-20 md:w-20 md:rounded-2xl">
        <Image
          src="/newlogo.png"
          alt="Vanguard Residential Acquisitions logo"
          fill
          className="object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          sizes="(max-width: 640px) 44px, (max-width: 768px) 64px, 80px"
          priority
        />
      </div>
      {showWordmark && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className={cn("truncate text-base font-bold tracking-tight sm:text-2xl lg:text-3xl", accent)}>
            Vanguard Residential
          </span>
          <span className={cn("text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-sm lg:text-lg", sub)}>
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
