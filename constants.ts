import { Disc, Activity, Move, Gauge, Droplet, Wrench } from 'lucide-react';
import { ServiceItem, SlideData, ContactInfo, Review } from './types';

export const LOGO_URL = "https://i.ibb.co/0j8kVGwY/241363217-172956808200206-1637292298778897414-n.jpg";

export const CONTACT: ContactInfo = {
  phone: "(16) 3662-0718",
  whatsappLink: "https://wa.me/551636620718",
  address: "Av. 14 de Março, 567, Centro, Batatais – SP"
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'brakes',
    title: 'Freios de Alta Performance',
    description: 'Diagnóstico e manutenção de todo sistema de frenagem para garantir sua segurança total.',
    icon: Disc
  },
  {
    id: 'suspension',
    title: 'Suspensão Esportiva & Convencional',
    description: 'Estabilidade e conforto. Revisão completa de amortecedores, molas e componentes.',
    icon: Activity
  },
  {
    id: 'alignment',
    title: 'Alinhamento 3D',
    description: 'Precisão milimétrica para evitar desgaste irregular dos pneus e melhorar a dirigibilidade.',
    icon: Move
  },
  {
    id: 'balancing',
    title: 'Balanceamento Dinâmico',
    description: 'Elimine vibrações e garanta um rodar suave em altas e baixas velocidades.',
    icon: Gauge
  },
  {
    id: 'oil',
    title: 'Troca de Óleo & Filtros',
    description: 'Lubrificantes premium para máxima proteção e longevidade do motor.',
    icon: Droplet
  },
  {
    id: 'general',
    title: 'Manutenção Geral',
    description: 'Revisão mecânica completa. Motor, correias e fluidos. (Exceto parte elétrica).',
    icon: Wrench
  }
];

export const SLIDES: SlideData[] = [
  {
    id: 1,
    subtitle: "OFICINA PREMIUM",
    title: "TECNOLOGIA DE PONTA"
  },
  {
    id: 2,
    subtitle: "PERFORMANCE PURA",
    title: "PRECISÃO QUE MOVE"
  },
  {
    id: 3,
    subtitle: "CONFIANÇA TOTAL",
    title: "EXCELÊNCIA AUTOMOTIVA"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Andreia Tata",
    text: "Atendimento excelente do começo ao fim! A equipe da Franco Auto Center é atenciosa, educada e sempre disposta a explicar com clareza os serviços que estão sendo feitos. É nítido que há preocupação real com o cliente e com a entrega de um serviço de qualidade. Além disso, o ambiente está cada vez mais organizado e profissional, fruto do investimento e da seriedade com que a empresa vem trabalhando. Atendimento de primeira! Recomendo de olhos fechados! 👏🏼🔧🚗"
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    text: "Atendimento rápido, prático e preciso. Parabéns por toda estrutura e excelência durante todo o tempo do serviço feito em meu carro. Obrigado 🙏🏾"
  },
  {
    id: 3,
    name: "Carlos Alexandre Mazzaron",
    text: "Excelente atendimento! Os profissionais são ótimos, parabéns à equipe Franco Auto Center Batatais."
  },
  {
    id: 4,
    name: "Osmar Junior",
    text: "Foi uma experiência muito incrível, queria parabenizar toda a equipe da Franco Auto Center Batatais, pois o que eles prometeram, eles entregaram e ficou nota 100! Gratidão 🙏🏻"
  },
  {
    id: 5,
    name: "Licca Pérez",
    text: "Melhor lugar pra arrumar o carro, serviço de qualidade e atendimento."
  }
];