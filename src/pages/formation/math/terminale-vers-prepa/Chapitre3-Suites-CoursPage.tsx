import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Check,
} from 'lucide-react';

const Chapitre3SuitesCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/suites-cours"
        title="Chapitre 3 — Suites numériques · Terminale → Prépa ECG"
        description="Cours complet sur les suites numériques : définitions, suites arithmétiques et géométriques, monotonie, convergence et suites récurrentes."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 3 · Suites</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">03 · Chapitre · Suites</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Suites <em className="font-lora italic text-carnet-red">numériques</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Définitions, propriétés, <span className="carnet-hl font-lora italic">convergence</span> et récurrence — l'objet mathématique central de toute la prépa ECG.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ tombe à{'\n'}tous les concours
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
              Les <strong className="text-carnet-ink">suites numériques</strong> constituent un objet mathématique fondamental qui permet de modéliser des phénomènes discrets. Une suite est une fonction définie sur{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{N}'} /></span> (ou une partie de{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{N}'} /></span>) à valeurs dans{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{R}'} /></span>.
            </p>
            <p>
              L'étude des suites est essentielle en prépa ECG car elle intervient dans de nombreux domaines : analyse, probabilités, optimisation et algorithmes.
            </p>
          </div>
        </section>

        {/* Section 1 — Définitions et notations */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Définitions et notations</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-8">
            <div>
              <div className="carnet-eyebrow mb-3">A · Définition d'une suite</div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-3">
                Une suite numérique est une application de{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{N}'} /></span> (ou d'une partie de{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{N}'} /></span>) dans{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'\\mathbb{R}'} /></span>. On note :
              </p>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-3 text-center">
                <LatexRenderer latex={'u : \\mathbb{N} \\to \\mathbb{R}, \\quad n \\mapsto u(n) = u_n'} block />
              </div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
                La suite est notée <span className="inline-block align-middle"><LatexRenderer latex={'(u_n)_{n \\in \\mathbb{N}}'} /></span> ou plus simplement{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'(u_n)'} /></span>.
              </p>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">B · Modes de définition</div>
              <div className="space-y-4">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">1 · Forme explicite</h5>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Le terme général est donné par une formule :</p>
                  <div className="text-center bg-carnet-paper rounded p-3 mb-3">
                    <LatexRenderer latex={'u_n = f(n) \\text{ où } f \\text{ est une fonction}'} block />
                  </div>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft">
                    <span className="font-semibold text-carnet-ink">Exemple :</span>{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'u_n = \\frac{1}{n+1}'} /></span>
                  </p>
                </div>

                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">2 · Définition par récurrence</h5>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">On donne le premier terme et une relation de récurrence :</p>
                  <div className="text-center bg-carnet-paper rounded p-3 mb-3">
                    <LatexRenderer latex={'\\begin{cases} u_0 \\text{ donné} \\\\ u_{n+1} = f(u_n) \\end{cases}'} block />
                  </div>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft">
                    <span className="font-semibold text-carnet-ink">Exemple :</span>{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'u_0 = 1'} /></span> et{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'u_{n+1} = 2u_n + 1'} /></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Suites particulières */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Suites <em className="font-lora italic text-carnet-red">particulières</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-8">
            {/* Arithmétiques */}
            <div>
              <div className="carnet-eyebrow mb-3">A · Suites arithmétiques</div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-3">
                Une suite <span className="inline-block align-middle"><LatexRenderer latex={'(u_n)'} /></span> est arithmétique s'il existe un réel{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'r'} /></span> tel que :
              </p>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-3 text-center">
                <LatexRenderer latex={'u_{n+1} = u_n + r \\quad \\forall n \\in \\mathbb{N}'} block />
              </div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
                <span className="inline-block align-middle"><LatexRenderer latex={'r'} /></span> est appelé la <strong className="text-carnet-ink">raison</strong> de la suite arithmétique.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                  <p className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Terme général</p>
                  <div className="text-center"><LatexRenderer latex={'u_n = u_0 + nr'} block /></div>
                </div>
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                  <p className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Somme des n premiers termes</p>
                  <div className="text-center"><LatexRenderer latex={'S_n = \\frac{n(2u_0 + (n-1)r)}{2}'} block /></div>
                </div>
              </div>
            </div>

            <hr className="carnet-divider" />

            {/* Géométriques */}
            <div>
              <div className="carnet-eyebrow mb-3">B · Suites géométriques</div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-3">
                Une suite <span className="inline-block align-middle"><LatexRenderer latex={'(u_n)'} /></span> est géométrique s'il existe un réel{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'q \\neq 0'} /></span> tel que :
              </p>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-3 text-center">
                <LatexRenderer latex={'u_{n+1} = q \\cdot u_n \\quad \\forall n \\in \\mathbb{N}'} block />
              </div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-4">
                <span className="inline-block align-middle"><LatexRenderer latex={'q'} /></span> est la <strong className="text-carnet-ink">raison</strong> de la suite géométrique.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                  <p className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Terme général</p>
                  <div className="text-center"><LatexRenderer latex={'u_n = u_0 \\cdot q^n'} block /></div>
                </div>
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                  <p className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Somme</p>
                  <div className="text-center"><LatexRenderer latex={'S_n = \\begin{cases} nu_0 & q = 1 \\\\ u_0 \\frac{1-q^n}{1-q} & q \\neq 1 \\end{cases}'} block /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Propriétés et comportement */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Monotonie & suites bornées</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-8">
            <div>
              <div className="carnet-eyebrow mb-3">A · Monotonie</div>
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Suite croissante</h5>
                  <div className="text-center"><LatexRenderer latex={'u_{n+1} \\geq u_n \\quad \\forall n'} /></div>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Suite décroissante</h5>
                  <div className="text-center"><LatexRenderer latex={'u_{n+1} \\leq u_n \\quad \\forall n'} /></div>
                </div>
              </div>

              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Méthodes pour étudier la monotonie</h5>
                <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-2 leading-[1.65]">
                  <li>• Étudier le signe de <span className="inline-block align-middle"><LatexRenderer latex={'u_{n+1} - u_n'} /></span></li>
                  <li>• Si <span className="inline-block align-middle"><LatexRenderer latex={'u_n > 0'} /></span>, étudier le signe de <span className="inline-block align-middle"><LatexRenderer latex={'\\frac{u_{n+1}}{u_n} - 1'} /></span></li>
                  <li>• Utiliser une fonction auxiliaire si <span className="inline-block align-middle"><LatexRenderer latex={'u_{n+1} = f(u_n)'} /></span></li>
                </ul>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">B · Suites bornées</div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-2">Une suite <span className="inline-block align-middle"><LatexRenderer latex={'(u_n)'} /></span> est :</p>
                <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 leading-[1.65]">
                  <li>• <strong className="text-carnet-ink">Majorée</strong> s'il existe <span className="inline-block align-middle"><LatexRenderer latex={'M \\in \\mathbb{R}'} /></span> tel que <span className="inline-block align-middle"><LatexRenderer latex={'u_n \\leq M'} /></span> pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n'} /></span></li>
                  <li>• <strong className="text-carnet-ink">Minorée</strong> s'il existe <span className="inline-block align-middle"><LatexRenderer latex={'m \\in \\mathbb{R}'} /></span> tel que <span className="inline-block align-middle"><LatexRenderer latex={'u_n \\geq m'} /></span> pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n'} /></span></li>
                  <li>• <strong className="text-carnet-ink">Bornée</strong> si elle est à la fois majorée et minorée</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Convergence */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Convergence des suites
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-8">
            <div>
              <div className="carnet-eyebrow mb-3">A · Définition</div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-3">
                Une suite <span className="inline-block align-middle"><LatexRenderer latex={'(u_n)'} /></span> converge vers un réel <span className="inline-block align-middle"><LatexRenderer latex={'l'} /></span> si :
              </p>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-3 text-center">
                <LatexRenderer latex={'\\forall \\varepsilon > 0, \\exists N \\in \\mathbb{N}, \\forall n \\geq N : |u_n - l| < \\varepsilon'} block />
              </div>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
                On note alors : <span className="inline-block align-middle"><LatexRenderer latex={'\\lim_{n \\to +\\infty} u_n = l'} /></span> ou{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'u_n \\to l'} /></span>.
              </p>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-3">B · Théorèmes fondamentaux</div>
              <div className="space-y-4">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Convergence monotone</h5>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    Toute suite croissante et majorée converge vers sa borne supérieure. Toute suite décroissante et minorée converge vers sa borne inférieure.
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Théorème des gendarmes</h5>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                    Si <span className="inline-block align-middle"><LatexRenderer latex={'a_n \\leq u_n \\leq b_n'} /></span> pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n'} /></span> assez grand et si{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'\\lim a_n = \\lim b_n = l'} /></span>, alors{' '}
                    <span className="inline-block align-middle"><LatexRenderer latex={'\\lim u_n = l'} /></span>.
                  </p>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                  <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Opérations sur les limites</h5>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-2">
                    Si <span className="inline-block align-middle"><LatexRenderer latex={'\\lim u_n = l'} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\lim v_n = l'"} /></span>, alors :
                  </p>
                  <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 leading-[1.65]">
                    <li>• <span className="inline-block align-middle"><LatexRenderer latex={"\\lim (u_n + v_n) = l + l'"} /></span></li>
                    <li>• <span className="inline-block align-middle"><LatexRenderer latex={"\\lim (u_n \\times v_n) = l \\times l'"} /></span></li>
                    <li>• <span className="inline-block align-middle"><LatexRenderer latex={"\\lim \\frac{u_n}{v_n} = \\frac{l}{l'}"} /></span> si <span className="inline-block align-middle"><LatexRenderer latex={"l' \\neq 0"} /></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Suites récurrentes */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">05</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Suites <em className="font-lora italic text-carnet-red">récurrentes</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
              Soit <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> une fonction et la suite définie par :
            </p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 text-center">
              <LatexRenderer latex={'\\begin{cases} u_0 \\text{ donné} \\\\ u_{n+1} = f(u_n) \\end{cases}'} block />
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Méthode d'étude</h5>
              <ol className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 leading-[1.65] list-decimal list-inside">
                <li>Déterminer le domaine de définition</li>
                <li>Étudier la fonction <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> (continuité, monotonie)</li>
                <li>Rechercher les points fixes : <span className="inline-block align-middle"><LatexRenderer latex={'f(x) = x'} /></span></li>
                <li>Étudier la monotonie de <span className="inline-block align-middle"><LatexRenderer latex={'(u_n)'} /></span></li>
                <li>Déterminer les bornes éventuelles</li>
                <li>Conclure sur la convergence</li>
              </ol>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <h5 className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Points fixes et convergence</h5>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Si la suite <span className="inline-block align-middle"><LatexRenderer latex={'(u_n)'} /></span> converge vers <span className="inline-block align-middle"><LatexRenderer latex={'l'} /></span> et si{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> est continue en <span className="inline-block align-middle"><LatexRenderer latex={'l'} /></span>, alors{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'l'} /></span> est un point fixe de <span className="inline-block align-middle"><LatexRenderer latex={'f'} /></span> :{' '}
                <span className="inline-block align-middle"><LatexRenderer latex={'f(l) = l'} /></span>.
              </p>
            </div>
          </div>
        </section>

        {/* Résumé */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">06</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">À retenir</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="carnet-eyebrow mb-4">Définitions essentielles</div>
                <ul className="space-y-2 font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  {['Suites arithmétiques et géométriques', 'Monotonie et suites bornées', 'Convergence et divergence', 'Suites récurrentes'].map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-carnet-red mt-1 flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="carnet-eyebrow mb-4">Théorèmes clés</div>
                <ul className="space-y-2 font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                  {['Convergence monotone', 'Théorème des gendarmes', 'Opérations sur les limites', 'Points fixes et récurrence'].map((it) => (
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
                Tu connais la théorie ? Vérifie-le.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Les suites se travaillent à la chaîne — la rapidité d'exécution se gagne maintenant.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/suites-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <TrendingUp className="mr-2 h-4 w-4" />
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

export default Chapitre3SuitesCoursPage;
