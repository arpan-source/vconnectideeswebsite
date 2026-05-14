import React from 'react';
import { Linkedin, Award } from 'lucide-react';

export function ProfileCard({
  avatarUrl,
  name,
  role,
  description,
  expertise = "B2B Sales",
  onLinkedinClick = () => {}
}) {
  return (
  <div 
  className="relative w-full max-w-[280px] sm:max-w-sm rounded-[32px] overflow-hidden shadow-2xl mx-auto group border border-white/10"
  style={{
    backgroundImage: `url(${avatarUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 transition-opacity duration-500"></div>
      
      {/* Content */}
       <div className="relative p-5 pt-48 sm:p-8 sm:pt-64 flex flex-col h-full justify-end">
        {/* Name and Role */}
        <div className="mb-3">
         <h2 className="text-xl sm:text-3xl font-bold text-white mb-1">{name}</h2>
          <div className="text-gold text-xs font-bold uppercase tracking-widest">{role}</div>
        </div>

        {/* Description */}
        {/* <p className="text-white/70 text-sm mb-6 leading-relaxed">
          {description}
        </p> */}

        {/* Stats */}
        {/* <div className="flex items-center justify-start mb-6">
          <div className="text-left">
            <div className="flex items-center gap-1.5 mb-1">
              <Award className="w-4 h-4 text-gold" />
              <div className="text-lg font-bold text-white truncate max-w-[200px]">{expertise}</div>
            </div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest">Focus</div>
          </div>
        </div> */}

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
      onClick={onLinkedinClick}
      className="w-full bg-white text-black py-3 px-4 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2"
    >
      <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      Connect on LinkedIn
    </button>
        </div>
      </div>
    </div>
  );
}
