"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Reveal, InkDivider, Eyebrow } from "@/components/site/reveal";
import { HeartHandshake, Sparkles, Users, HandHeart, CalendarDays } from "lucide-react";
import { siteConfig } from "@/data/site";

const years = [
  {
    year: "۱۴۰۲",
    title: "آغاز راه",
    desc: "نخستین گام‌های موکب با عشق به خاندان اهل‌بیت (ع) و در مسیر پذیرایی از عاشقان اهل‌بیت برداشته شد.",
  },
  {
    year: "۱۴۰۳",
    title: "گسترش پذیرایی",
    desc: "گسترش دامنه پذیرایی و آراستن موکب برای پذیرایی بهتر از عاشقان اهل‌بیت (ع).",
  },
  {
    year: "۱۴۰۴",
    title: "استواری و ثبات",
    desc: "تثبیت موکب در مسیر پذیرایی و آغوش‌گشیدن بیشتر از عزاداران و عاشقان اهل‌بیت.",
  },
  {
    year: "۱۴۰۵",
    title: "ادامه مسیر",
    desc: "تداوم پذیرایی به عشق خاندان اهل‌بیت (ع) و آمادگی برای راه‌های تازه.",
  },
];

const values = [
  {
    icon: HandHeart,
    title: "پذیرایی‌محوری",
    desc: "هسته هویت موکب، پذیرایی از عاشقان اهل‌بیت (ع) در شهر نظرآباد است، بی‌چشم‌داشت.",
  },
  {
    icon: HeartHandshake,
    title: "عشق به رقیه (س)",
    desc: "موکب به نام دختر کوچک امام حسین (ع) آراسته شده و عشق به ایشان، جانِ آن است.",
  },
  {
    icon: Users,
    title: "هم‌دلی خادمان",
    desc: "خادمان موکب در کنار هم، فضایی از هم‌دلی و خدمت می‌سازند.",
  },
  {
    icon: Sparkles,
    title: "وفاداری به پیام",
    desc: "پیام ایستادگی و عشق حسین (ع)، راهنمای موکب در چهار سال گذشته بوده است.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>درباره موکب</Eyebrow>
          <h2 className="mt-3 font-darya text-3xl text-primary sm:text-4xl">
            موکب عشاق الرقیه {siteConfig.honorific}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75 leading-8">
            موکب عُشّاقُ الرُّقَیّه {siteConfig.honorific}، خانه‌ای است که به عشق
            خاندان اهل‌بیت (ع) ساخته شده. در چهار سال گذشته، پذیرایی از عزاداران
            و عاشقان حسینی، محور همه کارهای ما بوده است. ما در شهر نظرآباد زائر
            نداریم؛ خدمت ما پذیرایی از عاشقان اهل‌بیت (ع) است.
          </p>
        </Reveal>

        <InkDivider />

        {/* Values grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <article className="ink-card group h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-darya text-lg text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{v.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <Reveal className="text-center">
            <h3 className="font-darya text-2xl text-primary sm:text-3xl">
              چهار سال پذیرایی، یک مسیر
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground leading-7">
              از نخستین گام تا امروز، موکب در راه عشق به خاندان اهل‌بیت (ع) گام برداشته است.
            </p>
          </Reveal>

          <div className="relative mt-10">
            {/* Timeline spine — vertical on mobile, horizontal on desktop */}
            <div className="absolute right-[18px] top-0 h-full w-px bg-gradient-to-b from-primary/40 via-primary/30 to-transparent sm:right-0 sm:left-0 sm:top-1/2 sm:h-px sm:w-full sm:bg-gradient-to-l" />

            <ol className="relative space-y-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:space-y-0">
              {years.map((y, i) => (
                <motion.li
                  key={y.year}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative pr-12 sm:pr-0 sm:text-center"
                >
                  {/* Node */}
                  <span className="absolute right-[10px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-primary/50 bg-card sm:right-1/2 sm:top-1/2 sm:translate-x-1/2 sm:-translate-y-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="ink-card rounded-2xl p-5 sm:p-4">
                    <div className="flex items-center justify-center gap-1.5 text-primary sm:flex-col">
                      <CalendarDays className="h-4 w-4" />
                      <span className="font-darya text-2xl">{y.year}</span>
                    </div>
                    <h4 className="mt-2 font-darya text-lg text-foreground">{y.title}</h4>
                    <p className="mt-1.5 text-xs leading-6 text-muted-foreground">{y.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Reserved historical photos row */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 0.05}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background-deep">
                  <div className="grain absolute inset-0 bg-[linear-gradient(135deg,#e6d6bf,#cdb89a)]" />
                  <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
                    <span className="font-darya text-base text-primary">تصویر آرشیوی</span>
                    <span className="text-[11px] text-muted-foreground">
                      محل رزرو برای عکس سال‌های گذشته
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
