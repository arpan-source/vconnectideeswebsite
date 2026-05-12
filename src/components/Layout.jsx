import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className="text-white selection:bg-gold/30 selection:text-white min-h-screen relative">
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};
