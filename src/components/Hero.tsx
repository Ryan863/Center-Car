'use client';

import Image from 'next/image';
import { Star, ShieldCheck, Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

export function Hero() {
  const WHATSAPP_HERO =
    'https://wa.me/5547991635180?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20Center%20Car.';

  return (
    <section className="relative w-full overflow-hidden bg-[#07090E] pt-24 sm:pt-32 pb-10 sm:pb-16 flex flex-col justify-between">
      {/* Complete Studio Background Photo (Exatamente como a referência Max Color) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Desktop Background: 1024x765 photo complete */}
        <div className="hidden sm:block absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-car-desktop.png"
            alt="Center Car - Lavação Automotiva Rio do Sul"
            fill
            priority
            quality={95}
            className="object-contain lg:object-cover object-center"
          />
        </div>

        {/* Mobile Background: 572x1024 vertical photo */}
        <div className="sm:hidden absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-car-mobile.png"
            alt="Center Car - Lavação Automotiva Rio do Sul"
            fill
            priority
            quality={95}
            className="object-cover object-center"
          />
        </div>

        {/* Top subtle shade for transparent header readability */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07090E]/85 via-[#07090E]/40 to-transparent" />
        
        {/* Bottom smooth gradient transition to blend floor into next section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07090E] via-[#07090E]/80 to-transparent" />
      </div>

      {/* Hero Header Content (Centered in upper studio space, above the sports car) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center anim-fade-up">
        {/* Category Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-4 sm:mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Lavação Automotiva & Detalhamento Técnico</span>
        </div>

        {/* H1 - ELEVE O BRILHO DO SEU CARRO AO MÁXIMO (Estilo Max Color) */}
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] uppercase text-white leading-[1.08] max-w-4xl mx-auto drop-shadow-lg">
          ELEVE O BRILHO DO SEU CARRO AO{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">
            MÁXIMO
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-neutral-200 text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed drop-shadow">
          Lavação automotiva técnica, detalhamento de alto padrão e proteção completa para seu veículo em Rio do Sul.
        </p>

        {/* Central Pill CTA Button (Estilo Callback Max Color) */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_HERO}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="w-full sm:w-auto btn-pill-primary px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 group"
          >
            <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" strokeWidth={2} aria-hidden="true" />
            <span>Agendar Horário via WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" strokeWidth={2} aria-hidden="true" />
          </a>

          <a
            href="#servicos"
            className="w-full sm:w-auto btn-pill-ghost px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-neutral-200 hover:text-white flex items-center justify-center gap-2"
          >
            <span>Ver Catálogo de Serviços</span>
          </a>
        </div>
      </div>

      {/* Dedicated visual stage window so the sports car and its reflection in the background photo are 100% visible */}
      <div className="relative z-10 w-full h-[240px] sm:h-[340px] md:h-[420px] lg:h-[480px] pointer-events-none" />

      {/* Bottom Authority Micro-Badges */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full anim-fade-up anim-delay-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10 backdrop-blur-xs">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0E131F]/80 border border-blue-500/20 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <div className="text-white text-xs font-bold leading-tight">
                5.0 ★ Google
              </div>
              <div className="text-[11px] text-neutral-400 leading-tight">44+ Avaliações</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0E131F]/80 border border-blue-500/20 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <div className="text-white text-xs font-bold leading-tight">Abre às 07:30</div>
              <div className="text-[11px] text-neutral-400 leading-tight">Segunda a Sexta</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0E131F]/80 border border-blue-500/20 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <div className="text-white text-xs font-bold leading-tight">Cuidado Cirúrgico</div>
              <div className="text-[11px] text-neutral-400 leading-tight">Zero Marcas de Pano</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0E131F]/80 border border-blue-500/20 backdrop-blur-md">
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <div className="text-white text-xs font-bold leading-tight">Rio do Sul - SC</div>
              <div className="text-[11px] text-neutral-400 leading-tight">Bairro Laranjeiras</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
