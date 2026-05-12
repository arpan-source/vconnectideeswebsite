import React from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';

export const Careers = () => {
  return (
    <div className="pt-32 min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
            Careers
          </span>
          <h2 className="heading-italic text-4xl md:text-6xl lg:text-8xl mb-8">Join the<br /><span className="text-gold">Powerhouse.</span></h2>
          <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
            We're always looking for senior practitioners, SDRs, and sales intelligence experts who are ready to build the future of B2B sales.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {[
            { title: "Senior SDR (IT Services)", type: "Full-time", location: "ONSITE / Pune" },
            { title: "Sales Intelligence Analyst", type: "Full-time", location: "ONSITE / Pune" },
            { title: "Account Executive", type: "Full-time", location: "ONSITE / Pune" }
          ].map((job, i) => (
            <div key={i} className="liquid-glass p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 group hover:bg-white/[0.04] transition-all">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white/90 mb-1">{job.title}</h3>
                  <div className="flex gap-4">
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">{job.type}</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest">{job.location}</span>
                  </div>
                </div>
              </div>
              {/* <a href="#" className="text-gold text-[13px] font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Apply Now <ArrowUpRight className="w-4 h-4" />
              </a> */}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/30 text-sm font-light">Don't see a role that fits? Send your resume to <span className="text-gold">muskan@vconnectiq.com</span></p>
        </div>
      </div>
    </div>
  );
};
