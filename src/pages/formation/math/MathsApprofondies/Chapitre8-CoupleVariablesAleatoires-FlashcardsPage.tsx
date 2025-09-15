import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MathFlashcards } from '@/components/MathFlashcards';
import { mathFlashcardsData } from '@/data/mathFlashcardsData';

const Chapitre8CoupleVariablesAleatoiresFlashcardsPage = () => {
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
            <Link to="/formation/maths-couple-variables-aleatoires" className="hover:text-blue-700 transition-colors">
              Chapitre 7 - Cas particulier du couple
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
              Flashcards - Cas particulier du couple
            </h1>
            <p className="text-black text-lg">
              Maîtrisez les théorèmes, définitions et formules essentielles grâce à ces flashcards interactives avec notation mathématique LaTeX.
            </p>

            {/* Navigation vers autres ressources */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/formation/maths-couple-variables-aleatoires">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-couple-variables-aleatoires-exercices">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Target className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/maths-couple-variables-aleatoires-quiz">
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
          flashcards={mathFlashcardsData.chapitre8couple}
          title="Cas particulier du couple"
          chapterNumber={8}
        />
      </div>
    </div>
  );
};

export default Chapitre8CoupleVariablesAleatoiresFlashcardsPage;
