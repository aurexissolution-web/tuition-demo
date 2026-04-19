import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/constants";

export function CtaBand({
  title = "Sediakan Anak Anda untuk Berjaya",
  body = "Slot pendaftaran terhad untuk sesi baharu. Hubungi kami hari ini untuk berbincang dan dapatkan sesi percuma pertama.",
  showSecondary = true,
}: {
  title?: string;
  body?: string;
  showSecondary?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(600px 260px at 90% 20%, rgba(251,191,36,0.2), transparent 60%), radial-gradient(500px 260px at 10% 90%, rgba(59,130,246,0.2), transparent 60%)",
        }}
      />
      <div className="container-px relative mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-3 text-slate-300">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="accent" size="lg" className="gap-2">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Kami
            </a>
          </Button>
          {showSecondary && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/hubungi">
                Borang Pendaftaran
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
