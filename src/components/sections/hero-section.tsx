"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";


gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let vantaEffect: any;
    if (vantaRef.current) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x7c3aed,
        backgroundColor: 0x7c3aec,
        points: 12.00,
        maxDistance: 25.00,
        spacing: 18.00
      });
    }

    const ctx = gsap.context(() => {
      gsap.from(taglineRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        gsap.from(split.words, {
          y: (i) => (i % 2 === 0 ? 60 : -60),
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.4,
        });
      }

      gsap.from(para1Ref.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });
      gsap.from(para2Ref.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.0,
      });

      gsap.from(buttonRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.2,
      });

      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(buttonRef.current, {
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(255,255,255,0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
      buttonRef.current?.addEventListener("mouseenter", () => hoverTl.play());
      buttonRef.current?.addEventListener("mouseleave", () => hoverTl.reverse());
    }, sectionRef);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden w-full h-full min-h-[700px] pb-24 flex items-center justify-center bg-gradient-to-br  from-purple-900 via-indigo-900 to-purple-700"
      aria-label="Hero Section"
    >
      <div ref={vantaRef} className="absolute inset-0 z-0" />
      <svg className="absolute left-0 top-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
        <defs>
          <radialGradient id="heroGradient" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="50%" cy="40%" rx="48%" ry="30%" fill="url(#heroGradient)" />
      </svg>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-16 lg:items-center">
          <div className="flex flex-col items-start gap-y-8">
            <div
              ref={taglineRef}
              className="inline-block rounded-full border border-white/30 bg-gradient-to-r from-white/20 via-purple-400/10 to-white/10 px-5 py-2 text-base font-semibold text-white shadow backdrop-blur-md tracking-wide animate-fadeIn"
              aria-label="Tagline"
            >
              <span className="flex items-center gap-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18" className="text-purple-300"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2" /></svg>
                Humanized Research
              </span>
            </div>
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white drop-shadow-lg leading-tight backdrop-blur-3xl p-4 rounded-3xl"
              style={{ textShadow: '0 2px 24px #7c3aed55' }}
            >
              
              Personalized preclinical studies with a CRO like no other
            </h1>
          </div>
          <div className="flex flex-col justify-center items-start space-y-8">
            <div className="space-y-6 ">
              <p
                ref={para1Ref}
                className="text-lg lg:text-xl leading-8 text-white/90 font-medium max-w-xl animate-slideInLeft backdrop-blur-3xl p-3 rounded-3xl"
              >
                At <span className="font-bold text-purple-200">TransCure bioServices</span>, we combine innovative expertise and personalized support to develop the therapies of tomorrow.
              </p> 
              <p
                ref={para2Ref}
                className="text-lg lg:text-xl leading-8 text-white/90 font-medium max-w-xl animate-slideInRight backdrop-blur-3xl p-3 rounded-3xl  "
              >
                With a commitment to <span className="font-bold text-purple-200">flexibility</span> and <span className="font-bold text-purple-200">transparency</span>, we leverage advanced mouse models to accelerate your research and drive your discoveries forward.
              </p>
            </div>
            <div className="mt-10 flex flex-col items-start">
              <a
                ref={buttonRef}
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-500 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                aria-label="Get Started"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;