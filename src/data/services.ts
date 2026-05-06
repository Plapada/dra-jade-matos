import { Stethoscope, ShieldCheck, Video, Activity } from "lucide-react";

export const services = [
  {
    icon: Stethoscope,
    title: "Consulta Ginecológica",
    image: "/images/expanded-image-1776477341614.png",
    imagePosition: "object-center",
    description:
      "Avaliação completa da saúde feminina em todas as fases da vida, com escuta atenta e sem julgamentos. Da primeira consulta da adolescente à transição da menopausa.",
    bullets: [
      "Adolescente",
      "Ginecologia endócrina",
      "Climatério e menopausa",
      "Rotina e prevenção",
    ],
  },
  {
    icon: Activity,
    title: "Cirurgia Ginecológica",
    image: "/images/expanded-image-1776477477660.png",
    imagePosition: "object-center",
    description:
      "Cirurgiã com foco em técnicas minimamente invasivas. Histeroscopia e laparoscopia conduzidas com precisão para uma recuperação mais tranquila e segura.",
    bullets: [
      "Histeroscopia",
      "Histerectomia",
      "Miomectomia",
      "Cistos ovarianos",
      "Laqueadura tubária",
      "Ninfoplastia",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Planejamento Familiar",
    image: "/images/expanded-image-1776477608436.png",
    imagePosition: "object-center",
    description:
      "Orientação sobre os métodos contraceptivos mais indicados para você, com respeito às suas escolhas e momento de vida. Planejamento reprodutivo consciente e seguro.",
    bullets: [
      "Métodos contraceptivos",
      "DIU hormonal e de cobre",
      "Planejamento reprodutivo",
      "Saúde sexual",
    ],
  },
  {
    icon: Video,
    title: "Consulta Online",
    image: "/images/expanded-image-1776477652620.png",
    imagePosition: "object-center",
    description:
      "Também realizo atendimentos particulares de forma online, para pacientes de qualquer lugar do Brasil. Mesmo cuidado acolhedor, no conforto da sua casa.",
    bullets: [
      "Consulta particular",
      "Atendimento em todo Brasil",
      "Flexibilidade de horário",
      "Acolhimento à distância",
    ],
  },
] as const;
