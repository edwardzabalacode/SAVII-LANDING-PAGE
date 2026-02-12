export interface Feature {
  id: string;
  iconName: "Mic" | "BarChart3" | "Share2" | "Globe" | "Tag" | "Palette";
}

export const features: Feature[] = [
  { id: "voice", iconName: "Mic" },
  { id: "stats", iconName: "BarChart3" },
  { id: "share", iconName: "Share2" },
  { id: "multilang", iconName: "Globe" },
  { id: "categories", iconName: "Tag" },
  { id: "themes", iconName: "Palette" },
];
