export interface Screenshot {
  id: string;
  label: string;
  lightSrc: string;
  darkSrc: string;
}

export const screenshots: Screenshot[] = [
  {
    id: "home",
    label: "Inicio",
    lightSrc: "/images/screenshots/light-home.png",
    darkSrc: "/images/screenshots/dark-home.png",
  },
  {
    id: "add-expense",
    label: "Agregar gasto",
    lightSrc: "/images/screenshots/light-add-expense.png",
    darkSrc: "/images/screenshots/dark-add-expense.png",
  },
  {
    id: "voice",
    label: "Registro por voz",
    lightSrc: "/images/screenshots/light-voice.png",
    darkSrc: "/images/screenshots/dark-voice.png",
  },
  {
    id: "categories",
    label: "Categorías",
    lightSrc: "/images/screenshots/light-categories.png",
    darkSrc: "/images/screenshots/dark-categories.png",
  },
  {
    id: "statistics",
    label: "Estadísticas",
    lightSrc: "/images/screenshots/light-statistics.png",
    darkSrc: "/images/screenshots/dark-statistics.png",
  },
  {
    id: "shared-lists",
    label: "Listas compartidas",
    lightSrc: "/images/screenshots/light-shared-lists.png",
    darkSrc: "/images/screenshots/dark-shared-lists.png",
  },
  {
    id: "settings",
    label: "Configuración",
    lightSrc: "/images/screenshots/light-settings.png",
    darkSrc: "/images/screenshots/dark-settings.png",
  },
  {
    id: "premium",
    label: "Premium",
    lightSrc: "/images/screenshots/light-premium.png",
    darkSrc: "/images/screenshots/dark-premium.png",
  },
];
