
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Brain, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MathChapterTemplateProps {
  chapterNumber: number;
  chapterTitle: string;
  description: string;
  children?: React.ReactNode;
  slug?: string; // slug pour générer les liens automatiquement
  showNavigation?: boolean; // afficher ou non la navigation vers les ressources
  duration?: string; // durée estimée du chapitre
  level?: string; // niveau de difficulté du chapitre
}

export const MathChapterTemplate: React.FC<MathChapterTemplateProps> = ({
  chapterNumber,
  chapterTitle,
  description,
  children,
  slug,
  showNavigation = false,
  duration,
  level
}) => {
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Breadcrumb moderne */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-0 py-0">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3 text-[#2D5BFF]" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths" className="hover:text-[#1e3a8a] transition-colors">
              Formation Maths ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">{chapterTitle}</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* Introduction */}
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-3xl font-bold text-[#2D5BFF]">Chapitre {chapterNumber} : {chapterTitle}</CardTitle>
            <p className="text-sm text-slate-600 mt-2 font-medium">
              {description}
            </p>
          </CardHeader>
          <CardContent className="pt-0 pb-3">
            <div className="max-w-2xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-blue-600 font-medium mb-1">Chapitre</span>
                    <span className="text-2xl font-bold text-blue-900">{chapterNumber}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                    <span className="text-2xl font-bold text-blue-900">{duration || 'N/A'}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                    <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {level || 'Non défini'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          {showNavigation && slug && (
            <CardContent className="pt-0">
              <div className="flex flex-wrap justify-center gap-3 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <Link to={`/formation/maths-${slug}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Cours
                  </Button>
                </Link>
                <Link to={`/formation/maths-${slug}-exercices`}>
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    <PenTool className="mr-2 h-4 w-4" />
                    Exercices
                  </Button>
                </Link>
                <Link to={`/formation/maths-${slug}-flashcards`}>
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    <Brain className="mr-2 h-4 w-4" />
                    Flashcards
                  </Button>
                </Link>
                <Link to={`/formation/maths-${slug}-quiz`}>
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    <Target className="mr-2 h-4 w-4" />
                    Quiz
                  </Button>
                </Link>
              </div>
            </CardContent>
          )}
        </Card>

        {children || (
          /* Default placeholder content */
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardTitle className="text-xl flex items-center gap-3">
                <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  📝
                </span>
                <span className="font-semibold">Contenu en préparation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="text-center py-12">
                <p className="text-lg text-slate-600 mb-4">
                  Le contenu de ce chapitre sera ajouté prochainement.
                </p>
                <p className="text-slate-500">
                  Les concepts et exercices seront détaillés ici.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Conclusion */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-white to-purple-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 italic font-medium">
                {children ? "Fin du chapitre" : "Contenu à compléter ultérieurement."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
