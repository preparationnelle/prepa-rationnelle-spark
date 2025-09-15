import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool, Brain } from 'lucide-react';

const Chapitre2EndomorphismesMatricesAvanceesCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={2}
      chapterTitle="Éléments propres et réduction des endomorphismes et matrices carrées"
      description="Vecteurs propres, espaces propres, recherche d'éléments propres, propriétés générales et méthodes de réduction"
      slug="endomorphismes-matrices-avancees"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-endomorphismes-matrices-avancees-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-endomorphismes-matrices-avancees-flashcards">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-endomorphismes-matrices-avancees-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 — Changement de bases */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Changement de bases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — matrice d'une application linéaire</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soient <LatexRenderer latex="E,F" inline /> deux espaces vectoriels de dimension finie et <LatexRenderer latex="\mathcal{B}_E, \mathcal{B}_F" inline /> deux bases respectives de <LatexRenderer latex="E" inline /> et <LatexRenderer latex="F" inline />.
                </p>
                <p>
                  La matrice de <LatexRenderer latex="\varphi \in \mathcal{L}(E,F)" inline /> relativement aux bases <LatexRenderer latex="\mathcal{B}_E" inline /> et <LatexRenderer latex="\mathcal{B}_F" inline /> est la matrice de la famille <LatexRenderer latex="(\varphi(e_1),\dots,\varphi(e_p))" inline /> dans la base <LatexRenderer latex="\mathcal{B}_F" inline />.
                </p>
                <p>
                  On la note <LatexRenderer latex="\mathrm{Mat}_{\mathcal{B}_E,\mathcal{B}_F}(\varphi)" inline />.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — isomorphisme</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soient <LatexRenderer latex="E,F" inline /> deux espaces vectoriels de dimension finie (de dimensions <LatexRenderer latex="p" inline /> et <LatexRenderer latex="n" inline />), et <LatexRenderer latex="\mathcal{B}_E, \mathcal{B}_F" inline /> deux bases respectives.
                </p>
                <p>L'application</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\Phi : \mathcal{L}(E,F) \to \mathcal{M}_{n,p}(\mathbb{R}), \quad \varphi \mapsto \mathrm{Mat}_{\mathcal{B}_E,\mathcal{B}_F}(\varphi)" />
                </div>
                <p>est un isomorphisme d'espaces vectoriels.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — image d'un vecteur</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soient <LatexRenderer latex="E,F" inline /> deux espaces vectoriels de dimension finie, <LatexRenderer latex="\varphi \in \mathcal{L}(E,F)" inline />, <LatexRenderer latex="u \in E" inline />, et <LatexRenderer latex="U,V" inline /> les matrices colonnes des coordonnées respectives de <LatexRenderer latex="u" inline /> et <LatexRenderer latex="\varphi(u)" inline /> dans leurs bases.
                </p>
                <p>Alors :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="AU = V, \quad \text{où } A = \mathrm{Mat}_{\mathcal{B}_E,\mathcal{B}_F}(\varphi)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — produit matriciel et composition</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soient <LatexRenderer latex="E,F,G" inline /> trois espaces vectoriels de dimension finie et <LatexRenderer latex="\varphi \in \mathcal{L}(E,F)" inline />, <LatexRenderer latex="\psi \in \mathcal{L}(F,G)" inline />.
                </p>
                <p>Alors :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Mat}_{\mathcal{B}_E,\mathcal{B}_G}(\psi \circ \varphi) = \mathrm{Mat}_{\mathcal{B}_F,\mathcal{B}_G}(\psi) \cdot \mathrm{Mat}_{\mathcal{B}_E,\mathcal{B}_F}(\varphi)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Corollaire — inversibilité et isomorphisme</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soient <LatexRenderer latex="E,F" inline /> deux espaces vectoriels de dimension finie et <LatexRenderer latex="\varphi \in \mathcal{L}(E,F)" inline />.
                </p>
                <p>Les propriétés suivantes sont équivalentes :</p>
                <ul className="list-decimal list-inside mt-2 space-y-1">
                  <li><LatexRenderer latex="\varphi" inline /> est bijective.</li>
                  <li><LatexRenderer latex="\mathrm{Mat}_{\mathcal{B}_E,\mathcal{B}_F}(\varphi)" inline /> est inversible.</li>
                </ul>
                <p>Dans ce cas :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Mat}_{\mathcal{B}_F,\mathcal{B}_E}(\varphi^{-1}) = \left( \mathrm{Mat}_{\mathcal{B}_E,\mathcal{B}_F}(\varphi) \right)^{-1}" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 — Matrices de passage */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Matrices de passage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — matrices de passage</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soit <LatexRenderer latex="E" inline /> un espace vectoriel de dimension finie et <LatexRenderer latex="\mathcal{B}, \mathcal{C}" inline /> deux bases.
                </p>
                <p>
                  La matrice <LatexRenderer latex="\mathrm{Mat}_{\mathcal{B}}(\mathcal{C})" inline />, notée <LatexRenderer latex="P_{\mathcal{B}\leftarrow \mathcal{C}}" inline />, est la matrice de passage de la base <LatexRenderer latex="\mathcal{B}" inline /> à la base <LatexRenderer latex="\mathcal{C}" inline />.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Proposition — inversibilité</p>
              <div className="mt-2 space-y-2">
                <p>La matrice de passage <LatexRenderer latex="P_{\mathcal{B}\leftarrow \mathcal{C}}" inline /> est inversible et</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P_{\mathcal{B}\leftarrow \mathcal{C}}^{-1} = P_{\mathcal{C}\leftarrow \mathcal{B}}" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — changement de bases</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soit <LatexRenderer latex="\varphi \in \mathcal{L}(E)" inline /> avec <LatexRenderer latex="E" inline /> de dimension finie et <LatexRenderer latex="\mathcal{B}, \mathcal{C}" inline /> deux bases de <LatexRenderer latex="E" inline />. Alors
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Mat}_{\mathcal{C}}(\varphi) = P_{\mathcal{B}\leftarrow \mathcal{C}}^{-1} \cdot \mathrm{Mat}_{\mathcal{B}}(\varphi) \cdot P_{\mathcal{B}\leftarrow \mathcal{C}}" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Matrices semblables */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Matrices semblables
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — matrices semblables</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="A,B \in \mathcal{M}_n(\mathbb{R})" inline />.</p>
                <p>
                  On dit que <LatexRenderer latex="A" inline /> est semblable à <LatexRenderer latex="B" inline /> s'il existe une matrice inversible <LatexRenderer latex="P" inline /> telle que
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="B = P^{-1}AP" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Proposition — endomorphisme et similarité</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="A,B \in \mathcal{M}_n(\mathbb{R})" inline /> semblables.</p>
                <p>
                  Alors il existe un endomorphisme <LatexRenderer latex="\varphi \in \mathcal{L}(E)" inline /> et deux bases <LatexRenderer latex="\mathcal{B}, \mathcal{C}" inline /> de <LatexRenderer latex="E" inline /> telles que :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="A = \mathrm{Mat}_{\mathcal{B}}(\varphi), \quad B = \mathrm{Mat}_{\mathcal{C}}(\varphi)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Corollaire — invariance du rang</p>
              <div className="mt-2">
                <p>Si <LatexRenderer latex="A" inline /> et <LatexRenderer latex="B" inline /> sont semblables, alors ils ont le même rang.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 — Trace d'une matrice */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Trace d'une matrice
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — trace</p>
              <div className="mt-2 space-y-2">
                <p>Pour <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{R})" inline />, on définit la trace par</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Tr}(A) = \sum_{i=1}^n a_{i,i}" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Proposition — forme linéaire</p>
              <div className="mt-2 space-y-2">
                <p>L'application <LatexRenderer latex="\mathrm{Tr}: \mathcal{M}_n(\mathbb{R}) \to \mathbb{R}" inline /> est linéaire :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Tr}(A+B) = \mathrm{Tr}(A)+\mathrm{Tr}(B), \quad \mathrm{Tr}(\lambda A) = \lambda \mathrm{Tr}(A)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Proposition — trace et produit</p>
              <div className="mt-2 space-y-2">
                <p>Pour tous <LatexRenderer latex="A,B \in \mathcal{M}_n(\mathbb{R})" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Tr}(AB) = \mathrm{Tr}(BA)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Corollaire — invariance par similarité</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{R})" inline /> et <LatexRenderer latex="P" inline /> inversible. Alors :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Tr}(A) = \mathrm{Tr}(P^{-1}AP)" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5 — Espaces stables */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Espaces stables
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — espace stable</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="\varphi \in \mathcal{L}(E)" inline /> et <LatexRenderer latex="F \subset E" inline />.</p>
                <p>On dit que <LatexRenderer latex="F" inline /> est stable par <LatexRenderer latex="\varphi" inline /> si</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\forall u \in F, \quad \varphi(u) \in F" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation secondaire */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-approfondies-2e-annee">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-endomorphismes-matrices-avancees-exercices">
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

export default Chapitre2EndomorphismesMatricesAvanceesCoursPage;