export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "¿Savii es gratis?",
    answer:
      "Sí, Savii tiene un plan gratuito con todas las funciones esenciales. El plan Premium desbloquea características avanzadas como gastos ilimitados y respaldo en la nube.",
  },
  {
    question: "¿Cómo funciona el registro por voz?",
    answer:
      "Solo presiona el botón del micrófono y habla naturalmente. Nuestra IA (Gemini) extrae el monto, detecta la categoría y genera una descripción automáticamente.",
  },
  {
    question: "¿Puedo compartir mis gastos con mi pareja?",
    answer:
      "¡Sí! Crea una lista compartida e invita a tu pareja o roomie. Cada quien registra sus gastos y todo se sincroniza en tiempo real.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Absolutamente. Tus datos se almacenan de forma segura en tu dispositivo y también puedes hacer respaldo en la nube.",
  },
  {
    question: "¿En qué idiomas está disponible?",
    answer:
      "Savii está completamente traducido a español, inglés y portugués. Tanto la interfaz como el reconocimiento de voz.",
  },
  {
    question: "¿Puedo usar mi propia moneda?",
    answer:
      "Sí, soportamos más de 70 monedas internacionales con sus símbolos y formatos correctos.",
  },
];
