import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";
import { BUSINESS, NAV_LINKS, waLink } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-slate-200">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="rounded-xl bg-white/5 p-4 inline-block ring-1 ring-white/10">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-300">
              Pusat tuisyen premium untuk pelajar Darjah 2–6 dan Kelas Membaca.
              Fokus individu, guru berpengalaman, persekitaran selesa.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-amber hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-amber hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-amber">
              Pautan Pantas
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-amber">
              Hubungi Kami
            </h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                <span className="text-slate-300">{BUSINESS.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                <a
                  href={`tel:${BUSINESS.phoneIntl}`}
                  className="text-slate-300 hover:text-white"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-slate-300 hover:text-white"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" />
                <div className="text-slate-300">
                  <div>Isnin – Jumaat: {BUSINESS.hours.weekday}</div>
                  <div>Sabtu: {BUSINESS.hours.saturday}</div>
                  <div>Ahad: {BUSINESS.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. Hak Cipta Terpelihara.</p>
          <p className="text-slate-500">Direka dengan fokus kepada pencapaian pelajar.</p>
        </div>
      </div>
    </footer>
  );
}
