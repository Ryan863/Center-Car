import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { EditorialAuthority } from '@/components/EditorialAuthority';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { EditorialBanner } from '@/components/EditorialBanner';
import { GoogleReviews } from '@/components/GoogleReviews';
import { LocationAndHours } from '@/components/LocationAndHours';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090E] text-white selection:bg-blue-600 selection:text-white">
      {/* 100% Transparent Top Navbar with GSAP Scroll Transition */}
      <Header />

      {/* Dobra 1: Hero Section (Estilo Max Color Centralizado com Carro Esportivo e Glow Azul) */}
      <Hero />

      {/* Dobra 2: Faixa de Métricas & Autoridade Editorial */}
      <EditorialAuthority />

      {/* Dobra 3: Catálogo de Serviços (Cards Escuros com Macrofotografia no Estilo Max Color) */}
      <ServicesGrid />

      {/* Seção de Diferenciais (Estilo Max Color: We Do What Others Can't Do!) */}
      <WhyChooseUs />

      {/* Seção Editorial de Alto Impacto (Estilo Max Color: Stand Out From The Crowd) */}
      <EditorialBanner />

      {/* Dobra 4: Prova Social (25+ Depoimentos Reais do Google 5.0 ★ + Botão Google Maps) */}
      <GoogleReviews />

      {/* Dobra 5: Localização, Horários e Rota GPS */}
      <LocationAndHours />

      {/* Rodapé Editorial Minimalista */}
      <Footer />
    </main>
  );
}
