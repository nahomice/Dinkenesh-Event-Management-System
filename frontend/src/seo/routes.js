export const SITE_URL = "https://dinkenesh-event-management-system.vercel.app";
export const SITE_NAME = "Dinkenesh Event Management System";
export const DEFAULT_DESCRIPTION =
  "Discover events, book secure tickets, and manage event operations with Dinkenesh Event Management System.";
export const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;

export const PRIVATE_ROUTE_PREFIXES = [
  "/admin",
  "/organizer",
  "/staff",
  "/security",
];

export const PRIVATE_ROUTE_PATHS = [
  "/profile",
  "/checkout",
  "/saved-tickets",
  "/my-tickets",
];

export const ROUTE_SEO_MAP = {
  "/": {
    title: "Dinkenesh Event Management System | Event Discovery and Ticketing",
    description:
      "Discover local events, buy tickets securely, and manage end-to-end event operations in one platform.",
    robots: "index, follow",
    sitemap: {
      changefreq: "daily",
      priority: 1.0,
    },
  },
  "/discover": {
    title: "Discover Events | Dinkenesh Event Management System",
    description:
      "Browse and filter events by category, location, and date with a seamless ticket booking experience.",
    robots: "index, follow",
    sitemap: {
      changefreq: "daily",
      priority: 0.9,
    },
  },
  "/about": {
    title: "About DEMS | Dinkenesh Event Management System",
    description:
      "Learn how DEMS supports attendees, organizers, staff, and admins through a modern event operations platform.",
    robots: "index, follow",
    sitemap: {
      changefreq: "monthly",
      priority: 0.6,
    },
  },
  "/features": {
    title: "Platform Features | Dinkenesh Event Management System",
    description:
      "Explore core features including ticketing, analytics, moderation workflows, and operational dashboards.",
    robots: "index, follow",
    sitemap: {
      changefreq: "monthly",
      priority: 0.7,
    },
  },
  "/contact": {
    title: "Contact DEMS | Dinkenesh Event Management System",
    description:
      "Reach the DEMS team for support, partnership, and platform-related inquiries.",
    robots: "index, follow",
    sitemap: {
      changefreq: "monthly",
      priority: 0.6,
    },
  },
  "/help": {
    title: "Help Center | Dinkenesh Event Management System",
    description:
      "Find platform guidance and support resources for account, tickets, and event workflows.",
    robots: "index, follow",
    sitemap: {
      changefreq: "monthly",
      priority: 0.6,
    },
  },
  "/faq": {
    title: "FAQ | Dinkenesh Event Management System",
    description:
      "Read frequently asked questions about tickets, payments, and account management on DEMS.",
    robots: "index, follow",
    sitemap: {
      changefreq: "monthly",
      priority: 0.6,
    },
  },
  "/support": {
    title: "Support | Dinkenesh Event Management System",
    description:
      "Get support for technical issues, account access, and event workflow troubleshooting.",
    robots: "index, follow",
    sitemap: {
      changefreq: "monthly",
      priority: 0.6,
    },
  },
  "/terms": {
    title: "Terms and Conditions | Dinkenesh Event Management System",
    description:
      "Review the terms and conditions for using the Dinkenesh Event Management System platform.",
    robots: "index, follow",
    sitemap: {
      changefreq: "yearly",
      priority: 0.4,
    },
  },
  "/privacy": {
    title: "Privacy Policy | Dinkenesh Event Management System",
    description:
      "Understand how DEMS collects, uses, and protects personal data across the platform.",
    robots: "index, follow",
    sitemap: {
      changefreq: "yearly",
      priority: 0.4,
    },
  },
  "/refund": {
    title: "Refund Policy | Dinkenesh Event Management System",
    description:
      "Review refund eligibility and processing policy for event ticket purchases on DEMS.",
    robots: "index, follow",
    sitemap: {
      changefreq: "yearly",
      priority: 0.4,
    },
  },
  "/login": {
    title: "Login | Dinkenesh Event Management System",
    description: "Secure sign-in portal for attendees, organizers, staff, and admins.",
    robots: "noindex, nofollow",
  },
  "/signup": {
    title: "Create Account | Dinkenesh Event Management System",
    description: "Create an account to discover events and manage your event journey.",
    robots: "noindex, nofollow",
  },
  "/organizer/signup": {
    title: "Organizer Application | Dinkenesh Event Management System",
    description:
      "Apply as an organizer to publish events and manage operations on DEMS.",
    robots: "noindex, nofollow",
  },
};
