import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { prisma } from "@/lib/db/prisma";
import { signInSchema } from "@/lib/validations/auth.schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",

    // Session berlaku selama 8 jam.
    maxAge: 8 * 60 * 60,
  },

  pages: {
    signIn: "/admin/login",
  },

  providers: [
    Credentials({
      name: "Admin Login",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(rawCredentials) {
        // Validasi input sebelum melakukan query database.
        const parsed = signInSchema.safeParse(rawCredentials);

        if (!parsed.success) {
          return null;
        }

        const admin = await prisma.admin.findUnique({
          where: {
            email: parsed.data.email,
          },
          select: {
            id: true,
            email: true,
            passwordHash: true,
            fullName: true,
            isActive: true,
          },
        });

        // Admin tidak ditemukan atau dinonaktifkan.
        if (!admin?.isActive) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          parsed.data.password,
          admin.passwordHash,
        );

        if (!isPasswordValid) {
          return null;
        }

        // lastLoginAt hanya data tambahan.
        // Login tidak perlu gagal apabila update ini bermasalah.
        try {
          await prisma.admin.update({
            where: {
              id: admin.id,
            },
            data: {
              lastLoginAt: new Date(),
            },
          });
        } catch (error) {
          console.error(
            "Gagal memperbarui waktu login admin.",
            error,
          );
        }

        return {
          id: admin.id.toString(),
          name: admin.fullName,
          email: admin.email,
          role: "admin" as const,
        };
      },
    }),
  ],

  callbacks: {
    /**
     * Callback ini digunakan oleh src/proxy.ts.
     *
     * /admin/login boleh diakses tanpa session.
     * Seluruh /admin lainnya membutuhkan role admin.
     */
    authorized({ auth: session, request }) {
      const pathname = request.nextUrl.pathname;

      if (pathname === "/admin/login") {
        return true;
      }

      if (pathname.startsWith("/admin")) {
        return session?.user?.role === "admin";
      }

      return true;
    },

    /**
     * Simpan role admin ke dalam JWT.
     */
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role =
          user.role === "admin" ? "admin" : undefined;
      }

      return token;
    },

    /**
     * Pindahkan data JWT yang aman ke session.
     */
    session({ session, token }) {
      if (session.user) {
        session.user.id =
          typeof token.sub === "string" ? token.sub : "";

        session.user.role =
          token.role === "admin" ? "admin" : undefined;
      }

      return session;
    },
  },
});