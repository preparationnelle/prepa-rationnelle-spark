import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Calendar, Briefcase } from 'lucide-react';

const ReussirEpreuvesAllemandePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Réussir les épreuves allemandes
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez toutes les épreuves du concours d'allemand
          </p>
        </div>

        {/* SOMMAIRE DES CHAPITRES */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">

            {/* Module 1 - Réussir l'essai */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Réussir l'essai</h3>
                  <p className="text-gray-600 mb-4">Structure argumentative en allemand, connecteurs logiques avancés et vocabulaire argumentatif spécialisé</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand/reussir-essai">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Essai parfait
                      </Button>
                    </Link>
                    <Link to="/formation/allemand/reussir-essai/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2 - Réussir la synthèse */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Réussir la synthèse</h3>
                  <p className="text-gray-600 mb-4">Techniques de synthèse : identification des idées principales, structuration hiérarchique et langage objectif</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand/reussir-synthese">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Synthèse parfaite
                      </Button>
                    </Link>
                    <Link to="/formation/allemand/reussir-synthese/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3 - Méthodologie de travail */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Méthodologie de travail</h3>
                  <p className="text-gray-600 mb-4">Méthode complète d'allemand en prépa : traduction, gestion des erreurs, approfondissement thématique et organisation du temps</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand/methodologie">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Méthode complète
                      </Button>
                    </Link>
                    <Link to="/formation/allemand/methodologie/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 4 - Grammaire avancée */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thèmes grammaticaux</h3>
                  <p className="text-gray-600 mb-4">Subjonctif, constructions passives, relatives complexes et style indirect pour maîtriser l'allemand académique</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand/grammaire-avancee">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Thèmes grammaticaux
                      </Button>
                    </Link>
                    <Link to="/formation/allemand/grammaire-avancee/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
                    </Link>
                  </div>
            </div>
          </div>
        </div>

            {/* Module 5 - Épreuves orales */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-orange-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-orange-600 text-lg">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Épreuves orales</h3>
                  <p className="text-gray-600 mb-4">Préparation aux épreuves orales : présentation structurée, argumentation orale et gestion du temps</p>
                  <div className="flex gap-3">
                    <Link to="/formation/allemand/epreuves-orales">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Fiche méthodologique
                      </Button>
                    </Link>
                    <Link to="/formation/allemand/epreuves-orales/exercices">
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Exercices
                      </Button>
            </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReussirEpreuvesAllemandePage;
