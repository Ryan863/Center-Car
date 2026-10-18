'use client';

import {
  MapPin,
  Clock,
  Navigation,
  Phone,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './icons';

export function LocationAndHours() {
  const ADDRESS_FULL = 'R. Otto Ern, 1157 - Laranjeiras, Rio do Sul - SC, 89167-324';
  const GPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS_FULL
  )}`;
  const WHATSAPP_URL =
    'https://wa.me/5547991635180?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20lava%C3%A7%C3%A3o%20na%20Center%20Car.';

  return (
    <section
      id="localizacao"
      className="relative py-24 sm:py-32 bg-[#07090E] border-t border-white/[0.04] overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-10 bottom-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 mb-3">
            <MapPin className="w-3.5 h-3.5" strokeWidth={1.8} aria-hidden="true" />
            Onde Estamos & Horários
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-[-0.02em] text-white leading-tight">
            FÁCIL ACESSO NO BAIRRO LARANJEIRAS
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Localização privilegiada em Rio do Sul com espaço amplo, seguro e atendimento pontual.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Technical Facility Card */}
          <div className="location-card-reveal lg:col-span-7 rounded-3xl p-8 sm:p-10 studio-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-white uppercase tracking-tight">
                    CENTER CAR
                  </h3>
                  <p className="text-xs font-semibold tracking-wider uppercase text-blue-400 mt-1">
                    Lavação Automotiva & Cuidados Especiais
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-6 h-6" strokeWidth={1.8} aria-hidden="true" />
                </div>
              </div>

              {/* Data points */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                      Endereço Completo
                    </div>
                    <div className="text-white text-sm sm:text-base font-medium mt-0.5">
                      R. Otto Ern, 1157 - Laranjeiras
                    </div>
                    <div className="text-neutral-400 text-xs">Rio do Sul - SC, 89167-324</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                      Horário de Funcionamento
                    </div>
                    <div className="text-white text-sm sm:text-base font-medium mt-0.5">
                      Segunda a Sexta a partir das 07:30
                    </div>
                    <div className="text-neutral-400 text-xs">
                      Atendimento com horário agendado para entrega pontual
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                      Telefone & WhatsApp
                    </div>
                    <div className="text-white text-sm sm:text-base font-medium mt-0.5">
                      (47) 99163-5180
                    </div>
                    <div className="text-neutral-400 text-xs">Atendimento rápido para dúvidas e orçamentos</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={GPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-pill-primary px-7 py-3.5 text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 group"
              >
                <Navigation className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" strokeWidth={2} aria-hidden="true" />
                <span>Como Chegar (Rota GPS)</span>
              </a>

              <a
                href="tel:+5547991635180"
                className="w-full sm:w-auto btn-pill-ghost px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-white flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" strokeWidth={1.8} aria-hidden="true" />
                <span>Ligar Agora</span>
              </a>
            </div>
          </div>

          {/* Card 2: Social Media, Map Link & Quick Booking */}
          <div className="location-card-reveal lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Embedded map simulation / quick link */}
            <div className="rounded-3xl p-7 studio-card flex-1 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                    Rio do Sul · Laranjeiras
                  </span>
                  <span className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                    ★ 5.0 Google
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                  MAPA DE LOCALIZAÇÃO
                </h4>
                <p className="mt-2 text-neutral-400 text-xs leading-relaxed">
                  Próximo às principais vias de ligação do bairro Laranjeiras. Facilidade para deixar seu veículo no início do dia e retirar impecável.
                </p>

                {/* Styled map graphic frame */}
                <div className="mt-5 rounded-2xl overflow-hidden border border-white/10 relative h-40 bg-[#0A0D14] flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
                  <div className="relative z-10 flex flex-col items-center text-center p-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-2 animate-bounce">
                      <MapPin className="w-6 h-6 text-blue-400" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <span className="text-white font-bold text-xs">Rua Otto Ern, 1157</span>
                    <span className="text-[11px] text-neutral-400">Laranjeiras, Rio do Sul - SC</span>
                  </div>
                  <a
                    href={GPS_DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider transition-opacity gap-2"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Canais Oficiais
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.instagram.com/centercarlavauto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-pink-500/30 text-neutral-300 hover:text-white transition-all text-xs font-medium group"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61579031135731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-blue-500/30 text-neutral-300 hover:text-white transition-all text-xs font-medium group"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
