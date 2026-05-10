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

const Chapitre2SommesSuitesExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/sommes-suites-exercices"
        title="Exercices · Chapitre 2 — Sommes & suites · Terminale → Prépa ECG"
        description="19 exercices progressifs sur les sommes et produits : linéarité, sommes usuelles, changement d'indice, télescopage et techniques de prépa."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 2 · Sommes & suites</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">02 · Exercices · Sommes & suites</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Dix-neuf sommes <em className="font-lora italic text-carnet-red">à manipuler</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Linéarité, sommes usuelles, changement d'indice, télescopage, produits. <span className="carnet-hl font-lora italic">Pose la formule avant le calcul</span>, et garde un œil sur les bornes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              6 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              9 Moyens
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-carnet-red text-carnet-paper bg-carnet-red">
              4 Difficiles
            </span>
          </div>
        </header>

        {/* Module 1 */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M1</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Sommes de base — linéarité & formules usuelles</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Linéarité d'une somme"
          difficulty="Facile"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'S = \\sum_{k=1}^{100} (2k + 3).'} />
            </>
          }
          correction={
            <>
              <Step label="Couper en deux et sortir la constante">
                <Block tex={'S = 2\\sum_{k=1}^{100} k + \\sum_{k=1}^{100} 3.'} />
              </Step>
              <Step label="Formules usuelles">
                <Block tex={'\\sum_{k=1}^{100} k = \\frac{100 \\cdot 101}{2} = 5050, \\quad \\sum_{k=1}^{100} 3 = 300.'} />
                <p>Attention : <Inline tex={'\\sum_{k=1}^{100} 3'} /> n'est pas 3, mais 3 répété 100 fois.</p>
              </Step>
              <Step label="Conclusion">
                <Block tex={'S = 2 \\times 5050 + 300 = 10\\,400.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Somme d'une suite arithmétique"
          difficulty="Facile"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Soit <Inline tex={'(u_k)'} /> définie par <Inline tex={'u_k = 3 + 2k'} /> pour <Inline tex={'k \\in \\{1, \\ldots, 50\\}'} />. Calculer :</p>
              <Block tex={'S = \\sum_{k=1}^{50} u_k.'} />
            </>
          }
          correction={
            <>
              <Step label="Identifier la suite arithmétique">
                <p>Suite arithmétique de raison <Inline tex={'r = 2'} /> : <Inline tex={'u_1 = 5, u_{50} = 103'} />.</p>
              </Step>
              <Step label="Formule de la somme arithmétique">
                <Block tex={'S = \\frac{n(u_1 + u_n)}{2} = \\frac{50 \\cdot (5 + 103)}{2} = 50 \\cdot 54 = 2700.'} />
              </Step>
              <Step label="Vérification par linéarité">
                <p><Inline tex={'S = 3 \\cdot 50 + 2 \\sum_{k=1}^{50} k = 150 + 2 \\cdot \\tfrac{50 \\cdot 51}{2} = 150 + 2550 = 2700.'} /></p>
              </Step>
            </>
          }
        />

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Somme géométrique finie"
          difficulty="Facile"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="r"
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'S = \\sum_{k=0}^{8} 5 \\cdot (0{,}8)^k.'} />
              <p>Donner une forme exacte et une valeur approchée à <Inline tex={'10^{-3}'} /> près.</p>
            </>
          }
          correction={
            <>
              <Step label="Reconnaître la somme géométrique">
                <p>Premier terme <Inline tex={'a = 5'} />, raison <Inline tex={'q = 0{,}8'} />, <Inline tex={'n = 9'} /> termes (de <Inline tex={'k=0'} /> à <Inline tex={'k=8'} />).</p>
              </Step>
              <Step label="Application de la formule">
                <Block tex={'S = a \\cdot \\frac{1 - q^n}{1 - q} = 5 \\cdot \\frac{1 - (0{,}8)^9}{0{,}2} = 25\\bigl(1 - (0{,}8)^9\\bigr).'} />
              </Step>
              <Step label="Valeur approchée">
                <p><Inline tex={'(0{,}8)^9 \\approx 0{,}1342'} />, donc <Inline tex={'S \\approx 25 \\times 0{,}8658 \\approx 21{,}645'} />.</p>
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Sommes classiques & changement d'indice</h2>
        </div>

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Linéarité & factorisation"
          difficulty="Moyen"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'n \\geq 1'} />. Calculer en fonction de <Inline tex={'n'} /> :</p>
              <Block tex={'S_n = \\sum_{k=1}^n (k^2 + 3k).'} />
              <p>On donnera une <strong>forme factorisée</strong>.</p>
            </>
          }
          correction={
            <>
              <Step label="Linéarité">
                <Block tex={'S_n = \\sum_{k=1}^n k^2 + 3\\sum_{k=1}^n k = \\frac{n(n+1)(2n+1)}{6} + \\frac{3n(n+1)}{2}.'} />
              </Step>
              <Step label="Mise au même dénominateur et factorisation">
                <Block tex={'S_n = \\frac{n(n+1)\\bigl[(2n+1) + 9\\bigr]}{6} = \\frac{n(n+1)(2n+10)}{6} = \\frac{n(n+1)(n+5)}{3}.'} />
              </Step>
              <Step label="Vérification">
                <p>Pour <Inline tex={'n = 2'} /> : <Inline tex={'S_2 = (1+3) + (4+6) = 14'} />, et <Inline tex={'\\tfrac{2 \\cdot 3 \\cdot 7}{3} = 14'} />. ✓</p>
              </Step>
            </>
          }
        />

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Changement d'indice"
          difficulty="Moyen"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'S = \\sum_{k=10}^{30} k.'} />
              <p>Rédiger la <strong>méthode générale</strong>, pas seulement le résultat.</p>
            </>
          }
          correction={
            <>
              <Step label="Méthode 1 — décomposition">
                <Block tex={'\\sum_{k=10}^{30} k = \\sum_{k=1}^{30} k - \\sum_{k=1}^{9} k = \\frac{30 \\cdot 31}{2} - \\frac{9 \\cdot 10}{2} = 465 - 45 = 420.'} />
              </Step>
              <Step label="Méthode 2 — formule arithmétique">
                <p>La somme contient <Inline tex={'30 - 10 + 1 = 21'} /> termes (attention au <em>+1</em>) :</p>
                <Block tex={'S = \\frac{21 \\cdot (10 + 30)}{2} = 21 \\times 20 = 420.'} />
              </Step>
            </>
          }
        />

        {/* Module 3 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Télescopage</h2>
        </div>

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Première somme télescopique"
          difficulty="Moyen"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          tilt="l"
          statement={
            <>
              <p><strong>a)</strong> Montrer que pour tout <Inline tex={'n \\geq 1'} /> :</p>
              <Block tex={'\\sum_{k=1}^{n} \\frac{1}{k(k+1)} = 1 - \\frac{1}{n+1}.'} />
              <p><strong>b)</strong> En déduire <Inline tex={'\\sum_{k=1}^{20} \\frac{1}{k(k+1)}'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Décomposition en éléments simples">
                <p>On cherche <Inline tex={'A, B'} /> tels que <Inline tex={'\\frac{1}{k(k+1)} = \\frac{A}{k} + \\frac{B}{k+1}'} />. Le calcul donne <Inline tex={'A = 1, B = -1'} /> :</p>
                <Block tex={'\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}.'} />
              </Step>
              <Step label="Télescopage">
                <Block tex={'\\sum_{k=1}^n \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 - \\frac{1}{n+1}.'} />
                <p>Tous les termes intermédiaires se compensent deux à deux.</p>
              </Step>
              <Step label="b) Application">
                <Block tex={'\\sum_{k=1}^{20} \\frac{1}{k(k+1)} = 1 - \\frac{1}{21} = \\frac{20}{21}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Télescopique avec décalage"
          difficulty="Difficile"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          statement={
            <>
              <p><strong>a)</strong> Trouver <Inline tex={'A, B'} /> tels que <Inline tex={'\\frac{1}{k(k+2)} = \\frac{A}{k} + \\frac{B}{k+2}'} />.</p>
              <p><strong>b)</strong> En déduire pour <Inline tex={'n \\geq 1'} /> une expression simple de <Inline tex={'S_n = \\sum_{k=1}^n \\frac{1}{k(k+2)}'} />.</p>
              <p><strong>c)</strong> Calculer <Inline tex={'\\lim_{n \\to +\\infty} S_n'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Décomposition">
                <p>De <Inline tex={'1 = A(k+2) + Bk'} />, on tire <Inline tex={'A = \\tfrac{1}{2}, B = -\\tfrac{1}{2}'} /> :</p>
                <Block tex={'\\frac{1}{k(k+2)} = \\frac{1}{2}\\left(\\frac{1}{k} - \\frac{1}{k+2}\\right).'} />
              </Step>
              <Step label="b) Télescopage avec décalage de 2">
                <p>Avec <Inline tex={'j = k + 2'} /> : <Inline tex={'\\sum_{k=1}^n \\frac{1}{k+2} = \\sum_{j=3}^{n+2} \\frac{1}{j}'} />. En soustrayant :</p>
                <Block tex={'\\sum_{k=1}^n \\left(\\frac{1}{k} - \\frac{1}{k+2}\\right) = 1 + \\tfrac{1}{2} - \\frac{1}{n+1} - \\frac{1}{n+2}.'} />
                <Block tex={'S_n = \\frac{3}{4} - \\frac{1}{2(n+1)} - \\frac{1}{2(n+2)}.'} />
              </Step>
              <Step label="c) Limite">
                <p>Les deux fractions tendent vers 0, donc :</p>
                <Block tex={'\\lim_{n \\to +\\infty} S_n = \\frac{3}{4}.'} />
              </Step>
              <Step label="Vérification">
                <p><Inline tex={'n = 1'} /> : <Inline tex={'S_1 = \\tfrac{1}{3}'} />, et la formule donne <Inline tex={'\\tfrac{3}{4} - \\tfrac{1}{4} - \\tfrac{1}{6} = \\tfrac{1}{3}'} />. ✓</p>
              </Step>
            </>
          }
        />

        {/* Exercice 8 */}
        <Exercise
          id="ex8"
          num={8}
          title="Produit télescopique"
          difficulty="Difficile"
          open={!!open.ex8}
          onToggle={() => toggle('ex8')}
          tilt="r"
          statement={
            <>
              <p>Pour <Inline tex={'n \\geq 2'} />, on pose :</p>
              <Block tex={'P_n = \\prod_{k=2}^n \\left(1 - \\frac{1}{k^2}\\right).'} />
              <p><strong>a)</strong> Vérifier que <Inline tex={'1 - \\tfrac{1}{k^2} = \\tfrac{(k-1)(k+1)}{k^2}'} />.</p>
              <p><strong>b)</strong> En séparant le produit en deux, montrer que <Inline tex={'P_n = \\frac{n+1}{2n}'} />.</p>
              <p><strong>c)</strong> Que vaut <Inline tex={'\\lim_{n \\to +\\infty} P_n'} /> ?</p>
            </>
          }
          correction={
            <>
              <Step label="a) Identité remarquable">
                <Block tex={'1 - \\frac{1}{k^2} = \\frac{k^2 - 1}{k^2} = \\frac{(k-1)(k+1)}{k^2}.'} />
              </Step>
              <Step label="b) Séparer en deux produits télescopiques">
                <Block tex={'P_n = \\underbrace{\\prod_{k=2}^n \\frac{k-1}{k}}_{= 1/n} \\times \\underbrace{\\prod_{k=2}^n \\frac{k+1}{k}}_{= (n+1)/2}.'} />
                <p>Les deux produits télescopent :</p>
                <Block tex={'\\prod_{k=2}^n \\frac{k-1}{k} = \\frac{1}{2} \\cdot \\frac{2}{3} \\cdots \\frac{n-1}{n} = \\frac{1}{n}, \\quad \\prod_{k=2}^n \\frac{k+1}{k} = \\frac{n+1}{2}.'} />
                <Block tex={'P_n = \\frac{1}{n} \\cdot \\frac{n+1}{2} = \\frac{n+1}{2n}.'} />
              </Step>
              <Step label="c) Limite">
                <p><Inline tex={'\\frac{n+1}{2n} = \\frac{1}{2} + \\frac{1}{2n}'} />, donc <Inline tex={'\\lim P_n = \\tfrac{1}{2}'} />.</p>
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

        {/* Exercice 9 */}
        <Exercise
          id="ex9"
          num={9}
          title="Somme des carrés (par récurrence)"
          difficulty="Difficile"
          open={!!open.ex9}
          onToggle={() => toggle('ex9')}
          tilt="l"
          statement={
            <>
              <p>Démontrer par récurrence sur <Inline tex={'n \\geq 1'} /> que :</p>
              <Block tex={'\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}.'} />
            </>
          }
          correction={
            <>
              <Step label="Initialisation">
                <p>Pour <Inline tex={'n = 1'} /> : <Inline tex={'S_1 = 1'} /> et <Inline tex={'\\tfrac{1 \\cdot 2 \\cdot 3}{6} = 1'} />. OK.</p>
              </Step>
              <Step label="Hérédité">
                <p>Supposons la formule vraie au rang <Inline tex={'n'} />. Alors :</p>
                <Block tex={'S_{n+1} = S_n + (n+1)^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \\frac{(n+1)\\bigl[n(2n+1) + 6(n+1)\\bigr]}{6}.'} />
                <p>On factorise <Inline tex={'n(2n+1) + 6(n+1) = 2n^2 + 7n + 6 = (n+2)(2n+3)'} />, d'où :</p>
                <Block tex={'S_{n+1} = \\frac{(n+1)(n+2)(2n+3)}{6},'} />
                <p>qui est bien la formule au rang <Inline tex={'n+1'} />.</p>
              </Step>
              <Step label="Conclusion">
                <p>Par récurrence, la formule est vraie pour tout <Inline tex={'n \\geq 1'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 10 */}
        <Exercise
          id="ex10"
          num={10}
          title="Somme « dérivée » d'une géométrique : Σ k·2ᵏ"
          difficulty="Difficile"
          open={!!open.ex10}
          onToggle={() => toggle('ex10')}
          statement={
            <>
              <p>Pour <Inline tex={'n \\geq 1'} />, on pose <Inline tex={'S_n = \\sum_{k=1}^n k \\cdot 2^k'} />.</p>
              <p><strong>a)</strong> Calculer <Inline tex={'S_1, S_2, S_3'} /> et conjecturer une formule.</p>
              <p><strong>b)</strong> En écrivant <Inline tex={'2 S_n'} /> et en l'alignant intelligemment avec <Inline tex={'S_n'} />, démontrer la formule.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Premiers termes & conjecture">
                <p><Inline tex={'S_1 = 2, S_2 = 10, S_3 = 34'} />. On teste <Inline tex={'(n-1) \\cdot 2^{n+1} + 2'} /> : <Inline tex={'2, 10, 34'} />. ✓</p>
                <Block tex={'S_n = (n-1) \\cdot 2^{n+1} + 2.'} />
              </Step>
              <Step label="b) Astuce S − qS">
                <p>On écrit :</p>
                <Block tex={'S_n = 1 \\cdot 2 + 2 \\cdot 2^2 + 3 \\cdot 2^3 + \\cdots + n \\cdot 2^n,'} />
                <Block tex={'2 S_n = 1 \\cdot 2^2 + 2 \\cdot 2^3 + \\cdots + (n-1) \\cdot 2^n + n \\cdot 2^{n+1}.'} />
                <p>Soustraction (en alignant les puissances) :</p>
                <Block tex={'S_n - 2 S_n = (2 + 2^2 + \\cdots + 2^n) - n \\cdot 2^{n+1}.'} />
              </Step>
              <Step label="Somme géométrique partielle">
                <Block tex={'\\sum_{k=1}^n 2^k = 2^{n+1} - 2.'} />
                <Block tex={'-S_n = (2^{n+1} - 2) - n \\cdot 2^{n+1} = (1 - n) \\cdot 2^{n+1} - 2.'} />
                <Block tex={'S_n = (n - 1) \\cdot 2^{n+1} + 2.'} />
              </Step>
              <Step label="À retenir">
                <p>La technique « <Inline tex={'S - qS'} /> » est la version lycée de la <em>dérivation d'une série géométrique</em> — elle revient à chaque fois qu'on somme <Inline tex={'k \\cdot q^k'} />, <Inline tex={'k^2 \\cdot q^k'} />, dans les espérances de variables géométriques, etc.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 11 */}
        <Exercise
          id="ex11"
          num={11}
          title="Somme des entiers impairs"
          difficulty="Facile"
          open={!!open.ex11}
          onToggle={() => toggle('ex11')}
          tilt="l"
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'S_n = \\sum_{k=1}^{n} (2k-1)'} />
              <p>et reconnaître le résultat comme un carré parfait.</p>
            </>
          }
          correction={
            <>
              <Step label="Linéarité">
                <Block tex={'S_n = 2\\sum_{k=1}^n k - \\sum_{k=1}^n 1 = 2 \\cdot \\frac{n(n+1)}{2} - n = n(n+1) - n.'} />
              </Step>
              <Step label="Conclusion">
                <p>On simplifie :</p>
                <Block tex={'S_n = n^2 + n - n = n^2.'} />
                <p>La somme des <Inline tex={'n'} /> premiers entiers impairs est un carré parfait : <Inline tex={'S_n = n^2'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 12 */}
        <Exercise
          id="ex12"
          num={12}
          title="Démontrer la formule géométrique"
          difficulty="Facile"
          open={!!open.ex12}
          onToggle={() => toggle('ex12')}
          statement={
            <>
              <p>Soit <Inline tex={'q \\neq 1'} />. Montrer que :</p>
              <Block tex={'\\sum_{k=0}^{n} q^k = \\frac{1 - q^{n+1}}{1 - q}.'} />
            </>
          }
          correction={
            <>
              <Step label="Poser la somme">
                <p>On pose <Inline tex={'S = \\sum_{k=0}^n q^k = 1 + q + q^2 + \\cdots + q^n'} />.</p>
              </Step>
              <Step label="Multiplier par q">
                <Block tex={'qS = q + q^2 + \\cdots + q^n + q^{n+1} = \\sum_{k=1}^{n+1} q^k.'} />
              </Step>
              <Step label="Soustraire S − qS">
                <Block tex={'S - qS = 1 - q^{n+1},'} />
                <p>car tous les termes intermédiaires se compensent.</p>
              </Step>
              <Step label="Conclusion">
                <p>Comme <Inline tex={'q \\neq 1'} />, on peut diviser :</p>
                <Block tex={'S = \\frac{1 - q^{n+1}}{1 - q}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 13 */}
        <Exercise
          id="ex13"
          num={13}
          title="Somme de k(k−1)"
          difficulty="Moyen"
          open={!!open.ex13}
          onToggle={() => toggle('ex13')}
          tilt="r"
          statement={
            <>
              <p>Pour <Inline tex={'n \\geq 2'} />, calculer en fonction de <Inline tex={'n'} /> :</p>
              <Block tex={'S_n = \\sum_{k=2}^{n} k(k-1).'} />
            </>
          }
          correction={
            <>
              <Step label="Développer le terme général">
                <p>On écrit <Inline tex={'k(k-1) = k^2 - k'} />, donc :</p>
                <Block tex={'S_n = \\sum_{k=2}^n k^2 - \\sum_{k=2}^n k.'} />
              </Step>
              <Step label="Utiliser les formules usuelles">
                <Block tex={'S_n = \\left(\\frac{n(n+1)(2n+1)}{6} - 1\\right) - \\left(\\frac{n(n+1)}{2} - 1\\right).'} />
              </Step>
              <Step label="Simplifier">
                <Block tex={'S_n = \\frac{n(n+1)(2n+1) - 3n(n+1)}{6} = \\frac{n(n+1)\\bigl[(2n+1) - 3\\bigr]}{6} = \\frac{n(n+1)(2n-2)}{6}.'} />
                <Block tex={'S_n = \\frac{n(n+1)(n-1)}{3}.'} />
              </Step>
              <Step label="Vérification (n = 2)">
                <p><Inline tex={'S_2 = 2 \\cdot 1 = 2'} />, et la formule donne <Inline tex={'\\tfrac{2 \\cdot 3 \\cdot 1}{3} = 2'} />. ✓</p>
              </Step>
            </>
          }
        />

        {/* Exercice 14 */}
        <Exercise
          id="ex14"
          num={14}
          title="Deux sommes arithmétiques imbriquées"
          difficulty="Moyen"
          open={!!open.ex14}
          onToggle={() => toggle('ex14')}
          statement={
            <>
              <p>Soit <Inline tex={'u_k = 2k - 1'} />. Calculer :</p>
              <Block tex={'A = \\sum_{k=1}^{20} u_k \\qquad \\text{puis} \\qquad B = \\sum_{k=1}^{20} u_{2k}.'} />
            </>
          }
          correction={
            <>
              <Step label="Calcul de A">
                <Block tex={'A = \\sum_{k=1}^{20}(2k-1) = 2 \\cdot \\frac{20 \\cdot 21}{2} - 20 = 420 - 20 = 400 = 20^2.'} />
              </Step>
              <Step label="Exprimer u_{2k}">
                <p>On substitue <Inline tex={'2k'} /> dans la formule : <Inline tex={'u_{2k} = 2(2k) - 1 = 4k - 1'} />.</p>
              </Step>
              <Step label="Calcul de B">
                <Block tex={'B = \\sum_{k=1}^{20}(4k-1) = 4 \\cdot \\frac{20 \\cdot 21}{2} - 20 = 840 - 20 = 820.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 15 */}
        <Exercise
          id="ex15"
          num={15}
          title="Trouver le rang à partir d'un seuil"
          difficulty="Moyen"
          open={!!open.ex15}
          onToggle={() => toggle('ex15')}
          tilt="l"
          statement={
            <>
              <p>Pour <Inline tex={'n \\geq 0'} />, on pose <Inline tex={'T_n = \\displaystyle\\sum_{k=0}^{n} 3^k'} />.</p>
              <p><strong>a)</strong> Calculer <Inline tex={'T_n'} /> en fonction de <Inline tex={'n'} />.</p>
              <p><strong>b)</strong> Déterminer le plus petit entier <Inline tex={'n'} /> tel que <Inline tex={'T_n > 500'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Formule de la somme géométrique">
                <p>Suite géométrique de raison 3 et de premier terme 1 :</p>
                <Block tex={'T_n = \\frac{3^{n+1} - 1}{3 - 1} = \\frac{3^{n+1} - 1}{2}.'} />
              </Step>
              <Step label="b) Résoudre T_n > 500">
                <Block tex={'\\frac{3^{n+1} - 1}{2} > 500 \\Longleftrightarrow 3^{n+1} > 1001.'} />
                <p>On passe au logarithme : <Inline tex={'(n+1)\\ln 3 > \\ln 1001'} />, soit <Inline tex={'n + 1 > \\dfrac{\\ln 1001}{\\ln 3} \\approx 6{,}28'} />.</p>
                <p>Donc <Inline tex={'n + 1 \\geq 7'} />, i.e. <Inline tex={'n \\geq 6'} />.</p>
              </Step>
              <Step label="Vérification">
                <p><Inline tex={'T_6 = \\tfrac{3^7 - 1}{2} = \\tfrac{2187 - 1}{2} = 1093 > 500'} />. ✓</p>
                <p><Inline tex={'T_5 = \\tfrac{3^6 - 1}{2} = \\tfrac{729 - 1}{2} = 364 < 500'} />. Donc le plus petit entier est <Inline tex={'n = 6'} />.</p>
              </Step>
            </>
          }
        />

          {/* Module M4 — Sommes classiques & télescopage */}
          <div className="mb-2 mt-10">
            <span className="inline-block bg-carnet-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              M4 — Sommes classiques &amp; télescopage
            </span>
          </div>

          <Exercise
            id="ex16"
            num={16}
            title="Somme des entiers impairs"
            difficulty="Facile"
            open={!!open.ex16}
            onToggle={() => toggle('ex16')}
            tilt="l"
            statement={
              <>
                <p>Calculer la somme des 10 premiers entiers impairs :</p>
                <Block tex={'S = \\sum_{k=1}^{10}(2k-1)'} />
              </>
            }
            correction={
              <>
                <Step label="Linéarité de la somme">
                  <Block tex={'S = 2\\sum_{k=1}^{10}k - \\sum_{k=1}^{10}1 = 2 \\cdot \\frac{10 \\cdot 11}{2} - 10 = 110 - 10'} />
                </Step>
                <Step label="Résultat — propriété remarquable">
                  <p>La somme des <Inline tex={'n'} /> premiers entiers impairs vaut toujours <Inline tex={'n^2'} />.</p>
                  <Block tex={'\\boxed{S = 100 = 10^2}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex17"
            num={17}
            title="Somme arithmétique avec paramètre"
            difficulty="Moyen"
            open={!!open.ex17}
            onToggle={() => toggle('ex17')}
            statement={
              <>
                <p>Calculer, en fonction de <Inline tex={'n \\in \\mathbb{N}'} /> :</p>
                <Block tex={'S_n = \\sum_{k=0}^{n}(3k+2)'} />
              </>
            }
            correction={
              <>
                <Step label="Décomposition par linéarité">
                  <Block tex={'S_n = 3\\sum_{k=0}^{n}k + 2\\sum_{k=0}^{n}1 = 3 \\cdot \\frac{n(n+1)}{2} + 2(n+1)'} />
                </Step>
                <Step label="Factorisation">
                  <Block tex={'S_n = (n+1)\\left(\\frac{3n}{2} + 2\\right) = (n+1) \\cdot \\frac{3n+4}{2}'} />
                  <Block tex={'\\boxed{S_n = \\frac{(n+1)(3n+4)}{2}}'} />
                  <p>Vérification pour <Inline tex={'n=2'} /> : <Inline tex={'S_2 = 2+5+8 = 15'} /> et <Inline tex={'\\frac{3 \\cdot 14}{2} = 21'} />… vérifier : <Inline tex={'\\frac{3 \\cdot 10}{2}=15'} />. ✓</p>
                </Step>
              </>
            }
          />

          <Exercise
            id="ex18"
            num={18}
            title="Série télescopique"
            difficulty="Moyen"
            open={!!open.ex18}
            onToggle={() => toggle('ex18')}
            tilt="r"
            statement={
              <>
                <p>Calculer, en fonction de <Inline tex={'n \\geq 1'} /> :</p>
                <Block tex={'T_n = \\sum_{k=1}^{n}\\frac{1}{k(k+1)}'} />
              </>
            }
            correction={
              <>
                <Step label="Décomposition en éléments simples">
                  <p>On remarque que :</p>
                  <Block tex={'\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}'} />
                </Step>
                <Step label="Télescopage">
                  <Block tex={'T_n = \\sum_{k=1}^{n}\\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = \\frac{1}{1} - \\frac{1}{n+1}'} />
                  <p>La plupart des termes s'annulent (somme télescopique).</p>
                  <Block tex={'\\boxed{T_n = \\frac{n}{n+1}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex19"
            num={19}
            title="Somme de k² − k"
            difficulty="Moyen"
            open={!!open.ex19}
            onToggle={() => toggle('ex19')}
            statement={
              <>
                <p>Calculer, en fonction de <Inline tex={'n \\geq 1'} /> :</p>
                <Block tex={'U_n = \\sum_{k=1}^{n}(k^2 - k)'} />
              </>
            }
            correction={
              <>
                <Step label="Décomposition par linéarité">
                  <Block tex={'U_n = \\sum_{k=1}^{n}k^2 - \\sum_{k=1}^{n}k = \\frac{n(n+1)(2n+1)}{6} - \\frac{n(n+1)}{2}'} />
                </Step>
                <Step label="Factorisation">
                  <Block tex={'U_n = \\frac{n(n+1)}{6}\\bigl[(2n+1) - 3\\bigr] = \\frac{n(n+1)(2n-2)}{6} = \\frac{n(n+1) \\cdot 2(n-1)}{6}'} />
                  <Block tex={'\\boxed{U_n = \\frac{n(n-1)(n+1)}{3}}'} />
                  <p>Vérification pour <Inline tex={'n=3'} /> : <Inline tex={'U_3 = 0+2+6=8'} /> et <Inline tex={'\\frac{3 \\cdot 2 \\cdot 4}{3} = 8'} />. ✓</p>
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
                Avant chaque somme, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> Je compte le nombre de termes : <Inline tex={'b - a + 1'} /> (et pas <Inline tex={'b - a'} />).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Je sépare la somme par linéarité, je sors les constantes.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Je tente de reconnaître une somme usuelle : <Inline tex={'\\sum k, \\sum k^2, \\sum q^k'} />.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Pour <Inline tex={'\\frac{1}{P(k)}'} /> : décomposition en éléments simples → télescopage.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Pour <Inline tex={'k \\cdot q^k'} /> ou un produit : technique <Inline tex={'S - qS'} /> ou <Inline tex={'\\ln(\\prod) = \\sum \\ln'} />.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/sommes-suites-cours"
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

export default Chapitre2SommesSuitesExercicesPage;
