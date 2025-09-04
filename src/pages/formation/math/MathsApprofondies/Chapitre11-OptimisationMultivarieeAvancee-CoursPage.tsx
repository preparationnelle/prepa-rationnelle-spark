import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

const Chapitre11OptimisationMultivarieeAvanceeCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={11}
      chapterTitle="Optimisation multivariée avancée"
      description="Fonctions de plusieurs variables, propriétés différentielles, recherche d'extrema, conditions d'ordre 1 et 2, contraintes linéaires et multiplicateurs de Lagrange"
      slug="optimisation-multivariee-avancee"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-optimisation-multivariee-avancee-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-optimisation-multivariee-avancee-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
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
          <CardTitle className="text-2xl font-bold text-blue-600">
            Fonctions de n variables : calcul différentiel d'ordre 2
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg">
              On considère une fonction <LatexRenderer latex="f" inline /> définie sur un <em>ouvert</em> <LatexRenderer latex="\Omega\subset\mathbb R^{n}" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 - Dérivées partielles d'ordre 2 */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Dérivées partielles d'ordre 2
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Pour <LatexRenderer latex="i,j\in\{1,\dots,n\}" inline />, si les dérivées partielles d'ordre 1 existent, on définit, sous réserve d'existence :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\partial^{\,2}_{i,j}f=\partial_{i}\bigl(\partial_{j}f\bigr)" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 2 - Fonction de classe C² */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Fonction de classe C²
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              <LatexRenderer latex="f" inline /> est dite de <strong>classe <LatexRenderer latex="\mathcal C^{2}" inline /></strong> sur <LatexRenderer latex="\Omega" inline /> lorsque toutes ses dérivées partielles d'ordre 2 sont continues sur <LatexRenderer latex="\Omega" inline />.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 - Théorème de Schwarz */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Théorème de Schwarz
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Si <LatexRenderer latex="f\in\mathcal C^{2}(\Omega)" inline />, alors :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\forall(i,j)\in\{1,\dots,n\}^{2},\quad \partial^{\,2}_{i,j}f=\partial^{\,2}_{j,i}f" />
              </div>
            </div>
            <p className="text-lg text-gray-700">
              <em>Les dérivées partielles croisées sont égales pour les fonctions de classe C².</em>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 4 - Hessienne */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. Hessienne
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Pour <LatexRenderer latex="a\in\Omega" inline /> et <LatexRenderer latex="f\in\mathcal C^{2}(\Omega)" inline />, la <strong>matrice hessienne</strong> est :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\nabla^{2}f(a)=\bigl(\partial^{\,2}_{i,j}f(a)\bigr)_{1\le i,j\le n}" />
            </div>
            <p className="text-lg mb-4">
              Elle est symétrique ; on note :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="q_{a}(u)=\langle\nabla^{2}f(a)u,u\rangle" />
            </div>
            <p className="text-lg">
              la forme quadratique associée.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 5 - Classe C² et opérations */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            5. Classe C² et opérations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>
              Toute fonction polynomiale en <LatexRenderer latex="n" inline /> variables appartient à <LatexRenderer latex="\mathcal C^{2}(\mathbb R^{n})" inline />.
            </li>
            <li>
              Les sommes, combinaisons linéaires, produits et quotients (lorsqu'ils sont définis) de fonctions <LatexRenderer latex="\mathcal C^{2}" inline /> restent <LatexRenderer latex="\mathcal C^{2}" inline />.
            </li>
            <li>
              Si <LatexRenderer latex="f\in\mathcal C^{2}(\Omega)" inline /> à valeurs dans <LatexRenderer latex="I\subset\mathbb R" inline /> et <LatexRenderer latex="\varphi\in\mathcal C^{2}(I)" inline />, alors <LatexRenderer latex="\varphi\circ f\in\mathcal C^{2}(\Omega)" inline />.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Section 6 - Dérivée seconde */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            6. Dérivée seconde de g : t ↦ f(a+tu)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Pour <LatexRenderer latex="a\in\Omega" inline /> et un vecteur <LatexRenderer latex="u" inline /> tel que <LatexRenderer latex="a+tu\in\Omega" inline />, la fonction <LatexRenderer latex="g(t)=f(a+tu)" inline /> est deux fois dérivable et :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="g''(t)=q_{a+tu}(u)" />
            </div>
            <p className="text-lg mb-4">
              En particulier :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="g''(0)=q_{a}(u)=\displaystyle\sum_{i=1}^{n}\sum_{j=1}^{n}u_{i}u_{j} \,\partial^{\,2}_{i,j}f(a)" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 7 - Développement limité d'ordre 2 */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            7. Développement limité d'ordre 2
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Pour <LatexRenderer latex="f\in\mathcal C^{2}(\Omega)" inline /> et <LatexRenderer latex="a\in\Omega" inline />, il existe une fonction <LatexRenderer latex="\varepsilon" inline /> continue sur un voisinage de <LatexRenderer latex="0" inline /> dans <LatexRenderer latex="\mathbb R^{n}" inline />, satisfaisant <LatexRenderer latex="\varepsilon(0)=0" inline />, telle que pour tout <LatexRenderer latex="h=(h_{1},\dots,h_{n})" inline /> avec <LatexRenderer latex="a+h\in\Omega" inline /> :
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="f(a+h)=f(a)+\langle\nabla f(a),h\rangle +\frac12\,q_{a}(h)+\|h\|^{2}\varepsilon(h)" />
              </div>
            </div>

            <p className="text-lg mb-4">
              Autrement dit :
            </p>

            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <div className="text-center">
                <LatexRenderer latex="f(a+h)=f(a)+\sum_{i=1}^{n}h_{i}\partial_{i}f(a)" />
              </div>
              <div className="text-center mt-2">
                <LatexRenderer latex="+\frac12\sum_{1\le i,j\le n}h_{i}h_{j}\partial^{\,2}_{i,j}f(a)" />
              </div>
              <div className="text-center mt-2">
                <LatexRenderer latex="+\bigl(\sum_{i=1}^{n}h_{i}^{2}\bigr)\varepsilon(h)" />
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
              <p className="text-base text-gray-700">
                <strong>Interprétation :</strong> Ce développement limité d'ordre 2 est fondamental pour l'étude des extrema des fonctions de plusieurs variables. Le terme d'ordre 2 implique la matrice hessienne et détermine la nature des points critiques.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 8 - Extrémum */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            8. Extrémum
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              <LatexRenderer latex="f" inline /> possède un <strong>maximum local</strong> en <LatexRenderer latex="a\in\Omega" inline /> s'il existe une boule ouverte <LatexRenderer latex="B_{a}" inline /> centrée en <LatexRenderer latex="a" inline /> telle que :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="f(x)\le f(a)\quad\forall x\in\Omega\cap B_{a}" />
            </div>
            <p className="text-lg mb-4">
              On parle de <strong>maximum global</strong> en <LatexRenderer latex="a" inline /> lorsque :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="f(x)\le f(a)\quad\forall x\in\Omega" />
            </div>
            <p className="text-lg">
              Les notions de minimum s'obtiennent en inversant l'inégalité. Le terme <em>extrémum</em> désigne indifféremment maximum ou minimum.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Section 9 - Extrémums et continuité */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            9. Extrémums et continuité
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Théorème de Weierstrass</h3>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-4">
              <p className="text-lg">
                Une fonction continue sur une partie compacte (fermée et bornée) admet un maximum global et un minimum global sur cette partie.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 10 - Point critique */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            10. Point critique
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Pour <LatexRenderer latex="f\in\mathcal C^{1}(\Omega)" inline />, un point <LatexRenderer latex="a\in\Omega" inline /> est <strong>critique</strong> lorsque son gradient s'annule :
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\nabla f(a)=0\;\Longleftrightarrow\; \forall i\in\{1,\dots,n\},\quad \partial_{i}f(a)=0" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 11 - Condition nécessaire d'extrémum */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            11. Condition nécessaire d'extrémum
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
              <p className="text-lg font-semibold">
                Si <LatexRenderer latex="f\in\mathcal C^{1}(\Omega)" inline /> présente un extrémum (local ou global) en <LatexRenderer latex="a\in\Omega" inline />, alors <LatexRenderer latex="a" inline /> est nécessairement un point critique.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Point selle (ou point col)</h4>
              <p className="text-base">
                Un point critique qui n'est pas un extrémum est appelé <em>point selle</em>.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 12 - Condition suffisante avec la forme quadratique */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            12. Condition suffisante avec la forme quadratique q<sub>a</sub>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Pour <LatexRenderer latex="f\in\mathcal C^{2}(\Omega)" inline /> et <LatexRenderer latex="a" inline /> point critique, posons :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="q_{a}(h)=\langle\nabla^{2}f(a)h,\,h\rangle" />
            </div>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                <LatexRenderer latex="q_{a}(h)>0" inline /> pour tout <LatexRenderer latex="h\neq0" inline /> <strong>⟹ minimum local</strong> en <LatexRenderer latex="a" inline />
              </li>
              <li>
                <LatexRenderer latex="q_{a}(h)<0" inline /> pour tout <LatexRenderer latex="h\neq0" inline /> <strong>⟹ maximum local</strong> en <LatexRenderer latex="a" inline />
              </li>
              <li>
                <LatexRenderer latex="q_{a}" inline /> change de signe <strong>⟹ pas d'extrémum</strong> en <LatexRenderer latex="a" inline />
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Section 13 - Condition suffisante via les valeurs propres */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            13. Condition suffisante via les valeurs propres de ∇²f(a)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <p className="text-lg">
                <strong>Toutes les valeurs propres strictement positives</strong> ⟹ <strong>minimum local</strong>
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <p className="text-lg">
                <strong>Toutes strictement négatives</strong> ⟹ <strong>maximum local</strong>
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-lg">
                <strong>Au moins une valeur propre positive ET une négative</strong> ⟹ <strong>point selle</strong>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 14 - Extrémums sous contrainte linéaire */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            14. Extrémums sous contrainte linéaire
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-lg mb-4">
              Soit <LatexRenderer latex="f" inline /> définie sur <LatexRenderer latex="\Omega" inline /> et <LatexRenderer latex="\mathcal C" inline /> l'ensemble des solutions :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\begin{cases} a_{1,1}x_{1}+\dots+a_{1,n}x_{n}=b_{1}\\ \vdots\\ a_{p,1}x_{1}+\dots+a_{p,n}x_{n}=b_{p} \end{cases}" />
            </div>
            <p className="text-lg mb-4">
              avec coefficients réels <LatexRenderer latex="a_{i,j},b_{i}" inline />. On cherche les extrémums de la restriction <LatexRenderer latex="f\vert_{\Omega\cap\mathcal C}" inline />.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-4 mt-6">Condition critique sous contrainte</h4>
            <p className="text-lg mb-4">
              Si <LatexRenderer latex="f\in\mathcal C^{1}(\Omega)" inline /> admet un extrémum en <LatexRenderer latex="a\in\mathcal C" inline />, alors :
            </p>
            <div className="text-center py-4">
              <LatexRenderer latex="\nabla f(a)\;\perp\;H,\qquad H=\mathrm{Vect}\bigl(\nabla g_{1}(a),\dots,\nabla g_{p}(a)\bigr)" />
            </div>
            <p className="text-lg mb-4">
              où chaque <LatexRenderer latex="g_{i}(x)=a_{i,1}x_{1}+\dots+a_{i,n}x_{n}-b_{i}" inline />.
            </p>
            <p className="text-lg mb-4">
              Il existe donc des réels <LatexRenderer latex="\lambda_{1},\dots,\lambda_{p}" inline /> tels que :
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 my-4">
              <div className="text-center">
                <LatexRenderer latex="\nabla f(a)=\sum_{i=1}^{p}\lambda_{i}\,\nabla g_{i}(a)" />
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">
                <strong>Multiplicateurs de Lagrange</strong>
              </p>
            </div>
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
            <Link to="/formation/maths-optimisation-multivariee-avancee-exercices">
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

export default Chapitre11OptimisationMultivarieeAvanceeCoursPage;
