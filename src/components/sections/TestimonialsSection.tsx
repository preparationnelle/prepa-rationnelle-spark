
import React from 'react';
import { TestimonialCard } from '../TestimonialCard';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. Il m'a aidée à demystifier python, qui était au départ, un gros point faible. Grâce à lui, je suis plus confiante pour traiter les questions python !",
      name: "Léa",
      role: "Etudiante deuxième année",
      initials: "L"
    },
    {
      quote: "J'étais en difficulté en mathématiques. Mais grâce à l'accompagnement et aux explications bien adaptées, j'ai commencé à voir une vraie différence. Merci mille fois pour ton aide, Dimitar, et ta méthode de travail.",
      name: "Victoire",
      role: "Étudiante à ESCP",
      initials: "V"
    },
    {
      quote: "L'un de mes (brillants) anciens élèves à l'époque où j'enseignais les maths en prépa HEC. Dans ma matière, ses méthodes de travail étaient très efficaces. Je pense qu'il peut être de très bon conseil !",
      name: "Frédéric Broassard",
      role: "Ancien professeur de mathématiques",
      initials: "F"
    }
  ];

  return (
    <section className="py-20 px-4 bg-transparent font-dm-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-3 mb-6">
            <span className="text-[11px] tracking-[0.2em] font-semibold text-carnet-red uppercase">
              Témoignages
            </span>
            <div className="h-[2px] w-12 bg-carnet-red" />
          </div>
          <h2 className="font-dm-serif text-3xl md:text-5xl text-carnet-ink mb-6">
            Ce que nos étudiants disent
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-7">
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
