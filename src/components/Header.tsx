'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const WHATSAPP_HERO =
    'https://wa.me/5547991635180?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20Center%20Car.';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 ${
        scrolled
          ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-blue-500/20 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Typographic Logo (Style Max Color) */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Center Car - Lavação Automotiva"
        >
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-[0.2em] uppercase text-white group-hover:text-blue-400 transition-colors">
              CENTER CAR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]" />
          </div>
          <span className="hidden md:inline-block text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-medium pl-2 border-l border-neutral-700/60">
            Lavação Técnica
          </span>
        </a>

        {/* Minimalist Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.14em] uppercase text-neutral-300">
          <a
            href="#servicos"
            className="hover:text-white transition-colors duration-200 hover:scale-105"
          >
            Serviços
          </a>
          <a
            href="#diferenciais"
            className="hover:text-white transition-colors duration-200 hover:scale-105"
          >
            Diferenciais
          </a>
          <a
            href="#avaliacoes"
            className="hover:text-white transition-colors duration-200 hover:scale-105 flex items-center gap-1.5"
          >
            Avaliações
            <span className="inline-flex items-center justify-center text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-full border border-blue-500/30">
              5.0 ★
            </span>
          </a>
          <a
            href="#localizacao"
            className="hover:text-white transition-colors duration-200 hover:scale-105"
          >
            Localização
          </a>
        </nav>

        {/* Right CTA / Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+5547991635180"
            className="hidden xl:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-all"
            aria-label="Ligar para Center Car"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.8} aria-hidden="true" />
            <span>(47) 99163-5180</span>
          </a>

          <a
            href={WHATSAPP_HERO}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-btn"
            className="btn-pill-ghost px-5 py-2 text-xs uppercase tracking-wider font-semibold border-white/20 hover:border-blue-400/50 hover:bg-blue-600/20 text-white flex items-center gap-2 group transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" strokeWidth={1.8} aria-hidden="true" />
            <span>Agendar Horário</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 rounded-2xl bg-[#0A0D14]/95 border border-blue-500/20 backdrop-blur-xl p-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-4 text-sm font-semibold tracking-wider uppercase text-neutral-300">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Serviços de Lavação</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Diferenciais</span>
              <Sparkles className="w-4 h-4 text-blue-400" strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Avaliações Google (5.0 ★)</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-blue-400 flex items-center justify-between"
            >
              <span>Localização & Horários</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" strokeWidth={1.8} aria-hidden="true" />
            </a>
          </nav>

          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={WHATSAPP_HERO}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-pill-primary py-3 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
              <span>Agendar via WhatsApp</span>
            </a>
            <a
              href="tel:+5547991635180"
              className="w-full py-2.5 text-center text-xs tracking-wider uppercase text-neutral-400 hover:text-white"
            >
              (47) 99163-5180
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
