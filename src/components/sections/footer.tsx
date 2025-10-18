'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone, ArrowUp, ChevronRight, Sparkles, Globe, Twitter, Facebook, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialRef = useRef<HTMLDivElement | null>(null);
  const decorativeElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const copyrightRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: "contact@transcurebioservices.com" },
    { icon: <Phone className="h-4 w-4" />, text: "+41 22 000 00 00" },
    { icon: <MapPin className="h-4 w-4" />, text: "Geneva, Switzerland" }
  ];

  const quickLinks = [
    { href: "/about", text: "About Us" },
    { href: "/services", text: "Services" },
    { href: "/research", text: "Research" },
    { href: "/careers", text: "Careers" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/company/transcure-bioservices/", label: "LinkedIn" },
    { icon: <Twitter className="h-4 w-4" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="h-4 w-4" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-4 w-4" />, href: "#", label: "Instagram" }
  ];

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => setIsVisible(true),
      onLeave: () => setIsVisible(false),
      onEnterBack: () => setIsVisible(true),
      onLeaveBack: () => setIsVisible(false)
    });

    gsap.fromTo(logoRef.current,
      {
        y: 50,
        opacity: 0,
        rotation: -5
      },
      {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 90%"
        }
      }
    );

    gsap.fromTo(buttonsRef.current,
      {
        y: 30,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonsRef.current[0],
          start: "top 90%"
        }
      }
    );

    gsap.fromTo(".contact-item",
      {
        x: -30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-item",
          start: "top 90%"
        }
      }
    );

    gsap.fromTo(linksRef.current,
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linksRef.current[0],
          start: "top 90%"
        }
      }
    );

    gsap.fromTo(".social-icon",
      {
        scale: 0,
        rotation: -180
      },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 90%"
        }
      }
    );

    gsap.fromTo(decorativeElementsRef.current,
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 0.6,
        duration: 1.5,
        stagger: 0.3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: decorativeElementsRef.current[0],
          start: "top 90%"
        }
      }
    );

    gsap.fromTo(copyrightRef.current,
      {
        y: 20,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: copyrightRef.current,
          start: "top 90%"
        }
      }
    );

    gsap.to(".decoration-1", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(".decoration-2", {
      yPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      gsap.to(".newsletter-form", {
        scale: 0.95,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
      
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: 0,
      ease: "power2.inOut"
    });
  };

  return (
    <footer ref={footerRef} id="pied-de-page" className="bg-[#713fdd] text-white rounded-t-[24px] pt-12 pb-8 relative overflow-hidden">
      <div ref={el => { decorativeElementsRef.current[0] = el; }} className="decoration-1 absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div ref={el => { decorativeElementsRef.current[1] = el; }} className="decoration-2 absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div ref={el => { decorativeElementsRef.current[2] = el; }} className="absolute bottom-10 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div ref={logoRef} className="flex flex-col items-center lg:items-start">
                <p className="font-bold text-black text-2xl mb-2">TransCure</p>
                <p className="font-body text-black text-base">Humanized Research</p>
              </div>
              
              <div className="flex flex-col gap-2 mt-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item flex items-center gap-2 text-sm opacity-80">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center lg:items-end gap-6">
              <div className="newsletter-form w-full max-w-md">
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Stay Updated
                </h3>
                {!isSubscribed ? (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white text-[#713fdd] rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                ) : (
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-center">
                    Thank you for subscribing!
                  </div>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link
                  ref={el => { buttonsRef.current[0] = el; }}
                  href="/contact"
                  className="bg-white text-[#713fdd] px-8 py-4 rounded-full font-medium text-base hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Contact
                    <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                <Link
                  ref={el => { buttonsRef.current[1] = el; }}
                  href="#"
                  className="border border-white text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white hover:text-[#713fdd] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center group overflow-hidden"
                >
                  <span className="relative z-10">Newsletter</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index} ref={el => { linksRef.current[index] = el; }}>
                    <Link 
                      href={link.href} 
                      className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer">
                  <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  Oncology Research
                </li>
                <li className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer">
                  <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  Inflammation Studies
                </li>
                <li className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer">
                  <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  Toxicology Testing
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer">
                  <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  Publications
                </li>
                <li className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer">
                  <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  Case Studies
                </li>
                <li className="text-white/80 hover:text-white transition-colors flex items-center gap-2 group cursor-pointer">
                  <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  Blog
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 border-t border-white/20 pt-8">
            <div ref={socialRef} className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`TransCure bioServices on ${social.label}`}
                  className="social-icon w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-[#713fdd] transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div ref={copyrightRef} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-sm text-center lg:text-left">
              <p className="order-last lg:order-first mt-8 lg:mt-0">©2025 TransCure bioServices</p>
              <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <li>
                  <Link href="/legal" className="hover:underline transition-colors">
                    Legal and privacy information
                  </Link>
                </li>
                <li>
                  <button className="hover:underline transition-colors">Cookie settings</button>
                </li>
                <li className="whitespace-nowrap">
                  Website created by{' '}
                  <a
                    href="https://www.advertis.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline transition-colors"
                  >
                    Advertis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      

    </footer>
  );
};

export default Footer;