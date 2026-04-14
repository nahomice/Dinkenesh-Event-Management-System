# Dinkenesh Event Management System (DEMS)

DEMS is a full-stack platform for managing the complete event lifecycle in Ethiopia, from discovery and ticket purchase to organizer operations, staff check-in, moderation, and payouts.

This repository contains:
- A React + Vite frontend for attendees, organizers, staff, and admins.
- An Express + Prisma backend API powered by PostgreSQL.
- SQL and schema assets for database operations and migration support.

## Core Capabilities

### Attendee
- Register and authenticate.
- Discover and filter events.
- View detailed event pages.
- Purchase tickets and verify payment.
- Manage saved and purchased tickets.

### Organizer
- Submit organizer application and access organizer flows.
- Create and manage events.
- Manage staff assignments.
- Monitor analytics and export CSV reports.
- Track platform fees and payout settings.

### Admin and Staff Operations
- Review organizer approvals.
- Manage categories, events, and users.
-Secure Check-in Engine: High-performance QR scanning and validation logic (POST /api/v1/validate).
- Handle check-in and scanning workflows.
- Process moderation reports and appeals.
- Monitor platform-level operational metrics.

## High-Level Architecture

- Frontend: Browser-based SPA served by Vite build output.
- Backend: REST API with role-aware authorization and validation layers.
- Data: PostgreSQL modeled via Prisma schema.
- Payments: Chapa integration for checkout and verification flows.
- Communication: Template-based transactional email service.

## Tech Stack

### Frontend
- React 19
- Vite 8
- React Router 7
- Tailwind CSS
- Recharts
- Leaflet and React Leaflet
- jsQR

### Backend
- Node.js
- Express 5
- Prisma 7
- PostgreSQL
- JWT authentication
- Nodemailer
- Optional Redis queue hooks

## Repository Structure

```text
.
├─ backend/         # Express API, Prisma schema, controllers, routes, services
├─ frontend/        # React application and static assets
├─ database/        # SQL scripts, merged schema snapshots, and patches
└─ vercel.json      # SPA route rewrite configuration
```

## Prerequisites

- Node.js 18+
- npm 9+
- PostgreSQL 14+
- Redis (optional, only if queue-based flows are enabled)

## Quick Start

### 1) Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run prisma:validate
npm run prisma:generate
npm run dev
```

Backend default URL: http://localhost:5000  
Health endpoint: http://localhost:5000/health

### 2) Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend default URL: http://localhost:5173

## Environment Variables

### Backend Required Variables

At minimum, configure these in backend/.env:
- PORT
- NODE_ENV
- DATABASE_URL
- JWT_SECRET
- JWT_EXPIRE
- FRONTEND_URL
- CORS_ORIGINS

Also configure integrations as needed:
- CHAPA_SECRET_KEY and CHAPA_PUBLIC_KEY
- CHAPA_WEBHOOK_SECRET
- EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_FROM
- REDIS_HOST and REDIS_PORT (if using Redis-backed workflows)

### Frontend Variables

Set these in frontend/.env files as needed:

```env
VITE_API_URL=http://localhost:5000/api
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

## Database and Seed Workflow

From backend:

```bash
npm run prisma:validate
npm run prisma:generate
npm run seed:demo
```

Useful Prisma commands:

```bash
npm run prisma:format
npm run prisma:pull
npm run prisma:studio
```

## Script Reference

### Backend Scripts
- npm run dev
- npm run start
- npm run test
- npm run seed:demo
- npm run prisma:validate
- npm run prisma:generate
- npm run prisma:format
- npm run prisma:pull
- npm run prisma:studio
- npm run prisma:studio:open

### Frontend Scripts
- npm run dev
- npm run build
- npm run seo:sitemap
- npm run lint
- npm run preview

## Deployment Notes

- The repository includes Vercel rewrite rules for SPA routing.
- Ensure the frontend API base URL points to a deployed backend.
- Ensure backend CORS settings include the deployed frontend domain.
- Keep secrets in environment variables only, never in source control.

## Security and Operational Notes

- JWT and role checks are enforced in backend middleware.
- Rate limiting and request validation middleware are available.
- Moderation and reporting flows are implemented in dedicated controllers and routes.

## Contributors

The repository history reflects broad collaboration across frontend, backend, moderation, and operations features.

## License

MIT
