import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanguard Residential Acquisitions",
  description:
    "Transforming Property Potential into Shared Success. Real estate acquisitions for sellers, investors, and joint-venture partners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              toast: "rounded-xl border-border font-sans",
            },
          }}
          richColors
        />
      </body>
    </html>
  );
}
