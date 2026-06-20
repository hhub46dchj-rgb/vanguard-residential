import Link from "next/link";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { PublicFooter } from "@/components/layout/PublicFooter";

/** Shared two-column shell for every portal form: intro + form card. */
export function FormShell({
  badge,
  title,
  subtitle,
  icon: Icon,
  introPoints,
  children,
}: {
  badge: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  introPoints: string[];
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-navy-800"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Intro column */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
              {badge}
            </p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-navy-900">
              {title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {subtitle}
            </p>
            <ul className="mt-6 space-y-3">
              {introPoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </aside>

          {/* Form card */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            {children}
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}

/** Success state shown after a successful submission. */
export function FormSuccess({
  title,
  message,
  primaryHref = "/",
  primaryLabel = "Back to home",
}: {
  title: string;
  message: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <div className="py-8 text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8 text-emerald-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <h2 className="mt-5 text-2xl font-bold text-navy-900">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-slate-600">{message}</p>
      <div className="mt-6 flex justify-center">
        <Link
          href={primaryHref}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
        >
          {primaryLabel}
        </Link>
      </div>
    </div>
  );
}
