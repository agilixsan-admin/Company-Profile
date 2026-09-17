const translations = {
  en: {
    // Header / Nav
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About Us",
      contact: "Contact Us",
      toggleMenu: "Toggle navigation menu",
    },

    // Footer
    footer: {
      desc: "Premium web solutions and enterprise IT architecture for the modern digital landscape.",
      copyright: "© 2026 Agilix IT Solutions. All rights reserved.",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      connect: "Connect",
      support: "Support",
      faq: "Milestones",
    },

    // Language toggle
    langToggle: {
      label: "ID",
      ariaLabel: "Switch to Indonesian",
    },

    // Home page
    home: {
      heroBadge: "Next-Gen IT Solutions",
      heroTitle: "Transform Your Business with",
      heroTitleHighlight: "Premium Web Solutions",
      heroDesc:
        "Agilix engineers high-performance digital ecosystems. We blend corporate reliability with cutting-edge innovation to deliver scalable solutions for tech-forward enterprises.",
      heroStart: "Ready to Start Your Project? →",
      heroPortfolio: "View Portfolio",

      engineeringTitle: "Engineering the Future",
      engineeringDesc:
        "At Agilix, our mission is to empower organizations through illuminated precision and robust architecture. We build resilient, high-speed digital foundations that allow your technical vision to scale without friction.",

      featuredServicesTitle: "Featured Services",
      featuredServicesSubtitle: "Architecting scalable solutions across the stack.",
      allServices: "All Services →",

      service1Title: "Web Development",
      service1Desc:
        "High-performance web applications built on modern frameworks, ensuring rapid load times and seamless enterprise integration.",
      service1f1: "Full-Stack Architecture",
      service1f2: "API Development",

      service2Title: "UI/UX Design",
      service2Desc:
        "Sleek, user-centric interfaces employing minimal friction pathways and cutting-edge visual design systems.",
      service2f1: "Design Systems",
      service2f2: "Interactive Prototyping",

      service3Title: "Cloud Solutions",
      service3Desc:
        "Scalable, secure cloud infrastructure deployments optimizing operational efficiency and data resilience.",
      service3f1: "AWS / Azure Migration",
      service3f2: "DevOps Pipelines",
    },

    // Services page
    services: {
      badge: "CAPABILITIES",
      title: "Engineering",
      titleHighlight: "Digital Solutions",
      titleSuffix: "for Modern Enterprise.",
      subtitle:
        "We deliver high-performance architecture, robust consulting, and meticulous support to ensure your technology infrastructure scales with your ambition.",

      webDevTitle: "Custom Web Development",
      webDevDesc:
        "Bespoke architectures built for speed, security, and scalability. Complex web applications to high-conversion e-commerce engines.",
      webDevItem1: "E-commerce Platforms",
      webDevItem2: "Progressive Web Apps",
      webDevItem3: "Corporate Profiles",
      webDevItem4: "API Integrations",

      consultTitle: "IT Consulting",
      consultDesc:
        "Strategic guidance to align your technology stack with business objectives, optimizing for ROI and future growth.",
      consultLink: "DISCOVER MORE →",

      supportTitle: "Maintenance & Support",
      supportDesc:
        "Proactive monitoring, security patching, and dedicated support to ensure zero downtime and optimal performance.",
      supportLink: "VIEW SLA OPTIONS →",

      methodologyTitle: "Our Services",
      methodologySubtitle:
        "A structured, transparent approach to delivering precision engineering.",

      step1Number: "01",
      step1Title: "Consult",
      step1Desc: "Requirement gathering & technical scoping.",

      step2Number: "02",
      step2Title: "Design",
      step2Desc: "Architecture planning & UI/UX prototyping.",

      step3Number: "03",
      step3Title: "Develop",
      step3Desc: "Agile engineering & rigorous testing.",

      step4Number: "04",
      step4Title: "Launch",
      step4Desc: "Deployment & continuous monitoring.",
    },

    // Portfolio page
    portfolio: {
      title: "Our",
      titleHighlight: "Projects",
      subtitle:
        "A curated selection of high-performance digital solutions — from web apps and APIs to mobile platforms.",

      filterAll: "All",
      filterEcommerce: "E-commerce",
      filterCorporate: "Corporate",
      filterStartup: "Startup",

      sourceLabel: "Source",
      liveLabel: "Live Demo",

      ctaTitle: "Have a project in mind?",
      ctaDesc: "Let's work together to build something great. Our team is ready to engineer your vision.",
      ctaBtn: "Start a Project →",

      projects: [
        {
          id: 1,
          category: "corporate",
          tag: "Corporate",
          status: "completed",
          statusLabel: "Completed",
          title: "Nexus Trade Platform — RESTful API Backend",
          desc: "Enterprise API backend built with Node.js & TypeScript, powering 100+ endpoints for a large-scale plantation management system.",
          techs: ["Node.js", "TypeScript", "Express.js", "Docker", "PostgreSQL", "Redis"],
          sourceUrl: "#",
          liveUrl: null,
        },
        {
          id: 2,
          category: "corporate",
          tag: "Corporate",
          status: "inProgress",
          statusLabel: "In Progress",
          title: "Aegis Data Mesh — Dashboard & Operational Management",
          desc: "Frontend dashboard built with Next.js 14 + TypeScript + Material UI, managing complex operational workflows with real-time analytics.",
          techs: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "PostgreSQL"],
          sourceUrl: "#",
          liveUrl: null,
        },
        {
          id: 3,
          category: "startup",
          tag: "Startup",
          status: "completed",
          statusLabel: "Completed",
          title: "Veloce MVP — SaaS Wedding Invitation Platform",
          desc: "SaaS platform for creating digital wedding invitations. Users can build custom invitation pages using URL-based configurations.",
          techs: ["React", "Next.js", "Tailwind CSS", "Prisma", "MySQL"],
          sourceUrl: "#",
          liveUrl: "#",
        },
        {
          id: 4,
          category: "startup",
          tag: "Startup",
          status: "completed",
          statusLabel: "Completed",
          title: "Lumina Cart — Travel Landing Page",
          desc: "Headless multi-tenant travel landing page built from Figma HTML, featuring smooth scroll animations and interactive destination sliders.",
          techs: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "Stripe"],
          sourceUrl: "#",
          liveUrl: "#",
        },
        {
          id: 5,
          category: "startup",
          tag: "Startup",
          status: "completed",
          statusLabel: "Completed",
          title: "Mobile — Palm Oil Plantation Management App",
          desc: "Cross-platform mobile app for field-level plantation management, supporting offline mode and real-time data synchronization.",
          techs: ["React Native", "TypeScript", "Redux", "PostgreSQL", "AWS"],
          sourceUrl: "#",
          liveUrl: null,
        },
        {
          id: 6,
          category: "corporate",
          tag: "Corporate",
          status: "completed",
          statusLabel: "Completed",
          title: "ProjectFlow — Project & Ticket Management System",
          desc: "Full-featured project management platform built on Laravel 12 + Filament, empowering teams to manage tasks, milestones, and clients.",
          techs: ["Laravel", "PHP", "MySQL", "Livewire", "Docker"],
          sourceUrl: "#",
          liveUrl: "#",
        },
      ],
    },

    // About page
    about: {
      badge: "ABOUT AGILIX",
      title: "Pioneering the",
      titleHighlight: "Digital Frontier",
      titleSuffix: "with Precision.",
      subtitle:
        "We are an elite collective of software engineers, system architects, and digital innovators building high-grade enterprise platforms.",
      missionTitle: "Our Mission",
      missionDesc:
        "To transform business vision into resilient, scalable digital infrastructure through rigorous software engineering, transparent communication, and clean architecture.",
      visionTitle: "Our Vision",
      visionDesc:
        "To be the foremost technology partner for tech-forward enterprises seeking robust modernization, high performance, and uncompromising quality.",
      value1Title: "Architectural Integrity",
      value1Desc:
        "Every system component and line of code is engineered for speed, high availability, and effortless long-term maintainability.",
      value2Title: "Milestone-Driven Delivery",
      value2Desc:
        "Transparent project roadmap, predictable timelines, and structured verification phases from requirements to production deployment.",
      value3Title: "Enterprise-Grade Security",
      value3Desc:
        "Security-first development approach adhering to modern encryption standards, regular auditing, and zero-trust architectural principles.",
    },

    // Contact page
    contact: {
      badge: "INITIALIZE CONNECTION",
      title: "Let's Build the",
      titleHighlight: "Future",
      titleSuffix: "Together",
      subtitle:
        "Reach out to our team of engineering experts. Whether you have a specific project in mind or need strategic technical guidance, we are ready to execute.",

      formTitle: "Secure Message Protocol",
      labelName: "FULL NAME",
      placeholderName: "John Doe",
      labelEmail: "CORPORATE EMAIL",
      placeholderEmail: "john@company.com",
      labelSubject: "SUBJECT",
      placeholderSubject: "System Integration Inquiry",
      labelMessage: "MESSAGE PAYLOAD",
      placeholderMessage: "Detail your technical requirements here...",
      submitBtn: "TRANSMIT DATA →",

      infoTitle: "Global Headquarters",
      locationLabel: "LOCATION",
      locationValue: "10101 Binary Blvd, Suite 256\nSilicon Valley, CA 94025",
      emailLabel: "ELECTRONIC MAIL",
      emailValue: "agilixsan@gmail.com",
      phoneLabel: "COMM LINK",
      phoneValue: "0895324435347",

      milestoneBadge: "DEVELOPMENT ROADMAP",
      milestoneTitle: "Project Execution",
      milestoneHighlight: "Milestones",
      milestoneSubtitle:
        "Our structured delivery lifecycle and transparent payment schedule from requirement gathering to official go-live.",
      milestones: [
        {
          step: "01",
          title: "Gathering Requirement",
          payment: null,
          desc: "In-depth discovery session to understand your business objectives, target audience, technical scope, and functional specifications.",
        },
        {
          step: "02",
          title: "Lock Requirement",
          payment: null,
          desc: "Finalizing and locking project scope, system architecture blueprint, deliverables timeline, and contract sign-off.",
        },
        {
          step: "03",
          title: "Down Payment",
          payment: "30%",
          desc: "Initial commitment payment to allocate dedicated engineering squads and start technical sprint preparation.",
        },
        {
          step: "04",
          title: "Start Development",
          payment: null,
          desc: "Active development sprints covering frontend UI implementation, backend services, API integrations, and database schemas.",
        },
        {
          step: "05",
          title: "Internal Testing",
          payment: null,
          desc: "Comprehensive QA testing, unit testing, performance benchmarks, bug fixing, and security vulnerability scans.",
        },
        {
          step: "06",
          title: "User Acceptance Testing (UAT)",
          payment: "20%",
          desc: "Staging deployment for client review, feature validation against locked requirements, and milestone sign-off.",
        },
        {
          step: "07",
          title: "Production Acceptance Testing (PAT)",
          payment: "20%",
          desc: "End-to-end rehearsal in a production-like environment, data migration checks, and final client acceptance approval.",
        },
        {
          step: "08",
          title: "Go Live",
          payment: "30%",
          desc: "Official deployment to production servers, live domain launch, final payment settlement, and warranty support handover.",
        },
      ],
    },
  },

  id: {
    // Header / Nav
    nav: {
      home: "Beranda",
      services: "Layanan",
      portfolio: "Portofolio",
      about: "Tentang Kami",
      contact: "Hubungi Kami",
      toggleMenu: "Buka/tutup menu navigasi",
    },

    // Footer
    footer: {
      desc: "Solusi web premium dan arsitektur IT enterprise untuk lanskap digital modern.",
      copyright: "© 2026 Agilix IT Solutions. Semua hak dilindungi.",
      legal: "Hukum",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
      cookies: "Kebijakan Cookie",
      connect: "Terhubung",
      support: "Dukungan",
      faq: "Milestone",
    },

    // Language toggle
    langToggle: {
      label: "EN",
      ariaLabel: "Ganti ke Bahasa Inggris",
    },

    // Home page
    home: {
      heroBadge: "Solusi IT Generasi Berikutnya",
      heroTitle: "Transformasi Bisnis Anda dengan",
      heroTitleHighlight: "Solusi Web Premium",
      heroDesc:
        "Agilix membangun ekosistem digital berperforma tinggi. Kami memadukan keandalan korporat dengan inovasi mutakhir untuk menghadirkan solusi skalabel bagi perusahaan berbasis teknologi.",
      heroStart: "Siap Memulai Proyek Anda? →",
      heroPortfolio: "Lihat Portofolio",

      engineeringTitle: "Merekayasa Masa Depan",
      engineeringDesc:
        "Di Agilix, misi kami adalah memberdayakan organisasi melalui presisi yang tercerahkan dan arsitektur yang kokoh. Kami membangun fondasi digital yang tangguh dan berkecepatan tinggi agar visi teknis Anda dapat berkembang tanpa hambatan.",

      featuredServicesTitle: "Layanan Unggulan",
      featuredServicesSubtitle: "Merancang solusi skalabel di seluruh tumpukan teknologi.",
      allServices: "Semua Layanan →",

      service1Title: "Pengembangan Web",
      service1Desc:
        "Aplikasi web berperforma tinggi yang dibangun di atas framework modern, memastikan waktu muat cepat dan integrasi enterprise yang mulus.",
      service1f1: "Arsitektur Full-Stack",
      service1f2: "Pengembangan API",

      service2Title: "Desain UI/UX",
      service2Desc:
        "Antarmuka yang ramping dan berpusat pada pengguna dengan jalur minim gesekan dan sistem desain visual mutakhir.",
      service2f1: "Sistem Desain",
      service2f2: "Prototipe Interaktif",

      service3Title: "Solusi Cloud",
      service3Desc:
        "Penerapan infrastruktur cloud yang skalabel dan aman untuk mengoptimalkan efisiensi operasional dan ketahanan data.",
      service3f1: "Migrasi AWS / Azure",
      service3f2: "Pipeline DevOps",
    },

    // Services page
    services: {
      badge: "KEMAMPUAN",
      title: "Merekayasa",
      titleHighlight: "Solusi Digital",
      titleSuffix: "untuk Enterprise Modern.",
      subtitle:
        "Kami menghadirkan arsitektur berperforma tinggi, konsultasi yang kokoh, dan dukungan yang teliti untuk memastikan infrastruktur teknologi Anda berkembang seiring ambisi Anda.",

      webDevTitle: "Pengembangan Web Kustom",
      webDevDesc:
        "Arsitektur bespoke yang dibangun untuk kecepatan, keamanan, dan skalabilitas. Dari aplikasi web kompleks hingga mesin e-commerce berkonversi tinggi.",
      webDevItem1: "Platform E-commerce",
      webDevItem2: "Progressive Web Apps",
      webDevItem3: "Profil Korporat",
      webDevItem4: "Integrasi API",

      consultTitle: "Konsultasi IT",
      consultDesc:
        "Panduan strategis untuk menyelaraskan tumpukan teknologi Anda dengan tujuan bisnis, mengoptimalkan ROI dan pertumbuhan di masa depan.",
      consultLink: "PELAJARI LEBIH LANJUT →",

      supportTitle: "Pemeliharaan & Dukungan",
      supportDesc:
        "Pemantauan proaktif, patching keamanan, dan dukungan khusus untuk memastikan tanpa downtime dan performa optimal.",
      supportLink: "LIHAT OPSI SLA →",

      methodologyTitle: "Layanan Kami",
      methodologySubtitle:
        "Pendekatan terstruktur dan transparan untuk menghadirkan rekayasa yang presisi.",

      step1Number: "01",
      step1Title: "Konsultasi",
      step1Desc: "Pengumpulan kebutuhan & lingkup teknis.",

      step2Number: "02",
      step2Title: "Desain",
      step2Desc: "Perencanaan arsitektur & prototipe UI/UX.",

      step3Number: "03",
      step3Title: "Kembangkan",
      step3Desc: "Rekayasa Agile & pengujian ketat.",

      step4Number: "04",
      step4Title: "Rilis",
      step4Desc: "Deployment & pemantauan berkelanjutan.",
    },

    // Portfolio page
    portfolio: {
      title: "Proyek",
      titleHighlight: "Kami",
      subtitle:
        "Koleksi solusi digital pilihan kami — dari aplikasi web dan API hingga platform mobile berkinerja tinggi.",

      filterAll: "Semua",
      filterEcommerce: "E-commerce",
      filterCorporate: "Korporat",
      filterStartup: "Startup",

      sourceLabel: "Source",
      liveLabel: "Live Demo",

      ctaTitle: "Punya proyek yang ingin dikerjakan?",
      ctaDesc: "Mari bekerja sama untuk membangun sesuatu yang luar biasa. Tim kami siap merekayasa visi Anda.",
      ctaBtn: "Mulai Proyek →",

      projects: [
        {
          id: 1,
          category: "corporate",
          tag: "Korporat",
          status: "completed",
          statusLabel: "Selesai",
          title: "Nexus Trade Platform — RESTful API Backend",
          desc: "Backend API enterprise dengan Node.js & TypeScript, menyediakan 100+ endpoint untuk sistem manajemen perkebunan skala besar.",
          techs: ["Node.js", "TypeScript", "Express.js", "Docker", "PostgreSQL", "Redis"],
          sourceUrl: "#",
          liveUrl: null,
        },
        {
          id: 2,
          category: "corporate",
          tag: "Korporat",
          status: "inProgress",
          statusLabel: "Sedang Berjalan",
          title: "Aegis Data Mesh — Dashboard & Manajemen Operasional",
          desc: "Dashboard frontend dibangun dengan Next.js 14 + TypeScript + Material UI, mengelola alur kerja operasional dengan analitik real-time.",
          techs: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "PostgreSQL"],
          sourceUrl: "#",
          liveUrl: null,
        },
        {
          id: 3,
          category: "startup",
          tag: "Startup",
          status: "completed",
          statusLabel: "Selesai",
          title: "Veloce MVP — Platform Undangan Pernikahan Digital SaaS",
          desc: "Platform SaaS untuk membuat undangan pernikahan digital. Pengguna dapat membuat halaman undangan kustom berbasis URL.",
          techs: ["React", "Next.js", "Tailwind CSS", "Prisma", "MySQL"],
          sourceUrl: "#",
          liveUrl: "#",
        },
        {
          id: 4,
          category: "startup",
          tag: "Startup",
          status: "completed",
          statusLabel: "Selesai",
          title: "Lumina Cart — Travel Landing Page",
          desc: "Landing page travel multi-tenant headless dari desain Figma, menampilkan animasi scroll halus dan slider destinasi interaktif.",
          techs: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "Stripe"],
          sourceUrl: "#",
          liveUrl: "#",
        },
        {
          id: 5,
          category: "startup",
          tag: "Startup",
          status: "completed",
          statusLabel: "Selesai",
          title: "Mobile — Aplikasi Manajemen Perkebunan Kelapa Sawit",
          desc: "Aplikasi mobile lintas platform untuk manajemen lapangan perkebunan, mendukung mode offline dan sinkronisasi data real-time.",
          techs: ["React Native", "TypeScript", "Redux", "PostgreSQL", "AWS"],
          sourceUrl: "#",
          liveUrl: null,
        },
        {
          id: 6,
          category: "corporate",
          tag: "Korporat",
          status: "completed",
          statusLabel: "Selesai",
          title: "ProjectFlow — Sistem Manajemen Proyek & Tiket",
          desc: "Platform manajemen proyek lengkap dengan Laravel 12 + Filament, memungkinkan tim mengelola tugas, milestone, dan klien.",
          techs: ["Laravel", "PHP", "MySQL", "Livewire", "Docker"],
          sourceUrl: "#",
          liveUrl: "#",
        },
      ],
    },

    // About page
    about: {
      badge: "TENTANG AGILIX",
      title: "Memelopori",
      titleHighlight: "Batas Digital",
      titleSuffix: "dengan Presisi.",
      subtitle:
        "Kami adalah kolektif arsitek sistem, insinyur perangkat lunak, dan inovator digital yang berdedikasi membangun platform enterprise berkelas tinggi.",
      missionTitle: "Misi Kami",
      missionDesc:
        "Mentransformasi visi bisnis menjadi infrastruktur digital yang tangguh dan terukur melalui rekayasa perangkat lunak yang teliti, komunikasi transparan, dan arsitektur bersih.",
      visionTitle: "Visi Kami",
      visionDesc:
        "Menjadi mitra teknologi terdepan bagi perusahaan yang menginginkan modernisasi digital yang kokoh, performa tinggi, dan tanpa kompromi kualitas.",
      value1Title: "Integritas Arsitektur",
      value1Desc:
        "Setiap komponen sistem dan baris kode dirancang untuk kecepatan, ketersediaan tinggi, serta kemudahan pemeliharaan jangka panjang.",
      value2Title: "Pengiriman Berbasis Milestone",
      value2Desc:
        "Roadmap proyek yang transparan, jadwal terprediksi, dan tahapan verifikasi terstruktur mulai dari kebutuhan hingga live produksi.",
      value3Title: "Keamanan Tingkat Enterprise",
      value3Desc:
        "Pendekatan pengembangan dengan prioritas keamanan, mematuhi standar enkripsi modern, audit rutin, dan prinsip arsitektur zero-trust.",
    },

    // Contact page
    contact: {
      badge: "INISIALISASI KONEKSI",
      title: "Mari Membangun",
      titleHighlight: "Masa Depan",
      titleSuffix: "Bersama",
      subtitle:
        "Hubungi tim ahli engineering kami. Baik Anda memiliki proyek spesifik atau membutuhkan panduan teknis strategis, kami siap beraksi.",

      formTitle: "Protokol Pesan Aman",
      labelName: "NAMA LENGKAP",
      placeholderName: "Budi Santoso",
      labelEmail: "EMAIL PERUSAHAAN",
      placeholderEmail: "budi@perusahaan.com",
      labelSubject: "SUBJEK",
      placeholderSubject: "Pertanyaan Integrasi Sistem",
      labelMessage: "ISI PESAN",
      placeholderMessage: "Jelaskan kebutuhan teknis Anda di sini...",
      submitBtn: "KIRIM PESAN →",

      infoTitle: "Kantor Pusat Global",
      locationLabel: "LOKASI",
      locationValue: "10101 Binary Blvd, Suite 256\nSilicon Valley, CA 94025",
      emailLabel: "SURAT ELEKTRONIK",
      emailValue: "hello@agilix.io",
      phoneLabel: "SALURAN KOMUNIKASI",
      phoneValue: "+1 (555) 019-2048",

      milestoneBadge: "ROADMAP PENGEMBANGAN",
      milestoneTitle: "Tahapan Eksekusi",
      milestoneHighlight: "Milestone Proyek",
      milestoneSubtitle:
        "Alur kerja pengiriman proyek terstruktur dan jadwal termin pembayaran transparan mulai dari gathering requirement hingga go-live resmi.",
      milestones: [
        {
          step: "01",
          title: "Gathering Requirement",
          payment: null,
          desc: "Sesi identifikasi mendalam untuk memahami tujuan bisnis, target pengguna, cakupan teknis, dan spesifikasi fungsional.",
        },
        {
          step: "02",
          title: "Lock Requirement",
          payment: null,
          desc: "Finalisasi dan penguncian ruang lingkup proyek, blueprint arsitektur sistem, jadwal deliverables, dan penandatanganan kontrak.",
        },
        {
          step: "03",
          title: "Down Payment",
          payment: "30%",
          desc: "Pembayaran komitmen awal (DP) untuk alokasi tim engineer dan persiapan sprint teknis pengerjaan.",
        },
        {
          step: "04",
          title: "Start Development",
          payment: null,
          desc: "Siklus aktif pengembangan sistem: implementasi UI frontend, arsitektur backend, integrasi API, dan konfigurasi database.",
        },
        {
          step: "05",
          title: "Internal Testing",
          payment: null,
          desc: "Pengujian internal QA menyeluruh, uji performa & beban, perbaikan bug, dan pemindaian celah keamanan sistem.",
        },
        {
          step: "06",
          title: "User Acceptance Testing (UAT)",
          payment: "20%",
          desc: "Penerapan di lingkungan staging untuk peninjauan langsung oleh klien, validasi fitur sesuai requirement, dan persetujuan tahap UAT.",
        },
        {
          step: "07",
          title: "Production Acceptance Testing (PAT)",
          payment: "20%",
          desc: "Pengujian menyeluruh pada lingkungan pra-produksi, verifikasi integritas data, simulasi live, dan persetujuan rilis (PAT).",
        },
        {
          step: "08",
          title: "Go Live",
          payment: "30%",
          desc: "Peluncuran resmi ke server live produksi, pelunasan pembayaran akhir, serah terima sistem, dan transisi ke masa garansi & maintenance.",
        },
      ],
    },
  },
};

export default translations;
