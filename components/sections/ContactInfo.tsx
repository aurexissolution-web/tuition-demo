import { Clock, MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { BUSINESS, waLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-primary">Maklumat Hubungan</h3>
        <ul className="mt-5 space-y-5 text-sm">
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amberDark">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Alamat</p>
              <p className="mt-1 leading-relaxed text-slate-700">{BUSINESS.address}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amberDark">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Telefon</p>
              <a
                href={`tel:${BUSINESS.phoneIntl}`}
                className="mt-1 block font-semibold text-primary hover:underline"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amberDark">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">E-mel</p>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="mt-1 block font-semibold text-primary hover:underline"
              >
                {BUSINESS.email}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amberDark">
              <Clock className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-slate-500">Waktu Operasi</p>
              <dl className="mt-2 space-y-1 text-slate-700">
                <div className="flex justify-between gap-4">
                  <dt>Isnin – Jumaat</dt>
                  <dd className="font-medium">{BUSINESS.hours.weekday}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sabtu</dt>
                  <dd className="font-medium">{BUSINESS.hours.saturday}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Ahad</dt>
                  <dd className="font-medium text-slate-500">{BUSINESS.hours.sunday}</dd>
                </div>
              </dl>
            </div>
          </li>
        </ul>

        <Button asChild variant="whatsapp" className="mt-6 w-full gap-2">
          <a href={waLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Chat melalui WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
