import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Calendar,
  ShieldCheck,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Logo } from "../components/Logo";
import { AnimatedCounter } from "../components/Sections";
import { ProfileCard } from "../components/ProfileCard";
import logoImg from "../assets/Images/Ele_logo.png";
import HemantSir from "../assets/Images/HemantSir.png";
import MuskanMam from "../assets/Images/MuskanMam.png";
import AnkitSir from "../assets/Images/AnkitSir.png";
import Arpan from "../assets/Images/Arpan.png";
import DhirajSir from "../assets/Images/DhirajSir.png";
import AshishSir from "../assets/Images/AshishSir1.png";

const Team = () => {
  const members = [
    {
      name: "Hemant Ghale",
      role: "Founder & Director",
      img: HemantSir,
      bio: "Spends 90% of his day looking at dashboards and the other 10% asking for updates.",
      expertise: "Big Picture Stuff",
      linkedin: "https://www.linkedin.com/in/hemantghale/"
    },
    {
      name: "Dhiraj Umate",
      role: "Head of Operations",
      img: DhirajSir,
      bio: "Will absolutely reject your proposal if the spreadsheet formatting is slightly off.",
      expertise: "Spreadsheet Sorcery",
      linkedin: "https://www.linkedin.com/in/dhiraj-umate-3819b9ab/"
    },
    {
      name: "Ashish Yadav",
      role: "Client Engagement Head",
      img: AshishSir,
      bio: "Gets paid to nod enthusiastically while clients complain about things we can't fix.",
      expertise: "Damage Control",
      linkedin: "https://www.linkedin.com/in/ashish-yadav-7b9701103/"
    },
    {
      name: "Muskan Nigam",
      role: "Growth Marketing Manager",
      img: MuskanMam,
      bio: "Basically a professional babysitter for salespeople who refuse to log their calls.",
      expertise: "Herding Cats",
      linkedin: "https://www.linkedin.com/in/muskan-nigam-717aaa1b3/"
    },
    {
      name: "Ankit Kharatmal",
      role: "Business Development Manager",
      img: AnkitSir,
      bio: "Has never met a feature he wouldn't promise a client to get a signature.",
      expertise: "Overpromising Features",
      linkedin: "https://www.linkedin.com/in/ankit-kharatmal-359815140/"
    },
    {
      name: "Arpan Chavan",
      role: "Project Manager",
      img: Arpan,
      bio: "Organizes mandatory fun events that everyone secretly tries to get out of.",
      expertise: "Mandatory Fun",
      linkedin: "https://www.linkedin.com/in/arpan-chavan/"
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-12 md:mb-20 border-b border-white/20 pb-8">
          <div>
            <span className="text-[10px] text-gold uppercase tracking-[0.3em] font-bold block mb-4">
              The Specialists
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-tighter">
              Our <span className="text-white/40 italic font-serif">Team</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-xs font-light text-sm text-center md:text-right pb-2 mt-6 md:mt-0">
            Driven by precision. Engineered for growth. Meet the specialists
            behind the machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-16">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <ProfileCard
                avatarUrl={m.img}
                name={m.name}
                role={m.role}
                description={m.bio}
                expertise={m.expertise}
                onLinkedinClick={() =>
                  window.open(m.linkedin, "_blank")
                }
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-24 md:mt-32 text-center">
          <h3 className="heading-italic text-2xl md:text-3xl lg:text-4xl text-white/30 italic">
            Love God, Love People, Love What We Do.
          </h3>
        </div>
      </div>
    </section>
  );
}

export const About = () => {
  const stats = [
    {
      label: "Businesses Served",
      val: "500+",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Established In",
      val: "2019",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      label: "Industry Standing",
      val: "Best-in-Class",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  const values = [
    {
      title: "Industry Expertise",
      desc: "Deep market knowledge tailored for each client's unique sector.",
    },
    {
      title: "Quality Lead Generation",
      desc: "Leads primed to match your specific offerings, not just numbers.",
    },
    {
      title: "Tailored Strategies",
      desc: "Customized go-to-market plans that address your specific challenges.",
    },
    {
      title: "Commitment to Growth",
      desc: "Relentless focus on turning leads into real business opportunities.",
    },
  ];

  return (
    <div className="pt-20 md:pt-24 lg:pt-32">
      <section className="py-16 md:py-20 lg:py-24 px-4 md:px-6 bg-black/40 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center mb-20 md:mb-32">
            <div>
              <span className="inline-block px-3 md:px-4 py-1 rounded-full liquid-glass text-gold text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-4 md:mb-6">
                Our Story
              </span>
              <h2 className="heading-italic text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 md:mb-8">
                Helping Your
                <br />
                <span className="text-gold">Business Grow.</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 font-light leading-relaxed mb-6 md:mb-10">
                vConnect IQ started in 2019 with a single mission: to provide
                Indian IT companies with the same high-level sales intelligence
                that Fortune 500 companies use. We saw too many great tech firms
                struggling with poor lead quality and inconsistent pipelines.
              </p>
              <p className="text-sm md:text-base text-white/40 font-light leading-relaxed mb-8 md:mb-10">
                Today, we are a team of senior practitioners who don't just "run
                campaigns"—we build revenue engines. We've served over 500
                clients, from ₹5Cr startups to ₹500Cr enterprise services firms,
                helping them own their market before someone else does.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-4 md:gap-y-6">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className="liquid-glass p-4 md:p-6 rounded-2xl border-white/5"
                  >
                    <div className="text-gold mb-2 md:mb-3 opacity-60">{s.icon}</div>
                    <div className="heading-italic text-2xl md:text-3xl mb-1">
                      <AnimatedCounter value={s.val} />
                    </div>
                    <div className="text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest font-bold">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="liquid-glass-strong aspect-square rounded-[32px] md:rounded-[40px] p-4 overflow-hidden flex items-center justify-center">
                <img
                  src={logoImg}
                  alt="Growth"
                  className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 liquid-glass p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl hidden md:block">
                <div className="heading-italic text-2xl md:text-3xl lg:text-4xl text-gold">6 Years</div>
                <div className="text-[9px] md:text-[10px] text-white/40 uppercase tracking-widest">
                  In the Trenches
                </div>
              </div>
            </div>
          </div>

          <div className="relative py-16 md:py-20 lg:py-32 rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 text-center">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=2000&auto=format&fit=crop")',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80"></div>

            <div className="relative z-10 px-4 md:px-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 mx-auto mb-4 md:mb-6 lg:mb-8">
                <Logo
                  className="h-full w-full justify-center"
                  showText={false}
                />
              </div>
              <h2 className="heading-italic text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-4 lg:mb-6">
                Why the Elephant?
              </h2>

                <p className="text-white/70 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base lg:text-lg px-4">
  In the wild, the elephant represents unmatched intelligence,
  deep memory, and unstoppable momentum. In B2B sales, it
  represents us. We don't forget a lead. We don't drop the ball.
  We carry the heavy lifting of your pipeline generation so you
  can focus on what you do best:{" "}
  <span className="text-gold font-medium">CLOSING.</span>
</p>
  </div>
          </div>
          
          <div className="pt-16 md:pt-20 lg:pt-24 border-t border-white/5">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-3 md:px-4 py-1 rounded-full liquid-glass text-gold text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="heading-italic text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                The Values Behind vConnect IQ
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto mt-4 md:mt-6 font-light leading-relaxed text-sm md:text-base px-4">
                Our values aren't just posters on a wall. They are the operating
                system for our team. We believe in radical honesty, relentless
                pursuit of quality, and a deep commitment to our clients'
                success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="liquid-glass p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-white/[0.04] transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 md:mb-6">
                    <Check className="w-4 h-4" />
                  </div>
                  <h3 className="heading-italic text-xl md:text-2xl mb-3 md:mb-4">{v.title}</h3>
                  <p className="text-[12px] md:text-[13px] text-white/50 leading-relaxed font-light">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Team />
    </div>
  );
};