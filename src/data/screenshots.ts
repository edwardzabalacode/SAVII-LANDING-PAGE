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
    lightSrc: "/images/screenshots/home.png",
    darkSrc: "/images/screenshots/home.png",
  },
  {
    id: "add-expense",
    label: "Agregar gasto",
    lightSrc: "/images/screenshots/gasto.png",
    darkSrc: "/images/screenshots/gasto.png",
  },
  {
    id: "voice",
    label: "Registro por voz",
    lightSrc: "/images/screenshots/grabadordevoz.png",
    darkSrc: "/images/screenshots/grabadordevoz.png",
  },
  // {
  //   id: "categories",
  //   label: "Categorías",
  //   lightSrc: "/images/screenshots/categoria.png",
  //   darkSrc: "/images/screenshots/categoria.png",
  // },
  {
    id: "statistics",
    label: "Estadísticas",
    lightSrc: "/images/screenshots/Estadisticas.png",
    darkSrc: "/images/screenshots/Estadisticas.png",
  },
  {
    id: "shared-lists",
    label: "Listas compartidas",
    lightSrc: "/images/screenshots/listacompartida.png",
    darkSrc: "/images/screenshots/listacompartida.png",
  },
  // TODO: Descomentar cuando las capturas estén disponibles
  // {
  //   id: "settings",
  //   label: "Configuración",
  //   lightSrc: "/images/screenshots/light-settings.png",
  //   darkSrc: "/images/screenshots/dark-settings.png",
  // },
  // {
  //   id: "premium",
  //   label: "Premium",
  //   lightSrc: "/images/screenshots/light-premium.png",
  //   darkSrc: "/images/screenshots/dark-premium.png",
  // },
];
