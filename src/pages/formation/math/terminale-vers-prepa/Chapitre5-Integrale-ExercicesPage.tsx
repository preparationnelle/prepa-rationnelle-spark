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

const Chapitre5IntegraleExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/integrales-exercices"
        title="Exercices · Chapitre 6 — Intégrale · Terminale → Prépa ECG"
        description="13 exercices progressifs sur le calcul intégral : primitives usuelles, intégrales paramétrées, exponentielles et changement de variable."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 6 · Intégrale</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">06 · Exercices · Intégrale</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Treize intégrales <em className="font-lora italic text-carnet-red">à dompter</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Reconnaître <Inline tex={"u'/u"} />, manipuler les puissances, dompter une intégrale paramétrée, finir sur un changement de variable. <span className="carnet-hl font-lora italic">Cherche d'abord seul</span>, puis confronte ta rédaction au corrigé.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              6 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              6 Moyens
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-carnet-red text-carnet-paper bg-carnet-red">
              1 Difficile
            </span>
          </div>
        </header>

        {/* Module 1 */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M1</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Reconnaître les primitives usuelles</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Logarithme déguisé"
          difficulty="Facile"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'A = \\int_0^1 \\frac{1}{1 + 2t} \\, dt.'} />
            </>
          }
          correction={
            <>
              <Step label="Reconnaissance de forme">
                <p>L'intégrande est de la forme <Inline tex={"\\frac{u'}{u}"} /> avec <Inline tex={'u(t) = 1 + 2t'} /> et <Inline tex={"u'(t) = 2"} />. Il manque le coefficient 2 au numérateur.</p>
              </Step>
              <Step label="Calcul">
                <Block tex={'A = \\int_0^1 \\frac{1}{2} \\cdot \\frac{2}{1 + 2t} \\, dt = \\left[ \\frac{1}{2} \\ln|1 + 2t| \\right]_0^1.'} />
                <Block tex={'A = \\frac{1}{2}\\bigl(\\ln 3 - \\ln 1\\bigr) = \\frac{1}{2} \\ln 3.'} />
              </Step>
              <Step label="À retenir">
                <p><Inline tex={'\\int \\frac{1}{ax + b} \\, dx = \\frac{1}{a} \\ln|ax + b| + C'} />. Toujours vérifier le coefficient de la dérivée du dénominateur.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Puissances et racines"
          difficulty="Facile"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Pour tout <Inline tex={'x \\geq 2'} />, calculer :</p>
              <Block tex={'B(x) = \\int_2^x \\frac{1}{u \\sqrt{2u}} \\, du.'} />
            </>
          }
          correction={
            <>
              <Step label="Réécriture en exposants">
                <Block tex={'\\frac{1}{u \\sqrt{2u}} = \\frac{1}{\\sqrt{2}} \\cdot \\frac{1}{u^{3/2}} = \\frac{1}{\\sqrt{2}} \\, u^{-3/2}.'} />
              </Step>
              <Step label="Primitive">
                <Block tex={'B(x) = \\left[ \\frac{1}{\\sqrt{2}} \\cdot \\frac{u^{-1/2}}{-1/2} \\right]_2^x = \\left[ -\\frac{2}{\\sqrt{2}} \\cdot \\frac{1}{\\sqrt{u}} \\right]_2^x.'} />
              </Step>
              <Step label="Évaluation aux bornes">
                <Block tex={'B(x) = -\\frac{2}{\\sqrt{2x}} + \\frac{2}{\\sqrt{4}} = 1 - \\frac{2}{\\sqrt{2x}}.'} />
                <p>Soit, en rationalisant <Inline tex={'\\frac{2}{\\sqrt{2x}} = \\frac{\\sqrt{2}}{\\sqrt{x}}'} /> :</p>
                <Block tex={'B(x) = 1 - \\frac{\\sqrt{2}}{\\sqrt{x}}.'} />
              </Step>
              <Step label="À retenir">
                <p>Toute fraction du type <Inline tex={'\\frac{1}{u^k\\sqrt{u^m}}'} /> se réécrit <Inline tex={'u^{-k - m/2}'} /> pour appliquer <Inline tex={'\\int u^\\alpha \\, du = \\frac{u^{\\alpha+1}}{\\alpha+1}'} /> (<Inline tex={'\\alpha \\neq -1'} />).</p>
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Paramètres & exponentielles</h2>
        </div>

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Intégrale paramétrée"
          difficulty="Moyen"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="l"
          statement={
            <>
              <p>Pour <Inline tex={'(a,b) \\in (\\mathbb{R}_+^*)^2'} /> et <Inline tex={'x \\geq b'} />, calculer :</p>
              <Block tex={'C(x) = \\int_b^x \\frac{b^a}{t^{a+1}} \\, dt.'} />
            </>
          }
          correction={
            <>
              <Step label="Attention aux paramètres">
                <p>Ici la variable d'intégration est <Inline tex={'t'} /> ; les lettres <Inline tex={'a'} /> et <Inline tex={'b'} /> sont des constantes.</p>
              </Step>
              <Step label="Réécriture">
                <Block tex={'\\frac{b^a}{t^{a+1}} = b^a \\cdot t^{-a-1}.'} />
              </Step>
              <Step label="Primitive">
                <Block tex={'C(x) = \\left[ b^a \\cdot \\frac{t^{-a}}{-a} \\right]_b^x = \\left[ -\\frac{b^a}{a \\, t^a} \\right]_b^x.'} />
              </Step>
              <Step label="Évaluation et factorisation">
                <Block tex={'C(x) = -\\frac{b^a}{a \\, x^a} + \\frac{1}{a} = \\frac{1}{a}\\left[1 - \\left(\\frac{b}{x}\\right)^a\\right].'} />
              </Step>
              <Step label="Vérifications">
                <p>• <Inline tex={'C(b) = 0'} />, conforme à l'intégrale d'extension nulle.</p>
                <p>• Quand <Inline tex={'x \\to +\\infty'} />, <Inline tex={'C(x) \\to \\tfrac{1}{a}'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Exponentielle de base 1/3 (EML 2004)"
          difficulty="Facile"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'D = \\int_2^3 \\frac{1}{3^x} \\, dx.'} />
              <p className="text-carnet-ink-mute italic text-[14px]">EML 2004.</p>
            </>
          }
          correction={
            <>
              <Step label="Reconnaissance de forme">
                <p>On réécrit <Inline tex={'\\frac{1}{3^x} = \\left(\\tfrac{1}{3}\\right)^x'} />, exponentielle de base <Inline tex={'a = 1/3'} />.</p>
              </Step>
              <Step label="Primitive d'une exponentielle de base a">
                <p>Formule : <Inline tex={'\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C'} /> pour <Inline tex={'a > 0,\\ a \\neq 1'} />.</p>
                <Block tex={'D = \\left[ \\frac{(1/3)^x}{\\ln(1/3)} \\right]_2^3 = \\frac{1}{\\ln(1/3)}\\left(\\tfrac{1}{27} - \\tfrac{1}{9}\\right).'} />
              </Step>
              <Step label="Simplification">
                <p>Avec <Inline tex={'\\ln(1/3) = -\\ln 3'} /> et <Inline tex={'\\tfrac{1}{27} - \\tfrac{1}{9} = -\\tfrac{2}{27}'} /> :</p>
                <Block tex={'D = \\frac{-2/27}{-\\ln 3} = \\frac{2}{27 \\ln 3}.'} />
              </Step>
            </>
          }
        />

        {/* Module 3 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Changement de variable</h2>
        </div>

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Forme uⁿ⁻¹·u′ (ECRICOME 2001)"
          difficulty="Difficile"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          tilt="l"
          statement={
            <>
              <p>Pour <Inline tex={'n \\in \\mathbb{N}^*'} /> et <Inline tex={'\\lambda \\in \\mathbb{R}_+^*'} />, calculer :</p>
              <Block tex={'E = \\int_0^1 n\\lambda \\, (1 - e^{-\\lambda t})^{n-1} e^{-\\lambda t} \\, dt.'} />
              <p className="text-carnet-ink-mute italic text-[14px]">ECRICOME 2001 — repère la structure <Inline tex={"u^{n-1} u'"} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Choix du changement de variable">
                <p>On pose <Inline tex={'u = 1 - e^{-\\lambda t}'} />. Alors <Inline tex={'du = \\lambda e^{-\\lambda t} \\, dt'} /> apparaît tel quel dans l'intégrande.</p>
              </Step>
              <Step label="Bornes">
                <p>• <Inline tex={'t = 0 \\Rightarrow u = 0'} />.</p>
                <p>• <Inline tex={'t = 1 \\Rightarrow u = 1 - e^{-\\lambda}'} />.</p>
              </Step>
              <Step label="Substitution">
                <Block tex={'E = \\int_0^{1 - e^{-\\lambda}} n \\, u^{n-1} \\, du.'} />
              </Step>
              <Step label="Calcul">
                <Block tex={'E = n \\left[\\frac{u^n}{n}\\right]_0^{1 - e^{-\\lambda}} = (1 - e^{-\\lambda})^n.'} />
              </Step>
              <Step label="Lecture probabiliste">
                <p>Cette intégrale est la fonction de répartition au point 1 du maximum de <Inline tex={'n'} /> variables exponentielles indépendantes de paramètre <Inline tex={'\\lambda'} /> : <Inline tex={'P(\\max(X_1, \\ldots, X_n) \\leq 1) = (1 - e^{-\\lambda})^n'} />.</p>
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

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Intégrale d'une exponentielle composée"
          difficulty="Facile"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          tilt="l"
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'I = \\int_0^2 e^{3x} \\, dx.'} />
            </>
          }
          correction={
            <>
              <Step label="Primitive de e^{3x}">
                <p>La primitive de <Inline tex={'e^{3x}'} /> est <Inline tex={'\\dfrac{e^{3x}}{3}'} />.</p>
              </Step>
              <Step label="Calcul">
                <Block tex={'I = \\left[\\frac{e^{3x}}{3}\\right]_0^2 = \\frac{e^6}{3} - \\frac{1}{3} = \\frac{e^6 - 1}{3}.'} />
              </Step>
              <Step label="À retenir">
                <p>Règle générale : <Inline tex={'\\int e^{ax} \\, dx = \\dfrac{e^{ax}}{a} + C'} /> pour <Inline tex={'a \\neq 0'} />. On divise par le coefficient de <Inline tex={'x'} /> à l'exposant.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Intégration par parties simple"
          difficulty="Moyen"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'J = \\int_0^1 x e^x \\, dx.'} />
              <p className="text-carnet-ink-mute italic text-[14px]">Indication : utiliser <Inline tex={'u(x) = x'} /> et <Inline tex={"v'(x) = e^x"} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Choix de l'IPP">
                <p>On pose <Inline tex={'u = x'} />, <Inline tex={"u' = 1"} />, <Inline tex={"v' = e^x"} />, <Inline tex={'v = e^x'} />.</p>
              </Step>
              <Step label="Application de la formule">
                <Block tex={'J = \\bigl[x e^x\\bigr]_0^1 - \\int_0^1 e^x \\, dx = e - 0 - \\bigl[e^x\\bigr]_0^1.'} />
              </Step>
              <Step label="Conclusion">
                <Block tex={'J = e - (e - 1) = 1.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 8 */}
        <Exercise
          id="ex8"
          num={8}
          title="Aire entre deux courbes"
          difficulty="Moyen"
          open={!!open.ex8}
          onToggle={() => toggle('ex8')}
          tilt="r"
          statement={
            <>
              <p>On considère <Inline tex={'f(x) = x^2'} /> et <Inline tex={'g(x) = x'} /> sur <Inline tex={'[0, 1]'} />.</p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Déterminer laquelle des deux courbes est au-dessus de l'autre sur <Inline tex={'[0, 1]'} />.</li>
                <li>Calculer l'aire de la région délimitée par les deux courbes.</li>
              </ol>
            </>
          }
          correction={
            <>
              <Step label="1. Comparaison des courbes">
                <p>Sur <Inline tex={'[0,1]'} /> :</p>
                <Block tex={'g(x) - f(x) = x - x^2 = x(1-x) \\geq 0,'} />
                <p>donc <Inline tex={'g \\geq f'} /> sur tout l'intervalle.</p>
              </Step>
              <Step label="2. Calcul de l'aire">
                <Block tex={'\\mathcal{A} = \\int_0^1 \\bigl(g(x) - f(x)\\bigr) \\, dx = \\int_0^1 (x - x^2) \\, dx.'} />
                <Block tex={'\\mathcal{A} = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6} \\text{ unité d\'aire.}'} />
              </Step>
              <Step label="À retenir">
                <p>L'aire entre deux courbes s'obtient en intégrant <Inline tex={'|g - f|'} /> ; toujours vérifier le signe de <Inline tex={'g - f'} /> avant d'intégrer.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 9 */}
        <Exercise
          id="ex9"
          num={9}
          title="Intégrale d'une valeur absolue"
          difficulty="Moyen"
          open={!!open.ex9}
          onToggle={() => toggle('ex9')}
          statement={
            <>
              <p>Calculer :</p>
              <Block tex={'K = \\int_{-1}^{2} |x - 1| \\, dx.'} />
              <p className="text-carnet-ink-mute italic text-[14px]">Indication : lever la valeur absolue en distinguant les cas selon le signe de <Inline tex={'x - 1'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Lever la valeur absolue">
                <p>• Sur <Inline tex={'[-1, 1]'} /> : <Inline tex={'x - 1 \\leq 0'} />, donc <Inline tex={'|x - 1| = 1 - x'} />.</p>
                <p>• Sur <Inline tex={'[1, 2]'} /> : <Inline tex={'x - 1 \\geq 0'} />, donc <Inline tex={'|x - 1| = x - 1'} />.</p>
              </Step>
              <Step label="Découpage de l'intégrale">
                <Block tex={'K = \\int_{-1}^1 (1 - x) \\, dx + \\int_1^2 (x - 1) \\, dx.'} />
              </Step>
              <Step label="Calcul de chaque morceau">
                <Block tex={'\\int_{-1}^1 (1 - x) \\, dx = \\left[x - \\frac{x^2}{2}\\right]_{-1}^1 = \\left(1 - \\frac{1}{2}\\right) - \\left(-1 - \\frac{1}{2}\\right) = \\frac{1}{2} + \\frac{3}{2} = 2.'} />
                <Block tex={'\\int_1^2 (x - 1) \\, dx = \\left[\\frac{x^2}{2} - x\\right]_1^2 = (2 - 2) - \\left(\\frac{1}{2} - 1\\right) = 0 + \\frac{1}{2} = \\frac{1}{2}.'} />
              </Step>
              <Step label="Résultat">
                <Block tex={'K = 2 + \\frac{1}{2} = \\frac{5}{2}.'} />
              </Step>
            </>
          }
        />

          {/* Module M5 — Primitives trigonométriques & techniques */}
          <div className="mb-2 mt-10">
            <span className="inline-block bg-carnet-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              M5 — Primitives trig. &amp; techniques
            </span>
          </div>

          <Exercise
            id="ex10"
            num={10}
            title="Intégrale de sin sur [0, π]"
            difficulty="Facile"
            open={!!open.ex10}
            onToggle={() => toggle('ex10')}
            tilt="l"
            statement={
              <>
                <p>Calculer :</p>
                <Block tex={'I = \\int_0^{\\pi} \\sin x \\, dx'} />
              </>
            }
            correction={
              <>
                <Step label="Primitive de sin">
                  <p>Une primitive de <Inline tex={'\\sin x'} /> est <Inline tex={'-\\cos x'} />.</p>
                </Step>
                <Step label="Calcul">
                  <Block tex={'I = \\Bigl[-\\cos x\\Bigr]_0^{\\pi} = -\\cos(\\pi) + \\cos(0) = -(-1) + 1'} />
                  <Block tex={'\\boxed{I = 2}'} />
                  <p>Interprétation géométrique : aire sous la demi-sinusoïde entre 0 et π.</p>
                </Step>
              </>
            }
          />

          <Exercise
            id="ex11"
            num={11}
            title="Intégrale de 1/x sur [1, e]"
            difficulty="Facile"
            open={!!open.ex11}
            onToggle={() => toggle('ex11')}
            statement={
              <>
                <p>Calculer :</p>
                <Block tex={'J = \\int_1^e \\frac{1}{x} \\, dx'} />
              </>
            }
            correction={
              <>
                <Step label="Primitive de 1/x">
                  <p>Sur <Inline tex={'(0, +\\infty)'} />, une primitive de <Inline tex={'\\tfrac{1}{x}'} /> est <Inline tex={'\\ln x'} />.</p>
                </Step>
                <Step label="Calcul">
                  <Block tex={'J = \\Bigl[\\ln x\\Bigr]_1^e = \\ln e - \\ln 1 = 1 - 0'} />
                  <Block tex={'\\boxed{J = 1}'} />
                  <p>Ce résultat est fondamental : il exprime que l'aire sous <Inline tex={'1/x'} /> entre 1 et e vaut exactement 1.</p>
                </Step>
              </>
            }
          />

          <Exercise
            id="ex12"
            num={12}
            title="Intégration par parties — x·cos(x)"
            difficulty="Moyen"
            open={!!open.ex12}
            onToggle={() => toggle('ex12')}
            tilt="r"
            statement={
              <>
                <p>Calculer par intégration par parties :</p>
                <Block tex={'K = \\int_0^1 x \\cos x \\, dx'} />
              </>
            }
            correction={
              <>
                <Step label="Choix des fonctions">
                  <p>On pose <Inline tex={'u = x'} />, <Inline tex={"u' = 1"} />, <Inline tex={"v' = \\cos x"} />, <Inline tex={'v = \\sin x'} />.</p>
                  <p>Formule : <Inline tex={'\\int_a^b u v\' = [uv]_a^b - \\int_a^b u\' v'} />.</p>
                </Step>
                <Step label="Application">
                  <Block tex={'K = \\Bigl[x \\sin x\\Bigr]_0^1 - \\int_0^1 \\sin x \\, dx'} />
                  <Block tex={'= (1 \\cdot \\sin 1 - 0) - \\Bigl[-\\cos x\\Bigr]_0^1'} />
                  <Block tex={'= \\sin 1 - (-\\cos 1 + \\cos 0) = \\sin 1 + \\cos 1 - 1'} />
                </Step>
                <Step label="Résultat">
                  <Block tex={'\\boxed{K = \\sin 1 + \\cos 1 - 1 \\approx 0{,}381}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex13"
            num={13}
            title="Changement de variable — sin(x)cos(x)"
            difficulty="Moyen"
            open={!!open.ex13}
            onToggle={() => toggle('ex13')}
            statement={
              <>
                <p>Calculer par deux méthodes différentes :</p>
                <Block tex={'L = \\int_0^{\\pi/2} \\sin x \\cos x \\, dx'} />
              </>
            }
            correction={
              <>
                <Step label="Méthode 1 — Linéarisation">
                  <p>On utilise <Inline tex={'\\sin x \\cos x = \\tfrac{1}{2}\\sin(2x)'} /> :</p>
                  <Block tex={'L = \\int_0^{\\pi/2} \\frac{\\sin(2x)}{2} \\, dx = \\left[-\\frac{\\cos(2x)}{4}\\right]_0^{\\pi/2}'} />
                  <Block tex={'= -\\frac{\\cos \\pi}{4} + \\frac{\\cos 0}{4} = \\frac{1}{4} + \\frac{1}{4}'} />
                </Step>
                <Step label="Méthode 2 — Changement de variable u = sin(x)">
                  <p>On pose <Inline tex={'u = \\sin x'} />, donc <Inline tex={'du = \\cos x \\, dx'} />.</p>
                  <p>Quand <Inline tex={'x=0'} />, <Inline tex={'u=0'} /> ; quand <Inline tex={'x=\\pi/2'} />, <Inline tex={'u=1'} />.</p>
                  <Block tex={'L = \\int_0^1 u \\, du = \\left[\\frac{u^2}{2}\\right]_0^1 = \\frac{1}{2}'} />
                </Step>
                <Step label="Résultat">
                  <Block tex={'\\boxed{L = \\frac{1}{2}}'} />
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
                Avant chaque intégrale, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> J'identifie une primitive usuelle (puissance, exponentielle, <Inline tex={"u'/u"} />).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Je réécris l'intégrande sous forme exploitable (puissances, base 1/a, factorisation).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Je distingue variable d'intégration et paramètres constants.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Pour un changement de variable : je transforme aussi les bornes — pas seulement <Inline tex={'dt'} />.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Je vérifie en dérivant la primitive obtenue.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/integrales-cours"
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

export default Chapitre5IntegraleExercicesPage;
