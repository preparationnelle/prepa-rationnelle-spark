import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage = () => {
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
    color = "blue" 
  }: { 
    level: string; 
    title: string; 
    icon: any; 
    stars: number; 
    color?: string; 
  }) => (
    <div className={`bg-gradient-to-r from-${color}-100 to-${color}-50 border-l-4 border-${color}-500 p-6 mb-6 rounded-r-lg shadow-sm`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 bg-${color}-500 text-white rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{level} : {title}</h2>
          <div className="flex gap-1 mt-1">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 fill-${color}-500 text-${color}-500`} />
            ))}
            {[...Array(4-stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gray-300" />
            ))}
          </div>
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
    <Card className="mb-6 border-0 shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            {title}
          </div>
          <div className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
            {difficulty}
          </div>
        </div>
        
        <div className="mb-4">
          {content}
        </div>
        
        <Button
          onClick={() => toggleCorrection(id)}
          variant={visibleCorrections[id] ? "secondary" : "default"}
          className="mb-4"
        >
          {visibleCorrections[id] ? "Masquer la correction" : "Afficher la correction"}
        </Button>
        
        {visibleCorrections[id] && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-green-800 mb-2">Corrigé détaillé</h4>
            <div className="text-green-800">
              {correction}
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-approfondies" className="hover:text-[#1e3a8a] transition-colors">
              Maths Approfondies
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 3</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 3 : Sommes, produits & coefficients binomiaux
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les sommes, produits et coefficients binomiaux.
            </p>
          </div>
        </Card>

        {/* Niveau 1 : Sommes et formules fermées */}
        <DifficultyHeader
          level="Niveau 1"
          title="Sommes et formules fermées"
          icon={BookOpen}
          stars={1}
        />

        <ExerciseCard
          id="1.1"
          title="Exercice 1.1"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-2">Calculer les sommes suivantes en utilisant les formules appropriées :</p>
              <div className="space-y-2">
                <LatexRenderer latex={"a) \\sum_{i=1}^{5} 4"} />
                <LatexRenderer latex={"b) \\sum_{i=1}^{4} i^2"} />
                <LatexRenderer latex={"c) \\sum_{i=0}^{5} 2^i"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-semibold">a) Pour une somme constante :</p>
                <LatexRenderer latex={"\\sum_{i=1}^{5} 4 = (5-1+1) \\times 4 = 5 \\times 4 = 20"} />
                <p className="mt-1">Vérifions : 4 + 4 + 4 + 4 + 4 = 20</p>
              </div>
              <div>
                <p className="font-semibold">b) Pour la somme des carrés :</p>
                <LatexRenderer latex={"\\sum_{i=1}^{4} i^2 = \\frac{4 \\times 5 \\times 9}{6} = \\frac{180}{6} = 30"} />
                <p className="mt-1">Vérifions : 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30</p>
              </div>
              <div>
                <p className="font-semibold">c) Pour une somme géométrique :</p>
                <LatexRenderer latex={"\\sum_{i=0}^{5} 2^i = \\frac{2^6-1}{2-1} = \\frac{64-1}{1} = 63"} />
                <p className="mt-1">Vérifions : 1 + 2 + 4 + 8 + 16 + 32 = 63</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="1.2"
          title="Exercice 1.2"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-2">Soient x₁ = 3i et y₁ = 2. Calculer :</p>
              <LatexRenderer latex={"\\sum_{i=1}^{3} (x_i + 2y_i)"} />
            </div>
          }
          correction={
            <div>
              <p className="mb-2">Résolution :</p>
              <div className="space-y-2">
                <p>1) D'abord, exprimons x₁ + 2y₁ :</p>
                <LatexRenderer latex={"x_i + 2y_i = 3i + 2 \\times 2 = 3i + 4"} />
                <p>2) La somme devient :</p>
                <LatexRenderer latex={"\\sum_{i=1}^{3} (3i + 4) = 3\\sum_{i=1}^{3} i + \\sum_{i=1}^{3} 4"} />
                <p>3) Calculons chaque partie :</p>
                <LatexRenderer latex={"3\\sum_{i=1}^{3} i = 3 \\times \\frac{3 \\times 4}{2} = 18"} />
                <LatexRenderer latex={"\\sum_{i=1}^{3} 4 = 3 \\times 4 = 12"} />
                <p>4) Total :</p>
                <LatexRenderer latex={"18 + 12 = 30"} />
                <p>Vérifions : Pour i = 1 : 7, i = 2 : 10, i = 3 : 13, somme = 30</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="1.3"
          title="Exercice 1.3"
          difficulty="Difficile"
          content={
            <div>
              <p className="mb-2">Montrer que pour tout n ≥ 1 :</p>
              <LatexRenderer latex={"\\sum_{i=1}^{n} i \\cdot 3^i = \\frac{3^{n+1} (n - 1) + 3}{4}"} />
            </div>
          }
          correction={
            <div>
              <p className="mb-2">Démonstration par récurrence :</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">1) Initialisation (n = 1) :</p>
                  <LatexRenderer latex={"\\sum_{i=1}^{1} i \\cdot 3^i = 1 \\cdot 3^1 = 3"} />
                  <LatexRenderer latex={"\\frac{3^{1+1} (1 - 1) + 3}{4} = \\frac{9 \\cdot 0 + 3}{4} = \\frac{3}{4} = 3"} />
                </div>
                <div>
                  <p className="font-semibold">2) Hérédité :</p>
                  <p>Supposons la propriété vraie au rang n :</p>
                  <LatexRenderer latex={"\\sum_{i=1}^{n} i \\cdot 3^i = \\frac{3^{n+1} (n - 1) + 3}{4}"} />
                  <p>Au rang n+1 :</p>
                  <LatexRenderer latex={"\\sum_{i=1}^{n+1} i \\cdot 3^i = \\sum_{i=1}^{n} i \\cdot 3^i + (n+1) \\cdot 3^{n+1}"} />
                  <LatexRenderer latex={"= \\frac{3^{n+1} (n - 1) + 3}{4} + (n+1) \\cdot 3^{n+1}"} />
                  <LatexRenderer latex={"= \\frac{3^{n+1} (n - 1) + 3 + 4(n+1) \\cdot 3^{n+1}}{4}"} />
                  <LatexRenderer latex={"= \\frac{3^{n+1} (5n + 3) + 3}{4}"} />
                  <LatexRenderer latex={"= \\frac{3^{n+2} (n) + 3}{4}"} />
                </div>
                <p>La propriété est donc vraie pour tout n ≥ 1.</p>
              </div>
            </div>
          }
        />

        {/* Niveau 2 : Techniques de manipulation */}
        <DifficultyHeader
          level="Niveau 2"
          title="Techniques de manipulation"
          icon={Lightbulb}
          stars={2}
          color="green"
        />

        <ExerciseCard
          id="2.1"
          title="Exercice 2.1"
          difficulty="Intermédiaire"
          content={
            <div>
              <p className="mb-2">Soit la somme :</p>
              <LatexRenderer latex={"\\sum_{i=3}^{7} (2i^2 - 1)"} />
              <p className="mt-2">a) Calculer directement la somme</p>
              <p>b) Réécrire avec un changement d'indice j = i - 3 et calculer</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-semibold">a) Calcul direct :</p>
                <p>Calculons terme par terme :</p>
                <LatexRenderer latex={"i = 3: 2(3^2) - 1 = 18 - 1 = 17"} />
                <LatexRenderer latex={"i = 4: 2(4^2) - 1 = 32 - 1 = 31"} />
                <LatexRenderer latex={"i = 5: 2(5^2) - 1 = 50 - 1 = 49"} />
                <LatexRenderer latex={"i = 6: 2(6^2) - 1 = 72 - 1 = 71"} />
                <LatexRenderer latex={"i = 7: 2(7^2) - 1 = 98 - 1 = 97"} />
                <LatexRenderer latex={"\\text{Total} = 17 + 31 + 49 + 71 + 97 = 265"} />
              </div>
              <div>
                <p className="font-semibold">b) Avec changement d'indice j = i - 3 :</p>
                <p>Les nouvelles bornes sont : j = 0 à 4</p>
                <LatexRenderer latex={"\\sum_{j=0}^{4} [2(j+3)^2 - 1]"} />
                <LatexRenderer latex={"= \\sum_{j=0}^{4} (2j^2 + 12j + 18 - 1)"} />
                <LatexRenderer latex={"= \\sum_{j=0}^{4} (2j^2 + 12j + 17)"} />
                <p>On retrouve 265 en calculant cette somme</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="2.2"
          title="Exercice 2.2"
          difficulty="Intermédiaire"
          content={
            <div>
              <p className="mb-2">Montrer que :</p>
              <LatexRenderer latex={"\\sum_{i=1}^{n} (4i^2 + 2i) = \\frac{2n(n+1)(2n+3)}{3}"} />
            </div>
          }
          correction={
            <div className="space-y-3">
              <div>
                <p className="font-semibold">1) Décomposons la somme :</p>
                <LatexRenderer latex={"\\sum_{i=1}^{n} (4i^2 + 2i) = 4\\sum_{i=1}^{n} i^2 + 2\\sum_{i=1}^{n} i"} />
              </div>
              <div>
                <p className="font-semibold">2) Utilisons les formules connues :</p>
                <LatexRenderer latex={"\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}"} />
                <LatexRenderer latex={"\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}"} />
              </div>
              <div>
                <p className="font-semibold">3) Substituons :</p>
                <LatexRenderer latex={"4 \\cdot \\frac{n(n+1)(2n+1)}{6} + 2 \\cdot \\frac{n(n+1)}{2}"} />
                <LatexRenderer latex={"= \\frac{2n(n+1)(2n+1)}{3} + n(n+1)"} />
              </div>
              <div>
                <p className="font-semibold">4) Factorisons :</p>
                <LatexRenderer latex={"= n(n+1) \\left[ \\frac{2(2n+1)}{3} + 1 \\right]"} />
                <LatexRenderer latex={"= n(n+1) \\cdot \\frac{4n + 5}{3}"} />
                <LatexRenderer latex={"= \\frac{2n(n+1)(2n+3)}{3}"} />
              </div>
            </div>
          }
        />

        {/* Niveau 3 : Sommes doubles */}
        <DifficultyHeader
          level="Niveau 3"
          title="Sommes doubles et produits"
          icon={Target}
          stars={3}
          color="orange"
        />

        <ExerciseCard
          id="3.1"
          title="Exercice 3.1"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-2">Calculer la somme double :</p>
              <LatexRenderer latex={"\\sum_{i=1}^{2} \\sum_{j=1}^{2} (i + 2j)"} />
            </div>
          }
          correction={
            <div>
              <p className="mb-2">Résolution :</p>
              <div className="space-y-2">
                <p>1) Calculons d'abord la somme intérieure pour i = 1 :</p>
                <LatexRenderer latex={"\\sum_{j=1}^{2} (1 + 2j) = (1 + 2) + (1 + 4) = 8"} />
                <p>2) Pour i = 2 :</p>
                <LatexRenderer latex={"\\sum_{j=1}^{2} (2 + 2j) = (2 + 2) + (2 + 4) = 10"} />
                <p>3) Total :</p>
                <LatexRenderer latex={"8 + 10 = 18"} />
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="3.2"
          title="Exercice 3.2"
          difficulty="Avancé"
          content={
            <div>
              <p className="mb-2">Écrire sous forme de somme double avec indices indépendants, puis calculer :</p>
              <LatexRenderer latex={"\\sum_{1 \\leq i < j \\leq 3} (i \\cdot j)"} />
            </div>
          }
          correction={
            <div className="space-y-3">
              <div>
                <p className="font-semibold">1) Réécriture :</p>
                <LatexRenderer latex={"\\sum_{j=2}^{3} \\sum_{i=1}^{j-1} (i \\cdot j)"} />
              </div>
              <div>
                <p className="font-semibold">2) Calcul pour j = 2 :</p>
                <LatexRenderer latex={"\\sum_{i=1}^{1} (i \\cdot 2) = 1 \\cdot 2 = 2"} />
              </div>
              <div>
                <p className="font-semibold">3) Calcul pour j = 3 :</p>
                <LatexRenderer latex={"\\sum_{i=1}^{2} (i \\cdot 3) = 1 \\cdot 3 + 2 \\cdot 3 = 9"} />
              </div>
              <div>
                <p className="font-semibold">4) Total :</p>
                <LatexRenderer latex={"2 + 9 = 11"} />
              </div>
              <p>Vérifions : les paires (i,j) sont (1,2), (1,3) et (2,3), donnant 2 + 3 + 6 = 11</p>
            </div>
          }
        />

        {/* Niveau 4 : Coefficients binomiaux */}
        <DifficultyHeader
          level="Niveau 4"
          title="Coefficients binomiaux"
          icon={Crown}
          stars={4}
          color="purple"
        />

        <ExerciseCard
          id="4.1"
          title="Exercice 4.1"
          difficulty="Expert"
          content={
            <div>
              <p className="mb-2">Calculer :</p>
              <div className="space-y-2">
                <LatexRenderer latex={"a) \\binom{5}{2}"} />
                <LatexRenderer latex={"b) \\binom{6}{4}"} />
                <LatexRenderer latex={"c) \\binom{8}{0}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <p className="font-semibold">a) Calcul de ⁵C₂ :</p>
                <LatexRenderer latex={"\\binom{5}{2} = \\frac{5!}{2!(5-2)!} = \\frac{5 \\times 4}{2 \\times 1} = 10"} />
              </div>
              <div>
                <p className="font-semibold">b) Calcul de ⁶C₄ :</p>
                <LatexRenderer latex={"\\binom{6}{4} = \\frac{6!}{4!(6-4)!} = \\frac{6 \\times 5}{2 \\times 1} = 15"} />
              </div>
              <div>
                <p className="font-semibold">c) Calcul de ⁸C₀ :</p>
                <LatexRenderer latex={"\\binom{8}{0} = 1"} />
                <p className="mt-1">Car tout nombre combiné à 0 donne 1</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="4.2"
          title="Exercice 4.2"
          difficulty="Expert"
          content={
            <div>
              <p className="mb-2">Vérifier la relation pour n = 6, p = 3 :</p>
              <LatexRenderer latex={"p(p-1) \\binom{n}{p} = n(n-1) \\binom{n-2}{p-2}"} />
            </div>
          }
          correction={
            <div className="space-y-3">
              <div>
                <p className="font-semibold">1) Calculons le membre de gauche :</p>
                <LatexRenderer latex={"3(3-1) \\binom{6}{3} = 6 \\times \\frac{6!}{3!(6-3)!}"} />
                <LatexRenderer latex={"= 6 \\times \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 6 \\times 20 = 120"} />
              </div>
              <div>
                <p className="font-semibold">2) Calculons le membre de droite :</p>
                <LatexRenderer latex={"6(6-1) \\binom{4}{1} = 30 \\times 4 = 120"} />
              </div>
              <p>L'égalité est vérifiée car les deux membres sont égaux à 120.</p>
            </div>
          }
        />

        <ExerciseCard
          id="4.3"
          title="Exercice 4.3"
          difficulty="Expert"
          content={
            <div>
              <p className="mb-2">Développer (3x + 1)³ en utilisant la formule du binôme de Newton.</p>
            </div>
          }
          correction={
            <div className="space-y-3">
              <p className="font-semibold">Utilisons la formule :</p>
              <LatexRenderer latex={"(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^k b^{n-k}"} />
              <p>Avec a = 3x, b = 1, n = 3 :</p>
              <LatexRenderer latex={"\\sum_{k=0}^{3} \\binom{3}{k} (3x)^k (1)^{3-k}"} />
              <div className="space-y-2">
                <LatexRenderer latex={"k=0: \\binom{3}{0}(3x)^0(1)^3 = 1"} />
                <LatexRenderer latex={"k=1: \\binom{3}{1}(3x)^1(1)^2 = 3(3x) = 9x"} />
                <LatexRenderer latex={"k=2: \\binom{3}{2}(3x)^2(1)^1 = 3(9x^2) = 27x^2"} />
                <LatexRenderer latex={"k=3: \\binom{3}{3}(3x)^3(1)^0 = 27x^3"} />
              </div>
              <p>Résultat final :</p>
              <LatexRenderer latex={"(3x + 1)^3 = 27x^3 + 27x^2 + 9x + 1"} />
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre3SommesProduitsEtCoefficientsBinomiauxExercicesPage; 