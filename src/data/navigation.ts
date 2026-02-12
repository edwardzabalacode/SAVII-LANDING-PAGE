export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: "Instagram" | "Twitter" | "Youtube";
}

export const navLinks: NavLink[] = [
  { label: "Funciones", href: "#funciones" },
  { label: "Capturas", href: "#capturas" },
  { label: "FAQ", href: "#faq" },
];

export const footerLinks: NavLink[] = [
  { label: "Política de Privacidad", href: "/privacidad" },
  { label: "Términos de Uso", href: "/terminos" },
  { label: "Contacto", href: "/contacto" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#", iconName: "Instagram" },
  { label: "Twitter", href: "#", iconName: "Twitter" },
  { label: "YouTube", href: "#", iconName: "Youtube" },
];
