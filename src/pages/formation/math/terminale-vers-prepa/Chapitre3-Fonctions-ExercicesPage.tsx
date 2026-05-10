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

const Chapitre3FonctionsExercicesPage = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/fonctions-exercices"
        title="Exercices · Chapitre 4 — Fonctions · Terminale → Prépa ECG"
        description="12 exercices progressifs sur le calcul de dérivées et l'étude complète d'une fonction : quotients, valeur absolue, signe et variations."
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
            <span className="carnet-eyebrow text-[11px]">Exercices · Chapitre 4 · Fonctions</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-14 relative">
          <div className="carnet-eyebrow mb-5">04 · Exercices · Fonctions</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Douze fonctions <em className="font-lora italic text-carnet-red">à dériver</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Quotient, produit, valeur absolue, étude complète. Trois extraits de concours pour entraîner ta technique. <span className="carnet-hl font-lora italic">Pose tes <Inline tex={"u, v, u', v'"} /></span> avant tout calcul.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink bg-carnet-paper-2">
              4 Faciles
            </span>
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              8 Moyens
            </span>
          </div>
        </header>

        {/* Module 1 */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M1</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Calculs de dérivées</h2>
        </div>

        {/* Exercice 1 */}
        <Exercise
          id="ex1"
          num={1}
          title="Quatre dérivées de concours"
          difficulty="Moyen"
          open={!!open.ex1}
          onToggle={() => toggle('ex1')}
          tilt="l"
          statement={
            <>
              <p>Calculer la dérivée des fonctions suivantes (toutes supposées dérivables sur leur domaine) :</p>
              <p><strong>1.</strong> <Inline tex={"\\forall x > 0,\\quad f(x) = \\dfrac{\\ln\\left( \\dfrac{x}{1+x} \\right) - \\ln(1 + x)}{x}"} /> <span className="text-carnet-ink-mute italic text-[14px]">(ECRICOME 1998)</span></p>
              <p><strong>2.</strong> <Inline tex={"f_n(x) = x e^{-n/x}"} /> avec <Inline tex={'n \\in \\mathbb{N}^*'} /> <span className="text-carnet-ink-mute italic text-[14px]">(EDHEC 2004)</span></p>
              <p><strong>3.</strong> <Inline tex={"h(x) = \\dfrac{e^x}{(1 + e^x)^2}"} /> <span className="text-carnet-ink-mute italic text-[14px]">(ESSEC 2005)</span></p>
              <p><strong>4.</strong> <Inline tex={"\\forall u \\geq 0,\\quad m(u) = (1 + \\sqrt{u}) \\sqrt{u}"} /></p>
            </>
          }
          correction={
            <>
              <Step label="1. Dérivée de f">
                <p>On simplifie d'abord : <Inline tex={'\\ln\\!\\bigl(\\tfrac{x}{1+x}\\bigr) - \\ln(1+x) = \\ln x - 2 \\ln(1+x)'} />. Donc <Inline tex={'f(x) = \\frac{\\ln x - 2\\ln(1+x)}{x}'} />.</p>
                <p>Règle du quotient :</p>
                <Block tex={"f'(x) = \\frac{x\\bigl(\\frac{1}{x} - \\frac{2}{1+x}\\bigr) - \\bigl(\\ln x - 2\\ln(1+x)\\bigr)}{x^2} = \\frac{\\frac{1-x}{1+x} - \\ln x + 2\\ln(1+x)}{x^2}."} />
              </Step>
              <Step label="2. Dérivée de fₙ">
                <p>Règle du produit avec <Inline tex={"\\bigl(e^{-n/x}\\bigr)' = \\frac{n}{x^2} e^{-n/x}"} /> :</p>
                <Block tex={"f_n'(x) = e^{-n/x} + x \\cdot \\frac{n}{x^2}\\, e^{-n/x} = e^{-n/x}\\left(1 + \\frac{n}{x}\\right)."} />
              </Step>
              <Step label="3. Dérivée de h">
                <p>Quotient avec <Inline tex={'u = e^x'} /> et <Inline tex={'v = (1 + e^x)^2'} /> ; <Inline tex={"v' = 2 e^x (1 + e^x)"} /> :</p>
                <Block tex={"h'(x) = \\frac{e^x (1 + e^x)^2 - e^x \\cdot 2 e^x (1 + e^x)}{(1 + e^x)^4} = \\frac{e^x (1 - e^x)}{(1 + e^x)^3}."} />
              </Step>
              <Step label="4. Dérivée de m">
                <p>On développe : <Inline tex={'m(u) = \\sqrt{u} + u'} />. Donc :</p>
                <Block tex={"m'(u) = \\frac{1}{2\\sqrt{u}} + 1 = \\frac{1 + 2\\sqrt{u}}{2\\sqrt{u}}."} />
              </Step>
            </>
          }
        />

        {/* Exercice 2 */}
        <Exercise
          id="ex2"
          num={2}
          title="Dériver une fonction avec valeur absolue"
          difficulty="Moyen"
          open={!!open.ex2}
          onToggle={() => toggle('ex2')}
          statement={
            <>
              <p>Soit <Inline tex={'f'} /> définie sur <Inline tex={'\\mathbb{R}'} /> par :</p>
              <Block tex={'f(t) = e^{|t+1|}.'} />
              <p>Calculer <Inline tex={"f'(t)"} /> sur les intervalles où <Inline tex={'f'} /> est dérivable.</p>
            </>
          }
          correction={
            <>
              <Step label="Lever la valeur absolue">
                <p><Inline tex={'|t+1| \\geq 0'} /> et <Inline tex={'t+1 \\geq 0 \\Leftrightarrow t \\geq -1'} />, donc :</p>
                <Block tex={'|t+1| = \\begin{cases} t+1 & \\text{si } t \\geq -1 \\\\ -t - 1 & \\text{si } t < -1 \\end{cases}'} />
              </Step>
              <Step label="Cas t < −1">
                <Block tex={'f(t) = e^{-t-1} \\quad \\Longrightarrow \\quad f\'(t) = -e^{-t-1}.'} />
              </Step>
              <Step label="Cas t ≥ −1">
                <Block tex={'f(t) = e^{t+1} \\quad \\Longrightarrow \\quad f\'(t) = e^{t+1}.'} />
              </Step>
              <Step label="Synthèse">
                <Block tex={'f\'(t) = \\begin{cases} -e^{-t-1} & \\text{si } t < -1 \\\\ e^{t+1} & \\text{si } t > -1 \\end{cases}'} />
                <p>En <Inline tex={'t = -1'} />, les dérivées à gauche et à droite valent <Inline tex={'-1'} /> et <Inline tex={'1'} />, donc <Inline tex={'f'} /> n'est <em>pas</em> dérivable en <Inline tex={'-1'} /> (point anguleux).</p>
              </Step>
            </>
          }
        />

        {/* Module 2 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M2</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Étude complète d'une fonction</h2>
        </div>

        {/* Exercice 3 */}
        <Exercise
          id="ex3"
          num={3}
          title="Étude de eˣ/(1+x)"
          difficulty="Moyen"
          open={!!open.ex3}
          onToggle={() => toggle('ex3')}
          tilt="l"
          statement={
            <>
              <p>Pour tout réel <Inline tex={'x \\neq -1'} />, on pose :</p>
              <Block tex={'f(x) = \\frac{e^x}{1 + x}.'} />
              <p><strong>1.</strong> Justifier que <Inline tex={'f'} /> est dérivable sur <Inline tex={']-\\infty ; -1['} /> et sur <Inline tex={']-1 ; +\\infty['} />, et montrer que :</p>
              <Block tex={"f'(x) = \\frac{x e^x}{(1 + x)^2}."} />
              <p><strong>2.</strong> Étudier le signe de <Inline tex={"f'(x)"} /> et en déduire le tableau de variations de <Inline tex={'f'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="1. Dérivabilité et calcul de f′">
                <p>• <Inline tex={'u : x \\mapsto e^x'} /> est dérivable sur <Inline tex={'\\mathbb{R}'} />.</p>
                <p>• <Inline tex={'v : x \\mapsto 1 + x'} /> est dérivable sur <Inline tex={'\\mathbb{R}'} /> et ne s'annule qu'en <Inline tex={'-1'} />.</p>
                <p>Par quotient, <Inline tex={'f = u/v'} /> est dérivable sur <Inline tex={']-\\infty ; -1[ \\cup ]-1 ; +\\infty['} />. Avec <Inline tex={"u' = e^x"} /> et <Inline tex={"v' = 1"} /> :</p>
                <Block tex={"f'(x) = \\frac{e^x (1 + x) - e^x \\cdot 1}{(1 + x)^2} = \\frac{e^x \\cdot x}{(1 + x)^2} = \\frac{x e^x}{(1 + x)^2}."} />
              </Step>
              <Step label="2. Signe de f′">
                <p><Inline tex={'e^x > 0'} /> et <Inline tex={'(1+x)^2 > 0'} /> sur le domaine, donc <Inline tex={"f'(x)"} /> a le signe de <Inline tex={'x'} /> :</p>
                <p>• <Inline tex={"f'(x) < 0"} /> sur <Inline tex={']-\\infty ; -1[ \\cup ]-1 ; 0['} /> ;</p>
                <p>• <Inline tex={"f'(0) = 0"} /> ;</p>
                <p>• <Inline tex={"f'(x) > 0"} /> sur <Inline tex={']0 ; +\\infty['} />.</p>
              </Step>
              <Step label="Tableau de variations">
                <div className="overflow-x-auto">
                  <table className="border-collapse border border-[rgba(78,55,30,0.35)] text-center text-[13px] mx-auto">
                    <tbody>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'x'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'-\\infty'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'-1'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'0'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'+\\infty'} /></td>
                      </tr>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={"f'(x)"} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">−</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">‖</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">0</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                      </tr>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'f(x)'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">↘</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 text-carnet-red">‖ asymptote</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">min = 1</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">↗</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>• <Inline tex={'f(0) = 1'} /> est un minimum local sur <Inline tex={']-1 ; +\\infty['} />.</p>
                <p>• <Inline tex={'f'} /> admet une asymptote verticale en <Inline tex={'x = -1'} />.</p>
              </Step>
            </>
          }
        />

        {/* Module 3 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M3</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Dérivées et points remarquables</h2>
        </div>

        {/* Exercice 4 */}
        <Exercise
          id="ex4"
          num={4}
          title="Dériver un polynôme du second degré"
          difficulty="Facile"
          open={!!open.ex4}
          onToggle={() => toggle('ex4')}
          tilt="r"
          statement={
            <>
              <p>Calculer la dérivée de <Inline tex={'f(x) = 3x^2 - 5x + 2'} /> sur <Inline tex={'\\mathbb{R}'} /> et trouver en quel point la tangente à <Inline tex={'\\mathcal{C}_f'} /> est horizontale.</p>
            </>
          }
          correction={
            <>
              <Step label="Calcul de f′">
                <p>Par linéarité de la dérivation :</p>
                <Block tex={"f'(x) = 6x - 5."} />
              </Step>
              <Step label="Tangente horizontale">
                <p>La tangente est horizontale si et seulement si <Inline tex={"f'(x) = 0"} /> :</p>
                <Block tex={"f'(x) = 0 \\Leftrightarrow 6x - 5 = 0 \\Leftrightarrow x = \\frac{5}{6}."} />
              </Step>
              <Step label="Point de tangence">
                <Block tex={"f\\!\\left(\\frac{5}{6}\\right) = 3 \\cdot \\frac{25}{36} - 5 \\cdot \\frac{5}{6} + 2 = \\frac{75}{36} - \\frac{150}{36} + \\frac{72}{36} = -\\frac{3}{36} = -\\frac{1}{12}."} />
                <p>La tangente horizontale touche la courbe au point <Inline tex={"\\left(\\dfrac{5}{6},\\,-\\dfrac{1}{12}\\right)"} />.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 5 */}
        <Exercise
          id="ex5"
          num={5}
          title="Dériver et étudier le signe"
          difficulty="Facile"
          open={!!open.ex5}
          onToggle={() => toggle('ex5')}
          statement={
            <>
              <p>Soit <Inline tex={'g(x) = x^3 - 3x'} /> définie sur <Inline tex={'\\mathbb{R}'} />. Calculer <Inline tex={"g'(x)"} />, étudier son signe, et dresser le tableau de variations de <Inline tex={'g'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Calcul de g′">
                <Block tex={"g'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)."} />
              </Step>
              <Step label="Signe de g′">
                <p>Le trinôme <Inline tex={'3(x-1)(x+1)'} /> s'annule en <Inline tex={'x = -1'} /> et <Inline tex={'x = 1'} /> :</p>
                <p>• <Inline tex={"g'(x) > 0"} /> pour <Inline tex={'x < -1'} /> ou <Inline tex={'x > 1'} /> ;</p>
                <p>• <Inline tex={"g'(x) < 0"} /> pour <Inline tex={'-1 < x < 1'} />.</p>
              </Step>
              <Step label="Tableau de variations">
                <div className="overflow-x-auto">
                  <table className="border-collapse border border-[rgba(78,55,30,0.35)] text-center text-[13px] mx-auto">
                    <tbody>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'x'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'-\\infty'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'-1'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'1'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2"><Inline tex={'+\\infty'} /></td>
                      </tr>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={"g'(x)"} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">0</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">0</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">+</td>
                      </tr>
                      <tr>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2 font-semibold"><Inline tex={'g(x)'} /></td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">↗</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">max = 2</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">min = −2</td>
                        <td className="border border-[rgba(78,55,30,0.35)] px-3 py-2">↗</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Maximum local en <Inline tex={'x = -1'} /> : <Inline tex={'g(-1) = -1 + 3 = 2'} />. Minimum local en <Inline tex={'x = 1'} /> : <Inline tex={'g(1) = 1 - 3 = -2'} />.</p>
              </Step>
            </>
          }
        />

        {/* Module 4 */}
        <div className="flex items-baseline gap-4 mb-6 mt-12">
          <span className="carnet-hand text-[40px] text-carnet-red leading-none font-semibold">M4</span>
          <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
          <h2 className="font-lora text-[26px] sm:text-[28px] text-carnet-ink leading-tight">Tangentes, parité et fonctions rationnelles</h2>
        </div>

        {/* Exercice 6 */}
        <Exercise
          id="ex6"
          num={6}
          title="Équation de la tangente"
          difficulty="Moyen"
          open={!!open.ex6}
          onToggle={() => toggle('ex6')}
          tilt="l"
          statement={
            <>
              <p>Soit <Inline tex={'h(x) = \\sqrt{x}'} /> définie sur <Inline tex={'\\mathbb{R}_+'} />. Déterminer l'équation de la tangente à <Inline tex={'\\mathcal{C}_h'} /> au point d'abscisse <Inline tex={'a = 4'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="Dérivée de h">
                <Block tex={"h'(x) = \\frac{1}{2\\sqrt{x}} \\quad \\text{pour } x > 0."} />
                <p>En <Inline tex={'x = 4'} /> : <Inline tex={"h'(4) = \\dfrac{1}{2\\sqrt{4}} = \\dfrac{1}{4}"} />.</p>
              </Step>
              <Step label="Point de tangence">
                <p><Inline tex={'h(4) = \\sqrt{4} = 2'} />, donc la tangente passe par le point <Inline tex={'(4, 2)'} />.</p>
              </Step>
              <Step label="Équation de la tangente">
                <p>La tangente en <Inline tex={'x = a'} /> a pour équation <Inline tex={"y = h'(a)(x - a) + h(a)"} /> :</p>
                <Block tex={"y = \\frac{1}{4}(x - 4) + 2 = \\frac{x}{4} - 1 + 2 = \\frac{x}{4} + 1."} />
              </Step>
            </>
          }
        />

        {/* Exercice 7 */}
        <Exercise
          id="ex7"
          num={7}
          title="Parité d'une fonction"
          difficulty="Moyen"
          open={!!open.ex7}
          onToggle={() => toggle('ex7')}
          statement={
            <>
              <p>Soit <Inline tex={'p(x) = x^4 - 2x^2 + 1'} /> et <Inline tex={'q(x) = x^3 - x'} />.</p>
              <p><strong>1.</strong> Montrer que <Inline tex={'p'} /> est paire.</p>
              <p><strong>2.</strong> Montrer que <Inline tex={'q'} /> est impaire.</p>
              <p><strong>3.</strong> Que peut-on dire de <Inline tex={'r(x) = p(x) + q(x)'} /> ?</p>
            </>
          }
          correction={
            <>
              <Step label="1. Parité de p">
                <Block tex={"p(-x) = (-x)^4 - 2(-x)^2 + 1 = x^4 - 2x^2 + 1 = p(x)."} />
                <p>Donc <Inline tex={'p(-x) = p(x)'} /> pour tout <Inline tex={'x \\in \\mathbb{R}'} /> : <Inline tex={'p'} /> est <strong>paire</strong>.</p>
              </Step>
              <Step label="2. Imparité de q">
                <Block tex={"q(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -q(x)."} />
                <p>Donc <Inline tex={'q(-x) = -q(x)'} /> pour tout <Inline tex={'x \\in \\mathbb{R}'} /> : <Inline tex={'q'} /> est <strong>impaire</strong>.</p>
              </Step>
              <Step label="3. Nature de r">
                <Block tex={"r(-x) = p(-x) + q(-x) = p(x) - q(x)."} />
                <p>Or <Inline tex={'r(x) = p(x) + q(x)'} />, donc <Inline tex={'r(-x) \\neq r(x)'} /> et <Inline tex={'r(-x) \\neq -r(x)'} /> en général (par exemple pour <Inline tex={'x = 1'} /> : <Inline tex={'r(1) = 0 + 0 = 0'} /> mais <Inline tex={'r(2) = 9 + 6 = 15'} /> et <Inline tex={'r(-2) = 9 - 6 = 3'} />). La fonction <Inline tex={'r'} /> n'est <strong>ni paire ni impaire</strong>.</p>
              </Step>
            </>
          }
        />

        {/* Exercice 8 */}
        <Exercise
          id="ex8"
          num={8}
          title="Étude d'une fonction rationnelle simple"
          difficulty="Moyen"
          open={!!open.ex8}
          onToggle={() => toggle('ex8')}
          tilt="r"
          statement={
            <>
              <p>Soit <Inline tex={'f(x) = \\dfrac{x^2 + 1}{x}'} /> définie sur <Inline tex={'\\mathbb{R}^*'} />.</p>
              <p><strong>1.</strong> Calculer <Inline tex={"f'(x)"} />.</p>
              <p><strong>2.</strong> Étudier les variations de <Inline tex={'f'} /> sur <Inline tex={'(0,\\,+\\infty)'} />.</p>
              <p><strong>3.</strong> Montrer que <Inline tex={'f(x) \\geq 2'} /> pour tout <Inline tex={'x > 0'} />.</p>
            </>
          }
          correction={
            <>
              <Step label="1. Calcul de f′">
                <p>On réécrit : <Inline tex={'f(x) = x + \\dfrac{1}{x}'} />. La dérivée est immédiate :</p>
                <Block tex={"f'(x) = 1 - \\frac{1}{x^2} = \\frac{x^2 - 1}{x^2}."} />
              </Step>
              <Step label="2. Variations sur (0, +∞)">
                <p>Sur <Inline tex={'(0,\\,+\\infty)'} />, <Inline tex={'x^2 > 0'} />, donc <Inline tex={"f'(x)"} /> a le signe de <Inline tex={'x^2 - 1'} /> :</p>
                <p>• <Inline tex={"f'(x) < 0"} /> si <Inline tex={'0 < x < 1'} /> (f décroissante) ;</p>
                <p>• <Inline tex={"f'(1) = 0"} /> ;</p>
                <p>• <Inline tex={"f'(x) > 0"} /> si <Inline tex={'x > 1'} /> (f croissante).</p>
                <p><Inline tex={'f'} /> admet donc un minimum en <Inline tex={'x = 1'} /> sur <Inline tex={'(0,\\,+\\infty)'} />, valant <Inline tex={'f(1) = 1 + 1 = 2'} />.</p>
              </Step>
              <Step label="3. Minoration f(x) ≥ 2 pour x > 0">
                <p>Puisque <Inline tex={'x = 1'} /> est le point de minimum global de <Inline tex={'f'} /> sur <Inline tex={'(0,\\,+\\infty)'} /> et que <Inline tex={'f(1) = 2'} />, on conclut :</p>
                <Block tex={"\\forall x > 0,\\quad f(x) \\geq f(1) = 2."} />
              </Step>
            </>
          }
        />

          {/* Module M4 — Antécédents, signes et études */}
          <div className="mb-2 mt-10">
            <span className="inline-block bg-carnet-red text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
              M4 — Antécédents, signes &amp; études
            </span>
          </div>

          <Exercise
            id="ex9"
            num={9}
            title="Antécédents d'une fonction affine"
            difficulty="Facile"
            open={!!open.ex9}
            onToggle={() => toggle('ex9')}
            tilt="l"
            statement={
              <>
                <p>Soit <Inline tex={'f(x) = 2x + 3'} />.</p>
                <p>Déterminer les antécédents de <Inline tex={'7'} /> et de <Inline tex={'-1'} /> par <Inline tex={'f'} />.</p>
              </>
            }
            correction={
              <>
                <Step label="Antécédent de 7">
                  <p>On résout <Inline tex={'f(x) = 7'} /> :</p>
                  <Block tex={'2x + 3 = 7 \\implies 2x = 4 \\implies x = 2'} />
                  <p>L'unique antécédent de 7 est <Inline tex={'\\boxed{2}'} />.</p>
                </Step>
                <Step label="Antécédent de −1">
                  <p>On résout <Inline tex={'f(x) = -1'} /> :</p>
                  <Block tex={'2x + 3 = -1 \\implies 2x = -4 \\implies x = -2'} />
                  <p>L'unique antécédent de <Inline tex={'-1'} /> est <Inline tex={'\\boxed{-2}'} />.</p>
                </Step>
              </>
            }
          />

          <Exercise
            id="ex10"
            num={10}
            title="Tableau de signe d'un produit"
            difficulty="Facile"
            open={!!open.ex10}
            onToggle={() => toggle('ex10')}
            statement={
              <>
                <p>Dresser le tableau de signe de <Inline tex={'g(x) = (x-2)(x+3)'} /> sur <Inline tex={'\\mathbb{R}'} />.</p>
                <p>En déduire l'ensemble des solutions de <Inline tex={'g(x) \\leq 0'} />.</p>
              </>
            }
            correction={
              <>
                <Step label="Racines du produit">
                  <p><Inline tex={'g(x) = 0'} /> pour <Inline tex={'x = 2'} /> et <Inline tex={'x = -3'} />.</p>
                </Step>
                <Step label="Tableau de signe">
                  <Block tex={`\\begin{array}{c|ccccc}
x & -\\infty & & -3 & & 2 & & +\\infty \\\\
\\hline
x-2 & & - & & - & 0 & + & \\\\
x+3 & & - & 0 & + & & + & \\\\
\\hline
g(x) & & + & 0 & - & 0 & + &
\\end{array}`} />
                </Step>
                <Step label="Solution">
                  <Block tex={'\\boxed{g(x) \\leq 0 \\iff x \\in [-3,\\, 2]}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex11"
            num={11}
            title="Étude d'une fonction rationnelle"
            difficulty="Moyen"
            open={!!open.ex11}
            onToggle={() => toggle('ex11')}
            tilt="r"
            statement={
              <>
                <p>Soit <Inline tex={'h(x) = \\dfrac{x^2 - 1}{x + 2}'} />, définie sur <Inline tex={'\\mathbb{R} \\setminus \\{-2\\}'} />.</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Calculer <Inline tex={"h'(x)"} />.</li>
                  <li>Étudier le signe de <Inline tex={"h'(x)"} /> et dresser le tableau de variations.</li>
                </ol>
              </>
            }
            correction={
              <>
                <Step label="Calcul de la dérivée (règle du quotient)">
                  <Block tex={"h'(x) = \\frac{2x(x+2) - (x^2-1) \\cdot 1}{(x+2)^2} = \\frac{2x^2+4x - x^2+1}{(x+2)^2} = \\frac{x^2+4x+1}{(x+2)^2}"} />
                </Step>
                <Step label="Signe du numérateur">
                  <p>Discriminant de <Inline tex={'x^2+4x+1'} /> : <Inline tex={'\\Delta = 16-4 = 12'} />.</p>
                  <Block tex={'x_{1,2} = \\frac{-4 \\pm 2\\sqrt{3}}{2} = -2 \\pm \\sqrt{3}'} />
                  <p>Donc <Inline tex={"h'(x) \\geq 0"} /> sur <Inline tex={'(-\\infty,\\, -2-\\sqrt{3}]\\cup[-2+\\sqrt{3},\\, +\\infty)'} /> (hors <Inline tex={'x=-2'} />).</p>
                </Step>
                <Step label="Tableau de variations (schéma)">
                  <Block tex={"h \\text{ décroissante sur } {]-2-\\sqrt{3},\\,-2[}\\cup{]-2,\\,-2+\\sqrt{3}[}"} />
                  <Block tex={'\\boxed{h(-2+\\sqrt{3}) = \\frac{(\\sqrt{3}-1)^2}{\\sqrt{3}} = \\frac{4-2\\sqrt{3}}{\\sqrt{3}} \\text{ (minimum local)}}'} />
                </Step>
              </>
            }
          />

          <Exercise
            id="ex12"
            num={12}
            title="Inéquation du second degré"
            difficulty="Moyen"
            open={!!open.ex12}
            onToggle={() => toggle('ex12')}
            statement={
              <>
                <p>Résoudre l'inéquation :</p>
                <Block tex={'(x+1)^2 \\geq 3'} />
              </>
            }
            correction={
              <>
                <Step label="Reformulation">
                  <Block tex={'(x+1)^2 \\geq 3 \\iff |x+1| \\geq \\sqrt{3}'} />
                </Step>
                <Step label="Résolution par cas">
                  <Block tex={'x+1 \\geq \\sqrt{3} \\quad \\text{ou} \\quad x+1 \\leq -\\sqrt{3}'} />
                  <Block tex={'x \\geq -1+\\sqrt{3} \\quad \\text{ou} \\quad x \\leq -1-\\sqrt{3}'} />
                </Step>
                <Step label="Solution">
                  <Block tex={'\\boxed{\\mathcal{S} = \\left]-\\infty,\\, -1-\\sqrt{3}\\right] \\cup \\left[-1+\\sqrt{3},\\, +\\infty\\right[}'} />
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
                Avant chaque dérivée, fais ce check.
              </h3>
              <ul className="space-y-2 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">1.</span> Je précise le domaine de définition (zéros du dénominateur, racines, etc.).</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">2.</span> Je pose explicitement <Inline tex={"u, v, u', v'"} /> avant d'appliquer la formule du quotient.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">3.</span> Pour une composée <Inline tex={'(f \\circ g)'} />, je n'oublie pas le facteur <Inline tex={"g'(x)"} />.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">4.</span> Pour une valeur absolue : je distingue les cas avant de dériver.</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">5.</span> Pour le signe : je factorise et j'isole les facteurs strictement positifs (<Inline tex={'e^x'} />, carrés…).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/fonctions-cours"
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

export default Chapitre3FonctionsExercicesPage;
