
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { LatexRenderer } from '@/components/LatexRenderer';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { BookOpen, Target, Brain, PenTool } from 'lucide-react';

// Boîte colorée générique
const Box = ({ color, title, children }: { color: string, title: string, children: React.ReactNode }) => (
  <div style={{
    background: color === 'orange' ? '#fff7eb' : color === 'blue' ? '#e6f0ff' : color === 'green' ? '#eaffea' : '#f5f5f5',
    border: `2px solid ${color === 'orange' ? '#ffb366' : color === 'blue' ? '#90bfff' : color === 'green' ? '#7be495' : '#e0e0e0'}`,
    borderRadius: 16,
    margin: '24px 0',
    padding: 20,
    boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)'
  }}>
    <div className={`font-bold mb-2 ${color === 'orange' ? 'text-orange-700' : color === 'blue' ? 'text-blue-700' : color === 'green' ? 'text-green-700' : 'text-gray-700'}`}>{title}</div>
    <div>{children}</div>
  </div>
);

const MathsFonctionsPage = () => (
  <MathChapterTemplate
    chapterNumber={5}
    chapterTitle="Chapitre 5 : Fonctions d’une variable réelle"
    description="Généralités (parité, périodicité, bornes, variations) ; limites et opérations sur les limites ; continuité et théorèmes fondamentaux (valeurs intermédiaires, Weierstrass, bijection continue) ; fonctions usuelles et trigonométriques"
    showNavigation={true}
  >
    {/* Navigation vers les ressources */}
    <Card className="border-0 shadow-lg bg-blue-50 mb-8">
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <BookOpen className="mr-2 h-4 w-4" />
            Cours
          </Button>
          <Link to="/formation/maths-fonctions-une-variable-reelle-exercices">
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              <PenTool className="mr-2 h-4 w-4" />
              Exercices
            </Button>
          </Link>
          <Link to="/formation/maths-fonctions-une-variable-reelle-flashcards">
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              <Brain className="mr-2 h-4 w-4" />
              Flashcards
            </Button>
          </Link>
          <Link to="/formation/maths-fonctions-une-variable-reelle-quiz">
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
              <Target className="mr-2 h-4 w-4" />
              Quiz
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>

    <div className="space-y-8 py-8 max-w-4xl mx-auto px-6 md:px-10">
      {/* 1. Fonctions d'une variable réelle */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">1</span>
            <span>Fonctions d’une variable réelle</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <Box color="blue" title="Introduction">
            Les fonctions d’une variable réelle jouent un rôle central en analyse mathématique. Ce chapitre explore leurs propriétés fondamentales, incluant parité, périodicité, continuité, limites, et les fonctions usuelles.
          </Box>
          <Box color="blue" title="Définition : Valeur absolue">
            La valeur absolue mesure la distance d’un réel à zéro. Pour <LatexRenderer latex={"x \\mapsto |x|"} />, on a :
            <div className="my-2"><LatexRenderer latex={"|x| = \\begin{cases} x & \\text{si } x \\geq 0 \\ \\ -x & \\text{si } x < 0 \\end{cases}"} /></div>
            Elle est paire, c’est-à-dire <LatexRenderer latex={"\\forall x \\in \\mathbb{R}, \\; |-x| = |x|"} />.
          </Box>
          <Box color="orange" title="Opération : Multiplication">
            Les opérations avec la valeur absolue suivent des règles précises. On a :
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\forall (x, y) \\in \\mathbb{R}^2, \\; |xy| = |x||y|"} /></li>
              <li><LatexRenderer latex={"\\forall (x, y) \\in \\mathbb{R}^* \\times \\mathbb{R}^*, \\; \\left| \\frac{x}{y} \\right| = \\frac{|x|}{|y|}"} /></li>
            </ul>
          </Box>
          <Box color="green" title="Théorème : Inégalités">
            Les inégalités avec la valeur absolue sont fondamentales. On obtient :
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\forall (x, y) \\in \\mathbb{R}^2, \\; |x + y| \\leq |x| + |y|"} /> (Inégalité triangulaire)</li>
              <li><LatexRenderer latex={"\\forall x \\in \\mathbb{R}, \\; \\forall M > 0, \\; |x| \\leq M \\iff -M \\leq x \\leq M"} /></li>
            </ul>
          </Box>
          <Box color="blue" title="Définition : Fonction carré">
            La fonction carré intervient dans les inégalités. Pour un réel <LatexRenderer latex="x" /> et <LatexRenderer latex="a > 0" />, on a :
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"x^2 \\leq a^2 \\iff -a \\leq x \\leq a"} /></li>
              <li><LatexRenderer latex={"x^2 \\geq a^2 \\iff (x \\leq -a \\text{ ou } x \\geq a)"} /></li>
            </ul>
          </Box>
        </CardContent>
      </Card>
      {/* 2. Généralités sur les fonctions */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">2</span>
            <span>Généralités sur les fonctions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <Box color="blue" title="Définition : Généralités sur les fonctions">
            Une fonction <LatexRenderer latex={"f"} /> d’une variable réelle à valeurs réelles a un ensemble de définition <LatexRenderer latex={"D_f"} /> et une courbe représentative <LatexRenderer latex={"(C_f)"} /> dans un repère orthonormé <LatexRenderer latex={"(Oxy)"} />.
          </Box>
          <Box color="blue" title="Définition : Parité">
            La parité décrit la symétrie. Elle est :
            <ul className="mb-2 ml-6">
              <li><em>Paire</em> si <LatexRenderer latex={"D_f"} /> est centré en 0 et <LatexRenderer latex={"\\forall x \\in D_f, \\; f(-x) = f(x)"} /></li>
              <li><em>Impaire</em> si <LatexRenderer latex={"D_f"} /> est centré en 0 et <LatexRenderer latex={"\\forall x \\in D_f, \\; f(-x) = -f(x)"} /></li>
            </ul>
          </Box>
          <Box color="green" title="Théorème : Symétrie">
            La parité détermine la symétrie de la courbe. Si <LatexRenderer latex={"f"} /> est paire, <LatexRenderer latex={"(C_f)"} /> est symétrique par rapport à l’axe <LatexRenderer latex={"(Oy)"} />. Si <LatexRenderer latex={"f"} /> est impaire, <LatexRenderer latex={"(C_f)"} /> est symétrique par rapport à l’origine <LatexRenderer latex={"O"} />.
          </Box>
          <Box color="blue" title="Définition : Périodicité">
            Une fonction périodique se répète régulièrement. Elle est <LatexRenderer latex={"T"} />-périodique si <LatexRenderer latex={"\\exists T > 0, \\; \\forall x \\in D_f, \\; x + T \\in D_f"} /> et <LatexRenderer latex={"f(x + T) = f(x)"} />.
          </Box>
          <Box color="blue" title="Définition : Majorant, minorant">
            Les bornes définissent les extrêmes. Pour <LatexRenderer latex={"A \\subset \\mathbb{R}"} /> inclus dans <LatexRenderer latex={"D_f"} />, on a :
            <ul className="mb-2 ml-6">
              <li>f est <em>majorée</em> sur <LatexRenderer latex={"A"} /> si <LatexRenderer latex={"\\exists M \\in \\mathbb{R}, \\; \\forall x \\in A, \\; f(x) \\leq M"} /></li>
              <li>f est <em>minorée</em> sur <LatexRenderer latex={"A"} /> si <LatexRenderer latex={"\\exists m \\in \\mathbb{R}, \\; \\forall x \\in A, \\; f(x) \\geq m"} /></li>
              <li>f est <em>bornée</em> sur <LatexRenderer latex={"A"} /> si elle est majorée et minorée</li>
            </ul>
          </Box>
          <Box color="blue" title="Définition : Extrémums globaux">
            Les extrema globaux sont les valeurs extrêmes absolues. Pour <LatexRenderer latex={"A \\subset \\mathbb{R}"} /> inclus dans <LatexRenderer latex={"D_f"} /> et <LatexRenderer latex={"x_0 \\in A"} />, on a :
            <ul className="mb-2 ml-6">
              <li>f admet un <em>maximum global</em> en <LatexRenderer latex={"x_0"} /> si <LatexRenderer latex={"\\forall x \\in A, \\; f(x) \\leq f(x_0)"} /></li>
              <li>f admet un <em>minimum global</em> en <LatexRenderer latex={"x_0"} /> si <LatexRenderer latex={"\\forall x \\in A, \\; f(x) \\geq f(x_0)"} /></li>
            </ul>
          </Box>
          <Box color="blue" title="Définition : Extrémums locaux">
            Les extrema locaux dépendent d’un voisinage. Pour <LatexRenderer latex={"A \\subset \\mathbb{R}"} /> inclus dans <LatexRenderer latex={"D_f"} /> et <LatexRenderer latex={"x_0 \\in A"} />, on a :
            <ul className="mb-2 ml-6">
              <li>f admet un <em>maximum local</em> en <LatexRenderer latex={"x_0"} /> si <LatexRenderer latex={"\\exists V"} /> voisinage de <LatexRenderer latex={"x_0"} />, <LatexRenderer latex={"\\forall x \\in A \\cap V, \\; f(x) \\leq f(x_0)"} /></li>
              <li>f admet un <em>minimum local</em> en <LatexRenderer latex={"x_0"} /> si <LatexRenderer latex={"\\exists V"} /> voisinage de <LatexRenderer latex={"x_0"} />, <LatexRenderer latex={"\\forall x \\in A \\cap V, \\; f(x) \\geq f(x_0)"} /></li>
            </ul>
          </Box>
          <Box color="green" title="Théorème : Borne supérieure, borne inférieure">
            Les bornes extrêmes sont uniques si existantes. Si f est majorée sur <LatexRenderer latex={"A"} />, <LatexRenderer latex={"\\sup_{x \\in A} f(x)"} /> est le plus petit majorant. Si f est minorée sur <LatexRenderer latex={"A"} />, <LatexRenderer latex={"\\inf_{x \\in A} f(x)"} /> est le plus grand minorant.
          </Box>
          <Box color="blue" title="Définition : Sens de variation">
            La variation décrit le comportement. Pour f sur <LatexRenderer latex={"I \\subset \\mathbb{R}"} />, on a :
            <ul className="mb-2 ml-6">
              <li>f est <em>croissante</em> si <LatexRenderer latex={"\\forall (x, y) \\in I^2, \\; x \\leq y \\implies f(x) \\leq f(y)"} /></li>
              <li>f est <em>strictement croissante</em> si <LatexRenderer latex={"\\forall (x, y) \\in I^2, \\; x < y \\implies f(x) < f(y)"} /></li>
              <li>f est <em>décroissante</em> si <LatexRenderer latex={"\\forall (x, y) \\in I^2, \\; x \\leq y \\implies f(x) \\geq f(y)"} /></li>
              <li>f est <em>strictement décroissante</em> si <LatexRenderer latex={"\\forall (x, y) \\in I^2, \\; x < y \\implies f(x) > f(y)"} /></li>
            </ul>
            f est <em>monotone</em> si elle est croissante ou décroissante.
          </Box>
          <Box color="green" title="Théorème : Composition et variation">
            La composition préserve le sens de variation. On a :
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-center border border-slate-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-2 py-2"></th>
                    <th className="px-2 py-2">f croît sur I</th>
                    <th className="px-2 py-2">f décroît sur I</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b-2 border-slate-200">
                    <td className="py-3">g croît sur f(I)</td>
                    <td className="py-3">g ∘ f croît sur I</td>
                    <td className="py-3">g ∘ f décroît sur I</td>
                  </tr>
                  <tr className="bg-[#f9fafb]">
                    <td className="py-3">g décroît sur f(I)</td>
                    <td className="py-3">g ∘ f décroît sur I</td>
                    <td className="py-3">g ∘ f croît sur I</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>
          <Box color="green" title="Théorème : Bijection réciproque">
            Une bijection conserve son sens de variation. Si f est strictement monotone sur <LatexRenderer latex={"I"} />, alors <LatexRenderer latex={"f^{-1}"} /> est bijective de <LatexRenderer latex={"f(I)"} /> sur <LatexRenderer latex={"I"} /> avec le même sens de variation.
          </Box>
        </CardContent>
      </Card>
      {/* 3. Fonctions trigonométriques */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">3</span>
            <span>Fonctions trigonométriques</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <Box color="blue" title="Définition : Fonctions trigonométriques">
            Les fonctions trigonométriques possèdent des propriétés spécifiques. On a :
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\forall x \\in \\mathbb{R}, \\; \\cos^2 x + \\sin^2 x = 1"} /></li>
              <li><LatexRenderer latex={"\\forall x \\in \\mathbb{R}, \\; \\sin'(x) = \\cos x"} /> et <LatexRenderer latex={"\\cos'(x) = -\\sin x"} /></li>
              <li><LatexRenderer latex={"\\sin"} /> est impaire et <LatexRenderer latex={"\\cos"} /> est paire</li>
              <li><LatexRenderer latex={"\\sin"} /> et <LatexRenderer latex={"\\cos"} /> sont <LatexRenderer latex={"2\\pi"} />-périodiques</li>
              <li><LatexRenderer latex={"\\sin"} /> est bijective de <LatexRenderer latex={"\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]"} /> sur <LatexRenderer latex={"[-1,1]"} /></li>
              <li><LatexRenderer latex={"\\cos"} /> est bijective de <LatexRenderer latex={"[0, \\pi]"} /> sur <LatexRenderer latex={"[-1,1]"} /></li>
            </ul>
          </Box>
          <Box color="orange" title="Opération : Formules d’addition">
            Les combinaisons trigonométriques suivent des règles. Pour <LatexRenderer latex={"a, b \\in \\mathbb{R}"} />, on a :
            <LatexRenderer latex={"\\cos(a+b) = \\cos a \\cos b - \\sin a \\sin b, \\quad \\sin(a+b) = \\sin a \\cos b + \\sin b \\cos a"} />
          </Box>
          <Box color="orange" title="Opération : Formules de duplication">
            Les doubles angles se simplifient. Pour <LatexRenderer latex={"a \\in \\mathbb{R}"} />, on a :
            <LatexRenderer latex={"\\cos(2a) = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a, \\quad \\sin(2a) = 2\\sin a \\cos a"} />
          </Box>
          <Box color="blue" title="Méthode : Valeurs trigonométriques remarquables">
            Les valeurs standards aident les calculs. On a :
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-center border border-slate-300 bg-white rounded-lg">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-2 py-2"><LatexRenderer latex={"x"} /></th>
                    <th className="px-2 py-2"><LatexRenderer latex={"0"} /></th>
                    <th className="px-2 py-2"><LatexRenderer latex={"\\pi/6"} /></th>
                    <th className="px-2 py-2"><LatexRenderer latex={"\\pi/4"} /></th>
                    <th className="px-2 py-2"><LatexRenderer latex={"\\pi/3"} /></th>
                    <th className="px-2 py-2"><LatexRenderer latex={"\\pi/2"} /></th>
                    <th className="px-2 py-2"><LatexRenderer latex={"\\pi"} /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b-2 border-slate-200">
                    <td className="py-3"><LatexRenderer latex={"\\sin x"} /></td>
                    <td className="py-3"><LatexRenderer latex={"0"} /></td>
                    <td className="py-3"><LatexRenderer latex={"1/2"} /></td>
                    <td className="py-3"><LatexRenderer latex={"\\sqrt{2}/2"} /></td>
                    <td className="py-3"><LatexRenderer latex={"\\sqrt{3}/2"} /></td>
                    <td className="py-3"><LatexRenderer latex={"1"} /></td>
                    <td className="py-3"><LatexRenderer latex={"0"} /></td>
                  </tr>
                  <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                    <td className="py-3"><LatexRenderer latex={"\\cos x"} /></td>
                    <td className="py-3"><LatexRenderer latex={"1"} /></td>
                    <td className="py-3"><LatexRenderer latex={"\\sqrt{3}/2"} /></td>
                    <td className="py-3"><LatexRenderer latex={"\\sqrt{2}/2"} /></td>
                    <td className="py-3"><LatexRenderer latex={"1/2"} /></td>
                    <td className="py-3"><LatexRenderer latex={"0"} /></td>
                    <td className="py-3"><LatexRenderer latex={"-1"} /></td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3"><LatexRenderer latex={"\\tan x"} /></td>
                    <td className="py-3"><LatexRenderer latex={"0"} /></td>
                    <td className="py-3"><LatexRenderer latex={"\\sqrt{3}/3"} /></td>
                    <td className="py-3"><LatexRenderer latex={"1"} /></td>
                    <td className="py-3"><LatexRenderer latex={"\\sqrt{3}"} /></td>
                    <td className="py-3">---</td>
                    <td className="py-3"><LatexRenderer latex={"0"} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Box>
          <Box color="blue" title="Définition : Fonction tangente">
            La tangente est définie avec des restrictions. Pour <LatexRenderer latex={"x \\in \\mathbb{R} \\setminus \\left\\{ \\frac{\\pi}{2} + k\\pi, \\; k \\in \\mathbb{Z} \\right\\}"} />, on a :
            <LatexRenderer latex={"\\tan x = \\frac{\\sin x}{\\cos x}"} />
            D’où <LatexRenderer latex={"1 + \\tan^2 x = \\frac{1}{\\cos^2 x}"} />. Elle est impaire, <LatexRenderer latex={"\\pi"} />-périodique, et <LatexRenderer latex={"\\forall x \\in D, \\; \\tan'(x) = 1 + \\tan^2 x"} />. De plus, <LatexRenderer latex={"\\tan"} /> est bijective de <LatexRenderer latex={"\\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right["} /> sur <LatexRenderer latex={"\\mathbb{R}"} />.
          </Box>
          <Box color="blue" title="Définition : Fonction arc tangente">
            L’arc tangente est l’inverse de la tangente. Elle est bijective de <LatexRenderer latex={"\\mathbb{R}"} /> sur <LatexRenderer latex={"\\left]-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right["} />, et on a :
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\tan(\\operatorname{Arctan} x) = x"} /></li>
              <li><LatexRenderer latex={"\\operatorname{Arctan}'(x) = \\frac{1}{1 + x^2}"} /></li>
              <li><LatexRenderer latex={"\\lim_{x \\to +\\infty} \\operatorname{Arctan} x = \\frac{\\pi}{2}"} />, <LatexRenderer latex={"\\lim_{x \\to -\\infty} \\operatorname{Arctan} x = -\\frac{\\pi}{2}"} /></li>
            </ul>
          </Box>
        </CardContent>
      </Card>
      {/* 4. Continuité */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">4</span>
            <span>Continuité</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <Box color="blue" title="Définition : Continuité">
            Une fonction <LatexRenderer latex={"f"} /> est <em>continue</em> en <LatexRenderer latex={"x_0"} /> si <LatexRenderer latex={"\\lim_{x \\to x_0} f(x) = f(x_0)"} />.
          </Box>
          <Box color="blue" title="Définition : Continuité à droite">
            Une fonction <LatexRenderer latex={"f"} /> est <em>continue à droite</em> en <LatexRenderer latex={"x_0"} /> si <LatexRenderer latex={"\\lim_{x \\to x_0^+} f(x) = f(x_0)"} />.
          </Box>
          <Box color="blue" title="Définition : Continuité à gauche">
            Une fonction <LatexRenderer latex={"f"} /> est <em>continue à gauche</em> en <LatexRenderer latex={"x_0"} /> si <LatexRenderer latex={"\\lim_{x \\to x_0^-} f(x) = f(x_0)"} />.
          </Box>
          <Box color="green" title="Théorème : Lien gauche/droite">
            Une fonction est continue en <LatexRenderer latex={"x_0"} /> si et seulement si elle est continue à gauche et à droite en <LatexRenderer latex={"x_0"} />.
          </Box>
          <Box color="blue" title="Définition : Prolongement par continuité">
            Si <LatexRenderer latex={"f"} /> admet une limite <LatexRenderer latex={"\\ell"} /> en <LatexRenderer latex={"x_0"} /> sans être définie en <LatexRenderer latex={"x_0"} />, on définit <LatexRenderer latex={"g(x) = f(x)"} /> pour <LatexRenderer latex={"x \\neq x_0"} /> et <LatexRenderer latex={"g(x_0) = \\ell"} />, rendant <LatexRenderer latex={"g"} /> continue en <LatexRenderer latex={"x_0"} />.
          </Box>
          <Box color="blue" title="Définition : Continuité sur un intervalle">
            Une fonction <LatexRenderer latex={"f"} /> est <em>continue</em> sur <LatexRenderer latex={"I"} /> si elle est continue en chaque point de <LatexRenderer latex={"I"} />. L’ensemble des fonctions continues sur <LatexRenderer latex={"I"} /> est noté <LatexRenderer latex={"\\mathcal{C}^0(I)"} />.
          </Box>
          <Box color="blue" title="Définition : Fonctions usuelles continues">
            Les fonctions usuelles sont continues. On a :
            <ul className="mb-2 ml-6">
              <li>Les polynômes</li>
              <li>Les fonctions rationnelles</li>
              <li><LatexRenderer latex={"x \\mapsto |x|"} /></li>
              <li>Les fonctions exponentielle et <LatexRenderer latex={"\\ln"} /></li>
              <li><LatexRenderer latex={"x \\mapsto x^{\\alpha}"} /> (notamment <LatexRenderer latex={"\\sqrt{x}"} /> sur <LatexRenderer latex={"[0, +\\infty["} />)</li>
              <li><LatexRenderer latex={"\\sin"} />, <LatexRenderer latex={"\\cos"} />, <LatexRenderer latex={"\\tan"} />, <LatexRenderer latex={"\\arctan"} /></li>
            </ul>
          </Box>
          <Box color="green" title="Théorème : Opérations et continuité">
            Si <LatexRenderer latex={"f"} /> et <LatexRenderer latex={"g"} /> sont continues sur <LatexRenderer latex={"I"} />, alors <LatexRenderer latex={"f + g"} />, <LatexRenderer latex={"\\lambda f"} /> (<LatexRenderer latex={"\\lambda \\in \\mathbb{R}"} />), et <LatexRenderer latex={"f \\cdot g"} /> sont continues sur <LatexRenderer latex={"I"} />. Si <LatexRenderer latex={"g \\neq 0"} /> sur <LatexRenderer latex={"I"} />, <LatexRenderer latex={"\\frac{f}{g}"} /> est aussi continue.
          </Box>
          <Box color="green" title="Théorème : Composition">
            Si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"I"} /> avec valeurs dans <LatexRenderer latex={"J"} />, et <LatexRenderer latex={"g"} /> est continue sur <LatexRenderer latex={"J"} />, alors <LatexRenderer latex={"g \\circ f"} /> est continue sur <LatexRenderer latex={"I"} />.
          </Box>
          <Box color="green" title="Théorème : Théorème des valeurs intermédiaires">
            Pour <LatexRenderer latex={"f"} /> continue sur <LatexRenderer latex={"[a, b]"} /> avec <LatexRenderer latex={"a < b"} /> et <LatexRenderer latex={"\\lambda"} /> entre <LatexRenderer latex={"f(a)"} /> et <LatexRenderer latex={"f(b)"} />, <LatexRenderer latex={"\\exists c \\in [a, b], \\; f(c) = \\lambda"} />. Conséquence : l’image d’un intervalle par <LatexRenderer latex={"f"} /> est un intervalle.
          </Box>
          <Box color="green" title="Théorème : Image d’un segment">
            Si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"[a, b]"} />, elle est bornée et atteint ses bornes (théorème de Weierstrass).
          </Box>
          <Box color="green" title="Théorème : Bijection continue">
            Si <LatexRenderer latex={"f"} /> est continue et strictement monotone sur <LatexRenderer latex={"I"} />, elle est bijective de <LatexRenderer latex={"I"} /> sur <LatexRenderer latex={"f(I)"} />. Sa réciproque <LatexRenderer latex={"f^{-1}"} /> est continue, conserve le sens de variation, et les courbes de <LatexRenderer latex={"f"} /> et <LatexRenderer latex={"f^{-1}"} /> sont symétriques par rapport à <LatexRenderer latex={"y = x"} />.
          </Box>
        </CardContent>
      </Card>
      {/* 5. Limites */}
      <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
            <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">5</span>
            <span>Limites</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <Box color="blue" title="Définition : Limite finie en un point">
            <LatexRenderer latex={"\\lim_{x \\to x_0} f(x) = \\ell \\iff \\forall \\varepsilon > 0, \\; \\exists \\alpha > 0, \\; 0 < |x - x_0| < \\alpha \\implies |f(x) - \\ell| < \\varepsilon"} />
          </Box>
          <Box color="green" title="Théorème : Unicité">
            Une limite en <LatexRenderer latex={"x_0"} />, si elle existe, est unique.
          </Box>
          <Box color="blue" title="Définition : Limites unilatérales">
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\lim_{x \\to x_0^-} f(x) = \\ell \\iff \\forall \\varepsilon > 0, \\; \\exists \\alpha > 0, \\; x_0 - \\alpha < x < x_0 \\implies |f(x) - \\ell| < \\varepsilon"} /></li>
              <li><LatexRenderer latex={"\\lim_{x \\to x_0^+} f(x) = \\ell \\iff \\forall \\varepsilon > 0, \\; \\exists \\alpha > 0, \\; x_0 < x < x_0 + \\alpha \\implies |f(x) - \\ell| < \\varepsilon"} /></li>
            </ul>
          </Box>
          <Box color="green" title="Théorème : Lien avec les limites unilatérales">
            <LatexRenderer latex={"\\lim_{x \\to x_0} f(x) = \\ell \\iff \\lim_{x \\to x_0^-} f(x) = \\ell \\text{ et } \\lim_{x \\to x_0^+} f(x) = \\ell"} />
          </Box>
          <Box color="blue" title="Définition : Limite infinie en un point">
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\lim_{x \\to x_0} f(x) = +\\infty \\iff \\forall A > 0, \\; \\exists \\alpha > 0, \\; 0 < |x - x_0| < \\alpha \\implies f(x) > A"} /></li>
              <li><LatexRenderer latex={"\\lim_{x \\to x_0} f(x) = -\\infty \\iff \\forall A > 0, \\; \\exists \\alpha > 0, \\; 0 < |x - x_0| < \\alpha \\implies f(x) < -A"} /></li>
            </ul>
          </Box>
          <Box color="blue" title="Définition : Limite finie à l’infini">
            <LatexRenderer latex={"\\lim_{x \\to +\\infty} f(x) = \\ell \\iff \\forall \\varepsilon > 0, \\; \\exists B > 0, \\; x > B \\implies |f(x) - \\ell| < \\varepsilon"} />
          </Box>
          <Box color="blue" title="Définition : Limite infinie à l’infini">
            <LatexRenderer latex={"\\lim_{x \\to +\\infty} f(x) = +\\infty \\iff \\forall A > 0, \\; \\exists B > 0, \\; x > B \\implies f(x) > A"} />
          </Box>
          <Box color="green" title="Théorème : Opérations sur les limites">
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\lim_{x \\to a} [f(x) + g(x)] = \\ell + m"} /></li>
              <li>Si <LatexRenderer latex={"\\ell \\neq 0"} />, <LatexRenderer latex={"\\lim_{x \\to a} \\frac{1}{f(x)} = \\frac{1}{\\ell}"} /></li>
            </ul>
          </Box>
          <Box color="green" title="Théorème : Limites usuelles">
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1"} /></li>
            </ul>
          </Box>
          <Box color="green" title="Théorème : Croissances comparées">
            <ul className="mb-2 ml-6">
              <li><LatexRenderer latex={"\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = 0, \\quad \\lim_{x \\to +\\infty} x^n e^{-x} = 0 \\quad (n \\in \\mathbb{N}^*)"} /></li>
            </ul>
          </Box>
        </CardContent>
      </Card>
    </div>
  </MathChapterTemplate>
);

export default MathsFonctionsPage;
