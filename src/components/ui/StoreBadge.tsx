import Image from "next/image";

interface StoreBadgeProps {
  store: /* "apple" | */ "google";
  href?: string;
}

const storeConfig = {
  // TODO: Descomentar cuando la app esté disponible en iOS
  // apple: {
  //   src: "/images/icons/app-store.svg",
  //   alt: "Descargar en App Store",
  // },
  google: {
    src: "/images/icons/play-store.svg",
    alt: "Disponible en Google Play",
  },
};

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.saviiapp.savii&hl=es_419";

export function StoreBadge({ store, href = GOOGLE_PLAY_URL }: StoreBadgeProps) {
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
        width={180}
        height={54}
        className="h-[54px] w-auto"
      />
    </a>
  );
}
