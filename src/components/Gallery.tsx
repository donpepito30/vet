/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop', alt: 'Consultorios modernos', category: 'Instalaciones' },
  { src: 'https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=2070&auto=format&fit=crop', alt: 'Cuidado gatuno', category: 'Pacientes' },
  { src: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop', alt: 'Equipamiento médico', category: 'Tecnología' },
  { src: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=2070&auto=format&fit=crop', alt: 'Veterinaria operando', category: 'Cirugía' },
  { src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop', alt: 'Perros felices', category: 'Pacientes' },
  { src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop', alt: 'Gatito en consulta', category: 'Pacientes' },
  { src: 'https://images.unsplash.com/photo-1606208427954-aa8319c4815e?q=80&w=1974&auto=format&fit=crop', alt: 'Recepción elegante', category: 'Hospitalización' },
  { src: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2070&auto=format&fit=crop', alt: 'Microscopio avanzado', category: 'Tecnología' },
];

export default function Gallery() {
  return (
    <section className="bg-white">
      <div className="section-padding !pb-0">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="text-center mb-16"
        >
          <motion.span
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 }
            }}
            className="text-accent font-black tracking-[0.25em] uppercase text-[11px] mb-4 block"
          >
            Nuestro día a día
          </motion.span>
          <motion.h2
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-6xl text-primary font-black mb-6"
          >
            Galería <span className="text-accent italic">Fotográfica</span>
          </motion.h2>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 px-4 pb-20 gap-4 max-w-[1920px] mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-square overflow-hidden rounded-3xl cursor-pointer"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Info */}
            <div className="absolute inset-x-4 bottom-4 glass-effect p-4 rounded-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
              <span className="text-[10px] uppercase tracking-widest text-secondary font-black block mb-1">
                {img.category}
              </span>
              <p className="text-primary font-bold text-sm">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
