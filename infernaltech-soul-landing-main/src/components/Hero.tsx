
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4 py-16 md:py-24 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Soluciones <span className="bg-clip-text text-transparent flame-gradient">Infernales</span> Para Problemas Terrenales
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Intercambia lo que no necesitas por lo que realmente deseas. 
            Tu alma por nuestras soluciones tecnológicas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-lg py-6 px-8 infernal-button pulse-glow">
              <a href="#contacto" className="flex items-center gap-2">
                <Zap size={20} />
                <span>Vende tu alma ahora</span>
              </a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg py-6 px-8 infernal-button">
              <a href="#soluciones">Ver soluciones</a>
            </Button>
          </div>
          
          <div className="mt-12 p-4 infernal-card">
            <p className="text-sm text-foreground/70 italic">
              * Todos los contratos son vinculantes por la eternidad. InfernalTech no se hace responsable 
              de las consecuencias kármicas o espirituales de nuestros servicios.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#beneficios" aria-label="Scroll down">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
