import type { Metadata } from "next";
import { playfair, dmSans } from "@/lib/fonts";
import { generatePhysicianSchema, generateFAQSchema, generateLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drajadematos.com.br"),
  title: "Drª Jade Matos | Ginecologista e Cirurgiã em Salvador, BA",
  description:
    "Ginecologista e Cirurgiã Ginecológica em Salvador. Atendimento humanizado para todas as fases da vida — do cuidado preventivo ao tratamento cirúrgico. Agende sua consulta com a Drª Jade Matos.",
  keywords: [
    "ginecologista salvador",
    "ginecologista bahia",
    "cirurgia ginecologica salvador",
    "ginecologista mulher salvador",
    "consulta ginecologica salvador",
    "saude intima feminina salvador",
    "ginecologista salvador",
    "dra jade matos",
    "ginecologia humanizada",
    "saude da mulher salvador",
    "ginecologista feminina salvador",
    "planejamento familiar salvador",
    "exame preventivo salvador",
  ],
  authors: [{ name: "Drª Jade Matos" }],
  creator: "Drª Jade Matos",
  openGraph: {
    title: "Drª Jade Matos | Ginecologista em Salvador, BA",
    description:
      "Cuidado ginecológico humanizado e acolhedor em Salvador, BA. Agende sua consulta.",
    url: "https://drajadematos.com.br",
    siteName: "Drª Jade Matos - Ginecologista",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drª Jade Matos - Ginecologista em Salvador",
        type: "image/jpeg",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drª Jade Matos | Ginecologista em Salvador",
    description:
      "Cuidado ginecológico humanizado e acolhedor em Salvador, BA.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://drajadematos.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const physicianSchema = generatePhysicianSchema();
  const faqSchema = generateFAQSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        {/* Preload responsivo do hero — cada device baixa só a sua foto */}
        <link
          rel="preload"
          as="image"
          href="/images/IMG_2425.jpg"
          media="(max-width: 1023px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-jade-couch.jpg"
          media="(min-width: 1024px)"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physicianSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
