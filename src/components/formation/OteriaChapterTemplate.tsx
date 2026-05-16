import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface OteriaChapterTemplateProps {
  sessionNumber: number;
  sessionTitle: string;
  description: string;
  children: React.ReactNode;
  slug: string;
  courseSlug?: string;
  exercisesSlug?: string;
  flashcardsSlug?: string;
  quizSlug?: string;
  duration?: string;
  level?: string;
  activeSection?: 'course' | 'exercises' | 'flashcards' | 'quiz';
  previousSession?: { slug: string; title: string };
  nextSession?: { slug: string; title: string };
}

export const OteriaChapterTemplate: React.FC<OteriaChapterTemplateProps> = ({
  sessionNumber,
  sessionTitle,
  description,
  children,
  slug,
  courseSlug,
  exercisesSlug,
  flashcardsSlug,
  quizSlug,
  duration,
  level,
  activeSection = 'course',
  previousSession,
  nextSession,
}) => {
  const courseLink = `/formation/oteria/${courseSlug || `${slug}-cours`}`;
  const exercisesLink = `/formation/oteria/${exercisesSlug || `${slug}-exercices`}`;
  const flashcardsLink = `/formation/oteria/${flashcardsSlug || `${slug}-flashcards`}`;
  const quizLink = `/formation/oteria/${quizSlug || `${slug}-qcm`}`;

  return (
    <div className="min-h-screen bg-carnet-paper">
      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-carnet-paper/90 backdrop-blur supports-[backdrop-filter]:bg-carnet-paper/60 border-b border-carnet-rule/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-carnet-ink-soft">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-ink transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-rule mx-1" />
            <Link to="/articles" className="hover:text-carnet-ink transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-rule mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-carnet-ink transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-rule mx-1" />
            <span className="text-carnet-ink font-semibold">Séance {sessionNumber} — Cours</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Header card */}
        <Card className="border border-carnet-rule shadow-none bg-carnet-paper-2 overflow-hidden">
          <div className="p-6 pb-3">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-medium text-carnet-ink-soft uppercase tracking-wider">
                Séance {sessionNumber}
              </span>
              {duration && (
                <>
                  <span className="text-carnet-rule">·</span>
                  <span className="text-xs text-carnet-ink-soft">{duration}</span>
                </>
              )}
              {level && (
                <>
                  <span className="text-carnet-rule">·</span>
                  <span className="text-xs text-carnet-ink-soft">{level}</span>
                </>
              )}
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-carnet-ink mb-2">
              {sessionTitle}
            </CardTitle>
            <p className="text-sm text-carnet-ink-soft leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          {/* Navigation pills */}
          <div className="px-6 pb-4 pt-1">
            <div className="flex flex-wrap items-center gap-1 border-t border-carnet-rule/40 pt-3">
              <Link to={courseLink}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'course'
                    ? 'bg-carnet-red text-carnet-paper font-semibold shadow-none'
                    : 'text-carnet-ink-soft hover:text-carnet-ink hover:bg-carnet-paper'
                    }`}
                >
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
              <Link to={exercisesLink}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'exercises'
                    ? 'bg-carnet-red text-carnet-paper font-semibold shadow-none'
                    : 'text-carnet-ink-soft hover:text-carnet-ink hover:bg-carnet-paper'
                    }`}
                >
                  <Target className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
              <Link to={flashcardsLink}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'flashcards'
                    ? 'bg-carnet-red text-carnet-paper font-semibold shadow-none'
                    : 'text-carnet-ink-soft hover:text-carnet-ink hover:bg-carnet-paper'
                    }`}
                >
                  <Brain className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
              <Link to={quizLink}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`h-8 rounded-full px-4 text-sm transition-all ${activeSection === 'quiz'
                    ? 'bg-carnet-red text-carnet-paper font-semibold shadow-none'
                    : 'text-carnet-ink-soft hover:text-carnet-ink hover:bg-carnet-paper'
                    }`}
                >
                  <Zap className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Content */}
        {children}

        {/* Footer navigation */}
        <Card className="border border-carnet-rule shadow-none bg-carnet-paper">
          <CardContent className="py-4">
            <div className="flex justify-between items-center">
              {previousSession ? (
                <Link to={`/formation/oteria/${previousSession.slug}-cours`}>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 rotate-180" />
                    Séance précédente
                  </Button>
                </Link>
              ) : (
                <div />
              )}

              <Link to="/articles/oteria-cyber-school">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Retour au programme
                </Button>
              </Link>

              {nextSession ? (
                <Link to={`/formation/oteria/${nextSession.slug}-cours`}>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    Séance suivante
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
