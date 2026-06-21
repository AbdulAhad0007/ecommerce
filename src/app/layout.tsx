import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LUXE — Premium E-Commerce Store",
  description:
    "Discover curated collections of premium products. Shop the latest trends in electronics, fashion, home, beauty, and more with exclusive deals and fast shipping.",
  keywords: [
    "e-commerce",
    "online shopping",
    "premium products",
    "fashion",
    "electronics",
    "deals",
  ],
  openGraph: {
    title: "LUXE — Premium E-Commerce Store",
    description:
      "Discover curated collections of premium products with exclusive deals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
