import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
} from 'lucide-react';

type Difficulty = 'Facile' | 'Moyen' | 'Difficile';

interface ExerciseProps {
  id: string;
  num: number;
  title: string;
  difficulty: Difficulty;
  open: boolean;
  onToggle: () => void;
  statement: React.ReactNode;
  correction: React.ReactNode;
  tilt?: 'l' | 'r' | '';
}

const Exercise: React.FC<ExerciseProps> = ({ id, num, title, difficulty, open, onToggle, statement, correction, tilt = '' }) => {
  const tiltClass = tilt === 'l' ? 'carnet-tilt-l' : tilt === 'r' ? 'carnet-tilt-r' : '';

  return (
    <article id={id} className={`carnet-card p-7 sm:p-9 mb-8 ${tiltClass}`}>
      <header className="flex items-start sm:items-center justify-between gap-4 mb-5 flex-wrap">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="carnet-hand text-[36px] sm:text-[40px] text-carnet-red leading-none font-semibold flex-shrink-0">
            {String(num).padStart(2, '0')}
          </span>
          <hr className="flex-shrink-0 w-8 h-0.5 bg-carnet-ink border-0 mt-2 hidden sm:block" />
          <h3 className="font-lora text-[20px] sm:text-[22px] text-carnet-ink leading-tight">
            {title}
          </h3>
        </div>
        <span className={`font-instrument text-[11px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border ${
          difficulty === 'Facile'
            ? 'border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2'
            : difficulty === 'Moyen'
              ? 'border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]'
              : 'border-carnet-red text-carnet-paper bg-carnet-red'
        }`}>
          {difficulty}
        </span>
      </header>

      <div className="font-instrument text-[15.5px] text-carnet-ink leading-[1.75] space-y-3 mb-6">
        {statement}
      </div>

      <Button
        onClick={onToggle}
        variant="outline"
        className="border-[rgba(78,55,30,0.25)] text-carnet-ink hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-5 text-[13px] bg-transparent"
      >
        {open ? <><EyeOff className="mr-2 h-3.5 w-3.5" /> Masquer la correction</> : <><Eye className="mr-2 h-3.5 w-3.5" /> Afficher la correction</>}
      </Button>

      {open && (
        <div className="mt-6 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.25)] border-l-2 border-l-carnet-red rounded-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-4 w-4 text-carnet-red" />
            <span className="carnet-eyebrow">Corrigé détaillé</span>
          </div>
          <div className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.8] space-y-3">
            {correction}
          </div>
        </div>
      )}
    </article>
  );
};

const Step: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div>
    <div className="font-instrument text-[11.5px] uppercase tracking-[0.14em] text-carnet-red font-semibold mb-2">{label}</div>
    <div className="space-y-2">{children}</div>
  </div>
);

const Inline: React.FC<{ tex: string }> = ({ tex }) => (
  <span className="inline-block align-middle"><LatexRenderer latex={tex} /></span>
);

const Block: React.FC<{ tex: string }> = ({ tex }) => (
  <div className="my-2 text-center">
    <LatexRenderer latex={tex} />
  </div>
);

