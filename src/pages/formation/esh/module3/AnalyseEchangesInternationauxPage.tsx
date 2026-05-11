import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const AnalyseEchangesInternationauxPage = () => {
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
              <span className="carnet-eyebrow text-[11px]">L'analyse économique des échanges internationaux</span>
            </div>
          </div>
        </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/deuxieme-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 3
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <TrendingUp className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  L'analyse économique des échanges internationaux
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 3.2 - Module 3</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Comprendre les théories et les mécanismes des échanges commerciaux entre pays
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Théories des échanges internationaux */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Théories des échanges internationaux
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Théorie des avantages absolus (Adam Smith)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Un pays doit se spécialiser dans les biens où il a un avantage absolu de productivité</p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Théorie des avantages comparatifs (David Ricardo)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Échange profitable même si un pays est moins efficace dans tous les secteurs</p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Théorie HOS (Heckscher-Ohlin-Samuelson)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Échanges basés sur la dotation relative en facteurs de production</p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Théories du commerce intra-branche</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">Échanges de produits similaires entre pays développés (différenciation)</p>
                </div>
              </div>
            </div>

            {/* Section 2: Les déterminants des échanges */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                Les déterminants des échanges internationaux
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Facteurs économiques :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Différences de coûts de production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Dotation en facteurs de production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Taille et structure du marché</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Niveau technologique et innovation</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Facteurs institutionnels :</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Politiques commerciales (droits de douane)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Accords de libre-échange</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Réglementations et normes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Politiques monétaires et fiscales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Effets des échanges internationaux */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                Effets des échanges internationaux
              </h2>

              <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-carnet-ink mb-2">Effets positifs</h3>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  Gains d'efficacité, spécialisation, diffusion technologique, croissance économique,
                  baisse des prix pour les consommateurs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Effets redistributifs</h4>
                  <p className="text-xs text-carnet-ink-soft">Gains pour les propriétaires des facteurs abondants, pertes pour les autres</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Ajustements structurels</h4>
                  <p className="text-xs text-carnet-ink-soft">Réallocation des ressources, reconversion professionnelle</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Externalités positives</h4>
                  <p className="text-xs text-carnet-ink-soft">Apprentissage technologique, économies d'échelle</p>
                </div>
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-3">
                  <h4 className="font-semibold text-carnet-ink text-sm mb-1">Risques de dépendance</h4>
                  <p className="text-xs text-carnet-ink-soft">Vulnérabilité aux chocs externes, volatilité</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/module3/ouverture-economies">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module3/regionalisation-gouvernance">
                <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white">
                  Chapitre suivant
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyseEchangesInternationauxPage;
