import Image from "next/image";
import Link from "next/link";
import { Home, Wallet, Handshake, ArrowRight, Mail } from "lucide-react";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { PortalCard } from "@/components/home/PortalCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden text-white min-h-[80vh] sm:min-h-screen flex items-center">
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-28 lg:py-40">
          <div className="max-w-3xl">
            <AnimateOnScroll>
              <h1 className="mt-6 text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
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
              <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
                <Link
                  href="/sellers"
                  className="pulse-glow inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 sm:text-base"
                >
                  Get a Cash Offer
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
                <Link
                  href="/investors"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base"
                >
                  View Deals
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Three Images Section */}
      <section className="relative bg-black py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl lg:mb-14">Who We Serve</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 stagger-children">
            <AnimateOnScroll delay={0}>
              <div className="relative group">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl lg:h-80 hover-lift">
                  <Image src="/photos/seller.jpg" alt="Seller property" fill className="object-cover transition-all duration-700 group-hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl font-bold text-white mb-1 sm:text-2xl sm:mb-2">Sellers</h3>
                  <p className="text-sm text-gray-300 sm:text-lg">Homeowners looking to sell their properties fast and as-is</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div className="relative group">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl lg:h-80 hover-lift">
                  <Image src="/photos/investors.jpg" alt="Investor portfolio" fill className="object-cover transition-all duration-700 group-hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl font-bold text-white mb-1 sm:text-2xl sm:mb-2">Investors</h3>
                  <p className="text-sm text-gray-300 sm:text-lg">Cash buyers seeking profitable off-market opportunities</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={300}>
              <div className="relative group">
                <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 sm:rounded-3xl lg:h-80 hover-lift">
                  <Image src="/photos/JV.jpg" alt="Joint venture partners" fill className="object-cover transition-all duration-700 group-hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xl font-bold text-white mb-1 sm:text-2xl sm:mb-2">Partners</h3>
                  <p className="text-sm text-gray-300 sm:text-lg">Co-wholesalers and companies seeking JV opportunities</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Three portals */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-4 sm:px-6 sm:pb-20 sm:pt-8">
        <AnimateOnScroll>
          <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">Our Portals</h2>
        </AnimateOnScroll>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:auto-rows-fr stagger-children">
          <AnimateOnScroll delay={0}>
            <PortalCard href="/sellers" icon={Home} audience="Homeowners" title="Sellers" description="Looking to sell your property fast, as-is, with no fees or repairs? Tell us about it and get a fair cash offer." bullets={["Sell as-is — no repairs, no cleanup", "Fast, all-cash offers", "Close on your timeline"]} cta="Submit your property" image="/photos/seller.jpg" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <PortalCard href="/investors" icon={Wallet} audience="Cash Buyers" title="Investors" description="Get first access to off-market inventory that matches your exact buying criteria and strategy." bullets={["Off-market deals in your target zones", "Fix & flip, buy & hold, land dev", "Proof of funds verified buyers"]} cta="Join the buyer list" image="/photos/investors.jpg" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <PortalCard href="/partners" icon={Handshake} audience="JV Partners" title="Partners" description="Joint-venture with us — whether you need help sourcing supply or moving a contract through our buyer network." bullets={["Acquisitions support & sourcing", "Dispositions via our buyer network", "Mutually profitable JV terms"]} cta="Open a partnership" image="/photos/JV.jpg" />
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10 py-12 sm:py-20" style={{ backgroundColor: "rgba(16,185,129,0.05)" }}>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to Get Started?</h2>
            <p className="mt-4 text-gray-400 sm:text-lg">Submit your property today and receive a fair cash offer within 48 hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/sellers" className="pulse-glow inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 sm:text-base">
                Get a Cash Offer <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <a href="mailto:info@vanguardresidentialacquisitions.com" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" /> info@vanguardresidentialacquisitions.com
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <PublicFooter />
    </>
  );
}
