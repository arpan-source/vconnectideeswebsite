import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 md:pt-24 lg:pt-32 min-h-screen flex flex-col items-center justify-center px-4 md:px-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 md:px-4 py-1 rounded-full liquid-glass text-gold text-[10px] md:text-[11px] font-bold uppercase tracking-wider mb-3 md:mb-4">
            Contact Us
          </span>
          <h2 className="heading-italic text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-8">Let's start a<br /><span className="text-gold">Conversation.</span></h2>
          <p className="text-white/50 text-sm md:text-base lg:text-lg font-light max-w-2xl mx-auto px-4">
            Ready to build your revenue engine? Reach out to us and let's discuss how we can help you own your market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            { icon: <Mail className="w-5 h-5" />, label: "Email", val: "info@vconnectiq.com" },
            { icon: <Phone className="w-5 h-5" />, label: "Phone", val: "+91 8530683777" },
            { icon: <MapPin className="w-5 h-5" />, label: "Office", val: "Pune, Maharashtra, India" }
          ].map((item, i) => (
            <div key={i} className="liquid-glass p-6 md:p-8 rounded-2xl md:rounded-3xl text-center hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mb-4 md:mb-6">
                {item.icon}
              </div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-2">{item.label}</div>
              <div className="text-xs md:text-sm text-white/80">{item.val}</div>
            </div>
          ))}
        </div>

        <div className="mb-12 md:mb-16 text-center">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-white/50 mb-6 md:mb-8">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="https://www.linkedin.com/company/vconnectiq/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-2xl liquid-glass hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all group">
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-[#0077b5] transition-colors" />
              <span className="text-xs md:text-sm font-medium text-white/70 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            {/* <a href="#" className="flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-2xl liquid-glass hover:bg-[#ff0000]/10 hover:border-[#ff0000]/30 transition-all group">
              <Youtube className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-[#ff0000] transition-colors" />
              <span className="text-xs md:text-sm font-medium text-white/70 group-hover:text-white transition-colors">YouTube</span>
            </a> */}
            <a href="https://www.instagram.com/vconnectiq_/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-2xl liquid-glass hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 transition-all group">
              <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white/50 group-hover:text-[#E1306C] transition-colors" />
              <span className="text-xs md:text-sm font-medium text-white/70 group-hover:text-white transition-colors">Instagram</span>
            </a>
          </div>
        </div>

        <div className="liquid-glass p-8 md:p-12 rounded-[32px] md:rounded-[40px] text-center">
          <h3 className="heading-italic text-2xl md:text-3xl mb-4 md:mb-6">Book a Strategy Call</h3>
          <p className="text-white/50 text-sm md:text-base mb-6 md:mb-10 font-light px-4">The fastest way to get started is to jump on a quick 30-minute call with our team.</p>
          <a href="#" className="liquid-glass-gold px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-full text-gold font-bold text-sm md:text-base inline-flex items-center gap-2 hover:scale-105 transition-all">
            Schedule Now <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};