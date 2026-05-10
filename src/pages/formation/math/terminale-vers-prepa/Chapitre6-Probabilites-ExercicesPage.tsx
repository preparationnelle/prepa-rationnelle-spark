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

const Chapitre6ProbabilitesExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/probabilites-exercices"
        title="Exercices · Chapitre 8 — Probabilités · Terminale → Prépa ECG"
        description="11 exercices progressifs sur les probabilités conditionnelles, la formule de Bayes et la loi d'une variable aléatoire."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 8 · Probabilités</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">08 · Exercices · Probabilités</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Onze probas <em className="font-lora italic text-carnet-red">à conditionner</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Probabilités conditionnelles, formule de Bayes, loi d'une variable aléatoire. <span className="carnet-hl font-lora italic">Pose un arbre, écris ce que tu sais</span>, puis confronte ta rédaction au corrigé.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              4 Faciles
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
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Conditionnement & Bayes</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Dé pipé : somme conditionnée"
          difficulty="Moyen"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>On lance deux fois un dé pipé tel que :</p>
              <Block tex={'P(1) = P(3) = P(4) = \\frac{1}{8}, \\quad P(2) = P(6) = \\frac{1}{4}.'} />
              <p>Quelle est la probabilité que la somme des points obtenus soit strictement supérieure à 10, sachant que :</p>
              <p><strong>1.</strong> un des résultats est 6 ;</p>
              <p><strong>2.</strong> le premier résultat est 6 ?</p>
            </>
          }
          correction={
            <>
              <Step label="Étape préliminaire — Calcul de P(5)">
                <p>La somme des probabilités doit valoir 1 :</p>
                <Block tex={'3 \\times \\tfrac{1}{8} + 2 \\times \\tfrac{1}{4} + P(5) = 1 \\;\\Longrightarrow\\; P(5) = 1 - \\tfrac{7}{8} = \\tfrac{1}{8}.'} />
              </Step>
              <Step label="Question 1 — sachant qu'un des résultats est 6">
                <p>Pour que la somme soit <Inline tex={'> 10'} />, il faut <Inline tex={'\\text{somme} \\geq 11'} />. Si l'un des résultats est 6, l'autre doit être 5 ou 6. Cas favorables :</p>
                <p>• <Inline tex={'(6,5)'} /> avec proba <Inline tex={'\\tfrac{1}{4} \\times \\tfrac{1}{8} = \\tfrac{1}{32}'} /></p>
                <p>• <Inline tex={'(5,6)'} /> avec proba <Inline tex={'\\tfrac{1}{8} \\times \\tfrac{1}{4} = \\tfrac{1}{32}'} /></p>
                <p>• <Inline tex={'(6,6)'} /> avec proba <Inline tex={'\\tfrac{1}{4} \\times \\tfrac{1}{4} = \\tfrac{1}{16}'} /></p>
                <Block tex={'P(\\text{favorables}) = \\tfrac{1}{32} + \\tfrac{1}{32} + \\tfrac{2}{32} = \\tfrac{1}{8}.'} />
                <p>Probabilité de la condition « un des résultats est 6 » (formule du complément) :</p>
                <Block tex={'P(\\text{un 6}) = \\tfrac{1}{4} + \\tfrac{1}{4} - \\tfrac{1}{16} = \\tfrac{7}{16}.'} />
                <Block tex={'P(\\text{somme} > 10 \\,|\\, \\text{un 6}) = \\frac{1/8}{7/16} = \\tfrac{2}{7}.'} />
              </Step>
              <Step label="Question 2 — sachant que le premier résultat est 6">
                <p>Cas favorables : <Inline tex={'(6,5)'} /> et <Inline tex={'(6,6)'} />.</p>
                <Block tex={'P(\\text{favorables}) = \\tfrac{1}{32} + \\tfrac{1}{16} = \\tfrac{3}{32}.'} />
                <Block tex={'P(\\text{premier} = 6) = \\tfrac{1}{4}.'} />
                <Block tex={'P(\\text{somme} > 10 \\,|\\, \\text{premier} = 6) = \\frac{3/32}{1/4} = \\tfrac{3}{8}.'} />
              </Step>
              <Step label="Conclusion">
                <p>Fixer le premier résultat est moins restrictif que « un des deux résultats est 6 », d'où <Inline tex={'\\tfrac{3}{8} > \\tfrac{2}{7}'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Trois coffres et la formule de Bayes"
          difficulty="Difficile"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Trois coffres notés <Inline tex={'C_1, C_2, C_3'} /> ont chacun deux tiroirs contenant chacun une pièce :</p>
              <p>• <Inline tex={'C_1'} /> contient 2 pièces d'or ;</p>
              <p>• <Inline tex={'C_2'} /> contient 2 pièces d'argent ;</p>
              <p>• <Inline tex={'C_3'} /> contient 1 pièce d'or et 1 pièce d'argent.</p>
              <p><strong>1.</strong> On ouvre au hasard l'un des 6 tiroirs et on trouve une pièce d'argent. Quelle est la probabilité d'avoir ouvert un tiroir de <Inline tex={'C_2'} /> ?</p>
              <p><strong>2.</strong> On ouvre à nouveau, indépendamment, l'un des 6 tiroirs et on trouve encore une pièce d'argent. Quelle est la probabilité d'avoir ouvert deux fois le même coffre ?</p>
            </>
          }
          correction={
            <>
              <Step label="Mise en place">
                <p>Notons <Inline tex={'A'} /> l'événement « tirer une pièce d'argent ». Chaque coffre est équiprobable : <Inline tex={'P(C_i) = \\tfrac{1}{3}'} />. Les conditionnelles sont :</p>
                <p>• <Inline tex={'P(A\\,|\\,C_1) = 0'} /> ; • <Inline tex={'P(A\\,|\\,C_2) = 1'} /> ; • <Inline tex={'P(A\\,|\\,C_3) = \\tfrac{1}{2}'} />.</p>
              </Step>
              <Step label="Question 1 — Bayes">
                <p>Formule des probabilités totales :</p>
                <Block tex={'P(A) = 0 \\cdot \\tfrac{1}{3} + 1 \\cdot \\tfrac{1}{3} + \\tfrac{1}{2} \\cdot \\tfrac{1}{3} = \\tfrac{1}{3} + \\tfrac{1}{6} = \\tfrac{1}{2}.'} />
                <p>Formule de Bayes :</p>
                <Block tex={'P(C_2\\,|\\,A) = \\frac{P(A\\,|\\,C_2)\\,P(C_2)}{P(A)} = \\frac{1 \\cdot \\tfrac{1}{3}}{\\tfrac{1}{2}} = \\tfrac{2}{3}.'} />
              </Step>
              <Step label="Question 2 — deux tirages indépendants">
                <p>« Deux fois le même coffre et deux fois argent » impose <Inline tex={'C_2'} /> ou <Inline tex={'C_3'} /> aux deux tirages :</p>
                <Block tex={'P(C_2 \\text{ deux fois et } 2A) = \\left(\\tfrac{1}{3} \\cdot 1\\right)^2 = \\tfrac{1}{9}.'} />
                <Block tex={'P(C_3 \\text{ deux fois et } 2A) = \\left(\\tfrac{1}{3} \\cdot \\tfrac{1}{2}\\right)^2 = \\tfrac{1}{36}.'} />
                <p>Probabilité de tirer deux fois argent (par indépendance) :</p>
                <Block tex={'P(2A) = \\left(\\tfrac{1}{2}\\right)^2 = \\tfrac{1}{4}.'} />
                <Block tex={'P(\\text{même coffre}\\,|\\,2A) = \\frac{\\tfrac{1}{9} + \\tfrac{1}{36}}{\\tfrac{1}{4}} = \\frac{5/36}{1/4} = \\tfrac{5}{9}.'} />
              </Step>
              <Step label="Conclusion">
                <p><Inline tex={'P(C_2\\,|\\,A) = \\tfrac{2}{3}'} /> et <Inline tex={'P(\\text{même coffre}\\,|\\,2A) = \\tfrac{5}{9}'} />.</p>
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Loi d'une variable aléatoire</h2>
        </div>

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Deux urnes — loi du nombre de blanches"
          difficulty="Moyen"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="l"
          statement={
            <>
              <p>On considère deux urnes <Inline tex={'U_1'} /> et <Inline tex={'U_2'} /> contenant chacune 5 boules :</p>
              <p>• <Inline tex={'U_1'} /> contient 3 boules blanches et 2 boules noires ;</p>
              <p>• <Inline tex={'U_2'} /> contient 2 boules blanches et 3 boules noires.</p>
              <p>On tire successivement, <strong>sans remise</strong>, 2 boules dans chaque urne. On note <Inline tex={'B'} /> le nombre total de boules blanches obtenues.</p>
              <p><strong>Déterminer la loi de probabilité de <Inline tex={'B'} />.</strong></p>
            </>
          }
          correction={
            <>
              <Step label="Loi du nombre de blanches dans U₁">
                <p>Tirage sans remise, <Inline tex={'\\binom{5}{2} = 10'} /> issues équiprobables. Notons <Inline tex={'P_k = P(\\text{exactement } k \\text{ blanches dans } U_1)'} /> :</p>
                <Block tex={'P_0 = \\frac{\\binom{2}{2}}{10} = 0{,}1, \\quad P_1 = \\frac{\\binom{3}{1}\\binom{2}{1}}{10} = 0{,}6, \\quad P_2 = \\frac{\\binom{3}{2}}{10} = 0{,}3.'} />
              </Step>
              <Step label="Loi du nombre de blanches dans U₂">
                <p>De même, <Inline tex={'P_k\' = P(\\text{exactement } k \\text{ blanches dans } U_2)'} /> :</p>
                <Block tex={"P_0' = 0{,}3, \\quad P_1' = 0{,}6, \\quad P_2' = 0{,}1."} />
              </Step>
              <Step label="Loi de B = nombre total de blanches">
                <p>Les tirages dans les deux urnes sont indépendants. <Inline tex={'B'} /> prend les valeurs <Inline tex={'0,1,2,3,4'} />.</p>
                <Block tex={"P(B=0) = P_0 P_0' = 0{,}1 \\times 0{,}3 = 0{,}03."} />
                <Block tex={"P(B=1) = P_0 P_1' + P_1 P_0' = 0{,}06 + 0{,}18 = 0{,}24."} />
                <Block tex={"P(B=2) = P_0 P_2' + P_1 P_1' + P_2 P_0' = 0{,}01 + 0{,}36 + 0{,}09 = 0{,}46."} />
                <Block tex={"P(B=3) = P_1 P_2' + P_2 P_1' = 0{,}06 + 0{,}18 = 0{,}24."} />
                <Block tex={"P(B=4) = P_2 P_2' = 0{,}3 \\times 0{,}1 = 0{,}03."} />
              </Step>
              <Step label="Vérification & espérance">
                <p>Vérification : <Inline tex={'0{,}03 + 0{,}24 + 0{,}46 + 0{,}24 + 0{,}03 = 1'} />. Loi symétrique autour de 2.</p>
                <Block tex={'E(B) = 0 \\cdot 0{,}03 + 1 \\cdot 0{,}24 + 2 \\cdot 0{,}46 + 3 \\cdot 0{,}24 + 4 \\cdot 0{,}03 = 2.'} />
              </Step>
            </>
          }
        />

        {/* Module 3 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Fondamentaux & loi binomiale</h2>
        </div>

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Calcul de probabilités simples"
          difficulty="Facile"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          tilt="l"
          statement={
            <>
              <p>On tire au hasard une carte dans un jeu de 52 cartes (4 couleurs, 13 valeurs dont As, roi, dame, valet, 10, 9, …, 2).</p>
              <p><strong>a)</strong> Quelle est la probabilité d'obtenir un as ?</p>
              <p><strong>b)</strong> Quelle est la probabilité d'obtenir une figure (roi, dame, valet) ?</p>
              <p><strong>c)</strong> Quelle est la probabilité d'obtenir un as <em>ou</em> une figure ?</p>
              <p><strong>d)</strong> Ces deux événements sont-ils incompatibles ?</p>
            </>
          }
          correction={
            <>
              <Step label="a) Probabilité d'un as">
                <p>Il y a 4 as dans le jeu (un par couleur). Comme chaque carte est équiprobable :</p>
                <Block tex={'P(\\text{as}) = \\frac{4}{52} = \\frac{1}{13}.'} />
              </Step>
              <Step label="b) Probabilité d'une figure">
                <p>Il y a 3 figures (roi, dame, valet) par couleur, soit <Inline tex={'3 \\times 4 = 12'} /> figures au total :</p>
                <Block tex={'P(\\text{figure}) = \\frac{12}{52} = \\frac{3}{13}.'} />
              </Step>
              <Step label="c) Probabilité d'un as ou d'une figure">
                <p>Un as n'est pas une figure, donc les deux événements sont <em>disjoints</em> (<Inline tex={'\\text{as} \\cap \\text{figure} = \\emptyset'} />) :</p>
                <Block tex={'P(\\text{as} \\cup \\text{figure}) = P(\\text{as}) + P(\\text{figure}) = \\frac{1}{13} + \\frac{3}{13} = \\frac{4}{13}.'} />
              </Step>
              <Step label="d) Incompatibilité">
                <p>Oui, les événements « obtenir un as » et « obtenir une figure » sont <strong>incompatibles</strong> (mutuellement exclusifs) : aucune carte ne peut être à la fois un as et une figure (roi, dame ou valet).</p>
              </Step>
            </>
          }
        />

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Variable aléatoire discrète simple"
          difficulty="Facile"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          statement={
            <>
              <p>On lance un dé équilibré à 6 faces. Soit <Inline tex={'X'} /> le nombre de points obtenus.</p>
              <p><strong>a)</strong> Donner la loi de probabilité de <Inline tex={'X'} />.</p>
              <p><strong>b)</strong> Calculer <Inline tex={'E(X)'} />.</p>
              <p><strong>c)</strong> Calculer <Inline tex={'V(X)'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Loi de probabilité">
                <p>Le dé étant équilibré, chaque face est équiprobable :</p>
                <Block tex={'P(X = k) = \\frac{1}{6} \\quad \\text{pour } k \\in \\{1, 2, 3, 4, 5, 6\\}.'} />
                <p><Inline tex={'X'} /> suit donc une loi uniforme sur <Inline tex={'\\{1, 2, 3, 4, 5, 6\\}'} />.</p>
              </Step>
              <Step label="b) Espérance">
                <Block tex={'E(X) = \\sum_{k=1}^{6} k \\cdot \\frac{1}{6} = \\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = \\frac{21}{6} = \\frac{7}{2} = 3{,}5.'} />
              </Step>
              <Step label="c) Variance">
                <p>On calcule d'abord <Inline tex={'E(X^2)'} /> :</p>
                <Block tex={'E(X^2) = \\sum_{k=1}^{6} k^2 \\cdot \\frac{1}{6} = \\frac{1 + 4 + 9 + 16 + 25 + 36}{6} = \\frac{91}{6}.'} />
                <p>Formule de König–Huygens :</p>
                <Block tex={'V(X) = E(X^2) - E(X)^2 = \\frac{91}{6} - \\left(\\frac{7}{2}\\right)^2 = \\frac{91}{6} - \\frac{49}{4} = \\frac{182}{12} - \\frac{147}{12} = \\frac{35}{12}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Loi binomiale : nombre de succès"
          difficulty="Moyen"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          tilt="r"
          statement={
            <>
              <p>On tire 5 fois de suite à pile ou face avec une pièce non truquée. Soit <Inline tex={'X'} /> le nombre de « pile » obtenus.</p>
              <p><strong>a)</strong> Quelle loi suit <Inline tex={'X'} /> ? Préciser les paramètres.</p>
              <p><strong>b)</strong> Calculer <Inline tex={'P(X = 3)'} />.</p>
              <p><strong>c)</strong> Calculer <Inline tex={'P(X \\geq 4)'} />.</p>
              <p><strong>d)</strong> Calculer <Inline tex={'E(X)'} /> et <Inline tex={'V(X)'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="a) Identification de la loi">
                <p>On répète 5 fois une épreuve de Bernoulli (pile ou face) avec probabilité de succès <Inline tex={'p = 1/2'} />, de manière indépendante. Donc :</p>
                <Block tex={'X \\sim \\mathcal{B}\\!\\left(5,\\, \\tfrac{1}{2}\\right).'} />
              </Step>
              <Step label="b) Calcul de P(X = 3)">
                <Block tex={'P(X = 3) = \\binom{5}{3} \\left(\\frac{1}{2}\\right)^3 \\left(\\frac{1}{2}\\right)^2 = 10 \\cdot \\frac{1}{32} = \\frac{10}{32} = \\frac{5}{16}.'} />
              </Step>
              <Step label="c) Calcul de P(X ≥ 4)">
                <Block tex={'P(X \\geq 4) = P(X = 4) + P(X = 5).'} />
                <Block tex={'P(X = 4) = \\binom{5}{4} \\left(\\frac{1}{2}\\right)^5 = \\frac{5}{32}, \\qquad P(X = 5) = \\left(\\frac{1}{2}\\right)^5 = \\frac{1}{32}.'} />
                <Block tex={'P(X \\geq 4) = \\frac{5}{32} + \\frac{1}{32} = \\frac{6}{32} = \\frac{3}{16}.'} />
              </Step>
              <Step label="d) Espérance et variance">
                <p>Pour une loi <Inline tex={'\\mathcal{B}(n, p)'} />, on dispose des formules :</p>
                <Block tex={'E(X) = np = 5 \\times \\frac{1}{2} = \\frac{5}{2} = 2{,}5.'} />
                <Block tex={'V(X) = np(1-p) = 5 \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{5}{4}.'} />
              </Step>
            </>
          }
        />

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Probabilités conditionnelles : urne et boules"
          difficulty="Moyen"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          statement={
            <>
              <p>Une urne contient 4 boules rouges et 6 boules bleues. On tire successivement 2 boules <strong>sans remise</strong>.</p>
              <p><strong>a)</strong> Calculer la probabilité que les deux boules soient rouges.</p>
              <p><strong>b)</strong> Calculer la probabilité que les deux boules soient de la même couleur.</p>
              <p><strong>c)</strong> Sachant que les deux boules sont de la même couleur, quelle est la probabilité qu'elles soient rouges ?</p>
            </>
          }
          correction={
            <>
              <Step label="a) Les deux boules sont rouges">
                <p>On note <Inline tex={'R_1'} /> et <Inline tex={'R_2'} /> les événements « 1re boule rouge » et « 2e boule rouge ». Par la règle du produit :</p>
                <Block tex={'P(R_1 \\cap R_2) = P(R_1) \\times P(R_2 \\mid R_1) = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}.'} />
              </Step>
              <Step label="b) Les deux boules sont de la même couleur">
                <p>On calcule <Inline tex={'P(BB)'} /> (deux bleues) de la même façon :</p>
                <Block tex={'P(B_1 \\cap B_2) = \\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}.'} />
                <p>Les événements « deux rouges » et « deux bleues » sont incompatibles, donc :</p>
                <Block tex={'P(\\text{même couleur}) = \\frac{2}{15} + \\frac{1}{3} = \\frac{2}{15} + \\frac{5}{15} = \\frac{7}{15}.'} />
              </Step>
              <Step label="c) Probabilité conditionnelle — formule de Bayes">
                <p>On cherche <Inline tex={'P(RR \\mid \\text{même couleur})'} /> :</p>
                <Block tex={'P(RR \\mid \\text{même couleur}) = \\frac{P(RR)}{P(\\text{même couleur})} = \\frac{2/15}{7/15} = \\frac{2}{7}.'} />
              </Step>
            </>
          }
        />

          {/* Module M4 — Événements, lois discrètes & conditionnement */}
          <div className="mb-2 mt-10">
            <span className="inline-block bg-carnet-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              M4 — Événements, lois &amp; conditionnement
            </span>
          </div>

          <Exercise
            id="ex8"
            num={8}
            title="Événements liés à un dé"
            difficulty="Facile"
            open={!!open.ex8}
            onToggle={() => toggle('ex8')}
            tilt="l"
            statement={
              <>
                <p>On lance un dé équilibré à six faces. On pose :</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><Inline tex={'A'} /> : « obtenir un nombre pair »</li>
                  <li><Inline tex={'B'} /> : « obtenir un nombre strictement supérieur à 3 »</li>
                </ul>
                <ol className="list-decimal pl-5 space-y-1 mt-2">
                  <li>Calculer <Inline tex={'P(A)'} />, <Inline tex={'P(B)'} />, <Inline tex={'P(A \\cap B)'} />.</li>
                  <li>En déduire <Inline tex={'P(A \\cup B)'} />.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Probabilités individuelles">
                  <Block tex={'A = \\{2,4,6\\} \\implies P(A) = \\frac{3}{6} = \\frac{1}{2}'} />
                  <Block tex={'B = \\{4,5,6\\} \\implies P(B) = \\frac{3}{6} = \\frac{1}{2}'} />
                  <Block tex={'A \\cap B = \\{4,6\\} \\implies P(A \\cap B) = \\frac{2}{6} = \\frac{1}{3}'} />
                </Step>
                <Step label="Formule d'inclusion-exclusion">
                  <Block tex={'P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{1}{2} + \\frac{1}{2} - \\frac{1}{3}'} />
                  <Block tex={'\\boxed{P(A \\cup B) = \\frac{2}{3}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex9"
            num={9}
            title="Loi binomiale B(4, 1/3)"
            difficulty="Facile"
            open={!!open.ex9}
            onToggle={() => toggle('ex9')}
            statement={
              <>
                <p>Soit <Inline tex={'X \\sim \\mathcal{B}(4,\\, \\tfrac{1}{3})'} /> (loi binomiale de paramètres <Inline tex={'n=4'} />, <Inline tex={'p=\\tfrac{1}{3}'} />).</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={'P(X = 2)'} />.</li>
                  <li>Donner <Inline tex={'\\mathbb{E}(X)'} /> et <Inline tex={'\\mathbb{V}(X)'} />.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Calcul de P(X = 2)">
                  <Block tex={'P(X=2) = \\binom{4}{2}\\left(\\frac{1}{3}\\right)^2\\!\\left(\\frac{2}{3}\\right)^2 = 6 \\cdot \\frac{1}{9} \\cdot \\frac{4}{9} = \\frac{24}{81} = \\frac{8}{27}'} />
                  <Block tex={'\\boxed{P(X=2) = \\dfrac{8}{27}}'} />
                </Step>
                <Step label="Espérance et variance">
                  <p>Formules générales pour <Inline tex={'X \\sim \\mathcal{B}(n,p)'} /> :</p>
                  <Block tex={'\\mathbb{E}(X) = np = 4 \\times \\frac{1}{3} = \\boxed{\\frac{4}{3}}'} />
                  <Block tex={'\\mathbb{V}(X) = np(1-p) = 4 \\times \\frac{1}{3} \\times \\frac{2}{3} = \\boxed{\\frac{8}{9}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex10"
            num={10}
            title="Tirage sans remise — au moins une boule"
            difficulty="Moyen"
            open={!!open.ex10}
            onToggle={() => toggle('ex10')}
            tilt="r"
            statement={
              <>
                <p>Une urne contient 4 boules rouges et 6 boules blanches. On tire 2 boules simultanément (sans remise).</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer la probabilité d'obtenir 2 boules rouges.</li>
                  <li>Calculer la probabilité d'obtenir au moins une boule rouge.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Espace de probabilité">
                  <p>Le nombre de tirages possibles est <Inline tex={'\\binom{10}{2} = 45'} />.</p>
                </Step>
                <Step label="Deux boules rouges">
                  <Block tex={'P(\\text{2 rouges}) = \\frac{\\binom{4}{2}}{\\binom{10}{2}} = \\frac{6}{45} = \\boxed{\\dfrac{2}{15}}'} />
                </Step>
                <Step label="Au moins une rouge — méthode complémentaire">
                  <Block tex={'P(\\text{0 rouge}) = \\frac{\\binom{6}{2}}{\\binom{10}{2}} = \\frac{15}{45} = \\frac{1}{3}'} />
                  <Block tex={'P(\\text{au moins 1 rouge}) = 1 - \\frac{1}{3} = \\boxed{\\dfrac{2}{3}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex11"
            num={11}
            title="Probabilités totales — pièces défectueuses"
            difficulty="Moyen"
            open={!!open.ex11}
            onToggle={() => toggle('ex11')}
            statement={
              <>
                <p>Une usine possède deux lignes de production : A (60 % de la production, 2 % de défauts) et B (40 %, 5 % de défauts). On choisit une pièce au hasard.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer la probabilité qu'elle soit défectueuse.</li>
                  <li>Sachant qu'elle est défectueuse, quelle est la probabilité qu'elle vienne de A ? (formule de Bayes)</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Probabilité totale">
                  <Block tex={'P(D) = P(D|A)P(A) + P(D|B)P(B) = 0{,}02 \\times 0{,}6 + 0{,}05 \\times 0{,}4'} />
                  <Block tex={'= 0{,}012 + 0{,}020 = \\boxed{0{,}032}'} />
                </Step>
                <Step label="Formule de Bayes">
                  <Block tex={'P(A|D) = \\frac{P(D|A) \\cdot P(A)}{P(D)} = \\frac{0{,}012}{0{,}032} = \\frac{12}{32} = \\boxed{\\dfrac{3}{8}}'} />
                  <p>Bien que A produise 60 % des pièces, elle ne génère que 37,5 % des défauts car son taux de défaut est plus faible.</p>
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
                Avant chaque proba, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> Je vérifie que <Inline tex={'\\sum_i P(\\omega_i) = 1'} /> avant tout calcul.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Je distingue <Inline tex={'P(A|B)'} /> et <Inline tex={'P(B|A)'} /> — l'ordre n'est <em>pas</em> commutatif.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> J'utilise la formule des probabilités totales <Inline tex={'P(A) = \\sum P(A|B_i)P(B_i)'} /> avant Bayes.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Pour deux événements <em>indépendants</em>, <Inline tex={'P(A \\cap B) = P(A) P(B)'} /> — sinon, conditionner.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Pour une loi : je liste les valeurs possibles, calcule chaque probabilité, et vérifie que la somme vaut 1.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/probabilites-cours"
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

export default Chapitre6ProbabilitesExercicesPage;
