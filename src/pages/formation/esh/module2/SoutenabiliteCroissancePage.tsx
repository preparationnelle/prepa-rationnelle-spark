import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Leaf, Target } from 'lucide-react';

const SoutenabiliteCroissancePage = () => {
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
              <span className="text-foreground font-medium">Soutenabilité de la croissance</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
              <Leaf className="h-6 w-6 text-blue-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              La soutenabilité de la croissance et du développement
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Étudier les enjeux environnementaux et sociaux du développement durable et les limites de la croissance
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Croissance économique vs développement durable</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La question de la soutenabilité de la croissance oppose deux visions du développement :
                    d'une part la poursuite de la croissance économique comme moteur du progrès social,
                    d'autre part l'impératif de préservation des ressources et de l'environnement.
                  </p>
                </div>
              </section>

              {/* Les limites de la croissance */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Les limites de la croissance</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Limites <span className="text-blue-700">environnementales</span></h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Épuisement des ressources naturelles</li>
                      <li>• <span className="text-blue-700">Changement climatique</span> et réchauffement</li>
                      <li>• Perte de biodiversité</li>
                      <li>• Pollution et dégradation des écosystèmes</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Limites <span className="text-blue-700">sociales</span></h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Inégalités croissantes</li>
                      <li>• Exclusion sociale</li>
                      <li>• Pression sur les services publics</li>
                      <li>• Burn-out et souffrance au travail</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Développement durable */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Le développement durable : une alternative ?</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Les trois piliers du développement durable</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 border border-blue-300">
                          <span className="text-blue-700 font-bold">É</span>
                        </div>
                        <p className="text-gray-700 font-medium">Économique</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 border border-blue-300">
                          <span className="text-blue-700 font-bold">S</span>
                        </div>
                        <p className="text-gray-700 font-medium">Social</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2 border border-blue-300">
                          <span className="text-blue-700 font-bold">E</span>
                        </div>
                        <p className="text-gray-700 font-medium">Environnemental</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Indicateurs de soutenabilité */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Indicateurs de soutenabilité</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Indicateurs <span className="text-blue-700">économiques</span></h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <span className="text-blue-700">PIB vert</span> (ajusté des externalités)</li>
                      <li>• Empreinte écologique</li>
                      <li>• Productivité énergétique</li>
                      <li>• Investissements durables</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Indicateurs <span className="text-blue-700">sociaux</span></h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <span className="text-blue-700">Indice de développement humain (IDH)</span></li>
                      <li>• Coefficient de Gini</li>
                      <li>• Espérance de vie en bonne santé</li>
                      <li>• Taux d'emploi et de formation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Politiques de transition */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Politiques de transition vers la soutenabilité</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Transition <span className="text-blue-700">énergétique</span></h3>
                    <p className="text-gray-700">
                      Développement des énergies renouvelables, amélioration de l'efficacité énergétique,
                      décarbonisation de l'économie et adaptation aux changements climatiques.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Économie <span className="text-blue-700">circulaire</span></h3>
                    <p className="text-gray-700">
                      Réduction des déchets, recyclage, écoconception, allongement de la durée de vie
                      des produits et développement de l'économie de fonctionnalité.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Politiques sociales durables</h3>
                    <p className="text-gray-700">
                      Lutte contre les inégalités, promotion de l'éducation et de la formation,
                      protection sociale universelle et développement des solidarités.
                    </p>
                  </div>
                </div>
              </section>

              {/* Défis et perspectives */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Défis et perspectives</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Les grands enjeux de la soutenabilité</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Réconciliation croissance économique et préservation environnementale</li>
                    <li>• <span className="text-blue-700">Justice intergénérationnelle</span> et équité sociale</li>
                    <li>• Innovation technologique et transition écologique</li>
                    <li>• <span className="text-blue-700">Gouvernance mondiale</span> et régulation internationale</li>
                    <li>• Changement des modes de vie et des valeurs sociétales</li>
                  </ul>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <Link to="/formation/esh/premiere-annee">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 rotate-180" />
              Retour au Module 2
            </Button>
          </Link>
          <Link to="/formation/esh/module2/croissance-economique">
            <Button className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Chapitre 2.1 - La croissance économique
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoutenabiliteCroissancePage;
