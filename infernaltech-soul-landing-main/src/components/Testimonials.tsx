
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Carlos D.",
    role: "CEO, Startup Desesperada",
    avatar: "CD",
    content: "Estaba al borde de la bancarrota. Un simple intercambio y ahora mi startup está valorada en 5 billones. No extraño mi alma en absoluto. Excelente servicio, lo recomendaría a cualquier emprendedor desesperado.",
  },
  {
    name: "Laura M.",
    role: "Desarrolladora Senior",
    avatar: "LM",
    content: "Mis habilidades de programación eran mediocres hasta que contraté los servicios de InfernalTech. Ahora puedo programar en cualquier lenguaje sin errores y mis soluciones son prácticamente mágicas. Pequeño precio a pagar.",
  },
  {
    name: "Ricardo F.",
    role: "Inversor en Silicon Valley",
    avatar: "RF",
    content: "He perdido la capacidad de sentir alegría, pero mis inversiones nunca han sido más acertadas. 1000% de retorno garantizado. El mejor trato que he hecho jamás.",
  },
  {
    name: "Elena P.",
    role: "Directora de Marketing",
    avatar: "EP",
    content: "Mis campañas ahora tienen un efecto hipnótico en los consumidores. Las ventas se han multiplicado y mi carrera ha despegado. Ya no puedo ver mi reflejo, pero ¿quién necesita eso cuando tienes éxito?",
  },
  {
    name: "Miguel A.",
    role: "Fundador, TechNecronomicon",
    avatar: "MA",
    content: "InfernalTech transformó mi mediocre startup en una potencia tecnológica. Ahora tengo visiones extrañas y mi sombra parece moverse independientemente, pero los resultados financieros hablan por sí solos. Totalmente recomendado.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonios" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/20 blur-[80px] rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Almas <span className="bg-clip-text text-transparent flame-gradient">Satisfechas</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Lo que dicen nuestros clientes sobre su experiencia con nuestras soluciones infernales
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <Card className="infernal-card bg-card/80">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 flame-gradient blur-md rounded-full scale-110"></div>
                    <Avatar className="w-24 h-24 border-4 border-background relative">
                      <AvatarFallback className="bg-primary/20 text-xl font-bold">
                        {testimonials[activeIndex].avatar}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <blockquote className="mb-4 text-lg italic">
                    "{testimonials[activeIndex].content}"
                  </blockquote>
                  
                  <div>
                    <p className="font-bold text-xl">{testimonials[activeIndex].name}</p>
                    <p className="text-foreground/70">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.filter((_, i) => i !== activeIndex).map((testimonial, index) => (
              <Card 
                key={index} 
                className="infernal-card bg-card/40 cursor-pointer transition-all hover:bg-card/80"
                onClick={() => setActiveIndex(testimonials.findIndex(t => t.name === testimonial.name))}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <Avatar className="border-2 border-primary/30">
                      <AvatarFallback className="bg-primary/10">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm line-clamp-2">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
