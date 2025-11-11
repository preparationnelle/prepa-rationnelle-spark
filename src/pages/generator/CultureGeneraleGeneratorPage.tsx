import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Target, ListChecks, Layout } from 'lucide-react';

const CultureGeneraleGeneratorPage: React.FC = () => {
  const tiles = [
    {
      title: 'Définir des thèmes',
      description: "Génère des thèmes pertinents et variés pour t'entraîner.",
      icon: <Target className="h-8 w-8" />,
    },
    {
      title: 'Trouver des problématiques',
      description: 'Problématiques claires et percutantes à partir de sujets.',
      icon: <Brain className="h-8 w-8" />,
    },
    {
      title: 'Déterminer des plans',
      description: 'Plans en 2 ou 3 parties, détaillés et argumentés.',
      icon: <Layout className="h-8 w-8" />,
    },
    {
      title: 'Rédacteur de paragraphe',
      description: 'Rédige des paragraphes solides de culture générale.',
      icon: <BookOpen className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Bubbles background, cohérent avec le style du site */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse" />

      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-black">Générateur </span>
              <span className="text-orange-600">Culture Générale</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Un espace unique pour t'exercer: thèmes, problématiques, plans et rédaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiles.map((tile) => (
              <div
                key={tile.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50 text-center group"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-orange-600">{tile.icon}</div>
                </div>
                <h3 className="font-bold text-xl text-orange-800 mb-2">{tile.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tile.description}</p>
                <div className="mt-4">
                  <Link
                    to="#"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Bientôt disponible →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CultureGeneraleGeneratorPage;


