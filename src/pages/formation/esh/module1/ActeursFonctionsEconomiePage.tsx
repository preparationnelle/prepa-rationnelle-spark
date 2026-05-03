import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const ActeursFonctionsEconomiePage = () => {
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
              <span className="text-foreground font-medium">Les acteurs et les grandes fonctions de l'économie</span>
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
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center border border-gray-300">
                <Users className="h-8 w-8 text-gray-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Les acteurs et les grandes fonctions de l'économie
                </h1>
                <div className="text-sm text-gray-600 font-medium mt-1">Chapitre 1.1 - Module 1</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprendre les différents acteurs économiques et leurs rôles dans le système économique
            </p>
          </div>

          {/* Contenu principal */}
          <div className="space-y-8">
            {/* Section 1: Les acteurs économiques */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-sm">1</span>
                </div>
                Les acteurs économiques
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Acteurs privés :</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Les ménages (consommateurs, épargnants)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Les entreprises (producteurs, investisseurs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Les banques (intermédiaires financiers)</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Acteurs publics :</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>L'État (collecte d'impôts, dépenses publiques)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Les administrations publiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span>Les institutions internationales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2: Les grandes fonctions économiques */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-sm">2</span>
                </div>
                Les grandes fonctions économiques
              </h2>

              <div className="space-y-4">
                <div className="border-l border-gray-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Production</h3>
                  <p className="text-sm text-gray-600">Création de biens et services par les entreprises utilisant facteurs de production (travail, capital, matières premières)</p>
                </div>

                <div className="border-l border-gray-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Répartition</h3>
                  <p className="text-sm text-gray-600">Distribution des revenus entre les différents acteurs économiques (salaires, profits, intérêts, loyers)</p>
                </div>

                <div className="border-l border-gray-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Échange</h3>
                  <p className="text-sm text-gray-600">Circulation des biens et services sur les marchés via les mécanismes d'offre et de demande</p>
                </div>

                <div className="border-l border-gray-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Consommation</h3>
                  <p className="text-sm text-gray-600">Utilisation finale des biens et services par les ménages pour satisfaire leurs besoins</p>
                </div>

                <div className="border-l border-gray-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Épargne et investissement</h3>
                  <p className="text-sm text-gray-600">Report de la consommation pour financer les investissements futurs et la croissance économique</p>
                </div>
              </div>
            </div>

            {/* Section 3: Interactions entre acteurs */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-sm">3</span>
                </div>
                Interactions entre acteurs économiques
              </h2>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Circuit économique</h3>
                <p className="text-sm text-gray-600">
                  Les acteurs économiques sont interconnectés : les ménages fournissent du travail aux entreprises et consomment leurs productions,
                  les entreprises paient des salaires et vendent aux ménages, l'État prélève des impôts et redistribue via les services publics.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Flux réels</h4>
                  <p className="text-xs text-gray-600">Biens, services, travail</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Flux financiers</h4>
                  <p className="text-xs text-gray-600">Revenus, salaires, impôts</p>
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
              <Link to="/formation/esh/module1/monnaie-financement">
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

export default ActeursFonctionsEconomiePage;
