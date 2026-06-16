import {
  asObject,
  getSection,
  getString,
  getStringArray,
} from "@/lib/page-content";
import { prisma } from "@/lib/db/prisma";

import type {
  AboutPageFormValues,
  ContactPageFormValues,
  HomePageFormValues,
  RetainerPageFormValues,
} from "./page.schema";
import {
  ABOUT_PAGE_DEFAULTS,
  CONTACT_PAGE_DEFAULTS,
  HOME_PAGE_DEFAULTS,
  RETAINER_PAGE_DEFAULTS,
  type StaticPageKey,
} from "./page.types";

export function getAdminStaticPage(
  pageKey: StaticPageKey,
) {
  return prisma.page.findUnique({
    where: {
      pageKey,
    },
    select: {
      title: true,
      status: true,
      contentJson: true,
      updatedAt: true,
    },
  });
}

export async function getHomePageEditorData(): Promise<HomePageFormValues> {
  const page =
    await getAdminStaticPage("home");

  const content = asObject(
    page?.contentJson,
  );

  const hero = getSection(
    content,
    "hero",
  );
  const focus = getSection(
    content,
    "focus",
  );
  const aboutIntro = getSection(
    content,
    "aboutIntro",
  );
  const servicesSection = getSection(
    content,
    "servicesSection",
  );
  const lawyersSection = getSection(
    content,
    "lawyersSection",
  );
  const articlesSection = getSection(
    content,
    "articlesSection",
  );
  const contactCta = getSection(
    content,
    "contactCta",
  );

  const defaults = HOME_PAGE_DEFAULTS;

  return {
    internalTitle:
      page?.title ?? "Homepage",
    status: page?.status ?? "draft",

    hero: {
      eyebrow: getString(
        hero,
        "eyebrow",
        defaults.hero.eyebrow,
      ),
      title: getString(
        hero,
        "title",
        defaults.hero.title,
      ),
      description: getString(
        hero,
        "description",
        defaults.hero.description,
      ),
      primaryCtaLabel: getString(
        hero,
        "primaryCtaLabel",
        defaults.hero.primaryCtaLabel,
      ),
      primaryCtaLink: getString(
        hero,
        "primaryCtaLink",
        defaults.hero.primaryCtaLink,
      ),
      secondaryCtaLabel: getString(
        hero,
        "secondaryCtaLabel",
        defaults.hero.secondaryCtaLabel,
      ),
      secondaryCtaLink: getString(
        hero,
        "secondaryCtaLink",
        defaults.hero.secondaryCtaLink,
      ),
    },

    focus: {
      eyebrow: getString(
        focus,
        "eyebrow",
        defaults.focus.eyebrow,
      ),
      title: getString(
        focus,
        "title",
        defaults.focus.title,
      ),
    },

    focusItems: getStringArray(
      focus,
      "items",
      defaults.focus.items,
    ).map((value) => ({
      value,
    })),

    aboutIntro: {
      eyebrow: getString(
        aboutIntro,
        "eyebrow",
        defaults.aboutIntro.eyebrow,
      ),
      title: getString(
        aboutIntro,
        "title",
        defaults.aboutIntro.title,
      ),
      description: getString(
        aboutIntro,
        "description",
        defaults.aboutIntro.description,
      ),
      buttonLabel: getString(
        aboutIntro,
        "buttonLabel",
        defaults.aboutIntro.buttonLabel,
      ),
      buttonLink: getString(
        aboutIntro,
        "buttonLink",
        defaults.aboutIntro.buttonLink,
      ),
    },

    servicesSection: {
      eyebrow: getString(
        servicesSection,
        "eyebrow",
        defaults.servicesSection.eyebrow,
      ),
      title: getString(
        servicesSection,
        "title",
        defaults.servicesSection.title,
      ),
      description: getString(
        servicesSection,
        "description",
        defaults.servicesSection.description,
      ),
      buttonLabel: getString(
        servicesSection,
        "buttonLabel",
        defaults.servicesSection.buttonLabel,
      ),
      buttonLink: getString(
        servicesSection,
        "buttonLink",
        defaults.servicesSection.buttonLink,
      ),
    },

    lawyersSection: {
      eyebrow: getString(
        lawyersSection,
        "eyebrow",
        defaults.lawyersSection.eyebrow,
      ),
      title: getString(
        lawyersSection,
        "title",
        defaults.lawyersSection.title,
      ),
      description: getString(
        lawyersSection,
        "description",
        defaults.lawyersSection.description,
      ),
      buttonLabel: getString(
        lawyersSection,
        "buttonLabel",
        defaults.lawyersSection.buttonLabel,
      ),
      buttonLink: getString(
        lawyersSection,
        "buttonLink",
        defaults.lawyersSection.buttonLink,
      ),
    },

    articlesSection: {
      eyebrow: getString(
        articlesSection,
        "eyebrow",
        defaults.articlesSection.eyebrow,
      ),
      title: getString(
        articlesSection,
        "title",
        defaults.articlesSection.title,
      ),
      description: getString(
        articlesSection,
        "description",
        defaults.articlesSection.description,
      ),
      buttonLabel: getString(
        articlesSection,
        "buttonLabel",
        defaults.articlesSection.buttonLabel,
      ),
      buttonLink: getString(
        articlesSection,
        "buttonLink",
        defaults.articlesSection.buttonLink,
      ),
    },

    contactCta: {
      eyebrow: getString(
        contactCta,
        "eyebrow",
        defaults.contactCta.eyebrow,
      ),
      title: getString(
        contactCta,
        "title",
        defaults.contactCta.title,
      ),
      description: getString(
        contactCta,
        "description",
        defaults.contactCta.description,
      ),
      buttonLabel: getString(
        contactCta,
        "buttonLabel",
        defaults.contactCta.buttonLabel,
      ),
      buttonLink: getString(
        contactCta,
        "buttonLink",
        defaults.contactCta.buttonLink,
      ),
      mapTitle: getString(
        contactCta,
        "mapTitle",
        defaults.contactCta.mapTitle,
      ),
      mapEmptyMessage: getString(
        contactCta,
        "mapEmptyMessage",
        defaults.contactCta.mapEmptyMessage,
      ),
    },
  };
}

