'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  imageSrc?: string;
  isAccentCard?: boolean;
}

export function ServicesGrid() {
  const container = useRef<HTMLDivElement>(null);

  const getWaLink = (serviceName: string) =>
    `https://wa.me/5547991635180?text=${encodeURIComponent(
      `Olá! Gostaria de agendar o serviço de ${serviceName} na Center Car.`
    )}`;

  useGSAP(() => {
    gsap.from('.service-card-item', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      y: 45,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }, { scope: container });

  const services: ServiceItem[] = [
    {
      id: 'lavacao-externa',
      title: 'LAVAÇÃO EXTERNA & ESPUMA TÉCNICA',
      category: 'CUIDADO EXTERNO',
      description:
        'Pré-lavagem com snow foam de pH neutro para desprendimento de sujidades pesadas sem atrito. Lavagem manual com método de dois baldes e microfibras de alta gramatura.',
      highlights: ['Snow foam sem atrito', 'Secagem técnica com ar', 'Acabamento sem manchas'],
      imageSrc: '/images/service-front.jpg',
    },
    {
      id: 'higienizacao-interna',
      title: 'HIGIENIZAÇÃO & LIMPEZA INTERNA COMPLETA',
      category: 'INTERIOR REFINADO',
      description:
        'Aspiração profunda em carpete e frestas, limpeza detalhada de painel, console, saídas de ar condicionado e aplicação de condicionador fosco com toque seco original.',
      highlights: ['Aspiração profunda', 'Condicionamento fosco', 'Higienização de dutos'],
      imageSrc: '/images/service-mirror.jpg',
    },
    {
      id: 'detalhamento-pincas',
      title: 'DETALHAMENTO DE PINÇAS & FREIOS',
      category: 'ESTÉTICA ESPORTIVA',
      description:
        'Descontaminação ferrosa química pesada para remoção de poeira de pastilhas grudadas no conjunto de freio e pinças, realçando o visual esportivo e preservando as peças.',
      highlights: ['Descontaminação ferrosa', 'Recuperação do brilho', 'Proteção antiferrugem'],
      imageSrc: '/images/service-caliper.jpg',
    },
    {
      id: 'rodas-caixas',
      title: 'LIMPEZA DE RODAS & CAIXAS DE RODA',
      category: 'RODAS & UNDERCAR',
      description:
        'Limpeza técnica interna e externa dos aros, desengraxe meticuloso das caixas de roda e aplicação de revitalizador hidrorrepelente nos pneus com acabamento acetinado de longa duração.',
      highlights: ['Limpeza interna do aro', 'Desengraxe de caixas', 'Pneu pretinho de longa duração'],
      imageSrc: '/images/service-wheel.jpg',
    },
    {
      id: 'protecao-pintura',
      title: 'PROTEÇÃO DE PINTURA & SELANTE',
      category: 'BRILHO & PROTEÇÃO',
      description:
        'Aplicação de selantes sintéticos nobres e ceras de alto rendimento. Criação de uma barreira hidrofóbica com toque aveludado, proteção UV e brilho espelhado incomparável.',
      highlights: ['Alta hidrorrepelência', 'Proteção UV contra queima', 'Brilho espelhado máximo'],
      imageSrc: '/images/service-paint.jpg',
    },
    {
      id: 'cta-prioridade',
      title: 'AGENDE SEU HORÁRIO COM PRIORIDADE',
      category: 'ATENDIMENTO EXCLUSIVO',
      description:
        'Trabalhamos com vagas planejadas por turno para garantir atenção cirúrgica a cada veículo. Garanta o seu horário na Center Car.',
      highlights: ['Abre às 07:30 da manhã', 'Pontualidade na entrega', 'Orçamento transparente'],
      isAccentCard: true,
    },
  ];

  return (
    <section
      id="servicos"
      ref={container}
      className="relative py-24 sm:py-32 bg-[#07090E] overflow-hidden"
    >
      {/* Background radial spotlight */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header (Estilo Max Color "TYPES OF CAR PAINTING") */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.8} aria-hidden="true" />
            Catálogo Editorial de Cuidados
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] text-white">
            SERVIÇOS DE LAVAÇÃO & DETALHAMENTO
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Cada etapa é executada com metodologia precisa para valorizar seu automóvel sem agredir superfícies delicadas.
          </p>
        </div>

        {/* 2x3 Grid matching Max Color */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            if (service.isAccentCard) {
              return (
                <div
                  key={service.id}
                  className="service-card-item rounded-3xl p-7 sm:p-8 studio-card-blue flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Subtle inner reflection */}
                  <div className="absolute -top-24 -right-24 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
                      {service.category}
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-blue-100 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-6 space-y-2">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0" strokeWidth={2} aria-hidden="true" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <a
                      href={getWaLink('Lavação Completa')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-white text-blue-900 font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-lg shadow-blue-950/40 group"
                    >
                      <MessageCircle className="w-4 h-4 text-blue-700 group-hover:scale-110 transition-transform" strokeWidth={2} aria-hidden="true" />
                      <span>Agendar no WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 text-blue-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                className="service-card-item rounded-3xl studio-card flex flex-col justify-between overflow-hidden group"
              >
                {/* Top content */}
                <div className="p-7 sm:p-8 pb-4">
                  <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">
                    {service.category}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-tight group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-neutral-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Macro Photography Container (Max Color style cropped photography) */}
                {service.imageSrc && (
                  <div className="relative w-full aspect-[16/10] mt-4 overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Gradient overlay to integrate with dark card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/20 to-transparent" />
                    
                    {/* Action link over the image */}
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                      <a
                        href={getWaLink(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-blue-400 transition-colors group/link"
                      >
                        <span>Solicitar Orçamento</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" strokeWidth={2} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
