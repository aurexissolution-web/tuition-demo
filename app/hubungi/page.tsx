import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Pusat Tuisyen Budak Rajin untuk pendaftaran dan pertanyaan. Lokasi: Bandar Putra Bertam, Kepala Batas.",
};

export default function HubungiPage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <nav className="mb-6 flex items-center gap-1 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-primary">
              Laman Utama
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700">Hubungi Kami</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">Hubungi Kami</span>
            <h1 className="heading-1 mt-3 text-primary">
              Mari bincang tentang anak anda
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Isi borang di bawah atau hubungi kami terus melalui WhatsApp. Kami akan respon dalam tempoh 24 jam bekerja.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-2xl font-bold text-primary">Borang Pendaftaran</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Isi maklumat di bawah dan kami akan membuka WhatsApp dengan mesej yang telah disediakan untuk anda.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <ContactInfo />
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
