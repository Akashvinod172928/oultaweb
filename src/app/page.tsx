"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background-primary text-text-primary font-sans antialiased bg-grid-pattern selection:bg-slate-900 selection:text-white">
      
      {/* Navigation Header */}
      <header className="relative w-full z-50 backdrop-blur-md bg-background-primary/75">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* Left: Logo */}
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
            className="absolute top-20 left-0 w-full bg-background-primary border-b border-border-subtle shadow-lg z-40 py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            <Link 
              href="/human-plan" 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-xs font-semibold tracking-wide uppercase text-text-secondary py-2"
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

      {/* HERO SECTION */}
      <section className="relative pt-20 md:pt-36 pb-20 md:pb-28 z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-4xl flex flex-col space-y-6 md:space-y-8">
          <span className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-accent-red font-semibold block animate-none">
            THE AGE OF IMPACT
          </span>
          <h1 className="text-5xl md:text-[80px] leading-[1.05] font-bold tracking-tight text-text-primary max-w-3xl">
            The future belongs to those who stand together.
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-normal leading-relaxed max-w-xl">
            It's how <span className="gradient-text font-bold">Homo sapiens</span> survived.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="/human-plan" 
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-border-subtle hover:border-text-primary text-text-primary bg-transparent transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              Read <span className="gradient-text font-bold">The Human Plan</span>
            </Link>
            <a
              href="https://www.oulta.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-text-primary text-background-primary hover:bg-accent-red hover:scale-105 transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer"
            >
              Enter Oulta
            </a>
          </div>
        </div>
      </section>

      {/* CORE BODY OF homepage SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 pb-24 flex flex-col">

        {/* SECTION 1: WHAT IS OULTA */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">01 / Concept</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">What Is Oulta?</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Oulta is a social platform where people organize around real-world problems and work together to create measurable impact. Instead of passive scrolling, Oulta helps people participate in change.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-border-subtle/50 my-4 max-w-xl">
              {["Citizen", "Community", "Action", "Impact"].map((item, idx) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="font-mono text-[10px] text-text-muted">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary mt-0.5">{item}</span>
                  </div>
                  {idx < 3 && (
                    <span className="text-text-muted text-sm sm:rotate-0 rotate-90 my-1 sm:my-0 select-none">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: BUILT FOR CITIZENS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">02 / Citizens</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Built For Citizens</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Helping people turn concern into action. Citizens can identify problems, take stands, build supportive communities, and track physical impact in the real world.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-border-subtle/50 my-4 max-w-xl">
              {["Problem", "Stand", "Community", "Impact"].map((item, idx) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="font-mono text-[10px] text-text-muted">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary mt-0.5">{item}</span>
                  </div>
                  {idx < 3 && (
                    <span className="text-text-muted text-sm sm:rotate-0 rotate-90 my-1 sm:my-0 select-none">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: BUILT FOR NGOS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">03 / NGOs</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Built For NGOs</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Helping organizations reach more people. NGOs can launch campaigns, mobilize supporters, coordinate volunteers, access CSR funding opportunities, and demonstrate clear impact to stakeholders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-border-subtle/50 my-4 max-w-xl">
              {["NGO", "Campaign", "Community", "Impact"].map((item, idx) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="font-mono text-[10px] text-text-muted">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary mt-0.5">{item}</span>
                  </div>
                  {idx < 3 && (
                    <span className="text-text-muted text-sm sm:rotate-0 rotate-90 my-1 sm:my-0 select-none">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BUILT FOR COMPANIES */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">04 / Companies</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Built For Companies</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Helping companies create visible social impact. Businesses can support local communities, fund campaigns directly, partner with NGOs, track outcomes transparently, and build trusted relationships with society.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-border-subtle/50 my-4 max-w-lg">
              {["Company", "Community", "Impact"].map((item, idx) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="font-mono text-[10px] text-text-muted">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary mt-0.5">{item}</span>
                  </div>
                  {idx < 2 && (
                    <span className="text-text-muted text-sm sm:rotate-0 rotate-90 my-1 sm:my-0 select-none">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: IMPACT STANDS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">05 / Mechanism</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Impact Stands</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Every movement begins with a stand. An Impact Stand transforms concern into collective action. Each stand includes: a clear problem, a measurable goal, a target authority, a deadline, and a public victory condition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-border-subtle/50 my-4 max-w-2xl">
              {["Problem", "Stand", "Community", "Action", "Victory"].map((item, idx) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="font-mono text-[10px] text-text-muted">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary mt-0.5">{item}</span>
                  </div>
                  {idx < 4 && (
                    <span className="text-text-muted text-sm sm:rotate-0 rotate-90 my-1 sm:my-0 select-none">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: COMMUNITIES */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">06 / Scope</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Communities</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Find people who care about the same problems. Communities help citizens organize around causes, interests, and locations.
            </p>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6 pt-4 text-lg font-semibold text-text-primary">
              {["India", "Kerala", "Environment", "Education", "Transparency"].map((name) => (
                <div key={name} className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-accent-red" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: NGO CAMPAIGNS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">07 / Campaigns</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">NGO Campaigns</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Helping causes build momentum. Campaign Stands allow NGOs to raise awareness, recruit volunteers, build supporter networks, receive operational funding, and showcase final outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-border-subtle/50 my-4 max-w-xl">
              {["Cause", "Campaign", "Community", "Impact"].map((item, idx) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="font-mono text-[10px] text-text-muted">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary mt-0.5">{item}</span>
                  </div>
                  {idx < 3 && (
                    <span className="text-text-muted text-sm sm:rotate-0 rotate-90 my-1 sm:my-0 select-none">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: UNIVERSAL BASIC IMPACT */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">08 / Contribution</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Universal Basic Impact</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              A new model for social contribution. Companies support verified initiatives selected and backed directly by communities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-border-subtle/50 my-4 max-w-lg">
              {["Companies", "Communities", "Impact"].map((item, idx) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="font-mono text-[10px] text-text-muted">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary mt-0.5">{item}</span>
                  </div>
                  {idx < 2 && (
                    <span className="text-text-muted text-sm sm:rotate-0 rotate-90 my-1 sm:my-0 select-none">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: OULTA SOCIAL RESPONSIBILITY */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">09 / Responsibility</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Oulta Social Responsibility</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Social responsibility reimagined. Oulta Social Responsibility helps companies transform social contribution into visible and measurable impact.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl pt-2">
              {[
                { title: "Fund Campaigns", desc: "Back campaigns started by vetted NGOs to unlock resources." },
                { title: "Support Communities", desc: "Provide direct support to local stands voted by citizens." },
                { title: "Partner with NGOs", desc: "Collaborate directly on operational verification and execution." },
                { title: "Track Verified Outcomes", desc: "View transaction histories linked to physical milestones." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <h4 className="text-sm font-bold text-text-primary">{item.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: DHARMA POINTS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">10 / Reputation</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">Dharma Points</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              Rewarding contribution. Dharma Points recognize meaningful participation across Oulta. Users earn points by taking stands, supporting campaigns, contributing to communities, and creating real impact.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-y border-border-subtle/50 my-4 max-w-xl">
              {["Participate", "Earn Dharma Points", "Build Reputation"].map((item, idx) => (
                <React.Fragment key={item}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="font-mono text-[10px] text-text-muted">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-text-primary mt-0.5">{item}</span>
                  </div>
                  {idx < 2 && (
                    <span className="text-text-muted text-sm sm:rotate-0 rotate-90 my-1 sm:my-0 select-none">➔</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 11: THE OULTA ECOSYSTEM */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 border-t border-border-subtle">
          <div className="md:col-span-4">
            <span className="font-mono text-xs tracking-wider uppercase text-text-muted">11 / Ecosystem</span>
          </div>
          <div className="md:col-span-8 flex flex-col space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary">The Oulta Ecosystem</h2>
            <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
              A platform built for collective impact. This visualization displays the convergence of Citizens, Communities, NGOs, and Companies into verified public impact.
            </p>

            {/* Convergence Diagram */}
            <div className="w-full max-w-lg mt-4 bg-background-secondary border border-border-subtle rounded-xl p-6">
              <svg viewBox="0 0 400 200" className="w-full h-auto text-text-primary" fill="currentColor">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#9CA3AF" />
                  </marker>
                </defs>
                
                {/* Source nodes */}
                <g transform="translate(10, 0)">
                  <rect x="0" y="10" width="100" height="30" rx="6" fill="#F7F7F5" stroke="#E5E5E5" strokeWidth="1"/>
                  <text x="50" y="29" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#111111">Citizens</text>
                  
                  <rect x="0" y="55" width="100" height="30" rx="6" fill="#F7F7F5" stroke="#E5E5E5" strokeWidth="1"/>
                  <text x="50" y="74" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#111111">Communities</text>
                  
                  <rect x="0" y="100" width="100" height="30" rx="6" fill="#F7F7F5" stroke="#E5E5E5" strokeWidth="1"/>
                  <text x="50" y="119" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#111111">NGOs</text>
                  
                  <rect x="0" y="145" width="100" height="30" rx="6" fill="#F7F7F5" stroke="#E5E5E5" strokeWidth="1"/>
                  <text x="50" y="164" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#111111">Companies</text>
                </g>
                
                {/* Connecting lines */}
                <path d="M 120 25 C 200 25, 200 95, 255 95" fill="none" stroke="#E5E5E5" strokeWidth="1.5" markerEnd="url(#arrow)"/>
                <path d="M 120 70 C 180 70, 200 98, 255 100" fill="none" stroke="#E5E5E5" strokeWidth="1.5" markerEnd="url(#arrow)"/>
                <path d="M 120 115 C 180 115, 200 102, 255 102" fill="none" stroke="#E5E5E5" strokeWidth="1.5" markerEnd="url(#arrow)"/>
                <path d="M 120 160 C 200 160, 200 105, 255 105" fill="none" stroke="#E5E5E5" strokeWidth="1.5" markerEnd="url(#arrow)"/>
                
                {/* Convergence target node */}
                <g transform="translate(270, 85)">
                  <rect x="0" y="0" width="120" height="36" rx="8" fill="#111111" stroke="#111111" strokeWidth="1"/>
                  <text x="60" y="22" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#F7F7F5">Collective Impact</text>
                </g>
              </svg>
            </div>
          </div>
        </section>

      </div>

      {/* FINAL CTA SECTION */}
      <section className="relative py-24 md:py-32 bg-background-secondary border-t border-border-subtle text-center z-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-semibold text-text-primary tracking-tight">
            Together We Stand.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-normal max-w-xl">
            Join the people transforming concern into action.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link 
              href="/human-plan"
              className="px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-wider border border-border-subtle hover:border-text-primary text-text-primary bg-transparent transition-all duration-300 cursor-pointer"
            >
              Read <span className="gradient-text font-bold">The Human Plan</span>
            </Link>
            <a 
              href="https://www.oulta.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-text-primary text-background-primary hover:bg-accent-red shadow-md transition-all duration-300 cursor-pointer"
            >
              Enter Oulta
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border-subtle bg-background-primary py-12 z-10">
        <div className="max-w-6xl mx-auto px-6">
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
              <Link href="/human-plan" className="hover:text-text-primary transition-colors">The Human Plan</Link>
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
