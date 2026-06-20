import { Handshake } from "lucide-react";
import { FormShell } from "@/components/forms/FormShell";
import { PartnerForm } from "@/components/forms/PartnerForm";

export const metadata = { title: "Partners — Vanguard Residential Acquisitions" };

export default function PartnersPage() {
  return (
    <FormShell
      badge="Joint Venture Portal"
      title="Partner With Us"
      subtitle="Whether you need help sourcing deals or moving a contract through our buyer network, let's joint-venture for shared success."
      icon={Handshake}
      introPoints={[
        "Acquisitions: we help you lock up supply",
        "Dispositions: we connect your contract to cash buyers",
        "Transparent, mutually profitable JV terms",
      ]}
    >
      <PartnerForm />
    </FormShell>
  );
}
