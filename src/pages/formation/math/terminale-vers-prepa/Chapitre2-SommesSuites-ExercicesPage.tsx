import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Sigma } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre2SommesSuitesExercicesPage = () => {
  const [visibleCorrections, setVisibleCorrections] = useState<{[key: string]: boolean}>({});

  const toggleCorrection = (exerciseId: string) => {
    setVisibleCorrections(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const DifficultyHeader = ({
    level,
    title,
    icon: Icon,
  }: {
    level: string;
    title: string;
    icon: any;
  }) => (
    <div className="bg-gray-100 border-l-4 border-gray-400 p-6 mb-8 rounded-r-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
          <Icon className="w-5 h-5 text-gray-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{level} : {title}</h2>
        </div>
      </div>
    </div>
  );

  const ExerciseCard = ({
    id,
    title,
    content,
    correction,
    difficulty
  }: {
    id: string;
    title: string;
    content: React.ReactNode;
    correction: React.ReactNode;
    difficulty: string;
  }) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-6">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
            {title}
          </div>
          <div className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-200">
            {difficulty}
          </div>
        </div>

        <div className="mb-4">
          {content}
        </div>

        <Button
          onClick={() => toggleCorrection(id)}
          variant={visibleCorrections[id] ? "outline" : "default"}
          className="mb-4"
        >
          {visibleCorrections[id] ? "Masquer la correction" : "Afficher la correction"}
        </Button>

        {visibleCorrections[id] && (
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Corrigé détaillé</h4>
            <div className="text-gray-800">
              {correction}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-700">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-gray-900 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-gray-900 transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices - Chapitre 2</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sommes — 5 exercices (Terminale)
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            Formation mathématiques pour bien réussir la transition lycée → prépa ECG
          </p>
          <p className="text-gray-600 text-sm">
            Énoncés puis corrigés
          </p>
        </div>

        <DifficultyHeader
          level="Chapitre 2"
          title="Sommes, suites et produits"
          icon={Sigma}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <h3 className="text-lg font-semibold mb-3">Somme d'une suite arithmétique</h3>
              <p className="mb-4">On considère la suite <span className="inline-block align-middle"><LatexRenderer latex={"(u_k)"} /></span> définie pour <span className="inline-block align-middle"><LatexRenderer latex={"k \\in \\{1,2,\\dots,50\\}"} /></span> par</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"u_k = 3 + 2k."} />
              </div>
              <p className="mb-4">Calculer la somme</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"S = \\sum_{k=1}^{50} u_k."} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="mb-3">C'est une <strong>suite arithmétique</strong> de raison <span className="inline-block align-middle"><LatexRenderer latex={"r=2"} /></span>. On a</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"u_1 = 3 + 2\\cdot 1 = 5, \\qquad u_{50} = 3 + 2\\cdot 50 = 103."} />
                </div>
              </div>
              <div>
                <p className="mb-3">La somme des 50 premiers termes vaut</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S = \\frac{n(u_1 + u_n)}{2} = \\frac{50(5+103)}{2} = \\frac{50\\cdot 108}{2} = 50\\cdot 54 = \\boxed{2700}."} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex2"
          title="Exercice 2"
          difficulty="Moyen"
          content={
            <div>
              <h3 className="text-lg font-semibold mb-3">Somme géométrique finie</h3>
              <p className="mb-4">Calculer la somme</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"S = \\sum_{k=0}^{8} 5\\cdot (0{,}8)^k."} />
              </div>
              <p className="mb-4">Donner une forme exacte et une valeur approchée à <span className="inline-block align-middle"><LatexRenderer latex={"10^{-3}"} /></span> près.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="mb-3">Il s'agit d'une <strong>suite géométrique</strong> de premier terme <span className="inline-block align-middle"><LatexRenderer latex={"a=5"} /></span> et de raison <span className="inline-block align-middle"><LatexRenderer latex={"q=0{,}8"} /></span>, avec 9 termes (de <span className="inline-block align-middle"><LatexRenderer latex={"k=0"} /></span> à <span className="inline-block align-middle"><LatexRenderer latex={"k=8"} /></span>).</p>
                <p className="mb-3">Formule de la somme géométrique finie (<span className="inline-block align-middle"><LatexRenderer latex={"q\\neq 1"} /></span>) :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S = a\\,\\frac{1-q^{n}}{1-q} \\quad\\text{avec } n=9."} />
                </div>
              </div>
              <div>
                <p className="mb-3">Ainsi,</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S = 5\\,\\frac{1-(0{,}8)^9}{1-0{,}8} = \\frac{5}{0{,}2}\\bigl(1-(0{,}8)^9\\bigr) = 25\\bigl(1-(0{,}8)^9\\bigr)."} />
                </div>
                <p className="mb-3">Forme exacte : <span className="inline-block align-middle"><LatexRenderer latex={"\\boxed{S = 25\\bigl(1-(0{,}8)^9\\bigr)}"} /></span>.</p>
              </div>
              <div>
                <p className="mb-3">Comme <span className="inline-block align-middle"><LatexRenderer latex={"(0{,}8)^9 = 0{,}134\\,217\\,728"} /></span>, on obtient</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S \\approx 25\\,(1-0{,}134\\,217\\,728) = 25\\times 0{,}865\\,782\\,272 \\approx \\boxed{21{,}645}."} />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Difficile"
          content={
            <div>
              <h3 className="text-lg font-semibold mb-3">Écriture télescopique</h3>
              <div className="mb-4">
                <p className="mb-3"><strong>a)</strong> Montrer que pour tout entier <span className="inline-block align-middle"><LatexRenderer latex={"n\\ge 1"} /></span>,</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=1}^{n} \\frac{1}{k(k+1)} \\;=\\; 1 - \\frac{1}{n+1}."} />
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-3"><strong>b)</strong> En déduire la valeur numérique de <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\sum_{k=1}^{20} \\frac{1}{k(k+1)}"} /></span>.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="mb-3"><strong>a)</strong> On décompose en <em>fractions partielles</em> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}."} />
                </div>
                <p className="mb-3">Donc la somme est télescopique :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=1}^{n}\\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1 - \\frac{1}{n+1}."} />
                </div>
              </div>
              <div>
                <p className="mb-3"><strong>b)</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"n=20"} /></span>,</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\sum_{k=1}^{20} \\frac{1}{k(k+1)} = 1 - \\frac{1}{21} = \\frac{20}{21}."} />
                </div>
                <p className="mb-3">Ainsi, <span className="inline-block align-middle"><LatexRenderer latex={"\\displaystyle \\boxed{\\sum_{k=1}^{20} \\frac{1}{k(k+1)} = \\frac{20}{21}}"} /></span>.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4"
          title="Exercice 4"
          difficulty="Moyen"
          content={
            <div>
              <h3 className="text-lg font-semibold mb-3">Somme télescopique</h3>
              <p className="mb-4">Calculer la somme <span className="inline-block align-middle"><LatexRenderer latex={"S_n = \\sum_{k=1}^n \\frac{1}{k(k+1)}"} /></span>.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="mb-3">Pour calculer cette somme, nous commençons par décomposer la fraction en éléments simples.</p>
                <p className="mb-3">Observons que :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\frac{1}{k(k+1)} = \\frac{A}{k} + \\frac{B}{k+1}."} />
                </div>
              </div>
              <div>
                <p className="mb-3">En résolvant pour <span className="inline-block align-middle"><LatexRenderer latex={"A"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"B"} /></span> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"1 = A(k+1) + Bk \\implies 1 = Ak + A + Bk."} />
                </div>
                <div className="text-center my-4">
                  <LatexRenderer latex={"(A + B)k + A = 1 \\implies A = 1, \\, A + B = 0 \\implies B = -1."} />
                </div>
              </div>
              <div>
                <p className="mb-3">Ainsi :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}."} />
                </div>
              </div>
              <div>
                <p className="mb-3">La somme s'écrit alors :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S_n = \\sum_{k=1}^n \\left( \\frac{1}{k} - \\frac{1}{k+1} \\right)."} />
                </div>
              </div>
              <div>
                <p className="mb-3">Cette somme est télescopique, c'est-à-dire que la plupart des termes s'annulent :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S_n = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\left(\\frac{1}{3} - \\frac{1}{4}\\right) + \\cdots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right)."} />
                </div>
              </div>
              <div>
                <p className="mb-3">Tous les termes intermédiaires se simplifient, et il reste :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S_n = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}."} />
                </div>
                <p className="text-sm text-green-700 mt-3">
                  <strong>Vérification :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"n=1"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"S_1 = 1/2"} /></span>. Pour <span className="inline-block align-middle"><LatexRenderer latex={"n=2"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"1/2 + 1/6 = 2/3"} /></span>. ✓
                </p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Difficile"
          content={
            <div>
              <h3 className="text-lg font-semibold mb-3">Somme des carrés</h3>
              <p className="mb-4">Calculer la somme <span className="inline-block align-middle"><LatexRenderer latex={"S_n = \\sum_{k=1}^n k^2"} /></span> et démontrer la formule par récurrence.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="mb-3">La formule conjecturée pour la somme des carrés est :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S_n = \\frac{n(n+1)(2n+1)}{6}."} />
                </div>
                <p className="mb-3">Nous allons la démontrer par récurrence sur <span className="inline-block align-middle"><LatexRenderer latex={"n \\geq 1"} /></span>.</p>
              </div>
              <div>
                <p className="mb-3"><strong>Initialisation :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"n=1"} /></span>,</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S_1 = 1^2 = 1, \\quad \\frac{1 \\cdot 2 \\cdot 3}{6} = 1."} />
                </div>
                <p className="mb-3">Vrai.</p>
              </div>
              <div>
                <p className="mb-3"><strong>Hérédité :</strong> Supposons la formule vraie pour un certain <span className="inline-block align-middle"><LatexRenderer latex={"n \\geq 1"} /></span>, c'est-à-dire <span className="inline-block align-middle"><LatexRenderer latex={"S_n = \\frac{n(n+1)(2n+1)}{6}"} /></span>.</p>
                <p className="mb-3">Montrons-la pour <span className="inline-block align-middle"><LatexRenderer latex={"n+1"} /></span> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S_{n+1} = S_n + (n+1)^2 = \\frac{n(n+1)(2n+1)}{6} + (n+1)^2."} />
                </div>
              </div>
              <div>
                <p className="mb-3">Factorisons <span className="inline-block align-middle"><LatexRenderer latex={"(n+1)"} /></span> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S_{n+1} = (n+1) \\left[ \\frac{n(2n+1)}{6} + (n+1) \\right] = (n+1) \\left[ \\frac{n(2n+1) + 6(n+1)}{6} \\right]."} />
                </div>
              </div>
              <div>
                <p className="mb-3">Développons le numérateur :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"n(2n+1) + 6(n+1) = 2n^2 + n + 6n + 6 = 2n^2 + 7n + 6."} />
                </div>
              </div>
              <div>
                <p className="mb-3">Factorisons <span className="inline-block align-middle"><LatexRenderer latex={"2n^2 + 7n + 6 = (2n+3)(n+2)"} /></span> :</p>
                <div className="text-center my-4">
                  <LatexRenderer latex={"S_{n+1} = (n+1) \\cdot \\frac{(2n+3)(n+2)}{6} = \\frac{(n+1)(n+2)(2n+3)}{6}."} />
                </div>
              </div>
              <div>
                <p className="mb-3">C'est exactement la formule pour <span className="inline-block align-middle"><LatexRenderer latex={"n+1"} /></span>, où <span className="inline-block align-middle"><LatexRenderer latex={"(n+1)"} /></span> remplace <span className="inline-block align-middle"><LatexRenderer latex={"n"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"(n+2) = (n+1)+1"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"2(n+1)+1 = 2n+3"} /></span>.</p>
                <p className="mb-3">Par récurrence, la formule est vraie pour tout entier naturel <span className="inline-block align-middle"><LatexRenderer latex={"n \\geq 1"} /></span>.</p>
                <p className="text-sm text-green-700 mt-3">
                  <strong>Vérification :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"n=2"} /></span>: <span className="inline-block align-middle"><LatexRenderer latex={"1+4=5"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{2\\cdot3\\cdot5}{6}=5"} /></span>. Pour <span className="inline-block align-middle"><LatexRenderer latex={"n=3"} /></span>: <span className="inline-block align-middle"><LatexRenderer latex={"5+9=14"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{3\\cdot4\\cdot7}{6}=14"} /></span>. ✓
                </p>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Chapitre2SommesSuitesExercicesPage;