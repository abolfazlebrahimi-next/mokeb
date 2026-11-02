"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Reveal, InkDivider, Eyebrow } from "@/components/site/reveal";
import { figures } from "@/data/figures";

/** Navigate to a figure's detail page (client-side hash route). */
function openFigure(id: string) {
  if (typeof window !== "undefined") {
    window.location.hash = `#/figures/${id}`;
  }
}

export function Figures() {
  return (
    <section id="martyrs" className="relative scroll-mt-16 py-20 sm:py-24">
      {/* Subtle atmosphere background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]" aria-hidden>
        { }
        <img
          src="/images/karbala-atmosphere.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>زندگینامه‌ها</Eyebrow>
          <h2 className="mt-3 font-darya text-3xl text-primary sm:text-4xl">
            چهره‌های درخشان خاندان اهل‌بیت (ع)
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75 leading-8">
            معرفی چهره‌های درخشان کربلا و خاندان اهل‌بیت (ع) بر اساس متن
            تاریخی-مذهبی موکب؛ با رعایت تفکیک روایات و احترام به گزارش‌های
            مورد اختلاف. برای خواندن زندگینامهٔ کامل، روی هر چهره بزنید.
          </p>
        </Reveal>

        <InkDivider />

        {/* Grid of figure cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {figures.map((f, i) => (
            <motion.button
              key={f.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => openFigure(f.id)}
              className="group ink-card relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl p-4 text-center transition hover:-translate-y-1 hover:shadow-xl"
              aria-label={`زندگینامه ${f.name}`}
            >
              {/* Sepia portrait thumbnail */}
              <span className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full border border-primary/30 bg-background-deep transition group-hover:border-primary">
                {f.image ? (
                   
                  <img
                    src={f.image}
                    alt={f.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-darya text-3xl text-primary">
                    {figureGlyph(f.id)}
                  </span>
                )}
              </span>
              <div className="space-y-1">
                <p className="font-darya text-sm leading-6 text-foreground line-clamp-2">
                  {f.name}
                </p>
                <p className="text-[10px] text-muted-foreground line-clamp-2">{f.title}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-[11px] text-primary opacity-0 transition group-hover:opacity-100">
                <BookOpen className="h-3 w-3" />
                خواندن زندگینامه
              </span>
            </motion.button>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-xs text-muted-foreground leading-6">
            یادداشت: متن زندگینامه‌ها بر اساس متن تاریخی-مذهبی موکب تنظیم شده و
            منابع کلاسیک (تاریخ طبری، الارشاد، مقتل ابی‌مخنف، لهوف، نفس المهموم)
            به‌عنوان یادداشت سندی همراه آن آمده‌اند.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function figureGlyph(id: string): string {
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
