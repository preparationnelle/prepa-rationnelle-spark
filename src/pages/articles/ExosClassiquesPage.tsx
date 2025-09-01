import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';

const ExosClassiquesPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFBF8]">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-amber-700">
            <Link to="/" className="flex items-center gap-1 hover:text-amber-900"><Home className="h-3 w-3" />Accueil</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-amber-500/50" />
            <Link to="/formation/maths-choix" className="hover:text-amber-900">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-amber-500/50" />
            <Link to="/formation/maths-methodologie" className="hover:text-amber-900">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-amber-500/50" />
            <span className="font-bold text-amber-900">Exos classiques</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <Badge className="bg-amber-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : domptez les exos classiques — doublez votre progression</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Introduction</h3>
                <p className="text-amber-900/80">Vous tournez en rond sur les annales ? Le déclic se joue avant. Les exercices classiques forgent réflexes, rigueur et créativité — travaillés en boucle intelligente, ils deviennent des points sûrs au concours BCE.</p>
              </div>

              {/* Problème */}
              <div className="bg-amber-100 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Le problème : classiques négligés</h3>
                <p className="text-amber-900/80">Bouder les basiques pour des annales "prestigieuses" crée des fondations fragiles. Les calculatoires paraissent barbants et provoquent des erreurs sous pression.</p>
              </div>

              {/* Solution */}
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-amber-800 mb-3">La solution : boucle d'exercices classiques</h3>
                <p className="text-amber-900/80">Exercices classiques d'abord, répétitions ensuite. La qualité prime pour développer créativité et rigueur.</p>
              </div>

              {/* Stratégies détaillées */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Priorisez les classiques pour ancrer le cours
                  </h4>
                  <p className="text-gray-700">Commencez par des exos simples du chapitre. Relisez le cours, notez théorèmes et hypothèses, rédigez une étape par ligne pour automatiser.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Implémentez la boucle des exos
                  </h4>
                  <p className="text-gray-700">1) Recherche solo. 2) Analyse d'erreurs et fiche méthodes. 3) Refaire sous chrono. Pratique régulière sur calculatoires pour gagner vitesse et réduire fautes.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Travaillez en groupe intelligemment
                  </h4>
                  <p className="text-gray-700">Solo d'abord, puis comparaison des méthodes et de la rédaction. Intégrez des annales en groupe à l'approche BCE, mais finalisez seul pour l'autonomie.</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    Évitez les pièges
                  </h4>
                  <p className="text-gray-700">Qualité plutôt que quantité, annales au bon moment. Revenez au cours après chaque exercice pour mémoriser et réfléchir plus juste.</p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-amber-800 mb-3">Conclusion</h3>
                <p className="text-amber-900/80">Bases solides via classiques, boucle répétitive pour automatismes, groupe pour feedback — la qualité l'emporte. Les points BCE suivent.</p>
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

export default ExosClassiquesPage;