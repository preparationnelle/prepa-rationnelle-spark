import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Star, BookOpen, Lightbulb, Target, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre7NupletsVariablesAleatoiresExercicesPage = () => {
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
            <Link to="/formation/maths-n-uplets-variables-aleatoires" className="hover:text-[#1e3a8a] transition-colors">
              Chapitre 6 - n-uplets de variables aléatoires réelles
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
              Exercices - Chapitre 6 : n-uplets de variables aléatoires réelles
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices pratiques sur les vecteurs aléatoires, lois conjointes, espérance de sommes et indépendance multiple
            </p>
            
            {/* Navigation vers autres ressources */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link to="/formation/maths-n-uplets-variables-aleatoires">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/maths-n-uplets-variables-aleatoires-flashcards">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Target className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
              <Link to="/formation/maths-n-uplets-variables-aleatoires-quiz">
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
          title="Définitions et concepts de base" 
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
              <p>Soit <LatexRenderer latex="(X, Y)" inline /> un couple de variables aléatoires discrètes définies sur un espace probabilisé <LatexRenderer latex="(\Omega, \mathcal{A}, \mathbb{P})" inline />.</p>
              
              <p>On donne la loi conjointe suivante :</p>
              
              <div className="overflow-x-auto">
                <table className="border-collapse border border-gray-300 mx-auto">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">X \ Y</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">0</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">1</th>
                      <th className="border border-gray-300 px-4 py-2 bg-gray-100">2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold">1</td>
                      <td className="border border-gray-300 px-4 py-2">0,1</td>
                      <td className="border border-gray-300 px-4 py-2">0,2</td>
                      <td className="border border-gray-300 px-4 py-2">0,1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 bg-gray-100 font-semibold">2</td>
                      <td className="border border-gray-300 px-4 py-2">0,15</td>
                      <td className="border border-gray-300 px-4 py-2">0,25</td>
                      <td className="border border-gray-300 px-4 py-2">0,2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Déterminer les lois marginales de <LatexRenderer latex="X" inline /> et <LatexRenderer latex="Y" inline />.</li>
                <li>Les variables <LatexRenderer latex="X" inline /> et <LatexRenderer latex="Y" inline /> sont-elles indépendantes ?</li>
                <li>Calculer <LatexRenderer latex="\mathbb{E}[X]" inline />, <LatexRenderer latex="\mathbb{E}[Y]" inline /> et <LatexRenderer latex="\mathbb{E}[XY]" inline />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Lois marginales</h5>
                <p><strong>Loi marginale de X :</strong></p>
                <p><LatexRenderer latex="\mathbb{P}(X = 1) = 0,1 + 0,2 + 0,1 = 0,4" /></p>
                <p><LatexRenderer latex="\mathbb{P}(X = 2) = 0,15 + 0,25 + 0,2 = 0,6" /></p>
                
                <p className="mt-3"><strong>Loi marginale de Y :</strong></p>
                <p><LatexRenderer latex="\mathbb{P}(Y = 0) = 0,1 + 0,15 = 0,25" /></p>
                <p><LatexRenderer latex="\mathbb{P}(Y = 1) = 0,2 + 0,25 = 0,45" /></p>
                <p><LatexRenderer latex="\mathbb{P}(Y = 2) = 0,1 + 0,2 = 0,3" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Test d'indépendance</h5>
                <p>Vérifions si <LatexRenderer latex="\mathbb{P}(X = x, Y = y) = \mathbb{P}(X = x) \cdot \mathbb{P}(Y = y)" inline /> :</p>
                <p><LatexRenderer latex="\mathbb{P}(X = 1) \cdot \mathbb{P}(Y = 0) = 0,4 \times 0,25 = 0,1" /></p>
                <p><LatexRenderer latex="\mathbb{P}(X = 1, Y = 0) = 0,1" /></p>
                <p>Cette égalité est vérifiée. Vérifions pour un autre couple :</p>
                <p><LatexRenderer latex="\mathbb{P}(X = 1) \cdot \mathbb{P}(Y = 1) = 0,4 \times 0,45 = 0,18 \neq 0,2" /></p>
                <p><strong>Conclusion :</strong> X et Y ne sont pas indépendantes.</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Calcul des espérances</h5>
                <p><LatexRenderer latex="\mathbb{E}[X] = 1 \times 0,4 + 2 \times 0,6 = 1,6" /></p>
                <p><LatexRenderer latex="\mathbb{E}[Y] = 0 \times 0,25 + 1 \times 0,45 + 2 \times 0,3 = 1,05" /></p>
                <p><LatexRenderer latex="\mathbb{E}[XY] = 1 \times 0 \times 0,1 + 1 \times 1 \times 0,2 + 1 \times 2 \times 0,1 + 2 \times 0 \times 0,15 + 2 \times 1 \times 0,25 + 2 \times 2 \times 0,2" /></p>
                <p><LatexRenderer latex="\mathbb{E}[XY] = 0 + 0,2 + 0,2 + 0 + 0,5 + 0,8 = 1,7" /></p>
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
              <p>Soit <LatexRenderer latex="X_1, X_2, X_3" inline /> trois variables aléatoires indépendantes suivant chacune une loi de Bernoulli de paramètre <LatexRenderer latex="p = 0,3" inline />.</p>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Quelle est la loi de <LatexRenderer latex="S = X_1 + X_2 + X_3" inline /> ?</li>
                <li>Calculer <LatexRenderer latex="\mathbb{P}(S = 2)" inline />.</li>
                <li>Calculer <LatexRenderer latex="\mathbb{E}[S]" inline /> et <LatexRenderer latex="\text{Var}(S)" inline />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Loi de S</h5>
                <p>Puisque <LatexRenderer latex="X_1, X_2, X_3" inline /> sont indépendantes et suivent chacune <LatexRenderer latex="\mathcal{B}(0,3)" inline />, leur somme suit une loi binomiale :</p>
                <p><LatexRenderer latex="S = X_1 + X_2 + X_3 \sim \mathcal{B}(3; 0,3)" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Calcul de P(S = 2)</h5>
                <p><LatexRenderer latex="\mathbb{P}(S = 2) = \binom{3}{2} \times (0,3)^2 \times (0,7)^1" /></p>
                <p><LatexRenderer latex="= 3 \times 0,09 \times 0,7 = 0,189" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Espérance et variance</h5>
                <p>Pour une loi binomiale <LatexRenderer latex="\mathcal{B}(n, p)" inline /> :</p>
                <p><LatexRenderer latex="\mathbb{E}[S] = n \times p = 3 \times 0,3 = 0,9" /></p>
                <p><LatexRenderer latex="\text{Var}(S) = n \times p \times (1-p) = 3 \times 0,3 \times 0,7 = 0,63" /></p>
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
              <p>Soient <LatexRenderer latex="X_1, X_2, \ldots, X_n" inline /> des variables aléatoires indépendantes et identiquement distribuées, avec <LatexRenderer latex="\mathbb{E}[X_i] = \mu" inline /> et <LatexRenderer latex="\text{Var}(X_i) = \sigma^2" inline />.</p>
              
              <p>On définit la moyenne empirique <LatexRenderer latex="\overline{X}_n = \frac{1}{n}\sum_{i=1}^n X_i" inline />.</p>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Calculer <LatexRenderer latex="\mathbb{E}[\overline{X}_n]" inline />.</li>
                <li>Calculer <LatexRenderer latex="\text{Var}(\overline{X}_n)" inline />.</li>
                <li>Que peut-on dire du comportement de <LatexRenderer latex="\overline{X}_n" inline /> quand <LatexRenderer latex="n \to \infty" inline /> ?</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Espérance de la moyenne empirique</h5>
                <p><LatexRenderer latex="\mathbb{E}[\overline{X}_n] = \mathbb{E}\left[\frac{1}{n}\sum_{i=1}^n X_i\right] = \frac{1}{n}\sum_{i=1}^n \mathbb{E}[X_i] = \frac{1}{n} \times n\mu = \mu" /></p>
                <p>La moyenne empirique est un estimateur sans biais de <LatexRenderer latex="\mu" inline />.</p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Variance de la moyenne empirique</h5>
                <p>Par indépendance des <LatexRenderer latex="X_i" inline /> :</p>
                <p><LatexRenderer latex="\text{Var}(\overline{X}_n) = \text{Var}\left(\frac{1}{n}\sum_{i=1}^n X_i\right) = \frac{1}{n^2}\sum_{i=1}^n \text{Var}(X_i) = \frac{1}{n^2} \times n\sigma^2 = \frac{\sigma^2}{n}" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Comportement asymptotique</h5>
                <p>Quand <LatexRenderer latex="n \to \infty" inline /> :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><LatexRenderer latex="\mathbb{E}[\overline{X}_n] = \mu" inline /> (reste constant)</li>
                  <li><LatexRenderer latex="\text{Var}(\overline{X}_n) = \frac{\sigma^2}{n} \to 0" inline /></li>
                </ul>
                <p>Par la loi faible des grands nombres, <LatexRenderer latex="\overline{X}_n \xrightarrow{\mathbb{P}} \mu" inline />.</p>
                <p>La moyenne empirique converge en probabilité vers la vraie moyenne.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex2-2"
          title="Exercice 2.2"
          difficulty="Intermédiaire"
          content={
            <div className="space-y-4">
              <p>Soit <LatexRenderer latex="(X, Y, Z)" inline /> un triplet de variables aléatoires discrètes avec :</p>
              <ul className="list-disc list-inside space-y-1">
                <li><LatexRenderer latex="X \sim \mathcal{P}(2)" inline /> (loi de Poisson de paramètre 2)</li>
                <li><LatexRenderer latex="Y \sim \mathcal{P}(3)" inline /> (loi de Poisson de paramètre 3)</li>
                <li><LatexRenderer latex="Z \sim \mathcal{P}(1)" inline /> (loi de Poisson de paramètre 1)</li>
              </ul>
              <p>On suppose que <LatexRenderer latex="X, Y, Z" inline /> sont mutuellement indépendantes.</p>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Quelle est la loi de <LatexRenderer latex="S = X + Y + Z" inline /> ?</li>
                <li>Calculer <LatexRenderer latex="\mathbb{P}(S = 5)" inline />.</li>
                <li>Calculer <LatexRenderer latex="\mathbb{P}(X = 2 | S = 5)" inline />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Loi de S</h5>
                <p>La somme de variables de Poisson indépendantes suit une loi de Poisson dont le paramètre est la somme des paramètres :</p>
                <p><LatexRenderer latex="S = X + Y + Z \sim \mathcal{P}(2 + 3 + 1) = \mathcal{P}(6)" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Calcul de P(S = 5)</h5>
                <p><LatexRenderer latex="\mathbb{P}(S = 5) = \frac{6^5 e^{-6}}{5!} = \frac{7776 e^{-6}}{120} = 64,8 e^{-6}" /></p>
                <p><LatexRenderer latex="= 64,8 \times 0,00248 \approx 0,161" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Probabilité conditionnelle</h5>
                <p>Pour calculer <LatexRenderer latex="\mathbb{P}(X = 2 | S = 5)" inline />, on utilise :</p>
                <p><LatexRenderer latex="\mathbb{P}(X = 2 | S = 5) = \frac{\mathbb{P}(X = 2, S = 5)}{\mathbb{P}(S = 5)}" /></p>
                <p>Or <LatexRenderer latex="\{X = 2, S = 5\} = \{X = 2, Y + Z = 3\}" inline /></p>
                <p>Par indépendance :</p>
                <p><LatexRenderer latex="\mathbb{P}(X = 2, Y + Z = 3) = \mathbb{P}(X = 2) \times \mathbb{P}(Y + Z = 3)" /></p>
                <p>Avec <LatexRenderer latex="Y + Z \sim \mathcal{P}(4)" inline /> :</p>
                <p><LatexRenderer latex="\mathbb{P}(X = 2) = \frac{2^2 e^{-2}}{2!} = 2e^{-2}" /></p>
                <p><LatexRenderer latex="\mathbb{P}(Y + Z = 3) = \frac{4^3 e^{-4}}{3!} = \frac{64 e^{-4}}{6}" /></p>
                <p>Donc <LatexRenderer latex="\mathbb{P}(X = 2 | S = 5) = \frac{2e^{-2} \times \frac{64 e^{-4}}{6}}{64,8 e^{-6}} = \frac{2 \times 64}{6 \times 64,8} = \frac{128}{388,8} \approx 0,329" /></p>
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
              <p>On considère un processus de fabrication où chaque pièce produite a une probabilité <LatexRenderer latex="p = 0,02" inline /> d'être défectueuse, indépendamment des autres pièces.</p>
              
              <p>On produit des lots de <LatexRenderer latex="n = 100" inline /> pièces. Soit <LatexRenderer latex="X" inline /> le nombre de pièces défectueuses dans un lot.</p>
              
              <p>On contrôle <LatexRenderer latex="k = 10" inline /> lots indépendants. Soit <LatexRenderer latex="Y_i" inline /> le nombre de pièces défectueuses dans le <LatexRenderer latex="i" inline />-ème lot, et <LatexRenderer latex="T = Y_1 + Y_2 + \cdots + Y_{10}" inline /> le nombre total de pièces défectueuses.</p>
              
              <p><strong>Questions :</strong></p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Quelle est la loi exacte de <LatexRenderer latex="X" inline /> ? Quelle approximation peut-on utiliser ?</li>
                <li>Calculer <LatexRenderer latex="\mathbb{E}[T]" inline /> et <LatexRenderer latex="\text{Var}(T)" inline />.</li>
                <li>En utilisant l'approximation normale, estimer <LatexRenderer latex="\mathbb{P}(T \leq 15)" inline />.</li>
                <li>Quelle est la probabilité qu'au moins un lot contienne plus de 5 pièces défectueuses ?</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1. Loi de X et approximation</h5>
                <p><strong>Loi exacte :</strong> <LatexRenderer latex="X \sim \mathcal{B}(100, 0,02)" /></p>
                <p><strong>Approximation :</strong> Comme <LatexRenderer latex="n" inline /> est grand et <LatexRenderer latex="p" inline /> petit avec <LatexRenderer latex="np = 2" inline /> modéré, on peut utiliser l'approximation de Poisson :</p>
                <p><LatexRenderer latex="X \approx \mathcal{P}(2)" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2. Espérance et variance de T</h5>
                <p>Chaque <LatexRenderer latex="Y_i \approx \mathcal{P}(2)" inline /> et les <LatexRenderer latex="Y_i" inline /> sont indépendants.</p>
                <p>Donc <LatexRenderer latex="T = Y_1 + \cdots + Y_{10} \sim \mathcal{P}(20)" inline /></p>
                <p><LatexRenderer latex="\mathbb{E}[T] = 20" /></p>
                <p><LatexRenderer latex="\text{Var}(T) = 20" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">3. Approximation normale pour P(T ≤ 15)</h5>
                <p>Par le théorème central limite, <LatexRenderer latex="T \approx \mathcal{N}(20, 20)" inline /></p>
                <p>Avec correction de continuité :</p>
                <p><LatexRenderer latex="\mathbb{P}(T \leq 15) = \mathbb{P}\left(\frac{T - 20}{\sqrt{20}} \leq \frac{15,5 - 20}{\sqrt{20}}\right)" /></p>
                <p><LatexRenderer latex="= \mathbb{P}\left(Z \leq \frac{-4,5}{\sqrt{20}}\right) = \mathbb{P}(Z \leq -1,006)" /></p>
                <p><LatexRenderer latex="\approx \Phi(-1,006) \approx 0,157" /></p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">4. Probabilité qu'au moins un lot ait plus de 5 pièces défectueuses</h5>
                <p>Soit <LatexRenderer latex="A_i" inline /> l'événement "le lot <LatexRenderer latex="i" inline /> contient plus de 5 pièces défectueuses".</p>
                <p><LatexRenderer latex="\mathbb{P}(A_i) = \mathbb{P}(Y_i > 5) = 1 - \mathbb{P}(Y_i \leq 5)" inline /> avec <LatexRenderer latex="Y_i \sim \mathcal{P}(2)" inline /></p>
                <p><LatexRenderer latex="\mathbb{P}(Y_i \leq 5) = \sum_{k=0}^5 \frac{2^k e^{-2}}{k!} \approx 0,983" /></p>
                <p>Donc <LatexRenderer latex="\mathbb{P}(A_i) \approx 0,017" inline /></p>
                <p>La probabilité qu'au moins un lot ait plus de 5 pièces défectueuses :</p>
                <p><LatexRenderer latex="\mathbb{P}(A_1 \cup \cdots \cup A_{10}) = 1 - \mathbb{P}(\overline{A_1} \cap \cdots \cap \overline{A_{10}})" /></p>
                <p><LatexRenderer latex="= 1 - (1 - 0,017)^{10} = 1 - (0,983)^{10} \approx 1 - 0,844 = 0,156" /></p>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre7NupletsVariablesAleatoiresExercicesPage;
