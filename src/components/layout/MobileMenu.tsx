"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Users, Handshake, Info, HelpCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "/sellers", label: "Sellers", icon: Home },
  { href: "/investors", label: "Investors", icon: Users },
  { href: "/partners", label: "Partners", icon: Handshake },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  // Swipe right to close
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX.current;
    const diffY = Math.abs(touchEndY - touchStartY.current);

    // Only swipe right, and horizontal movement must be greater than vertical
    if (diffX > 80 && diffX > diffY) {
      closeMenu();
    }
  }, [closeMenu]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, closeMenu]);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl text-gray-300 transition-colors hover:bg-gray-800 hover:text-white active:bg-gray-700"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className="relative h-6 w-6">
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          >
            <Menu className="h-6 w-6" />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          >
            <X className="h-6 w-6" />
          </span>
        </span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-gray-950 shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ willChange: "transform" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">Menu</span>
          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-400 transition-colors hover:bg-gray-800 hover:text-white active:bg-gray-700"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Swipe hint */}
        <div className="flex justify-center py-2">
          <div className="h-1 w-10 rounded-full bg-gray-700" />
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {NAV_LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white active:bg-gray-700 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${i * 50}ms` : "0ms",
                }}
              >
                <Icon className="h-5 w-5 text-emerald-400" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom gradient accent */}
        <div className="h-1 bg-gradient-to-r from-emerald-500 to-emerald-300" />
      </div>
    </div>
  );
}
