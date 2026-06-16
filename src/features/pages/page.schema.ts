import { z } from "zod";

import { isCmsLinkReference } from "@/lib/cms/cms-utils";

const requiredText = (
  label: string,
  maximum = 5000,
) =>
  z
    .string()
    .trim()
    .min(1, `${label} wajib diisi`)
    .max(
      maximum,
      `${label} maksimal ${maximum} karakter`,
    );

const cmsLinkSchema = requiredText(
  "Link",
  500,
).refine(
  isCmsLinkReference,
  "Gunakan whatsapp, URL http/https, mailto:, tel:, #anchor, atau path yang diawali /",
);

const statusSchema = z.enum([
  "draft",
  "published",
]);

const listItemSchema = z.object({
  value: requiredText("Isi item", 500),
});

const basePageSchema = {
  internalTitle: requiredText(
    "Judul internal",
    255,
  ),
  status: statusSchema,
};

export const homePageFormSchema =
  z.object({
    ...basePageSchema,

    hero: z.object({
      eyebrow: requiredText(
        "Eyebrow hero",
        191,
      ),
      title: requiredText(
        "Judul hero",
        500,
      ),
      description: requiredText(
        "Deskripsi hero",
        3000,
      ),
      primaryCtaLabel: requiredText(
        "Label CTA utama",
        191,
      ),
      primaryCtaLink: cmsLinkSchema,
      secondaryCtaLabel: requiredText(
        "Label CTA kedua",
        191,
      ),
      secondaryCtaLink: cmsLinkSchema,
    }),

    focus: z.object({
      eyebrow: requiredText(
        "Eyebrow fokus",
        191,
      ),
      title: requiredText(
        "Judul fokus",
        500,
      ),
    }),

    focusItems: z
      .array(listItemSchema)
      .min(1, "Minimal satu fokus layanan")
      .max(12, "Maksimal 12 fokus layanan"),

    aboutIntro: z.object({
      eyebrow: requiredText(
        "Eyebrow tentang",
        191,
      ),
      title: requiredText(
        "Judul tentang",
        500,
      ),
      description: requiredText(
        "Deskripsi tentang",
        3000,
      ),
      buttonLabel: requiredText(
        "Label tombol tentang",
        191,
      ),
      buttonLink: cmsLinkSchema,
    }),

    servicesSection: z.object({
      eyebrow: requiredText(
        "Eyebrow layanan",
        191,
      ),
      title: requiredText(
        "Judul layanan",
        500,
      ),
      description: requiredText(
        "Deskripsi layanan",
        3000,
      ),
      buttonLabel: requiredText(
        "Label tombol layanan",
        191,
      ),
      buttonLink: cmsLinkSchema,
    }),

    lawyersSection: z.object({
      eyebrow: requiredText(
        "Eyebrow tim",
        191,
      ),
      title: requiredText(
        "Judul tim",
        500,
      ),
      description: requiredText(
        "Deskripsi tim",
        3000,
      ),
      buttonLabel: requiredText(
        "Label tombol tim",
        191,
      ),
      buttonLink: cmsLinkSchema,
    }),

    articlesSection: z.object({
      eyebrow: requiredText(
        "Eyebrow artikel",
        191,
      ),
      title: requiredText(
        "Judul artikel",
        500,
      ),
      description: requiredText(
        "Deskripsi artikel",
        3000,
      ),
      buttonLabel: requiredText(
        "Label tombol artikel",
        191,
      ),
      buttonLink: cmsLinkSchema,
    }),

    contactCta: z.object({
      eyebrow: requiredText(
        "Eyebrow CTA",
        191,
      ),
      title: requiredText(
        "Judul CTA",
        500,
      ),
      description: requiredText(
        "Deskripsi CTA",
        3000,
      ),
      buttonLabel: requiredText(
        "Label tombol CTA",
        191,
      ),
      buttonLink: cmsLinkSchema,
      mapTitle: requiredText(
        "Judul map",
        191,
      ),
      mapEmptyMessage: requiredText(
        "Pesan map kosong",
        500,
      ),
    }),
  });

