
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Solutions />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
