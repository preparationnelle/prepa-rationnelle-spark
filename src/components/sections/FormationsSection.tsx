
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Languages, Globe, Users, BookOpen } from 'lucide-react';

export const FormationsSection = () => {
  return (
    <section className="py-16 px-4 bg-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Nos <span className="gradient-text">formations spécialisées</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Formations conçues spécifiquement pour les étudiants en prépa ECG, avec méthodes éprouvées et accompagnement personnalisé.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Formation Python */}
          <Link to="/pourquoi-python-prepa-ecg" className="group">
            <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    🐍 Python ECG
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-blue-600">✓ 54 commandes essentielles</div>
                  <div className="text-sm text-blue-600">✓ Exercices type concours</div>
                  <div className="text-sm text-blue-600">✓ +3 à 5 points garantis</div>
                </div>
                <Button variant="ghost" className="text-blue-600 group-hover:bg-blue-50 w-full">
                  Découvrir la formation →
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Formation Anglais */}
          <Link to="/formation/anglais" className="group">
            <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Languages className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    🇬🇧 Anglais ECG
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-green-600">✓ Grammaire systématique</div>
                  <div className="text-sm text-green-600">✓ Thèmes et versions</div>
                  <div className="text-sm text-green-600">✓ Essais et synthèses</div>
                </div>
                <Button variant="ghost" className="text-green-600 group-hover:bg-green-50 w-full">
                  Voir la formation →
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Formation Allemand */}
          <Link to="/formation/allemand" className="group">
            <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-red-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Languages className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-red-600 transition-colors">
                    🇩🇪 Allemand ECG
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Maîtrisez les déclinaisons, la grammaire complexe et les techniques d'expression écrite et orale.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-red-600">✓ Déclinaisons et cas</div>
                  <div className="text-sm text-red-600">✓ Structures complexes</div>
                  <div className="text-sm text-red-600">✓ Essais méthodiques</div>
                </div>
                <Button variant="ghost" className="text-red-600 group-hover:bg-red-50 w-full">
                  Voir la formation →
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Formation Géopolitique */}
          <Link to="/formation/geopolitique" className="group">
            <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                    🌍 Géopolitique
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-orange-600">✓ Enjeux contemporains</div>
                  <div className="text-sm text-orange-600">✓ Méthodes d'analyse</div>
                  <div className="text-sm text-orange-600">✓ Actualité stratégique</div>
                </div>
                <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                  Voir la formation →
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Entretiens de Personnalité */}
          <Link to="/methodologie/entretiens-personnalite" className="group">
            <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-purple-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    💬 Entretiens
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Préparez-vous aux entretiens de personnalité avec méthodes éprouvées et simulations réalistes.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-purple-600">✓ Techniques de présentation</div>
                  <div className="text-sm text-purple-600">✓ Gestion du stress</div>
                  <div className="text-sm text-purple-600">✓ Simulations d'entretiens</div>
                </div>
                <Button variant="ghost" className="text-purple-600 group-hover:bg-purple-50 w-full">
                  Préparer mes entretiens →
                </Button>
              </CardContent>
            </Card>
          </Link>

          {/* Vue d'ensemble */}
          <Link to="/formation" className="group">
            <Card className="h-full bg-gradient-to-r from-primary/5 to-orange-500/5 hover:shadow-xl transition-all duration-300 border-2 border-primary/20 group-hover:border-primary/40">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    📚 Vue d'ensemble
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Découvrez toutes nos formations et choisissez le parcours qui correspond à vos besoins et objectifs.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-primary">✓ Toutes les matières</div>
                  <div className="text-sm text-primary">✓ Parcours personnalisés</div>
                  <div className="text-sm text-primary">✓ Suivi de progression</div>
                </div>
                <Button variant="ghost" className="text-primary group-hover:bg-primary/5 w-full">
                  Voir toutes les formations →
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link to="/formation">
            <Button size="lg" className="px-8 py-4 text-lg">
              <BookOpen className="h-5 w-5 mr-2" />
              Découvrir toutes nos formations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
