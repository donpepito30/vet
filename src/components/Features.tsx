/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Cpu, HeartPulse, UserCheck, Building2, CalendarRange, Microscope, PawPrint } from 'lucide-react';

export default function Features() {
  const highlights = [
    {
      title: 'Tecnología Avanzada',
      desc: 'Equipamiento de última generación para diagnósticos milimétricos.',
      icon: Cpu
    },
    {
      title: 'Atención Humanizada',
      desc: 'Para nosotros, cada paciente es parte de nuestra familia.',
      icon: HeartPulse
    },
    {
      title: 'Diagnóstico Preciso',
      desc: 'Médicos especialistas dedicados al análisis exhaustivo.',
      icon: Microscope
    },
    {
      title: 'Profesionales Capacitados',
      desc: 'Equipo en constante formación internacional y científica.',
      icon: UserCheck
    },
    {
      title: 'Instalaciones Modernas',
      desc: 'Espacios diseñados para el bienestar y la bioseguridad.',
      icon: Building2
    },
    {
      title: 'Disponibilidad Ampliada',
      desc: 'Horarios flexibles y atención prioritaria inmediata.',
      icon: CalendarRange
    },
  ];

  return (
    <section id="nosotros" className="section-padding bg-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="absolute -inset-4 border-2 border-accent/20 rounded-[4rem] translate-x-4 translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop"
              alt="Veterinaria feliz con perro"
              className="relative z-10 rounded-[3.5rem] shadow-premium object-cover aspect-square md:aspect-auto"
            />
            {/* Float Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-10 bg-accent p-10 rounded-[2.5rem] shadow-premium hidden md:block max-w-[220px] text-white border-4 border-white"
            >
              <span className="text-5xl font-black block mb-2 font-display">99%</span>
              <p className="text-xs font-black uppercase tracking-widest leading-tight opacity-90">Éxito en casos complejos</p>
            </motion.div>
          </motion.div>
          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-[100px] z-0"></div>
        </div>

        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="lg:w-1/2"
        >
          <motion.span
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 }
            }}
            className="text-accent font-black tracking-[0.25em] uppercase text-[11px] mb-4 block"
          >
            Nuestra Excelencia
          </motion.span>
          <motion.h2
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-6xl text-primary font-black mb-10 leading-tight"
          >
            ¿Por qué <span className="text-accent">elegir</span> <br /> nuestra clínica?
          </motion.h2>
          
          <motion.div 
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-neutral rounded-2xl flex items-center justify-center border border-black/[0.03] group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-10 bg-neutral/30 rounded-[3rem] border border-accent/20 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            <div className="relative z-10 flex -space-x-4 overflow-hidden">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  className="inline-block h-14 w-14 rounded-full ring-4 ring-neutral"
                  src={`https://i.pravatar.cc/100?img=${i + 15}`}
                  alt={`Satisfecha ${i}`}
                />
              ))}
            </div>
            <div className="relative z-10">
              <p className="text-primary font-black text-xl mb-1">+5,000 Familias</p>
              <p className="text-text-secondary text-sm font-medium">Confían en nosotros mensualmente.</p>
            </div>
            {/* Background Paw Print */}
            <PawPrint className="absolute -right-4 -bottom-4 w-40 h-40 text-primary opacity-[0.03] rotate-12" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
