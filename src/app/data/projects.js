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
    slug: "posAgilix-saas-pos-platform",
    category: "startup",
    tag: "Startup",
    status: "completed",
    statusLabel: "Completed",
    date: "Jun 2026 — Sep 2026",
    title: "POSAgilix — SaaS POS Management Platform",
    desc: "Multi-tenant SaaS platform for managing POS subscriptions, tenant billing, and user access — built as the admin backbone for the POSAgilix point-of-sale ecosystem.",
    coverImage: "/screenshots/POS-Login.png",
    screenshots: [
      { src: "/screenshots/overview-2.png", caption: "Admin Dashboard — KPI metrics & tenant growth analytics" },
      { src: "/screenshots/overview-3.png", caption: "Tenant Management — subscription plans & status control" },
      { src: "/screenshots/overview-1.png", caption: "Invoice & Billing — auto-generated invoices with PDF/print support" },
    ],
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Recharts", "Resend"],
    sourceUrl: "#",
    liveUrl: "#",
    overview:
      "POSAgilix is a full-stack SaaS platform designed to power the administrative backbone of the POSAgilix point-of-sale ecosystem. The platform consists of two main parts: the POSAgilix client-facing POS application (used by restaurant and retail tenants) and Agilix Console — a centralized admin portal for managing multi-tenant accounts, subscription billing, user access, and business monitoring. Built for PT Agilix Tech, the system currently serves multiple UMKM businesses across Indonesia.",
    features: [
      "Subscription Lifecycle & Dunning Enforcement Automates tenant status locking (Active/Locked) when subscription plans expire or payments pass due dates to prevent unauthorized service usage.",
      "Multi-Tenant Financial Dashboard Real-time KPI metrics displaying Total Active Tenants, Monthly Recurring Revenue (MRR), Overdue Receivables, and month-over-month growth analytics.",
      "Tenant & Outlet Management Full CRUD administration for onboarding F&B/retail tenants, assigning billing cycles (Monthly/Yearly), and managing multi-outlet quotas.",
      "Dedicated smart-alert panel flagging overdue accounts and failed renewals for immediate follow-up and revenue recovery.",
      "Granular Role-Based Access (RBAC) Multi-level permissions separating Super Admin (platform-wide control) and Tenant Admin (outlet-level view) with isolated data boundaries.",
      "Comprehensive Audit Trail & Compliance Immutable logging of all administrative actions, invoice adjustments, and status changes for financial compliance and accountability.",
    ],
  },
];

export const PROJECTS_ID = [
  {
    id: 1,
    slug: "posAgilix-saas-pos-platform",
    category: "startup",
    tag: "Startup",
    status: "completed",
    statusLabel: "Selesai",
    date: "Jun 2026 — Sep 2026",
    title: "POSAgilix — Platform SaaS Manajemen POS",
    desc: "Platform SaaS multi-tenant untuk mengelola langganan POS, penagihan tenant, dan akses pengguna — dibangun sebagai tulang punggung admin ekosistem point-of-sale POSAgilix.",
    coverImage: "/screenshots/Pos_Login.png",
    screenshots: [
      { src: "/screenshots/agilix-dashboard.jpg", caption: "Admin Dashboard — Metrik KPI & analitik pertumbuhan tenant" },
      { src: "/screenshots/agilix-tenant.jpg", caption: "Manajemen Tenant — Paket langganan & kontrol status" },
      { src: "/screenshots/agilix-invoice.jpg", caption: "Invoice & Tagihan — Invoice otomatis dengan dukungan PDF/cetak" },
    ],
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Recharts", "Resend"],
    sourceUrl: "#",
    liveUrl: "#",
    overview:
      "POSAgilix adalah platform SaaS full-stack yang dirancang untuk mendukung tulang punggung administratif ekosistem point-of-sale POSAgilix. Platform ini terdiri dari dua bagian utama: aplikasi POS client-facing POSAgilix (digunakan oleh tenant restoran dan ritel) dan Agilix Console — portal admin terpusat untuk mengelola akun multi-tenant, penagihan langganan, akses pengguna, dan monitoring bisnis. Dibangun untuk PT Agilix Teknologi Indonesia, sistem ini saat ini melayani berbagai bisnis UMKM di seluruh Indonesia.",
    features: [
      "Autentikasi Aman — Login email/password dengan manajemen sesi dan akses berbasis peran (Super Admin vs Tenant Admin)",
      "Dashboard Multi-tenant — KPI card real-time: Total Tenant, Langganan Aktif, Tunggakan dengan tren bulan-ke-bulan",
      "Analitik Pertumbuhan Tenant — Grafik garis yang menunjukkan pertumbuhan akuisisi tenant selama 6 bulan terakhir",
      "Manajemen Tenant — CRUD lengkap untuk akun tenant dengan penugasan paket langganan (Bulanan/Tahunan), jumlah outlet, dan kontrol status (Aktif/Terkunci)",
      "Penegakan Paket Langganan — Penguncian status otomatis saat langganan habis masa berlaku atau pembayaran tertunggak",
      "Invoice & Tagihan — Invoice otomatis (mis. INV-202608-0001) dengan pelacakan status PAID, ekspor print/PDF, dan penanganan pajak PPN",
      "Manajemen Pengguna — Administrasi pengguna per-tenant dengan penugasan peran",
      "Audit Trail — Pencatatan aktivitas lengkap untuk semua tindakan admin demi kepatuhan dan akuntabilitas",
      "Panel Perhatian Klien — Panel peringatan yang menyoroti tenant dengan akun tunggakan yang memerlukan tindakan segera",
      "Pencarian Pintasan Keyboard — Pencarian global Ctrl+K di seluruh invoice, tenant, dan pengguna",
    ],
  },
];

/**
 * Get all projects for a given language
 */
export function getProjects(lang = "en") {
  return lang === "id" ? PROJECTS_ID : PROJECTS_EN;
}

/**
 * Find a single project by slug for a given language
 */
export function getProjectBySlug(slug, lang = "en") {
  return getProjects(lang).find((p) => p.slug === slug) || null;
}
