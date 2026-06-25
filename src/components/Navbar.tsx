/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, PawPrint } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ currentPage }: { currentPage: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync scroll state when changing pages
  useEffect(() => {
    setIsScrolled(window.scrollY > 20);
  }, [currentPage]);

  const isHome = currentPage === 'home';

  const navLinks = [
    { name: 'Inicio', href: '#', activeKey: 'home' },
    { name: 'Servicios', href: '#servicios', activeKey: 'services' },
    { name: 'Nosotros', href: '#nosotros', activeKey: 'nosotros' },
    { name: 'Equipo', href: '#equipo', activeKey: 'equipo' },
    { name: 'FAQ', href: '#faq', activeKey: 'faq' },
    { name: 'Contacto', href: '#contacto', activeKey: 'contacto' },
  ];

  // Dynamic header styles based on page context and scroll position
  let headerClasses = "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-500 border backdrop-blur-md ";
  if (isOpen) {
    headerClasses += "bg-white border-neutral-300/50 shadow-premium rounded-[2rem] py-5 px-6";
  } else if (isHome) {
    if (isScrolled) {
      headerClasses += "bg-white/85 border-neutral/40 shadow-premium py-2.5 px-3 md:px-5 rounded-full";
    } else {
      headerClasses += "bg-white/10 md:bg-black/15 border-white/10 shadow-soft py-4 px-5 md:px-7 rounded-full";
    }
  } else {
    if (isScrolled) {
      headerClasses += "bg-white/85 border-neutral/40 shadow-premium py-2.5 px-3 md:px-5 rounded-full";
    } else {
      headerClasses += "bg-white/45 border-neutral-200/50 shadow-soft py-4 px-5 md:px-7 rounded-full";
    }
  }

  const useDarkText = isOpen || isScrolled || !isHome;

  return (
    <header className={headerClasses}>
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <motion.a 
          href="#" 
          className="flex items-center gap-3 group"
          initial="initial"
          whileHover="hover"
        >
          <motion.div 
            className="relative w-10 h-10 flex items-center justify-center"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 }
            }}
          >
            {/* Energy pulse background */}
            <motion.div 
              className="absolute inset-0 bg-accent rounded-full opacity-20 blur-md"
              variants={{
                initial: { scale: 0.8, opacity: 0 },
                hover: { 
                  scale: 1.4, 
                  opacity: 0.4,
                  transition: { 
                    repeat: Infinity, 
                    duration: 1.5, 
                    ease: "easeOut" 
                  }
                }
              }}
            />
            <motion.div 
              className="relative w-full h-full bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20 z-10"
              variants={{
                initial: { rotate: 0 },
                hover: { rotate: 12, transition: { type: "spring", stiffness: 300 } }
              }}
            >
              <PawPrint className="text-white w-5 h-5 fill-white" />
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            <motion.span 
              className={`text-xl font-display font-black tracking-tighter leading-none transition-colors duration-300 ${
                useDarkText ? 'text-primary' : 'text-white'
              }`}
            >
              <motion.span 
                className="inline-block"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -1, transition: { type: "spring", stiffness: 400 } }
                }}
              >
                VetCare
              </motion.span>
              <motion.span className="text-accent italic ml-1">
                Elite
              </motion.span>
            </motion.span>
            <span className={`text-[7px] font-black uppercase tracking-[0.35em] leading-none mt-1 transition-colors duration-300 ${
              useDarkText ? 'text-accent/70' : 'text-white/60'
            }`}>
              Premium Veterinary
            </span>
          </div>
        </motion.a>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentPage === link.activeKey;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 px-1 text-[13px] font-extrabold tracking-[0.12em] uppercase transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center ${
                  isActive 
                    ? 'text-accent after:scale-x-100' 
                    : useDarkText 
                      ? 'text-ink hover:text-accent' 
                      : 'text-white/95 hover:text-accent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA/Actions */}
        <div className="hidden lg:flex items-center">
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-accent hover:bg-cta-hover text-white px-6 py-3 rounded-full text-[12px] font-black tracking-widest transition-all shadow-md hover:shadow-lg shadow-accent/20"
          >
            AGENDAR CITA
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-full transition-colors duration-300 hover:bg-black/5 ${
            useDarkText ? 'text-ink' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-5 pt-6 pb-2 border-t border-neutral/30 mt-4">
              {navLinks.map((link) => {
                const isActive = currentPage === link.activeKey;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-black transition-colors uppercase tracking-widest py-1 ${
                      isActive ? 'text-accent' : 'text-ink hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-white text-center py-4 rounded-xl font-black uppercase tracking-widest shadow-md hover:bg-cta-hover transition-colors"
              >
                Agendar cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
