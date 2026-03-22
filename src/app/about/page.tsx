import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Aaron Siddiky — Entrepreneur & Computer Scientist",
  description:
    "Aaron Siddiky is an American entrepreneur and computer scientist. Founder & CEO of Enagrams. Full-ride scholarship recipient and 2024 Carl M. Brukenfeld Named Scholar at Columbia University.",
  alternates: {
    canonical: "/about",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.aaronsiddiky.com/#person",
  name: "Aaron Siddiky",
  url: "https://www.aaronsiddiky.com",
  image: {
    "@type": "ImageObject",
    url: "https://www.aaronsiddiky.com/siddikypic.png",
    width: 800,
    height: 800,
    caption: "Aaron Siddiky",
  },
  description:
    "American entrepreneur and computer scientist. Founder and CEO of Enagrams. 2026 Venture Fellow at New Enterprise Associates (NEA). Computer Science student at Columbia University.",
  jobTitle: "Founder & CEO",
  birthDate: "2006-07-11",
  nationality: {
    "@type": "Country",
    name: "United States",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.aaronsiddiky.com/about",
  },
  worksFor: [
    {
      "@type": "Organization",
      name: "Enagrams",
      url: "https://enagrams.com",
      founder: { "@id": "https://www.aaronsiddiky.com/#person" },
    },
    {
      "@type": "Organization",
      name: "New Enterprise Associates",
      alternateName: "NEA",
      url: "https://www.nea.com",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Columbia University",
    url: "https://www.columbia.edu",
  },
  award: [
    "2024 Carl M. Brukenfeld Class of 1927 Memorial Named Scholar at Columbia University",
    "Full-ride Scholarship Recipient",
    "2024 Columbia Engineering Fast Pitch — 3rd Place",
  ],
  sameAs: [
    "https://www.linkedin.com/in/AaronSiddiky",
    "https://github.com/AaronSiddiky",
    "https://x.com/AaronSiddiky",
    "https://twitter.com/AaronSiddiky",
  ],
};

export default function About() {
  return (
    <main className="min-h-screen bg-white font-mono">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="px-8 md:px-16 lg:px-24 py-16">
        <article className="w-full max-w-5xl mx-auto">
          <h1 className="text-lg font-bold text-black uppercase tracking-wider border-b-2 border-black pb-2 inline-block mb-8">
            About
          </h1>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src="/1749767419417.jpg"
                alt="Aaron Siddiky portrait"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 text-base leading-relaxed space-y-4 text-black">
              <p>
                Aaron Siddiky is an American entrepreneur and computer scientist
                who is the Founder and CEO of Enagrams. He is a full-ride
                scholarship recipient, and a 2024 Carl M. Brukenfeld Class of
                1927 Memorial Named Scholar at Columbia University.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm pt-4">
                <div>
                  <span className="text-gray-600">born</span>
                  <p>july 11, 2006</p>
                </div>
                <div>
                  <span className="text-gray-600">location</span>
                  <p>washington d.c.</p>
                </div>
                <div>
                  <span className="text-gray-600">nationality</span>
                  <p>american</p>
                </div>
                <div>
                  <span className="text-gray-600">education</span>
                  <p>columbia university</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
