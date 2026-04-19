import { BookOpen, Smile, MapPinned } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VALUES = [
  {
    icon: BookOpen,
    title: "Persekitaran Selesa",
    body: "Ruang belajar yang teratur, bercahaya, dan tenang — direka khas supaya pelajar fokus sepenuhnya tanpa gangguan.",
  },
  {
    icon: Smile,
    title: "Pendekatan Mesra Pelajar",
    body: "Setiap anak diberi perhatian individu. Guru kami memahami tahap setiap pelajar dan mendorong mereka belajar dengan yakin.",
  },
  {
    icon: MapPinned,
    title: "Mudah Akses",
    body: "Terletak di Bandar Putra Bertam dengan ruang letak kereta yang luas — senang untuk ibu bapa hantar dan jemput.",
  },
];

export function ValueProps() {
  return (
    <section className="section bg-slate-50">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Mengapa Pilih Kami</span>
          <h2 className="heading-2 mt-3 text-primary">
            Dibina atas kepercayaan ibu bapa
          </h2>
          <p className="mt-4 text-slate-600">
            Kami bukan sekadar pusat tuisyen. Kami rakan kongsi dalam perjalanan akademik anak anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm ring-4 ring-brand-amber/20 transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
