import Image from "next/image";
import { Home, Wallet, Handshake } from "lucide-react";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { PortalCard } from "@/components/home/PortalCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-blue-900/30" />
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl animate-pulse" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-36 lg:py-44">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-emerald-500/60 bg-emerald-500/30 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-emerald-300 shadow-xl backdrop-blur-sm">
              ✨ Real Estate Acquisitions
            </span>
            <h1 className="mt-10 text-6xl font-bold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
              Transforming Property Potential into{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">Shared Success.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-gray-300">
              Vanguard Residential Acquisitions connects motivated sellers, cash-buyer
              investors, and joint-venture partners — turning distressed and
              undervalued property into clean, fast, profitable transactions.
            </p>
            <p className="mt-12 text-lg text-gray-400">
              Choose the portal that fits you below to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Three Images Section */}
      <section className="relative bg-black py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Seller Image */}
            <div className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/photos/seller.jpg"
                  alt="Seller property"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">Sellers</h3>
                <p className="text-gray-300 text-lg">Homeowners looking to sell their properties fast and as-is</p>
              </div>
            </div>

            {/* Investors Image */}
            <div className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/photos/investors.jpg"
                  alt="Investor portfolio"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">Investors</h3>
                <p className="text-gray-300 text-lg">Cash buyers and institutional investors seeking profitable opportunities</p>
              </div>
            </div>

            {/* Partners Image */}
            <div className="relative group">
              <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/photos/JV.jpg"
                  alt="Joint venture partners"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">Partners</h3>
                <p className="text-gray-300 text-lg">Co-wholesalers and companies seeking joint venture opportunities</p>
              </div>
            </div>
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
