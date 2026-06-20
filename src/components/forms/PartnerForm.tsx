"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Building2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { FormSuccess } from "@/components/forms/FormShell";
import { partnerSchema, type PartnerInput } from "@/lib/schemas";
import { submitPartnerLead } from "@/server/actions";

type AssistanceType = "acquisitions" | "dispositions";

const PATHS: { id: AssistanceType; title: string; desc: string }[] = [
  {
    id: "acquisitions",
    title: "Help with Acquisitions",
    desc: "You need supply. We help you source and lock up deals in a target market.",
  },
  {
    id: "dispositions",
    title: "Help with Dispositions",
    desc: "You have a contract / equitable interest. We plug it into our buyer network.",
  },
];

export function PartnerForm() {
  const [assistanceType, setAssistanceType] = useState<AssistanceType>("acquisitions");
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<PartnerInput>({
    resolver: zodResolver(partnerSchema),
    defaultValues: { assistanceType: "acquisitions" },
    mode: "onTouched",
  });

  function selectPath(id: AssistanceType) {
    setAssistanceType(id);
    setValue("assistanceType", id, { shouldValidate: true });
  }

  async function onSubmit(data: PartnerInput) {
    try {
      const res = await submitPartnerLead(data);
      if (res.ok) setDone(true);
      else toast.error(res.error);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (done) {
    return (
      <FormSuccess
        title="Partnership request received!"
        message="Thanks for reaching out. We'll review your details and get back to you to discuss the opportunity."
      />
    );
  }

  const contextLabel =
    assistanceType === "dispositions"
      ? "Details of the contract / property you have under equitable interest"
      : "Market / area you need help sourcing in";

  const contextPlaceholder =
    assistanceType === "dispositions"
      ? "e.g. 3/2 SFR under contract at 1428 Maple Ridge Dr, Austin TX 78704. Asking $385k, ARV ~$560k. Need a cash buyer within 10 days."
      : "e.g. We need help sourcing off-market SFR deals in the 78704 / 78745 ZIP codes, Travis County TX, under $300k.";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Path toggle */}
      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-navy-900">How can we help?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {PATHS.map((p) => {
            const active = assistanceType === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => selectPath(p.id)}
                aria-pressed={active}
                className={
                  "rounded-xl border p-4 text-left transition-all " +
                  (active
                    ? "border-emerald-500 bg-emerald-50 ring-2 ring-emerald-500/20"
                    : "border-navy-200 bg-white hover:border-navy-300")
                }
              >
                <span className="flex items-center gap-2">
                  <Building2 className={"h-4 w-4 " + (active ? "text-emerald-600" : "text-slate-400")} />
                  <span className={"text-sm font-bold " + (active ? "text-emerald-700" : "text-navy-900")}>
                    {p.title}
                  </span>
                </span>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{p.desc}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Business / contact */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-navy-900">Business & contact</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Company name" htmlFor="companyName" error={errors.companyName?.message} hint="Optional">
            <Input id="companyName" placeholder="Summit Wholesale Co." {...register("companyName")} />
          </Field>
          <Field label="Contact person" htmlFor="contactName" required error={errors.contactName?.message}>
            <Input id="contactName" placeholder="Marcus Bell" aria-invalid={!!errors.contactName} {...register("contactName")} />
          </Field>
          <Field label="Phone number" htmlFor="phone" required error={errors.phone?.message}>
            <Input id="phone" type="tel" placeholder="(555) 123-4567" aria-invalid={!!errors.phone} {...register("phone")} />
          </Field>
          <Field label="Email address" htmlFor="email" required error={errors.email?.message}>
            <Input id="email" type="email" placeholder="marcus@company.com" aria-invalid={!!errors.email} {...register("email")} />
          </Field>
        </div>
      </section>

      {/* Context (dynamic) */}
      <section className="space-y-4">
        <Field
          label={contextLabel}
          htmlFor="contextDetails"
          required
          error={errors.contextDetails?.message}
        >
          <Textarea id="contextDetails" placeholder={contextPlaceholder} className="min-h-[140px]" {...register("contextDetails")} />
        </Field>
      </section>

      <div className="border-t border-navy-100 pt-5">
        <Button type="submit" variant="primary" loading={isSubmitting} className="w-full sm:w-auto">
          <Send className="h-4 w-4" /> Send partnership request
        </Button>
      </div>
    </form>
  );
}
