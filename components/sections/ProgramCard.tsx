import { Check, Clock, MessageCircle, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { waLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export interface Program {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  schedule: string;
  price: string;
  image: string;
  cta: string;
}

export function ProgramCard({ program, reverse = false }: { program: Program; reverse?: boolean }) {
  const waMsg = `Salam, saya berminat dengan ${program.title} di Pusat Tuisyen Budak Rajin. Boleh terangkan lanjut?`;

  return (
    <article
      id={program.slug}
      className={cn(
        "grid items-center gap-10 scroll-mt-24 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>div:first-child]:order-2",
      )}
    >
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-slate-200">
          <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
        </div>
        <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-100 md:left-auto md:right-6 md:max-w-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amberDark">
              <Wallet className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500">Yuran</p>
              <p className="text-base font-bold text-primary">{program.price}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Badge variant="accent" className="text-[11px]">
          {program.eyebrow}
        </Badge>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          {program.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{program.description}</p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {program.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <Check className="h-3 w-3" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <Clock className="h-5 w-5 text-brand-amberDark" />
          <p className="text-sm text-slate-700">{program.schedule}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="accent" size="lg" className="gap-2">
            <a href={waLink(waMsg)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              {program.cta}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/hubungi">Borang Pendaftaran</a>
          </Button>
        </div>
      </div>
    </article>
  );
}
