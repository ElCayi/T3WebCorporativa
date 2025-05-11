
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Star, Award, Shield, Target, Heart } from "lucide-react";

const BenefitCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <Card className="infernal-card transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-primary/20">
    <CardHeader className="pb-2">
      <div className="w-12 h-12 rounded-full flame-gradient flex items-center justify-center mb-4">
        <Icon className="text-white" size={24} />
      </div>
      <CardTitle className="font-display text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-foreground/80">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Poder Instantáneo",
      description: "Accede a poderes y habilidades que nunca creíste posibles. Resultados inmediatos garantizados."
    },
    {
      icon: Star,
      title: "Éxito Garantizado",
      description: "Olvídate del fracaso. Nuestras soluciones infernales aseguran el éxito en todos tus proyectos."
    },
    {
      icon: Award,
      title: "Reconocimiento Supremo",
      description: "Conviértete en el mejor en tu campo. La admiración y el reconocimiento serán inevitables."
    },
    {
      icon: Shield,
      title: "Protección Total",
      description: "Escudo contra fracasos, errores y competidores. Ninguna fuerza terrenal podrá detenerte."
    },
    {
      icon: Target,
      title: "Precisión Sobrenatural",
      description: "Alcanza tus objetivos con una precisión que desafía las leyes de la probabilidad."
    },
    {
      icon: Heart,
      title: "Satisfacción Eterna*",
      description: "Experimenta una satisfacción más allá de lo humano con cada solución implementada."
    }
  ];

  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Beneficios <span className="bg-clip-text text-transparent flame-gradient">Infernales</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            ¿Por qué conformarse con soluciones mundanas cuando puedes tener poder infernal respaldando tus proyectos?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-foreground/50 italic">
            * La satisfacción eterna es subjetiva y puede variar según el individuo. 
            No se aceptan reembolsos de almas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
