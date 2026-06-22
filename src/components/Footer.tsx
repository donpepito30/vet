/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PawPrint, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink pt-32 pb-16 text-white relative overflow-hidden">
      {/* Background Image Translucent */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
          alt="Translucent background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"></div>
      </div>

      {/* Decorative Text */}
      <div className="absolute top-10 right-10 text-[10vw] font-black text-white/[0.02] select-none pointer-events-none uppercase leading-none">
        Elite Care
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-10 group">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center transition-all group-hover:rotate-6">
                <PawPrint className="text-white w-7 h-7 fill-white" />
              </div>
              <span className="text-3xl font-display font-black tracking-tighter">
                VetCare<span className="text-accent">Elite</span>
              </span>
            </a>
            <p className="text-white/40 mb-10 leading-relaxed font-medium text-sm">
              Referentes en medicina veterinaria avanzada. Combinamos ciencia, tecnología y empatía para el bienestar absoluto de cada paciente.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-accent mb-10">Servicios</h4>
            <ul className="space-y-6">
              {['Cirugía Avanzada', 'Diagnóstico por Imagen', 'Cardiología', 'Hospitalización 24/7', 'Oncología', 'Oftalmología'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm font-medium border-b border-transparent hover:border-accent pb-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-accent mb-10">Nuestra Clínica</h4>
            <ul className="space-y-6">
              {['Sobre Nosotros', 'Nuestro Equipo', 'Testimonios', 'Sostenibilidad', 'Carreras', 'Blog Médico'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm font-medium border-b border-transparent hover:border-accent pb-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 p-10 rounded-[3.5rem] border border-accent/20 backdrop-blur-md">
            <h4 className="text-xl font-black mb-6 text-white">¿Necesitas ayuda?</h4>
            <p className="text-white/40 text-sm mb-10 font-medium leading-relaxed">Estamos disponibles telefónicamente las 24 horas para cualquier urgencia.</p>
            <a
              href="tel:+541145678900"
              className="block w-full bg-accent text-white text-center py-5 rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-lg shadow-black/20 hover:-translate-y-1 hover:bg-white hover:text-accent"
            >
              Llamar ahora
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 text-[11px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} VetCare Elite. All Rights Reserved. Crafted with Excellence.
          </p>
          <div className="flex gap-10">
            {['Política de Privacidad', 'Términos de Servicio', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white transition-colors text-[11px] font-black uppercase tracking-widest">
                {item}
              </a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/50 font-black text-[11px] uppercase tracking-widest hover:text-accent transition-colors"
          >
            Volver arriba
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
