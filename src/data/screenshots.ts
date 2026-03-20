export interface Screenshot {
  id: string;
  key: string;
  lightSrc: string;
  darkSrc: string;
}

export const screenshots: Screenshot[] = [
  {
    id: "home",
    key: "home",
    lightSrc: "/images/screenshots/home.webp",
    darkSrc: "/images/screenshots/home.webp",
  },
  {
    id: "add-expense",
    key: "addExpense",
    lightSrc: "/images/screenshots/gasto.webp",
    darkSrc: "/images/screenshots/gasto.webp",
  },
  {
    id: "voice",
    key: "voiceRecord",
    lightSrc: "/images/screenshots/grabadordevoz.webp",
    darkSrc: "/images/screenshots/grabadordevoz.webp",
  },
  {
    id: "statistics",
    key: "statistics",
    lightSrc: "/images/screenshots/Estadisticas.webp",
    darkSrc: "/images/screenshots/Estadisticas.webp",
  },
];