export async function getAboutPageEditorData(): Promise<AboutPageFormValues> {
  const page =
    await getAdminStaticPage("about");

  const content = asObject(
    page?.contentJson,
  );

  const hero = getSection(
    content,
    "hero",
  );
  const companyProfile = getSection(
    content,
    "companyProfile",
  );
  const vision = getSection(
    content,
    "vision",
  );
  const values = getSection(
    content,
    "values",
  );

  const defaults = ABOUT_PAGE_DEFAULTS;

  return {
    internalTitle:
      page?.title ?? "Tentang Kami",
    status: page?.status ?? "draft",

    hero: {
      eyebrow: getString(
        hero,
        "eyebrow",
        defaults.hero.eyebrow,
      ),
      title: getString(
        hero,
        "title",
        defaults.hero.title,
      ),
      description: getString(
        hero,
        "description",
        defaults.hero.description,
      ),
      buttonLabel: getString(
        hero,
        "buttonLabel",
        defaults.hero.buttonLabel,
      ),
      buttonLink: getString(
        hero,
        "buttonLink",
        defaults.hero.buttonLink,
      ),
    },

    companyProfile: {
      eyebrow: getString(
        companyProfile,
        "eyebrow",
        defaults.companyProfile.eyebrow,
      ),
      title: getString(
        companyProfile,
        "title",
        defaults.companyProfile.title,
      ),
      content: getString(
        companyProfile,
        "content",
        defaults.companyProfile.content,
      ),
    },

    vision: {
      eyebrow: getString(
        vision,
        "eyebrow",
        defaults.vision.eyebrow,
      ),
      title: getString(
        vision,
        "title",
        defaults.vision.title,
      ),
      content: getString(
        vision,
        "content",
        defaults.vision.content,
      ),
    },

    values: {
      eyebrow: getString(
        values,
        "eyebrow",
        defaults.values.eyebrow,
      ),
      title: getString(
        values,
        "title",
        defaults.values.title,
      ),
    },

    valueItems: getStringArray(
      values,
      "items",
      defaults.values.items,
    ).map((value) => ({
      value,
    })),
  };
}

