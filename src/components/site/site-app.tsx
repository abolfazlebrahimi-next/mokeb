"use client";

import * as React from "react";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Gallery } from "@/components/site/gallery";
import { Figures } from "@/components/site/martyrs";
import { TenNights } from "@/components/site/ten-nights";
import { Help } from "@/components/site/help";
import { Location } from "@/components/site/location";
import { Footer } from "@/components/site/footer";
import { FigureDetail } from "@/components/site/figure-detail";
import { NightDetail } from "@/components/site/night-detail";

type View =
  | { type: "home" }
  | { type: "figure"; id: string }
  | { type: "night"; n: number };

/** Parse a location hash like "#/figures/ruqayyah" or "#/nights/10" into a View. */
function parseHash(hash: string): View {
  const h = hash.replace(/^#\/?/, "");
  if (!h) return { type: "home" };
  const [kind, id] = h.split("/");
  if (kind === "figures" && id) return { type: "figure", id };
  if (kind === "nights" && id) {
    const n = parseInt(id, 10);
    if (!Number.isNaN(n) && n >= 1 && n <= 10) return { type: "night", n };
  }
  return { type: "home" };
}

/** Set the hash for a view (no extra history noise). */
function setHash(view: View) {
  let hash = "";
  if (view.type === "figure") hash = `#/figures/${view.id}`;
  else if (view.type === "night") hash = `#/nights/${view.n}`;
  if (window.location.hash !== hash) {
    window.location.hash = hash;
  }
}

export function SiteApp() {
  const [view, setView] = React.useState<View>({ type: "home" });
  // For home scroll restoration after returning from a detail.
  const homeScrollRef = React.useRef(0);

  // Initialize from hash on mount + listen to hashchange (browser back/forward).
  React.useEffect(() => {
    setView(parseHash(window.location.hash));
    const onHash = () => {
      setView(parseHash(window.location.hash));
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Navigate to a figure detail.
  const goFigure = React.useCallback((id: string) => {
    if (view.type === "home") homeScrollRef.current = window.scrollY;
    const next: View = { type: "figure", id };
    setView(next);
    setHash(next);
  }, [view.type]);

  // Navigate to a night detail.
  const goNight = React.useCallback((n: number) => {
    if (view.type === "home") homeScrollRef.current = window.scrollY;
    const next: View = { type: "night", n };
    setView(next);
    setHash(next);
  }, [view.type]);

  // Back to home (from a detail page or button).
  const goHome = React.useCallback(() => {
    setView({ type: "home" });
    setHash({ type: "home" });
    // Restore the previous home scroll position after the DOM updates.
    requestAnimationFrame(() => {
      window.scrollTo({ top: homeScrollRef.current, behavior: "auto" });
    });
  }, []);

  if (view.type === "figure") {
    return (
      <div className="flex min-h-screen flex-col">
        <FigureDetail id={view.id} onBack={goHome} onNavigate={goFigure} />
        <Footer />
      </div>
    );
  }

  if (view.type === "night") {
    return (
      <div className="flex min-h-screen flex-col">
        <NightDetail n={view.n} onBack={goHome} onNavigate={goNight} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Gallery />
        <Figures />
        <TenNights />
        <Help />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
