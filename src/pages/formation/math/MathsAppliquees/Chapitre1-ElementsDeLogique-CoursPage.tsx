import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool } from 'lucide-react';

const Chapitre1ElementsDeLogiqueCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={1}
      chapterTitle="Éléments de logique"
      description="Concepts fondamentaux et démonstrations rigoureuses [[memory:6842989]]"
      slug="elements-de-logique"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-elements-de-logique-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-elements-de-logique-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Propositions et opérations logiques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Propositions et opérations logiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Proposition</p>
              <div className="mt-2 space-y-2">
                <p>
                  Une <strong>proposition</strong> est une affirmation concernant des objets mathématiques dont on peut décider sans ambiguïté si elle est vraie ou fausse.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Exemples :</p>
              <ul className="space-y-1 ml-4">
                <li>• « <LatexRenderer latex="2 + 3 = 5" block={false} /> » est une proposition vraie</li>
                <li>• « <LatexRenderer latex="\pi > 4" block={false} /> » est une proposition fausse</li>
                <li>• « <LatexRenderer latex="x + 1 = 3" block={false} /> » n'est pas une proposition (dépend de <LatexRenderer latex="x" block={false} />)</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Négation</p>
              <div className="mt-2 space-y-2">
                <p>
                  Pour une proposition <LatexRenderer latex="P" block={false} />, on note <LatexRenderer latex="\neg P" block={false} /> la <strong>négation</strong> de <LatexRenderer latex="P" block={false} />, qui est vraie quand <LatexRenderer latex="P" block={false} /> est fausse, et fausse quand <LatexRenderer latex="P" block={false} /> est vraie.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Opérations logiques</p>
              <div className="mt-2 space-y-2">
                <p>Soient <LatexRenderer latex="P" block={false} /> et <LatexRenderer latex="Q" block={false} /> deux propositions :</p>
                <ul className="space-y-1 ml-4">
                  <li>• <LatexRenderer latex="P \wedge Q" block={false} /> : <strong>conjonction</strong> ("P et Q")</li>
                  <li>• <LatexRenderer latex="P \vee Q" block={false} /> : <strong>disjonction</strong> ("P ou Q")</li>
                  <li>• <LatexRenderer latex="P \Rightarrow Q" block={false} /> : <strong>implication</strong> ("P implique Q")</li>
                  <li>• <LatexRenderer latex="P \Leftrightarrow Q" block={false} /> : <strong>équivalence</strong> ("P équivaut à Q")</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Table de vérité des connecteurs</p>
              <div className="mt-2">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-blue-300">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-300 p-2"><LatexRenderer latex="P" block={false} /></th>
                        <th className="border border-blue-300 p-2"><LatexRenderer latex="Q" block={false} /></th>
                        <th className="border border-blue-300 p-2"><LatexRenderer latex="\neg P" block={false} /></th>
                        <th className="border border-blue-300 p-2"><LatexRenderer latex="P \wedge Q" block={false} /></th>
                        <th className="border border-blue-300 p-2"><LatexRenderer latex="P \vee Q" block={false} /></th>
                        <th className="border border-blue-300 p-2"><LatexRenderer latex="P \Rightarrow Q" block={false} /></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                      </tr>
                      <tr className="bg-blue-25">
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                      </tr>
                      <tr className="bg-blue-25">
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">F</td>
                        <td className="border border-blue-300 p-2 text-center">V</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 2: Quantificateurs */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Quantificateurs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Quantificateurs</p>
              <div className="mt-2 space-y-2">
                <p>Soit <LatexRenderer latex="P(x)" block={false} /> une propriété dépendant d'une variable <LatexRenderer latex="x" block={false} /> dans un ensemble <LatexRenderer latex="E" block={false} /> :</p>
                <ul className="space-y-2 ml-4">
                  <li>• <LatexRenderer latex="\forall x \in E, P(x)" block={false} /> : <strong>quantificateur universel</strong><br />
                    "Pour tout <LatexRenderer latex="x" block={false} /> de <LatexRenderer latex="E" block={false} />, <LatexRenderer latex="P(x)" block={false} /> est vraie"</li>
                  <li>• <LatexRenderer latex="\exists x \in E, P(x)" block={false} /> : <strong>quantificateur existentiel</strong><br />
                    "Il existe au moins un <LatexRenderer latex="x" block={false} /> dans <LatexRenderer latex="E" block={false} /> tel que <LatexRenderer latex="P(x)" block={false} /> soit vraie"</li>
                  <li>• <LatexRenderer latex="\exists! x \in E, P(x)" block={false} /> : <strong>quantificateur d'unicité</strong><br />
                    "Il existe un unique <LatexRenderer latex="x" block={false} /> dans <LatexRenderer latex="E" block={false} /> tel que <LatexRenderer latex="P(x)" block={false} /> soit vraie"</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Négation des quantificateurs</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• <LatexRenderer latex="\neg (\forall x \in E, P(x)) \Leftrightarrow \exists x \in E, \neg P(x)" block={false} /></li>
                  <li>• <LatexRenderer latex="\neg (\exists x \in E, P(x)) \Leftrightarrow \forall x \in E, \neg P(x)" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Exemples :</p>
              <ul className="space-y-2 ml-4">
                <li>• <LatexRenderer latex="\forall n \in \mathbb{N}, n^2 \geq 0" block={false} /> (vraie)</li>
                <li>• <LatexRenderer latex="\exists x \in \mathbb{R}, x^2 = 2" block={false} /> (vraie, <LatexRenderer latex="x = \pm\sqrt{2}" block={false} />)</li>
                <li>• <LatexRenderer latex="\exists! x \in \mathbb{R}, x^3 = 8" block={false} /> (vraie, <LatexRenderer latex="x = 2" block={false} />)</li>
              </ul>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 3: Méthodes de démonstration */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Méthodes de démonstration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Démonstration directe</p>
              <div className="mt-2 space-y-2">
                <p>
                  Pour démontrer <LatexRenderer latex="P \Rightarrow Q" block={false} />, on suppose <LatexRenderer latex="P" block={false} /> vraie et on établit que <LatexRenderer latex="Q" block={false} /> est vraie.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Démonstration par contraposée</p>
              <div className="mt-2 space-y-2">
                <p>
                  Pour démontrer <LatexRenderer latex="P \Rightarrow Q" block={false} />, on démontre la contraposée <LatexRenderer latex="\neg Q \Rightarrow \neg P" block={false} />.
                </p>
                <p className="text-sm text-blue-700">
                  Principe : <LatexRenderer latex="(P \Rightarrow Q) \Leftrightarrow (\neg Q \Rightarrow \neg P)" block={false} />
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Démonstration par l'absurde</p>
              <div className="mt-2 space-y-2">
                <p>
                  Pour démontrer une proposition <LatexRenderer latex="P" block={false} />, on suppose <LatexRenderer latex="\neg P" block={false} /> et on aboutit à une contradiction.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Démonstration par récurrence</p>
              <div className="mt-2 space-y-2">
                <p>
                  Pour démontrer qu'une propriété <LatexRenderer latex="P(n)" block={false} /> est vraie pour tout <LatexRenderer latex="n \geq n_0" block={false} /> :
                </p>
                <ol className="space-y-1 ml-4">
                  <li><strong>Initialisation :</strong> Vérifier <LatexRenderer latex="P(n_0)" block={false} /></li>
                  <li><strong>Hérédité :</strong> Montrer <LatexRenderer latex="\forall k \geq n_0, P(k) \Rightarrow P(k+1)" block={false} /></li>
                  <li><strong>Conclusion :</strong> <LatexRenderer latex="\forall n \geq n_0, P(n)" block={false} /></li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Disjonction de cas</p>
              <div className="mt-2 space-y-2">
                <p>
                  Si <LatexRenderer latex="P_1 \vee P_2 \vee \ldots \vee P_n" block={false} /> est vraie et que l'on a :
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• <LatexRenderer latex="P_1 \Rightarrow Q" block={false} /></li>
                  <li>• <LatexRenderer latex="P_2 \Rightarrow Q" block={false} /></li>
                  <li>• <LatexRenderer latex="\vdots" block={false} /></li>
                  <li>• <LatexRenderer latex="P_n \Rightarrow Q" block={false} /></li>
                </ul>
                <p>Alors <LatexRenderer latex="Q" block={false} /> est vraie.</p>
              </div>
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
            <Link to="/formation/maths-elements-de-logique-exercices">
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

export default Chapitre1ElementsDeLogiqueCoursPage;
