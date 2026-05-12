import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Search, Database, MessageSquare, UserCheck, Handshake, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';

const ProcessStep = ({ number, title, desc, icon, details }) => (
  <div className="relative pl-12 md:pl-24 pb-20 last:pb-0 group">
    {/* Line */}
    <div className="absolute left-[23px] md:left-[47px] top-0 bottom-0 w-px bg-white/5 group-last:bg-transparent" />
    
    {/* Dot/Number */}
    <div className="absolute left-0 md:left-0 top-0 w-12 h-12 md:w-24 md:h-24 rounded-full liquid-glass flex items-center justify-center z-10">
      <div className="heading-italic text-2xl md:text-4xl text-gold/40 group-hover:text-gold transition-colors">
        {number}
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
            {icon}
          </div>
          <h3 className="heading-italic text-3xl md:text-4xl">{title}</h3>
        </div>
        <p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-8">
          {desc}
        </p>
      </div>
      <div className="liquid-glass p-8 rounded-3xl border-white/5">
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-6">Key Deliverables</h4>
        <ul className="space-y-4">
          {details.map((d, i) => (
            <li key={i} className="flex items-start gap-3 text-[13px] text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-5 h-5" />,
      title: "Market Diagnosis",
      desc: "We start by auditing your current GTM strategy. We identify the gaps in your ICP, your messaging, and your market positioning. We don't just take orders; we tell you what's actually blocking your revenue.",
      details: ["ICP Audit & Refinement", "Competitor Positioning Analysis", "Messaging Gap Identification", "Revenue Blockage Report"]
    },
    {
      number: "02",
      icon: <Database className="w-5 h-5" />,
      title: "Intelligence Layer",
      desc: "We build custom account lists based on real human intelligence, not just scraped data. We map out buying committees and identify key signals that indicate an account is ready to buy.",
      details: ["Custom Account List Building", "Buying Committee Mapping", "Intent Signal Identification", "CRM Data Enrichment"]
    },
    {
      number: "03",
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Multi-Channel Outreach",
      desc: "Our team executes high-touch outreach across email, LinkedIn, and phone. Every message is researched and written to sound like it came from your best sales rep.",
      details: ["Personalized Email Sequences", "LinkedIn Social Selling", "Strategic Cold Calling", "A/B Message Testing"]
    },
    {
      number: "04",
      icon: <UserCheck className="w-5 h-5" />,
      title: "Deep Qualification",
      desc: "We do the heavy lifting of qualifying every lead. We confirm interest, verify budget, and ensure we're talking to the right decision-makers before we ever book a meeting.",
      details: ["BANT Qualification", "Interest Confirmation", "Decision-Maker Access", "Lead Scoring"]
    },
    {
      number: "05",
      icon: <Handshake className="w-5 h-5" />,
      title: "Seamless Handoff",
      desc: "We hand off ready-to-close meetings to your sales team with full context. Your reps walk into every call knowing exactly what the prospect needs and why they're talking to you.",
      details: ["Meeting Coordination", "Prospect Context Briefs", "CRM Integration", "Handoff Quality Assurance"]
    },
    {
      number: "06",
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Weekly Iteration",
      desc: "We don't wait for quarterly reviews. We iterate weekly based on real-world feedback. We kill what doesn't work fast and double down on what does.",
      details: ["Weekly Performance Reviews", "Messaging Optimization", "Campaign Scaling", "Strategy Refinement"]
    }
  ];

  
return (
    <div className="pt-20 md:pt-24 lg:pt-32">
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <span className="inline-block px-3 md:px-4 py-1 rounded-full liquid-glass text-gold text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-3 md:mb-4">
              Our Process
            </span>
            <h2 className="heading-italic text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-8">
              A memory for data.<br />
              <span className="text-gold">An instinct for closing.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light text-sm md:text-base lg:text-lg px-4">
              A systematic, data-driven approach to B2B pipeline generation built exclusively for the Indian IT sector.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <ProcessStep key={i} {...step} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-black/40 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-italic text-4xl md:text-6xl mb-12">Ready to start the engine?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#book" className="liquid-glass-gold px-10 py-5 rounded-full text-gold font-bold flex items-center gap-2 hover:scale-105 transition-all">
              Book a Strategy Call <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
