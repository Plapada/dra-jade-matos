export const SITE_CONFIG = {
  name: "Dra. Jade Matos",
  title: "Dra. Jade Matos | Ginecologista em Salvador, BA",
  description:
    "Ginecologista e Cirurgiã Ginecológica em Salvador. Atendimento humanizado e acolhedor para todas as fases da vida da mulher. Agende sua consulta com a Dra. Jade Matos.",
  url: "https://drajadematos.com.br",
  instagram: "https://instagram.com/drajadematos",
  instagramHandle: "@drajadematos",
  whatsappNumber: "5571999999999",
  whatsappMessage:
    "Olá! Gostaria de agendar uma consulta com a Dra. Jade Matos.",
  crm: "CRM-BA 00000",
  rqe: "RQE 00000",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

export const LOCATIONS = [
  {
    name: "Consultório Particular",
    address: "R. Eduardo José dos Santos, 147",
    city: "Salvador, BA",
    phone: "(71) 99999-9999",
    hours: "Seg - Sex: 8h às 18h",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d-38.46!3d-12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ4LjAiUyAzOMKwMjcnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1",
  },
  {
    name: "Centro Médico Mater Dei",
    address: "R. Dr. Rômulo Serrano, 224",
    city: "Salvador, BA",
    phone: "(71) 99999-9999",
    hours: "Seg - Sex: 8h às 17h",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d-38.46!3d-12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ4LjAiUyAzOMKwMjcnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1",
  },
] as const;

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Localização", href: "#localizacao" },
] as const;
