import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Youtube, Target, TrendingUp, Brain, Code, Star, Users, Calendar, CheckCircle, BookOpen, Play, Home, ChevronRight } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

const PourquoiPythonPrepaECGPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
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
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#FF6B00] to-[#FF7A1C] bg-clip-text text-transparent">
            Pourquoi travailler Python en prépa ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            (et pourquoi mon coaching est ta meilleure option)
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Vidéo Loom - L'importance de Python aux concours */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-[#FF6B00]" />
              L'importance de Python aux concours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb"
                frameBorder="0"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Accès direct à la formation - Plus visible */}
        <Card className="mb-10 bg-white">
          <CardHeader>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Formation Python ECG</CardTitle>
            </div>
            <p className="text-gray-600 text-lg">
              Découvrez notre formation complète Python structurée en 4 modules progressifs avec exercices pratiques
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Module 1 */}
              <Link to="/formation/python-fondamentaux" className="group">
                <div className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">01</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">Fondamentaux</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Variables, boucles, conditions, fonctions</p>
                  <Button variant="ghost" className="text-blue-600 group-hover:bg-blue-50 w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer le module
                  </Button>
                </div>
              </Link>

              {/* Module 2 */}
              <Link to="/formation/python-matrices" className="group">
                <div className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">02</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">Matrices & Numpy</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Algèbre linéaire, résolution de systèmes</p>
                  <Button variant="ghost" className="text-blue-600 group-hover:bg-blue-50 w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer le module
                  </Button>
                </div>
              </Link>

              {/* Module 3 */}
              <Link to="/formation/python-analyse" className="group">
                <div className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">03</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">Analyse & Graphiques</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Matplotlib, tracer des fonctions, suites</p>
                  <Button variant="ghost" className="text-blue-600 group-hover:bg-blue-50 w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer le module
                  </Button>
                </div>
              </Link>

              {/* Module 4 */}
              <Link to="/formation/python-probabilites" className="group">
                <div className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">04</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">Probabilités</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Simulations, lois, statistiques</p>
                  <Button variant="ghost" className="text-blue-600 group-hover:bg-blue-50 w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer le module
                  </Button>
                </div>
              </Link>
            </div>

            <div className="space-y-2 mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="text-sm text-blue-600">✓ 54 commandes essentielles</div>
              <div className="text-sm text-blue-600">✓ Exercices type concours</div>
              <div className="text-sm text-blue-600">✓ +3 à 5 points garantis</div>
            </div>

            <div className="text-center mt-8">
              <Link to="/formation">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Voir toute la formation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Témoignage en vedette (déplacé ici) */}
        <Card className="mb-8 bg-blue-50 border-l-4 border-blue-400">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-blue-800 mb-4">
              « Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin 
              du cours. Il m'a aidée à démystifier Python, qui était au départ un gros point faible. Grâce à lui, je 
              suis plus confiante pour traiter les questions Python ! »
            </blockquote>
            <cite className="text-blue-600 font-semibold">— Léa, 2ᵉ année ECG</cite>
          </CardContent>
        </Card>

        {/* Section 1 - Le vrai poids de Python */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-6 w-6 text-orange-600" />
              1. Le vrai poids de Python aux concours : un gisement de points sous-estimé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Depuis la réforme, Python remplace Scilab dans les épreuves de mathématiques appliquées comme approfondies. Résultat :</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>10 à 20 %</strong> selon les écoles (BCE, Ecricome, EDHEC, EM Lyon, HEC, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Présence systématique à l'oral :</strong> impossible de poursuivre l'entretien HEC sans répondre correctement à la question Python</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Questions souvent "cadeaux" :</strong> analyser un script, compléter une fonction, traduire une somme ou un raisonnement en code</span>
              </li>
            </ul>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-orange-800">
                <strong>Moralité :</strong> même si tu n'es « pas fan d'info », ignorer Python revient à laisser jusqu'à 5 points sur la table. 
                Dans une filière où chaque demi-point se paie d'heures de calcul intégral, c\'est un luxe que tu ne peux pas te permettre.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Pourquoi la plupart passent à côté */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-red-600" />
              2. Pourquoi la plupart des préparationnaires passent à côté
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Effet de mode inversé :</strong> « tout le monde dit que Python, c'est facile » → donc personne ne l'approfondit vraiment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Absence de méthodo :</strong> on survole les commandes en TP, sans vraie feuille de route</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Abandon trop rapide :</strong> dès qu'on bloque 5 minutes, on passe à autre chose sans creuser</span>
              </li>
            </ul>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-red-800">
                <strong>Résultat :</strong> l'immense majorité arrive aux concours avec une compréhension superficielle qui s'effondre dès la première difficulté.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Pourquoi mon coaching fait la différence */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-green-600" />
              3. Pourquoi mon coaching Python fait la différence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Méthodo progressive :</strong> de zéro à l'autonomie complète en 4 modules structurés</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Exercices calibrés :</strong> chaque exercice a été testé sur des centaines d'étudiants pour maximiser l'apprentissage</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Suivi personnalisé :</strong> tracking de progression + feedback instantané sur tes erreurs</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Call to action final */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-800">
              Prêt à transformer ta relation avec Python ?
            </h3>
            <p className="text-green-700 mb-6 text-lg">
              Rejoins les centaines d'étudiants qui ont déjà pris de l'avance grâce à cette formation.
            </p>
            <Link to="/formation/python-fondamentaux">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                <Code className="h-5 w-5 mr-2" />
                Commencer maintenant
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PourquoiPythonPrepaECGPage;
