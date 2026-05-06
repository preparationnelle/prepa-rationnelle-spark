import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Repeat,
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

const Chapitre9RecurrenceExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/recurrence-exercices"
        title="Exercices · Chapitre 9 — Récurrence · Terminale → Prépa ECG"
        description="6 exercices progressifs sur le raisonnement par récurrence avec corrigés détaillés : sommes, inégalités, divisibilité, suites récurrentes."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 9</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">09 · Exercices · Récurrence</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Six récurrences <em className="font-lora italic text-carnet-red">à dérouler</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Égalités, inégalités, divisibilité, suite récurrente. Du plus simple au plus tordu. <span className="carnet-hl font-lora italic">Tente d'abord seul</span>, puis confronte ta rédaction au corrigé.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              2 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              2 Moyens
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
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Sommes — récurrences d'égalité</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Somme des carrés"
          difficulty="Facile"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>Démontrer par récurrence que pour tout <Inline tex={'n \\geq 1'} /> :</p>
              <Block tex={'\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}.'} />
            </>
          }
          correction={
            <>
              <p>Posons, pour <Inline tex={'n \\geq 1'} />, la propriété <Inline tex={'P(n) : \\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}'} />.</p>
              <Step label="Initialisation">
                <p>Pour <Inline tex={'n=1'} /> : à gauche <Inline tex={'\\sum_{k=1}^{1} k^2 = 1'} /> ; à droite <Inline tex={'\\frac{1 \\cdot 2 \\cdot 3}{6} = 1'} />. Donc <Inline tex={'P(1)'} /> est vraie.</p>
              </Step>
              <Step label="Hérédité">
                <p>Soit <Inline tex={'n \\geq 1'} /> ; supposons <Inline tex={'P(n)'} /> vraie (HR). Alors :</p>
                <Block tex={'\\sum_{k=1}^{n+1} k^2 = \\sum_{k=1}^{n} k^2 + (n+1)^2 \\stackrel{HR}{=} \\frac{n(n+1)(2n+1)}{6} + (n+1)^2.'} />
                <p>On factorise par <Inline tex={'\\frac{n+1}{6}'} /> :</p>
                <Block tex={'= \\frac{n+1}{6}\\bigl(n(2n+1) + 6(n+1)\\bigr) = \\frac{n+1}{6}(2n^2 + 7n + 6).'} />
                <p>Or <Inline tex={'2n^2 + 7n + 6 = (n+2)(2n+3)'} />, donc :</p>
                <Block tex={'\\sum_{k=1}^{n+1} k^2 = \\frac{(n+1)(n+2)(2(n+1)+1)}{6},'} />
                <p>qui est bien le membre de droite de <Inline tex={'P(n+1)'} />.</p>
              </Step>
              <Step label="Conclusion">
                <p>Par récurrence, pour tout <Inline tex={'n \\geq 1'} />, <Inline tex={'\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Somme des cubes"
          difficulty="Facile"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Démontrer par récurrence que pour tout <Inline tex={'n \\geq 1'} /> :</p>
              <Block tex={'\\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^{2}.'} />
            </>
          }
          correction={
            <>
              <p>Posons, pour <Inline tex={'n \\geq 1'} />, <Inline tex={'P(n) : \\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2'} />.</p>
              <Step label="Initialisation">
                <p>Pour <Inline tex={'n=1'} /> : <Inline tex={'\\sum_{k=1}^{1} k^3 = 1'} /> et <Inline tex={'\\left(\\frac{1 \\cdot 2}{2}\\right)^2 = 1'} />. Donc <Inline tex={'P(1)'} /> est vraie.</p>
              </Step>
              <Step label="Hérédité">
                <p>Soit <Inline tex={'n \\geq 1'} /> ; supposons <Inline tex={'P(n)'} /> vraie. Alors :</p>
                <Block tex={'\\sum_{k=1}^{n+1} k^3 = \\sum_{k=1}^{n} k^3 + (n+1)^3 \\stackrel{HR}{=} \\frac{n^2(n+1)^2}{4} + (n+1)^3.'} />
                <p>On factorise par <Inline tex={'(n+1)^2'} /> :</p>
                <Block tex={'= (n+1)^2 \\left(\\frac{n^2}{4} + (n+1)\\right) = (n+1)^2 \\cdot \\frac{n^2 + 4n + 4}{4} = \\frac{(n+1)^2 (n+2)^2}{4}.'} />
                <p>D'où <Inline tex={'\\sum_{k=1}^{n+1} k^3 = \\left(\\frac{(n+1)(n+2)}{2}\\right)^2'} />, c'est-à-dire <Inline tex={'P(n+1)'} />.</p>
              </Step>
              <Step label="Conclusion">
                <p>Par récurrence, pour tout <Inline tex={'n \\geq 1'} />, <Inline tex={'\\sum_{k=1}^{n} k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2'} />.</p>
                <p className="text-carnet-ink-mute italic text-[14px]">Remarque : on retrouve <Inline tex={'\\sum k^3 = \\left(\\sum k\\right)^2'} />, identité élégante à retenir.</p>
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Inégalités & divisibilité</h2>
        </div>

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Une inégalité exponentielle"
          difficulty="Moyen"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="r"
          statement={
            <>
              <p>Démontrer par récurrence que pour tout <Inline tex={'n \\geq 4'} /> :</p>
              <Block tex={'2^n \\geq n^2.'} />
              <p className="text-carnet-ink-mute italic text-[14px]">Indication : justifier soigneusement le rang de départ.</p>
            </>
          }
          correction={
            <>
              <p>Posons, pour <Inline tex={'n \\geq 4'} />, <Inline tex={'P(n) : 2^n \\geq n^2'} />.</p>
              <p className="text-carnet-ink-mute italic">Pourquoi <Inline tex={'n_0 = 4'} /> ? Pour <Inline tex={'n=2'} /> on a <Inline tex={'4 = 4'} /> ; pour <Inline tex={'n=3'} /> on a <Inline tex={'8 < 9'} />. La propriété est fausse au rang 3, on initialise au-delà.</p>
              <Step label="Initialisation">
                <p>Pour <Inline tex={'n=4'} /> : <Inline tex={'2^4 = 16 \\geq 16 = 4^2'} />. Donc <Inline tex={'P(4)'} /> est vraie.</p>
              </Step>
              <Step label="Hérédité">
                <p>Soit <Inline tex={'n \\geq 4'} /> ; supposons <Inline tex={'2^n \\geq n^2'} /> (HR). Alors :</p>
                <Block tex={'2^{n+1} = 2 \\cdot 2^n \\stackrel{HR}{\\geq} 2 n^2.'} />
                <p>Il suffit de montrer que <Inline tex={'2 n^2 \\geq (n+1)^2'} />. Or :</p>
                <Block tex={'2n^2 - (n+1)^2 = 2n^2 - n^2 - 2n - 1 = n^2 - 2n - 1 = (n-1)^2 - 2.'} />
                <p>Pour <Inline tex={'n \\geq 4'} />, <Inline tex={'(n-1)^2 \\geq 9 > 2'} />, donc <Inline tex={'2n^2 - (n+1)^2 > 0'} />, soit <Inline tex={'2n^2 \\geq (n+1)^2'} />.</p>
                <p>Par transitivité, <Inline tex={'2^{n+1} \\geq (n+1)^2'} />, c'est-à-dire <Inline tex={'P(n+1)'} />.</p>
              </Step>
              <Step label="Conclusion">
                <p>Par récurrence, pour tout <Inline tex={'n \\geq 4'} />, <Inline tex={'2^n \\geq n^2'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Divisibilité par 7"
          difficulty="Moyen"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          statement={
            <>
              <p>Démontrer par récurrence que pour tout <Inline tex={'n \\geq 0'} />, <Inline tex={'8^n - 1'} /> est divisible par <Inline tex={'7'} />.</p>
            </>
          }
          correction={
            <>
              <p>Posons, pour <Inline tex={'n \\geq 0'} />, <Inline tex={'P(n) : \\exists\\, k_n \\in \\mathbb{Z},\\ 8^n - 1 = 7 k_n'} />.</p>
              <Step label="Initialisation">
                <p>Pour <Inline tex={'n=0'} /> : <Inline tex={'8^0 - 1 = 0 = 7 \\times 0'} />. Donc <Inline tex={'P(0)'} /> est vraie (avec <Inline tex={'k_0 = 0'} />).</p>
              </Step>
              <Step label="Hérédité">
                <p>Soit <Inline tex={'n \\geq 0'} /> ; supposons qu'il existe <Inline tex={'k_n \\in \\mathbb{Z}'} /> tel que <Inline tex={'8^n - 1 = 7 k_n'} /> (HR), donc <Inline tex={'8^n = 7 k_n + 1'} />. Alors :</p>
                <Block tex={'8^{n+1} - 1 = 8 \\cdot 8^n - 1 \\stackrel{HR}{=} 8(7 k_n + 1) - 1 = 56 k_n + 8 - 1 = 7(8 k_n + 1).'} />
                <p>En posant <Inline tex={'k_{n+1} = 8 k_n + 1 \\in \\mathbb{Z}'} />, on a <Inline tex={'8^{n+1} - 1 = 7 k_{n+1}'} />, donc <Inline tex={'P(n+1)'} /> est vraie.</p>
              </Step>
              <Step label="Conclusion">
                <p>Par récurrence, pour tout <Inline tex={'n \\geq 0'} />, <Inline tex={'7 \\mid 8^n - 1'} />.</p>
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

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Inégalité de Bernoulli"
          difficulty="Difficile"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'x > -1'} />. Démontrer par récurrence que pour tout <Inline tex={'n \\geq 0'} /> :</p>
              <Block tex={'(1 + x)^n \\geq 1 + n x.'} />
              <p className="text-carnet-ink-mute italic text-[14px]">Cette inégalité est centrale en analyse — tu la reverras dès la première année de prépa.</p>
            </>
          }
          correction={
            <>
              <p>Soit <Inline tex={'x > -1'} /> fixé. Posons, pour <Inline tex={'n \\geq 0'} />, <Inline tex={'P(n) : (1+x)^n \\geq 1 + nx'} />.</p>
              <Step label="Initialisation">
                <p>Pour <Inline tex={'n=0'} /> : <Inline tex={'(1+x)^0 = 1 \\geq 1 = 1 + 0 \\cdot x'} />. Donc <Inline tex={'P(0)'} /> est vraie.</p>
              </Step>
              <Step label="Hérédité">
                <p>Soit <Inline tex={'n \\geq 0'} /> ; supposons <Inline tex={'(1+x)^n \\geq 1 + nx'} /> (HR). Comme <Inline tex={'x > -1'} />, on a <Inline tex={'1 + x > 0'} />, donc multiplier l'inégalité HR par <Inline tex={'1+x'} /> conserve le sens :</p>
                <Block tex={'(1+x)^{n+1} = (1+x)(1+x)^n \\stackrel{HR}{\\geq} (1+x)(1+nx).'} />
                <p>Développons :</p>
                <Block tex={'(1+x)(1+nx) = 1 + nx + x + nx^2 = 1 + (n+1)x + nx^2.'} />
                <p>Or <Inline tex={'nx^2 \\geq 0'} /> (car <Inline tex={'n \\geq 0'} /> et <Inline tex={'x^2 \\geq 0'} />), donc :</p>
                <Block tex={'(1+x)^{n+1} \\geq 1 + (n+1)x,'} />
                <p>c'est-à-dire <Inline tex={'P(n+1)'} />.</p>
                <p className="text-carnet-ink-mute italic">Le point délicat : justifier que <Inline tex={'1+x > 0'} /> avant de multiplier l'inégalité — sans ça, le sens pourrait changer.</p>
              </Step>
              <Step label="Conclusion">
                <p>Par récurrence, pour tout <Inline tex={'n \\geq 0'} />, <Inline tex={'(1+x)^n \\geq 1 + nx'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Suite récurrente bornée"
          difficulty="Difficile"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          statement={
            <>
              <p>Soit <Inline tex={'(u_n)_{n \\geq 0}'} /> la suite définie par :</p>
              <Block tex={'u_0 = 0 \\quad \\text{et} \\quad u_{n+1} = \\sqrt{2 + u_n} \\text{ pour tout } n \\geq 0.'} />
              <p>Démontrer par récurrence que pour tout <Inline tex={'n \\geq 0'} /> :</p>
              <Block tex={'0 \\leq u_n < 2.'} />
              <p className="text-carnet-ink-mute italic text-[14px]">L'encadrement double — il faut démontrer les deux inégalités d'un coup.</p>
            </>
          }
          correction={
            <>
              <p>Posons, pour <Inline tex={'n \\geq 0'} />, <Inline tex={'P(n) : 0 \\leq u_n < 2'} />.</p>
              <Step label="Initialisation">
                <p>Pour <Inline tex={'n=0'} /> : <Inline tex={'u_0 = 0'} />, donc <Inline tex={'0 \\leq u_0 = 0 < 2'} />. <Inline tex={'P(0)'} /> est vraie.</p>
              </Step>
              <Step label="Hérédité">
                <p>Soit <Inline tex={'n \\geq 0'} /> ; supposons <Inline tex={'0 \\leq u_n < 2'} /> (HR). Montrons <Inline tex={'0 \\leq u_{n+1} < 2'} />.</p>
                <p><strong>Minoration.</strong> Comme <Inline tex={'u_n \\geq 0'} />, on a <Inline tex={'2 + u_n \\geq 2 > 0'} />, donc <Inline tex={'u_{n+1} = \\sqrt{2 + u_n}'} /> est bien défini et :</p>
                <Block tex={'u_{n+1} = \\sqrt{2 + u_n} \\geq \\sqrt{2} > 0 \\geq 0.'} />
                <p><strong>Majoration.</strong> Par HR, <Inline tex={'u_n < 2'} />, donc <Inline tex={'2 + u_n < 4'} />. La fonction racine étant strictement croissante :</p>
                <Block tex={'u_{n+1} = \\sqrt{2 + u_n} < \\sqrt{4} = 2.'} />
                <p>Donc <Inline tex={'0 \\leq u_{n+1} < 2'} />, c'est-à-dire <Inline tex={'P(n+1)'} />.</p>
              </Step>
              <Step label="Conclusion">
                <p>Par récurrence, pour tout <Inline tex={'n \\geq 0'} />, <Inline tex={'0 \\leq u_n < 2'} />.</p>
                <p className="text-carnet-ink-mute italic text-[14px]">Bonus : la suite étant croissante (à vérifier) et majorée par 2, elle converge. La limite vérifie <Inline tex={'\\ell = \\sqrt{2 + \\ell}'} />, soit <Inline tex={'\\ell^2 = 2 + \\ell'} />, donc <Inline tex={'\\ell = 2'} /> (l'autre racine étant négative).</p>
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
                Avant chaque récurrence, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> J'écris explicitement <Inline tex={'P(n)'} />.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Je vérifie l'initialisation au <em>bon</em> rang <Inline tex={'n_0'} />.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Je commence l'hérédité par <em>« Soit n... ; supposons P(n) »</em>.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> J'<em>utilise</em> la HR explicitement.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Je conclus avec <em>« par récurrence, pour tout n... »</em>.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/recurrence-cours"
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

export default Chapitre9RecurrenceExercicesPage;
