import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Target, Calendar, ArrowRight } from 'lucide-react';

const FormationSyntheseTextePage = () => {
  const modules = [
    {
      to: "/formation/synthese-texte/methode",
      icon: Target,
      title: "Méthode de l'Épreuve",
      description: "Technique complète et stratégie pour réussir l'épreuve de synthèse",
      points: [
        "Structure de synthèse",
        "Gestion du temps",
        "Critères d'évaluation",
      ],
      cta: "Accéder à la méthode",
    },
    {
      to: "/formation/synthese-texte/travail-annuel",
      icon: Calendar,
      title: "Travail Annuel",
      description: "Organisation complète du travail sur toute l'année de prépa",
      points: [
        "Planning annuel",
        "Préparation progressive",
        "Révision et entraînement",
      ],
      cta: "Accéder au travail annuel",
    },
    {
      to: "/formation/synthese-texte/ressources",
      icon: BookOpen,
      title: "Ressources & Exercices",
      description: "Outils, annales et exercices pour s'entraîner efficacement",
      points: [
        "Annales corrigées",
        "Exercices pratiques",
        "Grilles d'évaluation",
      ],
      cta: "Accéder aux ressources",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-pr-gray-light">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center text-xs text-pr-gray-mid font-dm-sans">
            <Link to="/" className="hover:text-pr-black transition-colors">
              Accueil
            </Link>
            <span className="mx-2 text-pr-gray-light">›</span>
            <Link to="/formations" className="hover:text-pr-black transition-colors">
              Toutes les formations
            </Link>
            <span className="mx-2 text-pr-gray-light">›</span>
            <span className="text-pr-black font-medium">Synthèse de Texte ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.18em] text-pr-orange-dark bg-pr-orange-pale px-3 py-1.5 rounded-full">
              Formation · ECG
            </span>
          </div>
          <h1 className="font-dm-serif text-4xl sm:text-5xl md:text-6xl text-pr-black mb-6 leading-tight">
            Formation Synthèse de Texte
          </h1>
          <div className="w-16 h-[3px] bg-pr-orange mx-auto mb-8" />
          <p className="font-dm-sans text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
            Méthodologie complète pour maîtriser l'épreuve de synthèse aux concours
            des Grandes Écoles de Commerce.
          </p>
        </div>

        {/* Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Link
                key={module.to}
                to={module.to}
                className="group relative bg-white border border-pr-gray-light rounded-lg p-7 flex flex-col hover:border-pr-orange transition-all duration-300 hover:shadow-[0_8px_24px_-12px_rgba(244,132,95,0.25)]"
              >
                {/* Trait orange signature en haut */}
                <div className="absolute top-0 left-7 right-7 h-[2px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 bg-pr-orange-pale rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-5 w-5 text-pr-orange-dark" strokeWidth={1.5} />
                </div>

                <h3 className="font-dm-serif text-2xl text-pr-black mb-3">
                  {module.title}
                </h3>
                <p className="font-dm-sans text-sm text-pr-gray-dark leading-relaxed mb-6">
                  {module.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-grow">
                  {module.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm font-dm-sans text-pr-gray-dark"
                    >
                      <span className="text-pr-orange mt-0.5 font-medium">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-pr-gray-light/60">
                  <span className="font-dm-sans text-sm font-medium text-pr-orange-dark">
                    {module.cta}
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-pr-orange-dark group-hover:translate-x-1 transition-transform"
                    strokeWidth={1.75}
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Lien guide complet */}
        <div className="mt-12 text-center">
          <Link to="/formation/synthese-texte/overview">
            <Button
              variant="outline"
              className="font-dm-sans border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-gray-mid"
            >
              Voir le guide complet de l'épreuve
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationSyntheseTextePage;
