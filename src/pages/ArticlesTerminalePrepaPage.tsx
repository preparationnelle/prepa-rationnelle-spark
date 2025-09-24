import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrendingUp, ArrowLeft, Calculator } from 'lucide-react';
import Navigation from '@/components/Navigation';

const ArticlesTerminalePrepaPage = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden py-8 sm:py-8">
        {/* Floating elements - Blue theme for Terminale → Prépa */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Terminale </span>
                <span className="text-blue-600">→ Prépa</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Conseils et ressources pour réussir la transition entre la Terminale et la prépa ECG : méthodes de travail, organisation, et points clés à anticiper.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                  </Button>
                </Link>
                <Link to="/articles">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700">
                    ← Retour aux niveaux
                  </Button>
                </Link>
              </div>
            </div>

            {/* Module Mathématiques */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">Module Mathématiques</h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  Formation complète - Transition
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 mb-8">
                  <p className="text-blue-800 font-medium text-lg">
                    Préparez-vous efficacement à la transition entre la Terminale et la prépa ECG avec notre module complet de mathématiques. Maîtrisez les chapitres fondamentaux et développez les méthodes de travail essentielles.
                  </p>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Contenu du module</h4>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h5 className="text-xl font-semibold text-blue-600 mb-3">7 Chapitres fondamentaux</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Calculs
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Sommes, suites et produits
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Fonctions
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Dérivées
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Intégrale
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Probabilités
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Matrices
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h5 className="text-xl font-semibold text-blue-600 mb-3">Pour chaque chapitre</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Cours détaillé avec exemples
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Exercices d'application
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Points clés à retenir
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Conseils méthodologiques
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Préparation aux attentes prépa
                      </li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-2xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Objectifs de la formation</h4>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <h6 className="font-semibold text-blue-700 mb-2">Transition réussie</h6>
                    <p className="text-sm text-gray-600">Préparer efficacement le passage du lycée à la prépa</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calculator className="h-6 w-6 text-blue-600" />
                    </div>
                    <h6 className="font-semibold text-blue-700 mb-2">Bases solides</h6>
                    <p className="text-sm text-gray-600">Maîtriser les fondamentaux mathématiques</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ArrowLeft className="h-6 w-6 text-blue-600 transform rotate-90" />
                    </div>
                    <h6 className="font-semibold text-blue-700 mb-2">Méthodes de travail</h6>
                    <p className="text-sm text-gray-600">Développer l'organisation et l'efficacité</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Link to="/formation/math/terminale-vers-prepa">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                      <Calculator className="mr-2 h-5 w-5" />
                      Accéder au module Mathématiques
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 hover:border-indigo-300 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 group p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-700 group-hover:text-indigo-800 transition-colors duration-300">
                  Prêt pour la transition ?
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-700 transition-colors duration-300 mb-6">
                  Rejoignez nos formations spécialisées pour réussir votre passage de la Terminale à la prépa ECG.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-indigo-600 text-white transition-all duration-300">
                      Nous contacter
                    </Button>
                  </Link>
                  <Link to="/formations">
                    <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300">
                      Voir toutes nos formations
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlesTerminalePrepaPage;
