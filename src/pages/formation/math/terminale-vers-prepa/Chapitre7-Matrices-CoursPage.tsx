import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, Grid3x3, BookOpen, ArrowRight, Calculator } from 'lucide-react';

const Chapitre7MatricesCoursPage = () => {
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-[#1e3a8a] transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Cours - Chapitre 7</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Chapitre 7 : Introduction aux matrices
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Les matrices - Tableaux de nombres et opérations fondamentales
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Découvrez les bases du calcul matriciel pour débuter en prépa.
            </p>
          </CardHeader>
        </Card>

        {/* Section 1 - Qu'est-ce qu'une matrice ? */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                <Grid3x3 className="h-5 w-5" />
              </span>
              <span className="font-semibold">Qu'est-ce qu'une matrice ?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <p className="text-slate-700 leading-relaxed">
              Une <strong>matrice</strong> est un tableau rectangulaire de nombres, organisé en <strong>lignes</strong> (rangées horizontales) et <strong>colonnes</strong> (rangées verticales). On l'utilise pour représenter des données ou résoudre des systèmes d'équations.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4"><strong>Exemple simple :</strong></p>
              <div className="text-center mb-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} />
              </div>
              <p className="text-slate-700 mb-4">C'est une matrice avec 2 lignes et 2 colonnes. On dit qu'elle est de taille 2 × 2.</p>
              
              <div className="bg-white p-4 rounded">
                <p className="text-slate-700 mb-2"><strong>Les éléments :</strong></p>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>a₁₁ = 1 (ligne 1, colonne 1)</li>
                  <li>a₁₂ = 2 (ligne 1, colonne 2)</li>
                  <li>a₂₁ = 3 (ligne 2, colonne 1)</li>
                  <li>a₂₂ = 4 (ligne 2, colonne 2)</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4"><strong>Notation générale :</strong> Une matrice M de m lignes et n colonnes est notée avec des parenthèses ou crochets.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded">
                  <p className="text-slate-700 mb-2"><strong>Vecteur ligne :</strong></p>
                  <p className="text-slate-700 text-sm">Une seule ligne</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-slate-700 mb-2"><strong>Vecteur colonne :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\begin{pmatrix} 5 \\\\ 6 \\end{pmatrix}"} />
                  </div>
                  <p className="text-slate-700 text-sm text-center">Une seule colonne</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Dimensions d'une matrice */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Dimensions d'une matrice</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <p className="text-slate-700 mb-4">
              La <strong>dimension</strong> (ou taille) est : nombre de lignes × nombre de colonnes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Matrice carrée</h4>
                <p className="text-slate-700 text-sm">Même nombre de lignes et colonnes</p>
                <p className="text-slate-700 text-sm mt-2">Ex: 2×2, 3×3</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Matrice nulle</h4>
                <p className="text-slate-700 text-sm">Tous les éléments sont 0</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Matrice identité</h4>
                <p className="text-slate-700 text-sm mb-3">1 sur la diagonale, 0 ailleurs</p>
                <div className="text-center">
                  <LatexRenderer latex={"I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}"} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Addition et soustraction */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Addition et soustraction</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <p className="text-slate-700 mb-4">
              Pour additionner deux matrices, elles doivent avoir la <strong>même taille</strong>. On additionne <strong>élément par élément</strong>.
            </p>

            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4"><strong>Exemple :</strong></p>
              <div className="text-center mb-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}"} />
              </div>
              <div className="text-center">
                <LatexRenderer latex={"A + B = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}"} />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Propriétés</h4>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li><strong>Commutative :</strong> A + B = B + A</li>
                <li><strong>Associative :</strong> (A + B) + C = A + (B + C)</li>
                <li><strong>Élément neutre :</strong> la matrice nulle</li>
              </ul>
              <p className="text-slate-700 mt-4"><strong>Soustraction :</strong> A - B = élément par élément</p>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Multiplication par un scalaire */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Multiplication par un scalaire</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <p className="text-slate-700 mb-4">
              Un <strong>scalaire</strong> est un nombre simple (comme 2 ou -3). On multiplie <strong>chaque élément</strong> par ce nombre.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4"><strong>Exemple :</strong></p>
              <div className="text-center">
                <LatexRenderer latex={"3 \\times A = 3 \\times \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 3 & 6 \\\\ 9 & 12 \\end{pmatrix}"} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Multiplication de matrices */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              <span className="font-semibold">Multiplication de matrices</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Condition importante</h4>
              <p className="text-slate-700">
                Pour multiplier A (m × p) et B (p × n), le <strong>nombre de colonnes de A</strong> doit égaler le <strong>nombre de lignes de B</strong>. Le résultat est m × n.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">La règle</h4>
              <p className="text-slate-700 mb-4">
                Chaque élément c<sub>ij</sub> de C = AB est la somme des produits a<sub>ik</sub> × b<sub>kj</sub> pour k=1 à p.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4"><strong>Exemple simple 2×2 :</strong></p>
              <div className="text-center mb-4">
                <LatexRenderer latex={"AB = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}"} />
              </div>
              <div className="text-center mb-4">
                <LatexRenderer latex={"= \\begin{pmatrix} 1 \\cdot 5 + 2 \\cdot 7 & 1 \\cdot 6 + 2 \\cdot 8 \\\\ 3 \\cdot 5 + 4 \\cdot 7 & 3 \\cdot 6 + 4 \\cdot 8 \\end{pmatrix}"} />
              </div>
              <div className="text-center">
                <LatexRenderer latex={"= \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}"} />
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mt-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">⚠️ Propriétés importantes</h4>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li><strong>Pas commutative :</strong> AB ≠ BA en général</li>
                <li><strong>Associative :</strong> (AB)C = A(BC)</li>
                <li><strong>Distributive :</strong> A(B + C) = AB + AC</li>
                <li><strong>Avec identité :</strong> AI = IA = A</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 6 - Applications simples */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                6
              </span>
              <span className="font-semibold">Applications simples</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <p className="text-slate-700 mb-6">Les matrices servent à :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Systèmes d'équations</h4>
                <p className="text-slate-700 mb-4">Pour 2 équations à 2 variables.</p>
                
                <div className="bg-white p-4 rounded">
                  <p className="text-slate-700 mb-3"><strong>Exemple :</strong></p>
                  <p className="text-slate-700 mb-2">x + 2y = 5</p>
                  <p className="text-slate-700 mb-4">3x + 4y = 11</p>
                  <p className="text-slate-700 mb-3">S'écrit en matrices :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix}"} />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Transformations géométriques</h4>
                <p className="text-slate-700">Rotations, agrandissements, etc.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7 - Déterminant */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                7
              </span>
              <span className="font-semibold">Déterminant (pour 2×2)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4">Pour une matrice 2×2 :</p>
              <div className="text-center mb-4">
                <LatexRenderer latex={"\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}"} />
              </div>
              <div className="text-center mb-4">
                <LatexRenderer latex={"\\det = ad - bc"} />
              </div>
              
              <div className="bg-white p-4 rounded">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong> Pour A = <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} /></span></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\det(A) = 1 \\cdot 4 - 2 \\cdot 3 = 4 - 6 = -2"} />
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-slate-700 text-center">
                <strong>Si det ≠ 0, la matrice est inversible.</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 8 - Inverse */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                8
              </span>
              <span className="font-semibold">Inverse (pour 2×2)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="bg-violet-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4">Si det ≠ 0, l'inverse est :</p>
              <div className="text-center mb-6">
                <LatexRenderer latex={"A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}"} />
              </div>
              
              <div className="bg-white p-4 rounded">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong> Inverse de A = <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} /></span></p>
                <div className="text-center mb-4">
                  <LatexRenderer latex={"A^{-1} = \\frac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}"} />
                </div>
                <div className="text-center">
                  <LatexRenderer latex={"= \\begin{pmatrix} -2 & 1 \\\\ 1{,}5 & -0{,}5 \\end{pmatrix}"} />
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-slate-700 text-center">
                <strong>Vérification :</strong> A × A⁻¹ = I
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 9 - Exercices simples */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                9
              </span>
              <span className="font-semibold">Exercices très simples</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>1.</strong> Additionner</p>
                <div className="text-center mb-2">
                  <LatexRenderer latex={"\\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix} + \\begin{pmatrix} 4 & 5 \\\\ 6 & 7 \\end{pmatrix}"} />
                </div>
                <p className="text-slate-600 text-sm">Réponse : <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} 5 & 5 \\\\ 8 & 10 \\end{pmatrix}"} /></span></p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>2.</strong> Multiplier par 2</p>
                <div className="text-center mb-2">
                  <LatexRenderer latex={"\\begin{pmatrix} 3 & -1 \\end{pmatrix}"} />
                </div>
                <p className="text-slate-600 text-sm">Réponse : <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} 6 & -2 \\end{pmatrix}"} /></span></p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>3.</strong> Multiplier</p>
                <div className="text-center mb-2">
                  <LatexRenderer latex={"\\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}"} />
                </div>
                <p className="text-slate-600 text-sm">Réponse : <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} 5 \\\\ 3 \\end{pmatrix}"} /></span></p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>4.</strong> Déterminant de</p>
                <div className="text-center mb-2">
                  <LatexRenderer latex={"\\begin{pmatrix} 5 & 2 \\\\ 1 & 3 \\end{pmatrix}"} />
                </div>
                <p className="text-slate-600 text-sm">Réponse : 15 - 2 = 13</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers les exercices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-violet-50 via-white to-purple-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 mb-4 font-medium">
                Maintenant que vous maîtrisez les bases des matrices, passez aux exercices !
              </p>
              <Link to="/formation/math/terminale-vers-prepa/matrice-exercices">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Grid3x3 className="h-5 w-5" />
                  <span className="font-semibold">Faire les exercices</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-white to-indigo-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 italic font-medium">
                Fin du chapitre 7 — Félicitations, vous avez terminé tous les cours "Terminale vers la prépa" ! 🎉
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre7MatricesCoursPage;