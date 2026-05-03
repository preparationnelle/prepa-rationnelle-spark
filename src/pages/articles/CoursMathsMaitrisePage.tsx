import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, ArrowLeft } from 'lucide-react';

const CoursMathsMaitrisePage = () => {
  return (
    <div className="min-h-screen bg-[#F9FBFF]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-sky-700">
            <Link to="/" className="flex items-center gap-1 hover:text-sky-900"><Home className="h-3 w-3" />Accueil</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-sky-500/50" />
            <Link to="/formation/maths-choix" className="hover:text-sky-900">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-sky-500/50" />
            <Link to="/formation/maths-methodologie" className="hover:text-sky-900">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-sky-500/50" />
            <span className="font-bold text-sky-900">Cours maîtrisé = notes boostées</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-sky-50 to-sky-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-sky-700" />
              </div>
              <div>
                <Badge className="bg-sky-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : Cours maths maîtrisé = notes boostées</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-400">
                <h3 className="text-xl font-bold text-sky-800 mb-3">Introduction</h3>
                <p className="text-sky-900/80">« Sans cours solide, pas de points, pas d'école ». Le cours de maths est l'ossature de vos réussites : définitions, théorèmes et démos nourrissent chaque exercice concours.</p>
              </div>

              {/* Problème */}
              <div className="bg-sky-100 p-6 rounded-lg border-l-4 border-sky-500">
                <h3 className="text-xl font-bold text-sky-900 mb-3">Le problème : bachoter sans vraie maîtrise</h3>
                <p className="text-sky-900/80">Lecture passive, copies des démos, saut direct aux exos difficiles : erreurs récurrentes et compréhension approximative qui s'ancre durablement.</p>
              </div>

              {/* Solution */}
              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-400">
                <h3 className="text-xl font-bold text-sky-800 mb-3">La solution : méthode pas‑à‑pas pour travailler le cours</h3>
                <p className="text-sky-900/80">Priorisez la compréhension active et l'entraînement progressif. Voici un plan concret.</p>
              </div>

              {/* Stratégies détaillées */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
                    <span className="bg-sky-100 text-sky-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Soyez actif en cours et prenez des notes de qualité
                  </h4>
                  <p className="text-gray-700">Posez des questions ciblées, reformulez définitions, utilisez codes couleur pour hypothèses et conclusions, reliez les notions entre chapitres.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
                    <span className="bg-sky-100 text-sky-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Relisez et comprenez le cours post‑séance
                  </h4>
                  <p className="text-gray-700">Le soir même : focalisez sur démos clés. Réécrivez-les, identifiez le rôle des hypothèses, connectez avec des exemples standards.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
                    <span className="bg-sky-100 text-sky-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Apprenez en faisant : exos d'application
                  </h4>
                  <p className="text-gray-700">Refaites les exos du cours sans correction, puis comparez. Notez explicitement les points de cours utilisés et soignez la rédaction.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
                    <span className="bg-sky-100 text-sky-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    Testez et révisez : binôme, flashcards, répétition espacée
                  </h4>
                  <p className="text-gray-700">Travaillez en binôme pour questions rapides, créez des flashcards sur les notions clés et planifiez des révisions hebdomadaires.</p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-400">
                <h3 className="text-xl font-bold text-sky-800 mb-3">Conclusion</h3>
                <p className="text-sky-900/80">Comprendre pour retenir : participation active, relecture ciblée, pratique d'application et tests réguliers transforment les lacunes en automatismes solides pour les concours BCE.</p>
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

export default CoursMathsMaitrisePage;