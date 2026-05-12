import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Search, Database, MessageSquare, UserCheck, Handshake, RefreshCw } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
const ProcessStep = ({ number, title, desc, icon, details }) => (
  <div className="relative pb-16 md:pb-20 last:pb-0 group">
    {/* Content with number and title on same row */}
    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
      <div>
        {/* Number and Title on the same line - Side by side */}
        <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full liquid-glass flex items-center justify-center">
              <span className="heading-italic text-lg sm:text-xl text-gold/40 group-hover:text-gold transition-colors">
                {number}
              </span>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
              {icon}
            </div>
          </div>
          <h3 className="heading-italic text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
        </div>
        <p className="text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
          {desc}
        </p>
      </div>
      <div className="liquid-glass p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5">
        <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-white/30 mb-4 md:mb-6">
          Key Deliverables
        </h4>
        <ul className="space-y-3 md:space-y-4">
          {details.map((d, i) => (
            <li key={i} className="flex items-start gap-2 md:gap-3 text-[11px] sm:text-[12px] md:text-[13px] text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-gold/40 mt-1.5 shrink-0" />
              <span className="flex-1">{d}</span>
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
     <section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 bg-black/40 backdrop-blur-sm border-t border-white/5">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="heading-italic text-2xl sm:text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-8 lg:mb-12">
      Ready to start the engine?
    </h2>
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      <Link to="/contact" className="liquid-glass-gold px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full text-gold font-bold text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-all">
        Book a Strategy Call <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
      </Link>
    </div>
  </div>
</section>
    </div>
  );
};
