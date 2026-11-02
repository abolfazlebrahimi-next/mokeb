"use client";

import * as React from "react";
import { assetUrl } from "@/lib/assets";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookMarked,
  Users2,
  ListChecks,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { karbalaNights } from "@/data/nights";
import { siteConfig } from "@/data/site";
import { BackBar } from "@/components/site/figure-detail";
import { cn } from "@/lib/utils";

const faNum = (n: number) =>
  String(n).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

export function NightDetail({
  n,
  onBack,
  onNavigate,
}: {
  n: number;
  onBack: () => void;
  onNavigate: (n: number) => void;
}) {
  const idx = karbalaNights.findIndex((k) => k.night === n);
  const night = karbalaNights[idx];

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [n]);

  if (!night) {
    return (
      <article className="min-h-screen">
        <BackBar onBack={onBack} label="بازگشت به صفحهٔ اصلی" />
        <p className="mx-auto max-w-md py-24 text-center font-darya text-2xl text-primary">
          روزی با این شماره پیدا نشد.
        </p>
      </article>
    );
  }

  const prev = karbalaNights[(idx - 1 + karbalaNights.length) % karbalaNights.length];
  const next = karbalaNights[(idx + 1) % karbalaNights.length];

  return (
    <article className="min-h-screen pb-16">
      <BackBar onBack={onBack} label="بازگشت به صفحهٔ اصلی" />

      {/* Calm dark hero with day number (no image, per request) */}
      <header className="relative overflow-hidden bg-foreground text-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden
        >
          { }
          <img
            src={assetUrl("/images/karbala-atmosphere.png")}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(160,122,60,0.18),transparent_55%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-gold/40 bg-background/5"
          >
            <span className="font-darya text-5xl text-gold">{faNum(night.night)}</span>
          </motion.div>
          <p className="mt-5 text-xs tracking-wide text-background/60">
            روز {faNum(night.night)} محرم
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-2 font-darya text-3xl sm:text-4xl"
          >
            {night.title}
          </motion.h1>
          <p className="mt-2 text-sm text-background/70">{night.subtitle}</p>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-background/80">
            {night.intro}
          </p>
        </div>
      </header>

      {/* Long-form content */}
      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
        <section>
          <h2 className="mb-3 flex items-center gap-2 font-darya text-xl text-primary">
            <BookMarked className="h-4 w-4" />
            روایت تاریخی
          </h2>
          <p className="whitespace-pre-line text-[15px] leading-9 text-foreground/80">
            {night.narrative}
          </p>
        </section>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
              <Users2 className="h-4 w-4" />
              چهره‌های شاخص
            </h3>
            <ul className="space-y-2">
              {night.figures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  {f}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-primary">
              <ListChecks className="h-4 w-4" />
              رویدادهای کلیدی
            </h3>
            <ul className="space-y-2">
              {night.keyEvents.map((e) => (
                <li key={e} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  {e}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <blockquote className="mt-8 rounded-2xl border-r-2 border-primary/50 bg-primary/5 p-5">
          <p className="text-sm leading-8 text-foreground/85">{night.conclusion}</p>
        </blockquote>

        {/* Sources */}
        <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-5">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <BookMarked className="h-4 w-4" />
            منابع و یادداشت سندی
          </h3>
          <ul className="flex flex-wrap gap-2">
            {night.sources.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground/80"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Day rail (quick jump) */}
        <div className="mt-10">
          <p className="mb-3 text-center text-xs text-muted-foreground">پرش به روز دیگر</p>
          <div className="no-scrollbar -mx-4 flex snap-x gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {karbalaNights.map((k, i) => {
              const isActive = k.night === n;
              return (
                <button
                  key={k.id}
                  onClick={() => onNavigate(k.night)}
                  className={cn(
                    "snap-start rounded-xl border px-3 py-2 text-center transition",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground/70 hover:border-primary/50 hover:text-primary",
                  )}
                >
                  <span className="block font-darya text-base leading-none">
                    {faNum(k.night)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Prev / next */}
        <nav className="mt-10 grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => onNavigate(prev.night)}
            className="group ink-card flex items-center gap-3 rounded-2xl p-4 text-right transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
            <span className="flex-1">
              <span className="block text-[11px] text-muted-foreground">روز پیشین</span>
              <span className="block font-darya text-sm text-primary line-clamp-1">
                {prev.title}
              </span>
            </span>
          </button>
          <button
            onClick={() => onNavigate(next.night)}
            className="group ink-card flex items-center gap-3 rounded-2xl p-4 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="flex-1">
              <span className="block text-[11px] text-muted-foreground">روز بعد</span>
              <span className="block font-darya text-sm text-primary line-clamp-1">
                {next.title}
              </span>
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
