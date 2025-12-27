"use client";
import React, { useState } from "react";

export default function Home() {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);

  const images = [
    { id: 0, color: 'from-gray-300 to-gray-400', type: 'video', src: '/sfclip.mov' },
    { id: 1, color: 'from-blue-200 to-blue-300', type: 'image', src: '/award.jpeg' },
    { id: 2, color: 'from-green-200 to-green-300', type: 'image', src: '/graduation.JPG' },
    { id: 3, color: 'from-purple-200 to-purple-300', type: 'image', src: '/kare11.png' },
    { id: 4, color: 'from-pink-200 to-pink-300', type: 'image', src: '/speaker.JPEG' },
  ];

  const getImageWidth = (imageId: number) => {
    if (expandedImage === null) {
      return imageId === 0 ? 'w-[200px]' : 'w-[70px]';
    }
    if (expandedImage === imageId) {
      return 'w-[350px]';
    }
    return 'w-[50px]';
  };

  return (
    <div className="bg-white font-mono min-h-screen">
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
              Currently the founder of <a href="https://enagrams.com" target="_blank" rel="noopener noreferrer" className="border-b border-black hover:bg-black hover:text-white transition-colors">Enagrams</a>, an AI infrastructure company that lets users import their context data across agentic applications.
            </p>

            <p className="text-black">
              2026 Venture Fellow at New Enterprise Associates (NEA). I will be working alongside the NEA Investment Committee (previous investments in Uber, Plaid, Cloudflare, Robinhood etc).
            </p>

            <div className="pt-3">
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">past ventures and research distillations</p>
              <div className="space-y-1.5 text-black">
                <div>→ <a href="https://zkypee.com" target="_blank" rel="noopener noreferrer" className="border-b border-black hover:bg-black hover:text-white transition-colors">zkypee</a> — AI voice agent VOIP service</div>
                <div>→ <a href="https://ownedit.org" target="_blank" rel="noopener noreferrer" className="border-b border-black hover:bg-black hover:text-white transition-colors">ownedit</a> — AI accountability for education</div>
                <div>→ oncoscopic — skin cancer detection AI</div>
                <div>→ axablock — fintech social betting</div>
              </div>
            </div>

            <div className="pt-3">
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">media coverage and awards</p>
              <div className="space-y-1.5 text-black text-sm">
                <div>• <a href="https://www.kare11.com/article/money/business/behind-the-business/cant-stop-scrolling-minnesota-high-school-seniors-want-to-help/89-1bce2dfb-6a5c-49ce-a244-6ff6ab036fc2" target="_blank" rel="noopener noreferrer" className="border-b border-black hover:bg-black hover:text-white transition-colors">&quot;Behind the Business: AxaBlock&quot;</a>: NBC News Affiliates covered my first company (founded at 16) Covered by Minneapolis&apos; KARE11, Atlanta&apos;s 11Alive, The Sun Sailor, and the Business Journal.</div>
                <div>• 2024 Columbia Engineering Fast Pitch: Won 3rd Place ($400) in Columbia&apos;s oldest fast pitch competition (Freshman Year)</div>
                <div className="pt-1">
                  <span className="text-gray-600 cursor-default">more</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="mailto:aaron.siddiky@columbia.edu" className="hover:text-gray-600 transition-colors">email</a>
                <a href="https://linkedin.com/in/AaronSiddiky" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">linkedin</a>
                <a href="https://github.com/AaronSiddiky" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">github</a>
                <a href="https://twitter.com/AaronSiddiky" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="w-full lg:w-1/2 flex gap-2 overflow-hidden">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setExpandedImage(expandedImage === image.id ? null : image.id)}
              className={`flex-shrink-0 ${getImageWidth(image.id)} h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out`}
            >
              {image.type === 'video' ? (
                <>
                  <video 
                    src={image.src}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : image.src ? (
                <>
                  <img 
                    src={image.src}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${image.color}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Sections */}
      <section className="px-8 md:px-16 py-16 bg-gray-50">
        <div className="w-full max-w-2xl mx-auto space-y-12">
          
          {/* About */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-black uppercase tracking-wider border-b-2 border-black pb-2 inline-block">About</h2>
            <div className="text-base leading-relaxed space-y-4 text-black">
              <p>
                Aaron Siddiky is an American entrepreneur and computer scientist who is the Founder and CEO of Enagrams. He is a full-ride scholarship recipient, and a 2024 Carl M. Brukenfeld Class of 1927 Memorial Named Scholar at Columbia University.
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

        </div>
      </section>
    </div>
  );
}
