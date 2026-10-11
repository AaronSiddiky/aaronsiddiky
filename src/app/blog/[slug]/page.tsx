import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { formatDate, getPost, getPosts } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.date }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Aaron Siddiky`,
    description: post.summary || undefined,
    alternates: { canonical: `/blog/${post.date}` },
    openGraph: {
      title: post.title,
      description: post.summary || undefined,
      type: "article",
      publishedTime: post.date,
      authors: ["Aaron Siddiky"],
    },
  };
}

const linkClass =
  "border-b border-black hover:bg-black hover:text-white transition-colors";

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="bg-white font-serif min-h-screen px-8 md:px-16 lg:px-24 py-8">
      <article className="w-full max-w-2xl">
        <Link
          href="/blog"
          className="text-sm text-gray-600 hover:text-black transition-colors"
        >
          &larr; blog
        </Link>

        <p className="text-sm text-gray-600 uppercase tracking-wider mt-6 mb-2">
          {formatDate(post.date)}
        </p>
        <h1 className="text-4xl font-display font-normal text-black tracking-tight mb-8">
          {post.title}
        </h1>

        <div className="text-lg leading-relaxed text-black">
          <Markdown
            components={{
              h2: (props) => (
                <h2
                  className="text-lg font-normal uppercase tracking-wider border-b-2 border-black pb-2 inline-block mt-10 mb-5"
                  {...props}
                />
              ),
              h3: (props) => <h3 className="font-normal mt-6 mb-3" {...props} />,
              p: (props) => <p className="mb-5" {...props} />,
              ul: (props) => (
                <ul className="list-disc pl-5 mb-5 space-y-2" {...props} />
              ),
              ol: (props) => (
                <ol className="list-decimal pl-5 mb-5 space-y-2" {...props} />
              ),
              a: (props) => (
                <a
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
              blockquote: (props) => (
                <blockquote
                  className="border-l-2 border-black pl-4 text-gray-600 mb-5"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </article>
    </main>
  );
}
