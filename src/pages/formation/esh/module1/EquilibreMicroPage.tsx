import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, TrendingUp, DollarSign, PieChart, Users } from 'lucide-react';

const EquilibreMicroPage = () => {
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
              <Link to="/formation/esh/premiere-annee" className="hover:text-carnet-red transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">L'équilibre micro-économique du producteur et du consommateur</span>
            </div>
          </div>
        </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-carnet-red/10 rounded-full flex items-center justify-center border border-carnet-red/40">
                <Target className="h-8 w-8 text-carnet-red" />
              </div>
              <div>
                <h1 className="font-lora text-[32px] sm:text-[40px] text-carnet-ink leading-tight">
                  L'équilibre micro-économique du producteur et du consommateur
                </h1>
                <div className="text-sm text-carnet-red font-medium mt-1">Chapitre 1.6 - Module 1</div>
              </div>
            </div>
            <p className="font-instrument text-[16px] lg:text-[18px] text-carnet-ink-soft max-w-2xl mx-auto leading-[1.65]">
              Étudier les décisions optimales des agents économiques et leurs conditions d'équilibre
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: L'équilibre du consommateur */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">1</span>
                </div>
                L'équilibre du consommateur
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">La fonction d'utilité</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Représente la satisfaction que retire un consommateur de la consommation de différents biens.
                    U = f(x₁, x₂, ..., xₙ) où U est l'utilité et xᵢ les quantités consommées.
                  </p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">L'utilité marginale</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Dérivée partielle de la fonction d'utilité par rapport à un bien.
                    Elle mesure l'accroissement d'utilité apporté par une unité supplémentaire du bien.
                    MUₓ = ∂U/∂xₓ (loi de l'utilité marginale décroissante).
                  </p>
                </div>

                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h4 className="font-semibold text-carnet-ink mb-2">Condition d'équilibre du consommateur</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Le consommateur atteint son équilibre quand le rapport des utilités marginales
                    égale le rapport des prix : MUₓ/MUᵧ = Pₓ/Pᵧ
                  </p>
                  <div className="mt-2 p-3 bg-carnet-paper-2 rounded border">
                    <p className="text-xs text-carnet-ink-soft font-mono">
                      Condition : (Utilité marginale de X / Prix de X) = (Utilité marginale de Y / Prix de Y)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Les courbes d'indifférence */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">2</span>
                </div>
                Les courbes d'indifférence
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Définition</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Ensemble des combinaisons de biens qui procurent le même niveau d'utilité au consommateur.
                    Toutes les combinaisons sur une courbe d'indifférence sont équivalentes pour le consommateur.
                  </p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Propriétés des courbes d'indifférence</h3>
                  <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-2">
                    <li>• Décroissantes et convexes (loi des rendements décroissants)</li>
                    <li>• Ne se croisent jamais</li>
                    <li>• Plus on s'éloigne de l'origine, plus l'utilité est élevée</li>
                    <li>• Le taux marginal de substitution (TMS) diminue le long de la courbe</li>
                  </ul>
                </div>

                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h4 className="font-semibold text-carnet-ink mb-2">Taux marginal de substitution (TMS)</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Quantité de Y que le consommateur est prêt à sacrifier pour obtenir une unité supplémentaire de X,
                    tout en restant sur la même courbe d'indifférence.
                  </p>
                  <div className="mt-2 p-3 bg-carnet-paper-2 rounded border">
                    <p className="text-xs text-carnet-ink-soft font-mono">
                      TMS = - (dY/dX) = MUₓ / MUᵧ = Pₓ / Pᵧ (à l'équilibre)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: La contrainte budgétaire */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">3</span>
                </div>
                La contrainte budgétaire
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Définition</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Ensemble des combinaisons de biens que le consommateur peut acheter avec son revenu.
                    Elle représente toutes les possibilités d'achat accessibles au consommateur.
                  </p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Équation de la contrainte budgétaire</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Pₓ × X + Pᵧ × Y = R (Revenu du consommateur)
                  </p>
                  <div className="mt-2 p-3 bg-[rgba(193,68,58,0.08)] rounded border">
                    <p className="text-xs text-carnet-ink-soft">
                      • Pente de la contrainte : -Pₓ/Pᵧ (prix relatif)<br/>
                      • Plus le revenu augmente, plus la contrainte s'éloigne de l'origine<br/>
                      • Changement de prix : rotation de la contrainte autour de l'origine
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: L'équilibre du producteur */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">4</span>
                </div>
                L'équilibre du producteur
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">La fonction de production</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Relation entre les quantités de facteurs utilisés (inputs) et la quantité produite (output).
                    Q = f(L, K) où Q est la production, L le travail et K le capital.
                  </p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">La productivité marginale</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Accroissement de production obtenu en utilisant une unité supplémentaire d'un facteur,
                    les autres facteurs restant constants.
                  </p>
                  <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1 mt-2">
                    <li>• Productivité marginale du travail : PMg_L = ΔQ/ΔL</li>
                    <li>• Productivité marginale du capital : PMg_K = ΔQ/ΔK</li>
                    <li>• Loi des rendements décroissants : la PMg diminue quand on augmente un facteur</li>
                  </ul>
                </div>

                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h4 className="font-semibold text-carnet-ink mb-2">Condition d'équilibre du producteur</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Le producteur maximise son profit quand le rapport des productivités marginales
                    égale le rapport des prix des facteurs.
                  </p>
                  <div className="mt-2 p-3 bg-carnet-paper-2 rounded border">
                    <p className="text-xs text-carnet-ink-soft font-mono">
                      PMg_L / PMg_K = w / r (où w = salaire, r = taux d'intérêt)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Les coûts de production */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">5</span>
                </div>
                Les coûts de production
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-carnet-ink">Coûts fixes vs coûts variables</h3>
                    <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span><strong className="text-carnet-red">Coûts fixes (CF)</strong> : indépendants du niveau de production (loyers, assurances)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span><strong className="text-carnet-red">Coûts variables (CV)</strong> : varient avec la production (matières premières, salaires)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span><strong className="text-carnet-red">Coût total (CT)</strong> = CF + CV</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-carnet-ink">Coûts moyens vs coûts marginaux</h3>
                    <ul className="space-y-2 font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span><strong className="text-carnet-red">Coût moyen (CM)</strong> = CT / Q</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span><strong className="text-carnet-red">Coût marginal (CMg)</strong> = ΔCT / ΔQ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-carnet-red mt-0.5 flex-shrink-0" />
                        <span>Point de minimum du CM : <strong className="text-carnet-red">CMg = CM</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Les économies d'échelle</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Réduction du coût moyen lorsque la production augmente. Elles expliquent la concentration
                    industrielle et l'avantage des grandes entreprises.
                  </p>
                  <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-1 mt-2">
                    <li>• Économies d'échelle internes : liées à la taille de l'entreprise</li>
                    <li>• Économies d'échelle externes : liées au secteur d'activité</li>
                    <li>• Déséconomies d'échelle : augmentation des coûts avec la taille</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: L'équilibre général */}
            <div className="bg-carnet-paper-2 rounded-2xl p-6 border border-dashed border-[rgba(78,55,30,0.18)]">
              <h2 className="font-lora text-[20px] text-carnet-ink leading-tight mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-carnet-red/20 rounded-full flex items-center justify-center">
                  <span className="text-carnet-red-deep font-bold text-sm">6</span>
                </div>
                L'équilibre général
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Le modèle de Léon Walras</h3>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Vision d'ensemble de l'économie où tous les marchés sont interconnectés.
                    L'équilibre général est atteint quand tous les marchés sont en équilibre simultanément.
                  </p>
                </div>

                <div className="border-l-4 border-carnet-red/40 pl-4">
                  <h3 className="font-semibold text-carnet-ink mb-2">Les conditions d'équilibre général</h3>
                  <ul className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] space-y-2">
                    <li>• Équilibre sur chaque marché : Offre = Demande pour chaque bien</li>
                    <li>• Équilibre budgétaire : Dépenses = Revenus pour chaque agent</li>
                    <li>• Compatibilité des plans : Les décisions des agents sont cohérentes</li>
                    <li>• Efficacité <strong className="text-carnet-red">Pareto-optimale</strong> : Aucune réallocation ne peut améliorer le bien-être d'un agent sans détériorer celui d'un autre</li>
                  </ul>
                </div>

                <div className="bg-[rgba(193,68,58,0.08)] rounded-lg p-4">
                  <h4 className="font-semibold text-carnet-ink mb-2">Le théorème de l'impossibilité d'Arrow</h4>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55]">
                    Il est impossible de trouver un système de vote respectant certaines conditions
                    de rationalité tout en étant démocratique (paradoxe de Condorcet).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 1
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module1/offre-demande">
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

export default EquilibreMicroPage;
