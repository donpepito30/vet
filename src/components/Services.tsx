/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, Syringe, Scissors, Heart, FlaskConical, Microscope, 
  Activity, Zap, Brush, Utensils, Bone, Scan, ShieldCheck, Send
} from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: '1', title: 'Consulta General', description: 'Evaluación exhaustiva preventiva y diagnóstica para tu mascota.', icon: Stethoscope },
  { id: '2', title: 'Vacunación', description: 'Planes inmunológicos personalizados y calendarios obligatorios.', icon: Syringe },
  { id: '3', title: 'Cirugía de Mínima Invasión', description: 'Procedimientos avanzados con tecnología de punta y recuperación rápida.', icon: Scissors },
  { id: '4', title: 'Laboratorio de Alta Complejidad', description: 'Resultados precisos e inmediatos en nuestras propias instalaciones.', icon: FlaskConical },
  { id: '5', title: 'Hospitalización Monitoreada', description: 'Cuidado intensivo con vigilancia profesional las 24 horas del día.', icon: Heart },
  { id: '6', title: 'Rayos X Digital', description: 'Imágenes diagnósticas de alta definición para diagnósticos óseos.', icon: Scan },
  { id: '7', title: 'Ecografía Doppler', description: 'Exploración por ultrasonido para evaluar órganos y circulación.', icon: Activity },
  { id: '8', title: 'Odontología Veterinaria', description: 'Limpieza, prevención y cirugía oral para una sonrisa sana.', icon: Bone },
  { id: '9', title: 'Medicina Preventiva', description: 'Programas de bienestar especializados por edad y raza.', icon: ShieldCheck },
  { id: '10', title: 'Desparasitación', description: 'Control integral de parásitos internos y externos.', icon: Zap },
  { id: '11', title: 'Peluquería & Estética', description: 'Cuidado dermatológico y estilismo profesional con amor.', icon: Brush },
  { id: '12', title: 'Nutrición Clínica', description: 'Dietas terapéuticas y asesoramiento nutricional personalizado.', icon: Utensils },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white/50 section-padding relative overflow-hidden">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-0 w-full h-full -z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary rounded-full blur-[100px]"></div>
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
          Excelencia en medicina
        </motion.span>
        <motion.h2 
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          className="text-4xl md:text-6xl text-primary font-black mb-8 leading-tight"
        >
          Nuestros Servicios <span className="text-accent underline decoration-accent/20 underline-offset-8">Especializados</span>
        </motion.h2>
        <motion.p 
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          className="text-text-secondary max-w-2xl mx-auto text-lg font-medium"
        >
          Ofrecemos una gama completa de especialidades médicas avanzadas para garantizar la salud integral de tu mejor amigo.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -15 }}
            className="group card-premium p-10 hover:shadow-premium hover:border-accent/30 flex flex-col items-start h-full"
          >
            <div className="w-16 h-16 bg-neutral rounded-2xl flex items-center justify-center mb-10 group-hover:bg-accent transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-sm border border-black/5 group-hover:border-accent/20">
              <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl text-primary mb-5 font-black leading-tight tracking-tight group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-8 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              {service.description}
            </p>
            <div className="mt-auto pt-6 border-t border-black/[0.03] w-full flex justify-between items-center">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent group-hover:text-primary transition-colors">
                Detalles del Servicio
              </span>
              <div className="w-8 h-8 rounded-full bg-neutral flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                <Send size={12} className="rotate-[-45deg] group-hover:rotate-0 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
