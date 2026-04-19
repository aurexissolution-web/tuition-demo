import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-extrabold tracking-tight text-white shadow-sm ring-1 ring-brand-amber/50">
        BR
      </span>
      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-amberDark">
            Pusat Tuisyen
          </span>
          <span className="text-base font-bold text-primary">Budak Rajin</span>
        </span>
      )}
    </Link>
  );
}
