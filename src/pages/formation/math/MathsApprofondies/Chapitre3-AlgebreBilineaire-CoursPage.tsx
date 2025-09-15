import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool, Brain } from 'lucide-react';

const Chapitre3AlgebreBilineaireCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={3}
      chapterTitle="Algèbre bilinéaire"
      description="Produit scalaire et espaces euclidiens : définitions, norme associée, inégalités classiques, orthogonalité et orthonormalisation"
      slug="algebre-bilineaire"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-algebre-bilineaire-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-algebre-bilineaire-flashcards">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
            <Link to="/formation/maths-algebre-bilineaire-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 — Produit scalaire et norme euclidienne */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Produit scalaire et norme euclidienne
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Produit scalaire</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — produit scalaire</p>
              <div className="mt-2 space-y-2">
                <p>Un produit scalaire sur <LatexRenderer latex="E" inline /> est une application <LatexRenderer latex="\varphi : E \times E \to \mathbb{R}" inline /> bilinéaire, symétrique et définie positive :</p>
                <div className="space-y-1">
                  <div><LatexRenderer latex="\varphi(x+\lambda x',y) = \varphi(x,y) + \lambda \varphi(x',y)" /></div>
                  <div><LatexRenderer latex="\varphi(x,y) = \varphi(y,x)" /></div>
                  <div><LatexRenderer latex="\varphi(x,x) \geq 0, \quad \varphi(x,x)=0 \iff x=0" /></div>
                </div>
                <p>On note <LatexRenderer latex="\langle x,y \rangle" inline /> ou <LatexRenderer latex="(x|y)" inline />.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Norme associée</h3>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — norme associée à un produit scalaire</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="(E,\langle \cdot,\cdot \rangle)" inline /> est un espace préhilbertien réel, on définit :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\|x\| = \sqrt{\langle x,x \rangle}" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>Pour tout <LatexRenderer latex="x \in E" inline />, <LatexRenderer latex="\|x\|\geq 0" inline /> et <LatexRenderer latex="\|x\|=0 \iff x=0" inline />.</p>
                <p>Pour tout <LatexRenderer latex="\lambda \in \mathbb{R}" inline /> et <LatexRenderer latex="x \in E" inline />, <LatexRenderer latex="\|\lambda x\| = |\lambda| \cdot \|x\|" inline />.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Identités remarquables</p>
              <div className="mt-2 space-y-2">
                <p>Pour tous <LatexRenderer latex="x,y \in E" inline /> :</p>
                <div className="space-y-2">
                  <div><LatexRenderer latex="\|x+y\|^2 = \|x\|^2 + 2\langle x,y\rangle + \|y\|^2" /></div>
                  <div><LatexRenderer latex="\langle x,y \rangle = \tfrac{1}{4}(\|x+y\|^2 - \|x-y\|^2)" /></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 — Inégalités classiques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Inégalités classiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Cauchy–Schwarz</p>
              <div className="mt-2 space-y-2">
                <p>Pour tous <LatexRenderer latex="x,y \in E" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="|\langle x,y \rangle| \leq \|x\| \cdot \|y\|" />
                </div>
                <p>Avec égalité si et seulement si <LatexRenderer latex="x,y" inline /> sont colinéaires.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Inégalité triangulaire</p>
              <div className="mt-2 space-y-2">
                <p>Pour tous <LatexRenderer latex="x,y \in E" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\|x+y\| \leq \|x\| + \|y\|" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Deuxième inégalité triangulaire</p>
              <div className="mt-2 space-y-2">
                <p>Pour tous <LatexRenderer latex="x,y \in E" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="|\|x\|-\|y\|| \leq \|x+y\|" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Pythagore</p>
              <div className="mt-2">
                <div className="text-center py-2">
                  <LatexRenderer latex="x \perp y \iff \|x+y\|^2 = \|x\|^2 + \|y\|^2" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Orthogonalité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Orthogonalité
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — sous-espaces orthogonaux</p>
              <div className="mt-2 space-y-2">
                <p>Deux sous-espaces <LatexRenderer latex="F,G \subset E" inline /> sont orthogonaux si :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\forall (x,y) \in F \times G,\ \langle x,y \rangle = 0" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2">
                <p>Si <LatexRenderer latex="F \perp G" inline />, alors <LatexRenderer latex="F \cap G = \{0\}" inline /> et donc <LatexRenderer latex="F \oplus G" inline /> est une somme directe.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 — Familles orthogonales et orthonormales */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Familles orthogonales et orthonormales
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition</p>
              <div className="mt-2 space-y-2">
                <p>Une famille <LatexRenderer latex="(x_1,\dots,x_k)" inline /> est dite :</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>orthogonale</strong> si <LatexRenderer latex="\langle x_i,x_j \rangle = 0" inline /> pour <LatexRenderer latex="i \neq j" inline />,</li>
                  <li><strong>orthonormale</strong> si elle est orthogonale et <LatexRenderer latex="\|x_i\|=1" inline /> pour tout <LatexRenderer latex="i" inline />.</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Pythagore généralisé</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="(x_1,\dots,x_k)" inline /> est une famille orthogonale de <LatexRenderer latex="E" inline />, alors :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\left\|\sum_{i=1}^k x_i \right\|^2 = \sum_{i=1}^k \|x_i\|^2" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2">
                <p>Toute famille orthogonale de vecteurs non nuls est libre.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 5 — Procédé d'orthonormalisation */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Procédé d'orthonormalisation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Orthonormalisation de Gram–Schmidt</p>
              <div className="mt-2 space-y-2">
                <p>Soit <LatexRenderer latex="(x_1,\dots,x_n)" inline /> une famille libre de <LatexRenderer latex="E" inline />.</p>
                <p>On peut construire par récurrence une famille orthonormale <LatexRenderer latex="(e_1,\dots,e_n)" inline /> telle que pour tout <LatexRenderer latex="k" inline /> :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\mathrm{Vect}(e_1,\dots,e_k) = \mathrm{Vect}(x_1,\dots,x_k)" />
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
            <Link to="/formation/maths-algebre-bilineaire-exercices">
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

export default Chapitre3AlgebreBilineaireCoursPage;
