# AgriConnect Backend

Backend for connecting farmers and buyers to trade crops, list cold storage
space, and view real-time mandi (market) price data. Built with Express 5,
Prisma 7, and PostgreSQL (Neon).

## What was fixed from your original project

1. **`req.body` bug** — `authController.js` was destructuring from `body`
   instead of `req.body`, causing a `ReferenceError` on every register call.
2. **Neon pooled connection** — your `.env` used the `-pooler` hostname.
   `@prisma/adapter-pg` manages its own connection pool, and stacking it on
   top of Neon's PgBouncer pooler caused the `Invalid prisma.user.findUnique()
   invocation` errors you were seeing. This project's `.env` now points at
   Neon's **direct** endpoint instead.
3. **Missing `cookie-parser`** — `auth.js` middleware reads `req.cookies.jwt`,
   but nothing was parsing cookies. Added `cookie-parser` and wired it in
   `server.js`.
4. Typos fixed: `producntion` → `production`, `develpoment` → `development`,
   `createdAT` → `createdAt`, `loacation` → `location`.
5. Folder renamed `uitles` → `utils` for consistency.

## Setup

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init   # only if schema/tables aren't already in Neon
npm run dev
```

Server runs on `http://localhost:5001` (from `PORT` in `.env`).

If you still see connection errors, double-check in the Neon dashboard under
**Connect** that "Connection pooling" is **unchecked** for the string you put
in `DATABASE_URL`.

## Project structure

```
src/
  config/db.js          Prisma client + pg driver adapter
  middleware/auth.js     JWT verification (protect) + role guard (authorize)
  middleware/errorHandler.js   asyncHandler wrapper + centralized error responses
  controllers/           business logic per resource
  routes/                Express routers per resource
  utils/generate_token.js
  server.js               app entrypoint
prisma/schema.prisma      DB schema (User, Crops, Offer, Transaction, PriceRecord, StorageListing)
```

## Auth

JWT is set as an `httpOnly` cookie named `jwt` on register/login, and also
returned in the JSON response body if you'd rather use a Bearer token.
Protected routes accept either.

| Method | Route          | Access        | Body |
|--------|----------------|---------------|------|
| POST   | /auth/register | public        | `{ name, email, password, role, location }` — role is `farmer`, `buyer`, or `admin` |
| POST   | /auth/login    | public        | `{ email, password }` |
| POST   | /auth/logout   | public        | — |
| GET    | /auth/me       | logged in     | — |

## Crops (real-time crop listings)

| Method | Route        | Access          | Notes |
|--------|--------------|-----------------|-------|
| GET    | /crops       | public          | filters: `?status=&location=&name=` |
| GET    | /crops/:id   | public          | includes offers |
| GET    | /crops/mine  | farmer          | crops you've listed |
| POST   | /crops       | farmer          | `{ name, quantity, qualityGrade, price, location, photoUrl? }` |
| PUT    | /crops/:id   | owning farmer   | partial update |
| DELETE | /crops/:id   | owning farmer   | |

## Offers

| Method | Route                 | Access        | Notes |
|--------|-----------------------|---------------|-------|
| POST   | /offers               | buyer         | `{ cropId, offerPrice }` |
| GET    | /offers/mine          | buyer         | offers you've made |
| GET    | /offers/received      | farmer        | offers on your crops |
| PUT    | /offers/:id/respond   | owning farmer | `{ status: "accepted" \| "rejected" }` — accepting auto-creates a Transaction and marks the crop `reserved` |

## Transactions

| Method | Route              | Access             | Notes |
|--------|--------------------|--------------------|-------|
| GET    | /transactions/mine | buyer or farmer    | |
| PUT    | /transactions/:id  | buyer or farmer    | `{ status?, paymentStatus? }` — `status: "completed"` marks the crop `sold` |

## Storage listings

| Method | Route         | Access        | Notes |
|--------|---------------|---------------|-------|
| GET    | /storage      | public        | filters: `?location=&isAvailable=true` |
| POST   | /storage      | logged in     | `{ location, capacity, pricePerWeek, cropSuitability }` |
| PUT    | /storage/:id  | owner         | |
| DELETE | /storage/:id  | owner         | |

## Market prices (real-time crop price data)

| Method | Route          | Access  | Notes |
|--------|----------------|---------|-------|
| GET    | /prices        | public  | filters: `?commodity=&market=&state=&limit=` |
| GET    | /prices/latest | public  | latest record per commodity — good for a dashboard ticker |
| POST   | /prices        | admin   | `{ commodity, market, state, minPrice, maxPrice, modalPrice, date }` — intended to be called by a scraper/cron job pulling from a government mandi price API |

## Suggested next steps for your SIH build

- Hook `POST /prices` up to a scheduled job (`node-cron`) pulling from
  data.gov.in's Agmarknet API so price data actually updates in real time.
- Add pagination to `/crops` and `/offers` once listing volume grows.
- Add file upload (e.g. Cloudinary/S3) for `crops.photoUrl` instead of a raw
  URL string.
