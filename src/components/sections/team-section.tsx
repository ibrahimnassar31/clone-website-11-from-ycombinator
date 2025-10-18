'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 40%',
          scrub: true,
        },
      });

      gsap.set(leftRef.current, { xPercent: -40, opacity: 0.6 });
      gsap.set(rightRef.current, { xPercent: 40, opacity: 0.6 });

      tl.to(leftRef.current, {
        xPercent: 0,
        opacity: 1,
        ease: 'power3.out',
      }).to(
        rightRef.current,
        {
          xPercent: 0,
          opacity: 1,
          ease: 'power3.out',
        },
        '<' 
      );

      tl.to(
        [leftRef.current, rightRef.current],
        {
          scale: 1.02,
          duration: 0.8,
          ease: 'power1.out',
        },
        '-=0.3'
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-20 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch relative z-10">
          <div
            ref={leftRef}
            className="relative w-full min-h-[400px] lg:min-h-[600px] overflow-hidden rounded-l-3xl"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/images/3428bac7-ce30-402d-bc3b-bc8f2343893f-96290705-71f7-4d59-b167-f2289f71fa26-scientist-1920x0-c-default-1920x0-c-default-1.webp?"
              alt="A female scientist in a white lab coat smiling in a laboratory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
          </div>

          <div
            ref={rightRef}
            className="bg-primary text-primary-foreground flex flex-col justify-center rounded-r-3xl p-8 md:p-12 lg:p-16"
          >
            <h2 className="font-semibold text-[40px] leading-[1.2] mb-6">
              Meet your humanized research team: Dedicated to your success
            </h2>
            <p className="text-lg leading-[1.6] opacity-90 mb-6">
              Human values are essential to the cultivation of all innovations.
              Our advanced mouse models would not yield such relevant results
              without the investment and expertise of our team.
            </p>
            <p className="text-lg leading-[1.6] opacity-90 mb-8">
              Our 70 collaborators all believe that partnership, exchange and
              collaboration drive forward the causes that matter. Together, in
              our diversity, we bring expertise, passion, and a commitment to
              making a difference, driving solutions that truly matter.
            </p>
            <p className="text-lg font-semibold">
              Large enough to serve, small enough to care!
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-32 left-0 w-[300px] h-[300px] bg-fuchsia-400/20 blur-[120px] rounded-full" />
    </section>
  );
};

export default TeamSection;
