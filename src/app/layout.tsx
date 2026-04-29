import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orel Sisso — Modern Web Solutions for Small Businesses",
  description:
    "Modern, fast, mobile-first websites and lead-gen pages for small and medium businesses. Direct communication, no agency overhead.",
  openGraph: {
    title: "Orel Sisso — Modern Web Solutions",
    description:
      "Lead-gen pages, mobile-first design, and high-performance sites for SMBs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
