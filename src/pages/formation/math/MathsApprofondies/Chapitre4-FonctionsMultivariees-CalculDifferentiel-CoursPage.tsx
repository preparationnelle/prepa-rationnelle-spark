import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const Chapitre4FonctionsMultivarieesCalculDifferentielCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={4}
      chapterTitle="Fonctions multivariées et calcul différentiel"
      description="Fonctions réelles définies sur ℝⁿ, dérivées partielles, gradient, recherche d'extremum"
      slug="fonctions-multivariees-calcul-differentiel"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="pt-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Cours
            </Button>
            <Link to="/formation/maths-fonctions-multivariees-calcul-differentiel-exercices">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-fonctions-multivariees-calcul-differentiel-flashcards">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-fonctions-multivariees-calcul-differentiel-quiz">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Introduction */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">Introduction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p>L&apos;espace ℝⁿ est muni de la norme euclidienne usuelle :</p>
          <div className="text-center">
            <LatexRenderer latex={"\\lVert x \\rVert = \\sqrt{x_{1}^{2}+\\dots+x_{n}^{2}}"} />
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Parties ouvertes, parties fermées */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">1. Parties ouvertes, parties fermées</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <div>
            <p className="mb-4">Une partie Ω ⊂ ℝⁿ est un <strong>ouvert</strong> si elle est vide <em>ou</em> si, pour tout x₀ ∈ Ω, il existe r &gt; 0 tel que :</p>
            <div className="text-center">
              <LatexRenderer latex={"\\lVert x - x_0 \\rVert < r \\; \\Rightarrow \\; x \\in \\Omega"} />
            </div>
            <p className="mt-4">Une partie est <strong>fermée</strong> lorsque son complémentaire est un ouvert.</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-4">
              <p className="text-sm font-semibold text-blue-800 mb-2">Remarque</p>
              <p className="text-sm text-blue-700">
                La détermination de la nature topologique (ouvert / fermé) d&apos;un ensemble n&apos;est pas 
                un objectif imposé par le programme : elle devra toujours être précisée.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Opérations sur les ouverts et les fermés */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">2. Opérations sur les ouverts et les fermés</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <ul className="list-disc pl-6 space-y-2">
            <li>L&apos;intersection <em>finie</em> d&apos;ouverts de ℝⁿ est un ouvert.</li>
            <li>Toute réunion (finie ou infinie) d&apos;ouverts est un ouvert.</li>
            <li>Le complémentaire d&apos;un ouvert est un fermé et réciproquement.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Section 3: Exemples fondamentaux d'ouverts */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">3. Exemples fondamentaux d&apos;ouverts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p>Si φ est continue sur ℝⁿ et a ∈ ℝ, alors les ensembles</p>
          <div className="text-center space-y-2">
            <LatexRenderer latex={"\\{ x \\in \\mathbb{R}^n \\mid \\varphi(x) < a \\}"} />
            <LatexRenderer latex={"\\{ x \\in \\mathbb{R}^n \\mid \\varphi(x) > a \\}"} />
          </div>
          <p>sont des ouverts.</p>
        </CardContent>
      </Card>

      {/* Section 4: Partie bornée */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">4. Partie bornée</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p>Un ensemble U ⊂ ℝⁿ est <strong>borné</strong> s&apos;il existe r ≥ 0 tel que</p>
          <div className="text-center">
            <LatexRenderer latex={"\\forall x \\in U,\\ \\lVert x \\rVert \\le r"} />
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Graphe d'une fonction */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">5. Graphe d&apos;une fonction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p>Pour f: U ⊂ ℝⁿ → ℝ, on appelle <strong>graphe</strong> de f l&apos;ensemble</p>
          <div className="text-center">
            <LatexRenderer latex={"\\mathrm{Gr}(f) = \\{ (x_{1},\\dots,x_{n},y) \\in \\mathbb{R}^{n+1} \\mid y=f(x_{1},\\dots,x_{n}) \\}"} />
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Lignes de niveau */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">6. Lignes de niveau</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p>Pour une fonction f: U ⊂ ℝⁿ → ℝ et un réel λ, la <strong>ligne de niveau</strong> est</p>
          <div className="text-center">
            <LatexRenderer latex={"\\{ x \\in U \\mid f(x) = \\lambda \\}"} />
          </div>
        </CardContent>
      </Card>

      {/* Section 7: Continuité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">7. Continuité</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p>f est <strong>continue</strong> en a ∈ U lorsque</p>
          <div className="text-center">
            <LatexRenderer latex={"\\forall \\varepsilon>0,\\; \\exists r>0,\\; \\forall x \\in U,\\; (\\lVert x-a \\rVert < r \\Rightarrow |f(x)-f(a)| \\le \\varepsilon)"} />
          </div>
          <p className="mt-4">Elle est continue sur U si cette propriété vaut en tout point de U.</p>
        </CardContent>
      </Card>

      {/* Section 8: Continuité et opérations */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">8. Continuité et opérations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <ul className="list-disc pl-6 space-y-2">
            <li>Toute fonction polynomiale en n variables est continue sur ℝⁿ.</li>
            <li>Sur U : sommes, combinaisons linéaires, produit et quotient bien défini de fonctions continues sont continus.</li>
            <li>Si f est continue sur U à valeurs dans I ⊂ ℝ et φ est continue sur I, alors φ ∘ f est continue sur U.</li>
          </ul>
        </CardContent>
      </Card>

      {/* II. Fonctions de n variables : calcul différentiel d'ordre 1 */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">II. Fonctions de n variables : calcul différentiel d&apos;ordre 1</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p className="mb-2">Dans tout ce chapitre, Ω désigne un <em>ouvert</em> de ℝⁿ.</p>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Dérivées partielles d&apos;ordre 1</h3>
            <p>Soit a = (a₁, ..., aₙ) ∈ ℝⁿ. La <strong>dérivée partielle d&apos;ordre 1</strong> de f en a relativement à la i-ème variable est, lorsqu&apos;elle existe :</p>
            <div className="text-center">
              <LatexRenderer latex={"\\partial_{i} f(a) = \\lim_{h \\to 0} \\frac{f(a_{1},\\dots,a_{i-1}, a_{i}+h, a_{i+1},\\dots,a_{n}) - f(a)}{h}"} />
            </div>
            <p className="mt-2">Lorsque ∂ᵢf(a) existe pour tout a ∈ Ω, la fonction (x₁, ..., xₙ) ↦ ∂ᵢf(x₁, ..., xₙ) est la dérivée partielle d&apos;ordre 1 de f par rapport à la i-ème variable.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Gradient</h3>
            <p>Si f admet, en a, toutes ses dérivées partielles d&apos;ordre 1, le <strong>gradient</strong> de f en a est le vecteur</p>
            <div className="text-center">
              <LatexRenderer latex={"\\nabla f(a) = ( \\partial_{1} f(a),\\dots, \\partial_{n} f(a) ) \\in \\mathbb{R}^n"} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Fonction de classe 𝒞¹</h3>
            <p>On dit que f est de <strong>classe 𝒞¹</strong> sur Ω lorsque chacune de ses dérivées partielles est continue sur Ω.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Classe 𝒞¹ et opérations</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Toute fonction polynomiale en n variables appartient à 𝒞¹(ℝⁿ).</li>
              <li>Les opérations suivantes conservent la classe 𝒞¹ sur Ω : somme, combinaison linéaire, produit, quotient (lorsqu&apos;il est défini).</li>
              <li>Si f ∈ 𝒞¹(Ω) et si φ: I → ℝⁿ est de classe 𝒞¹, alors f ∘ φ est de classe 𝒞¹(I).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Dérivée de la fonction g: t ↦ f(a+tu)</h3>
            <p>Supposons f ∈ 𝒞¹(ℝⁿ), a ∈ ℝⁿ et u ∈ ℝⁿ. La fonction g: t ↦ f(a+tu) est dérivable sur ℝ et</p>
            <div className="text-center space-y-2">
              <LatexRenderer latex={"g'(t) = \\langle \\nabla f(a+tu), u \\rangle"} />
              <LatexRenderer latex={"\\text{En particulier, } g'(0) = \\langle \\nabla f(a), u \\rangle"} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Interprétation géométrique du gradient</h3>
            <p>Si ∇f(a) ≠ 0, le vecteur ∇f(a) indique la direction de variation la plus rapide de f au voisinage de a et est orthogonal aux <em>lignes de niveau</em> (hypersurfaces où f est constant).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Développement limité d&apos;ordre 1</h3>
            <p>Pour f ∈ 𝒞¹(Ω) et a ∈ Ω, il existe une fonction ε continue sur un voisinage de 0 dans ℝⁿ, satisfaisant ε(0) = 0, telle que pour tout h = (h₁, ..., hₙ) avec a+h ∈ Ω :</p>
            <div className="text-center">
              <LatexRenderer latex={"f(a+h) = f(a) + \\langle \\nabla f(a), h \\rangle + \\|h\\| \\varepsilon(h)"} />
            </div>
            <p className="mt-2">Autrement dit,</p>
            <div className="text-center">
              <LatexRenderer latex={"f(a+h) = f(a) + \\sum_{i=1}^{n} h_i \\partial_i f(a) + \\sqrt{h_{1}^{2}+\\dots+h_{n}^{2}} \\varepsilon(h)"} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section conclusion */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-slate-600 italic font-medium">
              Fin du chapitre 4 - Fonctions multivariées et calcul différentiel
            </p>
            <p className="text-sm text-slate-500 mt-2">
              Passez aux exercices pour mettre en pratique ces concepts !
            </p>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre4FonctionsMultivarieesCalculDifferentielCoursPage;
