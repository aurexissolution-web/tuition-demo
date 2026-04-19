import Link from "next/link";
import { BookMarked, Library, Moon, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PROGRAMS = [
  {
    slug: "kelas-membaca",
    icon: BookMarked,
    badge: "Umur 5 – 8",
    title: "Kelas Membaca",
    body: "Asas literasi Bahasa Melayu & Inggeris. Fonik, pengenalan suku kata, dan membina keyakinan membaca.",
  },
  {
    slug: "darjah-2-6",
    icon: Library,
    badge: "Darjah 2 – 6",
    title: "Tuisyen Sekolah Rendah",
    body: "BM, BI, Matematik, dan Sains. Latih tubi, kuiz mingguan, dan persediaan khas menghadapi peperiksaan.",
  },
  {
    slug: "kelas-malam",
    icon: Moon,
    badge: "Fleksibel",
    title: "Kelas Malam / Intensif",
    body: "Jadual petang & malam untuk ibu bapa yang sibuk. Kelas intensif hujung minggu untuk ulang kaji.",
  },
];

export function ProgramPreview() {
  return (
    <section className="section bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Program Akademik</span>
            <h2 className="heading-2 mt-3 text-primary">
              Program yang direka untuk setiap tahap
            </h2>
            <p className="mt-4 text-slate-600">
              Daripada asas membaca sehingga persediaan peperiksaan, kami membantu anak anda berkembang dengan yakin.
            </p>
          </div>
          <Link
            href="/program"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-amberDark hover:underline"
          >
            Semua program <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROGRAMS.map(({ slug, icon: Icon, badge, title, body }) => (
            <Link key={slug} href={`/program#${slug}`} className="group">
              <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amberDark">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant="accent">{badge}</Badge>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-primary">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{body}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-brand-amberDark">
                    Ketahui lagi
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
