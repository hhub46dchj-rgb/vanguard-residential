import { PublicFooter } from "@/components/layout/PublicFooter";

export default function AboutPage() {
  return (
    <>
      <main className="mx-auto max-w-4xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
          About Vanguard Residential Acquisitions
        </h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700 sm:mt-10 sm:text-lg">
          <p>
            Vanguard Residential Acquisitions is a premier real estate investment and property
            acquisition firm operating statewide across Florida. We serve a dual mission in the
            Florida real estate market: providing distressed or equity-rich homeowners with fast,
            hassle-free property sales, and supplying real estate investors and wholesalers with
            high-potential residential assets.
          </p>

          <p>
            By eliminating the need for traditional real estate agents, costly bank approvals,
            and expensive property repairs, Vanguard Residential Acquisitions streamlines the
            transactional lifecycle. Whether you are a homeowner looking to sell a property
            &ldquo;as-is&rdquo; for cash on an accelerated timeline, or an investor seeking
            strategic residential acquisitions in the Sunshine State, our team delivers
            transparent, reliable, and speed-focused real estate solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:mt-16">
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-navy-900">For Homeowners</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Sell your property fast, as-is, with no fees or repairs. Get a fair cash offer
              and close on your timeline — not the market&apos;s.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-xl font-bold text-navy-900">For Investors</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Access off-market inventory, joint-venture opportunities, and a trusted network
              of vetted buyers across the state of Florida.
            </p>
          </div>
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
