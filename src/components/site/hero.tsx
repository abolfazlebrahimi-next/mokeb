"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, Images, ScrollText, MapPin, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function scrollToId(id: string) {
  return (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24"
    >
      {/* Brushstroke background — tamed on mobile to avoid ugly zoomed calligraphy */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        { }
        <img
          src={siteConfig.images.heroBackground}
          alt=""
          className="h-full w-full object-cover object-center opacity-25 duotone-sepia sm:opacity-40 md:opacity-55"
          fetchPriority="high"
        />
        {/* Strong overlay so the big calligraphy reads as a faint texture, not big blobs */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background sm:from-background/90 sm:via-background/75 sm:to-background md:from-background/85 md:via-background/60 md:to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,transparent_30%,rgba(62,39,31,0.35))]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-12">
          {/* Text column */}
          <div className="md:col-span-7 text-center md:text-right">
            <motion.span
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/70 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {siteConfig.subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="mt-5 font-darya text-4xl leading-[1.25] text-primary sm:text-5xl md:text-6xl"
            >
              {siteConfig.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-5 max-w-xl text-base leading-8 text-foreground/80 md:text-lg"
            >
              وب‌سایت رسمی موکب عُشّاقُ الرُّقَیّه {siteConfig.honorific}؛ پوشش
              رسانه‌ای موکب، پذیرش کمک‌های مالی و غیرمالی و معرفی موکب. روایت
              زندگینامه‌های خاندان اهل‌بیت (ع) و وقایع ده روز از مدینه تا کربلا.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              <a
                href="#about"
                onClick={scrollToId("about")}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-accent"
              >
                <Images className="h-4 w-4" />
                آشنایی با موکب
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
              <a
                href="#martyrs"
                onClick={scrollToId("martyrs")}
                className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-6 py-3 text-sm font-semibold text-primary backdrop-blur transition hover:bg-secondary/70"
              >
                <ScrollText className="h-4 w-4" />
                زندگینامه‌ها
              </a>
              <a
                href="#help"
                onClick={scrollToId("help")}
                className="group inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/60 px-6 py-3 text-sm font-semibold text-primary backdrop-blur transition hover:bg-secondary/70"
              >
                <HeartHandshake className="h-4 w-4" />
                همکاری با ما
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground md:justify-start"
            >
              <MapPin className="h-3.5 w-3.5" />
              {siteConfig.location.shortAddress}
            </motion.div>
          </div>

          {/* Visual column — reserved photo frame */}
          <div className="md:col-span-5">
            <motion.figure
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto max-w-sm"
            >
              {/* Decorative ink frame */}
              <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-primary/25" />
              <div className="absolute -inset-1 -z-10 rounded-[1.7rem] bg-gradient-to-tr from-primary/15 via-transparent to-gold/15" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border bg-background-deep shadow-2xl shadow-primary/20">
                {siteConfig.images.heroMainPhoto ? (
                   
                  <img
                    src={siteConfig.images.heroMainPhoto}
                    alt="تصویر موکب عشاق الرقیه (س)"
                    className="h-full w-full object-cover"
                    fetchPriority="high"
                  />
                ) : (
                  <ReservedPhoto />
                )}
              </div>

              {/* Floating motto card */}
              <figcaption className="absolute -bottom-6 right-4 left-4 mx-auto max-w-xs rounded-2xl border border-border bg-card/95 px-4 py-3 text-center shadow-xl backdrop-blur">
                <p className="font-darya text-base text-primary">{siteConfig.motto}</p>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  موکب عشاق الرقیه (س)
                </p>
              </figcaption>
            </motion.figure>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#about"
            onClick={scrollToId("about")}
            className="group flex flex-col items-center gap-1 text-muted-foreground transition hover:text-primary"
            aria-label="پایین‌تر بروید"
          >
            <span className="text-[11px]">روایت موکب</span>
            <span className="flex h-9 w-5 items-start justify-center rounded-full border border-primary/40 p-1">
              <motion.span
                animate={reduce ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-primary"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/** A clearly-identifiable placeholder for the main Mawkeb photo (phase two). */
function ReservedPhoto() {
  return (
    <div
      className={cn(
        "grain relative flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#e6d6bf,#d9c7ae)] p-6 text-center",
      )}
    >
      <span className="grid h-16 w-16 place-items-center rounded-full border border-primary/40 bg-background/70">
        <span className="font-darya text-2xl text-primary">ر</span>
      </span>
      <div className="space-y-1">
        <p className="font-darya text-lg text-primary">تصویر موکب</p>
        <p className="text-xs text-muted-foreground">
          اینجا جای تصویر اصلی موکب خواهد بود
        </p>
        <p className="text-[10px] text-muted-foreground/80">
          (محل رزرو شده برای مرحله دوم)
        </p>
      </div>
    </div>
  );
}
