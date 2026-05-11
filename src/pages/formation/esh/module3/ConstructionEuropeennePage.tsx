import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const ConstructionEuropeennePage = () => {
  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
                <Home className="h-3.5 w-3.5" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formations" className="hover:text-carnet-red transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh" className="hover:text-carnet-red transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formation/esh/deuxieme-annee" className="hover:text-carnet-red transition-colors">
                Deuxième année
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">La dynamique de la construction européenne</span>
            </div>
          </div>
        </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/formation/esh/deuxieme-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 3
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <MapPin className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  La dynamique de la construction européenne
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 3.7 - Module 3</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Analyser le processus historique d'intégration européenne et ses grandes étapes
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Les grandes étapes de la construction européenne
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Communauté Européenne du Charbon et de l'Acier (CECA - 1951)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Premier pas vers l'intégration : suppression des droits de douane sur le charbon et l'acier</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Traité de Rome (1957)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Création de la CEE et de l'Euratom, marché commun européen</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Acte Unique Européen (1986)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Accélération de l'intégration, achèvement du marché intérieur</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Traité de Maastricht (1992)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Création de l'Union Européenne, préparation de l'euro</p>
                </div>
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Traité de Lisbonne (2007)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Réforme institutionnelle, nouvelle architecture de l'UE</p>
                </div>
              </div>
            </div>

            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                Les élargissements successifs
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Premiers élargissements :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>1973 : Danemark, Irlande, Royaume-Uni</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>1981 : Grèce</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>1986 : Espagne, Portugal</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Grand élargissement :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>1995 : Autriche, Finlande, Suède</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>2004 : 10 nouveaux États membres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>2007 : Bulgarie, Roumanie</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-carnet-ink mb-3">Défis de l'élargissement :</h3>
                <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Convergence économique et sociale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Politique agricole commune</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                    <span>Fonds structurels et cohésion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                Les crises et réformes européennes
              </h2>

              <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-carnet-ink mb-2">Crise de l'euro (2010-2012)</h3>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  Dette souveraine, mécanismes de sauvetage, union bancaire, gouvernance économique renforcée
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Crise migratoire (2015)</h4>
                  <p className="text-xs text-carnet-ink-soft">Politique d'asile commune, frontières extérieures</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Brexit (2016-2020)</h4>
                  <p className="text-xs text-carnet-ink-soft">Négociations de retrait, relations futures</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Pandémie COVID-19</h4>
                  <p className="text-xs text-carnet-ink-soft">Plan de relance européen (NextGenerationEU)</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Guerre en Ukraine</h4>
                  <p className="text-xs text-carnet-ink-soft">Politique de défense commune, sanctions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/module3/marche-capitaux">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module3/europe-economique-monetaires">
                <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white">
                  Chapitre suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>    </div>
          </div>
);
};

export default ConstructionEuropeennePage;
