import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

type MethodItem = {
  number: number;
  title: string;
  description: string;
  route: string;
};

const methods: MethodItem[] = [
  {
    number: 1,
    title: 'Les 3 méthodes de dissertation',
    description: 'Anarchie, Parapersos, Dissertation parfaite : panorama et choix selon votre profil.',
    route: '/formation/culture-generale/methodes/trois-approches-dissertation',
  },
  {
    number: 2,
    title: 'Fiche méthode — Les paragraphes (Humanité)',
    description: 'Construire 30 à 50 parapersos autonomes et puissants sur le thème de l\'humanité.',
    route: '/formation/culture-generale/methodes/paragraphes-juger',
  },
  {
    number: 3,
    title: 'Utiliser efficacement les exemples',
    description: 'Constituer un stock de 30 références et les mobiliser avec précision le jour J.',
    route: '/formation/culture-generale/methodes/utiliser-exemples',
  },
  {
    number: 4,
    title: 'Analyse d\'un sujet — Thème « L\'humanité »',
    description: 'Définition, polysémie, filtres contemporains et décodage des formulations.',
    route: '/formation/culture-generale/articles/analyse-sujet-juger',
  },
  {
    number: 5,
    title: 'Paradoxe et problématique — mode d\'emploi',
    description: 'Dégager la tension centrale d\'un sujet d\'humanité et la transformer en problématique.',
    route: '/formation/culture-generale/articles/paradoxe-problematique',
  },
  {
    number: 6,
    title: 'Construire le plan — Thème « L\'humanité »',
    description: 'Logique I/II/III, champ lexical et exemple de plan sur « Qu\'est-ce qui fait l\'humanité ? ».',
    route: '/formation/culture-generale/articles/plan-juger',
  },
  {
    number: 7,
    title: 'Rédiger l\'introduction — méthode et exemple',
    description: 'Accroche, définitions, paradoxe, problématique, annonce du plan : 5 temps appliqués à l\'humanité.',
    route: '/formation/culture-generale/methodes/introduction-juger',
  },
  {
    number: 8,
    title: 'Construire et articuler les sous-parties',
    description: 'Logiques de structuration (syllogisme, distinctions, points de vue, dialectique) appliquées à l\'humanité.',
    route: '/formation/culture-generale/methodes/sous-parties-juger',
  },
  {
    number: 9,
    title: 'Les transitions — articuler I/II/III',
    description: 'Structure en 3 temps (rappel / limite / ouverture) et exemples sur le thème de l\'humanité.',
    route: '/formation/culture-generale/methodes/transitions',
  },
  {
    number: 10,
    title: 'La conclusion — méthode et exemple',
    description: 'Bilan argumentatif, réponse à la problématique et ouverture élégante sur l\'humanité.',
    route: '/formation/culture-generale/methodes/conclusion',
  },
];

const MethodesCultureGeneralePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Méthodes
            </p>
            <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black leading-tight mb-5">
              Méthodes
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
              Méthodes de dissertation appliquées au thème <em>l&apos;humanité</em>. Sélectionnez une fiche pour la découvrir.
            </p>
          </div>

          {/* Methods list */}
          <div className="space-y-5">
            {methods.map((m) => {
              const isActive = m.route !== '#';
              const Wrapper: React.ElementType = isActive ? Link : 'div';
              const wrapperProps = isActive ? { to: m.route } : {};

              return (
                <Wrapper
                  key={m.number}
                  {...wrapperProps}
                  className="block group"
                >
                  <article className="relative bg-white rounded-2xl p-6 md:p-7 border border-pr-gray-light hover:border-pr-orange hover:shadow-md transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col md:flex-row md:items-center gap-5">
                      <div className="flex items-start gap-5 md:flex-1">
                        <span className="font-dm-serif text-pr-orange text-5xl leading-none flex-shrink-0 w-14">
                          {String(m.number).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-dm-serif text-xl md:text-2xl text-pr-black leading-tight mb-2">
                            {m.title}
                          </h3>
                          <p className="text-sm text-pr-gray-dark leading-relaxed">
                            {m.description}
                          </p>
                        </div>
                      </div>
                      <div className="md:ml-auto md:pl-4" onClick={(e) => e.stopPropagation()}>
                        <Button
                          className="bg-pr-orange hover:bg-pr-orange-dark text-white px-5 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]"
                          disabled={!isActive}
                        >
                          Découvrir la fiche →
                        </Button>
                      </div>
                    </div>
                  </article>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MethodesCultureGeneralePage;
