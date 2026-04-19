import { BUSINESS } from "@/lib/constants";

export function MapEmbed() {
  const src = `https://www.google.com/maps?q=${BUSINESS.mapsQuery}&output=embed`;
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
      <iframe
        title={`Peta ${BUSINESS.name}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[320px] w-full md:h-[360px]"
        allowFullScreen
      />
    </div>
  );
}
