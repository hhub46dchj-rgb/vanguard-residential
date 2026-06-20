import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

/**
 * Seed script.
 * - Idempotently creates the operator admin user from env (hashing
 *   ADMIN_PASSWORD_HASH only if it's currently blank, using "admin123").
 * - Adds a few sample leads so the dashboard isn't empty on first run.
 *
 * Run with:  npm run db:seed   (also wired into `npm run setup`)
 */

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL ?? "admin@vanguard.local";
  const name = process.env.ADMIN_NAME ?? "Vanguard Operator";

  // Resolve a password hash: use env hash if provided, else hash "admin123".
  let passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  if (!passwordHash) {
    passwordHash = await bcrypt.hash("admin123", 10);
    console.log("ℹ️  No ADMIN_PASSWORD_HASH set — seeded with temporary password: admin123");
    console.log("   Change this immediately in production (see README → hash-password).");
  }

  await prisma.user.upsert({
    where: { email },
    update: { name, passwordHash },
    create: { email, name, passwordHash, role: "admin" },
  });
  console.log(`✓ Admin user ready: ${email}`);

  // Sample leads — only if the table is empty, so re-running won't duplicate.
  const sellerCount = await prisma.sellerLead.count();
  if (sellerCount === 0) {
    await prisma.sellerLead.createMany({
      data: [
        {
          ownerName: "Margaret Chen",
          phone: "(555) 201-4471",
          email: "m.chen@example.com",
          address: "1428 Maple Ridge Dr",
          city: "Austin",
          state: "TX",
          zip: "78704",
          askingPrice: 385000,
          yearBuilt: 1992,
          squareFootage: 1840,
          bedrooms: 3,
          bathrooms: 2,
          propertyType: "Single Family",
          occupancyStatus: "Owner Occupied",
          roofAge: "Good",
          hvacCondition: "Needs Repair",
          repairNotes: "HVAC unit is ~14 years old. Otherwise well maintained.",
          status: "new",
        },
        {
          ownerName: "Derek Olson",
          phone: "(555) 778-1290",
          email: "derek.o@example.com",
          address: "904 Sandhill Ct",
          city: "Tampa",
          state: "FL",
          zip: "33609",
          askingPrice: 240000,
          yearBuilt: 1978,
          squareFootage: 1420,
          bedrooms: 2,
          bathrooms: 1.5,
          propertyType: "Single Family",
          occupancyStatus: "Tenant Occupied",
          roofAge: "Needs Repair",
          hvacCondition: "Replace",
          repairNotes: "Tenant in place through end of lease. Roof near end of life.",
          status: "contacted",
        },
      ],
    });
    console.log("✓ Sample seller leads added");
  }

  const investorCount = await prisma.investorLead.count();
  if (investorCount === 0) {
    await prisma.investorLead.createMany({
      data: [
        {
          contactName: "Priya Nadkarni",
          phone: "(555) 330-8842",
          email: "priya@evergreen-capital.example",
          companyName: "Evergreen Capital LLC",
          targetAreas: "Greater Austin (78704, 78745) & Round Rock, TX",
          maxBudget: 500000,
          strategy: "Fix & Flip",
          preferredTypes: "Single Family, Small Multi-Family",
          proofOfFunds: true,
          status: "new",
        },
      ],
    });
    console.log("✓ Sample investor lead added");
  }

  const partnerCount = await prisma.partnerLead.count();
  if (partnerCount === 0) {
    await prisma.partnerLead.createMany({
      data: [
        {
          assistanceType: "dispositions",
          companyName: "Summit Wholesale Co.",
          contactName: "Marcus Bell",
          phone: "(555) 661-2207",
          email: "marcus@summit-wholesale.example",
          contextDetails:
            "We have a 3/2 under contract at 1428 Maple Ridge Dr, Austin TX 78704. Asking $385k, ARV ~$560k. Need a cash buyer in the next 10 days.",
          status: "new",
        },
      ],
    });
    console.log("✓ Sample partner lead added");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
