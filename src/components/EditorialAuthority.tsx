'use client';

import { Sparkles, ArrowRight } from 'lucide-react';

export function EditorialAuthority() {
  const metrics = [
    {
      value: '5.0 ★',
      label: 'AVALIAÇÃO MÁXIMA GOOGLE',
      desc: '100% de satisfação unânime entre dezenas de clientes.',
    },
    {
      value: '44+',
      label: 'CLIENTES VERIFICADOS',
      desc: 'Avaliações reais comprovadas e documentadas em Rio do Sul.',
    },
    {
      value: '100%',
      label: 'CUIDADO CIRÚRGICO',
      desc: 'Atenção meticulosa em caixas de rodas, vidros e cantos.',
    },
    {
      value: 'PONTUAL',
      label: 'AGILIDADE NA ENTREGA',
      desc: 'Respeito ao seu tempo com entrega rigorosa no horário.',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#07090E] border-t border-b border-white/[0.06] overflow-hidden">
      {/* Subtle ambient spotlight behind text */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Split Editorial Header (Estilo Max Color "WE OFFER PAINTING SERVICES...") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" strokeWidth={1.8} aria-hidden="true" />
              Padrão Editorial Center Car
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] text-white leading-[1.12]">
              CUIDADO CIRÚRGICO E O BRILHO MÁXIMO PARA SEU VEÍCULO EM RIO DO SUL
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Trabalhamos focados na evolução contínua da técnica e nos melhores produtos de cuidado automotivo. Garantimos com total segurança um padrão de acabamento que preserva o verniz original do seu veículo, com prazos pontuais e preço justo.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Nosso processo elimina o atrito mecânico que gera micro riscos, utilizando shampoos com pH balanceado, luvas de microfibra ultrassuaves e secagem técnica com ar pressurizado.
            </p>

            <div className="pt-2">
              <a
                href="#servicos"
                className="btn-pill-ghost px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-white inline-flex items-center gap-2 group"
              >
                <span>Conhecer Nossos Serviços</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Metrics Strip with Ultrafine Lines */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`${
                idx !== 0 ? 'sm:border-l sm:border-white/10 sm:pl-8' : ''
              }`}
            >
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-2 flex items-center gap-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  {item.value}
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400 mb-1">
                {item.label}
              </div>
              <p className="text-xs text-neutral-400 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
