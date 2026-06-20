import { Suspense } from "react";
import { Logo } from "@/components/brand/Logo";
import { LoginForm } from "./LoginForm";

export const metadata = { title: "Operator Login — Vanguard Residential Acquisitions" };

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-900 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo variant="light" href={null} />
        </div>

        <div className="rounded-2xl border border-navy-800 bg-navy-50/5 p-8 backdrop-blur-sm">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Operator Login</h1>
            <p className="mt-1.5 text-sm text-navy-300">
              Secure access for Vanguard Residential Acquisitions operators.
            </p>
          </div>
          <Suspense fallback={<div className="mt-6 h-64" />}>
            <LoginForm />
          </Suspense>
        </div>

        <p className="mt-6 text-center text-xs text-navy-400">
          Authorized personnel only. All activity is logged.
        </p>
      </div>
    </main>
  );
}
