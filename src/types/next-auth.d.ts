import type { DefaultSession } from "next-auth";
import "next-auth";
import "next-auth/jwt";

type AdminRole = "admin";

declare module "next-auth" {
  interface User {
    id: string;
    role?: AdminRole;
  }

  interface Session {
    user: {
      id: string;
      role?: AdminRole;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: AdminRole;
  }
}