import React from 'react';
import { ArrowLeft, PawPrint } from 'lucide-react';
import { motion } from 'motion/react';

interface InternalHeaderProps {
  currentPage: string;
}

export default function InternalHeader({ currentPage }: InternalHeaderProps) {
  const navLinks = [
    { name: 'Servicios', href: '#servicios', activeKey: 'services' },
    { name: 'Nosotros', href: '#nosotros', activeKey: 'nosotros' },
    { name: 'Equipo', href: '#equipo', activeKey: 'equipo' },
    { name: 'FAQ', href: '#faq', activeKey: 'faq' },
    { name: 'Contacto', href: '#contacto', activeKey: 'contacto' },
  ];

  return (
    <div className="w-full bg-neutral-50/80 border-b border-neutral-200/60 py-5 px-6 mb-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Elegant Back to Home Link */}
        <motion.a
          href="#"
          className="flex items-center gap-2.5 text-sm font-black tracking-wider uppercase text-ink hover:text-accent transition-colors group"
          whileHover={{ x: -2 }}
        >
          <div className="w-8 h-8 bg-ink group-hover:bg-accent text-white rounded-full flex items-center justify-center transition-colors">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span className="flex items-center gap-2">
            Volver a <span className="text-accent italic">Inicio</span>
          </span>
        </motion.a>

        {/* Center/Right: Flat Menu to Jump between Internal Sections */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.activeKey;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-[12px] font-extrabold tracking-[0.12em] uppercase transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-ink/60 hover:text-accent hover:border-b-2 hover:border-accent/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Rightmost: Logo Mark */}
        <div className="hidden md:flex items-center gap-2 text-xs font-black tracking-widest text-ink/45 select-none uppercase">
          <PawPrint size={14} className="text-accent fill-accent/10" />
          <span>VetCare Elite</span>
        </div>
      </div>
    </div>
  );
}
