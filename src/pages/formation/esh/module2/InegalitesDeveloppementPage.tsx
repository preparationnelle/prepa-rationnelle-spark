import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Target, BarChart3 } from 'lucide-react';

const InegalitesDeveloppementPage = () => {
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
              <span className="text-foreground font-medium">Inégalités et stratégies de développement</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
              <Target className="h-6 w-6 text-blue-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Inégalités et stratégies de développement
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Analyser les inégalités économiques et les politiques de développement pour comprendre les défis du développement durable
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-8">

              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction aux inégalités de développement</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les inégalités de développement constituent l'un des défis majeurs de l'économie mondiale contemporaine.
                    Elles se manifestent à différentes échelles : entre pays riches et pays pauvres, entre régions d'un même pays,
                    et même au sein des populations urbaines.
                  </p>
                </div>
              </section>

              {/* Les différentes formes d'inégalités */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Les différentes formes d'inégalités</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Inégalités <span className="text-blue-700">Nord-Sud</span></h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Écart croissant entre pays développés et pays en développement</li>
                      <li>• Concentration de la richesse dans les pays du Nord</li>
                      <li>• Phénomène de la <span className="text-blue-700">"fuite des cerveaux"</span></li>
                      <li>• Dépendance technologique et commerciale</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Inégalités <span className="text-blue-700">internes</span></h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Disparités régionales au sein d'un pays</li>
                      <li>• Concentration urbaine vs rural</li>
                      <li>• Inégalités de revenus et de patrimoine</li>
                      <li>• Accès inégal aux services publics</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Stratégies de développement */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Stratégies de développement</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Développement <span className="text-blue-700">autocentré</span></h3>
                    <p className="text-gray-700">
                      Stratégie privilégiant l'industrialisation par substitution aux importations,
                      le protectionnisme et l'investissement dans les secteurs stratégiques.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Développement <span className="text-blue-700">extroverti</span></h3>
                    <p className="text-gray-700">
                      Modèle basé sur les exportations, l'ouverture aux investissements étrangers
                      et l'insertion dans les chaînes de valeur globales.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-300">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Développement <span className="text-blue-700">durable</span></h3>
                    <p className="text-gray-700">
                      Approche intégrant les dimensions économique, sociale et environnementale,
                      avec pour objectif le développement humain durable.
                    </p>
                  </div>
                </div>
              </section>

              {/* Défis contemporains */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Défis contemporains</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Les nouveaux enjeux du développement</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <span className="text-blue-700">Changement climatique</span> et transition énergétique</li>
                    <li>• Révolution <span className="text-blue-700">numérique</span> et transformation digitale</li>
                    <li>• Pandémies et crises sanitaires globales</li>
                    <li>• Migrations et mobilité internationale</li>
                    <li>• Inégalités croissantes dans un monde globalisé</li>
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
              <BarChart3 className="h-4 w-4" />
              Chapitre 2.1 - La croissance économique
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InegalitesDeveloppementPage;