export async function getRetainerPageEditorData(): Promise<RetainerPageFormValues> {
  const page =
    await getAdminStaticPage("retainer");

  const content = asObject(
    page?.contentJson,
  );

  const hero = getSection(
    content,
    "hero",
  );
  const intro = getSection(
    content,
    "intro",
  );
  const benefits = getSection(
    content,
    "benefits",
  );
  const process = getSection(
    content,
    "process",
  );

  const defaults =
    RETAINER_PAGE_DEFAULTS;

  return {
    internalTitle:
      page?.title ?? "Retainer",
    status: page?.status ?? "draft",

    hero: {
      eyebrow: getString(
        hero,
        "eyebrow",
        defaults.hero.eyebrow,
      ),
      title: getString(
        hero,
        "title",
        defaults.hero.title,
      ),
      description: getString(
        hero,
        "description",
        defaults.hero.description,
      ),
      buttonLabel: getString(
        hero,
        "buttonLabel",
        defaults.hero.buttonLabel,
      ),
      buttonLink: getString(
        hero,
        "buttonLink",
        defaults.hero.buttonLink,
      ),
    },

    intro: {
      eyebrow: getString(
        intro,
        "eyebrow",
        defaults.intro.eyebrow,
      ),
      title: getString(
        intro,
        "title",
        defaults.intro.title,
      ),
      content: getString(
        intro,
        "content",
        defaults.intro.content,
      ),
    },

    benefits: {
      eyebrow: getString(
        benefits,
        "eyebrow",
        defaults.benefits.eyebrow,
      ),
      title: getString(
        benefits,
        "title",
        defaults.benefits.title,
      ),
    },

    benefitItems: getStringArray(
      benefits,
      "items",
      defaults.benefits.items,
    ).map((value) => ({
      value,
    })),

    process: {
      eyebrow: getString(
        process,
        "eyebrow",
        defaults.process.eyebrow,
      ),
      title: getString(
        process,
        "title",
        defaults.process.title,
      ),
    },

    processItems: getStringArray(
      process,
      "items",
      defaults.process.items,
    ).map((value) => ({
      value,
    })),
  };
}

export async function getContactPageEditorData(): Promise<ContactPageFormValues> {
  const page =
    await getAdminStaticPage("contact");

  const content = asObject(
    page?.contentJson,
  );

  const hero = getSection(
    content,
    "hero",
  );
  const officeInfo = getSection(
    content,
    "officeInfo",
  );
  const map = getSection(
    content,
    "map",
  );

  const defaults =
    CONTACT_PAGE_DEFAULTS;

  return {
    internalTitle:
      page?.title ?? "Kontak",
    status: page?.status ?? "draft",

    hero: {
      eyebrow: getString(
        hero,
        "eyebrow",
        defaults.hero.eyebrow,
      ),
      title: getString(
        hero,
        "title",
        defaults.hero.title,
      ),
      description: getString(
        hero,
        "description",
        defaults.hero.description,
      ),
    },

    officeInfo: {
      eyebrow: getString(
        officeInfo,
        "eyebrow",
        defaults.officeInfo.eyebrow,
      ),
      title: getString(
        officeInfo,
        "title",
        defaults.officeInfo.title,
      ),
      description: getString(
        officeInfo,
        "description",
        defaults.officeInfo.description,
      ),
      addressLabel: getString(
        officeInfo,
        "addressLabel",
        defaults.officeInfo.addressLabel,
      ),
      phoneLabel: getString(
        officeInfo,
        "phoneLabel",
        defaults.officeInfo.phoneLabel,
      ),
      emailLabel: getString(
        officeInfo,
        "emailLabel",
        defaults.officeInfo.emailLabel,
      ),
      whatsappButtonLabel:
        getString(
          officeInfo,
          "whatsappButtonLabel",
          defaults.officeInfo
            .whatsappButtonLabel,
        ),
    },

    map: {
      iframeTitle: getString(
        map,
        "iframeTitle",
        defaults.map.iframeTitle,
      ),
      emptyMessage: getString(
        map,
        "emptyMessage",
        defaults.map.emptyMessage,
      ),
    },
  };
}