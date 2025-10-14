import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

const TransCureLogo = () => (
  <Image
    src="data:image/png;base64,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"
    alt="TransCure bioServices Logo"
    width={139}
    height={64}
    className="w-[139px] h-16"
    priority
  />
);

const Footer = () => {
  return (
    <footer id="pied-de-page" className="bg-[#713fdd] text-white rounded-t-[24px] pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-12">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <TransCureLogo />
              <p className="font-body text-base">Humanized Research</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-white text-[#713fdd] px-8 py-4 rounded-full font-medium text-base hover:bg-gray-100 transition-colors text-center"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="border border-white text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white hover:text-[#713fdd] transition-colors text-center"
              >
                Newsletter
              </Link>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4 border-t border-white/20 pt-8">
            <div>
              <a
                href="https://www.linkedin.com/company/transcure-bioservices/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TransCure bioServices on LinkedIn"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#713fdd]" />
              </a>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-sm text-center lg:text-left">
              <p className="order-last lg:order-first mt-8 lg:mt-0">©2025 TransCure bioServices</p>
              <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <li>
                  <Link href="/legal" className="hover:underline">
                    Legal and privacy information
                  </Link>
                </li>
                <li>
                  <button className="hover:underline">Cookie settings</button>
                </li>
                <li className="whitespace-nowrap">
                  Website created by{' '}
                  <a
                    href="https://www.advertis.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
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