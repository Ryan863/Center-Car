'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Star, ShieldCheck, Clock, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  const WHATSAPP_HERO =
    'https://wa.me/5547991635180?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20Center%20Car.';

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-fade', {
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
    })
      .from(
        '.hero-car-img',
        {
          y: 40,
          scale: 0.95,
          opacity: 0,
          duration: 1.3,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .from(
        '.hero-spotlight',
        {
          scale: 0.7,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
        },
        '-=1.2'
      )
      .from(
        '.hero-badge',
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
        },
        '-=0.8'
      );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#07090E]"
    >
      {/* Background Volumetric Blue Spotlight (Max Color Studio Glow) */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        {/* Upper diffuse glow */}
        <div className="hero-spotlight absolute top-10 sm:top-20 w-[600px] sm:w-[900px] lg:w-[1200px] h-[350px] sm:h-[550px] rounded-[100%] bg-blue-600/20 blur-[120px] sm:blur-[160px]" />
        {/* Core spotlight behind the vehicle */}
        <div className="absolute top-1/2 -translate-y-1/3 w-[320px] sm:w-[650px] h-[220px] sm:h-[350px] rounded-[100%] bg-blue-500/25 blur-[90px]" />
        {/* Micro floor reflection beam */}
        <div className="absolute bottom-28 sm:bottom-36 w-full max-w-5xl h-24 bg-gradient-to-r from-transparent via-blue-500/15 to-transparent blur-2xl" />
      </div>

      {/* Hero Content Header (Centered Max Color Editorial Title) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Category Pill Tag */}
        <div className="hero-fade inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Lavação Automotiva & Detalhamento Técnico</span>
        </div>

        {/* H1 - ELEVE O BRILHO DO SEU CARRO AO MÁXIMO */}
        <h1 className="hero-fade font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] uppercase text-white leading-[1.08] max-w-4xl mx-auto">
          ELEVE O BRILHO DO SEU CARRO AO{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500">
            MÁXIMO
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-fade mt-5 sm:mt-6 text-neutral-300 text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
          Lavação automotiva técnica, detalhamento de alto padrão e proteção completa para seu veículo em Rio do Sul.
        </p>

        {/* Central Pill CTA Button (Estilo Max Color Callback) */}
        <div className="hero-fade mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_HERO}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="w-full sm:w-auto btn-pill-primary px-8 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-3 group"
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

      {/* Hero Protagonist Centerpiece: Blue Sports Car in Dark Studio with Reflection */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-6 my-4 sm:my-8 flex flex-col items-center">
        {/* Desktop Image View */}
        <div className="hidden sm:block relative w-full aspect-[16/9] max-h-[520px]">
          <Image
            src="/images/hero-car-desktop.png"
            alt="Carro esportivo em estúdio escuro com iluminação azul - Center Car Lavação Automotiva Rio do Sul"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="hero-car-img object-contain drop-shadow-[0_20px_40px_rgba(7,9,14,0.9)]"
          />
        </div>

        {/* Mobile Image View (Vertical 9:16 User Uploaded Reference) */}
        <div className="sm:hidden relative w-full aspect-[4/3] max-h-[360px]">
          <Image
            src="/images/hero-car-desktop.png"
            alt="Center Car Lavação Automotiva Rio do Sul"
            fill
            priority
            sizes="100vw"
            className="hero-car-img object-contain drop-shadow-[0_15px_30px_rgba(7,9,14,0.9)]"
          />
        </div>

        {/* Ambient Floor Reflection & Glow Line */}
        <div className="w-4/5 max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent shadow-[0_0_24px_rgba(59,130,246,0.6)] -mt-2 sm:-mt-6" />
      </div>

      {/* Bottom Authority Micro-Badges */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/5">
          <div className="hero-badge flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <div className="text-white text-xs font-bold leading-tight flex items-center gap-1">
                5.0 ★ Google
              </div>
              <div className="text-[11px] text-neutral-400 leading-tight">44+ Avaliações</div>
            </div>
          </div>

          <div className="hero-badge flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <div className="text-white text-xs font-bold leading-tight">Abre às 07:30</div>
              <div className="text-[11px] text-neutral-400 leading-tight">Segunda a Sexta</div>
            </div>
          </div>

          <div className="hero-badge flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <div className="text-white text-xs font-bold leading-tight">Cuidado Cirúrgico</div>
              <div className="text-[11px] text-neutral-400 leading-tight">Zero Marcas de Pano</div>
            </div>
          </div>

          <div className="hero-badge flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
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
