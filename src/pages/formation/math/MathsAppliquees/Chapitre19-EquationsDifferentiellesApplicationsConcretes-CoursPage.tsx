import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { Target, PenTool } from 'lucide-react';

const Chapitre19EquationsDifferentiellesCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={19}
      chapterTitle="Équations différentielles à coefficients constants"
      description="Méthodes de résolution et applications concrètes [[memory:6842989]]"
      slug="equations-differentielles-applications-concretes"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-equations-differentielles-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-equations-differentielles-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1 — Premières définitions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Premières définitions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Équation différentielle</p>
              <div className="mt-2 space-y-2">
                <p>
                  Une <strong>équation différentielle</strong> relie une fonction <LatexRenderer latex="y" block={false} /> (suffisamment régulière) et une ou plusieurs de ses dérivées.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Équation différentielle linéaire d'ordre n</p>
              <div className="mt-2 space-y-2">
                <p>
                  Soient <LatexRenderer latex="a_0,\dots,a_n,b" block={false} /> continus sur <LatexRenderer latex="I" block={false} />, <LatexRenderer latex="a_n\neq 0" block={false} />.
                </p>
                <p>Une EDL d'ordre <LatexRenderer latex="n" block={false} /> est :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="a_n y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1 y' + a_0 y = b,\quad y\in C^n(I,\mathbb{R})" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Terminologie</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Homogène</strong> si <LatexRenderer latex="b=0" block={false} /></li>
                  <li>• <strong>Solution</strong> : fonction <LatexRenderer latex="y" block={false} /> vérifiant l'égalité</li>
                  <li>• <strong>Trajectoire</strong> : courbe de la solution</li>
                  <li>• <strong>Équilibre</strong> : solution constante</li>
                </ul>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 2 — Structure des solutions */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Structure des solutions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Structure vectorielle</p>
              <div className="mt-2 space-y-2">
                <p>Si <LatexRenderer latex="(E)" block={false} /> est une EDL et <LatexRenderer latex="(E_H)" block={false} /> l'équation homogène associée :</p>
                <ol className="space-y-2 ml-4">
                  <li>1. L'ensemble des solutions <LatexRenderer latex="S_H" block={false} /> de <LatexRenderer latex="(E_H)" block={false} /> est un espace vectoriel.</li>
                  <li>2. Toute solution de <LatexRenderer latex="(E)" block={false} /> est de la forme
                    <div className="text-center py-2 mt-2">
                      <LatexRenderer latex="y = f_p + f_H, \quad f_H \in S_H" />
                    </div>
                    où <LatexRenderer latex="f_p" block={false} /> est une solution particulière. Donc
                    <div className="text-center py-2 mt-2">
                      <LatexRenderer latex="S_E = \{ f_p + f_H \mid f_H \in S_H\}" />
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriété — Principe de superposition</p>
              <div className="mt-2 space-y-2">
                <p>
                  Si <LatexRenderer latex="f_1,f_2" block={false} /> sont solutions de deux EDLs avec seconds membres <LatexRenderer latex="b_1,b_2" block={false} />, alors pour <LatexRenderer latex="\lambda_1,\lambda_2\in\mathbb{R}" block={false} /> :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\lambda_1 f_1 + \lambda_2 f_2" />
                </div>
                <p>est solution de l'EDL de second membre <LatexRenderer latex="\lambda_1 b_1 + \lambda_2 b_2" block={false} />.</p>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 3 — EDL du premier ordre */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. EDL du premier ordre à coefficients constants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — EDL1 à coefficients constants</p>
              <div className="mt-2 space-y-2">
                <p>Une EDL1 à coefficients constants est de la forme :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="a_1 y' + a_0 y = b, \quad a_1 \neq 0" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Résolution de y' + ay = 0</p>
              <div className="mt-2 space-y-2">
                <p>Les solutions sont</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="y(x) = \lambda e^{-ax}, \quad \lambda \in \mathbb{R}" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Cauchy–Lipschitz sur EDL1</p>
              <div className="mt-2 space-y-2">
                <p>
                  Si <LatexRenderer latex="a\in\mathbb{R}" block={false} />, <LatexRenderer latex="b" block={false} /> continue sur <LatexRenderer latex="I" block={false} />, alors pour tout <LatexRenderer latex="x_0,y_0" block={false} /> il existe une unique solution de
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\begin{cases} y'+ay = b, \\ y(x_0)=y_0. \end{cases}" />
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 4 — EDL du second ordre */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            4. EDL du second ordre à coefficients constants
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — EDL2 à coefficients constants</p>
              <div className="mt-2 space-y-2">
                <p>Une EDL2 à coefficients constants est :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="a_2 y'' + a_1 y' + a_0 y = b, \quad a_2 \neq 0" />
                </div>
                <p>On la normalise en</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="y'' + \frac{a_1}{a_2} y' + \frac{a_0}{a_2} y = \frac{b}{a_2}" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Équation caractéristique</p>
              <div className="mt-2 space-y-2">
                <p>L'équation associée est :</p>
                <div className="text-center py-2">
                  <LatexRenderer latex="r^2 + a r + b = 0" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Résolution de y'' + ay' + by = 0</p>
              <div className="mt-2 space-y-2">
                <p>Soit <LatexRenderer latex="\Delta = a^2-4b" block={false} />.</p>
                <ol className="space-y-3 ml-4">
                  <li>1. Si <LatexRenderer latex="\Delta>0" block={false} />, racines distinctes <LatexRenderer latex="r_1,r_2" block={false} /> :
                    <div className="text-center py-2 mt-2">
                      <LatexRenderer latex="y(x) = \lambda e^{r_1 x} + \mu e^{r_2 x}" />
                    </div>
                  </li>
                  <li>2. Si <LatexRenderer latex="\Delta=0" block={false} />, racine double <LatexRenderer latex="r_0" block={false} /> :
                    <div className="text-center py-2 mt-2">
                      <LatexRenderer latex="y(x) = (\lambda x + \mu) e^{r_0 x}" />
                    </div>
                  </li>
                  <li>3. Si <LatexRenderer latex="\Delta<0" block={false} />, racines complexes <LatexRenderer latex="r=\alpha\pm i\beta" block={false} /> :
                    <div className="text-center py-2 mt-2">
                      <LatexRenderer latex="y(x) = e^{\alpha x}(\lambda \cos(\beta x) + \mu \sin(\beta x))" />
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Cauchy–Lipschitz sur EDL2</p>
              <div className="mt-2 space-y-2">
                <p>
                  Si <LatexRenderer latex="a,b\in\mathbb{R}" block={false} />, <LatexRenderer latex="c" block={false} /> continue, alors pour tout <LatexRenderer latex="x_0,y_0,z_0" block={false} /> il existe une unique solution de
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\begin{cases} y''+ay'+by = c, \\ y(x_0)=y_0, \quad y'(x_0)=z_0. \end{cases}" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Méthode générale de résolution :</p>
              <ol className="space-y-1 ml-4">
                <li>1. <strong>Équation homogène</strong> : Résoudre l'équation caractéristique</li>
                <li>2. <strong>Solution particulière</strong> : Chercher selon la forme du second membre</li>
                <li>3. <strong>Solution générale</strong> : Somme de la solution homogène et particulière</li>
                <li>4. <strong>Conditions initiales</strong> : Déterminer les constantes</li>
              </ol>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Applications physiques :</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Oscillateur harmonique</strong> : <LatexRenderer latex="y'' + \omega^2 y = 0" block={false} /></li>
                <li>• <strong>Circuit RLC</strong> : <LatexRenderer latex="L\ddot{q} + R\dot{q} + \frac{q}{C} = E(t)" block={false} /></li>
                <li>• <strong>Croissance exponentielle</strong> : <LatexRenderer latex="y' = ky" block={false} /></li>
                <li>• <strong>Désintégration radioactive</strong> : <LatexRenderer latex="N' = -\lambda N" block={false} /></li>
                <li>• <strong>Refroidissement de Newton</strong> : <LatexRenderer latex="T' = -k(T-T_{ext})" block={false} /></li>
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
            <Link to="/formation/maths-equations-differentielles-exercices">
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

export default Chapitre19EquationsDifferentiellesCoursPage;