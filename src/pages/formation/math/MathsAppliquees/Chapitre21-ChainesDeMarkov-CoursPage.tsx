import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { Target, PenTool } from 'lucide-react';

const Chapitre21ChainesDeMarkovCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={21}
      chapterTitle="Les chaînes de Markov"
      description="Théorie approfondie et applications pratiques [[memory:6842989]]"
      slug="chaines-de-markov"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-chaines-de-markov-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-chaines-de-markov-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 — Définitions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Définitions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Chaîne de Markov</p>
              <div className="mt-2 space-y-2">
                <p>
                  Une suite <LatexRenderer latex="(X_n)_{n\in\mathbb{N}}" block={false} /> de v.a. à valeurs dans un ensemble <LatexRenderer latex="E" block={false} /> est une <strong>chaîne de Markov</strong> si :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="P(X_{n+1}=e_{n+1}\mid X_n=e_n,\dots,X_0=e_0) = P(X_{n+1}=e_{n+1}\mid X_n=e_n)" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Graphe probabiliste associé</p>
              <div className="mt-2 space-y-2">
                <p>À une chaîne de Markov, on associe un graphe orienté pondéré où :</p>
                <ul className="space-y-1 ml-4">
                  <li>• sommets = états de la chaîne</li>
                  <li>• arcs pondérés = probabilités de passage d'un état à un autre</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Types de chaînes</p>
              <div className="mt-2 space-y-2">
                <p>On dit que <LatexRenderer latex="(X_n)" block={false} /> est :</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>homogène</strong> : les probabilités de transition ne dépendent pas de <LatexRenderer latex="n" block={false} /></li>
                  <li>• à <strong>espace d'états fini</strong> : <LatexRenderer latex="E=\{1,\dots,p\}" block={false} /></li>
                  <li>• <strong>irréductible</strong> : il existe toujours un chemin entre deux états</li>
                </ul>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 2 — Matrice de transition */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Matrice de transition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Vecteur et matrice stochastiques</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• Un vecteur <LatexRenderer latex="U\in\mathcal{M}_{1,p}(\mathbb{R})" block={false} /> est <strong>stochastique</strong> si <LatexRenderer latex="U_i\geq 0" block={false} /> et <LatexRenderer latex="\sum U_i=1" block={false} /></li>
                  <li>• Une matrice <LatexRenderer latex="A\in \mathcal{M}_p(\mathbb{R})" block={false} /> est <strong>stochastique par ligne</strong> si <LatexRenderer latex="a_{ij}\geq 0" block={false} /> et la somme des coefficients de chaque ligne vaut <LatexRenderer latex="1" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété</p>
              <div className="mt-2 space-y-2">
                <p>
                  Si <LatexRenderer latex="A" block={false} /> est stochastique par ligne, alors <LatexRenderer latex="1" block={false} /> est valeur propre de <LatexRenderer latex="A" block={false} />.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Chaîne de Markov</p>
              <div className="mt-2 space-y-2">
                <ol className="space-y-1 ml-4">
                  <li>1. Le <LatexRenderer latex="n" block={false} />-ième état probabiliste <LatexRenderer latex="U_n" block={false} /> est un vecteur-ligne stochastique.</li>
                  <li>2. La matrice de transition <LatexRenderer latex="A" block={false} /> est stochastique par ligne.</li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Graphe associé à A</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soit <LatexRenderer latex="A=(a_{ij})" block={false} /> stochastique. On associe à <LatexRenderer latex="A" block={false} /> le graphe orienté pondéré où l'arc <LatexRenderer latex="(i\to j)" block={false} /> a pour poids <LatexRenderer latex="a_{ij}" block={false} />.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Loi d'une chaîne de Markov</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soit <LatexRenderer latex="A" block={false} /> la matrice de transition et <LatexRenderer latex="U_n" block={false} /> le vecteur-ligne au rang <LatexRenderer latex="n" block={false} />.
                </p>
                <p>Alors :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="U_{n+1} = U_n A \quad \text{et donc par récurrence} \quad U_n = U_0 A^n" />
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 3 — Comportement limite */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Comportement limite
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Loi stationnaire</p>
              <div className="mt-2 space-y-2">
                <p>
                  Un vecteur-ligne stochastique <LatexRenderer latex="U" block={false} /> est dit <strong>stationnaire</strong> pour <LatexRenderer latex="A" block={false} /> si
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="UA = U" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — État stable</p>
              <div className="mt-2 space-y-2">
                <p>Soit <LatexRenderer latex="A" block={false} /> la matrice de transition.</p>
                <ol className="space-y-2 ml-4">
                  <li>1. Un état stable <LatexRenderer latex="U" block={false} /> est un vecteur propre de <LatexRenderer latex="A^T" block={false} /> associé à la valeur propre <LatexRenderer latex="1" block={false} />.</li>
                  <li>2. La loi limite, si elle existe, est un état stable :
                    <div className="text-center py-2 mt-2">
                      <LatexRenderer latex="\lim_{n\to+\infty} U_n = U" />
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Interprétation :</p>
              <p>
                Une chaîne de Markov modélise un processus aléatoire où l'état futur ne dépend que de l'état présent (propriété de Markov). 
                Le comportement limite nous indique vers quelle distribution de probabilité la chaîne converge à long terme.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Applications :</p>
              <ul className="space-y-1 ml-4">
                <li>• Modélisation de phénomènes économiques</li>
                <li>• Analyse de réseaux sociaux</li>
                <li>• Algorithmes de recherche (PageRank)</li>
                <li>• Biologie des populations</li>
                <li>• Files d'attente</li>
              </ul>
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
            <Link to="/formation/maths-chaines-de-markov-exercices">
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

export default Chapitre21ChainesDeMarkovCoursPage;