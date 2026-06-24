import { z } from "zod";
import { MEDIA_MODULES } from "./media.constants";

export const mediaModuleSchema = z.enum(MEDIA_MODULES);

export const mediaListQuerySchema =
    z.object({
        module: z
            .preprocess(
                (value) =>
                    value === "" ||
                        value === null
                        ? undefined
                        : value,
                mediaModuleSchema.optional(),
            ),
        search: z
            .string()
            .trim()
            .max(100, "Search term cannot exceed 100 characters")
            .default(""),
        page: z.coerce
            .number()
            .int()
            .min(1)
            .default(1),
        pageSize: z.coerce
            .number()
            .int()
            .min(1)
            .max(60)
            .default(24),
    });