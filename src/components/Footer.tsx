'use client';

import { ArrowUp, Phone, MessageCircle, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const WHATSAPP_HERO =
    'https://wa.me/5547991635180?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20Center%20Car.';

  return (
    <footer className="relative bg-[#06080C] border-t border-white/[0.06] pt-16 pb-12 overflow-hidden text-neutral-400">
      {/* Subtle bottom spotlight */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-extrabold text-xl tracking-[0.2em] uppercase text-white">
                CENTER CAR
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
              Lavação automotiva técnica, detalhamento de alto padrão e proteção completa da pintura em Rio do Sul - SC. Nota máxima 5.0 no Google.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/centercarlavauto/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-400 text-neutral-300 flex items-center justify-center transition-all"
                aria-label="Instagram da Center Car"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579031135731"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400 text-neutral-300 flex items-center justify-center transition-all"
                aria-label="Facebook da Center Car"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-400 text-neutral-300 flex items-center justify-center transition-all"
                aria-label="WhatsApp da Center Car"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs font-medium tracking-wide">
              <li>
                <a href="#" className="hover:text-white transition-colors">Início / Topo</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços de Lavação</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais & Padrão</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações Google (5.0 ★)</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização & Horários</a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white mb-4">
              Atendimento & Contato
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" strokeWidth={1.8} aria-hidden="true" />
                <span>R. Otto Ern, 1157 - Laranjeiras, Rio do Sul - SC, 89167-324</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" strokeWidth={1.8} aria-hidden="true" />
                <a href="tel:+5547991635180" className="hover:text-white transition-colors">(47) 99163-5180</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-blue-400 shrink-0" strokeWidth={1.8} aria-hidden="true" />
                <a href={WHATSAPP_HERO} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Agendamento via WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Center Car - Lavação Automotiva. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
