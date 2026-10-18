'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function EditorialBanner() {
  const container = useRef<HTMLDivElement>(null);

  const WHATSAPP_HERO =
    'https://wa.me/5547991635180?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20Center%20Car.';

  useGSAP(() => {
    gsap.from('.banner-content-reveal', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      y: 35,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
    });

    gsap.from('.banner-img-reveal', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      scale: 0.96,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 bg-[#07090E] overflow-hidden"
    >
      {/* Soft blue volumetric atmosphere */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[350px] bg-blue-600/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 mb-8 sm:mb-12">
        <span className="banner-content-reveal inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
          <Sparkles className="w-3.5 h-3.5" strokeWidth={1.8} aria-hidden="true" />
          Destaque Visual Absoluto
        </span>
        <h2 className="banner-content-reveal font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-[-0.03em] text-white leading-tight">
          DESTAQUE-SE POR ONDE PASSAR COM A CENTER CAR
        </h2>
        <p className="banner-content-reveal mt-4 sm:mt-5 text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Seu carro com aquele brilho profundo de pintura nova, interior perfeitamente higienizado e proteção que dura.
        </p>

        <div className="banner-content-reveal mt-7 flex justify-center">
          <a
            href={WHATSAPP_HERO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary px-8 py-3.5 text-xs uppercase tracking-wider font-bold flex items-center gap-2.5 group"
          >
            <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" strokeWidth={2} aria-hidden="true" />
            <span>Agendar Lavação Agora</span>
            <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Hero Visual: Front-facing sports cars in dark studio with illuminated headlights */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <Image
            src="/images/banner-cars.jpg"
            alt="Veículos esportivos em estúdio escuro - Center Car Lavação Automotiva"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="banner-img-reveal object-cover object-center"
          />
          {/* Subtle bottom fade to blend with the page */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090E] via-transparent to-transparent opacity-70" />
        </div>
      </div>
    </section>
  );
}
