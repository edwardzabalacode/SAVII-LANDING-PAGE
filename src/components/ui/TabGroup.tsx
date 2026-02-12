"use client";

import {
  Mic,
  BarChart3,
  Share2,
  Globe,
  Tag,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { Tab } from "./Tab";

const iconMap: Record<string, LucideIcon> = {
  Mic,
  BarChart3,
  Share2,
  Globe,
  Tag,
  Palette,
};

interface TabItem {
  id: string;
  iconName: string;
  title: string;
}

interface TabGroupProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function TabGroup({ tabs, activeTab, onTabChange }: TabGroupProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:justify-center">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          active={activeTab === tab.id}
          icon={iconMap[tab.iconName] || Mic}
          label={tab.title}
          onClick={() => onTabChange(tab.id)}
        />
      ))}
    </div>
  );
}
