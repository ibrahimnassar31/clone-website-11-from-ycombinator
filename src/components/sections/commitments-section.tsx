'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Heart, Shield, CheckCircle, ArrowRight, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CommitmentsSection = () => {
  const sectionRef = useRef(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>(new Array(3).fill(null));
  const numberRefs = useRef<(HTMLSpanElement | null)[]>(new Array(3).fill(null));
  const [activeTab, setActiveTab] = useState(0);
  const [expandedCommitment, setExpandedCommitment] = useState<number | null>(null);

  const commitments = [
    {
      title: "Animal welfare excellence",
      color: "purple",
      bgClass: "bg-purple-gradient-light",
      textColor: "text-primary",
      icon: <Heart className="h-6 w-6" />,
      description: "We prioritize the humane treatment of all animals in our care, exceeding regulatory requirements.",
      stats: { number: 100, suffix: "%", label: "Compliance Rate" },
      details: "Our animal welfare program includes environmental enrichment, social housing where appropriate, and continuous monitoring by certified veterinarians."
    },
    {
      title: "AAALAC accredited",
      color: "pink",
      bgClass: "bg-[#FBEFF6]",
      textColor: "text-pink-accent",
      icon: <Award className="h-6 w-6" />,
      description: "Our facilities meet the highest standards for animal care and use in research.",
      stats: { number: 15, suffix: "+", label: "Years Accredited" },
      details: "AAALAC International accreditation signifies our commitment to responsible animal care and use, ensuring ethical and scientific standards."
    },
    {
      title: "Quality driven",
      color: "blue",
      bgClass: "bg-[#EEF4FD]",
      textColor: "text-blue-accent",
      icon: <Shield className="h-6 w-6" />,
      description: "We maintain rigorous quality control measures throughout all research processes.",
      stats: { number: null, suffix: "ISO 9001", label: "Certified" },
      details: "Our quality management system ensures consistency, reliability, and reproducibility in all preclinical studies."
    }
  ];

  useEffect(() => {
    gsap.fromTo(badgesRef.current,
      {
        x: 50,
        opacity: 0,
        scale: 0.9
      },
      {
        x: 0,
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

    gsap.fromTo(numberRefs.current,
      {
        textContent: 0
      },
      {
        textContent: (index: number) => {
          if (index === 0) return 100;
          if (index === 1) return 15;
          return 9001;
        },
        duration: 2,
        stagger: 0.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-gradient-light opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-accent opacity-10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-center gap-9 text-center lg:items-start lg:text-left">
            <h2 className="text-4xl font-semibold text-text-dark leading-tight">
              Our mission reflects our
              <br />
              strong shared commitments
            </h2>
            <p className="text-lg text-text-medium max-w-lg">
              We believe in conducting research with the highest ethical standards, ensuring both scientific excellence and responsible practices.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {commitments.map((commitment, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeTab === index
                      ? `${commitment.bgClass} ${commitment.textColor}`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {commitment.title}
                </button>
              ))}
            </div>
            
            <a
              href="https://www.transcurebioservices.com/ethics-quality/"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all duration-300 hover:bg-purple-deep hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group"
            >
              See our ethic &amp; quality policy
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-5 lg:items-end">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                ref={(el) => { badgesRef.current[index] = el; }}
                className={`rounded-full ${commitment.bgClass} px-7 py-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                onClick={() => setExpandedCommitment(expandedCommitment === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${commitment.bgClass}`}>
                    {commitment.icon}
                  </div>
                  <p className={`font-medium text-lg ${commitment.textColor}`}>
                    {commitment.title}
                  </p>
                  <ChevronDown 
                    className={`h-4 w-4 ${commitment.textColor} transition-transform duration-300 ${
                      expandedCommitment === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedCommitment === index ? 'max-h-40 mt-4' : 'max-h-0'
                }`}>
                  <p className="text-sm text-gray-600 mb-3">{commitment.description}</p>
                  <div className="flex items-center gap-2">
                    <span ref={(el) => { numberRefs.current[index] = el; }} className="text-2xl font-bold text-text-dark">
                      {commitment.stats.number}
                    </span>
                    <span className="text-sm text-gray-500">{commitment.stats.label}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-8 w-full max-w-md rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full ${commitments[activeTab].bgClass}`}>
                  {commitments[activeTab].icon}
                </div>
                <h3 className={`text-xl font-semibold ${commitments[activeTab].textColor}`}>
                  {commitments[activeTab].title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{commitments[activeTab].description}</p>
              <p className="text-sm text-gray-500 mb-4">{commitments[activeTab].details}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-text-dark">
                    {commitments[activeTab].stats.number}
                  </span>
                  <span className="text-sm text-gray-500">{commitments[activeTab].stats.label}</span>
                </div>
                <button className={`text-sm font-medium ${commitments[activeTab].textColor} hover:underline`}>
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-gradient-light mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">100%</h3>
            <p className="text-gray-600">Ethical compliance</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FBEFF6] mb-4">
              <Award className="h-8 w-8 text-pink-accent" />
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">15+</h3>
            <p className="text-gray-600">Years of accreditation</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EEF4FD] mb-4">
              <Shield className="h-8 w-8 text-blue-accent" />
            </div>
            <h3 className="text-2xl font-bold text-text-dark mb-2">ISO 9001</h3>
            <p className="text-gray-600">Quality certified</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
