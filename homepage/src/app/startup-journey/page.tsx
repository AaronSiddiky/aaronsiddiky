import React from "react";

export default function StartupJourney() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-8 py-12">
      <h1 className="text-6xl font-extrabold leading-tight mb-12 max-w-4xl">We want to cheat<br />on everything.</h1>
      <div className="max-w-2xl text-lg space-y-6">
        <p>Yep, you heard that right.</p>
        <p>
          Sales calls. Meetings. Negotiations.<br />
          If there's a faster way to win — we'll take it.
        </p>
        <p>
          We built <span className="bg-blue-200 px-2 py-1 rounded font-bold text-black">Cluely</span> so you never have to think alone again.<br />
          It sees your screen. Hears your audio.<br />
          Feeds you answers in real time.<br />
          While others guess — you're already right.
        </p>
        <p>
          And yes, the world will call it <span className="bg-blue-200 px-2 py-1 rounded font-bold text-black">cheating</span>.
        </p>
        <p>
          But so was the calculator.<br />
          So was spellcheck.<br />
          So was Google.
        </p>
        <p>
          Every time technology makes us smarter, the world panics.<br />
          Then it adapts. Then it forgets.<br />
          And suddenly, it's normal.
        </p>
        <div className="border-l-8 border-black pl-4 mt-8">
          <span className="font-extrabold text-2xl">But this is different.</span>
        </div>
      </div>
    </div>
  );
} 