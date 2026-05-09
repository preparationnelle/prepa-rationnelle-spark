import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Sigma,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';

const Chapitre2SommesSuitesCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/sommes-suites-cours"
        title="Chapitre 2 — Sommes, suites et produits · Terminale → Prépa ECG"
        description="Cours complet sur la notation Σ et Π, les propriétés des sommes et produits, les sommes classiques (arithmétiques, géométriques, carrés, cubes)."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 2</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">02 · Chapitre · Sommes & produits</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Sommes, suites{' '}
            <em className="font-lora italic text-carnet-red">& produits</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Manipuler <span className="carnet-hl font-lora italic">Σ et Π</span> avec aisance — le langage de toute la prépa : intégrales, séries, calculs matriciels.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ retiens les{'\n'}sommes classiques
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
            Cette fiche couvre les bases des <strong className="text-carnet-ink">sommes</strong> et <strong className="text-carnet-ink">produits</strong> en Terminale. On se concentre sur les <strong className="text-carnet-ink">notations</strong>, les <strong className="text-carnet-ink">propriétés simples</strong> et les <strong className="text-carnet-ink">formules classiques</strong> pour les suites arithmétiques et géométriques.
          </p>
        </section>

        {/* Section 1 — Notation */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Notation des sommes et produits</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="carnet-eyebrow mb-4">A · Sommes</div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
              Une somme s'écrit avec le symbole sigma :
            </p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-6 mb-4 text-center">
              <LatexRenderer latex={'S = \\sum\\limits_{k=1}^n a_k = a_1 + a_2 + \\cdots + a_n'} />
            </div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-8">
              <strong className="text-carnet-ink">Exemple :</strong>{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'\\sum_{k=1}^4 k = 1 + 2 + 3 + 4 = 10'} /></span>
            </p>

            <hr className="carnet-divider mb-8" />

            <div className="carnet-eyebrow mb-4">B · Produits</div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
              Un produit s'écrit avec le symbole pi :
            </p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-6 mb-4 text-center">
              <LatexRenderer latex={'P = \\prod\\limits_{k=1}^n a_k = a_1 \\cdot a_2 \\cdots a_n'} />
            </div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
              <strong className="text-carnet-ink">Exemple :</strong>{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'\\prod_{k=1}^3 k = 1 \\cdot 2 \\cdot 3 = 6'} /></span>
            </p>
          </div>
        </section>

        {/* Section 2 — Propriétés sommes */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Propriétés des <em className="font-lora italic text-carnet-red">sommes</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-5">
            {[
              { label: 'Linéarité', latex: '\\sum\\limits_{k=1}^n (c a_k + d b_k) = c \\sum\\limits_{k=1}^n a_k + d \\sum\\limits_{k=1}^n b_k' },
              { label: 'Somme d\'une constante', latex: '\\sum_{k=1}^n c = nc' },
              { label: 'Exemple', latex: '\\sum_{k=1}^3 (2k + 1) = 2 \\sum_{k=1}^3 k + \\sum_{k=1}^3 1 = 2(6) + 3 = 15' },
            ].map((item, i) => (
              <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">
                  {item.label}
                </div>
                <div className="text-center">
                  <LatexRenderer latex={item.latex} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — Propriétés produits */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Propriétés des <em className="font-lora italic text-carnet-red">produits</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-5">
            {[
              { label: 'Produit d\'une constante', latex: '\\prod\\limits_{k=1}^n (c a_k) = c^n \\prod\\limits_{k=1}^n a_k' },
              { label: 'Factorielle', latex: 'n! = \\prod_{k=1}^n k' },
              { label: 'Exemple', latex: '4! = 24' },
            ].map((item, i) => (
              <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">
                  {item.label}
                </div>
                <div className="text-center">
                  <LatexRenderer latex={item.latex} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Sommes classiques */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Sommes classiques</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <div className="carnet-eyebrow mb-4">A · Somme arithmétique</div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">Pour les entiers de 1 à n :</p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-4 text-center">
              <LatexRenderer latex={'\\sum\\limits_{k=1}^n k = \\frac{n(n+1)}{2}'} />
            </div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
              Général pour suite arithmétique (premier terme <em className="text-carnet-ink-soft">a</em>, raison <em className="text-carnet-ink-soft">d</em>) :
            </p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-4 text-center">
              <LatexRenderer latex={'S_n = \\frac{n}{2} [2a + (n-1)d]'} />
            </div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-8">
              <strong className="text-carnet-ink">Exemple :</strong> Somme de 1 à 5 = 15.
            </p>

            <hr className="carnet-divider mb-8" />

            <div className="carnet-eyebrow mb-4">B · Somme géométrique</div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
              Pour suite géométrique (premier terme <em>a</em>, raison <em>r</em> ≠ 1) :
            </p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-4 text-center">
              <LatexRenderer latex={'S_n = a \\frac{1 - r^n}{1 - r}'} />
            </div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
              Si <em>r</em> = 1, <span className="inline-block align-middle"><LatexRenderer latex={'S_n = na'} /></span>.
            </p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-8">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">
                Exemple
              </div>
              <div className="text-center">
                <LatexRenderer latex={'\\sum\\limits_{k=0}^3 2^k = 1 + 2 + 4 + 8 = 15 = \\frac{2^4 - 1}{2-1}'} />
              </div>
            </div>

            <hr className="carnet-divider mb-8" />

            <div className="carnet-eyebrow mb-4">C · Sommes de carrés et cubes</div>
            <div className="space-y-4">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">
                  Carrés
                </div>
                <div className="text-center">
                  <LatexRenderer latex={'\\sum\\limits_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}'} />
                </div>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">
                  Cubes
                </div>
                <div className="text-center">
                  <LatexRenderer latex={'\\sum\\limits_{k=1}^n k^3 = \\left( \\frac{n(n+1)}{2} \\right)^2'} />
                </div>
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
                { num: '1', q: <>Calculer <span className="inline-block align-middle"><LatexRenderer latex={'\\sum\\limits_{k=1}^5 k^2'} /></span></>, a: '55' },
                { num: '2', q: <>Calculer <span className="inline-block align-middle"><LatexRenderer latex={'\\prod\\limits_{k=1}^4 (k+1)'} /></span></>, a: '120' },
                { num: '3', q: <>Somme arithmétique : 3 + 6 + 9 + 12</>, a: '30' },
                { num: '4', q: <>Somme géométrique : 2 + 4 + 8 + 16</>, a: '30' },
              ].map((ex, i) => (
                <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5 relative">
                  <div className="carnet-hand text-[24px] text-carnet-red absolute -top-3 left-3 bg-carnet-paper-2 px-2" style={{ transform: 'rotate(-4deg)' }}>
                    n°{ex.num}
                  </div>
                  <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.65] mt-2 mb-2">{ex.q}</p>
                  <p className="font-mono-jb text-[12px] text-carnet-ink-mute">→ Réponse : {ex.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA exercices */}
        <div className="relative bg-carnet-ink rounded-lg p-8 sm:p-10 mt-4 mb-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="carnet-eyebrow text-carnet-red mb-3">Étape suivante</div>
              <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-paper leading-[1.2] mb-2">
                Place aux exercices.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Les sommes et produits doivent devenir un réflexe — entraîne-toi maintenant.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/sommes-suites-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <Sigma className="mr-2 h-4 w-4" />
                Faire les exercices
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Pied de page navigation */}
        <div className="mt-10 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/formation/math/terminale-vers-prepa"
            className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Retour au sommaire
          </Link>
          <div className="carnet-hand text-[22px] text-carnet-red" style={{ transform: 'rotate(-2deg)' }}>
            — fin du chapitre 02
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chapitre2SommesSuitesCoursPage;
