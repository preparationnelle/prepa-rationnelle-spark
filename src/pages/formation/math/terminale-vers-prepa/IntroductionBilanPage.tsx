import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  BookOpen,
  Target,
  TrendingUp,
  AlertCircle,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

const IntroductionBilanPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/introduction-bilan"
        title="Introduction & Bilan — Révisions maths Terminale → Prépa ECG"
        description="Guide complet de révisions mathématiques pour une entrée sereine en prépa ECG : analyse, probabilités, raisonnements et plan de travail été/rentrée."
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
            <span className="carnet-eyebrow text-[11px]">Introduction & Bilan</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">Guide complet · Été → Rentrée</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Révisions <em className="font-lora italic text-carnet-red">maths</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Pour une entrée <span className="carnet-hl font-lora italic">sereine en prépa ECG</span>. Tout le programme pour transformer la transition lycée → prépa en avance.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ commence{'\n'}par la base
          </div>
        </header>

        {/* L'essentiel */}
        <section className="mb-14">
          <div className="bg-carnet-ink rounded-lg p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-3 left-8 bg-carnet-red text-carnet-paper-2 px-3.5 py-1 carnet-hand text-[20px] font-semibold" style={{ transform: 'rotate(-3deg)' }}>
              à retenir
            </div>
            <div className="flex items-start gap-4 mt-2">
              <Target className="h-6 w-6 text-carnet-red mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-lora text-[26px] text-carnet-paper leading-tight mb-3">L'essentiel</h2>
                <p className="font-instrument text-[16px] text-[rgba(251,246,234,0.85)] leading-[1.65]">
                  <strong className="text-carnet-paper">Maîtriser parfaitement les suites, les fonctions usuelles (ln, exp), les probabilités de base et le calcul algébrique est crucial.</strong> La rigueur de rédaction doit être automatique. Pas besoin de connaître tout le programme de prépa à l'avance — des bases solides suffisent pour démarrer sereinement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partie 1 : Analyse */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Analyse <em className="font-lora italic text-carnet-red">— du lycée à la prépa</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-8">
            <div>
              <div className="carnet-eyebrow mb-4 flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5" />
                A · Suites numériques
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-3">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Arithmétiques & géométriques</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Base des raisonnements.</p>
                <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 list-disc list-inside leading-[1.65]">
                  <li>Formules : <span className="inline-block align-middle"><LatexRenderer latex={'u_n = u_0 + n \\cdot r'} /></span> (arithmétique), <span className="inline-block align-middle"><LatexRenderer latex={'u_n = u_0 \\cdot q^n'} /></span> (géométrique)</li>
                  <li>Sommes : <span className="inline-block align-middle"><LatexRenderer latex={'\\sum_{k=0}^n u_0 q^k = u_0 \\frac{1-q^{n+1}}{1-q}'} /></span> (q ≠ 1)</li>
                </ul>
                <p className="font-instrument text-[13px] text-carnet-ink-mute italic mt-3">
                  Exemple : <span className="inline-block align-middle"><LatexRenderer latex={'u_n = 2^n'} /></span>,{' '}
                  <span className="inline-block align-middle"><LatexRenderer latex={'\\sum_{k=0}^3 2^k = 15'} /></span>
                </p>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Propriétés importantes</div>
                <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 list-disc list-inside leading-[1.65]">
                  <li><strong className="text-carnet-ink">Monotonie :</strong> signe de <span className="inline-block align-middle"><LatexRenderer latex={'u_{n+1} - u_n'} /></span></li>
                  <li><strong className="text-carnet-ink">Majorée/minorée :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'u_n \\leq M'} /></span> / <span className="inline-block align-middle"><LatexRenderer latex={'u_n \\geq m'} /></span></li>
                  <li><strong className="text-carnet-ink">Gendarmes :</strong> si <span className="inline-block align-middle"><LatexRenderer latex={'a_n \\leq u_n \\leq b_n'} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={'a_n, b_n \\to L'} /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex={'u_n \\to L'} /></span></li>
                  <li><strong className="text-carnet-ink">Récurrentes :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'u_{n+1} = f(u_n)'} /></span> — étudier points fixes et convergence</li>
                </ul>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-4">B · Fonctions essentielles</div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-3">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Logarithme & exponentielle</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-4">Omniprésentes en prépa ECG. Maîtriser :</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-ink-mute font-semibold mb-2">Algébriques</p>
                    <ul className="font-mono-jb text-[12px] text-carnet-ink-soft space-y-1.5">
                      <li><span className="inline-block align-middle"><LatexRenderer latex={'\\ln(ab) = \\ln(a) + \\ln(b)'} /></span></li>
                      <li><span className="inline-block align-middle"><LatexRenderer latex={'\\ln(a/b) = \\ln(a) - \\ln(b)'} /></span></li>
                      <li><span className="inline-block align-middle"><LatexRenderer latex={'\\ln(a^c) = c \\ln(a)'} /></span></li>
                      <li><span className="inline-block align-middle"><LatexRenderer latex={'e^x = a \\iff x = \\ln(a)'} /></span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-ink-mute font-semibold mb-2">Dérivées & limites</p>
                    <ul className="font-mono-jb text-[12px] text-carnet-ink-soft space-y-1.5">
                      <li><span className="inline-block align-middle"><LatexRenderer latex={"(\\ln(x))' = 1/x"} /></span></li>
                      <li><span className="inline-block align-middle"><LatexRenderer latex={"(e^x)' = e^x"} /></span></li>
                      <li><span className="inline-block align-middle"><LatexRenderer latex={'\\lim_{x \\to +\\infty} e^x = +\\infty'} /></span></li>
                      <li><span className="inline-block align-middle"><LatexRenderer latex={'\\lim_{x \\to 0^+} \\ln(x) = -\\infty'} /></span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Autres fonctions usuelles</div>
                <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 list-disc list-inside leading-[1.65]">
                  <li><strong className="text-carnet-ink">Valeur absolue :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'|x| = x'} /></span> si x ≥ 0, -x sinon. Non dérivable en 0.</li>
                  <li><strong className="text-carnet-ink">Partie entière :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'\\lfloor x \\rfloor'} /></span> = max{'{n ∈ ℤ | n ≤ x}'}</li>
                  <li><strong className="text-carnet-ink">Puissances :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(x^\\alpha)' = \\alpha x^{\\alpha-1}"} /></span></li>
                </ul>
              </div>
            </div>

            <hr className="carnet-divider" />

            <div>
              <div className="carnet-eyebrow mb-4">C · Trio dérivées · primitives · limites</div>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Dérivées</div>
                  <ul className="font-mono-jb text-[11px] text-carnet-ink-soft space-y-1.5">
                    <li><span className="inline-block align-middle"><LatexRenderer latex={"(u+v)' = u' + v'"} /></span></li>
                    <li><span className="inline-block align-middle"><LatexRenderer latex={"(uv)' = u'v + uv'"} /></span></li>
                    <li><span className="inline-block align-middle"><LatexRenderer latex={"(f(g))' = f'(g)g'"} /></span></li>
                  </ul>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Primitives</div>
                  <ul className="font-mono-jb text-[11px] text-carnet-ink-soft space-y-1.5">
                    <li><span className="inline-block align-middle"><LatexRenderer latex={'\\int x^n = \\frac{x^{n+1}}{n+1}'} /></span></li>
                    <li><span className="inline-block align-middle"><LatexRenderer latex={'\\int e^x = e^x'} /></span></li>
                    <li><span className="inline-block align-middle"><LatexRenderer latex={'\\int 1/x = \\ln|x|'} /></span></li>
                  </ul>
                </div>
                <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Limites</div>
                  <ul className="font-mono-jb text-[11px] text-carnet-ink-soft space-y-1.5">
                    <li>FI : 0/0, ∞/∞, ∞-∞</li>
                    <li><span className="inline-block align-middle"><LatexRenderer latex={'\\lim_{x \\to 0} \\sin(x)/x = 1'} /></span></li>
                    <li><span className="inline-block align-middle"><LatexRenderer latex={'\\lim_{x \\to +\\infty} \\ln(x) = +\\infty'} /></span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partie 2 : Probabilités */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Probabilités <em className="font-lora italic text-carnet-red">— fondations</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-6">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Loi binomiale B(n, p)</div>
                <ul className="font-instrument text-[13px] text-carnet-ink-soft space-y-1.5 leading-[1.65]">
                  <li><strong className="text-carnet-ink">Définition :</strong> X = nb de succès en n épreuves indépendantes</li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}'} /></span></li>
                  <li><strong className="text-carnet-ink">Espérance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'E(X) = np'} /></span></li>
                  <li><strong className="text-carnet-ink">Variance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'V(X) = np(1-p)'} /></span></li>
                </ul>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Conditionnelles</div>
                <ul className="font-instrument text-[13px] text-carnet-ink-soft space-y-1.5 leading-[1.65]">
                  <li><strong className="text-carnet-ink">Bayes :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'P(A|B) = \\frac{P(B|A) P(A)}{P(B)}'} /></span></li>
                  <li><strong className="text-carnet-ink">Probas totales :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'P(B) = \\sum_i P(B|A_i) P(A_i)'} /></span></li>
                  <li><strong className="text-carnet-ink">Indépendance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'P(A \\cap B) = P(A) P(B)'} /></span></li>
                </ul>
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Variables aléatoires discrètes</div>
              <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 leading-[1.65] list-disc list-inside">
                <li><strong className="text-carnet-ink">Loi :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'\\sum P(X = x_i) = 1'} /></span></li>
                <li><strong className="text-carnet-ink">Fonction de répartition :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'F(x) = P(X \\leq x)'} /></span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partie 3 : Raisonnements */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Raisonnements & calculs</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Modes de raisonnement</div>
                <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 list-disc list-inside leading-[1.65]">
                  <li><strong className="text-carnet-ink">Récurrence :</strong> initialisation, hérédité, conclusion</li>
                  <li><strong className="text-carnet-ink">Par l'absurde :</strong> supposer ¬P, contradiction</li>
                  <li><strong className="text-carnet-ink">Contraposée :</strong> <span className="inline-block align-middle"><LatexRenderer latex={'(P \\Rightarrow Q) \\equiv (\\neg Q \\Rightarrow \\neg P)'} /></span></li>
                  <li><strong className="text-carnet-ink">Analyse-synthèse :</strong> nécessaire puis suffisante</li>
                </ul>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Calcul algébrique</div>
                <ul className="font-instrument text-[13px] text-carnet-ink-soft space-y-1.5 list-disc list-inside leading-[1.65]">
                  <li><span className="inline-block align-middle"><LatexRenderer latex={'(a+b)^2 = a^2 + 2ab + b^2'} /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={'a^2 - b^2 = (a+b)(a-b)'} /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={'\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}'} /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={'a^m \\cdot a^n = a^{m+n}'} /></span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plan de révisions */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight flex items-center gap-3">
              <Calendar className="h-7 w-7 text-carnet-red" />
              Plan de révisions
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Juillet-Août — Consolidation
                </div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                  <strong className="text-carnet-ink">Rythme :</strong> 1h30 à 2h/jour
                </p>
                <ul className="font-instrument text-[13px] text-carnet-ink-soft space-y-1.5 leading-[1.65]">
                  <li><strong className="text-carnet-ink">Sem. 1-2 :</strong> Calcul algébrique, suites</li>
                  <li><strong className="text-carnet-ink">Sem. 3-4 :</strong> Fonctions ln, exp, équations</li>
                  <li><strong className="text-carnet-ink">Sem. 5-6 :</strong> Probabilités, loi binomiale</li>
                  <li><strong className="text-carnet-ink">Sem. 7-8 :</strong> Récurrence, limites</li>
                </ul>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Septembre — Mise à niveau
                </div>
                <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-2 leading-[1.65] list-disc list-inside">
                  <li><strong className="text-carnet-ink">2h/jour</strong> pour suivre le rythme</li>
                  <li><strong className="text-carnet-ink">Priorité</strong> aux TD des professeurs</li>
                  <li><strong className="text-carnet-ink">Révision continue</strong> des automatismes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Erreurs à éviter */}
        <section className="mb-16">
          <div className="bg-carnet-ink rounded-lg p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-3 left-8 bg-carnet-red text-carnet-paper-2 px-3.5 py-1 carnet-hand text-[20px] font-semibold" style={{ transform: 'rotate(-3deg)' }}>
              à éviter
            </div>
            <div className="flex items-start gap-4 mt-2">
              <AlertCircle className="h-6 w-6 text-carnet-red mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-lora text-[24px] text-carnet-paper leading-tight mb-4">Les pièges classiques</h3>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 font-instrument text-[14px] text-[rgba(251,246,234,0.85)] leading-[1.65] list-disc list-inside">
                  <li>Confondre condition nécessaire et suffisante</li>
                  <li>Oublier les domaines de définition</li>
                  <li>Rédaction imprécise ou calculs bâclés</li>
                  <li>Apprendre par cœur les notions avancées avant la rentrée (fausse bonne idée)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA chapitres */}
        <div className="relative bg-carnet-ink rounded-lg p-8 sm:p-10 mt-4 mb-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="carnet-eyebrow text-carnet-red mb-3">Tous les chapitres</div>
              <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-paper leading-[1.2] mb-2">
                Les 7 chapitres détaillés.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Cours, exercices, quiz et flashcards — tout est prêt pour démarrer la prépa avec une longueur d'avance.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-[#9E342B] text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <BookOpen className="mr-2 h-4 w-4" />
                Accéder aux chapitres
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
            — bonne révision !
          </div>
        </div>

      </div>
    </div>
  );
};

export default IntroductionBilanPage;
