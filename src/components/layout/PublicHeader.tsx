"use client";
import React from "react";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-28 max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
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
          <Button asChild variant="outline" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600">
            <Link href="/admin/login">Operator Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
