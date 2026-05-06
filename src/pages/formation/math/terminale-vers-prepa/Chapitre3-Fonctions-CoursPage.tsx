import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  FunctionSquare,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

const Chapitre3FonctionsCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/fonctions-cours"
        title="Chapitre 3 — Fonctions · Terminale → Prépa ECG"
        description="Cours complet sur les fonctions : définition, parité, monotonie, fonctions classiques (affine, puissances, exp, ln, trigo), opérations et étude."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 3 · Fonctions</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">03 · Chapitre · Fonctions</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Les <em className="font-lora italic text-carnet-red">fonctions</em> de base.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Définitions, propriétés et fonctions classiques. La <span className="carnet-hl font-lora italic">brique élémentaire</span> de toutes les démonstrations en analyse.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ connaître{'\n'}les variations
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
            En Terminale, une <strong className="text-carnet-ink">fonction</strong> associe à chaque élément d'un ensemble de départ (domaine) un unique élément d'un ensemble d'arrivée. On se concentre sur les <strong className="text-carnet-ink">fonctions réelles d'une variable réelle</strong>, notées{' '}
            <span className="inline-block align-middle"><LatexRenderer latex={'f: x \\mapsto f(x)'} /></span>.
          </p>
        </section>

        {/* Section 1 — Définition et notation */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Définition et notation</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Une fonction <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> est définie par :
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  • Son <strong className="text-carnet-ink">domaine de définition</strong>{' '}
                  <span className="inline-block align-middle"><LatexRenderer latex={'D_f'} /></span> (ensemble où elle est définie)
                </p>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  • Sa <strong className="text-carnet-ink">règle</strong> : pour chaque{' '}
                  <span className="inline-block align-middle"><LatexRenderer latex={'x \\in D_f'} /></span>, une valeur{' '}
                  <span className="inline-block align-middle"><LatexRenderer latex={'f(x)'} /></span>
                </p>
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-8">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = x^2'} /></span>, domaine{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{R}'} /></span>,{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'f(2) = 4'} /></span>.
              </p>
            </div>

            <div className="carnet-eyebrow mb-3">A · Représentations</div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { t: 'Algébrique', d: 'formule' },
                { t: 'Graphique', d: 'courbe dans le plan' },
                { t: 'Tableau', d: 'de valeurs' },
              ].map((rep) => (
                <div key={rep.t} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                  <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-1">{rep.t}</div>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft">{rep.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Propriétés de base */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Propriétés de base</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-8">
            <div>
              <div className="carnet-eyebrow mb-3">A · Parité</div>
              <div className="space-y-3">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    <strong className="text-carnet-ink">Fonction paire :</strong>{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'f(-x) = f(x)'} /></span> (symétrie axe y). Exemple :{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'x^2'} /></span>
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    <strong className="text-carnet-ink">Fonction impaire :</strong>{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'f(-x) = -f(x)'} /></span> (symétrie origine). Exemple :{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'x^3'} /></span>
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    <strong className="text-carnet-ink">Ni paire ni impaire</strong> sinon.
                  </p>
                </div>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">B · Monotonie</div>
              <div className="space-y-3 mb-4">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    <strong className="text-carnet-ink">Croissante</strong> sur I si{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'x_1 < x_2 \\implies f(x_1) < f(x_2)'} /></span> (strictement) ou ≤ (au sens large)
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    <strong className="text-carnet-ink">Décroissante</strong> pareil avec &gt; ou ≥
                  </p>
                </div>
              </div>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = x^2'} /></span> décroissante sur{' '}
                  <span className="inline-block align-middle"><LatexRenderer latex={'(-\\infty, 0]'} /></span>, croissante sur{' '}
                  <span className="inline-block align-middle"><LatexRenderer latex={'[0, +\\infty)'} /></span>.
                </p>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">C · Extrema</div>
              <div className="space-y-3">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    <strong className="text-carnet-ink">Maximum local :</strong> point où f est plus grande que ses voisines.
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    <strong className="text-carnet-ink">Minimum local :</strong> inverse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Fonctions classiques */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Fonctions <em className="font-lora italic text-carnet-red">classiques</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-8">
            <div>
              <div className="carnet-eyebrow mb-3">A · Fonctions affines</div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 text-center">
                <LatexRenderer latex={'f(x) = ax + b'} />
                <p className="font-instrument text-[13px] text-carnet-ink-mute mt-3">droite de pente <em>a</em>, ordonnée à l'origine <em>b</em></p>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">B · Fonctions puissances</div>
              <div className="space-y-3">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • <span className="inline-block align-middle"><LatexRenderer latex={'x^n'} /></span> pour n entier
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • <strong className="text-carnet-ink">Racine :</strong>{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'\\sqrt{x} = x^{1/2}'} /></span> (domaine{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'[0, +\\infty)'} /></span>)
                  </p>
                </div>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">C · Exponentielle et logarithme</div>
              <div className="space-y-3">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • <span className="inline-block align-middle"><LatexRenderer latex={'\\exp(x) = e^x'} /></span>, croissante,{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'e^0 = 1'} /></span>
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • <span className="inline-block align-middle"><LatexRenderer latex={'\\ln(x)'} /></span>, domaine{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'(0, +\\infty)'} /></span>, croissante,{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'\\ln(1) = 0'} /></span>
                  </p>
                </div>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">D · Trigonométriques</div>
              <div className="space-y-3">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • <span className="inline-block align-middle"><LatexRenderer latex={'\\sin x, \\cos x'} /></span>, période{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'2\\pi'} /></span>, bornées entre -1 et 1
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • <span className="inline-block align-middle"><LatexRenderer latex={'\\tan x = \\sin x / \\cos x'} /></span>, domaine sans multiples de{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'\\pi/2 + k\\pi'} /></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Opérations */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Opérations sur les fonctions</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-3">
            {[
              { label: 'Somme', latex: '(f + g)(x) = f(x) + g(x)' },
              { label: 'Produit', latex: '(fg)(x) = f(x)g(x)' },
              { label: 'Composition', latex: '(f \\circ g)(x) = f(g(x))' },
            ].map((op) => (
              <div key={op.label} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">{op.label}</div>
                <div className="text-center"><LatexRenderer latex={op.latex} /></div>
              </div>
            ))}
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = x^2'} /></span>,{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'g(x) = x + 1'} /></span> →{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'f \\circ g(x) = (x+1)^2'} /></span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Étude de fonctions */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">05</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Étude d'une fonction</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="carnet-eyebrow mb-4">Les 5 étapes de la méthode</div>
            <div className="space-y-3">
              {[
                'Domaine de définition',
                'Limites aux bornes et en ±∞',
                'Dérivée pour monotonie et extrema',
                'Tableau de variations',
                'Représentation graphique',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                  <span className="carnet-hand text-[24px] text-carnet-red leading-none font-semibold w-8 text-center flex-shrink-0">{i + 1}</span>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Mini-exercices */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">06</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Mini-exercices</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { num: '1', q: <>Déterminer le domaine de <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = \\sqrt{x-1}'} /></span></>, a: '[1, +∞)' },
                { num: '2', q: <>Est-ce que <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = x^3 - x'} /></span> est impaire ?</>, a: 'Oui, car f(-x) = -f(x)' },
                { num: '3', q: <>Composition : <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = 2x'} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={'g(x) = x^2'} /></span>, calculer <span className="inline-block align-middle"><LatexRenderer latex={'g \\circ f(3)'} /></span></>, a: '36' },
                { num: '4', q: <>Monotonie de <span className="inline-block align-middle"><LatexRenderer latex={'\\ln x'} /></span> sur (0, +∞)</>, a: 'Croissante' },
              ].map((ex, i) => (
                <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5 relative">
                  <div className="carnet-hand text-[22px] text-carnet-red absolute -top-3 left-3 bg-carnet-paper-2 px-2" style={{ transform: 'rotate(-4deg)' }}>
                    n°{ex.num}
                  </div>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mt-2 mb-2">{ex.q}</p>
                  <p className="font-mono-jb text-[12px] text-carnet-ink-mute">→ {ex.a}</p>
                </div>
              ))}
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
                On passe à la pratique.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Identifier les fonctions, calculer images et compositions — entraîne-toi.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/fonctions-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-[#9E342B] text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <FunctionSquare className="mr-2 h-4 w-4" />
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
            — fin du chapitre 03
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chapitre3FonctionsCoursPage;
