/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    petType: 'Perro',
    reason: 'Consulta General',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormState({
      name: '',
      phone: '',
      email: '',
      petType: 'Perro',
      reason: 'Consulta General',
      message: ''
    });
    // Reset after some time
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  return (
    <section id="contacto" className="section-padding bg-primary relative overflow-hidden">
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-ink/60 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white p-12 md:p-20 rounded-[4rem] shadow-premium text-center max-w-xl border border-black/5"
            >
              <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-10">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                  <Send className="text-white w-8 h-8 translate-x-0.5 -translate-y-0.5" />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">¡Solicitud de Cita Enviada!</h3>
              <p className="text-text-secondary font-medium text-lg leading-relaxed mb-12">
                Hemos recibido tu solicitud de consulta. Un especialista de <span className="text-primary font-black">VetCare Elite</span> se contactará contigo en los próximos <span className="text-secondary font-black">15 minutos</span> para confirmar tu horario.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-accent text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-cta-hover transition-all shadow-xl shadow-accent/20 hover:-translate-y-1 active:scale-95"
              >
                CERRAR VENTANA
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-white rounded-full blur-[140px]"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[140px]"
        ></motion.div>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 relative z-10">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="lg:w-2/5 text-white"
        >
          <motion.span
            variants={{
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 }
            }}
            className="text-accent font-black tracking-[0.25em] uppercase text-[11px] mb-4 block"
          >
            Estamos aquí para ayudarte
          </motion.span>
          <motion.h2
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-6xl font-display font-black mt-3 mb-12 leading-tight"
          >
            Reserva una Cita <br /> <span className="text-accent italic">de Excelencia</span>
          </motion.h2>
          
          <motion.div 
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-10 mt-12 mb-16"
          >
            <motion.div 
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 }
              }}
              className="flex gap-6 group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-accent group-hover:scale-110">
                <Phone className="text-accent w-7 h-7" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em] mb-2">Línea de Urgencias 24/7</p>
                <p className="text-2xl font-black">+54 (11) 4567-8900</p>
              </div>
            </motion.div>
            <motion.div 
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 }
              }}
              className="flex gap-6 group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-accent group-hover:scale-110">
                <Mail className="text-accent w-7 h-7" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em] mb-2">Consultas Generales</p>
                <p className="text-2xl font-black">elite@vetcarepro.com</p>
              </div>
            </motion.div>
            <motion.div 
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 }
              }}
              className="flex gap-6 group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-accent group-hover:scale-110">
                <MapPin className="text-accent w-7 h-7" />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.2em] mb-2">Sede Central</p>
                <p className="text-2xl font-black">Av. del Libertador 4500, Buenos Aires</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
            className="p-10 bg-white/5 rounded-[3.5rem] border border-white/10 backdrop-blur-md"
          >
            <h4 className="flex items-center gap-3 text-2xl font-black mb-8">
              <Clock className="text-accent w-7 h-7" />
              Horarios Habituels
            </h4>
            <div className="grid grid-cols-2 gap-8 text-[15px] font-medium leading-relaxed">
              <div>
                <p className="text-white/40 font-bold mb-1">Lunes a Viernes</p>
                <p className="font-black text-lg">08:00 - 20:00</p>
              </div>
              <div>
                <p className="text-white/40 font-bold mb-1">Fines de Semana</p>
                <p className="font-black text-lg">09:00 - 18:00</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="lg:w-3/5">
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white p-12 md:p-20 rounded-[4rem] shadow-premium space-y-10 border border-black/5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary ml-1">Nombre del Propietario</label>
                <input
                  required
                  type="text"
                  placeholder="Ej: Juan Pérez"
                  className="w-full bg-neutral border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none font-medium placeholder:opacity-30"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary ml-1">Teléfono Móvil</label>
                <input
                  required
                  type="tel"
                  placeholder="Ej: +54 9 11 ..."
                  className="w-full bg-neutral border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none font-medium placeholder:opacity-30"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary ml-1">Correo Electrónico Corporativo / Personal</label>
              <input
                required
                type="email"
                placeholder="juan@ejemplo.com"
                className="w-full bg-neutral border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none font-medium placeholder:opacity-30"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary ml-1">Paciente</label>
                <div className="relative">
                  <select
                    className="w-full bg-neutral border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none appearance-none cursor-pointer font-bold"
                    value={formState.petType}
                    onChange={(e) => setFormState({ ...formState, petType: e.target.value })}
                  >
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Ave</option>
                    <option>Exótico</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-primary opacity-50 pointer-events-none" size={18} />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary ml-1">Tipo de Servicio</label>
                <div className="relative">
                  <select
                    className="w-full bg-neutral border-none rounded-2xl px-6 py-5 focus:ring-2 focus:ring-secondary transition-all outline-none appearance-none cursor-pointer font-bold"
                    value={formState.reason}
                    onChange={(e) => setFormState({ ...formState, reason: e.target.value })}
                  >
                    <option>Consulta General</option>
                    <option>Vacunación</option>
                    <option>Cirugía Compleja</option>
                    <option>Estética de Lujo</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-primary opacity-50 pointer-events-none" size={18} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary ml-1">Observaciones Médicas Iniciales</label>
              <textarea
                rows={4}
                placeholder="Describa brevemente la situación clínica..."
                className="w-full bg-neutral border-none rounded-3xl px-6 py-6 focus:ring-2 focus:ring-secondary transition-all outline-none resize-none font-medium placeholder:opacity-30"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent hover:bg-cta-hover text-white py-6 rounded-full font-black text-xl shadow-[0_20px_50px_-10px_rgba(255,140,66,0.3)] flex items-center justify-center gap-4 transition-all hover:-translate-y-1.5 active:scale-95"
            >
              CONFIRMAR SOLICITUD DE CITA
              <Send className="w-6 h-6" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
