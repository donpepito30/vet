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

  const forceSolid = currentPage !== 'home';
  const showScrolledStyle = forceSolid || isScrolled;

  const navLinks = [
    { name: 'Inicio', href: '#', activeKey: 'home' },
    { name: 'Servicios', href: '#servicios', activeKey: 'services' },
    { name: 'Nosotros', href: '#nosotros', activeKey: 'nosotros' },
    { name: 'Equipo', href: '#equipo', activeKey: 'equipo' },
    { name: 'FAQ', href: '#faq', activeKey: 'faq' },
    { name: 'Contacto', href: '#contacto', activeKey: 'contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showScrolledStyle ? 'glass-effect py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border-b border-neutral/30' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="flex items-center gap-3 group"
          initial="initial"
          whileHover="hover"
        >
          <motion.div 
            className="relative w-12 h-12 flex items-center justify-center"
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1 }
            }}
          >
            {/* Energy pulse background */}
            <motion.div 
              className="absolute inset-0 bg-accent rounded-xl opacity-20 blur-md"
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
              className="relative w-full h-full bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 z-10"
              variants={{
                initial: { rotate: 0 },
                hover: { rotate: 12, transition: { type: "spring", stiffness: 300 } }
              }}
            >
              <PawPrint className="text-white w-7 h-7 fill-white" />
            </motion.div>
          </motion.div>

          <div className="flex flex-col">
            <motion.span 
              className={`text-2xl font-display font-black tracking-tighter leading-none transition-colors ${showScrolledStyle ? 'text-primary' : 'text-white'}`}
              variants={{
                initial: { x: 0 },
                hover: { x: 2 }
              }}
            >
              <motion.span 
                className="inline-block"
                variants={{
                  initial: { y: 0 },
                  hover: { y: -2, transition: { type: "spring", stiffness: 400 } }
                }}
              >
                VetCare
              </motion.span>
              <motion.span 
                className="text-accent italic relative inline-block ml-1"
                variants={{
                  initial: { scale: 1 },
                  hover: { 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 500, damping: 10 }
                  }
                }}
              >
                Elite
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent"
                  initial={{ scaleX: 0 }}
                  variants={{
                    initial: { scaleX: 0 },
                    hover: { scaleX: 1, transition: { duration: 0.3 } }
                  }}
                />
              </motion.span>
            </motion.span>
            <motion.span 
              className="text-[8px] font-black uppercase tracking-[0.4em] text-accent/60 leading-none mt-1"
              variants={{
                initial: { opacity: 0.6, x: -5 },
                hover: { opacity: 1, x: 0, transition: { delay: 0.1 } }
              }}
            >
              Premium Veterinary
            </motion.span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = currentPage === link.activeKey;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] font-extrabold tracking-[0.15em] uppercase transition-all hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:transition-all ${
                  isActive ? 'text-accent after:w-full' : 'after:w-0 hover:after:w-full'
                } ${
                  showScrolledStyle 
                    ? isActive ? 'text-accent' : 'text-ink'
                    : isActive ? 'text-accent' : 'text-white/90 hover:text-accent'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="#contacto"
            className="bg-accent hover:bg-cta-hover text-white px-8 py-3.5 rounded-full text-[13px] font-black tracking-widest transition-all shadow-xl shadow-accent/20 hover:-translate-y-1 active:scale-95"
          >
            AGENDAR CITA
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            showScrolledStyle ? 'text-ink' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden py-8 px-6 border-t border-neutral"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = currentPage === link.activeKey;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-black transition-colors uppercase tracking-widest ${
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
                className="bg-accent text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-accent/20"
              >
                Agendar cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
