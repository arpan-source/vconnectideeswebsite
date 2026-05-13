import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, ArrowUpRight } from 'lucide-react';
import Markdown from 'react-markdown';
import { BLOG_POSTS } from '../data/blogs';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle || post.title;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = post.metaDescription || post.excerpt;

      // Add FAQ Schema specifically for the cold email deliverability post
      if (slug === 'b2b-cold-email-deliverability-guide-2026') {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the recommended daily send limit per inbox for cold email in 2026?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For a fully warmed inbox (6–8 weeks of warm-up), a safe ceiling is 80–100 emails per day. For new or moderately warmed inboxes, 30–50 per day is the recommended range. Exceeding these thresholds — especially on young domains — spikes bounce rates and triggers spam classifier penalties from Google and Microsoft."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to warm up a new email inbox for cold outreach?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A proper warm-up takes 4–8 weeks depending on the target volume. The first two weeks should involve only warm-up tool exchanges (no real cold contacts). By week five, most inboxes can handle 40–60 cold emails per day. Running warm-up traffic in the background continuously — even after the inbox is active — is considered best practice in 2026."
              }
            },
            {
              "@type": "Question",
              "name": "What are SPF, DKIM, and DMARC, and do I need all three?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all three are required for legitimate cold email sending in 2026. SPF authorizes your sending IPs, DKIM cryptographically signs your emails to prevent tampering, and DMARC ties both together and tells inbox providers how to handle authentication failures. Without all three correctly configured, your emails face elevated suspicion from Gmail and Outlook regardless of content quality."
              }
            },
            {
              "@type": "Question",
              "name": "Why are my cold emails going to spam even though I have a good domain?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Common causes include: insufficient warm-up (too much volume too fast), high bounce rates from unverified lists, template fingerprinting from non-personalized content, burst sending patterns, and negative engagement signals like delete-without-open. In 2026, inbox placement is scored on behavioral signals as much as technical ones — a domain can be technically compliant but behaviorally flagged."
              }
            },
            {
              "@type": "Question",
              "name": "What is BIMI and does it help cold email deliverability?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BIMI (Brand Indicators for Message Identification) displays your brand logo next to your emails in supporting clients like Gmail and Apple Mail. It requires a fully enforced DMARC policy (p=reject) and a verified mark certificate. BIMI doesn't directly boost inbox placement scores, but it increases open rates by signaling brand legitimacy — which indirectly improves your engagement-based sender reputation over time."
              }
            },
            {
              "@type": "Question",
              "name": "How many sending domains do I need for a serious B2B cold email program?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A common benchmark is one sending domain per 50–100 active contacts in sequences at any time. For a program targeting 1,000–2,000 contacts per month, 3–5 rotating domains (each with 2–3 inboxes) is a solid baseline. This distributes risk: if one domain takes a reputation hit, the rest of your outbound motion continues uninterrupted."
              }
            }
          ]
        };

        const existingScript = document.getElementById('faq-schema');
        if (!existingScript) {
          const script = document.createElement('script');
          script.id = 'faq-schema';
          script.type = 'application/ld+json';
          script.innerHTML = JSON.stringify(faqSchema);
          document.head.appendChild(script);
        }
      } else if (slug === 'why-cold-emails-not-getting-replies') {
        const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why are my cold emails going to spam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cold emails typically land in spam due to misconfigured technical records (SPF, DKIM, DMARC), a high bounce rate from unverified lists, or sending from a domain with no warmup history. Run a deliverability audit using tools like MXToolbox before blaming your content."
              }
            },
            {
              "@type": "Question",
              "name": "What is a good reply rate for cold emails?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A healthy cold email reply rate is generally 3–5%. If you're getting below 1%, the issue is usually the copy structure, the targeting quality, or both. Open rates between 20–30% indicate healthy deliverability."
              }
            },
            {
              "@type": "Question",
              "name": "How many follow-up emails should I send in a cold outreach sequence?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Three to four follow-up emails spread across two to three weeks is a proven standard. Each email should introduce new value — a relevant insight, resource, or angle — rather than simply re-asking the same question."
              }
            },
            {
              "@type": "Question",
              "name": "How do I improve my cold email open rate?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Start by verifying your technical setup (SPF, DKIM, DMARC), then clean your list with a verification tool. Once deliverability is confirmed, test subject line variations — short vs. long, questions vs. statements, personalized vs. general — using batches of 200+ emails per variant."
              }
            },
            {
              "@type": "Question",
              "name": "Why is no one replying to my cold emails even though they're being opened?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Low reply rates on decent open rates almost always indicate a copy problem. The most common culprits are company-first openers (\"We help businesses…\"), feature-heavy messaging instead of problem-focused framing, and high-pressure asks like 30-minute meetings in the first email."
              }
            },
            {
              "@type": "Question",
              "name": "How do I build a clean cold email list?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use list verification tools like ZeroBounce or NeverBounce to remove invalid addresses, dead inboxes, and role-based accounts (info@, support@). Also filter out anyone who has previously unsubscribed or submitted a spam complaint."
              }
            }
          ]
        };

        const existingScript = document.getElementById('faq-schema');
        if (!existingScript) {
          const script = document.createElement('script');
          script.id = 'faq-schema';
          script.type = 'application/ld+json';
          script.innerHTML = JSON.stringify(faqSchema);
          document.head.appendChild(script);
        }
      }
    }
  }, [post, slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white mb-4">Post Not Found</h1>
          <Link to="/blogs" className="text-gold hover:underline">Return to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link to="/blogs" className="text-white/40 hover:text-white mb-8 inline-flex items-center gap-2 text-sm transition-colors uppercase tracking-wider font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-4 text-xs text-gold uppercase tracking-widest font-bold mb-6">
            <span className="px-3 py-1 bg-gold/10 rounded-full border border-gold/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-white/50 uppercase tracking-wider font-semibold border-y border-white/5 py-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-3">
              {post.author?.avatar ? (
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
              ) : (
                <User className="w-4 h-4" />
              )}
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="text-white font-medium capitalize text-xs tracking-normal mt-0.5">{post.author?.name || post.author}</span>
                {post.author?.role && <span className="text-[9px] text-white/40 tracking-widest">{post.author.role}</span>}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden mb-16 h-[50vh] relative"
        >
          <div className="absolute inset-0 bg-black/20" />
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-invert prose-gold max-w-none text-white/80 leading-relaxed font-light text-lg"
        >
          <Markdown
            components={{
              h2: ({node, ...props}) => <h2 className="text-3xl font-medium mt-16 mb-8 text-white" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-2xl font-medium mt-12 mb-6 text-white" {...props} />,
              p: ({node, ...props}) => <p className="mb-6 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-3" {...props} />,
              li: ({node, ...props}) => <li className="pl-2 marker:text-gold" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-2 border-gold pl-6 py-2 my-8 bg-gold/5 rounded-r-lg text-white/90 italic" {...props} />
              ),
              strong: ({node, ...props}) => <strong className="font-semibold text-white" {...props} />,
              code: ({node, ...props}) => <code className="bg-white/10 px-2 py-0.5 rounded text-gold text-sm font-mono" {...props} />
            }}
          >
            {post.content}
          </Markdown>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-white/5"
        >
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center">
  <h3 className="text-2xl mb-4">Want a deliverability audit for your current sending setup?</h3>
  <p className="text-white/50 mb-8 max-w-lg">
    Get an expert analysis of your cold email infrastructure and stay out of the spam folder.
  </p>
  <Link 
    to="/contact"
    className="bg-gold text-black font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gold/90 transition-all"
  >
    Book an Audit <ArrowUpRight className="w-4 h-4" />
  </Link>
</div>
        </motion.div>
      </div>
    </article>
  );
};
