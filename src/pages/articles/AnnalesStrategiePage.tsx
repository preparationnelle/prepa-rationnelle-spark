import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Target, ArrowLeft } from 'lucide-react';

const AnnalesStrategiePage = () => {
  return (
    <div className="min-h-screen bg-[#F8FFF9]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-green-700">
            <Link to="/" className="flex items-center gap-1 hover:text-green-900"><Home className="h-3 w-3" />Accueil</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-green-500/50" />
            <Link to="/formation/maths-choix" className="hover:text-green-900">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-green-500/50" />
            <Link to="/formation/maths-methodologie" className="hover:text-green-900">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-green-500/50" />
            <span className="font-bold text-green-900">Dompter les annales</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-green-700" />
              </div>
              <div>
                <Badge className="bg-green-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : dompter les annales — quand, pourquoi, comment (sous contrainte de temps)</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-800 mb-3">Introduction</h3>
                <p className="text-green-900/80">« Faire des annales sans chrono, c'est s'entraîner sans adversaire. » Bien utilisées, elles transforment vos acquis en points ; mal exploitées, elles épuisent pour peu de progrès.</p>
              </div>

              {/* Problème */}
              <div className="bg-green-100 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-green-900 mb-3">Le problème : annales mal utilisées, un gaspillage</h3>
                <p className="text-green-900/80">Se lancer trop tôt, sans bases ni continuité dans la difficulté, fait rater les attentes des jurys : rigueur, gestion du temps, priorisation des questions.</p>
              </div>

              {/* Solution */}
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-800 mb-3">La solution : timing, objectifs, contrainte de temps</h3>
                <p className="text-green-900/80">Intégrez les annales progressivement après cours et exercices, sous chrono réel, en notant systématiquement les erreurs dans un carnet.</p>
              </div>

              {/* Stratégies détaillées */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Quand commencer : pas trop tôt
                  </h4>
                  <p className="text-gray-700">Début de prépa : priorité aux exercices classiques. Fin de première année, démarrez par EDHEC (questions standard). En deuxième année (dès février), enchaînez EM Lyon puis parisiennes (HEC‑ESSEC).</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Pourquoi les travailler : 4 bénéfices clés
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Voir attentes exactes</h5>
                      <p className="text-gray-700 text-sm">Format, thèmes récurrents et niveau de rigueur.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Préparation mentale</h5>
                      <p className="text-gray-700 text-sm">Gérer la pression et la longueur des sujets.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Chrono réel</h5>
                      <p className="text-gray-700 text-sm">Traiter un maximum de questions sans bloquer.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Gestion d'épreuve</h5>
                      <p className="text-gray-700 text-sm">Survol, priorisation, et rédaction claire.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Comment les travailler efficacement
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Simulez les conditions réelles : calme, durée stricte, solo au début. Commencez par EDHEC, analysez les corrigés, puis augmentez la difficulté.</p>
                    <p className="text-gray-700">Survol d'épreuve 5–10 min : repérez rapides vs chronophages, priorisez. Pour une question difficile : listez « ce qu'on a » et « ce qu'on veut », rédigez proprement.</p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-green-800 mb-3">Conclusion</h3>
                <p className="text-green-900/80">Timing progressif, travail sous chrono, priorisation et carnet d'erreurs : la recette pour convertir vos acquis en points dès les prochains sujets d'annales.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-8">
        <Link to="/formation/maths-methodologie"><Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" />Retour à la méthodologie</Button></Link>
      </div>
    </div>
  );
};

export default AnnalesStrategiePage;