import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Euro, Home, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

const EuropeEconomiqueMonetairePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
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
              <span className="text-foreground font-medium">L'Europe économique et monétaire</span>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/formation/esh/deuxieme-annee">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au Module 3
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border border-blue-300">
                <Euro className="h-8 w-8 text-blue-700" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  L'Europe économique et monétaire
                </h1>
                <div className="text-sm text-blue-700 font-medium mt-1">Chapitre 3.8 - Module 3</div>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprendre l'Union économique et monétaire et ses institutions européennes
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">1</span>
                </div>
                Les institutions européennes
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Parlement Européen</h3>
                  <p className="text-sm text-gray-600">Pouvoir législatif élu au suffrage universel, contrôle démocratique des institutions</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Conseil Européen</h3>
                  <p className="text-sm text-gray-600">Chef d'État et de gouvernement, orientations stratégiques de l'Union</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Commission Européenne</h3>
                  <p className="text-sm text-gray-600">Pouvoir exécutif, proposition et exécution des politiques européennes</p>
                </div>
                <div className="border-l-4 border-blue-300 pl-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Conseil de l'Union Européenne</h3>
                  <p className="text-sm text-gray-600">Représentation des États membres, adoption des actes législatifs</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">2</span>
                </div>
                La Banque Centrale Européenne (BCE)
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Objectifs :</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Stabilité des prix (inflation &lt; 2%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Soutien des politiques économiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Stabilité financière</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-800">Instruments :</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Taux directeurs (refinancement)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Opérations d'open market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Réserves obligatoires</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Indépendance de la BCE :</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Protection contre les pressions politiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Mandat clair et limité à la stabilité des prix</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Transparence et responsabilité</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-sm">3</span>
                </div>
                Les politiques européennes
              </h2>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Politique économique commune</h3>
                <p className="text-sm text-gray-600">
                  Coordination des politiques budgétaires, critères de convergence, pacte de stabilité et de croissance
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Politique agricole commune (PAC)</h4>
                  <p className="text-xs text-gray-600">Soutien aux agriculteurs, marchés agricoles européens</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Politique de cohésion</h4>
                  <p className="text-xs text-gray-600">Fonds structurels pour réduire les disparités régionales</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Politique commerciale commune</h4>
                  <p className="text-xs text-gray-600">Négociations commerciales internationales</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Politique de concurrence</h4>
                  <p className="text-xs text-gray-600">Lutte contre les monopoles et aides d'État</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <Link to="/formation/esh/module3/construction-europeenne">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Chapitre précédent
              </Button>
            </Link>

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                Exercices
              </Button>
              <Link to="/formation/esh/module3/europe-sociale">
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

export default EuropeEconomiqueMonetairePage;
