# Vanguard Residential Acquisitions

A modern, responsive website for a real-estate wholesaling company, with three
lead-capture portals (**Sellers**, **Investors**, **Co-Wholesalers/Partners**)
and a password-protected operator dashboard to review every submission.

> Slogan — _"Transforming Property Potential into Shared Success."_

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**,
**Tailwind v4**, **NextAuth.js**, **Prisma + SQLite** (dev), and **Nodemailer**
(SMTP). Fully optimized for mobile, tablet, and desktop.

---

## Quick start (local)

> Requires **Node.js 20+**. This project was built and tested on Node 24.

```bash
# 1. Install dependencies
npm install

# 2. Set up the database + seed (creates the admin user + sample leads)
npm run setup

# 3. Run the dev server
npm run dev
```

Open **http://localhost:3000**.

### Default admin login (local only)

```
Email:    admin@vanguard.local
Password: admin123
```

The password `admin123` is created by the seed script because no
`ADMIN_PASSWORD_HASH` is set. **Change it before any real deployment** — see
[Security](#security--production-checklist).

> Email is intentionally **off** in local dev (`SMTP_HOST` is blank). Submitted
> leads are still saved to the database, and the rendered email body is printed
> to the terminal so you can verify formatting. See
> [Connecting email](#connecting-email--northonline-smtp).

---

## Project structure

```
src/
├── app/
│   ├── page.tsx                     # Public landing — 3 portal cards
│   ├── sellers/page.tsx             # Seller multi-step wizard
│   ├── investors/page.tsx           # Investor intake form
│   ├── partners/page.tsx            # Partner two-path form
│   ├── admin/
│   │   ├── login/                   # Public login screen
│   │   └── (dashboard)/             # Gated layout + overview & lead tables
│   │       ├── page.tsx             # Overview (counts + recent activity)
│   │       ├── sellers/[id]/        # Lead detail views
│   │       ├── investors/[id]/
│   │       └── partners/[id]/
│   └── api/auth/[...nextauth]/      # NextAuth route handler
├── auth.ts                          # NextAuth config (credentials provider)
├── middleware.ts                    # Gate: /admin/* requires session
├── components/
│   ├── ui/                          # Button, Field, Card, Badge (design system)
│   ├── brand/                       # VRA logo + wordmark
│   ├── layout/                      # Public header & footer
│   ├── forms/                       # The 3 lead forms + shared shell
│   └── admin/                       # Tables, detail view, sidebar, status select
├── lib/
│   ├── db.ts                        # Prisma client (singleton)
│   ├── email.ts                     # Nodemailer + dev fallback
│   ├── schemas.ts                   # Zod validation (shared client + server)
│   └── types.ts                     # LeadStatus, money/date helpers
└── server/
    ├── actions.ts                   # submitSeller/Investor/PartnerLead
    └── admin-actions.ts             # updateLeadStatus (admin)
prisma/
├── schema.prisma                    # SellerLead, InvestorLead, PartnerLead, User
└── seed.ts                          # Admin user + sample leads
```

---

## What each portal does

| Portal | Who it's for | What happens on submit |
|---|---|---|
| **Sellers** | Homeowners | 3-step wizard (Contact → Property → Details), all spec fields, validated per step |
| **Investors** | Cash buyers | Intake with buying criteria + **Proof of Funds** checkbox |
| **Partners** | Co-wholesalers/companies | Toggle: *Acquisitions* (need supply) vs *Dispositions* (need buyers); fields adapt |

Every submission is:

1. **Validated** with Zod (same rules on client and server).
2. **Saved** to the database.
3. **Emailed** to `LEADS_INBOX` via SMTP (or logged to the console in dev).

---

## Admin dashboard

After login at `/admin/login`, operators get:

- **Overview** — counts per portal + a recent-activity feed, with a "new leads"
  indicator.
- **Sellers / Investors / Partners** — responsive tables (cards on mobile) with
  inline **status** changes (`new → contacted → closed`).
- **Detail view** — full submission with all fields, plus status control.

Access is enforced by NextAuth middleware: every `/admin/*` route (except the
login page) requires a valid session.

---

## Environment variables

All variables live in **`.env`** (gitignored). See `.env.example` for a template.

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | SQLite path in dev (`file:./dev.db`); Postgres URL in prod |
| `NEXTAUTH_SECRET` | Session signing secret — `openssl rand -base64 32` |
| `NEXTAUTH_URL` | App URL (`http://localhost:3000` / prod domain) |
| `ADMIN_EMAIL` | The single operator account email |
| `ADMIN_PASSWORD_HASH` | bcrypt hash of the admin password |
| `ADMIN_NAME` | Display name for the operator |
| `LEADS_INBOX` | Where submitted leads are emailed |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Outbound mailbox |
| `SMTP_FROM` | From-address shown on emails |

---

## Connecting email (northonline SMTP)

Once you have your northonline mailbox credentials, fill these in `.env`:

```env
SMTP_HOST=mail.northonline.com        # your actual host
SMTP_PORT=465                          # 465 (SSL) or 587 (STARTTLS)
SMTP_USER=contact@your-domain.com
SMTP_PASS=your-mailbox-password
SMTP_FROM="Vanguard Residential Acquisitions <contact@your-domain.com>"
LEADS_INBOX=contact@your-domain.com
```

Restart `npm run dev`. The next form submission will send a real email to
`LEADS_INBOX` instead of logging to the console. (No code changes needed.)

---

## Deploying to production

This app is designed to deploy anywhere Node runs. For **northonline**:

1. **Database** — create a Postgres database and set `DATABASE_URL` to its
   connection string. Then run migrations against it:
   ```bash
   npx prisma migrate deploy
   ```
   (The schema is identical — only the provider/URL changes. To switch provider,
   update `prisma/schema.prisma`'s `datasource.provider` to `postgresql`.)

2. **Environment** — set every variable from `.env.example` in your hosting
   panel. Generate a strong `NEXTAUTH_SECRET` and a real `ADMIN_PASSWORD_HASH`.

3. **Build & run**:
   ```bash
   npm run build
   npm start
   ```
   Point your northonline domain at the running server (or use the host's
   Node.js app runner).

---

## Security & production checklist

- [ ] Replace the dev `NEXTAUTH_SECRET` with a fresh `openssl rand -base64 32`.
- [ ] Generate a real admin password hash and set `ADMIN_PASSWORD_HASH`:
  ```bash
  npm run hash-password
  # paste the output into .env
  ```
- [ ] Set `ADMIN_EMAIL` to your real operator address.
- [ ] Fill in SMTP credentials and `LEADS_INBOX`.
- [ ] Switch `DATABASE_URL` to Postgres for production.
- [ ] Point `NEXTAUTH_URL` at your real domain.

---

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server (http://localhost:3000) |
| `npm run build` | Generate Prisma client + production build |
| `npm start` | Run the production server |
| `npm run setup` | `prisma migrate dev` + seed |
| `npm run db:migrate` | Create/apply a migration |
| `npm run db:seed` | Re-seed admin + sample leads |
| `npm run db:studio` | Open Prisma Studio (browse data) |
| `npm run hash-password` | Generate a bcrypt hash for `ADMIN_PASSWORD_HASH` |
| `npm run lint` | ESLint |
```
