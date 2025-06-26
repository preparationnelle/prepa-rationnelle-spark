
import React from 'react';
import { Link } from 'react-router-dom';
import { User, Target, Users } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "Introspection",
      description: "Questions sur la personnalité et la connaissance de soi",
      link: "/questions/introspection"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Motivations & objectifs", 
      description: "Questions sur les objectifs et les aspirations",
      link: "/questions/motivation"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Relations & travail d'équipe",
      description: "Questions sur le travail collaboratif et la communication", 
      link: "/questions/interpersonal"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Catégories de questions d'entretien
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez nos différentes catégories de questions pour vous préparer efficacement à vos entretiens de personnalité
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Link 
              key={index}
              to={feature.link}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 block"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
