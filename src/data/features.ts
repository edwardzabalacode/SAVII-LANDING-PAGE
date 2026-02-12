export interface Feature {
  id: string;
  iconName: "Mic" | "BarChart3" | "Share2" | "Globe" | "Tag" | "Palette";
  title: string;
  description: string;
  bullets: string[];
}

export const features: Feature[] = [
  {
    id: "voice",
    iconName: "Mic",
    title: "Registra con tu voz",
    description:
      "Di naturalmente cuánto gastaste y Savii entiende todo. Nuestra IA extrae el monto, detecta la categoría y genera una descripción automáticamente.",
    bullets: [
      "Extrae el monto automáticamente",
      "Detecta la categoría",
      "Genera descripción",
      "Soporta 3 idiomas",
    ],
  },
  {
    id: "stats",
    iconName: "BarChart3",
    title: "Visualiza tu dinero",
    description:
      "Gráficos claros que muestran exactamente hacia dónde va cada peso. Analiza tus hábitos y toma mejores decisiones financieras.",
    bullets: [
      "Gráficos por categoría",
      "Análisis por período",
      "Promedio diario",
      "Tendencias de gasto",
    ],
  },
  {
    id: "share",
    iconName: "Share2",
    title: "Finanzas en equipo",
    description:
      "Comparte listas con tu pareja, roomies o familia. Cualquier cambio se sincroniza en tiempo real para que todos estén al día.",
    bullets: [
      "Código de 6 dígitos para unirse",
      "Sincronización en tiempo real",
      "Múltiples listas compartidas",
      "Fácil de invitar",
    ],
  },
  {
    id: "multilang",
    iconName: "Globe",
    title: "Tu idioma, tu moneda",
    description:
      "Savii está completamente traducido a español, inglés y portugués. Además soporta más de 70 monedas internacionales.",
    bullets: [
      "Español, inglés y portugués",
      "+70 monedas del mundo",
      "Símbolos y formatos correctos",
      "Formato local automático",
    ],
  },
  {
    id: "categories",
    iconName: "Tag",
    title: "Organiza a tu manera",
    description:
      "Más de 30 categorías predefinidas o crea las tuyas con iconos y colores personalizados. Tu sistema, tus reglas.",
    bullets: [
      "+30 categorías incluidas",
      "Totalmente personalizables",
      "Con iconos intuitivos",
      "Con colores distintivos",
    ],
  },
  {
    id: "themes",
    iconName: "Palette",
    title: "Cuida tus ojos",
    description:
      "Elige entre modo claro, oscuro o automático según la configuración de tu sistema. Tus ojos te lo agradecerán.",
    bullets: [
      "Modo claro y oscuro",
      "Automático con el sistema",
      "Colores adaptativos",
      "Temas Premium exclusivos",
    ],
  },
];
