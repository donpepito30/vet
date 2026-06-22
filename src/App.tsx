/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Process from './components/Process';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TrustBar from './components/TrustBar';
import { WhatsAppButton } from './components/WhatsAppButton';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  useEffect(() => {
    // Basic SEO Title update
    document.title = 'VetCare Elite | Clínica Veterinaria Premium - Emergencias 24/7';
    
    // Add meta description dynamically
    const metaDisc = document.querySelector('meta[name="description"]');
    if (metaDisc) {
      metaDisc.setAttribute('content', 'Atención veterinaria integral con tecnología moderna y profesionales comprometidos. Cuidamos a tu mascota con amor y excelencia 24/7.');
    }
  }, []);

  return (
    <div className="relative overflow-hidden selection:bg-secondary/30 selection:text-primary min-h-screen">
      {/* Dynamic Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden opacity-30">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[140px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]"
        ></motion.div>
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-accent/5 rounded-full blur-[80px]"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Features />
        <Process />
        <Team />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTASection />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

