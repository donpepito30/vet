import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const phoneNumber = "5491112345678"; // Replace with real number
  const message = "Hola Vet-Elite, me gustaría solicitar una consulta para mi mascota.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white text-ink px-4 py-2 rounded-2xl rounded-br-none shadow-2xl text-sm font-bold border border-accent/20 pointer-events-auto"
          >
            ¿En qué podemos ayudar a tu mascota? 🐾
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group w-16 h-16 bg-accent text-ink rounded-full shadow-[0_0_30px_rgba(212,255,0,0.4)] flex items-center justify-center transition-shadow hover:shadow-[0_0_40px_rgba(212,255,0,0.6)] pointer-events-auto"
      >
        <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20 group-hover:hidden"></div>
        <MessageCircle className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
};
