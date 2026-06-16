export const STATIC_PAGE_KEYS = [
  "home",
  "about",
  "retainer",
  "contact",
] as const;

export type StaticPageKey =
  (typeof STATIC_PAGE_KEYS)[number];

export type StaticPageStatus =
  | "draft"
  | "published";

export type HomePageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaLink: string;
    secondaryCtaLabel: string;
    secondaryCtaLink: string;
  };

  focus: {
    eyebrow: string;
    title: string;
    items: string[];
  };

  aboutIntro: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };

  servicesSection: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };

  lawyersSection: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };

  articlesSection: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };

  contactCta: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
    mapTitle: string;
    mapEmptyMessage: string;
  };
};

export type AboutPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };

  companyProfile: {
    eyebrow: string;
    title: string;
    content: string;
  };

  vision: {
    eyebrow: string;
    title: string;
    content: string;
  };

  values: {
    eyebrow: string;
    title: string;
    items: string[];
  };
};

export type RetainerPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };

  intro: {
    eyebrow: string;
    title: string;
    content: string;
  };

  benefits: {
    eyebrow: string;
    title: string;
    items: string[];
  };

  process: {
    eyebrow: string;
    title: string;
    items: string[];
  };
};

export type ContactPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };

  officeInfo: {
    eyebrow: string;
    title: string;
    description: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    whatsappButtonLabel: string;
  };

  map: {
    iframeTitle: string;
    emptyMessage: string;
  };
};

export const HOME_PAGE_DEFAULTS: HomePageContent =
  {
    hero: {
      eyebrow:
        "Pendamping hukum profesional",
      title:
        "Firma Hukum Profesional untuk Perusahaan dan Individu",
      description:
        "Pendampingan hukum modern, jelas, dan terpercaya untuk membantu Anda mengambil keputusan dengan yakin.",
      primaryCtaLabel:
        "Konsultasi Sekarang",
      primaryCtaLink: "whatsapp",
      secondaryCtaLabel:
        "Lihat Layanan",
      secondaryCtaLink: "/layanan",
    },

    focus: {
      eyebrow: "Fokus Kami",
      title:
        "Pendampingan hukum yang terarah",
      items: [
        "Strategi hukum yang mudah dipahami",
        "Pendampingan bisnis dan individu",
        "Komunikasi profesional dan transparan",
        "Solusi sesuai kebutuhan klien",
      ],
    },

    aboutIntro: {
      eyebrow: "Tentang Kami",
      title:
        "Partner hukum untuk langkah yang lebih pasti",
      description:
        "Kami membantu klien memahami persoalan hukum dengan pendekatan profesional, strategis, dan komunikatif.",
      buttonLabel:
        "Mengenal firma kami",
      buttonLink: "/tentang-kami",
    },

    servicesSection: {
      eyebrow: "Layanan",
      title: "Layanan hukum unggulan",
      description:
        "Pendampingan untuk kebutuhan perusahaan dan individu.",
      buttonLabel:
        "Lihat semua layanan",
      buttonLink: "/layanan",
    },

    lawyersSection: {
      eyebrow: "Tim",
      title:
        "Lawyer yang siap mendampingi Anda",
      description:
        "Kenali profesional hukum yang menangani setiap kebutuhan klien.",
      buttonLabel: "Lihat seluruh tim",
      buttonLink: "/tim",
    },

    articlesSection: {
      eyebrow: "Artikel",
      title: "Wawasan hukum terbaru",
      description:
        "Baca pembahasan hukum yang relevan untuk memahami risiko dan pilihan yang tersedia.",
      buttonLabel:
        "Lihat semua artikel",
      buttonLink: "/artikel",
    },

    contactCta: {
      eyebrow: "Konsultasi",
      title:
        "Diskusikan kebutuhan hukum Anda",
      description:
        "Hubungi tim kami untuk mendapatkan gambaran awal mengenai kebutuhan hukum Anda.",
      buttonLabel:
        "Hubungi via WhatsApp",
      buttonLink: "whatsapp",
      mapTitle: "Lokasi kantor",
      mapEmptyMessage:
        "Map belum dikonfigurasi.",
    },
  };

