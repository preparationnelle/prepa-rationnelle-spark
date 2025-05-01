
import React from 'react';
import { TestimonialCard } from '../TestimonialCard';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Grâce à Prepa Rationnelle, j'ai pu structurer mes réponses et développer une argumentation solide qui a impressionné le jury de Sciences Po.",
      name: "Marie L.",
      role: "Sciences Po Paris, 2023",
      initials: "ML"
    },
    {
      quote: "Le coaching individuel m'a permis d'identifier mes points faibles et de travailler spécifiquement sur ma capacité à rebondir aux questions complexes.",
      name: "Thomas H.",
      role: "HEC, 2024",
      initials: "TH"
    }
  ];

  return (
    <section className="py-16 px-4 bg-accent">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-12">
          Ce que nos étudiants disent
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
