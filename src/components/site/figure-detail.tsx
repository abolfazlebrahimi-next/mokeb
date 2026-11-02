"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { figures, type Figure } from "@/data/figures";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function FigureDetail({
  id,
  onBack,
  onNavigate,
}: {
  id: string;
  onBack: () => void;
  onNavigate: (id: string) => void;
}) {
  const idx = figures.findIndex((f) => f.id === id);
  const figure = figures[idx];
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  if (!figure) {
    return (
      <NotFound
        onBack={onBack}
        message="زندگینامه‌ای با این شناسه پیدا نشد."
      />
    );
  }

  const prev = figures[(idx - 1 + figures.length) % figures.length];
  const next = figures[(idx + 1) % figures.length];

  const blocks: { label: string; text: string }[] = [
    { label: "پیشینه تاریخی", text: figure.background },
    { label: "خانواده و نسب", text: figure.lineage },
    { label: "جایگاه و نقش", text: figure.role },
    { label: "لحظه‌های ماندگار", text: figure.notableMoments },
    { label: "روایت شهادت", text: figure.martyrdom },
    { label: "جایگاه تاریخی و معنوی", text: figure.significance },
  ];

  return (
    <article className="min-h-screen pb-16">
      {/* Sticky back bar */}
      <BackBar onBack={onBack} label="بازگشت به صفحهٔ اصلی" />

      {/* Hero with image */}
      <header className="relative mx-auto max-w-4xl px-4 pt-8 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 sm:grid-cols-12 sm:items-center"
        >
          <div className="sm:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/20">
              <FigureImage figure={figure} className="h-full w-full" />
            </div>
          </div>
          <div className="sm:col-span-7 text-center sm:text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              زندگینامه
            </span>
            <h1 className="mt-3 font-darya text-3xl text-primary sm:text-4xl">
              {figure.name}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{figure.title}</p>
            <p className="mt-4 text-base leading-8 text-foreground/80">
              {figure.shortIntro}
            </p>
          </div>
        </motion.div>
      </header>

      {/* Long-form content */}
      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
        <blockquote className="relative rounded-2xl border-r-2 border-primary/50 bg-primary/5 p-5 pr-6">
          <Quote className="absolute left-4 top-4 h-5 w-5 text-primary/30" aria-hidden />
          <p className="text-sm leading-8 text-foreground/85">{figure.shortIntro}</p>
        </blockquote>

        <div className="mt-8 space-y-8">
          {blocks.map((b, i) => (
            <motion.section
              key={b.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h2 className="mb-3 flex items-center gap-2 font-darya text-xl text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {b.label}
              </h2>
              <p className="whitespace-pre-line text-[15px] leading-9 text-foreground/80">
                {b.text}
              </p>
            </motion.section>
          ))}
        </div>

        {/* Sources */}
        <div className="mt-10 rounded-2xl border border-border/70 bg-card/60 p-5">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            منابع و یادداشت سندی
          </h3>
          <ul className="flex flex-wrap gap-2">
            {figure.references.map((r) => (
              <li
                key={r}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground/80"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Prev / next navigation */}
        <nav className="mt-10 grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => onNavigate(prev.id)}
            className="group ink-card flex items-center gap-3 rounded-2xl p-4 text-right transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
            <span className="flex-1">
              <span className="block text-[11px] text-muted-foreground">زندگینامه پیشین</span>
              <span className="block font-darya text-base text-primary">{prev.name}</span>
            </span>
          </button>
          <button
            onClick={() => onNavigate(next.id)}
            className="group ink-card flex items-center gap-3 rounded-2xl p-4 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="flex-1">
              <span className="block text-[11px] text-muted-foreground">زندگینامه بعد</span>
              <span className="block font-darya text-base text-primary">{next.name}</span>
            </span>
            <ChevronLeft className="h-5 w-5 shrink-0 text-primary" />
          </button>
        </nav>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-secondary/70"
          >
            <ArrowRight className="h-4 w-4" />
            بازگشت به صفحهٔ اصلی
          </button>
        </div>

        <p className="mt-10 text-center font-darya text-sm text-primary/80">
          {siteConfig.motto}
        </p>
      </div>
    </article>
  );
}

/** Image with graceful fallback glyph. */
export function FigureImage({
  figure,
  className,
}: {
  figure: Figure;
  className?: string;
}) {
  const glyph = figureGlyph(figure.id);
  if (figure.image) {
    return (
       
      <img
        src={figure.image}
        alt={figure.name}
        className={cn("object-cover", className)}
      />
    );
  }
  return (
    <div className="grain flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#e6d6bf,#cdb89a)]">
      <span className="font-darya text-6xl text-primary/40">{glyph}</span>
    </div>
  );
}

function figureGlyph(id: string): string {
  const map: Record<string, string> = {
    "ruqayyah": "ر",
    "imam-husayn": "ح",
    "fatimah-zahra": "ف",
    "zaynab": "ز",
    "abbas": "ع",
    "ali-akbar": "ع",
    "qasim": "ق",
    "ali-asghar": "ع",
  };
  return map[id] ?? "ن";
}

export function BackBar({
  onBack,
  label,
}: {
  onBack: () => void;
  label: string;
}) {
  return (
    <div className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowRight className="h-4 w-4" />
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">بازگشت</span>
        </button>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="font-darya text-base text-primary"
        >
          موکب عشاق الرقیه (س)
        </a>
      </div>
    </div>
  );
}

function NotFound({ onBack, message }: { onBack: () => void; message: string }) {
  return (
    <div className="min-h-screen">
      <BackBar onBack={onBack} label="بازگشت به صفحهٔ اصلی" />
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <p className="font-darya text-2xl text-primary">{message}</p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          بازگشت به صفحهٔ اصلی
        </button>
      </div>
    </div>
  );
}
