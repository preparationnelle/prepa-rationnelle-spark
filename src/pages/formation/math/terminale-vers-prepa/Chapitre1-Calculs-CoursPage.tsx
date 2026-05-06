import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Calculator,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  AlertTriangle,
} from 'lucide-react';

const Chapitre1CalculsCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/calculs-cours"
        title="Chapitre 1 — Calculs (puissances, exponentielles, logarithmes) · Terminale → Prépa ECG"
        description="Cours complet sur les règles de calcul : puissances, fonction exponentielle, logarithme naturel et leurs relations. Préparer la transition Terminale → prépa ECG."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 1</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">01 · Chapitre · Calculs</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Puissances, exponentielles{' '}
            <em className="font-lora italic text-carnet-red">& logarithmes</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Les règles de manipulation à <span className="carnet-hl font-lora italic">automatiser</span> avant la rentrée. Sans elles, impossible de dériver, intégrer ou simplifier en prépa.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ à savoir{'\n'}les yeux fermés
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
              Cette fiche résume les règles essentielles de calcul sur les <strong className="text-carnet-ink">puissances</strong>, la <strong className="text-carnet-ink">fonction exponentielle</strong> (base{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'e'} /></span>) et le <strong className="text-carnet-ink">logarithme naturel</strong> (
              <span className="inline-block align-middle"><LatexRenderer latex={'\\ln'} /></span>) — vues au lycée et indispensables en classes préparatoires.
            </p>
            <p>
              Ces outils sont fondamentaux pour les manipulations algébriques, les dérivations, les intégrales et les équations différentielles.
            </p>
          </div>
        </section>

        {/* Section 1 — Puissances */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Puissances</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Pour <span className="inline-block align-middle"><LatexRenderer latex={'a > 0'} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={'b > 0'} /></span> (ou adaptés pour exposants négatifs / fractionnaires), et{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'m, n \\in \\mathbb{R}'} /></span> :
            </p>

            <div className="carnet-eyebrow mb-4">A · Règles de base</div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { label: 'Produit', latex: 'a^m \\cdot a^n = a^{m+n}' },
                { label: 'Quotient', latex: '\\frac{a^m}{a^n} = a^{m-n}' },
                { label: 'Puissance d\'une puissance', latex: '(a^m)^n = a^{mn}' },
                { label: 'Produit élevé à une puissance', latex: '(ab)^m = a^m b^m' },
                { label: 'Quotient élevé à une puissance', latex: '\\left(\\frac{a}{b}\\right)^m = \\frac{a^m}{b^m}' },
                { label: 'Racine', latex: 'a^{1/n} = \\sqrt[n]{a}' },
                { label: 'Exposant négatif', latex: 'a^{-m} = \\frac{1}{a^m}' },
                { label: 'Exposant zéro', latex: 'a^0 = 1' },
              ].map((rule, i) => (
                <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">
                    {rule.label}
                  </div>
                  <div className="font-mono-jb text-[14px] text-carnet-ink">
                    <LatexRenderer latex={rule.latex} />
                  </div>
                </div>
              ))}
            </div>

            <div className="carnet-eyebrow mb-4">B · Exemples</div>
            <ul className="space-y-2 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-8 pl-5">
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'2^3 \\cdot 2^2 = 2^5 = 32'} /></span></li>
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'(3^2)^4 = 3^8 = 6561'} /></span></li>
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'4^{1/2} = \\sqrt{4} = 2'} /></span></li>
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'5^{-1} = 1/5'} /></span></li>
            </ul>

            <div className="bg-carnet-ink rounded-md p-6 relative">
              <div className="absolute -top-3 left-6 bg-carnet-red text-carnet-paper-2 px-3 py-0.5 carnet-hand text-[16px] font-semibold" style={{ transform: 'rotate(-3deg)' }}>
                Pièges en prépa
              </div>
              <div className="flex items-start gap-3 mt-2">
                <AlertTriangle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
                <ul className="space-y-2 font-instrument text-[14px] text-carnet-paper leading-[1.65]">
                  <li>Attention aux bases négatives avec exposants fractionnaires (non réels si dénominateur pair).</li>
                  <li>
                    Utiliser pour simplifier des expressions comme{' '}
                    <span className="inline-block align-middle text-carnet-paper">
                      <LatexRenderer latex={'\\sqrt[3]{a^6 b^3} = a^2 b'} />
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Exponentielle */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Fonction exponentielle</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              La fonction exponentielle est{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'\\exp(x) = e^x'} /></span>, où{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'e \\approx 2.71828'} /></span> est la base du logarithme naturel.
            </p>

            <div className="carnet-eyebrow mb-4">A · Propriétés algébriques</div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { label: 'Produit', latex: 'e^x \\cdot e^y = e^{x+y}' },
                { label: 'Quotient', latex: '\\frac{e^x}{e^y} = e^{x-y}' },
                { label: 'Puissance', latex: '(e^x)^y = e^{xy}' },
                { label: 'Inverse', latex: 'e^{-x} = \\frac{1}{e^x}' },
                { label: 'Valeur en 0', latex: 'e^0 = 1' },
              ].map((rule, i) => (
                <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">
                    {rule.label}
                  </div>
                  <div className="font-mono-jb text-[14px] text-carnet-ink">
                    <LatexRenderer latex={rule.latex} />
                  </div>
                </div>
              ))}
            </div>

            <div className="carnet-eyebrow mb-4">B · Exemples</div>
            <ul className="space-y-2 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] pl-5">
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'e^2 \\cdot e^3 = e^5 \\approx 148.413'} /></span></li>
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'(e^4)^{1/2} = e^2 \\approx 7.389'} /></span></li>
              <li className="list-disc">Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={'e^{2x} = 2 e^{2x}'} /></span></li>
            </ul>
          </div>
        </section>

        {/* Section 3 — Logarithme */}
        <section className="mb-14 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Logarithme naturel</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              La fonction <span className="inline-block align-middle"><LatexRenderer latex={'\\ln(x)'} /></span> est définie pour{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'x > 0'} /></span>, et c'est l'inverse de{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'e^x'} /></span> :{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'\\ln(e^x) = x'} /></span>,{' '}
              <span className="inline-block align-middle"><LatexRenderer latex={'e^{\\ln(x)} = x'} /></span>.
            </p>

            <div className="carnet-eyebrow mb-4">A · Propriétés algébriques</div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { label: 'Produit', latex: '\\ln(ab) = \\ln a + \\ln b' },
                { label: 'Quotient', latex: '\\ln\\!\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b' },
                { label: 'Puissance', latex: '\\ln(a^m) = m \\ln a' },
                { label: 'Valeur en 1', latex: '\\ln 1 = 0' },
              ].map((rule, i) => (
                <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-4">
                  <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">
                    {rule.label}
                  </div>
                  <div className="font-mono-jb text-[14px] text-carnet-ink">
                    <LatexRenderer latex={rule.latex} />
                  </div>
                </div>
              ))}
            </div>

            <div className="carnet-eyebrow mb-4">B · Exemples</div>
            <ul className="space-y-2 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] pl-5">
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'\\ln(4) = \\ln(2^2) = 2 \\ln 2 \\approx 1.386'} /></span></li>
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'\\ln(e^3) = 3'} /></span></li>
              <li className="list-disc"><span className="inline-block align-middle"><LatexRenderer latex={'\\ln(1/2) = -\\ln 2 \\approx -0.693'} /></span></li>
              <li className="list-disc">Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={'\\ln(3x) = 1/x'} /></span></li>
            </ul>
          </div>
        </section>

        {/* Section 4 — Relations */}
        <section className="mb-16 relative">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Relations <em className="font-lora italic text-carnet-red">puissances ↔ exp ↔ ln</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <div className="space-y-4">
              {[
                { txt: <>Toute puissance peut s'écrire avec exp&nbsp;: <span className="inline-block align-middle"><LatexRenderer latex={'a^b = e^{b \\ln a}'} /></span> (pour <span className="inline-block align-middle"><LatexRenderer latex={'a > 0'} /></span>)</> },
                { txt: <>Exemple&nbsp;: <span className="inline-block align-middle"><LatexRenderer latex={'2^3 = e^{3 \\ln 2}'} /></span></> },
                { txt: <>Utile pour dériver <span className="inline-block align-middle"><LatexRenderer latex={'a^x = e^{x \\ln a}'} /></span>, dérivée <span className="inline-block align-middle"><LatexRenderer latex={'a^x \\ln a'} /></span></> },
                { txt: <>Logarithme d'une puissance&nbsp;: <span className="inline-block align-middle"><LatexRenderer latex={'\\ln(a^b) = b \\ln a'} /></span></> },
              ].map((row, i) => (
                <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 font-instrument text-[15px] text-carnet-ink-soft leading-[1.65]">
                  {row.txt}
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
                Maintenant, on s'entraîne.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Les règles ne servent à rien tant qu'elles ne sont pas dans les doigts. Direction les exercices.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/calculs-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-[#9E342B] text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <Calculator className="mr-2 h-4 w-4" />
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
            — fin du chapitre 01
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chapitre1CalculsCoursPage;
