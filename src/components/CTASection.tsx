/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function CTASection() {
  return (
    <section className="section-padding py-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-ink rounded-[4rem] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-premium"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-accent"></div>
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/30 rounded-full blur-[120px]"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-black tracking-[0.3em] uppercase text-[11px] mb-8 block"
          >
            Disponibilidad Inmediata
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-12 leading-[0.95] tracking-tighter"
          >
            ¿Tu mejor amigo necesita <br /> <span className="text-accent italic">atención experta?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/60 mb-16 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Nuestro equipo de especialistas está activo para brindarte tranquilidad absoluta en cada paso del camino.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="bg-accent hover:bg-white hover:text-ink text-white px-12 py-6 rounded-full font-black text-xl transition-all shadow-xl shadow-accent/20 border-2 border-transparent hover:border-accent"
            >
              AGENDAR CITA AHORA
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+541145678900"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/20 text-white px-12 py-6 rounded-full font-black text-xl transition-all"
            >
              LLAMAR A URGENCIAS
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
