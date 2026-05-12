import React, { useEffect } from "react";
import Lenis from "lenis";

export const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Fix footer anchor links (#faq / #results)
    const handleHashScroll = () => {
      const hash = window.location.hash;

      if (hash) {
        const target = document.querySelector(hash);

        if (target) {
          setTimeout(() => {
            lenis.scrollTo(target, {
              offset: -20,
              duration: 1.5,
            });
          }, 100);
        }
      }
    };

    // Run on page load
    handleHashScroll();

    // Run whenever URL changes
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return <>{children}</>;
};