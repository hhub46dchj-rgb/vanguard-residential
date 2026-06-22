import Link from "next/link";
import { Home, Users, Handshake, Info, HelpCircle, LogIn } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

const NAV = [
  { href: "/sellers", label: "Sellers", icon: Home },
  { href: "/investors", label: "Investors", icon: Users },
  { href: "/partners", label: "Partners", icon: Handshake },
  { href: "/about", label: "About", icon: Info },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6">
        {/* Logo */}
        <Logo variant="light" />

        {/* Desktop: text links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/admin/login"
            className="ml-2 inline-flex h-9 items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            Operator Login
          </Link>
        </nav>

        {/* Tablet/mobile (sm–lg): icon links */}
        <nav className="flex items-center gap-0.5 sm:gap-1 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-white/10 hover:text-emerald-400 sm:h-10 sm:w-10"
            >
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
          <Link
            href="/admin/login"
            aria-label="Operator Login"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white transition-colors hover:bg-emerald-700 sm:h-10 sm:w-10"
          >
            <LogIn className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
