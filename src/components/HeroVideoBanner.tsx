/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRightCircle, ShieldCheck, Factory, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface HeroVideoBannerProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal?: () => void;
}

const CYCLING_PHRASES = [
  'OUR ROADS',
  'OUR TERRAIN',
  'OUR REALITY',
  'EVERY JOURNEY',
  'THE ROAD AHEAD',
];

export default function HeroVideoBanner({ setActiveTab, onOpenQuoteModal }: HeroVideoBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = CYCLING_PHRASES[currentPhraseIndex] + '.';
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 75);
      } else {
        // Pause at completed phrase before backspacing
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      // Backspacing
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35);
      } else {
        // Move to next phrase once completely deleted
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % CYCLING_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log('Autoplay deferred:', err);
      });
    }
  }, []);

  const whatsappTalkUrl = `https://wa.me/917030727770?text=${encodeURIComponent(
    'Hello MD Autotech, I’m interested in your two-wheeler suspension range. Please share your product catalogue and pricing details.'
  )}`;

  return (
    <section className="w-full bg-[#0B1322] text-[#F5F7FA] h-screen relative flex flex-col justify-end overflow-hidden border-b border-[#263448]" id="hero-banner">

      {/* Background Video with Crisp & Clear Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-100 scale-105"
        >
          
          <source src="/videos/hero video new.mp4" type="video/mp4" />
        </video>
        {/* Slate Gradient Overlay: Solid #0B1322 on left for clear text, fading out to transparent on right for full video visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1322] via-[#0B1322]/85 via-40% to-transparent" />
      </div>

      {/* Content Layout shifted higher up */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 pt-24 sm:pt-16 pb-24 sm:pb-32 lg:pb-40 relative z-10 w-full">
        <div className="max-w-3xl space-y-5 sm:space-y-6">

          {/* Headline with typewriter backspace effect in 3-line layout */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-6xl font-black tracking-tight text-[#F5F7FA] uppercase leading-[1.08] font-heading min-h-[3.3em]">
            ENGINEERED FOR<br />
            STABILITY.<br />
            <span className="whitespace-nowrap inline-flex items-baseline">
              <span>BUILT FOR&nbsp;</span>
              <span className="text-red-600">{displayText}</span>
            </span>
          </h1>

          {/* Divider Line */}
          <div className="h-1 w-20 bg-red-600 my-3" />

          {/* Supporting Copy */}
          <p className="text-slate-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
Two-wheeler shock absorbers, suspension systems, and precision automobile components, engineered for reliable performance and trusted by dealers, distributors, and workshops across India.
          </p>

          {/* Actions: Left-aligned compact buttons, stacked vertically on mobile screens, side-by-side on laptop/desktop */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3.5 sm:gap-5 pt-2 sm:pt-4">

            {/* LET'S TALK! WhatsApp Button (Semantic Green Pill) */}
            <a
              href={whatsappTalkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto cursor-pointer px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center gap-3 rounded-full shadow-lg transition-all transform hover:scale-[1.03] active:scale-[0.98] group border border-emerald-500/40"
              id="hero-lets-talk-whatsapp"
            >
              <svg className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.129z" />
              </svg>
              <span>LET&apos;S TALK!</span>
            </a>

            {/* EXPLORE PRODUCTS Button (Precision-Engineered Translucent Liquid-Glass) */}
            <button
              onClick={() => setActiveTab('products')}
              className="w-auto cursor-pointer px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md backdrop-saturate-150 text-white font-black text-xs uppercase tracking-wider flex items-center gap-3 rounded-full border border-white/25 border-t-white/40 border-b-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow-inner hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-white/45 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] group"
            >
              <span className="drop-shadow-xs font-heading font-black">EXPLORE PRODUCTS</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform shrink-0 drop-shadow-xs" />
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}
