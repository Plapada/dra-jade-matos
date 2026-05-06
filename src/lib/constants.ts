export const SITE_CONFIG = {
  name: "Drª Jade Matos",
  title: "Drª Jade Matos | Ginecologista e Cirurgiã em Salvador, BA",
  description:
    "Ginecologista e Cirurgiã Ginecológica em Salvador. Atendimento humanizado para todas as fases da vida — do cuidado preventivo ao tratamento cirúrgico. Agende sua consulta com a Drª Jade Matos.",
  url: "https://drajadematos.com.br",
  instagram: "https://instagram.com/drajadematos",
  instagramHandle: "@drajadematos",
  whatsappNumber: "5571993311582",
  whatsappMessage:
    "Olá! Gostaria de agendar uma consulta com a Drª Jade Matos.",
  crm: "CRM-BA 00000",
  rqe: "RQE 00000",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

export const LOCATIONS = [
  {
    name: "Clínica Anna Paola",
    address: "R. Eduardo José dos Santos, 147",
    city: "Salvador, BA",
    phone: "(71) 3511-2633",
    phoneAlt: "(71) 3237-2633",
    hours: "Seg - Sex: 8h às 18h",
    note: "Agendamento pelo WhatsApp da clínica ou call center. Atende convênios e particular.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d-38.46!3d-12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ4LjAiUyAzOMKwMjcnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1",
  },
  {
    name: "Centro Médico Mater Dei",
    address: "R. Dr. Rômulo Serrano, 224",
    city: "Salvador, BA",
    phone: "App Meu Mater Dei",
    hours: "Seg - Sex: 8h às 17h",
    note: "Agendamento exclusivo pelo aplicativo Meu Mater Dei.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d-38.46!3d-12.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzQ4LjAiUyAzOMKwMjcnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1",
  },
] as const;

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Localização", href: "#localizacao" },
] as const;
