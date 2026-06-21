import React, { useEffect } from "react";
"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo variant="light" />
        <nav className="flex items-center gap-2 sm:gap-4">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-gray-800">
            <Link href="/sellers">Sellers</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-gray-800">
            <Link href="/investors">Investors</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex text-gray-300 hover:text-white hover:bg-gray-800">
            <Link href="/partners">Partners</Link>
          </Button>
          <ThemeToggleButton />
          <Button asChild variant="outline" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600">
            <Link href="/admin/login">Operator Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return document.documentElement.classList.contains('dark');
  });

  // Ensure the HTML tag has the correct class on mount
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
