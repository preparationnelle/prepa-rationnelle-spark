import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, Play } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OteriaMatricesStochastiquesExercicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              Bachelor 2
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Chapitre 12 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Play className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Exercices - Chapitre 12</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Arithmétique modulaire & crypto affine
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/matrices-stochastiques-cours">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Cours associé
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Contenu des exercices */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                <Play className="h-6 w-6" />
                Exercices d'application
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Exercice 1 */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Exercice 1 : Suites et divisibilité</h3>
                  <p className="text-gray-700 mb-4">
                    On définit, pour tout entier relatif <LatexRenderer latex="n" block={false} />, les suites :
                  </p>
                  <div className="bg-blue-50 p-4 rounded mb-4">
                    <LatexRenderer latex="A_n=(n+3)(2n+5)+17 \quad \text{et} \quad B_n=n+3" block={true} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-800">a) Développer et réduire <LatexRenderer latex="A_n" block={false} />.</p>
                    <p className="text-sm font-medium text-gray-800">b) Déterminer tous les entiers <LatexRenderer latex="n\neq -3" block={false} /> tels que <LatexRenderer latex="B_n" block={false} /> divise <LatexRenderer latex="A_n" block={false} />.</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Corrigé de l'exercice 1</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-green-700">a) Développement :</p>
                      <div className="bg-white p-3 rounded">
                        <LatexRenderer latex="(n+3)(2n+5)+17 = 2n^2 + 11n + 32" block={true} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">b) Divisibilité :</p>
                      <p className="text-sm text-gray-700 mb-2">On cherche <LatexRenderer latex="n \neq -3" block={false} /> tel que <LatexRenderer latex="B_n \mid A_n" block={false} /> :</p>
                      <div className="bg-white p-3 rounded space-y-2">
                        <LatexRenderer latex="\frac{A_n}{B_n} = \frac{(n+3)(2n+5)+17}{n+3} = 2n+5 + \frac{17}{n+3}" block={true} />
                        <p className="text-sm">Comme 17 est premier, <LatexRenderer latex="n+3 \in \{1, 17\}" block={false} /></p>
                        <p className="text-sm">D'où <LatexRenderer latex="n = -2" block={false} /> ou <LatexRenderer latex="n = 14" block={false} /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercice 2 */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Exercice 2 : Divisibilité par 4</h3>
                  <p className="text-gray-700 mb-4">
                    Montrer que, pour tout <LatexRenderer latex="n\in\mathbb{N}" block={false} />, le nombre <LatexRenderer latex="5^n+19" block={false} /> est divisible par 4.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-800">a) Exprimer la somme géométrique <LatexRenderer latex="S_n=1+5+5^2+\cdots+5^{n-1}" block={false} /> en fonction de <LatexRenderer latex="n" block={false} />.</p>
                    <p className="text-sm font-medium text-gray-800">b) En déduire la divisibilité demandée.</p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Corrigé de l'exercice 2</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-green-700">a) Somme géométrique :</p>
                      <div className="bg-white p-3 rounded">
                        <LatexRenderer latex="S_n = \frac{1-5^n}{1-5} = \frac{5^n - 1}{4}" block={true} />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">b) Divisibilité par 4 :</p>
                      <div className="bg-white p-3 rounded space-y-2">
                        <LatexRenderer latex="5^n - 1" block={false} /> est multiple de 4, donc :
                        <LatexRenderer latex="5^n + 19 = (5^n - 1) + 20" block={true} />
                        <p className="text-sm">est également multiple de 4 pour tout <LatexRenderer latex="n \in \mathbb{N}" block={false} /></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercice 3 */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Exercice 3 : Divisibilité par 2 et 3</h3>
                  <p className="text-gray-700 mb-4">
                    Démontrer que, pour tout entier relatif <LatexRenderer latex="p" block={false} />, le nombre <LatexRenderer latex="p(p^2-1)" block={false} /> est divisible par 2 et par 3.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Corrigé de l'exercice 3</h4>
                  <p className="text-gray-700 mb-3">On factorise :</p>
                  <div className="bg-white p-3 rounded mb-3">
                    <LatexRenderer latex="p(p^2-1) = p(p-1)(p+1)" block={true} />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-green-700">Divisibilité par 2 :</p>
                      <p className="text-sm text-gray-700">Parmi trois entiers consécutifs p-1, p, p+1, l'un est pair. Le produit est donc divisible par 2.</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700">Divisibilité par 3 :</p>
                      <p className="text-sm text-gray-700 mb-2">On discute modulo 3 :</p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Si <LatexRenderer latex="p \equiv 0 \pmod{3}" block={false} />, alors <LatexRenderer latex="p(p^2-1) \equiv 0" block={false} /></li>
                        <li>• Si <LatexRenderer latex="p \equiv 1 \pmod{3}" block={false} />, alors <LatexRenderer latex="p^2-1 \equiv 0" block={false} /></li>
                        <li>• Si <LatexRenderer latex="p \equiv 2 \pmod{3}" block={false} />, alors <LatexRenderer latex="p^2 \equiv 1" block={false} /> et <LatexRenderer latex="p^2-1 \equiv 0" block={false} /></li>
                      </ul>
                      <p className="text-sm mt-2">Dans tous les cas, <LatexRenderer latex="3 \mid p(p^2-1)" block={false} /></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercice 4 */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Exercice 4 : Divisibilité par 8</h3>
                  <p className="text-gray-700 mb-4">
                    Montrer que, pour tout entier naturel <strong>impair</strong> <LatexRenderer latex="n" block={false} />, le nombre <LatexRenderer latex="n^2-1" block={false} /> est divisible par 8.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Corrigé de l'exercice 4</h4>
                  <p className="text-gray-700 mb-3">Si n est impair, il existe <LatexRenderer latex="k \in \mathbb{Z}" block={false} /> tel que <LatexRenderer latex="n = 2k + 1" block={false} />. Alors :</p>
                  <div className="bg-white p-3 rounded space-y-2">
                    <LatexRenderer latex="n^2 - 1 = (2k+1)^2 - 1 = 4k^2 + 4k = 4k(k+1)" block={true} />
                    <p className="text-sm">Or k et k+1 sont deux entiers consécutifs, donc leur produit est pair : <LatexRenderer latex="k(k+1) = 2q" block={false} /></p>
                    <LatexRenderer latex="n^2 - 1 = 4 \cdot 2q = 8q" block={true} />
                    <p className="text-sm">Ce qui prouve que <LatexRenderer latex="8 \mid n^2 - 1" block={false} /></p>
                  </div>
                </div>
              </div>

              {/* Exercice 5 */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">Exercice 5 : Congruence et reste</h3>
                  <p className="text-gray-700 mb-4">
                    Conjecturer puis démontrer le reste de la division euclidienne de <LatexRenderer latex="10^n" block={false} /> par 11 selon la parité de <LatexRenderer latex="n" block={false} />.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Corrigé de l'exercice 5</h4>
                  <p className="text-gray-700 mb-3">Comme <LatexRenderer latex="10 \equiv -1 \pmod{11}" block={false} />, on a :</p>
                  <div className="bg-white p-3 rounded mb-3">
                    <LatexRenderer latex="10^n \equiv (-1)^n \pmod{11}" block={true} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-medium text-green-700">•</span>
                      <span>Si n est pair : <LatexRenderer latex="10^n \equiv 1 \pmod{11}" block={false} /> (reste 1)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium text-green-700">•</span>
                      <span>Si n est impair : <LatexRenderer latex="10^n \equiv -1 \equiv 10 \pmod{11}" block={false} /> (reste 10)</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Exemples : <LatexRenderer latex="10^2 = 9 \times 11 + 1" block={false} /> et <LatexRenderer latex="10^3 = 90 \times 11 + 10" block={false} />
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default OteriaMatricesStochastiquesExercicesPage;
