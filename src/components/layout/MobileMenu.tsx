"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Users, Handshake, Info, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/sellers", label: "Sellers", icon: Home },
  { href: "/investors", label: "Investors", icon: Users },
  { href: "/partners", label: "Partners", icon: Handshake },
  { href: "/about", label: "About Us", icon: Info },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchCurrent, setTouchCurrent] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setTouchStart(null);
    setTouchCurrent(null);
    setIsDragging(false);
  }, []);

  // Swipe right to close
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStart === null) return;
    setTouchCurrent(e.touches[0].clientX);
  }, [touchStart]);

  const handleTouchEnd = useCallback(() => {
    if (touchStart !== null && touchCurrent !== null) {
      const diff = touchCurrent - touchStart;
      if (diff > 80) {
        closeMenu();
      }
    }
    setTouchStart(null);
    setTouchCurrent(null);
    setIsDragging(false);
  }, [touchStart, touchCurrent, closeMenu]);

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

  const dragOffset = isDragging && touchStart !== null && touchCurrent !== null
    ? Math.max(0, touchCurrent - touchStart)
    : 0;

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        className="relative z-50 text-gray-300 hover:text-white hover:bg-gray-800 p-2"
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
      </Button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 z-50 w-72 bg-gradient-to-b from-gray-900 to-black shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transform: `translateX(${open ? dragOffset : '100'}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Swipe indicator */}
        <div className="flex justify-center pt-4">
          <div className="h-1 w-10 rounded-full bg-gray-600" />
        </div>

        {/* Nav links */}
        <nav className="mt-8 flex flex-col gap-1 px-4">
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
                  transitionDelay: open ? `${i * 60}ms` : "0ms",
                }}
              >
                <Icon className="h-5 w-5 text-emerald-400" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300" />
      </div>
    </div>
  );
}
