"use client";

import { useState, useEffect } from "react";

export default function Marquee() {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="inline-block px-4 text-lg font-semibold">
          ✨ New Arrivals: Marble Elegance | Weekly Feature: Modern Geometric
          Patterns | Join the Community to Get Exclusive Offers...
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
