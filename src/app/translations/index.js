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
      submitBtn: "SEND →",

      infoTitle: "Global Headquarters",
      locationLabel: "LOCATION",
      locationValue: "Komp. Inkopad, Kec. Tajurhalang\nKab. Bogor 16320",
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
};

translations.id = translations.en;

export default translations;

