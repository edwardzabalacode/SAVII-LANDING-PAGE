export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  price: string | null;
  period: string | null;
  badge: string | null;
  features: PlanFeature[];
  cta: string;
  highlighted: boolean;
}

export const plans: Plan[] = [
  {
    name: "Gratis",
    price: null,
    period: null,
    badge: null,
    features: [
      { text: "Hasta 50 gastos por mes", included: true },
      { text: "10 categorías", included: true },
      { text: "1 lista personal", included: true },
      { text: "Estadísticas básicas", included: true },
      { text: "Registro por voz", included: true },
      { text: "Estadísticas avanzadas", included: false },
      { text: "Respaldo en la nube", included: false },
      { text: "Temas y recordatorios", included: false },
    ],
    cta: "Descargar gratis",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$2.99",
    period: "/mes",
    badge: "Recomendado",
    features: [
      { text: "Gastos ilimitados", included: true },
      { text: "+30 categorías + personalizadas", included: true },
      { text: "Listas ilimitadas", included: true },
      { text: "Estadísticas avanzadas", included: true },
      { text: "Respaldo en la nube", included: true },
      { text: "Todos los temas", included: true },
      { text: "Recordatorios", included: true },
      { text: "Sin anuncios", included: true },
      { text: "Soporte prioritario", included: true },
    ],
    cta: "Comenzar prueba gratis",
    highlighted: true,
  },
];
