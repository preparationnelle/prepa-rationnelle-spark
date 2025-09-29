import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Languages, Globe, BookOpen, Home, ChevronRight, Calculator, FileText, GraduationCap } from 'lucide-react';

const FormationsOverviewPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Orange bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-orange-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-orange-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-10 w-28 h-28 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-foreground font-medium">Toutes nos formations</span>
          </div>
        </div>
      </nav>

      <div className="py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Toutes nos <span className="text-blue-600">formations</span>
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Formations conçues spécifiquement pour les étudiants en prépa ECG, avec méthodes éprouvées et accompagnement personnalisé.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Formation Maths */}
            <Link to="/formation/maths" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Calculator className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      Maths ECG
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes efficaces.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-blue-600">✓ 20 chapitres progressifs</div>
                    <div className="text-sm text-blue-600">✓ Exercices type concours</div>
                    <div className="text-sm text-blue-600">✓ Méthodes et astuces de prépa</div>
                  </div>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Découvrir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>
            {/* Formation Python */}
            <Link to="/formation" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Code className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
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
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Commencer le module →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Formation Anglais */}
            <Link to="/formation/anglais" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Languages className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      Anglais ECG
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-blue-600">✓ Grammaire systématique</div>
                    <div className="text-sm text-blue-600">✓ Thèmes et versions</div>
                    <div className="text-sm text-blue-600">✓ Essais et synthèses</div>
                  </div>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Voir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Formation Espagnol */}
            <Link to="/formation/espagnol" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Languages className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      Espagnol ECG
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Perfectionnez votre espagnol avec méthodes ciblées, grammaire avancée et préparation intensive aux concours.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-blue-600">✓ Grammaire et conjugaison</div>
                    <div className="text-sm text-blue-600">✓ Thèmes et versions</div>
                    <div className="text-sm text-blue-600">✓ Expression écrite et orale</div>
                  </div>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Voir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Formation Allemand */}
            <Link to="/formation/allemand" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Languages className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      Allemand ECG
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Maîtrisez les déclinaisons, la grammaire complexe et les techniques d'expression écrite et orale.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-blue-600">✓ Déclinaisons et cas</div>
                    <div className="text-sm text-blue-600">✓ Structures complexes</div>
                    <div className="text-sm text-blue-600">✓ Essais méthodiques</div>
                  </div>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Voir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Formation Géopolitique */}
            <Link to="/formation/geopolitique" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <Globe className="h-6 w-6 text-blue-700" />
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
                    <div className="text-sm text-blue-600">✓ Enjeux contemporains</div>
                    <div className="text-sm text-blue-600">✓ Méthodes d'analyse</div>
                    <div className="text-sm text-blue-600">✓ Actualité stratégique</div>
                  </div>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Voir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Formation ESH */}
            <Link to="/formation/esh" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <GraduationCap className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      ESH ECG
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Maîtrisez l'économie et les sciences humaines avec méthodes ciblées et études de cas pratiques.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-blue-600">✓ Première et deuxième année</div>
                    <div className="text-sm text-blue-600">✓ Méthodologie spécialisée</div>
                    <div className="text-sm text-blue-600">✓ Thèmes centraux concrets</div>
                  </div>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Voir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Formation Culture Générale */}
            <Link to="/formation/culture-generale" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <BookOpen className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      Culture générale
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Méthodes et articles pour analyser finement les sujets, de la grammaire du libellé aux références clés.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-blue-600">✓ Types de sujets et pièges</div>
                    <div className="text-sm text-blue-600">✓ Analyses conceptuelles</div>
                    <div className="text-sm text-blue-600">✓ Exemples argumentés</div>
                  </div>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Voir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Formation Synthèse de Texte */}
            <Link to="/formation/synthese-texte" className="group">
              <Card className="h-full bg-white hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <FileText className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                      Synthèse de Texte ECG
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Maîtrisez l'épreuve de synthèse de texte avec méthodes éprouvées, analyse de sujets et organisation annuelle complète.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-blue-600">✓ Méthodologie détaillée 4h</div>
                    <div className="text-sm text-blue-600">✓ Types de sujets économiques</div>
                    <div className="text-sm text-blue-600">✓ Travail annuel structuré</div>
                  </div>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full">
                    Voir la formation →
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex justify-center mt-12 pb-8">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
                <BookOpen className="h-4 w-4 mr-2" />
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