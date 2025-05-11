
import React from 'react';
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={24} className="text-primary animate-flame" />
              <h2 className="text-2xl font-display font-bold bg-clip-text text-transparent flame-gradient">
                InfernalTech
              </h2>
            </div>
            <p className="text-foreground/70 mb-4">
              Transformando desesperación en éxito desde el amanecer de los tiempos.
            </p>
            <p className="text-sm text-foreground/50">
              © {new Date().getFullYear()} InfernalTech S.A.
              <br />Todos los derechos reservados por toda la eternidad.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Soluciones</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary hover:underline">Paquete Tentación</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Paquete Purgatorio</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Paquete Condenación</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Soluciones Personalizadas</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Servicios para Startups</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Recursos</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary hover:underline">Guía de Rituales</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Blog Infernal</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Testimonios</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Soporte Técnico</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-primary hover:underline">Términos Infernales</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Condiciones del Alma</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-primary hover:underline">Consentimiento Eterno</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/20 text-center text-sm text-foreground/50">
          <p>
            InfernalTech opera desde una dimensión alternativa. No nos hacemos responsables de cambios en la realidad, 
            paradojas temporales, o alteraciones en la estructura del universo derivadas del uso de nuestros servicios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
