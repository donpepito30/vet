/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Ricardo V.',
    rating: 5,
    content: 'La atención es impecable. Salvaron a mi perro Bruno después de un accidente complicado. Estaré eternamente agradecido con todo el equipo médico.',
    image: 'https://i.pravatar.cc/150?u=ricardo'
  },
  {
    id: '2',
    author: 'Mariana S.',
    rating: 5,
    content: 'Excelentes instalaciones y un trato muy profesional. Se nota que aman lo que hacen. Llevo a mis dos gatos desde hace años y siempre es genial.',
    image: 'https://i.pravatar.cc/150?u=mariana'
  },
  {
    id: '3',
    author: 'Juan P.',
    rating: 5,
    content: 'El servicio de urgencias 24h es real y muy eficiente. Me atendieron a las 3 AM con la misma amabilidad y profesionalismo que en el día.',
    image: 'https://i.pravatar.cc/150?u=juan'
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-primary/[0.02] rounded-bl-[10rem] -z-10"></div>
      
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
          Historias que nos inspiran
        </motion.span>
        <motion.h2
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          className="text-4xl md:text-6xl text-primary font-black mb-10 leading-tight"
        >
          Lo Que Dicen <br /> <span className="text-accent italic">Nuestros Clientes</span>
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -15 }}
            className="card-premium p-12 relative group bg-neutral/30 border-none hover:bg-white hover:shadow-premium"
          >
            <div className="flex gap-1 mb-10">
              {[...Array(t.rating)].map((_, star) => (
                <Star key={star} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>

            <Quote className="text-secondary/20 w-16 h-16 absolute top-10 right-10" />

            <p className="text-primary font-bold italic text-xl leading-relaxed mb-12 relative z-10">
              "{t.content}"
            </p>

            <div className="flex items-center gap-6 mt-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary rounded-full blur-[8px] opacity-20 scale-110"></div>
                <img src={t.image} alt={t.author} className="relative z-10 w-16 h-16 rounded-full border-4 border-white shadow-soft object-cover" />
              </div>
              <div>
                <p className="text-primary font-black text-lg mb-1">{t.author}</p>
                <p className="text-text-secondary text-[11px] font-black uppercase tracking-[0.2em] opacity-60">Propietario de Mascota</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
