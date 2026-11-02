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
    desc: "در سال ۱۴۰۲، خدمت را ساده و صمیمی آغاز کردیم؛ با دو کتری، از جلوی خانه‌مان چای می‌دادیم و در کوچه خودمان هیئت برپا می‌کردیم.",
  },
  {
    year: "۱۴۰۳",
    title: "گسترش پذیرایی",
    desc: "در سال ۱۴۰۳، بساطمان را تا سرِ کوچه بردیم و با چند تخته و چوب، نخستین موکب کوچکمان را ساختیم؛ روزانه نزدیک به ۳۰۰ چای به دست مردم می‌رساندیم.",
  },
  {
    year: "۱۴۰۴",
    title: "استواری و ثبات",
    desc: "در سال ۱۴۰۴، به مکان فعلی آمدیم و موکبمان را برپا کردیم؛ با برکت همراهی مردم، روزانه حدود ۱٬۵۰۰ استکان چای تقدیم عاشقان اهل‌بیت (ع) شد.",
  },
  {
    year: "۱۴۰۵",
    title: "ادامه مسیر",
    desc: "در سال ۱۴۰۵، موکب را گسترده‌تر کردیم و هر روز بیش از ۲٬۰۰۰ چای به دست مردم رساندیم؛ در کنار چای، با حلوا، شربت، شیر و شیرکاکائو نیز پذیرای میهمانان شدیم.",
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
            خاندان اهل‌بیت (ع) ساخته شده. از نخستین استکان‌های چای تا موکب امروز،
            پذیرایی از عزاداران و عاشقان حسینی، محور خدمت ما بوده است.
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

          {/* خاطره‌هایی از سال‌های خدمت */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { src: "/images/gallery/servants/1-servant-2.jpg", alt: "یکی از خادمان کوچک موکب" },
              { src: "/images/gallery/servants/2-servant-11.jpg", alt: "پارچه‌نوشته و آذین‌بندی موکب در شب" },
              { src: "/images/gallery/servants/3-servant-12.jpg", alt: "نمایی از موکب و پارچه‌نوشته عزاداری" },
            ].map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.05}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-background-deep">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm text-white">
                    {photo.alt}
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
