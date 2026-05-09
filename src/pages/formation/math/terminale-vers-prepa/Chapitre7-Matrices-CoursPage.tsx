import React from 'react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import {
  Home,
  ChevronRight,
  Grid,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
} from 'lucide-react';

const Chapitre7MatricesCoursPage = () => {
  return (
    <div className="min-h-screen carnet-paper">
      <SEOHead
        canonical="/formation/math/terminale-vers-prepa/matrices-cours"
        title="Chapitre 7 — Matrices · Terminale → Prépa ECG"
        description="Cours complet sur les matrices : définition, dimensions, addition, multiplication, déterminant et inverse en dimension 2×2."
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
            <span className="carnet-eyebrow text-[11px]">Cours · Chapitre 7 · Matrices</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">

        {/* Hero */}
        <header className="mb-16 relative">
          <div className="carnet-eyebrow mb-5">07 · Chapitre · Matrices</div>
          <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.022em] text-carnet-ink mb-6">
            Introduction aux <em className="font-lora italic text-carnet-red">matrices</em>.
          </h1>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[680px]">
            Tableaux de nombres, opérations fondamentales. <span className="carnet-hl font-lora italic">L'algèbre linéaire</span> que tu vas manipuler tous les jours en prépa.
          </p>

          <div
            className="carnet-hand hidden lg:block absolute pointer-events-none"
            style={{ right: 0, top: 8, fontSize: 24, transform: 'rotate(-4deg)', maxWidth: 180, lineHeight: 1.15, textAlign: 'right' }}
          >
            ↘ AB ≠ BA{'\n'}attention !
          </div>
        </header>

        {/* Section 1 — Qu'est-ce qu'une matrice */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">01</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Qu'est-ce qu'une matrice ?</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
              Une <strong className="text-carnet-ink">matrice</strong> est un tableau rectangulaire de nombres, organisé en <strong className="text-carnet-ink">lignes</strong> (rangées horizontales) et <strong className="text-carnet-ink">colonnes</strong> (rangées verticales). On l'utilise pour représenter des données ou résoudre des systèmes d'équations.
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Exemple simple</div>
              <div className="text-center mb-3">
                <LatexRenderer latex={'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}'} />
              </div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">
                Matrice à 2 lignes et 2 colonnes — taille 2 × 2.
              </p>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3">
                <p className="font-instrument text-[13px] text-carnet-ink-soft mb-2"><strong className="text-carnet-ink">Les éléments :</strong></p>
                <ul className="font-instrument text-[13px] text-carnet-ink-soft space-y-1 list-disc list-inside">
                  <li>a₁₁ = 1 (ligne 1, colonne 1)</li>
                  <li>a₁₂ = 2 (ligne 1, colonne 2)</li>
                  <li>a₂₁ = 3 (ligne 2, colonne 1)</li>
                  <li>a₂₂ = 4 (ligne 2, colonne 2)</li>
                </ul>
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Vecteurs</div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-4">
                  <p className="font-instrument text-[13px] text-carnet-ink-soft mb-2"><strong className="text-carnet-ink">Vecteur ligne :</strong></p>
                  <p className="font-mono-jb text-[12px] text-carnet-ink-mute">une seule ligne</p>
                </div>
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-4">
                  <p className="font-instrument text-[13px] text-carnet-ink-soft mb-2"><strong className="text-carnet-ink">Vecteur colonne :</strong></p>
                  <div className="text-center"><LatexRenderer latex={'\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}'} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Dimensions */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">02</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Dimensions et types</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              La <strong className="text-carnet-ink">dimension</strong> (ou taille) est : nombre de lignes × nombre de colonnes.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Carrée</div>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.65]">Même nombre de lignes et colonnes (2×2, 3×3...).</p>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Nulle</div>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.65]">Tous les éléments sont 0.</p>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-2">Identité</div>
                <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.65] mb-2">1 sur la diagonale, 0 ailleurs :</p>
                <div className="text-center"><LatexRenderer latex={'I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}'} /></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Addition */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">03</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Addition et soustraction</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
              Pour additionner deux matrices, elles doivent avoir la <strong className="text-carnet-ink">même taille</strong>. On additionne <strong className="text-carnet-ink">élément par élément</strong>.
            </p>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Exemple</div>
              <div className="text-center mb-3">
                <LatexRenderer latex={'A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}'} />
              </div>
              <div className="text-center">
                <LatexRenderer latex={'A + B = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}'} />
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Propriétés</div>
              <ul className="font-instrument text-[14px] text-carnet-ink-soft space-y-1.5 list-disc list-inside">
                <li><strong className="text-carnet-ink">Commutative :</strong> A + B = B + A</li>
                <li><strong className="text-carnet-ink">Associative :</strong> (A + B) + C = A + (B + C)</li>
                <li><strong className="text-carnet-ink">Élément neutre :</strong> la matrice nulle</li>
              </ul>
              <p className="font-instrument text-[14px] text-carnet-ink-soft mt-3">
                <strong className="text-carnet-ink">Soustraction :</strong> A - B = élément par élément.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Scalaire */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">04</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Multiplication par un scalaire</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
              Un <strong className="text-carnet-ink">scalaire</strong> est un nombre simple (comme 2 ou -3). On multiplie <strong className="text-carnet-ink">chaque élément</strong> par ce nombre.
            </p>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 text-center">
              <LatexRenderer latex={'3 \\times A = 3 \\times \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}'} />
            </div>
          </div>
        </section>

        {/* Section 5 — Multiplication de matrices */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">05</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Multiplication de <em className="font-lora italic text-carnet-red">matrices</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Condition d'existence</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Pour multiplier A (m × p) et B (p × n), le <strong className="text-carnet-ink">nombre de colonnes de A</strong> doit égaler le <strong className="text-carnet-ink">nombre de lignes de B</strong>. Le résultat est m × n.
              </p>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">La règle</div>
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                Chaque élément c<sub>ij</sub> de C = AB est la somme des produits a<sub>ik</sub> × b<sub>kj</sub> pour k = 1 à p.
              </p>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Exemple 2×2</div>
              <div className="text-center mb-3">
                <LatexRenderer latex={'AB = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}'} />
              </div>
              <div className="text-center mb-3">
                <LatexRenderer latex={'= \\begin{pmatrix} 1 \\cdot 5 + 2 \\cdot 7 & 1 \\cdot 6 + 2 \\cdot 8 \\\\ 3 \\cdot 5 + 4 \\cdot 7 & 3 \\cdot 6 + 4 \\cdot 8 \\end{pmatrix}'} />
              </div>
              <div className="text-center">
                <LatexRenderer latex={'= \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}'} />
              </div>
            </div>

            <div className="bg-carnet-ink rounded-md p-6 relative">
              <div className="absolute -top-3 left-6 bg-carnet-red text-carnet-paper-2 px-3 py-0.5 carnet-hand text-[16px] font-semibold" style={{ transform: 'rotate(-3deg)' }}>
                Pièges
              </div>
              <div className="flex items-start gap-3 mt-2">
                <AlertTriangle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
                <ul className="font-instrument text-[14px] text-carnet-paper space-y-1.5 leading-[1.65]">
                  <li><strong className="text-carnet-paper">Pas commutative :</strong> AB ≠ BA en général</li>
                  <li><strong className="text-carnet-paper">Associative :</strong> (AB)C = A(BC)</li>
                  <li><strong className="text-carnet-paper">Distributive :</strong> A(B + C) = AB + AC</li>
                  <li><strong className="text-carnet-paper">Avec identité :</strong> AI = IA = A</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Applications */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">06</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Applications</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r">
            <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">Les matrices servent à :</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Systèmes d'équations</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Pour 2 équations à 2 variables :</p>
                <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3">
                  <p className="font-instrument text-[13px] text-carnet-ink-soft mb-1">x + 2y = 5</p>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft mb-3">3x + 4y = 11</p>
                  <p className="font-instrument text-[13px] text-carnet-ink-soft mb-2">S'écrit en matrices :</p>
                  <div className="text-center">
                    <LatexRenderer latex={'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix}'} />
                  </div>
                </div>
              </div>
              <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
                <div className="font-instrument text-[11px] uppercase tracking-[0.12em] text-carnet-red font-semibold mb-3">Transformations géométriques</div>
                <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">Rotations, agrandissements, symétries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 — Déterminant */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">07</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Déterminant <em className="font-lora italic text-carnet-red">2×2</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l space-y-6">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Pour une matrice 2×2 :</p>
              <div className="text-center mb-3">
                <LatexRenderer latex={'\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}'} />
              </div>
              <div className="text-center mb-4">
                <LatexRenderer latex={'\\det = ad - bc'} />
              </div>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3">
                <p className="font-instrument text-[13px] text-carnet-ink-soft mb-2">
                  <strong className="text-carnet-ink">Exemple :</strong> Pour A = <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}'} /></span>
                </p>
                <div className="text-center">
                  <LatexRenderer latex={'\\det(A) = 1 \\cdot 4 - 2 \\cdot 3 = -2'} />
                </div>
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 text-center">
              <p className="font-instrument text-[14px] text-carnet-ink leading-[1.65]">
                <strong>Si det ≠ 0, la matrice est inversible.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 — Inverse */}
        <section className="mb-14">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">08</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">
              Inverse <em className="font-lora italic text-carnet-red">2×2</em>
            </h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-r space-y-6">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5">
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mb-3">Si det ≠ 0, l'inverse est :</p>
              <div className="text-center mb-4">
                <LatexRenderer latex={'A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}'} />
              </div>
              <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded p-3">
                <p className="font-instrument text-[13px] text-carnet-ink-soft mb-2">
                  <strong className="text-carnet-ink">Exemple :</strong> Inverse de A = <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}'} /></span>
                </p>
                <div className="text-center mb-3">
                  <LatexRenderer latex={'A^{-1} = \\frac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1{,}5 & -0{,}5 \\end{pmatrix}'} />
                </div>
              </div>
            </div>

            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] border-l-2 border-l-carnet-red rounded-md p-5 text-center">
              <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                <strong className="text-carnet-ink">Vérification :</strong> A × A⁻¹ = I
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 — Mini-exercices */}
        <section className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="carnet-hand text-[44px] text-carnet-red leading-none font-semibold">09</span>
            <hr className="flex-shrink-0 w-10 h-0.5 bg-carnet-ink border-0 mt-3" />
            <h2 className="font-lora text-[30px] sm:text-[34px] text-carnet-ink leading-tight">Mini-exercices</h2>
          </div>

          <div className="carnet-card p-8 sm:p-10 carnet-tilt-l">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { num: '1', q: <>Additionner <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix} + \\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}'} /></span></>, a: <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 5 & 5 \\\\ 8 & 10 \\end{pmatrix}'} /></span> },
                { num: '2', q: <>Multiplier par 2 : <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 3 & -1 \\end{pmatrix}'} /></span></>, a: <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 6 & -2 \\end{pmatrix}'} /></span> },
                { num: '3', q: <>Multiplier <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}'} /></span></>, a: <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}'} /></span> },
                { num: '4', q: <>Déterminant de <span className="inline-block align-middle"><LatexRenderer latex={'\\begin{pmatrix} 5 & 2 \\\\ 1 & 3 \\end{pmatrix}'} /></span></>, a: <>15 - 2 = 13</> },
              ].map((ex, i) => (
                <div key={i} className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5 relative">
                  <div className="carnet-hand text-[22px] text-carnet-red absolute -top-3 left-3 bg-carnet-paper-2 px-2" style={{ transform: 'rotate(-4deg)' }}>
                    n°{ex.num}
                  </div>
                  <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65] mt-2 mb-2">{ex.q}</p>
                  <p className="font-mono-jb text-[12px] text-carnet-ink-mute">→ Réponse : {ex.a}</p>
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
                Bravo — dernier chapitre.
              </h3>
              <p className="font-instrument text-[15px] text-[rgba(251,246,234,0.75)] leading-[1.6]">
                Calcul matriciel, déterminant, inverse — direction les exercices pour ancrer le tout.
              </p>
            </div>
            <Link to="/formation/math/terminale-vers-prepa/matrices-exercices" className="flex-shrink-0">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper font-instrument font-semibold text-[15px] py-6 px-7 rounded-full border-0 h-auto">
                <Grid className="mr-2 h-4 w-4" />
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
            — fin du chapitre 07
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chapitre7MatricesCoursPage;
