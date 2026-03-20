export interface NavLink {
  key: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: "Instagram" | "TikTok";
}

export const navLinks: NavLink[] = [
  { key: "features", href: "#funciones" },
  { key: "screenshots", href: "#capturas" },
  { key: "faq", href: "#faq" },
];

export const footerLinks: NavLink[] = [
  { key: "privacyPolicy", href: "/privacidad" },
  { key: "termsOfUse", href: "/terminos" },
  { key: "contact", href: "/contacto" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "#", iconName: "Instagram" },
  { label: "TikTok", href: "#", iconName: "TikTok" },
];
