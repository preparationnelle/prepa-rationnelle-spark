import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Calculator, TrendingUp, BarChart3, Home, ChevronRight, BookOpen, HelpCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { Progress } from '@/components/ui/progress';
import { pythonFormationStructure } from '@/data/python-formation-structure';
import { toast } from 'sonner';

const FormationPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { globalProgress, getModuleProgress } = usePythonProgress();

  const handleModuleClick = (e: React.MouseEvent) => {
    if (!currentUser) {
      e.preventDefault();
      toast.error("Vous devez être connecté pour accéder à la formation");
      navigate('/login?next=/formation');
    }
  };

  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans text-pr-gray-dark">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-pr-gray-light/60">
        <div className="h-[2px] w-full bg-pr-orange" />
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center text-[11px] uppercase tracking-wider text-pr-gray-mid">
            <Link to="/" className="flex items-center gap-1.5 hover:text-pr-orange-dark transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1.5" />
            <span className="text-pr-black font-semibold normal-case tracking-normal">
              Formation <span className="text-pr-orange">Python</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-16 pb-20">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-pr-orange-pale border border-pr-orange-soft/60">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
              Formation · Prépa ECG
            </span>
          </div>

          <h1 className="font-dm-serif text-5xl md:text-6xl text-pr-black tracking-tight leading-[1.05] mb-5">
            Formation <span className="text-pr-orange">Python</span> ECG
          </h1>

          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-16 bg-pr-orange" />
          </div>

          <p className="text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
            Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques
            et coaching personnalisé.
          </p>

          {currentUser && (
            <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded-2xl shadow-sm border border-pr-gray-light">
              <div className="flex justify-between text-sm font-semibold mb-3 text-pr-gray-dark">
                <span>Progression globale</span>
                <span className="text-pr-orange-dark">{globalProgress}%</span>
              </div>
              <Progress
                value={globalProgress}
                className="h-2 bg-pr-gray-bg [&>div]:bg-pr-orange rounded-full"
              />
            </div>
          )}
        </div>

        {/* Modules Python */}
        <div className="max-w-4xl mx-auto space-y-5">
          {pythonFormationStructure.map((module, index) => {
            const moduleProgress = getModuleProgress(module.id);
            const Icons = [Code, Calculator, TrendingUp, BarChart3];
            const Icon = Icons[index] || Code;

            const courseLink = module.chapters.find((c) => c.type === 'cours')?.link || '#';
            const exercisesLink = module.chapters.find((c) => c.type === 'exercice')?.link || '#';

            return (
              <div
                key={module.id}
                onClick={(e) => handleModuleClick(e)}
                className="block cursor-pointer group"
              >
                <div className="relative bg-white rounded-2xl p-7 md:p-9 shadow-sm hover:shadow-lg transition-all duration-300 border border-pr-gray-light hover:border-pr-orange-soft overflow-hidden">
                  {/* Trait orange signature à gauche */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    {/* Numéro décoratif */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-pr-orange-pale border border-pr-orange-soft/40 group-hover:scale-105 transition-transform duration-300">
                        <span className="font-dm-serif text-4xl text-pr-orange leading-none">
                          {index}
                        </span>
                      </div>
                      {currentUser && moduleProgress === 100 && (
                        <div className="absolute -top-2 -right-2 bg-pr-orange text-white rounded-full p-1 shadow-md border-2 border-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale px-2 py-0.5 rounded">
                            Module {index}
                          </span>
                        </div>

                        {currentUser && (
                          <div
                            className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto ${
                              moduleProgress === 100
                                ? 'text-pr-orange-dark bg-pr-orange-pale border border-pr-orange-soft/50'
                                : 'text-pr-gray-mid bg-pr-gray-bg border border-pr-gray-light'
                            }`}
                          >
                            {moduleProgress}% complété
                          </div>
                        )}
                      </div>

                      <h3 className="font-dm-serif text-2xl md:text-3xl text-pr-black leading-tight mb-3 group-hover:text-pr-orange-dark transition-colors">
                        {module.title}
                      </h3>

                      <p className="text-pr-gray-dark/80 mb-6 leading-relaxed">
                        {module.description}
                      </p>

                      {currentUser && (
                        <div className="mb-6">
                          <Progress
                            value={moduleProgress}
                            className="h-1.5 bg-pr-gray-bg [&>div]:bg-pr-orange rounded-full"
                          />
                        </div>
                      )}

                      <div
                        className="flex flex-wrap gap-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link to={courseLink} onClick={(e) => handleModuleClick(e)}>
                          <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-5 rounded-xl font-semibold shadow-sm transition-all">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Étudier le cours
                          </Button>
                        </Link>

                        <Link
                          to={`${exercisesLink}?quiz=true`}
                          onClick={(e) => handleModuleClick(e)}
                        >
                          <Button
                            variant="outline"
                            className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft px-5 py-5 rounded-xl font-medium bg-transparent"
                          >
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Quiz
                          </Button>
                        </Link>

                        <Link to={exercisesLink} onClick={(e) => handleModuleClick(e)}>
                          <Button
                            variant="outline"
                            className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft px-5 py-5 rounded-xl font-medium bg-transparent"
                          >
                            <Icon className="mr-2 h-4 w-4" />
                            Exercices
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Outils Python */}
      <div className="bg-white border-t border-pr-gray-light py-20 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-orange-dark">
              Ressources
            </span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-pr-black mt-3 mb-3">
              Outils &amp; ressources
            </h2>
            <div className="flex justify-center mb-4">
              <div className="h-[2px] w-12 bg-pr-orange" />
            </div>
            <p className="text-pr-gray-mid">
              Les indispensables pour votre réussite en Python
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Flashcards */}
            <Link to="/python-flashcards" className="block h-full group">
              <Card className="h-full bg-pr-gray-bg/40 hover:bg-white border text-center border-pr-gray-light hover:border-pr-orange-soft shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm border border-pr-gray-light group-hover:scale-110 transition-transform text-pr-orange mb-3">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-dm-serif text-xl text-pr-black">
                    Flashcards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pr-gray-mid mb-4">
                    54 commandes essentielles à mémoriser
                  </p>
                  <Button
                    variant="ghost"
                    className="text-pr-orange-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark w-full rounded-xl"
                  >
                    S'entraîner
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Référence */}
            <Link to="/python-reference" className="block h-full group">
              <Card className="h-full bg-pr-gray-bg/40 hover:bg-white border text-center border-pr-gray-light hover:border-pr-orange-soft shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm border border-pr-gray-light group-hover:scale-110 transition-transform text-pr-orange mb-3">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-dm-serif text-xl text-pr-black">
                    Référence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pr-gray-mid mb-4">
                    La documentation complète des commandes
                  </p>
                  <Button
                    variant="ghost"
                    className="text-pr-orange-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark w-full rounded-xl"
                  >
                    Consulter
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Pourquoi Python */}
            <Link to="/python-article" className="block h-full group">
              <Card className="h-full bg-pr-gray-bg/40 hover:bg-white border text-center border-pr-gray-light hover:border-pr-orange-soft shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm border border-pr-gray-light group-hover:scale-110 transition-transform text-pr-orange mb-3">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-dm-serif text-xl text-pr-black">
                    Enjeux
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-pr-gray-mid mb-4">
                    Stratégie et importance aux concours
                  </p>
                  <Button
                    variant="ghost"
                    className="text-pr-orange-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark w-full rounded-xl"
                  >
                    Lire l'article
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPage;
