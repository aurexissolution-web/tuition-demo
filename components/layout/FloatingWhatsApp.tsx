"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname === "/hubungi") return null;

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 md:bottom-6 md:right-6"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-slate-200 transition-opacity group-hover:opacity-100 md:block">
        Chat dengan kami
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/30 transition-transform hover:scale-105">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366] opacity-60" />
        <MessageCircle className="relative h-6 w-6" fill="currentColor" strokeWidth={0} />
      </span>
    </a>
  );
}
