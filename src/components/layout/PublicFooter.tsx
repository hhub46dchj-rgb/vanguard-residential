import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function PublicFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-navy-100 bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <Logo variant="light" href={null} />
            <p className="max-w-xs text-sm text-navy-300">
              Transforming Property Potential into Shared Success.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-100">
              Portals
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sellers" className="transition-colors hover:text-emerald-300">
                  Sell Your Property
                </Link>
              </li>
              <li>
                <Link href="/investors" className="transition-colors hover:text-emerald-300">
                  Investor Network
                </Link>
              </li>
              <li>
                <Link href="/partners" className="transition-colors hover:text-emerald-300">
                  Joint Ventures
                </Link>
              </li>
            </ul>
          </div>


        </div>

        <div className="mt-10 border-t border-navy-800 pt-6 text-xs text-navy-400">
          © {year} Vanguard Residential Acquisitions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
