import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export function PublicFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-navy-100 bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
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

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-navy-100">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@vanguardresidentialacquisitions.com" className="transition-colors hover:text-emerald-300">
                  info@vanguardresidentialacquisitions.com
                </a>
              </li>
              <li>
                <a href="tel:+12399996818" className="transition-colors hover:text-emerald-300">
                  (239) 999-6818
                </a>
              </li>
              <li className="text-navy-300">
                7901 4th St N, STE 300<br />
                St. Petersburg, FL 33702
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 border-t border-navy-800 pt-6 text-xs text-navy-400 sm:mt-10">
          © {year} Vanguard Residential Acquisitions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
