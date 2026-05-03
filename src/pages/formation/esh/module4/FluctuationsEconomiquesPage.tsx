import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, Activity } from 'lucide-react';

const FluctuationsEconomiquesPage = () => {
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
              <Link to="/formation/esh/deuxieme-annee" className="hover:text-foreground transition-colors">
                Deuxième année
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground font-medium">Fluctuations économiques</span>
            </div>
          </div>
        </nav>

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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <Activity className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Fluctuations économiques et politiques de régulation des cycles
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 4.3 - Module 4</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprendre les cycles économiques et les politiques de régulation
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Les cycles économiques */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                Les cycles économiques : phases et caractéristiques
              </h2>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Définition du cycle économique</h3>
                  <p className="text-sm text-gray-600">
                    Alternance régulière de phases d'expansion et de contraction de l'activité économique autour d'une tendance de long terme.
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-green-800 mb-1">Expansion</h4>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Croissance Y</li>
                      <li>• Chômage ↓</li>
                      <li>• Inflation ↑</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-yellow-800 mb-1">Pic</h4>
                    <ul className="text-xs text-yellow-700 space-y-1">
                      <li>• Maximum Y</li>
                      <li>• Plein emploi</li>
                      <li>• Inflation élevée</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-red-800 mb-1">Récession</h4>
                    <ul className="text-xs text-red-700 space-y-1">
                      <li>• Y ↓</li>
                      <li>• Chômage ↑</li>
                      <li>• Déflation possible</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <h4 className="font-semibold text-blue-800 mb-1">Creux</h4>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• Minimum Y</li>
                      <li>• Chômage élevé</li>
                      <li>• Stagnation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Les théories des cycles économiques */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                Les théories explicatives des cycles économiques
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Théorie keynésienne</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Cycles dus aux variations de la demande effective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Rôle des anticipations et de la confiance des agents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Multiplicateur d'investissement et accélérateur</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Théorie monétariste</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Cycles dus aux variations de la masse monétaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Rôle de la politique monétaire dans la régulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Critique des interventions discrétionnaires</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Théorie des cycles réels (RBC)</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Cycles dus aux chocs technologiques et d'offre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Réponses optimales des agents économiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Marchés efficients et flexibilité des prix</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Les politiques de régulation */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                Les politiques de régulation des cycles économiques
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Politique budgétaire</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Stabilisation automatique (impôts progressifs)</li>
                      <li>• Relance budgétaire en récession</li>
                      <li>• Freinage budgétaire en surchauffe</li>
                      <li>• Multiplicateur des dépenses publiques</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Politique monétaire</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ajustement des taux directeurs</li>
                      <li>• Contrôle de la masse monétaire</li>
                      <li>• Politique de quantitative easing</li>
                      <li>• Règles de Taylor</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Politiques structurelles</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Flexibilité du marché du travail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Libéralisation des marchés des biens et services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Politiques de l'innovation et de la formation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Limites et contraintes */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">4</span>
                </div>
                Limites et contraintes des politiques de régulation
              </h2>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Le problème du délai (Inside lag)</h3>
                  <p className="text-sm text-gray-600">
                    Temps nécessaire au diagnostic de la situation économique et à la mise en œuvre des politiques.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Contraintes institutionnelles</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Règles budgétaires européennes</li>
                      <li>• Indépendance des banques centrales</li>
                      <li>• Coordination internationale</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Contraintes économiques</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Rigidités structurelles</li>
                      <li>• Anticipations des agents</li>
                      <li>• Effets d'éviction</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Le dilemme de la politique économique</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Trade-off entre inflation et chômage (courbe de Phillips)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Choix entre politiques discrétionnaires et règles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Équilibre entre efficacité et crédibilité</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/module4/equilibre-macro">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module4/politiques-structurelles">
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

export default FluctuationsEconomiquesPage;
