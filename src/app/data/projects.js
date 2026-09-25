/**
 * Centralized project data used by both the portfolio list page
 * and individual project detail pages.
 *
 * Each project has:
 *  - slug        : URL-safe identifier (used in /portfolio/[slug])
 *  - translations: per-language content
 */

export const PROJECTS_EN = [
  {
    id: 1,
    slug: "invoice-management",
    category: "startup",
    tag: "Startup",
    status: "completed",
    statusLabel: "Completed",
    date: "Jun 2026 — Sep 2026",
    title: "Invoice Management",
    desc: "Multi-tenant SaaS platform for managing POS subscriptions, tenant billing, and user access — built as the admin backbone for the POSAgilix point-of-sale ecosystem.",
    coverImage: "/screenshots/posAgilix-saas-pos-platform-cover.png",
    screenshots: [
      { src: "/screenshots/posAgilix-saas-pos-platform-dashboard.png", caption: "Admin Dashboard — KPI metrics & tenant growth analytics" },
      { src: "/screenshots/posAgilix-saas-pos-platform-tenant.png", caption: "Tenant Management — subscription plans & status control" },
      { src: "/screenshots/posAgilix-saas-pos-platform-billing.png", caption: "Invoice & Billing — auto-generated invoices with PDF/print support" },
    ],
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Recharts", "Resend"],
    sourceUrl: "#",
    liveUrl: "#",
    overview:
      "Invoice Management is a full-stack SaaS platform designed to power the administrative backbone of the POSAgilix point-of-sale ecosystem. The platform consists of two main parts: the POSAgilix client-facing POS application (used by restaurant and retail tenants) and Agilix Console — a centralized admin portal for managing multi-tenant accounts, subscription billing, user access, and business monitoring. Built for PT Agilix Tech, the system currently serves multiple UMKM businesses across Indonesia.",
    features: [
      "Subscription Lifecycle & Dunning Enforcement Automates tenant status locking (Active/Locked) when subscription plans expire or payments pass due dates to prevent unauthorized service usage.",
      "Multi-Tenant Financial Dashboard Real-time KPI metrics displaying Total Active Tenants, Monthly Recurring Revenue (MRR), Overdue Receivables, and month-over-month growth analytics.",
      "Tenant & Outlet Management Full CRUD administration for onboarding F&B/retail tenants, assigning billing cycles (Monthly/Yearly), and managing multi-outlet quotas.",
      "Dedicated smart-alert panel flagging overdue accounts and failed renewals for immediate follow-up and revenue recovery.",
      "Granular Role-Based Access (RBAC) Multi-level permissions separating Super Admin (platform-wide control) and Tenant Admin (outlet-level view) with isolated data boundaries.",
      "Comprehensive Audit Trail & Compliance Immutable logging of all administrative actions, invoice adjustments, and status changes for financial compliance and accountability.",
    ],
  },
  {
    id: 2,
    slug: "agilix-pos-multi-outlet-cashier-system",
    category: "startup",
    tag: "Startup",
    status: "completed",
    statusLabel: "Completed",
    date: "Jun 2026 — Sep 2026",
    title: "Agilix POS — Multi-Outlet Point-of-Sale System",
    desc: "Full-featured cloud-based POS system for F&B and retail businesses — supporting multi-outlet operations, cashier shift management, real-time sales analytics, inventory tracking, and PSAK-standard financial reporting.",
    coverImage: "/screenshots/agilix-pos-login-kasir.jpg",
    screenshots: [
      { src: "/screenshots/agilix-pos-laporan-penjualan.jpg", caption: "Laporan Penjualan — real-time sales analytics with payment method breakdown" },
      { src: "/screenshots/agilix-pos-laporan-inventori.jpg", caption: "Laporan Inventori & Valuasi Stok — multi-outlet stock valuation with critical alerts" },
      { src: "/screenshots/agilix-pos-laporan-keuangan.jpg", caption: "Laporan Keuangan Standar Akuntansi — PSAK-compliant income statement & balance sheet" },
      { src: "/screenshots/agilix-pos-buka-shift.jpg", caption: "Manajemen Shift Kasir — cashier shift opening with float entry & quick amount selection" },
    ],
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Recharts", "Resend"],
    sourceUrl: "#",
    liveUrl: "#",
    overview:
      "Agilix POS is a cloud-based, multi-outlet point-of-sale system purpose-built for Indonesian F&B and retail businesses. It serves as the tenant-facing counterpart to the POSAgilix SaaS admin platform. Cashiers and store managers use Agilix POS daily to process transactions, open/close shifts, manage menus and inventory, and generate comprehensive business reports — all within a clean, responsive web interface accessible from any device.",
    features: [
      "Multi-Outlet Terminal Management Supports multiple store branches under a single account, with per-outlet cashier access, shift isolation, and consolidated reporting across all locations.",
      "Cashier Shift System Full shift lifecycle with opening float entry, mid-shift transaction tracking, and closing reconciliation — preventing unauthorized transactions outside active shifts.",
      "Real-Time Sales Analytics Dashboard Live KPI cards for Net Sales, Gross Profit, Cash-In, and Transaction Volume, with product performance rankings and payment method breakdowns (QRIS vs Cash).",
      "Inventory & Stock Valuation Tracks raw materials and packaging with real-time stock levels, asset valuation per item, and automatic low-stock alerts flagging critical items for immediate restocking.",
      "PSAK-Standard Financial Reporting Auto-generated Income Statement (Laba Rugi), Balance Sheet (Neraca Keuangan), and Cash Flow Statement compliant with Indonesian PSAK accounting standards, with PDF/print export.",
      "Menu & Table Order Management Full support for dine-in table-based ordering alongside takeaway/delivery, with product variants, bundling, and real-time kitchen status updates.",
    ],
  },
];

/**
 * Get all projects
 */
export function getProjects() {
  return PROJECTS_EN;
}

/**
 * Find a single project by slug
 */
export function getProjectBySlug(slug) {
  return PROJECTS_EN.find((p) => p.slug === slug) || null;
}
