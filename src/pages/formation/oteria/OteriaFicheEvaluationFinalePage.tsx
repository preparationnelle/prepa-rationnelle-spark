import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const OteriaFicheEvaluationFinalePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              Bachelor 1
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Fiche Évaluation Finale</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Fiche Récapitulative</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Évaluation Finale - Bachelor 1 : Mathématiques et Informatique
          </p>

          {/* Informations générales */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold text-blue-900 mb-2">Format de l'évaluation</h2>
                <p className="text-blue-700">Évaluation mixte sur 2 heures</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-800 mb-2">Partie 1 : QCM</div>
                  <div className="text-sm text-gray-600">
                    Questions à choix multiples sur les concepts théoriques
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-800 mb-2">Partie 2 : Questions ouvertes</div>
                  <div className="text-sm text-gray-600">
                    Réponses développées sur les notions mathématiques et algorithmiques
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-800 mb-2">Partie 3 : Compréhension de code</div>
                  <div className="text-sm text-gray-600">
                    Analyse et explication de programmes Python fournis
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-800 mb-2">Partie 4 : Analyse de résultats</div>
                  <div className="text-sm text-gray-600">
                    Interprétation des sorties et comportements des programmes
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-800 mb-2">Partie 5 : Écriture de programme</div>
                  <div className="text-sm text-gray-600">
                    Développement de solutions algorithmiques en Python
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                  <div className="font-semibold text-blue-800 mb-2">Durée totale</div>
                  <div className="text-2xl font-bold text-blue-900">2h</div>
                  <div className="text-sm text-gray-600">Seuil de réussite : 30/50</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/evaluation-finale">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                <Target className="h-4 w-4" />
                Passer l'évaluation
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Contenu de la fiche */}
        <div className="space-y-6">
          {/* Conseils */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                Conseils pour réussir
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800">Gestion du temps :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• QCM : 25-30 min (questions rapides)</li>
                    <li>• Questions ouvertes : 25-30 min</li>
                    <li>• Compréhension code : 15-20 min</li>
                    <li>• Analyse résultats : 15-20 min</li>
                    <li>• Écriture programme : 30-35 min</li>
                    <li>• Laisser 10 min pour relecture</li>
                  </ul>

                  <h4 className="font-semibold text-blue-800">Préparation :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Réviser les concepts théoriques</li>
                    <li>• Pratiquer l'écriture de code</li>
                    <li>• Comprendre les algorithmes</li>
                    <li>• Maîtriser la syntaxe Python</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800">Conseils par partie :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• QCM : Éliminer rapidement les mauvaises réponses</li>
                    <li>• Questions ouvertes : Montrer le raisonnement</li>
                    <li>• Code : Respecter l'indentation et la syntaxe</li>
                    <li>• Analyse : Expliquer les résultats obtenus</li>
                  </ul>

                  <h4 className="font-semibold text-blue-800">Répartition estimée :</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• QCM : 30% (concepts de base)</li>
                    <li>• Questions ouvertes : 20%</li>
                    <li>• Compréhension code : 15%</li>
                    <li>• Analyse résultats : 15%</li>
                    <li>• Écriture programme : 20%</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Corrigé */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-600 flex items-center gap-2">
                Corrigé et Débriefing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Après l'évaluation :</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Corrigé détaillé</strong> : Analyse complète de toutes les parties</li>
                  <li>• <strong>Explications</strong> : Raisonnement derrière chaque réponse</li>
                  <li>• <strong>Points clés</strong> : Concepts importants à retenir</li>
                  <li>• <strong>Conseils d'amélioration</strong> : Axes de progression personnalisés</li>
                  <li>• <strong>Discussion collective</strong> : Échange sur les difficultés rencontrées</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action buttons */}
          <div className="text-center space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-medium mb-3">
                Prêt à passer l'évaluation finale ?
              </p>
              <Link to="/formation/oteria/evaluation-finale">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  <Target className="mr-2 h-5 w-5" />
                  Commencer l'évaluation (5 parties - 2h)
                </Button>
              </Link>
            </div>

            <Link to="/articles/oteria-cyber-school">
              <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
                ← Retour au programme Bachelor 1
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaFicheEvaluationFinalePage;
