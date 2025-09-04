import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, Heart } from 'lucide-react';

const EtatProvidencePage = () => {
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
              <span className="text-foreground font-medium">État-providence et protection sociale</span>
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
                <Heart className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  État-providence et protection sociale
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 4.8 - Module 4</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Analyser le rôle de l'État-providence dans la protection sociale
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Origines et définition de l'État-providence */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                Origines et définition de l'État-providence
              </h2>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Définition de l'État-providence</h3>
                  <p className="text-sm text-gray-600">
                    Ensemble des institutions et politiques publiques visant à protéger les citoyens contre les risques sociaux et à assurer une redistribution des richesses.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-blue-300 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Origines historiques</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Révolution industrielle (XIXe siècle)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Loi sur les accidents du travail (1898)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Assurances sociales (1928-1930)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Sécurité sociale (1945)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-300 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Principes fondateurs</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Solidarité intergénérationnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Universalité des droits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Redistribution verticale et horizontale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Répartition des risques</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Les piliers de la protection sociale */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                Les piliers de la protection sociale
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Assurance maladie</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Couverture universelle (CMU)</li>
                      <li>• Remboursement des soins</li>
                      <li>• Médecine préventive</li>
                      <li>• Complémentaires santé</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Assurance vieillesse</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Régime général et régimes spéciaux</li>
                      <li>• Répartition et capitalisation</li>
                      <li>• Minimum vieillesse</li>
                      <li>• Réforme des retraites</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Assurance chômage</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Allocation d'aide au retour à l'emploi</li>
                      <li>• Financement par les cotisations</li>
                      <li>• Contrôle des chômeurs</li>
                      <li>• Formation professionnelle</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Prestations familiales</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Allocations familiales</li>
                      <li>• Quotient familial</li>
                      <li>• Complément familial</li>
                      <li>• Allocation de rentrée scolaire</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les minima sociaux</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Revenu de solidarité active (RSA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Allocation adulte handicapé (AAH)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Allocation de solidarité spécifique (ASS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Minimum vieillesse (ASPA)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Financement et gestion de la protection sociale */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                Financement et gestion de la protection sociale
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Sources de financement</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Cotisations sociales (employeurs/salariés)</li>
                      <li>• Impôts (CSG, CRDS)</li>
                      <li>• Contributions publiques</li>
                      <li>• Taxe sur les salaires</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Gestion paritaire</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Représentation syndicale</li>
                      <li>• Représentation patronale</li>
                      <li>• Équilibre des pouvoirs</li>
                      <li>• Gouvernance démocratique</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les défis du financement</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Vieillissement de la population</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Augmentation des dépenses de santé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Évolution du marché du travail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Contraintes budgétaires européennes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Critiques et évolutions de l'État-providence */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">4</span>
                </div>
                Critiques et évolutions de l'État-providence
              </h2>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les critiques néolibérales</h3>
                  <p className="text-sm text-gray-600">
                    L'État-providence serait inefficace, coûteux et créateur d'effets pervers sur l'offre de travail et l'investissement.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Arguments en faveur</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Protection contre les risques</li>
                      <li>• Réduction des inégalités</li>
                      <li>• Cohésion sociale</li>
                      <li>• Stabilité économique</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Limites et critiques</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Coûts budgétaires élevés</li>
                      <li>• Rigidités du marché du travail</li>
                      <li>• Désincitations au travail</li>
                      <li>• Dépendance à l'égard de l'État</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les réformes de l'État-providence</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Loi Veil (1975) :</strong> Interruption volontaire de grossesse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>RMI (1988) :</strong> Revenu minimum d'insertion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Couverture maladie universelle (2000)</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>RSA (2009) :</strong> Revenu de solidarité active</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Perspectives d'évolution</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Adaptation au vieillissement démographique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Modernisation des services publics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Développement de la prévention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Intégration des nouvelles technologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/module4/lutte-inegalites">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Button variant="outline" size="sm" className="text-gray-500">
                Fin du Module 4
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtatProvidencePage;
