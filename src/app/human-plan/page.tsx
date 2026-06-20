"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
}

const tocItems: TOCItem[] = [
  { id: "our-history", label: "1. Our History" },
  { id: "existing-spectrum", label: "2. The Existing Human Spectrum" },
  { id: "ai-agi", label: "3. AI and AGI" },
  { id: "techno-fascism", label: "4. The Rise of Techno-Fascism" },
  { id: "impactism", label: "5. Impactism" },
  { id: "ecosystem", label: "6. The Impactism Ecosystem" },
  { id: "rebuilding-india", label: "7. Rebuilding India" },
  { id: "if-we-fail", label: "8. What Happens If We Fail?" },
  { id: "message-indians", label: "9. A Message to All Indians" },
  { id: "singularity", label: "10. The Impactism Singularity" },
];


export default function HumanPlanPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("our-history");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track active section via Intersection Observer & scroll position
  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isAtBottom) {
        setActiveSection("singularity");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observers = tocItems.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
            if (entry.isIntersecting && !isAtBottom) {
              setActiveSection(item.id);
            }
          });
        },
        { 
          rootMargin: "-15% 0px -55% 0px",
          threshold: 0
        }
      );
      
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background-primary text-text-primary font-sans antialiased bg-grid-pattern">
      
      {/* Reading Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D0021B] to-[#4F46E5] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <header className="sticky top-0 w-full z-50 backdrop-blur-md bg-background-primary/75">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/assets/Untitled design (6).svg"
              alt="Oulta Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-2xl font-bold tracking-tight text-text-primary">Oulta</span>
          </Link>

          {/* Center/Middle: The Human Plan Link (for desktop) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center">
            <Link 
              href="/human-plan" 
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-text-primary/10 hover:border-text-primary/30 bg-white/40 backdrop-blur-sm transition-all duration-200 text-center flex items-center justify-center hover:scale-105"
            >
              <span className="gradient-text">The Human Plan</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-background-primary border-b border-border-subtle shadow-lg z-40 py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            <Link 
              href="/human-plan" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xs font-semibold tracking-wide uppercase text-text-primary py-2 font-bold"
            >
              The Human Plan
            </Link>
            <a
              href="https://www.oulta.in"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D0021B] to-[#4F46E5] text-white block"
            >
              Enter Oulta
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Topic Section */}
      <section className="bg-background-secondary border-b border-border-subtle py-24 md:py-36 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center space-y-3">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight gradient-text">
            The Human Plan
          </h1>
          <h3 className="text-xl md:text-2xl font-normal text-text-primary italic pt-1">
            Not simple. But necessary.
          </h3>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        
        {/* Table of Contents Sidebar (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-6 scrollbar-hidden">
          <span className="text-[10px] font-mono tracking-widest text-text-label uppercase block mb-4">Table of contents</span>
          <nav className="relative flex flex-col space-y-2 border-l border-border-subtle pl-4">
            {tocItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative text-left text-xs tracking-wide transition-all duration-300 py-1 hover:text-text-primary font-medium cursor-pointer ${
                    isActive 
                      ? "text-accent-red font-semibold translate-x-1" 
                      : "text-text-muted"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTOC"
                      className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-[3px] h-4 bg-gradient-to-b from-[#D0021B] to-[#4F46E5] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Narrative Columns (Centralized optimized reading width) */}
        <main className="col-span-1 lg:col-span-9 flex flex-col space-y-20 lg:pl-6 max-w-3xl mx-auto lg:mx-0">
          
          {/* SECTION 1: OUR HISTORY */}
          <motion.article 
            id="our-history" 
            className="scroll-m-24 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 01</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Our History
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              Humanity's greatest technology has always been cooperation.
            </h3>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                We survived not by being the strongest, but by working together. Families became tribes, communities, and civilizations.
              </p>
              
              <div className="border border-border-subtle bg-background-secondary p-6 rounded-none my-6 flex flex-col space-y-2 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-accent-red font-bold">Families</span> 
                  <span className="text-text-muted">──→</span> 
                  <span className="text-[#4F46E5] font-bold">Tribes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#4F46E5] font-bold">Tribes</span> 
                  <span className="text-text-muted">──→</span> 
                  <span className="text-accent-indigo font-bold">Communities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-accent-indigo font-bold">Communities</span> 
                  <span className="text-text-muted">──→</span> 
                  <span className="text-text-primary font-bold">Civilizations</span>
                </div>
              </div>

              <p>
                Cooperation is how Homo sapiens survived.
              </p>
            </div>
          </motion.article>

          {/* SECTION 2: THE EXISTING HUMAN SPECTRUM */}
          <motion.article 
            id="existing-spectrum" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 02</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              The Existing Human Spectrum
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              For over two centuries, politics lived on one spectrum.
            </h3>
            
            <div className="relative w-full overflow-hidden border border-border-subtle bg-[#F8F9FA] p-3 my-6 rounded-none">
              <Image
                src="/assets/current-human-spectrum.png"
                alt="The Current Human Spectrum"
                width={1024}
                height={436}
                className="w-full h-auto object-contain"
                sizes="(max-w-7xl) 100vw, 768px"
              />
            </div>

            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                Communism, Capitalism, and everything in between rely on a single assumption:
              </p>
              <blockquote className="border-l-2 border-text-primary bg-background-secondary pl-6 my-4 py-3 max-w-2xl">
                <p className="text-base italic text-text-primary font-semibold leading-relaxed">
                  &ldquo;Human labor creates value.&rdquo;
                </p>
              </blockquote>
              <p>
                Today, that assumption is breaking.
              </p>
            </div>
          </motion.article>

          {/* SECTION 3: AI AND AGI */}
          <motion.article 
            id="ai-agi" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 03</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              AI and AGI
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              A new form of intelligence has arrived.
            </h3>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                AI automates labor. AGI will automate intelligence itself.
              </p>
              <p>
                The question is no longer who owns the factory, but who owns the intelligence infrastructure of the future.
              </p>
              <p>
                As intelligence becomes abundant, power shifts to those who control the compute and the models.
              </p>
            </div>
          </motion.article>

          {/* SECTION 4: THE RISE OF TECHNO-FASCISM */}
          <motion.article 
            id="techno-fascism" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 04</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              The Rise of Techno-Fascism
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              Without collective control, power centralizes.
            </h3>

            <div className="relative w-full overflow-hidden border border-border-subtle bg-[#F8F9FA] p-3 my-6 rounded-none">
              <Image
                src="/assets/upcoming-political-spectrum.png"
                alt="The Upcoming Political Spectrum"
                width={1024}
                height={544}
                className="w-full h-auto object-contain"
                sizes="(max-w-7xl) 100vw, 768px"
              />
            </div>

            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                AI is not the threat; concentrated infrastructure control is. When a small group controls intelligence systems, they gain unprecedented power over public life. This is Techno-Fascism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                { 
                  index: "01",
                  title: "Algorithmic Control", 
                  desc: "Recommendation engines shape public opinion and optimize for attention retention."
                },
                { 
                  index: "02",
                  title: "Economic Displacement", 
                  desc: "Systemic automation of knowledge work removes the necessity for human labor."
                },
                { 
                  index: "03",
                  title: "Data Exploitation", 
                  desc: "Centralized platforms record behavioral exhaust to build predictive models."
                },
                { 
                  index: "04",
                  title: "Digital Gatekeeping", 
                  desc: "A small number of infrastructure providers manage identity and global transactions."
                }
              ].map((block, idx) => (
                <div key={idx} className="bg-background-primary border border-border-subtle hover:border-text-primary rounded-none p-6 flex flex-col space-y-3 transition-colors duration-300">
                  <span className="font-mono text-xs font-semibold text-text-label uppercase tracking-widest">{block.index}</span>
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-sm font-semibold text-text-primary">{block.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-normal">{block.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal pt-4">
              <p>
                The techno-fascist needs servers, not armies. They need algorithms, not prisons.
              </p>
            </div>
          </motion.article>

          {/* SECTION 5: IMPACTISM */}
          <motion.article 
            id="impactism" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 05</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Impactism
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              A new path for humanity in the age of AI.
            </h3>

            <div className="relative w-full overflow-hidden border border-border-subtle bg-[#F8F9FA] p-3 my-6 rounded-none">
              <Image
                src="/assets/impactism-vision-spectrum.png"
                alt="The Impactism Vision Spectrum"
                width={1024}
                height={561}
                className="w-full h-auto object-contain"
                sizes="(max-w-7xl) 100vw, 768px"
              />
            </div>

            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                Impactism is a coordination framework built on citizen sovereignty and local trust. It bypasses old ideological lines:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[
                { title: "People over algorithms", desc: "Decisions made by humans, supported by tools." },
                { title: "Community over isolation", desc: "Local networks built on trust and shared work." },
                { title: "Impact over consumption", desc: "Rewarding active creation over passive distraction." }
              ].map((item, idx) => (
                <div key={idx} className="bg-background-secondary border border-border-subtle p-5 rounded-none flex flex-col space-y-2">
                  <span className="font-bold text-xs text-text-primary">{item.title}</span>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-text-secondary leading-relaxed pt-2 font-mono text-xs italic">
              Technology should serve humanity, not humanity technology.
            </p>
          </motion.article>

          {/* SECTION 6: THE IMPACTISM ECOSYSTEM */}
          <motion.article 
            id="ecosystem" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 06</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              The Impactism Ecosystem
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              Collective impact requires collective infrastructure.
            </h3>

            {/* Minimal Ecosystem Diagram */}
            <div className="border border-border-subtle bg-[#F8F9FA] p-8 my-6 rounded-none">
              <div className="max-w-md mx-auto relative flex flex-col items-center">
                {/* NGOs Box */}
                <div className="bg-background-primary border border-border-subtle px-6 py-3 rounded-none text-xs font-mono text-text-primary font-semibold text-center z-10 w-36">
                  NGOs
                </div>
                
                {/* Connecting Lines Container */}
                <div className="w-full h-12 relative">
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50%" y1="0%" x2="16.6%" y2="100%" stroke="var(--border-subtle, #e5e7eb)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="var(--border-subtle, #e5e7eb)" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="50%" y1="0%" x2="83.3%" y2="100%" stroke="var(--border-subtle, #e5e7eb)" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>
                
                {/* Bottom Row: Citizens | Oulta | Companies */}
                <div className="grid grid-cols-3 gap-4 w-full relative">
                  {/* Citizens */}
                  <div className="bg-background-primary border border-border-subtle px-4 py-3 rounded-none text-xs font-mono text-text-secondary text-center flex items-center justify-center min-h-[48px]">
                    Citizens
                  </div>
                  {/* Oulta (Center) */}
                  <div className="bg-white border-2 border-text-primary px-4 py-3 rounded-none text-xs font-mono text-text-primary font-bold text-center z-10 flex items-center justify-center min-h-[48px]">
                    <span className="gradient-text">Oulta</span>
                  </div>
                  {/* Companies */}
                  <div className="bg-background-primary border border-border-subtle px-4 py-3 rounded-none text-xs font-mono text-text-secondary text-center flex items-center justify-center min-h-[48px]">
                    Companies
                  </div>
                </div>
              </div>
            </div>

            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                At the center is Oulta. Citizens identify problems, NGOs provide expertise, and Companies provide resources. Together they coordinate to turn concern into action.
              </p>
            </div>
          </motion.article>

          {/* SECTION 7: REBUILDING INDIA */}
          <motion.article 
            id="rebuilding-india" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 07</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Rebuilding India
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              A developed India. Built on impact.
            </h3>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                India's greatest strength is its people. Impactism begins with a simple mission: rebuild civic participation and solve local problems directly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="border border-border-subtle p-5 rounded-none bg-[#F8F9FA]">
                  <span className="font-mono text-[10px] text-text-muted block uppercase mb-1">Step 01</span>
                  <span className="font-bold text-xs text-text-primary block mb-1">Rebuild Civic Participation</span>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-normal">Empowering citizens to drive public conversation.</p>
                </div>
                <div className="border border-border-subtle p-5 rounded-none bg-[#F8F9FA]">
                  <span className="font-mono text-[10px] text-text-muted block uppercase mb-1">Step 02</span>
                  <span className="font-bold text-xs text-text-primary block mb-1">Strengthen Communities</span>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-normal">Connecting local groups around shared objectives.</p>
                </div>
                <div className="border border-border-subtle p-5 rounded-none bg-[#F8F9FA]">
                  <span className="font-mono text-[10px] text-text-muted block uppercase mb-1">Step 03</span>
                  <span className="font-bold text-xs text-text-primary block mb-1">Solve Local Problems</span>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-normal">Tackling hyper-local infrastructure challenges.</p>
                </div>
                <div className="border border-border-subtle p-5 rounded-none bg-[#F8F9FA]">
                  <span className="font-mono text-[10px] text-text-muted block uppercase mb-1">Step 04</span>
                  <span className="font-bold text-xs text-text-primary block mb-1">Create Measurable Impact</span>
                  <p className="text-[11px] text-text-secondary leading-relaxed font-normal">Using transparent metrics to reward progress.</p>
                </div>
              </div>
              <p className="font-mono text-xs text-text-muted italic pt-2">
                One stand, one community, and one district at a time.
              </p>
            </div>
          </motion.article>

          {/* SECTION 8: WHAT HAPPENS IF WE FAIL? */}
          <motion.article 
            id="if-we-fail" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 08</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              What Happens If We Fail?
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              If we fail to act together, this is our future.
            </h3>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                A future where power centralizes completely, citizens become spectators, and algorithms rule.
              </p>
              <blockquote className="border-l-2 border-accent-red bg-[#FFF5F5] pl-6 my-4 py-3 max-w-2xl">
                <p className="text-base italic text-accent-red font-bold leading-relaxed">
                  &ldquo;Techno-Fascism is not inevitable. But neither is freedom.&rdquo;
                </p>
              </blockquote>
            </div>
          </motion.article>

          {/* SECTION 9: A MESSAGE TO ALL INDIANS & FINAL CTA */}
          <motion.article 
            id="message-indians" 
            className="scroll-m-24 flex flex-col space-y-8 border-t border-border-subtle pt-12 pb-12 text-center items-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 09</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              A Message to All Indians
            </h2>
            <h3 className="text-xl md:text-2xl font-normal text-text-primary italic max-w-xl">
              Stand together. For India. For humanity.
            </h3>
            
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal max-w-xl">
              <p>
                Techno-Fascism is a global threat to human sovereignty. But the solution can only come from India.
              </p>
              <p>
                Right now, 1.5 billion people are feeding the algorithms of global tech monopolies, exporting our data to build the very infrastructure used to control us.
              </p>
              <p>
                By redirecting the coordination of 1.5 billion citizens, we can build a sovereign, decentralized future. Let us build it here.
              </p>
            </div>
          </motion.article>

          {/* SECTION 10: THE IMPACTISM SINGULARITY */}
          <motion.article 
            id="singularity" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase font-bold">Section 10</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              The Impactism Singularity
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-text-primary italic">
              Humanity's next great transition.
            </h3>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                Agriculture, Industry, the Internet, and AI each transformed civilization. The next transformation is not technological; it is human.
              </p>
              <blockquote className="border-l-2 border-[#4F46E5] bg-background-secondary pl-6 my-4 py-3 max-w-2xl">
                <p className="text-base italic text-text-primary font-semibold leading-relaxed">
                  The convergence of innovation, welfare, and power around a single purpose: Human progress.
                </p>
              </blockquote>
              <p>
                This is not the singularity of machines. It is the singularity of humanity.
              </p>
            </div>
          </motion.article>

        </main>
      </div>

      {/* FOOTER */}
      <footer className="relative border-t border-border-subtle bg-background-primary py-12 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/Untitled design (6).svg"
                alt="Oulta Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-text-primary">Oulta</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium uppercase tracking-wider text-text-secondary">
              <Link href="/human-plan" className="hover:text-text-primary transition-colors font-bold text-text-primary">The Human Plan</Link>
              <a href="https://www.oulta.in" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">Enter Oulta</a>
              <a href="mailto:contact@oulta.in" className="hover:text-text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between text-[11px] text-text-muted font-mono">
            <span>Copyright &copy; {new Date().getFullYear()} Oulta.</span>
            <span className="mt-2 md:mt-0">Infrastructure for the future.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
