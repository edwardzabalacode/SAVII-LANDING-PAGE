export interface Stat {
  key: string;
  value: number;
  suffix: string;
  iconName: "Download" | "Star" | "MessageSquare" | "Globe";
}

export const stats: Stat[] = [
  { key: "downloads", value: 50, suffix: "K+", iconName: "Download" },
  { key: "rating", value: 4.8, suffix: "", iconName: "Star" },
  { key: "reviews", value: 1.2, suffix: "K", iconName: "MessageSquare" },
  { key: "languages", value: 3, suffix: "", iconName: "Globe" },
];
