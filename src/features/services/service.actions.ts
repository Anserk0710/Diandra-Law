"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/auth/require-admin";
import type { ActionState } from "@/lib/cms/action-state";
import { actionStateFromZod, fieldErrorState, getFormString, getOptionalFormString, isPrismaErrorCode, parseEntityId, readIndexedFormRows, slugify, } from "@/lib/cms/cms-utils";
import { prisma } from "@/lib/db/prisma";
import { serviceSchema } from "./service.schema";

function readServiceFormData(
    formData: FormData,
) {
    const faqRows = readIndexedFormRows(formData, "faqs", ["question", "answer", "sortOrder"],
    )
    .filter(
        ({ values }) =>
            Boolean(values.question) ||
            Boolean(values.answer),
    )
    .map(({ values }) => ({
        question: values.question ?? "",
        answer: values.answer ?? "",
        sortOrder: values.sortOrder ?? "0",
    }));

    const ctaRows = readIndexedFormRows(
        formData,
        "ctas",
        ["label", "link", "type"],
    )
        .filter(
            ({ values }) =>
                Boolean(values.label) ||
                Boolean(values.link),
            )
        .map(({ index, values }) => ({
            label: values.label ?? "",
            link: values.link ?? "",
            type: values.type ?? "Whatsapp",
            isActive: formData.has(
                `ctas.${index}.isActive`,
            ),
        }));

    return {
        title: getFormString(formData, "title"),
        slug: getFormString(formData, "slug"),
        summary: getFormString(formData, "summary"),
        content: getFormString(formData, "content"),
        coverImage: getOptionalFormString(formData, "coverImage"),
        featured: formData.has("featured"),
        sortOrder: getFormString(formData, "sortOrder"),
        status: getFormString(formData, "status"),
        faqs: faqRows,
        ctas: ctaRows,
    };
}

function normalizeCtaLink(
    type: "whatsapp" | "url" | "contact",
    link: string | undefined,
) {
    if (type === "whatsapp") {
        return link || "#";
    }
    if (type === "contact") {
        return link || "/kontak";
    }

    return link || "";
}

function revalidateServicePaths(
    ...slugs: Array<string | undefined>
) {
    revalidatePath("/");
    revalidatePath("/layanan");
    revalidatePath("/admin/services");


    for (const slug of slugs) {
        if (slug) {
            revalidatePath(`/layanan/${slug}`);
        }
    }
}

export async function createServiceAction(
    _previousState: ActionState,
    formData: FormData,
): Promise<ActionState> {
    await requireAdmin();

    const parsed = serviceSchema.safeParse(
        readServiceFormData(formData),
    );

    if (!parsed.success) {
        return actionStateFromZod(parsed.error);
    }

    const slug = slugify(
        parsed.data.slug ?? parsed.data.title,
    );

    if (!slug) {
        return fieldErrorState(
            "slug",
            "Slug tidak dapat dibuat dari judul tersebut",
        );
    }

    const duplicate = await prisma.service.findUnique({
        where: {
            slug,
        },
        select: {
            id: true,
        },
    });

    if (duplicate) {
        return fieldErrorState(
            "slug",
            "Slug sudah digunakan oleh layanan lain",
        );
    }

    let createdServiceId: bigint;

    try {
        const service = await prisma.service.create({
            data: {
                title: parsed.data.title,
                slug,
                summary: parsed.data.summary,
                content: parsed.data.content,
                coverImage: parsed.data.coverImage ?? null,
                featured: parsed.data.featured,
                sortOrder: parsed.data.sortOrder,
                status: parsed.data.status,
                faqs: {
                    create: parsed.data.faqs.map((faq) => ({
                        question: faq.question,
                        answer: faq.answer,
                        sortOrder: faq.sortOrder,
                    }),),
                },
                ctas: {
                    create: parsed.data.ctas.map((cta) => ({
                        label: cta.label,
                        link: normalizeCtaLink(
                            cta.type,
                            cta.link,
                        ),
                        type: cta.type,
                        isActive: cta.isActive,
                    }),),
                },
            },
            select: {
                id: true,
            },
        });

        createdServiceId = service.id;
    } catch (error) {
        if (
            isPrismaErrorCode(error, "P2002")
        ) {
            return fieldErrorState(
                "slug",
                "Slug sudah digunakan oleh layanan lain",
            );
        }

        console.error(
            "Gagal membuat service:",
            error,
        );
        
        return {
            status: "error",
            message: "Service gagal dibuat karena terjadi kesalahan database.",
        };
    }

    revalidateServicePaths(slug);

    redirect(`/admin/services/${createdServiceId.toString()}`);
}

