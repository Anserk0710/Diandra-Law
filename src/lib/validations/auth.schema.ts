import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),

  password: z
    .string()
    .min(1, "Password wajib diisi")
    .max(128, "Password terlalu panjang"),
});

export type SignInInput = z.infer<typeof signInSchema>;