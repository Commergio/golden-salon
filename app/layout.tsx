import type { Metadata, Viewport } from "next";
import { Cairo, Tajawal, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClientEffects } from "@/components/effects/ClientEffects";
import { JsonLd } from "@/components/seo/JsonLd";
import { SkipLink } from "@/components/seo/SkipLink";
import { buildPageMetadata } from "@/lib/seo";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = buildPageMetadata();

export const viewport: Viewport = {
  themeColor: "#F8F6F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar-SA"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable} ${playfair.variable}`}
    >
      <body className="relative min-h-dvh overflow-x-clip">
        <SkipLink />
        <JsonLd />
        <ClientEffects />
        <Navbar />
        <main id="main-content" className="relative z-10 w-full overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
