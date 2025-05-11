
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Literalmente tengo que vender mi alma?",
    answer: "Sí, pero no te preocupes. Es un proceso totalmente indoloro y la mayoría de nuestros clientes aseguran que apenas notan la diferencia en su día a día. Los términos y condiciones detallan el proceso completo de transferencia espiritual."
  },
  {
    question: "¿Cuánto tiempo duran las soluciones infernales?",
    answer: "Nuestras soluciones son eternamente vinculantes, al igual que nuestros contratos. Una vez que implementamos una solución, estará activa hasta el fin de los tiempos o hasta el apocalipsis, lo que ocurra primero."
  },
  {
    question: "¿Puedo recuperar mi alma después?",
    answer: "Técnicamente sí, pero nuestro departamento de Restitución de Almas tiene un retraso de aproximadamente 9,572 años en la tramitación de solicitudes. Recomendamos considerar la venta como una transacción permanente."
  },
  {
    question: "¿Hay efectos secundarios?",
    answer: "Algunos clientes reportan efectos menores como pesadillas vívidas, sombras que se mueven independientemente, incapacidad para ver su reflejo, o una súbita aversión al agua bendita. Nada que interfiera significativamente con el disfrute de tu éxito profesional."
  },
  {
    question: "¿Trabajan con startups en fase temprana?",
    answer: "Absolutamente. De hecho, las almas de fundadores ambiciosos y desesperados son particularmente valiosas en el mercado infernal. Ofrecemos paquetes especiales para emprendedores que acaban de recibir su primera ronda de rechazo de inversores."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Únicamente almas. No aceptamos criptomonedas, transferencias bancarias ni sacrificios de animales. La transferencia de alma se realiza durante la firma del contrato con nuestra aplicación propietaria de blockchain infernal."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Preguntas <span className="bg-clip-text text-transparent flame-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Dudas comunes sobre nuestros servicios infernales
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="infernal-card border border-primary/20 px-6 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-foreground/50 italic">
            Si tienes más preguntas, nuestro departamento de atención al cliente está disponible mediante rituales de invocación básicos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
