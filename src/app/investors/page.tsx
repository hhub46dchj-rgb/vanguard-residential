import { Wallet } from "lucide-react";
import { FormShell } from "@/components/forms/FormShell";
import { InvestorForm } from "@/components/forms/InvestorForm";

export const metadata = { title: "Investors — Vanguard Residential Acquisitions" };

export default function InvestorsPage() {
  return (
    <FormShell
      badge="Investor Portal"
      title="Join the Investor Network"
      subtitle="Get matched with off-market deals that fit your exact criteria. Tell us what you buy and how — we'll send deals your way."
      icon={Wallet}
      introPoints={[
        "Off-market inventory in your target zones",
        "Deals matched to your strategy & budget",
        "Only verified cash buyers & LOC partners",
      ]}
    >
      <InvestorForm />
    </FormShell>
  );
}
