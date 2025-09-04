import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, BarChart3 } from 'lucide-react';

const CroissanceEconomiquePage = () => {
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
              <span className="text-foreground font-medium">La croissance économique</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/formation/esh/premiere-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 2
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <BarChart3 className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  La croissance économique
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 2.1 - Module 2</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprendre les mécanismes et les facteurs de la croissance économique depuis le XIXe siècle
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Définition de la croissance économique */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">1</span>
                </div>
                Définition et mesure de la croissance
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Définition</h3>
                  <p className="text-sm text-gray-600">
                    La croissance économique désigne l'augmentation durable de la production de biens et services dans une économie,
                    mesurée généralement par l'évolution du Produit Intérieur Brut (PIB).
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Mesure de la croissance :</h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• <strong className="text-blue-700">PIB nominal</strong> : Valeur des biens et services à prix courants</li>
                    <li>• <strong className="text-blue-700">PIB réel</strong> : Valeur des biens et services à prix constants</li>
                    <li>• <strong className="text-blue-700">Taux de croissance</strong> : Variation annuelle du PIB réel</li>
                    <li>• <strong className="text-blue-700">PIB par habitant</strong> : PIB réel divisé par la population</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Facteurs de croissance */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">2</span>
                </div>
                Facteurs de la croissance économique
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Facteurs quantitatifs :</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-blue-700">Accumulation du capital</strong>
                        <p className="text-xs text-gray-600">Investissement dans les équipements et infrastructures</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-blue-700">Croissance démographique</strong>
                        <p className="text-xs text-gray-600">Augmentation de la population active</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Facteurs qualitatifs :</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-blue-700">Progrès technique</strong>
                        <p className="text-xs text-gray-600">Innovations et améliorations technologiques</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-blue-700">Amélioration de l'éducation</strong>
                        <p className="text-xs text-gray-600">Formation et qualification de la main-d'œuvre</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Les grandes phases de la croissance */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">3</span>
                </div>
                Grandes phases de la croissance depuis le XIXe siècle
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">XIXe siècle - Révolution industrielle</h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Passage d'une économie agricole à une économie industrielle</li>
                    <li>• Développement des chemins de fer et des télécommunications</li>
                    <li>• Croissance démographique importante</li>
                    <li>• Taux de croissance : <span className="text-blue-700 font-medium">2-3% par an</span></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">XXe siècle - Trente Glorieuses (1945-1975)</h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Reconstruction d'après-guerre</li>
                    <li>• État-providence et politiques keynésiennes</li>
                    <li>• Révolution technologique (informatique, nucléaire)</li>
                    <li>• Taux de croissance : <span className="text-blue-700 font-medium">4-5% par an</span></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Fin XXe - début XXIe siècle</h3>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>• Globalisation et ouverture des marchés</li>
                    <li>• Révolution numérique et internet</li>
                    <li>• Croissance plus modérée mais plus durable</li>
                    <li>• Taux de croissance : <span className="text-blue-700 font-medium">2-3% par an</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Modèles de croissance */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm">4</span>
                </div>
                Modèles théoriques de croissance
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Modèle de <span className="text-blue-700">Solow</span> (1956)</h3>
                  <p className="text-sm text-gray-600">
                    La croissance dépend de l'accumulation du capital physique et humain, ainsi que du progrès technique.
                    Dans le long terme, la croissance par habitant dépend uniquement du progrès technique.
                  </p>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Théories <span className="text-blue-700">endogènes</span> de la croissance</h3>
                  <p className="text-sm text-gray-600">
                    Le progrès technique n'est pas exogène mais résulte des investissements en R&D,
                    en éducation et en capital humain.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Limites de la croissance</h3>
                  <p className="text-sm text-gray-600">
                    La croissance économique peut être limitée par l'épuisement des ressources naturelles,
                    la dégradation de l'environnement, ou les contraintes démographiques.
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
                Retour au Module 2
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module2/inegalites-developpement">
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

export default CroissanceEconomiquePage;
