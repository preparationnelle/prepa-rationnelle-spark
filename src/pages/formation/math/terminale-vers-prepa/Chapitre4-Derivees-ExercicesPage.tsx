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

const Chapitre4DeriveesExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/derivees-exercices"
        title="Exercices · Chapitre 5 — Dérivées · Terminale → Prépa ECG"
        description="14 exercices progressifs sur les dérivées avec corrigés détaillés : produits, quotients, composées, tangentes et étude de variations."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 5</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">05 · Exercices · Dérivées</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Quatorze dérivées <em className="font-lora italic text-carnet-red">à automatiser</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Polynômes, quotients, composées, tangentes, variations. Du calcul brut à l'étude complète. <span className="carnet-hl font-lora italic">Cherche d'abord seul</span>, puis confronte ta rédaction au corrigé.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              6 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              6 Moyens
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
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Calculs de dérivées — produits & quotients</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Polynômes et produits"
          difficulty="Facile"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>Pour chaque fonction, calculer <Inline tex={"f'(x)"} /> sur l'intervalle indiqué.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li><Inline tex={'f(x) = -4x^2 + 56x - 96'} />, <Inline tex={'I = \\mathbb{R}'} /></li>
                <li><Inline tex={'f(x) = (4x + 7)(7x + 10)'} />, <Inline tex={'I = \\mathbb{R}'} /></li>
                <li><Inline tex={'f(x) = (3x^2 - 1)(x + 2)'} />, <Inline tex={'I = \\mathbb{R}'} /></li>
              </ol>
            </>
          }
          correction={
            <>
              <Step label="1. Polynôme">
                <p>On dérive terme à terme : <Inline tex={"(x^n)' = n x^{n-1}"} />.</p>
                <Block tex={"f'(x) = -8x + 56."} />
              </Step>
              <Step label="2. Produit — règle (uv)' = u'v + uv'">
                <p>Avec <Inline tex={'u(x) = 4x + 7'} /> et <Inline tex={'v(x) = 7x + 10'} />, donc <Inline tex={"u'(x) = 4"} /> et <Inline tex={"v'(x) = 7"} /> :</p>
                <Block tex={"f'(x) = 4(7x + 10) + 7(4x + 7) = 28x + 40 + 28x + 49 = 56x + 89."} />
                <p className="text-carnet-ink-mute italic text-[14px]">Astuce de vérif : on pouvait aussi développer <Inline tex={'f(x) = 28x^2 + 89x + 70'} />, qui donne bien <Inline tex={"f'(x) = 56x + 89"} />.</p>
              </Step>
              <Step label="3. Produit avec un facteur quadratique">
                <p>Avec <Inline tex={'u(x) = 3x^2 - 1'} /> (donc <Inline tex={"u'(x) = 6x"} />) et <Inline tex={'v(x) = x + 2'} /> (donc <Inline tex={"v'(x) = 1"} />) :</p>
                <Block tex={"f'(x) = 6x(x+2) + (3x^2 - 1) \\cdot 1 = 6x^2 + 12x + 3x^2 - 1 = 9x^2 + 12x - 1."} />
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Quotients à dériver"
          difficulty="Facile"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Calculer <Inline tex={"f'(x)"} /> sur l'intervalle indiqué.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li><Inline tex={'f(x) = \\dfrac{3x - 4}{2x + 1}'} />, <Inline tex={'I = \\mathbb{R} \\setminus \\{-1/2\\}'} /></li>
                <li><Inline tex={'f(x) = \\dfrac{8 + 3x}{1 - 6x}'} />, <Inline tex={'I = \\mathbb{R} \\setminus \\{1/6\\}'} /></li>
              </ol>
              <p className="text-carnet-ink-mute italic text-[14px]">Rappel : <Inline tex={"\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"} />.</p>
            </>
          }
          correction={
            <>
              <Step label="1. Premier quotient">
                <p>Posons <Inline tex={'u(x) = 3x - 4'} />, <Inline tex={"u'(x) = 3"} />, <Inline tex={'v(x) = 2x + 1'} />, <Inline tex={"v'(x) = 2"} />.</p>
                <Block tex={"f'(x) = \\frac{3(2x+1) - 2(3x-4)}{(2x+1)^2} = \\frac{6x + 3 - 6x + 8}{(2x+1)^2} = \\frac{11}{(2x+1)^2}."} />
              </Step>
              <Step label="2. Second quotient — attention aux signes">
                <p>Posons <Inline tex={'u(x) = 8 + 3x'} />, <Inline tex={"u'(x) = 3"} />, <Inline tex={'v(x) = 1 - 6x'} />, <Inline tex={"v'(x) = -6"} />.</p>
                <Block tex={"f'(x) = \\frac{3(1-6x) - (-6)(8+3x)}{(1-6x)^2} = \\frac{3 - 18x + 48 + 18x}{(1-6x)^2} = \\frac{51}{(1-6x)^2}."} />
                <p className="text-carnet-ink-mute italic text-[14px]">Le piège classique : oublier le signe moins devant <Inline tex={"v'(x)"} /> dans la formule.</p>
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Composées & fonctions usuelles</h2>
        </div>

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Dérivées composées"
          difficulty="Moyen"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="r"
          statement={
            <>
              <p>Calculer la dérivée des fonctions suivantes, en précisant l'ensemble de dérivabilité.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li><Inline tex={'f(x) = (2x + 1)^5'} /></li>
                <li><Inline tex={'g(x) = \\sqrt{x^2 + 1}'} /></li>
                <li><Inline tex={'h(x) = e^{3x^2 - x}'} /></li>
                <li><Inline tex={'k(x) = \\ln(1 + x^2)'} /></li>
              </ol>
              <p className="text-carnet-ink-mute italic text-[14px]">Indication : utiliser <Inline tex={"(f \\circ u)'(x) = u'(x) \\cdot f'(u(x))"} />.</p>
            </>
          }
          correction={
            <>
              <Step label="1. Puissance composée">
                <p>Avec <Inline tex={'u(x) = 2x + 1'} />, <Inline tex={"u'(x) = 2"} />, et <Inline tex={"(u^5)' = 5 u^4 \\cdot u'"} /> :</p>
                <Block tex={"f'(x) = 5(2x+1)^4 \\cdot 2 = 10(2x+1)^4. \\quad (\\mathbb{R})"} />
              </Step>
              <Step label="2. Racine composée">
                <p>Avec <Inline tex={'u(x) = x^2 + 1 > 0'} />, donc <Inline tex={'g'} /> est dérivable sur <Inline tex={'\\mathbb{R}'} />. Et <Inline tex={"(\\sqrt{u})' = \\frac{u'}{2\\sqrt{u}}"} /> :</p>
                <Block tex={"g'(x) = \\frac{2x}{2\\sqrt{x^2 + 1}} = \\frac{x}{\\sqrt{x^2+1}}."} />
              </Step>
              <Step label="3. Exponentielle composée">
                <p>Avec <Inline tex={'u(x) = 3x^2 - x'} />, <Inline tex={"u'(x) = 6x - 1"} />, et <Inline tex={"(e^u)' = u' \\cdot e^u"} /> :</p>
                <Block tex={"h'(x) = (6x - 1)\\, e^{3x^2 - x}. \\quad (\\mathbb{R})"} />
              </Step>
              <Step label="4. Logarithme composé">
                <p><Inline tex={'1 + x^2 > 0'} /> sur <Inline tex={'\\mathbb{R}'} />, donc <Inline tex={'k'} /> est dérivable partout. Et <Inline tex={"(\\ln u)' = \\frac{u'}{u}"} /> :</p>
                <Block tex={"k'(x) = \\frac{2x}{1 + x^2}."} />
              </Step>
            </>
          }
        />

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Tangente à une courbe"
          difficulty="Moyen"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          statement={
            <>
              <p>Soit <Inline tex={'f(x) = x^3 - 3x + 1'} /> définie sur <Inline tex={'\\mathbb{R}'} />.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Déterminer l'équation de la tangente à <Inline tex={'\\mathcal{C}_f'} /> au point d'abscisse <Inline tex={'a = 2'} />.</li>
                <li>En quels points la tangente est-elle horizontale ?</li>
                <li>Existe-t-il un point où la tangente a pour pente <Inline tex={'9'} /> ?</li>
              </ol>
            </>
          }
          correction={
            <>
              <p>On a <Inline tex={"f'(x) = 3x^2 - 3"} />.</p>
              <Step label="1. Tangente au point d'abscisse 2">
                <p>Calcul des deux quantités utiles :</p>
                <Block tex={"f(2) = 8 - 6 + 1 = 3, \\qquad f'(2) = 12 - 3 = 9."} />
                <p>L'équation de la tangente est <Inline tex={"y = f'(a)(x - a) + f(a)"} />, donc :</p>
                <Block tex={"y = 9(x - 2) + 3 = 9x - 15."} />
              </Step>
              <Step label="2. Tangentes horizontales">
                <p>La tangente est horizontale ssi <Inline tex={"f'(x) = 0"} />.</p>
                <Block tex={"3x^2 - 3 = 0 \\iff x^2 = 1 \\iff x = \\pm 1."} />
                <p>Aux points <Inline tex={'(1, f(1)) = (1, -1)'} /> et <Inline tex={'(-1, f(-1)) = (-1, 3)'} />.</p>
              </Step>
              <Step label="3. Pente 9">
                <p>On résout <Inline tex={"f'(x) = 9"} /> :</p>
                <Block tex={"3x^2 - 3 = 9 \\iff x^2 = 4 \\iff x = \\pm 2."} />
                <p>Donc deux points : <Inline tex={'(2, 3)'} /> (déjà vu) et <Inline tex={'(-2, f(-2)) = (-2, -1)'} />.</p>
              </Step>
            </>
          }
        />

        {/* Module 3 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Étude complète — variations & extrema</h2>
        </div>

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Étude d'une fonction logarithmique"
          difficulty="Difficile"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'f'} /> la fonction définie sur <Inline tex={'\\mathbb{R}_+^*'} /> par :</p>
              <Block tex={'f(x) = x - \\ln(x).'} />
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Calculer <Inline tex={"f'(x)"} /> et étudier son signe.</li>
                <li>Dresser le tableau de variations de <Inline tex={'f'} />.</li>
                <li>En déduire que pour tout <Inline tex={'x > 0'} />, <Inline tex={'\\ln(x) \\leq x - 1'} />.</li>
              </ol>
              <p className="text-carnet-ink-mute italic text-[14px]">Cette inégalité est un classique d'analyse — tu la reverras toute la prépa.</p>
            </>
          }
          correction={
            <>
              <Step label="1. Calcul et signe de la dérivée">
                <p>Pour <Inline tex={'x > 0'} /> :</p>
                <Block tex={"f'(x) = 1 - \\frac{1}{x} = \\frac{x - 1}{x}."} />
                <p>Comme <Inline tex={'x > 0'} />, le signe de <Inline tex={"f'(x)"} /> est celui de <Inline tex={'x - 1'} />.</p>
                <ul className="list-disc pl-6 space-y-0.5">
                  <li>Sur <Inline tex={'(0, 1)'} /> : <Inline tex={"f'(x) < 0"} />, <Inline tex={'f'} /> décroît.</li>
                  <li>En <Inline tex={'x = 1'} /> : <Inline tex={"f'(1) = 0"} />.</li>
                  <li>Sur <Inline tex={'(1, +\\infty)'} /> : <Inline tex={"f'(x) > 0"} />, <Inline tex={'f'} /> croît.</li>
                </ul>
              </Step>
              <Step label="2. Tableau de variations">
                <p><Inline tex={'f'} /> admet donc un minimum global en <Inline tex={'x = 1'} />, et :</p>
                <Block tex={"f(1) = 1 - \\ln(1) = 1."} />
                <p className="text-carnet-ink-mute italic">Comportements aux bornes (à savoir) : <Inline tex={'\\lim_{x \\to 0^+} f(x) = +\\infty'} /> et <Inline tex={'\\lim_{x \\to +\\infty} f(x) = +\\infty'} />.</p>
              </Step>
              <Step label="3. Inégalité ln(x) ≤ x − 1">
                <p>Le minimum de <Inline tex={'f'} /> sur <Inline tex={'\\mathbb{R}_+^*'} /> vaut <Inline tex={'1'} />, donc pour tout <Inline tex={'x > 0'} /> :</p>
                <Block tex={'f(x) \\geq 1 \\iff x - \\ln(x) \\geq 1 \\iff \\ln(x) \\leq x - 1.'} />
                <p>Avec égalité ssi <Inline tex={'x = 1'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Optimisation — boîte de volume maximal"
          difficulty="Difficile"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          statement={
            <>
              <p>On découpe quatre carrés identiques de côté <Inline tex={'x'} /> aux coins d'une feuille carrée de <Inline tex={'12'} /> cm de côté, puis on replie pour former une boîte ouverte.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Exprimer le volume <Inline tex={'V(x)'} /> en fonction de <Inline tex={'x'} /> et préciser l'intervalle des valeurs admissibles.</li>
                <li>Étudier les variations de <Inline tex={'V'} /> sur cet intervalle.</li>
                <li>Pour quelle valeur de <Inline tex={'x'} /> le volume est-il maximal ? Donner ce volume.</li>
              </ol>
            </>
          }
          correction={
            <>
              <Step label="1. Mise en équation">
                <p>Après découpage et pliage, la base est un carré de côté <Inline tex={'12 - 2x'} /> et la hauteur est <Inline tex={'x'} />. Donc :</p>
                <Block tex={'V(x) = x(12 - 2x)^2.'} />
                <p>Pour avoir une boîte non dégénérée, on doit avoir <Inline tex={'x > 0'} /> et <Inline tex={'12 - 2x > 0'} />, soit <Inline tex={'x \\in (0, 6)'} />.</p>
              </Step>
              <Step label="2. Étude de V">
                <p>On dérive avec la règle du produit, en posant <Inline tex={'u(x) = x'} /> et <Inline tex={'v(x) = (12 - 2x)^2'} />, donc <Inline tex={"v'(x) = 2(12 - 2x)(-2) = -4(12 - 2x)"} /> :</p>
                <Block tex={"V'(x) = (12 - 2x)^2 + x \\cdot \\bigl(-4(12 - 2x)\\bigr)."} />
                <p>On factorise par <Inline tex={'(12 - 2x)'} /> :</p>
                <Block tex={"V'(x) = (12 - 2x)\\bigl[(12 - 2x) - 4x\\bigr] = (12 - 2x)(12 - 6x)."} />
                <p>Sur <Inline tex={'(0, 6)'} />, <Inline tex={'12 - 2x > 0'} />, donc le signe de <Inline tex={"V'(x)"} /> est celui de <Inline tex={'12 - 6x'} />.</p>
                <ul className="list-disc pl-6 space-y-0.5">
                  <li>Sur <Inline tex={'(0, 2)'} /> : <Inline tex={"V'(x) > 0"} />, <Inline tex={'V'} /> croît.</li>
                  <li>En <Inline tex={'x = 2'} /> : <Inline tex={"V'(2) = 0"} />.</li>
                  <li>Sur <Inline tex={'(2, 6)'} /> : <Inline tex={"V'(x) < 0"} />, <Inline tex={'V'} /> décroît.</li>
                </ul>
              </Step>
              <Step label="3. Maximum">
                <p>Le maximum est atteint en <Inline tex={'x = 2'} />, et vaut :</p>
                <Block tex={'V(2) = 2 \\times (12 - 4)^2 = 2 \\times 64 = 128 \\text{ cm}^3.'} />
                <p className="text-carnet-ink-mute italic text-[14px]">À retenir : optimiser, c'est dériver, annuler, étudier le signe — le tableau de variations conclut.</p>
              </Step>
            </>
          }
        />

        {/* Module 4 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M4</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Exercices supplémentaires — automatismes & inégalités</h2>
        </div>

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Dériver trois fonctions rapides"
          difficulty="Facile"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          tilt="l"
          statement={
            <>
              <p>Calculer la dérivée des fonctions suivantes sur leur domaine de dérivabilité.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li><Inline tex={'f(x) = 4x^3 - 3x + 7'} /></li>
                <li><Inline tex={'g(x) = \\sqrt{x}(x + 1)'} /> sur <Inline tex={'\\mathbb{R}_+^*'} /></li>
                <li><Inline tex={'h(x) = \\dfrac{1}{x^2}'} /> sur <Inline tex={'\\mathbb{R}^*'} /></li>
              </ol>
            </>
          }
          correction={
            <>
              <Step label="1. Polynôme — dérivée terme à terme">
                <Block tex={"f'(x) = 12x^2 - 3."} />
              </Step>
              <Step label="2. Produit racine × polynôme — réécrire d'abord">
                <p>On réécrit <Inline tex={'g(x) = x^{3/2} + x^{1/2}'} />, puis on dérive :</p>
                <Block tex={"g'(x) = \\frac{3}{2}x^{1/2} + \\frac{1}{2}x^{-1/2} = \\frac{3}{2}\\sqrt{x} + \\frac{1}{2\\sqrt{x}} = \\frac{3x + 1}{2\\sqrt{x}}."} />
                <p className="text-carnet-ink-mute italic text-[14px]">Astuce : réécrire <Inline tex={'\\sqrt{x} = x^{1/2}'} /> avant de dériver évite d'appliquer la règle du produit.</p>
              </Step>
              <Step label="3. Puissance négative">
                <p>On réécrit <Inline tex={'h(x) = x^{-2}'} />, puis :</p>
                <Block tex={"h'(x) = -2x^{-3} = -\\frac{2}{x^3}."} />
              </Step>
            </>
          }
        />

        {/* Exercice 8 */}
        <Exercise
          id="ex8"
          num={8}
          title="Équation de la tangente en un point"
          difficulty="Facile"
          open={!!open.ex8}
          onToggle={() => toggle('ex8')}
          statement={
            <>
              <p>Soit <Inline tex={'f(x) = x^2 \\ln(x)'} /> définie sur <Inline tex={'\\mathbb{R}_+^*'} />.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Calculer <Inline tex={"f'(x)"} />.</li>
                <li>Déterminer l'équation de la tangente à <Inline tex={'\\mathcal{C}_f'} /> en <Inline tex={'x = 1'} />.</li>
              </ol>
            </>
          }
          correction={
            <>
              <Step label="1. Dérivée — règle du produit">
                <p>Posons <Inline tex={'u(x) = x^2'} /> (donc <Inline tex={"u'(x) = 2x"} />) et <Inline tex={'v(x) = \\ln x'} /> (donc <Inline tex={"v'(x) = 1/x"} />) :</p>
                <Block tex={"f'(x) = 2x \\ln x + x^2 \\cdot \\frac{1}{x} = 2x \\ln x + x = x(2\\ln x + 1)."} />
              </Step>
              <Step label="2. Tangente en x = 1">
                <p>On calcule les deux quantités utiles :</p>
                <Block tex={"f(1) = 1^2 \\cdot \\ln 1 = 0, \\qquad f'(1) = 1 \\cdot (2 \\cdot 0 + 1) = 1."} />
                <p>L'équation de la tangente est <Inline tex={"y = f'(1)(x - 1) + f(1)"} />, soit :</p>
                <Block tex={"y = 1 \\cdot (x - 1) + 0 = x - 1."} />
              </Step>
            </>
          }
        />

        {/* Exercice 9 */}
        <Exercise
          id="ex9"
          num={9}
          title="Étude locale d'une fonction avec ln"
          difficulty="Moyen"
          open={!!open.ex9}
          onToggle={() => toggle('ex9')}
          tilt="r"
          statement={
            <>
              <p>Soit <Inline tex={'f(x) = x - \\ln(x+1)'} /> définie sur <Inline tex={']-1, +\\infty['} />.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Calculer <Inline tex={"f'(x)"} />.</li>
                <li>En déduire la monotonie de <Inline tex={'f'} />.</li>
                <li>Montrer que pour tout <Inline tex={'x > -1'} />, <Inline tex={'\\ln(1+x) \\leq x'} />.</li>
              </ol>
            </>
          }
          correction={
            <>
              <Step label="1. Calcul de la dérivée">
                <Block tex={"f'(x) = 1 - \\frac{1}{x+1} = \\frac{x+1-1}{x+1} = \\frac{x}{x+1}."} />
              </Step>
              <Step label="2. Monotonie — signe de f'(x)">
                <p>Sur <Inline tex={']-1, +\\infty['} />, <Inline tex={'x + 1 > 0'} />, donc le signe de <Inline tex={"f'(x)"} /> est celui de <Inline tex={'x'} />.</p>
                <ul className="list-disc pl-6 space-y-0.5">
                  <li>Sur <Inline tex={']-1, 0['} /> : <Inline tex={"f'(x) < 0"} />, <Inline tex={'f'} /> est décroissante.</li>
                  <li>En <Inline tex={'x = 0'} /> : <Inline tex={"f'(0) = 0"} /> — minimum.</li>
                  <li>Sur <Inline tex={'(0, +\\infty)'} /> : <Inline tex={"f'(x) > 0"} />, <Inline tex={'f'} /> est croissante.</li>
                </ul>
              </Step>
              <Step label="3. Inégalité ln(1+x) ≤ x">
                <p>On a <Inline tex={'f(0) = 0 - \\ln 1 = 0'} />. Comme <Inline tex={'f'} /> admet un minimum global en <Inline tex={'x = 0'} />, pour tout <Inline tex={'x > -1'} /> :</p>
                <Block tex={"f(x) \\geq f(0) = 0 \\iff x - \\ln(1+x) \\geq 0 \\iff \\ln(1+x) \\leq x."} />
                <p>Avec égalité ssi <Inline tex={'x = 0'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 10 */}
        <Exercise
          id="ex10"
          num={10}
          title="Dériver avec soin une fraction complexe"
          difficulty="Moyen"
          open={!!open.ex10}
          onToggle={() => toggle('ex10')}
          statement={
            <>
              <p>Soit <Inline tex={'f(x) = \\dfrac{e^x - 1}{e^x + 1}'} /> définie sur <Inline tex={'\\mathbb{R}'} />.</p>
              <ol className="list-decimal pl-6 space-y-1.5">
                <li>Calculer <Inline tex={"f'(x)"} /> et simplifier.</li>
                <li>Montrer que <Inline tex={'f'} /> est strictement croissante sur <Inline tex={'\\mathbb{R}'} />.</li>
                <li>Déterminer <Inline tex={'\\displaystyle\\lim_{x \\to +\\infty} f(x)'} /> et <Inline tex={'\\displaystyle\\lim_{x \\to -\\infty} f(x)'} />.</li>
              </ol>
            </>
          }
          correction={
            <>
              <Step label="1. Dérivée — règle du quotient">
                <p>Posons <Inline tex={'u(x) = e^x - 1'} />, <Inline tex={"u'(x) = e^x"} />, <Inline tex={'v(x) = e^x + 1'} />, <Inline tex={"v'(x) = e^x"} /> :</p>
                <Block tex={"f'(x) = \\frac{e^x(e^x + 1) - (e^x - 1)e^x}{(e^x + 1)^2} = \\frac{e^x\\bigl[(e^x + 1) - (e^x - 1)\\bigr]}{(e^x + 1)^2} = \\frac{2e^x}{(e^x + 1)^2}."} />
              </Step>
              <Step label="2. Stricte croissance">
                <p>Pour tout <Inline tex={'x \\in \\mathbb{R}'} /> : <Inline tex={'2e^x > 0'} /> et <Inline tex={'(e^x + 1)^2 > 0'} />, donc <Inline tex={"f'(x) > 0"} /> partout. La fonction est donc strictement croissante sur <Inline tex={'\\mathbb{R}'} />.</p>
              </Step>
              <Step label="3. Limites aux bornes">
                <p>En <Inline tex={'+\\infty'} /> : on divise numérateur et dénominateur par <Inline tex={'e^x'} /> :</p>
                <Block tex={"f(x) = \\frac{1 - e^{-x}}{1 + e^{-x}} \\xrightarrow[x \\to +\\infty]{} \\frac{1 - 0}{1 + 0} = 1."} />
                <p>En <Inline tex={'-\\infty'} /> : <Inline tex={'e^x \\to 0'} />, donc :</p>
                <Block tex={"f(x) = \\frac{e^x - 1}{e^x + 1} \\xrightarrow[x \\to -\\infty]{} \\frac{0 - 1}{0 + 1} = -1."} />
                <p className="text-carnet-ink-mute italic text-[14px]">La fonction <Inline tex={'f'} /> est la tangente hyperbolique <Inline tex={'\\tanh'} /> — à connaître en ECG.</p>
              </Step>
            </>
          }
        />

          {/* Module M5 — Dérivées avancées & extremums */}
          <div className="mb-2 mt-10">
            <span className="inline-block bg-carnet-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              M5 — Dérivées avancées &amp; extremums
            </span>
          </div>

          <Exercise
            id="ex11"
            num={11}
            title="Dérivée de sin + cos — extremums sur [0, 2π]"
            difficulty="Facile"
            open={!!open.ex11}
            onToggle={() => toggle('ex11')}
            tilt="l"
            statement={
              <>
                <p>Soit <Inline tex={'h(x) = \\sin x + \\cos x'} /> définie sur <Inline tex={'[0,\\, 2\\pi]'} />.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={"h'(x)"} />.</li>
                  <li>Résoudre <Inline tex={"h'(x) = 0"} /> sur <Inline tex={'[0,\\, 2\\pi]'} />.</li>
                  <li>Donner le maximum et le minimum de <Inline tex={'h'} />.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Dérivée">
                  <Block tex={"h'(x) = \\cos x - \\sin x"} />
                </Step>
                <Step label="Résolution de h′(x) = 0">
                  <Block tex={"h'(x) = 0 \\iff \\cos x = \\sin x \\iff \\tan x = 1 \\iff x = \\frac{\\pi}{4} + k\\pi"} />
                  <p>Sur <Inline tex={'[0,\\,2\\pi]'} /> : <Inline tex={'x = \\tfrac{\\pi}{4}'} /> et <Inline tex={'x = \\tfrac{5\\pi}{4}'} />.</p>
                </Step>
                <Step label="Extremums">
                  <Block tex={'h\\!\\left(\\tfrac{\\pi}{4}\\right) = \\tfrac{\\sqrt{2}}{2} + \\tfrac{\\sqrt{2}}{2} = \\sqrt{2} \\quad \\text{(maximum)}'} />
                  <Block tex={'h\\!\\left(\\tfrac{5\\pi}{4}\\right) = -\\tfrac{\\sqrt{2}}{2} - \\tfrac{\\sqrt{2}}{2} = -\\sqrt{2} \\quad \\text{(minimum)}'} />
                  <Block tex={'\\boxed{\\max = \\sqrt{2} \\text{ en } x = \\tfrac{\\pi}{4},\\quad \\min = -\\sqrt{2} \\text{ en } x = \\tfrac{5\\pi}{4}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex12"
            num={12}
            title="Dérivée et sens de variation de 1/(x²+1)"
            difficulty="Facile"
            open={!!open.ex12}
            onToggle={() => toggle('ex12')}
            statement={
              <>
                <p>Soit <Inline tex={'f(x) = \\dfrac{1}{x^2+1}'} /> définie sur <Inline tex={'\\mathbb{R}'} />.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={"f'(x)"} />.</li>
                  <li>Étudier le signe de <Inline tex={"f'(x)"} /> et en déduire les variations de <Inline tex={'f'} />.</li>
                  <li>Donner le maximum de <Inline tex={'f'} />.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Dérivée (règle du quotient)">
                  <Block tex={"f'(x) = \\frac{0 \\cdot (x^2+1) - 1 \\cdot 2x}{(x^2+1)^2} = \\frac{-2x}{(x^2+1)^2}"} />
                </Step>
                <Step label="Signe de f′">
                  <p>Le dénominateur <Inline tex={'(x^2+1)^2'} /> est toujours strictement positif.</p>
                  <Block tex={"f'(x) > 0 \\iff -2x > 0 \\iff x < 0"} />
                  <p>Donc <Inline tex={'f'} /> est croissante sur <Inline tex={'(-\\infty, 0)'} /> et décroissante sur <Inline tex={'(0, +\\infty)'} />.</p>
                </Step>
                <Step label="Maximum">
                  <Block tex={'\\boxed{f(0) = 1 \\text{ (maximum global)}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex13"
            num={13}
            title="Étude de x·e^{−x} — maximum et limites"
            difficulty="Moyen"
            open={!!open.ex13}
            onToggle={() => toggle('ex13')}
            tilt="r"
            statement={
              <>
                <p>Soit <Inline tex={'g(x) = x e^{-x}'} /> définie sur <Inline tex={'\\mathbb{R}'} />.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={"g'(x)"} /> (règle du produit).</li>
                  <li>Dresser le tableau de variations complet.</li>
                  <li>Calculer <Inline tex={'\\displaystyle\\lim_{x \\to +\\infty} g(x)'} /> et <Inline tex={'\\displaystyle\\lim_{x \\to -\\infty} g(x)'} />.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Dérivée">
                  <Block tex={"g'(x) = 1 \\cdot e^{-x} + x \\cdot (-e^{-x}) = e^{-x}(1 - x)"} />
                  <p>Comme <Inline tex={'e^{-x} > 0'} /> pour tout <Inline tex={'x'} />, le signe de <Inline tex={"g'"} /> est celui de <Inline tex={'1-x'} />.</p>
                </Step>
                <Step label="Tableau de variations">
                  <Block tex={"g'(x) > 0 \\iff x < 1 \\qquad g'(x) < 0 \\iff x > 1"} />
                  <p><Inline tex={'g'} /> est croissante sur <Inline tex={'(-\\infty, 1)'} /> et décroissante sur <Inline tex={'(1, +\\infty)'} />.</p>
                  <Block tex={'\\text{Maximum en } x=1 : \\quad \\boxed{g(1) = e^{-1} = \\tfrac{1}{e}}'} />
                </Step>
                <Step label="Limites">
                  <Block tex={'\\lim_{x \\to +\\infty} x e^{-x} = 0 \\quad (\\text{croissances comparées})'} />
                  <Block tex={'\\lim_{x \\to -\\infty} x e^{-x} = -\\infty \\quad (x \\to -\\infty,\\; e^{-x} \\to +\\infty)'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex14"
            num={14}
            title="Minimum de x + 4/x sur (0, +∞)"
            difficulty="Moyen"
            open={!!open.ex14}
            onToggle={() => toggle('ex14')}
            statement={
              <>
                <p>Soit <Inline tex={'h(x) = x + \\dfrac{4}{x}'} /> définie sur <Inline tex={'(0,\\, +\\infty)'} />.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={"h'(x)"} />.</li>
                  <li>Trouver le minimum de <Inline tex={'h'} /> sur <Inline tex={'(0,\\, +\\infty)'} />.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Dérivée">
                  <Block tex={"h'(x) = 1 - \\frac{4}{x^2} = \\frac{x^2 - 4}{x^2}"} />
                </Step>
                <Step label="Annulation et signe">
                  <Block tex={"h'(x) = 0 \\iff x^2 = 4 \\iff x = 2 \\quad (x > 0)"} />
                  <Block tex={"h'(x) < 0 \\text{ sur } (0,\\, 2) \\quad \\text{et} \\quad h'(x) > 0 \\text{ sur } (2,\\, +\\infty)"} />
                  <p>Donc <Inline tex={'h'} /> est décroissante puis croissante : minimum en <Inline tex={'x=2'} />.</p>
                </Step>
                <Step label="Valeur minimale">
                  <Block tex={'\\boxed{h(2) = 2 + \\frac{4}{2} = 4}'} />
                  <p>Remarque : ceci illustre l'inégalité arithmético-géométrique <Inline tex={'x + 4/x \\geq 2\\sqrt{4} = 4'} />.</p>
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
                Avant de dériver, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> Je précise l'<em>ensemble de dérivabilité</em>.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Je repère la <em>structure</em> (somme, produit, quotient, composée).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Pour une composée : je pose <Inline tex={'u'} />, je dérive <Inline tex={"u'"} />, j'applique <Inline tex={"(f \\circ u)' = u' \\cdot f'(u)"} />.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Je <em>factorise</em> <Inline tex={"f'(x)"} /> avant d'étudier son signe.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Je conclus avec un <em>tableau de variations</em> propre.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/derivees-cours"
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

export default Chapitre4DeriveesExercicesPage;
