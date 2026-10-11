import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.aaronsiddiky.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.aaronsiddiky.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.aaronsiddiky.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getPosts().map((post) => ({
      url: `https://www.aaronsiddiky.com/blog/${post.date}`,
      lastModified: new Date(`${post.date}T12:00:00Z`),
      priority: 0.6,
    })),
  ];
}
