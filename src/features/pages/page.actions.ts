"use server";

import { revalidatePath } from "next/cache";

import { Prisma } from "@/generated/prisma";
import { requireAdmin } from "@/lib/auth/require-admin";
import type { ActionState } from "@/lib/cms/action-state";
import {
  actionStateFromZod,
  getFormString,
  readIndexedFormRows,
} from "@/lib/cms/cms-utils";
import { prisma } from "@/lib/db/prisma";

import {
  aboutPageFormSchema,
  contactPageFormSchema,
  homePageFormSchema,
  retainerPageFormSchema,
} from "./page.schema";
import type {
  AboutPageContent,
  ContactPageContent,
  HomePageContent,
  RetainerPageContent,
  StaticPageKey,
  StaticPageStatus,
} from "./page.types";

function readStringItems(
  formData: FormData,
  prefix: string,
) {
  return readIndexedFormRows(
    formData,
    prefix,
    ["value"],
  )
    .map(({ values }) => ({
      value: values.value ?? "",
    }))
    .filter(
      (item) =>
        item.value.trim().length > 0,
    );
}

async function saveStaticPage(
  pageKey: StaticPageKey,
  title: string,
  status: StaticPageStatus,
  contentJson:
    | HomePageContent
    | AboutPageContent
    | RetainerPageContent
    | ContactPageContent,
) {
  await prisma.page.upsert({
    where: {
      pageKey,
    },
    update: {
      title,
      status,
      contentJson:
        contentJson as Prisma.InputJsonValue,
    },
    create: {
      pageKey,
      title,
      status,
      contentJson:
        contentJson as Prisma.InputJsonValue,
    },
  });
}

export async function updateHomePageAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed =
    homePageFormSchema.safeParse({
      internalTitle: getFormString(
        formData,
        "internalTitle",
      ),
      status: getFormString(
        formData,
        "status",
      ),

      hero: {
        eyebrow: getFormString(
          formData,
          "hero.eyebrow",
        ),
        title: getFormString(
          formData,
          "hero.title",
        ),
        description: getFormString(
          formData,
          "hero.description",
        ),
        primaryCtaLabel: getFormString(
          formData,
          "hero.primaryCtaLabel",
        ),
        primaryCtaLink: getFormString(
          formData,
          "hero.primaryCtaLink",
        ),
        secondaryCtaLabel:
          getFormString(
            formData,
            "hero.secondaryCtaLabel",
          ),
        secondaryCtaLink:
          getFormString(
            formData,
            "hero.secondaryCtaLink",
          ),
      },

      focus: {
        eyebrow: getFormString(
          formData,
          "focus.eyebrow",
        ),
        title: getFormString(
          formData,
          "focus.title",
        ),
      },

      focusItems: readStringItems(
        formData,
        "focusItems",
      ),

      aboutIntro: {
        eyebrow: getFormString(
          formData,
          "aboutIntro.eyebrow",
        ),
        title: getFormString(
          formData,
          "aboutIntro.title",
        ),
        description: getFormString(
          formData,
          "aboutIntro.description",
        ),
        buttonLabel: getFormString(
          formData,
          "aboutIntro.buttonLabel",
        ),
        buttonLink: getFormString(
          formData,
          "aboutIntro.buttonLink",
        ),
      },

      servicesSection: {
        eyebrow: getFormString(
          formData,
          "servicesSection.eyebrow",
        ),
        title: getFormString(
          formData,
          "servicesSection.title",
        ),
        description: getFormString(
          formData,
          "servicesSection.description",
        ),
        buttonLabel: getFormString(
          formData,
          "servicesSection.buttonLabel",
        ),
        buttonLink: getFormString(
          formData,
          "servicesSection.buttonLink",
        ),
      },

      lawyersSection: {
        eyebrow: getFormString(
          formData,
          "lawyersSection.eyebrow",
        ),
        title: getFormString(
          formData,
          "lawyersSection.title",
        ),
        description: getFormString(
          formData,
          "lawyersSection.description",
        ),
        buttonLabel: getFormString(
          formData,
          "lawyersSection.buttonLabel",
        ),
        buttonLink: getFormString(
          formData,
          "lawyersSection.buttonLink",
        ),
      },

      articlesSection: {
        eyebrow: getFormString(
          formData,
          "articlesSection.eyebrow",
        ),
        title: getFormString(
          formData,
          "articlesSection.title",
        ),
        description: getFormString(
          formData,
          "articlesSection.description",
        ),
        buttonLabel: getFormString(
          formData,
          "articlesSection.buttonLabel",
        ),
        buttonLink: getFormString(
          formData,
          "articlesSection.buttonLink",
        ),
      },

      contactCta: {
        eyebrow: getFormString(
          formData,
          "contactCta.eyebrow",
        ),
        title: getFormString(
          formData,
          "contactCta.title",
        ),
        description: getFormString(
          formData,
          "contactCta.description",
        ),
        buttonLabel: getFormString(
          formData,
          "contactCta.buttonLabel",
        ),
        buttonLink: getFormString(
          formData,
          "contactCta.buttonLink",
        ),
        mapTitle: getFormString(
          formData,
          "contactCta.mapTitle",
        ),
        mapEmptyMessage:
          getFormString(
            formData,
            "contactCta.mapEmptyMessage",
          ),
      },
    });

  if (!parsed.success) {
    return actionStateFromZod(
      parsed.error,
    );
  }

  const content: HomePageContent = {
    hero: parsed.data.hero,

    focus: {
      ...parsed.data.focus,
      items:
        parsed.data.focusItems.map(
          (item) => item.value,
        ),
    },

    aboutIntro:
      parsed.data.aboutIntro,
    servicesSection:
      parsed.data.servicesSection,
    lawyersSection:
      parsed.data.lawyersSection,
    articlesSection:
      parsed.data.articlesSection,
    contactCta:
      parsed.data.contactCta,
  };

  try {
    await saveStaticPage(
      "home",
      parsed.data.internalTitle,
      parsed.data.status,
      content,
    );
  } catch (error) {
    console.error(
      "Gagal menyimpan homepage:",
      error,
    );

    return {
      status: "error",
      message:
        "Homepage gagal disimpan karena kesalahan database.",
    };
  }

  revalidatePath("/");

  return {
    status: "success",
    message:
      "Homepage berhasil disimpan.",
  };
}

