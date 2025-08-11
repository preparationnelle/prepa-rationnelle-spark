import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, ArrowLeft } from 'lucide-react';

const ParticipationActivePage = () => {
  return (
    <div className="min-h-screen bg-[#FFF9FD]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-pink-700">
            <Link to="/" className="flex items-center gap-1 hover:text-pink-900"><Home className="h-3 w-3" />Accueil</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-pink-500/50" />
            <Link to="/formation/maths-choix" className="hover:text-pink-900">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-pink-500/50" />
            <Link to="/formation/maths-methodologie" className="hover:text-pink-900">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-pink-500/50" />
            <span className="font-bold text-pink-900">Participation active</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-pink-700" />
              </div>
              <div>
                <Badge className="bg-pink-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : dominer le cours — participation active, notes qui grimpent</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-xl font-bold text-pink-800 mb-3">Introduction</h3>
                <p className="text-pink-900/80">
                  Imaginez-vous en cours de maths ECG : le prof démontre un théorème complexe, et vous notez frénétiquement sans vraiment capter. À la sortie, vous avez un script parfait, mais zéro compréhension — un piège courant qui mène à des révisions interminables et des notes moyennes.
                </p>
              </div>

              {/* Problème */}
              <div className="bg-pink-100 p-6 rounded-lg border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-900 mb-3">Le problème : passivité en cours, le frein majeur</h3>
                <p className="text-pink-900/80 mb-2">
                  Les cours filent vite : démonstrations en chaîne, exercices basiques zappés, et vous voilà à scripter sans pause. Résultat ? Démonstrations mal comprises, blocages récurrents, et temps perdu sur des exos trop durs.
                </p>
                <p className="text-pink-900/80">
                  Pire, ne pas oser poser de questions entretient ces lacunes et empêche de progresser au rythme attendu en prépa ECG.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-xl font-bold text-pink-800 mb-3">La solution : participation active et organisation</h3>
                <p className="text-pink-900/80">
                  Pas une question de génie, mais de méthode. Arrivez préparé, participez pendant le cours, puis consolidez immédiatement après pour transformer la passivité en maîtrise.
                </p>
              </div>

              {/* Stratégies détaillées */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-pink-900 mb-3 flex items-center gap-2">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Préparez-vous avant le cours pour gagner du temps
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Identifiez 2–3 questions sur les bases ou exos simples en relisant le chapitre précédent. 20–30 minutes suffisent pour libérer du temps en cours sur les démos complexes.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-pink-900 mb-3 flex items-center gap-2">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Soyez actif pendant le cours : posez et participez
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Ne scriptez pas tout : engagez-vous. Posez vos questions, reformulez une idée, notez les liens entre résultats. Vous pouvez passer de 10% à 50% de maîtrise en une heure.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-pink-900 mb-3 flex items-center gap-2">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Organisez le post-cours pour consolider
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Fixez 45 minutes pour revoir vos notes, corriger les blocages et tester un exercice simple. Notez les erreurs dans un carnet et reliez-les aux démos vues en cours.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-pink-900 mb-3 flex items-center gap-2">
                    <span className="bg-pink-100 text-pink-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    Surmontez les barrières mentales
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Poser des questions est professionnel. Organisez votre temps pour les poser au bon moment. Si les exos paraissent inadaptés, revenez aux bases travaillées activement en cours.</p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-xl font-bold text-pink-800 mb-3">Conclusion</h3>
                <p className="text-pink-900/80">
                  Participation active = maîtrise réelle : préparez les blocages, posez vos questions, consolidez immédiatement. Avec cette méthode, viser 15 en DS et 18+ aux concours BCE devient réaliste.
                </p>
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

export default ParticipationActivePage;