import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rayfaem Portfolio Website",
  description: "Creating a portfolio Website using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
