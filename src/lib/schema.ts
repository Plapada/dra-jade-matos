import { SITE_CONFIG, LOCATIONS } from "./constants";
import { faqItems } from "@/data/faq";

export function generatePhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    medicalSpecialty: "Gynecology",
    image: `${SITE_CONFIG.url}/images/IMG_2354.jpg`,
    url: SITE_CONFIG.url,
    telephone: LOCATIONS[0].phone,
    address: LOCATIONS.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR",
    })),
    sameAs: [SITE_CONFIG.instagram],
    knowsAbout: [
      "Ginecologia",
      "Cirurgia Ginecológica",
      "Pré-natal",
      "Saúde da Mulher",
      "Planejamento Familiar",
    ],
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/IMG_2354.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: LOCATIONS[0].address,
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };
}
