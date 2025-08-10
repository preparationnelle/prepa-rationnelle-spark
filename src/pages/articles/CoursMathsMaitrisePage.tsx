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
            <h3>Introduction</h3>
            <p>« Sans cours solide, pas de points, pas d'école ». En prépa ECG, le cours de maths est l'ossature de vos futures réussites : définitions, théorèmes et démonstrations nourrissent chaque exercice concours. Pourtant, trop d'étudiants pensent « réviser » en feuilletant leurs notes sans jamais se tester.</p>

            <h3>Le problème : bachoter le cours sans vraie maîtrise</h3>
            <p>En prépa ECG, le cours maths représente le socle : sans lui, exercices et annales BCE deviennent un calvaire. Pourtant, trop d'étudiants se contentent d'une lecture passive, copiant démos sans les saisir, ou sautant directement aux exos complexes. Résultat ? Erreurs récurrentes et compréhension approximative qui s'ancre durablement.</p>

            <h3>La solution : méthode pas-à-pas pour travailler le cours efficacement</h3>
            <p>Priorisez la compréhension active. Voici un plan concret pour maîtriser le cours maths ECG, en intégrant exercices et révisions espacées.</p>

            <h3>1. Soyez actif en cours et prenez des notes de qualité</h3>
            <p>Commencez par l'évidence : concentration maximale. Posez des questions sur les points obscurs — "Pourquoi cette hypothèse dans le TVI ?" — pour une compréhension partielle immédiate. Utilisez couleurs pour hypothèses, marges pour annotations. Reformulez les définitions en vos mots ; cela ancre dès le départ. Reliez notions : matrices à applications linéaires, pour éviter réapprentissages.</p>

            <h3>2. Relisez et comprenez le cours post-séance</h3>
            <p>Relisez attentivement le soir même : une, deux fois si besoin. Focalisez sur démos clés — pas toutes à mémoriser, mais à comprendre pour intuition. Réécrivez-les ; identifiez utilité des hypothèses. Utilisez exemples classiques. Reliez chapitres : probas à intégrales ECG. Cela passe de 10% à 50% compréhension rapidement.</p>

            <h3>3. Apprenez en faisant : refaites exos et applications</h3>
            <p>Apprenez le cours via exercices, pas isolément. Refaites exos du cours : listez idées, rédigez sans correction. Comparez : analysez pourquoi vous bloquez — point cours oublié ? Commencez par simples pour ancrer. Écrivez points cours utilisés ; vérifiez rigorisme. Prenez temps pour rédiger nouvelles notions 100% correctement.</p>

            <h3>4. Testez et révisez : binôme, flashcards et répétition espacée</h3>
            <p>Une fois les bases posées, testez-vous. En binôme : travaillez avec un ami ; posez questions : "Définition matrice inversible ?" Renforce automatismes, comble lacunes. Flashcards : sur notions clés ; révisez hebdo pour répétition espacée. Fin chapitre, fiche ciblée : définitions reformulées, théorèmes essentiels, exemples/contre-exemples.</p>

            <h3>Conclusion</h3>
            <p>Maîtriser le cours maths ECG avec participation active, relecture approfondie, pratique via exercices et tests réguliers transforme vos lacunes en automatismes solides. Boostez vos notes aux concours BCE en comprenant pour retenir, pas en bachotant mécaniquement.</p>
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