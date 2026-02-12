interface WaveDividerProps {
  variant?: "primary" | "dark" | "light" | "alt";
  flip?: boolean;
  className?: string;
}

const fills: Record<string, string> = {
  primary: "#F3F0FF",
  dark: "#0F0A1A",
  light: "#FAFAFA",
  alt: "#F3F0FF",
};

export function WaveDivider({ variant = "light", flip = false, className = "" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 55C960 40 1056 20 1152 25C1248 30 1344 60 1392 75L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
          fill={fills[variant]}
        />
      </svg>
    </div>
  );
}
