import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Center Car - Lavação Automotiva | O Brilho Máximo em Rio do Sul - SC",
  description:
    "Lavação automotiva técnica, detalhamento de alto padrão e proteção completa da pintura em Rio do Sul. Nota 5.0 no Google com cuidado cirúrgico em cada detalhe. Agende via WhatsApp.",
  keywords: [
    "lavação automotiva Rio do Sul",
    "estética automotiva Rio do Sul",
    "Center Car Lavação",
    "detalhamento automotivo Rio do Sul",
    "higienização interna de veículos Rio do Sul",
    "limpeza de carros Laranjeiras Rio do Sul",
    "polimento e proteção de pintura SC",
  ],
  authors: [{ name: "Center Car - Lavação Automotiva" }],
  creator: "Center Car",
  publisher: "Center Car",
  metadataBase: new URL("https://centercarlavacao.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Center Car - Lavação Automotiva | Rio do Sul - SC",
    description:
      "O brilho máximo e a proteção definitiva para o seu veículo em Rio do Sul. Nota 5.0 ★ no Google.",
    url: "https://centercarlavacao.com.br",
    siteName: "Center Car - Lavação Automotiva",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero-car-desktop.png",
        width: 1200,
        height: 630,
        alt: "Center Car - Lavação Automotiva em Rio do Sul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Center Car - Lavação Automotiva | Rio do Sul - SC",
    description: "Lavação técnica e detalhamento automotivo de excelência em Rio do Sul. Nota 5.0 no Google.",
    images: ["/images/hero-car-desktop.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "name": "Center Car - Lavação Automotiva",
    "image": "https://centercarlavacao.com.br/images/hero-car-desktop.png",
    "telephone": "+55-47-99163-5180",
    "url": "https://centercarlavacao.com.br",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Otto Ern, 1157",
      "addressLocality": "Rio do Sul",
      "addressRegion": "SC",
      "postalCode": "89167-324",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.2148,
      "longitude": -49.6432
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "44",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/centercarlavauto/",
      "https://www.facebook.com/profile.php?id=61579031135731"
    ]
  };

  return (
    <html lang="pt-BR" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#07090E] text-white font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
