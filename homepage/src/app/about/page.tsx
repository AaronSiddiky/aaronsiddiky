import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-8 py-16 items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-serif font-normal text-black mb-12 text-center">About</h1>
        
        {/* Main Bio */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">
            Aaron Siddiky is an American entrepreneur, leader, and computer scientist. He is a full-ride scholarship recipient, and a 2024 Carl M. Brukenfeld Class of 1927 Memorial Named Scholar concentrating in Computer Science and Economics at Columbia University.
          </p>
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Aaron Siddiky is a huge believer in building fast and breaking things. All experience is good experience when something can be taken out from it. Some of the companies he's built, both successful and unsuccessful include his current ventures and past projects.
          </p>
        </div>

        {/* Biographical Information */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-6">Biographical Information</h2>
          <div className="space-y-3 text-lg font-light">
            <div className="flex">
              <span className="font-medium text-black w-40">Place of Birth:</span>
              <span className="text-gray-700">Washington D.C.</span>
            </div>
            <div className="flex">
              <span className="font-medium text-black w-40">Nationality:</span>
              <span className="text-gray-700">American</span>
            </div>
            <div className="flex">
              <span className="font-medium text-black w-40">Born:</span>
              <span className="text-gray-700">July 11, 2006</span>
            </div>
            <div className="flex">
              <span className="font-medium text-black w-40">Education:</span>
              <span className="text-gray-700">Columbia University</span>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-6">Companies & Projects</h2>
          <ul className="space-y-4 text-lg font-light">
            <li>
              <span className="font-medium text-black">Zkypee</span>
              <br />
              <span className="text-gray-700">The Best Skype replacement</span>
            </li>
            <li>
              <span className="font-medium text-black">Oncoscopic</span>
              <br />
              <span className="text-gray-700">Skin Cancer AI Agent</span>
            </li>
            <li>
              <span className="font-medium text-black">MarketOfAgents</span>
              <br />
              <span className="text-gray-700">AI Agent marketplace</span>
            </li>
            <li>
              <span className="font-medium text-black">KitchCravings</span>
              <br />
              <span className="text-gray-700">DoorDash for home cooked meals</span>
            </li>
            <li>
              <span className="font-medium text-black">AxaBlock</span>
              <br />
              <span className="text-gray-700">FinTech company</span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-6">Contact Information</h2>
          <div className="space-y-3 text-lg font-light">
            <div className="flex">
              <span className="font-medium text-black w-40">Academic:</span>
              <a href="mailto:aaron.siddiky@columbia.edu" className="text-gray-700 hover:text-black transition-colors">
                aaron.siddiky@columbia.edu
              </a>
            </div>
            <div className="flex">
              <span className="font-medium text-black w-40">Business:</span>
              <a href="mailto:aaronsiddiky@axablock.com" className="text-gray-700 hover:text-black transition-colors">
                aaronsiddiky@axablock.com
              </a>
            </div>
            <div className="flex">
              <span className="font-medium text-black w-40">Website:</span>
              <a href="https://aaronsiddiky.com" className="text-gray-700 hover:text-black transition-colors">
                aaronsiddiky.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 