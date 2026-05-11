import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://hamidkhan.pages.dev",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon({ include: { lucide: ["*"] } }),
  ],
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
});
