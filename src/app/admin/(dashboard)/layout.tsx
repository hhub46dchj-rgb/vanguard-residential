import { redirect } from "next/navigation";
import { auth, signOut } from "@/auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Logo } from "@/components/brand/Logo";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { SignOutButton } from "@/components/admin/SignOutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  return (
    <SessionProvider>
      <div className="min-h-screen bg-navy-50/40">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-navy-100 bg-white">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
            <Logo />
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold text-navy-900">
                  {session.user.name ?? "Operator"}
                </p>
                <p className="text-xs text-slate-500">{session.user.email}</p>
              </div>
              <SignOutButton signOut={signOut} />
            </div>
          </div>
        </header>

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:py-8">
          <AdminSidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </SessionProvider>
  );
}
