"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { signInSchema } from "@/lib/validations/auth.schema";

export type LoginActionState = {
  error?: string;

  fieldErrors?: {
    email?: string[];
    password?: string[];
  };
};

export async function authenticateAdmin(
  _previousState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      error: "Periksa kembali data login Anda.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn("credentials", {
      email: parsed.data.email,
      password: parsed.data.password,
      redirectTo: "/admin",
    });

    return {};
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return {
          error: "Email atau password salah.",
        };
      }

      console.error("Auth.js login error:", error);

      return {
        error:
          "Sistem autentikasi sedang bermasalah. Periksa konfigurasi server.",
      };
    }

    // Redirect Next.js juga menggunakan mekanisme throw.
    // Karena bukan AuthError, harus dilempar kembali.
    throw error;
  }
}