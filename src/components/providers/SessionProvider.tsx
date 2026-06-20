"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

/** Client wrapper so the admin area can use `next-auth/react` hooks. */
export function SessionProvider({ children }: { children: React.ReactNode }) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
