import "@fontsource-variable/vazirmatn";
import "./styles.css";

import { createRoot } from "react-dom/client";
import { SiteApp } from "@/components/site/site-app";
import { Toaster } from "@/components/ui/toaster";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

createRoot(rootElement).render(
  <>
    <SiteApp />
    <Toaster />
  </>,
);
