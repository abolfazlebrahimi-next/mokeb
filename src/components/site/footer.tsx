"use client";

import * as React from "react";
import { MapPin, Heart } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialGlyph } from "@/components/site/socials";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-background/20 bg-background/10">
                { }
                <img
                  src={siteConfig.images.logo}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <p className="font-darya text-base text-background">
                  {siteConfig.name} {siteConfig.honorific}
                </p>
                <p className="text-[11px] text-background/60">{siteConfig.subtitle}</p>
              </div>
            </div>
            <p className="mt-3 max-w-md text-xs leading-6 text-background/65">
              پوشش رسانه‌ای موکب، پذیرش کمک‌های مالی و غیرمالی و معرفی موکب.
              زندگینامه‌های اهل‌بیت (ع)، وقایع ده روز محرم و چهار سال پذیرایی.
            </p>
            <p className="mt-3 flex items-center gap-1.5 font-darya text-sm text-gold">
              <Heart className="h-3.5 w-3.5" />
              {siteConfig.motto}
            </p>
          </div>

          {/* Address + socials with brand icons */}
          <div>
            <h3 className="mb-3 text-xs font-semibold tracking-wide text-background/90">
              نشانی و شبکه‌ها
            </h3>
            <p className="flex items-start gap-1.5 text-xs leading-6 text-background/65">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/80" />
              {siteConfig.location.fullAddress}
            </p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {siteConfig.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-background/20 bg-background/5 px-2.5 py-1.5 text-[11px] text-background/80 transition hover:border-gold/50 hover:text-gold"
                    title={`${s.label} — ${s.handle}`}
                  >
                    <SocialGlyph
                      label={s.label}
                      className="h-3.5 w-3.5 transition group-hover:opacity-100"
                    />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-background/15 pt-4 text-center sm:flex-row sm:text-right">
          <p className="text-[11px] text-background/55">
            © {new Date().getFullYear()} — تمامی حقوق برای موکب عشاق الرقیه (س) محفوظ است.
          </p>
          <p className="text-[11px] text-background/55">{siteConfig.motto}</p>
        </div>
      </div>
    </footer>
  );
}
