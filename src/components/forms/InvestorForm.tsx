"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { FormSuccess } from "@/components/forms/FormShell";
import { investorSchema, type InvestorInput } from "@/lib/schemas";
import { submitInvestorLead } from "@/server/actions";

const STRATEGIES = ["Fix & Flip", "Buy & Hold", "Land Development"];

export function InvestorForm() {
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InvestorInput>({
    resolver: zodResolver(investorSchema),
    mode: "onTouched",
  });

  async function onSubmit(data: InvestorInput) {
    try {
      const res = await submitInvestorLead(data);
      if (res.ok) setDone(true);
      else toast.error(res.error);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (done) {
    return (
      <FormSuccess
        title="You're on the list!"
        message="Thanks for joining the buyer network. We'll reach out with deals matching your criteria as they come in."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-navy-900">Contact</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Contact name" htmlFor="contactName" required error={errors.contactName?.message}>
            <Input id="contactName" placeholder="Alex Rivera" aria-invalid={!!errors.contactName} {...register("contactName")} />
          </Field>
          <Field label="Company / entity name" htmlFor="companyName" error={errors.companyName?.message} hint="Optional">
            <Input id="companyName" placeholder="Evergreen Capital LLC" {...register("companyName")} />
          </Field>
          <Field label="Phone number" htmlFor="phone" required error={errors.phone?.message}>
            <Input id="phone" type="tel" placeholder="(555) 123-4567" aria-invalid={!!errors.phone} {...register("phone")} />
          </Field>
          <Field label="Email address" htmlFor="email" required error={errors.email?.message}>
            <Input id="email" type="email" placeholder="alex@company.com" aria-invalid={!!errors.email} {...register("email")} />
          </Field>
        </div>
      </section>

      {/* Buying criteria */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-navy-900">Buying criteria</h2>
        <Field label="Target geographic areas / ZIPs / counties" htmlFor="targetAreas" error={errors.targetAreas?.message} hint="Optional">
          <Textarea id="targetAreas" placeholder="Greater Austin, 78704 / 78745, Travis County, TX" {...register("targetAreas")} />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Max budget per deal ($)" htmlFor="maxBudget" error={errors.maxBudget?.message} hint="Optional">
            <Input id="maxBudget" type="number" min={0} placeholder="500000" inputMode="numeric" {...register("maxBudget")} />
          </Field>
          <Field label="Buying strategy" htmlFor="strategy" error={errors.strategy?.message} hint="Optional">
            <Select id="strategy" defaultValue="" {...register("strategy")}>
              <option value="" disabled>Select…</option>
              {STRATEGIES.map((s) => (<option key={s} value={s}>{s}</option>))}
            </Select>
          </Field>
        </div>
        <Field label="Preferred property types" htmlFor="preferredTypes" error={errors.preferredTypes?.message} hint="Optional">
          <Input id="preferredTypes" placeholder="Single Family, Small Multi-Family, Vacant Land" {...register("preferredTypes")} />
        </Field>
      </section>

      {/* Proof of funds */}
      <section className="space-y-3">
        <label
          className={
            "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors " +
            (errors.proofOfFunds ? "border-red-300 bg-red-50/50" : "border-navy-200 bg-navy-50/40 hover:border-emerald-300")
          }
        >
          <input
            type="checkbox"
            className="mt-0.5 h-5 w-5 rounded border-navy-300 text-emerald-600 focus:ring-emerald-500"
            aria-invalid={!!errors.proofOfFunds}
            {...register("proofOfFunds")}
          />
          <span className="text-sm text-navy-800">
            <span className="font-semibold">I am a cash buyer / have a verified line of credit.</span>
            <span className="mt-0.5 block text-slate-500">Confirming you can close with cash or financing already in place.</span>
          </span>
        </label>
        {errors.proofOfFunds && (
          <p className="text-xs font-medium text-red-600">{errors.proofOfFunds.message}</p>
        )}
      </section>

      <Field label="Anything else we should know?" htmlFor="notes" error={errors.notes?.message} hint="Optional">
        <Textarea id="notes" placeholder="Deal size, timelines, anything specific…" {...register("notes")} />
      </Field>

      <div className="border-t border-navy-100 pt-5">
        <Button type="submit" variant="primary" loading={isSubmitting} className="w-full sm:w-auto">
          Join the buyer list
        </Button>
      </div>
    </form>
  );
}
