import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Infinity as InfinityIcon,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Check,
} from 'lucide-react';

const Chapitre6LimitesCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/limites-cours"
        title="Chapitre 6 — Limites · Terminale → Prépa ECG"
        description="Cours complet sur les limites : définitions, opérations, formes indéterminées, techniques de levée, limites usuelles et croissances comparées."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 6 · Limites</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">06 · Chapitre · Limites</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Les <em className="font-lora italic text-carnet-red">limites</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Le concept fondateur de l'analyse. Continuité, dérivabilité, asymptotes — tout repose sur les <span className="carnet-hl font-lora italic">limites</span>.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ croissances{'\n'}comparées !
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
              Les <strong className="text-carnet-ink">limites</strong> constituent un concept fondamental de l'analyse mathématique.
            </p>
            <p>
              Cette notion est essentielle pour comprendre la continuité, la dérivabilité et l'intégration des fonctions.
            </p>
          </div>
        </section>

        {/* Section 1 — Définitions */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Définitions des limites</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">A · Limite finie en un point</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Soit f une fonction définie au voisinage de a (sauf éventuellement en a). On dit que f admet pour limite L en a si :
              </p>
              <div className="text-center"><LatexRenderer latex={'\\lim_{x \\to a} f(x) = L'} block /></div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">B · Limite infinie en un point</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">On dit que f tend vers l'infini en a si :</p>
              <div className="text-center"><LatexRenderer latex={'\\lim_{x \\to a} f(x) = +\\infty'} block /></div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">C · Limite à l'infini</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                On dit que f admet pour limite L en{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'+\\infty'} /></span> si :
              </p>
              <div className="text-center"><LatexRenderer latex={'\\lim_{x \\to +\\infty} f(x) = L'} block /></div>
            </div>
          </div>
        </section>

        {/* Section 2 — Propriétés */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Propriétés et <em className="font-lora italic text-carnet-red">opérations</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-8">
            <div>
              <div className="carnet-eyebrow mb-3">A · Opérations sur les limites</div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
                Si <span className="inline-block align-middle"><LatexRenderer latex={'\\lim_{x \\to a} f(x) = L'} /></span> et{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'\\lim_{x \\to a} g(x) = M'} /></span>, alors :
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Somme', latex: '\\lim_{x \\to a} [f(x) + g(x)] = L + M' },
                  { label: 'Produit', latex: '\\lim_{x \\to a} [f(x) \\times g(x)] = L \\times M' },
                  { label: 'Quotient (M ≠ 0)', latex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\frac{L}{M}' },
                ].map((op, i) => (
                  <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                    <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">{op.label}</div>
                    <div className="text-center"><LatexRenderer latex={op.latex} /></div>
                  </div>
                ))}
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">B · Théorème d'encadrement (gendarmes)</div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                  Si <span className="inline-block align-middle"><LatexRenderer latex={'g(x) \\leq f(x) \\leq h(x)'} /></span> au voisinage de a et{' '}
                  <span className="inline-block align-middle"><LatexRenderer latex={'\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L'} /></span>, alors :
                </p>
                <div className="text-center"><LatexRenderer latex={'\\lim_{x \\to a} f(x) = L'} block /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Formes indéterminées */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Formes <em className="font-lora italic text-carnet-red">indéterminées</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="carnet-eyebrow mb-4">A · Les six formes à reconnaître</div>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {['\\frac{0}{0}', '\\frac{\\infty}{\\infty}', '\\infty - \\infty', '0 \\times \\infty', '1^\\infty', '0^0'].map((latex) => (
                <div key={latex} className="bg-carnet-paper border border-dashed border-carnet-red rounded-md p-4 text-center">
                  <LatexRenderer latex={latex} />
                </div>
              ))}
            </div>

            <div className="carnet-eyebrow mb-4">B · Techniques de levée</div>
            <div className="space-y-4">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">1 · Factorisation</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Exemple :</p>
                <div className="text-center">
                  <LatexRenderer latex={'\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\lim_{x \\to 1} \\frac{(x-1)(x+1)}{x - 1} = \\lim_{x \\to 1} (x+1) = 2'} />
                </div>
              </div>

              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">2 · Expression conjuguée</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Exemple :</p>
                <div className="text-center">
                  <LatexRenderer latex={'\\lim_{x \\to +\\infty} (\\sqrt{x+1} - \\sqrt{x}) = \\lim_{x \\to +\\infty} \\frac{1}{\\sqrt{x+1} + \\sqrt{x}} = 0'} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Limites usuelles */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Limites usuelles</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <div className="carnet-eyebrow mb-4">A · Limites de référence</div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1',
                '\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1',
                '\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1',
                '\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}',
              ].map((latex) => (
                <div key={latex} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4 text-center">
                  <LatexRenderer latex={latex} />
                </div>
              ))}
            </div>

            <div className="carnet-eyebrow mb-4">B · Croissances comparées</div>
            <div className="bg-carnet-ink rounded-md p-6 relative">
              <div className="absolute -top-3 left-6 bg-carnet-red text-carnet-paper-2 px-3 py-0.5 carnet-hand text-[16px] font-semibold" style={{ transform: 'rotate(-3deg)' }}>
                à connaître par cœur
              </div>
              <p className="font-instrument text-[14px] text-carnet-paper leading-[1.65] mb-3 mt-2">À l'infini :</p>
              <div className="text-center text-carnet-paper">
                <LatexRenderer latex={'\\ln x \\ll x^\\alpha \\ll e^x \\text{ pour } \\alpha > 0'} />
              </div>
              <p className="font-instrument text-[13px] text-[rgba(251,246,234,0.75)] leading-[1.6] mt-3 italic">
                Le logarithme croît moins vite que toute puissance, qui croît moins vite que l'exponentielle.
              </p>
            </div>
          </div>
        </section>

        {/* Résumé */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">05</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">À retenir</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="carnet-eyebrow mb-4">Méthodes essentielles</div>
                <ul className="space-y-2 font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  {['Maîtriser les définitions', 'Identifier les formes indéterminées', 'Appliquer les techniques de levée', 'Utiliser les limites de référence'].map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-carnet-red mt-1 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="carnet-eyebrow mb-4">Applications</div>
                <ul className="space-y-2 font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  {['Étudier la continuité', 'Déterminer les asymptotes', 'Analyser le comportement', 'Résoudre des équations'].map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-carnet-red mt-1 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
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
                Lever les indéterminations.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Factorisation, conjugué, croissances comparées — entraîne-toi à dégainer la bonne méthode.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/limites-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <InfinityIcon className="mr-2 h-4 w-4" />
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

export default Chapitre6LimitesCoursPage;
