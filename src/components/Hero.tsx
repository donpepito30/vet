/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Clock, Award, Star, Heart, ArrowRight, Play } from 'lucide-react';

const carouselItems = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2074&auto=format&fit=crop',
    title: 'Cuidamos a quienes te acompañan',
    highlight: 'toda la vida.',
    subtitle: 'Atención veterinaria de élite con tecnología de vanguardia y amor incondicional.'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=2148&auto=format&fit=crop',
    title: 'Salud y bienestar para tus',
    highlight: 'mejores amigos.',
    subtitle: 'Especialistas certificados dedicados a la medicina preventiva y cuidados intensivos.'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1537151625747-7ae05d21469b?q=80&w=2187&auto=format&fit=crop',
    title: 'Vínculos inquebrantables,',
    highlight: 'salud garantizada.',
    subtitle: 'Instalaciones diseñadas para reducir el estrés y garantizar la mejor recuperación.'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Preload all carousel images
    carouselItems.forEach((item) => {
      const img = new Image();
      img.src = item.url;
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink flex flex-col pt-24 lg:pt-32">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-ink/20 z-10"></div>
            <img
              src={carouselItems[currentSlide].url}
              alt="Vet Care"
              className="w-full h-full object-cover opacity-85"
              {...(currentSlide === 0 ? { fetchPriority: "high" } : {})}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent z-20"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-30 flex flex-col justify-center flex-grow py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-8 text-center lg:text-left">
            <motion.div
              key={`content-${currentSlide}`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 }
                }
              }}
            >
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 lg:mb-8 text-white -tracking-wider font-display font-black"
              >
                {carouselItems[currentSlide].title} <br className="hidden sm:block" />
                <span className="text-accent italic whitespace-nowrap">
                  {carouselItems[currentSlide].highlight}
                </span>
              </motion.h1>
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-lg md:text-xl text-white/70 mb-10 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                {carouselItems[currentSlide].subtitle}
              </motion.p>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-12 lg:mb-16 items-center justify-center lg:justify-start"
              >
                <a
                  href="#contacto"
                  className="group w-full sm:w-auto bg-accent hover:bg-white text-ink text-center px-8 lg:px-12 py-5 lg:py-6 rounded-full font-black text-base lg:text-lg transition-all shadow-xl shadow-accent/20 hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-3 border-2 border-transparent hover:border-accent"
                >
                  RESERVAR CONSULTA
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#servicios"
                  className="group w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-center px-8 lg:px-12 py-5 lg:py-6 rounded-full font-black text-base lg:text-lg transition-all hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-3"
                >
                  VER SERVICIOS
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                    <Play size={14} className="fill-ink text-ink ml-0.5" />
                  </div>
                </a>
              </motion.div>

              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                className="flex flex-wrap gap-8 lg:gap-16 items-center justify-center lg:justify-start"
              >
                {[
                  { value: '15k+', label: 'Mascotas' },
                  { value: '25+', label: 'Años' },
                  { value: '4.9/5', label: 'Rating' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center lg:items-start">
                    <div className="text-3xl lg:text-4xl font-black text-accent font-display mb-1">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <div className="hidden xl:flex flex-col gap-6 lg:col-span-4 justify-end items-end">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] max-w-[280px] shadow-premium"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
                  <Clock size={24} className="stroke-[2.5]" />
                </div>
                <div className="text-2xl font-black text-white">24/7</div>
              </div>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest leading-relaxed">
                Hospitalización y emergencia activa en tiempo real.
              </p>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="bg-accent p-8 rounded-[40px] max-w-[280px] shadow-2xl shadow-accent/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                  <Heart size={24} className="fill-white" />
                </div>
                <div className="text-2xl font-black text-ink">Elite</div>
              </div>
              <p className="text-xs font-black text-ink/60 uppercase tracking-widest leading-relaxed">
                Referente internacional en medicina interna veterinaria.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {carouselItems.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentSlide === i ? 'w-12 bg-accent' : 'w-4 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Background Decorative Text */}
      <motion.div 
        className="absolute top-[45%] left-0 w-full text-center select-none pointer-events-none opacity-[0.05] z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.05, 
          scale: 1,
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 2, 
          ease: "easeOut",
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <span className="text-[25vw] font-black leading-none uppercase -translate-y-1/2 text-white">VET-ELITE</span>
      </motion.div>

      {/* Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ink to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
