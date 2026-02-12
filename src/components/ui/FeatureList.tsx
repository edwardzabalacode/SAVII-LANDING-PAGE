import { Check, X } from "lucide-react";

interface FeatureItem {
  text: string;
  included: boolean;
}

interface FeatureListProps {
  features: FeatureItem[];
  className?: string;
}

export function FeatureList({ features, className = "" }: FeatureListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {features.map((feature) => (
        <li key={feature.text} className="flex items-start gap-3">
          {feature.included ? (
            <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
          ) : (
            <X className="h-5 w-5 text-text-muted shrink-0 mt-0.5" />
          )}
          <span
            className={
              feature.included ? "text-text-primary" : "text-text-muted"
            }
          >
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
