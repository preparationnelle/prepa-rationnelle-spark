import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Target, ArrowLeft, BookOpen } from 'lucide-react';

const AttentesConcoursPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formation/maths-choix" className="hover:text-foreground transition-colors">
              Choix option Maths
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formation/maths-methodologie" className="hover:text-foreground transition-colors">
              Méthodologie
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-foreground font-medium">Les attentes du concours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Article */}
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-white border-b border-blue-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <Badge className="bg-blue-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold text-gray-800">
                  Prépa ECG : Les secrets des Jurys Révélés – Décoder les attentes des concours
                </CardTitle>
                <p className="text-lg text-gray-600 mt-2">
                  Stratégies pour aligner votre préparation sur les attentes réelles du concours
                </p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-6">
              {/* Introduction */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Introduction</h3>
                <p className="text-blue-700 italic mb-4">
                  « Pourquoi foncer si l'on ignore la ligne d'arrivée ?»
                </p>
                <p className="text-gray-700">
                  Chaque année, des milliers d'étudiants de prépa ECG se jettent à corps perdu dans leurs polys, rêvant d'une copie parfaite en maths. Pourtant, le jour J, malgré des heures de travail, le résultat est souvent frustrant. Pourquoi ? Parce que beaucoup passent à côté de l'essentiel : comprendre ce que veulent vraiment les jurys.
                </p>
                <p className="text-gray-700 mt-4">
                  Les rapports BCE 2024 sont clairs : confusion entre diagonalisabilité et inversibilité (emlyon), mauvaises définitions en probabilités (HEC/ESSEC), rédactions brouillonnes (EDHEC)... même les bons étudiants tombent dans des pièges évitables. Ce n'est pas une problème de niveau ou d'intelligence, mais question de stratégie.
                </p>
                <p className="text-gray-700 mt-4 font-semibold">
                  Cet article vous donne les clés pour aligner votre préparation sur les attentes réelles du concours, sans travailler plus, mais en travaillant mieux.
                </p>
              </div>

              {/* Cinq Intentions Clés */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Cinq Intentions Clés pour Réussir</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
                    <h4 className="text-lg font-bold text-blue-600 mb-3">1. Comprendre les Attentes des Concours</h4>
                    <p className="text-gray-700 mb-3">
                      Vous n'avez pas besoin de tout traiter pour avoir 15 ou 20. En 2024, 40% du sujet HEC/ESSEC suffisaient pour 20/20. Ciblez intelligemment : Quelles questions sont les plus rentables ?
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-800 font-semibold">Action :</p>
                      <p className="text-blue-700">Lisez les rapports (disponibles sur concours-bce.com) et repérez 3 exigences récurrentes par école.</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
                    <h4 className="text-lg font-bold text-blue-600 mb-3">2. Présentez une Copie Impeccable</h4>
                    <p className="text-gray-700 mb-3">
                      Votre copie doit être claire dès le premier coup d'œil : en‑tête soigné, encre foncée, marges aérées. Organisez chaque solution en blocs distincts : énoncé, démarche, résultat. Laissez de l'espace pour respirer ; un correcteur qui n'a pas à plisser les yeux est déjà mieux disposé.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
                    <h4 className="text-lg font-bold text-blue-600 mb-3">3. Valorisez vos Résultats</h4>
                    <p className="text-gray-700 mb-3">
                      Encadrez chaque conclusion importante, soulignez ou surlignez le nombre clef, bannissez les ratures. Avant de rendre, consacrez trois minutes à une relecture de fond : orthographe des symboles, cohérence des notations, unité des variables.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
                    <h4 className="text-lg font-bold text-blue-600 mb-3">4. Rigueur Mathématique et Honnêteté</h4>
                    <p className="text-gray-700 mb-3">
                      Annoncez toujours le théorème que vous appliquez, vérifiez ses hypothèses et justifiez chaque transition. Si vous bloquez, laissez la question de côté au lieu d'inventer ; un raisonnement partiel mais correct vaut mieux qu'un baratin. Les jurys le répètent dans leurs rapports : la méthode compte au moins autant que le résultat.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg border border-blue-100 shadow-sm">
                    <h4 className="text-lg font-bold text-blue-600 mb-3">5. Gérer son Temps comme un Stratège</h4>
                    <p className="text-gray-700 mb-3">
                      Ne passez pas 10 minutes sur une question bloquante. Identifiez les questions indépendantes. Passez rapidement à ce qui peut rapporter. Objectif : points faciles d'abord.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ce qu'il faut retenir */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-4">Ce qu'il faut retenir :</h3>
                <ul className="space-y-2 text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Rigueur du raisonnement</strong> : annoncez clairement les théorèmes utilisés, vérifiez les hypothèses, justifiez chaque étape, ne bluffez pas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Gestion du temps</strong> : commencez par les questions les plus accessibles, ne vous bloquez pas plus de 4-5 minutes sur une difficulté, lisez d'abord tout le sujet.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Propreté et lisibilité de la copie</strong> : structure claire, résultats encadrés, pas de rature, relecture systématique à la fin (« copie propre » = 3 minutes de vérification).</span>
                  </li>
                </ul>
                <p className="text-blue-700 mt-4 font-semibold">
                  Appliquez cette stratégie dès votre prochain devoir surveillé ou en travaillant une annale. Les bonnes habitudes se prennent maintenant, pas le jour du concours.
                </p>
              </div>

              {/* Conclusion */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Conclusion</h3>
                <p className="text-blue-700">
                  Réussir les maths BCE ne dépend pas que de votre niveau, mais de votre manière de préparer et de composer. Les jurys cherchent des copies lisibles, rigoureuses, et stratégiques.
                </p>
                <p className="text-blue-700 mt-4 font-semibold">
                  En appliquant ces intentions, vous ferez la différence.
                </p>
                <p className="text-blue-700 mt-4 font-bold text-lg">
                  Travaillez mieux, pas nécessairement plus. À vous de jouer.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Bouton retour */}
      <div className="text-center py-8">
        <Link to="/formation/maths-methodologie">
          <Button variant="outline" className="flex items-center gap-2 mx-auto">
            <ArrowLeft className="h-4 w-4" />
            Retour à la méthodologie
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AttentesConcoursPage; 