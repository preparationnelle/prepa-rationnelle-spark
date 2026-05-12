import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft, ArrowRight, HelpCircle, List, GraduationCap } from 'lucide-react';

interface ModuleNavigationCardsProps {
  currentModule: {
    id: number;
    title: string;
    slug: string;
    color: string;
  };
  isExercisePage?: boolean;
  totalExercises?: number;
  currentExerciseId?: number | null;
  onNavigate?: (exerciseId: number) => void;
  isQuizMode?: boolean;
  nextModule?: {
    id: number;
    title: string;
    slug: string;
  };
}

const ModuleNavigationCards: React.FC<ModuleNavigationCardsProps> = ({
  currentModule,
  isExercisePage = false,
  totalExercises,
  currentExerciseId,
  onNavigate,
  isQuizMode = false,
  nextModule
}) => {
  const navigate = useNavigate();
  const courseLink = `/formation/python-${currentModule.slug}`;

  // Specific Exercise Navigation
  if (isExercisePage && currentExerciseId && totalExercises && onNavigate) {
    const isFirstExercise = currentExerciseId === 1;
    const isLastExercise = currentExerciseId === totalExercises;

    return (
      <div className="mt-16 mb-12">
        <Card className="border border-carnet-rule/60 shadow-none bg-carnet-paper-2 rounded-xl overflow-hidden">
          <CardContent className="flex items-center justify-between p-4">
            <Button
              onClick={() => onNavigate(currentExerciseId - 1)}
              disabled={isFirstExercise}
              variant="ghost"
              className="flex items-center gap-2 hover:bg-carnet-paper text-carnet-ink font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden md:inline">Précédent</span>
            </Button>

            <Link to={courseLink}>
              <Button variant="outline" className="flex items-center gap-2 border-carnet-rule text-carnet-red hover:border-carnet-red hover:bg-carnet-paper">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Module {currentModule.id} — Cours</span>
                <span className="sm:hidden">Cours</span>
              </Button>
            </Link>

            <Button
              onClick={() => onNavigate(currentExerciseId + 1)}
              disabled={isLastExercise}
              variant="ghost"
              className="flex items-center gap-2 hover:bg-carnet-paper text-carnet-ink font-medium"
            >
              <span className="hidden md:inline">Suivant</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Dashboard Navigation
  return (
    <div className="mt-12 mb-16 space-y-6">
      {/* Separator */}
      <div className="flex items-center gap-4">
        <div className="h-px bg-carnet-rule flex-1" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-carnet-ink-mute">Navigation du Module</span>
        <div className="h-px bg-carnet-rule flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Retour au cours */}
        <Link to={courseLink} className="group h-full">
          <Card className="h-full border border-carnet-rule hover:border-carnet-red transition-all duration-300 bg-carnet-paper-2 rounded-xl overflow-hidden shadow-none">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-carnet-red/10 text-carnet-red group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-carnet-ink group-hover:text-carnet-red transition-colors">Retour au Cours</h3>
                <p className="text-sm text-carnet-ink-soft mt-1">Revoir la théorie</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* 2. Toggle Quiz / Exercices */}
        <div
          onClick={() => {
            const currentPath = window.location.pathname;
            if (isQuizMode) {
              navigate(currentPath);
            } else {
              navigate(`${currentPath}?quiz=true`);
            }
          }}
          className="group h-full cursor-pointer"
        >
          <Card className="h-full border border-carnet-rule hover:border-pr-orange transition-all duration-300 bg-carnet-paper-2 rounded-xl overflow-hidden shadow-none">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-pr-orange/10 text-pr-orange-dark group-hover:scale-110 transition-transform duration-300">
                {isQuizMode ? <List className="h-6 w-6" /> : <HelpCircle className="h-6 w-6" />}
              </div>
              <div>
                <h3 className="font-bold text-carnet-ink group-hover:text-pr-orange-dark transition-colors">
                  {isQuizMode ? "Voir les Exercices" : "Faire le Quiz"}
                </h3>
                <p className="text-sm text-carnet-ink-soft mt-1">
                  {isQuizMode ? "S'entraîner sur des cas pratiques" : "Tester vos connaissances"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 3. Module suivant */}
        {nextModule ? (
          <Link to={`/formation/python-${nextModule.slug}-exercices`} className="group h-full">
            <Card className="h-full border border-carnet-rule hover:border-carnet-red transition-all duration-300 bg-carnet-paper-2 rounded-xl overflow-hidden shadow-none">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-carnet-red/10 text-carnet-red group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-carnet-ink group-hover:text-carnet-red transition-colors">Module Suivant</h3>
                  <p className="text-sm text-carnet-ink-soft mt-1">{nextModule.title}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ) : (
          <Link to="/formation" className="group h-full">
            <Card className="h-full border border-carnet-rule hover:border-carnet-rule/80 transition-all duration-300 bg-carnet-paper-2 rounded-xl overflow-hidden shadow-none">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-carnet-ink/5 text-carnet-ink-soft group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-carnet-ink group-hover:text-carnet-ink-soft transition-colors">Menu Principal</h3>
                  <p className="text-sm text-carnet-ink-soft mt-1">Toutes les formations</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ModuleNavigationCards;