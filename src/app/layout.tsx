import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oulta — See the Problem. Take a Stand. Change What Happens Next.",
  description: "Oulta is the digital infrastructure for the future of collective action. We help citizens unite around real issues, take collective stands, and create measurable impact.",
  keywords: ["collective impact", "citizens", "social movements", "civil infrastructure", "collaboration", "action network", "impact stands"],
  authors: [{ name: "Oulta Foundation" }],
  openGraph: {
    title: "Oulta — Digital Headquarters of a Movement",
    description: "Unite around real issues, take collective stands, and create measurable impact.",
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
      className={`${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
