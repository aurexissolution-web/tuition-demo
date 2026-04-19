import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Puan Nurul Hafizah",
    role: "Ibu kepada Danial, Darjah 5",
    quote:
      "Anak saya yang dulunya kurang yakin dalam Matematik kini sudah berani bertanya soalan di sekolah. Cikgu-cikgu di Budak Rajin sangat sabar dan pendekatannya mesra.",
  },
  {
    name: "Encik Faizul Azman",
    role: "Bapa kepada Aleeya, Darjah 3",
    quote:
      "Kelas membaca di sini sangat berstruktur. Dalam tempoh 3 bulan sahaja, Aleeya sudah boleh membaca ayat panjang dengan lancar. Sangat berbaloi.",
  },
  {
    name: "Puan Siti Aminah",
    role: "Ibu kepada Aiman, Darjah 6",
    quote:
      "Persekitaran yang selesa dan teratur. Saya rasa tenang bila hantar anak ke sini. Guru sentiasa update progress melalui WhatsApp — sangat profesional.",
  },
  {
    name: "Puan Rosmah Ibrahim",
    role: "Ibu kepada Dina, Darjah 4",
    quote:
      "Kumpulan kelas kecil jadi anak saya dapat perhatian penuh. Markah Sains dia naik dari C ke A dalam satu penggal. Terima kasih cikgu!",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 bintang">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-brand-amber text-brand-amber" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section bg-slate-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimoni Ibu Bapa</span>
          <h2 className="heading-2 mt-3 text-primary">Dipercayai oleh keluarga di Bertam</h2>
          <p className="mt-4 text-slate-600">
            Kata-kata daripada ibu bapa yang telah menyaksikan perkembangan positif anak mereka.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="relative overflow-hidden">
              <CardContent className="p-7">
                <Quote
                  className="absolute -right-2 -top-2 h-16 w-16 text-brand-amber/10"
                  strokeWidth={1.5}
                />
                <Stars />
                <p className="relative mt-4 text-[15px] leading-relaxed text-slate-700">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/5 text-sm font-bold text-primary">
                    {t.name
                      .split(" ")
                      .slice(-2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
