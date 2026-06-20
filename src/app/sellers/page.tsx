import { Home } from "lucide-react";
import { FormShell } from "@/components/forms/FormShell";
import { SellerWizardForm } from "@/components/forms/SellerWizardForm";

export const metadata = { title: "Sellers — Vanguard Residential Acquisitions" };

export default function SellersPage() {
  return (
    <FormShell
      badge="Seller Portal"
      title="Sell Your Property"
      subtitle="Tell us about your property. We'll review the details and reach out with a fair, all-cash offer — usually within 24–48 hours."
      icon={Home}
      introPoints={[
        "No repairs, no cleaning, no agent fees",
        "Fast all-cash offer with flexible closing",
        "Your information stays private and secure",
      ]}
    >
      <SellerWizardForm />
    </FormShell>
  );
}
