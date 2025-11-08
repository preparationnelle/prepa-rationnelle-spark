import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const Chapitre10ReductionMatricesSymetriquesCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={10}
      chapterTitle="Réduction des endomorphismes et des matrices symétriques"
      description="Méthodes de diagonalisation et réduction complète"
      slug="
      reduction-matrices-symetriques"
      showNavigation={true}
      
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-reduction-matrices-symetriques-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-reduction-matrices-symetriques-flashcards">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-reduction-matrices-symetriques-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 - Cadre */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Cadre
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              On travaille dans un espace euclidien réel avec le produit scalaire canonique :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="(E,\langle \cdot, \cdot \rangle) \text{ de dimension } n\ge1." />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 - Endomorphismes symétriques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Endomorphismes symétriques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Définition</h3>
            <p className="text-lg mb-4">
              Un endomorphisme <LatexRenderer latex="\varphi\in\mathcal{L}(E)" inline /> est <strong>symétrique</strong> si :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\forall x,y\in E,\quad \langle\varphi(x), y\rangle=\langle x, \varphi(y)\rangle" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Propriétés immédiates</h3>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                L'ensemble <LatexRenderer latex="\mathcal{S}(E)" inline /> des endomorphismes symétriques est
                un sous-espace vectoriel de <LatexRenderer latex="\mathcal{L}(E)" inline />.
              </li>
              <li>
                <LatexRenderer latex="\varphi" inline /> est symétrique <LatexRenderer latex="\Longleftrightarrow" inline />
                il existe une base orthonormale de <LatexRenderer latex="E" inline /> dans laquelle la matrice
                de <LatexRenderer latex="\varphi" inline /> est symétrique (i.e. égale à sa transposée).
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 - Orthogonal complément stable */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Orthogonal complément stable
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Si <LatexRenderer latex="\varphi" inline /> est symétrique et <LatexRenderer latex="F\subset E" inline /> est stable par <LatexRenderer latex="\varphi" inline />,
              alors son orthogonal <LatexRenderer latex="F^{\perp}" inline /> l'est aussi :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="x\in F^{\perp}\;\Longrightarrow\;\varphi(x)\in F^{\perp}." />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 - Réduction des endomorphismes symétriques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Réduction des endomorphismes symétriques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>
              <strong>Existence de spectre :</strong> <LatexRenderer latex="\varphi" inline /> possède au moins une
              valeur propre ; elles sont toutes réelles.
            </li>
            <li>
              <strong>Diagonalisation :</strong> <LatexRenderer latex="\varphi" inline /> est diagonalisable et les sous-espaces propres
              relatifs à des valeurs propres distinctes sont orthogonaux.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Section 5 - Formes quadratiques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Formes quadratiques et endomorphismes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Correspondance</h3>
            <p className="text-lg mb-4">
              À toute matrice symétrique <LatexRenderer latex="A\in\mathcal{M}_{n}(\mathbb{R})" inline /> on associe
              l'endomorphisme symétrique <LatexRenderer latex="\varphi" inline /> défini sur <LatexRenderer latex="\mathbb{R}^{n}" inline /> par
              <LatexRenderer latex="\varphi(x)=Ax" inline /> et la <strong>forme quadratique</strong> :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="q(x)=\langle x, \varphi(x)\rangle =\,^{\mathsf T}\!X\,A\,X" />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                (où <LatexRenderer latex="X" inline /> est le vecteur-colonne des coordonnées de <LatexRenderer latex="x" inline />)
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Signe de la forme</h3>
            <p className="text-lg mb-4">
              Avec <LatexRenderer latex="q" inline /> la forme liée à <LatexRenderer latex="\varphi" inline /> :
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <LatexRenderer latex="q(x)\ge0\;\forall x" />
                <span><LatexRenderer latex="\Longleftrightarrow" inline /></span>
                <span>toutes les valeurs propres de <LatexRenderer latex="\varphi" inline /> sont <LatexRenderer latex="\ge0" inline /></span>
              </div>
              <div className="flex items-center space-x-4">
                <LatexRenderer latex="q(x)\le0\;\forall x" />
                <span><LatexRenderer latex="\Longleftrightarrow" inline /></span>
                <span>toutes les valeurs propres de <LatexRenderer latex="\varphi" inline /> sont <LatexRenderer latex="\le0" inline /></span>
              </div>
              <div className="flex items-center space-x-4">
                <LatexRenderer latex="q(x)>0\;\forall x\neq0" />
                <span><LatexRenderer latex="\Longleftrightarrow" inline /></span>
                <span><LatexRenderer latex="\lambda_i>0" inline /> pour tout <LatexRenderer latex="\lambda_i" inline /></span>
              </div>
              <div className="flex items-center space-x-4">
                <LatexRenderer latex="q(x)<0\;\forall x\neq0" />
                <span><LatexRenderer latex="\Longleftrightarrow" inline /></span>
                <span><LatexRenderer latex="\lambda_i<0" inline /> pour tout <LatexRenderer latex="\lambda_i" inline /></span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 6 - Matrices orthogonales */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            6. Matrices orthogonales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Définition</h3>
            <p className="text-lg mb-4">
              Une matrice <LatexRenderer latex="\Omega\in\mathcal{M}_{n}(\mathbb{R})" inline /> est
              <strong>orthogonale</strong> si :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="{}^{\mathsf T}\!\Omega\,\Omega=I_{n}" />
              </div>
            </div>
            <p className="text-lg">
              Elle est alors inversible avec <LatexRenderer latex="\Omega^{-1}=\,^{\mathsf T}\!\Omega" inline />.
              Toute matrice de passage entre deux bases orthonormales est orthogonale.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 7 - Réduction des matrices symétriques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            7. Réduction des matrices symétriques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Toute matrice symétrique réelle est diagonalisable par orthogonalité :
              il existe <LatexRenderer latex="P" inline /> orthogonale et <LatexRenderer latex="D" inline /> diagonale réelles telles que :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="A=PDP^{\mathsf T}" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 8 - Applications */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            8. Applications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Projecteurs orthogonaux</h3>
            <p className="text-lg">
              Le projecteur <LatexRenderer latex="p" inline /> est orthogonal <LatexRenderer latex="\Longleftrightarrow" inline />
              <LatexRenderer latex="\operatorname{Im}p\perp\ker p" inline />.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Optimisation quadratique</h3>
            <p className="text-lg">
              Pour un sous-espace <LatexRenderer latex="F" inline /> et <LatexRenderer latex="a\in E" inline />, la projection orthogonale
              <LatexRenderer latex="p_{F}(a)" inline /> est l'unique vecteur <LatexRenderer latex="v\in F" inline /> minimisant la distance
              <LatexRenderer latex="\lVert a-u\rVert" inline /> sur <LatexRenderer latex="F" inline />.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">• Moindres carrés (rappel non exigible)</h3>
            <p className="text-lg">
              Pour <LatexRenderer latex="A\in\mathcal{M}_{m,p}(\mathbb{R})" inline /> de rang <LatexRenderer latex="p" inline /> et
              <LatexRenderer latex="B\in\mathcal{M}_{m,1}(\mathbb{R})" inline />, la minimisation
              <LatexRenderer latex="\min_{X}\lVert AX-B\rVert" inline /> admet une unique solution
              <LatexRenderer latex="X_{0}\in\mathcal{M}_{p,1}(\mathbb{R})" inline />, appelée
              <em>pseudo-solution</em> de <LatexRenderer latex="AX=B" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-reduction-matrices-symetriques-exercices">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre10ReductionMatricesSymetriquesCoursPage;
