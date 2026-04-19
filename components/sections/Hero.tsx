import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/constants";

const PARENT_AVATARS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
];

const BENTO_IMAGES = {
  square:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  tall:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
};

const SCHEDULE = [
  { day: "Isn", subject: "Matematik", time: "6:30 PTG" },
  { day: "Rab", subject: "B. Melayu", time: "7:30 PTG" },
  { day: "Sab", subject: "Sains", time: "9:00 PG" },
];

function AmberUnderline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 240 14"
      fill="none"
      preserveAspectRatio="none"
      className="pointer-events-none absolute -bottom-2 left-0 h-[0.35em] w-full md:-bottom-3"
    >
      <defs>
        <linearGradient id="amberGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(43 96% 56%)" />
          <stop offset="100%" stopColor="hsl(38 92% 50%)" />
        </linearGradient>
      </defs>
      <path
        d="M3 8 C 60 2, 120 2, 180 6 S 230 11, 237 8"
        stroke="url(#amberGrad)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        pathLength={1}
        className="animate-draw-underline"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(1100px 540px at 88% -8%, rgba(251,191,36,0.28), transparent 60%), radial-gradient(900px 450px at -8% 105%, rgba(59,130,246,0.28), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.55) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-14 py-20 md:py-24 lg:grid-cols-12 lg:gap-10 lg:py-28">
        <div className="animate-fade-up lg:col-span-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-2 py-2 pr-5 backdrop-blur-sm">
            <div className="flex -space-x-2">
              {PARENT_AVATARS.map((src, i) => (
                <span
                  key={i}
                  className="inline-block h-7 w-7 overflow-hidden rounded-full ring-2 ring-primary"
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </span>
              ))}
            </div>
            <span className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-brand-amber text-brand-amber"
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold tracking-wide text-white">
                5.0
              </span>
            </div>
            <span className="text-[11px] text-slate-300">
              Dipercayai +120 ibu bapa
            </span>
          </div>

          <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-amber">
            <Sparkles className="h-3.5 w-3.5" />
            Pusat Tuisyen Premium · Kepala Batas
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[4rem]">
            Membentuk Masa Depan{" "}
            <span className="relative inline-block whitespace-nowrap">
              Cemerlang
              <AmberUnderline />
            </span>
            <br className="hidden sm:inline" /> Anak Anda.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-[17px]">
            Kelas tuisyen yang mesra pelajar untuk Darjah 2–6 dan Kelas Membaca.
            Guru berpengalaman, kumpulan kecil, dan suasana yang membantu anak anda
            belajar dengan yakin.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg" className="gap-2 shadow-lg shadow-amber-500/20">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Hubungi via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href="/program">
                Lihat Program
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { label: "Tahun Pengalaman", value: "8+" },
              { label: "Pelajar Aktif", value: "120+" },
              { label: "Kadar Kelulusan", value: "98%" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] uppercase tracking-wider text-slate-400">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white md:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-[520px] lg:ml-auto">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-amber/15 via-white/0 to-blue-400/15 blur-2xl"
            />

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="flex flex-col gap-3 pt-6 md:gap-4 md:pt-10">
                <figure className="group relative aspect-square overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-xl">
                  <img
                    src={BENTO_IMAGES.square}
                    alt="Pelajar dengan buku"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  <figcaption className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-primary shadow-md backdrop-blur-sm">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Kelas aktif
                  </figcaption>
                </figure>

                <figure className="relative overflow-hidden rounded-3xl bg-white p-5 text-slate-900 shadow-xl ring-1 ring-white/10 md:p-6 animate-float-soft">
                  <div
                    aria-hidden
                    className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-amber/10"
                  />
                  <div className="relative flex items-center gap-0.5" aria-label="5 bintang">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-brand-amber text-brand-amber" />
                    ))}
                  </div>
                  <blockquote className="relative mt-3 text-[13px] font-medium leading-snug text-slate-800">
                    “Markah Sains anak saya naik dari C ke A dalam satu penggal. Terima kasih cikgu!”
                  </blockquote>
                  <figcaption className="relative mt-4 flex items-center gap-2.5 border-t border-slate-100 pt-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                      RI
                    </span>
                    <div className="leading-tight">
                      <p className="text-[12px] font-semibold text-primary">Puan Rosmah I.</p>
                      <p className="text-[10px] text-slate-500">Ibu · Darjah 4</p>
                    </div>
                  </figcaption>
                </figure>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-xl">
                  <img
                    src={BENTO_IMAGES.tall}
                    alt="Pelajar membaca bersama"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                  <figcaption className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-2xl bg-white/95 p-2.5 pr-3.5 text-slate-900 shadow-lg backdrop-blur-sm md:inset-x-4 md:bottom-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-amber/20 text-brand-amberDark">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[12px] font-semibold">Maks. 8 pelajar</p>
                      <p className="text-[10px] text-slate-500">Perhatian individu</p>
                    </div>
                  </figcaption>
                </figure>

                <div className="relative overflow-hidden rounded-3xl bg-white p-5 text-slate-900 shadow-xl ring-1 ring-white/10 md:p-6">
                  <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                      <CalendarDays className="h-4 w-4" />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">
                        Jadual Minggu Ini
                      </p>
                      <p className="text-[13px] font-semibold text-primary">3 sesi aktif</p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2.5">
                    {SCHEDULE.map((s) => (
                      <li key={s.day} className="flex items-center gap-2.5 text-xs">
                        <span className="flex h-6 w-9 items-center justify-center rounded-md bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                          {s.day}
                        </span>
                        <span className="flex-1 truncate font-medium text-slate-800">
                          {s.subject}
                        </span>
                        <span className="text-[11px] font-medium tabular-nums text-slate-500">
                          {s.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
