"use client";
import React from "react";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:min-h-28 sm:px-6">
        <Logo variant="light" />
        <nav className="hidden items-center gap-1 lg:flex lg:gap-2">
          <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
            <Link href="/sellers">Sellers</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
            <Link href="/investors">Investors</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
            <Link href="/partners">Partners</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-800">
            <Link href="/faq">FAQ</Link>
          </Button>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
