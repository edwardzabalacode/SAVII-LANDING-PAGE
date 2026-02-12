import { Badge } from "./Badge";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 sm:mb-16 ${alignClass}`}>
      {badge && <Badge className="mb-4">{badge}</Badge>}
      <h2
        className={`font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight ${
          light ? "text-text-light" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg sm:text-xl max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-text-secondary"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
