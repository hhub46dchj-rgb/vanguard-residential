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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:px-6">
        {/* Logo */}
        <Logo variant="light" />

        {/* Desktop & tablet (md+): full text links */}
        <nav className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white lg:px-3 lg:text-base"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/admin/login"
            className="ml-1 inline-flex h-9 items-center justify-center rounded-lg bg-emerald-600 px-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 lg:ml-2 lg:px-4"
          >
            Operator Login
          </Link>
        </nav>

        {/* Phone only (< md): compact icon buttons */}
        <nav className="flex items-center gap-0.5 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-white/10 hover:text-emerald-400 active:bg-white/20"
            >
              <item.icon className="h-5 w-5" />
            </Link>
          ))}
          <Link
            href="/admin/login"
            aria-label="Operator Login"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white transition-colors hover:bg-emerald-700 active:bg-emerald-800"
          >
            <LogIn className="h-5 w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
