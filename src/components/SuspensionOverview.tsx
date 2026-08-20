/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, Volume2 } from 'lucide-react';

interface SuspensionOverviewProps {
  setActiveTab: (tab: string) => void;
  onOpenQuoteModal?: () => void;
}

export default function SuspensionOverview({ setActiveTab }: SuspensionOverviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setIsPlaying] = useState(true);
  const [soundStarted, setSoundStarted] = useState(false);

  // Full Headline Pairings for smooth slide-up fade transition
  const headlines = [
    { top: 'ENGINEERED FOR', highlight: 'PRECISION PERFORMANCE.' },
    { top: 'BUILT FOR', highlight: 'SUPERIOR STABILITY.' },
    { top: 'CRAFTED FOR', highlight: 'LONG-TERM RELIABILITY.' },
    { top: 'TUNED FOR', highlight: 'INDIAN RIDING CONDITIONS.' },
  ];

  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setHeadlineIndex((prev) => (prev + 1) % headlines.length);
        setIsTransitioning(false);
      }, 400);
    }, 3800);

    return () => clearInterval(interval);
  }, [headlines.length]);

  useEffect(() => {
    const video = videoRef.current;
    const section = document.getElementById('suspension-overview');
    if (!video || !section) return;

    video.muted = true;
    video.playbackRate = 1.3;

    // Observe the SECTION element for play/pause lifecycle
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!document.hidden) {
              video.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Click for sound handler: unmutes video audio on user gesture and permanently removes button
  const handleSoundToggle = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
      setSoundStarted(true);
    }
  };

  const scrollToNextSection = () => {
    const el = document.getElementById('suspension-overview');
    if (el) {
      const nextEl = el.nextElementSibling;
      if (nextEl) {
        nextEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      className="w-full h-screen relative overflow-hidden bg-slate-950 text-white flex flex-col justify-end border-b border-slate-900"
      id="suspension-overview"
    >
      {/* 1. Full-Bleed Cinematic Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          className="w-full h-full object-cover object-center lg:-translate-x-[18%] scale-[1.1] sm:scale-[1.4] lg:scale-[1.45] filter brightness-135 contrast-115 saturate-[1.10] transition-transform duration-700"
        >
          <source src="/videos/susp-vid-new.mp4" type="video/mp4" />
          <source src="/videos/explosion-view.mp4" type="video/mp4" />
        </video>

        {/* 2. Softened High-Visibility Cinematic Gradient Overlays (Slightly Reduced Opacity on Mobile) */}
        {/* Top Soft Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 sm:from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none" />

        {/* Dark Gradient Behind Typography on Right/Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/25 via-45% to-transparent lg:bg-gradient-to-l lg:from-slate-950/90 lg:via-slate-950/40 lg:via-65% lg:to-transparent z-10 pointer-events-none" />
      </div>

      {/* 3. Top Right Cinematic Header Metadata */}
      <div className="absolute top-6 right-4 sm:right-8 lg:right-12 z-20 flex items-center gap-3">
        <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
          MD AUTOTECH / SUSPENSION SYSTEM
        </span>
        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
      </div>

      {/* 4. Right Hero Text Overlay Content */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pb-36 sm:pb-44 lg:pb-52 relative z-20 flex justify-end mt-auto">
        <div className="max-w-2xl space-y-4 sm:space-y-6 text-right flex flex-col items-end">
          {/* Click for Sound Button: Visible until user clicks to enable audio */}
          {!soundStarted && (
            <button
              onClick={handleSoundToggle}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950/85 backdrop-blur-md border border-emerald-400/60 rounded-full text-white cursor-pointer transition-all duration-300 hover:bg-emerald-950/90 hover:border-emerald-400 active:scale-95 shadow-xl group z-30 mb-1 animate-bounce"
              aria-label="Click for Sound"
            >
              <Volume2 className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />
              <span className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider text-emerald-400 group-hover:text-white">
                CLICK FOR SOUND
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </button>
          )}
          
          {/* Large Headline with Full Text Smooth Slide & Fade Transition */}
          <div className={`transition-all duration-500 transform ${
            isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
          }`}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white font-heading leading-[1.03] text-right drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              {headlines[headlineIndex].top} <br className="hidden sm:inline" />
              <span className="text-red-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">{headlines[headlineIndex].highlight}</span>
            </h2>
          </div>

          {/* Animated Horizontal Accent Line */}
          <div className="h-0.5 w-28 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)] ml-auto" />

          {/* Tagline Supporting Text */}
          <p className="text-slate-200 text-lg sm:text-xl lg:text-2xl font-heading font-extrabold italic uppercase tracking-wider text-right drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Ride with Confidence.
          </p>

          {/* Liquid-Glass CTA Button */}
          <button
            onClick={() => {
              if (setActiveTab) setActiveTab('products');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-2 cursor-pointer px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md backdrop-saturate-150 text-white font-black text-xs uppercase tracking-wider flex items-center gap-3 rounded-full border border-white/25 border-t-white/40 border-b-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow-inner hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.45)] hover:border-white/45 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] group"
          >
            <span className="drop-shadow-xs font-heading font-black">EXPLORE CATALOGUE</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform shrink-0 drop-shadow-xs" />
          </button>

        </div>
      </div>

      {/* 5. Minimal Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors text-[10px] font-mono font-bold uppercase tracking-widest flex flex-col items-center gap-1.5 z-20 cursor-pointer animate-bounce"
      >
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 text-red-500" />
      </button>

    </section>
  );
}

