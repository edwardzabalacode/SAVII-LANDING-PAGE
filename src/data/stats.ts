export interface Stat {
  value: number;
  suffix: string;
  label: string;
  iconName: "Download" | "Star" | "MessageSquare" | "Globe";
}

export const stats: Stat[] = [
  {
    value: 50,
    suffix: "K+",
    label: "Descargas",
    iconName: "Download",
  },
  {
    value: 4.8,
    suffix: "",
    label: "Calificación",
    iconName: "Star",
  },
  {
    value: 1.2,
    suffix: "K",
    label: "Reseñas",
    iconName: "MessageSquare",
  },
  {
    value: 3,
    suffix: "",
    label: "Idiomas",
    iconName: "Globe",
  },
];
