
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, TrendingUp, Languages, Globe, Mic } from 'lucide-react';

export const AutomationsSection = () => {
  return (
    <section className="py-12 sm:py-8 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Nos <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">générateurs IA</span>
          </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
Outils d'intelligence artificielle qui vous font gagner des heures de travail.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Générateur Langue */}
          <Link to="/generator/languages-unified" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Languages className="h-6 w-6 text-orange-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-orange-600 group-hover:text-blue-600 transition-colors">
                    Générateur Langue
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  Traductions, résumés et entraînement linguistique avec correction instantanée et feedback détaillé.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Paragraphes et thèmes grammaticaux
                  </div>
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Correction instantanée
                  </div>
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Feedback détaillé
                  </div>
                </div>
                <Button variant="ghost" className="text-orange-600 group-hover:bg-blue-50 group-hover:text-blue-600 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Essayer maintenant
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Générateur Géopolitique */}
          <Link to="/generator/geopolitics-unified" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Globe className="h-6 w-6 text-orange-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-orange-600 group-hover:text-blue-600 transition-colors">
                    Générateur Géopolitique
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  Cours structurés et études de cas automatiquement générés pour analyser les enjeux mondiaux.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Contenu géopolitique complet
                  </div>
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Études de cas d'actualité
                  </div>
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Analyses structurées
                  </div>
                </div>
                <Button variant="ghost" className="text-orange-600 group-hover:bg-blue-50 group-hover:text-blue-600 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Essayer maintenant
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Générateur Oraux */}
          <Link to="/generator/oral-unified" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Mic className="h-6 w-6 text-orange-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-orange-600 group-hover:text-blue-600 transition-colors">
                    Générateur Oraux
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  Réponses et préparation d'entretiens avec génération automatique de réponses personnalisées.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Réponses d'entretien
                  </div>
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Questions EM Lyon
                  </div>
                  <div className="text-sm text-orange-600 group-hover:text-blue-600 flex items-center gap-2 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4" />
                    Générateur EDHEC
                  </div>
                </div>
                <Button variant="ghost" className="text-orange-600 group-hover:bg-blue-50 group-hover:text-blue-600 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Essayer maintenant
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link to="/generator">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-blue-600 hover:to-blue-700"
            >
              <span className="flex items-center gap-2">
                Voir tous nos générateurs
                <TrendingUp className="h-4 w-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
