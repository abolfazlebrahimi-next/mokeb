"use client";

import * as React from "react";
import { assetUrl } from "@/lib/assets";
import { motion } from "framer-motion";
import { Moon, ArrowLeft } from "lucide-react";
import { Reveal, InkDivider, Eyebrow } from "@/components/site/reveal";
import { karbalaNights } from "@/data/nights";

const faNum = (n: number) =>
  String(n).replace(/[0-9]/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);

/** Navigate to a night detail page (client-side hash route). */
function openNight(n: number) {
  if (typeof window !== "undefined") {
    window.location.hash = `#/nights/${n}`;
  }
}

export function TenNights() {
  return (
    <section
      id="nights"
      className="relative scroll-mt-16 bg-foreground text-background py-20 sm:py-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.08]" aria-hidden>
        { }
        <img
          src={assetUrl("/images/karbala-atmosphere.png")}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(160,122,60,0.12),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow className="text-background/70">
            <span className="text-background/70">وقایع محرم — از مدینه تا کربلا</span>
          </Eyebrow>
          <h2 className="mt-3 font-darya text-3xl sm:text-4xl text-background">
            روایت ده روز
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-background/70">
            وقایع ده روز ماه محرم از آغاز تا عاشورا. برای خواندن روایت کامل هر
            روز، روی کارت آن بزنید. (ترتیب دقیق برخی وقایع در منابع و سنت‌های
            معاصر ممکن است متفاوت باشد.)
          </p>
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-3xl items-center gap-3 text-background/40">
          <span className="h-px flex-1 bg-background/20" />
          <Moon className="h-4 w-4" />
          <span className="h-px flex-1 bg-background/20" />
        </div>

        {/* Day cards grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {karbalaNights.map((n, i) => (
            <motion.button
              key={n.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              onClick={() => openNight(n.night)}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-background/15 bg-background/[0.04] p-5 text-right backdrop-blur-sm transition hover:-translate-y-1 hover:border-gold/40 hover:bg-background/[0.08]"
              aria-label={`خواندن روایت ${n.title}`}
            >
              {/* Day number medallion */}
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/40 bg-background/10 transition group-hover:bg-gold group-hover:text-foreground">
                <span className="font-darya text-2xl text-gold transition group-hover:text-foreground">
                  {faNum(n.night)}
                </span>
              </span>

              <span className="flex-1">
                <span className="block text-[11px] text-background/50">
                  روز {faNum(n.night)} محرم
                </span>
                <span className="mt-0.5 block font-darya text-base text-background line-clamp-1">
                  {n.title}
                </span>
                <span className="mt-1.5 block text-xs leading-6 text-background/65 line-clamp-2">
                  {n.subtitle}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-gold opacity-0 transition group-hover:opacity-100">
                  خواندن روایت
                  <ArrowLeft className="h-3 w-3" />
                </span>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
