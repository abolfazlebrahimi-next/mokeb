"use client";

import * as React from "react";
import { assetUrl } from "@/lib/assets";
import { motion, AnimatePresence } from "framer-motion";
import { Images, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Reveal, InkDivider, Eyebrow } from "@/components/site/reveal";
import { galleryCategories, galleryImages, type GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

const aspectClass: Record<NonNullable<GalleryImage["aspect"]>, string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

export function Gallery() {
  const [active, setActive] = React.useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const filtered = React.useMemo(
    () =>
      active === "all"
        ? galleryImages
        : galleryImages.filter((g) => g.category === active),
    [active],
  );

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const next = React.useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prev = React.useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? i : (i - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  React.useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") next();
      if (e.key === "ArrowRight") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, next, prev]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;
  const currentCat = galleryCategories.find(
    (c) => c.id === (current?.category ?? ""),
  );

  return (
    <section
      id="gallery"
      className="relative scroll-mt-16 bg-background-deep/40 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow>گالری تصاویر</Eyebrow>
          <h2 className="mt-3 font-darya text-3xl text-primary sm:text-4xl">
            گالری موکب
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-foreground/75 leading-8">
            گزیده‌ای از تصاویر موکب، خادمان، پذیرایی و دختران رقیه‌ای که در
            ایام عزاداری از موکب تصویر گرفتیم. برای دیدن هر تصویر در اندازه‌ی
            کامل، روی آن بزنید.
          </p>
        </Reveal>

        <InkDivider />

        {/* Category filter chips */}
        <Reveal className="mt-2">
          <div
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 sm:flex-wrap sm:justify-center"
            role="tablist"
            aria-label="دسته‌بندی گالری"
          >
            {galleryCategories.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c.id)}
                  className={cn(
                    "snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow"
                      : "border-border bg-card/70 text-foreground/80 hover:border-primary/50 hover:text-primary",
                  )}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <div className="mt-8 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4 [&>*]:mb-3 sm:[&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (i % 8) * 0.03 }}
                onClick={() => openLightbox(i)}
                className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card text-right shadow-sm transition hover:shadow-xl"
                aria-label={`باز کردن تصویر: ${img.caption}`}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    aspectClass[img.aspect ?? "square"],
                  )}
                >
                  {img.src ? (
                     
                    <img
                      src={assetUrl(img.src)}
                      alt={img.caption}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <PlaceholderArt caption={img.caption} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-medium text-primary-foreground line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                  <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-card/80 text-primary opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ImageIcon className="h-4 w-4" />
                  </span>
                </div>
                <p className="px-3 py-2 text-xs text-muted-foreground line-clamp-1">
                  {img.caption}
                </p>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            هنوز تصویری در این دسته ثبت نشده است.
          </p>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="نمایشگر تصویر"
            onClick={closeLightbox}
          >
            <button
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-card/80 text-primary shadow-lg backdrop-blur transition hover:bg-card"
              onClick={closeLightbox}
              aria-label="بستن"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Desktop: بعدی (next) on LEFT (RTL forward), قبلی (prev) on RIGHT */}
            <button
              className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-card/80 text-primary shadow-lg backdrop-blur transition hover:bg-card sm:grid"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="بعدی"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-card/80 text-primary shadow-lg backdrop-blur transition hover:bg-card sm:grid"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="قبلی"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative mx-4 max-h-[85vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                {current.src ? (
                   
                  <img
                    src={assetUrl(current.src)}
                    alt={current.caption}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <PlaceholderArt caption={current.caption} large />
                )}
              </div>
              <figcaption className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/90 px-4 py-2.5 backdrop-blur">
                <div>
                  <p className="text-sm font-medium text-foreground">{current.caption}</p>
                  <p className="text-xs text-muted-foreground">
                    {currentCat?.label ?? ""}
                  </p>
                </div>
                <Images className="h-4 w-4 text-primary/60" />
              </figcaption>
            </motion.figure>

            {/* Mobile prev/next — RTL: بعدی (next) on LEFT, قبلی (prev) on RIGHT */}
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-3 sm:hidden">
              <button
                className="grid h-11 w-11 place-items-center rounded-full bg-card/80 text-primary shadow-lg backdrop-blur"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="قبلی"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <button
                className="grid h-11 w-11 place-items-center rounded-full bg-card/80 text-primary shadow-lg backdrop-blur"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="بعدی"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PlaceholderArt({ caption, large }: { caption: string; large?: boolean }) {
  return (
    <div className="grain relative flex h-full w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,#e6d6bf,#cdb89a)] p-4 text-center">
      <span
        className={cn(
          "grid place-items-center rounded-full border border-primary/40 bg-background/70",
          large ? "h-20 w-20" : "h-12 w-12",
        )}
      >
        <ImageIcon className={large ? "h-9 w-9" : "h-5 w-5"} />
        <span className="sr-only">{caption}</span>
      </span>
      <div>
        <p className={cn("font-darya text-primary", large ? "text-xl" : "text-sm")}>
          {caption}
        </p>
        {large && (
          <p className="mt-1 text-xs text-muted-foreground">
            این تصویر در مرحله دوم جایگزین خواهد شد
          </p>
        )}
      </div>
    </div>
  );
}
