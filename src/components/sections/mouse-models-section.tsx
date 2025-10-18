'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const mouseModels = [
  {
    title: 'Human Immune System Mouse Model (CD34+)',
    description: 'Predict the efficacy and immunotoxicity of your lead candidate using a fully reconstituted human immune system.',
    href: '/mouse-models/cd34/',
    icon: '🛡️',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Humanized Liver Mouse Model',
    description: 'Evaluate the efficacy and hepatotoxicity of your lead candidate in a human liver setting.',
    href: '/mouse-models/humanized-liver-mouse/',
    icon: '🧬',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Double Humanized Mouse Model',
    description: 'Combining, in the same animal, a full human immune system and a humanized liver',
    href: '/mouse-models/double-humanized-mouse/',
    icon: '⚡',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Conventional Mouse Model',
    description: 'Your standard immunodeficient and immunocompetent mouse model with our unrivaled expertise.',
    href: '/mouse-models/conventional-mouse-model/',
    icon: '🐭',
    color: 'from-orange-500 to-red-500',
  },
];

export default function MouseModelsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      if (svgRef.current) {
        const path = svgRef.current.querySelector('path');
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
          
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            delay: 0.5,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: svgRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          });
        }
      }

      gsap.fromTo(textRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotationY: 15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleCardHover = (element: HTMLElement, index: number) => {
    gsap.to(element, {
      y: -10,
      scale: 1.02,
      rotationY: 5,
      duration: 0.4,
      ease: 'power2.out',
    });

    const icon = element.querySelector('.model-icon');
    if (icon) {
      gsap.to(icon, {
        scale: 1.2,
        rotation: 360,
        duration: 0.6,
        ease: 'back.out(1.7)',
      });
    }
  };

  const handleCardHoverOut = (element: HTMLElement) => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 0.4,
      ease: 'power2.out',
    });

    const icon = element.querySelector('.model-icon');
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  const handleButtonHover = (element: HTMLElement, color: string) => {
    gsap.to(element, {
      scale: 1.05,
      y: -2,
      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleButtonHoverOut = (element: HTMLElement) => {
    gsap.to(element, {
      scale: 1,
      y: 0,
      boxShadow: '0 4px 6px rgba(139, 92, 246, 0.1)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-[#6D28D9] via-[#7C3AED] to-[#5B21B6] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-300 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col gap-y-6">
            <h2 
              ref={headingRef}
              className="font-semibold text-white text-[40px] leading-tight"
            >
              Find the perfect humanized mouse model to advance your research
            </h2>
            
            <svg 
              ref={svgRef}
              width="258" 
              height="34" 
              viewBox="0 0 258 34" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="text-[#E0E7FF]"
            >
              <path 
                d="M1.5 2C57 -16.5 159.5 53.5 256.5 29" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
            </svg>
            
            <p 
              ref={textRef}
              className="text-lg text-[#E0E7FF] leading-relaxed"
            >
              Discover our validated mouse models, from conventional to cutting-edge double-humanized mice. Perfectly designed for predictive studies, they accelerate breakthroughs in oncology, infectious, and inflammatory diseases.
            </p>
          </div>
          
          <div 
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {mouseModels.map((model, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-[24px] flex flex-col shadow-2xl h-full border border-white/20 relative overflow-hidden group cursor-pointer transform-gpu"
                onMouseEnter={(e) => handleCardHover(e.currentTarget, index)}
                onMouseLeave={(e) => handleCardHoverOut(e.currentTarget)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`absolute inset-0 rounded-[24px] bg-gradient-to-r ${model.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]`}>
                  <div className="w-full h-full bg-white rounded-[22px]"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <span 
                      className="model-icon text-2xl transition-transform duration-500"
                    >
                      {model.icon}
                    </span>
                    <h3 className="text-[1.75rem] leading-tight font-semibold text-[#1F2937] flex-grow">
                      {model.title}
                    </h3>
                  </div>
                  
                  <div className="flex-grow mb-6">
                    <p className="text-lg text-[#6B7280] leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto text-center">
                    <Link
                      href={model.href}
                      onMouseEnter={(e) => handleButtonHover(e.currentTarget, model.color)}
                      onMouseLeave={(e) => handleButtonHoverOut(e.currentTarget)}
                      className="inline-block bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-medium py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform-gpu relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10">See the mouse model</span>
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000">
                        <div className="w-1/2 h-full bg-white/20"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}