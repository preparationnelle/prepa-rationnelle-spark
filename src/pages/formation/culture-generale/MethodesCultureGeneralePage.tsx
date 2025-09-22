import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type MethodItem = {
  number: number;
  title: string;
  description: string;
  route: string; // placeholder until we wire actual pages
};

const methods: MethodItem[] = [
  {
    number: 1,
    title: 'Les 3 méthodes de dissertation',
    description: 'Anarchie, Parapersos, Dissertation parfaite — panorama et choix selon votre profil.',
    route: '/formation/culture-generale/methodes/trois-approches-dissertation',
  },
  {
    number: 2,
    title: 'Fiche méthode — Les paragraphes (Juger)',
    description: 'Construire 30–50 paragraphes autonomes et puissants avec références bien intégrées.',
    route: '/formation/culture-generale/methodes/paragraphes-juger',
  },
  {
    number: 3,
    title: 'Utiliser efficacement les exemples',
    description: 'Constituer un stock de 30 exemples et les mobiliser avec précision le jour J.',
    route: '#',
  },
  {
    number: 4,
    title: 'Analyse d’un sujet — Thème « Juger »',
    description: 'Définition, filtres contemporains et décodage des formulations de sujet.',
    route: '/formation/culture-generale/articles/analyse-sujet-juger',
  },
  {
    number: 5,
    title: 'Paradoxe et problématique — mode d’emploi',
    description: 'Dégager la tension centrale d’un sujet et la transformer en problématique claire.',
    route: '/formation/culture-generale/articles/paradoxe-problematique',
  },
  {
    number: 6,
    title: 'Construire le plan — Thème « Juger »',
    description: 'Logique I/II/III, champ lexical et exemple de plan détaillé.',
    route: '/formation/culture-generale/articles/plan-juger',
  },
  {
    number: 7,
    title: 'Rédiger l’introduction — méthode et exemple (Juger)',
    description: 'Accroche, définitions, paradoxe, problématique et annonce du plan en 5 temps.',
    route: '/formation/culture-generale/methodes/introduction-juger',
  },
  {
    number: 8,
    title: 'Construire et articuler les sous-parties',
    description: 'Logiques de structuration (A→B→C, distinctions, points de vue, dialectique) et transitions.',
    route: '/formation/culture-generale/methodes/sous-parties-juger',
  },
  {
    number: 9,
    title: 'Les transitions — articuler I/II/III',
    description: 'Structure en 3 temps (rappel/limite/ouverture) et exemples appliqués à « Juger ».',
    route: '/formation/culture-generale/methodes/transitions',
  },
  {
    number: 10,
    title: 'La conclusion — méthode et exemple (Juger)',
    description: 'Bilan argumentatif, réponse à la problématique, ouverture élégante (avec modèle).',
    route: '/formation/culture-generale/methodes/conclusion',
  },
];

const MethodesCultureGeneralePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Méthodes — Culture générale</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Menu des fiches méthodologiques. Sélectionnez une fiche pour la découvrir.
            </p>
          </div>

          {/* Methods list */}
          <div className="space-y-6">
            {methods.map((m) => (
              <Link key={m.number} to={m.route === '#' ? '#' : m.route} className="block">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200 group cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <span className="text-blue-700 font-bold text-lg">{m.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{m.title}</h3>
                      <p className="text-gray-600">{m.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-start" onClick={(e) => e.stopPropagation()}>
                    {m.route === '#' ? (
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
                        Découvrir la fiche — GO
                      </Button>
                    ) : (
                      <Link to={m.route}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
                          Découvrir la fiche — GO
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodesCultureGeneralePage;


