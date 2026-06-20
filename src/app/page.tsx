"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background-primary text-text-primary font-sans antialiased bg-grid-pattern">
      
      {/* Background glow inspired by World.org */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] pointer-events-none z-0">
        <motion.div 
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="w-full h-full opacity-25 blur-[120px] rounded-full bg-[radial-gradient(circle_at_center,_#D0021B_0%,_#4F46E5_50%,_transparent_70%)]"
        />
      </div>

      {/* Navigation Header */}
      <header className="relative w-full z-50 border-b border-border-subtle backdrop-blur-md bg-background-primary/75">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold tracking-tight text-text-primary">Oulta</span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#D0021B] to-[#4F46E5] group-hover:scale-125 transition-transform duration-300" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-wider text-text-secondary">
            <Link href="/human-plan" className="hover:text-text-primary transition-colors duration-200">The Human Plan</Link>
            <a href="#impactism" className="hover:text-text-primary transition-colors duration-200">Impactism</a>
            <a href="#manifesto" className="hover:text-text-primary transition-colors duration-200">Manifesto</a>
            <a href="#about" className="hover:text-text-primary transition-colors duration-200">About</a>
            <button className="px-5 py-2 rounded-full text-xs font-medium bg-text-primary text-background-primary hover:bg-accent-red hover:scale-105 transition-all duration-300 cursor-pointer">
              Enter Oulta
            </button>
          </nav>

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
            className="absolute top-20 left-0 w-full bg-background-primary border-b border-border-subtle shadow-lg z-40 py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            <Link href="/human-plan" onClick={() => setMobileMenuOpen(false)} className="text-xs font-semibold tracking-wide uppercase text-text-secondary py-2">The Human Plan</Link>
            <a href="#impactism" onClick={() => setMobileMenuOpen(false)} className="text-xs font-semibold tracking-wide uppercase text-text-secondary py-2">Impactism</a>
            <a href="#manifesto" onClick={() => setMobileMenuOpen(false)} className="text-xs font-semibold tracking-wide uppercase text-text-secondary py-2">Manifesto</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-xs font-semibold tracking-wide uppercase text-text-secondary py-2">About</a>
            <button className="w-full text-center py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D0021B] to-[#4F46E5] text-white">
              Enter Oulta
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1: HERO */}
      <section className="relative pt-12 md:pt-24 pb-20 md:pb-28 z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Headline and Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex flex-col space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.05]">
                The future belongs to people who act.
              </h1>
              <p className="text-lg md:text-xl text-text-secondary font-normal max-w-xl leading-relaxed">
                Oulta is building the infrastructure for human impact in the age of artificial intelligence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-wider bg-gradient-to-r from-[#D0021B] to-[#4F46E5] text-white hover:opacity-95 shadow-md shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer">
                Enter Oulta
              </button>
              <Link 
                href="/human-plan" 
                className="px-8 py-3.5 rounded-full text-xs font-medium uppercase tracking-wider border border-border-subtle hover:border-text-primary text-text-primary bg-transparent transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Read The Human Plan
              </Link>
            </div>
          </div>

          {/* Monochrome Image & Gradient Aura Ring */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full aspect-[4/5] max-w-[380px] rounded-[24px] overflow-hidden shadow-2xl border border-border-subtle bg-background-secondary z-10">
              <Image
                src="/assets/hero-humanity.png"
                alt="Humanity in unison, representing collective action and hope"
                fill
                priority
                className="object-cover grayscale brightness-95 contrast-105"
                sizes="(max-w-7xl) 100vw, 380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle red-indigo circular accent inspired by World.org */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 pointer-events-none z-0">
              <div className="w-full h-full rounded-full border-[1.5px] border-dashed border-[#D0021B]/40 animate-[spin_85s_linear_infinite]" />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 pointer-events-none z-0">
              <div className="w-full h-full rounded-full border border-[#4F46E5]/30 animate-[spin_45s_linear_infinite]" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CHALLENGE */}
      <section className="relative py-20 md:py-28 border-t border-border-subtle z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col space-y-3">
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-text-label">
            THE CHALLENGE
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary tracking-tight leading-tight">
            We know more than ever.<br />
            Yet act together less than ever.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-4xl">
            <div className="flex flex-col space-y-1">
              <p className="text-[15px] font-normal text-text-primary leading-relaxed">
                People see problems.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[15px] font-normal text-text-primary leading-relaxed">
                Communities struggle to organize.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <p className="text-[15px] font-normal text-text-primary leading-relaxed">
                Technology moves faster than institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE QUESTION */}
      <section id="about" className="relative py-24 md:py-36 bg-background-secondary border-y border-border-subtle z-10">
        <div className="max-w-3xl mx-auto px-6 flex flex-col space-y-4">
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-accent-red">
            THE QUESTION
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary tracking-tight leading-tight">
            What remains valuable<br />
            when intelligence becomes abundant?
          </h2>
          
          {/* Large whitespace representation and short paragraph */}
          <div className="pt-8 pb-12">
            <p className="text-lg text-text-secondary leading-relaxed font-normal">
              When artificial intelligence automates cognitive labor and administrative execution, the primary value bottleneck shifts from creation to coordination. The ultimate test of human relevance is our collective ability to align priorities, make choices, and commit to local, real-world outcomes.
            </p>
          </div>

          <div>
            <Link 
              href="/human-plan"
              className="group inline-flex items-center text-sm font-semibold text-text-primary hover:text-accent-red transition-colors duration-200"
            >
              <span>The Human Plan</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: A NEW RESPONSE */}
      <section id="impactism" className="relative py-20 md:py-28 bg-background-primary z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl flex flex-col space-y-4">
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-text-label">
            A NEW RESPONSE
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary tracking-tight">
            Impactism
          </h2>
          
          <div className="pt-2 pb-6">
            <p className="text-lg text-text-secondary leading-relaxed font-normal">
              A framework for human contribution, collective action, and citizen sovereignty in the age of AI.
            </p>
          </div>

          <div>
            <Link 
              href="/human-plan#impactism-concept"
              className="group inline-flex items-center text-sm font-semibold text-text-primary hover:text-accent-red transition-colors duration-200"
            >
              <span>Explore Impactism</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE PRINCIPLES */}
      <section className="relative py-20 md:py-28 border-t border-border-subtle z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col space-y-8">
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-text-label">
            THE PRINCIPLES
          </span>

          <div className="flex flex-col divide-y divide-border-subtle">
            {[
              "Citizen Sovereignty",
              "Verified Impact",
              "Community Over Algorithm",
              "Universal Basic Impact",
              "Technology As Tool"
            ].map((principle, index) => (
              <div key={index} className="py-6 first:pt-0 last:pb-0">
                <span className="text-2xl md:text-3.5xl font-semibold text-text-primary block tracking-tight">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: THE VISION */}
      <section className="relative py-24 md:py-36 bg-background-secondary border-y border-border-subtle z-10">
        <div className="max-w-3xl mx-auto px-6 flex flex-col space-y-4">
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-text-label">
            THE VISION
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary tracking-tight leading-tight">
            A future where technology serves people.
          </h2>
          
          <div className="pt-6">
            <p className="text-lg text-text-secondary leading-relaxed font-normal">
              Progress should not be measured solely by computational efficiency or model capability. True progress is defined by the resilience of local communities, the sovereignty of individuals over algorithmic curation, and our shared capacity to repair and sustain the physical world.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING */}
      <section id="manifesto" className="relative py-28 md:py-36 bg-background-primary overflow-hidden text-center z-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-semibold text-text-primary tracking-tight leading-[1.1]">
            Together We Stand.<br />
            We Will Not Fall.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link 
              href="/human-plan"
              className="px-10 py-4 rounded-full text-xs font-medium uppercase tracking-wider bg-text-primary text-background-primary hover:bg-accent-red shadow-md transition-all duration-300 animate-none cursor-pointer"
            >
              Read Manifesto
            </Link>
            <button className="px-10 py-4 rounded-full text-xs font-medium uppercase tracking-wider border border-border-subtle hover:border-text-primary text-text-secondary hover:text-text-primary bg-transparent transition-all duration-300 cursor-pointer">
              Enter Oulta
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border-subtle bg-background-primary py-16 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-2.5">
              <span className="font-semibold text-lg tracking-tight text-text-primary">Oulta</span>
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D0021B] to-[#4F46E5]" />
            </div>
            
            <div className="text-xs font-medium tracking-widest uppercase text-text-muted font-mono">
              People. Impact. Change.
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium uppercase tracking-wider text-text-secondary">
              <Link href="/human-plan" className="hover:text-text-primary transition-colors">The Human Plan</Link>
              <a href="#impactism" className="hover:text-text-primary transition-colors">Impactism</a>
              <a href="#manifesto" className="hover:text-text-primary transition-colors">Manifesto</a>
              <a href="#about" className="hover:text-text-primary transition-colors">About</a>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between text-[11px] text-text-muted font-mono">
            <span>&copy; {new Date().getFullYear()} Oulta. All rights reserved.</span>
            <span className="mt-2 md:mt-0">Infrastructure for the future.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
