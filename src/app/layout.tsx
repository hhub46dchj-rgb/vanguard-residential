import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { PublicHeader } from "@/components/layout/PublicHeader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Vanguard Residential Acquisitions",
  description:
    "Transforming Property Potential into Shared Success. Real estate acquisitions for sellers, investors, and joint-venture partners.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Vanguard Residential Acquisitions",
    description:
      "Transforming Property Potential into Shared Success. Real estate acquisitions for sellers, investors, and joint-venture partners.",
    url: "https://vanguardresidentialacquisitions.com",
    siteName: "Vanguard Residential Acquisitions",
    images: [
      {
        url: "https://vanguardresidentialacquisitions.com/og-image.jpg",
        width: 839,
        height: 846,
        alt: "Vanguard Residential Acquisitions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanguard Residential Acquisitions",
    description:
      "Transforming Property Potential into Shared Success. Real estate acquisitions for sellers, investors, and joint-venture partners.",
    images: ["https://vanguardresidentialacquisitions.com/og-image.jpg"],
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
