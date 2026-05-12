/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { SmoothScroll } from './components/SmoothScroll';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Process } from './pages/Process';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Blogs } from './pages/Blogs';
import { BlogPost } from './pages/BlogPost';

export default function App() {
  return (
    <SmoothScroll>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Layout>
      </Router>
    </SmoothScroll>
  );
}