export async function updateServiceAction(
    serviceId: string,
    _previousState: ActionState,
    formData: FormData,
): Promise<ActionState> {
    await requireAdmin();

    const id = parseEntityId(serviceId);

    if (!id) {
        return {
            status: "error",
            message: "ID Service tidak valid.",
        };
    }

    const existingService =
    await prisma.service.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            slug: true,
        },
    });

    if (!existingService) {
        return {
            status: "error",
            message: "Service tidak ditemukan.",
        };
    }

    const parsed = serviceSchema.safeParse(
        readServiceFormData(formData),
    );

    if (!parsed.success) {
        return actionStateFromZod(parsed.error);
    }

    const slug = slugify(
        parsed.data.slug ?? parsed.data.title,
    );

    if (!slug) {
        return fieldErrorState(
            "slug",
            "Slug tidak dapat dibuat dari judul tersebut",
        );
    }

    const duplicate = await prisma.service.findFirst({
        where: {
            slug,
            id: {
                not: id,
            },
        },
        select: {
            id: true,
        },
    });

    if (duplicate) {
        return fieldErrorState(
            "slug",
            "Slug sudah digunakan oleh layanan lain",
        );
    }

    try {
        await prisma.service.update({
            where: {
                id,
            },
            data: {
                title: parsed.data.title,
                slug,
                summary: parsed.data.summary,
                content: parsed.data.content,
                coverImage: parsed.data.coverImage ?? null,
                featured: parsed.data.featured,
                sortOrder: parsed.data.sortOrder,
                status: parsed.data.status,
                faqs: {
                    deleteMany: {},
                    create: parsed.data.faqs.map((faq) => ({
                        question: faq.question,
                        answer: faq.answer,
                        sortOrder: faq.sortOrder,
                    }),),
                },
                ctas: {
                    deleteMany: {},
                    create: parsed.data.ctas.map((cta) => ({
                        label: cta.label,
                        link: normalizeCtaLink(
                            cta.type,
                            cta.link,
                        ),
                        type: cta.type,
                        isActive: cta.isActive,
                    }),),
                },
            }
        });
    } catch (error) {
        if (
            isPrismaErrorCode(error, "P2002")
        ) {
            return fieldErrorState(
                "slug",
                "Slug sudah digunakan oleh layanan lain",
            );
        }

        console.error(
            "Gagal memperbarui service:",
            error,
        );

        return {
            status: "error",
            message: "Service gagal diperbarui karena terjadi kesalahan database.",
        };
    }

    revalidateServicePaths(
        existingService.slug,
        slug,
    );
    
    redirect(`/admin/services/${serviceId}`);
}

export async function deleteServiceAction(
    serviceId: string,
) {
    await requireAdmin();

    const id = parseEntityId(serviceId);

    if (!id) {
        return;
    }

    const service =
        await prisma.service.findUnique({
            where: {
                id,
            },
            select: {
                slug: true,
            },
        });

    if (!service) {
        return;
    }

    try {
        await prisma.service.delete({
            where: {
                id,
            },
        });
    } catch (error) {
        console.error(
            "Gagal menghapus service:",
            error,
        );

        return;
    }

    revalidateServicePaths(service.slug);
}