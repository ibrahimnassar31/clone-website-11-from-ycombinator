'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { label: 'Disease Models', href: '/disease-models', children: [
    { label: 'Model A', href: '/disease-models/model-a' },
    { label: 'Model B', href: '/disease-models/model-b' },
  ] },
  { label: 'Mouse Models', href: '/mouse-models', children: [
    { label: 'Model X', href: '/mouse-models/model-x' },
    { label: 'Model Y', href: '/mouse-models/model-y' },
  ] },
  { label: 'About', href: '/about' },
  { label: 'Publications', href: '/publications' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact', className: 'ml-4 px-4 py-2 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition' },
];


const NavigationBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white/80 backdrop-blur-lg shadow-md fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-purple-600 tracking-tight">TransCure bioServices</span>
        </Link>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button
                    className={`font-medium text-gray-700 hover:text-purple-600 transition px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 ${pathname.startsWith(item.href) ? 'text-purple-600 font-semibold' : ''}`}
                  >
                    {item.label}
                  </button>
                  <ul className="absolute left-0 mt-2 min-w-[160px] bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition ${pathname === child.href ? 'bg-purple-100 font-semibold' : ''}`}
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
                  className={`font-medium px-2 py-1 rounded transition ${item.className || 'text-gray-700 hover:text-purple-600'} ${pathname === item.href ? 'text-purple-600 font-semibold' : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
