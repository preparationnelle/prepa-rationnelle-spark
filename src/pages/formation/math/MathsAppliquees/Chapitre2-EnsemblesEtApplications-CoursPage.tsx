import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool } from 'lucide-react';

const Chapitre2EnsemblesEtApplicationsCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={2}
      chapterTitle="Ensembles et applications"
      description="Concepts fondamentaux et démonstrations rigoureuses [[memory:6842989]]"
      slug="ensembles-et-applications"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-ensembles-et-applications-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-ensembles-et-applications-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Ensembles */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Ensembles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Ensemble</p>
              <div className="mt-2 space-y-2">
                <p>
                  Un <strong>ensemble</strong> est une collection d'objets appelés <strong>éléments</strong>. 
                  On note <LatexRenderer latex="x \in E" block={false} /> si <LatexRenderer latex="x" block={false} /> est élément de <LatexRenderer latex="E" block={false} />, 
                  et <LatexRenderer latex="x \notin E" block={false} /> sinon.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Modes de définition d'un ensemble</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• <strong>En extension :</strong> <LatexRenderer latex="E = \{1, 2, 3, 5, 7\}" block={false} /></li>
                  <li>• <strong>En compréhension :</strong> <LatexRenderer latex="E = \{x \in \mathbb{N} : x \text{ est premier et } x \leq 7\}" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Opérations sur les ensembles</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="A" block={false} /> et <LatexRenderer latex="B" block={false} /> deux ensembles :</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Union :</strong> <LatexRenderer latex="A \cup B = \{x : x \in A \text{ ou } x \in B\}" block={false} /></li>
                  <li>• <strong>Intersection :</strong> <LatexRenderer latex="A \cap B = \{x : x \in A \text{ et } x \in B\}" block={false} /></li>
                  <li>• <strong>Différence :</strong> <LatexRenderer latex="A \setminus B = \{x : x \in A \text{ et } x \notin B\}" block={false} /></li>
                  <li>• <strong>Complémentaire :</strong> <LatexRenderer latex="A^c = \{x \in E : x \notin A\}" block={false} /> (dans un ensemble de référence <LatexRenderer latex="E" block={false} />)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriétés — Lois de De Morgan</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-1 ml-4">
                  <li>• <LatexRenderer latex="(A \cup B)^c = A^c \cap B^c" block={false} /></li>
                  <li>• <LatexRenderer latex="(A \cap B)^c = A^c \cup B^c" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Produit cartésien</p>
              <div className="mt-2 space-y-2">
                <p>
                  Le <strong>produit cartésien</strong> de deux ensembles <LatexRenderer latex="A" block={false} /> et <LatexRenderer latex="B" block={false} /> est :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="A \times B = \{(a,b) : a \in A \text{ et } b \in B\}" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Ensembles usuels :</p>
              <ul className="space-y-1 ml-4">
                <li>• <LatexRenderer latex="\mathbb{N}" block={false} /> : entiers naturels (0, 1, 2, ...)</li>
                <li>• <LatexRenderer latex="\mathbb{Z}" block={false} /> : entiers relatifs (..., -1, 0, 1, ...)</li>
                <li>• <LatexRenderer latex="\mathbb{Q}" block={false} /> : nombres rationnels</li>
                <li>• <LatexRenderer latex="\mathbb{R}" block={false} /> : nombres réels</li>
                <li>• <LatexRenderer latex="\emptyset" block={false} /> : ensemble vide</li>
              </ul>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 2: Applications */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Applications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Application</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soient <LatexRenderer latex="E" block={false} /> et <LatexRenderer latex="F" block={false} /> deux ensembles. 
                  Une <strong>application</strong> <LatexRenderer latex="f : E \to F" block={false} /> associe à chaque élément <LatexRenderer latex="x \in E" block={false} /> 
                  un unique élément <LatexRenderer latex="f(x) \in F" block={false} />.
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• <LatexRenderer latex="E" block={false} /> : <strong>ensemble de départ</strong> (ou domaine)</li>
                  <li>• <LatexRenderer latex="F" block={false} /> : <strong>ensemble d'arrivée</strong> (ou codomaine)</li>
                  <li>• <LatexRenderer latex="f(x)" block={false} /> : <strong>image</strong> de <LatexRenderer latex="x" block={false} /> par <LatexRenderer latex="f" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Image directe et image réciproque</p>
              <div className="mt-2 space-y-2">
                <p>Soit <LatexRenderer latex="f : E \to F" block={false} /> une application :</p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Image directe</strong> d'une partie <LatexRenderer latex="A \subseteq E" block={false} /> :<br />
                    <LatexRenderer latex="f(A) = \{f(x) : x \in A\}" block={false} /></li>
                  <li>• <strong>Image réciproque</strong> d'une partie <LatexRenderer latex="B \subseteq F" block={false} /> :<br />
                    <LatexRenderer latex="f^{-1}(B) = \{x \in E : f(x) \in B\}" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Application injective</p>
              <div className="mt-2 space-y-2">
                <p>
                  Une application <LatexRenderer latex="f : E \to F" block={false} /> est <strong>injective</strong> si :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\forall (x,y) \in E^2, f(x) = f(y) \Rightarrow x = y" />
                </div>
                <p className="text-sm text-blue-700">
                  Équivalent : <LatexRenderer latex="\forall (x,y) \in E^2, x \neq y \Rightarrow f(x) \neq f(y)" block={false} />
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Application surjective</p>
              <div className="mt-2 space-y-2">
                <p>
                  Une application <LatexRenderer latex="f : E \to F" block={false} /> est <strong>surjective</strong> si :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\forall y \in F, \exists x \in E : f(x) = y" />
                </div>
                <p className="text-sm text-blue-700">
                  Équivalent : <LatexRenderer latex="f(E) = F" block={false} />
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Application bijective</p>
              <div className="mt-2 space-y-2">
                <p>
                  Une application <LatexRenderer latex="f : E \to F" block={false} /> est <strong>bijective</strong> si elle est à la fois injective et surjective.
                </p>
                <p>
                  Dans ce cas, il existe une unique application <LatexRenderer latex="f^{-1} : F \to E" block={false} /> appelée <strong>application réciproque</strong> 
                  telle que <LatexRenderer latex="f^{-1} \circ f = \text{id}_E" block={false} /> et <LatexRenderer latex="f \circ f^{-1} = \text{id}_F" block={false} />.
                </p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 3: Composition et relations */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Composition et relations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Composition d'applications</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soient <LatexRenderer latex="f : E \to F" block={false} /> et <LatexRenderer latex="g : F \to G" block={false} />. 
                  La <strong>composée</strong> <LatexRenderer latex="g \circ f : E \to G" block={false} /> est définie par :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="(g \circ f)(x) = g(f(x)), \quad \forall x \in E" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriétés de la composition</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Associativité :</strong> <LatexRenderer latex="h \circ (g \circ f) = (h \circ g) \circ f" block={false} /></li>
                  <li>• Si <LatexRenderer latex="f" block={false} /> et <LatexRenderer latex="g" block={false} /> sont injectives, alors <LatexRenderer latex="g \circ f" block={false} /> est injective</li>
                  <li>• Si <LatexRenderer latex="f" block={false} /> et <LatexRenderer latex="g" block={false} /> sont surjectives, alors <LatexRenderer latex="g \circ f" block={false} /> est surjective</li>
                  <li>• Si <LatexRenderer latex="f" block={false} /> et <LatexRenderer latex="g" block={false} /> sont bijectives, alors <LatexRenderer latex="g \circ f" block={false} /> est bijective et <LatexRenderer latex="(g \circ f)^{-1} = f^{-1} \circ g^{-1}" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Relation d'équivalence</p>
              <div className="mt-2 space-y-2">
                <p>
                  Une relation <LatexRenderer latex="\mathcal{R}" block={false} /> sur un ensemble <LatexRenderer latex="E" block={false} /> est une <strong>relation d'équivalence</strong> si elle est :
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Réflexive :</strong> <LatexRenderer latex="\forall x \in E, x \mathcal{R} x" block={false} /></li>
                  <li>• <strong>Symétrique :</strong> <LatexRenderer latex="\forall (x,y) \in E^2, x \mathcal{R} y \Rightarrow y \mathcal{R} x" block={false} /></li>
                  <li>• <strong>Transitive :</strong> <LatexRenderer latex="\forall (x,y,z) \in E^3, (x \mathcal{R} y \text{ et } y \mathcal{R} z) \Rightarrow x \mathcal{R} z" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Classes d'équivalence</p>
              <div className="mt-2 space-y-2">
                <p>
                  Si <LatexRenderer latex="\mathcal{R}" block={false} /> est une relation d'équivalence sur <LatexRenderer latex="E" block={false} />, 
                  la <strong>classe d'équivalence</strong> de <LatexRenderer latex="x \in E" block={false} /> est :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\overline{x} = \{y \in E : y \mathcal{R} x\}" />
                </div>
                <p>
                  L'ensemble des classes d'équivalence forme une <strong>partition</strong> de <LatexRenderer latex="E" block={false} />, 
                  notée <LatexRenderer latex="E/\mathcal{R}" block={false} /> (ensemble quotient).
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Exemple — Congruence modulo n :</p>
              <p>
                Sur <LatexRenderer latex="\mathbb{Z}" block={false} />, la relation <LatexRenderer latex="a \equiv b \pmod{n}" block={false} /> 
                (si <LatexRenderer latex="n" block={false} /> divise <LatexRenderer latex="a-b" block={false} />) est une relation d'équivalence.
                Les classes d'équivalence sont <LatexRenderer latex="\overline{0}, \overline{1}, \ldots, \overline{n-1}" block={false} />.
              </p>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Navigation secondaire */}
      <Card className="border-0 shadow-lg bg-gray-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-appliquees">
              <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-ensembles-et-applications-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
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

export default Chapitre2EnsemblesEtApplicationsCoursPage;
