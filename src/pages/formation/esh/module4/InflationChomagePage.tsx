import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingDown, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, BarChart3 } from 'lucide-react';

const InflationChomagePage = () => {
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
              <span className="carnet-eyebrow text-[11px]">L'inflation et le chômage</span>
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
                Retour au Module 4
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <TrendingDown className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  L'inflation et le chômage
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 4.1 - Module 4</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Analyser les relations entre inflation et chômage dans l'économie
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Définitions et concepts */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Définitions et concepts fondamentaux
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">L'inflation</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] mb-3">
                    L'inflation est une hausse généralisée et durable des prix qui entraîne une perte du pouvoir d'achat de la monnaie.
                  </p>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span><strong>Inflation par la demande :</strong> Excès de demande globale par rapport à l'offre disponible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span><strong>Inflation par les coûts :</strong> Augmentation des coûts de production (salaires, matières premières)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Le chômage</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] mb-3">
                    Le chômage désigne la situation des personnes en âge de travailler qui sont privées d'emploi et en recherchent activement un.
                  </p>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span><strong>Chômage frictionnel :</strong> Période de transition entre deux emplois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span><strong>Chômage structurel :</strong> Déséquilibre entre offre et demande de travail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span><strong>Chômage conjoncturel :</strong> Lié aux fluctuations économiques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: La courbe de Phillips */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                La courbe de Phillips : relation inflation-chômage
              </h2>

              <div className="space-y-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Théorie initiale (1958)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Selon Phillips, il existe une relation inverse entre le taux d'inflation et le taux de chômage : plus l'inflation est faible, plus le chômage est élevé, et vice versa.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Relation négative</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Chômage ↓ → Inflation ↑</li>
                      <li>• Chômage ↑ → Inflation ↓</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Mécanismes</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Demande de salaire croissante</li>
                      <li>• Pressions inflationnistes</li>
                      <li>• Spirale prix-salaires</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: L'évolution de la courbe de Phillips */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                L'évolution de la courbe de Phillips
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Les années 1970 : Stagflation</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Chômage et inflation élevés simultanément</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Chocs pétroliers et ruptures des années 1970</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Remise en cause de la relation inflation-chômage</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Théorie des anticipations rationnelles</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Les agents économiques anticipent l'inflation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>La courbe de Phillips devient verticale à long terme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Politique monétaire inefficace sur l'emploi à long terme</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Politiques économiques face au dilemme */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">4</span>
                </div>
                Politiques économiques face au dilemme inflation-chômage
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Politique budgétaire</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Relance de la demande en période de récession</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Risque d'accélération de l'inflation</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-carnet-ink">Politique monétaire</h3>
                  <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Contrôle de la masse monétaire et des taux d'intérêt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Objectif d'inflation faible et stable</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                <h3 className="font-semibold text-carnet-ink mb-2">Le NAIRU (Non-Accelerating Inflation Rate of Unemployment)</h3>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                  Taux de chômage d'équilibre en dessous duquel l'inflation s'accélère. La politique économique doit viser cet objectif pour éviter les tensions inflationnistes.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/deuxieme-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 4
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module4/equilibre-macro">
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

export default InflationChomagePage;
