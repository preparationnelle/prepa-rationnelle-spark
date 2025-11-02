import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Youtube, Target, TrendingUp, Brain, Code, Star, Users, Calendar, CheckCircle, BookOpen, Play, Home, ChevronRight } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

const PourquoiPythonPrepaECGPage = () => {
  const { trackPageVisit } = useProgress();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up, .fade-in, .scale-in');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
      // Force l'animation pour les éléments déjà visibles
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animate-in');
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

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
            <span className="text-foreground font-medium">Formation <span className="text-orange-600">Python</span> ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 shadow-lg fade-in-up">
            <Brain className="h-8 w-8 text-orange-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Pourquoi travailler Python en prépa ECG
            </h1>
          </div>
          <p className="text-xl text-orange-600 mb-6 font-medium fade-in-up" style={{ animationDelay: '0.1s' }}>
            (et pourquoi notre formation est ta meilleure option)
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Vidéo Loom - L'importance de Python aux concours */}
        <div className="max-w-4xl mx-auto mb-10 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200 shadow-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Youtube className="h-7 w-7 text-orange-600" />
              <h2 className="text-2xl font-semibold text-orange-800">
                L'importance de Python aux concours
              </h2>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                title="Importance de Python aux concours"
              />
            </div>
          </div>
        </div>

        {/* Accès direct à la formation - Plus visible */}
        <Card className="mb-10 bg-white border border-gray-100 shadow-xl fade-in-up" style={{ animationDelay: '0.3s' }}>
          <CardHeader>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-2xl">Formation <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Python</span> ECG</CardTitle>
            </div>
            <p className="text-gray-600 text-lg">
              Découvrez notre formation complète Python structurée en 4 modules progressifs avec exercices pratiques
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Module 1 */}
              <Link to="/formation/python-fondamentaux" className="group">
                <div className="h-full bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">01</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-orange-600 transition-colors">Fondamentaux</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Variables, boucles, conditions, fonctions</p>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer le module
                  </Button>
                </div>
              </Link>

              {/* Module 2 */}
              <Link to="/formation/python-matrices" className="group">
                <div className="h-full bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">02</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-orange-600 transition-colors">Matrices & Numpy</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Algèbre linéaire, résolution de systèmes</p>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer le module
                  </Button>
                </div>
              </Link>

              {/* Module 3 */}
              <Link to="/formation/python-analyse" className="group">
                <div className="h-full bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">03</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-orange-600 transition-colors">Analyse & Graphiques</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Matplotlib, tracer des fonctions, suites</p>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer le module
                  </Button>
                </div>
              </Link>

              {/* Module 4 */}
              <Link to="/formation/python-probabilites" className="group">
                <div className="h-full bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold">04</span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-orange-600 transition-colors">Probabilités</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Simulations, lois, statistiques</p>
                  <Button variant="ghost" className="text-orange-600 group-hover:bg-orange-50 w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer le module
                  </Button>
                </div>
              </Link>
            </div>

            <div className="space-y-2 mt-6 bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200 shadow-md">
              <div className="text-sm text-orange-700 font-medium">✓ 54 commandes essentielles</div>
              <div className="text-sm text-orange-700 font-medium">✓ Exercices type concours</div>
              <div className="text-sm text-orange-700 font-medium">✓ +3 à 5 points garantis</div>
            </div>

            <div className="text-center mt-8">
              <Link to="/formation">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Voir toute la formation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Témoignage en vedette (déplacé ici) */}
        <Card className="mb-8 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 shadow-lg fade-in-up" style={{ animationDelay: '0.4s' }}>
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-orange-800 mb-4 font-medium">
              « Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin
              du cours. Il m'a aidée à démystifier Python, qui était au départ un gros point faible. Grâce à lui, je
              suis plus confiante pour traiter les questions Python ! »
            </blockquote>
            <cite className="text-orange-600 font-semibold">— Léa, 2ᵉ année ECG</cite>
          </CardContent>
        </Card>

        {/* Section 1 - Le vrai poids de Python */}
        <Card className="mb-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
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
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>10 à 20 %</strong> selon les écoles (BCE, Ecricome, EDHEC, EM Lyon, HEC, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>Présence systématique à l'oral :</strong> impossible de poursuivre l'entretien HEC sans répondre correctement à la question Python</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
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
        <Card className="mb-8 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-orange-600" />
              2. Pourquoi la plupart des préparationnaires passent à côté
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Effet de mode inversé :</strong> « tout le monde dit que Python, c'est facile » → donc personne ne l'approfondit vraiment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Absence de méthodo :</strong> on survole les commandes en TP, sans vraie feuille de route</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>Abandon trop rapide :</strong> dès qu'on bloque 5 minutes, on passe à autre chose sans creuser</span>
              </li>
            </ul>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-200">
              <p className="text-orange-600">
                <strong>Résultat :</strong> l'immense majorité arrive aux concours avec une compréhension superficielle qui s'effondre dès la première difficulté.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Pourquoi notre formation fait la différence */}
        <Card className="mb-8 border border-gray-100 shadow-xl fade-in-up" style={{ animationDelay: '0.7s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-orange-600" />
              3. Pourquoi notre formation Python fait la différence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>Méthodo progressive :</strong> de zéro à l'autonomie complète en 4 modules structurés</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>Exercices calibrés :</strong> chaque exercice a été testé sur des centaines d'étudiants pour maximiser l'apprentissage</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>Suivi personnalisé :</strong> tracking de progression + feedback instantané sur tes erreurs</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Call to action final */}
        <Card className="bg-gradient-to-r from-orange-500 to-orange-50 border-orange-200 shadow-xl fade-in-up" style={{ animationDelay: '0.8s' }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-orange-800">
              Prêt à transformer ta relation avec Python ?
            </h3>
            <p className="text-orange-700 mb-6 text-lg font-medium">
              Rejoins les centaines d'étudiants qui ont déjà pris de l'avance grâce à cette formation.
            </p>
            <Link to="/formation/python-fondamentaux">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Code className="h-5 w-5 mr-2" />
                Commencer maintenant
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Styles pour les animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-in-up, .scale-in {
          opacity: 0;
        }

        .fade-in-up.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scale-in.animate-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PourquoiPythonPrepaECGPage;
