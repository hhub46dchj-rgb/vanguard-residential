import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Vanguard Residential Acquisitions",
  description: "Privacy Policy for Vanguard Residential Acquisitions.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 text-gray-300 sm:px-6 sm:py-24">
      <h1 className="mb-8 text-3xl font-bold text-white">Privacy Policy</h1>
      <div className="space-y-6 text-sm leading-relaxed">
        <p><strong>Last updated:</strong> January 2025</p>
        <p>Vanguard Residential Acquisitions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.</p>

        <h2 className="pt-4 text-lg font-bold text-white">Information We Collect</h2>
        <p>We may collect personal information you voluntarily provide, including your name, email address, phone number, and property details when you submit a form on our website.</p>

        <h2 className="pt-4 text-lg font-bold text-white">How We Use Your Information</h2>
        <p>We use your information to respond to your inquiries, provide cash offers, and communicate about real estate transactions. We do not sell or rent your personal information to third parties.</p>

        <h2 className="pt-4 text-lg font-bold text-white">Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

        <h2 className="pt-4 text-lg font-bold text-white">Cookies</h2>
        <p>Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.</p>

        <h2 className="pt-4 text-lg font-bold text-white">Contact Us</h2>
        <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:info@vanguardresidentialacquisitions.com" className="text-emerald-400 hover:underline">info@vanguardresidentialacquisitions.com</a>.</p>
      </div>
    </main>
  );
}
