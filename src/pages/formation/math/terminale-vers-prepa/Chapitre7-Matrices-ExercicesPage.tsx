import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Grid,
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

const Chapitre7MatricesExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/matrices-exercices"
        title="Exercices · Chapitre 7 — Matrices · Terminale → Prépa ECG"
        description="7 exercices progressifs sur les matrices avec corrigés détaillés : dimensions, addition, multiplication, déterminant, inverse et systèmes 2×2."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 7 · Matrices</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">07 · Exercices · Matrices</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Sept matrices <em className="font-lora italic text-carnet-red">à manipuler</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Dimensions, addition, produit, déterminant, inverse, systèmes 2×2. Du plus simple au plus complet. <span className="carnet-hl font-lora italic">Pose le calcul à la main</span>, puis confronte au corrigé.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-carnet-paper-2">
              3 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              2 Moyens
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-carnet-red text-carnet-paper bg-carnet-red">
              2 Difficiles
            </span>
          </div>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 22, transform: 'rotate(-3deg)', maxWidth: 200, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ vérifie toujours{'\n'}les dimensions !
          </div>
        </header>

        {/* Module 1 — Bases */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M1</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Dimensions, addition, scalaire</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Lire les dimensions"
          difficulty="Facile"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>On considère les matrices :</p>
              <Block tex={'A = \\begin{pmatrix} 3 & 2 \\\\ 0 & 5 \\end{pmatrix}, \\quad B = \\begin{pmatrix} -3 & 5 & 1 \\\\ 2 & -4 & 0 \\end{pmatrix}, \\quad C = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}, \\quad D = \\begin{pmatrix} 1 & -2 \\end{pmatrix}.'} />
              <p><strong>1.</strong> Donner la dimension de chacune.</p>
              <p><strong>2.</strong> Préciser, pour chacune, son type (carrée, vecteur ligne, vecteur colonne, rectangulaire).</p>
              <p><strong>3.</strong> Donner les coefficients <Inline tex={'a_{1,2}'} />, <Inline tex={'a_{2,1}'} /> de <Inline tex={'A'} /> et <Inline tex={'b_{2,3}'} /> de <Inline tex={'B'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Question 1 — dimensions">
                <p>On compte d'abord les lignes (horizontales), puis les colonnes (verticales). Convention : <Inline tex={'\\text{lignes} \\times \\text{colonnes}'} />.</p>
                <p><Inline tex={'A'} /> : 2 lignes, 2 colonnes → <Inline tex={'2 \\times 2'} />.</p>
                <p><Inline tex={'B'} /> : 2 lignes, 3 colonnes → <Inline tex={'2 \\times 3'} />.</p>
                <p><Inline tex={'C'} /> : 2 lignes, 1 colonne → <Inline tex={'2 \\times 1'} />.</p>
                <p><Inline tex={'D'} /> : 1 ligne, 2 colonnes → <Inline tex={'1 \\times 2'} />.</p>
              </Step>
              <Step label="Question 2 — types">
                <p><Inline tex={'A'} /> est <strong>carrée</strong> (même nombre de lignes et de colonnes).</p>
                <p><Inline tex={'B'} /> est <strong>rectangulaire</strong>.</p>
                <p><Inline tex={'C'} /> est un <strong>vecteur colonne</strong>.</p>
                <p><Inline tex={'D'} /> est un <strong>vecteur ligne</strong>.</p>
              </Step>
              <Step label="Question 3 — coefficients">
                <p>La notation <Inline tex={'a_{i,j}'} /> désigne le coefficient situé ligne <Inline tex={'i'} />, colonne <Inline tex={'j'} />.</p>
                <p><Inline tex={'a_{1,2} = 2'} /> (ligne 1, colonne 2 de <Inline tex={'A'} />).</p>
                <p><Inline tex={'a_{2,1} = 0'} /> (ligne 2, colonne 1 de <Inline tex={'A'} />).</p>
                <p><Inline tex={'b_{2,3} = 0'} /> (ligne 2, colonne 3 de <Inline tex={'B'} />).</p>
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Addition, soustraction, scalaire"
          difficulty="Facile"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Soit <Inline tex={'A = \\begin{pmatrix} 1 & -2 \\\\ 3 & 0 \\end{pmatrix}'} /> et <Inline tex={'B = \\begin{pmatrix} 4 & 5 \\\\ -1 & 2 \\end{pmatrix}'} />.</p>
              <p>Calculer :</p>
              <p><strong>1.</strong> <Inline tex={'A + B'} />.</p>
              <p><strong>2.</strong> <Inline tex={'A - B'} />.</p>
              <p><strong>3.</strong> <Inline tex={'2A - 3B'} />.</p>
            </>
          }
          correction={
            <>
              <p>Les deux matrices ont la même taille <Inline tex={'2 \\times 2'} />, on peut additionner et soustraire <strong>coefficient par coefficient</strong>.</p>
              <Step label="Question 1">
                <Block tex={'A + B = \\begin{pmatrix} 1+4 & -2+5 \\\\ 3+(-1) & 0+2 \\end{pmatrix} = \\begin{pmatrix} 5 & 3 \\\\ 2 & 2 \\end{pmatrix}.'} />
              </Step>
              <Step label="Question 2">
                <Block tex={'A - B = \\begin{pmatrix} 1-4 & -2-5 \\\\ 3-(-1) & 0-2 \\end{pmatrix} = \\begin{pmatrix} -3 & -7 \\\\ 4 & -2 \\end{pmatrix}.'} />
              </Step>
              <Step label="Question 3">
                <p>On commence par calculer <Inline tex={'2A'} /> et <Inline tex={'3B'} /> en multipliant chaque coefficient :</p>
                <Block tex={'2A = \\begin{pmatrix} 2 & -4 \\\\ 6 & 0 \\end{pmatrix}, \\quad 3B = \\begin{pmatrix} 12 & 15 \\\\ -3 & 6 \\end{pmatrix}.'} />
                <p>Puis :</p>
                <Block tex={'2A - 3B = \\begin{pmatrix} 2-12 & -4-15 \\\\ 6-(-3) & 0-6 \\end{pmatrix} = \\begin{pmatrix} -10 & -19 \\\\ 9 & -6 \\end{pmatrix}.'} />
                <p className="text-carnet-ink-mute italic text-[14px]">Réflexe : on peut tout faire d'un coup en posant <Inline tex={'(2A - 3B)_{i,j} = 2 a_{i,j} - 3 b_{i,j}'} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Compatibilité d'un produit"
          difficulty="Facile"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="r"
          statement={
            <>
              <p>On considère <Inline tex={'A'} /> de taille <Inline tex={'2 \\times 3'} />, <Inline tex={'B'} /> de taille <Inline tex={'3 \\times 4'} />, <Inline tex={'C'} /> de taille <Inline tex={'4 \\times 2'} /> et <Inline tex={'D'} /> de taille <Inline tex={'2 \\times 3'} />.</p>
              <p>Pour chacun des produits suivants, dire s'il existe et, si oui, donner sa taille :</p>
              <p><Inline tex={'AB'} /> ; <Inline tex={'BA'} /> ; <Inline tex={'BC'} /> ; <Inline tex={'AD'} /> ; <Inline tex={'A + D'} /> ; <Inline tex={'ABC'} />.</p>
            </>
          }
          correction={
            <>
              <p><strong>Règle :</strong> le produit <Inline tex={'XY'} /> existe ssi le nombre de colonnes de <Inline tex={'X'} /> = nombre de lignes de <Inline tex={'Y'} />. La taille du résultat est alors (lignes de <Inline tex={'X'} />) × (colonnes de <Inline tex={'Y'} />).</p>
              <Step label="Analyse produit par produit">
                <p><Inline tex={'AB'} /> : <Inline tex={'(2 \\times 3)(3 \\times 4)'} /> → existe, taille <Inline tex={'2 \\times 4'} />.</p>
                <p><Inline tex={'BA'} /> : <Inline tex={'(3 \\times 4)(2 \\times 3)'} /> → <strong>n'existe pas</strong> (4 ≠ 2).</p>
                <p><Inline tex={'BC'} /> : <Inline tex={'(3 \\times 4)(4 \\times 2)'} /> → existe, taille <Inline tex={'3 \\times 2'} />.</p>
                <p><Inline tex={'AD'} /> : <Inline tex={'(2 \\times 3)(2 \\times 3)'} /> → <strong>n'existe pas</strong> (3 ≠ 2).</p>
                <p><Inline tex={'A + D'} /> : pour la <strong>somme</strong>, les deux matrices doivent avoir la même taille. Ici toutes deux <Inline tex={'2 \\times 3'} />, donc <Inline tex={'A + D'} /> existe et est <Inline tex={'2 \\times 3'} />.</p>
                <p><Inline tex={'ABC'} /> : <Inline tex={'AB'} /> est <Inline tex={'2 \\times 4'} />, puis <Inline tex={'(AB) C'} /> est <Inline tex={'(2 \\times 4)(4 \\times 2)'} /> → existe, taille <Inline tex={'2 \\times 2'} />.</p>
              </Step>
              <p className="text-carnet-ink-mute italic text-[14px]">Le réflexe à automatiser : à chaque produit, on aligne les tailles « (m × p)(p × n) → (m × n) ». Si le <Inline tex={'p'} /> central ne colle pas, le produit n'existe pas — peu importe les valeurs des coefficients.</p>
            </>
          }
        />

        {/* Module 2 — Multiplication */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Produit matriciel</h2>
        </div>

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="AB ≠ BA en général"
          difficulty="Moyen"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}'} /> et <Inline tex={'B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}'} />.</p>
              <p><strong>1.</strong> Calculer <Inline tex={'AB'} /> et <Inline tex={'BA'} />.</p>
              <p><strong>2.</strong> Conclure : a-t-on <Inline tex={'AB = BA'} /> ?</p>
              <p><strong>3.</strong> Calculer <Inline tex={'A^2 = A \\times A'} />.</p>
            </>
          }
          correction={
            <>
              <p><strong>Méthode :</strong> chaque coefficient <Inline tex={'(XY)_{i,j}'} /> est le produit scalaire de la <em>ligne i</em> de <Inline tex={'X'} /> par la <em>colonne j</em> de <Inline tex={'Y'} />.</p>
              <Step label="Question 1 — AB">
                <Block tex={'AB = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}.'} />
                <p>Coefficient (1,1) : <Inline tex={'1 \\cdot 0 + 2 \\cdot 1 = 2'} />. Coefficient (1,2) : <Inline tex={'1 \\cdot 1 + 2 \\cdot 0 = 1'} />.</p>
                <p>Coefficient (2,1) : <Inline tex={'3 \\cdot 0 + 4 \\cdot 1 = 4'} />. Coefficient (2,2) : <Inline tex={'3 \\cdot 1 + 4 \\cdot 0 = 3'} />.</p>
                <Block tex={'AB = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}.'} />
              </Step>
              <Step label="Question 1 — BA">
                <Block tex={'BA = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 0 \\cdot 1 + 1 \\cdot 3 & 0 \\cdot 2 + 1 \\cdot 4 \\\\ 1 \\cdot 1 + 0 \\cdot 3 & 1 \\cdot 2 + 0 \\cdot 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 4 \\\\ 1 & 2 \\end{pmatrix}.'} />
              </Step>
              <Step label="Question 2 — conclusion">
                <p>On a <Inline tex={'AB = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}'} /> et <Inline tex={'BA = \\begin{pmatrix} 3 & 4 \\\\ 1 & 2 \\end{pmatrix}'} />, donc <strong><Inline tex={'AB \\neq BA'} /></strong>.</p>
                <p>Multiplier <Inline tex={'A'} /> par <Inline tex={'B'} /> à droite ou à gauche échange les lignes de <Inline tex={'A'} /> dans le second cas : la position de <Inline tex={'B'} /> compte. <span className="text-carnet-ink-mute italic">C'est LE piège du calcul matriciel.</span></p>
              </Step>
              <Step label="Question 3 — A²">
                <Block tex={'A^2 = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 1+6 & 2+8 \\\\ 3+12 & 6+16 \\end{pmatrix} = \\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}.'} />
                <p className="text-carnet-ink-mute italic text-[14px]">Attention : <Inline tex={'A^2 \\neq \\begin{pmatrix} 1 & 4 \\\\ 9 & 16 \\end{pmatrix}'} /> — on ne met pas chaque coefficient au carré, on multiplie la matrice par elle-même.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Produit avec une matrice rectangulaire"
          difficulty="Moyen"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          statement={
            <>
              <p>Soit <Inline tex={'A = \\begin{pmatrix} 1 & 0 & -1 \\\\ 2 & 3 & 1 \\end{pmatrix}'} /> et <Inline tex={'B = \\begin{pmatrix} 2 & 1 \\\\ 0 & -1 \\\\ 1 & 4 \\end{pmatrix}'} />.</p>
              <p><strong>1.</strong> Vérifier que le produit <Inline tex={'AB'} /> existe et donner sa taille.</p>
              <p><strong>2.</strong> Calculer <Inline tex={'AB'} />.</p>
              <p><strong>3.</strong> Le produit <Inline tex={'BA'} /> existe-t-il ? Si oui, donner sa taille (sans le calculer).</p>
            </>
          }
          correction={
            <>
              <Step label="Question 1">
                <p><Inline tex={'A'} /> est <Inline tex={'2 \\times 3'} /> et <Inline tex={'B'} /> est <Inline tex={'3 \\times 2'} />. Le nombre de colonnes de <Inline tex={'A'} /> (3) égale le nombre de lignes de <Inline tex={'B'} /> (3) : le produit <strong>existe</strong>, et il est de taille <Inline tex={'2 \\times 2'} />.</p>
              </Step>
              <Step label="Question 2 — calcul de AB">
                <p>Notons <Inline tex={'C = AB'} />. Chaque coefficient <Inline tex={'c_{i,j}'} /> est <Inline tex={'\\sum_{k=1}^{3} a_{i,k} b_{k,j}'} />.</p>
                <p><Inline tex={'c_{1,1} = 1 \\cdot 2 + 0 \\cdot 0 + (-1) \\cdot 1 = 1'} />.</p>
                <p><Inline tex={'c_{1,2} = 1 \\cdot 1 + 0 \\cdot (-1) + (-1) \\cdot 4 = -3'} />.</p>
                <p><Inline tex={'c_{2,1} = 2 \\cdot 2 + 3 \\cdot 0 + 1 \\cdot 1 = 5'} />.</p>
                <p><Inline tex={'c_{2,2} = 2 \\cdot 1 + 3 \\cdot (-1) + 1 \\cdot 4 = 3'} />.</p>
                <Block tex={'AB = \\begin{pmatrix} 1 & -3 \\\\ 5 & 3 \\end{pmatrix}.'} />
              </Step>
              <Step label="Question 3">
                <p><Inline tex={'B'} /> est <Inline tex={'3 \\times 2'} /> et <Inline tex={'A'} /> est <Inline tex={'2 \\times 3'} /> : le nombre de colonnes de <Inline tex={'B'} /> (2) égale le nombre de lignes de <Inline tex={'A'} /> (2). Donc <Inline tex={'BA'} /> existe et est de taille <Inline tex={'3 \\times 3'} />.</p>
                <p className="text-carnet-ink-mute italic text-[14px]">Cas instructif : <Inline tex={'AB'} /> et <Inline tex={'BA'} /> existent tous les deux, mais <strong>n'ont même pas la même taille</strong> ! Donc <Inline tex={'AB \\neq BA'} /> a fortiori.</p>
              </Step>
            </>
          }
        />

        {/* Module 3 — Déterminant, inverse, systèmes */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Déterminant, inverse, systèmes</h2>
        </div>

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Déterminant et inverse 2×2"
          difficulty="Difficile"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          tilt="l"
          statement={
            <>
              <p>On considère <Inline tex={'A = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix}'} /> et <Inline tex={'B = \\begin{pmatrix} 4 & 6 \\\\ 2 & 3 \\end{pmatrix}'} />.</p>
              <p><strong>1.</strong> Calculer <Inline tex={'\\det(A)'} /> et <Inline tex={'\\det(B)'} />.</p>
              <p><strong>2.</strong> Pour chacune, dire si elle est inversible.</p>
              <p><strong>3.</strong> Calculer <Inline tex={'A^{-1}'} /> lorsque c'est possible et vérifier que <Inline tex={'A \\cdot A^{-1} = I_2'} />.</p>
            </>
          }
          correction={
            <>
              <p><strong>Formule à savoir :</strong> pour <Inline tex={'M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'} />, <Inline tex={'\\det(M) = ad - bc'} />, et si <Inline tex={'\\det(M) \\neq 0'} /> :</p>
              <Block tex={'M^{-1} = \\frac{1}{\\det(M)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}.'} />
              <Step label="Question 1 — déterminants">
                <p><Inline tex={'\\det(A) = 2 \\cdot 3 - 5 \\cdot 1 = 6 - 5 = 1'} />.</p>
                <p><Inline tex={'\\det(B) = 4 \\cdot 3 - 6 \\cdot 2 = 12 - 12 = 0'} />.</p>
              </Step>
              <Step label="Question 2 — inversibilité">
                <p><Inline tex={'\\det(A) = 1 \\neq 0'} /> donc <Inline tex={'A'} /> est <strong>inversible</strong>.</p>
                <p><Inline tex={'\\det(B) = 0'} /> donc <Inline tex={'B'} /> n'est <strong>pas inversible</strong>. (Géométriquement : ses deux lignes sont proportionnelles, <Inline tex={'L_1 = 2 L_2'} />.)</p>
              </Step>
              <Step label="Question 3 — calcul de A⁻¹">
                <p>On applique la formule avec <Inline tex={'a=2, b=5, c=1, d=3'} /> :</p>
                <Block tex={'A^{-1} = \\frac{1}{1} \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix}.'} />
                <p><strong>Vérification :</strong></p>
                <Block tex={'A \\cdot A^{-1} = \\begin{pmatrix} 2 & 5 \\\\ 1 & 3 \\end{pmatrix} \\begin{pmatrix} 3 & -5 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 6-5 & -10+10 \\\\ 3-3 & -5+6 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I_2.'} />
                <p>L'inverse est correct.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Résoudre un système avec l'inverse"
          difficulty="Difficile"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          statement={
            <>
              <p>On considère le système :</p>
              <Block tex={'\\begin{cases} 3x + 2y = 7 \\\\ x + 4y = 9 \\end{cases}'} />
              <p><strong>1.</strong> Écrire ce système sous la forme matricielle <Inline tex={'AX = Y'} /> en précisant <Inline tex={'A'} />, <Inline tex={'X'} /> et <Inline tex={'Y'} />.</p>
              <p><strong>2.</strong> Calculer <Inline tex={'\\det(A)'} />, puis <Inline tex={'A^{-1}'} />.</p>
              <p><strong>3.</strong> En déduire la solution <Inline tex={'(x, y)'} /> du système.</p>
              <p><strong>4.</strong> Vérifier la solution dans le système initial.</p>
            </>
          }
          correction={
            <>
              <Step label="Question 1 — forme matricielle">
                <p>On range les coefficients des inconnues à gauche, les inconnues dans un vecteur colonne, et les seconds membres dans un vecteur colonne :</p>
                <Block tex={'A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 4 \\end{pmatrix}, \\quad X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}, \\quad Y = \\begin{pmatrix} 7 \\\\ 9 \\end{pmatrix}.'} />
                <p>Le système s'écrit alors <Inline tex={'AX = Y'} />.</p>
              </Step>
              <Step label="Question 2 — déterminant et inverse">
                <p><Inline tex={'\\det(A) = 3 \\cdot 4 - 2 \\cdot 1 = 12 - 2 = 10 \\neq 0'} />, donc <Inline tex={'A'} /> est inversible.</p>
                <Block tex={'A^{-1} = \\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix}.'} />
              </Step>
              <Step label="Question 3 — résolution">
                <p>Comme <Inline tex={'A'} /> est inversible, on multiplie <Inline tex={'AX = Y'} /> à gauche par <Inline tex={'A^{-1}'} /> :</p>
                <Block tex={'A^{-1} A X = A^{-1} Y \\implies I_2 X = A^{-1} Y \\implies X = A^{-1} Y.'} />
                <p>On calcule :</p>
                <Block tex={'X = \\frac{1}{10} \\begin{pmatrix} 4 & -2 \\\\ -1 & 3 \\end{pmatrix} \\begin{pmatrix} 7 \\\\ 9 \\end{pmatrix} = \\frac{1}{10} \\begin{pmatrix} 4 \\cdot 7 + (-2) \\cdot 9 \\\\ -1 \\cdot 7 + 3 \\cdot 9 \\end{pmatrix} = \\frac{1}{10} \\begin{pmatrix} 10 \\\\ 20 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}.'} />
                <p>Donc <Inline tex={'x = 1'} /> et <Inline tex={'y = 2'} />.</p>
              </Step>
              <Step label="Question 4 — vérification">
                <p>Première équation : <Inline tex={'3 \\cdot 1 + 2 \\cdot 2 = 3 + 4 = 7'} />. ✓</p>
                <p>Seconde équation : <Inline tex={'1 + 4 \\cdot 2 = 1 + 8 = 9'} />. ✓</p>
                <p>Le couple <Inline tex={'(1, 2)'} /> est bien la solution unique du système.</p>
                <p className="text-carnet-ink-mute italic text-[14px]">À retenir : tout système 2×2 dont la matrice des coefficients est inversible admet une <em>unique</em> solution donnée par <Inline tex={'X = A^{-1} Y'} />. Si <Inline tex={'\\det(A) = 0'} />, le système a soit aucune solution, soit une infinité.</p>
              </Step>
            </>
          }
        />

        {/* Bandeau récap */}
        <section className="mt-14 mb-10 relative">
          <div className="bg-carnet-ink rounded-lg p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>
            <div className="relative z-10">
              <span className="carnet-eyebrow text-carnet-red">Récap · Les 5 réflexes matrices</span>
              <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-paper leading-[1.2] mb-5 mt-3">
                Avant chaque calcul matriciel, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> Je vérifie les <strong>tailles</strong> avant tout produit ou somme.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Pour <Inline tex={'AB'} />, j'aligne <Inline tex={'(m \\times p)(p \\times n)'} /> et je note la taille du résultat.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Je n'oublie jamais que <Inline tex={'AB \\neq BA'} /> en général.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Avant de parler d'inverse, je calcule <Inline tex={'\\det'} /> et je vérifie qu'il est non nul.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Pour résoudre <Inline tex={'AX = Y'} />, je multiplie à <em>gauche</em> par <Inline tex={'A^{-1}'} /> : <Inline tex={'X = A^{-1} Y'} />.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/matrices-cours"
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

        <div className="mt-10 carnet-hand text-[22px] text-carnet-red text-center" style={{ transform: 'rotate(-1.5deg)' }}>
          — fin des exercices · chapitre 07
        </div>

      </div>
    </div>
  );
};

export default Chapitre7MatricesExercicesPage;
