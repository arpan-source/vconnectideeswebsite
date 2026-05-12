import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Mail, Calendar, BarChart3, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, Users, Code2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

const ServiceCard = ({ icon, title, desc, features }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="liquid-glass p-10 rounded-[40px] border-white/5 flex flex-col h-full"
  >
    <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-8">
      {icon}
    </div>
    <h3 className="heading-italic text-3xl mb-4">{title}</h3>
    <p className="text-white/50 text-[15px] leading-relaxed mb-8 font-light flex-1">{desc}</p>
    <ul className="space-y-3 mb-10">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-[13px] text-white/70">
          <CheckCircle2 className="w-4 h-4 text-gold/60" />
          {f}
        </li>
      ))}
    </ul>
    <Link to="/contact" className="liquid-glass-gold px-6 py-3 rounded-full text-gold text-[13px] font-bold inline-flex items-center gap-2 hover:scale-105 transition-all w-fit">
      Get Started <ArrowUpRight className="w-3.5 h-3.5" />
    </Link>
  </motion.div>
);

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "vConnect IQ completely transformed our outbound motion. We went from struggling to get meetings to a predictable pipeline of enterprise opportunities.",
      author: "Priyadarshi Ghosh",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      logo: "https://picsum.photos/seed/techflow/120/40"
    },
    {
      quote: "Their understanding of the US IT services market is unmatched. They don't just book meetings; they book the right meetings with decision-makers.",
      author: "Balavishnu",
      role: "Chief Revenue Officer",
      company: "CloudScale Inc.",
      logo: "https://picsum.photos/seed/cloudscale/120/40"
    },
    {
      quote: "The embedded team approach works flawlessly. It feels like they are sitting right next to us. The quality of BANT-qualified leads has been exceptional.",
      author: "Palani Stratworks",
      role: "CEO",
      company: "Innovate IT",
      logo: "https://picsum.photos/seed/innovate/120/40"
    },
     {
      quote: "The embedded team approach works flawlessly. It feels like they are sitting right next to us. The quality of BANT-qualified leads has been exceptional.",
      author: "Ankit Shah",
      role: "CEO",
      company: "Innovate IT",
      logo: "https://picsum.photos/seed/innovate/120/40"
    },
     {
      quote: "The embedded team approach works flawlessly. It feels like they are sitting right next to us. The quality of BANT-qualified leads has been exceptional.",
      author: "Maitray Trivedi",
      role: "CEO",
      company: "Innovate IT",
      logo: "https://picsum.photos/seed/innovate/120/40"
    }

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden relative min-h-[400px] md:min-h-[300px]">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: i === currentIndex ? 1 : 0,
              x: i === currentIndex ? 0 : (i < currentIndex ? -20 : 20),
              pointerEvents: i === currentIndex ? 'auto' : 'none'
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center text-center justify-center p-8"
          >
            <Quote className="w-12 h-12 text-gold/20 mb-6" />
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
              "{t.quote}"
            </p>
            <div className="flex flex-col items-center">
              <img src={t.logo} alt={t.company} className="h-8 object-contain mb-4 grayscale opacity-70" referrerPolicy="no-referrer" />
              <div className="text-gold font-bold">{t.author}</div>
              <div className="text-[11px] text-white/50 uppercase tracking-widest">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-6 mt-8">
        <button onClick={prev} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-colors z-10">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 z-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${i === currentIndex ? 'bg-gold w-6' : 'bg-white/20 w-2'}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/50 transition-colors z-10">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    {
      icon: <Target className="w-7 h-7" />,
      title: "Enterprise Account Mapping",
      desc: "With an elephant's memory for data, we map the entire buying committee. We identify the decision-makers, influencers, and gatekeepers within your target enterprise accounts.",
      features: ["Buying Committee Identification", "Account Signal Tracking", "Relationship Mapping", "ICP Refinement"]
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Precision Outreach",
      desc: "High-touch, multi-channel outreach with the weight and authority of your brand. We use a mix of personalized email, LinkedIn engagement, and strategic calls to start meaningful conversations.",
      features: ["Human-Written Sequences", "LinkedIn Social Selling", "Strategic Cold Calling", "A/B Message Testing"]
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Sales Intelligence",
      desc: "Data-driven insights into your market. We provide you with the intelligence you need to understand why accounts are buying, what they need, and when they are ready.",
      features: ["Market Trend Analysis", "Competitor Intelligence", "Intent Data Integration", "Custom Market Reports"]
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Revenue Acceleration",
      desc: "We focus on the bottom line. Our goal is to shorten your sales cycle by delivering highly qualified leads that are ready to talk business from day one.",
      features: ["Lead Qualification (BANT)", "Meeting Coordination", "Pipeline Velocity Audit", "GTM Strategy Consulting"]
    }
  ];

  return (
    <div className="pt-20 md:pt-24 lg:pt-32">
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <span className="inline-block px-3 md:px-4 py-1 rounded-full liquid-glass text-gold text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-3 md:mb-4">
              Our Services
            </span>
            <h2 className="heading-italic text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-8">
              We do the heavy lifting.<br />
              <span className="text-gold">You focus on closing.</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light text-sm md:text-base lg:text-lg px-4">
              We don't offer a menu of generic tasks. We offer a complete sales function built exclusively for the complexities of Indian IT services and SaaS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black/40 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-italic text-4xl md:text-6xl mb-8">No Another Agency</h2>
          <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
            vConnect IQ is your extended B2B sales team. We sit inside your process, use your tools (or ours), and represent your brand with the same level of expertise as your top performers.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { label: "Research", val: "100% Human" },
              { label: "Outreach", val: "Multi-Channel" },
              { label: "Focus", val: "IT Sector Only" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-gold heading-italic text-3xl mb-1">{item.val}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
              The Difference
            </span>
            <h2 className="heading-italic text-4xl md:text-6xl lg:text-7xl mb-8">Why Choose <span className="text-gold">vConnect IQ</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">
              We don't just generate leads; we build revenue engines. Here is why top Indian IT firms trust us with their pipeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Embedded Sales Team",
                desc: "We don't just hand off lists. We integrate directly into your GTM strategy, acting as a seamless extension of your internal team."
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "IT Sector Expertise",
                desc: "With 6+ years of specialized experience, we speak the language of IT services, SaaS, and complex technical solutions."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Qualified Meetings Only",
                desc: "No vanity metrics or empty clicks. We focus exclusively on delivering high-intent, BANT-qualified conversations."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Rapid Execution",
                desc: "Forget 12-week strategy delays. Our sequences go live in week one, putting your calendar in motion immediately."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="liquid-glass p-8 rounded-3xl border-white/5 hover:border-gold/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-white/90">{feature.title}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black/40 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
              Client Success
            </span>
            <h2 className="heading-italic text-4xl md:text-6xl mb-4">What Our <span className="text-gold">Partners Say</span></h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
              Case Studies
            </span>
            <h2 className="heading-italic text-5xl md:text-7xl mb-8">Proof in the <span className="text-gold">Pipeline</span>.</h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">
              See how we've helped Indian IT firms break into the US market and scale their enterprise revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                client: "Global SaaS Provider",
                metric: "+145%",
                metricLabel: "Pipeline Growth",
                desc: "Generated $2.4M in qualified pipeline within 6 months by targeting VP-level decision makers in the US healthcare sector.",
                tags: ["SaaS", "Healthcare", "US Market"]
              },
              {
                client: "IT Services Firm",
                metric: "12",
                metricLabel: "Enterprise Meetings/Mo",
                desc: "Transitioned from zero outbound motion to a predictable 12 enterprise meetings per month with Fortune 500 CTOs.",
                tags: ["IT Services", "Fortune 500", "Outbound"]
              },
              {
                client: "Cloud Solutions Agency",
                metric: "3x",
                metricLabel: "Deal Size Increase",
                desc: "Shifted focus from SMB to Enterprise, resulting in a 3x increase in average deal size and a 40% shorter sales cycle.",
                tags: ["Cloud", "Enterprise", "Strategy"]
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="liquid-glass p-8 rounded-[32px] border-white/5 flex flex-col"
              >
                <div className="mb-6">
                  <div className="text-gold heading-italic text-5xl mb-2">{study.metric}</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-widest font-bold">{study.metricLabel}</div>
                </div>
                <h3 className="text-xl font-medium mb-4">{study.client}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed flex-1 mb-8">
                  {study.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {study.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/60 uppercase tracking-wider font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};