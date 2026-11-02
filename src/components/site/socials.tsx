"use client";

import * as React from "react";
import { siteConfig } from "@/data/site";

/**
 * Social media glyphs — all hand-drawn line glyphs in our sepia/ink style.
 * Instead of using the real colorful brand logos (which clash with the
 * sepia/parchment aesthetic of the site), we redraw each brand's icon
 * as a clean single-color stroke icon that matches the site's identity.
 */
export function SocialGlyph({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (label) {
    case "اینستاگرام":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="5.5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "تلگرام":
      return (
        <svg {...common} aria-hidden>
          <path d="M21.5 4.5 3 11.2l5.4 1.7 2 5.6 2.8-3 4.6 3.4z" />
          <path d="M8.4 12.9 16 7.6" />
        </svg>
      );
    case "روبیکا":
      // Stylized hexagonal frame + cube, sepia line-art (not colorful)
      return (
        <svg {...common} aria-hidden>
          {/* outer hexagon */}
          <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
          {/* inner cube (3 visible faces) */}
          <path d="M12 8.2 15.5 10.2v4L12 16.2 8.5 14.2v-4z" />
          <path d="M12 8.2 15.5 10.2 12 12.2 8.5 10.2z" />
          <path d="M12 12.2v4" />
        </svg>
      );
    case "بله":
      // Stylized speech-bubble + checkmark, sepia line-art (not teal/white)
      return (
        <svg {...common} aria-hidden>
          {/* rounded speech bubble with a small tail */}
          <path d="M5 5.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8.5l-3.5 3v-3H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
          {/* checkmark inside */}
          <path d="M8.5 11.5l2.2 2.2 4.3-4.6" />
        </svg>
      );
    default:
      return null;
  }
}
