
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
  previousChapter?: { slug: string; title: string }; // chapitre précédent
  nextChapter?: { slug: string; title: string }; // chapitre suivant
  subject?: string; // matière (maths, etc.)
  activeSection?: 'course' | 'exercises' | 'flashcards' | 'quiz';
  titleClassName?: string;
}

export const MathChapterTemplate: React.FC<MathChapterTemplateProps> = ({
  chapterNumber,
  chapterTitle,
  description,
  children,
  slug,
  showNavigation = false,
  duration,
  level,
  previousChapter,
  nextChapter,
  subject = "maths",
  activeSection = 'course',
  titleClassName = "text-[#2D5BFF]"
}) => {
  return (
    <div className="min-h-screen bg-white">
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

      <div className="space-y-6 max-w-5xl mx-auto px-4 py-6">
        {/* Introduction & Navigation Compacte */}
        <Card className="border-0 shadow-sm bg-white overflow-hidden">
          <div className="p-6 pb-2">
            <CardTitle className={`text-2xl md:text-3xl font-bold ${titleClassName} mb-2`}>
              Chapitre {chapterNumber} : {chapterTitle}
            </CardTitle>
            <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          {showNavigation && slug && (
            <div className="px-6 pb-4 pt-2">
              <div className="flex flex-wrap items-center gap-1 border-t border-slate-100 pt-3">
                <Link to={`/formation/maths-${slug}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'course'
                      ? "bg-slate-100 text-slate-900 font-semibold shadow-sm ring-1 ring-slate-200"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                  >
                    <BookOpen className="mr-2 h-3.5 w-3.5" />
                    Cours
                  </Button>
                </Link>
                <Link to={`/formation/maths-${slug}-exercices`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'exercises'
                      ? "bg-slate-100 text-slate-900 font-semibold shadow-sm ring-1 ring-slate-200"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                  >
                    <PenTool className="mr-2 h-3.5 w-3.5" />
                    Exercices
                  </Button>
                </Link>
                <Link to={`/formation/maths-${slug}-flashcards`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'flashcards'
                      ? "bg-slate-100 text-slate-900 font-semibold shadow-sm ring-1 ring-slate-200"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                  >
                    <Brain className="mr-2 h-3.5 w-3.5" />
                    Flashcards
                  </Button>
                </Link>
                <Link to={`/formation/maths-${slug}-quiz`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'quiz'
                      ? "bg-slate-100 text-slate-900 font-semibold shadow-sm ring-1 ring-slate-200"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                  >
                    <Target className="mr-2 h-3.5 w-3.5" />
                    Quiz
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Card>

        {children || (
          /* Default placeholder content */
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-slate-900 text-white">
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
        <Card className="border-0 shadow-sm bg-slate-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <p className="text-slate-600 italic font-medium">
                {children ? "Fin du chapitre" : "Contenu à compléter ultérieurement."}
              </p>

              {/* Boutons de navigation entre chapitres */}
              {children && (
                <div className="flex justify-center items-center gap-4 pt-4">
                  {previousChapter ? (
                    <Link to={`/formation/${subject}-${previousChapter.slug}`}>
                      <Button variant="outline" className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 rotate-180" />
                        Chapitre précédent
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" disabled className="flex items-center gap-2 opacity-50">
                      <ChevronRight className="h-4 w-4 rotate-180" />
                      Chapitre précédent
                    </Button>
                  )}

                  <Link to={`/formation/${subject}`}>
                    <Button variant="outline" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Tous les chapitres
                    </Button>
                  </Link>

                  {nextChapter ? (
                    <Link to={`/formation/${subject}-${nextChapter.slug}`}>
                      <Button variant="outline" className="flex items-center gap-2">
                        Chapitre suivant
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" disabled className="flex items-center gap-2 opacity-50">
                      Chapitre suivant
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
