import { z } from "zod";
import { isAssetReference, isLinkReference, } from "@/lib/cms/cms-utils";

const optionalSlugSchema = z
    .string()
    .trim()
    .max(255, "Slug terlalu panjang")
    .transform((value) => value.length > 0 ? value : undefined,);

const optionalAssetSchema = z
    .string()
    .trim()
    .max(255, "Path Gambar Maksimal 255 Karakter")
    .transform((value) =>
    value.length > 0 ? value : undefined,)
    .refine(
        (value) => value === undefined || isAssetReference(value),
        "Gunakan URL http/https atau path file (contoh: /images/example.jpg)",
    );

    const serviceFaqSchema = z.object({
        question: z
            .string()
            .trim()
            .min(3, "Pertanyaan FAQ minimal 3 karakter")
            .max(255, "Pertanyaan FAQ maksimal 255 karakter"),
        
        answer: z
            .string()
            .trim()
            .min(3, "Jawaban FAQ minimal 3 karakter")
            .max(255, "Jawaban FAQ maksimal 255 karakter"),

        sortOrder: z.coerce
            .number()
            .int("urutan harus bilangan bulat")
            .min(0, "urutan minimal 0")
            .max(9999, "urutan maksimal 9999"),
    });

    const serviceCtaSchema = z
        .object({
            label: z
                .string()
                .trim()
                .min(3, "Label minimal 3 karakter")
                .max(255, "Label maksimal 255 karakter"),
        
            link: z
                .string()
                .trim()
                .min(3, "Link minimal 3 karakter")
                .max(255, "Link maksimal 255 karakter")
                .transform((value) =>
                    value.length > 0 ? value : undefined,
            ),

            type: z.enum([
                "whatsapp",
                "url",
                "contact",
            ]),

            isActive: z.boolean(),
        })
        .superRefine((value, context) => {
            if (
                value.type === "url" &&
                !value.link
            ) {
                context.addIssue({
                    code: "custom",
                    path: ["link"],
                    message: "Link harus diisi",
                });

                return;
            }

            if (
                value.type === "url" &&
                value.link &&
                !isLinkReference(value.link)
            ) {
                context.addIssue({
                    code: "custom",
                    path: ["link"],
                    message: "Gunakan URL http/https atau path file (contoh: /images/example.jpg)",
                });
            }
        });

    export const serviceSchema = z.object({
        title: z
            .string()
            .trim()
            .min(3, "Judul minimal 3 karakter")
            .max(255, "Judul maksimal 255 karakter"),

        slug: optionalSlugSchema,

        summary: z
            .string()
            .trim()
            .min(10, "Ringkasan minimal 10 karakter")
            .max(3000, "Ringkasan maksimal 3000 karakter"),

        content: z
            .string()
            .trim()
            .min(10, "Konten minimal 10 karakter")
            .max(50000, "Konten maksimal 50000 karakter"),

        coverImage: optionalAssetSchema,

        featured: z.boolean(),

        sortOrder: z.coerce
            .number()
            .int("urutan harus bilangan bulat")
            .min(0, "urutan minimal 0")
            .max(9999, "urutan maksimal 9999"),

        status: z.enum([
            "draft",
            "published",
            "inactive",
        ]),

        faqs: z
            .array(serviceFaqSchema)
            .max(20, "Maksimal 20 FAQ"),

        ctas: z
            .array(serviceCtaSchema)
            .max(5, "Maksimal 5 CTA"),
    });

    export type Service = z.infer<typeof serviceSchema>;