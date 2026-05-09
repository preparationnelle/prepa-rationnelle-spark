import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Dices,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

const Chapitre6ProbabilitesCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/probabilites-cours"
        title="Chapitre 6 — Probabilités · Terminale → Prépa ECG"
        description="Cours complet sur les probabilités : univers, événements, opérations, probabilités conditionnelles, indépendance, arbres et variables aléatoires."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 6 · Probabilités</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">06 · Chapitre · Probabilités</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Les <em className="font-lora italic text-carnet-red">probabilités</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Modéliser l'aléatoire : univers, événements, conditionnelles. La <span className="carnet-hl font-lora italic">moitié de l'épreuve</span> EM Lyon, ESCP, HEC.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ formule de Bayes{'\n'}à connaître
          </div>
        </header>

        {/* Introduction */}
        <section className="carnet-card p-8 sm:p-10 mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-4 w-4 text-carnet-red" />
            </div>
            <h2 className="font-lora text-[26px] text-carnet-ink leading-tight">Introduction</h2>
          </div>
          <hr className="carnet-divider mb-6" />
          <p className="font-instrument text-[16px] text-carnet-ink-soft leading-[1.7]">
            Les <strong className="text-carnet-ink">probabilités</strong> aident à modéliser les situations aléatoires simples. On étudie des expériences comme lancer un dé ou tirer une carte, souvent avec des <strong className="text-carnet-ink">chances égales</strong>.
          </p>
        </section>

        {/* Section 1 — Bases */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Les bases</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2 flex items-center gap-2">
                <Dices className="h-3.5 w-3.5" />
                A · Univers
              </div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                L'<strong className="text-carnet-ink">univers</strong> est la liste de tous les résultats possibles.
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3">
                <p className="font-instrument text-[13px] text-carnet-ink-soft"><strong className="text-carnet-ink">Exemple :</strong> pour un dé : 1, 2, 3, 4, 5, 6.</p>
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">B · Événement</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Un <strong className="text-carnet-ink">événement</strong> est une partie de l'univers.
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3">
                <p className="font-instrument text-[13px] text-carnet-ink-soft"><strong className="text-carnet-ink">Exemple :</strong> "Pair" = {'{'}2, 4, 6{'}'}.</p>
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">C · Probabilité</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                La probabilité P(A) est entre 0 et 1. Pour des chances égales :
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-4 mb-3 text-center">
                <LatexRenderer latex={'P(A) = \\frac{\\text{nombre de cas favorables}}{\\text{nombre total de cas}}'} />
              </div>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 mb-3">
                <p className="font-instrument text-[13px] text-carnet-ink-soft mb-1"><strong className="text-carnet-ink">Exemple :</strong></p>
                <div className="text-center"><LatexRenderer latex={'P(\\text{pair}) = \\frac{3}{6} = \\frac{1}{2}'} /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 text-center">
                  <LatexRenderer latex={'P(\\text{univers}) = 1'} />
                </div>
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 text-center">
                  <LatexRenderer latex={'P(\\emptyset) = 0'} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Opérations */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Opérations <em className="font-lora italic text-carnet-red">simples</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-6">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">A · Union (Ou)</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Si A et B <strong className="text-carnet-ink">n'ont pas d'éléments en commun</strong> :
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 mb-3 text-center">
                <LatexRenderer latex={'P(A \\text{ ou } B) = P(A) + P(B)'} />
              </div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Sinon, soustraire P(commun) :
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 text-center">
                <LatexRenderer latex={'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)'} />
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">B · Complément</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Probabilité de l'événement contraire :</p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 text-center">
                <LatexRenderer latex={'P(\\overline{A}) = 1 - P(A)'} />
                <p className="font-mono-jb text-[12px] text-carnet-ink-mute mt-2">
                  où <span className="inline-block align-middle"><LatexRenderer latex={'\\overline{A}'} /></span> signifie « pas A »
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Conditionnelles */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Probabilités conditionnelles</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">A · Probabilité conditionnelle</div>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-4 text-center mb-2">
                <LatexRenderer latex={'P(A \\text{ sachant } B) = \\frac{P(A \\cap B)}{P(B)}'} />
              </div>
              <p className="font-mono-jb text-[12px] text-carnet-ink-mute text-center">si P(B) ≠ 0</p>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">B · Événements indépendants</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Si A et B sont <strong className="text-carnet-ink">indépendants</strong> :
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 text-center">
                <LatexRenderer latex={'P(A \\cap B) = P(A) \\times P(B)'} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Arbres */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Arbres de <em className="font-lora italic text-carnet-red">probabilité</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-6">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
              Pour <strong className="text-carnet-ink">plusieurs étapes</strong>, dessine un arbre avec les probabilités sur les branches, puis <strong className="text-carnet-ink">multiplie</strong> sur les chemins.
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Exemple — lancer une pièce 2×</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Probabilité d'obtenir deux « pile » :</p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 text-center">
                <LatexRenderer latex={'P(\\text{deux piles}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}'} />
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Règle générale</div>
              <ul className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] space-y-1.5 list-disc list-inside">
                <li>Chaque branche porte une probabilité</li>
                <li>Sur un chemin : <strong className="text-carnet-ink">multiplier</strong> les probabilités</li>
                <li>Sur plusieurs chemins : <strong className="text-carnet-ink">additionner</strong> leurs probabilités</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5 — Variables aléatoires */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">05</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Variables aléatoires</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">A · Variable aléatoire</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                X donne un <strong className="text-carnet-ink">nombre</strong> à chaque résultat de l'expérience.
              </p>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">B · Espérance</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                L'<strong className="text-carnet-ink">espérance</strong> E(X) est la moyenne pondérée :
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 text-center">
                <LatexRenderer latex={'E(X) = \\sum \\text{valeurs} \\times \\text{leurs probabilités}'} />
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">C · Loi binomiale</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Pour n épreuves indépendantes avec probabilité p de succès :
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3 text-center">
                <LatexRenderer latex={'E(X) = np'} />
                <p className="font-mono-jb text-[12px] text-carnet-ink-mute mt-2">espérance du nombre de succès</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="relative bg-carnet-ink rounded-lg p-8 sm:p-10 mt-4 mb-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="carnet-eyebrow text-carnet-red mb-3">Étape suivante</div>
              <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-paper leading-[1.2] mb-2">
                Modéliser, calculer, conclure.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Les probas se travaillent par mises en situation — direction les exercices.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/probabilites-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <Dices className="mr-2 h-4 w-4" />
                Faire les exercices
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer nav */}
        <div className="mt-10 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/formation/math/terminale-vers-prepa"
            className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour au sommaire
          </Link>
          <div className="carnet-hand text-[22px] text-carnet-red" style={{ transform: 'rotate(-2deg)' }}>
            — fin du chapitre 06
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chapitre6ProbabilitesCoursPage;
