import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ProgramCard, type Program } from "@/components/sections/ProgramCard";
import { TeacherCard, type Teacher } from "@/components/sections/TeacherCard";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Program Akademik",
  description:
    "Kelas Membaca, Tuisyen Darjah 2–6, dan Kelas Malam di Pusat Tuisyen Budak Rajin, Bandar Putra Bertam.",
};

const PROGRAMS: Program[] = [
  {
    slug: "kelas-membaca",
    eyebrow: "Umur 5 – 8 tahun",
    title: "Kelas Membaca",
    description:
      "Membina asas literasi yang kukuh melalui pendekatan fonik yang menyeronokkan. Anak anda akan belajar mengenal huruf, menyebut suku kata, dan membina keyakinan untuk membaca ayat penuh.",
    features: [
      "Pengenalan fonik & suku kata",
      "Latihan membaca ayat bergambar",
      "Aktiviti interaktif & nyanyian",
      "Laporan kemajuan mingguan",
    ],
    schedule: "Isnin – Khamis · 4:00 PG – 6:00 PTG",
    price: "RM120 / bulan",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    cta: "Tempah Sesi Percuma",
  },
  {
    slug: "darjah-2-6",
    eyebrow: "Darjah 2 – 6",
    title: "Tuisyen Sekolah Rendah",
    description:
      "Persediaan menyeluruh untuk Bahasa Melayu, Bahasa Inggeris, Matematik, dan Sains. Nota ringkas, kuiz mingguan, dan latih tubi selaras dengan sukatan KSSR.",
    features: [
      "4 subjek teras",
      "Nota & modul eksklusif",
      "Kuiz topikal setiap minggu",
      "Kelas ulang kaji peperiksaan",
      "Saiz kelas kecil (maks. 8 pelajar)",
      "Laporan prestasi bulanan",
    ],
    schedule: "Isnin & Rabu · 6:30 PTG – 9:00 MLM",
    price: "RM180 / bulan",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
    cta: "Dapatkan Jadual Penuh",
  },
  {
    slug: "kelas-malam",
    eyebrow: "Kelas Intensif",
    title: "Kelas Malam & Hujung Minggu",
    description:
      "Jadual fleksibel untuk ibu bapa bekerja. Kelas intensif ulang kaji pada hujung minggu bagi menjamin pelajar bersedia menghadapi peperiksaan utama.",
    features: [
      "Kelas malam sehingga 9:30 MLM",
      "Sesi ulang kaji Sabtu",
      "Fokus topik sukar & soalan ramalan",
      "Mentor khas untuk setiap subjek",
    ],
    schedule: "Sabtu · 9:00 PG – 1:00 PTG",
    price: "RM150 / bulan",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    cta: "Tempah Slot Sekarang",
  },
];

const TEACHERS: Teacher[] = [
  {
    name: "Cikgu Azizah Kamarudin",
    subjects: ["Matematik", "Sains"],
    experience: "12 tahun pengalaman",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
    bio: "Bekas guru kanan sekolah rendah. Pakar memudahkan konsep Matematik untuk pelajar yang lemah.",
  },
  {
    name: "Cikgu Zizan Abdullah",
    subjects: ["Bahasa Melayu", "Bahasa Inggeris"],
    experience: "9 tahun pengalaman",
    image:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=700&q=80",
    bio: "Graduan Pendidikan Bahasa, USM. Menekankan pendekatan komunikatif & latihan karangan berstruktur.",
  },
  {
    name: "Cikgu Nur Farihah",
    subjects: ["Kelas Membaca", "Pra-sekolah"],
    experience: "7 tahun pengalaman",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80",
    bio: "Pakar fonik dan pemulihan bacaan. Dicintai pelajar kecil kerana pendekatan yang penuh kesabaran.",
  },
  {
    name: "Cikgu Hafiz Rahman",
    subjects: ["Matematik", "Sains", "UPSR"],
    experience: "6 tahun pengalaman",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
    bio: "Mentor peperiksaan. Menyediakan soalan ramalan dan teknik menjawab yang terbukti berkesan.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
          <nav className="mb-6 flex items-center gap-1 text-xs font-medium text-slate-500">
            <Link href="/" className="hover:text-primary">
              Laman Utama
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700">Program Akademik</span>
          </nav>
          <div className="max-w-3xl">
            <span className="eyebrow">Program Kami</span>
            <h1 className="heading-1 mt-3 text-primary">
              Program yang dirancang rapi untuk anak anda
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Setiap program direka berdasarkan tahap pembelajaran, minat, dan matlamat akademik pelajar.
              Pilih program yang paling sesuai untuk anak anda.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px mx-auto max-w-7xl space-y-24">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.slug} program={program} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Barisan Pendidik</span>
            <h2 className="heading-2 mt-3 text-primary">
              Guru yang berpengalaman & berdedikasi
            </h2>
            <p className="mt-4 text-slate-600">
              Setiap guru kami melalui proses saringan ketat dan latihan berterusan supaya anak anda
              mendapat pengajaran terbaik.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEACHERS.map((t) => (
              <TeacherCard key={t.name} teacher={t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Bersedia untuk mendaftar?"
        body="Kami sedia membantu anda memilih program yang paling sesuai. Hubungi kami untuk sesi konsultasi percuma."
      />
    </>
  );
}
