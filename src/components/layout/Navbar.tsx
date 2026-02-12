"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Download } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const scrollY = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-surface-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo — image is square with padding, so we scale it larger and use negative margins */}
            <a href="#" className="shrink-0">
              <Image
                src="/icon.png"
                alt="Savii"
                width={400}
                height={400}
                className="h-28 w-auto -my-10"
                priority
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button size="sm" href="#">
                <Download className="h-4 w-4" />
                Descargar
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
