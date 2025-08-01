
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Languages, Globe, Users, BookOpen, TrendingUp, CheckCircle, Calculator } from 'lucide-react';

export const FormationsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          Nos <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">formations spécialisées</span>
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          Formations conçues spécifiquement pour les étudiants en prépa ECG, avec méthodes éprouvées et accompagnement personnalisé.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Formation Maths */}
          <Link to="/formation/maths" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-yellow-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Calculator className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-yellow-600 transition-colors">
                    Maths ECG
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4">
                  Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes efficaces.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-yellow-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    20 chapitres progressifs
                  </div>
                  <div className="text-sm text-yellow-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Exercices type concours
                  </div>
                  <div className="text-sm text-yellow-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Méthodes et astuces de prépa
                  </div>
                </div>
                <Button variant="ghost" className="text-yellow-600 group-hover:bg-yellow-50 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Découvrir la formation
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Formation Python */}
          <Link to="/formation" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    Python ECG
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4">
                  Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-blue-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    54 commandes essentielles
                  </div>
                  <div className="text-sm text-blue-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Exercices type concours
                  </div>
                  <div className="text-sm text-blue-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    +3 à 5 points garantis
                  </div>
                </div>
                <Button variant="ghost" className="text-blue-600 group-hover:bg-blue-50 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Commencer le module
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Formation Anglais */}
          <Link to="/formation/anglais" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-green-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Languages className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    Anglais ECG
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4">
                  Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-green-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Grammaire systématique
                  </div>
                  <div className="text-sm text-green-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Thèmes et versions
                  </div>
                  <div className="text-sm text-green-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Essais et synthèses
                  </div>
                </div>
                <Button variant="ghost" className="text-green-600 group-hover:bg-green-50 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Voir la formation
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Formation Allemand */}
          <Link to="/formation/allemand" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-red-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Languages className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                    Allemand ECG
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4">
                  Maîtrisez les déclinaisons, la grammaire complexe et les techniques d'expression écrite et orale.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-red-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Déclinaisons et cas
                  </div>
                  <div className="text-sm text-red-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Structures complexes
                  </div>
                  <div className="text-sm text-red-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Essais méthodiques
                  </div>
                </div>
                <Button variant="ghost" className="text-red-600 group-hover:bg-red-50 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Voir la formation
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Formation Géopolitique */}
          <Link to="/formation/geopolitique" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-orange-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                    Géopolitique
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4">
                  Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-orange-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Enjeux contemporains
                  </div>
                  <div className="text-sm text-orange-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Méthodes d'analyse
                  </div>
                  <div className="text-sm text-orange-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Actualité stratégique
                  </div>
                </div>
                <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Voir la formation
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Entretiens de Personnalité */}
          <Link to="/methodologie/entretiens-personnalite" className="group">
            <Card className="h-full bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-orange-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                    Entretiens
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-600 mb-4">
                  Préparez-vous aux entretiens de personnalité avec méthodes éprouvées et simulations réalistes.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-orange-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Techniques de présentation
                  </div>
                  <div className="text-sm text-orange-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Gestion du stress
                  </div>
                  <div className="text-sm text-orange-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Simulations d'entretiens
                  </div>
                </div>
                <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full group-hover:scale-105 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Préparer mes entretiens
                    <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          {/* Bouton 'Découvrir toutes nos formations' supprimé */}
        </div>
      </div>
    </section>
  );
};
