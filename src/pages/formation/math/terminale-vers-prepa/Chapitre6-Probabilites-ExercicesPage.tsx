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
        description="3 exercices progressifs sur les probabilités conditionnelles, la formule de Bayes et la loi d'une variable aléatoire."
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
            Trois probas <em className="font-lora italic text-carnet-red">à conditionner</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Probabilités conditionnelles, formule de Bayes, loi d'une variable aléatoire. <span className="carnet-hl font-lora italic">Pose un arbre, écris ce que tu sais</span>, puis confronte ta rédaction au corrigé.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              2 Moyens
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
