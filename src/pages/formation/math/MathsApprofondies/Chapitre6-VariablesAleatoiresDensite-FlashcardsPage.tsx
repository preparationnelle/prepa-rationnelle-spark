import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MathFlashcards } from '@/components/MathFlashcards';
import { variablesAleatoiresDensiteFlashcards } from '@/data/mathFlashcardsData';

const Chapitre6VariablesAleatoiresDensiteFlashcardsPage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formations" className="hover:text-blue-700 transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formation/maths-deuxieme-approfondies" className="hover:text-blue-700 transition-colors">
              Maths Approfondies 2e année
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formation/maths-variables-aleatoires-densite" className="hover:text-blue-700 transition-colors">
              Chapitre 6 - Variables aléatoires à densité
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-800 font-medium">Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-white mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 flex items-center gap-3">
              <Brain className="h-8 w-8" />
              Flashcards - Variables aléatoires à densité
            </h1>
            <p className="text-black text-lg mb-6">
              Maîtrisez les théorèmes, définitions et formules essentielles grâce à ces flashcards interactives avec notation mathématique LaTeX.
            </p>
            
            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{variablesAleatoiresDensiteFlashcards.length}</div>
                <div className="text-sm text-black">Flashcards total</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <div className="text-sm text-black">Catégories</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-black">Niveaux de difficulté</div>
              </div>
            </div>

            {/* Navigation vers autres ressources */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/formation/maths-variables-aleatoires-densite">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-variables-aleatoires-densite-exercices">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Target className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/maths-variables-aleatoires-densite-quiz">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Brain className="mr-2 h-4 w-4" />
                  Quiz
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Composant Flashcards */}
        <MathFlashcards 
          flashcards={variablesAleatoiresDensiteFlashcards}
          title="Variables aléatoires à densité & lois usuelles"
          chapterNumber={6}
        />

        {/* Instructions */}
        <Card className="border-0 shadow-lg bg-white mt-8">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-black mb-4">💡 Comment utiliser les flashcards ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <div>
                <h4 className="font-semibold mb-2">Navigation</h4>
                <ul className="text-sm space-y-1">
                  <li>• Utilisez les flèches ← → pour naviguer</li>
                  <li>• Cliquez sur "Révéler" pour voir la réponse</li>
                  <li>• Marquez les cartes difficiles avec ⭐</li>
                  <li>• Filtrez par catégorie ou difficulté</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Stratégie d'apprentissage</h4>
                <ul className="text-sm space-y-1">
                  <li>• Lisez d'abord la question/énoncé</li>
                  <li>• Essayez de formuler la réponse mentalement</li>
                  <li>• Révélez pour vérifier vos connaissances</li>
                  <li>• Répétez les cartes marquées pour révision</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre6VariablesAleatoiresDensiteFlashcardsPage;
