import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Target,
  AlertCircle,
  BookOpen,
  Brain,
  Calendar,
  BarChart3,
} from 'lucide-react';

const SyntheseTexteOverviewPage: React.FC = () => {
  const sections = [
    {
      icon: AlertCircle,
      title: "L'importance stratégique de la synthèse",
      intro:
        "La synthèse de texte représente l'une des épreuves les plus exigeantes des concours ECG.",
      items: [
        "Coefficient élevé : épreuve déterminante",
        "Temps limité : 4 heures sous pression",
        "Méthodologie rigoureuse requise",
      ],
    },
    {
      icon: Target,
      title: "L'épreuve aux concours ECG",
      grid: [
        { title: "Format général", body: "4 heures — épreuve commune" },
        { title: "Sujet type", body: "2 à 3 textes à analyser" },
      ],
    },
    {
      icon: BarChart3,
      title: "Les types de sujets aux concours ECG",
      cards: [
        { title: "Économie et société", body: "Mondialisation, croissance, emploi" },
        { title: "Géopolitique", body: "Conflits, intégration européenne" },
        { title: "Environnement", body: "Transition énergétique, développement durable" },
      ],
    },
    {
      icon: Brain,
      title: "Méthodologie de l'épreuve",
      cards: [
        { title: "Phase 1 — Lecture et analyse (60 min)", body: "Lire les textes, identifier les idées principales" },
        { title: "Phase 2 — Structuration (45 min)", body: "Organiser les idées, établir le plan" },
        { title: "Phase 3 — Rédaction (90 min)", body: "Rédiger la synthèse de manière claire" },
        { title: "Phase 4 — Relecture (45 min)", body: "Vérifier et finaliser le travail" },
      ],
    },
    {
      icon: Calendar,
      title: "Organisation du travail annuel",
      cards: [
        { title: "Septembre — Novembre", body: "Acquisition des bases et méthodologie" },
        { title: "Décembre — Mars", body: "Entraînement intensif et perfectionnement" },
        { title: "Avril — Concours", body: "Maintien du niveau et préparation mentale" },
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-carnet-paper/95 backdrop-blur border-b border-carnet-rule/60">
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
            <Link to="/formation/synthese-texte" className="hover:text-pr-black transition-colors">
              Synthèse de Texte
            </Link>
            <span className="mx-2 text-pr-gray-light">›</span>
            <span className="text-pr-black font-medium">Guide Complet</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Back link */}
        <div className="mb-8">
          <Link to="/formation/synthese-texte">
            <Button
              variant="ghost"
              size="sm"
              className="font-dm-sans text-pr-gray-dark hover:text-pr-black hover:bg-pr-gray-bg gap-2 px-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.18em] text-pr-black bg-pr-gray-bg px-3 py-1.5 rounded-full">
            Guide complet
          </span>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black mt-6 mb-5 leading-tight">
            La Synthèse de Texte ECG
          </h1>
          <div className="w-16 h-[3px] bg-pr-black mx-auto mb-6" />
          <p className="font-dm-sans text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
            Méthodologie complète pour maîtriser l'épreuve de synthèse aux concours.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section
                key={idx}
                className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 bg-pr-gray-bg rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-pr-black" strokeWidth={1.5} />
                  </div>
                  <div className="border-l-[3px] border-pr-black pl-4">
                    <h2 className="font-dm-serif text-2xl text-pr-black leading-tight">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {section.intro && (
                  <p className="font-dm-sans text-pr-gray-dark leading-relaxed mb-5">
                    {section.intro}
                  </p>
                )}

                {section.items && (
                  <ul className="space-y-2.5">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 font-dm-sans text-sm text-pr-gray-dark"
                      >
                        <span className="text-pr-black mt-0.5 font-medium">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.grid && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.grid.map((g, i) => (
                      <div
                        key={i}
                        className="border border-pr-gray-light rounded-md p-4 bg-pr-gray-bg/40"
                      >
                        <h4 className="font-dm-sans font-semibold text-pr-black mb-1.5 text-sm">
                          {g.title}
                        </h4>
                        <p className="font-dm-sans text-sm text-pr-gray-dark">
                          {g.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.cards && (
                  <div className="space-y-3">
                    {section.cards.map((c, i) => (
                      <div
                        key={i}
                        className="border-l-[2px] border-pr-black/60 bg-pr-gray-bg/40 rounded-r-md py-3 px-4"
                      >
                        <h4 className="font-dm-sans font-semibold text-pr-black mb-1 text-sm">
                          {c.title}
                        </h4>
                        <p className="font-dm-sans text-sm text-pr-gray-dark">
                          {c.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-pr-gray-bg border border-pr-gray-light rounded-lg p-10 text-center">
          <h3 className="font-dm-serif text-2xl text-pr-black mb-3">
            Prêt à maîtriser la synthèse de texte&nbsp;?
          </h3>
          <div className="w-12 h-[2px] bg-pr-black mx-auto mb-4" />
          <p className="font-dm-sans text-pr-gray-dark mb-6 max-w-xl mx-auto">
            Cette méthodologie vous donne toutes les clés pour réussir l'épreuve aux concours ECG.
          </p>
          <Link to="/formation/synthese-texte/methode">
            <Button className="bg-pr-black hover:bg-pr-black-dark text-white font-dm-sans gap-2">
              <BookOpen className="w-4 h-4" />
              Commencer l'entraînement
            </Button>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-10">
          <Link to="/formation/synthese-texte">
            <Button
              variant="ghost"
              className="font-dm-sans text-pr-gray-dark hover:text-pr-black hover:bg-pr-gray-bg gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la formation synthèse de texte
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SyntheseTexteOverviewPage;
