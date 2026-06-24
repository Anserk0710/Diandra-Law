import "dotenv/config";
import bcrypt from "bcryptjs";

import { PrismaPg } from "@prisma/adapter-pg";
import {
  ArticleStatus,
  ContentStatus,
  CtaType,
  PageStatus,
  PrismaClient,
} from "../src/generated/prisma";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
const prisma = new PrismaClient({ adapter });

async function seedAdmin() {
  const email = process.env.SEED_ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.SEED_ADMIN_PASSWORD;

  if (!email) {
    throw new Error("SEED_ADMIN_EMAIL belum diatur di file .env");
  }

  if (!password) {
    throw new Error("SEED_ADMIN_PASSWORD belum diatur di file .env");
  }

  if (password.length < 12) {
    throw new Error(
      "SEED_ADMIN_PASSWORD harus memiliki minimal 12 karakter",
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.admin.upsert({
    where: {
      email,
    },
    update: {
      fullName: "Super Admin",
      passwordHash,
      isActive: true,
    },
    create: {
      email,
      fullName: "Super Admin",
      passwordHash,
      isActive: true,
    },
  });
}

async function seedSiteSettings() {
  const existing =
    await prisma.siteSetting.findFirst({
      select: {
        id: true,
      },
    });

  if (existing) {
    console.log(
      "ℹ️ Site settings sudah ada, seed dilewati.",
    );

    return;
  }

  await prisma.siteSetting.create({
    data: {
      siteName: "Diandra Law",
      siteTagline:
        "Trusted Legal Partner for Business and Individuals",
      whatsappNumber:
        "62859106296666",
      whatsappMessage:
        "Halo, saya ingin konsultasi dengan Diandra Law",
      email: "hello@diandralaw.test",
      phone: "+62 123 4567",
      officeAddress:
        "Jl. Contoh Alamat No. 123, Jakarta, Indonesia",
      mapEmbedUrl:
        "https://www.google.com/maps?q=Jakarta%2C%20Indonesia&output=embed",
      footerText:
        "© 2026 Diandra Law. All rights reserved.",
      primaryColor: "#0F172A",
      secondaryColor: "#D4AF37",
    },
  });
}

async function seedPages() {
  const pages = [
    {
      pageKey: "home",
      title: "Homepage",
      status: PageStatus.published,
      contentJson: {
        hero: {
          title:
            "Firma Hukum Profesional untuk Perusahaan dan Individu",
          description:
            "Pendampingan hukum modern, jelas, dan terpercaya untuk membantu Anda mengambil keputusan dengan yakin.",
          primaryCtaLabel:
            "Konsultasi Sekarang",
          primaryCtaLink: "/kontak",
          secondaryCtaLabel:
            "Lihat Layanan",
          secondaryCtaLink: "/layanan",
        },
        aboutIntro: {
          title:
            "Partner hukum untuk langkah yang lebih pasti",
          description:
            "Kami membantu klien memahami persoalan hukum dengan pendekatan profesional, strategis, dan komunikatif.",
        },
        servicesSection: {
          title: "Layanan hukum unggulan",
          description:
            "Pendampingan untuk kebutuhan perusahaan dan individu.",
        },
        lawyersSection: {
          title:
            "Lawyer yang siap mendampingi Anda",
          description:
            "Kenali profesional hukum yang menangani setiap kebutuhan klien.",
        },
        articlesSection: {
          title: "Wawasan hukum terbaru",
          description:
            "Baca pembahasan hukum yang relevan untuk memahami risiko dan pilihan yang tersedia.",
        },
        contactCta: {
          title:
            "Diskusikan kebutuhan hukum Anda",
          description:
            "Hubungi tim kami untuk mendapatkan gambaran awal mengenai kebutuhan hukum Anda.",
          buttonLabel:
            "Hubungi via WhatsApp",
        },
      },
    },
    {
      pageKey: "about",
      title: "Tentang Kami",
      status: PageStatus.published,
      contentJson: {
        hero: {
          title: "Tentang Diandra Law",
          description:
            "Partner hukum yang mengutamakan kredibilitas, strategi, dan komunikasi.",
        },
        companyProfile: {
          title:
            "Pendamping hukum untuk keputusan yang lebih terarah",
          content:
            "Diandra Law adalah firma hukum yang membantu perusahaan dan individu menghadapi kebutuhan hukum dengan pendekatan terstruktur.\n\nKami percaya bahwa layanan hukum tidak hanya harus akurat, tetapi juga mudah dipahami dan diterapkan oleh klien.",
        },
        vision: {
          title:
            "Menjadi partner hukum yang dipercaya",
          content:
            "Kami membantu klien mengambil keputusan hukum melalui analisis yang teliti, komunikasi yang jelas, dan strategi yang relevan.",
        },
        values: {
          title: "Prinsip dalam bekerja",
          items: [
            "Integritas dalam setiap pendampingan",
            "Ketelitian dalam analisis hukum",
            "Transparansi dalam komunikasi",
            "Komitmen kepada kepentingan klien",
          ],
        },
      },
    },
    {
      pageKey: "retainer",
      title: "Retainer",
      status: PageStatus.published,
      contentJson: {
        hero: {
          title:
            "Pendampingan hukum berkelanjutan untuk bisnis",
          description:
            "Model retainer membantu perusahaan memperoleh dukungan hukum secara konsisten.",
        },
        intro: {
          title:
            "Tim hukum yang dapat diakses saat dibutuhkan",
          content:
            "Layanan retainer dirancang untuk perusahaan yang membutuhkan konsultasi, review kontrak, legal opinion, kepatuhan, dan dukungan hukum rutin.",
        },
        benefits: {
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
          title: "Tahapan kerja retainer",
          items: [
            "Pemetaan kebutuhan hukum bisnis.",
            "Penyusunan ruang lingkup layanan.",
            "Pelaksanaan pendampingan rutin.",
            "Evaluasi kebutuhan secara berkala.",
          ],
        },
      },
    },
    {
      pageKey: "contact",
      title: "Kontak",
      status: PageStatus.published,
      contentJson: {
        hero: {
          title: "Hubungi Diandra Law",
          description:
            "Diskusikan kebutuhan hukum Anda dengan tim kami.",
        },
        officeInfo: {
          title: "Mari mulai percakapan",
          description:
            "Sampaikan gambaran singkat kebutuhan Anda agar kami dapat membantu mengarahkan langkah awal.",
        },
      },
    },
  ];

  for (const page of pages) {
    const existing =
      await prisma.page.findUnique({
        where: {
          pageKey: page.pageKey,
        },
        select: {
          id: true,
        },
      });

    if (existing) {
      console.log(
        `ℹ️ Page ${page.pageKey} sudah ada, seed dilewati.`,
      );

      continue;
    }

    await prisma.page.create({
      data: page,
    });
  }
}

async function seedServices() {
  const services = [
    {
      title: "Hukum Perusahaan",
      slug: "hukum-perusahaan",
      summary:
        "Pendampingan legal untuk pendirian, struktur, tata kelola, dan kebutuhan korporasi.",
      content:
        "Kami membantu perusahaan menyiapkan fondasi hukum yang tertib.\n\nPendampingan dapat mencakup pendirian badan usaha, perubahan perusahaan, tata kelola, legal opinion, dan dokumentasi korporasi.",
      sortOrder: 1,
    },
    {
      title:
        "Penyusunan & Review Kontrak",
      slug:
        "penyusunan-review-kontrak",
      summary:
        "Penyusunan dan pemeriksaan kontrak untuk memperjelas hak, kewajiban, dan risiko.",
      content:
        "Kami membantu menyusun, memeriksa, dan menegosiasikan kontrak komersial.\n\nSetiap kontrak disesuaikan dengan transaksi dan kebutuhan para pihak.",
      sortOrder: 2,
    },
    {
      title: "Ketenagakerjaan",
      slug: "ketenagakerjaan",
      summary:
        "Pendampingan terkait hubungan kerja, kebijakan internal, dan perselisihan.",
      content:
        "Kami membantu perusahaan dalam perjanjian kerja, peraturan perusahaan, tindakan disipliner, PHK, dan perselisihan hubungan industrial.",
      sortOrder: 3,
    },
    {
      title:
        "Litigasi & Penyelesaian Sengketa",
      slug:
        "litigasi-penyelesaian-sengketa",
      summary:
        "Strategi penyelesaian sengketa melalui negosiasi, mediasi, atau pengadilan.",
      content:
        "Kami membantu menilai fakta, bukti, posisi hukum, biaya, waktu, dan risiko sebelum menentukan strategi penyelesaian sengketa.",
      sortOrder: 4,
    },
    {
      title: "Properti & Real Estate",
      slug: "properti-real-estate",
      summary:
        "Pemeriksaan dan pendampingan transaksi serta permasalahan properti.",
      content:
        "Kami membantu melakukan legal review dokumen properti, penyusunan perjanjian, transaksi, dan penyelesaian masalah.",
      sortOrder: 5,
    },
    {
      title: "Perizinan & Kepatuhan",
      slug: "perizinan-kepatuhan",
      summary:
        "Pemetaan izin dan kewajiban agar kegiatan usaha berjalan lebih tertib.",
      content:
        "Kami membantu memetakan kebutuhan perizinan, meninjau kebijakan, mengidentifikasi risiko, dan menyusun langkah perbaikan.",
      sortOrder: 6,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: {
        slug: service.slug,
      },
      update: {
        ...service,
        featured: true,
        status:
          ContentStatus.published,
        faqs: {
          deleteMany: {},
          create: [
            {
              question:
                "Bagaimana proses konsultasi awal?",
              answer:
                "Tim kami akan mempelajari kebutuhan, dokumen, dan tujuan Anda sebelum menentukan ruang lingkup pekerjaan.",
              sortOrder: 1,
            },
          ],
        },
        ctas: {
          deleteMany: {},
          create: [
            {
              label:
                "Konsultasi Layanan Ini",
              link: "#",
              type: CtaType.whatsapp,
              isActive: true,
            },
          ],
        },
      },
      create: {
        ...service,
        featured: true,
        status:
          ContentStatus.published,
        coverImage: null,
        faqs: {
          create: [
            {
              question:
                "Bagaimana proses konsultasi awal?",
              answer:
                "Tim kami akan mempelajari kebutuhan, dokumen, dan tujuan Anda sebelum menentukan ruang lingkup pekerjaan.",
              sortOrder: 1,
            },
          ],
        },
        ctas: {
          create: [
            {
              label:
                "Konsultasi Layanan Ini",
              link: "#",
              type: CtaType.whatsapp,
              isActive: true,
            },
          ],
        },
      },
    });
  }
}

async function seedLawyers() {
  const lawyers = [
    {
      name: "Diana Pratama, S.H.",
      slug: "diana-pratama",
      position: "Managing Partner",
      shortBio:
        "Berfokus pada hukum perusahaan dan kontrak komersial.",
      fullBio:
        "Diana Pratama merupakan Managing Partner Diandra Law dengan fokus praktik pada hukum perusahaan dan kontrak komersial.\n\nIa membantu klien memahami implikasi hukum dari keputusan bisnis dan mengelola risiko secara terstruktur.",
      specialty:
        "Corporate & Commercial Law",
      sortOrder: 1,
    },
    {
      name:
        "Raka Adiwijaya, S.H., M.H.",
      slug: "raka-adiwijaya",
      position: "Partner",
      shortBio:
        "Menangani penyelesaian sengketa dan litigasi perdata.",
      fullBio:
        "Raka Adiwijaya berfokus pada penyelesaian sengketa dan litigasi.\n\nIa mendampingi klien sejak analisis awal, negosiasi, mediasi, hingga persidangan.",
      specialty:
        "Dispute Resolution & Litigation",
      sortOrder: 2,
    },
    {
      name: "Nadia Kusuma, S.H.",
      slug: "nadia-kusuma",
      position: "Senior Associate",
      shortBio:
        "Berfokus pada ketenagakerjaan dan kepatuhan perusahaan.",
      fullBio:
        "Nadia Kusuma membantu perusahaan menyiapkan perjanjian kerja, kebijakan internal, dokumentasi, dan strategi penanganan perselisihan.",
      specialty:
        "Employment & Compliance",
      sortOrder: 3,
    },
  ];

  for (const lawyer of lawyers) {
    await prisma.lawyer.upsert({
      where: {
        slug: lawyer.slug,
      },
      update: {
        ...lawyer,
        photo: null,
        featured: true,
        status:
          ContentStatus.published,
      },
      create: {
        ...lawyer,
        photo: null,
        featured: true,
        status:
          ContentStatus.published,
      },
    });
  }
}

async function seedArticles() {
  const articles = [
    {
      categorySlug:
        "hukum-perusahaan",
      title:
        "Lima Dokumen Dasar yang Perlu Ditata oleh Perusahaan",
      slug:
        "lima-dokumen-dasar-perusahaan",
      excerpt:
        "Dokumentasi yang tertib membantu perusahaan mengurangi risiko dan ketidakjelasan.",
      content:
        "Perusahaan sering berfokus pada penjualan dan operasional, sementara dokumentasi hukum baru diperhatikan ketika masalah muncul.\n\nDokumen pendirian, kewenangan perusahaan, hubungan kerja, kontrak, dan kebijakan internal perlu disimpan serta ditinjau secara berkala.",
      publishedAt:
        new Date("2026-05-20T09:00:00+08:00"),
    },
    {
      categorySlug: "kontrak",
      title:
        "Mengapa Kontrak Tidak Cukup Hanya Menggunakan Template",
      slug:
        "kontrak-tidak-cukup-template",
      excerpt:
        "Kontrak harus mencerminkan transaksi, pembagian risiko, dan kebutuhan para pihak.",
      content:
        "Template dapat menjadi titik awal, tetapi tidak selalu sesuai dengan transaksi sebenarnya.\n\nKontrak harus menjelaskan objek, kewajiban, pembayaran, jangka waktu, pengakhiran, dan penyelesaian sengketa.",
      publishedAt:
        new Date("2026-05-12T09:00:00+08:00"),
    },
    {
      categorySlug:
        "ketenagakerjaan",
      title:
        "Checklist Awal Menangani Perselisihan Hubungan Kerja",
      slug:
        "checklist-perselisihan-hubungan-kerja",
      excerpt:
        "Dokumen dan kronologi perlu ditata sebelum perusahaan mengambil tindakan.",
      content:
        "Perusahaan perlu memeriksa kronologi, perjanjian kerja, peraturan perusahaan, komunikasi, bukti kinerja, dan tindakan sebelumnya.\n\nSetelah itu, perusahaan dapat menilai pilihan penyelesaian yang relevan.",
      publishedAt:
        new Date("2026-04-28T09:00:00+08:00"),
    },
  ];

  for (const item of articles) {
    const {
      categorySlug,
      ...article
    } = item;

    await prisma.article.upsert({
      where: {
        slug: article.slug,
      },
      update: {
        ...article,
        thumbnail: null,
        featured: true,
        status:
          ArticleStatus.published,
        category: {
          connect: {
            slug: categorySlug,
          },
        },
      },
      create: {
        ...article,
        thumbnail: null,
        featured: true,
        status:
          ArticleStatus.published,
        category: {
          connect: {
            slug: categorySlug,
          },
        },
      },
    });
  }
}

async function seedClients() {
  const clients = [
    {
      name: "Arunika Teknologi",
      slug: "arunika-teknologi",
      category: "Teknologi",
      shortDescription:
        "Perusahaan teknologi dengan kebutuhan korporasi dan kontrak.",
    },
    {
      name: "Nusantara Logistik",
      slug: "nusantara-logistik",
      category: "Logistik",
      shortDescription:
        "Penyedia layanan logistik dan distribusi nasional.",
    },
    {
      name: "Cakrawala Properti",
      slug: "cakrawala-properti",
      category: "Properti",
      shortDescription:
        "Pengembang properti dengan kebutuhan transaksi komersial.",
    },
    {
      name:
        "Sentra Retail Indonesia",
      slug:
        "sentra-retail-indonesia",
      category: "Retail",
      shortDescription:
        "Jaringan retail dengan kebutuhan kontrak dan ketenagakerjaan.",
    },
    {
      name:
        "Bumi Pangan Sejahtera",
      slug:
        "bumi-pangan-sejahtera",
      category: "FMCG",
      shortDescription:
        "Perusahaan distribusi pangan dan kebutuhan sehari-hari.",
    },
    {
      name: "Klinik Harmoni",
      slug: "klinik-harmoni",
      category: "Kesehatan",
      shortDescription:
        "Penyedia layanan kesehatan dengan kebutuhan kebijakan internal.",
    },
  ];

  for (
    let index = 0;
    index < clients.length;
    index += 1
  ) {
    const client = clients[index];

    await prisma.client.upsert({
      where: {
        slug: client.slug,
      },
      update: {
        ...client,
        logo: null,
        featured: index < 3,
        sortOrder: index + 1,
        status:
          ContentStatus.published,
      },
      create: {
        ...client,
        logo: null,
        featured: index < 3,
        sortOrder: index + 1,
        status:
          ContentStatus.published,
      },
    });
  }
}

async function seedArticleCategories() {
  const categories = [
    {
      name: "Hukum Perusahaan",
      slug: "hukum-perusahaan",
    },
    {
      name: "Kontrak",
      slug: "kontrak",
    },
    {
      name: "Ketenagakerjaan",
      slug: "ketenagakerjaan",
    },
  ];

  for (const category of categories) {
    await prisma.articleCategory.upsert({
      where: {
        slug: category.slug,
      },
      update: {
        name: category.name,
      },
      create: category,
    });
  }
}

async function seedGlobalSeo() {
  const entityType = "global";
  const entityId = BigInt(0);

  const existing =
    await prisma.seoMeta.findUnique({
      where: {
        entityType_entityId: {
          entityType,
          entityId,
        },
      },
      select: {
        id: true,
      },
    });

  if (existing) {
    console.log(
      "ℹ️ Global SEO sudah ada, seed dilewati.",
    );

    return;
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

  await prisma.seoMeta.create({
    data: {
      entityType,
      entityId,
      metaTitle: "Diandra Law Firm",
      metaDescription:
        "Pendamping hukum profesional untuk perusahaan dan individu.",
      canonicalUrl:
        siteUrl.replace(/\/+$/, ""),
      robots: "index,follow",
      schemaType: "LegalService",
    },
  });
}

async function main() {
  await seedAdmin();
  await seedSiteSettings();
  await seedGlobalSeo();
  await seedPages();
  await seedServices();
  await seedLawyers();
  await seedArticleCategories();
  await seedArticles();
  await seedClients();

  console.log("✅ Seed Awal selesai");
  console.log(
    "Data publik contoh telah dibuat.",
  );
}

main()
  .catch((error) => {
    console.error("❌ Seed gagal");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
