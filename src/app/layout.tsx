import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BigJDev Pay",
  description: "Payment gateway operations dashboard demo built with Next.js, TypeScript and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-surface text-ink antialiased">{children}</body>
    </html>
  );
}