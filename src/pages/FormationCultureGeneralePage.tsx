import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Layout, Target, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

type Module = {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const modules: Module[] = [
  {
    to: '/formation/culture-generale/articles',
    icon: <Layout className="h-7 w-7 text-pr-orange" />,
    title: 'Articles',
    description: 'Sujets, pièges de libellés, analyses',
  },
  {
    to: '/formation/culture-generale/methodes',
    icon: <Target className="h-7 w-7 text-pr-orange" />,
    title: 'Méthodes',
    description: 'Analyser, problématiser, argumenter',
  },
  {
    to: '/formation/culture-generale/references',
    icon: <Lightbulb className="h-7 w-7 text-pr-orange" />,
    title: 'Références',
    description: 'Banque de parapersos sur l’humanité, prêts à être mobilisés en dissertation',
  },
  {
    to: '/formation/culture-generale/juger',
    icon: <BookOpen className="h-7 w-7 text-pr-orange" />,
    title: 'Fiche notions : L\'humanité',
    description: 'Sous-thèmes du programme, distinctions et concepts clés',
  },
];

const FormationCultureGeneralePage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            {/* Eyebrow label */}
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Prépa Rationnelle · Formation
            </p>

            <h1 className="font-dm-serif text-4xl md:text-6xl text-pr-black leading-tight mb-5">
              Culture générale
            </h1>

            {/* Trait orange signature */}
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />

            <p className="text-base md:text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
              Thème <em>l&apos;humanité</em> : méthode d&apos;analyse des sujets, fiches notions
              et parapersos pour construire des copies solides.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-7">
              <span className="px-3 py-1 bg-white border border-pr-gray-light text-pr-gray-dark rounded-full text-xs font-semibold uppercase tracking-wider">
                Niveau prépa
              </span>
              <span className="px-3 py-1 bg-white border border-pr-gray-light text-pr-gray-dark rounded-full text-xs font-semibold uppercase tracking-wider">
                Articles &amp; méthodes
              </span>
              <span className="px-3 py-1 bg-pr-orange-pale text-pr-orange-dark rounded-full text-xs font-semibold uppercase tracking-wider">
                Nouveau
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m, idx) => (
              <Link key={m.title} to={m.to} className="block group">
                <Card className="relative bg-white rounded-2xl p-7 border border-pr-gray-light shadow-none hover:shadow-lg hover:-translate-y-1 hover:border-pr-orange transition-all duration-300 overflow-hidden h-full">
                  {/* Trait orange signature en haut */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col items-start text-left min-h-[200px]">
                    {/* Numéro décoratif sérif orange */}
                    <span className="font-dm-serif text-pr-orange text-3xl leading-none mb-3">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <div className="w-12 h-12 bg-pr-orange-pale rounded-xl flex items-center justify-center mb-5 group-hover:bg-pr-orange-soft/40 transition-colors">
                      {m.icon}
                    </div>

                    <h3 className="font-dm-serif text-2xl text-pr-black mb-2 leading-tight">
                      {m.title}
                    </h3>
                    <p className="text-sm text-pr-gray-dark leading-relaxed">
                      {m.description}
                    </p>

                    <span className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
                      Découvrir →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationCultureGeneralePage;
