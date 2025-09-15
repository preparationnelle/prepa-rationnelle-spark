import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre8CoupleVariablesAleatoiresExercicesPage = () => {
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
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-deuxieme-approfondies" className="hover:text-[#1e3a8a] transition-colors">
              Maths Approfondies 2e année
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-couple-variables-aleatoires" className="hover:text-[#1e3a8a] transition-colors">
              Chapitre 7 - Cas particulier du couple
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 7 : Cas particulier du couple
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices pratiques sur l'indépendance de variables aléatoires, sommes de variables indépendantes et applications
            </p>
            
            {/* Navigation vers autres ressources */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link to="/formation/maths-couple-variables-aleatoires">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-couple-variables-aleatoires-flashcards">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Target className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
              <Link to="/formation/maths-couple-variables-aleatoires-quiz">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Crown className="mr-2 h-4 w-4" />
                  Quiz
                </Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Niveau 1 : Fondamental */}
        <DifficultyHeader 
          level="Niveau 1" 
          title="Indépendance et couples de variables" 
          icon={BookOpen} 
          stars={1} 
          color="green"
        />

        <ExerciseCard
          id="ex1-1"
          title="Exercice 1.1"
          difficulty="Fondamental"
          content={
            <div className="space-y-4">
              <p>Soit <LatexRenderer latex="(X, Y)" inline /> un couple de variables aléatoires discrètes avec la loi conjointe suivante :</p>
              
              <div className="overflow-x-auto">
                <table className="border-collapse border border-gray-300 mx-auto">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">X \ Y</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">-1</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">0</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">1</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold">0</td>
                      <td className="border border-gray-300 px-4 py-2">0,12</td>
                      <td className="border border-gray-300 px-4 py-2">0,18</td>
                      <td className="border border-gray-300 px-4 py-2">0,30</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold">1</td>
                      <td className="border border-gray-300 px-4 py-2">0,08</td>
                      <td className="border border-gray-300 px-4 py-2">0,12</td>
                      <td className="border border-gray-300 px-4 py-2">0,20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Vérifier que cette table définit bien une loi de probabilité.</li>
                <li>Déterminer les lois marginales de <LatexRenderer latex="X" inline /> et <LatexRenderer latex="Y" inline />.</li>
                <li>Les variables <LatexRenderer latex="X" inline /> et <LatexRenderer latex="Y" inline /> sont-elles indépendantes ?</li>
                <li>Calculer <LatexRenderer latex="\mathbb{E}[X + Y]" inline /> et <LatexRenderer latex="\text{Var}(X + Y)" inline />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Vérification de la loi de probabilité</h5>
                <p>Somme totale : <LatexRenderer latex="0,12 + 0,18 + 0,30 + 0,08 + 0,12 + 0,20 = 1,00" inline /> ✓</p>
                <p>Toutes les probabilités sont positives ✓</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Lois marginales</h5>
                <p><strong>Loi marginale de X :</strong></p>
                <p><LatexRenderer latex="\mathbb{P}(X = 0) = 0,12 + 0,18 + 0,30 = 0,60" /></p>
                <p><LatexRenderer latex="\mathbb{P}(X = 1) = 0,08 + 0,12 + 0,20 = 0,40" /></p>
                
                <p className="mt-3"><strong>Loi marginale de Y :</strong></p>
                <p><LatexRenderer latex="\mathbb{P}(Y = -1) = 0,12 + 0,08 = 0,20" /></p>
                <p><LatexRenderer latex="\mathbb{P}(Y = 0) = 0,18 + 0,12 = 0,30" /></p>
                <p><LatexRenderer latex="\mathbb{P}(Y = 1) = 0,30 + 0,20 = 0,50" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Test d'indépendance</h5>
                <p>Vérifions si <LatexRenderer latex="\mathbb{P}(X = x, Y = y) = \mathbb{P}(X = x) \cdot \mathbb{P}(Y = y)" inline /> :</p>
                <p><LatexRenderer latex="\mathbb{P}(X = 0) \cdot \mathbb{P}(Y = -1) = 0,60 \times 0,20 = 0,12" /></p>
                <p><LatexRenderer latex="\mathbb{P}(X = 0, Y = -1) = 0,12" /></p>
                <p>Cette égalité est vérifiée. Vérifions pour tous les couples :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><LatexRenderer latex="0,60 \times 0,30 = 0,18 = \mathbb{P}(X=0, Y=0)" inline /> ✓</li>
                  <li><LatexRenderer latex="0,60 \times 0,50 = 0,30 = \mathbb{P}(X=0, Y=1)" inline /> ✓</li>
                  <li><LatexRenderer latex="0,40 \times 0,20 = 0,08 = \mathbb{P}(X=1, Y=-1)" inline /> ✓</li>
                  <li><LatexRenderer latex="0,40 \times 0,30 = 0,12 = \mathbb{P}(X=1, Y=0)" inline /> ✓</li>
                  <li><LatexRenderer latex="0,40 \times 0,50 = 0,20 = \mathbb{P}(X=1, Y=1)" inline /> ✓</li>
                </ul>
                <p><strong>Conclusion :</strong> X et Y sont indépendantes.</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">4. Calculs d'espérance et variance</h5>
                <p><LatexRenderer latex="\mathbb{E}[X] = 0 \times 0,60 + 1 \times 0,40 = 0,40" /></p>
                <p><LatexRenderer latex="\mathbb{E}[Y] = (-1) \times 0,20 + 0 \times 0,30 + 1 \times 0,50 = 0,30" /></p>
                <p><LatexRenderer latex="\mathbb{E}[X + Y] = \mathbb{E}[X] + \mathbb{E}[Y] = 0,40 + 0,30 = 0,70" /></p>
                
                <p className="mt-2">Pour la variance, comme X et Y sont indépendantes :</p>
                <p><LatexRenderer latex="\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = 0,40 - (0,40)^2 = 0,24" /></p>
                <p><LatexRenderer latex="\text{Var}(Y) = \mathbb{E}[Y^2] - (\mathbb{E}[Y])^2 = (1 \times 0,70) - (0,30)^2 = 0,61" /></p>
                <p><LatexRenderer latex="\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) = 0,24 + 0,61 = 0,85" /></p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex1-2"
          title="Exercice 1.2"
          difficulty="Fondamental"
          content={
            <div className="space-y-4">
              <p>Soient <LatexRenderer latex="X \sim \mathcal{U}(\{1, 2, 3, 4\})" inline /> et <LatexRenderer latex="Y \sim \mathcal{U}(\{1, 2\})" inline /> deux variables aléatoires indépendantes (lois uniformes discrètes).</p>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Déterminer la loi de <LatexRenderer latex="S = X + Y" inline />.</li>
                <li>Calculer <LatexRenderer latex="\mathbb{P}(S \geq 4)" inline />.</li>
                <li>Calculer <LatexRenderer latex="\mathbb{E}[S]" inline /> et <LatexRenderer latex="\text{Var}(S)" inline />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Loi de S = X + Y</h5>
                <p>Par indépendance, pour chaque valeur <LatexRenderer latex="s" inline /> de <LatexRenderer latex="S" inline /> :</p>
                <p><LatexRenderer latex="\mathbb{P}(S = s) = \sum_{x} \mathbb{P}(X = x) \cdot \mathbb{P}(Y = s - x)" /></p>
                
                <p>Calculons pour chaque valeur possible :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><LatexRenderer latex="\mathbb{P}(S = 2) = \mathbb{P}(X=1, Y=1) = \frac{1}{4} \times \frac{1}{2} = \frac{1}{8}" inline /></li>
                  <li><LatexRenderer latex="\mathbb{P}(S = 3) = \mathbb{P}(X=1, Y=2) + \mathbb{P}(X=2, Y=1) = \frac{1}{8} + \frac{1}{8} = \frac{1}{4}" inline /></li>
                  <li><LatexRenderer latex="\mathbb{P}(S = 4) = \mathbb{P}(X=2, Y=2) + \mathbb{P}(X=3, Y=1) = \frac{1}{8} + \frac{1}{8} = \frac{1}{4}" inline /></li>
                  <li><LatexRenderer latex="\mathbb{P}(S = 5) = \mathbb{P}(X=3, Y=2) + \mathbb{P}(X=4, Y=1) = \frac{1}{8} + \frac{1}{8} = \frac{1}{4}" inline /></li>
                  <li><LatexRenderer latex="\mathbb{P}(S = 6) = \mathbb{P}(X=4, Y=2) = \frac{1}{4} \times \frac{1}{2} = \frac{1}{8}" inline /></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Calcul de P(S ≥ 4)</h5>
                <p><LatexRenderer latex="\mathbb{P}(S \geq 4) = \mathbb{P}(S = 4) + \mathbb{P}(S = 5) + \mathbb{P}(S = 6)" /></p>
                <p><LatexRenderer latex="= \frac{1}{4} + \frac{1}{4} + \frac{1}{8} = \frac{5}{8}" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Espérance et variance</h5>
                <p>Par indépendance :</p>
                <p><LatexRenderer latex="\mathbb{E}[X] = \frac{1+2+3+4}{4} = 2,5" /></p>
                <p><LatexRenderer latex="\mathbb{E}[Y] = \frac{1+2}{2} = 1,5" /></p>
                <p><LatexRenderer latex="\mathbb{E}[S] = \mathbb{E}[X] + \mathbb{E}[Y] = 2,5 + 1,5 = 4" /></p>
                
                <p className="mt-2">Pour les variances :</p>
                <p><LatexRenderer latex="\text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = \frac{1+4+9+16}{4} - (2,5)^2 = 7,5 - 6,25 = 1,25" /></p>
                <p><LatexRenderer latex="\text{Var}(Y) = \mathbb{E}[Y^2] - (\mathbb{E}[Y])^2 = \frac{1+4}{2} - (1,5)^2 = 2,5 - 2,25 = 0,25" /></p>
                <p><LatexRenderer latex="\text{Var}(S) = \text{Var}(X) + \text{Var}(Y) = 1,25 + 0,25 = 1,5" /></p>
              </div>
            </div>
          }
        />

        {/* Niveau 2 : Intermédiaire */}
        <DifficultyHeader 
          level="Niveau 2" 
          title="Applications et calculs avancés" 
          icon={Lightbulb} 
          stars={2} 
          color="blue"
        />

        <ExerciseCard
          id="ex2-1"
          title="Exercice 2.1"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>On lance deux dés équilibrés indépendamment. Soit <LatexRenderer latex="X" inline /> le résultat du premier dé et <LatexRenderer latex="Y" inline /> le résultat du second dé.</p>
              
              <p>On définit :</p>
              <ul className="list-disc list-inside space-y-1">
                <li><LatexRenderer latex="S = X + Y" inline /> (somme des deux dés)</li>
                <li><LatexRenderer latex="D = |X - Y|" inline /> (différence absolue)</li>
                <li><LatexRenderer latex="M = \max(X, Y)" inline /> (maximum des deux dés)</li>
              </ul>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Déterminer la loi de <LatexRenderer latex="S" inline />.</li>
                <li>Déterminer la loi de <LatexRenderer latex="D" inline />.</li>
                <li>Calculer <LatexRenderer latex="\mathbb{P}(M = 6)" inline />.</li>
                <li>Les variables <LatexRenderer latex="S" inline /> et <LatexRenderer latex="D" inline /> sont-elles indépendantes ?</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Loi de S</h5>
                <p>Il y a 36 résultats équiprobables. Comptons les cas pour chaque somme :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><LatexRenderer latex="S = 2" inline /> : (1,1) → <LatexRenderer latex="\mathbb{P}(S=2) = \frac{1}{36}" inline /></li>
                  <li><LatexRenderer latex="S = 3" inline /> : (1,2), (2,1) → <LatexRenderer latex="\mathbb{P}(S=3) = \frac{2}{36}" inline /></li>
                  <li><LatexRenderer latex="S = 4" inline /> : (1,3), (2,2), (3,1) → <LatexRenderer latex="\mathbb{P}(S=4) = \frac{3}{36}" inline /></li>
                  <li><LatexRenderer latex="S = 5" inline /> : 4 cas → <LatexRenderer latex="\mathbb{P}(S=5) = \frac{4}{36}" inline /></li>
                  <li><LatexRenderer latex="S = 6" inline /> : 5 cas → <LatexRenderer latex="\mathbb{P}(S=6) = \frac{5}{36}" inline /></li>
                  <li><LatexRenderer latex="S = 7" inline /> : 6 cas → <LatexRenderer latex="\mathbb{P}(S=7) = \frac{6}{36}" inline /></li>
                  <li><LatexRenderer latex="S = 8" inline /> : 5 cas → <LatexRenderer latex="\mathbb{P}(S=8) = \frac{5}{36}" inline /></li>
                  <li>Et ainsi de suite par symétrie...</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Loi de D</h5>
                <p>Comptons les cas pour chaque différence absolue :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><LatexRenderer latex="D = 0" inline /> : (1,1), (2,2), ..., (6,6) → <LatexRenderer latex="\mathbb{P}(D=0) = \frac{6}{36} = \frac{1}{6}" inline /></li>
                  <li><LatexRenderer latex="D = 1" inline /> : (1,2), (2,1), (2,3), (3,2), ... → <LatexRenderer latex="\mathbb{P}(D=1) = \frac{10}{36}" inline /></li>
                  <li><LatexRenderer latex="D = 2" inline /> : 8 cas → <LatexRenderer latex="\mathbb{P}(D=2) = \frac{8}{36}" inline /></li>
                  <li><LatexRenderer latex="D = 3" inline /> : 6 cas → <LatexRenderer latex="\mathbb{P}(D=3) = \frac{6}{36}" inline /></li>
                  <li><LatexRenderer latex="D = 4" inline /> : 4 cas → <LatexRenderer latex="\mathbb{P}(D=4) = \frac{4}{36}" inline /></li>
                  <li><LatexRenderer latex="D = 5" inline /> : 2 cas → <LatexRenderer latex="\mathbb{P}(D=5) = \frac{2}{36}" inline /></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Calcul de P(M = 6)</h5>
                <p><LatexRenderer latex="M = 6" inline /> si au moins un dé montre 6 :</p>
                <p><LatexRenderer latex="\mathbb{P}(M = 6) = 1 - \mathbb{P}(M < 6) = 1 - \mathbb{P}(X \leq 5, Y \leq 5)" /></p>
                <p><LatexRenderer latex="= 1 - \frac{5}{6} \times \frac{5}{6} = 1 - \frac{25}{36} = \frac{11}{36}" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">4. Indépendance de S et D</h5>
                <p>Testons avec un exemple : <LatexRenderer latex="S = 7, D = 1" inline /></p>
                <p>Les couples donnant <LatexRenderer latex="S = 7" inline /> : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1)</p>
                <p>Parmi ceux-ci, ceux donnant <LatexRenderer latex="D = 1" inline /> : aucun !</p>
                <p>Donc <LatexRenderer latex="\mathbb{P}(S = 7, D = 1) = 0" inline /></p>
                <p>Mais <LatexRenderer latex="\mathbb{P}(S = 7) \times \mathbb{P}(D = 1) = \frac{6}{36} \times \frac{10}{36} \neq 0" inline /></p>
                <p><strong>Conclusion :</strong> S et D ne sont pas indépendantes.</p>
              </div>
            </div>
          }
        />

        {/* Niveau 3 : Avancé */}
        <DifficultyHeader 
          level="Niveau 3" 
          title="Problèmes de synthèse" 
          icon={Crown} 
          stars={3} 
          color="purple"
        />

        <ExerciseCard
          id="ex3-1"
          title="Exercice 3.1"
          difficulty="Avancé"
          content={
            <div className="space-y-4">
              <p>Une entreprise produit des composants électroniques. Chaque composant a une probabilité <LatexRenderer latex="p = 0,05" inline /> d'être défectueux, indépendamment des autres.</p>
              
              <p>On emballe les composants par lots de 20. Soient <LatexRenderer latex="X_1, X_2, \ldots, X_{20}" inline /> les variables indicatrices de défectuosité (1 si défectueux, 0 sinon), et <LatexRenderer latex="S = X_1 + X_2 + \cdots + X_{20}" inline /> le nombre total de composants défectueux dans un lot.</p>
              
              <p>L'entreprise contrôle 100 lots indépendants. Soit <LatexRenderer latex="T" inline /> le nombre total de composants défectueux dans les 100 lots.</p>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Quelle est la loi exacte de <LatexRenderer latex="S" inline /> ? Calculer <LatexRenderer latex="\mathbb{E}[S]" inline /> et <LatexRenderer latex="\text{Var}(S)" inline />.</li>
                <li>Quelle approximation peut-on utiliser pour la loi de <LatexRenderer latex="S" inline /> ? Justifier.</li>
                <li>En utilisant cette approximation, estimer <LatexRenderer latex="\mathbb{P}(S \geq 3)" inline />.</li>
                <li>Quelle est la loi de <LatexRenderer latex="T" inline /> ? Calculer <LatexRenderer latex="\mathbb{P}(T \leq 90)" inline /> en utilisant l'approximation normale.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Loi exacte de S</h5>
                <p><LatexRenderer latex="S" inline /> suit une loi binomiale : <LatexRenderer latex="S \sim \mathcal{B}(20, 0,05)" inline /></p>
                <p><LatexRenderer latex="\mathbb{E}[S] = np = 20 \times 0,05 = 1" /></p>
                <p><LatexRenderer latex="\text{Var}(S) = np(1-p) = 20 \times 0,05 \times 0,95 = 0,95" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Approximation de Poisson</h5>
                <p>Conditions pour l'approximation de Poisson :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><LatexRenderer latex="n = 20" inline /> est "grand"</li>
                  <li><LatexRenderer latex="p = 0,05" inline /> est petit</li>
                  <li><LatexRenderer latex="np = 1" inline /> est modéré</li>
                </ul>
                <p>Donc <LatexRenderer latex="S \approx \mathcal{P}(1)" inline /> (loi de Poisson de paramètre 1).</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Calcul de P(S ≥ 3)</h5>
                <p>Avec <LatexRenderer latex="S \sim \mathcal{P}(1)" inline /> :</p>
                <p><LatexRenderer latex="\mathbb{P}(S \geq 3) = 1 - \mathbb{P}(S \leq 2) = 1 - \mathbb{P}(S = 0) - \mathbb{P}(S = 1) - \mathbb{P}(S = 2)" /></p>
                <p><LatexRenderer latex="= 1 - e^{-1} - e^{-1} - \frac{e^{-1}}{2}" /></p>
                <p><LatexRenderer latex="= 1 - e^{-1}(1 + 1 + 0,5) = 1 - 2,5e^{-1}" /></p>
                <p><LatexRenderer latex="\approx 1 - 2,5 \times 0,368 = 1 - 0,920 = 0,080" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">4. Loi de T et approximation normale</h5>
                <p>Chaque lot a en moyenne 1 composant défectueux, donc :</p>
                <p><LatexRenderer latex="T \sim \mathcal{P}(100)" inline /> (somme de 100 variables de Poisson indépendantes)</p>
                
                <p>Pour l'approximation normale :</p>
                <p><LatexRenderer latex="\mathbb{E}[T] = 100, \quad \text{Var}(T) = 100" inline /></p>
                <p><LatexRenderer latex="T \approx \mathcal{N}(100, 100)" inline /></p>
                
                <p>Avec correction de continuité :</p>
                <p><LatexRenderer latex="\mathbb{P}(T \leq 90) = \mathbb{P}\left(\frac{T - 100}{\sqrt{100}} \leq \frac{90,5 - 100}{\sqrt{100}}\right)" /></p>
                <p><LatexRenderer latex="= \mathbb{P}(Z \leq -0,95) \approx \Phi(-0,95) \approx 0,171" /></p>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre8CoupleVariablesAleatoiresExercicesPage;
