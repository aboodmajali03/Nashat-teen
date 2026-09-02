import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "نقشة طين | فخار يصنع باليد ويحكي الحكاية",
  description: "متجر إلكتروني متخصص في المنتجات الفخارية والخزفية اليدوية. أكواب، أواني، تحف، وأدوات ديكور مصنوعة بحب وإتقان.",
  keywords: ["فخار", "خزف", "منتجات يدوية", "ديكور", "تراث", "نقشة طين"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
