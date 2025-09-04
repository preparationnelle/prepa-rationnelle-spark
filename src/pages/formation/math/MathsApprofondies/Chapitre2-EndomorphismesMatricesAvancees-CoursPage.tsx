import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const Chapitre2EndomorphismesMatricesAvanceesCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={2}
      chapterTitle="Éléments propres et réduction des endomorphismes"
      description="Vecteurs propres, espaces propres et réduction matricielle"
      slug="endomorphismes-matrices-avancees"
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
            <Link to="/formation/maths-endomorphismes-matrices-avancees-exercices">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-endomorphismes-matrices-avancees-flashcards">
              <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-endomorphismes-matrices-avancees-quiz">
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
          <p>Soit A ∈ 𝓜ₙ(ℝ) une matrice réelle carrée.</p>
        </CardContent>
      </Card>

      {/* Section 1: Valeurs propres */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">1. Valeurs propres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">1.1 Définition</h3>
            <p className="mb-4">Un réel λ est <em>valeur propre</em> de A s&apos;il existe un vecteur colonne non nul X tel que</p>
            <div className="text-center">
              <LatexRenderer latex={"AX = \\lambda X"} />
            </div>
            <p className="mt-4">L&apos;ensemble Sp(A) des valeurs propres est le <em>spectre</em> de A ; on a |Sp(A)| ≤ n.</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6">
              <p className="text-sm text-blue-700">
                λ est valeur propre <strong>ssi</strong> A - λIₙ n&apos;est pas inversible.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                Pour une matrice triangulaire, les valeurs propres sont ses coefficients diagonaux.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2: Lien avec l'inversibilité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">2. Lien avec l&apos;inversibilité</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <div className="text-center">
            <LatexRenderer latex={"0 \\in \\operatorname{Sp}(A) \\; \\Longleftrightarrow \\; A \\text{ non inversible}"} />
          </div>
          <div className="text-center">
            <LatexRenderer latex={"A \\text{ inversible } \\Longleftrightarrow 0 \\notin \\operatorname{Sp}(A)"} />
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Vecteurs propres */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">3. Vecteurs propres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p>Pour λ ∈ Sp(A), l&apos;espace propre est</p>
          <div className="text-center">
            <LatexRenderer latex={"E_\\lambda(A) = \\{X \\neq 0 \\mid (A - \\lambda I_n)X = 0\\}"} />
          </div>
          <p className="mt-4">sous-espace de dimension ≥ 1.</p>
        </CardContent>
      </Card>

      {/* Section 4: Polynômes et valeurs propres */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">4. Polynômes et valeurs propres</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <p>Si Q(x) = Σᵣₖ₌₀ qₖxᵏ et Q(A) = Σᵣₖ₌₀ qₖAᵏ, alors</p>
          <p className="text-center font-medium">λ ∈ Sp(A) entraîne Q(λ) ∈ Sp(Q(A))</p>
          <p className="mt-4">En particulier, les racines d&apos;un polynôme annulateur contiennent Sp(A).</p>
        </CardContent>
      </Card>

      {/* Section 5: Matrices diagonalisables */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">5. Matrices diagonalisables</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">5.1 Définition</h3>
            <p className="mb-4">A est <em>diagonalisable</em> s&apos;il existe P inversible et D diagonale tels que</p>
            <div className="text-center">
              <LatexRenderer latex={"A = PDP^{-1}"} />
            </div>
            <p className="mt-4">Cela équivaut à l&apos;existence d&apos;une base de vecteurs propres.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">5.2 Critères</h3>
            <p className="mb-4">Notons λ₁, ..., λₚ les valeurs propres distinctes et E_λᵢ(A) les espaces propres associés. Alors</p>
            <div className="text-center space-y-4">
              <LatexRenderer latex={"A \\text{ diagonalisable } \\Longleftrightarrow \\sum_{i=1}^p \\dim E_{\\lambda_i}(A) = n"} />
              <LatexRenderer latex={"\\Longleftrightarrow \\mathcal{M}_{n,1}(\\mathbb{R}) = \\bigoplus_{i=1}^p E_{\\lambda_i}(A)"} />
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-6">
              <h4 className="font-semibold text-green-800 mb-2">Propriétés importantes :</h4>
              <ul className="list-disc pl-6 space-y-1 text-green-700">
                <li>Si A possède n valeurs propres distinctes, elle est diagonalisable.</li>
                <li>Toute matrice symétrique réelle est diagonalisable.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section conclusion */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-slate-600 italic font-medium">
              Fin du chapitre 2 - Éléments propres et réduction des endomorphismes
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

export default Chapitre2EndomorphismesMatricesAvanceesCoursPage;
