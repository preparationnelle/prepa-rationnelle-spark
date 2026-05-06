import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  AreaChart,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

const Chapitre5IntegralesCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/integrales-cours"
        title="Chapitre 5 — Intégrales · Terminale → Prépa ECG"
        description="Cours complet sur les intégrales : primitives, règles d'intégration, IPP, substitution, primitives usuelles, intégrale définie et applications."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 5</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">05 · Chapitre · Intégrales</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Les <em className="font-lora italic text-carnet-red">intégrales</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Aire sous la courbe, primitives, IPP, substitution. L'opération <span className="carnet-hl font-lora italic">inverse de la dérivation</span>.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ ne jamais{'\n'}oublier le + C
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
            En Terminale, l'<strong className="text-carnet-ink">intégrale</strong> d'une fonction continue positive sur un intervalle représente l'<strong className="text-carnet-ink">aire sous la courbe</strong>. Plus généralement, c'est l'opération inverse de la dérivation : on cherche les <strong className="text-carnet-ink">primitives</strong> (antidérivées).
          </p>
        </section>

        {/* Section 1 — Primitive */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Définition de la primitive</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Une fonction <span className="inline-block align-middle"><LatexRenderer latex={'F'} /></span> est une <strong className="text-carnet-ink">primitive</strong> de{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> sur un intervalle I si{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={"F'(x) = f(x)"} /></span> pour tout x dans I.
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-4">
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Toute primitive de f est de la forme :</p>
              <div className="text-center"><LatexRenderer latex={'F(x) + C'} /></div>
              <p className="font-mono-jb text-[12px] text-carnet-ink-mute text-center mt-2">où C est une constante</p>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-6">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Notation</div>
              <div className="text-center"><LatexRenderer latex={'\\int f(x) \\, dx = F(x) + C'} /></div>
            </div>

            <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-1">
                Une primitive de <span className="inline-block align-middle"><LatexRenderer latex={'x^2'} /></span> est{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'\\frac{x^3}{3} + C'} /></span>
              </p>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                car la dérivée de <span className="inline-block align-middle"><LatexRenderer latex={'\\frac{x^3}{3}'} /></span> est{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'x^2'} /></span>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 — Règles d'intégration */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Règles d'<em className="font-lora italic text-carnet-red">intégration</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-4">
            {[
              { label: 'Primitive d\'une constante', latex: '\\int c \\, dx = cx + C' },
              { label: 'Somme', latex: '\\int (f(x) + g(x)) \\, dx = \\int f(x) \\, dx + \\int g(x) \\, dx' },
              { label: 'Produit par une constante', latex: '\\int cf(x) \\, dx = c \\int f(x) \\, dx' },
            ].map((rule, i) => (
              <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">{rule.label}</div>
                <div className="text-center"><LatexRenderer latex={rule.latex} /></div>
              </div>
            ))}

            {/* IPP */}
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Intégration par parties</div>
              <div className="text-center mb-3"><LatexRenderer latex={"\\int uv' \\, dx = uv - \\int u'v \\, dx"} /></div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                <strong className="text-carnet-ink">Choix :</strong> souvent <em>u</em> = ln x ou polynôme,{' '}
                <em>v'</em> = exp ou trigonométrique.
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-4">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-2">
                  <span className="inline-block align-middle"><LatexRenderer latex={'\\int xe^x \\, dx'} /></span>. Poser u = x, v' = e^x →{' '}
                  u' = 1, v = e^x.
                </p>
                <div className="text-center">
                  <LatexRenderer latex={'\\int xe^x \\, dx = xe^x - \\int e^x \\, dx = e^x(x-1) + C'} />
                </div>
              </div>
            </div>

            {/* Substitution */}
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Substitution</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Si <span className="inline-block align-middle"><LatexRenderer latex={"\\int f(g(x))g'(x) \\, dx"} /></span>, poser t = g(x), dt = g'(x) dx, alors{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'\\int f(t) \\, dt'} /></span>.
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-4">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Exemple</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-2">
                  <span className="inline-block align-middle"><LatexRenderer latex={'\\int 2xe^{x^2} \\, dx'} /></span>. t = x², dt = 2x dx.
                </p>
                <div className="text-center">
                  <LatexRenderer latex={'\\int e^t \\, dt = e^t + C = e^{x^2} + C'} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Primitives usuelles */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Primitives usuelles</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { latex: '\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C', note: 'n ≠ -1' },
                { latex: '\\int \\frac{1}{x} \\, dx = \\ln |x| + C', note: 'x ≠ 0' },
                { latex: '\\int e^x \\, dx = e^x + C', note: '' },
                { latex: '\\int \\sin x \\, dx = -\\cos x + C', note: '' },
                { latex: '\\int \\cos x \\, dx = \\sin x + C', note: '' },
                { latex: '\\int \\frac{1}{\\cos^2 x} \\, dx = \\tan x + C', note: '' },
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
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Exemple</div>
              <div className="text-center"><LatexRenderer latex={'\\int (3x^2 + 2) \\, dx = x^3 + 2x + C'} /></div>
            </div>
          </div>
        </section>

        {/* Section 4 — Intégrale définie */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Intégrale <em className="font-lora italic text-carnet-red">définie</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
              L'intégrale de a à b de f(x) dx est :
            </p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-4 text-center">
              <LatexRenderer latex={'[F(x)]_a^b = F(b) - F(a)'} />
              <p className="font-mono-jb text-[12px] text-carnet-ink-mute mt-2">où F est une primitive de f</p>
            </div>

            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Elle représente l'<strong className="text-carnet-ink">aire signée</strong> sous la courbe de a à b.
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-4">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Théorème fondamental</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Si f continue sur [a, b], alors :</p>
              <div className="text-center"><LatexRenderer latex={'\\int_a^b f(x) \\, dx = F(b) - F(a)'} /></div>
            </div>

            <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Exemple</div>
              <div className="text-center">
                <LatexRenderer latex={'\\int_1^2 x \\, dx = \\left[ \\frac{x^2}{2} \\right]_1^2 = \\frac{4}{2} - \\frac{1}{2} = 1{,}5'} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Applications */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">05</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Applications</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-4">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Calcul d'aires</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Pour f ≥ 0, <span className="inline-block align-middle"><LatexRenderer latex={'\\int_a^b f(x) \\, dx'} /></span> = aire entre la courbe et l'axe.
              </p>
            </div>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Valeur moyenne</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Valeur moyenne de f sur [a, b] :</p>
              <div className="text-center"><LatexRenderer latex={'\\frac{1}{b-a} \\int_a^b f(x) \\, dx'} /></div>
            </div>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Vitesses et positions (physique)</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">Position = intégrale de la vitesse.</p>
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
                { num: '1', q: <>Primitive de <span className="inline-block align-middle"><LatexRenderer latex={'4x^3 - 1'} /></span></>, a: 'x⁴ - x + C' },
                { num: '2', q: <>Calculer <span className="inline-block align-middle"><LatexRenderer latex={'\\int_0^{\\pi/2} \\sin x \\, dx'} /></span></>, a: '[-cos x]₀^(π/2) = 1' },
                { num: '3', q: <>IPP : <span className="inline-block align-middle"><LatexRenderer latex={'\\int \\ln x \\, dx'} /></span></>, a: 'x ln x - x + C' },
                { num: '4', q: <>Substitution : <span className="inline-block align-middle"><LatexRenderer latex={'\\int \\frac{2x}{x^2 + 1} \\, dx'} /></span></>, a: 'ln |x² + 1| + C' },
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
                On intègre — pour de bon.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                IPP, substitution, intégrales définies — tout se joue à la régularité.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/integrale-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-[#9E342B] text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <AreaChart className="mr-2 h-4 w-4" />
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
            — fin du chapitre 05
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chapitre5IntegralesCoursPage;
