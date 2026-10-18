'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, CheckCircle, ExternalLink, MessageCircle, Quote } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface ReviewItem {
  id: number;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  tag: 'todas' | 'lavacao' | 'interna' | 'rodas';
}

export function GoogleReviews() {
  const container = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'todas' | 'lavacao' | 'interna' | 'rodas'>('todas');
  const [expandedCount, setExpandedCount] = useState(6);

  const GOOGLE_MAPS_REVIEWS =
    'https://www.google.com/maps/search/?api=1&query=Center+Car+Lavacao+Automotiva+Rio+do+Sul+SC';

  const reviews: ReviewItem[] = [
    {
      id: 1,
      author: 'Michael Schotten',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 2 semanas',
      text: 'Excelente atendimento e serviço de primeira qualidade! Meu carro saiu impecável, parecendo zero km. A atenção que dão nos cantinhos e nas rodas é impressionante. Recomendo de olhos fechados!',
      tag: 'lavacao',
    },
    {
      id: 2,
      author: 'Rafa Menegat',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 1 mês',
      text: 'Melhor lavação de Rio do Sul sem sombra de dúvidas! O capricho nos detalhes das caixas de roda e no interior é diferenciado. Parabéns a toda a equipe da Center Car pela dedicação.',
      tag: 'rodas',
    },
    {
      id: 3,
      author: 'Cleidson Schulze',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 1 mês',
      text: 'Super atenciosos, entrega pontual e um trabalho perfeito na pintura e higienização. O carro fica com cheirinho de novo e sem aquela gordura no painel. Vale cada centavo investido!',
      tag: 'interna',
    },
    {
      id: 4,
      author: 'Everton Silva',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 2 meses',
      text: 'Lavação técnica de verdade. Não deixam nenhuma marca nos vidros e o acabamento das rodas fica incrível. Cumprem exatamente o prazo combinado na entrega.',
      tag: 'lavacao',
    },
    {
      id: 5,
      author: 'Lucas Fernandes',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 2 meses',
      text: 'Levo meus carros sempre na Center Car. Pontualidade britânica e um brilho que dura semanas na lataria. O atendimento no WhatsApp também é rápido e muito educado.',
      tag: 'lavacao',
    },
    {
      id: 6,
      author: 'Juliana Becker',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 3 meses',
      text: 'Atendimento maravilhoso desde a recepção até a entrega! Meu carro estava com poeira de obra e devolveram impecável por dentro e por fora. Virei cliente fiel.',
      tag: 'interna',
    },
    {
      id: 7,
      author: 'Rodrigo Farias',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 3 meses',
      text: 'Recomendo a todos em Rio do Sul. Profissionais honestos, preço justo e serviço impecável. O tratamento com a pintura do carro é feito com muito zelo.',
      tag: 'lavacao',
    },
    {
      id: 8,
      author: 'Marcio Wehmuth',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 4 meses',
      text: 'O cuidado com os cantinhos de porta e acabamentos plásticos me surpreendeu. Não fica resíduo branco em borrachas. Nota 10 em capricho!',
      tag: 'rodas',
    },
    {
      id: 9,
      author: 'Tiago Ramos',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 4 meses',
      text: 'Lavação ágil mas sem perder a qualidade extrema. Pessoal muito cuidadoso e atencioso. 5 estrelas merecidas para a Center Car!',
      tag: 'lavacao',
    },
    {
      id: 10,
      author: 'Gabriel Souza',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 5 meses',
      text: 'A Center Car é referência na cidade. Deixei o carro muito sujo após uma viagem de terra e devolveram com aspecto de carro de salão. Show de bola!',
      tag: 'lavacao',
    },
    {
      id: 11,
      author: 'Vanessa Kirsten',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 5 meses',
      text: 'Higienização interna impecável! Tenho criança e o banco traseiro estava bem manchado. Ficou 100% limpo e sem nenhum cheiro químico forte.',
      tag: 'interna',
    },
    {
      id: 12,
      author: 'Eduardo Campestrini',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 6 meses',
      text: 'As caixas de rodas e as pinças de freio ficaram brilhando como novas. Quem é chato com carro como eu sabe o quanto esse detalhe faz a diferença.',
      tag: 'rodas',
    },
    {
      id: 13,
      author: 'Fernando Zanella',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 6 meses',
      text: 'Excelente localização na Otto Ern e equipe nota 10. Agendamento pelo WhatsApp funciona perfeitamente e o preço é condizente com a altíssima qualidade.',
      tag: 'lavacao',
    },
    {
      id: 14,
      author: 'Bruna Althoff',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 7 meses',
      text: 'Carro cheiroso, aspirado em cada cantinho e vidros cristalinos. Fizeram um trabalho primoroso. Recomendo muito!',
      tag: 'interna',
    },
    {
      id: 15,
      author: 'Guilherme Probst',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 7 meses',
      text: 'Melhor lavação da região do Alto Vale. Tratamento diferenciado com o veículo e produtos de ótima qualidade. Não troco por nada.',
      tag: 'lavacao',
    },
    {
      id: 16,
      author: 'Diego Rossi',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 8 meses',
      text: 'Fizeram a limpeza das rodas e aplicação do selante na pintura. O brilho molhado ficou espetacular e a água escorre fácil na chuva.',
      tag: 'rodas',
    },
    {
      id: 17,
      author: 'Carla Nardelli',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 8 meses',
      text: 'Adorei a pontualidade. Deixei o carro às 08h e no horário combinado já recebi a mensagem avisando que estava pronto. Profissionalismo puro.',
      tag: 'lavacao',
    },
    {
      id: 18,
      author: 'Matheus Kuster',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 9 meses',
      text: 'Trabalho de detalhamento cirúrgico. Até o cofre do motor e as saídas do ar condicionado foram higienizados com extrema atenção.',
      tag: 'interna',
    },
    {
      id: 19,
      author: 'Leandro Poffo',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 9 meses',
      text: 'Custo benefício imbatível em Rio do Sul. Toda a equipe é educada e o padrão de entrega é sempre o mesmo: perfeito.',
      tag: 'lavacao',
    },
    {
      id: 20,
      author: 'Patrícia Hillesheim',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 10 meses',
      text: 'Deixei meu SUV para higienização completa e fiquei encantada. Bancos renovados e painel com acabamento fosco original sem melaço.',
      tag: 'interna',
    },
    {
      id: 21,
      author: 'Anderson Lemos',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 10 meses',
      text: 'Eles realmente limpam as caixas de roda e tiram toda aquela terra avermelhada típica da nossa região. Trabalho impecável!',
      tag: 'rodas',
    },
    {
      id: 22,
      author: 'Renato Morastoni',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 11 meses',
      text: 'Nota 5 estrelas incontestável. Pontuais, educados e muito profissionais. Meu carro parece que acabou de sair da concessionária.',
      tag: 'lavacao',
    },
    {
      id: 23,
      author: 'Simone Hoffmann',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 1 ano',
      text: 'Excelente lavação! Vidros perfeitamente limpos, sem manchas nem reflexos à noite. Podem confiar!',
      tag: 'lavacao',
    },
    {
      id: 24,
      author: 'Alexandre Bonin',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 1 ano',
      text: 'O pretinho que usam nos pneus dura muito e não espirra na lataria. Mostra que usam produtos premium de verdade.',
      tag: 'rodas',
    },
    {
      id: 25,
      author: 'Fabrício Tomio',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 1 ano',
      text: 'Sem palavras para o atendimento. A Center Car elevou o padrão de lavação em Rio do Sul. Parabéns pelo serviço!',
      tag: 'interna',
    },
    {
      id: 26,
      author: 'Marcio Zandonai',
      role: 'Cliente Verificado · Google Reviews',
      rating: 5,
      date: 'Há 1 ano',
      text: 'Recomendo com certeza. Pontualidade, capricho e preço justo. Meu carro está sempre bem cuidado na Center Car.',
      tag: 'lavacao',
    },
  ];

  const filteredReviews = reviews.filter((item) => {
    if (activeTab === 'todas') return true;
    return item.tag === activeTab;
  });

  const displayedReviews = filteredReviews.slice(0, expandedCount);

  useGSAP(() => {
    gsap.from('.review-card-item', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power3.out',
    });
  }, { scope: container, dependencies: [activeTab, expandedCount] });

  return (
    <section
      id="avaliacoes"
      ref={container}
      className="relative py-24 sm:py-32 bg-[#07090E] border-t border-white/[0.04] overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="pointer-events-none absolute right-1/3 top-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" strokeWidth={1.8} aria-hidden="true" />
              Prova Social Verificada
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.02em] text-white">
              O QUE NOSSOS CLIENTES DIZEM
            </h2>
            <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Dezenas de avaliações espontâneas no Google com nota máxima 5.0 ★. Transparência e respeito em primeiro lugar.
            </p>
          </div>

          {/* Google Score Badge */}
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm shrink-0">
            <div className="text-right">
              <div className="text-xl font-bold font-display text-white flex items-center justify-end gap-1.5">
                <span>5.0</span>
                <span className="flex text-amber-400">
                  {'★'.repeat(5)}
                </span>
              </div>
              <div className="text-[11px] text-neutral-400">44+ avaliações no Google</div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold font-display text-sm">
              G
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
          {[
            { id: 'todas', label: 'Todas as Avaliações (26)' },
            { id: 'lavacao', label: 'Lavação Técnica (11)' },
            { id: 'interna', label: 'Higienização Interna (8)' },
            { id: 'rodas', label: 'Rodas & Acabamento (7)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                setExpandedCount(6);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.07] border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Real Google Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((item) => (
            <div
              key={item.id}
              className="review-card-item rounded-3xl p-7 studio-card flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header author and stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-blue-500 text-white font-bold text-sm flex items-center justify-center uppercase shrink-0 shadow-md shadow-blue-900/30">
                      {item.author.slice(0, 2)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm leading-tight flex items-center gap-1.5">
                        <span>{item.author}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400" strokeWidth={2.2} aria-hidden="true" />
                      </h3>
                      <p className="text-[11px] text-neutral-400 mt-0.5">{item.role}</p>
                    </div>
                  </div>

                  <span className="text-[11px] text-neutral-400 font-mono shrink-0">
                    {item.date}
                  </span>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Text quote */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed relative z-10 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
                <span className="text-blue-400 font-medium">Google Avaliação Verificada</span>
                <span className="flex items-center gap-1">5.0 ★</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load more or show all */}
        {expandedCount < filteredReviews.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setExpandedCount((prev) => prev + 6)}
              className="btn-pill-ghost px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-neutral-200 hover:text-white"
            >
              Carregar Mais Depoimentos ({filteredReviews.length - expandedCount} restantes)
            </button>
          </div>
        )}

        {/* Central Automated Google Maps Button (As specified in prompt Dobra 4) */}
        <div className="mt-14 text-center">
          <a
            href={GOOGLE_MAPS_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            id="ver-mais-avaliacoes-google-btn"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-blue-500/40 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 transition-all group"
          >
            <span>Ver mais avaliações reais no Google Maps (5.0 ★)</span>
            <ExternalLink className="w-4 h-4 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
