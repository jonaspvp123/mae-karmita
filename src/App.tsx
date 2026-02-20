/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Authority from './components/Authority';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-gold-400 selection:text-graphite-950">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <About />
        <Services />
        <Process />
        <Banner />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
