import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Calculator, TrendingUp, BarChart3, Home, ChevronRight, BookOpen, HelpCircle, Lock } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { Progress } from '@/components/ui/progress';
import { pythonFormationStructure } from '@/data/python-formation-structure';
import { toast } from 'sonner';

const FormationPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { globalProgress, getModuleProgress, loading } = usePythonProgress();

  const handleModuleClick = (e: React.MouseEvent, link: string) => {
    if (!currentUser) {
      e.preventDefault();
      toast.error("Vous devez être connecté pour accéder à la formation");
      navigate('/login?next=/formation');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation <span className="text-blue-600">Python</span></span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-12 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
              <BookOpen className="h-7 w-7 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent tracking-tight">
              Formation Python ECG
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.
          </p>

          {currentUser && (
            <div className="max-w-md mx-auto bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
              <div className="flex justify-between text-sm font-semibold mb-3 text-gray-700">
                <span>Progression globale</span>
                <span className="text-blue-600">{globalProgress}%</span>
              </div>
              <Progress
                value={globalProgress}
                className="h-2.5 bg-gray-100 [&>div]:bg-blue-600 rounded-full"
              />
            </div>
          )}
        </div>

        {/* Modules Python */}
        <div className="max-w-4xl mx-auto space-y-6">
          {pythonFormationStructure.map((module, index) => {
            const moduleProgress = getModuleProgress(module.id);
            const Icons = [Code, Calculator, TrendingUp, BarChart3];
            const Icon = Icons[index] || Code;

            // Use generic links from structure or hardcode as needed based on original file logic
            const courseLink = module.chapters.find(c => c.type === 'cours')?.link || '#';
            const exercisesLink = module.chapters.find(c => c.type === 'exercice')?.link || '#';

            return (
              <div key={module.id} onClick={(e) => handleModuleClick(e, courseLink)} className="block cursor-pointer">
                <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_2px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group relative overflow-hidden">

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    {/* Icon Column */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="font-bold text-2xl text-blue-600">{index}</span>
                      </div>
                      {currentUser && moduleProgress === 100 && (
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-md border-2 border-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 w-full">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {module.title}
                        </h3>

                        {currentUser && (
                          <div className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 border border-gray-100 whitespace-nowrap self-start md:self-auto ${moduleProgress === 100 ? 'text-green-600 bg-green-50 border-green-100' : ''}`}>
                            {moduleProgress}% complété
                          </div>
                        )}
                      </div>

                      <p className="text-gray-500 mb-6 leading-relaxed">
                        {module.description}
                      </p>

                      {currentUser && (
                        <div className="mb-6">
                          <Progress
                            value={moduleProgress}
                            className="h-2 bg-gray-50 [&>div]:bg-blue-600 rounded-full"
                          />
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
                        <Link to={courseLink} onClick={(e) => handleModuleClick(e, courseLink)}>
                          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-5 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Étudier le cours
                          </Button>
                        </Link>

                        <Link to={`${exercisesLink}?quiz=true`} onClick={(e) => handleModuleClick(e, `${exercisesLink}?quiz=true`)}>
                          <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900 hover:border-gray-300 px-5 py-5 rounded-xl font-medium bg-transparent">
                            <HelpCircle className="mr-2 h-4 w-4" />
                            Quiz
                          </Button>
                        </Link>

                        <Link to={exercisesLink} onClick={(e) => handleModuleClick(e, exercisesLink)}>
                          <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900 hover:border-gray-300 px-5 py-5 rounded-xl font-medium bg-transparent">
                            <Calculator className="mr-2 h-4 w-4" />
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
      <div className="bg-white border-t border-gray-100 py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Outils & Ressources
            </h2>
            <p className="text-gray-500">
              Les indispensables pour votre réussite en Python
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Flashcards */}
            <Link to="/python-flashcards" className="block h-full group">
              <Card className="h-full bg-gray-50/50 hover:bg-white border text-center border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[20px] p-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform text-blue-600 mb-3">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Flashcards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">54 commandes essentielles à mémoriser</p>
                  <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 w-full rounded-xl">
                    S'entraîner
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Référence */}
            <Link to="/python-reference" className="block h-full group">
              <Card className="h-full bg-gray-50/50 hover:bg-white border text-center border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[20px] p-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform text-blue-600 mb-3">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Référence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">La documentation complète des commandes</p>
                  <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 w-full rounded-xl">
                    Consulter
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* Pourquoi Python */}
            <Link to="/python-article" className="block h-full group">
              <Card className="h-full bg-gray-50/50 hover:bg-white border text-center border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[20px] p-2">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:scale-110 transition-transform text-blue-600 mb-3">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Enjeux</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">Stratégie et importance aux concours</p>
                  <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 w-full rounded-xl">
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