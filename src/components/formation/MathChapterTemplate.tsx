
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
  slug?: string;
  showNavigation?: boolean;
  duration?: string;
  level?: string;
  previousChapter?: { slug: string; title: string };
  nextChapter?: { slug: string; title: string };
  subject?: string;
  activeSection?: 'course' | 'exercises' | 'flashcards' | 'quiz';
  titleClassName?: string;
  coursePath?: string;
  exercisesPath?: string;
  flashcardsPath?: string;
  quizPath?: string;
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
  titleClassName = "text-carnet-red",
  coursePath,
  exercisesPath,
  flashcardsPath,
  quizPath
}) => {
  return (
    <div className="min-h-screen carnet-paper carnet-cours-skin">
      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-carnet-paper/95 backdrop-blur supports-[backdrop-filter]:bg-carnet-paper/90 border-b border-carnet-rule/60">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-carnet-ink-soft">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-ink transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-rule mx-1" />
            <Link to="/formations" className="hover:text-carnet-ink transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-rule mx-1" />
            <Link to="/formation/maths" className="hover:text-carnet-ink transition-colors">
              Formation Maths ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-rule mx-1" />
            <span className="text-carnet-ink font-semibold">{chapterTitle}</span>
          </div>
        </div>
      </nav>

      <div className="space-y-6 max-w-5xl mx-auto px-4 py-6">
        {/* Introduction & Navigation Compacte */}
        <Card className="border border-carnet-rule/60 shadow-none bg-carnet-paper-2 overflow-hidden">
          <div className="p-6 pb-2">
            <CardTitle className={`text-2xl md:text-3xl font-bold ${titleClassName} mb-2`}>
              Chapitre {chapterNumber} : {chapterTitle}
            </CardTitle>
            <p className="text-sm text-carnet-ink-soft font-medium leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          {showNavigation && slug && (
            <div className="px-6 pb-4 pt-2">
              <div className="flex flex-wrap items-center gap-1 border-t border-carnet-rule/40 pt-3">
                <Link to={coursePath || `/formation/maths-${slug}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'course'
                      ? "bg-carnet-red text-carnet-paper font-semibold shadow-none"
                      : "text-carnet-ink-soft hover:text-carnet-ink hover:bg-carnet-paper"
                      }`}
                  >
                    <BookOpen className="mr-2 h-3.5 w-3.5" />
                    Cours
                  </Button>
                </Link>
                <Link to={exercisesPath || `/formation/maths-${slug}-exercices`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'exercises'
                      ? "bg-carnet-red text-carnet-paper font-semibold shadow-none"
                      : "text-carnet-ink-soft hover:text-carnet-ink hover:bg-carnet-paper"
                      }`}
                  >
                    <PenTool className="mr-2 h-3.5 w-3.5" />
                    Exercices
                  </Button>
                </Link>
                <Link to={flashcardsPath || `/formation/maths-${slug}-flashcards`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'flashcards'
                      ? "bg-carnet-red text-carnet-paper font-semibold shadow-none"
                      : "text-carnet-ink-soft hover:text-carnet-ink hover:bg-carnet-paper"
                      }`}
                  >
                    <Brain className="mr-2 h-3.5 w-3.5" />
                    Flashcards
                  </Button>
                </Link>
                <Link to={quizPath || `/formation/maths-${slug}-quiz`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'quiz'
                      ? "bg-carnet-red text-carnet-paper font-semibold shadow-none"
                      : "text-carnet-ink-soft hover:text-carnet-ink hover:bg-carnet-paper"
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
          <Card className="border border-carnet-rule/60 shadow-none">
            <CardHeader className="bg-carnet-red text-carnet-paper rounded-t-lg">
              <CardTitle className="text-xl flex items-center gap-3">
                <span className="bg-carnet-paper/20 text-carnet-paper w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                  📝
                </span>
                <span className="font-semibold">Contenu en préparation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="text-center py-12">
                <p className="text-lg text-carnet-ink-soft mb-4">
                  Le contenu de ce chapitre sera ajouté prochainement.
                </p>
                <p className="text-carnet-ink-mute">
                  Les concepts et exercices seront détaillés ici.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Conclusion */}
        <Card className="border border-carnet-rule/60 shadow-none bg-carnet-paper-2">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <p className="text-carnet-ink-soft italic font-medium">
                {children ? "Fin du chapitre" : "Contenu à compléter ultérieurement."}
              </p>

              {children && (
                <div className="flex justify-center items-center gap-4 pt-4">
                  {previousChapter ? (
                    <Link to={`/formation/${subject}-${previousChapter.slug}`}>
                      <Button variant="outline" className="flex items-center gap-2 border-carnet-rule text-carnet-ink hover:border-carnet-red hover:text-carnet-red">
                        <ChevronRight className="h-4 w-4 rotate-180" />
                        Chapitre précédent
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" disabled className="flex items-center gap-2 opacity-40 border-carnet-rule">
                      <ChevronRight className="h-4 w-4 rotate-180" />
                      Chapitre précédent
                    </Button>
                  )}

                  <Link to={`/formation/${subject}`}>
                    <Button variant="outline" className="flex items-center gap-2 border-carnet-rule text-carnet-ink hover:border-carnet-red hover:text-carnet-red">
                      <BookOpen className="h-4 w-4" />
                      Tous les chapitres
                    </Button>
                  </Link>

                  {nextChapter ? (
                    <Link to={`/formation/${subject}-${nextChapter.slug}`}>
                      <Button variant="outline" className="flex items-center gap-2 border-carnet-rule text-carnet-ink hover:border-carnet-red hover:text-carnet-red">
                        Chapitre suivant
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" disabled className="flex items-center gap-2 opacity-40 border-carnet-rule">
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
