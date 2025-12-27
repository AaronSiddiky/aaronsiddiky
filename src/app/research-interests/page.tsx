import React from "react";

export default function ResearchInterests() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-8 py-16 items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-serif font-normal text-black mb-12 text-center">Research Interests</h1>
        
        <p className="text-lg text-gray-700 font-light leading-relaxed mb-16 text-center">
          Exploring the intersection of computer science, artificial intelligence, and human behavior
        </p>

        {/* AI & Machine Learning */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-4">Artificial Intelligence & Machine Learning</h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">
            Investigating novel applications of AI in education, healthcare, and enterprise software. 
            Particular focus on voice agents, large language models, and their practical deployment in real-world scenarios.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">LLMs</span>
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Voice AI</span>
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Neural Networks</span>
          </div>
        </div>

        {/* Computer Science Theory */}
        <div className="mb-12 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-4">Computer Science Theory</h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">
            Exploring algorithmic efficiency, distributed systems, and scalable architectures. 
            Understanding how theoretical foundations translate to practical system design.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Algorithms</span>
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Distributed Systems</span>
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">System Design</span>
          </div>
        </div>

        {/* Behavioral Economics */}
        <div className="mb-12 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-4">Behavioral Economics</h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">
            Studying decision-making patterns, market psychology, and the intersection of human behavior with technology. 
            Applications in product design and investment strategy.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Decision Theory</span>
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Market Psychology</span>
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">UX Research</span>
          </div>
        </div>

        {/* Entrepreneurship & Innovation */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-serif font-normal text-black mb-4">Entrepreneurship & Innovation</h2>
          <p className="text-lg text-gray-700 font-light leading-relaxed mb-4">
            Research into rapid prototyping, product-market fit discovery, and scaling early-stage ventures. 
            Focus on lean startup methodologies and efficient go-to-market strategies.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Startup Strategy</span>
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Product Development</span>
            <span className="text-sm px-3 py-1 border border-gray-300 text-gray-700 rounded-full">Growth Hacking</span>
          </div>
        </div>
      </div>
    </div>
  );
}

