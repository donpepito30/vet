/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CalendarCheck, Stethoscope, ClipboardCheck, UserCheck, PawPrint } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: 'Agenda tu cita',
      desc: 'Reserva vía web o teléfono eligiendo el horario que mejor te convenga.',
      icon: CalendarCheck
    },
    {
      title: 'Evaluación médica',
      desc: 'Recepción y examen físico completo por nuestros jefes de área.',
      icon: Stethoscope
    },
    {
      title: 'Diagnóstico y plan',
      desc: 'Determinamos el origen del malestar y trazamos el plan de acción.',
      icon: ClipboardCheck
    },
    {
      title: 'Seguimiento',
      desc: 'Acompañamiento post-consulta para garantizar la recuperación total.',
      icon: UserCheck
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <PawPrint className="w-[80%] h-[80%] mx-auto" />
      </div>

      <div className="text-center mb-24 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-secondary font-black tracking-[0.25em] uppercase text-[11px] mb-4 block"
        >
          ¿Cómo trabajamos?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl text-primary font-black mb-10 leading-tight"
        >
          Nuestro Proceso de Atención
        </motion.h2>
      </div>

      <div className="relative z-10">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-[2.5rem] left-[10%] w-[80%] h-1 bg-neutral z-0 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-r from-primary to-secondary"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group text-center"
            >
              <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-premium flex items-center justify-center mx-auto mb-10 relative border border-black/[0.03] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <step.icon className="w-10 h-10 text-primary transition-transform duration-500 group-hover:text-secondary" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed px-6 font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
