import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3010";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.replace(/\/$/, "");
  const paths = ["", "/play", "/play/daily", "/play/practice", "/play/race", "/settings"];
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
