'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCalendar from "@/components/FloatingCalendar";
import Contact from "@/components/Contact";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { useBooking } from "@/components/BookingModal";

interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  imageAlt: string;
  icon: string;
  iconAlt: string;
  detailHeading: string;
  detailSubtitle: string;
  bullets: string[];
  heroBg?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

interface ServiceDetailContentProps {
  service: ServiceItem;
}

function HowItWorksDivider() {
  return (
    <div className="hidden md:flex h-[230px] w-10 items-start justify-center pt-5" aria-hidden="true">
      <svg
        width="32"
        height="210"
        viewBox="0 0 39 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-65"
      >
        <path
          d="M2 0V96L36 130L2 164V260"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function GodSalesSystemOverview() {
  const { openBooking } = useBooking();
  const bullets = [
    'Built for IT service providers who want predictable sales',
    'Focused on real execution (daily actions, conversions, meetings, clients)',
    "Includes: sales plan, sales system setup, sales process, KPI's tracking discipline, negotiation flows",
    'Designed to help you escape the Founder Trap and get more clients',
  ];

  return (
    <section className="relative w-full overflow-hidden py-4 sm:py-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-12 text-center sm:mb-16"
      >
        <h2 className="mb-4 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
          G.O.D SALES SYSTEM FOR IT COMPANIES
        </h2>
        <p className="mx-auto max-w-[640px] font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.26em] text-blue-bright sm:text-sm">
          Turn &quot;friends &amp; family&quot; based sales into a predictable pipeline,
          without the founder doing everything.
        </p>
      </motion.div>

      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"
        >
          <div className="pointer-events-none absolute bottom-[8%] left-[18%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(193,32,210,0.26)_0%,rgba(0,112,255,0.16)_36%,transparent_70%)] blur-xl" />
          <Image
            src="/assets/fc7a00f869220fc564cfbabb86ea19ba8d1031e7.png"
            alt="G.O.D Sales System trophy"
            width={640}
            height={640}
            sizes="(max-width: 1024px) 80vw, 520px"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
          className="flex flex-col items-start text-left"
        >
          <p className="mb-9 max-w-[560px] font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
            If you&apos;re an IT services company and sales feel like chaos,
            random leads, inconsistent meetings, and revenue that depends on
            the founder&apos;s family and friends, this program installs a clear
            system you can run weekly, track with numbers, and scale with a
            team or solo.
          </p>

          <ul className="mb-10 flex max-w-[600px] list-disc flex-col gap-5 pl-5 text-white/90">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="font-sans text-xs font-medium leading-relaxed marker:text-blue-bright sm:text-sm"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <button
            onClick={openBooking}
            className="group inline-flex h-11 items-center justify-center rounded-full bg-red-bright px-8 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)] cursor-pointer"
          >
            BOOK FREE CONSULTATION
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>

      {/* Struggle Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-12 text-center mt-24 sm:mt-32"
      >
        <h2 className="mb-4 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px] max-w-[850px] mx-auto">
          MOST IT COMPANIES STRUGGLE WITH TWO PAINFUL PATTERNS:
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-24">
        {[
          {
            title: '"ZERO RESULTS" AFTER MONTHS OF OUTREACH',
            desc: 'You try sales for months (sometimes years) with little to show for it.',
          },
          {
            title: 'FAMILY & FRIENDS BASED REVENUE',
            desc: 'Relying on friends and family brings unpredictable revenue or 0 revenue.',
          },
          {
            title: 'THE FOUNDER TRAP',
            desc: 'If the founder stops selling, the money stops.',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
            whileHover={{ translateY: -4, boxShadow: '0 12px 40px rgba(0, 112, 255, 0.15)', borderColor: 'rgba(0, 112, 255, 0.7)' }}
            className="glow-card flex flex-col justify-start rounded-[15px] p-6 sm:p-8 border border-blue-bright/35 text-left h-full transition-colors duration-300"
          >
            <h3 className="font-sans text-sm sm:text-base font-extrabold uppercase leading-snug tracking-wide text-white mb-6 min-h-[44px]">
              {item.title}
            </h3>
            <div className="flex gap-3 items-start mt-auto">
              <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
              <p className="font-sans text-xs sm:text-[13px] font-medium leading-relaxed text-text-secondary">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* What is G.O.D Sales System Section */}
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:gap-16 items-center mt-24 sm:mt-32">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start text-left w-full"
        >
          <h2 className="font-sans text-3xl sm:text-[40px] font-extrabold uppercase leading-[1.15] tracking-wide text-white mb-6">
            WHAT IS THE<br />
            G.O.D SALES SYSTEM
          </h2>
          
          <p className="font-sans text-base sm:text-lg font-bold leading-relaxed text-blue-bright mb-8 max-w-[620px]">
            G.O.D Sales System is a 3-step, built for IT companies that want measurable pipeline growth and a repeatable sales process that does not rely on referrals, friends, or the founder.
          </p>

          <p className="font-sans text-xs sm:text-[14px] font-semibold text-white/90 mb-6">
            It&apos;s designed to move you:
          </p>

          <div className="flex flex-col gap-4 w-full mb-10">
            <div className="flex gap-4 items-start">
              <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
              <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                From chaos <span className="text-blue-bright mx-1">→</span> system
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
              <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                From random projects <span className="text-blue-bright mx-1">→</span> predictable pipeline
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
              <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                From founder-only sales <span className="text-blue-bright mx-1">→</span> team-run sales execution
              </p>
            </div>
          </div>

          <button
            onClick={openBooking}
            className="group inline-flex h-11 items-center justify-center rounded-full bg-red-bright px-8 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)] cursor-pointer"
          >
            BOOK FREE CONSULTATION
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[420px] items-center justify-center"
        >
          <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(227,0,0,0.18)_0%,transparent_70%)] blur-xl" />
          <Image
            src="/assets/93399949fe72f74d48c8ac9828123999f81ce7b2.png"
            alt="G.O.D Sales System question chart illustration"
            width={450}
            height={450}
            sizes="(max-width: 1024px) 80vw, 420px"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </motion.div>
      </div>

      {/* How The System Works Section */}
      <div className="w-full mt-24 sm:mt-32 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
            HOW THE SYSTEM WORKS
          </h2>
        </motion.div>

        <div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 md:gap-4 items-start">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6"
          >
            <span className="font-sans text-[72px] font-extrabold text-[#0068ff] leading-none mb-6">1</span>
            <h3 className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-blue-bright mb-6">
              SETUP & MASTER PLAN
            </h3>
            <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-white/95 mb-6 max-w-[280px]">
              Build the plan, offer, process, channels, and full outbound sales setup.
            </p>
            <p className="font-sans text-xs sm:text-[13px] font-medium leading-relaxed text-text-secondary mb-5 max-w-[280px]">
              <span className="text-blue-bright font-bold">Outcome:</span> You stop guessing. You have a clear plan and an outbound system ready to run.
            </p>
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
              <Image
                src="/assets/how-it-work-icon.png"
                alt="Setup icon"
                width={48}
                height={48}
                sizes="48px"
                className="h-12 w-12 object-contain"
              />
            </div>
          </motion.div>

          {/* Divider 1 */}
          <HowItWorksDivider />

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6"
          >
            <span className="font-sans text-[72px] font-extrabold text-[#0068ff] leading-none mb-6">2</span>
            <h3 className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-blue-bright mb-6">
              EXECUTION
            </h3>
            <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-white/95 mb-6 max-w-[280px]">
              Daily actions that fill pipeline: leads <span className="text-blue-bright mx-0.5">→</span> replies <span className="text-blue-bright mx-0.5">→</span> meetings <span className="text-blue-bright mx-0.5">→</span> clients.
            </p>
            <p className="font-sans text-xs sm:text-[13px] font-medium leading-relaxed text-text-secondary mb-5 max-w-[280px]">
              <span className="text-blue-bright font-bold">Outcome:</span> Build momentum and consistency - the system tells your team what to do every day. First qualified leads, first meetings, first deals
            </p>
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
              <Image
                src="/assets/how-it-work-icon (1).png"
                alt="Execution icon"
                width={48}
                height={48}
                sizes="48px"
                className="h-12 w-12 object-contain"
              />
            </div>
          </motion.div>

          {/* Divider 2 */}
          <HowItWorksDivider />

          {/* Column 3 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6"
          >
            <span className="font-sans text-[72px] font-extrabold text-[#0068ff] leading-none mb-6">3</span>
            <h3 className="font-sans text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-blue-bright mb-6">
              SCALING
            </h3>
            <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-white/95 mb-6 max-w-[280px]">
              Add resources and scale lead volume, conversions, and revenue.
            </p>
            <p className="font-sans text-xs sm:text-[13px] font-medium leading-relaxed text-text-secondary mb-5 max-w-[280px]">
              <span className="text-blue-bright font-bold">Outcome:</span> Onboarding process and step-by-step formula for newcomers. More leads, more meetings, more clients
            </p>
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center">
              <Image
                src="/assets/how-it-work-icon (2).png"
                alt="Scaling icon"
                width={48}
                height={48}
                sizes="48px"
                className="h-12 w-12 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* What You Get Section */}
      <div className="w-full mt-24 sm:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <h2 className="mb-5 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
            WHAT YOU GET
          </h2>
          <p className="font-sans text-xs font-extrabold uppercase leading-relaxed tracking-[0.28em] text-blue-bright sm:text-sm">
            This program is a full &quot;sales engine install&quot;
          </p>
        </motion.div>

        <div className="mx-auto mb-20 grid w-full max-w-[1200px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {[
            {
              number: '01',
              title: 'SETUP & MASTER PLAN',
              items: [
                'Strategy for business expansion',
                'Setting up cold outreach campaigns',
                'Everything necessary for kick of sales outreach',
              ],
            },
            {
              number: '02',
              title: 'LEAD GENERATION SYSTEM & KPIS',
              items: [
                'Routines, master tracking sheet, lead gen setup',
                'Data scraping and list building',
                'Qualification criteria',
                'Copywriting',
                'KPIs',
              ],
            },
            {
              number: '03',
              title: 'SALE PIPELINE INSTALLED',
              items: [
                'CRM SOP',
                'Follow-up discipline',
                'Pipeline hygiene (real-time updates)',
                'Data analytics',
              ],
            },
            {
              number: '04',
              title: 'SALES SKILLS (MEETINGS + CLOSING)',
              items: [
                'Meeting preparation',
                'Qualification criteria',
                'Full sales process checklist + SOP',
                'Persuasion tactics and closing techniques',
              ],
            },
            {
              number: '05',
              title: 'CONTRACTING & NEGOTIATION',
              items: [
                'Standard contract flows',
                'Western business expectations / ethics',
                'BATNA and ZOPA (negotiation skills) basics',
              ],
            },
          ].map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: 'easeOut' }}
              className="flex items-start gap-4 text-left"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-bright font-sans text-[11px] font-bold text-red-bright">
                {item.number}
              </span>
              <div className="min-w-0">
                <h3 className="mb-4 font-sans text-[11px] font-bold uppercase leading-snug text-blue-bright">
                  {item.title}
                </h3>
                <ul className="flex list-disc flex-col gap-1.5 pl-4">
                  {item.items.map((point) => (
                    <li key={point} className="font-sans text-[11px] font-medium leading-relaxed text-white/90">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mb-24 text-center"
        >
          <h3 className="mb-5 font-sans text-base font-extrabold uppercase tracking-[0.26em] text-white sm:text-lg">
            BONUS: UPSELL + CROSS-SELL (ACCOUNT GROWTH)
          </h3>
          <p className="font-sans text-sm font-bold tracking-[0.22em] text-white sm:text-base">
            Grow existing accounts with customer success techniques
          </p>
        </motion.div>

        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.8fr)] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-[15px] border border-blue-bright bg-[#071351]/70 p-8 text-left shadow-[0_18px_44px_rgba(0,112,255,0.22),-22px_24px_46px_rgba(193,32,210,0.12)] sm:p-10"
          >
            <h3 className="mb-8 font-sans text-2xl font-extrabold uppercase leading-tight text-white sm:text-[32px]">
              BEST FIT
            </h3>
            <ul className="flex list-disc flex-col gap-6 pl-5">
              <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                An IT company that wants predictable sales
              </li>
              <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                A team willing to execute, invest effort, and track numbers
              </li>
              <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                A founder who values structure over chaos
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="p-8 text-left sm:p-10"
          >
            <h3 className="mb-8 font-sans text-2xl font-extrabold uppercase leading-tight text-white sm:text-[32px]">
              NOT A FIT
            </h3>
            <ul className="flex list-disc flex-col gap-6 pl-5">
              <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                Shortcuts
              </li>
              <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                One-off, short-term fixes
              </li>
              <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                A program without KPIs and numbers
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Investment Options Section */}
      <div className="w-full mt-24 sm:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 text-center sm:mb-14"
        >
          <h2 className="mb-5 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
            INVESTMENT OPTIONS + INCENTIVES
          </h2>
          <p className="font-sans text-xs font-extrabold uppercase leading-relaxed tracking-[0.28em] text-blue-bright sm:text-sm">
            This program is a full &quot;sales engine install&quot;
          </p>
        </motion.div>

        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[15px] border border-blue-bright bg-[#080832]/88 p-8 text-left shadow-[0_22px_46px_rgba(0,0,0,0.28),-24px_28px_50px_rgba(0,112,255,0.14)] sm:p-10"
          >
            <div className="pointer-events-none absolute bottom-[-22%] left-[-12%] h-[260px] w-[300px] bg-[radial-gradient(circle,rgba(227,0,0,0.28)_0%,rgba(193,32,210,0.25)_28%,rgba(0,112,255,0.18)_52%,transparent_72%)] blur-2xl" />
            <Trophy className="relative z-[1] mb-16 h-24 w-24 text-blue-bright stroke-[1.6]" aria-hidden="true" />
            <h3 className="relative z-[1] mb-9 font-sans text-2xl font-extrabold uppercase leading-tight text-white sm:text-[32px]">
              G.O.D SALES SYSTEM
            </h3>
            <ul className="relative z-[1] mb-8 flex list-disc flex-col gap-6 pl-5">
              <li className="font-sans text-xs font-medium leading-relaxed text-white/95 sm:text-sm">
                $1,500 setup investment
              </li>
              <li className="font-sans text-xs font-medium leading-relaxed text-white/95 sm:text-sm">
                $1,200 monthly recurring investment (plus 3% commission)
              </li>
            </ul>
            <button
              onClick={openBooking}
              className="relative z-[1] mt-auto inline-flex h-11 w-full items-center justify-center rounded-full bg-red-bright px-6 font-sans text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(227,0,0,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] sm:ml-auto sm:w-auto sm:px-8 cursor-pointer"
            >
              BOOK FREE CONSULTATION
              <span className="ml-3">→</span>
            </button>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="relative flex min-h-[420px] flex-col overflow-hidden rounded-[15px] border border-blue-bright bg-[#080832]/88 p-8 text-left shadow-[0_22px_46px_rgba(0,0,0,0.28),-24px_28px_50px_rgba(0,112,255,0.14)] sm:p-10"
          >
            <div className="pointer-events-none absolute bottom-[-22%] left-[-12%] h-[260px] w-[300px] bg-[radial-gradient(circle,rgba(227,0,0,0.28)_0%,rgba(193,32,210,0.25)_28%,rgba(0,112,255,0.18)_52%,transparent_72%)] blur-2xl" />
            <Star className="relative z-[1] mb-16 h-24 w-24 text-blue-bright stroke-[1.6]" aria-hidden="true" />
            <h3 className="relative z-[1] mb-9 font-sans text-2xl font-extrabold uppercase leading-tight text-white sm:text-[32px]">
              FAST-ACTION INCENTIVE
            </h3>
            <ul className="relative z-[1] mb-8 list-disc pl-5">
              <li className="font-sans text-xs font-medium leading-relaxed text-white/95 sm:text-sm">
                If you book a setup call, you get set up for free or a 15% lifetime discount. For more information about a discount or a free setup, please book a free consulting session
              </li>
            </ul>
            <button
              onClick={openBooking}
              className="relative z-[1] mt-auto inline-flex h-11 w-full items-center justify-center rounded-full bg-red-bright px-6 font-sans text-[11px] font-bold uppercase tracking-wide text-white shadow-[0_10px_24px_rgba(227,0,0,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] sm:ml-auto sm:w-auto sm:px-8 cursor-pointer"
            >
              BOOK FREE CONSULTATION
              <span className="ml-3">→</span>
            </button>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

function MarketingServicesOverview() {
  const { openBooking } = useBooking();
  return (
    <section className="relative w-full overflow-hidden py-4 sm:py-6">
      {/* Struggle Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-14 text-center sm:mb-20"
      >
        <h2 className="mb-6 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px] max-w-[800px] mx-auto">
          MOST IT COMPANIES STRUGGLE WITH<br />TWO PAINFUL PATTERNS:
        </h2>
        <div className="mx-auto max-w-[850px] space-y-4 px-4">
          <p className="font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.24em] text-blue-bright sm:text-sm">
            Many IT companies struggle with global expansion because their marketing lacks a clear strategy, modern tactics, and strong execution.
          </p>
          <p className="font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.24em] text-blue-bright sm:text-sm">
            Poor websites, unaligned activities, and weak analytics make IT sales &amp; lead generation inefficient and expensive.
          </p>
        </div>
      </motion.div>

      {/* Revenue Engine Section */}
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,450px)] lg:gap-16 mt-16 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start text-left"
        >
          <h2 className="mb-8 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px] max-w-[560px]">
            HOW TO TURN MARKETING INTO A REVENUE ENGINE?
          </h2>
          
          <div className="space-y-6 font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm max-w-[560px]">
            <p>
              The best approach is a focused, scalable strategy — not more tools.
            </p>
            <p>
              We help IT companies understand what to do, what to fix, and how to grow through marketing strategy, website optimization, social media, and automation workflows that convert leads into customers and support IT company global expansion.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[450px] items-center justify-center"
        >
          <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(0,104,255,0.18)_0%,transparent_70%)] blur-xl" />
          <Image
            src="/assets/e29760427ffa2cfb671801b33b6a48176e245b68.png"
            alt="Golden megaphone revenue engine illustration"
            width={450}
            height={450}
            sizes="(max-width: 1024px) 80vw, 420px"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </motion.div>
      </div>
      <div className="w-full mt-24 sm:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 text-center sm:mb-16"
        >
          <h2 className="mb-6 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px] max-w-[800px] mx-auto">
            MARKETING STRATEGY CONSULTING
          </h2>
          <p className="mx-auto max-w-[850px] font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.24em] text-blue-bright sm:text-sm px-4">
            Marketing Strategy Consulting gives IT companies a clear roadmap for global expansion, aligning strategy with business goals to improve IT sales &amp; lead generation and ROI.
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,450px)_minmax(0,1fr)] lg:gap-16 mt-12 sm:mt-16">
          {/* Left Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-[420px] items-center justify-center"
          >
            <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(0,104,255,0.18)_0%,transparent_70%)] blur-xl" />
            <Image
              src="/assets/44609142e529bd087084e93d0ed255601f3ca35b.png"
              alt="Marketing strategy trophy magnifier illustration"
              width={450}
              height={450}
              sizes="(max-width: 1024px) 80vw, 420px"
              className="relative z-[1] h-auto w-full object-contain"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="flex flex-col items-start text-left"
          >
            <h3 className="mb-8 font-sans text-xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-2xl">
              WHAT WE OFFER
            </h3>
            
            <div className="flex flex-col gap-6 text-left w-full mb-10">
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Market Research &amp; Insights:</span> Analyze competitors and audience behavior to develop a data-driven strategy.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Goal Setting &amp; Strategy Development:</span> Define short-term and long-term marketing objectives.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Channel Selection &amp; Planning:</span> Identify and recommend the most effective marketing channels like SEO, social media, PPC, and email.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Budgeting &amp; ROI Analysis:</span> Allocate budgets effectively to maximize ROI.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Revamp of Existing Strategies:</span> Optimize current marketing efforts for better consistency and effectiveness.
                </p>
              </div>
            </div>

            <button
              onClick={openBooking}
              className="group inline-flex h-11 items-center justify-center rounded-full bg-red-bright px-8 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)] cursor-pointer"
            >
              BOOK FREE CONSULTATION
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>

        {/* Marketing Strategy Consulting Section - Part 2 */}
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,450px)] lg:gap-16 mt-20 sm:mt-28">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-start text-left"
          >
            <h3 className="mb-8 font-sans text-xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-2xl">
              WHAT WE OFFER
            </h3>
            
            <div className="flex flex-col gap-6 text-left w-full mb-10">
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">SEO Audits &amp; Optimization:</span> Improve your rankings with comprehensive on-page and off-page SEO strategies.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Content Strategy:</span> Create high-quality content that addresses key audience pain points and drives traffic.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Lead Magnets:</span> Design and implement high-converting lead magnets to capture and nurture leads.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Website Revamp:</span> Align website structure, messaging, and design with your marketing strategy to increase conversions.
                </p>
              </div>
            </div>

            <button
              onClick={openBooking}
              className="group inline-flex h-11 items-center justify-center rounded-full bg-red-bright px-8 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)] cursor-pointer"
            >
              BOOK FREE CONSULTATION
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-[420px] items-center justify-center"
          >
            <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(0,104,255,0.18)_0%,transparent_70%)] blur-xl" />
            <Image
              src="/assets/39199ee4dc07c7e7bfc087241dedc0632ee7a38b.png"
              alt="Marketing strategy WWW globe illustration"
              width={450}
              height={450}
              sizes="(max-width: 1024px) 80vw, 420px"
              className="relative z-[1] h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Build Automation Marketing Flow Section */}
      <div className="w-full mt-24 sm:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-14 text-center sm:mb-16"
        >
          <h2 className="mb-6 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px] max-w-[800px] mx-auto">
            BUILD AUTOMATION MARKETING FLOW
          </h2>
          <p className="mx-auto max-w-[850px] font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.24em] text-blue-bright sm:text-sm px-4">
            We help businesses automate their lead-nurturing and marketing workflows, enabling scalable growth without manual intervention.
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,450px)_minmax(0,1fr)] lg:gap-16 mt-12 sm:mt-16">
          {/* Left Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-[420px] items-center justify-center"
          >
            <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(0,104,255,0.18)_0%,transparent_70%)] blur-xl" />
            <Image
              src="/assets/f0d1f5772b5c68ae102fa5275725593a4b532bc6.png"
              alt="Automation marketing play gear illustration"
              width={450}
              height={450}
              sizes="(max-width: 1024px) 80vw, 420px"
              className="relative z-[1] h-auto w-full object-contain"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="flex flex-col items-start text-left"
          >
            <h3 className="mb-8 font-sans text-xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-2xl">
              WHAT WE OFFER
            </h3>
            
            <div className="flex flex-col gap-6 text-left w-full mb-10">
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Lead Capture &amp; CRM Integration:</span> Seamlessly connect website leads to your CRM to ensure timely and consistent follow-up for IT sales &amp; lead generation.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Email Marketing Automation:</span> Set up behavior-based, triggered email campaigns that deliver personalized content at the right time.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Lead Scoring &amp; Segmentation:</span> Score and segment leads based on intent and engagement to enable targeted communication.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Nurturing Campaigns:</span> Automate lead nurturing to guide prospects through the sales funnel toward conversion.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-bright text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  <span className="text-white font-bold">Tracking &amp; Reporting:</span> Monitor key metrics such as engagement and conversion rates to continuously improve performance.
                </p>
              </div>
            </div>

            <button
              onClick={openBooking}
              className="group inline-flex h-11 items-center justify-center rounded-full bg-red-bright px-8 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)] cursor-pointer"
            >
              BOOK FREE CONSULTATION
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Who This Is For Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative mx-auto mt-24 w-full max-w-[1060px] overflow-hidden rounded-[15px] border border-blue-bright bg-[#071351]/70 p-8 text-left shadow-[0_18px_44px_rgba(0,112,255,0.22),-22px_24px_46px_rgba(193,32,210,0.12)] sm:mt-32 sm:p-10"
      >
        <div className="pointer-events-none absolute bottom-[-22%] left-[-12%] h-[260px] w-[300px] bg-[radial-gradient(circle,rgba(0,104,255,0.18)_0%,transparent_70%)] blur-xl" />
        
        <h3 className="relative z-[1] mb-8 font-sans text-2xl font-extrabold uppercase leading-tight text-white sm:text-[32px]">
          WHO THIS IS FOR
        </h3>
        
        <ul className="relative z-[1] flex flex-col gap-6 pl-5 list-disc">
          <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
            For companies that need a clear, data-driven marketing strategy to generate qualified leads and predictable revenue. We align positioning, demand generation, and performance tracking to build a scalable marketing engine.
          </li>
          <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
            For companies that want to increase organic traffic, improve conversion rates, and turn their website into a consistent inbound lead engine through SEO, content strategy, and funnel optimization.
          </li>
          <li className="font-sans text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
            For companies looking to streamline marketing processes and improve lead conversion through CRM integration and automated workflows—without increasing manual workload.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

function GlobalExpansionOverview() {
  const { openBooking } = useBooking();
  const introBullets = [
    "Expanding into international markets is complex and high-risk. Many companies struggle to identify the right markets, build effective sales channels, and define a clear, globally effective Unique Selling Point (USP). Differences in business ethics and local practices often add further complexity.",
    "Without a clear strategic roadmap, these challenges lead to slow market entry, weak traction, wasted resources, and avoidable financial losses.",
    "Working with EVIT means having a trusted guide for global expansion. From early market assessment to active business development, we show you how to navigate global markets with clarity. We anticipate potential challenges in advance and provide proven, practical solutions to help you expand internationally and sell your services successfully in global markets."
  ];

  const whatWeDo = [
    "Conduct a full internal audit to identify what to improve and what to leverage before IT company global expansion, including financial readiness, product viability, and operational capability.",
    "Define how to enter international markets with the best go-to-market approach, covering market selection, sales channels, and distribution models.",
    "Build scalable IT sales & lead generation systems aligned with global B2B buying behavior.",
    "Provide clear guidance on what to do at each stage of the expansion process to reduce risk and speed up execution."
  ];

  const results = [
    "An Expansion Master Plan that shows where your business stands, how to compete effectively, and what to execute next in foreign markets.",
    "Clear, actionable instructions on IT sales & lead generation, sales strategy, and market execution for successful global expansion."
  ];

  return (
    <section className="relative w-full overflow-hidden py-4 sm:py-6">
      {/* Section 1: Unlock Your Global Potential */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
          UNLOCK YOUR GLOBAL POTENTIAL
        </h2>
        <p className="mx-auto w-full font-sans text-xs font-bold uppercase leading-relaxed tracking-[0.26em] text-blue-bright sm:text-sm">
          Achieve Sustainable Cash Flow and Growth
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
        className="flex flex-col gap-6 text-left w-full mb-24"
      >
        {introBullets.map((bullet, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
            <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
              {bullet}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Section 2: Deep Company Analysis & Master Plan */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
          DEEP COMPANY ANALYSIS & MASTER PLAN
        </h2>
        <p className="mx-auto w-full font-sans text-xs sm:text-[15px] font-bold leading-relaxed tracking-normal text-blue-bright">
          Many companies attempt international expansion without fully understanding their own strengths,
          weaknesses, or readiness, leading to misaligned strategies and execution failures.
        </p>
      </motion.div>

      {/* Intro bullets for Section 2 (Full Width) */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
        className="flex flex-col gap-6 w-full mb-12"
      >
        {introBullets.map((bullet, idx) => (
          <div key={idx} className="flex gap-4 items-start">
            <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
            <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
              {bullet}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Grid container for What EVIT do, Results & 3D image */}
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 items-center mb-16">
        {/* Left Column - What We Do & Results */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start text-left w-full"
        >
          {/* What EVIT do */}
          <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-blue-bright mb-4">
            What EVIT do:
          </h3>
          <div className="flex flex-col gap-5 w-full mb-10">
            {whatWeDo.map((bullet, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  {bullet}
                </p>
              </div>
            ))}
          </div>

          {/* Results */}
          <h3 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-blue-bright mb-4">
            Results:
          </h3>
          <div className="flex flex-col gap-5 w-full">
            {results.map((bullet, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
                <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[380px] items-center justify-center"
        >
          <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(0,112,255,0.2)_0%,transparent_70%)] blur-xl" />
          <Image
            src="/assets/solution-growth.png"
            alt="Global market growth illustration"
            width={400}
            height={400}
            sizes="(max-width: 1024px) 80vw, 380px"
            className="relative z-[1] h-auto w-full object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Section 3: Create Unique Selling Point - USP */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-12 text-center mt-24 sm:mt-32"
      >
        <h2 className="mb-4 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
          CREATE UNIQUE SELLING POINT - USP
        </h2>
      </motion.div>

      {/* Intro bullets for Section 3 (Full Width) */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
        className="flex flex-col gap-6 w-full mb-16 text-left"
      >
        <div className="flex gap-4 items-start">
          <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
          <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
            EVIT conducts a specialized USP workshop using a proven framework to help B2B companies clearly identify and refine their Unique Selling Point. The framework simplifies a complex process and shows how to define and communicate a USP that works in competitive and international markets.
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
          <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
            Unique Selling Point: EVIT&apos;s USP framework has helped multiple companies strengthen market positioning and improve customer engagement.
          </p>
        </div>
      </motion.div>

      {/* Grid container for What We Offer & Star Trophy */}
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[400px_1fr] lg:gap-16 items-center mb-16">
        {/* Left Column - Star Trophy Image */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[380px] items-center justify-center order-2 lg:order-1"
        >
          <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(193,32,210,0.2)_0%,transparent_70%)] blur-xl" />
          <Image
            src="/assets/c531ed1cc0783f009ddc0a73502b47a855c76d47.png"
            alt="USP Star Trophy"
            width={400}
            height={400}
            sizes="(max-width: 1024px) 80vw, 380px"
            className="relative z-[1] h-auto w-full object-contain"
          />
        </motion.div>

        {/* Right Column - What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
          className="flex flex-col items-start text-left w-full order-1 lg:order-2"
        >
          <h3 className="font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white mb-6">
            WHAT WE OFFER
          </h3>
          
          <div className="flex flex-col gap-5 w-full mb-10">
            <div className="flex gap-4 items-start">
              <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
              <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                Support in designing a clear and differentiated Unique Selling Point (USP).
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
              <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                Client segmentation and focus on targeting the most suitable businesses and high-value opportunities.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
              <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                Creation of value propositions aligned with customer needs and real market demand.
              </p>
            </div>
          </div>

          <button
            onClick={openBooking}
            className="group inline-flex h-11 items-center justify-center rounded-full bg-red-bright px-8 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(227,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a1a] hover:shadow-[0_10px_24px_rgba(227,0,0,0.38)] cursor-pointer"
          >
            BOOK FREE CONSULTATION
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </div>

      {/* Section 4: Build An Effective & Scalable Sales Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-12 text-center mt-24 sm:mt-32"
      >
        <h2 className="mb-4 font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[32px]">
          BUILD AN EFFECTIVE &amp; SCALABLE SALES PROCESS
        </h2>
      </motion.div>

      {/* Intro bullets for Section 4 (Full Width) */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
        className="flex flex-col gap-6 w-full mb-16 text-left"
      >
        <div className="flex gap-4 items-start">
          <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
          <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
            A clear and scalable sales process is the foundation of predictable growth, both locally and globally. It enables companies to build a consistent pipeline of qualified leads, convert them into long-term clients, and scale without losing efficiency or quality.
          </p>
        </div>
        <div className="flex gap-4 items-start">
          <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
          <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
            With a repeatable sales framework, businesses can enter new markets with confidence, adapt to different cultures, and drive sustainable revenue growth. <span className="text-blue-bright font-semibold">EVIT supports companies in designing and implementing sales processes</span> that deliver long-term success and sustainable growth across regions.
          </p>
        </div>
      </motion.div>

      {/* What We Offer sub-section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-12 text-center"
      >
        <h3 className="font-sans text-2xl font-extrabold uppercase leading-tight tracking-wide text-white mb-10">
          WHAT WE OFFER
        </h3>

        <div className="flex flex-col gap-6 max-w-[900px] mx-auto text-center font-sans mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <p className="text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
              <span className="text-blue-bright font-bold">• </span>
              <span className="text-blue-bright font-bold">Custom Sales Process Design:</span> Tailored sales strategies that deliver predictable, sustainable growth locally and globally.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
              <span className="text-blue-bright font-bold">• </span>
              <span className="text-blue-bright font-bold">Lead Conversion Optimization:</span> Clear, optimized sales processes that guide your sales team at every stage and improve conversion rates.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
              <span className="text-blue-bright font-bold">• </span>
              <span className="text-blue-bright font-bold">Scalable Sales Frameworks:</span> Repeatable systems that support smooth expansion into new markets with consistent results.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
              <span className="text-blue-bright font-bold">• </span>
              <span className="text-blue-bright font-bold">Data-Driven Sales Insights:</span> Actionable analytics to refine sales processes and increase long-term profitability.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <p className="text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
              <span className="text-blue-bright font-bold">• </span>
              <span className="text-blue-bright font-bold">Sales Automation &amp; CRM Integration:</span> Automated workflows that improve efficiency, accuracy, and sales execution.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <>
      <Header />

      <main className="bg-[#03032D] min-h-screen text-white">
        {/* Dynamic Service Hero Section */}
        <section
          className="relative h-screen w-full flex items-center justify-center pb-[40px] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(3, 3, 45, 0.5) 0%, rgba(3, 3, 45, 0.9) 100%), url('${service.heroBg || '/assets/services-bg.jpg'}')`,
          }}
        >
          {/* Bottom overlay blend to blend smoothly with content */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#03032D] to-transparent pointer-events-none z-[1]" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-[950px] w-full mx-auto px-6 pt-[80px]">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-3xl sm:text-[40px] md:text-[52px] font-extrabold leading-[1.25] text-white tracking-tight uppercase"
            >
              {service.heroTitle || service.title}
            </motion.h1>
            <p className="mt-4 font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-[680px]">
              {service.heroSubtitle || service.subtitle}
            </p>
          </div>
        </section>

        {/* Detailed Service Section Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-24 sm:pt-32 flex flex-col gap-16 sm:gap-20">
          
          {/* Card Block */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-light mx-auto flex w-full flex-col gap-5 p-5 shadow-xl md:flex-row md:items-center md:gap-6 lg:p-7"
          >
            {/* Image Frame Column */}
            <div className="relative h-[230px] sm:h-[280px] md:h-[250px] md:w-[400px] lg:h-[280px] lg:w-[450px] shrink-0 overflow-hidden rounded-[10px] border border-blue-bright/45 shadow-lg">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                priority
              />
            </div>

            {/* Content Column */}
            <div className="relative z-[1] flex min-h-[230px] min-w-0 flex-1 flex-col justify-center py-1 text-left">
              <div className="flex flex-col items-start w-full">
                <div className="relative mb-4 h-11 w-11">
                  <Image
                    src={service.icon}
                    alt={service.iconAlt}
                    fill
                    sizes="44px"
                    className="object-contain"
                  />
                </div>

                <h3 className="mb-3 font-sans text-xl font-extrabold uppercase leading-tight tracking-tight text-white lg:text-2xl">
                  {service.title}
                </h3>

                <p className="mb-4 font-sans text-xs font-semibold leading-relaxed text-blue-bright lg:text-sm">
                  {service.subtitle}
                </p>

                <p className="max-w-[640px] font-sans text-xs font-semibold leading-relaxed text-white/90 lg:text-[13px]">
                  {service.desc}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Detailed Content Bullets */}
          <div className="w-full px-4">
            {service.id === 'god-sales-system' ? (
              <GodSalesSystemOverview />
            ) : service.id === 'global-expansion' ? (
              <GlobalExpansionOverview />
            ) : service.id === 'marketing-services' ? (
              <MarketingServicesOverview />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <h2 className="font-sans text-xl sm:text-[24px] font-extrabold text-white tracking-wide uppercase text-center mb-3">
                  {service.detailHeading}
                </h2>
                <p className="font-sans text-xs sm:text-sm text-blue-bright font-bold tracking-wider uppercase text-center mb-10">
                  {service.detailSubtitle}
                </p>

                <div className="flex flex-col gap-6 text-left w-full mb-20">
                  {service.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="text-text-secondary text-base font-bold shrink-0 mt-0.5">•</span>
                      <p className="font-sans text-xs sm:text-[14px] font-medium leading-relaxed text-text-secondary">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </div>

        {(service.id === 'god-sales-system' || service.id === 'marketing-services') && (
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
        )}
        {(service.id === 'god-sales-system' || service.id === 'marketing-services') && (
          <ScrollReveal>
            <FAQ />
          </ScrollReveal>
        )}

        {(service.id === 'global-expansion' || service.id === 'god-sales-system') && <CaseStudies />}

        {/* Contact Us Section */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
      <FloatingCalendar />
    </>
  );
}
