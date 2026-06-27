import type { MetadataRoute } from "next";

const BASE = "https://siddhyatechnology.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date("2026-06-27"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date("2026-06-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/services`,
      lastModified: new Date("2026-06-27"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/our-work`,
      lastModified: new Date("2026-06-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/products`,
      lastModified: new Date("2026-06-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/careers`,
      lastModified: new Date("2026-06-27"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date("2026-06-27"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}

