import Image from "next/image";
import Link from "next/link";
import { Home, Wallet, Handshake, Send, Clock, Shield, FileCheck, Phone, ArrowRight, Star } from "lucide-react";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { PortalCard } from "@/components/home/PortalCard";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const STEPS = [
  {
    icon: Send,
    title: "Submit Your Property",
    desc: "Tell us about your property — no repairs, no photos needed. Takes 2 minutes.",
  },
  {
    icon: FileCheck,
    title: "We Evaluate",
    desc: "Our team analyzes the property and market data to make a fair, competitive cash offer.",
  },
  {
    icon: Clock,
    title: "Close on Your Timeline",
    desc: "Accept your offer and close in as little as 7 days — or on your schedule.",
  },
];

const STATS = [
  { num: "500+", label: "Properties Acquired" },
  { num: "$50M+", label: "In Deals Closed" },
  { num: "48h", label: "Average Offer Time" },
  { num: "100%", label: "Client Satisfaction" },
];

const TESTIMONIALS = [
  {
    name: "Michael R.",
    role: "Homeowner, Tampa",
    text: "They gave me a fair cash offer in 24 hours and closed in 10 days. No repairs, no realtor fees. Highly recommend.",
    stars: 5,
  },
  {
    name: "Sarah L.",
    role: "Real Estate Investor",
    text: "Vanguard consistently brings off-market deals that match my criteria. Professional, fast, and reliable.",
    stars: 5,
  },
  {
    name: "David K.",
    role: "Co-Wholesaler",
    text: "Our JV partnership has been incredibly profitable. They have the buyer network and the speed to move contracts.",
    stars: 5,
  },
];

const TRUST_ITEMS = [
  { icon: Clock, title: "Fast Closes", desc: "Cash offers, flexible timelines" },
  { icon: Shield, title: "As-Is Deals", desc: "No repairs, no hidden fees" },
  { icon: Handshake, title: "Trusted Network", desc: "Vetted buyers & partners" },
];

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

      {/* Stats Strip */}
      <section className="relative border-y border-white/10 bg-emerald-600/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 py-8 sm:grid-cols-4 sm:px-6 sm:py-12">
          {STATS.map((s) => (
            <AnimateOnScroll key={s.label} className="text-center">
              <p className="text-2xl font-bold text-emerald-400 sm:text-3xl lg:text-4xl">{s.num}</p>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">{s.label}</p>
            </AnimateOnScroll>
          ))}
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

      {/* How It Works */}
      <section className="py-12 sm:py-20 lg:py-28" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <AnimateOnScroll>
            <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl">How It Works</h2>
            <p className="mb-12 text-center text-gray-400 sm:text-lg">Three simple steps to close your deal</p>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 stagger-children">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.title} delay={i * 150}>
                  <div className="relative rounded-2xl border border-white/10 p-6 text-center transition-all hover:border-emerald-400/50 hover:bg-white/5 sm:p-8" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 sm:mb-6 sm:h-16 sm:w-16">
                      <Icon className="h-7 w-7 text-emerald-400 sm:h-8 sm:w-8" />
                    </div>
                    <div className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">Step {i + 1}</div>
                    <h3 className="mb-2 text-lg font-bold text-white sm:text-xl">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400 sm:text-base">{step.desc}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
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

      {/* Trust Strip */}
      <section className="border-t border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3 sm:px-6 sm:py-14">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4 text-center hover-lift sm:text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Icon className="h-6 w-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-base font-bold text-white">{item.title}</p>
                  <p className="mt-0.5 text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <AnimateOnScroll>
            <h2 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl">What Our Clients Say</h2>
            <p className="mb-12 text-center text-gray-400 sm:text-lg">Trusted by sellers, investors, and partners across Florida</p>
          </AnimateOnScroll>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3 stagger-children">
            {TESTIMONIALS.map((t, i) => (
              <AnimateOnScroll key={t.name} delay={i * 150}>
                <div className="rounded-2xl border border-white/10 p-6 transition-all hover:border-emerald-400/30 sm:p-8" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
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
              <a href="tel:+12399996818" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 sm:text-base">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" /> (239) 999-6818
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <PublicFooter />
    </>
  );
}
