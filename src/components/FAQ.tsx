/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, PawPrint } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: '¿Cuáles son sus horarios de atención?',
    answer: 'Atendemos consultas generales de Lunes a Sábado de 8:00 AM a 8:00 PM. Sin embargo, nuestro servicio de URGENCIAS funciona las 24 horas, los 365 días del año.'
  },
  {
    question: '¿Necesito agendar una cita para vacunación?',
    answer: 'Sí, recomendamos agendar una cita para garantizar que tengamos la vacuna disponible y reducir el tiempo de espera de tu mascota, asegurando una experiencia tranquila.'
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Aceptamos efectivo, todas las tarjetas de crédito/débito, transferencias bancarias y convenios con las principales aseguradoras de mascotas del país.'
  },
  {
    question: '¿Cuentan con servicio de hospitalización nocturna?',
    answer: 'Sí, disponemos de un área de hospitalización completamente equipada con técnicos y médicos veterinarios que vigilan a los pacientes durante toda la noche.'
  },
  {
    question: '¿Realizan cirugías complejas?',
    answer: 'Contamos con quirófanos de alta tecnología y cirujanos especializados en traumatología, tejidos blandos y cirugía reconstructiva para casos complejos.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">
        <div className="lg:w-1/3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary font-black tracking-[0.25em] uppercase text-[11px] mb-4 block"
          >
            Resolvemos tus dudas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-primary font-black mb-10 leading-tight"
          >
            Preguntas Frecuentes
          </motion.h2>
          <p className="text-text-secondary mb-12 text-lg font-medium">
            Si no encuentras la respuesta que buscas, no dudes en contactarnos directamente a través de nuestro formulario o teléfono de atención.
          </p>
          <div className="bg-primary p-12 rounded-[3.5rem] text-white shadow-premium relative overflow-hidden group">
            {/* Background Paw */}
            <PawPrint className="absolute -right-8 -bottom-8 w-48 h-48 text-white opacity-[0.05] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <HelpCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-black mb-4">¿Aún tienes dudas?</h3>
              <p className="text-white/70 mb-10 italic leading-relaxed">"Nuestro compromiso es la transparencia absoluta y el bienestar de tu mascota."</p>
              <a href="#contacto" className="inline-flex items-center gap-2 text-secondary font-black hover:translate-x-2 transition-transform uppercase tracking-widest text-xs">
                Habla con nosotros directamente →
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-[2rem] transition-all duration-500 overflow-hidden ${
                openIndex === i ? 'bg-neutral ring-1 ring-secondary/20 shadow-premium' : 'bg-white border border-black/[0.03] hover:border-secondary/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-10 flex justify-between items-center gap-6"
              >
                <span className={`text-xl font-black transition-colors ${openIndex === i ? 'text-primary' : 'text-text-main'}`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-secondary text-white rotate-180' : 'bg-neutral text-text-secondary'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-10 pb-10 text-text-secondary leading-relaxed font-medium text-[15px] max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
