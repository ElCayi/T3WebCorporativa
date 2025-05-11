
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const SolutionCard = ({ 
  title, 
  description, 
  price, 
  features 
}: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[]; 
}) => {
  return (
    <Card className="infernal-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="font-display text-2xl">{title}</CardTitle>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-foreground/70"> / alma</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Zap className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary hover:bg-primary/90 infernal-button">
          <a href="#contacto" className="flex items-center justify-center gap-2 w-full">
            <span>Seleccionar</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "Paquete Tentación",
      description: "Para emprendedores que buscan una ventaja",
      price: "1/4",
      features: [
        "Éxito moderado en tus proyectos",
        "Inspiración sobrenatural ocasional",
        "Protección básica contra competidores",
        "1 deseo de negocio concedido",
        "Soporte por invocación básica"
      ]
    },
    {
      title: "Paquete Purgatorio",
      description: "Para empresarios ambiciosos",
      price: "1/2",
      features: [
        "Todo lo del paquete Tentación",
        "Éxito garantizado en 3 proyectos grandes",
        "Capacidad de persuasión aumentada",
        "Lectura de mentes en negociaciones",
        "3 deseos de negocio concedidos",
        "Soporte por invocación premium"
      ]
    },
    {
      title: "Paquete Condenación",
      description: "Dominio total y absoluto",
      price: "Completa",
      features: [
        "Todo lo del paquete Purgatorio",
        "Dominio absoluto en tu industria",
        "Infalibilidad en decisiones de negocio",
        "Deseos ilimitados (con restricciones)",
        "Un demonio asistente personal",
        "Soporte por invocación VIP",
        "Extra: 10% de descuento en tu próxima vida"
      ]
    }
  ];

  return (
    <section id="soluciones" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Nuestras <span className="bg-clip-text text-transparent flame-gradient">Soluciones</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Elige el nivel de poder infernal que necesitas para alcanzar tus objetivos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              title={solution.title}
              description={solution.description}
              price={solution.price}
              features={solution.features}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-foreground/50 italic">
            Las condiciones pueden variar según la pureza de tu alma. Se aplican términos y condiciones infernales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
