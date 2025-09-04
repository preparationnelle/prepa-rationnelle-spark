import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, TrendingUp, DollarSign, PieChart, Users } from 'lucide-react';

const EquilibreMicroPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Sticky Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-muted-foreground">
              <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formations" className="hover:text-foreground transition-colors">
                Toutes les formations
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh" className="hover:text-foreground transition-colors">
                Formation ESH ECG
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <Link to="/formation/esh/premiere-annee" className="hover:text-foreground transition-colors">
                Première année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">L'équilibre micro-économique du producteur et du consommateur</span>
            </div>
          </div>
        </nav>

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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  L'équilibre micro-économique du producteur et du consommateur
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 1.6 - Module 1</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Étudier les décisions optimales des agents économiques et leurs conditions d'équilibre
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: L'équilibre du consommateur */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                L'équilibre du consommateur
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">La fonction d'utilité</h3>
                  <p className="text-sm text-gray-600">
                    Représente la satisfaction que retire un consommateur de la consommation de différents biens.
                    U = f(x₁, x₂, ..., xₙ) où U est l'utilité et xᵢ les quantités consommées.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">L'utilité marginale</h3>
                  <p className="text-sm text-gray-600">
                    Dérivée partielle de la fonction d'utilité par rapport à un bien.
                    Elle mesure l'accroissement d'utilité apporté par une unité supplémentaire du bien.
                    MUₓ = ∂U/∂xₓ (loi de l'utilité marginale décroissante).
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Condition d'équilibre du consommateur</h4>
                  <p className="text-sm text-gray-600">
                    Le consommateur atteint son équilibre quand le rapport des utilités marginales
                    égale le rapport des prix : MUₓ/MUᵧ = Pₓ/Pᵧ
                  </p>
                  <div className="mt-2 p-3 bg-white rounded border">
                    <p className="text-xs text-gray-600 font-mono">
                      Condition : (Utilité marginale de X / Prix de X) = (Utilité marginale de Y / Prix de Y)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Les courbes d'indifférence */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                Les courbes d'indifférence
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Définition</h3>
                  <p className="text-sm text-gray-600">
                    Ensemble des combinaisons de biens qui procurent le même niveau d'utilité au consommateur.
                    Toutes les combinaisons sur une courbe d'indifférence sont équivalentes pour le consommateur.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Propriétés des courbes d'indifférence</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Décroissantes et convexes (loi des rendements décroissants)</li>
                    <li>• Ne se croisent jamais</li>
                    <li>• Plus on s'éloigne de l'origine, plus l'utilité est élevée</li>
                    <li>• Le taux marginal de substitution (TMS) diminue le long de la courbe</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Taux marginal de substitution (TMS)</h4>
                  <p className="text-sm text-gray-600">
                    Quantité de Y que le consommateur est prêt à sacrifier pour obtenir une unité supplémentaire de X,
                    tout en restant sur la même courbe d'indifférence.
                  </p>
                  <div className="mt-2 p-3 bg-white rounded border">
                    <p className="text-xs text-gray-600 font-mono">
                      TMS = - (dY/dX) = MUₓ / MUᵧ = Pₓ / Pᵧ (à l'équilibre)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: La contrainte budgétaire */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                La contrainte budgétaire
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Définition</h3>
                  <p className="text-sm text-gray-600">
                    Ensemble des combinaisons de biens que le consommateur peut acheter avec son revenu.
                    Elle représente toutes les possibilités d'achat accessibles au consommateur.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Équation de la contrainte budgétaire</h3>
                  <p className="text-sm text-gray-600">
                    Pₓ × X + Pᵧ × Y = R (Revenu du consommateur)
                  </p>
                  <div className="mt-2 p-3 bg-blue-50 rounded border">
                    <p className="text-xs text-gray-600">
                      • Pente de la contrainte : -Pₓ/Pᵧ (prix relatif)<br/>
                      • Plus le revenu augmente, plus la contrainte s'éloigne de l'origine<br/>
                      • Changement de prix : rotation de la contrainte autour de l'origine
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: L'équilibre du producteur */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">4</span>
                </div>
                L'équilibre du producteur
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">La fonction de production</h3>
                  <p className="text-sm text-gray-600">
                    Relation entre les quantités de facteurs utilisés (inputs) et la quantité produite (output).
                    Q = f(L, K) où Q est la production, L le travail et K le capital.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">La productivité marginale</h3>
                  <p className="text-sm text-gray-600">
                    Accroissement de production obtenu en utilisant une unité supplémentaire d'un facteur,
                    les autres facteurs restant constants.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Productivité marginale du travail : PMg_L = ΔQ/ΔL</li>
                    <li>• Productivité marginale du capital : PMg_K = ΔQ/ΔK</li>
                    <li>• Loi des rendements décroissants : la PMg diminue quand on augmente un facteur</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Condition d'équilibre du producteur</h4>
                  <p className="text-sm text-gray-600">
                    Le producteur maximise son profit quand le rapport des productivités marginales
                    égale le rapport des prix des facteurs.
                  </p>
                  <div className="mt-2 p-3 bg-white rounded border">
                    <p className="text-xs text-gray-600 font-mono">
                      PMg_L / PMg_K = w / r (où w = salaire, r = taux d'intérêt)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Les coûts de production */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">5</span>
                </div>
                Les coûts de production
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">Coûts fixes vs coûts variables</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-blue-700">Coûts fixes (CF)</strong> : indépendants du niveau de production (loyers, assurances)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-blue-700">Coûts variables (CV)</strong> : varient avec la production (matières premières, salaires)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-blue-700">Coût total (CT)</strong> = CF + CV</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800">Coûts moyens vs coûts marginaux</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-blue-700">Coût moyen (CM)</strong> = CT / Q</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong className="text-blue-700">Coût marginal (CMg)</strong> = ΔCT / ΔQ</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Point de minimum du CM : <strong className="text-blue-700">CMg = CM</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les économies d'échelle</h3>
                  <p className="text-sm text-gray-600">
                    Réduction du coût moyen lorsque la production augmente. Elles expliquent la concentration
                    industrielle et l'avantage des grandes entreprises.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 mt-2">
                    <li>• Économies d'échelle internes : liées à la taille de l'entreprise</li>
                    <li>• Économies d'échelle externes : liées au secteur d'activité</li>
                    <li>• Déséconomies d'échelle : augmentation des coûts avec la taille</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 6: L'équilibre général */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">6</span>
                </div>
                L'équilibre général
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Le modèle de Léon Walras</h3>
                  <p className="text-sm text-gray-600">
                    Vision d'ensemble de l'économie où tous les marchés sont interconnectés.
                    L'équilibre général est atteint quand tous les marchés sont en équilibre simultanément.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les conditions d'équilibre général</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Équilibre sur chaque marché : Offre = Demande pour chaque bien</li>
                    <li>• Équilibre budgétaire : Dépenses = Revenus pour chaque agent</li>
                    <li>• Compatibilité des plans : Les décisions des agents sont cohérentes</li>
                    <li>• Efficacité <strong className="text-blue-700">Pareto-optimale</strong> : Aucune réallocation ne peut améliorer le bien-être d'un agent sans détériorer celui d'un autre</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Le théorème de l'impossibilité d'Arrow</h4>
                  <p className="text-sm text-gray-600">
                    Il est impossible de trouver un système de vote respectant certaines conditions
                    de rationalité tout en étant démocratique (paradoxe de Condorcet).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
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
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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
