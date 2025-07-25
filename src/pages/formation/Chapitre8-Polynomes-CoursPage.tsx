
import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatexRenderer } from '@/components/LatexRenderer';

const Box = ({ color, title, children }: { color: string, title: string, children: React.ReactNode }) => (
  <div style={{
    background: color === 'orange' ? '#fff7eb' : color === 'blue' ? '#e6f0ff' : '#f5f5f5',
    border: `2px solid ${color === 'orange' ? '#ffa94d' : color === 'blue' ? '#90bfff' : '#e0e0e0'}`,
    borderRadius: 16,
    margin: '24px 0',
    padding: 20,
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)'
  }}>
    <div className={`font-bold mb-2 ${color === 'orange' ? 'text-orange-700' : color === 'blue' ? 'text-blue-700' : 'text-gray-700'}`}>{title}</div>
    <div>{children}</div>
  </div>
);

const MathsPolynomesPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={8}
      chapterTitle="Chapitre 8 : Polynômes"
      description="Définitions, opérations (somme, produit, division euclidienne), dérivées, racines & factorisation (trinôme, discriminant, relations racines-coefficients), binôme de Newton & formule de Taylor"
    >
      <div className="space-y-8 py-8">
        <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">8</span>
              <span className="font-semibold">Polynômes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            {/* Introduction */}
            <div>
              <div className="text-lg font-semibold mb-2">Introduction</div>
              <p>Les polynômes sont des outils fondamentaux en algèbre, utilisés pour représenter des fonctions polynomiales et analyser leurs propriétés. Ce chapitre couvre les définitions, les opérations, la dérivation, les racines, la factorisation, et les relations entre racines et coefficients.</p>
            </div>

            {/* Définition : Polynôme */}
            <Box color="blue" title="Définition : Polynôme">
              <p>Un polynôme réel est une expression de la forme :</p>
              <div className="my-2"><LatexRenderer latex={"P(x) = a_0 + a_1 x + \\dots + a_n x^n \\quad (n \\in \\mathbb{N})"} /></div>
              <p>où <LatexRenderer latex={"a_i \\in \\mathbb{R}"} />.</p>
              <p>S'il est non nul, son <em>degré</em> est le plus grand indice <LatexRenderer latex={"n"} /> tel que <LatexRenderer latex={"a_n \\neq 0"} />; <LatexRenderer latex={"a_n"} /> est alors le <em>coefficient dominant</em>.</p>
              <p>Lorsque <LatexRenderer latex={"a_n = 1"} />, on dit que <LatexRenderer latex={"P"} /> est <em>unitaire</em>.</p>
              <p>Par convention, <LatexRenderer latex={"\\deg 0 = -\\infty"} />.</p>
              <p>On note <LatexRenderer latex={"\\mathbb{R}[X]"} /> l'ensemble de tous les polynômes réels, et <LatexRenderer latex={"\\mathbb{R}_n[X]"} /> ceux de degré <LatexRenderer latex={"\\leq n"} />.</p>
            </Box>

            {/* Définition : Égalité de deux polynômes */}
            <Box color="blue" title="Définition : Égalité de deux polynômes">
              <p>Deux polynômes non nuls sont identiques s'ils ont le même degré et des coefficients correspondants égaux.</p>
            </Box>

            {/* Opération : Somme et produit */}
            <Box color="blue" title="Opération : Somme et produit">
              <p>Pour <LatexRenderer latex={"P, Q \\in \\mathbb{R}[X]"} /> :</p>
              <LatexRenderer latex={"\\deg(P + Q) \\leq \\max(\\deg P, \\deg Q), \\qquad \\deg(PQ) = \\deg P + \\deg Q"} />
            </Box>

            {/* Théorème : Division euclidienne */}
            <Box color="orange" title="Théorème : Division euclidienne">
              <p>Pour <LatexRenderer latex={"A, B \\in \\mathbb{R}[X]"} /> avec <LatexRenderer latex={"B \\neq 0"} />, il existe un unique couple <LatexRenderer latex={"(Q, R)"} /> tel que :</p>
              <LatexRenderer latex={"A = B Q + R, \\qquad \\deg R < \\deg B"} />
            </Box>

            {/* Définition : Polynôme dérivé */}
            <Box color="blue" title="Définition : Polynôme dérivé">
              <p>Si <LatexRenderer latex={"P(x) = \\sum\\limits_{i=0}^n a_i x^i"} />, alors :</p>
              <LatexRenderer latex={"P'(x) = \\sum\\limits_{i=1}^n i a_i x^{i-1}"} />
              <p>et <LatexRenderer latex={"P'"} /> est nul lorsque <LatexRenderer latex={"P"} /> est constant.</p>
            </Box>

            {/* Théorème : Dérivées successives */}
            <Box color="orange" title="Théorème : Dérivées successives">
              <p>Définies par <LatexRenderer latex={"P^{(0)} = P"} /> et <LatexRenderer latex={"P^{(k)} = (P^{(k-1)})'"} />.</p>
              <p>Si <LatexRenderer latex={"P(x) = \\sum\\limits_{i=0}^n a_i x^i"} />, alors pour <LatexRenderer latex={"k \\leq n"} /> :</p>
              <LatexRenderer latex={"P^{(k)}(x) = \\sum\\limits_{i=k}^n \\frac{i!}{(i-k)!} a_i x^{i-k}, \\qquad \\deg P^{(k)} = n - k"} />
              <p>et <LatexRenderer latex={"P^{(k)} \\equiv 0"} /> pour <LatexRenderer latex={"k \\geq n + 1"} />.</p>
            </Box>

            {/* Théorème : Formule de Taylor */}
            <Box color="orange" title="Théorème : Formule de Taylor">
              <p>Pour <LatexRenderer latex={"a \\in \\mathbb{R}"} /> et tout <LatexRenderer latex={"P \\in \\mathbb{R}[X]"} /> de degré <LatexRenderer latex={"n"} /> :</p>
              <LatexRenderer latex={"\\boxed{P(x) = \\sum\\limits_{k=0}^n \\frac{P^{(k)}(a)}{k!} (x - a)^k}"} />
            </Box>

            {/* Définition : Racines */}
            <Box color="blue" title="Définition : Racines">
              <p>Un réel <LatexRenderer latex={"r"} /> est une racine de <LatexRenderer latex={"P"} /> si <LatexRenderer latex={"P(r) = 0"} />, équivalemment si <LatexRenderer latex={"x - r"} /> divise <LatexRenderer latex={"P"} />.</p>
              <p>Un polynôme non nul de degré <LatexRenderer latex={"n"} /> possède au plus <LatexRenderer latex={"n"} /> racines réelles.</p>
              <p>S'il en a <LatexRenderer latex={"n"} /> distinctes <LatexRenderer latex={"r_1, \\dots, r_n"} />, alors <LatexRenderer latex={"\\prod\\limits_{i=1}^n (x - r_i)"} /> divise <LatexRenderer latex={"P"} />.</p>
            </Box>

            {/* Définition : Racine multiple */}
            <Box color="blue" title="Définition : Racine multiple">
              <p>On dit que <LatexRenderer latex={"r"} /> est une racine d'ordre <LatexRenderer latex={"m \\geq 1"} /> de <LatexRenderer latex={"P"} /> si <LatexRenderer latex={"(x - r)^m"} /> divise <LatexRenderer latex={"P"} /> tandis que <LatexRenderer latex={"(x - r)^{m+1}"} /> ne le divise pas.</p>
            </Box>

            {/* Théorème : Factorisation */}
            <Box color="orange" title="Théorème : Factorisation">
              <p>Tout polynôme réel se factorise en produit de polynômes de degré 1 et de polynômes quadratiques sans racine réelle.</p>
            </Box>

            {/* Définition : Trinôme et discriminant */}
            <Box color="blue" title="Définition : Trinôme et discriminant">
              <p>Pour <LatexRenderer latex={"P(x) = a x^2 + b x + c"} /> (<LatexRenderer latex={"a \\neq 0"} />), on pose <LatexRenderer latex={"\\Delta = b^2 - 4ac"} />.</p>
              <ul className="list-disc list-inside space-y-2">
                <li><LatexRenderer latex={"\\Delta < 0"} /> : aucune racine réelle.</li>
                <li><LatexRenderer latex={"\\Delta = 0"} /> : racine double <LatexRenderer latex={"x_0 = -\\frac{b}{2a}"} /> et <LatexRenderer latex={"P(x) = a (x - x_0)^2"} />.</li>
                <li><LatexRenderer latex={"\\Delta > 0"} /> : racines <LatexRenderer latex={"x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}"} /> et <LatexRenderer latex={"x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}"} />, <LatexRenderer latex={"P(x) = a (x - x_1)(x - x_2)"} />.</li>
              </ul>
            </Box>

            {/* Théorème : Signe du trinôme */}
            <Box color="orange" title="Théorème : Signe du trinôme">
              <ul className="list-disc list-inside space-y-2">
                <li>Si <LatexRenderer latex={"\\Delta \\leq 0"} />, le signe de <LatexRenderer latex={"P"} /> est celui de <LatexRenderer latex={"a"} /> pour tout <LatexRenderer latex={"x"} />.</li>
                <li>Si <LatexRenderer latex={"\\Delta > 0"} />, le signe est celui de <LatexRenderer latex={"a"} /> en dehors de <LatexRenderer latex={"[x_1, x_2]"} /> et celui de <LatexRenderer latex={"-a"} /> entre <LatexRenderer latex={"x_1"} /> et <LatexRenderer latex={"x_2"} />.</li>
              </ul>
            </Box>

            {/* Théorème : Relations entre racines et coefficients */}
            <Box color="orange" title="Théorème : Relations entre racines et coefficients">
              <p>Lorsque <LatexRenderer latex={"\\Delta \\geq 0"} /> et <LatexRenderer latex={"x_1, x_2"} /> sont les racines de <LatexRenderer latex={"a x^2 + b x + c"} /> :</p>
              <LatexRenderer latex={"\\boxed{x_1 + x_2 = -\\frac{b}{a}, \\qquad x_1 x_2 = \\frac{c}{a}}"} />
            </Box>

            {/* Formule du binôme de Newton */}
            <Box color="orange" title="Formule du binôme de Newton">
              <p>Pour tous réels <LatexRenderer latex={"(a,b)"} /> et tout entier <LatexRenderer latex={"n \\geq 0"} /> :</p>
              <LatexRenderer latex={"(a+b)^n = \\sum\\limits_{k=0}^n \\binom{n}{k} a^k b^{n-k} = \\sum\\limits_{k=0}^n \\binom{n}{k} a^{n-k} b^k"} />
            </Box>

            {/* Nombre de parties d'un ensemble */}
            <Box color="blue" title="Nombre de parties d'un ensemble">
              <p>En posant <LatexRenderer latex={"a = b = 1"} /> dans l'identité précédente, on obtient :</p>
              <LatexRenderer latex={"\\sum\\limits_{k=0}^n \\binom{n}{k} = 2^n"} />
            </Box>

          </CardContent>
        </Card>
      </div>
    </MathChapterTemplate>
  );
};

export default MathsPolynomesPage;
