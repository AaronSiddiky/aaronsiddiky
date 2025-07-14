"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "./components/Typewriter";

function getDecimalAge(birthday: Date) {
  const now = new Date();
  const diff = now.getTime() - birthday.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.2425);
  return years;
}

export default function Home() {
  const [age, setAge] = useState(() => getDecimalAge(new Date(2006, 6, 11)));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getDecimalAge(new Date(2006, 6, 11)));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black font-sans flex flex-col flex-1 h-screen">
      <main className="relative flex-1 flex flex-col md:flex-row items-start justify-start overflow-hidden px-8 gap-4 h-full">
        {/* Left column: Name, age, bio, socials */}
        <div className="flex-1 min-w-0 max-w-xl overflow-y-auto h-full mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-2">
            AARON SIDDIKY
          </h1>
          <span className="text-2xl font-mono font-semibold text-slate-700 mb-2">
            {age.toFixed(8)} <span className="text-lg font-sans font-medium text-slate-500">years old</span>
          </span>
          <span className="block text-base font-sans font-medium text-slate-500 mb-4 w-full max-w-xl break-words">
            <Typewriter
              text="Currently founder at ownedit.org, empowering real learning in the age of AI. Computer Science and Economics at Columbia University in the City of New York"
              className="block text-base font-sans font-medium text-slate-500 w-full max-w-xl break-words"
              typingSpeed={12}
              pauseDuration={5000}
            />
          </span>
          {/* Redesigned Socials/contact info (no icons) */}
          <div className="w-full flex flex-col gap-2 mb-4">
            <a href="https://twitter.com/AaronSiddiky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-0 py-3 rounded-lg transition bg-white hover:bg-slate-50 group">
              <span className="font-sans text-base font-medium text-slate-500">Twitter</span>
              <span className="ml-4 font-sans text-base font-medium text-slate-500 underline group-hover:text-slate-700">@AaronSiddiky</span>
            </a>
            <a href="https://linkedin.com/in/AaronSiddiky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-0 py-3 rounded-lg transition bg-white hover:bg-slate-50 group">
              <span className="font-sans text-base font-medium text-slate-500">LinkedIn</span>
              <span className="ml-4 font-sans text-base font-medium text-slate-500 underline group-hover:text-slate-700">@AaronSiddiky</span>
            </a>
            <a href="https://github.com/AaronSiddiky" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-0 py-3 rounded-lg transition bg-white hover:bg-slate-50 group">
              <span className="font-sans text-base font-medium text-slate-500">GitHub</span>
              <span className="ml-4 font-sans text-base font-medium text-slate-500 underline group-hover:text-slate-700">@AaronSiddiky</span>
            </a>
            <a href="mailto:aaron.siddiky@columbia.edu" className="flex items-center gap-3 px-0 py-3 rounded-lg transition bg-white hover:bg-slate-50 group">
              <span className="font-sans text-base font-medium text-slate-500">Email</span>
              <span className="ml-4 font-sans text-base font-medium text-slate-500 underline group-hover:text-slate-700">aaron.siddiky@columbia.edu</span>
            </a>
          </div>

        </div>
        {/* Right column: About/projects/button */}
        <div className="flex-1 min-w-0 md:pl-42 md:ml-50 md:mt-9 mt-0 max-w-lg overflow-y-auto h-full">
          {/* Tweet testimonial card above paragraph */}
          <div className="mb-4 bg-white rounded-xl shadow border border-slate-100 p-3 max-w-md">
            <div className="mb-1">
              <span className="font-semibold text-slate-700 font-mono text-sm">Tim Norton</span>
              <span className="text-slate-400 text-xs font-mono ml-2">@prayForPopeLeo · Mar 3, 2025</span>
            </div>
            <div className="text-slate-700 font-mono text-sm mb-2">
              <span className="font-semibold">@AaronSiddiky @LeonardHolter</span> <br />
              Microsoft abandons Skype after spending $500billion(?) building it. Two high-schoolers build a replacement for $20 using AI. So 2025
            </div>
            <a href="https://x.com/prayForPopeLeo/status/1896710209952948537" target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs font-mono hover:bg-slate-200 transition">View Tweet</a>
          </div>
          <div className="text-slate-500 text-base font-sans font-medium mb-4 max-w-lg">
            I like to build, and ship fast. I love competition, free-enterprise and breaking things. Not everything I've made has made money but they've helped get where I am today. 
          </div>
          <ul className="text-slate-500 text-base font-sans font-medium space-y-2 mb-2 max-w-lg">
            <li><span className="font-bold text-slate-600">Ownedit.org (Current):</span> AI Accountability Tool for Academic Honesty</li>
            <li><span className="font-bold text-slate-600">Zkypee.com (Revenue Generating):</span> AI Voice Agent VOIP Service for Small Businesses</li>
            <li><span className="font-bold text-slate-600">Oncoscopic:</span> Cancerous Skin Lesion Ai Agent</li>
            <li><span className="font-bold text-slate-600">KitchCraving:</span> DoorDash for Homemade Food</li>
            <li><span className="font-bold text-slate-600">AxaBlock:</span> FinTech Social Betting App</li>
          </ul>
          <div className="text-slate-500 text-base font-sans font-medium mb-2">And like a hundred other small projects.</div>
        </div>
        {/* Optional: background image, faded, if you want to keep it */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/siddikypic.png"
            alt="Aaron Siddiky"
            width={1600}
            height={1800}
            className="object-contain mix-blend-multiply opacity-60 blur-sm w-full h-full"
            priority
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </main>
    </div>
  );
}
