import { Home, Wallet, Handshake } from "lucide-react";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { PortalCard } from "@/components/home/PortalCard";

export default function HomePage() {
  return (
    <>
      <PublicHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        {/* decorative gradients */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-navy-500/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Real Estate Acquisitions
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Transforming Property Potential into{" "}
              <span className="text-emerald-400">Shared Success.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
              Vanguard Residential Acquisitions connects motivated sellers, cash-buyer
              investors, and joint-venture partners — turning distressed and
              undervalued property into clean, fast, profitable transactions.
            </p>
            <p className="mt-8 text-sm text-navy-300">
              Choose the portal that fits you below to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Three portals */}
      <section className="mx-auto -mt-10 max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <PortalCard
            href="/sellers"
            icon={Home}
            audience="Homeowners"
            title="Sellers"
            description="Looking to sell your property fast, as-is, with no fees or repairs? Tell us about it and get a fair cash offer."
            bullets={[
              "Sell as-is — no repairs, no cleanup",
              "Fast, all-cash offers",
              "Close on your timeline",
            ]}
            cta="Submit your property"
            image="/photos/seller.jpg"
          />
          <PortalCard
            href="/investors"
            icon={Wallet}
            audience="Cash Buyers"
            title="Investors"
            description="Get first access to off-market inventory that matches your exact buying criteria and strategy."
            bullets={[
              "Off-market deals in your target zones",
              "Fix & flip, buy & hold, land dev",
              "Proof of funds verified buyers",
            ]}
            cta="Join the buyer list"
            image="/photos/investors.jpg"
          />
          <PortalCard
            href="/partners"
            icon={Handshake}
            audience="Co-Wholesalers & Companies"
            title="Partners"
            description="Joint-venture with us — whether you need help sourcing supply or moving a contract through our buyer network."
            bullets={[
              "Acquisitions support & sourcing",
              "Dispositions via our buyer network",
              "Mutually profitable JV terms",
            ]}
            cta="Open a partnership"
            image="/photos/JV.jpg"
          />
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-navy-100 bg-navy-50/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-3 sm:px-6">
          {[
            { k: "Fast Closes", v: "Cash offers, flexible timelines" },
            { k: "As-Is Deals", v: "No repairs, no hidden fees" },
            { k: "Trusted Network", v: "Vetted buyers & partners" },
          ].map((item) => (
            <div key={item.k} className="text-center sm:text-left">
              <p className="text-base font-bold text-navy-900">{item.k}</p>
              <p className="mt-1 text-sm text-slate-600">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <PublicFooter />
    </>
  );
}