export const aboutPageFormSchema =
  z.object({
    ...basePageSchema,

    hero: z.object({
      eyebrow: requiredText(
        "Eyebrow hero",
        191,
      ),
      title: requiredText(
        "Judul hero",
        500,
      ),
      description: requiredText(
        "Deskripsi hero",
        3000,
      ),
      buttonLabel: requiredText(
        "Label tombol",
        191,
      ),
      buttonLink: cmsLinkSchema,
    }),

    companyProfile: z.object({
      eyebrow: requiredText(
        "Eyebrow profil",
        191,
      ),
      title: requiredText(
        "Judul profil",
        500,
      ),
      content: requiredText(
        "Isi profil",
        50000,
      ),
    }),

    vision: z.object({
      eyebrow: requiredText(
        "Eyebrow visi",
        191,
      ),
      title: requiredText(
        "Judul visi",
        500,
      ),
      content: requiredText(
        "Isi visi",
        10000,
      ),
    }),

    values: z.object({
      eyebrow: requiredText(
        "Eyebrow nilai",
        191,
      ),
      title: requiredText(
        "Judul nilai",
        500,
      ),
    }),

    valueItems: z
      .array(listItemSchema)
      .min(1, "Minimal satu nilai firma")
      .max(12, "Maksimal 12 nilai firma"),
  });

export const retainerPageFormSchema =
  z.object({
    ...basePageSchema,

    hero: z.object({
      eyebrow: requiredText(
        "Eyebrow hero",
        191,
      ),
      title: requiredText(
        "Judul hero",
        500,
      ),
      description: requiredText(
        "Deskripsi hero",
        3000,
      ),
      buttonLabel: requiredText(
        "Label tombol",
        191,
      ),
      buttonLink: cmsLinkSchema,
    }),

    intro: z.object({
      eyebrow: requiredText(
        "Eyebrow intro",
        191,
      ),
      title: requiredText(
        "Judul intro",
        500,
      ),
      content: requiredText(
        "Isi intro",
        50000,
      ),
    }),

    benefits: z.object({
      eyebrow: requiredText(
        "Eyebrow manfaat",
        191,
      ),
      title: requiredText(
        "Judul manfaat",
        500,
      ),
    }),

    benefitItems: z
      .array(listItemSchema)
      .min(1, "Minimal satu manfaat")
      .max(12, "Maksimal 12 manfaat"),

    process: z.object({
      eyebrow: requiredText(
        "Eyebrow proses",
        191,
      ),
      title: requiredText(
        "Judul proses",
        500,
      ),
    }),

    processItems: z
      .array(listItemSchema)
      .min(1, "Minimal satu tahapan")
      .max(12, "Maksimal 12 tahapan"),
  });

export const contactPageFormSchema =
  z.object({
    ...basePageSchema,

    hero: z.object({
      eyebrow: requiredText(
        "Eyebrow hero",
        191,
      ),
      title: requiredText(
        "Judul hero",
        500,
      ),
      description: requiredText(
        "Deskripsi hero",
        3000,
      ),
    }),

    officeInfo: z.object({
      eyebrow: requiredText(
        "Eyebrow informasi kantor",
        191,
      ),
      title: requiredText(
        "Judul informasi kantor",
        500,
      ),
      description: requiredText(
        "Deskripsi kantor",
        3000,
      ),
      addressLabel: requiredText(
        "Label alamat",
        191,
      ),
      phoneLabel: requiredText(
        "Label telepon",
        191,
      ),
      emailLabel: requiredText(
        "Label email",
        191,
      ),
      whatsappButtonLabel:
        requiredText(
          "Label tombol WhatsApp",
          191,
        ),
    }),

    map: z.object({
      iframeTitle: requiredText(
        "Judul iframe map",
        191,
      ),
      emptyMessage: requiredText(
        "Pesan map kosong",
        500,
      ),
    }),
  });

export type HomePageFormValues =
  z.infer<typeof homePageFormSchema>;

export type AboutPageFormValues =
  z.infer<typeof aboutPageFormSchema>;

export type RetainerPageFormValues =
  z.infer<typeof retainerPageFormSchema>;

export type ContactPageFormValues =
  z.infer<typeof contactPageFormSchema>;