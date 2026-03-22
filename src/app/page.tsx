import ImageGallery from "./components/ImageGallery";

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
    "@id": "https://www.aaronsiddiky.com",
  },
  worksFor: [
    {
      "@type": "Organization",
      name: "Enagrams",
      url: "https://enagrams.com",
      description:
        "AI infrastructure company that lets users import their context data across agentic applications",
      founder: {
        "@id": "https://www.aaronsiddiky.com/#person",
      },
    },
    {
      "@type": "Organization",
      name: "New Enterprise Associates",
      alternateName: "NEA",
      url: "https://www.nea.com",
      description: "Venture capital firm",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Columbia University",
    url: "https://www.columbia.edu",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Computer Science",
    "Entrepreneurship",
    "Venture Capital",
    "AI Infrastructure",
    "Software Engineering",
  ],
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
  subjectOf: [
    {
      "@type": "NewsArticle",
      headline: "Behind the Business: AxaBlock",
      url: "https://www.kare11.com/article/money/business/behind-the-business/cant-stop-scrolling-minnesota-high-school-seniors-want-to-help/89-1bce2dfb-6a5c-49ce-a244-6ff6ab036fc2",
      publisher: {
        "@type": "NewsMediaOrganization",
        name: "KARE 11",
      },
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.aaronsiddiky.com/#website",
  url: "https://www.aaronsiddiky.com",
  name: "Aaron Siddiky",
  description:
    "Official website of Aaron Siddiky — entrepreneur, computer scientist, and investor.",
  publisher: {
    "@id": "https://www.aaronsiddiky.com/#person",
  },
};

export default function Home() {
  return (
    <main className="bg-white font-mono min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Hero Section with Images */}
      <section className="flex flex-col lg:flex-row gap-12 px-8 md:px-16 lg:px-24 py-8 items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 max-w-2xl space-y-6">
          <div className="pb-3">
            <h1 className="text-3xl font-bold text-black tracking-tight">
              aaron siddiky
            </h1>
          </div>

          <div className="space-y-5 text-base leading-relaxed">
            <p className="text-black">
              computer science @ columbia university
            </p>

            <p className="text-black">
              Currently the founder of{" "}
              <a
                href="https://enagrams.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-black hover:bg-black hover:text-white transition-colors"
              >
                Enagrams
              </a>
              , an AI infrastructure company that lets users import their context
              data across agentic applications.
            </p>

            <p className="text-black">
              2026 Venture Fellow at New Enterprise Associates (NEA). I will be
              working alongside the NEA Investment Committee (previous
              investments in Uber, Plaid, Cloudflare, Robinhood etc).
            </p>

            <div className="pt-3">
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
                past ventures and research distillations
              </p>
              <div className="space-y-1.5 text-black">
                <div>
                  &rarr;{" "}
                  <a
                    href="https://zkypee.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-black hover:bg-black hover:text-white transition-colors"
                  >
                    zkypee
                  </a>{" "}
                  &mdash; AI voice agent VOIP service
                </div>
                <div>
                  &rarr;{" "}
                  <a
                    href="https://ownedit.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-black hover:bg-black hover:text-white transition-colors"
                  >
                    ownedit
                  </a>{" "}
                  &mdash; AI accountability for education
                </div>
                <div>&rarr; oncoscopic &mdash; skin cancer detection AI</div>
                <div>&rarr; axablock &mdash; fintech social betting</div>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
                media coverage and awards
              </p>
              <div className="space-y-1.5 text-black text-sm">
                <div>
                  &bull;{" "}
                  <a
                    href="https://www.kare11.com/article/money/business/behind-the-business/cant-stop-scrolling-minnesota-high-school-seniors-want-to-help/89-1bce2dfb-6a5c-49ce-a244-6ff6ab036fc2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-black hover:bg-black hover:text-white transition-colors"
                  >
                    &quot;Behind the Business: AxaBlock&quot;
                  </a>
                  : NBC News Affiliates covered my first company (founded at 16)
                  Covered by Minneapolis&apos; KARE11, Atlanta&apos;s 11Alive,
                  The Sun Sailor, and the Business Journal.
                </div>
                <div>
                  &bull; 2024 Columbia Engineering Fast Pitch: Won 3rd Place
                  ($400) in Columbia&apos;s oldest fast pitch competition
                  (Freshman Year)
                </div>
                <div className="pt-1">
                  <span className="text-gray-600 cursor-default">more</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <div className="flex flex-wrap gap-6 text-sm">
                <a
                  href="mailto:aaron.siddiky@columbia.edu"
                  className="hover:text-gray-600 transition-colors"
                >
                  email
                </a>
                <a
                  href="https://linkedin.com/in/AaronSiddiky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  linkedin
                </a>
                <a
                  href="https://github.com/AaronSiddiky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  github
                </a>
                <a
                  href="https://twitter.com/AaronSiddiky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery (client component) */}
        <ImageGallery />
      </section>

      {/* About Section */}
      <section className="px-8 md:px-16 lg:px-24 py-16 bg-gray-50">
        <article className="w-full max-w-5xl mx-auto">
          <h2 className="text-lg font-bold text-black uppercase tracking-wider border-b-2 border-black pb-2 inline-block mb-8">
            About
          </h2>
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
