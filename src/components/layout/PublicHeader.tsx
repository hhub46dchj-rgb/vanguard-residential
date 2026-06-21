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
  const [theme, setTheme] = useState(() => (typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') ? 'dark' : 'light' : 'dark'));

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
