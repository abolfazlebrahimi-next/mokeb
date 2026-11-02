/**
 * Centralized site configuration for موکب عشاق الرقیه (س).
 * Update this file to change site-wide content without touching components.
 */

export const siteConfig = {
  name: "موکب عشاق الرقیه",
  shortName: "عشاق الرقیه",
  honorific: "(س)",
  tagline: "به نام عشق، به نام رقیه (س)",
  subtitle: "چهار سال پذیرایی، به عشق خاندان اهل‌بیت (ع)",
  motto: "هر چه داریم از عشق حسین (ع) است.",
  description:
    "وب‌سایت رسمی موکب عُشّاقُ الرُّقَیّه (س)؛ پوشش رسانه‌ای موکب، پذیرش کمک‌های مالی و غیرمالی و معرفی موکب. روایت زندگینامه‌های خاندان اهل‌بیت (ع) و وقایع ده روز از مدینه تا کربلا.",

  /** نوع فعالیت و هدف سایت: پوشش رسانه‌ای + کمک‌ها + معرفی موکب. */
  activityType: "پذیرایی",
  activityNote:
    "ما در شهر نظرآباد زائر نداریم؛ خدمت ما پذیرایی از عاشقان اهل‌بیت (ع) است.",

  yearsOfService: 4,
  establishedYear: 1402,

  location: {
    province: "استان البرز",
    county: "شهرستان نظرآباد",
    street: "نبش بهارستان ۵۵",
    fullAddress: "استان البرز، شهرستان نظرآباد، نبش بهارستان ۵۵",
    shortAddress: "نظرآباد، نبش بهارستان ۵۵",
    mapUrl: "https://www.google.com/maps?q=35.96578,50.59235",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d807.3077246178502!2d50.59299373037145!3d35.96577999828101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDU3JzU2LjgiTiA1MMKwMzUnMzIuNSJF!5e0!3m2!1sfa!2s!4v1793630860864!5m2!1sfa!2s",
  },

  /** شبکه‌های اجتماعی موکب — آی‌دی یکسان: oshagh315_ir */
  socials: [
    { label: "اینستاگرام", handle: "@oshagh315_ir", url: "https://instagram.com/oshagh315_ir" },
    { label: "تلگرام", handle: "@oshagh315_ir", url: "https://t.me/oshagh315_ir" },
    { label: "روبیکا", handle: "@oshagh315_ir", url: "https://rubika.ir/oshagh315_ir" },
    { label: "بله", handle: "@oshagh315_ir", url: "https://ble.ir/oshagh315_ir" },
  ],

  /** شماره‌های تماس موکب */
  phones: ["09935377426", "09363628966"],

  /** شماره کارت کمک مالی (بنام شخص؛ نام ثبت نشده) */
  cardNumber: "6219861831772099",
  cardHolder: "",

  images: {
    logo: "/images/logo.jpg",
    heroBackground: "/images/hero-bg.png",
    karbalaAtmosphere: "/images/karbala-atmosphere.png",
    brushDivider: "/images/brush-divider.png",
    heroMainPhoto: "/images/hero-main.jpg", // تصویر اصلی موکب (بخش لندینگ)
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Navigation sections (anchor links, single-page) */
export const navSections = [
  { id: "home", label: "خانه" },
  { id: "about", label: "درباره موکب" },
  { id: "gallery", label: "گالری" },
  { id: "martyrs", label: "زندگینامه‌ها" },
  { id: "nights", label: "وقایع محرم" },
  { id: "help", label: "همکاری با ما" },
  { id: "location", label: "موقعیت" },
] as const;
