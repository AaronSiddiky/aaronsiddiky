import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-8 py-16 items-center">
      <div className="max-w-4xl w-full">
        {/* Main Bio */}
        <div className="bg-white rounded-xl shadow border border-slate-100 p-6 mb-8">
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-slate-700">About Aaron Siddiky</span>
          </div>
          <p className="text-slate-500 font-sans text-base font-medium leading-relaxed mb-4">
            Aaron Siddiky is an American entrepreneur, leader, and computer scientist. He is a full-ride scholarship recipient, and a 2024 Carl M. Brukenfeld Class of 1927 Memorial Named Scholar concentrating in Computer Science and Neuroscience at Columbia University.
          </p>
          <p className="text-slate-500 font-sans text-base font-medium leading-relaxed">
            Aaron Siddiky is a huge believer in building fast and breaking things. All experience is good experience when something can be taken out from it. Some of the companies he&apos;s built, both successful and unsuccessful include his current ventures and past projects.
          </p>
        </div>

        {/* Biographical Information */}
        <div className="bg-white rounded-xl shadow border border-slate-100 p-6 mb-8">
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-slate-700">Biographical Information</span>
          </div>
          <div className="space-y-3 font-sans text-base font-medium">
            <div>
              <span className="font-bold text-slate-600">Place of Birth:</span>
              <span className="text-slate-500 ml-2">Washington D.C.</span>
            </div>
            <div>
              <span className="font-bold text-slate-600">Nationality:</span>
              <span className="text-slate-500 ml-2">American</span>
            </div>
            <div>
              <span className="font-bold text-slate-600">Born:</span>
              <span className="text-slate-500 ml-2">July 11, 2006</span>
            </div>
            <div>
              <span className="font-bold text-slate-600">Education:</span>
              <span className="text-slate-500 ml-2">Columbia University</span>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="bg-white rounded-xl shadow border border-slate-100 p-6 mb-8">
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-slate-700">Companies & Projects</span>
          </div>
          <ul className="space-y-4 font-sans text-base font-medium">
            <li>
              <span className="font-bold text-slate-600">Zkypee</span>
              <br />
              <span className="text-slate-500">The Best Skype replacement</span>
            </li>
            <li>
              <span className="font-bold text-slate-600">Oncoscopic</span>
              <br />
              <span className="text-slate-500">Skin Cancer AI Agent</span>
            </li>
            <li>
              <span className="font-bold text-slate-600">MarketOfAgents</span>
              <br />
              <span className="text-slate-500">AI Agent marketplace</span>
            </li>
            <li>
              <span className="font-bold text-slate-600">KitchCravings</span>
              <br />
              <span className="text-slate-500">DoorDash for home cooked meals</span>
            </li>
            <li>
              <span className="font-bold text-slate-600">AxaBlock</span>
              <br />
              <span className="text-slate-500">FinTech company</span>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow border border-slate-100 p-6 mb-8">
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-slate-700">Contact Information</span>
          </div>
          <div className="space-y-3 font-sans text-base font-medium">
            <div>
              <span className="font-bold text-slate-600">Academic:</span>
              <a href="mailto:aaron.siddiky@columbia.edu" className="text-slate-500 hover:text-slate-700 underline ml-2">
                aaron.siddiky@columbia.edu
              </a>
            </div>
            <div>
              <span className="font-bold text-slate-600">Business:</span>
              <a href="mailto:aaronsiddiky@axablock.com" className="text-slate-500 hover:text-slate-700 underline ml-2">
                aaronsiddiky@axablock.com
              </a>
            </div>
            <div>
              <span className="font-bold text-slate-600">Website:</span>
              <a href="https://aaronsiddiky.com" className="text-slate-500 hover:text-slate-700 underline ml-2">
                aaronsiddiky.com
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
} 