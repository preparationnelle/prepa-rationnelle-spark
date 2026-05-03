import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle, BarChart3 } from 'lucide-react';

const LutteInegalitesPage = () => {
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
              <span className="text-foreground font-medium">Politiques de lutte contre les inégalités</span>
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
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Les politiques de lutte contre les inégalités
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 4.7 - Module 4</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprendre les politiques publiques de réduction des inégalités
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Les différentes formes d'inégalités */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                Les différentes formes d'inégalités
              </h2>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Inégalités économiques vs inégalités sociales</h3>
                  <p className="text-sm text-gray-600">
                    Les inégalités peuvent être mesurées sous différents angles : revenus, patrimoines, accès aux services publics, opportunités.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-blue-300 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Inégalités de revenus</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Rapport inter-décile (D9/D1)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Coefficient de Gini</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Revenus primaires vs revenus disponibles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Effet des transferts sociaux</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-300 pl-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Inégalités de patrimoines</h3>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Transmission intergénérationnelle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Accumulation du capital</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Inégalités immobilières</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Concentration de la richesse</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Inégalités d'opportunités</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Accès à l'éducation et à la formation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Discriminations sur le marché du travail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Ségrégation résidentielle et scolaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Réseaux sociaux et capital relationnel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Politiques de redistribution */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                Politiques de redistribution et fiscalité
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Impôt progressif sur le revenu</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Barème progressif par tranches</li>
                      <li>• Quotient familial</li>
                      <li>• Crédits d'impôt</li>
                      <li>• Réduction des inégalités verticales</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Impôt sur la fortune (ISF)</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Taxation du patrimoine</li>
                      <li>• Barème progressif</li>
                      <li>• Exonérations partielles</li>
                      <li>• Réduction des inégalités patrimoniales</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Transferts sociaux et prestations</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Allocations familiales et aides sociales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Revenus de solidarité active (RSA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Prime d'activité et complément familial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Allocation adulte handicapé (AAH)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Politiques familiales</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Allocations familiales et quotient familial</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Prestations d'accueil du jeune enfant (PAJE)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Complément familial et allocation de rentrée scolaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Réduction d'impôts pour enfants à charge</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Politiques d'égalité des chances */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                Politiques d'égalité des chances
              </h2>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Éducation et formation</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• École publique gratuite</li>
                      <li>• Programmes d'éducation prioritaire</li>
                      <li>• Bourses d'études</li>
                      <li>• Formation professionnelle</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Politiques d'insertion</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Contrats aidés</li>
                      <li>• Emplois jeunes</li>
                      <li>• Garantie jeunes</li>
                      <li>• Parcours d'insertion</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Lutte contre les discriminations</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Loi contre les discriminations raciales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Égalité professionnelle homme-femme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Accessibilité pour les personnes handicapées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Politiques d'intégration des immigrés</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Évaluation des politiques de lutte contre les inégalités */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">4</span>
                </div>
                Évaluation et limites des politiques
              </h2>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Efficacité des politiques redistributives</h3>
                  <p className="text-sm text-gray-600">
                    Les politiques de redistribution permettent de réduire les inégalités mais peuvent avoir des effets pervers sur l'offre de travail.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Effets positifs</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Réduction de la pauvreté</li>
                      <li>• Amélioration du bien-être</li>
                      <li>• Stabilité sociale</li>
                      <li>• Cohésion sociale</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Effets pervers possibles</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Désincitation au travail</li>
                      <li>• Trappes à pauvreté</li>
                      <li>• Évasion fiscale</li>
                      <li>• Coûts administratifs</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Le débat égalité vs efficacité</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Courbe de Kuznets :</strong> Croissance économique et réduction des inégalités</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Théorème d'Okun :</strong> Trade-off entre chômage et inégalités</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Politiques structurelles :</strong> Éducation et formation comme leviers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Politiques conjoncturelles :</strong> Redistribution et soutien aux plus vulnérables</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Les nouveaux défis</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Inégalités liées à la révolution numérique</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Précarisation du travail et ubérisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Inégalités territoriales et ségrégation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Transition écologique et justice climatique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation entre chapitres */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/module4/justice-sociale">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module4/etat-providence">
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

export default LutteInegalitesPage;
