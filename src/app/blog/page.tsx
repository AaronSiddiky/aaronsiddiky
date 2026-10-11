import type { Metadata } from "next";
import Link from "next/link";
import WeekLedger from "../components/WeekLedger";
import { BLOG_START, getPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Aaron Siddiky",
  description:
    "Weekly notes from Aaron Siddiky, published every Sunday: the most interesting developments in venture capital, private equity, and accounting.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getPosts().map(({ date, title, summary }) => ({
    date,
    title,
    summary,
  }));
  const buildDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
  }).format(new Date());

  return (
    <main className="bg-white font-serif min-h-screen px-8 md:px-16 lg:px-24 py-8">
      <div className="w-full max-w-2xl">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-black transition-colors"
        >
          &larr; aaron siddiky
        </Link>

        <h1 className="text-4xl font-display font-normal text-black tracking-tight mt-6 mb-4">
          blog
        </h1>
        <p className="text-lg leading-relaxed text-black mb-8">
          Every Sunday I write up the most interesting developments of the past
          week across venture capital, private equity, and accounting, and use
          it to consolidate what I&apos;ve been thinking about. Every week is
          listed below, including the ones I miss.
        </p>

        <WeekLedger posts={posts} start={BLOG_START} buildDate={buildDate} />
      </div>
    </main>
  );
}
