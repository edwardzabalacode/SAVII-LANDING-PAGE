"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import {
  Download,
  Star,
  MessageSquare,
  Globe,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Download,
  Star,
  MessageSquare,
  Globe,
};

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}

export function StatCard({ value, suffix, label, iconName }: StatCardProps) {
  const { ref, isInView } = useInView();
  const [displayValue, setDisplayValue] = useState(0);
  const Icon = iconMap[iconName] || Download;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();
    const isDecimal = value % 1 !== 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      const current = eased * value;
      setDisplayValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4">
      <Icon className="h-6 w-6 text-primary-400 mx-auto mb-2" />
      <div className="font-display font-bold text-2xl sm:text-3xl text-text-primary">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm text-text-secondary mt-1">{label}</div>
    </div>
  );
}
