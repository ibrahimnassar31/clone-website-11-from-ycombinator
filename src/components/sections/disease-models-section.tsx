'use client';
import { ChevronRight, Microscope, Heart, Flame, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type DiseaseModel = {
  name: string;
  href: string;
  icon?: string;
};

type DiseaseCategory = {
  title: string;
  description: string;
  models: DiseaseModel[];
  icon: React.ReactNode;
  color: string;
  gradient: string;
};

const categories: DiseaseCategory[] = [
  {
    title: 'Oncology',
    description: 'Assess your lead candidate efficacy targeting cancer cells and or the immune system. We provide a large range of validated mouse and human tumor models.',
    icon: <Microscope className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    gradient: 'rgba(168, 85, 247, 0.1)',
    models: [
      { name: 'Human CDX', href: 'https://www.transcurebioservices.com/disease-models/human-cdx/' },
      { name: 'Human PDX', href: 'https://www.transcurebioservices.com/disease-models/human-pdx/' },
      { name: 'Syngeneic Tumor Mouse Models', href: 'https://www.transcurebioservices.com/disease-models/mouse-tumor/' },
    ],
  },
  {
    title: 'Inflammation',
    description: 'Assess your lead candidate efficacy in validated inflammatory disease models involving either the mouse or the human immune system.',
    icon: <Flame className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    gradient: 'rgba(249, 115, 22, 0.1)',
    models: [
      { name: 'IBD', href: 'https://www.transcurebioservices.com/disease-models/ibd/' },
      { name: 'MASH', href: 'https://www.transcurebioservices.com/disease-models/mash/' },
      { name: 'GvHD', href: 'https://www.transcurebioservices.com/disease-models/dev-disease-model-4/' },
      { name: 'Lung inflammation', href: 'https://www.transcurebioservices.com/disease-models/lung-inflammation/' },
    ],
  },
  {
    title: 'Infectious Disease and Toxicity',
    description: 'Assess your lead candidate efficacy in validated infectious disease models triggered by human tropic viruses or screen for Immuno/hepato toxicity.',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    gradient: 'rgba(16, 185, 129, 0.1)',
    models: [
      { name: 'HIV', href: 'https://www.transcurebioservices.com/disease-models/hiv/' },
      { name: 'HBV', href: 'https://www.transcurebioservices.com/disease-models/hbv/' },
      { name: 'Hepatotoxicity', href: 'https://www.transcurebioservices.com/disease-models/hepato-toxicity/' },
      { name: 'Immunotoxicity', href: 'https://www.transcurebioservices.com/disease-models/immuno-toxicity/' },
    ],
  },
];

const DiseaseModelCard = ({ title, description, models, icon, color, gradient }: DiseaseCategory) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return;
      
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      gsap.to(card, {
        rotationY: x * 10,
        rotationX: -y * 10,
        transformPerspective: 1000,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Layer */}
      <div 
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl group-hover:blur-0`}
      />
      
      <div
        ref={contentRef}
        className="relative h-full rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-2xl border border-white/20 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-current opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mb-6 flex items-center justify-between">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div className="text-sm font-medium text-gray-500 px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm border border-white/30">
            {models.length} models
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="mb-4 text-[28px] font-bold leading-[1.3] text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-500">
            {title}
          </h3>
          
          <p className="mb-8 text-lg leading-[1.6] text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </p>

          <ul className="space-y-3">
            {models.map((model, index) => (
              <li key={model.name} className="overflow-hidden">
                <a
                  href={model.href}
                  className="group/model flex items-center justify-between rounded-2xl p-4 text-left transition-all duration-300 hover:bg-white/60 hover:shadow-lg border border-transparent hover:border-white/50 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
                    animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color} opacity-0 group-hover/model:opacity-100 transition-opacity duration-300`} />
                    <span className="font-semibold text-gray-800 group-hover/model:text-gray-900 transition-colors duration-300">
                      {model.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 opacity-0 group-hover/model:opacity-100 transition-all duration-300 transform group-hover/model:translate-x-0 translate-x-4">
                    <span className="text-sm text-gray-500">Explore</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover/model:text-current transition-colors duration-300" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div 
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />
      </div>
    </div>
  );
};

const DiseaseModelsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          backgroundPosition: '0% 50%',
        },
        {
          opacity: 1,
          backgroundPosition: '100% 50%',
          duration: 2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
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
            y: 100,
            rotationY: 45,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      gsap.to(sectionRef.current, {
        backgroundPosition: '0% 50%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200/15 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
            Advanced Disease Models
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of validated preclinical models designed to accelerate your therapeutic development
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <DiseaseModelCard key={category.title} {...category} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30">
            <span className="text-lg text-gray-700">Need a custom model?</span>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
        }
        
        @keyframes slideInRight {
          from { 
            transform: translateX(-100%);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default DiseaseModelsSection;