const Chapitre1CalculsExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/calculs-exercices"
        title="Exercices · Chapitre 1 — Calculs · Terminale → Prépa ECG"
        description="21 exercices progressifs sur le calcul algébrique : puissances, trinômes, fractions, racines, valeur absolue, exponentielle et logarithme."
      />

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] px-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-carnet-red transition-colors">
              Terminale → Prépa
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 1 · Calculs</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">01 · Exercices · Calculs</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Vingt et un calculs <em className="font-lora italic text-carnet-red">à dompter</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Puissances, trinômes, fractions, racines, exponentielle, logarithme. <span className="carnet-hl font-lora italic">Pose chaque calcul</span>, factorise, vérifie les conditions d'existence — automatismes obligatoires avant la prépa.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              6 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              13 Moyens
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-carnet-red text-carnet-paper bg-carnet-red">
              2 Difficiles
            </span>
          </div>
        </header>

        {/* Module 1 */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M1</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Puissances — règles & simplifications</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Simplifier une expression à puissances"
          difficulty="Facile"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>Simplifier <Inline tex={'A'} /> en faisant disparaître les barres de fractions :</p>
              <Block tex={'A = \\frac{a^4 \\times \\left( \\frac{b}{a} \\right)}{a^6 b^3} \\div \\bigl( a^7 b^{-5} \\bigr)^4 \\times \\frac{a^{-3} b^8}{a^5 b^{10}}.'} />
              <p>(avec <Inline tex={'(a, b) \\in (\\mathbb{R}^*)^2'} />)</p>
            </>
          }
          correction={
            <>
              <Step label="Réécrire les termes ambigus">
                <p><Inline tex={'\\frac{b}{a} = b \\cdot a^{-1}'} /> et <Inline tex={'(a^7 b^{-5})^4 = a^{28} b^{-20}'} />.</p>
              </Step>
              <Step label="Transformer la division en multiplication">
                <Block tex={'A = \\frac{a^4 \\cdot b \\cdot a^{-1}}{a^6 b^3} \\cdot \\frac{1}{a^{28} b^{-20}} \\cdot \\frac{a^{-3} b^8}{a^5 b^{10}}.'} />
              </Step>
              <Step label="Regrouper les exposants">
                <Block tex={'A = a^{4 - 1 - 6 - 28 - 3 - 5} \\cdot b^{1 - 3 + 20 + 8 - 10} = a^{-39} b^{16}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Puissances de 2"
          difficulty="Moyen"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Exprimer sous forme de puissance de 2 :</p>
              <Block tex={'A = \\frac{8^7 \\times (0{,}5)^4}{2^{-6} \\times 4^3 \\times 16^{1/2}}.'} />
            </>
          }
          correction={
            <>
              <Step label="Tout convertir en puissance de 2">
                <p><Inline tex={'8 = 2^3,\\ 0{,}5 = 2^{-1},\\ 4 = 2^2,\\ 16 = 2^4'} />.</p>
                <Block tex={'A = \\frac{(2^3)^7 \\cdot (2^{-1})^4}{2^{-6} \\cdot (2^2)^3 \\cdot (2^4)^{1/2}} = \\frac{2^{21} \\cdot 2^{-4}}{2^{-6} \\cdot 2^6 \\cdot 2^2}.'} />
              </Step>
              <Step label="Simplifier les exposants">
                <Block tex={'A = \\frac{2^{17}}{2^2} = 2^{15}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 12 */}
        <Exercise
          id="ex12"
          num={12}
          title="Comparer deux puissances"
          difficulty="Facile"
          open={!!open.ex12}
          onToggle={() => toggle('ex12')}
          tilt="r"
          statement={
            <>
              <p>Sans calculatrice, déterminer lequel est le plus grand : <Inline tex={'2^{30}'} /> ou <Inline tex={'3^{20}'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Ramener au même exposant">
                <p>On réécrit les deux expressions avec l'exposant 10 :</p>
                <Block tex={'2^{30} = (2^3)^{10} = 8^{10}, \\quad 3^{20} = (3^2)^{10} = 9^{10}.'} />
              </Step>
              <Step label="Comparer les bases">
                <p>Comme <Inline tex={'8 < 9'} /> et <Inline tex={'x \\mapsto x^{10}'} /> est croissante sur <Inline tex={'\\mathbb{R}_+'} /> :</p>
                <Block tex={'8^{10} < 9^{10}, \\quad \\text{soit} \\quad 2^{30} < 3^{20}.'} />
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Trinômes & équations polynomiales</h2>
        </div>

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Factoriser un trinôme"
          difficulty="Facile"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="l"
          statement={
            <>
              <p>Factoriser le trinôme <Inline tex={'-2x^2 + 4x + 6'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Discriminant">
                <Block tex={'\\Delta = 4^2 - 4 \\cdot (-2) \\cdot 6 = 16 + 48 = 64 = 8^2 > 0.'} />
              </Step>
              <Step label="Racines">
                <p><Inline tex={'x_1 = -1'} /> et <Inline tex={'x_2 = 3'} />.</p>
              </Step>
              <Step label="Forme factorisée">
                <Block tex={'-2x^2 + 4x + 6 = -2(x + 1)(x - 3).'} />
              </Step>
            </>
          }
        />

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Inéquation du second degré"
          difficulty="Facile"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          statement={
            <>
              <p>Pour quelles valeurs de <Inline tex={'x'} /> a-t-on <Inline tex={'-2x^2 + 4x + 6 \\geq 0'} /> ?</p>
            </>
          }
          correction={
            <>
              <Step label="Rappel des racines">
                <p>D'après l'exercice précédent, <Inline tex={'\\Delta = 64 > 0'} />, racines <Inline tex={'-1'} /> et <Inline tex={'3'} />.</p>
              </Step>
              <Step label="Signe du trinôme">
                <p>Le trinôme est du signe de <Inline tex={'a = -2'} /> à l'extérieur des racines, et du signe opposé entre les racines :</p>
                <p>• Strictement négatif sur <Inline tex={'\\,]-\\infty, -1[\\, \\cup \\,]3, +\\infty[\\,'} /> ;</p>
                <p>• Strictement positif sur <Inline tex={'\\,]-1, 3[\\,'} /> ;</p>
                <p>• Nul en <Inline tex={'-1'} /> et <Inline tex={'3'} />.</p>
              </Step>
              <Step label="Conclusion">
                <Block tex={'-2x^2 + 4x + 6 \\geq 0 \\;\\Longleftrightarrow\\; x \\in [-1, 3].'} />
              </Step>
            </>
          }
        />

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Équation bicarrée"
          difficulty="Moyen"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          tilt="r"
          statement={
            <>
              <p>Résoudre <Inline tex={'(E_1) : 3x^4 + 5x^2 - 2 = 0'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Changement de variable X = x²">
                <Block tex={'3X^2 + 5X - 2 = 0.'} />
              </Step>
              <Step label="Trinôme en X">
                <p><Inline tex={'\\Delta = 25 + 24 = 49'} />, donc <Inline tex={'X_1 = \\tfrac{-12}{6} = -2'} /> et <Inline tex={'X_2 = \\tfrac{2}{6} = \\tfrac{1}{3}'} />.</p>
              </Step>
              <Step label="Retour à x">
                <p>• <Inline tex={'x^2 = -2'} /> : pas de solution réelle.</p>
                <p>• <Inline tex={'x^2 = \\tfrac{1}{3}'} /> : <Inline tex={'x = \\pm \\tfrac{1}{\\sqrt{3}}'} />.</p>
              </Step>
              <Step label="Conclusion">
                <Block tex={'S = \\left\\{-\\tfrac{1}{\\sqrt{3}},\\ \\tfrac{1}{\\sqrt{3}}\\right\\}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 13 */}
        <Exercise
          id="ex13"
          num={13}
          title="Factoriser par une racine évidente"
          difficulty="Moyen"
          open={!!open.ex13}
          onToggle={() => toggle('ex13')}
          tilt="l"
          statement={
            <>
              <p>On pose <Inline tex={'P(x) = 2x^3 - x^2 - 5x - 2'} />.</p>
              <p>Vérifier que <Inline tex={'x = -1'} /> est racine de <Inline tex={'P'} />, puis factoriser complètement <Inline tex={'P(x)'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Vérification de la racine">
                <Block tex={'P(-1) = 2(-1)^3 - (-1)^2 - 5(-1) - 2 = -2 - 1 + 5 - 2 = 0. \\quad \\checkmark'} />
              </Step>
              <Step label="Division euclidienne par (x + 1)">
                <p>On effectue la division de <Inline tex={'P(x)'} /> par <Inline tex={'(x+1)'} /> :</p>
                <Block tex={'2x^3 - x^2 - 5x - 2 = (x + 1)(2x^2 - 3x - 2).'} />
              </Step>
              <Step label="Factorisation du trinôme résiduel">
                <p><Inline tex={'\\Delta = 9 + 16 = 25'} />, donc <Inline tex={'x = 2'} /> et <Inline tex={'x = -\\tfrac{1}{2}'} />. D'où :</p>
                <Block tex={'P(x) = (x + 1)(x - 2)(2x + 1).'} />
              </Step>
            </>
          }
        />

        {/* Exercice 14 */}
        <Exercise
          id="ex14"
          num={14}
          title="Racine double"
          difficulty="Facile"
          open={!!open.ex14}
          onToggle={() => toggle('ex14')}
          statement={
            <>
              <p>Résoudre <Inline tex={'(E) : 4x^2 - 12x + 9 = 0'} /> et donner la forme factorisée de <Inline tex={'4x^2 - 12x + 9'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Calcul du discriminant">
                <Block tex={'\\Delta = (-12)^2 - 4 \\times 4 \\times 9 = 144 - 144 = 0.'} />
              </Step>
              <Step label="Racine double">
                <p>Le discriminant est nul : unique racine <Inline tex={'x_0 = \\dfrac{12}{8} = \\dfrac{3}{2}'} />.</p>
              </Step>
              <Step label="Forme factorisée">
                <Block tex={'4x^2 - 12x + 9 = 4\\left(x - \\tfrac{3}{2}\\right)^{2} = (2x - 3)^2.'} />
              </Step>
            </>
          }
        />

        {/* Module 3 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Fractions, racines & inégalités</h2>
        </div>

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Inéquation rationnelle"
          difficulty="Moyen"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          tilt="l"
          statement={
            <>
              <p>Résoudre <Inline tex={'(I_1) : \\dfrac{x}{x+1} \\leq \\dfrac{x+1}{x-1}'} />.</p>
              <p className="text-carnet-ink-mute italic text-[14px]">Le produit en croix est interdit ici : on ne connaît pas le signe des dénominateurs.</p>
            </>
          }
          correction={
            <>
              <Step label="Tout passer dans un membre & réduire">
                <Block tex={'(I_1) \\Longleftrightarrow \\frac{x(x-1) - (x+1)^2}{(x-1)(x+1)} \\leq 0 \\Longleftrightarrow \\frac{-3x - 1}{(x-1)(x+1)} \\leq 0.'} />
              </Step>
              <Step label="Tableau de signes">
                <div className="overflow-x-auto">
                  <table className="border-collapse border border-[rgba(78,55,30,0.35)] text-center text-[13px] mx-auto">
                    <tbody>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'x'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'-\\infty'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'-1'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'-1/3'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'1'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'+\\infty'} /></td>
                      </tr>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'-3x-1'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">0</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">−</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">−</td>
                      </tr>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'x-1'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">−</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">−</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">−</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">0</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                      </tr>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'x+1'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">−</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">0</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                      </tr>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'\\tfrac{-3x-1}{(x-1)(x+1)}'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">‖</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">0</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">‖</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">−</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Les double-barres en <Inline tex={'-1'} /> et <Inline tex={'1'} /> rappellent que le dénominateur s'y annule.</p>
              </Step>
              <Step label="Conclusion">
                <Block tex={'S = \\left[ -1, -\\tfrac{1}{3} \\right] \\cup \\left] 1, +\\infty \\right[.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Racine d'un polynôme à 4 termes"
          difficulty="Difficile"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          statement={
            <>
              <p>Simplifier <Inline tex={'B = \\sqrt{-16yx^2 + 4x^4 + 16y^2 - 4x^2}'} /> en faisant disparaître le symbole <Inline tex={'\\sqrt{\\;}'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Faire apparaître un carré sous la racine">
                <Block tex={'B = \\sqrt{(2x^2)^2 - 2 \\cdot (2x^2)(4y) + (4y)^2} - 4x^2 = \\sqrt{(2x^2 - 4y)^2} - 4x^2.'} />
              </Step>
              <Step label="Règle √(a²) = |a|">
                <Block tex={'B = |2x^2 - 4y| - 4x^2.'} />
              </Step>
              <Step label="Distinction de cas">
                <p>• Si <Inline tex={'2x^2 - 4y \\leq 0'} /> : <Inline tex={'B = -(2x^2 - 4y) - 4x^2 = 4y - 6x^2'} />.</p>
                <p>• Si <Inline tex={'2x^2 - 4y > 0'} /> : <Inline tex={'B = (2x^2 - 4y) - 4x^2 = -2x^2 - 4y'} />.</p>
              </Step>
              <Step label="À retenir">
                <p>Pour faire disparaître <Inline tex={'\\sqrt{\\;}'} /> : faire apparaître un carré, puis <Inline tex={'\\sqrt{a^2} = |a|'} />, puis distinguer les cas selon le signe.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 8 */}
        <Exercise
          id="ex8"
          num={8}
          title="Quantité conjuguée au dénominateur"
          difficulty="Difficile"
          open={!!open.ex8}
          onToggle={() => toggle('ex8')}
          tilt="r"
          statement={
            <>
              <p>Simplifier <Inline tex={'C = \\dfrac{1}{\\sqrt{x^3 - 2} + \\sqrt{x^2 + 1}}'} /> en faisant disparaître le <Inline tex={'\\sqrt{\\;}'} /> du dénominateur.</p>
            </>
          }
          correction={
            <>
              <Step label="Multiplier par la quantité conjuguée">
                <Block tex={'C = \\frac{1}{\\sqrt{x^3 - 2} + \\sqrt{x^2 + 1}} \\cdot \\frac{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}.'} />
              </Step>
              <Step label="Identité (a − b)(a + b) = a² − b²">
                <Block tex={'C = \\frac{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}{(x^3 - 2) - (x^2 + 1)} = \\frac{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}{x^3 - x^2 - 3}.'} />
              </Step>
              <Step label="À retenir">
                <p>Pour supprimer une <em>somme</em> ou <em>différence</em> de racines au dénominateur, on multiplie par la quantité conjuguée — attention aux signes en supprimant les parenthèses.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 15 */}
        <Exercise
          id="ex15"
          num={15}
          title="Inéquation avec valeur absolue"
          difficulty="Moyen"
          open={!!open.ex15}
          onToggle={() => toggle('ex15')}
          tilt="l"
          statement={
            <>
              <p>Résoudre <Inline tex={'(I_2) : |2x - 3| \\leq x + 1'} />.</p>
              <p className="text-carnet-ink-mute italic text-[14px]">Rappel : <Inline tex={'|a| \\leq b \\Leftrightarrow -b \\leq a \\leq b'} /> pour <Inline tex={'b \\geq 0'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Condition préalable">
                <p>La borne droite doit être positive : <Inline tex={'x + 1 \\geq 0'} />, donc <Inline tex={'x \\geq -1'} />.</p>
              </Step>
              <Step label="Lever la valeur absolue">
                <Block tex={'|2x - 3| \\leq x + 1 \\Longleftrightarrow -(x+1) \\leq 2x - 3 \\leq x + 1.'} />
                <p>Inégalité gauche : <Inline tex={'-x - 1 \\leq 2x - 3 \\Leftrightarrow 2 \\leq 3x \\Leftrightarrow x \\geq \\tfrac{2}{3}'} />.</p>
                <p>Inégalité droite : <Inline tex={'2x - 3 \\leq x + 1 \\Leftrightarrow x \\leq 4'} />.</p>
              </Step>
              <Step label="Intersection des conditions">
                <p>On intersecte <Inline tex={'x \\geq -1'} />, <Inline tex={'x \\geq \\tfrac{2}{3}'} /> et <Inline tex={'x \\leq 4'} /> :</p>
                <Block tex={'S = \\left[\\tfrac{2}{3},\\; 4\\right].'} />
              </Step>
            </>
          }
        />

        {/* Module 4 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M4</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Exponentielle, racine & logarithme</h2>
        </div>

        {/* Exercice 9 */}
        <Exercise
          id="ex9"
          num={9}
          title="Équation avec exponentielle"
          difficulty="Moyen"
          open={!!open.ex9}
          onToggle={() => toggle('ex9')}
          tilt="l"
          statement={
            <>
              <p>Résoudre <Inline tex={'(E_2) : e^x + e^{-x} = 2'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Mettre au même dénominateur">
                <Block tex={'(E_2) \\Longleftrightarrow \\frac{(e^x)^2 - 2 e^x + 1}{e^x} = 0.'} />
              </Step>
              <Step label="Identité remarquable">
                <Block tex={'\\frac{(e^x - 1)^2}{e^x} = 0 \\Longleftrightarrow e^x = 1 \\Longleftrightarrow x = 0.'} />
              </Step>
              <Step label="Conclusion">
                <p><Inline tex={'S = \\{0\\}'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 10 */}
        <Exercise
          id="ex10"
          num={10}
          title="Équation avec racine carrée"
          difficulty="Moyen"
          open={!!open.ex10}
          onToggle={() => toggle('ex10')}
          statement={
            <>
              <p>Résoudre <Inline tex={'(E_3) : x = \\sqrt{x + 2}'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Conditions d'existence">
                <p>L'équation impose <Inline tex={'x + 2 \\geq 0'} />, et puisque <Inline tex={'\\sqrt{x+2} \\geq 0'} />, on doit avoir <Inline tex={'x \\geq 0'} />.</p>
              </Step>
              <Step label="Élévation au carré">
                <p>Pour <Inline tex={'x \\geq 0'} />, <Inline tex={'x = \\sqrt{x+2} \\Longleftrightarrow x^2 = x + 2'} />, soit :</p>
                <Block tex={'x^2 - x - 2 = 0 \\Longleftrightarrow (x-2)(x+1) = 0.'} />
              </Step>
              <Step label="Filtrage selon les conditions">
                <p>• <Inline tex={'x = -1'} /> : exclu car <Inline tex={'x \\geq 0'} />.</p>
                <p>• <Inline tex={'x = 2'} /> : convient ; vérification <Inline tex={'\\sqrt{2 + 2} = 2'} />. ✓</p>
                <Block tex={'S = \\{2\\}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 11 */}
        <Exercise
          id="ex11"
          num={11}
          title="Équation avec logarithme"
          difficulty="Moyen"
          open={!!open.ex11}
          onToggle={() => toggle('ex11')}
          tilt="r"
          statement={
            <>
              <p>Résoudre <Inline tex={'(E_4) : \\ln(x + 3) + \\ln(x - 1) = 2 \\ln 2'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Conditions d'existence">
                <p><Inline tex={'x + 3 > 0'} /> et <Inline tex={'x - 1 > 0'} />, donc <Inline tex={'x > 1'} />.</p>
              </Step>
              <Step label="Propriétés du logarithme">
                <p><Inline tex={'\\ln(x+3) + \\ln(x-1) = \\ln\\bigl((x+3)(x-1)\\bigr)'} /> et <Inline tex={'2 \\ln 2 = \\ln 4'} />, donc :</p>
                <Block tex={'(x + 3)(x - 1) = 4 \\Longleftrightarrow x^2 + 2x - 7 = 0.'} />
              </Step>
              <Step label="Trinôme">
                <p><Inline tex={'\\Delta = 4 + 28 = 32'} />, racines :</p>
                <Block tex={'x_1 = -1 - 2\\sqrt{2}, \\quad x_2 = -1 + 2\\sqrt{2}.'} />
              </Step>
              <Step label="Vérification de la condition x > 1">
                <p>• <Inline tex={'x_1 = -1 - 2\\sqrt{2} < 0'} /> : ne convient pas.</p>
                <p>• <Inline tex={'x_2 = -1 + 2\\sqrt{2} \\approx 1{,}83 > 1'} /> : convient.</p>
                <Block tex={'S = \\{-1 + 2\\sqrt{2}\\}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 16 */}
        <Exercise
          id="ex16"
          num={16}
          title="Équation exponentielle — changement de variable"
          difficulty="Moyen"
          open={!!open.ex16}
          onToggle={() => toggle('ex16')}
          tilt="r"
          statement={
            <>
              <p>Résoudre <Inline tex={'(E_5) : e^{2x} - 3e^x + 2 = 0'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Changement de variable">
                <p>On pose <Inline tex={'X = e^x > 0'} />. Comme <Inline tex={'e^{2x} = (e^x)^2 = X^2'} />, l'équation devient :</p>
                <Block tex={'X^2 - 3X + 2 = 0, \\quad X > 0.'} />
              </Step>
              <Step label="Discriminant et racines">
                <p><Inline tex={'\\Delta = 9 - 8 = 1'} />, donc <Inline tex={'X_1 = 1'} /> et <Inline tex={'X_2 = 2'} />. Les deux sont strictement positives.</p>
              </Step>
              <Step label="Retour à x">
                <p>• <Inline tex={'e^x = 1 \\Leftrightarrow x = 0'} />.</p>
                <p>• <Inline tex={'e^x = 2 \\Leftrightarrow x = \\ln 2'} />.</p>
                <Block tex={'S = \\{0,\\; \\ln 2\\}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 17 */}
        <Exercise
          id="ex17"
          num={17}
          title="Équation logarithmique"
          difficulty="Moyen"
          open={!!open.ex17}
          onToggle={() => toggle('ex17')}
          tilt="l"
          statement={
            <>
              <p>Résoudre <Inline tex={'(E_6) : \\ln x + \\ln(x + 1) = \\ln 6'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Conditions d'existence">
                <p><Inline tex={'x > 0'} /> et <Inline tex={'x + 1 > 0'} />, donc <Inline tex={'x > 0'} />.</p>
              </Step>
              <Step label="Propriété du logarithme">
                <Block tex={'\\ln x + \\ln(x+1) = \\ln\\bigl(x(x+1)\\bigr) = \\ln 6 \\Longleftrightarrow x(x+1) = 6.'} />
              </Step>
              <Step label="Équation du second degré">
                <Block tex={'x^2 + x - 6 = 0 \\Longleftrightarrow (x - 2)(x + 3) = 0.'} />
                <p>Racines : <Inline tex={'x = 2'} /> ou <Inline tex={'x = -3'} />.</p>
              </Step>
              <Step label="Vérification des conditions">
                <p>• <Inline tex={'x = -3'} /> : ne vérifie pas <Inline tex={'x > 0'} />. Exclu.</p>
                <p>• <Inline tex={'x = 2 > 0'} /> : convient.</p>
                <Block tex={'S = \\{2\\}.'} />
              </Step>
            </>
          }
        />

          {/* Module M5 — Calculs avancés */}
          <div className="mb-2 mt-10">
            <span className="inline-block bg-carnet-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              M5 — Calculs avancés
            </span>
          </div>

          <Exercise
            id="ex18"
            num={18}
            title="Développement et simplification"
            difficulty="Facile"
            open={!!open.ex18}
            onToggle={() => toggle('ex18')}
            tilt="l"
            statement={
              <>
                <p>Développer et réduire l'expression :</p>
                <Block tex={'E = (x+3)^2 - (x-1)(x+1)'} />
              </>
            }
            correction={
              <>
                <Step label="Développement de chaque terme">
                  <p>On développe séparément :</p>
                  <Block tex={'(x+3)^2 = x^2 + 6x + 9'} />
                  <Block tex={'(x-1)(x+1) = x^2 - 1 \\quad \\text{(identité remarquable)}'} />
                </Step>
                <Step label="Calcul final">
                  <Block tex={'E = x^2 + 6x + 9 - (x^2 - 1) = x^2 + 6x + 9 - x^2 + 1'} />
                  <Block tex={'\\boxed{E = 6x + 10}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex19"
            num={19}
            title="Résoudre une équation du second degré"
            difficulty="Moyen"
            open={!!open.ex19}
            onToggle={() => toggle('ex19')}
            statement={
              <>
                <p>Résoudre l'équation :</p>
                <Block tex={'x^2 - 5x + 6 = 0'} />
              </>
            }
            correction={
              <>
                <Step label="Calcul du discriminant">
                  <Block tex={'\\Delta = b^2 - 4ac = 25 - 24 = 1 > 0'} />
                  <p>Le discriminant est strictement positif, donc deux solutions distinctes.</p>
                </Step>
                <Step label="Solutions">
                  <Block tex={'x_1 = \\frac{5 - 1}{2} = 2 \\qquad x_2 = \\frac{5 + 1}{2} = 3'} />
                  <p>On peut vérifier par factorisation :</p>
                  <Block tex={'x^2 - 5x + 6 = (x-2)(x-3)'} />
                  <Block tex={'\\boxed{\\mathcal{S} = \\{2,\\, 3\\}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex20"
            num={20}
            title="Rationaliser une fraction"
            difficulty="Moyen"
            open={!!open.ex20}
            onToggle={() => toggle('ex20')}
            tilt="r"
            statement={
              <>
                <p>Simplifier l'expression en éliminant le radical au dénominateur :</p>
                <Block tex={'A = \\frac{\\sqrt{3}+1}{\\sqrt{3}-1}'} />
              </>
            }
            correction={
              <>
                <Step label="Rationalisation par l'expression conjuguée">
                  <p>On multiplie numérateur et dénominateur par <Inline tex={'\\sqrt{3}+1'} /> :</p>
                  <Block tex={'A = \\frac{(\\sqrt{3}+1)^2}{(\\sqrt{3}-1)(\\sqrt{3}+1)} = \\frac{3 + 2\\sqrt{3} + 1}{3 - 1} = \\frac{4 + 2\\sqrt{3}}{2}'} />
                </Step>
                <Step label="Résultat">
                  <Block tex={'\\boxed{A = 2 + \\sqrt{3}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex21"
            num={21}
            title="Équation exponentielle — résolution par logarithme"
            difficulty="Moyen"
            open={!!open.ex21}
            onToggle={() => toggle('ex21')}
            statement={
              <>
                <p>Résoudre l'équation :</p>
                <Block tex={'2^x = 5'} />
                <p>Donner la solution sous forme exacte, puis une valeur approchée à <Inline tex={'10^{-2}'} /> près.</p>
              </>
            }
            correction={
              <>
                <Step label="Application du logarithme">
                  <p>On applique le logarithme naturel (bijectif et croissant sur <Inline tex={'\\mathbb{R}_{+}^*'} />) :</p>
                  <Block tex={'\\ln(2^x) = \\ln 5 \\implies x \\ln 2 = \\ln 5'} />
                </Step>
                <Step label="Solution exacte et valeur approchée">
                  <Block tex={'\\boxed{x = \\frac{\\ln 5}{\\ln 2} \\approx 2{,}32}'} />
                  <p>Vérification : <Inline tex={'2^{\\ln 5 / \\ln 2} = e^{(\\ln 5 / \\ln 2) \\cdot \\ln 2} = e^{\\ln 5} = 5'} />.</p>
                </Step>
              </>
            }
          />

        {/* Bandeau récap */}
        <section className="mt-14 mb-10 relative">
          <div className="bg-carnet-ink rounded-lg p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="relative z-10">
              <span className="carnet-eyebrow text-carnet-red">Récap · Les 5 réflexes</span>
              <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-paper leading-[1.2] mb-5 mt-3">
                Avant chaque calcul, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> Je note les <em>conditions d'existence</em> avant tout calcul (dénominateurs, racines, logs).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Pour les puissances : je convertis tout dans la même base, puis je regroupe les exposants.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Pour une inéquation rationnelle : <em>jamais</em> de produit en croix sans connaître le signe — passer par un tableau de signes.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Pour une racine au dénominateur : multiplier par la quantité conjuguée.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Je vérifie systématiquement que mes solutions respectent les conditions d'existence.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/calculs-cours"
            className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour au cours
          </Link>
          <Link
            to="/formation/math/terminale-vers-prepa"
            className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
          >
            Tous les chapitres
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapitre1CalculsExercicesPage;
