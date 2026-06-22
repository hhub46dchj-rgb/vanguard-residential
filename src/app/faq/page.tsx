import { PublicFooter } from "@/components/layout/PublicFooter";

const FAQ_ITEMS = [
  {
    q: "What does Vanguard Residential Acquisitions do?",
    a: "Vanguard Residential Acquisitions is a professional real estate acquisition firm that purchases residential properties directly from homeowners and collaborates with real estate investors across the state of Florida. We focus on providing fast, direct property sales without the delays, fees, or complications of the traditional real estate market.",
  },
  {
    q: "Where in Florida does Vanguard Residential Acquisitions buy property?",
    a: "We operate statewide throughout the entire state of Florida. Whether your property is located in major metro areas like Miami, Orlando, Tampa, and Jacksonville, or in smaller rural communities, Vanguard Residential Acquisitions evaluates residential properties in any Florida market.",
  },
  {
    q: "How does the property acquisition process work for homeowners?",
    a: "Our process is designed entirely around speed and convenience. Once you submit your property details through our website, our team conducts a swift market analysis to present a fair offer. If accepted, we coordinate a fast closing timeline — often in a matter of days — allowing you to bypass real estate agent commissions, closing fees, and traditional bank financing delays.",
  },
  {
    q: "Do you buy residential properties in \"as-is\" condition?",
    a: 'Yes. Vanguard Residential Acquisitions purchases homes completely "as-is." Homeowners do not need to clean, paint, or make any costly structural repairs prior to selling. We accept properties facing foreclosure, probate, structural damage, or those requiring heavy remediation.',
  },
  {
    q: "How does Vanguard Residential Acquisitions work with real estate investors and wholesalers?",
    a: "We actively partner with real estate investors, cash buyers, and wholesalers across Florida. We specialize in sourcing off-market residential deals, liquidating portfolio assets, and executing joint-venture acquisition strategies that maximize yield and inventory velocity for our investment partners.",
  },
];

export default function FAQPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>

        <div className="mt-8 divide-y divide-navy-100 sm:mt-10">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="py-6 first:pt-0 last:pb-0 sm:py-8">
              <h2 className="text-lg font-bold text-navy-900 sm:text-xl">
                {item.q}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
