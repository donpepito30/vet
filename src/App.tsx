/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import InternalHeader from './components/InternalHeader';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    let title = 'VetCare Elite | Clínica Veterinaria Premium - Emergencias 24/7';
    let description = 'Atención veterinaria integral con tecnología moderna y profesionales comprometidos. Cuidamos a tu mascota con amor y excelencia 24/7.';

    switch (currentPage) {
      case 'services':
        title = 'Servicios Veterinarios Avanzados | VetCare Elite';
        description = 'Especialidades veterinarias de alta complejidad: cirugía avanzada, cardiología, diagnóstico por imagen y hospitalización 24 horas.';
        break;
      case 'nosotros':
        title = 'Sobre Nosotros | Clínica Veterinaria de Excelencia | VetCare Elite';
        description = 'Conoce nuestra clínica veterinaria líder en medicina avanzada. Nuestro compromiso, valores, procesos certificados y amor por tu mascota.';
        break;
      case 'equipo':
        title = 'Nuestro Equipo de Especialistas Veterinarios | VetCare Elite';
        description = 'Conoce a nuestro plantel médico veterinario de excelencia: cirujanos, cardiólogos e intensivistas dedicados al bienestar integral.';
        break;
      case 'faq':
        title = 'Preguntas Frecuentes (FAQ) | VetCare Elite';
        description = 'Respuestas a todas tus consultas sobre atención de emergencias 24/7, reserva de turnos, preparación para cirugías y visitas de mascotas.';
        break;
      case 'contacto':
        title = 'Contacto y Ubicación de Urgencias | VetCare Elite';
        description = 'Agenda tu consulta o comunícate las 24 horas por emergencias. Dirección, mapa, teléfonos y formulario de contacto rápido.';
        break;
      default:
        break;
    }

    document.title = title;
    const metaDisc = document.querySelector('meta[name="description"]');
    if (metaDisc) {
      metaDisc.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [currentPage]);

  useEffect(() => {
    // Force redirect to home on page refresh/initial mount
    if (window.location.hash) {
      window.location.hash = '';
    }

    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      let page = 'home';
      if (hash === '#servicios') page = 'services';
      else if (hash === '#nosotros') page = 'nosotros';
      else if (hash === '#equipo') page = 'equipo';
      else if (hash === '#faq') page = 'faq';
      else if (hash === '#contacto') page = 'contacto';
      
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    setCurrentPage('home');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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

      {currentPage === 'home' && <Navbar currentPage={currentPage} />}
      
      <main>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero />
              <Footer />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-0"
            >
              <InternalHeader currentPage={currentPage} />
              <Services />
              <TrustBar />
              <Footer />
            </motion.div>
          )}

          {currentPage === 'nosotros' && (
            <motion.div
              key="nosotros"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-0"
            >
              <InternalHeader currentPage={currentPage} />
              <Features />
              <Process />
              <Footer />
            </motion.div>
          )}

          {currentPage === 'equipo' && (
            <motion.div
              key="equipo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-0"
            >
              <InternalHeader currentPage={currentPage} />
              <Team />
              <Gallery />
              <Testimonials />
              <Footer />
            </motion.div>
          )}

          {currentPage === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-0"
            >
              <InternalHeader currentPage={currentPage} />
              <FAQ />
              <Footer />
            </motion.div>
          )}

          {currentPage === 'contacto' && (
            <motion.div
              key="contacto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="pt-0"
            >
              <InternalHeader currentPage={currentPage} />
              <ContactForm />
              <CTASection />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <WhatsAppButton />
    </div>
  );
}

