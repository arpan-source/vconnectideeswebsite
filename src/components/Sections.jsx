import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  animate,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  ArrowUpRight,
  Plus,
  X,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link } from 'react-router-dom';
import ElephantBg from '../assets/Images/Elephant-bg.jpeg';
export const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/(\d+)/);

  useEffect(() => {
    const match = value.match(/(\d+)/);
    if (!match || !isInView || !ref.current) return;

    const numStr = match[1];
    const num = parseInt(numStr, 10);
    const prefix = value.substring(0, match.index);
    const suffix = value.substring(match.index + numStr.length);

    const controls = animate(0, num, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
        }
      },
    });

    return controls.stop;
  }, [isInView, value]);

  if (!match) {
    return <span>{value}</span>;
  }

  const numStr = match[1];
  const prefix = value.substring(0, match.index);
  const suffix = value.substring(match.index + numStr.length);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
      if (!isHovered) setIsHovered(true);
    };
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isHovered]);

  return (
 <section className="relative min-h-screen flex flex-col items-center justify-center pt-0 sm:pt-8 md:pt-10 pb-20 px-4 sm:px-6 overflow-hidden bg-black">
      {/* Background Image Container - Fixed to stay behind */}
      <div className="absolute inset-0 z-0">
        {/* Mouse move effect container */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute inset-0 w-full h-full"
        >
  <img
  src={ElephantBg}
  alt="Majestic Elephant"
  className="
  w-full
  h-[42vh]
  sm:h-[55vh]
  md:h-full
  object-cover
  object-center
  object-[center_20%]
  md:object-center
"
  style={{
    filter: isHovered
      ? "grayscale(20%) sepia(60%) hue-rotate(5deg) saturate(180%) brightness(0.8)"
      : "grayscale(100%) sepia(0%) hue-rotate(0deg) saturate(100%) brightness(0.45)",
    transform: isHovered ? "scale(1.03)" : "scale(1.08)",
    transition: "all 1.5s ease-out",
  }}
/>
        </motion.div>
        
        {/* Overlays for text readability - These stay on top of image */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70" />
      </div>

      {/* Content Container - Stays on top of background */}
     <motion.div
  style={{ y: yParallax, opacity }}
 className="max-w-4xl mx-auto text-center relative z-10 w-full -mt-16 sm:-mt-10 md:mt-12 lg:mt-16"
>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 p-0.5 pr-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8 mx-auto"
        >
          <span className="bg-gold text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap">
            6 Years · 500+ Clients
          </span>
          <span className="text-[10px] text-white/70 whitespace-nowrap hidden sm:inline">
            Extended Sales Team for Indian IT
          </span>
          <span className="text-[10px] text-white/70 whitespace-nowrap sm:hidden">
            Extended Sales Team
          </span>
        </motion.div>
        
        <motion.h1
  initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
  animate={{ opacity: 1, filter: "blur(0)", y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    heading-italic
    text-[2.4rem]
    sm:text-6xl
    md:text-7xl
    lg:text-8xl
    xl:text-9xl
    mb-4
    md:mb-6
    text-center
    leading-[1.05]
    w-full
    flex
    justify-center
  "
>
          <div className="flex flex-col items-center justify-center">
            <span>Own Your Market.</span>
            <span className="text-gold">Or Someone Else Will.</span>
          </div>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-white/50 mb-8 md:mb-10 font-light leading-relaxed px-4"
        >
          <span className="text-white/80 font-medium">
            The memory of an elephant. The momentum of a powerhouse.
          </span>
          <br />
          <br />
          vConnect IQ is not another cold-email tool. Not a dashboard that makes
          you feel busy. We're your extended B2B sales team — built exclusively
          for Indian IT companies ready to stop chasing and start closing.
        </motion.p>
        
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
>
  <Link
    to="/contact"
    className="liquid-glass-gold px-6 md:px-8 py-3 md:py-4 rounded-full text-gold font-bold text-sm md:text-base flex items-center gap-2 hover:scale-105 transition-all"
  >
    Book a Strategy Call <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
  </Link>
  <Link
    to="/contact"
    className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-white/10 text-white/70 font-medium hover:bg-white/5 transition-all text-sm md:text-base"
  >
    See Our Results →
  </Link>
</motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-20 flex flex-col items-center gap-4 md:gap-6"
        >
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/30 font-semibold">
            Trusted by IT companies across India
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-4 md:gap-y-6">
            {[
              "Infovision",
              "NexGen IT",
              "DataBridge",
              "TechAxis",
              "CloudEdge",
            ].map((logo) => (
              <span
                key={logo}
                className="heading-italic text-base sm:text-lg md:text-xl text-white/20 hover:text-white/50 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export const Journey = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const milestones = [
    {
      date: "December 2019",
      desc: "Founded in Pune — 3 months before COVID hit",
    },
    {
      date: "2022",
      desc: "Expanded into new markets, opened first office, improved delivery operations",
    },
    {
      date: "October 2023",
      desc: "Exhibited at North Star Dubai — 100+ inquiries and 10+ closures in 4 days",
    },
    {
      date: "Today",
      desc: "Profitable, 500+ clients served, full-service GTM partner",
    },
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden border-t border-white/5">
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent pointer-events-none"
      />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
            Our Journey
          </span>
          <h2 className="heading-italic text-4xl md:text-6xl lg:text-7xl mb-6">
            The Road to <span className="text-gold">Here.</span>
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Background Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Animated Foreground Line */}
          <motion.div
            className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[3px] bg-gold -translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(240,180,41,0.5)]"
            style={{ scaleY: scrollYProgress }}
          />

          {milestones.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={i}
                className="relative flex items-start justify-between md:justify-normal mb-16 md:mb-24 last:mb-0"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-[24px] md:left-1/2 top-0 w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(240,180,41,0.2)]"
                >
                  <span className="text-gold text-lg font-bold">{i + 1}</span>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={cn(
                    "w-full md:w-1/2 pl-20 md:pl-0",
                    isEven
                      ? "md:pr-24 md:text-right"
                      : "md:pl-24 md:ml-auto text-left",
                  )}
                >
                  <div className="group relative transition-all duration-500 hover:-translate-y-1">
                    {/* Connecting subtle line for desktop */}
                    <div
                      className={cn(
                        "hidden md:block absolute top-6 -translate-y-1/2 w-16 h-[1px] bg-white/10 group-hover:bg-gold/50 transition-colors duration-500",
                        isEven ? "-right-16" : "-left-16",
                      )}
                    />
                    <div
                      className={cn(
                        "text-gold heading-italic text-3xl md:text-4xl mb-4 h-12 flex flex-col justify-center",
                        isEven ? "md:items-end" : "md:items-start",
                      )}
                    >
                      {m.date}
                    </div>
                    <p className="text-white/60 font-light leading-relaxed text-base md:text-lg group-hover:text-white/90 transition-colors duration-500">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Marquee = () => {
  const items = [
    "B2B Pipeline Generation",
    "Enterprise Account Mapping",
    "ICP-First Outreach",
    "Sales Intelligence",
    "Market Penetration",
    "Revenue Acceleration",
    "Qualified Meetings",
    "IT Sector Expertise",
  ];
  
  return (
    <div className="py-10 border-y border-white/5 overflow-hidden relative bg-black/40 backdrop-blur-sm">
      <div className="flex overflow-hidden relative w-full">
        <div className="flex gap-16 animate-marquee shrink-0">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span className="heading-italic text-2xl text-white/20 hover:text-white/60 transition-colors cursor-default whitespace-nowrap">
                {item}
              </span>
              <span className="text-gold opacity-40 shrink-0">✦</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export const AntiAgency = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      ref={ref}
      className="py-24 px-6 border-y border-white/5 bg-black/40 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
            The Elephant in the Room
          </span>
          <h2 className="heading-italic text-3xl md:text-5xl lg:text-6xl mb-4">
            Most lead gen agencies fail.
          </h2>
          <div className="w-12 h-0.5 bg-gold/60 mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/5">
          <motion.div className="bg-black/60 p-8 md:p-10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-red-500/70 mb-8 flex items-center gap-2">
              <X className="w-3 h-3" /> What You've Dealt With
            </h3>
            <div className="space-y-4">
              {[
                "A vendor who disappears after onboarding",
                "Generic email blasts that get you blacklisted",
                "Interns calling themselves 'SDRs'",
                "Dashboards full of vanity metrics",
                "12-week strategy before any action",
                "Agencies who've never sold IT services",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500/30 mt-2 shrink-0" />
                  <p className="text-sm text-white/40 line-through decoration-red-500/20">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="bg-black/60 p-8 md:p-10">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-gold mb-8 flex items-center gap-2">
              The vConnect IQ Difference
            </h3>
            <div className="space-y-4">
              {[
                "A team that sits inside your sales process",
                "Precision outreach to the right buyers only",
                "Senior practitioners with 6 years of IT expertise",
                "One metric: qualified meetings booked",
                "Week one: sequences live, calendar moving",
                "Specialists who speak IT fluently",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  <p className="text-sm text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// export const Stats = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

//   return (
//     <section
//       ref={ref}
//       id="results"
//       className="relative py-32 px-6 overflow-hidden"
//     >
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-transparent to-gold/[0.03]"
//       />
//       <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 to-transparent z-10" />
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent z-10" />
//       <div className="max-w-4xl mx-auto relative z-20">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
//             By the Numbers
//           </span>
//           <h2 className="heading-italic text-3xl md:text-5xl lg:text-6xl mb-6">
//             Six years.
//             <br />
//             Still in the trenches.
//           </h2>
//           <p className="text-white/50 max-w-md mx-auto font-light text-sm">
//             Not a startup finding its feet. We've done this — repeatedly,
//             verifiably, in the Indian IT sector.
//           </p>
//         </div>
//         <div className="liquid-glass-strong p-8 md:p-16 rounded-[40px] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
//           {[
//             { val: "6+", label: "Years in IT GTM" },
//             { val: "500+", label: "IT Companies Served" },
//             { val: "3x", label: "Avg Pipeline Growth" },
//             { val: "$57M+", label: "Revenue Influenced" },
//           ].map((s, i) => (
//             <div key={i}>
//               <div className="heading-italic text-4xl md:text-5xl text-gold mb-2">
//                 <AnimatedCounter value={s.val} />
//               </div>
//               <div className="text-[11px] text-white/40 uppercase tracking-widest font-medium">
//                 {s.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

export const Stats = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section
      ref={ref}
      id="results"
      className="relative py-12 md:py-24 px-4 md:px-6 overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-transparent to-gold/[0.03] pointer-events-none"
      />
      
      {/* Remove the top gradient overlay - it's causing the extra space */}
      {/* Only keep bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-20">
        <div className="text-center">
          <span className="inline-block px-3 md:px-4 py-1 rounded-full liquid-glass text-gold text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-3 md:mb-4">
            BY THE NUMBERS
          </span>
          <h2 className="heading-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4">
            Six years.
            <br />
            Still in the trenches.
          </h2>
          <p className="text-white/50 max-w-md mx-auto font-light text-xs sm:text-sm px-4">
            Not a startup finding its feet. We've done this — repeatedly,
            verifiably, in the Indian IT sector.
          </p>
        </div>
        
        <div className="liquid-glass-strong p-5 sm:p-6 md:p-12 rounded-[32px] md:rounded-[40px] grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 text-center mt-8 md:mt-12">
          {[
            { val: "6+", label: "Years in IT GTM" },
            { val: "500+", label: "IT Companies Served" },
            { val: "3x", label: "Avg Pipeline Growth" },
            { val: "$57M+", label: "Revenue Influenced" },
          ].map((s, i) => (
            <div key={i}>
              <div className="heading-italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gold mb-1 md:mb-2">
                <AnimatedCounter value={s.val} />
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-[11px] text-white/40 uppercase tracking-widest font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const faqs = [
    {
      q: "How is vConnect IQ different from a regular outreach agency?",
      a: "A regular agency runs sequences. We run a sales function. We're embedded in your GTM — doing the research, building the account intelligence, qualifying conversations, and handing you meetings with context.",
    },
    {
      q: "How quickly can we expect results?",
      a: "Most clients see first qualified conversations within 2–3 weeks. We don't do 12-week strategy phases. ICP gets defined in week one. Outreach goes live in week two.",
    },
    {
      q: "Do you work with IT companies of all sizes?",
      a: "We primarily work with Indian IT companies ranging from ₹5Cr to ₹500Cr in revenue — services firms, MSPs, SaaS products, consulting practices.",
    },
    {
      q: "What does 'extended sales team' actually mean?",
      a: "It means we own the top-of-funnel entirely — account research, outreach, replies, objection handling, qualification calls, meeting scheduling. Your team engages from the first real sales conversation forward.",
    },
  ];
  return (
    <section
      ref={ref}
      id="faq"
      className="py-24 px-6 bg-black/40 backdrop-blur-sm relative overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none"
      />
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
            FAQs
          </span>
          <h2 className="heading-italic text-3xl md:text-5xl lg:text-6xl mb-4">
            You have questions.
            <br />
            We have honest answers.
          </h2>
          <div className="w-12 h-0.5 bg-gold/60 mx-auto rounded-full" />
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">
                  {faq.q}
                </span>
                <Plus
                  className={cn(
                    "w-5 h-5 text-gold transition-transform duration-300",
                    openIndex === i && "rotate-45",
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-white/50 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export const CTA = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });
//   const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

//   return (
//     <section
//       ref={ref}
//       id="book"
//       className="relative py-40 px-6 overflow-hidden text-center bg-black/60"
//     >
//       <motion.div
//         style={{ y }}
//         className="glow-orb w-[700px] h-[700px] bg-gold/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//       />
//       <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10" />
//       <div className="max-w-3xl mx-auto relative z-20">
//         <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-8">
//           Let's Talk
//         </span>
//         <h2 className="heading-italic text-4xl md:text-6xl lg:text-8xl mb-8">
//           Stop leaving enterprise
//           <br />
//           accounts on the table.
//         </h2>
//         <p className="text-base md:text-lg text-white/50 mb-12 max-w-lg mx-auto font-light">
//           Book a 30-minute strategy call. We'll look at your market, your ICP,
//           and what's actually blocking your pipeline. No pitch decks. No fluff.
//         </p>
//         <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
//           <a
//             href="#"
//             className="bg-gold text-black px-10 py-5 rounded-full text-base font-bold hover:bg-gold/90 transition-all active:scale-95 shadow-xl shadow-gold/20"
//           >
//             Book a Strategy Call ↗
//           </a>
//           <a
//             href="#results"
//             className="px-10 py-5 rounded-full border border-white/10 text-white/70 font-medium hover:bg-white/5 transition-all"
//           >
//             See Our Results →
//           </a>
//         </div>
//         <p className="text-[11px] text-white/20 uppercase tracking-widest font-semibold">
//           No credit card. No commitment. Just a conversation.
//         </p>
//       </div>
//     </section>
//   );
// };
export const CTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section
      ref={ref}
      id="book"
      className="relative py-12 md:py-20 lg:py-32 px-4 md:px-6 overflow-hidden text-center bg-black/60"
    >
      <motion.div
        style={{ y }}
        className="glow-orb w-[700px] h-[700px] bg-gold/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      
      {/* Reduced top gradient height on mobile */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-32 lg:h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-20">
        <span className="inline-block px-3 md:px-4 py-1 rounded-full liquid-glass text-gold text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-4 md:mb-6 lg:mb-8">
          Let's Talk
        </span>
        
        <h2 className="heading-italic text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-8">
          Stop leaving enterprise
          <br />
          accounts on the table.
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-white/50 mb-8 md:mb-12 max-w-lg mx-auto font-light px-4">
          Book a 30-minute strategy call. We'll look at your market, your ICP,
          and what's actually blocking your pipeline. No pitch decks. No fluff.
        </p>
        
        {/* FIXED: Changed from <a> to <Link> for both buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          <Link
            to="/contact"
            className="bg-gold text-black px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full text-sm md:text-base font-bold hover:bg-gold/90 transition-all active:scale-95 shadow-xl shadow-gold/20"
          >
            Book a Strategy Call ↗
          </Link>
          <Link
            to=""
            className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full border border-white/10 text-white/70 font-medium hover:bg-white/5 transition-all text-sm md:text-base"
          >
            See Our Results →
          </Link>
        </div>
        
        <p className="text-[10px] md:text-[11px] text-white/20 uppercase tracking-widest font-semibold">
          No credit card. No commitment. Just a conversation.
        </p>
      </div>
    </section>
  );
};