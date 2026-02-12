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
    lightSrc: "/images/screenshots/home.png",
    darkSrc: "/images/screenshots/home.png",
  },
  {
    id: "add-expense",
    key: "addExpense",
    lightSrc: "/images/screenshots/gasto.png",
    darkSrc: "/images/screenshots/gasto.png",
  },
  {
    id: "voice",
    key: "voiceRecord",
    lightSrc: "/images/screenshots/grabadordevoz.png",
    darkSrc: "/images/screenshots/grabadordevoz.png",
  },
  {
    id: "statistics",
    key: "statistics",
    lightSrc: "/images/screenshots/Estadisticas.png",
    darkSrc: "/images/screenshots/Estadisticas.png",
  },
  {
    id: "shared-lists",
    key: "sharedLists",
    lightSrc: "/images/screenshots/listacompartida.png",
    darkSrc: "/images/screenshots/listacompartida.png",
  },
];
