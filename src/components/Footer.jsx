import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Users, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6">
            <Logo className="h-8" />
          </div>
          <p className="text-[13px] text-white/40 leading-relaxed font-light">
            Grow Smarter, Optimize Faster, and Scale Stronger. Your extended sales team for Indian IT.
          </p>
        </div>
        
      <div>
  <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/80 mb-6">
    Links
  </h4>

  <ul className="space-y-4">
    <li>
      <Link
        to="/services"
        className="text-[13px] text-white/40 hover:text-gold transition-colors"
      >
        Services
      </Link>
    </li>

    <li>
      <Link
        to="/process"
        className="text-[13px] text-white/40 hover:text-gold transition-colors"
      >
        Process
      </Link>
    </li>

    {/* <li>
  <a href="#results" className="text-[13px] text-white/40 hover:text-gold transition-colors">
    Results
  </a>
</li>

<li>
  <a href="#faq" className="text-[13px] text-white/40 hover:text-gold transition-colors">
    FAQs
  </a>
</li> */}
  </ul>
</div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/80 mb-6">Pages</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-[13px] text-white/40 hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-[13px] text-white/40 hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-[13px] text-white/40 hover:text-gold transition-colors">Contact</Link></li>
            <li><Link to="/careers" className="text-[13px] text-white/40 hover:text-gold transition-colors">Careers</Link></li>
            <li><Link to="/blogs" className="text-[13px] text-white/40 hover:text-gold transition-colors">Blogs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-white/80 mb-6">Connect</h4>
          <div className="flex flex-wrap gap-4">
            {/* LinkedIn - Updated with correct link */}
            <a 
              href="https://www.linkedin.com/company/vconnectiq/posts/?feedView=all" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn" 
              className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white/60 hover:text-[#0077b5] hover:bg-white/10 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            {/* YouTube - REMOVED as requested */}
            {/* <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white/60 hover:text-[#ff0000] hover:bg-white/10 transition-all">
              <Youtube className="w-4 h-4" />
            </a> */}
            
            {/* Instagram - Updated with correct link */}
            <a 
              href="https://www.instagram.com/vconnectiq_/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram" 
              className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white/60 hover:text-[#E1306C] hover:bg-white/10 transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            
            {/* Email - Updated with mailto link */}
            <a 
              href="mailto:info@vconnectiq.com" 
              aria-label="Email" 
              className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/10 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-[11px] text-white/20 uppercase tracking-widest font-semibold">© 2026 vConnect IQ. All rights reserved.</p>
        <div className="flex gap-8">
          {/* {['Privacy Policy', 'Terms of Service'].map(link => (
            <a key={link} href="#" className="text-[11px] text-white/20 hover:text-white/40 transition-colors uppercase tracking-widest font-semibold">
              {link}
            </a>
          ))} */}
        </div>
      </div>
    </footer>
  );
};
