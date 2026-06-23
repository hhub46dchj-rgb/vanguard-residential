"use client";

import { Phone, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 lg:hidden">
      <a
        href="tel:+12399996818"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/40 active:scale-95"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href="sms:+12399996818"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
        aria-label="Text us"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