export const ABOUT_PAGE_DEFAULTS: AboutPageContent =
  {
    hero: {
      eyebrow: "Tentang Kami",
      title: "Tentang Diandra Law",
      description:
        "Partner hukum yang mengutamakan kredibilitas, strategi, dan komunikasi.",
      buttonLabel: "Hubungi Kami",
      buttonLink: "/kontak",
    },

    companyProfile: {
      eyebrow: "Profil Firma",
      title:
        "Pendamping hukum untuk keputusan yang lebih terarah",
      content:
        "Diandra Law adalah firma hukum yang membantu perusahaan dan individu menghadapi kebutuhan hukum dengan pendekatan terstruktur.\n\nKami percaya bahwa layanan hukum tidak hanya harus akurat, tetapi juga mudah dipahami dan diterapkan oleh klien.",
    },

    vision: {
      eyebrow: "Visi",
      title:
        "Menjadi partner hukum yang dipercaya",
      content:
        "Kami membantu klien mengambil keputusan hukum melalui analisis yang teliti, komunikasi yang jelas, dan strategi yang relevan.",
    },

    values: {
      eyebrow: "Nilai Kami",
      title: "Prinsip dalam bekerja",
      items: [
        "Integritas dalam setiap pendampingan",
        "Ketelitian dalam analisis hukum",
        "Transparansi dalam komunikasi",
        "Komitmen kepada kepentingan klien",
      ],
    },
  };

export const RETAINER_PAGE_DEFAULTS: RetainerPageContent =
  {
    hero: {
      eyebrow: "Retainer",
      title:
        "Pendampingan hukum berkelanjutan untuk bisnis",
      description:
        "Model retainer membantu perusahaan memperoleh dukungan hukum secara konsisten.",
      buttonLabel:
        "Diskusikan Retainer",
      buttonLink: "/kontak",
    },

    intro: {
      eyebrow: "Model Kerja",
      title:
        "Tim hukum yang dapat diakses saat dibutuhkan",
      content:
        "Layanan retainer dirancang untuk perusahaan yang membutuhkan konsultasi, review kontrak, legal opinion, kepatuhan, dan dukungan hukum rutin.",
    },

    benefits: {
      eyebrow: "Manfaat",
      title:
        "Mengapa memilih layanan retainer",
      items: [
        "Akses konsultasi yang lebih terencana",
        "Pemantauan risiko secara berkala",
        "Dukungan kontrak dan dokumen bisnis",
        "Biaya lebih mudah diproyeksikan",
      ],
    },

    process: {
      eyebrow: "Proses",
      title: "Tahapan kerja retainer",
      items: [
        "Pemetaan kebutuhan hukum bisnis.",
        "Penyusunan ruang lingkup layanan.",
        "Pelaksanaan pendampingan rutin.",
        "Evaluasi kebutuhan secara berkala.",
      ],
    },
  };

export const CONTACT_PAGE_DEFAULTS: ContactPageContent =
  {
    hero: {
      eyebrow: "Kontak",
      title: "Hubungi Diandra Law",
      description:
        "Diskusikan kebutuhan hukum Anda dengan tim kami.",
    },

    officeInfo: {
      eyebrow: "Informasi Kantor",
      title: "Mari mulai percakapan",
      description:
        "Sampaikan gambaran singkat kebutuhan Anda agar kami dapat membantu mengarahkan langkah awal.",
      addressLabel: "Alamat",
      phoneLabel: "Telepon",
      emailLabel: "Email",
      whatsappButtonLabel:
        "Hubungi via WhatsApp",
    },

    map: {
      iframeTitle: "Peta lokasi kantor",
      emptyMessage:
        "Map belum dikonfigurasi.",
    },
  };