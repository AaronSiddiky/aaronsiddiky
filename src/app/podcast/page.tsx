import React from "react";

export default function Podcast() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-8 py-16 items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-serif font-normal text-black mb-12 text-center">Podcast</h1>
        
        <p className="text-lg text-gray-700 font-light leading-relaxed mb-16 text-center">
          Conversations about technology, entrepreneurship, and innovation
        </p>

        {/* Coming Soon */}
        <div className="border border-gray-200 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif font-normal text-black mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
            A podcast exploring the intersection of technology, business, and human behavior. 
            Deep conversations with builders, investors, and researchers pushing boundaries.
          </p>
          
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-medium text-black mb-4">Episode Topics</h3>
            <ul className="text-left space-y-3 text-gray-700 font-light">
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>Building startups from zero to one</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>The future of AI and automation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>Investment strategies and market insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>Academic research meets real-world application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-black">•</span>
                <span>Lessons from failure and success</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-serif font-normal text-black mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-6">
            Be the first to know when the podcast launches. Follow me on social media for updates.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://twitter.com/AaronSiddiky" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-black rounded-md text-base font-medium hover:border-black transition-colors"
            >
              Twitter
            </a>
            <a 
              href="https://linkedin.com/in/AaronSiddiky" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 text-black rounded-md text-base font-medium hover:border-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

