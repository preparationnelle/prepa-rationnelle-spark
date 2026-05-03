import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, ArrowLeft, CheckCircle2 } from 'lucide-react';

const CollesDsPage = () => {
  return (
    <div className="min-h-screen bg-[#F7FFF8]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-emerald-700">
            <Link to="/" className="flex items-center gap-1 hover:text-emerald-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-emerald-600/50 mx-1" />
            <Link to="/formations" className="hover:text-emerald-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-emerald-600/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-emerald-900 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-emerald-600/50 mx-1" />
            <Link to="/formation/maths-methodologie" className="hover:text-emerald-900 transition-colors">
              Méthodologie
            </Link>
            <ChevronRight className="h-3 w-3 text-emerald-600/50 mx-1" />
            <span className="text-emerald-800 font-bold">Prépa ECG : colles & DS – le combo gagnant</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Article */}
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <Badge className="bg-emerald-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold text-gray-800">
                  Prépa ECG : colles & DS – le combo gagnant pour briller à l’écrit et à l’oral
                </CardTitle>
                <p className="text-lg text-gray-600 mt-2">
                  Organiser ses révisions, maximiser le feedback et transformer chaque évaluation en levier de progression.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-gray-700">
                  Vous redoutez la colle du mardi ? Vous bâclez vos DS le samedi faute de temps ? En prépa ECG, ces deux rituels font
                  la pluie et le beau temps de vos notes : la colle, miroir instantané de votre maîtrise ; le DS, répétition générale des concours BCE.
                  Utilisés correctement, ils deviennent un tremplin vers HEC, l’ESSEC ou l’ESCP.
                </p>
              </div>

              {/* 1. Rôle des colles et DS */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Comprenez le rôle des colles et DS</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Colles</strong> : feedback immédiat, vérification de la maîtrise du cours et de l’expression orale.</li>
                  <li><strong>DS</strong> : gestion du temps sous pression, simulation fidèle des écrits BCE.</li>
                  <li><strong>Pourquoi c’est puissant</strong> : assimilation continue et correction rapide des lacunes → progression visible.</li>
                </ul>
              </section>

              {/* 2. Organisation */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Organisez-vous avec anticipation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-emerald-700 mb-2">Planifiez comme un pro</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Consultez le programme de colle hebdomadaire.</li>
                      <li>Si la colle est vendredi, commencez lundi.</li>
                      <li>Découpez : lundi cours, mardi-mercredi exercices classiques.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-emerald-700 mb-2">Règles d’or</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Évitez la veille : 1 h/jour par matière vaut mieux qu’un sprint stressant.</li>
                      <li>Alternez théorie (colles) et pratique (DS).</li>
                      <li>Bloquez des créneaux fixes dans votre agenda.</li>
                    </ul>
                  </div>
                </div>
                {/* Intentionnellement aucun CTA: article prêt à lire */}
              </section>

              {/* 3. Colles (oraux) */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Tirez le meilleur des colles (oraux)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Maîtrisez le cours</strong> : questions de définitions, théorèmes et propriétés de base puis approfondies.</li>
                  <li><strong>Exercices classiques</strong> en priorité : ce sont les piliers des interrogations.</li>
                  <li><strong>À l’oral</strong> : une idée par phrase, expliquez clairement ; avouez un blocage plutôt que d’improviser.</li>
                  <li><strong>Exploitez le feedback</strong> : notez les erreurs immédiatement et corrigez-les sous 24 h.</li>
                  <li><strong>Demandez des retours personnalisés</strong> au colleur en fin de séance.</li>
                </ul>
                <div className="mt-4 flex items-start gap-3 text-emerald-800">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  <p>Les colles simulent les oraux ECG : pratiquez pour dominer le « boss final ».</p>
                </div>
              </section>

              {/* 4. DS (écrits) */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Domptez les DS (écrits)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Simulez les conditions</strong> : temps strict, environnement calme ; si une question résiste 4–5 min, passez.</li>
                  <li><strong>Analysez vos copies</strong> et fichez les erreurs récurrentes.</li>
                  <li><strong>Présentation percutante</strong> : titres clairs, résultats encadrés, copie linéaire.</li>
                  <li><strong>Questions approfondies</strong> : entraînez-vous sur des sujets variés pour ne pas être surpris.</li>
                </ul>
              </section>

              {/* 5. Mentalité */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Mentalité gagnante sur l’année</h3>
                <p className="text-gray-700">
                  Traitez chaque session comme une itération : lancer (réviser), mesurer (feedback), apprendre (corriger), pivoter.
                  Cette boucle prépare aux oraux et aux écrits sans burnout.
                </p>
                <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-800">
                  À venir : vidéos courtes sur l’organisation en prépa et une formation poussée sur les oraux ECG.
                </div>
              </section>

              {/* Conclusion */}
              <section className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
                <h3 className="text-xl font-bold text-emerald-900 mb-2">Conclusion</h3>
                <p className="text-emerald-800">
                  En résumé, l’anticipation, l’exploitation des retours et un mental de joueur transforment colles et DS en levier de
                  progression. Appliquez ces stratégies dès cette semaine pour une amélioration visible.
                </p>
              </section>
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

export default CollesDsPage;

