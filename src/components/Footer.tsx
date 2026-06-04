'use client';

import React from 'react';
import Image from 'next/image';

const navItems = [
  { label: 'OUR SERVICES', href: '#services' },
  { label: 'CASE STUDIES', href: '#case-studies' },
  { label: 'RESOURCES', href: '#resources' },
  { label: 'ABOUT US', href: '#about' },
];

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-blue-bright stroke-[1.8] stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
      <path d="M12 22s7-6.2 7-13a7 7 0 0 0-14 0c0 6.8 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-blue-bright stroke-[1.8] stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
    <path d="M4 6h16v12H4Z" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-none stroke-blue-bright stroke-[1.8] stroke-linecap-round stroke-linejoin-round" aria-hidden="true">
    <path d="M5 5c4 8 6 10 14 14l2-5-5-2-2 2c-2.4-1.2-3.8-2.6-5-5l2-2-2-5Z" />
  </svg>
);

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex w-[34px] h-[34px] items-center justify-center text-blue-bright hover:text-[#00d2ff] hover:-translate-y-0.5 transition-all duration-200"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-y-[1.5px] border-blue-bright/60 bg-[#03032D] before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-top before:opacity-90 before:pointer-events-none before:-z-1 after:content-[''] after:absolute after:inset-0 after:bg-cover after:bg-top after:mix-blend-soft-light after:opacity-[0.34] after:pointer-events-none after:-z-1"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2, 21, 85, 0.84) 0%, rgba(18, 22, 93, 0.72) 50%, rgba(52, 21, 91, 0.8) 100%), url('/assets/footer-map.jpg')`,
      }}
    >
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-[1200px] min-h-[306px] mx-auto px-6 py-12">
        {/* Brand Column */}
        <div className="md:col-span-5 flex flex-col items-start text-left">
          <div className="relative w-[72px] h-[72px] mb-6">
            <Image
              src="/assets/logo.png"
              alt="EVIT"
              fill
              className="object-contain"
            />
          </div>

          <ul className="flex flex-col gap-5 list-none m-0 p-0">
            <li className="flex items-center gap-4 font-sans text-sm sm:text-base text-white/95">
              <LocationIcon />
              <span>82 Tu Hoa Cong Chua, Hong Ha, Ha Noi, Vietnam</span>
            </li>
            <li className="flex items-center gap-4 font-sans text-sm sm:text-base text-white/95">
              <MailIcon />
              <span>info@evit-org.com</span>
            </li>
            <li className="flex items-center gap-4 font-sans text-sm sm:text-base text-white/95">
              <PhoneIcon />
              <span>+84705737170</span>
            </li>
          </ul>
        </div>

        {/* Navigation Column */}
        <nav className="md:col-span-3 flex flex-col items-center md:items-start gap-6" aria-label="Footer navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-xs font-semibold text-white/90 uppercase hover:text-blue-bright transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Map and Socials Column */}
        <div className="md:col-span-4 flex flex-col items-center md:items-end gap-8 md:justify-self-end">
          <div className="flex items-center gap-8">
            <SocialIcon label="Facebook">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
                <path d="M15.12 8.08h2.25V4.21c-.39-.05-1.72-.17-3.27-.17-3.23 0-5.44 1.97-5.44 5.58v3.14H5v4.33h3.66V24h4.49v-6.91h3.51l.56-4.33h-4.07V10.05c0-1.25.34-1.97 1.97-1.97Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="YouTube">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.5v-7L15.8 12l-6.2 3.5Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Podcast">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
                <path d="M12 1.5a9 9 0 0 0-5.67 16 1.1 1.1 0 1 0 1.39-1.7A6.8 6.8 0 1 1 18.8 10.5a6.75 6.75 0 0 1-2.52 5.28 1.1 1.1 0 0 0 1.39 1.7A9 9 0 0 0 12 1.5Z" />
                <path d="M12 5.8a5 5 0 0 0-3.13 8.9 1 1 0 1 0 1.26-1.56 3 3 0 1 1 3.74 0 1 1 0 1 0 1.26 1.56A5 5 0 0 0 12 5.8Z" />
                <path d="M12 10a2 2 0 0 0-1.12 3.66l-.9 6.36A1.28 1.28 0 0 0 11.25 21.5h1.5a1.28 1.28 0 0 0 1.27-1.48l-.9-6.36A2 2 0 0 0 12 10Z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.38-1.85c3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.2 0 22.23 0Z" />
              </svg>
            </SocialIcon>
          </div>

          <div className="relative overflow-hidden w-full max-w-[248px] h-28 border border-blue-bright/80 bg-white/90 shadow-md">
            <iframe
              title="EVIT location on Google Maps"
              src="https://www.google.com/maps?q=EVIT%20Organization%2C%2082%20Tu%20Hoa%20Cong%20Chua%2C%20Hong%20Ha%2C%20Ha%20Noi%2C%20Vietnam&z=17&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block w-full h-full border-0"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-blue-bright/20 py-4 px-6 text-center">
        <span className="font-sans text-xs text-white/70">
          &copy; 2026 EVIT. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
