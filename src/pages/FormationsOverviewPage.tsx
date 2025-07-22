import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Languages, Globe, Users, BookOpen, Home, ChevronRight, Calculator } from 'lucide-react';

const FormationsOverviewPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Toutes nos formations</span>
          </div>
        </div>
      </nav>

      <div className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Toutes nos <span className="gradient-text">formations</span>
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Formations conçues spécifiquement pour les étudiants en prépa ECG, avec méthodes éprouvées et accompagnement personnalisé.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Formation Python */}
            <Link to="/formation" className="group">
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      Python ECG
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
                    Commencer le module →
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
                      Anglais ECG
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
                      Allemand ECG
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
                      Géopolitique
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
                      Entretiens
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

            {/* Formation Maths */}
            <Link to="/formation/maths" className="group">
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-yellow-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Calculator className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-yellow-600 transition-colors">
                      Maths ECG
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes efficaces.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-yellow-600">✓ 20 chapitres progressifs</div>
                    <div className="text-sm text-yellow-600">✓ Exercices type concours</div>
                    <div className="text-sm text-yellow-600">✓ Méthodes et astuces de prépa</div>
                  </div>
                  <Button variant="ghost" className="text-yellow-600 group-hover:bg-yellow-50 w-full">
                    Découvrir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="px-8 py-4 text-lg">
                <BookOpen className="h-5 w-5 mr-2" />
                Nous contacter pour plus d'informations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FormationsOverviewPage;