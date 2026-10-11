import fs from "fs";
import path from "path";
import matter from "gray-matter";

// The first Sunday of the weekly commitment. Every Sunday from here on is
// expected to have a post; the ones that don't show up as missed on /blog.
export const BLOG_START = "2026-10-11";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  date: string; // YYYY-MM-DD, taken from the filename
  title: string;
  summary: string;
};

export type Post = PostMeta & { content: string };

function readPost(file: string): (Post & { draft: boolean }) | null {
  const date = file.replace(/\.md$/, "");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const { data, content } = matter(
    fs.readFileSync(path.join(POSTS_DIR, file), "utf8")
  );
  return {
    date,
    title: data.title || `Week of ${formatDate(date)}`,
    summary: data.summary || "",
    draft: data.draft === true,
    content,
  };
}

export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPost)
    .filter((p): p is Post & { draft: boolean } => p !== null && !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(date: string): Post | undefined {
  return getPosts().find((p) => p.date === date);
}

export function formatDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
