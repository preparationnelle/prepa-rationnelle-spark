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
        description="3 exercices progressifs sur le calcul de dérivées et l'étude complète d'une fonction : quotients, valeur absolue, signe et variations."
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
            Trois fonctions <em className="font-lora italic text-carnet-red">à dériver</em>.
          </h1>
          <p className="font-instrument text-[17px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Quotient, produit, valeur absolue, étude complète. Trois extraits de concours pour entraîner ta technique. <span className="carnet-hl font-lora italic">Pose tes <Inline tex={"u, v, u', v'"} /></span> avant tout calcul.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="font-instrument text-[12px] uppercase tracking-[0.14em] font-semibold px-3 py-1.5 rounded-full border border-[rgba(193,68,58,0.3)] text-carnet-red bg-[rgba(193,68,58,0.06)]">
              3 Moyens
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
