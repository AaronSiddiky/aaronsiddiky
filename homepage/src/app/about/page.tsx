import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-8 py-16 items-center">
      <div className="max-w-2xl w-full">
        {/* Salient Awards in tweet-style card */}
        <div className="bg-white rounded-xl shadow border border-slate-100 p-5 max-w-xl font-mono mb-8">
          <div className="mb-4">
            <span className="text-3xl font-extrabold text-slate-700">Salient Awards</span>
          </div>
          <ul className="space-y-5">
            <li>
              <span className="font-bold text-slate-800">2024 Securian Personal Finance Decathlon (3rd Place)</span>
              <br />
              <span className="text-slate-500">Issued By Securian Financial Group, Inc.</span>
            </li>
            <li>
              <span className="font-bold text-slate-800">2024 Independent Business Plan District Champion</span>
              <br />
              <span className="text-slate-500">Issued By Minnesota DECA</span>
            </li>
            <li>
              <span className="font-bold text-slate-800">Minnetonka Rotary Club Scholarship</span>
              <br />
              <span className="text-slate-500">Issued By Minnetonka Rotary Club</span>
            </li>
            <li>
              <span className="font-bold text-slate-800">2023 Minnesota Start-Up Business Plan State Champion</span>
              <br />
              <span className="text-slate-500">Issued By DECA Inc.</span>
            </li>
            <li>
              <span className="font-bold text-slate-800">2023 Minnesota Principles of Finance District Champion</span>
              <br />
              <span className="text-slate-500">Issued By Minnesota DECA Inc.</span>
            </li>
            <li>
              <span className="font-bold text-slate-800">IB MYP Class of 2022&apos; Valedictorian</span>
              <br />
              <span className="text-slate-500">Issued By The Australian International School</span>
            </li>
            <li>
              <span className="font-bold text-slate-800">IB MYP Personal Project Distinction (Highest Scorer)</span>
              <br />
              <span className="text-slate-500">Issued By The Australian International School</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 