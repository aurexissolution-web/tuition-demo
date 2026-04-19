import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { BUSINESS } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Pusat tuisyen premium di Kepala Batas, Pulau Pinang untuk pelajar Darjah 2–6 & Kelas Membaca. Fokus individu, guru berpengalaman.",
  keywords: [
    "tuisyen kepala batas",
    "pusat tuisyen bertam",
    "kelas membaca",
    "tuisyen sekolah rendah",
    "tuisyen pulau pinang",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms" className={jakarta.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
