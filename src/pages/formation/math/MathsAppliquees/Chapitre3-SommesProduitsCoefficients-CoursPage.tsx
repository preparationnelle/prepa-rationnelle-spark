import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { BookOpen, Target, PenTool } from 'lucide-react';

const Chapitre3SommesProduitsCoefficientsCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={3}
      chapterTitle="Sommes, produits & coefficients binomiaux"
      description="Concepts fondamentaux et démonstrations rigoureuses [[memory:6842989]]"
      slug="sommes-produits-coefficients-binomiaux"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-blue-50">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-sommes-produits-coefficients-binomiaux-exercices">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-sommes-produits-coefficients-binomiaux-quiz">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Section 1: Sommes et produits */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            1. Sommes et produits
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Notation sigma (somme)</p>
              <div className="mt-2 space-y-2">
                <p>
                  Pour une suite <LatexRenderer latex="(u_k)_{k \in I}" block={false} /> indexée par un ensemble fini <LatexRenderer latex="I" block={false} />, on note :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{k \in I} u_k = u_{k_1} + u_{k_2} + \cdots + u_{k_n}" />
                </div>
                <p>
                  Si <LatexRenderer latex="I = \{p, p+1, \ldots, q\}" block={false} /> avec <LatexRenderer latex="p \leq q" block={false} /> :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\sum_{k=p}^q u_k = u_p + u_{p+1} + \cdots + u_q" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Notation produit</p>
              <div className="mt-2 space-y-2">
                <p>
                  De manière analogue, pour le produit :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\prod_{k=p}^q u_k = u_p \times u_{p+1} \times \cdots \times u_q" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriétés — Linéarité de la somme</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Linéarité :</strong> <LatexRenderer latex="\sum_{k=p}^q (\alpha u_k + \beta v_k) = \alpha \sum_{k=p}^q u_k + \beta \sum_{k=p}^q v_k" block={false} /></li>
                  <li>• <strong>Changement d'indice :</strong> <LatexRenderer latex="\sum_{k=p}^q u_k = \sum_{j=p+h}^{q+h} u_{j-h}" block={false} /></li>
                  <li>• <strong>Télescopage :</strong> <LatexRenderer latex="\sum_{k=p}^q (u_{k+1} - u_k) = u_{q+1} - u_p" block={false} /></li>
                  <li>• <strong>Factorisation :</strong> <LatexRenderer latex="\sum_{k=p}^q c \cdot u_k = c \sum_{k=p}^q u_k" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Sommes usuelles</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• <LatexRenderer latex="\sum_{k=1}^n 1 = n" block={false} /></li>
                  <li>• <LatexRenderer latex="\sum_{k=1}^n k = \frac{n(n+1)}{2}" block={false} /></li>
                  <li>• <LatexRenderer latex="\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}" block={false} /></li>
                  <li>• <LatexRenderer latex="\sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2" block={false} /></li>
                  <li>• <LatexRenderer latex="\sum_{k=0}^n q^k = \frac{1-q^{n+1}}{1-q}" block={false} /> (si <LatexRenderer latex="q \neq 1" block={false} />)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Exemple — Somme arithmétique :</p>
              <p>
                <LatexRenderer latex="\sum_{k=1}^{100} k = \frac{100 \times 101}{2} = 5050" block={false} />
              </p>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 2: Coefficients binomiaux */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            2. Coefficients binomiaux
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Définition — Coefficient binomial</p>
              <div className="mt-2 space-y-2">
                <p>
                  Pour <LatexRenderer latex="n \in \mathbb{N}" block={false} /> et <LatexRenderer latex="k \in \{0, 1, \ldots, n\}" block={false} />, 
                  le <strong>coefficient binomial</strong> est :
                </p>
                <div className="text-center py-2">
                  <LatexRenderer latex="\binom{n}{k} = \frac{n!}{k!(n-k)!}" />
                </div>
                <p>où <LatexRenderer latex="n! = 1 \times 2 \times \cdots \times n" block={false} /> (factorielle de <LatexRenderer latex="n" block={false} />), avec <LatexRenderer latex="0! = 1" block={false} />.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Interprétation combinatoire</p>
              <div className="mt-2 space-y-2">
                <p>
                  <LatexRenderer latex="\binom{n}{k}" block={false} /> représente le nombre de façons de choisir <LatexRenderer latex="k" block={false} /> objets 
                  parmi <LatexRenderer latex="n" block={false} /> objets distincts, sans tenir compte de l'ordre.
                </p>
                <p className="text-sm text-blue-700">
                  On lit « <LatexRenderer latex="k" block={false} /> parmi <LatexRenderer latex="n" block={false} /> » ou « C n k ».
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Propriétés fondamentales</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Symétrie :</strong> <LatexRenderer latex="\binom{n}{k} = \binom{n}{n-k}" block={false} /></li>
                  <li>• <strong>Valeurs particulières :</strong> <LatexRenderer latex="\binom{n}{0} = \binom{n}{n} = 1" block={false} /></li>
                  <li>• <strong>Relation de Pascal :</strong> <LatexRenderer latex="\binom{n+1}{k} = \binom{n}{k-1} + \binom{n}{k}" block={false} /></li>
                  <li>• <strong>Formule avec factorielles :</strong> <LatexRenderer latex="\binom{n}{k} = \frac{n(n-1)\cdots(n-k+1)}{k!}" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Triangle de Pascal</p>
              <div className="mt-2">
                <div className="text-center font-mono text-sm space-y-1">
                  <div>1</div>
                  <div>1   1</div>
                  <div>1   2   1</div>
                  <div>1   3   3   1</div>
                  <div>1   4   6   4   1</div>
                  <div>1   5   10   10   5   1</div>
                </div>
                <p className="text-sm text-blue-700 mt-2">
                  Chaque élément est la somme des deux éléments au-dessus de lui.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Exemples :</p>
              <ul className="space-y-1 ml-4">
                <li>• <LatexRenderer latex="\binom{5}{2} = \frac{5!}{2!3!} = \frac{120}{2 \times 6} = 10" block={false} /></li>
                <li>• <LatexRenderer latex="\binom{7}{3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35" block={false} /></li>
              </ul>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Section 3: Formule du binôme */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">
            3. Formule du binôme de Newton
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-lg">
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Théorème — Formule du binôme</p>
              <div className="mt-2 space-y-2">
                <p>
                  Pour tout <LatexRenderer latex="n \in \mathbb{N}" block={false} /> et tous réels <LatexRenderer latex="a" block={false} /> et <LatexRenderer latex="b" block={false} /> :
                </p>
                <div className="text-center py-3 text-xl">
                  <LatexRenderer latex="(a + b)^n = \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Développement explicite</p>
              <div className="mt-2 space-y-2">
                <div className="text-center py-2">
                  <LatexRenderer latex="(a + b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n}b^n" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Cas particuliers importants</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Avec <LatexRenderer latex="a = b = 1" block={false} /> :</strong> <LatexRenderer latex="\sum_{k=0}^n \binom{n}{k} = 2^n" block={false} /></li>
                  <li>• <strong>Avec <LatexRenderer latex="a = 1, b = -1" block={false} /> :</strong> <LatexRenderer latex="\sum_{k=0}^n (-1)^k \binom{n}{k} = 0" block={false} /> (si <LatexRenderer latex="n \geq 1" block={false} />)</li>
                  <li>• <strong>Avec <LatexRenderer latex="b = 1" block={false} /> :</strong> <LatexRenderer latex="(1 + a)^n = \sum_{k=0}^n \binom{n}{k} a^k" block={false} /></li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-700 mb-2">Exemple — Développement de <LatexRenderer latex="(x + 2)^4" block={false} /> :</p>
              <div className="text-sm">
                <LatexRenderer latex="(x + 2)^4 = \binom{4}{0}x^4 + \binom{4}{1}x^3 \cdot 2 + \binom{4}{2}x^2 \cdot 2^2 + \binom{4}{3}x \cdot 2^3 + \binom{4}{4} \cdot 2^4" />
                <br /><br />
                <LatexRenderer latex="= x^4 + 8x^3 + 24x^2 + 32x + 16" />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="font-semibold">Identités remarquables avec coefficients binomiaux</p>
              <div className="mt-2 space-y-2">
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Formule de Vandermonde :</strong><br />
                    <LatexRenderer latex="\sum_{k=0}^r \binom{m}{k}\binom{n}{r-k} = \binom{m+n}{r}" block={false} /></li>
                  <li>• <strong>Identité de Chu :</strong><br />
                    <LatexRenderer latex="\sum_{k=0}^n \binom{n}{k}^2 = \binom{2n}{n}" block={false} /></li>
                  <li>• <strong>Somme alternée :</strong><br />
                    <LatexRenderer latex="\sum_{k=0}^n (-1)^k k \binom{n}{k} = -n \cdot 2^{n-1}" block={false} /> (si <LatexRenderer latex="n \geq 1" block={false} />)</li>
                </ul>
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
            <Link to="/formation/maths-sommes-produits-coefficients-binomiaux-exercices">
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

export default Chapitre3SommesProduitsCoefficientsCoursPage;
