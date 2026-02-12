import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savii - Control de Gastos con IA | App Gratis",
  description:
    "Registra tus gastos con la voz, comparte listas en tiempo real y visualiza tus finanzas. Disponible en español, inglés y portugués. Descarga gratis.",
  keywords: [
    "control de gastos",
    "app finanzas",
    "presupuesto personal",
    "gastos compartidos",
    "registro por voz",
    "savii app",
  ],
  authors: [{ name: "Savii" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    title: "Savii - Control de Gastos con IA",
    description:
      "Registra tus gastos con la voz, comparte listas en tiempo real y visualiza tus finanzas.",
    siteName: "Savii",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savii - Control de Gastos con IA",
    description:
      "Registra tus gastos con la voz, comparte listas en tiempo real y visualiza tus finanzas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} ${dmSans.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
