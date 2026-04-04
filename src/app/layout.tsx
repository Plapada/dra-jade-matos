import type { Metadata } from "next";
import { playfair, dmSans } from "@/lib/fonts";
import { generatePhysicianSchema, generateFAQSchema, generateLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drajadematos.com.br"),
  title: "Dra. Jade Matos | Ginecologista em Salvador, BA",
  description:
    "Ginecologista e Cirurgiã Ginecológica em Salvador. Atendimento humanizado e acolhedor para todas as fases da vida da mulher. Agende sua consulta com a Dra. Jade Matos.",
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
  authors: [{ name: "Dra. Jade Matos" }],
  creator: "Dra. Jade Matos",
  openGraph: {
    title: "Dra. Jade Matos | Ginecologista em Salvador, BA",
    description:
      "Cuidado ginecológico humanizado e acolhedor em Salvador, BA. Agende sua consulta.",
    url: "https://drajadematos.com.br",
    siteName: "Dra. Jade Matos - Ginecologista",
    images: [
      {
        url: "/images/IMG_2354.jpg",
        width: 800,
        height: 1067,
        alt: "Dra. Jade Matos - Ginecologista em Salvador",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Jade Matos | Ginecologista em Salvador",
    description:
      "Cuidado ginecológico humanizado e acolhedor em Salvador, BA.",
    images: ["/images/IMG_2354.jpg"],
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
