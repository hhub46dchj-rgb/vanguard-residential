import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";

/**
 * NextAuth (Auth.js v5) — single operator account (credentials provider).
 * The admin user is seeded from env via `npm run db:seed`.
 */
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email?.toString().toLowerCase().trim();
        const password = credentials?.password?.toString();
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.passwordHash) return null;

        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) return null;

        return {
          id: user.id,
          name: user.name ?? undefined,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    // JWT carries role for downstream session checks.
    jwt({ token, user }) {
      if (user) token.role = "admin";
      return token;
    },
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isUnderAdmin = request.nextUrl.pathname.startsWith("/admin");
      const isLoginPage = request.nextUrl.pathname === "/admin/login";
      // Allow the login page; gate every other /admin route.
      if (isUnderAdmin && !isLoginPage) return isLoggedIn;
      return true;
    },
  },
});
