import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { navLinks, footerLinks, socialLinks } from "@/data/navigation";
import { Instagram, Twitter, Youtube, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Twitter,
  Youtube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-text-light">
      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/icon.png"
              alt="Savii"
              width={140}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Tu asistente financiero inteligente. Controla tus gastos con la
              voz, comparte listas y visualiza tus finanzas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Síguenos
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.iconName];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-lg bg-white/10 hover:bg-primary-500 text-gray-300 hover:text-white transition-all"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Savii. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
