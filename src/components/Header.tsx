'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from './BookingModal';

export default function Header() {
  const { openBooking } = useBooking();
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();
  const currentActiveLink = pathname.startsWith('/services')
    ? 'services'
    : pathname === '/case-studies'
      ? 'case-studies'
      : pathname === '/about' || pathname === '/charity'
        ? 'about'
        : pathname.startsWith('/resources') || pathname.startsWith('/blog') || pathname === '/it-vendor-introduction'
          ? 'resources'
          : 'home';

  useEffect(() => {
    const scrollThreshold = 6;
    let animationFrameId: number | null = null;

    const getScrollY = () => Math.max(window.scrollY || window.pageYOffset, 0);

    lastScrollYRef.current = getScrollY();

    const updateHeaderState = (forceVisible = false) => {
      const currentScrollY = getScrollY();
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      setIsSticky(currentScrollY > 50);

      if (forceVisible || currentScrollY <= 100) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
      } else if (Math.abs(scrollDelta) >= scrollThreshold) {
        setIsVisible(scrollDelta < 0);
        lastScrollYRef.current = currentScrollY;
      }

      animationFrameId = null;
    };

    const handleHeaderScroll = () => {
      if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(() => updateHeaderState());
      }
    };

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    animationFrameId = window.requestAnimationFrame(() => updateHeaderState(true));

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', handleHeaderScroll);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (id?: string) => {
    closeMenu();
  };

  const menuItems = [
    { id: 'home', label: 'Home', href: '/' },
    { 
      id: 'services', 
      label: 'Our Services', 
      href: '/services',
      dropdown: [
        { label: 'Growth & Market Entry Consulting', href: '/services/global-expansion-services' },
        { label: 'G.O.D. Sales System', href: '/services/sales-growth-system' },
        { label: 'B2B Marketing & Lead Generation', href: '/services/marketing-service' },
      ]
    },
    { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
    { 
      id: 'resources', 
      label: 'Resources', 
      href: '/it-vendor-introduction',
      dropdown: [
        { label: 'Blog', href: '/blog' },
        { label: 'IT Vendor Introduction', href: '/it-vendor-introduction' },
      ]
    },
    { 
      id: 'about', 
      label: 'About Us', 
      href: '/about',
      dropdown: [
        { label: 'Who We Are', href: '/about' },
        { label: 'EVIT Impact', href: '/charity' },
      ]
    },
  ];

  const showHeader = isVisible || isMenuOpen;

  return (
    <header
      style={{
        transform: showHeader ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)',
      }}
      className={`fixed inset-x-0 top-0 z-[9999] flex items-center will-change-transform transition-all duration-300 ease-in-out ${
        isSticky
          ? 'bg-[#03032D]/85 backdrop-blur-md border-b border-blue-bright/10 h-[70px] shadow-lg'
          : 'bg-transparent h-[88px]'
      }`}
    >
      <div className="max-w-[1200px] w-full mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
          <motion.div
            animate={{ height: isSticky ? 40 : 52 }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center"
          >
            <Image
              src="/assets/logo.png"
              alt="EVIT Logo"
              width={130}
              height={52}
              style={{ height: '100%', width: 'auto' }}
              className="object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Menu Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10 list-none m-0 p-0">
            {menuItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              return (
                <li key={item.id} className={`relative ${hasDropdown ? 'group py-2' : ''}`}>
                  <Link
                    href={hasDropdown ? '#' : item.href}
                    className={`font-sans text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 py-2 flex items-center gap-1 ${
                      currentActiveLink === item.id ? 'text-red-bright opacity-100' : 'text-white/80 hover:text-white hover:opacity-100'
                    }`}
                    onClick={(e) => {
                      if (hasDropdown) {
                        e.preventDefault();
                      } else {
                        handleLinkClick(item.id);
                      }
                    }}
                  >
                    {item.label}
                    {hasDropdown && (
                      <span className="text-[8px] opacity-70 transition-transform duration-300 group-hover:rotate-180 ml-0.5">▼</span>
                    )}
                  </Link>

                  {hasDropdown && item.dropdown && (
                    <div className="absolute top-full left-[-20px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-[1000]">
                      <ul className="bg-[#080832]/98 border border-blue-bright/30 rounded-xl p-4 min-w-[320px] shadow-2xl flex flex-col gap-1.5 list-none backdrop-blur-md">
                        {item.dropdown.map((subItem, idx) => (
                          <li key={idx}>
                            <Link
                              href={subItem.href}
                              className="font-sans text-[13px] font-semibold text-white/85 transition-all duration-200 block p-2 rounded-md hover:text-blue-bright hover:bg-blue-bright/10"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button onClick={openBooking} className="btn-primary">
            Book Free Consultation
            <span className="arrow">→</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer z-[101]"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full sm:w-[320px] h-screen bg-[#03032D]/98 border-l border-blue-bright/15 backdrop-blur-lg flex flex-col justify-center items-center gap-8 p-6 z-[100] shadow-2xl lg:hidden overflow-y-auto"
          >
            <ul className="flex flex-col items-center gap-6 list-none m-0 p-0 text-center w-full max-h-[85vh] overflow-y-auto">
              {menuItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <li key={item.id} className="flex flex-col items-center gap-3">
                      <Link
                        href="#"
                        className={`font-sans text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                          currentActiveLink === item.id ? 'text-red-bright opacity-100' : 'text-white/60'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        {item.label}
                      </Link>
                      <ul className="flex flex-col gap-2 list-none m-0 p-0">
                        {item.dropdown.map((subItem, idx) => (
                          <li key={idx}>
                            <Link
                              href={subItem.href}
                              className="font-sans text-[13px] font-semibold text-white/90 hover:text-blue-bright transition-colors"
                              onClick={closeMenu}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`font-sans text-sm font-bold uppercase tracking-wider transition-colors duration-300 py-2 ${
                        currentActiveLink === item.id ? 'text-red-bright' : 'text-white/80 hover:text-white'
                      }`}
                      onClick={() => handleLinkClick(item.id)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              {/* Mobile CTA */}
              <li className="mt-4">
                <button
                  onClick={() => {
                    closeMenu();
                    openBooking();
                  }}
                  className="btn-primary w-full justify-center"
                >
                  Book Free Consultation
                  <span className="arrow">→</span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
