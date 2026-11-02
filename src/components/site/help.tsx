"use client";

import * as React from "react";
import { Reveal, InkDivider, Eyebrow } from "@/components/site/reveal";
import {
  HeartHandshake,
  CreditCard,
  UtensilsCrossed,
  PackageOpen,
  HandCoins,
  Copy,
  Check,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialGlyph } from "@/components/site/socials";
import { cn } from "@/lib/utils";

const helpWays = [
  {
    icon: UtensilsCrossed,
    title: "کمک در پذیرایی",
    desc: "همراهی در آماده‌سازی و توزیع پذیرایی میان عاشقان اهل‌بیت (ع) در موکب.",
  },
  {
    icon: PackageOpen,
    title: "اهدای مواد غذایی",
    desc: "همکاری در تأمین مواد غذایی و ملزومات پذیرایی موکب.",
  },
  {
    icon: HandCoins,
    title: "کمک مالی",
    desc: "یاری رساندن مالی برای هزینه‌های جاری موکب و ادامه مسیر خدمت.",
  },
  {
    icon: HeartHandshake,
    title: "خادم‌شدن",
    desc: "پیوستن به جمع خادمان موکب و حضور فعال در ایام عزاداری.",
  },
];

/** قالب‌بندی شماره کارت به‌صورت ۴-۴-۴-۴ برای خوانایی بهتر. */
function formatCard(raw: string): string {
  return raw.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1-");
}

export function Help() {
  const [copied, setCopied] = React.useState(false);
  const cardNumber = siteConfig.cardNumber;

  const copyCard = async () => {
    if (!cardNumber) return;
    try {
      await navigator.clipboard.writeText(cardNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="help" className="relative scroll-mt-16 py-20 sm:py-24">
      {/* Soft brushstroke backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]" aria-hidden>
        { }
        <img
          src={siteConfig.images.brushDivider}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>همکاری با ما</Eyebrow>
          <h2 className="mt-3 font-darya text-3xl text-primary sm:text-4xl">
            ما را یاری دهید
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75 leading-8">
            موکب عشاق الرقیه (س) با یاری عاشقان اهل‌بیت (ع) ادامه می‌یابد. اگر
            دوست دارید همراه ما در مسیر پذیرایی و خدمت باشید، از راه‌های زیر
            می‌توانید کمک کنید.
          </p>
        </Reveal>

        <InkDivider />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {helpWays.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <article className="ink-card group h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <w.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-darya text-lg text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{w.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Contact / card info cards */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Card number */}
          <Reveal>
            <div className="ink-card h-full rounded-3xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <CreditCard className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-darya text-xl text-primary">کمک مالی</h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/75">
                    برای یاری مالی موکب، می‌توانید به شماره کارت زیر واریز کنید.
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <code
                      className="rounded-xl border border-border bg-background-deep/60 px-4 py-2.5 font-mono text-base tracking-[0.15em] text-primary sm:text-lg"
                      dir="ltr"
                    >
                      {formatCard(cardNumber)}
                    </code>
                    <button
                      onClick={copyCard}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
                        "border-primary/30 bg-card text-primary hover:bg-secondary/70",
                      )}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-green-700" />
                          کپی شد
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          کپی شماره کارت
                        </>
                      )}
                    </button>
                  </div>

                  {!siteConfig.cardHolder && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      شماره کارت بنام یکی از خادمان موکب است.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Phone + socials */}
          <Reveal delay={0.1}>
            <div className="ink-card h-full rounded-3xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-darya text-xl text-primary">تماس با موکب</h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/75">
                    برای هماهنگی کمک، پیوستن به خادمان یا هر پرسش، می‌توانید با
                    موکب تماس بگیرید.
                  </p>

                  {/* Phone numbers */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {siteConfig.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
                        dir="ltr"
                      >
                        <Phone className="h-4 w-4" />
                        {p}
                      </a>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="mt-5">
                    <p className="text-xs text-muted-foreground">شبکه‌های اجتماعی موکب:</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {siteConfig.socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${s.label} — ${s.handle}`}
                          className="group inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
                        >
                          <SocialGlyph
                            label={s.label}
                            className="h-3.5 w-3.5 text-primary transition group-hover:text-primary-foreground"
                          />
                          <span>{s.label}</span>
                          <span
                            className="font-mono text-[11px] opacity-70 group-hover:opacity-90"
                            dir="ltr"
                          >
                            {s.handle}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 text-center">
          <p className="font-darya text-base text-primary">
            «هر چه داریم از عشق حسین (ع) است.»
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            موکب عشاق الرقیه (س) — چهار سال پذیرایی به عشق خاندان اهل‌بیت (ع)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
