import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BarChart3, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, TrendingUp } from 'lucide-react';

const EquilibreMacroPage = () => {
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
              <span className="carnet-eyebrow text-[11px]">Modèles d'équilibre macroéconomique</span>
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
                <BarChart3 className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  L'équilibre macroéconomique à travers les modèles
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 4.2 - Module 4</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Maîtriser les modèles d'équilibre macroéconomique et leurs applications : IS-LM / IS-LM-BP / OGDG
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Le modèle IS-LM */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                Le modèle IS-LM : équilibre sur les marchés des biens et de la monnaie
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Courbe IS (Investment-Saving)</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Équilibre sur le marché des biens</li>
                      <li>• Y = C + I + G + X - M</li>
                      <li>• Pente négative : r ↓ → I ↑ → Y ↑</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Courbe LM (Liquidity-Money)</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Équilibre sur le marché monétaire</li>
                      <li>• Md = Ms (masse monétaire)</li>
                      <li>• Pente positive : Y ↑ → Md ↑ → r ↑</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Point d'équilibre IS-LM</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Intersection des deux courbes détermine Y* et r*</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Politique budgétaire : déplacement de IS → effet sur Y et r</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Politique monétaire : déplacement de LM → effet sur Y et r</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Le modèle IS-LM-BP */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                Le modèle IS-LM-BP : économie ouverte
              </h2>

              <div className="space-y-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Courbe BP (Balance of Payments)</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Représente les combinaisons de Y et r compatibles avec l'équilibre de la balance des paiements.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Régime de changes fixes</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• BP verticale</li>
                      <li>• Politique monétaire autonome</li>
                      <li>• Ajustement par les réserves</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Régime de changes flexibles</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• BP horizontale</li>
                      <li>• Politique budgétaire efficace</li>
                      <li>• Ajustement par le taux de change</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Le modèle OGDG */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                Le modèle OGDG : offre globale et demande globale
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Courbe d'offre globale (OG)</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• OG verticale à court terme</li>
                      <li>• OG horizontale à long terme</li>
                      <li>• Déplacement par chocs d'offre</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Courbe de demande globale (DG)</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• DG décroissante</li>
                      <li>• Y = f(P, autres variables)</li>
                      <li>• Déplacement par politiques économiques</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Équilibre général</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Intersection OG-DG détermine Y* et P*</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Politique monétaire : déplacement de DG</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                      <span>Politique budgétaire : déplacement de DG</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Applications et limites */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">4</span>
                </div>
                Applications et limites des modèles macroéconomiques
              </h2>

              <div className="space-y-4">
                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Domaines d'application</h3>
                  <ul className="list-disc list-inside font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                    <li>Analyse des effets des politiques économiques</li>
                    <li>Compréhension des fluctuations conjoncturelles</li>
                    <li>Étude des interactions entre marchés</li>
                    <li>Évaluation des politiques de régulation</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Forces des modèles</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Formalisation rigoureuse</li>
                      <li>• Analyse des interdépendances</li>
                      <li>• Outils de prévision</li>
                      <li>• Base des politiques économiques</li>
                    </ul>
                  </div>
                  <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                    <h3 className="font-semibold text-carnet-ink mb-2">Limites des modèles</h3>
                    <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1">
                      <li>• Hypothèses simplificatrices</li>
                      <li>• Anticipations des agents</li>
                      <li>• Rigidités et frictions</li>
                      <li>• Variables non observables</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/module4/inflation-chomage">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module4/fluctuations-economiques">
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

export default EquilibreMacroPage;
