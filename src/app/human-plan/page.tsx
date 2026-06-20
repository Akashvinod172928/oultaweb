"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
}

const tocItems: TOCItem[] = [
  { id: "world-changing", label: "1. The Changing World" },
  { id: "old-politics", label: "2. The Old Political World" },
  { id: "ai-changes", label: "3. What AI Changes" },
  { id: "techno-fascism", label: "4. The Rise of Techno-Fascism" },
  { id: "human-plan-turn", label: "5. The Human Plan" },
  { id: "impactism-concept", label: "6. Impactism" },
  { id: "five-principles", label: "7. The Five Principles" },
  { id: "ubi-vs-ubimpact", label: "8. Universal Basic Impact" },
  { id: "impact-stand", label: "9. The Impact Stand" },
  { id: "singularity", label: "10. The Singularity" },
];

export default function HumanPlanPage() {
  const [activeSection, setActiveSection] = useState("world-changing");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track active section via Intersection Observer
  useEffect(() => {
    const observers = tocItems.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(item.id);
            }
          });
        },
        { 
          rootMargin: "-20% 0px -60% 0px", // Focus on upper-middle scroll area
          threshold: 0
        }
      );
      
      observer.observe(el);
      return { observer, el };
    });

    return () => {
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

      {/* Top Banner Header */}
      <header className="sticky top-0 w-full z-50 border-b border-border-subtle backdrop-blur-md bg-background-primary/75">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-text-primary transition-colors group">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to HQ</span>
          </Link>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg tracking-tight text-text-primary">Oulta</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D0021B] to-[#4F46E5]" />
          </div>
        </div>
      </header>

      {/* Header Topic Section */}
      <section className="bg-background-secondary border-b border-border-subtle py-24 md:py-36 text-center">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center space-y-3">
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight">
            The Human Plan
          </h1>
          <h3 className="text-xl md:text-2xl font-normal text-accent-red italic pt-1">
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
        <main className="col-span-1 lg:col-span-9 flex flex-col space-y-16 lg:pl-6 max-w-3xl mx-auto lg:mx-0">
          
          {/* SECTION 1: THE WORLD IS CHANGING */}
          <motion.article 
            id="world-changing" 
            className="scroll-m-24 flex flex-col space-y-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-red uppercase">Section 01</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              The World Is Changing
            </h2>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                We are living through a massive shift in human history. Artificial intelligence is changing how we work, create value, and distribute resources.
              </p>
              <p>
                As machines take over cognitive tasks, job automation is no longer a future threat—it is today's reality. Traditional systems, designed for a physical labor economy, can no longer sustain us.
              </p>
              <blockquote className="border-l-2 border-text-primary bg-background-secondary pl-6 my-6 py-4 max-w-2xl">
                <p className="text-lg md:text-xl italic text-text-primary font-normal leading-relaxed">
                  &ldquo;We face a structural transition. When intelligence becomes cheap and abundant, the systems linking human survival to labor collapse.&rdquo;
                </p>
              </blockquote>
              <p>
                This is not just a technology problem. It is a challenge of how humans organize and work together.
              </p>
            </div>
          </motion.article>

          {/* SECTION 2: THE OLD POLITICAL WORLD */}
          <motion.article 
            id="old-politics" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-indigo uppercase">Section 02</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              The Old Political World
            </h2>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                For over two hundred years, politics existed on a single line: the struggle between <strong>Communism</strong> and <strong>Capitalism</strong>.
              </p>
              <p>
                While opposite, both systems relied on the same assumption: humans had to work to produce value. Communism wanted the state to run this labor; Capitalism wanted private markets to coordinate it.
              </p>
              
              <div className="relative w-full overflow-hidden rounded-2xl border border-border-subtle bg-[#F8F9FA] p-3 my-6 shadow-sm hover:shadow-md hover:border-text-primary transition-all duration-300">
                <Image
                  src="/assets/current-human-spectrum.png"
                  alt="The Current Human Spectrum"
                  width={1024}
                  height={436}
                  className="w-full h-auto object-contain rounded-xl"
                  sizes="(max-w-7xl) 100vw, 768px"
                />
              </div>

              <p>
                As AI begins to manage both production and organization, these old models—which are tied entirely to human labor—no longer hold the answers we need.
              </p>
            </div>
          </motion.article>

          {/* SECTION 3: WHAT AI CHANGES */}
          <motion.article 
            id="ai-changes" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase">Section 03</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              What AI Changes
            </h2>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                AI changes who holds the cards. Democracy has historically relied on taxing human labor to fund public needs, but as machines take on more roles, that leverage disappears.
              </p>
              <p>
                Power is shifting toward the few who own the compute, the models, and the data. Unless we change course, the average person loses their seat at the table.
              </p>
            </div>
          </motion.article>

          {/* SECTION 4: THE RISE OF TECHNO-FASCISM */}
          <motion.article 
            id="techno-fascism" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-red uppercase">Section 04</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              The Rise Of Techno-Fascism
            </h2>
            <p className="text-text-secondary text-sm font-normal">
              Without a framework for citizen-directed impact, technological concentration naturally settles into centralized systems of control:
            </p>

            <div className="relative w-full overflow-hidden rounded-2xl border border-border-subtle bg-[#F8F9FA] p-3 my-6 shadow-sm hover:shadow-md hover:border-text-primary transition-all duration-300">
              <Image
                src="/assets/upcoming-political-spectrum.png"
                alt="The Upcoming Political Spectrum"
                width={1024}
                height={544}
                className="w-full h-auto object-contain rounded-xl"
                sizes="(max-w-7xl) 100vw, 768px"
              />
            </div>

            {/* Typography-first Cards (No detailed SVG illustrations) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                { 
                  index: "01",
                  title: "Algorithmic Control", 
                  desc: "Recommendation engines shape public opinion and optimize for attention retention, weakening local civil discourse."
                },
                { 
                  index: "02",
                  title: "Economic Displacement", 
                  desc: "Systemic automation of knowledge work removes the necessity for human labor, creating dependence on central systems."
                },
                { 
                  index: "03",
                  title: "Data Exploitation", 
                  desc: "Centralized platforms record behavioral exhaust to build predictive systems, converting user data into sovereign capital."
                },
                { 
                  index: "04",
                  title: "Digital Gatekeeping", 
                  desc: "A small number of infrastructure providers manage identity, transaction pathways, and access rules for the global web."
                }
              ].map((block, idx) => (
                <div key={idx} className="bg-background-primary border border-border-subtle hover:border-text-primary rounded-xl p-6 flex flex-col space-y-3 transition-colors duration-300">
                  <span className="font-mono text-xs font-semibold text-text-label uppercase tracking-widest">{block.index}</span>
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-sm font-semibold text-text-primary">{block.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-normal">{block.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          {/* SECTION 5: THE HUMAN PLAN (TURNING POINT) */}
          <motion.article 
            id="human-plan-turn" 
            className="scroll-m-24 flex flex-col space-y-6 border-t border-border-subtle pt-10 text-center items-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-red uppercase">Section 05</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight max-w-xl">
              The Human Plan
            </h2>
            <p className="text-sm text-text-secondary max-w-lg font-normal">
              A simple, three-step framework to put people back in control:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full my-6">
              {[
                { title: "1. Organize", desc: "Connect local communities around real needs." },
                { title: "2. Take a Stand", desc: "Launch projects with clear goals and deadlines." },
                { title: "3. Make an Impact", desc: "Use tech tools to reward actual progress." }
              ].map((step, idx) => (
                <div key={idx} className="bg-background-secondary border border-border-subtle hover:border-text-primary rounded-xl p-5 text-center flex flex-col space-y-2 transition-all duration-300">
                  <span className="font-bold text-sm text-text-primary">{step.title}</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-normal">{step.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-text-muted leading-relaxed max-w-xl font-normal italic">
              "We don't fight technology—we use it to build community power."
            </p>
          </motion.article>

          {/* SECTION 6: IMPACTISM CONCEPT */}
          <motion.article 
            id="impactism-concept" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-indigo uppercase">Section 06</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              Impactism: Humanity's New Framework
            </h2>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                Impactism is the antidote to centralized control. It’s a way to organize human effort so that we use technology to solve real-world problems directly, keeping power in the hands of the people.
              </p>

              <div className="relative w-full overflow-hidden rounded-2xl border border-border-subtle bg-[#F8F9FA] p-3 my-6 shadow-sm hover:shadow-md hover:border-text-primary transition-all duration-300">
                <Image
                  src="/assets/impactism-vision-spectrum.png"
                  alt="The Impactism Vision Spectrum"
                  width={1024}
                  height={561}
                  className="w-full h-auto object-contain rounded-xl"
                  sizes="(max-w-7xl) 100vw, 768px"
                />
              </div>

              {/* Comparison table */}
              <div className="border border-border-subtle rounded-2xl overflow-hidden my-6 bg-background-primary">
                <div className="grid grid-cols-2 border-b border-border-subtle bg-background-secondary text-[10px] font-mono font-bold tracking-wider uppercase p-3">
                  <div className="text-text-primary">Impactism</div>
                  <div className="text-text-label">Techno-Fascism</div>
                </div>
                {[
                  { imp: "Citizen Sovereignty", fas: "Algorithmic Control" },
                  { imp: "Community Action", fas: "Centralized Monopoly" },
                  { imp: "Human Decision Making", fas: "Automated Captivity" },
                  { imp: "Verified Real-World Value", fas: "Speculative Financial Extraction" }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-2 border-b border-background-alternate last:border-0 p-4 text-xs font-normal">
                    <div className="font-semibold text-accent-indigo">{row.imp}</div>
                    <div className="text-text-muted">{row.fas}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* SECTION 7: THE FIVE PRINCIPLES */}
          <motion.article 
            id="five-principles" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-red uppercase">Section 07</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              The Principles of Impactism
            </h2>
            <p className="text-text-secondary text-xs font-normal">
              We operate on these core values:
            </p>

            {/* Centerpiece cards grid */}
            <div className="grid grid-cols-1 gap-6 mt-4">
              {[
                { title: "Sovereignty", statement: "You own your data, your decisions, and your impact." },
                { title: "Real Action", statement: "Measured, real-world results trump digital engagement." },
                { title: "Community", statement: "Local networks thrive where big systems fail." },
                { title: "Contribution", statement: "Rewarding active creation over passive dependency." },
                { title: "Utility", statement: "Technology is a tool for humans to solve problems." }
              ].map((card, idx) => (
                <div key={idx} className="bg-background-primary border border-border-subtle hover:border-text-primary rounded-2xl p-6 md:p-8 flex items-start space-x-6 shadow-sm transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-background-secondary border border-border-subtle flex items-center justify-center shrink-0 font-mono text-sm font-bold text-text-secondary">
                    0{idx + 1}
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="text-lg font-bold text-text-primary">{card.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed font-normal">{card.statement}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          {/* SECTION 8: UNIVERSAL BASIC IMPACT */}
          <motion.article 
            id="ubi-vs-ubimpact" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-red uppercase">Section 08</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              Universal Basic Impact (UBImpact)
            </h2>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                Universal Basic Income is just a band-aid that keeps people passive. We need something more.
              </p>
              <p>
                Universal Basic Impact (UBImpact) creates a system where you are rewarded for the work you do for your community. It shifts us from being dependent consumers to active, valued contributors.
              </p>

              {/* UBI vs UBImpact comparison table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="border border-border-subtle p-6 rounded-2xl bg-background-primary text-text-secondary">
                  <span className="text-[10px] font-mono text-text-muted block uppercase mb-2">Universal Basic Income</span>
                  <ul className="space-y-2 text-xs text-text-muted font-normal list-disc pl-4">
                    <li>Encourages dependency</li>
                    <li>Disconnected from local needs</li>
                    <li>Passive participation</li>
                  </ul>
                </div>
                <div className="border border-accent-red/30 p-6 rounded-2xl bg-background-primary shadow-sm text-text-primary">
                  <span className="text-[10px] font-mono text-accent-red block uppercase mb-2">Universal Basic Impact</span>
                  <ul className="space-y-2 text-xs text-text-primary font-semibold list-disc pl-4">
                    <li>Rewards community contribution</li>
                    <li>Focused on local problem solving</li>
                    <li>Active ownership & results</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>

          {/* SECTION 9: THE IMPACT STAND */}
          <motion.article 
            id="impact-stand" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-accent-indigo uppercase">Section 09</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              The Impact Stand
            </h2>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                A "Stand" is the primary way we organize on Oulta. It isn't a social media post; it is a project with a clear goal, a deadline, and a measurable outcome. It is how we move from talk to action.
              </p>

              {/* Refined Flat Typographic Stand Timeline */}
              <div className="border border-border-subtle bg-background-primary rounded-xl divide-y divide-border-subtle my-6">
                {[
                  { step: "01 / Identify", desc: "Define a real local issue." },
                  { step: "02 / Target", desc: "Set a clear goal for success." },
                  { step: "03 / Deadline", desc: "Commit to a time-bound project." },
                  { step: "04 / Execute", desc: "Take action to deliver results." },
                  { step: "05 / Validate", desc: "Verify that the goal was met." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between text-xs gap-2 hover:bg-background-secondary transition-colors duration-200">
                    <span className="font-semibold text-text-primary font-mono">{item.step}</span>
                    <span className="text-text-secondary md:text-right font-normal">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* SECTION 10: THE SINGULARITY */}
          <motion.article 
            id="singularity" 
            className="scroll-m-24 flex flex-col space-y-4 border-t border-border-subtle pt-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <span className="text-[10px] font-mono tracking-widest text-[#4F46E5] uppercase">Section 10</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-text-primary">
              The Impactism Singularity
            </h2>
            <div className="text-text-secondary space-y-4 leading-relaxed text-[15px] font-normal">
              <p>
                When individuals and local communities use these tools to coordinate, we achieve the Impactism Singularity—a moment where collective human action becomes more powerful than centralized authority.
              </p>

              {/* Refined Flat Static Typographic Convergence Model (No startup SVG animation particles) */}
              <div className="border border-border-subtle bg-background-primary rounded-xl p-6 md:p-8 my-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
                  {/* Left inputs */}
                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    {["People", "Communities", "Local Groups", "AI Tools"].map((input, idx) => (
                      <div key={idx} className="bg-background-secondary border border-border-subtle px-4 py-2 rounded-lg text-xs font-mono text-text-secondary text-center md:text-left">
                        {input}
                      </div>
                    ))}
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex flex-col items-center justify-center text-text-muted font-mono select-none py-2 shrink-0">
                    <span className="text-lg hidden md:block">──────→</span>
                    <span className="text-lg md:hidden">↓</span>
                  </div>

                  {/* Right target */}
                  <div className="flex flex-col items-center justify-center w-full md:w-auto flex-1 md:max-w-[280px]">
                    <div className="bg-gradient-to-r from-[#D0021B] to-[#4F46E5] text-white font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider text-center w-full shadow-sm">
                      Collective Human Power
                    </div>
                    <div className="h-4 w-[1px] bg-border-subtle" />
                    <div className="bg-text-primary text-background-primary font-mono text-[10px] tracking-widest px-4 py-2 rounded-full uppercase text-center w-full">
                      Civic Sovereignty
                    </div>
                  </div>
                </div>
              </div>

              <p>
                This convergence represents the return of sovereignty back to human networks. It offers a hopeful, robust path forward for global civilization.
              </p>
            </div>
          </motion.article>

          {/* FINAL SECTION & CTAs */}
          <motion.article 
            className="scroll-m-24 flex flex-col space-y-8 border-t border-border-subtle pt-16 pb-12 text-center items-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <h2 className="text-4xl md:text-[60px] leading-[1.1] tracking-tight font-bold text-text-primary max-w-xl">
              Together We Stand. <br />
              We Will Not Fall.
            </h2>
            
            <div className="flex flex-col space-y-2 max-w-lg">
              <p className="text-sm text-text-secondary leading-relaxed font-normal">
                The future is not a technological question alone.
              </p>
              <p className="text-text-primary font-bold text-sm">
                It is a human one.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <button className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-text-primary text-background-primary hover:bg-accent-red hover:scale-105 transition-all duration-300 cursor-pointer">
                Read The Manifesto
              </button>
              <button className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-border-subtle hover:border-text-primary text-text-secondary hover:text-text-primary bg-transparent transition-all duration-300 cursor-pointer">
                Explore Impactism
              </button>
            </div>
          </motion.article>

        </main>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-border-subtle bg-background-primary py-12 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2.5">
            <span className="font-semibold text-lg tracking-tight text-text-primary">Oulta</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D0021B] to-[#4F46E5]" />
          </div>
          <span className="text-[11px] text-text-muted font-mono">
            &copy; {new Date().getFullYear()} Oulta. People. Impact. Change.
          </span>
        </div>
      </footer>

    </div>
  );
}
