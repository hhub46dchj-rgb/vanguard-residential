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
        {/* Background video */}
        <div className="relative min-h-screen">
          <video
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="/background.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="relative z-10 flex flex-col min-h-screen">
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
          </div>
        </div>
      </body>
    </html>
  );
}
