import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Spline,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

const Chapitre4DeriveesCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/derivees-cours"
        title="Chapitre 4 — Dérivées · Terminale → Prépa ECG"
        description="Cours complet sur les dérivées : définition par limite, règles de calcul, dérivées des fonctions usuelles, tangentes et étude de variations."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 4</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">04 · Chapitre · Dérivées</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Les <em className="font-lora italic text-carnet-red">dérivées</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Mesurer la <span className="carnet-hl font-lora italic">variation instantanée</span> d'une fonction. Pente de tangente, sens de variation, extrema — l'outil clé de toute l'analyse.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ formules à{'\n'}automatiser
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
          <div className="space-y-4 font-instrument text-[16px] text-carnet-ink-soft leading-[1.7]">
            <p>
              En Terminale, la <strong className="text-carnet-ink">dérivée</strong> d'une fonction{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> en un point{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'x'} /></span> mesure la <strong className="text-carnet-ink">variation instantanée</strong> de la fonction, comme la pente de la tangente à la courbe en ce point.
            </p>
            <p>On note la dérivée <span className="inline-block align-middle"><LatexRenderer latex={"f'(x)"} /></span> (notation prime).</p>
          </div>
        </section>

        {/* Section 1 — Définition */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Définition de la dérivée</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
              La dérivée de <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> en{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'a'} /></span> (si la limite existe) est :
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-6 mb-6 text-center">
              <LatexRenderer latex={"f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}"} block />
            </div>

            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              La fonction est <strong className="text-carnet-ink">dérivable</strong> en{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'a'} /></span> si cette limite existe et est finie. Si dérivable partout sur son domaine, on a la fonction dérivée{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={"f'"} /></span>.
            </p>

            <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Exemple : f(x) = x²</div>
              <div className="text-center mb-3">
                <LatexRenderer latex={"f'(a) = \\lim_{h \\to 0} \\frac{(a + h)^2 - a^2}{h} = \\lim_{h \\to 0} \\frac{2ah + h^2}{h} = 2a"} block />
              </div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft text-center">
                Ainsi, <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 2x"} /></span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Règles de dérivation */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Règles de <em className="font-lora italic text-carnet-red">dérivation</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-3">
            {[
              { label: 'Dérivée d\'une constante', latex: "\\text{Si } f(x) = c, \\text{ alors } f'(x) = 0" },
              { label: 'Somme', latex: "(f + g)'(x) = f'(x) + g'(x)" },
              { label: 'Produit par une constante', latex: "(cf)'(x) = cf'(x)" },
              { label: 'Produit', latex: "(fg)'(x) = f'(x)g(x) + f(x)g'(x)" },
              { label: 'Quotient (g(x) ≠ 0)', latex: "\\left( \\frac{f}{g} \\right)'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}" },
              { label: 'Composée', latex: "(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)" },
            ].map((rule, i) => (
              <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">{rule.label}</div>
                <div className="text-center"><LatexRenderer latex={rule.latex} /></div>
              </div>
            ))}

            <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple — composée</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-2">
                Pour <span className="inline-block align-middle"><LatexRenderer latex={'h(x) = (2x + 1)^3'} /></span>, on pose{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'u(x) = 2x + 1'} /></span>,{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'h = u^3'} /></span> :
              </p>
              <div className="text-center">
                <LatexRenderer latex={"h'(x) = 3u(x)^2 \\cdot u'(x) = 3(2x + 1)^2 \\cdot 2 = 6(2x + 1)^2"} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Dérivées usuelles */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Dérivées usuelles</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { latex: "(x^n)' = nx^{n-1}", note: 'n entier (ou fractionnaire si domaine ok)' },
                { latex: "(e^x)' = e^x", note: '' },
                { latex: "(\\ln x)' = \\frac{1}{x}", note: 'x > 0' },
                { latex: "(\\sin x)' = \\cos x", note: '' },
                { latex: "(\\cos x)' = -\\sin x", note: '' },
                { latex: "(\\tan x)' = \\frac{1}{\\cos^2 x}", note: '' },
              ].map((rule, i) => (
                <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <div className="text-center"><LatexRenderer latex={rule.latex} /></div>
                  {rule.note && (
                    <p className="font-mono-jb text-[11px] text-carnet-ink-mute text-center mt-2">{rule.note}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Exemple — exponentielle composée</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-2">
                Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = e^{3x}'} /></span> : avec{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'u = 3x'} /></span>, on a{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={"(e^u)' = e^u \\cdot u'"} /></span>.
              </p>
              <div className="text-center">
                <LatexRenderer latex={"f'(x) = e^{3x} \\cdot 3 = 3e^{3x}"} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Applications */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Applications des <em className="font-lora italic text-carnet-red">dérivées</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-8">
            <div>
              <div className="carnet-eyebrow mb-3">A · Équation de la tangente</div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-3">
                À la courbe de f en <span className="inline-block align-middle"><LatexRenderer latex={'x = a'} /></span>, la tangente a pour équation :
              </p>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-4 text-center">
                <LatexRenderer latex={"y = f'(a)(x - a) + f(a)"} />
              </div>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  Pour <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = x^2'} /></span> en x = 1 : f(1) = 1, f'(1) = 2.
                </p>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  Tangente : <span className="inline-block align-middle"><LatexRenderer latex={'y = 2(x-1) + 1 = 2x - 1'} /></span>
                </p>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">B · Sens de variation</div>
              <div className="space-y-3 mb-4">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • Si <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) > 0"} /></span> sur un intervalle, f est <strong className="text-carnet-ink">croissante</strong>
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • Si <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) < 0"} /></span>, f est <strong className="text-carnet-ink">décroissante</strong>
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    • Si <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 0"} /></span> en un point, possible <strong className="text-carnet-ink">extremum</strong> (max ou min local)
                  </p>
                </div>
              </div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
                <strong className="text-carnet-ink">Pour trouver les extrema :</strong> résoudre{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 0"} /></span>, puis étudier le signe de f' autour.
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple : f(x) = x³ - 3x</div>
                <ul className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] space-y-1">
                  <li><span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 3x^2 - 3 = 3(x^2 - 1)"} /></span></li>
                  <li>Zéros en x = ±1</li>
                  <li>Signe de f' : négatif sur (-1, 1), positif ailleurs</li>
                  <li>→ max local en x = -1, min local en x = 1</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Mini-exercices */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">05</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Mini-exercices</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { num: '1', q: <>Calculer la dérivée de <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = 3x^2 - 2x + 1'} /></span></>, a: '6x - 2' },
                { num: '2', q: <>Tangente à <span className="inline-block align-middle"><LatexRenderer latex={'y = \\sqrt{x}'} /></span> en x = 4</>, a: 'y = x/4 + 1' },
                { num: '3', q: <>Variations de <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = e^x + x'} /></span></>, a: "f'(x) = e^x + 1 > 0, strictement croissante" },
                { num: '4', q: <>Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={'\\sin(2x)'} /></span></>, a: '2 cos(2x)' },
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
                Les formules en main, on dérive.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Plus tu en fais, plus la composée devient un réflexe. Direction les exercices.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/derivees-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <Spline className="mr-2 h-4 w-4" />
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
            — fin du chapitre 04
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chapitre4DeriveesCoursPage;
