
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-primary/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Zap size={24} className="text-primary animate-flame" />
          <h1 className="text-xl md:text-2xl font-display font-bold bg-clip-text text-transparent flame-gradient">
            InfernalTech
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#soluciones" className="text-foreground/80 hover:text-primary transition-colors">
            Soluciones
          </a>
          <a href="#beneficios" className="text-foreground/80 hover:text-primary transition-colors">
            Beneficios
          </a>
          <a href="#testimonios" className="text-foreground/80 hover:text-primary transition-colors">
            Testimonios
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 infernal-button">
          <a href="#contacto">Vende tu alma</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
