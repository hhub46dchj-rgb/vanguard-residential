"use client";

import { useTransition } from "react";
import { LogOut } from "lucide-react";

/**
 * Wraps the server `signOut` action in a client button with a loading state.
 * `signOut` is passed in from the server layout to keep it a server action.
 */
export function SignOutButton({
  signOut,
}: {
  signOut: () => Promise<void>;
}) {
  const [pending, startTransition] = useTransition();

  function handleSignOut() {
    startTransition(async () => {
      await signOut();
    });
  }

  return (
    <button
      onClick={handleSignOut}
      disabled={pending}
      className="inline-flex h-9 items-center gap-2 rounded-lg border border-navy-200 bg-white px-3 text-sm font-medium text-navy-700 transition-colors hover:bg-navy-50 disabled:opacity-60"
    >
      <LogOut className="h-4 w-4" />
      <span className="hidden sm:inline">{pending ? "Signing out…" : "Sign out"}</span>
    </button>
  );
}
