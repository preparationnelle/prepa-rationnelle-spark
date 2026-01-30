import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Languages, Globe, BookOpen, Home, ChevronRight, Calculator, FileText, GraduationCap } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const FormationsOverviewPage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <SEOHead
        title="9 Formations Prépa ECG : Maths, Python, Langues, Géopolitique"
        description="Découvrez nos 9 formations spécialisées pour prépa ECG : Maths, Python, Anglais, Espagnol, Allemand, Géopolitique, ESH, Culture Générale, Synthèse de Texte. Méthodes éprouvées et exercices type concours."
        canonical="/formations"
      />
      {/* Floating elements - Orange bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-orange-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-orange-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 top-1/2 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-1/3 left-10 w-28 h-28 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
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
              Nos 9 <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">formations</span>
            </h1>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
              Formations conçues spécifiquement pour les étudiants en prépa ECG, avec méthodes éprouvées et accompagnement personnalisé.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Formation Maths */}
              <Link to="/formation/maths" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <Calculator className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        Maths ECG
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Maîtrisez tout le programme de maths ECG : logique, analyse, probabilités, algèbre, exercices corrigés et méthodes efficaces.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>20 chapitres progressifs</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Exercices type concours</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Méthodes et astuces de prépa</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Découvrir la formation →
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Formation Python */}
              <Link to="/formation" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-orange-300 hover:border-orange-400 rounded-2xl overflow-hidden bg-gradient-to-br from-white to-orange-50/30">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <Code className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        Python ECG
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>54 commandes essentielles</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Exercices type concours</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>+3 à 5 points garantis</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Commencer le module →
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Formation Anglais */}
              <Link to="/formation/anglais" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <Languages className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        Anglais ECG
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Perfectionnez votre anglais avec méthodes ciblées, grammaire avancée et préparation aux épreuves.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Grammaire systématique</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Thèmes et versions</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Essais et synthèses</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Voir la formation →
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Formation Culture Générale */}
              <Link to="/formation/culture-generale" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <BookOpen className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        Culture Générale
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Développez votre culture générale avec méthodes et outils pour réussir les épreuves de synthèse et d'essai.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Méthodes de synthèse</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Analyse de textes</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Épreuves d'essai</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Voir la formation →
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Formation Géopolitique */}
              <Link to="/formation/geopolitique" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <Globe className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        Géopolitique
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Analysez les enjeux mondiaux contemporains avec méthodes et outils pour briller aux concours.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Enjeux contemporains</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Méthodes d'analyse</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Actualité stratégique</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Voir la formation →
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Formation ESH */}
              <Link to="/formation/esh" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <GraduationCap className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        ESH ECG
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Maîtrisez l'économie et les sciences humaines avec méthodes ciblées et études de cas pratiques.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Première et deuxième année</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Méthodologie spécialisée</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Études de cas concrètes</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Voir la formation →
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Formation Espagnol */}
              <Link to="/formation/espagnol" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <Languages className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        Espagnol ECG
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Perfectionnez votre espagnol avec méthodes ciblées, grammaire avancée et préparation intensive aux concours.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Grammaire et conjugaison</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Thèmes et versions</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Expression écrite et orale</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Voir la formation →
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Formation Allemand */}
              <Link to="/formation/allemand" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <Languages className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        Allemand ECG
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Maîtrisez les déclinaisons, la grammaire complexe et les techniques d'expression écrite et orale.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Déclinaisons et cas</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Structures complexes</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Essais méthodiques</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Voir la formation →
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              {/* Formation Synthèse de Texte */}
              <Link to="/formation/synthese-texte" className="group">
                <Card className="h-full bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col items-center text-center mb-2">
                      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors duration-300">
                        <FileText className="h-8 w-8 text-orange-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">
                        Synthèse de Texte ECG
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed text-center">
                      Maîtrisez l'épreuve de synthèse de texte avec méthodes éprouvées, analyse de sujets et organisation annuelle complète.
                    </p>
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Méthodologie détaillée 4h</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Types de sujets économiques</span>
                      </div>
                      <div className="text-sm text-orange-600 font-medium flex items-start">
                        <span className="mr-2">✓</span>
                        <span>Travail annuel structuré</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-orange-600 hover:bg-orange-50 w-full font-semibold">
                      Voir la formation →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="flex justify-center mt-12 pb-8">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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