# موکب عشاق الرقیه (س) — وب‌سایت رسمی

وب‌سایت رسمی موکب عُشّاقُ الرُّقَیّه (س)؛ پوشش رسانه‌ای موکب، پذیرش کمک‌های مالی و غیرمالی و معرفی موکب. زندگینامه‌های خاندان اهل‌بیت (ع)، وقایع ده روز از مدینه تا کربلا و گالری تصاویر موکب.

## تکنولوژی‌ها

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **Prisma ORM** (SQLite)
- **framer-motion** (انیمیشن)
- فونت **دریا** برای تیترها + **Vazirmatn** برای متن

## راه‌اندازی

### پیش‌نیازها
- [Node.js 18+](https://nodejs.org/) یا [Bun](https://bun.sh/)

### مراحل

```bash
# ۱) نصب وابستگی‌ها
bun install
# یا
npm install

# ۲) اجرای سرور توسعه
bun run dev
# یا
npm run dev

# ۳) باز کردن در مرورگر
# http://localhost:3000
```

### ساخت نسخهٔ production

```bash
bun run build
bun run start
```

## ساختار پروژه

```
src/
├── app/
│   ├── layout.tsx          # ریشهٔ RTL + فونت‌ها + متادیتا
│   ├── page.tsx            # ورودی به SiteApp
│   └── globals.css        # سیستم طراحی سپیایی
├── components/site/
│   ├── site-app.tsx        # مدیریت view + hash routing
│   ├── header.tsx          # هدر چسبان + منوی موبایل
│   ├── hero.tsx            # بخش لندینگ + عکس اصلی موکب
│   ├── about.tsx           # دربارهٔ موکب + تایم‌لاین ۴ سال
│   ├── gallery.tsx         # گالری + فیلتر + لایت‌باکس
│   ├── martyrs.tsx         # کارت‌های زندگینامه
│   ├── figure-detail.tsx   # صفحهٔ جزئیات زندگینامه
│   ├── ten-nights.tsx      # کارت‌های وقایع محرم
│   ├── night-detail.tsx    # صفحهٔ جزئیات هر روز
│   ├── help.tsx            # همکاری با ما (کارت، تلفن، شبکه‌ها)
│   ├── location.tsx        # موقعیت + نقشهٔ Google Maps
│   ├── footer.tsx          # فوتر کوتاه
│   └── socials.tsx         # آیکون‌های شبکه‌های اجتماعی (سبک سپیایی)
├── data/
│   ├── site.ts            # پیکربندی مرکزی (آدرس، تلفن، کارت، شبکه‌ها)
│   ├── figures.ts          # ۸ زندگینامه (رقیه، امام حسین، فاطمه، زینب، ...)
│   ├── nights.ts           # ۱۰ روز وقایع محرم
│   └── gallery.ts          # گالری (موکب، پذیرایی، خادمان، دختران رقیه‌ای، آرشیو)
└── fonts/
    └── Darya.ttf           # فونت تیترها
public/
└── images/
    ├── logo.jpg, hero-main.jpg, hero-bg.png, ...
    └── gallery/
        ├── mawkeb/         # ۴ تصویر موکب
        ├── reception/      # ۱۰ تصویر پذیرایی (شربت/چای)
        ├── servants/       # ۹ تصویر خادمان
        ├── girls/          # ۱۰ تصویر دختران رقیه‌ای
        └── figures/        # ۸ پرترهٔ چهره‌ها
```

## ویرایش محتوا

تمام محتوای متنی و مسیر تصاویر در فایل‌های `src/data/` متمرکز است. برای تغییر:
- **آدرس / تلفن / شماره کارت / شبکه‌های اجتماعی:** `src/data/site.ts`
- **زندگینامه‌ها:** `src/data/figures.ts`
- **وقایع محرم:** `src/data/nights.ts`
- **گالری:** `src/data/gallery.ts`

## شبکه‌های اجتماعی

آی‌دی موکب در همهٔ پلتفرم‌ها: **@oshagh315_ir**
- اینستاگرام، تلگرام، روبیکا، بله

## یادداشت

این پروژه آمادهٔ آپلود روی هاست اشتراکی (cPanel) است. برای deployment، نسخهٔ static build بسازید یا از Next.js standalone output استفاده کنید.

«هر چه داریم از عشق حسین (ع) است.»
