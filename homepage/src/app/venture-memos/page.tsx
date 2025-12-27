import React from "react";

export default function VentureMemos() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-8 py-16 items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-serif font-normal text-black mb-6 text-center">Venture Memos & Investment Perspectives</h1>
        <p className="text-lg text-gray-600 text-center mb-16 font-light">
          Deep dives into compelling investment opportunities across public and private markets
        </p>

        {/* Public Market Convictions */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-normal text-black mb-8">Public Market Convictions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Archer Aviation */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-black transition-colors">
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Public</span>
              </div>
              <h3 className="text-2xl font-medium text-black mb-3">Archer Aviation</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Leading the electric vertical takeoff and landing (eVTOL) revolution. Urban air mobility pioneer positioning for exponential growth in sustainable aviation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">eVTOL</span>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Aviation</span>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Mobility</span>
              </div>
            </div>

            {/* META */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-black transition-colors">
              <div className="mb-4">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Public</span>
              </div>
              <h3 className="text-2xl font-medium text-black mb-3">Meta Platforms</h3>
              <p className="text-gray-700 font-light leading-relaxed mb-4">
                Dominant social infrastructure with cutting-edge AI capabilities. Strategic metaverse positioning while maintaining robust advertising revenue streams.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">AI/ML</span>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">Social Media</span>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">AR/VR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Private Market Convictions */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-serif font-normal text-black mb-8">Private Market Convictions</h2>
          
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="mb-4">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Private</span>
            </div>
            <h3 className="text-2xl font-medium text-black mb-4">Investment Memos</h3>
            
            <p className="text-gray-700 font-light text-lg leading-relaxed mb-6">
              Proprietary research and analysis on high-conviction private market opportunities. 
              These memos explore emerging companies with disruptive potential across various sectors.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-600 font-light leading-relaxed">
                <span className="font-medium text-black">Detailed investment memos coming soon.</span> These will include comprehensive market analysis, competitive positioning, financial projections, and risk assessments for promising private companies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="text-sm font-medium text-gray-500 mb-1">Focus Areas</div>
                <div className="text-gray-700 font-light">AI/ML, FinTech, HealthTech</div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="text-sm font-medium text-gray-500 mb-1">Stage Preference</div>
                <div className="text-gray-700 font-light">Seed to Series B</div>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="text-sm font-medium text-gray-500 mb-1">Investment Thesis</div>
                <div className="text-gray-700 font-light">Product-Market Fit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 border-l-4 border-gray-300 pl-6 py-2">
          <p className="font-medium text-black mb-2">Investment Disclaimer</p>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            These perspectives are for informational purposes only and do not constitute investment advice. 
            All investments carry risk. Please conduct your own research and consult with financial professionals 
            before making investment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

