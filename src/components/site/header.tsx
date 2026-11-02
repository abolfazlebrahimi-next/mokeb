"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navSections, siteConfig } from "@/data/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70 shadow-[0_8px_30px_-18px_rgba(62,39,31,0.45)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => go(e, "home")}
          className="group flex items-center gap-3"
          aria-label={siteConfig.name}
        >
          <span
            className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-primary/40 bg-card shadow-inner"
            aria-hidden
          >
            { }
            <img
              src={siteConfig.images.logo}
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-darya text-lg text-primary">{siteConfig.shortName}</span>
            <span className="font-vazir text-[11px] text-muted-foreground">
              {siteConfig.subtitle}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => go(e, s.id)}
              className="relative rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/70 text-primary md:hidden"
              aria-label="باز کردن منو"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[82%] max-w-sm border-l border-border bg-background p-0"
          >
            <SheetHeader className="border-b border-border/70 px-5 pb-4 pt-5 text-right">
              <SheetTitle className="font-darya text-right text-xl text-primary">
                {siteConfig.name} {siteConfig.honorific}
              </SheetTitle>
              <p className="text-right text-xs text-muted-foreground">
                {siteConfig.subtitle}
              </p>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-3 py-4">
              {navSections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => go(e, s.id)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-foreground/90 transition-colors hover:bg-secondary/60 hover:text-primary"
                >
                  <span className="font-medium">{s.label}</span>
                  <span className="font-darya text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-auto px-5 py-4 text-center">
              <p className="font-darya text-base text-primary">{siteConfig.motto}</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
