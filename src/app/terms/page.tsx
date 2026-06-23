import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Vanguard Residential Acquisitions",
  description: "Terms of Service for Vanguard Residential Acquisitions.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 text-gray-300 sm:px-6 sm:py-24">
      <h1 className="mb-8 text-3xl font-bold text-white">Terms of Service</h1>
      <div className="space-y-6 text-sm leading-relaxed">
        <p><strong>Last updated:</strong> January 2025</p>
        <p>Welcome to Vanguard Residential Acquisitions. By accessing or using our website, you agree to these Terms of Service.</p>

        <h2 className="pt-4 text-lg font-bold text-white">Use of Website</h2>
        <p>You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use the site for any fraudulent or harmful purpose.</p>

        <h2 className="pt-4 text-lg font-bold text-white">No Guarantee of Offers</h2>
        <p>Submitting a property through our forms does not guarantee a cash offer. All offers are subject to property evaluation, market conditions, and our sole discretion.</p>

        <h2 className="pt-4 text-lg font-bold text-white">Intellectual Property</h2>
        <p>All content on this website, including text, images, logos, and design, is the property of Vanguard Residential Acquisitions and is protected by copyright law.</p>

        <h2 className="pt-4 text-lg font-bold text-white">Limitation of Liability</h2>
        <p>Vanguard Residential Acquisitions shall not be held liable for any damages arising from the use of this website or reliance on information provided herein.</p>

        <h2 className="pt-4 text-lg font-bold text-white">Contact Us</h2>
        <p>For questions about these Terms, contact us at <a href="mailto:info@vanguardresidentialacquisitions.com" className="text-emerald-400 hover:underline">info@vanguardresidentialacquisitions.com</a>.</p>
      </div>
    </main>
  );
}
