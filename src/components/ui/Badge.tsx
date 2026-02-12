interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "neutral";
  className?: string;
}

const variantStyles = {
  primary: "bg-primary-100 text-primary-700",
  neutral: "bg-gray-100 text-gray-700",
};

export function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
