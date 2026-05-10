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

const Chapitre6LimitesExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/limites-exercices"
        title="Exercices · Chapitre 7 — Limites · Terminale → Prépa ECG"
        description="17 exercices progressifs sur les limites de fonctions : limites usuelles, formes indéterminées, conjugué, exponentielle/logarithme et croissances comparées."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 7 · Limites</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">07 · Exercices · Limites</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Dix-sept limites <em className="font-lora italic text-carnet-red">à débloquer</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Substitution directe, formes indéterminées, conjugué, exponentielles, croissances comparées. <span className="carnet-hl font-lora italic">Identifie la FI</span> avant de te lancer dans le calcul.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              4 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              11 Moyens
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
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Limites élémentaires & de référence</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Substitution & quotient au voisinage de l'infini"
          difficulty="Facile"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>Calculer :</p>
              <p>a) <Inline tex={'\\lim_{x \\to 2} (3x + 1)'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to +\\infty} \\frac{2x + 1}{x + 3}'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 0} \\frac{\\sin(3x)}{x}'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) Substitution directe">
                <p>Polynôme continu en 2 : <Inline tex={'3 \\cdot 2 + 1 = 7'} />. <strong>Limite = 7.</strong></p>
              </Step>
              <Step label="b) Quotient en +∞">
                <p>On divise haut/bas par <Inline tex={'x'} /> :</p>
                <Block tex={'\\frac{2x+1}{x+3} = \\frac{2 + 1/x}{1 + 3/x} \\xrightarrow[x \\to +\\infty]{} 2.'} />
              </Step>
              <Step label="c) Limite de référence sin u / u">
                <Block tex={'\\frac{\\sin(3x)}{x} = 3 \\cdot \\frac{\\sin(3x)}{3x} \\xrightarrow[x \\to 0]{} 3 \\cdot 1 = 3.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Limites en l'infini & limite de référence"
          difficulty="Facile"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Déterminer :</p>
              <p>a) <Inline tex={'\\lim_{x \\to +\\infty} (x^2 - 3x + 1)'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to 1^-} \\frac{1}{x - 1}'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 0} \\frac{e^x - 1}{x}'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) Terme dominant">
                <p>Le <Inline tex={'x^2'} /> domine, <Inline tex={'\\lim = +\\infty'} />.</p>
              </Step>
              <Step label="b) Limite à gauche en 1">
                <p>Quand <Inline tex={'x \\to 1^-'} />, <Inline tex={'x - 1 \\to 0^-'} />, donc <Inline tex={'\\frac{1}{x-1} \\to -\\infty'} />.</p>
              </Step>
              <Step label="c) Limite de référence">
                <p><Inline tex={'\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1'} />.</p>
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Lever les formes indéterminées</h2>
        </div>

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Factoriser ou diviser"
          difficulty="Moyen"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="l"
          statement={
            <>
              <p>Lever les indéterminations :</p>
              <p>a) <Inline tex={'\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to +\\infty} \\frac{3x^2 + 2x - 1}{x^2 - x + 5}'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 0} \\frac{\\ln(1 + 2x)}{x}'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) FI 0/0 — factorisation">
                <Block tex={'\\frac{x^2 - 1}{x - 1} = \\frac{(x-1)(x+1)}{x-1} = x+1 \\xrightarrow[x \\to 1]{} 2.'} />
              </Step>
              <Step label="b) FI ∞/∞ — terme dominant x²">
                <Block tex={'\\frac{3x^2 + 2x - 1}{x^2 - x + 5} = \\frac{3 + 2/x - 1/x^2}{1 - 1/x + 5/x^2} \\xrightarrow[x \\to +\\infty]{} 3.'} />
              </Step>
              <Step label="c) FI 0/0 — limite de référence">
                <p>Pose <Inline tex={'u = 2x'} /> : <Inline tex={'\\frac{\\ln(1+2x)}{x} = 2 \\cdot \\frac{\\ln(1+u)}{u} \\xrightarrow[u \\to 0]{} 2'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Conjugué & factorisations"
          difficulty="Moyen"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          statement={
            <>
              <p>Calculer :</p>
              <p>a) <Inline tex={'\\lim_{x \\to +\\infty} (\\sqrt{x+1} - \\sqrt{x})'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 2} \\frac{x^3 - 8}{x - 2}'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) FI ∞ − ∞ — expression conjuguée">
                <Block tex={'\\sqrt{x+1} - \\sqrt{x} = \\frac{(x+1) - x}{\\sqrt{x+1} + \\sqrt{x}} = \\frac{1}{\\sqrt{x+1} + \\sqrt{x}} \\xrightarrow[x \\to +\\infty]{} 0.'} />
              </Step>
              <Step label="b) Limite de référence">
                <p><Inline tex={'\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\tfrac{1}{2}'} />.</p>
              </Step>
              <Step label="c) FI 0/0 — identité a³ − b³">
                <p><Inline tex={'x^3 - 8 = (x-2)(x^2 + 2x + 4)'} />, donc :</p>
                <Block tex={'\\frac{x^3 - 8}{x - 2} = x^2 + 2x + 4 \\xrightarrow[x \\to 2]{} 12.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Manipulations trigonométriques & racines"
          difficulty="Moyen"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          tilt="r"
          statement={
            <>
              <p>Étudier :</p>
              <p>a) <Inline tex={'\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to +\\infty} \\frac{2x^3 - x^2 + 1}{3x^3 + x - 5}'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{x - 1}'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) Décomposer puis appliquer les références">
                <p><Inline tex={"\\tan x - \\sin x = \\sin x \\cdot \\tfrac{1 - \\cos x}{\\cos x}"} />, donc :</p>
                <Block tex={'\\frac{\\tan x - \\sin x}{x^3} = \\frac{\\sin x}{x} \\cdot \\frac{1 - \\cos x}{x^2} \\cdot \\frac{1}{\\cos x} \\xrightarrow[x \\to 0]{} 1 \\cdot \\tfrac{1}{2} \\cdot 1 = \\tfrac{1}{2}.'} />
              </Step>
              <Step label="b) Terme dominant x³">
                <Block tex={'\\frac{2x^3 - x^2 + 1}{3x^3 + x - 5} \\xrightarrow[x \\to +\\infty]{} \\tfrac{2}{3}.'} />
              </Step>
              <Step label="c) Conjugué">
                <Block tex={'\\frac{\\sqrt{x}-1}{x-1} = \\frac{x-1}{(x-1)(\\sqrt{x}+1)} = \\frac{1}{\\sqrt{x}+1} \\xrightarrow[x \\to 1]{} \\tfrac{1}{2}.'} />
              </Step>
            </>
          }
        />

        {/* Module 3 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Exponentielles, logarithmes & conjugués</h2>
        </div>

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Limites avec eˣ et ln"
          difficulty="Moyen"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          tilt="l"
          statement={
            <>
              <p>Déterminer :</p>
              <p>a) <Inline tex={'\\lim_{x \\to 0} \\frac{e^{2x} - 1 - 2x}{x^2}'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to +\\infty} x\\bigl(e^{1/x} - 1\\bigr)'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 0^+} \\frac{\\ln(1 + x^2)}{x^2}'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) Développement limité de eᵘ">
                <p>Pose <Inline tex={'u = 2x'} /> et utilise <Inline tex={'e^u = 1 + u + \\tfrac{u^2}{2} + o(u^2)'} /> :</p>
                <Block tex={'\\frac{e^{2x} - 1 - 2x}{x^2} = 4 \\cdot \\frac{e^u - 1 - u}{u^2} \\xrightarrow[u \\to 0]{} 4 \\cdot \\tfrac{1}{2} = 2.'} />
              </Step>
              <Step label="b) Changement de variable t = 1/x">
                <Block tex={'x(e^{1/x} - 1) = \\frac{e^t - 1}{t} \\xrightarrow[t \\to 0]{} 1.'} />
              </Step>
              <Step label="c) Limite de référence ln(1+u)/u">
                <p>Pose <Inline tex={'u = x^2'} /> : <Inline tex={'\\frac{\\ln(1+x^2)}{x^2} \\to 1'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Conjugués mixtes"
          difficulty="Moyen"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          statement={
            <>
              <p>Calculer :</p>
              <p>a) <Inline tex={'\\lim_{x \\to 0} \\frac{\\sqrt{1+x} - \\sqrt{1-x}}{x}'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to +\\infty} \\frac{\\sqrt{x^2 + x} - x}{\\sqrt{x}}'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 3} \\frac{x^2 - 9}{\\sqrt{x + 1} - 2}'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) Conjuguer le numérateur">
                <Block tex={'\\frac{\\sqrt{1+x} - \\sqrt{1-x}}{x} = \\frac{(1+x) - (1-x)}{x(\\sqrt{1+x} + \\sqrt{1-x})} = \\frac{2}{\\sqrt{1+x} + \\sqrt{1-x}} \\xrightarrow[x \\to 0]{} 1.'} />
              </Step>
              <Step label="b) Conjuguer puis factoriser">
                <Block tex={'\\frac{\\sqrt{x^2+x} - x}{\\sqrt{x}} = \\frac{x}{\\sqrt{x}(\\sqrt{x^2+x} + x)} = \\frac{\\sqrt{x}}{\\sqrt{x^2+x} + x} \\xrightarrow[x \\to +\\infty]{} 0.'} />
              </Step>
              <Step label="c) Conjuguer le dénominateur">
                <p><Inline tex={'\\sqrt{x+1} - 2 = \\frac{x - 3}{\\sqrt{x+1} + 2}'} />, donc :</p>
                <Block tex={'\\frac{x^2 - 9}{\\sqrt{x+1} - 2} = (x+3)(\\sqrt{x+1} + 2) \\xrightarrow[x \\to 3]{} 6 \\cdot 4 = 24.'} />
              </Step>
            </>
          }
        />

        {/* Module 4 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M4</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Pour aller plus loin</h2>
        </div>

        {/* Exercice 8 */}
        <Exercise
          id="ex8"
          num={8}
          title="DL & croissances comparées"
          difficulty="Difficile"
          open={!!open.ex8}
          onToggle={() => toggle('ex8')}
          tilt="l"
          statement={
            <>
              <p>Calculer :</p>
              <p>a) <Inline tex={'\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to +\\infty} x\\bigl(\\sqrt{x^2 + 1} - x\\bigr)'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 0^+} x \\ln x'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) DL de sin">
                <p><Inline tex={'\\sin x = x - \\tfrac{x^3}{6} + o(x^3)'} />, donc :</p>
                <Block tex={'\\frac{\\sin x - x}{x^3} = -\\tfrac{1}{6} + o(1) \\xrightarrow[x \\to 0]{} -\\tfrac{1}{6}.'} />
              </Step>
              <Step label="b) Conjugué + simplification">
                <Block tex={'x(\\sqrt{x^2+1} - x) = \\frac{x}{\\sqrt{x^2+1} + x} \\xrightarrow[x \\to +\\infty]{} \\tfrac{1}{2}.'} />
              </Step>
              <Step label="c) Croissances comparées">
                <p>Pose <Inline tex={'u = 1/x \\to +\\infty'} /> : <Inline tex={'x \\ln x = -\\tfrac{\\ln u}{u} \\to 0'} /> par croissances comparées.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 9 */}
        <Exercise
          id="ex9"
          num={9}
          title="(1 + 1/x)^x — vers e"
          difficulty="Difficile"
          open={!!open.ex9}
          onToggle={() => toggle('ex9')}
          statement={
            <>
              <p>Étudier :</p>
              <Block tex={'\\lim_{x \\to +\\infty} \\left(1 + \\frac{1}{x}\\right)^x.'} />
              <p className="text-carnet-ink-mute italic text-[14px]">Indication : passer au logarithme.</p>
            </>
          }
          correction={
            <>
              <Step label="Passage au log">
                <p>Pose <Inline tex={'y = \\bigl(1 + 1/x\\bigr)^x'} />. Alors :</p>
                <Block tex={'\\ln y = x \\ln\\!\\left(1 + \\tfrac{1}{x}\\right).'} />
              </Step>
              <Step label="Changement de variable u = 1/x">
                <Block tex={'\\ln y = \\frac{\\ln(1 + u)}{u} \\xrightarrow[u \\to 0]{} 1.'} />
              </Step>
              <Step label="Conclusion">
                <p>Donc <Inline tex={'\\ln y \\to 1'} />, soit <Inline tex={'y \\to e'} /> par continuité de l'exponentielle.</p>
                <Block tex={'\\lim_{x \\to +\\infty} \\left(1 + \\frac{1}{x}\\right)^x = e.'} />
              </Step>
            </>
          }
        />

        {/* Module 5 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M5</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Formes classiques & suites</h2>
        </div>

        {/* Exercice 10 */}
        <Exercise
          id="ex10"
          num={10}
          title="Limites directes : sin, quotients et bornes"
          difficulty="Facile"
          open={!!open.ex10}
          onToggle={() => toggle('ex10')}
          tilt="l"
          statement={
            <>
              <p>Calculer les limites suivantes en justifiant la méthode :</p>
              <p>a) <Inline tex={'\\lim_{x \\to 0} \\dfrac{\\sin(5x)}{x}'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to +\\infty} \\dfrac{x^3 - 2x + 1}{2x^3 + x^2 - 3}'} /></p>
              <p>c) <Inline tex={'\\lim_{x \\to 3^+} \\dfrac{1}{x - 3}'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) Limite de référence sin(u)/u">
                <Block tex={'\\frac{\\sin(5x)}{x} = 5 \\cdot \\frac{\\sin(5x)}{5x} \\xrightarrow[x \\to 0]{} 5 \\cdot 1 = 5.'} />
              </Step>
              <Step label="b) FI ∞/∞ — terme dominant x³">
                <p>On divise numérateur et dénominateur par <Inline tex={'x^3'} /> :</p>
                <Block tex={'\\frac{x^3 - 2x + 1}{2x^3 + x^2 - 3} = \\frac{1 - 2/x^2 + 1/x^3}{2 + 1/x - 3/x^3} \\xrightarrow[x \\to +\\infty]{} \\frac{1}{2}.'} />
              </Step>
              <Step label="c) Limite à droite en 3">
                <p>Quand <Inline tex={'x \\to 3^+'} />, on a <Inline tex={'x - 3 \\to 0^+'} />, donc <Inline tex={'\\dfrac{1}{x-3} \\to +\\infty'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 11 */}
        <Exercise
          id="ex11"
          num={11}
          title="Forme ∞ − ∞ avec racines carrées"
          difficulty="Moyen"
          open={!!open.ex11}
          onToggle={() => toggle('ex11')}
          statement={
            <>
              <p>Calculer :</p>
              <p>a) <Inline tex={'\\lim_{x \\to +\\infty} \\bigl(\\sqrt{x^2 + 3x} - x\\bigr)'} /></p>
              <p>b) <Inline tex={'\\lim_{x \\to +\\infty} \\bigl(\\sqrt{x+1} - \\sqrt{x-1}\\bigr)'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) Expression conjuguée">
                <Block tex={'\\sqrt{x^2+3x} - x = \\frac{(x^2+3x) - x^2}{\\sqrt{x^2+3x}+x} = \\frac{3x}{\\sqrt{x^2+3x}+x}.'} />
                <p>On divise haut et bas par <Inline tex={'x > 0'} /> :</p>
                <Block tex={'= \\frac{3}{\\sqrt{1 + 3/x} + 1} \\xrightarrow[x \\to +\\infty]{} \\frac{3}{\\sqrt{1} + 1} = \\frac{3}{2}.'} />
              </Step>
              <Step label="b) Expression conjuguée">
                <Block tex={'\\sqrt{x+1} - \\sqrt{x-1} = \\frac{(x+1) - (x-1)}{\\sqrt{x+1} + \\sqrt{x-1}} = \\frac{2}{\\sqrt{x+1} + \\sqrt{x-1}} \\xrightarrow[x \\to +\\infty]{} 0.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 12 */}
        <Exercise
          id="ex12"
          num={12}
          title="Limite de suite"
          difficulty="Moyen"
          open={!!open.ex12}
          onToggle={() => toggle('ex12')}
          tilt="r"
          statement={
            <>
              <p>Déterminer la limite de la suite <Inline tex={'(u_n)'} /> définie par :</p>
              <p>a) <Inline tex={'u_n = \\dfrac{3n^2 - 2n + 1}{n^2 + 5}'} /></p>
              <p>b) <Inline tex={'u_n = \\sqrt{n+1} - \\sqrt{n}'} /></p>
              <p>c) <Inline tex={'u_n = n\\!\\left(\\sqrt{1 + \\dfrac{1}{n}} - 1\\right)'} /></p>
            </>
          }
          correction={
            <>
              <Step label="a) Terme dominant n²">
                <Block tex={'u_n = \\frac{3n^2 - 2n + 1}{n^2 + 5} = \\frac{3 - 2/n + 1/n^2}{1 + 5/n^2} \\xrightarrow[n \\to +\\infty]{} 3.'} />
              </Step>
              <Step label="b) Expression conjuguée">
                <Block tex={'\\sqrt{n+1} - \\sqrt{n} = \\frac{(n+1) - n}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}} \\xrightarrow[n \\to +\\infty]{} 0.'} />
              </Step>
              <Step label="c) Taux d'accroissement de √">
                <p>Pose <Inline tex={'h = 1/n \\to 0'} /> :</p>
                <Block tex={'u_n = n\\bigl(\\sqrt{1 + 1/n} - 1\\bigr) = \\frac{\\sqrt{1+h} - 1}{h} \\xrightarrow[h \\to 0]{} \\frac{1}{2}.'} />
                <p className="text-carnet-ink-mute italic text-[14px]">C'est le taux d'accroissement de <Inline tex={'x \\mapsto \\sqrt{x}'} /> en <Inline tex={'x = 1'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 13 */}
        <Exercise
          id="ex13"
          num={13}
          title="Asymptote oblique et comportement en 1"
          difficulty="Moyen"
          open={!!open.ex13}
          onToggle={() => toggle('ex13')}
          statement={
            <>
              <p>Soit <Inline tex={'f(x) = \\dfrac{2x^2 + x - 1}{x - 1}'} />.</p>
              <p>1. Simplifier <Inline tex={'f(x)'} /> pour <Inline tex={'x \\neq 1'} />.</p>
              <p>2. La droite <Inline tex={'y = 2x + 3'} /> est-elle une asymptote oblique ? Justifier.</p>
              <p>3. Calculer <Inline tex={'\\lim_{x \\to 1^+} f(x)'} /> et <Inline tex={'\\lim_{x \\to 1^-} f(x)'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="1. Division euclidienne">
                <p>On factorise le numérateur : <Inline tex={'2x^2 + x - 1 = (x-1)(2x+3)'} />.</p>
                <p>D'où pour tout <Inline tex={'x \\neq 1'} /> :</p>
                <Block tex={'f(x) = \\frac{(x-1)(2x+3)}{x-1} = 2x + 3.'} />
              </Step>
              <Step label="2. Nature de la droite y = 2x + 3">
                <p>Puisque <Inline tex={'f(x) = 2x + 3'} /> exactement (sans reste), la courbe de <Inline tex={'f'} /> <em>coïncide</em> avec la droite <Inline tex={'y = 2x + 3'} /> (sauf au point <Inline tex={'x = 1'} /> où <Inline tex={'f'} /> n'est pas définie). Ce n'est donc pas une asymptote au sens strict, mais la droite elle-même.</p>
              </Step>
              <Step label="3. Limites en 1">
                <p>Pour tout <Inline tex={'x \\neq 1'} />, <Inline tex={'f(x) = 2x + 3'} /> est un polynôme, donc :</p>
                <Block tex={'\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^-} f(x) = 2 \\times 1 + 3 = 5.'} />
                <p>La fonction <Inline tex={'f'} /> admet une limite égale à 5 en <Inline tex={'x = 1'} />, mais n'y est pas définie (c'est un point isolé de discontinuité prolongeable).</p>
              </Step>
            </>
          }
        />

          {/* Module M6 — Limites remarquables */}
          <div className="mb-2 mt-10">
            <span className="inline-block bg-carnet-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              M6 — Limites remarquables
            </span>
          </div>

          <Exercise
            id="ex14"
            num={14}
            title="Limite d'une fraction rationnelle en +∞"
            difficulty="Facile"
            open={!!open.ex14}
            onToggle={() => toggle('ex14')}
            tilt="l"
            statement={
              <>
                <p>Calculer :</p>
                <Block tex={'\\lim_{x \\to +\\infty} \\frac{3x^2 - 5}{x^2 + 1}'} />
              </>
            }
            correction={
              <>
                <Step label="Factorisation par le terme dominant">
                  <p>On factorise <Inline tex={'x^2'} /> au numérateur et au dénominateur :</p>
                  <Block tex={'\\frac{3x^2 - 5}{x^2 + 1} = \\frac{x^2(3 - 5/x^2)}{x^2(1 + 1/x^2)} = \\frac{3 - 5/x^2}{1 + 1/x^2}'} />
                </Step>
                <Step label="Limite">
                  <p>Quand <Inline tex={'x \\to +\\infty'} />, <Inline tex={'5/x^2 \\to 0'} /> et <Inline tex={'1/x^2 \\to 0'} />. Donc :</p>
                  <Block tex={'\\boxed{\\lim_{x \\to +\\infty} \\frac{3x^2-5}{x^2+1} = \\frac{3}{1} = 3}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex15"
            num={15}
            title="Limite fondamentale de (e^x − 1)/x en 0"
            difficulty="Moyen"
            open={!!open.ex15}
            onToggle={() => toggle('ex15')}
            statement={
              <>
                <p>Calculer :</p>
                <Block tex={'\\lim_{x \\to 0} \\frac{e^x - 1}{x}'} />
                <p>Interpréter le résultat.</p>
              </>
            }
            correction={
              <>
                <Step label="Interprétation comme taux d'accroissement">
                  <p>On reconnaît le taux d'accroissement de <Inline tex={'x \\mapsto e^x'} /> en <Inline tex={'a = 0'} /> :</p>
                  <Block tex={'\\lim_{x \\to 0} \\frac{e^x - e^0}{x - 0} = \\left(e^x\\right)\'_{x=0} = e^0 = 1'} />
                </Step>
                <Step label="Vérification par développement limité">
                  <p>Au voisinage de 0 : <Inline tex={'e^x = 1 + x + o(x)'} />, donc <Inline tex={'e^x - 1 = x + o(x)'} />.</p>
                  <Block tex={'\\frac{e^x - 1}{x} = \\frac{x + o(x)}{x} = 1 + o(1) \\to 1'} />
                  <Block tex={'\\boxed{\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex16"
            num={16}
            title="Limite de x(e^{1/x} − 1) en +∞"
            difficulty="Moyen"
            open={!!open.ex16}
            onToggle={() => toggle('ex16')}
            tilt="r"
            statement={
              <>
                <p>Calculer :</p>
                <Block tex={'\\lim_{x \\to +\\infty} x\\left(e^{1/x} - 1\\right)'} />
              </>
            }
            correction={
              <>
                <Step label="Changement de variable">
                  <p>On pose <Inline tex={'t = \\tfrac{1}{x}'} />. Quand <Inline tex={'x \\to +\\infty'} />, <Inline tex={'t \\to 0^+'} />.</p>
                  <Block tex={'x\\left(e^{1/x} - 1\\right) = \\frac{e^t - 1}{t}'} />
                </Step>
                <Step label="Application de la limite fondamentale">
                  <Block tex={'\\lim_{t \\to 0^+} \\frac{e^t - 1}{t} = 1'} />
                  <Block tex={'\\boxed{\\lim_{x \\to +\\infty} x\\left(e^{1/x} - 1\\right) = 1}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex17"
            num={17}
            title="Limite de x·ln(x) en 0⁺"
            difficulty="Moyen"
            open={!!open.ex17}
            onToggle={() => toggle('ex17')}
            statement={
              <>
                <p>Calculer :</p>
                <Block tex={'\\lim_{x \\to 0^+} x \\ln x'} />
              </>
            }
            correction={
              <>
                <Step label="Changement de variable">
                  <p>On pose <Inline tex={'t = -\\ln x'} />. Quand <Inline tex={'x \\to 0^+'} />, <Inline tex={'t \\to +\\infty'} />. On a <Inline tex={'x = e^{-t}'} />.</p>
                  <Block tex={'x \\ln x = e^{-t} \\cdot (-t) = -t e^{-t}'} />
                </Step>
                <Step label="Croissances comparées">
                  <p>Par croissances comparées, <Inline tex={'t e^{-t} \\to 0'} /> quand <Inline tex={'t \\to +\\infty'} /> (l'exponentielle l'emporte sur le polynôme).</p>
                  <Block tex={'\\boxed{\\lim_{x \\to 0^+} x \\ln x = 0}'} />
                  <p>Remarque : bien que <Inline tex={'\\ln x \\to -\\infty'} />, le terme <Inline tex={'x \\to 0'} /> "écrase" le logarithme.</p>
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
                Avant chaque limite, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> Je tente la substitution directe — si ça donne une valeur, c'est fini.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Sinon, j'identifie la FI (<Inline tex={'0/0'} />, <Inline tex={'\\infty/\\infty'} />, <Inline tex={'\\infty - \\infty'} />, <Inline tex={'0 \\times \\infty'} />, <Inline tex={'1^\\infty'} />…).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Je factorise par le terme dominant (polynômes en <Inline tex={'\\pm \\infty'} />).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Pour les racines : multiplier par l'expression conjuguée.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Pour <Inline tex={'1^\\infty'} /> ou <Inline tex={'0^0'} /> : passer au logarithme.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/limites-cours"
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

export default Chapitre6LimitesExercicesPage;
