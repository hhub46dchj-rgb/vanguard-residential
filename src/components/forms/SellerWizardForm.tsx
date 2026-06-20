"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { FormSuccess } from "@/components/forms/FormShell";
import { sellerSchema, type SellerInput } from "@/lib/schemas";
import { submitSellerLead } from "@/server/actions";

const STEPS = ["Contact", "Property", "Details"] as const;

const PROPERTY_TYPES = ["Single Family", "Multi-Family", "Condo", "Vacant Land"];
const OCCUPANCY = ["Owner Occupied", "Tenant Occupied", "Vacant"];
const CONDITIONS = ["Good", "Needs Repair", "Replace"];

export function SellerWizardForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<SellerInput>({
    resolver: zodResolver(sellerSchema),
    mode: "onTouched",
  });

  // Fields validated per step so users can't advance with bad data.
  const stepFields: (keyof SellerInput)[][] = [
    ["ownerName", "phone", "email"],
    ["address", "city", "state", "zip", "askingPrice"],
    ["yearBuilt", "squareFootage", "bedrooms", "bathrooms", "propertyType", "occupancyStatus", "roofAge", "hvacCondition", "repairNotes"],
  ];

  async function next() {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function onSubmit(data: SellerInput) {
    setSubmitting(true);
    try {
      const res = await submitSellerLead(data);
      if (res.ok) {
        setDone(true);
      } else {
        toast.error(res.error);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <FormSuccess
        title="Property received!"
        message="Thanks for submitting your property. Our team will review the details and reach out with a cash offer shortly."
      />
    );
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      {/* Progress */}
      <div>
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
          <span>
            Step {step + 1} of {STEPS.length}: {STEPS[step]}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-navy-100">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex gap-1.5">
          {STEPS.map((s, i) => (
            <span
              key={s}
              className={
                "flex h-6 items-center gap-1 rounded-full px-2.5 text-[11px] font-semibold " +
                (i < step
                  ? "bg-emerald-100 text-emerald-700"
                  : i === step
                    ? "bg-navy-800 text-white"
                    : "bg-slate-100 text-slate-400")
              }
            >
              {i < step && <Check className="h-3 w-3" />}
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Step 1 — Contact */}
      {step === 0 && (
        <div className="space-y-4">
          <Field label="Full name of owner" htmlFor="ownerName" required error={errors.ownerName?.message}>
            <Input id="ownerName" placeholder="Jane Doe" aria-invalid={!!errors.ownerName} {...register("ownerName")} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone number" htmlFor="phone" required error={errors.phone?.message}>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" aria-invalid={!!errors.phone} {...register("phone")} />
            </Field>
            <Field label="Email address" htmlFor="email" required error={errors.email?.message}>
              <Input id="email" type="email" placeholder="jane@email.com" aria-invalid={!!errors.email} {...register("email")} />
            </Field>
          </div>
        </div>
      )}

      {/* Step 2 — Property */}
      {step === 1 && (
        <div className="space-y-4">
          <Field label="Property address" htmlFor="address" required error={errors.address?.message}>
            <Input id="address" placeholder="123 Main St" aria-invalid={!!errors.address} {...register("address")} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-[1fr_1fr_0.7fr_0.7fr]">
            <Field label="City" htmlFor="city" required error={errors.city?.message}>
              <Input id="city" placeholder="Austin" aria-invalid={!!errors.city} {...register("city")} />
            </Field>
            <Field label="State" htmlFor="state" required error={errors.state?.message}>
              <Input id="state" placeholder="TX" maxLength={2} aria-invalid={!!errors.state} {...register("state")} />
            </Field>
            <Field label="ZIP" htmlFor="zip" required error={errors.zip?.message}>
              <Input id="zip" placeholder="78704" inputMode="numeric" aria-invalid={!!errors.zip} {...register("zip")} />
            </Field>
            <Field label="Asking price ($)" htmlFor="askingPrice" error={errors.askingPrice?.message} hint="Optional">
              <Input id="askingPrice" type="number" min={0} placeholder="385000" inputMode="numeric" aria-invalid={!!errors.askingPrice} {...register("askingPrice")} />
            </Field>
          </div>
        </div>
      )}

      {/* Step 3 — Details */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Year built" htmlFor="yearBuilt" error={errors.yearBuilt?.message} hint="Optional">
              <Input id="yearBuilt" type="number" placeholder="1992" {...register("yearBuilt")} />
            </Field>
            <Field label="Square footage" htmlFor="squareFootage" error={errors.squareFootage?.message} hint="Optional">
              <Input id="squareFootage" type="number" placeholder="1840" {...register("squareFootage")} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Beds" htmlFor="bedrooms" error={errors.bedrooms?.message} hint="Optional">
                <Input id="bedrooms" type="number" placeholder="3" {...register("bedrooms")} />
              </Field>
              <Field label="Baths" htmlFor="bathrooms" error={errors.bathrooms?.message} hint="Optional">
                <Input id="bathrooms" type="number" step="0.5" placeholder="2" {...register("bathrooms")} />
              </Field>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Property type" htmlFor="propertyType" error={errors.propertyType?.message} hint="Optional">
              <Select id="propertyType" defaultValue="" {...register("propertyType")}>
                <option value="" disabled>Select…</option>
                {PROPERTY_TYPES.map((t) => (<option key={t} value={t}>{t}</option>))}
              </Select>
            </Field>
            <Field label="Occupancy status" htmlFor="occupancyStatus" error={errors.occupancyStatus?.message} hint="Optional">
              <Select id="occupancyStatus" defaultValue="" {...register("occupancyStatus")}>
                <option value="" disabled>Select…</option>
                {OCCUPANCY.map((t) => (<option key={t} value={t}>{t}</option>))}
              </Select>
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Roof age / condition" htmlFor="roofAge" error={errors.roofAge?.message} hint="Optional">
              <Select id="roofAge" defaultValue="" {...register("roofAge")}>
                <option value="" disabled>Select…</option>
                {CONDITIONS.map((t) => (<option key={t} value={t}>{t}</option>))}
              </Select>
            </Field>
            <Field label="HVAC condition" htmlFor="hvacCondition" error={errors.hvacCondition?.message} hint="Optional">
              <Select id="hvacCondition" defaultValue="" {...register("hvacCondition")}>
                <option value="" disabled>Select…</option>
                {CONDITIONS.map((t) => (<option key={t} value={t}>{t}</option>))}
              </Select>
            </Field>
          </div>
          <Field label="Estimated repair needs / additional notes" htmlFor="repairNotes" error={errors.repairNotes?.message} hint="Optional — anything else we should know">
            <Textarea id="repairNotes" placeholder="e.g. Needs new roof, kitchen dated, foundation repaired in 2019…" {...register("repairNotes")} />
          </Field>
        </div>
      )}

      {/* Nav */}
      <div className="flex items-center justify-between gap-3 border-t border-navy-100 pt-5">
        <Button type="button" variant="ghost" size="md" onClick={back} disabled={step === 0}>
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>

        {step < STEPS.length - 1 ? (
          <Button type="button" variant="primary" onClick={next}>
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" variant="primary" loading={submitting}>
            Submit property
          </Button>
        )}
      </div>
    </form>
  );
}
