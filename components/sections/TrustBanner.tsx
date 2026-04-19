import { GraduationCap, Target, MapPin, HeartHandshake } from "lucide-react";

const ITEMS = [
  { icon: GraduationCap, label: "Guru Berpengalaman" },
  { icon: Target, label: "Fokus Individu" },
  { icon: HeartHandshake, label: "Pendekatan Mesra" },
  { icon: MapPin, label: "Lokasi Strategik" },
];

export function TrustBanner() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4 md:gap-6 md:py-10">
          {ITEMS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-amber/15 text-brand-amberDark">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-slate-800">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
