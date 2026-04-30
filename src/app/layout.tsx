import type { Metadata } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Fraunces({
  variable: "--font-serif",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orel Sisso — Modern Websites for Small Businesses",
  description:
    "Fast, mobile-first websites and lead-gen pages for small and medium businesses. Direct communication, real results.",
  openGraph: {
    title: "Orel Sisso — Modern Websites for Small Businesses",
    description:
      "Lead-gen pages, mobile-first design, and high-performance sites for SMBs. Direct communication, real results.",
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
      className={`${sans.variable} ${serif.variable} ${mono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans bg-background text-foreground"
        suppressHydrationWarning
      >
        <div className="grain pointer-events-none fixed inset-0 z-50 opacity-[0.06] mix-blend-multiply" />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
