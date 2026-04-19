import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Berapakah yuran kelas bulanan?",
    a: "Yuran bermula dari RM120 sebulan untuk Kelas Membaca dan RM180 sebulan untuk Tuisyen Darjah 2–6. Pakej semua subjek dan diskaun adik-beradik juga tersedia — sila hubungi kami untuk maklumat lanjut.",
  },
  {
    q: "Apakah waktu kelas?",
    a: "Kelas utama berjalan pada Isnin & Rabu jam 6:30 PTG – 9:00 MLM. Kelas membaca pada waktu petang (4:00 – 6:00), dan kelas ulang kaji intensif pada Sabtu pagi.",
  },
  {
    q: "Adakah sesi percubaan percuma ditawarkan?",
    a: "Ya. Setiap pelajar baharu layak mendapat satu sesi percubaan percuma supaya ibu bapa dan anak dapat menilai pendekatan pengajaran kami sebelum mendaftar.",
  },
  {
    q: "Berapa pelajar dalam satu kelas?",
    a: "Saiz kelas kami adalah maksimum 8 pelajar bagi memastikan setiap anak mendapat perhatian individu yang mencukupi daripada guru.",
  },
  {
    q: "Adakah ruang letak kereta disediakan?",
    a: "Ya, terdapat ruang letak kereta yang luas tepat di hadapan premis di Bandar Putra Bertam. Ibu bapa boleh menghantar dan menjemput dengan mudah.",
  },
];

export function Faq() {
  return (
    <section className="section bg-slate-50">
      <div className="container-px mx-auto max-w-4xl">
        <div className="text-center">
          <span className="eyebrow">Soalan Lazim</span>
          <h2 className="heading-2 mt-3 text-primary">Apa yang ibu bapa tanya</h2>
          <p className="mt-3 text-slate-600">
            Jawapan kepada soalan-soalan yang paling kerap ditanya tentang pendaftaran dan kelas.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-6 shadow-sm md:px-8">
          <Accordion type="single" collapsible defaultValue="item-0">
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`} className="last:border-b-0">
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
