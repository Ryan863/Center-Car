'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const WHATSAPP_URL =
    'https://wa.me/5547991635180?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20Center%20Car.';

  return (
    <aside
      aria-label="Atendimento Rápido WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-500/30 transition-transform active:scale-95 duration-200"
        aria-label="Falar no WhatsApp com a Center Car"
      >
        {/* Pulsing attention ring */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300" />
        </span>

        <MessageCircle className="w-6 h-6 sm:mr-2 stroke-[2.2]" aria-hidden="true" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
          Agendar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
