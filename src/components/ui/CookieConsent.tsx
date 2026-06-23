"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 rounded-2xl border border-white/10 px-5 py-4 sm:flex-row sm:justify-between" style={{ backgroundColor: "#1a1a1a" }}>
        <p className="text-center text-xs leading-relaxed text-gray-400 sm:text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <a href="/privacy" className="underline transition-colors hover:text-emerald-400">Privacy Policy</a>
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-lg bg-emerald-500 px-5 py-2 text-xs font-bold text-white transition-all hover:bg-emerald-400 sm:text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
