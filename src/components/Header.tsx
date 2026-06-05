'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(
    pathname === '/services' ? 'services' : pathname === '/contact' ? 'contact' : 'home'
  );

  useEffect(() => {
    if (pathname === '/contact') {
      setActiveLink('contact');
    } else if (pathname === '/services') {
      setActiveLink('services');
    }
  }, [pathname]);

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

  useEffect(() => {
    if (pathname === '/contact' || pathname === '/services') return;

    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    const handleScrollSpy = () => {
      if (window.scrollY < 100) {
        setActiveLink('home');
      }
    };
    window.addEventListener('scroll', handleScrollSpy);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
    closeMenu();
  };

  const menuItems = [
    { id: 'home', label: 'Home', href: '/#home' },
    { id: 'services', label: 'Our Services', href: '/services' },
    { id: 'case-studies', label: 'Case Studies', href: '/#case-studies' },
    { id: 'resources', label: 'Resources', href: '/#resources' },
    { id: 'about', label: 'About Us', href: '/#about' },
    { id: 'contact', label: 'Contact', href: '/contact' },
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
        <Link href="/#home" className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
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
              if (item.id === 'services') {
                return (
                  <li key={item.id} className="relative group py-2">
                    <Link
                      href={item.href}
                      className={`font-sans text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 py-2 ${
                        activeLink === item.id ? 'text-red-bright opacity-100' : 'text-white/80 hover:text-white hover:opacity-100'
                      }`}
                      onClick={() => handleLinkClick(item.id)}
                    >
                      {item.label}
                    </Link>

                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-[-20px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-[1000]">
                      <ul className="bg-[#080832]/98 border border-blue-bright/30 rounded-xl p-4 min-w-[280px] shadow-2xl flex flex-col gap-2 list-none backdrop-blur-md">
                        <li>
                          <Link
                            href="/services#global-expansion"
                            className="font-sans text-[13px] font-semibold text-white/85 transition-all duration-200 block p-2 rounded-md hover:text-blue-bright hover:bg-blue-bright/10"
                          >
                            Global Expansion Service
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services#god-sales-system"
                            className="font-sans text-[13px] font-semibold text-white/85 transition-all duration-200 block p-2 rounded-md hover:text-blue-bright hover:bg-blue-bright/10"
                          >
                            G.O.D. Sales System
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services#marketing-services"
                            className="font-sans text-[13px] font-semibold text-white/85 transition-all duration-200 block p-2 rounded-md hover:text-blue-bright hover:bg-blue-bright/10"
                          >
                            Marketing Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`font-sans text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 py-2 ${
                      activeLink === item.id ? 'text-red-bright opacity-100' : 'text-white/80 hover:text-white hover:opacity-100'
                    }`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="btn-primary">
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
            className="fixed top-0 right-0 w-full sm:w-[280px] h-screen bg-[#03032D]/98 border-l border-blue-bright/15 backdrop-blur-lg flex flex-col justify-center items-center gap-10 p-6 z-[100] shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8 list-none m-0 p-0 text-center">
              {menuItems.map((item) => {
                if (item.id === 'services') {
                  return (
                    <li key={item.id} className="flex flex-col items-center gap-4">
                      <span className="font-sans text-sm font-bold uppercase tracking-wider text-white/50">
                        {item.label}
                      </span>
                      <ul className="flex flex-col gap-3 list-none m-0 p-0">
                        <li>
                          <Link
                            href="/services#global-expansion"
                            className="font-sans text-[13px] text-white/70 hover:text-blue-bright transition-colors"
                            onClick={closeMenu}
                          >
                            Global Expansion
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services#god-sales-system"
                            className="font-sans text-[13px] text-white/70 hover:text-blue-bright transition-colors"
                            onClick={closeMenu}
                          >
                            G.O.D. Sales System
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services#marketing-services"
                            className="font-sans text-[13px] text-white/70 hover:text-blue-bright transition-colors"
                            onClick={closeMenu}
                          >
                            Marketing Services
                          </Link>
                        </li>
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`font-sans text-sm font-bold uppercase tracking-wider transition-colors duration-300 py-2 ${
                        activeLink === item.id ? 'text-red-bright' : 'text-white/80 hover:text-white'
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
                <button className="btn-primary" onClick={closeMenu}>
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
