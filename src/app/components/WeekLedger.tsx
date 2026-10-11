"use client";
import Link from "next/link";
import { useSyncExternalStore } from "react";

type PostMeta = { date: string; title: string; summary: string };

type Week = {
  date: string;
  number: number;
  post?: PostMeta;
  status: "published" | "due" | "missed";
};

const DAY_MS = 24 * 60 * 60 * 1000;

// Sundays are judged in New York time, so a post is "due" all day Sunday ET.
function todayET(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
  }).format(new Date());
}

function formatDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function buildWeeks(start: string, today: string, posts: PostMeta[]): Week[] {
  const byDate = new Map(posts.map((p) => [p.date, p]));
  const weeks: Week[] = [];
  let t = Date.parse(`${start}T12:00:00Z`);
  const end = Date.parse(`${today}T12:00:00Z`);
  for (let n = 1; t <= end; t += 7 * DAY_MS, n++) {
    const date = new Date(t).toISOString().slice(0, 10);
    const post = byDate.get(date);
    weeks.push({
      date,
      number: n,
      post,
      status: post ? "published" : date === today ? "due" : "missed",
    });
  }
  return weeks.reverse();
}

function currentStreak(weeks: Week[]): number {
  let streak = 0;
  for (const week of weeks) {
    if (week.status === "due") continue;
    if (week.status === "missed") break;
    streak++;
  }
  return streak;
}

const subscribe = () => () => {};

export default function WeekLedger({
  posts,
  start,
  buildDate,
}: {
  posts: PostMeta[];
  start: string;
  buildDate: string;
}) {
  // The site is statically built, so the server only knows the build date.
  // Recompute against the real date in the browser so a skipped Sunday shows
  // up as missed without needing a redeploy.
  const today = useSyncExternalStore(subscribe, todayET, () => buildDate);
  const weeks = buildWeeks(start, today, posts);
  const published = weeks.filter((w) => w.status === "published").length;
  const streak = currentStreak(weeks);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 border-y border-gray-300 py-3 mb-8">
        <span>
          streak: <span className="text-black">{streak}</span>{" "}
          {streak === 1 ? "week" : "weeks"}
        </span>
        <span>
          published:{" "}
          <span className="text-black">
            {published}/{weeks.length}
          </span>
        </span>
        <div className="flex flex-wrap gap-1" aria-hidden="true">
          {[...weeks].reverse().map((week) => (
            <span
              key={week.date}
              title={`${formatDate(week.date)} — ${week.status}`}
              className={`w-3 h-3 border border-black ${
                week.status === "published"
                  ? "bg-black"
                  : week.status === "due"
                    ? "bg-gray-300"
                    : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {weeks.length === 0 && (
        <p className="text-gray-600 text-sm">
          first post lands {formatDate(start)}.
        </p>
      )}

      <ol className="space-y-6">
        {weeks.map((week) => (
          <li key={week.date} className="flex gap-6">
            <div className="w-28 flex-shrink-0 text-sm text-gray-600 pt-0.5">
              <div>week {String(week.number).padStart(2, "0")}</div>
              <div>{formatDate(week.date)}</div>
            </div>
            <div className="min-w-0">
              {week.post ? (
                <>
                  <Link
                    href={`/blog/${week.date}`}
                    className="text-black border-b border-black hover:bg-black hover:text-white transition-colors"
                  >
                    {week.post.title}
                  </Link>
                  {week.post.summary && (
                    <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                      {week.post.summary}
                    </p>
                  )}
                </>
              ) : week.status === "due" ? (
                <span className="text-gray-600">due today</span>
              ) : (
                <span className="text-gray-400 line-through">missed</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
