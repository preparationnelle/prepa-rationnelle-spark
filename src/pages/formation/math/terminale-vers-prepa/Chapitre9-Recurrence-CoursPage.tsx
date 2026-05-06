import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Repeat,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  Target,
} from 'lucide-react';

const Chapitre9RecurrenceCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/recurrence-cours"
        title="Chapitre 9 — Raisonnement par récurrence · Terminale → Prépa ECG"
        description="Cours complet sur le raisonnement par récurrence : principe, initialisation, hérédité, rédaction propre et exemples canoniques (égalités, inégalités, divisibilité)."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 9</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">09 · Chapitre · Récurrence</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Le raisonnement{' '}
            <em className="font-lora italic text-carnet-red">par récurrence</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            La technique reine pour démontrer une propriété qui dépend d'un entier{' '}
            <span className="inline-block align-middle"><LatexRenderer latex={'n'} /></span>. À <span className="carnet-hl font-lora italic">maîtriser parfaitement</span> avant la prépa : tu en feras au moins une par semaine en première année.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 200, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ initialisation{'\n'}+ hérédité{'\n'}= conclusion
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
              On veut démontrer qu'une propriété <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> est vraie pour tout entier <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq n_0'} /></span>. Tester un, deux, dix cas ne prouve <em>rien</em> — il y a une infinité de valeurs à couvrir.
            </p>
            <p>
              Le <strong className="text-carnet-ink">raisonnement par récurrence</strong> contourne ce problème en deux temps : on vérifie que la propriété est vraie au <em>premier rang</em> (initialisation), puis on montre que <em>si</em> elle est vraie au rang <span className="inline-block align-middle"><LatexRenderer latex={'n'} /></span>, alors elle l'est au rang <span className="inline-block align-middle"><LatexRenderer latex={'n+1'} /></span> (hérédité). C'est la chaîne de dominos : un domino tombe, et chacun fait tomber le suivant.
            </p>
          </div>
        </section>

        {/* Section 1 — Le principe */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Le principe</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="carnet-eyebrow mb-4">A · Énoncé du théorème</div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Soit <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> une propriété portant sur l'entier <span className="inline-block align-middle"><LatexRenderer latex={'n'} /></span>, et <span className="inline-block align-middle"><LatexRenderer latex={'n_0 \\in \\mathbb{N}'} /></span>. Si :
            </p>

            <div className="space-y-3 mb-8">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">
                  Initialisation
                </div>
                <div className="font-instrument text-[14px] text-carnet-ink">
                  <span className="inline-block align-middle"><LatexRenderer latex={'P(n_0)'} /></span> est vraie ;
                </div>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">
                  Hérédité
                </div>
                <div className="font-instrument text-[14px] text-carnet-ink">
                  pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq n_0'} /></span>, si <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> est vraie alors <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span> est vraie ;
                </div>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">
                  Conclusion
                </div>
                <div className="font-instrument text-[14px] text-carnet-ink">
                  alors <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> est vraie pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq n_0'} /></span>.
                </div>
              </div>
            </div>

            <div className="carnet-eyebrow mb-4">B · Visualisation</div>
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
              Imagine une ligne de dominos numérotés <span className="inline-block align-middle"><LatexRenderer latex={'n_0, n_0+1, n_0+2, \\dots'} /></span>. L'initialisation fait tomber le premier. L'hérédité garantit que la chute du domino <span className="inline-block align-middle"><LatexRenderer latex={'n'} /></span> entraîne celle du domino <span className="inline-block align-middle"><LatexRenderer latex={'n+1'} /></span>. <strong className="text-carnet-ink">Tous</strong> les dominos finissent par tomber.
            </p>
          </div>
        </section>

        {/* Section 2 — Rédaction type */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">La rédaction type</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              En prépa, la <strong className="text-carnet-ink">forme</strong> de la rédaction compte autant que le fond. Voici la structure attendue, à respecter mot pour mot :
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.25)] rounded-md p-6 font-instrument text-[14.5px] text-carnet-ink leading-[1.8] space-y-3">
              <p>
                <strong className="text-carnet-red">1.</strong> <em>« Posons, pour <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq n_0'} /></span>, la propriété <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> : … »</em> — on énonce explicitement la propriété.
              </p>
              <p>
                <strong className="text-carnet-red">2.</strong> <em>« Initialisation : pour <span className="inline-block align-middle"><LatexRenderer latex={'n = n_0'} /></span>, on a … donc <span className="inline-block align-middle"><LatexRenderer latex={'P(n_0)'} /></span> est vraie. »</em> — calcul direct.
              </p>
              <p>
                <strong className="text-carnet-red">3.</strong> <em>« Hérédité : soit <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq n_0'} /></span> ; supposons <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> vraie. Montrons <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span>. »</em>
              </p>
              <p>
                <strong className="text-carnet-red">4.</strong> Calcul/manipulation utilisant l'<em>hypothèse de récurrence</em> (notée <strong>HR</strong>) pour aboutir à <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span>.
              </p>
              <p>
                <strong className="text-carnet-red">5.</strong> <em>« Conclusion : par récurrence, pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq n_0'} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> est vraie. »</em>
              </p>
            </div>

            <p className="font-instrument text-[14px] text-carnet-ink-mute leading-[1.7] mt-5 italic">
              Trois mots-clés à toujours faire apparaître : <strong className="text-carnet-red not-italic">Initialisation</strong>, <strong className="text-carnet-red not-italic">Hérédité</strong>, <strong className="text-carnet-red not-italic">Conclusion</strong>. Sans eux, le correcteur enlève des points même si la démonstration est juste.
            </p>
          </div>
        </section>

        {/* Section 3 — Exemple canonique : égalité */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Exemple — somme des entiers</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Démontrons par récurrence que pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 1'} /></span> :
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-6 text-center">
              <LatexRenderer latex={'P(n) : \\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}'} />
            </div>

            <div className="space-y-5 font-instrument text-[15px] text-carnet-ink-soft leading-[1.75]">
              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Initialisation</div>
                <p>
                  Pour <span className="inline-block align-middle"><LatexRenderer latex={'n = 1'} /></span> : à gauche, <span className="inline-block align-middle"><LatexRenderer latex={'\\sum_{k=1}^{1} k = 1'} /></span> ; à droite, <span className="inline-block align-middle"><LatexRenderer latex={'\\frac{1 \\cdot 2}{2} = 1'} /></span>. Donc <span className="inline-block align-middle"><LatexRenderer latex={'P(1)'} /></span> est vraie.
                </p>
              </div>

              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Hérédité</div>
                <p className="mb-2">
                  Soit <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 1'} /></span> ; supposons <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> vraie, c'est-à-dire <span className="inline-block align-middle"><LatexRenderer latex={'\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}'} /></span> (HR). Montrons <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span>.
                </p>
                <div className="space-y-2 my-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-block align-middle"><LatexRenderer latex={'\\sum_{k=1}^{n+1} k = \\sum_{k=1}^{n} k + (n+1)'} /></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-carnet-ink-mute text-[13px]">par HR</span>
                    <span className="inline-block align-middle"><LatexRenderer latex={'= \\frac{n(n+1)}{2} + (n+1)'} /></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-block align-middle"><LatexRenderer latex={'= (n+1) \\left(\\frac{n}{2} + 1\\right) = \\frac{(n+1)(n+2)}{2}'} /></span>
                  </div>
                </div>
                <p>
                  qui est bien le membre de droite de <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span>. Donc <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span> est vraie.
                </p>
              </div>

              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Conclusion</div>
                <p>
                  Par récurrence, pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 1'} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={'\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}'} /></span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Exemple inégalité */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Exemple — inégalité</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Démontrons que pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 1'} /></span> :
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-6 text-center">
              <LatexRenderer latex={'P(n) : 2^n \\geq n + 1'} />
            </div>

            <div className="space-y-5 font-instrument text-[15px] text-carnet-ink-soft leading-[1.75]">
              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Initialisation</div>
                <p>
                  Pour <span className="inline-block align-middle"><LatexRenderer latex={'n = 1'} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={'2^1 = 2 \\geq 2 = 1 + 1'} /></span>. Donc <span className="inline-block align-middle"><LatexRenderer latex={'P(1)'} /></span> est vraie.
                </p>
              </div>

              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Hérédité</div>
                <p className="mb-2">
                  Soit <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 1'} /></span> ; supposons <span className="inline-block align-middle"><LatexRenderer latex={'2^n \\geq n+1'} /></span> (HR). Alors :
                </p>
                <div className="space-y-2 my-3 ml-4">
                  <div><span className="inline-block align-middle"><LatexRenderer latex={'2^{n+1} = 2 \\cdot 2^n \\geq 2(n+1)'} /></span> <span className="text-carnet-ink-mute text-[13px] ml-2">(par HR)</span></div>
                  <div><span className="inline-block align-middle"><LatexRenderer latex={'= 2n + 2 = (n+2) + n \\geq n + 2'} /></span> <span className="text-carnet-ink-mute text-[13px] ml-2">(car <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 0'} /></span>)</span></div>
                </div>
                <p>
                  Donc <span className="inline-block align-middle"><LatexRenderer latex={'2^{n+1} \\geq (n+1) + 1'} /></span>, c'est-à-dire <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span>.
                </p>
              </div>

              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Conclusion</div>
                <p>
                  Par récurrence, pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 1'} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={'2^n \\geq n + 1'} /></span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Exemple divisibilité */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">05</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Exemple — divisibilité</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Démontrons que pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 0'} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={'4^n - 1'} /></span> est divisible par <span className="inline-block align-middle"><LatexRenderer latex={'3'} /></span>.
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 mb-6 text-center">
              <LatexRenderer latex={"P(n) : \\exists\\, k_n \\in \\mathbb{Z},\\ 4^n - 1 = 3 k_n"} />
            </div>

            <div className="space-y-5 font-instrument text-[15px] text-carnet-ink-soft leading-[1.75]">
              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Initialisation</div>
                <p>
                  Pour <span className="inline-block align-middle"><LatexRenderer latex={'n = 0'} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={'4^0 - 1 = 0 = 3 \\times 0'} /></span>. Donc <span className="inline-block align-middle"><LatexRenderer latex={'P(0)'} /></span> est vraie (avec <span className="inline-block align-middle"><LatexRenderer latex={'k_0 = 0'} /></span>).
                </p>
              </div>

              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Hérédité</div>
                <p className="mb-2">
                  Soit <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 0'} /></span> ; supposons qu'il existe <span className="inline-block align-middle"><LatexRenderer latex={'k_n \\in \\mathbb{Z}'} /></span> tel que <span className="inline-block align-middle"><LatexRenderer latex={'4^n - 1 = 3 k_n'} /></span> (HR). Alors :
                </p>
                <div className="space-y-2 my-3 ml-4">
                  <div><span className="inline-block align-middle"><LatexRenderer latex={'4^{n+1} - 1 = 4 \\cdot 4^n - 1 = 4(3k_n + 1) - 1'} /></span> <span className="text-carnet-ink-mute text-[13px] ml-2">(par HR)</span></div>
                  <div><span className="inline-block align-middle"><LatexRenderer latex={'= 12 k_n + 4 - 1 = 12 k_n + 3 = 3(4 k_n + 1)'} /></span></div>
                </div>
                <p>
                  En posant <span className="inline-block align-middle"><LatexRenderer latex={'k_{n+1} = 4 k_n + 1 \\in \\mathbb{Z}'} /></span>, on a <span className="inline-block align-middle"><LatexRenderer latex={'4^{n+1} - 1 = 3 k_{n+1}'} /></span>. Donc <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span> est vraie.
                </p>
              </div>

              <div>
                <div className="font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Conclusion</div>
                <p>
                  Par récurrence, pour tout <span className="inline-block align-middle"><LatexRenderer latex={'n \\geq 0'} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={'3 \\mid 4^n - 1'} /></span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Pièges */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">06</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Les pièges classiques</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.10)] flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-5 w-5 text-carnet-red" />
              </div>
              <h3 className="font-lora text-[22px] text-carnet-ink leading-tight">Quatre erreurs qui te feront perdre des points</h3>
            </div>

            <div className="space-y-4 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
              <div className="bg-carnet-paper-2 border-l-2 border-l-carnet-red border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                <strong className="text-carnet-ink">1. Oublier l'initialisation.</strong> Sans premier domino, rien ne tombe. <em>Toujours</em> vérifier <span className="inline-block align-middle"><LatexRenderer latex={'P(n_0)'} /></span> — même si c'est trivial.
              </div>
              <div className="bg-carnet-paper-2 border-l-2 border-l-carnet-red border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                <strong className="text-carnet-ink">2. Confondre HR et conclusion.</strong> L'hypothèse de récurrence, c'est <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span>, pas <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span>. On suppose le rang <span className="inline-block align-middle"><LatexRenderer latex={'n'} /></span> et on <em>prouve</em> le rang <span className="inline-block align-middle"><LatexRenderer latex={'n+1'} /></span>.
              </div>
              <div className="bg-carnet-paper-2 border-l-2 border-l-carnet-red border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                <strong className="text-carnet-ink">3. Mauvais rang de départ.</strong> Si la propriété ne tient qu'à partir de <span className="inline-block align-middle"><LatexRenderer latex={'n_0 = 4'} /></span>, on initialise <em>à 4</em>, pas à 0 ni 1. Lis l'énoncé deux fois.
              </div>
              <div className="bg-carnet-paper-2 border-l-2 border-l-carnet-red border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                <strong className="text-carnet-ink">4. Ne pas utiliser la HR.</strong> Si ta démonstration de l'hérédité ne s'appuie jamais sur <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span>, c'est qu'elle est fausse — ou qu'une récurrence n'était pas nécessaire.
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Variantes */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">07</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Variantes utiles</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <div className="space-y-5 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
              <div>
                <div className="carnet-eyebrow mb-2">A · Récurrence forte</div>
                <p>
                  Au lieu de supposer <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span>, on suppose que <span className="inline-block align-middle"><LatexRenderer latex={'P(k)'} /></span> est vraie pour <em>tout</em> <span className="inline-block align-middle"><LatexRenderer latex={'k \\in \\{n_0, \\dots, n\\}'} /></span> et on en déduit <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span>. Utile quand la récurrence du rang <span className="inline-block align-middle"><LatexRenderer latex={'n+1'} /></span> nécessite plusieurs rangs antérieurs (suites définies par <span className="inline-block align-middle"><LatexRenderer latex={'u_{n+1} = f(u_n, u_{n-1})'} /></span>, par exemple).
                </p>
              </div>
              <div>
                <div className="carnet-eyebrow mb-2">B · Récurrence double</div>
                <p>
                  On vérifie <span className="inline-block align-middle"><LatexRenderer latex={'P(n_0)'} /></span> <em>et</em> <span className="inline-block align-middle"><LatexRenderer latex={'P(n_0 + 1)'} /></span>, puis on montre que <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span> impliquent <span className="inline-block align-middle"><LatexRenderer latex={'P(n+2)'} /></span>. Indispensable pour les suites de Fibonacci ou les relations à deux termes.
                </p>
              </div>
              <div>
                <div className="carnet-eyebrow mb-2">C · Récurrence descendante</div>
                <p>
                  Plus rare au lycée mais utile : on initialise au plus grand rang et on descend. Très exotique, mais ça existe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Méthode flash */}
        <section className="mb-12 relative">
          <div className="bg-carnet-ink rounded-lg p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(193,68,58,0.18)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <Lightbulb className="h-5 w-5 text-carnet-red" />
                <span className="carnet-eyebrow text-carnet-red">Méthode flash · Avant chaque récurrence</span>
              </div>
              <h3 className="font-lora text-[24px] sm:text-[28px] text-carnet-paper leading-[1.2] mb-5">
                Quatre questions à te poser
              </h3>
              <ul className="space-y-3 font-instrument text-[15px] text-[rgba(251,246,234,0.85)] leading-[1.7]">
                <li className="flex gap-3"><span className="text-carnet-red font-bold">→</span> Quelle est exactement la propriété <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> ? (recopie-la)</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">→</span> Quel est le rang de départ <span className="inline-block align-middle"><LatexRenderer latex={'n_0'} /></span> ?</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">→</span> Comment je passe de <span className="inline-block align-middle"><LatexRenderer latex={'P(n)'} /></span> à <span className="inline-block align-middle"><LatexRenderer latex={'P(n+1)'} /></span> algébriquement ?</li>
                <li className="flex gap-3"><span className="text-carnet-red font-bold">→</span> Récurrence simple, forte ou double ?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA exercices */}
        <section className="mb-12 relative">
          <div className="carnet-card p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4 text-carnet-red" />
                <span className="carnet-eyebrow">Étape suivante</span>
              </div>
              <h3 className="font-lora text-[24px] text-carnet-ink leading-tight mb-2">
                À toi de jouer.
              </h3>
              <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.6]">
                6 exercices progressifs pour t'entraîner aux trois types de récurrence : égalité, inégalité, divisibilité.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/recurrence-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                Voir les exercices
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          <Link
            to="/formation/math/terminale-vers-prepa/probabilites-cours"
            className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Chapitre 8 — Probabilités
          </Link>
          <Link
            to="/formation/math/terminale-vers-prepa/matrices-cours"
            className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
          >
            Chapitre 10 — Matrices
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapitre9RecurrenceCoursPage;
