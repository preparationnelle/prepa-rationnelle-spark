import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Terminal, BookOpen, Clock, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

const PourquoiPythonPrepaECGPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation <span className="text-orange-600">Python</span> ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 max-w-5xl">

        {/* Header - Minimalist */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Pourquoi travailler Python en prépa ECG ?
          </h1>
          <p className="text-xl text-slate-500 font-light">
            Analyse stratégique d'une matière souvent sous-estimée.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <PythonNavigationTabs />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Introduction */}
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p>
                Python est souvent perçu par les étudiants de prépa ECG comme une contrainte secondaire,
                loin derrière les mathématiques ou l'ESH/HGG. C'est une erreur stratégique majeure.
                Dans un concours où chaque décimale compte, l'informatique est l'un des leviers les plus
                efficaces pour sécuriser son admissibilité et faire la différence aux oraux.
              </p>
            </div>

            {/* Point 1 */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-slate-700" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mt-1">Un rapport temps/points imbattable</h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-14">
                Aux écrits (EDHEC, EM Lyon, Parisiennes), les questions d'informatique représentent une part
                non négligeable du barème. Contrairement aux questions de fin de problème en mathématiques,
                souvent très abstraites et discriminantes, les questions Python sont techniques mais <strong>prévisibles</strong>.
                <br /><br />
                Maîtriser la syntaxe de base et les algorithmes classiques (boucles, listes, matrices) permet
                de glaner des points précieux rapidement, là où d'autres candidats laisseront copie blanche.
              </p>
            </section>

            {/* Point 2 */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Award className="h-6 w-6 text-slate-700" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mt-1">L'exigence des oraux</h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-14">
                Si l'écrit permet parfois de "limiter la casse" sans Python, l'oral ne pardonne pas.
                Dans les épreuves de mathématiques des meilleures écoles (HEC, ESCP), une question d'informatique
                est quasi-systématique.
                <br /><br />
                Être à l'aise avec le code face au jury démontre une rigueur et une complétude de profil qui
                rassurent et valorisent votre candidature. À l'inverse, un blocage total sur une fonction simple
                peut gâcher une excellente prestation mathématique.
              </p>
            </section>

            {/* Point 3 */}
            <section>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <Terminal className="h-6 w-6 text-slate-700" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mt-1">Une compétence clé pour l'École</h2>
              </div>
              <p className="text-slate-600 leading-relaxed pl-14">
                La prépa n'est qu'une étape. En école de commerce, Python est devenu le standard pour la Finance,
                la Data Science et le Marketing Digital. Arriver avec des bases solides, c'est se faciliter grandement
                la vie pour les cours de statistiques et d'analyse de données qui vous attendent dès la première année.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-medium text-slate-900 mb-6">Comment s'y mettre concrètement ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/formation/python-fondamentaux" className="group block p-6 bg-white/70 hover:bg-slate-50 border border-slate-200/60 rounded-2xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Les Fondamentaux</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-500">Syntaxe, boucles et fonctions de base.</p>
                </Link>
                <Link to="/formation/python-matrices" className="group block p-6 bg-white/70 hover:bg-slate-50 border border-slate-200/60 rounded-2xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Matrices & Numpy</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </div>
                  <p className="text-sm text-slate-500">Manipulation de tableaux et algèbre linéaire.</p>
                </Link>
              </div>
            </div>

          </div>

          {/* Sidebar / Context */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="bg-slate-50/80 border border-slate-200/60 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">Temps de lecture</span>
                </div>
                <p className="text-slate-900 font-semibold">3 minutes</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border border-slate-200/60 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Ressources associées</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/formation/python-reference" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm">
                      <BookOpen className="h-4 w-4" />
                      <span>Fiche de référence Python</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/flashcards" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm">
                      <Award className="h-4 w-4" />
                      <span>Flashcards de révision</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PourquoiPythonPrepaECGPage;