export async function updateAboutPageAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed =
    aboutPageFormSchema.safeParse({
      internalTitle: getFormString(
        formData,
        "internalTitle",
      ),
      status: getFormString(
        formData,
        "status",
      ),

      hero: {
        eyebrow: getFormString(
          formData,
          "hero.eyebrow",
        ),
        title: getFormString(
          formData,
          "hero.title",
        ),
        description: getFormString(
          formData,
          "hero.description",
        ),
        buttonLabel: getFormString(
          formData,
          "hero.buttonLabel",
        ),
        buttonLink: getFormString(
          formData,
          "hero.buttonLink",
        ),
      },

      companyProfile: {
        eyebrow: getFormString(
          formData,
          "companyProfile.eyebrow",
        ),
        title: getFormString(
          formData,
          "companyProfile.title",
        ),
        content: getFormString(
          formData,
          "companyProfile.content",
        ),
      },

      vision: {
        eyebrow: getFormString(
          formData,
          "vision.eyebrow",
        ),
        title: getFormString(
          formData,
          "vision.title",
        ),
        content: getFormString(
          formData,
          "vision.content",
        ),
      },

      values: {
        eyebrow: getFormString(
          formData,
          "values.eyebrow",
        ),
        title: getFormString(
          formData,
          "values.title",
        ),
      },

      valueItems: readStringItems(
        formData,
        "valueItems",
      ),
    });

  if (!parsed.success) {
    return actionStateFromZod(
      parsed.error,
    );
  }

  const content: AboutPageContent = {
    hero: parsed.data.hero,
    companyProfile:
      parsed.data.companyProfile,
    vision: parsed.data.vision,

    values: {
      ...parsed.data.values,
      items:
        parsed.data.valueItems.map(
          (item) => item.value,
        ),
    },
  };

  try {
    await saveStaticPage(
      "about",
      parsed.data.internalTitle,
      parsed.data.status,
      content,
    );
  } catch (error) {
    console.error(
      "Gagal menyimpan halaman about:",
      error,
    );

    return {
      status: "error",
      message:
        "Halaman Tentang Kami gagal disimpan.",
    };
  }

  revalidatePath("/tentang-kami");

  return {
    status: "success",
    message:
      "Halaman Tentang Kami berhasil disimpan.",
  };
}

