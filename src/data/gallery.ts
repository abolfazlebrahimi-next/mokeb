/**
 * Gallery configuration — موکب عشاق الرقیه (س).
 * تصاویر واقعی موکب، خادمان، پذیرایی و دختران رقیه‌ای.
 * برای افزودن تصویر جدید، کافی است مسیر آن را در `src` قرار دهید.
 */

export type GalleryCategory = {
  id: string;
  label: string;
};

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "همه" },
  { id: "archive", label: "آرشیو" },
  { id: "mawkeb", label: "تصاویر موکب" },
  { id: "service", label: "پذیرایی" },
  { id: "servants", label: "تصاویر خادمان" },
  { id: "girls", label: "دختران رقیه‌ای" },
];

export type GalleryImage = {
  id: string;
  category: Exclude<GalleryCategory["id"], "all">;
  caption: string;
  src: string;
  description?: string;
  aspect?: "portrait" | "landscape" | "square";
};

export const galleryImages: GalleryImage[] = [
  // ===== تصاویر موکب =====
  {
    id: "m1",
    category: "mawkeb",
    caption: "پذیرایی در موکب",
    src: "/images/gallery/mawkeb/mawkeb-3.jpg",
    aspect: "square",
    description: "خادمان موکب در حال پذیرایی از عاشقان اهل‌بیت (ع) در ایام محرم.",
  },
  {
    id: "m2",
    category: "mawkeb",
    caption: "آماده‌سازی سفره",
    src: "/images/gallery/mawkeb/mawkeb-1.jpg",
    aspect: "portrait",
    description: "سیاه‌کوزه‌ها و کتری روی آتش — آماده‌سازی پذیرایی موکب.",
  },
  {
    id: "m3",
    category: "mawkeb",
    caption: "چای و پذیرایی",
    src: "/images/gallery/mawkeb/mawkeb-2.jpg",
    aspect: "portrait",
    description: "سرو چای و پذیرایی در مسیر عزاداری.",
  },
  {
    id: "m4",
    category: "mawkeb",
    caption: "خادمان پشت میز پذیرایی",
    src: "/images/gallery/mawkeb/mawkeb-4.jpg",
    aspect: "portrait",
    description: "خادمان موکب پشت میز پذیرایی در ایام عزاداری حسینی.",
  },

  // ===== پذیرایی — شربت و چای =====
  {
    id: "r1",
    category: "service",
    caption: "سرو شربت",
    src: "/images/gallery/reception/reception-1793643233687.jpg",
    aspect: "landscape",
    description: "خادمان موکب در حال سرو شربت برای عاشقان اهل‌بیت (ع).",
  },
  {
    id: "r2",
    category: "service",
    caption: "پذیرایی شربت",
    src: "/images/gallery/reception/reception-1793643233703.jpg",
    aspect: "landscape",
    description: "جوانی پشت میز پر از لیوان شربت در حال پذیرایی.",
  },
  {
    id: "r3",
    category: "service",
    caption: "ریختن شربت",
    src: "/images/gallery/reception/reception-1793643233725.jpg",
    aspect: "landscape",
    description: "ریختن شربت از ابریز فلزی در لیوان‌های کوچک.",
  },
  {
    id: "r4",
    category: "service",
    caption: "پذیرایی شربت",
    src: "/images/gallery/reception/reception-1793643233748.jpg",
    aspect: "landscape",
    description: "دو خادم جوان در حال سرو شربت در غرفهٔ موکب.",
  },
  {
    id: "r5",
    category: "service",
    caption: "سرو چای",
    src: "/images/gallery/reception/reception-1793643233767.jpg",
    aspect: "landscape",
    description: "سرو چای از ابریز فلزی در لیوان‌های کوچک در غرفهٔ موکب.",
  },
  {
    id: "r6",
    category: "service",
    caption: "پذیرایی شربت",
    src: "/images/gallery/reception/reception-1793643233782.jpg",
    aspect: "landscape",
    description: "خادم در حال سرو شربت پشت پیشخوان تزیین‌شدهٔ موکب.",
  },
  {
    id: "r7",
    category: "service",
    caption: "سرو چای در غرفه",
    src: "/images/gallery/reception/reception-1793643233794.jpg",
    aspect: "portrait",
    description: "جوانی در حال سرو چای به عاشقان اهل‌بیت (ع).",
  },
  {
    id: "r8",
    category: "service",
    caption: "غرفهٔ پذیرایی چای",
    src: "/images/gallery/reception/reception-1793643233805.jpg",
    aspect: "landscape",
    description: "تجمع عاشقان در غرفهٔ پذیرایی چای موکب با تزیین‌های مذهبی.",
  },
  {
    id: "r9",
    category: "service",
    caption: "پذیرایی چای شبانه",
    src: "/images/gallery/reception/reception-1793643233817.jpg",
    aspect: "portrait",
    description: "سرو چای در غرفهٔ شبانهٔ موکب.",
  },
  {
    id: "r10",
    category: "service",
    caption: "ریختن شربت",
    src: "/images/gallery/reception/reception-1793643233829.jpg",
    aspect: "landscape",
    description: "خادم در حال ریختن شربت از ظرف بزرگ در لیوان.",
  },

  // ===== تصاویر خادمان =====
  {
    id: "s2",
    category: "servants",
    caption: "خادمان موکب",
    src: "/images/gallery/servants/servant-2.jpg",
    aspect: "landscape",
    description: "گروهی از خادمان موکب در برابر پرچم‌های عزاداری.",
  },
  {
    id: "s3",
    category: "servants",
    caption: "خادم کوچک موکب",
    src: "/images/gallery/servants/servant-3.jpg",
    aspect: "portrait",
    description: "کودکی با سینه‌بند سیاه در میان خادمان موکب.",
  },
  {
    id: "s4",
    category: "servants",
    caption: "در صف خدمت",
    src: "/images/gallery/servants/servant-4.jpg",
    aspect: "landscape",
    description: "خادمان موکب در حال خدمت‌رسانی.",
  },
  {
    id: "s5",
    category: "servants",
    caption: "خادمان اهل‌بیت (ع)",
    src: "/images/gallery/servants/servant-5.jpg",
    aspect: "square",
    description: "خادمان موکب عشاق الرقیه (س) در ایام محرم.",
  },
  {
    id: "s6",
    category: "servants",
    caption: "خادم موکب",
    src: "/images/gallery/servants/servant-6.jpg",
    aspect: "portrait",
    description: "یکی از خادمان موکب در عزاداری.",
  },
  {
    id: "s7",
    category: "servants",
    caption: "پذیرایی خادمان",
    src: "/images/gallery/servants/servant-7.jpg",
    aspect: "landscape",
    description: "خادمان موکب در حال پذیرایی.",
  },
  {
    id: "s8",
    category: "servants",
    caption: "خادمان در مراسم",
    src: "/images/gallery/servants/servant-8.jpg",
    aspect: "landscape",
    description: "خادمان موکب در مراسم عزاداری.",
  },
  {
    id: "s11",
    category: "servants",
    caption: "خادم کوچک و سفره پذیرایی",
    src: "/images/gallery/servants/servant-11.jpg",
    aspect: "landscape",
    description: "کودکی در کنار سفره پذیرایی موکب.",
  },
  {
    id: "s12",
    category: "servants",
    caption: "خادمان پشت میز پذیرایی",
    src: "/images/gallery/servants/servant-12.jpg",
    aspect: "landscape",
    description: "خادمان موکب در حال سرو غذا و چای.",
  },

  // ===== دختران رقیه‌ای =====
  {
    id: "girl1",
    category: "girls",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642786932.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای که در موکب از ایشان تصویر گرفتیم و کادو کوچکی تقدیم کردیم.",
  },
  {
    id: "girl2",
    category: "girls",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642786944.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای با کادوی کوچک موکب.",
  },
  {
    id: "girl3",
    category: "girls",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642786957.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای که در موکب از ایشان تصویر گرفتیم.",
  },
  {
    id: "girl4",
    category: "girls",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642786969.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای با کادوی کوچک موکب.",
  },
  {
    id: "girl5",
    category: "girls",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642786981.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای که در موکب از ایشان تصویر گرفتیم.",
  },
  {
    id: "girl6",
    category: "girls",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642787000.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای با کادوی کوچک موکب.",
  },
  {
    id: "girl7",
    category: "girls",
    caption: "دختران رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642787015.jpg",
    aspect: "landscape",
    description: "دختران رقیه‌ای که در موکب ازشان تصویر گرفتیم و بهشان کادو دادیم.",
  },
  {
    id: "girl8",
    category: "girls",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642787030.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای با کادوی کوچک موکب.",
  },
  {
    id: "girl9",
    category: "girls",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642787044.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای که در موکب از ایشان تصویر گرفتیم.",
  },
  {
    id: "girl10",
    category: "girls",
    caption: "دختران رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642787057.jpg",
    aspect: "landscape",
    description: "دختران رقیه‌ای با کادوی کوچک موکب عشاق الرقیه (س).",
  },

  // ===== آرشیو — گزیده‌ای از بهترین تصاویر موکب =====
  {
    id: "a1",
    category: "archive",
    caption: "پذیرایی در موکب",
    src: "/images/gallery/mawkeb/mawkeb-3.jpg",
    aspect: "square",
    description: "خادمان موکب در حال پذیرایی — از آرشیو موکب عشاق الرقیه (س).",
  },
  {
    id: "a2",
    category: "archive",
    caption: "سرو شربت",
    src: "/images/gallery/reception/reception-1793643233748.jpg",
    aspect: "landscape",
    description: "دو خادم جوان در حال سرو شربت — از آرشیو موکب.",
  },
  {
    id: "a3",
    category: "archive",
    caption: "خادمان موکب",
    src: "/images/gallery/servants/servant-2.jpg",
    aspect: "landscape",
    description: "گروهی از خادمان موکب در برابر پرچم‌های عزاداری — از آرشیو.",
  },
  {
    id: "a4",
    category: "archive",
    caption: "دختران رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642787015.jpg",
    aspect: "landscape",
    description: "دختران رقیه‌ای با کادوی کوچک موکب — از آرشیو.",
  },
  {
    id: "a5",
    category: "archive",
    caption: "آماده‌سازی سفره",
    src: "/images/gallery/mawkeb/mawkeb-1.jpg",
    aspect: "portrait",
    description: "سیاه‌کوزه‌ها روی آتش — از آرشیو موکب.",
  },
  {
    id: "a6",
    category: "archive",
    caption: "خادم کوچک موکب",
    src: "/images/gallery/servants/servant-3.jpg",
    aspect: "portrait",
    description: "کودکی با سینه‌بند سیاه — از آرشیو خادمان موکب.",
  },
  {
    id: "a7",
    category: "archive",
    caption: "سرو چای",
    src: "/images/gallery/reception/reception-1793643233767.jpg",
    aspect: "landscape",
    description: "سرو چای از ابریز فلزی — از آرشیو پذیرایی موکب.",
  },
  {
    id: "a8",
    category: "archive",
    caption: "خادمان اهل‌بیت (ع)",
    src: "/images/gallery/servants/servant-5.jpg",
    aspect: "square",
    description: "خادمان موکب در ایام محرم — از آرشیو موکب عشاق الرقیه (س).",
  },
  {
    id: "a9",
    category: "archive",
    caption: "دختر رقیه‌ای",
    src: "/images/gallery/girls/girl-1793642786969.jpg",
    aspect: "square",
    description: "یکی از دختران رقیه‌ای با کادوی کوچک موکب — از آرشیو.",
  },
  {
    id: "a10",
    category: "archive",
    caption: "غرفهٔ پذیرایی",
    src: "/images/gallery/reception/reception-1793643233805.jpg",
    aspect: "landscape",
    description: "تجمع عاشقان در غرفهٔ پذیرایی موکب — از آرشیو.",
  },
];
