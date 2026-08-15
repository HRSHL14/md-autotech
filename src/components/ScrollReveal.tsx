/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: string; // e.g. "35px"
  className?: string;
  once?: boolean;
  key?: React.Key;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 950,
  direction = 'up',
  distance = '110px',
  className = '',
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  // On mobile (< 768px), disable Y-transform translation to eliminate address-bar layout thrashing and section height glitching
  const effectiveDelay = isMobile ? 0 : delay;
  const effectiveDuration = isMobile ? 300 : duration;

  const getInitialTransform = () => {
    if (isMobile) return 'none';
    switch (direction) {
      case 'up':
        return `translateY(${distance})`;
      case 'down':
        return `translateY(-${distance})`;
      case 'left':
        return `translateX(${distance})`;
      case 'right':
        return `translateX(-${distance})`;
      case 'none':
        return 'none';
      default:
        return `translateY(${distance})`;
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0, 0)' : getInitialTransform(),
    transitionProperty: isMobile ? 'opacity' : 'opacity, transform',
    transitionDuration: `${effectiveDuration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
    transitionDelay: `${effectiveDelay}ms`,
    willChange: isMobile ? 'opacity' : 'opacity, transform',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
