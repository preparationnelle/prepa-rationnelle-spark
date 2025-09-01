import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre5ComplementsVariablesAleatoiresExercicesPage = () => {
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
    stars,
    color = "orange"
  }: {
    level: string;
    title: string;
    icon: any;
    stars: number;
    color?: string;
  }) => (
    <div className={`bg-gradient-to-r from-${color}-50 to-${color}-25 border-l-4 border-${color}-400 p-4 mb-4 rounded-r-lg shadow-sm`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 bg-${color}-500 text-white rounded-lg`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{level} : {title}</h2>
          <div className="flex gap-1 mt-1">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 fill-${color}-500 text-${color}-500`} />
            ))}
            {[...Array(4-stars)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-gray-300" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formations" className="hover:text-blue-700 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-blue-700 transition-colors">
              Choix parcours Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/formation/maths-approfondies-2e-annee" className="hover:text-blue-700 transition-colors">
              Maths Approfondies - 2ème année
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-orange-600 font-medium">Chapitre 5 : Compléments sur les variables aléatoires</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Chapitre 5 : Compléments sur les variables aléatoires</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Séries de variables aléatoires, convergence et calculs d'espérance et variance
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link to="/formation/maths-complements-variables-aleatoires">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                <BookOpen className="mr-2 h-4 w-4" />
                Cours
              </Button>
            </Link>
            <Link to="/formation/maths-complements-variables-aleatoires-quiz">
              <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </div>

        {/* Niveau Facile */}
        <DifficultyHeader
          level="Niveau 1"
          title="Séries de variables aléatoires et convergence"
          icon={Lightbulb}
          stars={2}
          color="blue"
        />

        {/* Exercice 2.1 */}
        <Card className="mb-6 shadow-md border-0">
          <div className="bg-blue-50 px-6 py-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-blue-800">Exercice 2.1 - Série convergente et variables aléatoires</h3>
              <Button
                onClick={() => toggleCorrection('ex2_1')}
                variant="outline"
                size="sm"
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                {visibleCorrections['ex2_1'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {visibleCorrections['ex2_1'] ? 'Masquer' : 'Afficher'} la correction
              </Button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
              <LatexRenderer>
                {`Soit $(u_n)_{n\\geq 1}$ la suite définie, pour $n\\geq 1$, par
$$u_n=\\frac{1}{n(n+1)}.$$

1. Montrer que $\\displaystyle\\sum_{n\\geq 1}u_n$ converge et que
$$\\sum_{n=1}^{+\\infty}u_n=1.$$

2. Soit $X$ une variable aléatoire à valeurs dans $\\mathbb{N}^*$ telle que, pour tout $n\\geq 1$,
$$\\mathbb{P}(X=n)=u_n.$$
$X$ admet-elle une espérance ? une variance ?

Même questions pour la variable aléatoire $\\sqrt{X}$.`}
              </LatexRenderer>
            </div>

            {visibleCorrections['ex2_1'] && (
              <div className="bg-green-50 rounded-lg border border-green-200 p-4">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <Target className="h-4 w-4 mr-2" />
                  Correction détaillée
                </h4>
                <LatexRenderer>
                  {`**1)** On observe la décomposition en différences télescopiques
$$u_n=\\frac{1}{n}-\\frac{1}{n+1}\\qquad (n\\geq 1).$$
Ainsi, pour $N\\geq 1$,
$$\\sum_{k=1}^{N}u_k=\\sum_{k=1}^{N}\\left(\\frac{1}{k}-\\frac{1}{k+1}\\right)
=1-\\frac{1}{N+1}.$$
En faisant tendre $N\\to+\\infty$, on obtient
$$\\sum_{n=1}^{+\\infty}u_n=\\lim_{N\\to\\infty}\\left(1-\\frac{1}{N+1}\\right)=1.$$
La série $\\sum u_n$ converge donc, et sa somme vaut $1$.

**2) Étude de $X$.**
Par définition (et comme les termes sont positifs), $X$ admet une espérance si et seulement si
$$\\sum_{k\\geq 1}k\\,\\mathbb{P}(X=k)=\\sum_{k\\geq 1}\\frac{k}{k(k+1)}=\\sum_{k\\geq 1}\\frac{1}{k+1}$$
converge. Or $\\frac{1}{k+1}\\sim \\frac{1}{k}$ et la série harmonique diverge ; donc $X$ **n'admet pas** d'espérance.

Pour la variance, il faut l'existence du moment d'ordre $2$ :
$$\\sum_{k\\geq 1}k^{2}\\,\\mathbb{P}(X=k)=\\sum_{k\\geq 1}\\frac{k^{2}}{k(k+1)}
=\\sum_{k\\geq 1}\\frac{k}{k+1}$$
et comme $\\frac{k}{k+1}\\to 1$ quand $k\\to\\infty$, la série diverge. Ainsi $X$ n'admet pas de moment d'ordre $2$, donc **pas de variance**.

**3) Étude de $\\sqrt{X}$.**
Par le théorème de transfert (formule de l'espérance pour une fonction $g$ de $X$),
$$\\mathbb{E}[\\sqrt{X}]\\text{ existe } \\Leftrightarrow 
\\sum_{n\\geq 1}\\sqrt{n}\\,\\mathbb{P}(X=n)=\\sum_{n\\geq 1}\\frac{\\sqrt{n}}{n(n+1)} \\text{ converge.}$$
Or
$$\\frac{\\sqrt{n}}{n(n+1)}\\sim\\frac{\\sqrt{n}}{n^{2}}=\\frac{1}{n^{3/2}},$$
et la série de Riemann de paramètre $p=\\frac{3}{2}>1$ converge ; donc $\\sqrt{X}$ **admet une espérance**.

En revanche, 
$$\\mathbb{E}[(\\sqrt{X})^{2}]=\\mathbb{E}[X]$$
n'existe pas (voir ci-dessus) : $\\sqrt{X}$ n'admet donc pas de moment d'ordre $2$, et par conséquent **pas de variance**.`}
                </LatexRenderer>
              </div>
            )}
          </div>
        </Card>

        {/* Liens de navigation */}
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/formation/maths-approfondies-2e-annee">
            <Button variant="outline" className="border-2 border-gray-400 text-gray-600 hover:bg-gray-50">
              ← Retour au cours
            </Button>
          </Link>
          <Link to="/formation/maths-complements-variables-aleatoires-quiz">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Quiz du chapitre →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapitre5ComplementsVariablesAleatoiresExercicesPage;
