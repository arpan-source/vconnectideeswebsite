import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 md:left-0 md:right-0 z-50 px-4 md:px-6 max-w-6xl md:mx-auto flex items-center justify-between transition-all duration-300">
        <Link
          to="/"
          className={cn(
            "flex items-center group rounded-full h-[52px] px-5 transition-all duration-500",
            isScrolled
              ? "liquid-glass border border-white/10"
              : "bg-transparent"
          )}
        >
          <Logo className="h-7 md:h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Desktop Nav */}
        <div
          className={cn(
            "hidden md:flex items-center gap-1 p-1 rounded-full transition-all duration-500",
            isScrolled ? "liquid-glass" : "bg-transparent",
          )}
        >
          <div className="flex items-center px-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-4 py-2 text-[13px] transition-colors",
                  location.pathname === item.path
                    ? "text-gold font-bold"
                    : "text-white/70 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <a
            href="#book"
            className="bg-gold text-black font-bold text-[13px] px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-gold/90 transition-all active:scale-95"
          >
            Book a Call <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle - Only position fixed, shape unchanged */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href="#book"
            className="bg-gold text-black font-bold text-[11px] px-4 py-2 rounded-full flex items-center gap-1 hover:bg-gold/90 transition-all"
          >
            Book <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 pb-10 px-6 md:hidden">
          <div className="flex flex-col items-center gap-8 w-full max-w-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-2xl transition-colors",
                  location.pathname === item.path
                    ? "text-gold font-bold"
                    : "text-white/70 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};