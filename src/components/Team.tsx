/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Dra. Elena Rodríguez',
    role: 'Directora Médica & Cirugía',
    experience: '15 años de experiencia',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f15024d5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Dr. Alejandro Soto',
    role: 'Especialista en Medicina Interna',
    experience: '10 años de experiencia',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Dra. Sofía Martínez',
    role: 'Dermatología & Estética',
    experience: '8 años de experiencia',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Dr. Carlos Méndez',
    role: 'Anestesiología & Dolor',
    experience: '12 años de experiencia',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop'
  },
];

export default function Team() {
  return (
    <section id="equipo" className="section-padding bg-neutral/50 relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-1/2 left-0 w-full text-center select-none pointer-events-none opacity-[0.02] z-0">
        <span className="text-[20vw] font-black leading-none uppercase -translate-y-1/2">EXPERTS</span>
      </div>

      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="text-center mb-24 relative z-10"
      >
        <motion.span
          variants={{
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 }
          }}
          className="text-accent font-black tracking-[0.25em] uppercase text-[11px] mb-4 block"
        >
          Especialistas de Clase Mundial
        </motion.span>
        <motion.h2
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          className="text-4xl md:text-6xl text-primary font-black mb-8 leading-tight"
        >
          Conoce a Nuestros <span className="text-accent">Especialistas</span>
        </motion.h2>
        <motion.p
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          className="text-text-secondary max-w-2xl mx-auto text-lg font-medium"
        >
          Un equipo dedicado, certificado y apasionado por brindar el mejor cuidado a tus seres queridos.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -12 }}
            className="card-premium overflow-hidden border-none group bg-white/80 backdrop-blur-sm"
          >
            <div className="h-80 overflow-hidden relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-10 text-center relative z-10">
              <h3 className="text-2xl text-primary font-black mb-2">{member.name}</h3>
              <p className="text-secondary font-bold text-sm mb-6 tracking-tight uppercase tracking-widest">{member.role}</p>
              <div className="w-12 h-1 bg-secondary mx-auto mb-6 group-hover:w-24 transition-all duration-500 rounded-full"></div>
              <p className="text-text-secondary text-[11px] font-black uppercase tracking-[0.2em] opacity-60 italic">{member.experience}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
