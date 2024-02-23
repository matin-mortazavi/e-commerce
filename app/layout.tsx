import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components/Common";
import "@/assets/styles/once.scss";
export const metadata: Metadata = {
  title: "e-commerce app",
  description: "developed by matin mortazavi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html theme="light" lang="en">
      <body style={{ overflowX: "hidden" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