export async function updateRetainerPageAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed =
    retainerPageFormSchema.safeParse({
      internalTitle: getFormString(
        formData,
        "internalTitle",
      ),
      status: getFormString(
        formData,
        "status",
      ),

      hero: {
        eyebrow: getFormString(
          formData,
          "hero.eyebrow",
        ),
        title: getFormString(
          formData,
          "hero.title",
        ),
        description: getFormString(
          formData,
          "hero.description",
        ),
        buttonLabel: getFormString(
          formData,
          "hero.buttonLabel",
        ),
        buttonLink: getFormString(
          formData,
          "hero.buttonLink",
        ),
      },

      intro: {
        eyebrow: getFormString(
          formData,
          "intro.eyebrow",
        ),
        title: getFormString(
          formData,
          "intro.title",
        ),
        content: getFormString(
          formData,
          "intro.content",
        ),
      },

      benefits: {
        eyebrow: getFormString(
          formData,
          "benefits.eyebrow",
        ),
        title: getFormString(
          formData,
          "benefits.title",
        ),
      },

      benefitItems: readStringItems(
        formData,
        "benefitItems",
      ),

      process: {
        eyebrow: getFormString(
          formData,
          "process.eyebrow",
        ),
        title: getFormString(
          formData,
          "process.title",
        ),
      },

      processItems: readStringItems(
        formData,
        "processItems",
      ),
    });

  if (!parsed.success) {
    return actionStateFromZod(
      parsed.error,
    );
  }

  const content: RetainerPageContent = {
    hero: parsed.data.hero,
    intro: parsed.data.intro,

    benefits: {
      ...parsed.data.benefits,
      items:
        parsed.data.benefitItems.map(
          (item) => item.value,
        ),
    },

    process: {
      ...parsed.data.process,
      items:
        parsed.data.processItems.map(
          (item) => item.value,
        ),
    },
  };

  try {
    await saveStaticPage(
      "retainer",
      parsed.data.internalTitle,
      parsed.data.status,
      content,
    );
  } catch (error) {
    console.error(
      "Gagal menyimpan halaman retainer:",
      error,
    );

    return {
      status: "error",
      message:
        "Halaman Retainer gagal disimpan.",
    };
  }

  revalidatePath("/retainer");

  return {
    status: "success",
    message:
      "Halaman Retainer berhasil disimpan.",
  };
}

export async function updateContactPageAction(
  _previousState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const parsed =
    contactPageFormSchema.safeParse({
      internalTitle: getFormString(
        formData,
        "internalTitle",
      ),
      status: getFormString(
        formData,
        "status",
      ),

      hero: {
        eyebrow: getFormString(
          formData,
          "hero.eyebrow",
        ),
        title: getFormString(
          formData,
          "hero.title",
        ),
        description: getFormString(
          formData,
          "hero.description",
        ),
      },

      officeInfo: {
        eyebrow: getFormString(
          formData,
          "officeInfo.eyebrow",
        ),
        title: getFormString(
          formData,
          "officeInfo.title",
        ),
        description: getFormString(
          formData,
          "officeInfo.description",
        ),
        addressLabel: getFormString(
          formData,
          "officeInfo.addressLabel",
        ),
        phoneLabel: getFormString(
          formData,
          "officeInfo.phoneLabel",
        ),
        emailLabel: getFormString(
          formData,
          "officeInfo.emailLabel",
        ),
        whatsappButtonLabel:
          getFormString(
            formData,
            "officeInfo.whatsappButtonLabel",
          ),
      },

      map: {
        iframeTitle: getFormString(
          formData,
          "map.iframeTitle",
        ),
        emptyMessage: getFormString(
          formData,
          "map.emptyMessage",
        ),
      },
    });

  if (!parsed.success) {
    return actionStateFromZod(
      parsed.error,
    );
  }

  const content: ContactPageContent = {
    hero: parsed.data.hero,
    officeInfo:
      parsed.data.officeInfo,
    map: parsed.data.map,
  };

  try {
    await saveStaticPage(
      "contact",
      parsed.data.internalTitle,
      parsed.data.status,
      content,
    );
  } catch (error) {
    console.error(
      "Gagal menyimpan halaman kontak:",
      error,
    );

    return {
      status: "error",
      message:
        "Halaman Kontak gagal disimpan.",
    };
  }

  revalidatePath("/kontak");

  return {
    status: "success",
    message:
      "Halaman Kontak berhasil disimpan.",
  };
}