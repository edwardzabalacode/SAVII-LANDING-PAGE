import Image from "next/image";

interface StoreBadgeProps {
  store: "apple" | "google";
  href?: string;
}

const storeConfig = {
  apple: {
    src: "/images/icons/app-store.svg",
    alt: "Descargar en App Store",
  },
  google: {
    src: "/images/icons/play-store.svg",
    alt: "Disponible en Google Play",
  },
};

export function StoreBadge({ store, href = "#" }: StoreBadgeProps) {
  const config = storeConfig[store];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-transform hover:scale-105"
    >
      <Image
        src={config.src}
        alt={config.alt}
        width={135}
        height={40}
        className="h-10 w-auto"
      />
    </a>
  );
}
