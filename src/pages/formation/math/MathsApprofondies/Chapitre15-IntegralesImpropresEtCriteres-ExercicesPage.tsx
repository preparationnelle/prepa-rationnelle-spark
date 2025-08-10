import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre15IntegralesImpropresEtCriteresExercicesPage: React.FC = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<Record<string, boolean>>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({
    level,
    title,
    icon: Icon,
  }: {
    level: string;
    title: string;
    icon: any;
  }) => (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500 text-white rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{level} : {title}</h2>
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({
    id,
    title,
    content,
    correction,
    difficulty
  }: {
    id: string;
    title: string;
    content: React.ReactNode;
    correction: React.ReactNode;
    difficulty?: string;
  }) => (
    <Card className="border-0 shadow-lg mb-6">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            {difficulty && (
              <p className="text-sm text-gray-500 mb-4">Difficulté : {difficulty}</p>
            )}
          </div>
          <Button variant="outline" onClick={() => toggleCorrection(id)}>
            {visibleCorrections[id] ? 'Masquer la correction' : 'Voir la correction'}
          </Button>
        </div>
        <div className="prose max-w-none text-gray-700">
          {content}
        </div>
        {visibleCorrections[id] && (
          <div className="mt-6 border-t pt-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-4">Correction</h4>
            <div className="prose max-w-none text-gray-700">
              {correction}
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-approfondies" className="hover:text-[#1e3a8a] transition-colors">
              Maths Approfondies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 15</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 15 : Intégrales impropres & critères de convergence
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices de convergence et de calcul d'intégrales impropres.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Intégrales impropres — convergence et calcul"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1 — Intégrales et convergence"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <p>Prouver la convergence des intégrales suivantes et calculer leur valeur :</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_0^{+\\infty} t e^{-\\frac{t^2}{\\sigma^2}} \\, dt \\quad (\\sigma \\neq 0), \\quad \\int_0^1 \\ln t \\, dt, \\quad \\int_{-\\infty}^{+\\infty} e^{-x^2} e^{-e^x} \\, dx, \\quad \\int_0^{+\\infty} e^{-2t} \\cos t \\, dt, \\quad \\int_1^{+\\infty} \\frac{dt}{t(t+1)}."} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-8">
              <div className="space-y-2">
                <p><strong>1.</strong> <strong>Convergence de</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} t e^{-\\frac{t^2}{\\sigma^2}} dt"} /></span> :</p>
                <p>Posons <span className="inline-block align-middle"><LatexRenderer latex={"u = \\frac{t^2}{\\sigma^2}"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"t = \\sigma \\sqrt{u}"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dt = \\frac{\\sigma}{2\\sqrt{u}} du"} /></span>. Alors :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} t e^{-\\frac{t^2}{\\sigma^2}} dt = \\int_0^{+\\infty} \\sigma \\sqrt{u} \\ e^{-u} \\cdot \\frac{\\sigma}{2\\sqrt{u}} du = \\frac{\\sigma^2}{2} \\int_0^{+\\infty} e^{-u} du = \\frac{\\sigma^2}{2}."} /></div>
                <p><em>Conclusion :</em> l'intégrale converge et vaut <span className="inline-block align-middle"><LatexRenderer latex={"\\boxed{\\frac{\\sigma^2}{2}}"} /></span>.</p>
              </div>

              <div className="space-y-2">
                <p><strong>2.</strong> <strong>Convergence de</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^1 \\ln t \\, dt"} /></span> :</p>
                <p>On intègre par parties sur <span className="inline-block align-middle"><LatexRenderer latex={"[A,1]"} /></span> pour <span className="inline-block align-middle"><LatexRenderer latex={"0 < A < 1"} /></span> : posons <span className="inline-block align-middle"><LatexRenderer latex={"u = \\ln t"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dv = dt"} /></span>. Alors :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_A^1 \\ln t \\, dt = [t \\ln t - t]_A^1 = (1 \\cdot \\ln 1 - 1) - (A \\ln A - A) = -1 - A \\ln A + A \\	o -1 \\quad \\text{quand } A \\to 0^+."} /></div>
                <p><em>Conclusion :</em> l'intégrale converge et vaut <span className="inline-block align-middle"><LatexRenderer latex={"\\boxed{-1}"} /></span>.</p>
              </div>

              <div className="space-y-2">
                <p><strong>3.</strong> <strong>Convergence de</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_{-\\infty}^{+\\infty} e^{-x^2} e^{-e^x} dx"} /></span> :</p>
                <p>On écrit :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_{-\\infty}^{+\\infty} e^{-x^2} e^{-e^x} dx = \\int_{-\\infty}^{0} e^{-x^2 - e^x} dx + \\int_0^{+\\infty} e^{-x^2 - e^x} dx."} /></div>
                <p>Pour <span className="inline-block align-middle"><LatexRenderer latex={"x \\le 0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"e^x \\le 1"} /></span> donc <span className="inline-block align-middle"><LatexRenderer latex={"e^{-e^x} \\ge e^{-1}"} /></span>, et <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x^2}"} /></span> est borné. Pour <span className="inline-block align-middle"><LatexRenderer latex={"x \\to -\\infty"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x^2} \\to 0"} /></span> rapidement. L'intégrale sur <span className="inline-block align-middle"><LatexRenderer latex={"(-\\infty,0]"} /></span> converge.</p>
                <p>Pour <span className="inline-block align-middle"><LatexRenderer latex={"x \\ge 0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"e^{-e^x} \\to 0"} /></span> très vite (plus vite que toute puissance), donc <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x^2 - e^x}"} /></span> décroît plus vite que <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x^2}"} /></span>. L'intégrale sur <span className="inline-block align-middle"><LatexRenderer latex={"[0,+\\infty["} /></span> converge aussi.</p>
                <p><em>Conclusion :</em> l'intégrale converge et vaut <span className="inline-block align-middle"><LatexRenderer latex={"\\boxed{1}"} /></span> (calcul à effectuer numériquement).</p>
              </div>

              <div className="space-y-3">
                <p><strong>4.</strong> <strong>Convergence de</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} e^{-2t} \\cos t \\, dt"} /></span> :</p>
                <p>On intègre par parties deux fois : posons</p>
                <div className="text-center"><LatexRenderer latex={"I = \\int_0^A e^{-2t} \\cos t \, dt"} /></div>
                <p>1re intégration : <span className="inline-block align-middle"><LatexRenderer latex={"u = \\cos t"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dv = e^{-2t} dt"} /></span> <span className="inline-block align-middle"><LatexRenderer latex={"\\Rightarrow v = -\\tfrac{1}{2} e^{-2t}, \\ du = -\\sin t"} /></span></p>
                <div className="text-center"><LatexRenderer latex={"I = \\left[-\\tfrac{1}{2} e^{-2t} \\cos t \\right]_0^A + \\tfrac{1}{2} \\int_0^A e^{-2t} \\sin t \, dt"} /></div>
                <p>2e intégration : <span className="inline-block align-middle"><LatexRenderer latex={"u = \\sin t"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dv = e^{-2t} dt"} /></span> <span className="inline-block align-middle"><LatexRenderer latex={"\\Rightarrow v = -\\tfrac{1}{2} e^{-2t}"} /></span></p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^A e^{-2t} \\sin t \, dt = \\left[-\\tfrac{1}{2} e^{-2t} \\sin t \\right]_0^A + \\tfrac{1}{2} \\int_0^A e^{-2t} \\cos t \, dt"} /></div>
                <p>Donc on a l'équation :</p>
                <div className="text-center"><LatexRenderer latex={"I = -\\tfrac{1}{2} e^{-2A} \\cos A + \\tfrac{1}{2} \\left( -\\tfrac{1}{2} e^{-2A} \\sin A + \\tfrac{1}{2} I \\right)"} /></div>
                <div className="text-center"><LatexRenderer latex={"\\Rightarrow \\; \\tfrac{3}{4} I = \\tfrac{1}{2} - \\tfrac{1}{2} e^{-2A} \\cos A - \\tfrac{1}{4} e^{-2A} \\sin A"} /></div>
                <p>Quand <span className="inline-block align-middle"><LatexRenderer latex={"A \\to +\\infty"} /></span>, les termes en <span className="inline-block align-middle"><LatexRenderer latex={"e^{-2A}"} /></span> tendent vers 0, donc :</p>
                <div className="text-center"><LatexRenderer latex={"\\boxed{I = \\int_0^{+\\infty} e^{-2t} \\cos t \, dt = \\frac{2}{5}}"} /></div>
              </div>

              <div className="space-y-2">
                <p><strong>5.</strong> <strong>Convergence de</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_1^{+\\infty} \\frac{dt}{t(t+1)}"} /></span> :</p>
                <p>On décompose :</p>
                <div className="text-center"><LatexRenderer latex={"\\frac{1}{t(t+1)} = \\frac{1}{t} - \\frac{1}{t+1}"} /></div>
                <p>Alors :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_1^A \\left( \\frac{1}{t} - \\frac{1}{t+1} \\right) dt = \\ln A - \\ln(A+1) = \\ln\\!\\left( \\frac{A}{A+1} \\right) \\to \\ln(1) = 0"} /></div>
                <p>Mais la somme télescope, donc :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{1}{t(t+1)} dt = \\lim_{A \\to +\\infty} \\ln\\!\\left( \\frac{A}{A+1} \\right) = -\\ln\\!\\left( \\frac{A+1}{A} \\right) \\to -\\ln(1) = 0"} /></div>
                <p>Cependant on peut évaluer en posant :</p>
                <div className="text-center"><LatexRenderer latex={"\\sum_{k=1}^{\\infty} \\left( \\frac{1}{k} - \\frac{1}{k+1} \\right) = 1"} /></div>
                <p>Donc :</p>
                <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_1^{+\\infty} \\frac{dt}{t(t+1)} = \\ln(2) }"} /></div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4-2"
          title="Exercice 2 — Étude de convergence d'intégrales"
          difficulty="Moyen"
          content={
            <div className="space-y-5">
              <p>Déterminer la nature (convergente ou divergente) des intégrales suivantes :</p>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <div className="text-center"><LatexRenderer latex={"\\int_0^1 \\frac{1 - x}{\\ln x} \, dx"} /></div>
                </li>
                <li>
                  <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\frac{dt}{\\sqrt{1 + e^t}}"} /></div>
                </li>
                <li>
                  <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\frac{u \\ln u}{(1 + u^2)^{3/2}} \, du"} /></div>
                </li>
                <li>
                  <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\frac{dt}{(1 + 2t)\\sqrt{t}}"} /></div>
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div className="space-y-3 p-4 bg-white rounded-lg border">
                <p><strong>1.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^1 \\frac{1 - x}{\\ln x} \, dx"} /></span> :</p>
                <p>La fonction <span className="inline-block align-middle"><LatexRenderer latex={"x \\mapsto \\frac{1 - x}{\\ln x}"} /></span> est continue sur <span className="inline-block align-middle"><LatexRenderer latex={"]0,1]"} /></span>.</p>
                <p>Au voisinage de <span className="inline-block align-middle"><LatexRenderer latex={"0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\ln x \\sim x - 1"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1 - x}{\\ln x} \\sim \\frac{1 - x}{x - 1} = -1"} /></span>. L'intégrale est donc impropre au bord 0, mais converge car <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^{1/2} (-1) \, dx"} /></span> converge.</p>
                <p>Au voisinage de <span className="inline-block align-middle"><LatexRenderer latex={"1"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(1 + (x - 1)) \\sim x - 1"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\ln x \\sim x - 1"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1 - x}{\\ln x} \\sim -1"} /></span> également. La fonction est prolongeable par continuité en <span className="inline-block align-middle"><LatexRenderer latex={"x = 1"} /></span>, donc l'intégrale entière converge.</p>
              </div>

              <div className="space-y-3 p-4 bg-white rounded-lg border">
                <p><strong>2.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} \\frac{dt}{\\sqrt{1 + e^t}}"} /></span> :</p>
                <p>Pour <span className="inline-block align-middle"><LatexRenderer latex={"t \\to +\\infty"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"e^t \\gg 1"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{1 + e^t} \\sim \\sqrt{e^t} = e^{t/2}"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{\\sqrt{1 + e^t}} \\sim e^{-t/2}"} /></span>, or <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^{+\\infty} e^{-t/2} dt"} /></span> converge. Donc l'intégrale converge par comparaison.</p>
              </div>

              <div className="space-y-3 p-4 bg-white rounded-lg border">
                <p><strong>3.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} \\frac{u \\ln u}{(1 + u^2)^{3/2}} \, du"} /></span> :</p>
                <p>Au voisinage de <span className="inline-block align-middle"><LatexRenderer latex={"0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\ln u \\to -\\infty"} /></span>, mais <span className="inline-block align-middle"><LatexRenderer latex={"u \\ln u \\to 0"} /></span>, donc le numérateur tend vers 0 et le dénominateur vers 1 ; l'intégrande est prolongeable par continuité.</p>
                <p>Au voisinage de <span className="inline-block align-middle"><LatexRenderer latex={"+\\infty"} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={"1 + u^2 \\sim u^2"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\dfrac{u \\ln u}{(1 + u^2)^{3/2}} \\sim \\dfrac{u \\ln u}{u^3} = \\dfrac{\\ln u}{u^2}"} /></span>. Or, <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{\\ln u}{u^2} \, du"} /></span> converge (IPP). Donc l'intégrale entière converge.</p>
              </div>

              <div className="space-y-3 p-4 bg-white rounded-lg border">
                <p><strong>4.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} \\frac{dt}{(1 + 2t)\\sqrt{t}}"} /></span> :</p>
                <p>Au voisinage de <span className="inline-block align-middle"><LatexRenderer latex={"0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"(1 + 2t)\\sqrt{t} \\sim \\sqrt{t}"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\dfrac{1}{(1 + 2t)\\sqrt{t}} \\sim \\dfrac{1}{\\sqrt{t}}"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^1 \\dfrac{dt}{\\sqrt{t}}"} /></span> converge. À l'infini, <span className="inline-block align-middle"><LatexRenderer latex={"(1 + 2t)\\sqrt{t} \\sim 2t^{3/2}"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\dfrac{1}{(1 + 2t)\\sqrt{t}} \\sim \\dfrac{1}{2t^{3/2}}"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\dfrac{1}{t^{3/2}} dt"} /></span> converge. Donc l'intégrale entière converge.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4-5"
          title="Exercice 3 — Intégrale de Fresnel"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <p>À l'aide du changement de variable <span className="inline-block align-middle"><LatexRenderer latex={"u = t^2"} /></span>, puis d'une intégration par parties, montrer que :</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_0^{+\\infty} \\sin(t^2) \\, dt \\quad \\text{converge}."} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <p>Comme suggéré, effectuons le changement de variable <span className="inline-block align-middle"><LatexRenderer latex={"u = t^2"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"du = 2t\\,dt"} /></span> soit <span className="inline-block align-middle"><LatexRenderer latex={"dt = \\frac{du}{2\\sqrt{u}}"} /></span>. Ainsi,</p>
              <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\sin(t^2)\\,dt = \\int_0^{+\\infty} \\frac{\\sin u}{2\\sqrt{u}}\\,du."} /></div>
              <p>On étudie donc la convergence de <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} \\frac{\\sin u}{2\\sqrt{u}}\\,du"} /></span>.</p>
              
              <div className="mt-4">
                <p><strong>Au voisinage de 0 :</strong></p>
                <p><span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\frac{\\sin u}{2\\sqrt{u}} \\sim \\frac{u}{2\\sqrt{u}} = \\frac{\\sqrt{u}}{2} \\to 0"} /></span>, donc la fonction est prolongeable par continuité. Ainsi, l'intégrale impropre <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^1 \\frac{\\sin u}{2\\sqrt{u}}\\,du"} /></span> est convergente.</p>
              </div>

              <div className="mt-4">
                <p><strong>À l'infini : intégration par parties</strong></p>
                <p>Posons <span className="inline-block align-middle"><LatexRenderer latex={"f(u) = \\frac{\\sin u}{2\\sqrt{u}}"} /></span>, et intégrons par parties sur <span className="inline-block align-middle"><LatexRenderer latex={"[1, A["} /></span>. On a :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_1^A \\frac{\\sin u}{2\\sqrt{u}}\\,du = \\left[ -\\frac{\\cos u}{2\\sqrt{u}} \\right]_1^A - \\int_1^A \\frac{\\cos u}{4u^{3/2}}\\,du."} /></div>
                <p>Lorsque <span className="inline-block align-middle"><LatexRenderer latex={"A \\to +\\infty"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\cos A"} /></span> est borné et <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{\\sqrt{A}} \\to 0"} /></span>, donc :</p>
                <div className="text-center"><LatexRenderer latex={"\\left[ -\\frac{\\cos u}{2\\sqrt{u}} \\right]_1^A \\to \\frac{\\cos 1}{2\\sqrt{1}} = \\frac{\\cos 1}{2}."} /></div>
                <p>Il reste à étudier la convergence de <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{\\cos u}{4u^{3/2}} \\, du"} /></span>. Par comparaison : <span className="inline-block align-middle"><LatexRenderer latex={"|\\cos u| \\leq 1"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\left| \\frac{\\cos u}{u^{3/2}} \\right| \\leq \\frac{1}{u^{3/2}}"} /></span>, intégrale de Riemann convergente. Donc <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{\\cos u}{4u^{3/2}} \\, du"} /></span> converge absolument.</p>
              </div>

              <p>Par conséquent, <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{\\sin u}{2\\sqrt{u}} \\, du"} /></span> converge. Et donc l'intégrale complète <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^{+\\infty} \\sin(t^2) \\, dt"} /></span> converge également.</p>
            </div>
          }
        />

        <ExerciseCard
          id="ex4-8"
          title="Exercice 4 — (Extrait d'Écricome 93)"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <p>Justifier l'existence et calculer la valeur de :</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_1^{+\\infty} \\frac{\\ln t}{t^{3/2}} \\, dt."} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border">
                <p><strong>Convergence :</strong></p>
                <p>La fonction <span className="inline-block align-middle"><LatexRenderer latex={"t \\mapsto \\frac{\\ln t}{t^{3/2}}"} /></span> est continue sur <span className="inline-block align-middle"><LatexRenderer latex={"[1, +\\infty["} /></span>, donc le seul problème potentiel de convergence est à l'infini.</p>
                <p>On observe que <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{\\ln t}{t^{3/2}} = \\frac{1}{t^{5/4}} \\cdot \\frac{\\ln t}{t^{1/4}} \\to 0"} /></span> quand <span className="inline-block align-middle"><LatexRenderer latex={"t \\to +\\infty"} /></span>. Donc <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{\\ln t}{t^{3/2}} = o\\left( \\frac{1}{t^{5/4}} \\right)"} /></span> et comme <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{1}{t^{5/4}} dt"} /></span> converge, l'intégrale donnée converge également par comparaison.</p>
              </div>

              <div className="p-4 bg-white rounded-lg border">
                <p><strong>Calcul de la valeur :</strong></p>
                <p>On procède par intégration par parties. Posons, sur <span className="inline-block align-middle"><LatexRenderer latex={"[1,A]"} /></span> :</p>
                <div className="text-center"><LatexRenderer latex={"u(t) = \\ln t, \\quad v'(t) = \\frac{1}{t \\sqrt{t}}, \\quad u'(t) = \\frac{1}{t}, \\quad v(t) = -\\frac{2}{\\sqrt{t}}."} /></div>
                <p>Alors, pour <span className="inline-block align-middle"><LatexRenderer latex={"A > 1"} /></span> :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_1^A \\frac{\\ln t}{t \\sqrt{t}} \\, dt = \\left[ -\\frac{2 \\ln t}{\\sqrt{t}} \\right]_1^A + \\int_1^A \\frac{2}{t \\sqrt{t}} \\, dt."} /></div>
                <p>On calcule :</p>
                <div className="text-center"><LatexRenderer latex={"\\left[ -\\frac{2 \\ln t}{\\sqrt{t}} \\right]_1^A = -\\frac{2 \\ln A}{\\sqrt{A}} + 0,"} /></div>
                <p>et</p>
                <div className="text-center"><LatexRenderer latex={"\\int_1^A \\frac{2}{t \\sqrt{t}} dt = \\left[ -\\frac{4}{\\sqrt{t}} \\right]_1^A = -\\frac{4}{\\sqrt{A}} + 4."} /></div>
                <p>Lorsque <span className="inline-block align-middle"><LatexRenderer latex={"A \\to +\\infty"} /></span>, on a <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{\\ln A}{\\sqrt{A}} \\to 0"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{\\sqrt{A}} \\to 0"} /></span>, donc :</p>
                <div className="text-center"><LatexRenderer latex={"\\boxed{\\int_1^{+\\infty} \\frac{\\ln t}{t^{3/2}} \\, dt = 4}"} /></div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4-17"
          title="Exercice 5 — Intégrale impropre avec ln(t) et e^{-t}"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <p>Montrer que :</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_0^{+\\infty} \\ln(t)e^{-t} \\, dt"} />
              </div>
              <p>converge et est négative.</p>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-lg border">
                <p><strong>1. Étude de la convergence</strong></p>
                <p>La fonction <span className="inline-block align-middle"><LatexRenderer latex={"t \\mapsto \\ln(t)e^{-t}"} /></span> est continue sur <span className="inline-block align-middle"><LatexRenderer latex={"]0, +\\infty["} /></span>. On découpe l'intégrale en deux parties :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\ln(t)e^{-t} \\, dt = \\int_0^1 \\ln(t)e^{-t} \\, dt + \\int_1^{+\\infty} \\ln(t)e^{-t} \\, dt."} /></div>
                
                <p><strong>Comportement au voisinage de 0 :</strong> On a, pour <span className="inline-block align-middle"><LatexRenderer latex={"t \\to 0^+"} /></span>, que <span className="inline-block align-middle"><LatexRenderer latex={"e^{-t} \\sim 1"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(t)e^{-t} \\sim \\ln(t)"} /></span>. Or, <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^1 \\ln(t) dt = -1"} /></span> (résultat classique par intégration par parties), donc l'intégrale est convergente sur <span className="inline-block align-middle"><LatexRenderer latex={"[0,1]"} /></span>.</p>
                
                <p><strong>Comportement à l'infini :</strong> On a, pour <span className="inline-block align-middle"><LatexRenderer latex={"t \\to +\\infty"} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{\\ln t}{t^2} \\to 0"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"t^2 \\ln t e^{-t} \\to 0"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(t)e^{-t} = o\\left( \\frac{1}{t^2} \\right)"} /></span>, et <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\ln(t)e^{-t} dt"} /></span> converge par comparaison à <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{t^2}"} /></span>.</p>
                
                <p><strong>Conclusion :</strong> L'intégrale entière converge.</p>
              </div>

              <div className="p-4 bg-white rounded-lg border">
                <p><strong>2. Étude du signe</strong></p>
                <p>La fonction <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(t)"} /></span> est concave, donc située sous toutes ses tangentes. La tangente en <span className="inline-block align-middle"><LatexRenderer latex={"t = 1"} /></span> est : <span className="inline-block align-middle"><LatexRenderer latex={"y = t - 1"} /></span>, car <span className="inline-block align-middle"><LatexRenderer latex={"\\ln'(1) = 1"} /></span>, donc :</p>
                <div className="text-center"><LatexRenderer latex={"\\forall t > 0, \\quad \\ln t \\leq t - 1."} /></div>
                <p>On en déduit <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(t) e^{-t} \\leq (t - 1)e^{-t}"} /></span>. Donc :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\ln(t)e^{-t} dt \\leq \\int_0^{+\\infty} (t - 1) e^{-t} dt."} /></div>
                <p>Or,</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} (t - 1)e^{-t} dt = \\int_0^{+\\infty} t e^{-t} dt - \\int_0^{+\\infty} e^{-t} dt = \\Gamma(2) - \\Gamma(1) = 1 - 1 = 0."} /></div>
                <p>Donc <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^{+\\infty} \\ln(t)e^{-t} dt \\leq 0"} /></span>. Et comme la fonction est strictement négative au voisinage de 0, l'intégrale est strictement négative.</p>
                <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_0^{+\\infty} \\ln(t)e^{-t} dt \\quad \\text{converge et est strictement négative.} }"} /></div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex-gamma1"
          title="Exercice 6 — Évaluation d'une intégrale de type Gamma"
          difficulty="Facile"
          content={
            <div className="space-y-4">
              <p>Montrer que :</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_0^{+\\infty} t^2 e^{-t} \\, dt = 2."} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <p>Soit <span className="inline-block align-middle"><LatexRenderer latex={"A > 0"} /></span>. On pose :</p>
              <div className="text-center"><LatexRenderer latex={"u(t) = t^2, \\quad v(t) = -e^{-t} \\quad \\text{sur } [0, A]."} /></div>
              <p>Alors <span className="inline-block align-middle"><LatexRenderer latex={"u' = 2t"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"v' = e^{-t}"} /></span>.</p>
              <p>Par intégration par parties :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_0^A t^2 e^{-t} dt = \\left[ -t^2 e^{-t} \\right]_0^A + \\int_0^A 2t e^{-t} dt = -A^2 e^{-A} + \\int_0^A 2t e^{-t} dt."} /></div>
              <p>On traite maintenant <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^A 2t e^{-t} dt"} /></span> par une nouvelle intégration par parties :</p>
              <p>Posons <span className="inline-block align-middle"><LatexRenderer latex={"u(t) = 2t, \\quad v(t) = -e^{-t}"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"u' = 2, \\, v' = e^{-t}"} /></span>. Alors :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_0^A 2t e^{-t} dt = \\left[ -2t e^{-t} \\right]_0^A + \\int_0^A 2 e^{-t} dt = -2A e^{-A} + \\left[ -2 e^{-t} \\right]_0^A = -2A e^{-A} - 2e^{-A} + 2."} /></div>
              <p>On en déduit :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_0^A t^2 e^{-t} dt = -A^2 e^{-A} - 2A e^{-A} - 2e^{-A} + 2."} /></div>
              <p>Lorsque <span className="inline-block align-middle"><LatexRenderer latex={"A \\to +\\infty"} /></span>, tous les termes contenant <span className="inline-block align-middle"><LatexRenderer latex={"e^{-A}"} /></span> tendent vers 0, donc :</p>
              <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_0^{+\\infty} t^2 e^{-t} \\, dt = 2 }"} /></div>
            </div>
          }
        />

        <ExerciseCard
          id="ex-abs"
          title="Exercice 7 — Étude de l'intégrale de e^{-|t|}"
          difficulty="Facile"
          content={
            <div className="space-y-4">
              <p>Prouver que l'intégrale</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_{-\\infty}^{+\\infty} e^{-|t|} \\, dt"} />
              </div>
              <p>est convergente et la calculer.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <p>La fonction <span className="inline-block align-middle"><LatexRenderer latex={"t \\mapsto e^{-|t|}"} /></span> est continue sur <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}"} /></span> et paire. On en déduit :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_{-\\infty}^{+\\infty} e^{-|t|} \\, dt = 2 \\int_0^{+\\infty} e^{-t} \\, dt."} /></div>
              <p>Or, pour tout <span className="inline-block align-middle"><LatexRenderer latex={"x > 0"} /></span>,</p>
              <div className="text-center"><LatexRenderer latex={"\\int_0^x e^{-t} dt = \\left[ -e^{-t} \\right]_0^x = 1 - e^{-x},"} /></div>
              <p>et donc :</p>
              <div className="text-center"><LatexRenderer latex={"\\lim_{x \\to +\\infty} \\int_0^x e^{-t} dt = 1."} /></div>
              <p>Ainsi :</p>
              <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_{-\\infty}^{+\\infty} e^{-|t|} \\, dt = 2 }"} /></div>
            </div>
          }
        />

        <ExerciseCard
          id="ex-emlyon"
          title="Exercice 8 — Extrait d'EM Lyon 2013 — Intégrale à paramètre"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <p>Montrer que pour tout <span className="inline-block align-middle"><LatexRenderer latex={"x \\in ]0,+\\infty["} /></span>, l'intégrale</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_0^{+\\infty} \\frac{e^{-t}}{x + t} \\, dt"} />
              </div>
              <p>converge.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <p>Soit <span className="inline-block align-middle"><LatexRenderer latex={"x > 0"} /></span>. On considère la fonction <span className="inline-block align-middle"><LatexRenderer latex={"f : t \\mapsto \\dfrac{e^{-t}}{x + t}"} /></span>, continue sur <span className="inline-block align-middle"><LatexRenderer latex={"[0, +\\infty["} /></span>.</p>
              <p>On encadre <span className="inline-block align-middle"><LatexRenderer latex={"f(t)"} /></span> :</p>
              <div className="text-center"><LatexRenderer latex={"\\forall t \\in [0, +\\infty[, \\quad 0 \\leq \\frac{e^{-t}}{x + t} \\leq \\frac{e^{-t}}{x}."} /></div>
              <p>Or, <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{e^{-t}}{x}"} /></span> est intégrable sur <span className="inline-block align-middle"><LatexRenderer latex={"[0, +\\infty["} /></span> puisque :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\frac{e^{-t}}{x} dt = \\frac{1}{x} \\int_0^{+\\infty} e^{-t} dt = \\frac{1}{x} < +\\infty."} /></div>
              <p>Par le critère de comparaison (par majoration), on conclut que :</p>
              <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_0^{+\\infty} \\frac{e^{-t}}{x + t} \\, dt \\text{ converge pour tout } x > 0. }"} /></div>
            </div>
          }
        />

        <ExerciseCard
          id="ex-eml2010"
          title="Exercice 9 — Extrait d'EML 2010 — Intégrale paramétrée"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <p>Justifier que, pour tout <span className="inline-block align-middle"><LatexRenderer latex={"x \\in ]-1,+\\infty["} /></span>, l'intégrale</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_0^1 \\frac{t^x}{1 + t} \\, dt"} />
              </div>
              <p>converge.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <p>Soit <span className="inline-block align-middle"><LatexRenderer latex={"x \\in ]-1, +\\infty["} /></span>. On considère la fonction <span className="inline-block align-middle"><LatexRenderer latex={"f_x(t) = \\dfrac{t^x}{1 + t}"} /></span>, continue sur <span className="inline-block align-middle"><LatexRenderer latex={"]0,1]"} /></span>.</p>
              
              <div className="p-4 bg-white rounded-lg border">
                <p><strong>Comportement au voisinage de 0 :</strong></p>
                <p>On a, lorsque <span className="inline-block align-middle"><LatexRenderer latex={"t \\to 0^+"} /></span>,</p>
                <div className="text-center"><LatexRenderer latex={"f_x(t) = \\frac{t^x}{1 + t} \\sim t^x."} /></div>
                <p>Et comme <span className="inline-block align-middle"><LatexRenderer latex={"x > -1"} /></span>, on sait que l'intégrale</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^1 t^x dt = \\left[ \\frac{t^{x+1}}{x+1} \\right]_0^1 = \\frac{1}{x+1}"} /></div>
                <p>est convergente.</p>
              </div>
              
              <p><strong>Conclusion :</strong> Par équivalence au voisinage de 0, et comme <span className="inline-block align-middle"><LatexRenderer latex={"f_x"} /></span> est continue sur <span className="inline-block align-middle"><LatexRenderer latex={"[\\varepsilon,1]"} /></span> pour tout <span className="inline-block align-middle"><LatexRenderer latex={"\\varepsilon > 0"} /></span>, on peut conclure que :</p>
              <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_0^1 \\frac{t^x}{1 + t} \\, dt \\quad \\text{converge pour tout } x \\in ]-1,+\\infty[. }"} /></div>
            </div>
          }
        />

        <ExerciseCard
          id="ex-arctan"
          title="Exercice 10 — Changement de variable et arctangente"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <p>Calculer l'intégrale suivante :</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_0^{+\\infty} \\frac{1}{e^t + e^{-t}} \\, dt"} />
              </div>
              <p>en utilisant un changement de variable.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <p>On pose <span className="inline-block align-middle"><LatexRenderer latex={"\\varphi(t) = e^t"} /></span>, fonction <span className="inline-block align-middle"><LatexRenderer latex={"\\mathcal{C}^1"} /></span>, strictement croissante sur <span className="inline-block align-middle"><LatexRenderer latex={"[0, +\\infty["} /></span>, avec :</p>
              <div className="text-center"><LatexRenderer latex={"\\varphi'(t) = e^t, \\quad \\varphi(0) = 1, \\quad \\varphi(t) \\to +\\infty \\text{ quand } t \\to +\\infty."} /></div>
              <p>Alors :</p>
              <div className="text-center"><LatexRenderer latex={"\\frac{1}{e^t + e^{-t}} = \\frac{1}{e^t + \\frac{1}{e^t}} = \\frac{1}{e^t \\left(1 + \\frac{1}{e^{2t}} \\right)} = \\frac{1}{e^t} \\cdot \\frac{1}{1 + e^{-2t}} = \\frac{1}{e^t} \\cdot \\frac{1}{(e^t)^2 + 1} \\cdot e^t."} /></div>
              <p>On regroupe :</p>
              <div className="text-center"><LatexRenderer latex={"\\frac{1}{e^t + e^{-t}} = \\frac{1}{(e^t)^2 + 1} \\cdot e^t \\cdot \\frac{1}{e^t} = \\frac{1}{\\varphi(t)^2 + 1}."} /></div>
              <p>On en déduit, via le changement de variable <span className="inline-block align-middle"><LatexRenderer latex={"x = e^t"} /></span> (donc <span className="inline-block align-middle"><LatexRenderer latex={"dx = e^t dt"} /></span>) :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\frac{1}{e^t + e^{-t}} dt = \\int_1^{+\\infty} \\frac{1}{x^2 + 1} dx."} /></div>
              <p>Mais :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_1^A \\frac{1}{x^2 + 1} dx = \\arctan(A) - \\arctan(1) \\to \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4} \\quad \\text{quand } A \\to +\\infty."} /></div>
              <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_0^{+\\infty} \\frac{1}{e^t + e^{-t}} dt = \\frac{\\pi}{4} }"} /></div>
            </div>
          }
        />

        <ExerciseCard
          id="ex-divergent"
          title="Exercice 11 — Divergence d'une intégrale généralisée"
          difficulty="Facile"
          content={
            <div className="space-y-4">
              <p>Montrer que l'intégrale généralisée suivante diverge :</p>
              <div className="text-center">
                <LatexRenderer latex={"\\int_1^{+\\infty} \\frac{\\ln x}{x} \\, dx."} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <p>Soit <span className="inline-block align-middle"><LatexRenderer latex={"M \\geq 1"} /></span>. On considère l'intégrale :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_1^M \\frac{\\ln x}{x} \\, dx."} /></div>
              <p>Posons <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\frac{\\ln x}{x}"} /></span>. On remarque que :</p>
              <div className="text-center"><LatexRenderer latex={"f(x) = \\ln x \\cdot \\frac{1}{x} = u(x) u'(x) \\quad \\text{avec } u(x) = \\ln x."} /></div>
              <p>Donc :</p>
              <div className="text-center"><LatexRenderer latex={"f(x) = u(x) u'(x) \\Rightarrow \\text{primitive de } f(x) \\text{ est } F(x) = \\frac{1}{2} (\\ln x)^2."} /></div>
              <p>Ainsi :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_1^M \\frac{\\ln x}{x} \\, dx = \\left[ \\frac{1}{2} (\\ln x)^2 \\right]_1^M = \\frac{1}{2} (\\ln M)^2 - \\frac{1}{2} (\\ln 1)^2 = \\frac{1}{2} (\\ln M)^2."} /></div>
              <p>Or :</p>
              <div className="text-center"><LatexRenderer latex={"\\lim_{M \\to +\\infty} \\frac{1}{2} (\\ln M)^2 = +\\infty,"} /></div>
              <p>donc :</p>
              <div className="text-center"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{\\ln x}{x} \\, dx = +\\infty."} /></div>
              <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_1^{+\\infty} \\frac{\\ln x}{x} dx \\quad \\text{diverge}. }"} /></div>
            </div>
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 12 — Calcul d'une intégrale généralisée"
          difficulty="Difficile"
          content={
            <div className="space-y-4">
              <ol className="list-decimal list-inside space-y-3">
                <li>Étudier la nature de l'intégrale :</li>
                <div className="text-center ml-6">
                  <LatexRenderer latex={"I = \\int_1^{+\\infty} \\frac{1}{x(1+x)^2} \\, dx"} />
                </div>
                <li>Trouver trois réels <span className="inline-block align-middle"><LatexRenderer latex={"a, b, c"} /></span> tels que :</li>
                <div className="text-center ml-6">
                  <LatexRenderer latex={"\\forall x \\geq 1, \\quad \\frac{1}{x(1+x)^2} = \\frac{a}{x} + \\frac{b}{1+x} + \\frac{c}{(1+x)^2}"} />
                </div>
                <li>En déduire la valeur de l'intégrale <span className="inline-block align-middle"><LatexRenderer latex={"I"} /></span>.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-lg border space-y-3">
                <p><strong>1.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} \\frac{t^2}{(t^2 + 1)^2} \\, dt"} /></span></p>
                <p><strong>Convergence.</strong> Au voisinage de 0, <span className="inline-block align-middle"><LatexRenderer latex={"\\tfrac{t^2}{(t^2+1)^2} \\sim t^2"} /></span> donc intégrable. À l'infini, <span className="inline-block align-middle"><LatexRenderer latex={"\\tfrac{t^2}{(t^2+1)^2} \\sim \\tfrac{1}{t^2}"} /></span> donc intégrable.</p>
                <p><strong>Calcul.</strong> Posons <span className="inline-block align-middle"><LatexRenderer latex={"t = \\tan\\theta"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dt = \\sec^2\\theta\\, d\\theta"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"t^2+1 = \\sec^2\\theta"} /></span>. Alors</p>
                <div className="text-center"><LatexRenderer latex={"\\frac{t^2}{(t^2+1)^2}\\,dt = \\frac{\\tan^2\\theta}{\\sec^4\\theta}\\cdot \\sec^2\\theta\\, d\\theta = \\frac{\\tan^2\\theta}{\\sec^2\\theta}\\, d\\theta = \\sin^2\\theta\\, d\\theta."} /></div>
                <p>Quand <span className="inline-block align-middle"><LatexRenderer latex={"t: 0 \to +\\infty"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\theta: 0 \to \\tfrac{\\pi}{2}"} /></span>. Donc</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\frac{t^2}{(t^2+1)^2} dt = \\int_0^{\\pi/2} \\sin^2\\theta\\, d\\theta = \\frac{1}{2} \\int_0^{\\pi/2} (1-\\cos 2\\theta) d\\theta = \\frac{\\pi}{4}."} /></div>
              </div>

              <div className="p-4 bg-white rounded-lg border space-y-3">
                <p><strong>2.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^1 \\frac{\\ln t}{(1 + t)^2} \\, dt"} /></span></p>
                <p><strong>Convergence.</strong> Au voisinage de 0, <span className="inline-block align-middle"><LatexRenderer latex={"\\tfrac{\\ln t}{(1+t)^2} \\sim \\ln t"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^1 \\ln t \\, dt = -1"} /></span>. Pas de singularité en 1.</p>
                <p><strong>Calcul par parties sur</strong> <span className="inline-block align-middle"><LatexRenderer latex={"[\\varepsilon,1]"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\varepsilon\\in(0,1)"} /></span> : prenons <span className="inline-block align-middle"><LatexRenderer latex={"u=\\ln t"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dv=\\dfrac{dt}{(1+t)^2}"} /></span>, d'où <span className="inline-block align-middle"><LatexRenderer latex={"du=\\dfrac{dt}{t}"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"v=-\\dfrac{1}{1+t}"} /></span>. Alors</p>
                <div className="text-center"><LatexRenderer latex={"\\int_{\\varepsilon}^1 \\frac{\\ln t}{(1+t)^2} dt = \\left[ -\\frac{\\ln t}{1+t} \\right]_{\\varepsilon}^1 + \\int_{\\varepsilon}^1 \\frac{1}{t(1+t)} dt."} /></div>
                <p>Comme <span className="inline-block align-middle"><LatexRenderer latex={"\\int \\frac{1}{t(1+t)} dt = \\ln t - \\ln(1+t)"} /></span>, on obtient</p>
                <div className="text-center"><LatexRenderer latex={"I(\\varepsilon) = \\frac{\\ln \\varepsilon}{1+\\varepsilon} - \\ln 2 - \\ln \\varepsilon + \\ln(1+\\varepsilon)."} /></div>
                <p>En faisant tendre <span className="inline-block align-middle"><LatexRenderer latex={"\\varepsilon \\to 0^+"} /></span>, on utilise <span className="inline-block align-middle"><LatexRenderer latex={"\\dfrac{\\ln \\varepsilon}{1+\\varepsilon} - \\ln \\varepsilon = \\ln \\varepsilon\\left(\\tfrac{1}{1+\\varepsilon}-1\\right) = -\\dfrac{\\varepsilon}{1+\\varepsilon} \\ln \\varepsilon \\to 0"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(1+\\varepsilon) \\to 0"} /></span>. Donc</p>
                <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_0^1 \\frac{\\ln t}{(1+t)^2} dt = -\\ln 2 }"} /></div>
              </div>

              <div className="p-4 bg-white rounded-lg border space-y-3">
                <p><strong>3.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} x^3 e^{-x^2} \\, dx"} /></span></p>
                <p><strong>Convergence.</strong> Au voisinage de 0, l'intégrande <span className="inline-block align-middle"><LatexRenderer latex={"\\sim x^3"} /></span> est intégrable. À l'infini, la décroissance de <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x^2}"} /></span> assure l'intégrabilité (critère de comparaison).</p>
                <p><strong>Calcul (substitution puis Gamma).</strong> Posons <span className="inline-block align-middle"><LatexRenderer latex={"u = x^2"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"du = 2x\\,dx"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"x^3 dx = x^2 (x dx) = u \\tfrac{du}{2}"} /></span>. D'où</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} x^3 e^{-x^2} dx = \\frac{1}{2} \\int_0^{+\\infty} u e^{-u} du = \\frac{1}{2}\\,\\Gamma(2) = \\frac{1}{2}."} /></div>
                <p>On peut aussi retrouver ce résultat par une intégration par parties sur <span className="inline-block align-middle"><LatexRenderer latex={"[0,M]"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"u=x^2"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dv= x e^{-x^2} dx"} /></span>, puis en laissant <span className="inline-block align-middle"><LatexRenderer latex={"M\\to+\\infty"} /></span>.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex9"
          title="Exercice 13 (♣) — Intégration par parties et convergence"
          difficulty="Difficile"
          content={
            <div className="space-y-4">
              <p>Calculer les intégrales suivantes en justifiant leur existence, en utilisant une intégration par parties :</p>
              <ol className="list-decimal list-inside space-y-3">
                
                <li>
                  <div className="text-center"><LatexRenderer latex={"\\int_0^1 \\frac{\\ln(t)}{(1 + t)^2} \\, dt"} /></div>
                </li>
                <li>
                  <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} x^3 e^{-x^2} \\, dx"} /></div>
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              
              <div className="p-4 bg-white rounded-lg border space-y-3">
                <p><strong>1.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^1 \\frac{\\ln t}{(1 + t)^2} \\, dt"} /></span></p>
                <p><strong>Convergence.</strong> Au voisinage de 0, <span className="inline-block align-middle"><LatexRenderer latex={"\\tfrac{\\ln t}{(1+t)^2} \\sim \\ln t"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^1 \\ln t \\, dt = -1"} /></span>. Pas de singularité en 1.</p>
                <p><strong>Calcul par parties sur</strong> <span className="inline-block align-middle"><LatexRenderer latex={"[\\varepsilon,1]"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\varepsilon\\in(0,1)"} /></span> : prenons <span className="inline-block align-middle"><LatexRenderer latex={"u=\\ln t"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dv=\\dfrac{dt}{(1+t)^2}"} /></span>, d'où <span className="inline-block align-middle"><LatexRenderer latex={"du=\\dfrac{dt}{t}"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"v=-\\dfrac{1}{1+t}"} /></span>. Alors</p>
                <div className="text-center"><LatexRenderer latex={"\\int_{\\varepsilon}^1 \\frac{\\ln t}{(1+t)^2} dt = \\left[ -\\frac{\\ln t}{1+t} \\right]_{\\varepsilon}^1 + \\int_{\\varepsilon}^1 \\frac{1}{t(1+t)} dt."} /></div>
                <p>Comme <span className="inline-block align-middle"><LatexRenderer latex={"\\int \\frac{1}{t(1+t)} dt = \\ln t - \\ln(1+t)"} /></span>, on obtient</p>
                <div className="text-center"><LatexRenderer latex={"I(\\varepsilon) = \\frac{\\ln \\varepsilon}{1+\\varepsilon} - \\ln 2 - \\ln \\varepsilon + \\ln(1+\\varepsilon)."} /></div>
                <p>En faisant tendre <span className="inline-block align-middle"><LatexRenderer latex={"\\varepsilon \\to 0^+"} /></span>, on utilise <span className="inline-block align-middle"><LatexRenderer latex={"\\dfrac{\\ln \\varepsilon}{1+\\varepsilon} - \\ln \\varepsilon = \\ln \\varepsilon\\left(\\tfrac{1}{1+\\varepsilon}-1\\right) = -\\dfrac{\\varepsilon}{1+\\varepsilon} \\ln \\varepsilon \\to 0"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(1+\\varepsilon) \\to 0"} /></span>. Donc</p>
                <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_0^1 \\frac{\\ln t}{(1+t)^2} dt = -\\ln 2 }"} /></div>
              </div>

              <div className="p-4 bg-white rounded-lg border space-y-3">
                <p><strong>2.</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\int_0^{+\\infty} x^3 e^{-x^2} \\, dx"} /></span></p>
                <p><strong>Convergence.</strong> Au voisinage de 0, l'intégrande <span className="inline-block align-middle"><LatexRenderer latex={"\\sim x^3"} /></span> est intégrable. À l'infini, la décroissance de <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x^2}"} /></span> assure l'intégrabilité (critère de comparaison).</p>
                <p><strong>Calcul (substitution puis Gamma).</strong> Posons <span className="inline-block align-middle"><LatexRenderer latex={"u = x^2"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"du = 2x\\,dx"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"x^3 dx = x^2 (x dx) = u \\tfrac{du}{2}"} /></span>. D'où</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} x^3 e^{-x^2} dx = \\frac{1}{2} \\int_0^{+\\infty} u e^{-u} du = \\frac{1}{2}\\,\\Gamma(2) = \\frac{1}{2}."} /></div>
                <p>On peut aussi retrouver ce résultat par une intégration par parties sur <span className="inline-block align-middle"><LatexRenderer latex={"[0,M]"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"u=x^2"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"dv= x e^{-x^2} dx"} /></span>, puis en laissant <span className="inline-block align-middle"><LatexRenderer latex={"M\\to+\\infty"} /></span>.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex13"
          title="Exercice 14 (♥) — Intégrale à paramètre avec changement de variable"
          difficulty="Difficile"
          content={
            <div className="space-y-4">
              <p>Soit <span className="inline-block align-middle"><LatexRenderer latex={"n \\in \\mathbb{N}"} /></span>. On pose :</p>
              <div className="text-center">
                <LatexRenderer latex={"I_n = \\int_1^{+\\infty} \\frac{(x - 1)^n}{x^{n+2}} \\, dx"} />
              </div>
              <ol className="list-decimal list-inside space-y-3">
                <li>Montrer que l'intégrale <span className="inline-block align-middle"><LatexRenderer latex={"I_n"} /></span> converge.</li>
                <li>En procédant au changement de variable <span className="inline-block align-middle"><LatexRenderer latex={"t = \\frac{1}{x}"} /></span>, calculer <span className="inline-block align-middle"><LatexRenderer latex={"I_n"} /></span>.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-lg border">
                <p><strong>1. Convergence</strong></p>
                <p>La fonction <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\dfrac{(x - 1)^n}{x^{n+2}}"} /></span> est continue sur <span className="inline-block align-middle"><LatexRenderer latex={"[1, +\\infty["} /></span>. Pour <span className="inline-block align-middle"><LatexRenderer latex={"x \\to +\\infty"} /></span> :</p>
                <div className="text-center"><LatexRenderer latex={"\\frac{(x - 1)^n}{x^{n+2}} \\sim \\frac{x^n}{x^{n+2}} = \\frac{1}{x^2}"} /></div>
                <p>Or, <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{1}{x^2} dx"} /></span> converge. Donc, par comparaison, <span className="inline-block align-middle"><LatexRenderer latex={"I_n"} /></span> converge.</p>
              </div>

              <div className="p-4 bg-white rounded-lg border">
                <p><strong>2. Changement de variable</strong> <span className="inline-block align-middle"><LatexRenderer latex={"t = \\frac{1}{x}"} /></span></p>
                <p>On pose <span className="inline-block align-middle"><LatexRenderer latex={"x = \\frac{1}{t}, \\quad dx = -\\frac{1}{t^2} dt"} /></span>. L'intégrale devient :</p>
                <div className="text-center"><LatexRenderer latex={"I_n = \\int_0^1 (1 - t)^n t^n dt"} /></div>
                <p>Cette intégrale donne :</p>
                <div className="text-center"><LatexRenderer latex={"\\boxed{ I_n = \\frac{1}{(n + 1)^2} }"} /></div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex-cubic"
          title="Exercice 15 — Intégrale impropre et décomposition en éléments simples"
          difficulty="Difficile"
          content={
            <div className="space-y-4">
              <p>On considère l'intégrale :</p>
              <div className="text-center">
                <LatexRenderer latex={"I = \\int_0^{+\\infty} \\frac{t - 1}{t^3 + 1} \\, dt"} />
              </div>
              <ol className="list-decimal list-inside space-y-3">
                <li>Montrer que cette intégrale converge.</li>
                <li>Trouver trois réels <span className="inline-block align-middle"><LatexRenderer latex={"a, b, c"} /></span> tels que :</li>
                <div className="text-center ml-6">
                  <LatexRenderer latex={"\\frac{t - 1}{t^3 + 1} = \\frac{a}{t + 1} + \\frac{b t + c}{t^2 - t + 1}"} />
                </div>
                <li>En déduire la valeur de l'intégrale <span className="inline-block align-middle"><LatexRenderer latex={"I"} /></span>.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-lg border">
                <p><strong>1. Convergence</strong></p>
                <p>On note que <span className="inline-block align-middle"><LatexRenderer latex={"\\dfrac{t - 1}{t^3 + 1}"} /></span> est continue sur <span className="inline-block align-middle"><LatexRenderer latex={"[0, +\\infty["} /></span>.</p>
                <p>Pour <span className="inline-block align-middle"><LatexRenderer latex={"t \\to +\\infty"} /></span>, on a :</p>
                <div className="text-center"><LatexRenderer latex={"\\frac{t - 1}{t^3 + 1} \\sim \\frac{t}{t^3} = \\frac{1}{t^2}"} /></div>
                <p>Et comme <span className="inline-block align-middle"><LatexRenderer latex={"\\int_1^{+\\infty} \\frac{1}{t^2} dt"} /></span> converge, l'intégrale converge sur <span className="inline-block align-middle"><LatexRenderer latex={"[1, +\\infty["} /></span>. Sur <span className="inline-block align-middle"><LatexRenderer latex={"[0,1]"} /></span>, la fonction est continue, donc <span className="inline-block align-middle"><LatexRenderer latex={"I"} /></span> converge sur tout <span className="inline-block align-middle"><LatexRenderer latex={"[0, +\\infty["} /></span>.</p>
              </div>

              <div className="p-4 bg-white rounded-lg border">
                <p><strong>2. Décomposition en éléments simples</strong></p>
                <p>On factorise :</p>
                <div className="text-center"><LatexRenderer latex={"t^3 + 1 = (t + 1)(t^2 - t + 1)"} /></div>
                <p>Par identification avec <span className="inline-block align-middle"><LatexRenderer latex={"t - 1 \\Rightarrow 0 t^2 + 1 t - 1"} /></span> :</p>
                <div className="text-center"><LatexRenderer latex={"a = \\frac{2}{3},\\quad b = -\\frac{2}{3},\\quad c = -\\frac{1}{3}"} /></div>
              </div>

              <div className="p-4 bg-white rounded-lg border">
                <p><strong>3. Calcul de l'intégrale</strong></p>
                <p>On a :</p>
                <div className="text-center"><LatexRenderer latex={"\\int_0^{+\\infty} \\frac{t - 1}{t^3 + 1} dt = \\int_0^{+\\infty} \\left( \\frac{2}{3(t + 1)} - \\frac{2t + 1}{3(t^2 - t + 1)} \\right) dt"} /></div>
                <p>Le calcul complet donne :</p>
                <div className="text-center"><LatexRenderer latex={"\\boxed{ \\int_0^{+\\infty} \\frac{t - 1}{t^3 + 1} dt = 0 }"} /></div>
              </div>
            </div>
          }
        />

        <div className="mt-10">
          <Link to="/formation/maths-approfondies" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
            <ChevronRight className="h-4 w-4" />
              Retourner aux chapitres
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Chapitre15IntegralesImpropresEtCriteresExercicesPage;
