
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({
        title: "¡Alma recibida!",
        description: "Pronto un representante infernal se pondrá en contacto contigo.",
        variant: "destructive",
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Cierra el <span className="bg-clip-text text-transparent flame-gradient">Pacto</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Rellena el formulario para iniciar el proceso de intercambio
          </p>
        </div>
        
        {!submitted ? (
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="infernal-card p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input 
                    id="name" 
                    placeholder="Tu nombre terrenal" 
                    required 
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Para comunicaciones infernales" 
                    required 
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa/Proyecto</Label>
                  <Input 
                    id="company" 
                    placeholder="El beneficiario de nuestros poderes" 
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="solution">Solución deseada</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-primary/30">
                      <SelectValue placeholder="Selecciona un paquete" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tentacion">Paquete Tentación</SelectItem>
                      <SelectItem value="purgatorio">Paquete Purgatorio</SelectItem>
                      <SelectItem value="condenacion">Paquete Condenación</SelectItem>
                      <SelectItem value="custom">Solución Personalizada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Describe tu situación desesperada</Label>
                <Textarea 
                  id="message" 
                  placeholder="Cuéntanos por qué necesitas nuestras soluciones infernales..." 
                  rows={4}
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="expedited" />
                <Label htmlFor="expedited">Proceso acelerado (requiere una gota de sangre adicional)</Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required className="mt-1" />
                <div>
                  <Label 
                    htmlFor="terms" 
                    className="text-sm"
                  >
                    Confirmo que he leído y acepto los <a href="#" className="text-primary underline hover:text-primary/80">términos infernales</a> y entiendo que esta transacción es permanente e irrevocable.
                  </Label>
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={submitting} 
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6 infernal-button pulse-glow"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando alma...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Zap size={20} />
                    Vender mi alma
                  </span>
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="max-w-lg mx-auto infernal-card p-8 text-center">
            <div className="w-16 h-16 rounded-full flame-gradient flex items-center justify-center mx-auto mb-6">
              <Check className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">¡Alma en Procesamiento!</h3>
            <p className="mb-6">
              Hemos recibido tu solicitud. Un representante infernal se materializará pronto para finalizar el contrato.
              Prepárate para una nueva era de éxito sobrenatural.
            </p>
            <p className="text-sm text-foreground/70 italic">
              Por favor, ten a mano una vela negra y un objeto personal para el ritual de transferencia.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
