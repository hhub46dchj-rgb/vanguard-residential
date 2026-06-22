import Image from "next/image";
import { Home, Wallet, Handshake } from "lucide-react";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { PortalCard } from "@/components/home/PortalCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white">
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-28 lg:py-40">
          <div className="max-w-3xl">
            <AnimateOnScroll>
              <h1 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl animate-fade-in-up">
                Transforming Property Potential into{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">Shared Success.</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:mt-8 md:text-xl lg:mt-10">
                Vanguard Residential Acquisitions connects motivated sellers, cash-buyer
                investors, and joint-venture partners — turning distressed and
                undervalued property into clean, fast, profitable transactions.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={400}>
              <p className="mt-6 text-sm text-gray-400 sm:text-base md:mt-8 md:text-lg lg:mt-10">
                Choose the portal that fits you below to get started.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Three Images Section */}
      <section className="relative bg-black py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 stagger-children">
            {/* Seller Image */}
            <AnimateOnScroll delay={0}>
              <div className="relative group">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl lg:h-80 hover-lift">
                  <Image
                    src="/photos/seller.jpg"
                    alt="Seller property"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl font-bold text-white mb-1 sm:text-2xl sm:mb-2">Sellers</h3>
                  <p className="text-sm text-gray-300 sm:text-lg">Homeowners looking to sell their properties fast and as-is</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Investors Image */}
            <AnimateOnScroll delay={150}>
              <div className="relative group">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl lg:h-80 hover-lift">
                  <Image
                    src="/photos/investors.jpg"
                    alt="Investor portfolio"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl font-bold text-white mb-1 sm:text-2xl sm:mb-2">Investors</h3>
                  <p className="text-sm text-gray-300 sm:text-lg">Cash buyers and institutional investors seeking profitable opportunities</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Partners Image */}
            <AnimateOnScroll delay={300}>
              <div className="relative group">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl lg:h-80 hover-lift">
                  <Image
                    src="/photos/JV.jpg"
                    alt="Joint venture partners"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:shadow-3xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl font-bold text-white mb-1 sm:text-2xl sm:mb-2">Partners</h3>
                  <p className="text-sm text-gray-300 sm:text-lg">Co-wholesalers and companies seeking joint venture opportunities</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Three portals */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-4 sm:px-6 sm:pb-20 sm:pt-8">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:auto-rows-fr stagger-children">
          <AnimateOnScroll delay={0}>
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
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
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
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <PortalCard
              href="/partners"
              icon={Handshake}
              audience="JV Partners"
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
          </AnimateOnScroll>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:gap-6 sm:grid-cols-3 sm:px-6 sm:py-12">
          {[
            { k: "Fast Closes", v: "Cash offers, flexible timelines" },
            { k: "As-Is Deals", v: "No repairs, no hidden fees" },
            { k: "Trusted Network", v: "Vetted buyers & partners" },
          ].map((item) => (
            <div key={item.k} className="text-center hover-lift sm:text-left">
              <p className="text-base font-bold text-white">{item.k}</p>
              <p className="mt-1 text-sm text-gray-400">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <PublicFooter />
    </>
  );
}
