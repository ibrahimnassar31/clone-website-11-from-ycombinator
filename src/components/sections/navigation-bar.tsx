'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const navItems = [
  { 
    label: 'Disease Models', 
    href: '/disease-models', 
    children: [
      { label: 'Model A', href: '/disease-models/model-a' },
      { label: 'Model B', href: '/disease-models/model-b' },
    ] 
  },
  { 
    label: 'Mouse Models', 
    href: '/mouse-models', 
    children: [
      { label: 'Model X', href: '/mouse-models/model-x' },
      { label: 'Model Y', href: '/mouse-models/model-y' },
    ] 
  },
  { label: 'About', href: '/about' },
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { 
    label: 'Contact', 
    href: '/contact', 
    className: 'ml-4 px-4 py-2 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition transform hover:scale-105' 
  },
];

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar entrance animation
      gsap.fromTo(navRef.current, 
        { 
          y: -100,
          opacity: 0,
          backdropFilter: 'blur(0px)'
        },
        { 
          y: 0,
          opacity: 1,
          backdropFilter: 'blur(16px)',
          duration: 1,
          ease: 'power3.out'
        }
      );

      gsap.fromTo(logoRef.current,
        {
          x: -50,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'back.out(1.7)'
        }
      );

      if (navItemsRef.current) {
        const items = navItemsRef.current.children;
        gsap.fromTo(items,
          {
            y: -20,
            opacity: 0,
            rotationX: 90
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.4,
            ease: 'power3.out'
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleNavItemHover = (element: HTMLElement) => {
    gsap.to(element, {
      y: -2,
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleNavItemHoverOut = (element: HTMLElement) => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleDropdownEnter = (dropdown: HTMLUListElement) => {
    gsap.fromTo(dropdown,
      {
        opacity: 0,
        y: -10,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power3.out'
      }
    );
  };

  const handleDropdownLeave = (dropdown: HTMLUListElement) => {
    gsap.to(dropdown, {
      opacity: 0,
      y: -10,
      scale: 0.95,
      duration: 0.3,
      ease: 'power3.in'
    });
  };

  return (
    <nav 
      ref={navRef}
      className="w-full bg-white/80 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link 
          ref={logoRef}
          href="/" 
          className="flex items-center gap-2 relative group"
          onMouseEnter={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out'
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            });
          }}
        >
          <span className="text-xl font-bold text-purple-600 tracking-tight relative">
            TransCure bioServices
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
          </span>
        </Link>
        
        <ul ref={navItemsRef} className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button
                    onMouseEnter={(e) => handleNavItemHover(e.currentTarget)}
                    onMouseLeave={(e) => handleNavItemHoverOut(e.currentTarget)}
                    className={`font-medium text-gray-700 hover:text-purple-600 transition px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 relative overflow-hidden ${
                      pathname.startsWith(item.href) ? 'text-purple-600 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </button>
                  <ul 
                    className="absolute left-0 mt-2 min-w-[160px] bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto overflow-hidden"
                    ref={(el) => {
                      if (el) {
                        el.addEventListener('mouseenter', () => handleDropdownEnter(el));
                        el.addEventListener('mouseleave', () => handleDropdownLeave(el));
                      }
                    }}
                  >
                    {item.children.map((child, index) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onMouseEnter={(e) => {
                            gsap.to(e.currentTarget, {
                              x: 8,
                              duration: 0.2,
                              ease: 'power2.out'
                            });
                          }}
                          onMouseLeave={(e) => {
                            gsap.to(e.currentTarget, {
                              x: 0,
                              duration: 0.2,
                              ease: 'power2.out'
                            });
                          }}
                          className={`block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200 transform hover:translate-x-2 ${
                            pathname === child.href ? 'bg-purple-100 font-semibold border-l-4 border-purple-600' : ''
                          }`}
                          style={{
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  onMouseEnter={(e) => handleNavItemHover(e.currentTarget)}
                  onMouseLeave={(e) => handleNavItemHoverOut(e.currentTarget)}
                  className={`font-medium px-2 py-1 rounded transition relative overflow-hidden ${
                    item.className || 'text-gray-700 hover:text-purple-600'
                  } ${
                    pathname === item.href ? 'text-purple-600 font-semibold' : ''
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-white to-blue-50"></div>
      </div>
    </nav>
  );
};

export default NavigationBar;