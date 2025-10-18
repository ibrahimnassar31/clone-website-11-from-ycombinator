'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import { Settings, ChevronDown, ArrowRight, TrendingUp, Users, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  
  const services = [
    {
      icon: (
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/svgs/d6cab60a-a73b-4160-9e34-8502114a2659-Designsanstitre-1.svg?"
          alt="Expertise icon"
          width={64}
          height={64}
          className="h-16 w-16"
        />
      ),
      title: "Expertise",
      description: "With our 12 years of experience in preclinical studies on various advanced mouse models, we have the perspective, knowledge, and technical expertise necessary to provide high-quality support tailored to your expectations.",
      details: "Our team of PhD-level scientists has published over 50 peer-reviewed papers in the field of preclinical research, ensuring your project benefits from cutting-edge methodologies and insights.",
      stat: "12+",
      statLabel: "Years of Experience",
      iconBg: "bg-blue-50",
      statIcon: <Award className="h-5 w-5" />
    },
    {
      icon: (
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/svgs/03810611-b0f0-4f75-8c07-6e558467e74a-Designsanstitre1-2.svg?"
          alt="Flexibility icon"
          width={64}
          height={64}
          className="h-16 w-16"
        />
      ),
      title: "Flexibility",
      description: "To maximize the output of your preclinical studies, we offer unparalleled flexibility in adapting your study protocol based on real-time data insights.",
      details: "Our adaptive approach allows for protocol modifications at any stage of the study, ensuring your research objectives are met even if unexpected findings emerge.",
      stat: "100%",
      statLabel: "Customizable Protocols",
      iconBg: "bg-green-50",
      statIcon: <TrendingUp className="h-5 w-5" />
    },
    {
      icon: <Settings className="h-16 w-16 text-primary" strokeWidth={1.5} />,
      title: "Transparency",
      description: "Transparency is at the core of our approach, ensuring open communication, clear processes, and trust at every step of your project.",
      details: "Through our secure client portal, you'll have 24/7 access to real-time data, progress reports, and direct communication with your project team.",
      stat: "24/7",
      statLabel: "Project Access",
      iconBg: "bg-purple-50",
      statIcon: <Users className="h-5 w-5" />
    },
  ];

  useEffect(() => {
    gsap.fromTo(cardsRef.current, 
      {
        y: 50,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );

    const bg = bgRef.current;
    if (!bg) return;
    const elements: HTMLDivElement[] = [];
    
    for (let i = 0; i < 6; i++) {
      const el = document.createElement('div');
      el.className = 'absolute rounded-full bg-primary opacity-5';
      const size = Math.random() * 200 + 100;
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      bg.appendChild(el);
      elements.push(el);
      
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      el.animate(
        [
          { transform: 'translate(0, 0) scale(1)' },
          { transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(${Math.random() * 0.2 + 0.9})` },
          { transform: 'translate(0, 0) scale(1)' }
        ],
        {
          duration: duration * 1000,
          delay: delay * 1000,
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
    }
    
    return () => {
      elements.forEach(el => el.remove());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-secondary py-20 lg:py-[120px] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 overflow-hidden"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-16 text-3xl font-bold md:text-4xl lg:text-5xl">
            Supporting your research with solutions tailored to your needs
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`absolute top-0 right-0 h-32 w-32 rounded-bl-full ${service.iconBg} opacity-50 transition-all duration-500 group-hover:h-40 group-hover:w-40`}></div>
              
              <div className="relative p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <button
                    onClick={() => setExpandedService(expandedService === service.title ? null : service.title)}
                    className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100"
                    aria-label={expandedService === service.title ? "Collapse details" : "Expand details"}
                  >
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        expandedService === service.title ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                </div>
                
                <h3 className="mb-4 text-xl font-bold">{service.title}</h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                
                <div className="mt-auto border-t pt-6">
                  <div className="flex items-baseline gap-2">
                    <div className="flex items-center gap-1 text-primary">
                      {service.statIcon}
                      <span className="text-2xl font-bold">{service.stat}</span>
                    </div>
                    <span className="text-sm text-gray-600">{service.statLabel}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="mr-2 font-medium">Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedService === service.title ? 'max-h-40' : 'max-h-0'
              }`}>
                <div className="border-t bg-gray-50 p-6">
                  <p className="text-sm text-gray-600">{service.details}</p>
                  <button className="mt-4 text-sm font-medium text-primary hover:underline">
                    Contact us about this service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-lg md:p-12">
            <h3 className="mb-4 text-2xl font-bold">Ready to advance your research?</h3>
            <p className="mb-6 text-gray-600">
              Our team of experts is ready to help you design and execute the perfect preclinical study for your research needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="rounded-full bg-primary px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-primary/90">
                Get a consultation
              </button>
              <button className="rounded-full border border-gray-300 px-6 py-3 font-medium transition-colors duration-200 hover:bg-gray-50">
                View our case studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;