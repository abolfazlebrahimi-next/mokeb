import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const darya = localFont({
  src: "../fonts/Darya.ttf",
  variable: "--font-darya",
  display: "swap",
});

export const metadata: Metadata = {
  title: "موکب عشاق الرقیه (س) | چهار سال پذیرایی به عشق خاندان اهل‌بیت (ع)",
  description:
    "وب‌سایت رسمی موکب عُشّاقُ الرُّقَیّه (س)؛ چهار سال پذیرایی به عشق خاندان اهل‌بیت (ع). زندگینامه‌های خاندان اهل‌بیت (ع)، وقایع ده روز از مدینه تا کربلا، گالری تصاویر موکب و موقعیت موکب در نظرآباد.",
  keywords: [
    "موکب عشاق الرقیه",
    "عشاق الرقیه",
    "حضرت رقیه",
    "کربلا",
    "عاشورا",
    "محرم",
    "شهدای کربلا",
    "زندگینامه اهل بیت",
    "وقایع محرم",
    "موکب نظرآباد",
    "اهل بیت",
  ],
  authors: [{ name: "موکب عشاق الرقیه (س)" }],
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "موکب عشاق الرقیه (س)",
    description: "چهار سال پذیرایی، به عشق خاندان اهل‌بیت (ع)",
    type: "website",
    locale: "fa_IR",
  },
};

export const viewport = {
  themeColor: "#3E271F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazir.variable} ${darya.variable} font-vazir antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
