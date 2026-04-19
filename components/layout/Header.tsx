"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/Logo";
import { NAV_LINKS, BUSINESS, waLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur-lg">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 md:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary",
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand-amber" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden text-slate-600 lg:inline-flex"
          >
            <a href={`tel:${BUSINESS.phoneIntl}`}>
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </Button>
          <Button asChild variant="accent" size="sm" className="hidden md:inline-flex">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-primary text-white"
                          : "text-slate-700 hover:bg-slate-100",
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 space-y-3">
                <Button asChild variant="accent" className="w-full">
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    WhatsApp Kami
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={`tel:${BUSINESS.phoneIntl}`}>
                    <Phone className="h-4 w-4" />
                    {BUSINESS.phone}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
