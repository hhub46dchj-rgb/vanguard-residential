import { z } from "zod";

/**
 * Validation schemas shared by the client forms and the server actions,
 * so the same rules apply on both ends.
 */

const phone = z
  .string()
  .min(7, "Enter a valid phone number")
  .regex(/^[0-9()+\-\s.]+$/, "Enter a valid phone number");

const email = z.string().min(1, "Email is required").email("Enter a valid email address");

const usState = z
  .string()
  .length(2, "Use the 2-letter state code")
  .regex(/^[A-Za-z]{2}$/, "Use the 2-letter state code")
  .transform((v) => v.toUpperCase());

const zip = z
  .string()
  .min(1, "ZIP code is required")
  .regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code");

const condition = z.enum(["Good", "Needs Repair", "Replace"]).optional();

// ── Seller ────────────────────────────────────────────────────
export const sellerSchema = z.object({
  ownerName: z.string().min(2, "Enter the owner's full name"),
  phone,
  email,
  address: z.string().min(3, "Enter the property address"),
  city: z.string().min(2, "Enter the city"),
  state: usState,
  zip,
  askingPrice: z.coerce
    .number({ message: "Enter a number" })
    .int("Enter a whole dollar amount")
    .min(0, "Must be 0 or more")
    .optional(),
  yearBuilt: z.coerce
    .number({ message: "Enter a year" })
    .int()
    .min(1800, "Enter a valid year")
    .max(new Date().getFullYear() + 1, "Enter a valid year")
    .optional(),
  squareFootage: z.coerce
    .number({ message: "Enter a number" })
    .int()
    .min(0)
    .optional(),
  bedrooms: z.coerce.number({ message: "Enter a number" }).int().min(0).optional(),
  bathrooms: z.coerce.number({ message: "Enter a number" }).min(0).optional(),
  propertyType: z
    .enum(["Single Family", "Multi-Family", "Condo", "Vacant Land"])
    .optional(),
  occupancyStatus: z
    .enum(["Owner Occupied", "Tenant Occupied", "Vacant"])
    .optional(),
  roofAge: condition,
  hvacCondition: condition,
  repairNotes: z.string().max(2000, "Keep notes under 2000 characters").optional().or(z.literal("")),
});
export type SellerInput = z.infer<typeof sellerSchema>;

// ── Investor ──────────────────────────────────────────────────
export const investorSchema = z.object({
  contactName: z.string().min(2, "Enter the contact's name"),
  phone,
  email,
  companyName: z.string().max(120).optional().or(z.literal("")),
  targetAreas: z.string().max(500).optional().or(z.literal("")),
  maxBudget: z.coerce
    .number({ message: "Enter a number" })
    .int()
    .min(0)
    .optional(),
  strategy: z.enum(["Fix & Flip", "Buy & Hold", "Land Development"]).optional(),
  preferredTypes: z.string().max(300).optional().or(z.literal("")),
  proofOfFunds: z.literal(true, {
    errorMap: () => ({ message: "Please confirm your proof of funds to continue" }),
  }),
  notes: z.string().max(2000).optional().or(z.literal("")),
});
export type InvestorInput = z.infer<typeof investorSchema>;

// ── Partner / Co-Wholesaler ───────────────────────────────────
export const partnerSchema = z.object({
  assistanceType: z.enum(["acquisitions", "dispositions"]),
  companyName: z.string().max(120).optional().or(z.literal("")),
  contactName: z.string().min(2, "Enter the contact's name"),
  phone,
  email,
  contextDetails: z
    .string()
    .min(15, "Please add a little more detail (at least 15 characters)")
    .max(3000, "Keep details under 3000 characters"),
});
export type PartnerInput = z.infer<typeof partnerSchema>;
