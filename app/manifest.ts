import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#F8F6F2",
    theme_color: "#C9A86A",
    lang: "ar",
    dir: "rtl",
    orientation: "portrait-primary",
    categories: ["beauty", "lifestyle", "health"],
    icons: [
      {
        src: SITE.logo,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: SITE.logo,
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
