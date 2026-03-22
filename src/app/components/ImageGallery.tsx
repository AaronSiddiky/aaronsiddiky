"use client";
import React, { useState } from "react";

const images = [
  { id: 0, type: "video" as const, src: "/sfclip.mov", alt: "Aaron Siddiky video clip" },
  { id: 1, type: "image" as const, src: "/award.jpeg", alt: "Aaron Siddiky receiving award" },
  { id: 2, type: "image" as const, src: "/graduation.JPG", alt: "Aaron Siddiky at graduation" },
  { id: 3, type: "image" as const, src: "/kare11.png", alt: "KARE11 NBC news coverage of Aaron Siddiky" },
  { id: 4, type: "image" as const, src: "/speaker.JPEG", alt: "Aaron Siddiky speaking at event" },
];

export default function ImageGallery() {
  const [expandedImage, setExpandedImage] = useState<number | null>(null);

  const getImageWidth = (imageId: number) => {
    if (expandedImage === null) {
      return imageId === 0 ? "w-[200px]" : "w-[70px]";
    }
    if (expandedImage === imageId) {
      return "w-[350px]";
    }
    return "w-[50px]";
  };

  return (
    <div className="w-full lg:w-1/2 flex gap-2 overflow-hidden">
      {images.map((image) => (
        <div
          key={image.id}
          onClick={() =>
            setExpandedImage(expandedImage === image.id ? null : image.id)
          }
          className={`flex-shrink-0 ${getImageWidth(image.id)} h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative cursor-pointer transition-all duration-500 ease-in-out`}
        >
          {image.type === "video" ? (
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
          ) : (
            <>
              <img
                src={image.src}
                alt={image.alt}
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
          )}
        </div>
      ))}
    </div>
  );
}
