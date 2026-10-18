'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Star, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function WhyChooseUs() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.why-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: container });

  const reasons = [
    {
      badge: 'QUALIDADE 100%',
      title: 'BRILHO ESPELHADO & ZERO MARCAS',
      desc: 'Nossa seleção rigorosa de shampoos e panos de microfibra de alta densidade elimina qualquer risco de swirls ou marcas no verniz. Seu carro sai com acabamento digno de showroom.',
      icon: Sparkles,
      accent: 'from-blue-500/20 to-blue-600/5',
    },
    {
      badge: 'NOTA MÁXIMA GOOGLE',
      title: 'REPUTAÇÃO 5.0 ESTRELAS',
      desc: 'Não é à toa que dezenas de motoristas de Rio do Sul e região confiam seus veículos na Center Car. Avaliações 100% espontâneas e verificadas no Google.',
      icon: Star,
      accent: 'from-amber-500/20 to-amber-600/5',
    },
    {
      badge: 'VALOR JUSTO',
      title: 'PREÇO HONESTO & TRANSPARENTE',
      desc: 'Oferecemos opções de cuidado automotivo perfeitamente adequadas ao seu perfil e orçamento, sempre com valores declarados com clareza antes do serviço.',
      icon: ShieldCheck,
      accent: 'from-emerald-500/20 to-emerald-600/5',
    },
    {
      badge: 'PONTUALIDADE',
      title: 'SEU CARRO PRONTO NO HORÁRIO',
      desc: 'Respeitamos seu tempo e sua rotina. Organizamos nossa agenda por turnos para que seu veículo esteja 100% pronto e inspecionado no horário combinado.',
      icon: Clock,
      accent: 'from-purple-500/20 to-purple-600/5',
    },
  ];

  return (
    <section
      id="diferenciais"
      ref={container}
      className="relative py-24 sm:py-32 bg-[#07090E] border-t border-white/[0.04] overflow-hidden"
    >
      {/* Volumetric background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.8} aria-hidden="true" />
            Excelência Comprovada
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-[-0.02em] text-white leading-tight">
            FAZEMOS O QUE OS OUTROS NÃO CONSEGUEM FAZER
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A combinação de técnica, paciência e paixão por carros que transformou a Center Car no ponto de referência em Rio do Sul.
          </p>
        </div>

        {/* 4 Cards Grid (Estilo Max Color "WE DO WHAT OTHERS CAN'T DO") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="why-card rounded-3xl p-7 studio-card flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-50 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                      {item.badge}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all">
                      <Icon className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-tight group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                    <Check className="w-3.5 h-3.5 text-blue-400" strokeWidth={2.5} aria-hidden="true" />
                    Padrão Garantido
                  </span>
                  <span className="text-neutral-500 font-mono">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
