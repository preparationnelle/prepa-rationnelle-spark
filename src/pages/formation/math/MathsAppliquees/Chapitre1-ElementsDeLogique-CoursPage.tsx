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
      nextChapter={{
        slug: "ensembles-et-applications",
        title: "Ensembles et applications"
      }}
    >
      {/* Navigation vers les ressources */}


      {/* Section 1: Propositions et opérations logiques */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Propositions et opérations logiques
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">

            <div className="bg-slate-50 border-l-2 border-slate-300 p-4 rounded-r-md">
              <span className="font-semibold text-slate-900 block mb-2">Définition — Proposition</span>
              <div className="text-slate-700">
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

            <div className="bg-slate-50 border-l-2 border-slate-300 p-4 rounded-r-md">
              <span className="font-semibold text-slate-900 block mb-2">Définition — Négation</span>
              <div className="text-slate-700">
                <p>
                  Pour une proposition <LatexRenderer latex="P" block={false} />, on note <LatexRenderer latex="\neg P" block={false} /> la <strong>négation</strong> de <LatexRenderer latex="P" block={false} />, qui est vraie quand <LatexRenderer latex="P" block={false} /> est fausse, et fausse quand <LatexRenderer latex="P" block={false} /> est vraie.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border-l-2 border-slate-300 p-4 rounded-r-md">
              <span className="font-semibold text-slate-900 block mb-2">Définition — Opérations logiques</span>
              <div className="text-slate-700">
                <p className="mb-2">Soient <LatexRenderer latex="P" block={false} /> et <LatexRenderer latex="Q" block={false} /> deux propositions :</p>
                <ul className="space-y-1 ml-4 list-disc marker:text-slate-400">
                  <li><LatexRenderer latex="P \wedge Q" block={false} /> : <strong>conjonction</strong> ("P et Q")</li>
                  <li><LatexRenderer latex="P \vee Q" block={false} /> : <strong>disjonction</strong> ("P ou Q")</li>
                  <li><LatexRenderer latex="P \Rightarrow Q" block={false} /> : <strong>implication</strong> ("P implique Q")</li>
                  <li><LatexRenderer latex="P \Leftrightarrow Q" block={false} /> : <strong>équivalence</strong> ("P équivaut à Q")</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Table de vérité des connecteurs</h4>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-3 text-center font-medium text-gray-600 border-b border-gray-200"><LatexRenderer latex="P" block={false} /></th>
                      <th className="p-3 text-center font-medium text-gray-600 border-b border-gray-200"><LatexRenderer latex="Q" block={false} /></th>
                      <th className="p-3 text-center font-medium text-gray-600 border-b border-gray-200"><LatexRenderer latex="\neg P" block={false} /></th>
                      <th className="p-3 text-center font-medium text-gray-600 border-b border-gray-200"><LatexRenderer latex="P \wedge Q" block={false} /></th>
                      <th className="p-3 text-center font-medium text-gray-600 border-b border-gray-200"><LatexRenderer latex="P \vee Q" block={false} /></th>
                      <th className="p-3 text-center font-medium text-gray-600 border-b border-gray-200"><LatexRenderer latex="P \Rightarrow Q" block={false} /></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 border-b border-gray-100">
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                    </tr>
                    <tr className="hover:bg-gray-50 border-b border-gray-100 bg-gray-50/50">
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                    </tr>
                    <tr className="hover:bg-gray-50 border-b border-gray-100">
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                    </tr>
                    <tr className="hover:bg-gray-50 border-b border-gray-100 bg-gray-50/50">
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">F</td>
                      <td className="p-3 text-center border-r border-gray-100 last:border-r-0">V</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 2: Quantificateurs */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-slate-800">
            2. Quantificateurs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">

            <div className="bg-slate-50 border-l-2 border-slate-300 p-4 rounded-r-md">
              <span className="font-semibold text-slate-900 block mb-2">Définition — Quantificateurs</span>
              <div className="text-slate-700">
                <p className="mb-2">Soit <LatexRenderer latex="P(x)" block={false} /> une propriété dépendant d'une variable <LatexRenderer latex="x" block={false} /> dans un ensemble <LatexRenderer latex="E" block={false} /> :</p>
                <ul className="space-y-2 ml-4 list-disc marker:text-slate-400">
                  <li><LatexRenderer latex="\forall x \in E, P(x)" block={false} /> : <strong>quantificateur universel</strong><br />
                    "Pour tout <LatexRenderer latex="x" block={false} /> de <LatexRenderer latex="E" block={false} />, <LatexRenderer latex="P(x)" block={false} /> est vraie"</li>
                  <li><LatexRenderer latex="\exists x \in E, P(x)" block={false} /> : <strong>quantificateur existentiel</strong><br />
                    "Il existe au moins un <LatexRenderer latex="x" block={false} /> dans <LatexRenderer latex="E" block={false} /> tel que <LatexRenderer latex="P(x)" block={false} /> soit vraie"</li>
                  <li><LatexRenderer latex="\exists! x \in E, P(x)" block={false} /> : <strong>quantificateur d'unicité</strong><br />
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

    </MathChapterTemplate >
  );
};

export default Chapitre1ElementsDeLogiqueCoursPage;
