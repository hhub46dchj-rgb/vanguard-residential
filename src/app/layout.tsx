import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { PublicHeader } from "@/components/layout/PublicHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanguard Residential Acquisitions",
  description:
    "Transforming Property Potential into Shared Success. Real estate acquisitions for sellers, investors, and joint-venture partners.",
  openGraph: {
    title: "Vanguard Residential Acquisitions",
    description:
      "Transforming Property Potential into Shared Success. Real estate acquisitions for sellers, investors, and joint-venture partners.",
    url: "https://vanguardresidentialacquisitions.com",
    siteName: "Vanguard Residential Acquisitions",
    type: "website",
  },
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900 dark:bg-black dark:text-gray-100">
        <PublicHeader />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
