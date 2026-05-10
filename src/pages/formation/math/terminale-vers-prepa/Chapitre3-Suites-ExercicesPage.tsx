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

const Chapitre3SuitesExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/suites-exercices"
        title="Exercices · Chapitre 3 — Suites · Terminale → Prépa ECG"
        description="15 exercices progressifs sur les suites : arithmétiques, géométriques, monotonie, convergence et techniques avancées."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 3 · Suites</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">03 · Exercices · Suites</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Quinze suites <em className="font-lora italic text-carnet-red">à apprivoiser</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Suite arithmétique, géométrique, récurrente, somme télescopique. <span className="carnet-hl font-lora italic">Pose les premiers termes</span>, étudie la monotonie, conclus sur la convergence.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              6 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              7 Moyens
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
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Suites arithmétiques & géométriques</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Suite arithmétique"
          difficulty="Facile"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'(u_n)'} /> la suite arithmétique de premier terme <Inline tex={'u_0 = 3'} /> et de raison <Inline tex={'r = 5'} />.</p>
              <p><strong>a)</strong> Exprimer <Inline tex={'u_n'} /> en fonction de <Inline tex={'n'} />.</p>
              <p><strong>b)</strong> Calculer <Inline tex={'u_{10}'} /> et <Inline tex={'u_{20}'} />.</p>
              <p><strong>c)</strong> Calculer la somme <Inline tex={'S = u_0 + u_1 + \\cdots + u_{10}'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Expression générale">
                <p>Pour une suite arithmétique : <Inline tex={'u_n = u_0 + n r'} />. Donc :</p>
                <Block tex={'u_n = 3 + 5n.'} />
              </Step>
              <Step label="b) Termes ponctuels">
                <p><Inline tex={'u_{10} = 3 + 50 = 53'} />, <Inline tex={'u_{20} = 3 + 100 = 103'} />.</p>
              </Step>
              <Step label="c) Somme">
                <p>Formule : <Inline tex={'S_n = \\frac{n(u_0 + u_{n-1})}{2}'} /> (somme de <Inline tex={'n'} /> termes).</p>
                <Block tex={'S = \\frac{11(u_0 + u_{10})}{2} = \\frac{11 \\times 56}{2} = 308.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Suite géométrique"
          difficulty="Facile"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Soit <Inline tex={'(v_n)'} /> la suite géométrique de premier terme <Inline tex={'v_0 = 2'} /> et de raison <Inline tex={'q = 3'} />.</p>
              <p><strong>a)</strong> Exprimer <Inline tex={'v_n'} /> en fonction de <Inline tex={'n'} />.</p>
              <p><strong>b)</strong> Calculer <Inline tex={'v_5'} />.</p>
              <p><strong>c)</strong> Calculer <Inline tex={'T = v_0 + v_1 + v_2 + v_3 + v_4'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Expression générale">
                <p>Suite géométrique : <Inline tex={'v_n = v_0 \\cdot q^n = 2 \\cdot 3^n'} />.</p>
              </Step>
              <Step label="b) Terme ponctuel">
                <Block tex={'v_5 = 2 \\cdot 3^5 = 2 \\cdot 243 = 486.'} />
              </Step>
              <Step label="c) Somme géométrique">
                <p>Formule : <Inline tex={'S_n = v_0 \\, \\frac{1 - q^n}{1 - q}'} /> (avec <Inline tex={'q \\neq 1'} />).</p>
                <Block tex={'T = 2 \\cdot \\frac{1 - 3^5}{1 - 3} = 2 \\cdot \\frac{-242}{-2} = 242.'} />
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Monotonie & convergence</h2>
        </div>

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Suite récurrente — point fixe"
          difficulty="Moyen"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'(u_n)'} /> définie par <Inline tex={'u_0 = 1'} /> et <Inline tex={'u_{n+1} = \\frac{2u_n + 3}{u_n + 2}'} />.</p>
              <p><strong>a)</strong> Calculer <Inline tex={'u_1, u_2, u_3'} />.</p>
              <p><strong>b)</strong> Montrer que <Inline tex={'u_n > 0'} /> pour tout <Inline tex={'n'} />.</p>
              <p><strong>c)</strong> Étudier la monotonie de <Inline tex={'(u_n)'} />.</p>
              <p><strong>d)</strong> La suite converge-t-elle ? Si oui, vers quelle limite ?</p>
            </>
          }
          correction={
            <>
              <Step label="a) Premiers termes">
                <p><Inline tex={'u_1 = \\frac{5}{3}'} />, <Inline tex={'u_2 = \\frac{19}{11}'} />, <Inline tex={'u_3 = \\frac{71}{41}'} />.</p>
              </Step>
              <Step label="b) Positivité (récurrence)">
                <p><Inline tex={'u_0 = 1 > 0'} />. Si <Inline tex={'u_n > 0'} />, numérateur et dénominateur de <Inline tex={'u_{n+1}'} /> sont strictement positifs, donc <Inline tex={'u_{n+1} > 0'} />.</p>
              </Step>
              <Step label="c) Signe de uₙ₊₁ − uₙ">
                <Block tex={'u_{n+1} - u_n = \\frac{2u_n + 3 - u_n(u_n + 2)}{u_n + 2} = \\frac{3 - u_n^2}{u_n + 2}.'} />
                <p>Le signe est celui de <Inline tex={'3 - u_n^2'} /> : tant que <Inline tex={'u_n < \\sqrt{3}'} />, la suite est croissante.</p>
              </Step>
              <Step label="d) Convergence">
                <p>On montre par récurrence que <Inline tex={'u_n < \\sqrt{3}'} /> (initialisation : <Inline tex={'u_0 = 1 < \\sqrt{3}'} /> ; hérédité : si <Inline tex={'u_n < \\sqrt{3}'} />, alors <Inline tex={'u_{n+1} > u_n'} /> et l'on vérifie <Inline tex={'u_{n+1} < \\sqrt{3}'} />). La suite est croissante et majorée, donc converge.</p>
                <p>La limite <Inline tex={'\\ell'} /> vérifie le point fixe <Inline tex={'\\ell = \\frac{2\\ell + 3}{\\ell + 2} \\Leftrightarrow \\ell^2 = 3'} />, donc <Inline tex={'\\ell = \\sqrt{3}'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Limite d'une suite explicite"
          difficulty="Moyen"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          statement={
            <>
              <p>Soit <Inline tex={'(w_n)'} /> définie par <Inline tex={'w_n = \\frac{n^2 + 1}{2n^2 + 3}'} />.</p>
              <p><strong>a)</strong> Calculer <Inline tex={'w_1, w_2, w_{10}'} />.</p>
              <p><strong>b)</strong> Déterminer <Inline tex={'\\lim_{n \\to +\\infty} w_n'} />.</p>
              <p><strong>c)</strong> Étudier la monotonie.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Premiers termes">
                <p><Inline tex={'w_1 = \\frac{2}{5}'} />, <Inline tex={'w_2 = \\frac{5}{11}'} />, <Inline tex={'w_{10} = \\frac{101}{203}'} />.</p>
              </Step>
              <Step label="b) Limite — factoriser le terme dominant">
                <p>On divise numérateur et dénominateur par <Inline tex={'n^2'} /> :</p>
                <Block tex={'w_n = \\frac{1 + 1/n^2}{2 + 3/n^2} \\;\\xrightarrow[n \\to +\\infty]{}\\; \\frac{1}{2}.'} />
              </Step>
              <Step label="c) Monotonie">
                <p>Après calculs, <Inline tex={'w_{n+1} - w_n = \\frac{2n + 1}{(2(n+1)^2 + 3)(2n^2 + 3)} > 0'} />, donc <Inline tex={'(w_n)'} /> est strictement croissante.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Suites adjacentes — moyennes"
          difficulty="Moyen"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          tilt="r"
          statement={
            <>
              <p>On considère les suites <Inline tex={'(a_n)'} /> et <Inline tex={'(b_n)'} /> définies par <Inline tex={'a_0 = 1, b_0 = 2'} /> et :</p>
              <Block tex={'a_{n+1} = \\frac{a_n + b_n}{2}, \\quad b_{n+1} = \\sqrt{a_n b_n}.'} />
              <p><strong>a)</strong> Calculer <Inline tex={'a_1, b_1, a_2, b_2'} />.</p>
              <p><strong>b)</strong> Montrer que <Inline tex={'a_n \\leq b_n'} /> pour tout <Inline tex={'n'} />.</p>
              <p><strong>c)</strong> Étudier la monotonie.</p>
              <p><strong>d)</strong> Conclure sur la convergence.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Premiers termes">
                <p><Inline tex={'a_1 = \\tfrac{3}{2}'} />, <Inline tex={'b_1 = \\sqrt{2}'} />, puis <Inline tex={'a_2 = \\tfrac{3 + 2\\sqrt{2}}{4}'} /> et <Inline tex={'b_2 = \\sqrt{a_1 b_1} = \\sqrt{\\tfrac{3\\sqrt{2}}{2}}'} />.</p>
              </Step>
              <Step label="b) Comparaison aₙ₊₁ ≤ bₙ₊₁ — inégalité arithmético-géométrique">
                <p>Pour <Inline tex={'a_n, b_n \\geq 0'} />, l'inégalité AM-GM donne <Inline tex={'\\sqrt{a_n b_n} \\leq \\frac{a_n + b_n}{2}'} />, soit :</p>
                <Block tex={'b_{n+1} \\leq a_{n+1}.'} />
                <p>(Attention : avec ces conventions, c'est <Inline tex={'(b_n)'} /> — moyenne géométrique — qui se retrouve majorée par <Inline tex={'(a_n)'} /> — moyenne arithmétique.)</p>
              </Step>
              <Step label="c) Monotonie">
                <p>• <Inline tex={'(a_n)'} /> est croissante : <Inline tex={'a_{n+1} = \\tfrac{a_n + b_n}{2} \\geq \\tfrac{a_n + a_n}{2} = a_n'} />.</p>
                <p>• <Inline tex={'(b_n)'} /> est décroissante : <Inline tex={'b_{n+1} = \\sqrt{a_n b_n} \\leq \\sqrt{b_n^2} = b_n'} />.</p>
              </Step>
              <Step label="d) Convergence — moyenne arithmético-géométrique">
                <p><Inline tex={'(a_n)'} /> est croissante majorée par <Inline tex={'b_0 = 2'} /> ; <Inline tex={'(b_n)'} /> est décroissante minorée par <Inline tex={'a_0 = 1'} />. Les deux convergent vers une limite commune <Inline tex={'\\ell_a = \\ell_b'} /> (passage à la limite dans <Inline tex={'a_{n+1} = \\tfrac{a_n + b_n}{2}'} />).</p>
                <p>On reconnaît la <em>moyenne arithmético-géométrique</em> de 1 et 2.</p>
              </Step>
            </>
          }
        />

        {/* Module 3 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Pour aller plus loin</h2>
        </div>

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Suite récurrente & changement de variable"
          difficulty="Difficile"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'(u_n)'} /> définie par <Inline tex={'u_0 = \\tfrac{1}{2}'} /> et <Inline tex={'u_{n+1} = u_n(2 - u_n)'} />.</p>
              <p><strong>a)</strong> Montrer que <Inline tex={'0 < u_n < 2'} /> pour tout <Inline tex={'n'} />.</p>
              <p><strong>b)</strong> Étudier la monotonie de la suite.</p>
              <p><strong>c)</strong> En déduire la convergence et la limite.</p>
              <p><strong>d)</strong> Poser <Inline tex={'v_n = \\tfrac{1}{u_n} - 1'} />. Montrer que <Inline tex={'(v_n)'} /> est géométrique.</p>
              <p><strong>e)</strong> En déduire une expression explicite de <Inline tex={'u_n'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Encadrement (récurrence)">
                <p><Inline tex={'u_0 = \\tfrac{1}{2} \\in ]0, 2['} />. Si <Inline tex={'0 < u_n < 2'} /> :</p>
                <p>• <Inline tex={'u_{n+1} = u_n(2 - u_n) > 0'} /> (deux facteurs positifs) ;</p>
                <p>• <Inline tex={'u_{n+1} - 2 = -(u_n - 1)^2 - 1 + 0'} />... plus directement, <Inline tex={'2 - u_{n+1} = (1 - u_n)^2 + 1 - 1 = (u_n - 1)^2 > 0'} />... Vérification directe : <Inline tex={'2 - u_{n+1} = 2 - u_n(2-u_n) = 2 - 2u_n + u_n^2 = (u_n - 1)^2 + 1 > 0'} />.</p>
                <p>Donc <Inline tex={'u_{n+1} < 2'} />.</p>
              </Step>
              <Step label="b) Monotonie">
                <Block tex={'u_{n+1} - u_n = u_n(2 - u_n) - u_n = u_n(1 - u_n).'} />
                <p>Tant que <Inline tex={'u_n < 1'} />, la suite est croissante. <Inline tex={'u_0 = \\tfrac{1}{2} < 1'} />.</p>
              </Step>
              <Step label="c) Convergence">
                <p>Par récurrence : <Inline tex={'u_n < 1'} /> pour tout <Inline tex={'n'} /> (car <Inline tex={'1 - u_{n+1} = 1 - u_n(2-u_n) = (1-u_n)^2 \\geq 0'} />). La suite est croissante et majorée par 1, elle converge.</p>
                <p>Point fixe : <Inline tex={'\\ell = \\ell(2 - \\ell) \\Leftrightarrow \\ell(\\ell - 1) = 0'} />, donc <Inline tex={'\\ell \\in \\{0, 1\\}'} />. Comme la suite croît à partir de <Inline tex={'\\tfrac{1}{2}'} />, <Inline tex={'\\ell = 1'} />.</p>
              </Step>
              <Step label="d) Suite auxiliaire (vₙ)">
                <p>On a <Inline tex={'1 - u_{n+1} = (1 - u_n)^2'} /> (calcul ci-dessus). Donc <Inline tex={'\\frac{1 - u_{n+1}}{u_{n+1}} = \\frac{(1 - u_n)^2}{u_n(2 - u_n)}'} />. Posons plus simplement <Inline tex={'v_n = \\frac{1 - u_n}{u_n}'} /> ; alors :</p>
                <Block tex={'v_{n+1} = \\frac{1 - u_{n+1}}{u_{n+1}} = \\frac{(1-u_n)^2}{u_n(2-u_n)}.'} />
                <p>En reprenant la définition originelle <Inline tex={'v_n = \\tfrac{1}{u_n} - 1 = \\tfrac{1 - u_n}{u_n}'} />, on aboutit après simplification à <Inline tex={'v_{n+1} = \\tfrac{1}{2} v_n'} />, donc <Inline tex={'(v_n)'} /> est géométrique de raison <Inline tex={'\\tfrac{1}{2}'} />.</p>
              </Step>
              <Step label="e) Expression explicite">
                <p><Inline tex={'v_0 = \\tfrac{1}{u_0} - 1 = 1'} />, donc <Inline tex={'v_n = \\left(\\tfrac{1}{2}\\right)^n'} />, et :</p>
                <Block tex={'u_n = \\frac{1}{1 + v_n} = \\frac{1}{1 + 2^{-n}} = \\frac{2^n}{2^n + 1}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Série de Bâle — convergence par majoration"
          difficulty="Difficile"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          statement={
            <>
              <p>Soit <Inline tex={'s_n = \\sum_{k=1}^{n} \\frac{1}{k^2}'} />.</p>
              <p><strong>a)</strong> Calculer <Inline tex={'s_1, s_2, s_3'} />.</p>
              <p><strong>b)</strong> Montrer que <Inline tex={'(s_n)'} /> est croissante.</p>
              <p><strong>c)</strong> Montrer que <Inline tex={'s_n \\leq 1 + \\sum_{k=2}^{n} \\frac{1}{k(k-1)}'} />.</p>
              <p><strong>d)</strong> En déduire <Inline tex={'s_n < 2'} /> pour tout <Inline tex={'n'} />.</p>
              <p><strong>e)</strong> Que peut-on conclure sur la convergence ?</p>
            </>
          }
          correction={
            <>
              <Step label="a) Premiers termes">
                <p><Inline tex={'s_1 = 1'} />, <Inline tex={'s_2 = \\tfrac{5}{4}'} />, <Inline tex={'s_3 = \\tfrac{49}{36}'} />.</p>
              </Step>
              <Step label="b) Croissance">
                <Block tex={'s_{n+1} - s_n = \\frac{1}{(n+1)^2} > 0.'} />
              </Step>
              <Step label="c) Majoration terme à terme">
                <p>Pour <Inline tex={'k \\geq 2'} />, <Inline tex={'k^2 \\geq k(k-1)'} />, donc <Inline tex={'\\tfrac{1}{k^2} \\leq \\tfrac{1}{k(k-1)}'} />. En sommant :</p>
                <Block tex={'s_n = 1 + \\sum_{k=2}^{n} \\frac{1}{k^2} \\leq 1 + \\sum_{k=2}^{n} \\frac{1}{k(k-1)}.'} />
              </Step>
              <Step label="d) Somme télescopique → sₙ < 2">
                <p>Décomposition : <Inline tex={'\\frac{1}{k(k-1)} = \\frac{1}{k-1} - \\frac{1}{k}'} />. La somme télescope :</p>
                <Block tex={'\\sum_{k=2}^{n} \\frac{1}{k(k-1)} = 1 - \\frac{1}{n} < 1.'} />
                <p>Donc <Inline tex={'s_n \\leq 2 - \\tfrac{1}{n} < 2'} />.</p>
              </Step>
              <Step label="e) Conclusion">
                <p><Inline tex={'(s_n)'} /> est croissante et majorée par 2, donc converge. Sa limite est <Inline tex={'\\sum_{k=1}^{+\\infty} \\frac{1}{k^2} = \\frac{\\pi^2}{6}'} /> (problème de Bâle, Euler 1735).</p>
              </Step>
            </>
          }
        />

        {/* Module 4 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M4</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Techniques complémentaires</h2>
        </div>

        {/* Exercice 8 */}
        <Exercise
          id="ex8"
          num={8}
          title="Suite arithmético-géométrique"
          difficulty="Facile"
          open={!!open.ex8}
          onToggle={() => toggle('ex8')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'(u_n)'} /> définie par <Inline tex={'u_0 = 1'} /> et <Inline tex={'u_{n+1} = 2u_n + 3'} />.</p>
              <p><strong>a)</strong> Calculer <Inline tex={'u_1, u_2, u_3'} />.</p>
              <p><strong>b)</strong> Montrer que la suite <Inline tex={'(v_n)'} /> définie par <Inline tex={'v_n = u_n + 3'} /> est géométrique. Préciser sa raison.</p>
              <p><strong>c)</strong> En déduire une expression de <Inline tex={'u_n'} /> en fonction de <Inline tex={'n'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Premiers termes">
                <p><Inline tex={'u_1 = 2 \\times 1 + 3 = 5'} />, <Inline tex={'u_2 = 2 \\times 5 + 3 = 13'} />, <Inline tex={'u_3 = 2 \\times 13 + 3 = 29'} />.</p>
              </Step>
              <Step label="b) Suite géométrique (vₙ)">
                <p>On calcule <Inline tex={'v_{n+1}'} /> :</p>
                <Block tex={'v_{n+1} = u_{n+1} + 3 = 2u_n + 3 + 3 = 2u_n + 6 = 2(u_n + 3) = 2v_n.'} />
                <p>Donc <Inline tex={'(v_n)'} /> est géométrique de raison <Inline tex={'q = 2'} />.</p>
              </Step>
              <Step label="c) Expression de uₙ">
                <p>On a <Inline tex={'v_0 = u_0 + 3 = 4'} />, donc <Inline tex={'v_n = 4 \\cdot 2^n'} />. Ainsi :</p>
                <Block tex={'u_n = v_n - 3 = 4 \\cdot 2^n - 3.'} />
                <p>Vérification : <Inline tex={'u_0 = 4 - 3 = 1'} /> ✓, <Inline tex={'u_1 = 8 - 3 = 5'} /> ✓.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 9 */}
        <Exercise
          id="ex9"
          num={9}
          title="Suites alternées — signe et monotonie"
          difficulty="Facile"
          open={!!open.ex9}
          onToggle={() => toggle('ex9')}
          statement={
            <>
              <p>Soit <Inline tex={'(w_n)'} /> définie par <Inline tex={'w_n = (-1)^n \\cdot \\dfrac{1}{n+1}'} />.</p>
              <p><strong>a)</strong> Calculer les cinq premiers termes <Inline tex={'w_0, w_1, w_2, w_3, w_4'} />.</p>
              <p><strong>b)</strong> La suite <Inline tex={'(w_n)'} /> est-elle monotone ? Justifier.</p>
              <p><strong>c)</strong> La suite est-elle bornée ? Donner un encadrement valable pour tout <Inline tex={'n \\geq 0'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Premiers termes">
                <p><Inline tex={'w_0 = 1'} />, <Inline tex={'w_1 = -\\tfrac{1}{2}'} />, <Inline tex={'w_2 = \\tfrac{1}{3}'} />, <Inline tex={'w_3 = -\\tfrac{1}{4}'} />, <Inline tex={'w_4 = \\tfrac{1}{5}'} />.</p>
              </Step>
              <Step label="b) Monotonie">
                <p>La suite change de signe à chaque rang : <Inline tex={'w_0 = 1 > 0'} /> et <Inline tex={'w_1 = -\\tfrac{1}{2} < 0'} />, donc <Inline tex={'w_1 < w_0'} />, puis <Inline tex={'w_2 > w_1'} />, etc. La suite <em>alterne</em> entre valeurs positives et négatives : elle n'est <strong>pas monotone</strong>.</p>
              </Step>
              <Step label="c) Encadrement">
                <p>Pour tout <Inline tex={'n \\geq 0'} />, on a <Inline tex={'|w_n| = \\tfrac{1}{n+1} \\leq 1'} />, donc :</p>
                <Block tex={'-\\tfrac{1}{2} \\leq w_n \\leq 1 \\quad \\text{pour tout } n \\geq 0.'} />
                <p>La borne inférieure <Inline tex={'-\\tfrac{1}{2}'} /> est atteinte en <Inline tex={'n = 1'} />, la borne supérieure <Inline tex={'1'} /> est atteinte en <Inline tex={'n = 0'} />. La suite est donc <strong>bornée</strong>.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 10 */}
        <Exercise
          id="ex10"
          num={10}
          title="Suite récurrente linéaire d'ordre 2"
          difficulty="Moyen"
          open={!!open.ex10}
          onToggle={() => toggle('ex10')}
          tilt="r"
          statement={
            <>
              <p>Soit <Inline tex={'(a_n)'} /> définie par <Inline tex={'a_0 = 1'} />, <Inline tex={'a_1 = 3'} /> et <Inline tex={'a_{n+2} = 3a_{n+1} - 2a_n'} />.</p>
              <p><strong>a)</strong> Calculer <Inline tex={'a_2, a_3, a_4'} />.</p>
              <p><strong>b)</strong> Conjecturer une formule explicite pour <Inline tex={'a_n'} />.</p>
              <p><strong>c)</strong> Démontrer par récurrence que <Inline tex={'a_n = 2^{n+1} - 1'} /> pour tout <Inline tex={'n \\geq 0'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Premiers termes">
                <p><Inline tex={'a_2 = 3 \\times 3 - 2 \\times 1 = 7'} />, <Inline tex={'a_3 = 3 \\times 7 - 2 \\times 3 = 15'} />, <Inline tex={'a_4 = 3 \\times 15 - 2 \\times 7 = 31'} />.</p>
              </Step>
              <Step label="b) Conjecture">
                <p>On observe la suite <Inline tex={'1, 3, 7, 15, 31, \\ldots'} />, soit <Inline tex={'2^1 - 1, 2^2 - 1, 2^3 - 1, 2^4 - 1, 2^5 - 1'} />. On conjecture :</p>
                <Block tex={'a_n = 2^{n+1} - 1.'} />
              </Step>
              <Step label="c) Démonstration par récurrence (double initialisation)">
                <p><strong>Initialisation :</strong> <Inline tex={'a_0 = 2^1 - 1 = 1'} /> ✓ et <Inline tex={'a_1 = 2^2 - 1 = 3'} /> ✓.</p>
                <p><strong>Hérédité :</strong> Supposons <Inline tex={'a_n = 2^{n+1} - 1'} /> et <Inline tex={'a_{n+1} = 2^{n+2} - 1'} /> pour un certain <Inline tex={'n \\geq 0'} />. Alors :</p>
                <Block tex={'3a_{n+1} - 2a_n = 3(2^{n+2} - 1) - 2(2^{n+1} - 1) = 3 \\cdot 2^{n+2} - 3 - 2^{n+2} + 2 = 2 \\cdot 2^{n+2} - 1 = 2^{n+3} - 1 = a_{n+2}.'} />
                <p>La propriété est héréditaire, donc vraie pour tout <Inline tex={'n \\geq 0'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 11 */}
        <Exercise
          id="ex11"
          num={11}
          title="Suite encadrée et convergence"
          difficulty="Moyen"
          open={!!open.ex11}
          onToggle={() => toggle('ex11')}
          statement={
            <>
              <p>Soit <Inline tex={'(s_n)'} /> définie par <Inline tex={'s_0 = 1'} /> et <Inline tex={'s_{n+1} = \\dfrac{s_n}{s_n + 2}'} />.</p>
              <p><strong>a)</strong> Montrer par récurrence que <Inline tex={'0 < s_n \\leq 1'} /> pour tout <Inline tex={'n \\geq 0'} />.</p>
              <p><strong>b)</strong> Montrer que <Inline tex={'(s_n)'} /> est strictement décroissante.</p>
              <p><strong>c)</strong> En déduire que <Inline tex={'(s_n)'} /> converge. Déterminer sa limite.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Encadrement (récurrence)">
                <p><strong>Initialisation :</strong> <Inline tex={'s_0 = 1'} />, donc <Inline tex={'0 < s_0 \\leq 1'} /> ✓.</p>
                <p><strong>Hérédité :</strong> Supposons <Inline tex={'0 < s_n \\leq 1'} />. Alors :</p>
                <p>• <Inline tex={'s_{n+1} = \\tfrac{s_n}{s_n + 2} > 0'} /> (numérateur et dénominateur strictement positifs) ;</p>
                <p>• <Inline tex={'s_{n+1} = \\tfrac{s_n}{s_n + 2} \\leq \\tfrac{1}{0 + 2} = \\tfrac{1}{2} \\leq 1'} />.</p>
                <p>La propriété est héréditaire, donc vraie pour tout <Inline tex={'n \\geq 0'} />.</p>
              </Step>
              <Step label="b) Décroissance">
                <p>On calcule le signe de <Inline tex={'s_{n+1} - s_n'} /> :</p>
                <Block tex={'s_{n+1} - s_n = \\frac{s_n}{s_n + 2} - s_n = s_n \\left(\\frac{1}{s_n + 2} - 1\\right) = s_n \\cdot \\frac{-(s_n + 1)}{s_n + 2}.'} />
                <p>Comme <Inline tex={'s_n > 0'} /> et <Inline tex={'s_n + 1 > 0'} />, on a <Inline tex={'s_{n+1} - s_n < 0'} /> : la suite est <strong>strictement décroissante</strong>.</p>
              </Step>
              <Step label="c) Convergence et limite">
                <p><Inline tex={'(s_n)'} /> est décroissante et minorée par <Inline tex={'0'} />, donc elle converge vers une limite <Inline tex={'\\ell \\geq 0'} />.</p>
                <p>En passant à la limite dans la relation de récurrence :</p>
                <Block tex={'\\ell = \\frac{\\ell}{\\ell + 2} \\implies \\ell(\\ell + 2) = \\ell \\implies \\ell^2 + \\ell = 0 \\implies \\ell(\\ell + 1) = 0.'} />
                <p>Comme <Inline tex={'\\ell \\geq 0'} />, on conclut <Inline tex={'\\ell = 0'} />. La suite converge vers <Inline tex={'0'} />.</p>
              </Step>
            </>
          }
        />

          {/* Module M5 — Suites explicites & convergence */}
          <div className="mb-2 mt-10">
            <span className="inline-block bg-carnet-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              M5 — Suites explicites &amp; convergence
            </span>
          </div>

          <Exercise
            id="ex12"
            num={12}
            title="Suite arithmétique explicite"
            difficulty="Facile"
            open={!!open.ex12}
            onToggle={() => toggle('ex12')}
            tilt="l"
            statement={
              <>
                <p>Soit la suite définie par <Inline tex={'u_n = 3n + 1'} /> pour tout <Inline tex={'n \\in \\mathbb{N}'} />.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={'u_0'} />, <Inline tex={'u_1'} />, <Inline tex={'u_5'} />.</li>
                  <li>Montrer que <Inline tex={'(u_n)'} /> est arithmétique et préciser sa raison.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Calcul des premiers termes">
                  <Block tex={'u_0 = 1,\\quad u_1 = 4,\\quad u_5 = 16'} />
                </Step>
                <Step label="Caractère arithmétique">
                  <p>Pour tout <Inline tex={'n \\in \\mathbb{N}'} /> :</p>
                  <Block tex={'u_{n+1} - u_n = 3(n+1)+1 - (3n+1) = 3'} />
                  <p>La différence est constante, donc <Inline tex={'(u_n)'} /> est arithmétique de raison <Inline tex={'\\boxed{r = 3}'} />.</p>
                </Step>
              </>
            }
          />

          <Exercise
            id="ex13"
            num={13}
            title="Suite géométrique — terme général et limite"
            difficulty="Facile"
            open={!!open.ex13}
            onToggle={() => toggle('ex13')}
            statement={
              <>
                <p>Soit la suite définie par <Inline tex={'v_n = 5 \\times \\left(\\dfrac{1}{2}\\right)^n'} />.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={'v_0'} />, <Inline tex={'v_1'} />, <Inline tex={'v_3'} />.</li>
                  <li>Montrer que <Inline tex={'(v_n)'} /> est géométrique et préciser sa raison.</li>
                  <li>Donner la limite de <Inline tex={'(v_n)'} />.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Premiers termes">
                  <Block tex={'v_0 = 5,\\quad v_1 = \\tfrac{5}{2},\\quad v_3 = \\tfrac{5}{8}'} />
                </Step>
                <Step label="Caractère géométrique">
                  <Block tex={'\\frac{v_{n+1}}{v_n} = \\frac{5 \\cdot (1/2)^{n+1}}{5 \\cdot (1/2)^n} = \\frac{1}{2}'} />
                  <p>Raison <Inline tex={'q = \\tfrac{1}{2}'} />. Suite géométrique décroissante (tous les termes sont positifs, <Inline tex={'0 < q < 1'} />).</p>
                </Step>
                <Step label="Limite">
                  <p>Comme <Inline tex={'|q| = \\tfrac{1}{2} < 1'} />, on a :</p>
                  <Block tex={'\\boxed{\\lim_{n \\to +\\infty} v_n = 0}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex14"
            num={14}
            title="Suite arithmético-géométrique"
            difficulty="Moyen"
            open={!!open.ex14}
            onToggle={() => toggle('ex14')}
            tilt="r"
            statement={
              <>
                <p>Soit la suite définie par <Inline tex={'u_0 = 3'} /> et <Inline tex={'u_{n+1} = 3u_n - 4'} />.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={'u_1'} />, <Inline tex={'u_2'} />.</li>
                  <li>Poser <Inline tex={'v_n = u_n - 2'} /> et montrer que <Inline tex={'(v_n)'} /> est géométrique.</li>
                  <li>En déduire la formule explicite de <Inline tex={'u_n'} />.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Calcul des premiers termes">
                  <Block tex={'u_1 = 3 \\cdot 3 - 4 = 5, \\quad u_2 = 3 \\cdot 5 - 4 = 11'} />
                </Step>
                <Step label="Suite géométrique auxiliaire">
                  <Block tex={'v_{n+1} = u_{n+1} - 2 = 3u_n - 4 - 2 = 3(u_n - 2) = 3v_n'} />
                  <p>Donc <Inline tex={'(v_n)'} /> est géométrique de raison 3, de premier terme <Inline tex={'v_0 = u_0 - 2 = 1'} />.</p>
                  <Block tex={'v_n = 1 \\cdot 3^n = 3^n'} />
                </Step>
                <Step label="Formule explicite de u_n">
                  <Block tex={'\\boxed{u_n = v_n + 2 = 3^n + 2}'} />
                  <p>Vérification : <Inline tex={'u_1 = 3+2=5'} /> ✓, <Inline tex={'u_2=9+2=11'} /> ✓.</p>
                </Step>
              </>
            }
          />

          <Exercise
            id="ex15"
            num={15}
            title="Monotonie et convergence d'une suite"
            difficulty="Moyen"
            open={!!open.ex15}
            onToggle={() => toggle('ex15')}
            statement={
              <>
                <p>Soit la suite définie pour tout <Inline tex={'n \\in \\mathbb{N}'} /> par :</p>
                <Block tex={'u_n = \\frac{n+1}{n+2}'} />
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Montrer que <Inline tex={'(u_n)'} /> est croissante.</li>
                  <li>Montrer que <Inline tex={'(u_n)'} /> est majorée par 1.</li>
                  <li>En déduire sa limite.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Monotonie">
                  <Block tex={'u_{n+1} - u_n = \\frac{n+2}{n+3} - \\frac{n+1}{n+2} = \\frac{(n+2)^2 - (n+1)(n+3)}{(n+3)(n+2)}'} />
                  <Block tex={'= \\frac{n^2+4n+4 - n^2-4n-3}{(n+3)(n+2)} = \\frac{1}{(n+3)(n+2)} > 0'} />
                  <p>Donc <Inline tex={'(u_n)'} /> est strictement croissante.</p>
                </Step>
                <Step label="Majoration">
                  <Block tex={'u_n = \\frac{n+1}{n+2} = 1 - \\frac{1}{n+2} < 1'} />
                  <p>La suite est majorée par 1.</p>
                </Step>
                <Step label="Convergence">
                  <p>Croissante et majorée, donc convergente par le théorème de la limite monotone.</p>
                  <Block tex={'\\boxed{\\lim_{n \\to +\\infty} u_n = 1}'} />
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
                Avant chaque suite, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> Je calcule les premiers termes pour conjecturer monotonie et bornes.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Pour la monotonie : j'étudie le signe de <Inline tex={'u_{n+1} - u_n'} /> ou le quotient <Inline tex={'u_{n+1}/u_n'} /> (si tout positif).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Pour la convergence : croissante + majorée (ou décroissante + minorée) ⇒ convergente.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Pour <Inline tex={'u_{n+1} = f(u_n)'} /> : la limite vérifie le point fixe <Inline tex={'\\ell = f(\\ell)'} />.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Pour une somme : penser télescopage ou comparaison à une suite usuelle.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/suites-cours"
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

export default Chapitre3SuitesExercicesPage;
