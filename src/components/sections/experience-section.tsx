'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement>(null);

  const addToParagraphsRef = (el: HTMLParagraphElement | null) => {
    if (el && !paragraphsRef.current.includes(el)) {
      paragraphsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      if (floatingShapesRef.current) {
        const shapes = floatingShapesRef.current.children;
        gsap.to(shapes, {
          y: -20,
          rotation: 360,
          duration: 4,
          stagger: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 60,
          clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 1.5,
          ease: 'power3.out'
        }
      );

      tl.fromTo(accentLineRef.current,
        {
          scaleX: 0,
          opacity: 0
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'expo.out'
        },
        '-=0.5'
      );

      paragraphsRef.current.forEach((paragraph, index) => {
        tl.fromTo(paragraph,
          {
            opacity: 0,
            y: 30,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.out'
          },
          `-=0.7`
        );
      });

      const contactLink = document.querySelector('.magnetic-link');
      if (contactLink) {
        contactLink.addEventListener('mousemove', (e) => {
          const mouseEvent = e as MouseEvent;
          const { left, top, width, height } = contactLink.getBoundingClientRect();
          const x = (mouseEvent.clientX - left) / width - 0.5;
          const y = (mouseEvent.clientY - top) / height - 0.5;
          
          gsap.to(contactLink, {
            x: x * 10,
            y: y * 5,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        contactLink.addEventListener('mouseleave', () => {
          gsap.to(contactLink, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-secondary py-20 md:py-[120px] overflow-hidden"
    >
      <div 
        ref={floatingShapesRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-blue-accent/20 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 border-2 border-text-dark/10 rounded-lg"></div>
        <div className="absolute bottom-1/4 left-20 w-4 h-4 bg-text-dark/10 rotate-45"></div>
        <div className="absolute top-1/2 right-10 w-10 h-2 bg-blue-accent/30 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-text-dark/20 rounded-full"></div>
      </div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-accent/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-green-400/10 to-cyan-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 
            ref={headingRef}
            className="text-[40px] font-semibold leading-[1.2] text-text-dark mb-6 relative inline-block"
          >
            Benefits from our 12 years experience in validated mouse models
            <div 
              ref={accentLineRef}
              className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-accent to-transparent transform origin-left"
            ></div>
          </h2>

          <div className="space-y-6 mb-8">
            <p 
              ref={addToParagraphsRef}
              className="text-lg leading-[1.6] text-text-medium relative"
            >
              <span className="absolute -left-6 top-0 text-blue-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ●
              </span>
              Being at the forefront of our industry, we are committed to renewal and innovation. Together with our collaborators, we challenge the market with new preclinical models in humanized and standard mice that are increasingly predictive.
            </p>
          </div>

          <div className="group">
            <p 
              ref={addToParagraphsRef}
              className="text-lg font-semibold leading-[1.6] text-text-dark inline-flex items-center gap-2"
            >
              Our experienced R&D team loves new challenges!{' '}
              <a 
                href="https://www.transcurebioservices.com/contact/" 
                className="magnetic-link inline-flex items-center gap-2 text-blue-accent hover:text-blue-700 transition-colors duration-300 relative group/link"
              >
                <span className="relative">
                  Contact us to discuss your needs.
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-accent group-hover/link:w-full transition-all duration-500 ease-out"></span>
                </span>
                
                <svg 
                  className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>

                <span className="absolute inset-0 rounded-lg bg-blue-accent/10 scale-0 group-hover/link:scale-100 transition-transform duration-500 opacity-0 group-hover/link:opacity-100 -z-10"></span>
              </a>
            </p>
          </div>

          <div className="mt-16 flex justify-center items-center space-x-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((year) => (
              <div 
                key={year}
                className="flex flex-col items-center group/year cursor-pointer"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.2,
                    y: -5,
                    duration: 0.3,
                    ease: 'power2.out'
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                  });
                }}
              >
                <div className="w-3 h-3 bg-blue-accent rounded-full mb-2 group-hover/year:bg-blue-700 transition-colors duration-300"></div>
                <div className="w-px h-8 bg-text-dark/30 group-hover/year:bg-blue-accent transition-colors duration-300"></div>
                <span className="text-sm text-text-medium mt-2 group-hover/year:text-blue-accent transition-colors duration-300">
                  {2012 + year * 2}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        section {
          background: linear-gradient(-45deg, #f8fafc, #e2e8f0, #f1f5f9, #e2e8f0);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;