"use client";

import * as React from "react";
import { MapPin, Navigation, Copy, Check, ExternalLink } from "lucide-react";
import { Reveal, InkDivider, Eyebrow } from "@/components/site/reveal";
import { siteConfig } from "@/data/site";

export function Location() {
  const [copied, setCopied] = React.useState(false);
  const { location } = siteConfig;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(location.fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="location" className="relative scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>موقعیت موکب</Eyebrow>
          <h2 className="mt-3 font-darya text-3xl text-primary sm:text-4xl">
            ما را بیابید
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75 leading-8">
            موکب عشاق الرقیه {siteConfig.honorific} در نظرآباد، استان البرز منتظر
            پذیرایی از عاشقان اهل‌بیت (ع) است. نقشه زیر محل موکب را نشان می‌دهد.
          </p>
        </Reveal>

        <InkDivider />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Address card */}
          <Reveal>
            <div className="ink-card h-full rounded-3xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="font-darya text-xl text-primary">نشانی موکب</h3>
                  <p className="mt-2 leading-8 text-foreground/80">
                    {location.province}، {location.county}
                    <br />
                    {location.street}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <button
                      onClick={copyAddress}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-4 py-2 text-sm font-medium text-primary transition hover:bg-secondary/70"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-green-700" />
                          کپی شد
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          کپی نشانی
                        </>
                      )}
                    </button>

                    {location.mapUrl ? (
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
                      >
                        <Navigation className="h-4 w-4" />
                        مسیریابی
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground"
                        title="پیوند نقشه در مرحله دوم اضافه می‌شود"
                      >
                        <Navigation className="h-4 w-4" />
                        مسیریابی (به‌زودی)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map container — ready for phase two */}
          <Reveal delay={0.1}>
            <div className="ink-card relative h-full min-h-[20rem] overflow-hidden rounded-3xl">
              {location.embedUrl ? (
                <iframe
                  title="نقشه موکب عشاق الرقیه"
                  src={location.embedUrl}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="grain relative flex h-full min-h-[20rem] flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#e6d6bf,#cdb89a)] p-8 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border border-primary/40 bg-background/70">
                    <MapPin className="h-7 w-7 text-primary" />
                  </span>
                  <div>
                    <p className="font-darya text-lg text-primary">جای نقشه موکب</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      قاب رزرو برای نقشه Google Maps در مرحله دوم
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground/80">
                      {location.shortAddress}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
