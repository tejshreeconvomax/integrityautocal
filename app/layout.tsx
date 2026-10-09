import type { Metadata } from "next";
import { Inter, Bebas_Neue, Fraunces, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Integrity Auto Salon — Ceramic Coating, Paint Correction & Detailing · Redondo Beach, CA",
  description:
    "Integrity Auto Salon is Redondo Beach's premier destination for ceramic coating, paint correction, detailing, window tint and boat detailing. In-shop and mobile across the South Bay.",
  metadataBase: new URL("https://integrityautocal.com"),
  openGraph: {
    title: "Integrity Auto Salon",
    description:
      "Ceramic coating, paint correction, detailing and tint. Redondo Beach, CA.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrity Auto Salon",
    description:
      "Ceramic coating, paint correction, detailing and tint. Redondo Beach, CA.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} ${fraunces.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-off selection:bg-red selection:text-white">
        {children}
      </body>
    </html>
  );
}
