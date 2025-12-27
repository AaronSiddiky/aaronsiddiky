import React from "react";

export default function MediaCoverage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-8 py-16 items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-serif font-normal text-black mb-12 text-center">Media Coverage</h1>
        
        <p className="text-lg text-gray-700 font-light leading-relaxed mb-16 text-center">
          Press mentions, interviews, and featured articles
        </p>

        {/* Featured Coverage */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-8">Featured</h2>
          
          <div className="space-y-8">
            {/* Sample Media Item */}
            <div className="border border-gray-200 rounded-lg p-6 hover:border-black transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-medium text-black mb-1">Microsoft Skype Replacement Story</h3>
                  <p className="text-sm text-gray-500">March 3, 2025 • Twitter/X</p>
                </div>
              </div>
              <p className="text-gray-700 font-light leading-relaxed mb-3">
                Featured story about building Zkypee, an AI-powered Skype replacement for $20, 
                highlighting the power of modern AI tools in rapid product development.
              </p>
              <a 
                href="https://x.com/prayForPopeLeo/status/1896710209952948537" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-medium hover:underline inline-flex items-center gap-1"
              >
                View Tweet
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Speaking & Podcasts */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-8">Speaking & Podcasts</h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Information about speaking engagements and podcast appearances coming soon.
          </p>
        </div>

        {/* Press Inquiries */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-4">Press Inquiries</h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">
            For media inquiries, interviews, or speaking opportunities, please reach out via email.
          </p>
          <a 
            href="mailto:aaronsiddiky@axablock.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md text-base font-medium hover:bg-gray-900 transition-colors"
          >
            Contact for Media
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

