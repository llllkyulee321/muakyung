import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUAKYUNG | A Hybrid Space",
  description:
    "MUAKYUNG is a hybrid space of living, creating, gathering, and publishing — in nature.",
  openGraph: {
    title: "MUAKYUNG",
    description:
      "A hybrid space of home, studio, garden, gathering, and publishing.",
    url: "https://muakyung.com",
    siteName: "MUAKYUNG",
    images: [
      {
        url: "/og.jpg", // ✅ 여기서는 상대경로로 두는 게 안전
        width: 1200,
        height: 630,
        alt: "MUAKYUNG",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
