import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogs';

export const Blogs = () => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <span className="inline-block px-4 py-1.5 rounded-full liquid-glass text-gold text-[11px] font-bold uppercase tracking-wider mb-4">
            Insights & Perspectives
          </span>
          <h1 className="heading-italic text-4xl md:text-6xl lg:text-7xl mb-6">The Elephant's <span className="text-gold">Memory</span></h1>
          <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">
            Strategies, insights, and proven tactics for B2B pipeline generation and sales growth in the IT sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-gold border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[11px] text-white/40 uppercase tracking-wider font-semibold mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {post.author?.avatar ? (
                      <img src={post.author.avatar} alt={post.author.name} className="w-4 h-4 rounded-full object-cover border border-white/10" />
                    ) : (
                      <User className="w-3 h-3" />
                    )}
                    {post.author?.name || post.author}
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 group-hover:text-gold transition-colors leading-tight">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm text-gold font-medium group/link mt-auto">
                  Read Article 
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
