import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre2EndomorphismesMatricesAvanceesExercicesPage = () => {
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
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-500 text-white rounded-lg">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{level} : {title}</h2>
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 2</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 2 : Éléments propres et réduction des endomorphismes et matrices carrées
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les valeurs propres, vecteurs propres et la diagonalisation.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Exercices de base - Calculs et propriétés fondamentales"
          icon={BookOpen}
        />

        <ExerciseCard
          id="facile-1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p>Soit <LatexRenderer latex="A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}" />.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Calculer le polynôme caractéristique de <LatexRenderer latex="A" />.</li>
                <li>Déterminer les valeurs propres de <LatexRenderer latex="A" />.</li>
                <li>Pour chaque valeur propre, déterminer l'espace propre associé.</li>
                <li>La matrice <LatexRenderer latex="A" /> est-elle diagonalisable ?</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Polynôme caractéristique :</h5>
                <div className="space-y-2">
                  <LatexRenderer latex="P_A(X) = \det(A - XI_2) = \det\begin{pmatrix} 2-X & 1 \\ 0 & 3-X \end{pmatrix}" />
                  <LatexRenderer latex="P_A(X) = (2-X)(3-X) = X^2 - 5X + 6" />
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2) Valeurs propres :</h5>
                <p>Les racines de <LatexRenderer latex="P_A(X) = 0" /> sont <LatexRenderer latex="\lambda_1 = 2" /> et <LatexRenderer latex="\lambda_2 = 3" />.</p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Espaces propres :</h5>
                <div className="space-y-3">
                  <div>
                    <p>Pour <LatexRenderer latex="\lambda_1 = 2" /> :</p>
                    <LatexRenderer latex="A - 2I = \begin{pmatrix} 0 & 1 \\ 0 & 1 \end{pmatrix}" />
                    <p>Donc <LatexRenderer latex="E_2(A) = \text{Vect}\begin{pmatrix} 1 \\ 0 \end{pmatrix}" /></p>
                  </div>
                  
                  <div>
                    <p>Pour <LatexRenderer latex="\lambda_2 = 3" /> :</p>
                    <LatexRenderer latex="A - 3I = \begin{pmatrix} -1 & 1 \\ 0 & 0 \end{pmatrix}" />
                    <p>Donc <LatexRenderer latex="E_3(A) = \text{Vect}\begin{pmatrix} 1 \\ 1 \end{pmatrix}" /></p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">4) Diagonalisabilité :</h5>
                <p>Oui, car <LatexRenderer latex="\dim E_2(A) + \dim E_3(A) = 1 + 1 = 2 = \dim(\mathbb{R}^2)" />.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="facile-2"
          title="Exercice 2"
          difficulty="Facile"
          content={
            <div>
              <p>Soit <LatexRenderer latex="B = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}" />.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Déterminer les valeurs propres de <LatexRenderer latex="B" />.</li>
                <li>Diagonaliser la matrice <LatexRenderer latex="B" />.</li>
                <li>En déduire une expression de <LatexRenderer latex="B^n" /> pour <LatexRenderer latex="n \in \mathbb{N}" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Valeurs propres :</h5>
                <div className="space-y-2">
                  <LatexRenderer latex="P_B(X) = \det\begin{pmatrix} 1-X & 2 \\ 2 & 1-X \end{pmatrix} = (1-X)^2 - 4 = X^2 - 2X - 3" />
                  <p>Les valeurs propres sont <LatexRenderer latex="\lambda_1 = 3" /> et <LatexRenderer latex="\lambda_2 = -1" />.</p>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">2) Diagonalisation :</h5>
                <div className="space-y-3">
                  <p>Vecteurs propres :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Pour <LatexRenderer latex="\lambda_1 = 3" /> : <LatexRenderer latex="v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}" /></li>
                    <li>Pour <LatexRenderer latex="\lambda_2 = -1" /> : <LatexRenderer latex="v_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}" /></li>
                  </ul>
                  <p>Donc <LatexRenderer latex="B = PDP^{-1}" /> avec :</p>
                  <LatexRenderer latex="P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \quad D = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}" />
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Expression de B^n :</h5>
                <div className="space-y-2">
                  <LatexRenderer latex="B^n = PD^nP^{-1} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 3^n & 0 \\ 0 & (-1)^n \end{pmatrix} \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}" />
                  <LatexRenderer latex="B^n = \frac{1}{2}\begin{pmatrix} 3^n + (-1)^n & 3^n - (-1)^n \\ 3^n - (-1)^n & 3^n + (-1)^n \end{pmatrix}" />
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="facile-3"
          title="Exercice 3"
          difficulty="Facile"
          content={
            <div>
              <p>Soit <LatexRenderer latex="u" /> l'endomorphisme de <LatexRenderer latex="\mathbb{R}^3" /> dont la matrice dans la base canonique est :</p>
              <div className="text-center my-4">
                <LatexRenderer latex="A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}" />
              </div>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Déterminer les valeurs propres de <LatexRenderer latex="u" />.</li>
                <li>L'endomorphisme <LatexRenderer latex="u" /> est-il diagonalisable ? Justifier.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Valeurs propres :</h5>
                <div className="space-y-2">
                  <p>La matrice étant triangulaire supérieure, les valeurs propres sont les éléments diagonaux :</p>
                  <LatexRenderer latex="\text{Spec}(u) = \{1, 2\}" />
                  <p>avec multiplicités algébriques : <LatexRenderer latex="m_a(1) = 1" /> et <LatexRenderer latex="m_a(2) = 2" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Diagonalisabilité :</h5>
                <div className="space-y-3">
                  <p>Calculons les dimensions des espaces propres :</p>
                  <div className="space-y-2">
                    <p>Pour <LatexRenderer latex="\lambda = 1" /> :</p>
                    <LatexRenderer latex="A - I = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix} \text{ de rang } 2" />
                    <p>Donc <LatexRenderer latex="\dim E_1(u) = 3 - 2 = 1 = m_a(1)" /></p>
                    
                    <p>Pour <LatexRenderer latex="\lambda = 2" /> :</p>
                    <LatexRenderer latex="A - 2I = \begin{pmatrix} -1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix} \text{ de rang } 2" />
                    <p>Donc <LatexRenderer latex="\dim E_2(u) = 3 - 2 = 1 < 2 = m_a(2)" /></p>
                  </div>
                  <p><strong>Conclusion :</strong> <LatexRenderer latex="u" /> n'est pas diagonalisable car <LatexRenderer latex="\dim E_2(u) < m_a(2)" />.</p>
                </div>
              </div>
            </div>
          }
        />

        <DifficultyHeader
          level="Module 2"
          title="Exercices intermédiaires - Techniques et applications"
          icon={BookOpen}
        />

        <ExerciseCard
          id="intermediaire-1"
          title="Exercice 7.3 - Diagonalisation d'une matrice 3×3"
          difficulty="Intermédiaire"
          content={
            <div>
              <p>On considère la matrice</p>
              <div className="text-center my-4">
                <LatexRenderer latex="A = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 3 & 0 \\ 2 & -1 & 0 \end{pmatrix}" />
              </div>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Calculer le polynôme caractéristique de <LatexRenderer latex="A" />.</li>
                <li>Déterminer les valeurs propres de <LatexRenderer latex="A" />.</li>
                <li>Pour chaque valeur propre, déterminer une base de l'espace propre associé.</li>
                <li>La matrice <LatexRenderer latex="A" /> est-elle diagonalisable ? Si oui, donner les matrices <LatexRenderer latex="P" /> et <LatexRenderer latex="D" /> telles que <LatexRenderer latex="A = PDP^{-1}" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Polynôme caractéristique :</h5>
                <div className="space-y-2">
                  <LatexRenderer latex="P_A(X) = \det(A - XI_3)" />
                  <p>En développant par rapport à la deuxième ligne :</p>
                  <LatexRenderer latex="P_A(X) = -(3-X) \det\begin{pmatrix} 1-X & -1 \\ 2 & -X \end{pmatrix}" />
                  <LatexRenderer latex="= -(3-X)[X(X-1) + 2] = -(3-X)(X^2 - X + 2)" />
                  <LatexRenderer latex="= -(X-3)(X^2 - X + 2)" />
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Valeurs propres :</h5>
                <div className="space-y-2">
                  <p>Les racines de <LatexRenderer latex="P_A(X) = 0" /> :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li><LatexRenderer latex="\lambda_1 = 3" /> (racine simple)</li>
                    <li><LatexRenderer latex="X^2 - X + 2 = 0" /> : discriminant <LatexRenderer latex="\Delta = 1 - 8 = -7 < 0" />, donc pas de racines réelles</li>
                  </ul>
                  <p>Donc <LatexRenderer latex="\text{Spec}_{\mathbb{R}}(A) = \{3\}" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Espace propre pour λ = 3 :</h5>
                <div className="space-y-2">
                  <LatexRenderer latex="A - 3I = \begin{pmatrix} -2 & 2 & -1 \\ 0 & 0 & 0 \\ 2 & -1 & -3 \end{pmatrix}" />
                  <p>En résolvant le système <LatexRenderer latex="(A - 3I)X = 0" /> :</p>
                  <LatexRenderer latex="E_3(A) = \text{Vect}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}" />
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">4) Diagonalisabilité :</h5>
                <p>Non, <LatexRenderer latex="A" /> n'est pas diagonalisable sur <LatexRenderer latex="\mathbb{R}" /> car elle n'a qu'une seule valeur propre réelle avec <LatexRenderer latex="\dim E_3(A) = 1 < 3" />.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="intermediaire-2"
          title="Exercice - Endomorphisme de transposition"
          difficulty="Intermédiaire"
          content={
            <div>
              <p>Soit <LatexRenderer latex="f" /> l'endomorphisme de <LatexRenderer latex="\mathcal{M}_2(\mathbb{R})" /> défini par <LatexRenderer latex="f(M) = {}^t M" />.</p>
              <p>Déterminer les valeurs propres et les sous-espaces propres de <LatexRenderer latex="f" />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Recherche des valeurs propres :</h5>
                <div className="space-y-3">
                  <p>Soit <LatexRenderer latex="M \in \mathcal{M}_2(\mathbb{R})" /> un vecteur propre de <LatexRenderer latex="f" /> pour la valeur propre <LatexRenderer latex="\lambda" />.</p>
                  <p>Alors <LatexRenderer latex="f(M) = \lambda M" />, c'est-à-dire <LatexRenderer latex="{}^t M = \lambda M" />.</p>
                  <p>En prenant la transposée : <LatexRenderer latex="M = \lambda {}^t M = \lambda^2 M" />.</p>
                  <p>Si <LatexRenderer latex="M \neq 0" />, alors <LatexRenderer latex="\lambda^2 = 1" />, donc <LatexRenderer latex="\lambda \in \{1, -1\}" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Espaces propres :</h5>
                <div className="space-y-4">
                  <div>
                    <p><strong>Pour λ = 1 :</strong></p>
                    <p><LatexRenderer latex="E_1(f) = \{M \in \mathcal{M}_2(\mathbb{R}) : {}^t M = M\}" /> (matrices symétriques)</p>
                    <p>Base de <LatexRenderer latex="E_1(f)" /> :</p>
                    <LatexRenderer latex="\left\{ \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} \right\}" />
                    <p>Donc <LatexRenderer latex="\dim E_1(f) = 3" />.</p>
                  </div>
                  
                  <div>
                    <p><strong>Pour λ = -1 :</strong></p>
                    <p><LatexRenderer latex="E_{-1}(f) = \{M \in \mathcal{M}_2(\mathbb{R}) : {}^t M = -M\}" /> (matrices antisymétriques)</p>
                    <p>Base de <LatexRenderer latex="E_{-1}(f)" /> :</p>
                    <LatexRenderer latex="\left\{ \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \right\}" />
                    <p>Donc <LatexRenderer latex="\dim E_{-1}(f) = 1" />.</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">Vérification :</h5>
                <p><LatexRenderer latex="\dim E_1(f) + \dim E_{-1}(f) = 3 + 1 = 4 = \dim \mathcal{M}_2(\mathbb{R})" /></p>
                <p>Donc <LatexRenderer latex="f" /> est diagonalisable.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="intermediaire-3"
          title="Exercice 7.4 - Un grand classique : la matrice J"
          difficulty="Intermédiaire"
          content={
            <div>
              <p>Pour <LatexRenderer latex="n \geq 2" />, on considère la matrice <LatexRenderer latex="J_n" /> de taille <LatexRenderer latex="n \times n" /> dont tous les coefficients valent 1.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Déterminer les valeurs propres de <LatexRenderer latex="J_n" />.</li>
                <li>Pour chaque valeur propre, donner la dimension de l'espace propre associé.</li>
                <li>La matrice <LatexRenderer latex="J_n" /> est-elle diagonalisable ?</li>
                <li>Calculer <LatexRenderer latex="J_n^k" /> pour tout <LatexRenderer latex="k \geq 1" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Valeurs propres :</h5>
                <div className="space-y-3">
                  <p>Observons que <LatexRenderer latex="J_n = \mathbf{1}_n {}^t\mathbf{1}_n" /> où <LatexRenderer latex="\mathbf{1}_n = \begin{pmatrix} 1 \\ \vdots \\ 1 \end{pmatrix}" />.</p>
                  <p>Donc <LatexRenderer latex="J_n \mathbf{1}_n = \mathbf{1}_n ({}^t\mathbf{1}_n \mathbf{1}_n) = n\mathbf{1}_n" />.</p>
                  <p>Ainsi <LatexRenderer latex="\mathbf{1}_n" /> est vecteur propre pour <LatexRenderer latex="\lambda_1 = n" />.</p>
                  <p>Pour tout vecteur <LatexRenderer latex="v" /> orthogonal à <LatexRenderer latex="\mathbf{1}_n" /> : <LatexRenderer latex="J_n v = \mathbf{1}_n ({}^t\mathbf{1}_n v) = \mathbf{1}_n \cdot 0 = 0" />.</p>
                  <p>Donc <LatexRenderer latex="\text{Spec}(J_n) = \{0, n\}" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Dimensions des espaces propres :</h5>
                <div className="space-y-2">
                  <p><LatexRenderer latex="E_n(J_n) = \text{Vect}(\mathbf{1}_n)" />, donc <LatexRenderer latex="\dim E_n(J_n) = 1" />.</p>
                  <p><LatexRenderer latex="E_0(J_n) = \{v \in \mathbb{R}^n : {}^t\mathbf{1}_n v = 0\}" /> (orthogonal à <LatexRenderer latex="\mathbf{1}_n" />).</p>
                  <p>Donc <LatexRenderer latex="\dim E_0(J_n) = n - 1" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Diagonalisabilité :</h5>
                <p>Oui, car <LatexRenderer latex="\dim E_n(J_n) + \dim E_0(J_n) = 1 + (n-1) = n" />.</p>
              </div>

              <div>
                <h5 className="font-semibold mb-2">4) Puissances de J_n :</h5>
                <div className="space-y-2">
                  <p>Puisque <LatexRenderer latex="J_n = \mathbf{1}_n {}^t\mathbf{1}_n" /> :</p>
                  <LatexRenderer latex="J_n^k = (\mathbf{1}_n {}^t\mathbf{1}_n)^k = \mathbf{1}_n {}^t\mathbf{1}_n \mathbf{1}_n {}^t\mathbf{1}_n \cdots" />
                  <LatexRenderer latex="= \mathbf{1}_n ({}^t\mathbf{1}_n \mathbf{1}_n)^{k-1} {}^t\mathbf{1}_n = n^{k-1} J_n" />
                  <p>Donc <LatexRenderer latex="J_n^k = n^{k-1} J_n" /> pour tout <LatexRenderer latex="k \geq 1" />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="intermediaire-4"
          title="Exercice 7.10 - Endomorphismes nilpotents"
          difficulty="Intermédiaire"
          content={
            <div>
              <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension finie et <LatexRenderer latex="u \in \mathcal{L}(E)" />.</p>
              <p>On dit que <LatexRenderer latex="u" /> est <em>nilpotent</em> s'il existe <LatexRenderer latex="k \in \mathbb{N}^*" /> tel que <LatexRenderer latex="u^k = 0" />.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Montrer que si <LatexRenderer latex="u" /> est nilpotent, alors 0 est la seule valeur propre de <LatexRenderer latex="u" />.</li>
                <li>Réciproquement, si 0 est la seule valeur propre de <LatexRenderer latex="u" />, <LatexRenderer latex="u" /> est-il nécessairement nilpotent ?</li>
                <li>Soit <LatexRenderer latex="A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}" />. Montrer que <LatexRenderer latex="A" /> est nilpotente et déterminer son indice de nilpotence.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Spectre d'un endomorphisme nilpotent :</h5>
                <div className="space-y-3">
                  <p>Soit <LatexRenderer latex="\lambda" /> une valeur propre de <LatexRenderer latex="u" /> et <LatexRenderer latex="v \neq 0" /> un vecteur propre associé.</p>
                  <p>Si <LatexRenderer latex="u^k = 0" />, alors <LatexRenderer latex="0 = u^k(v) = \lambda^k v" />.</p>
                  <p>Comme <LatexRenderer latex="v \neq 0" />, on a <LatexRenderer latex="\lambda^k = 0" />, donc <LatexRenderer latex="\lambda = 0" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Réciproque :</h5>
                <div className="space-y-3">
                  <p>Non, la réciproque est fausse en général.</p>
                  <p><strong>Contre-exemple :</strong> Soit <LatexRenderer latex="u" /> l'endomorphisme de <LatexRenderer latex="\mathbb{C}^2" /> de matrice</p>
                  <LatexRenderer latex="A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}" />
                  <p>Alors <LatexRenderer latex="\text{Spec}(u) = \{0\}" /> mais <LatexRenderer latex="u \neq 0" /> et <LatexRenderer latex="u^2 = 0" />.</p>
                  <p>La réciproque est vraie si et seulement si <LatexRenderer latex="u" /> est diagonalisable.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Étude de la matrice A :</h5>
                <div className="space-y-3">
                  <p>Calculons les puissances de <LatexRenderer latex="A" /> :</p>
                  <LatexRenderer latex="A^2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}" />
                  <LatexRenderer latex="A^3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} = 0" />
                  <p>Donc <LatexRenderer latex="A" /> est nilpotente d'indice 3 (car <LatexRenderer latex="A^2 \neq 0" /> mais <LatexRenderer latex="A^3 = 0" />).</p>
                </div>
              </div>
            </div>
          }
        />

        <DifficultyHeader
          level="Module 3"
          title="Exercices avancés - Niveau concours"
          icon={BookOpen}
        />

        <ExerciseCard
          id="concours-1"
          title="Exercice - Endomorphismes cycliques"
          difficulty="Concours"
          content={
            <div>
              <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension finie <LatexRenderer latex="n \geq 1" /> et <LatexRenderer latex="u \in \mathcal{L}(E)" />.</p>
              <p>On dit que <LatexRenderer latex="u" /> est <em>cyclique</em> s'il existe un vecteur <LatexRenderer latex="x \in E" /> tel que la famille <LatexRenderer latex="(x, u(x), u^2(x), \ldots, u^{n-1}(x))" /> soit une base de <LatexRenderer latex="E" />.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Montrer que si <LatexRenderer latex="u" /> est cyclique, alors <LatexRenderer latex="u" /> est diagonalisable si et seulement si son polynôme minimal est scindé à racines simples.</li>
                <li>Soit <LatexRenderer latex="P \in \mathbb{K}[X]" /> un polynôme unitaire de degré <LatexRenderer latex="n" />. Construire explicitement un endomorphisme cyclique dont <LatexRenderer latex="P" /> est le polynôme caractéristique.</li>
                <li>Application : déterminer tous les endomorphismes cycliques de <LatexRenderer latex="\mathbb{R}^3" /> qui sont diagonalisables.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Caractérisation de la diagonalisabilité :</h5>
                <div className="space-y-3">
                  <p>Si <LatexRenderer latex="u" /> est cyclique avec vecteur cyclique <LatexRenderer latex="x" />, alors le polynôme minimal de <LatexRenderer latex="u" /> est le polynôme unitaire de plus petit degré annulant <LatexRenderer latex="x" />.</p>
                  <p>Comme <LatexRenderer latex="(x, u(x), \ldots, u^{n-1}(x))" /> est libre, le polynôme minimal a degré <LatexRenderer latex="n" />, donc égale le polynôme caractéristique.</p>
                  <p><LatexRenderer latex="u" /> est diagonalisable ⟺ polynôme minimal scindé à racines simples ⟺ polynôme caractéristique scindé à racines simples.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Construction d'endomorphismes cycliques :</h5>
                <div className="space-y-3">
                  <p>Soit <LatexRenderer latex="P(X) = X^n + a_{n-1}X^{n-1} + \cdots + a_1X + a_0" />.</p>
                  <p>Considérons la matrice compagnon de <LatexRenderer latex="P" /> :</p>
                  <LatexRenderer latex="C = \begin{pmatrix} 0 & 0 & \cdots & 0 & -a_0 \\ 1 & 0 & \cdots & 0 & -a_1 \\ 0 & 1 & \cdots & 0 & -a_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \cdots & 1 & -a_{n-1} \end{pmatrix}" />
                  <p>Alors l'endomorphisme de matrice <LatexRenderer latex="C" /> dans la base canonique est cyclique avec vecteur cyclique <LatexRenderer latex="e_1" /> et polynôme caractéristique <LatexRenderer latex="P" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Endomorphismes cycliques diagonalisables de ℝ³ :</h5>
                <div className="space-y-3">
                  <p>Il faut que le polynôme caractéristique soit de degré 3, scindé sur <LatexRenderer latex="\mathbb{R}" /> à racines simples.</p>
                  <p>Forme générale : <LatexRenderer latex="P(X) = (X - a)(X - b)(X - c)" /> avec <LatexRenderer latex="a, b, c \in \mathbb{R}" /> distincts.</p>
                  <p>La matrice correspondante est diagonalisable avec valeurs propres <LatexRenderer latex="a, b, c" />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="concours-2"
          title="D'après ESCP 2001 - Droites stables"
          difficulty="Concours"
          content={
            <div>
              <p>Soit <LatexRenderer latex="E = \mathbb{R}^3" /> et <LatexRenderer latex="u \in \mathcal{L}(E)" />.</p>
              <p>On suppose que <LatexRenderer latex="u" /> laisse stables exactement <LatexRenderer latex="n" /> droites vectorielles distinctes de <LatexRenderer latex="E" />.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Montrer que <LatexRenderer latex="n \leq 3" />.</li>
                <li>Caractériser les endomorphismes <LatexRenderer latex="u" /> pour lesquels <LatexRenderer latex="n = 3" />.</li>
                <li>Donner un exemple d'endomorphisme pour lequel <LatexRenderer latex="n = 2" />.</li>
                <li>Peut-on avoir <LatexRenderer latex="n = 1" /> ? Justifier.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Majoration : n ≤ 3</h5>
                <div className="space-y-3">
                  <p>Chaque droite stable correspond à un sous-espace propre de dimension 1.</p>
                  <p>Si <LatexRenderer latex="u" /> a <LatexRenderer latex="k" /> valeurs propres distinctes <LatexRenderer latex="\lambda_1, \ldots, \lambda_k" />, le nombre de droites stables est <LatexRenderer latex="\sum_{i=1}^k \dim E_{\lambda_i}(u)" />.</p>
                  <p>Comme <LatexRenderer latex="\sum_{i=1}^k \dim E_{\lambda_i}(u) \leq \dim E = 3" />, on a <LatexRenderer latex="n \leq 3" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Cas n = 3 :</h5>
                <div className="space-y-3">
                  <p>Pour <LatexRenderer latex="n = 3" />, il faut <LatexRenderer latex="\sum_{i=1}^k \dim E_{\lambda_i}(u) = 3" />.</p>
                  <p>Ceci implique que <LatexRenderer latex="u" /> est diagonalisable avec 3 valeurs propres distinctes.</p>
                  <p><strong>Caractérisation :</strong> <LatexRenderer latex="n = 3" /> ⟺ <LatexRenderer latex="u" /> est diagonalisable avec 3 valeurs propres distinctes.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Exemple pour n = 2 :</h5>
                <div className="space-y-3">
                  <p>Soit <LatexRenderer latex="u" /> de matrice <LatexRenderer latex="A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}" />.</p>
                  <p>Valeurs propres : <LatexRenderer latex="\lambda_1 = 1" /> (simple) et <LatexRenderer latex="\lambda_2 = 2" /> (double).</p>
                  <p><LatexRenderer latex="\dim E_1(u) = 1" /> et <LatexRenderer latex="\dim E_2(u) = 1" /> (car <LatexRenderer latex="A - 2I" /> est de rang 2).</p>
                  <p>Donc <LatexRenderer latex="n = 1 + 1 = 2" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">4) Cas n = 1 :</h5>
                <div className="space-y-3">
                  <p>Oui, c'est possible. Soit <LatexRenderer latex="u" /> de matrice <LatexRenderer latex="A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}" />.</p>
                  <p>Seule valeur propre : <LatexRenderer latex="\lambda = 1" /> avec <LatexRenderer latex="\dim E_1(u) = 1" />.</p>
                  <p>Donc <LatexRenderer latex="n = 1" />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="concours-3"
          title="D'après ESSEC 2003 - Sous-espaces propres"
          difficulty="Concours"
          content={
            <div>
              <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension <LatexRenderer latex="n \geq 2" /> et <LatexRenderer latex="u \in \mathcal{L}(E)" />.</p>
              <p>On suppose que <LatexRenderer latex="u" /> possède exactement <LatexRenderer latex="n" /> valeurs propres distinctes <LatexRenderer latex="\lambda_1, \ldots, \lambda_n" />.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Montrer que <LatexRenderer latex="u" /> est diagonalisable.</li>
                <li>Soit <LatexRenderer latex="v \in \mathcal{L}(E)" /> qui commute avec <LatexRenderer latex="u" />. Montrer que <LatexRenderer latex="v" /> laisse stable chaque sous-espace propre de <LatexRenderer latex="u" />.</li>
                <li>En déduire que <LatexRenderer latex="v" /> est diagonalisable dans la même base que <LatexRenderer latex="u" />.</li>
                <li>Application : déterminer tous les endomorphismes de <LatexRenderer latex="\mathbb{R}^3" /> qui commutent avec la matrice <LatexRenderer latex="A = \text{diag}(1, 2, 3)" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Diagonalisabilité de u :</h5>
                <div className="space-y-3">
                  <p>Avec <LatexRenderer latex="n" /> valeurs propres distinctes, chaque espace propre est de dimension au moins 1.</p>
                  <p>Donc <LatexRenderer latex="\sum_{i=1}^n \dim E_{\lambda_i}(u) \geq n" />.</p>
                  <p>Mais <LatexRenderer latex="\sum_{i=1}^n \dim E_{\lambda_i}(u) \leq \dim E = n" />.</p>
                  <p>Donc <LatexRenderer latex="\sum_{i=1}^n \dim E_{\lambda_i}(u) = n" />, et <LatexRenderer latex="u" /> est diagonalisable.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Stabilité des espaces propres :</h5>
                <div className="space-y-3">
                  <p>Soit <LatexRenderer latex="x \in E_{\lambda_i}(u)" />. Alors <LatexRenderer latex="u(x) = \lambda_i x" />.</p>
                  <p>Comme <LatexRenderer latex="uv = vu" /> :</p>
                  <LatexRenderer latex="u(v(x)) = v(u(x)) = v(\lambda_i x) = \lambda_i v(x)" />
                  <p>Donc <LatexRenderer latex="v(x) \in E_{\lambda_i}(u)" />, et <LatexRenderer latex="v" /> laisse <LatexRenderer latex="E_{\lambda_i}(u)" /> stable.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Diagonalisabilité de v :</h5>
                <div className="space-y-3">
                  <p>Chaque <LatexRenderer latex="E_{\lambda_i}(u)" /> étant de dimension 1, soit <LatexRenderer latex="E_{\lambda_i}(u) = \text{Vect}(e_i)" />.</p>
                  <p>Comme <LatexRenderer latex="v" /> laisse <LatexRenderer latex="E_{\lambda_i}(u)" /> stable, <LatexRenderer latex="v(e_i) = \mu_i e_i" /> pour un certain <LatexRenderer latex="\mu_i" />.</p>
                  <p>Donc <LatexRenderer latex="v" /> est diagonalisable dans la base <LatexRenderer latex="(e_1, \ldots, e_n)" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">4) Application :</h5>
                <div className="space-y-3">
                  <p>Les endomorphismes qui commutent avec <LatexRenderer latex="A = \text{diag}(1, 2, 3)" /> sont exactement les matrices diagonales.</p>
                  <p>En effet, si <LatexRenderer latex="M = (m_{ij})" /> commute avec <LatexRenderer latex="A" />, alors <LatexRenderer latex="MA = AM" /> donne :</p>
                  <LatexRenderer latex="m_{ij} \lambda_j = \lambda_i m_{ij}" />
                  <p>Pour <LatexRenderer latex="i \neq j" />, comme <LatexRenderer latex="\lambda_i \neq \lambda_j" />, on a <LatexRenderer latex="m_{ij} = 0" />.</p>
                  <p>Donc <LatexRenderer latex="M = \text{diag}(a, b, c)" /> avec <LatexRenderer latex="a, b, c \in \mathbb{R}" />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="concours-4"
          title="D'après EDHEC 2013 - Calcul de valeurs propres"
          difficulty="Concours"
          content={
            <div>
              <p>Soit <LatexRenderer latex="A = \begin{pmatrix} a & b & c \\ c & a & b \\ b & c & a \end{pmatrix}" /> où <LatexRenderer latex="a, b, c \in \mathbb{R}" />.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Calculer <LatexRenderer latex="A \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}" />, puis <LatexRenderer latex="A \begin{pmatrix} 1 \\ j \\ j^2 \end{pmatrix}" /> et <LatexRenderer latex="A \begin{pmatrix} 1 \\ j^2 \\ j \end{pmatrix}" /> où <LatexRenderer latex="j = e^{2i\pi/3}" />.</li>
                <li>En déduire les valeurs propres de <LatexRenderer latex="A" /> sur <LatexRenderer latex="\mathbb{C}" />.</li>
                <li>À quelle condition sur <LatexRenderer latex="a, b, c" /> la matrice <LatexRenderer latex="A" /> est-elle diagonalisable sur <LatexRenderer latex="\mathbb{R}" /> ?</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Calculs des produits :</h5>
                <div className="space-y-3">
                  <LatexRenderer latex="A \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} a+b+c \\ a+b+c \\ a+b+c \end{pmatrix} = (a+b+c) \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}" />
                  
                  <p>Pour le second vecteur (avec <LatexRenderer latex="j^3 = 1" /> et <LatexRenderer latex="1 + j + j^2 = 0" />) :</p>
                  <LatexRenderer latex="A \begin{pmatrix} 1 \\ j \\ j^2 \end{pmatrix} = \begin{pmatrix} a + bj + cj^2 \\ c + aj + bj^2 \\ b + cj + aj^2 \end{pmatrix}" />
                  <p>En utilisant <LatexRenderer latex="j^3 = 1" />, on obtient :</p>
                  <LatexRenderer latex="= (a + bj + cj^2) \begin{pmatrix} 1 \\ j \\ j^2 \end{pmatrix}" />
                  
                  <p>De même :</p>
                  <LatexRenderer latex="A \begin{pmatrix} 1 \\ j^2 \\ j \end{pmatrix} = (a + bj^2 + cj) \begin{pmatrix} 1 \\ j^2 \\ j \end{pmatrix}" />
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Valeurs propres complexes :</h5>
                <div className="space-y-3">
                  <p>Les valeurs propres de <LatexRenderer latex="A" /> sont :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><LatexRenderer latex="\lambda_1 = a + b + c" /></li>
                    <li><LatexRenderer latex="\lambda_2 = a + bj + cj^2" /></li>
                    <li><LatexRenderer latex="\lambda_3 = a + bj^2 + cj" /></li>
                  </ul>
                  <p>Avec les vecteurs propres correspondants.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Diagonalisabilité sur ℝ :</h5>
                <div className="space-y-3">
                  <p>Pour que <LatexRenderer latex="A" /> soit diagonalisable sur <LatexRenderer latex="\mathbb{R}" />, il faut que toutes ses valeurs propres soient réelles.</p>
                  <p><LatexRenderer latex="\lambda_1" /> est toujours réelle.</p>
                  <p>Pour <LatexRenderer latex="\lambda_2" /> et <LatexRenderer latex="\lambda_3" />, remarquons que <LatexRenderer latex="\lambda_3 = \overline{\lambda_2}" />.</p>
                  <p>Elles sont réelles si et seulement si <LatexRenderer latex="\lambda_2 = \lambda_3" />, c'est-à-dire <LatexRenderer latex="b = c" />.</p>
                  <p><strong>Condition :</strong> <LatexRenderer latex="A" /> est diagonalisable sur <LatexRenderer latex="\mathbb{R}" /> ⟺ <LatexRenderer latex="b = c" />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="concours-5"
          title="Exercice théorique - Polynômes annulateurs et valeurs propres"
          difficulty="Concours"
          content={
            <div>
              <p>Soit <LatexRenderer latex="E" /> un espace vectoriel de dimension finie et <LatexRenderer latex="u \in \mathcal{L}(E)" />.</p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mt-3">
                <li>Montrer que toute valeur propre de <LatexRenderer latex="u" /> est racine du polynôme minimal de <LatexRenderer latex="u" />.</li>
                <li>Soit <LatexRenderer latex="P" /> un polynôme annulateur de <LatexRenderer latex="u" />. Montrer que toute valeur propre de <LatexRenderer latex="u" /> est racine de <LatexRenderer latex="P" />.</li>
                <li>En déduire que si <LatexRenderer latex="u" /> a <LatexRenderer latex="n = \dim E" /> valeurs propres distinctes, alors <LatexRenderer latex="u" /> est diagonalisable.</li>
                <li>Application : soit <LatexRenderer latex="A \in \mathcal{M}_n(\mathbb{K})" /> telle que <LatexRenderer latex="A^k = I" /> pour un certain <LatexRenderer latex="k \geq 1" />. Montrer que <LatexRenderer latex="A" /> est diagonalisable si <LatexRenderer latex="\text{car}(\mathbb{K}) = 0" /> ou <LatexRenderer latex="\text{car}(\mathbb{K}) > k" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) Valeurs propres et polynôme minimal :</h5>
                <div className="space-y-3">
                  <p>Soit <LatexRenderer latex="\lambda" /> une valeur propre de <LatexRenderer latex="u" /> et <LatexRenderer latex="x \neq 0" /> un vecteur propre associé.</p>
                  <p>Si <LatexRenderer latex="m_u" /> est le polynôme minimal de <LatexRenderer latex="u" />, alors <LatexRenderer latex="m_u(u) = 0" />.</p>
                  <p>Donc <LatexRenderer latex="0 = m_u(u)(x) = m_u(\lambda) x" />.</p>
                  <p>Comme <LatexRenderer latex="x \neq 0" />, on a <LatexRenderer latex="m_u(\lambda) = 0" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Valeurs propres et polynômes annulateurs :</h5>
                <div className="space-y-3">
                  <p>Même raisonnement : si <LatexRenderer latex="P(u) = 0" /> et <LatexRenderer latex="u(x) = \lambda x" /> avec <LatexRenderer latex="x \neq 0" />, alors :</p>
                  <p><LatexRenderer latex="0 = P(u)(x) = P(\lambda) x" />, donc <LatexRenderer latex="P(\lambda) = 0" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Diagonalisabilité avec n valeurs propres distinctes :</h5>
                <div className="space-y-3">
                  <p>Si <LatexRenderer latex="u" /> a <LatexRenderer latex="n" /> valeurs propres distinctes <LatexRenderer latex="\lambda_1, \ldots, \lambda_n" />, alors :</p>
                  <p>Le polynôme minimal divise <LatexRenderer latex="(X - \lambda_1) \cdots (X - \lambda_n)" /> (par la question 1).</p>
                  <p>Comme ce polynôme est de degré <LatexRenderer latex="n = \dim E" /> et à racines simples, le polynôme minimal est exactement <LatexRenderer latex="(X - \lambda_1) \cdots (X - \lambda_n)" />.</p>
                  <p>Donc <LatexRenderer latex="u" /> est diagonalisable (polynôme minimal scindé à racines simples).</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">4) Application aux racines de l'unité :</h5>
                <div className="space-y-3">
                  <p>Si <LatexRenderer latex="A^k = I" />, alors <LatexRenderer latex="A" /> annule le polynôme <LatexRenderer latex="P(X) = X^k - 1" />.</p>
                  <p>Toute valeur propre <LatexRenderer latex="\lambda" /> de <LatexRenderer latex="A" /> vérifie <LatexRenderer latex="\lambda^k = 1" />.</p>
                  <p>Si <LatexRenderer latex="\text{car}(\mathbb{K}) = 0" /> ou <LatexRenderer latex="\text{car}(\mathbb{K}) > k" />, alors <LatexRenderer latex="X^k - 1" /> est scindé à racines simples dans une extension de <LatexRenderer latex="\mathbb{K}" />.</p>
                  <p>Le polynôme minimal de <LatexRenderer latex="A" /> divise <LatexRenderer latex="X^k - 1" />, donc est scindé à racines simples.</p>
                  <p>Donc <LatexRenderer latex="A" /> est diagonalisable.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="concours-6"
          title="Exercice 7.8 - D'après EDHEC 2009"
          difficulty="Concours"
          content={
            <div>
              <p>Soit <LatexRenderer latex="E" /> un <LatexRenderer latex="\mathbb{R}" />-espace vectoriel de dimension finie. Soit <LatexRenderer latex="n \geq 2" />.</p>
              <p>On considère l'application <LatexRenderer latex="T : \mathbb{R}_n[X] \to \mathbb{R}_n[X]" /> définie par</p>
              <div className="text-center my-4">
                <LatexRenderer latex="T(P)(X) = P(X+1) - P(X)" />
              </div>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>Montrer que <LatexRenderer latex="T" /> est un endomorphisme de <LatexRenderer latex="\mathbb{R}_n[X]" />.</li>
                <li>Pour <LatexRenderer latex="k \in \{0, 1, \ldots, n\}" />, calculer <LatexRenderer latex="T(X^k)" />.</li>
                <li>Déterminer <LatexRenderer latex="\ker(T)" /> et en déduire que <LatexRenderer latex="T" /> n'est pas surjectif.</li>
                <li>Soit <LatexRenderer latex="P \in \mathbb{R}_n[X]" />. À quelle condition <LatexRenderer latex="P" /> admet-il un antécédent par <LatexRenderer latex="T" /> ?</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">1) T est un endomorphisme :</h5>
                <div className="space-y-3">
                  <p><strong>Stabilité :</strong> Si <LatexRenderer latex="P \in \mathbb{R}_n[X]" />, alors <LatexRenderer latex="\deg(P(X+1)) = \deg(P) \leq n" /> et <LatexRenderer latex="\deg(P(X)) \leq n" />.</p>
                  <p>Donc <LatexRenderer latex="\deg(T(P)) = \deg(P(X+1) - P(X)) \leq n" />, ainsi <LatexRenderer latex="T(P) \in \mathbb{R}_n[X]" />.</p>
                  <p><strong>Linéarité :</strong> Pour <LatexRenderer latex="P, Q \in \mathbb{R}_n[X]" /> et <LatexRenderer latex="\lambda \in \mathbb{R}" /> :</p>
                  <LatexRenderer latex="T(\lambda P + Q)(X) = (\lambda P + Q)(X+1) - (\lambda P + Q)(X)" />
                  <LatexRenderer latex="= \lambda(P(X+1) - P(X)) + (Q(X+1) - Q(X)) = \lambda T(P)(X) + T(Q)(X)" />
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">2) Calcul de T(X^k) :</h5>
                <div className="space-y-3">
                  <p>Pour <LatexRenderer latex="k = 0" /> : <LatexRenderer latex="T(1) = 1 - 1 = 0" /></p>
                  <p>Pour <LatexRenderer latex="k \geq 1" /> : <LatexRenderer latex="T(X^k) = (X+1)^k - X^k" /></p>
                  <p>En utilisant la formule du binôme :</p>
                  <LatexRenderer latex="(X+1)^k = \sum_{j=0}^k \binom{k}{j} X^j = X^k + kX^{k-1} + \cdots + k X + 1" />
                  <p>Donc :</p>
                  <LatexRenderer latex="T(X^k) = kX^{k-1} + \binom{k}{2}X^{k-2} + \cdots + k X + 1" />
                  <p>En particulier, <LatexRenderer latex="T(X^k)" /> est de degré <LatexRenderer latex="k-1" /> pour <LatexRenderer latex="k \geq 1" />.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">3) Noyau de T :</h5>
                <div className="space-y-3">
                  <p><LatexRenderer latex="P \in \ker(T) \iff T(P) = 0 \iff P(X+1) = P(X)" /> pour tout <LatexRenderer latex="X" /></p>
                  <p>Ceci signifie que <LatexRenderer latex="P" /> est périodique de période 1, donc constant.</p>
                  <p>Donc <LatexRenderer latex="\ker(T) = \mathbb{R} \cdot 1 = \text{Vect}(1)" />, et <LatexRenderer latex="\dim \ker(T) = 1" />.</p>
                  <p>Par le théorème du rang : <LatexRenderer latex="\dim \text{Im}(T) = \dim \mathbb{R}_n[X] - \dim \ker(T) = (n+1) - 1 = n" />.</p>
                  <p>Comme <LatexRenderer latex="\dim \text{Im}(T) = n < n+1 = \dim \mathbb{R}_n[X]" />, <LatexRenderer latex="T" /> n'est pas surjectif.</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">4) Condition d'existence d'antécédent :</h5>
                <div className="space-y-3">
                  <p>Pour que <LatexRenderer latex="P" /> admette un antécédent, il faut <LatexRenderer latex="P \in \text{Im}(T)" />.</p>
                  <p>D'après la question 2, <LatexRenderer latex="\text{Im}(T) = \text{Vect}(T(X), T(X^2), \ldots, T(X^n))" />.</p>
                  <p>Puisque <LatexRenderer latex="T(X^k)" /> est de degré <LatexRenderer latex="k-1" />, on a :</p>
                  <p><LatexRenderer latex="\text{Im}(T) = \text{Vect}(1, X, X^2, \ldots, X^{n-1}) = \mathbb{R}_{n-1}[X]" /></p>
                  <p><strong>Condition :</strong> <LatexRenderer latex="P" /> admet un antécédent par <LatexRenderer latex="T" /> ⟺ <LatexRenderer latex="\deg(P) \leq n-1" />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="concours-7"
          title="Exercice 7.12 - Des matrices non semblables"
          difficulty="Concours"
          content={
            <div>
              <ol className="list-decimal list-inside space-y-6 pl-4">
                <li>
                  <p className="mb-4">Soient</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <LatexRenderer latex="A = \begin{pmatrix} 2 & 1 & 0 & 0 \\ 0 & 2 & 1 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 2 \end{pmatrix}" />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex="B = \begin{pmatrix} 2 & 1 & 0 & 0 \\ 0 & 2 & 0 & 0 \\ 0 & 0 & 2 & 1 \\ 0 & 0 & 0 & 2 \end{pmatrix}" />
                    </div>
                  </div>
                  <ol className="list-[lower-alpha] list-inside ml-4 mt-4 space-y-2">
                    <li>Montrer que <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> ont même rang, même trace, mêmes valeurs propres et des sous-espaces propres de même dimension.</li>
                    <li>Calculer <LatexRenderer latex="(A - 2I_4)^2" /> et <LatexRenderer latex="(B - 2I_4)^2" />. En déduire que <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> ne sont pas semblables.</li>
                  </ol>
                </li>
                
                <li>
                  <p className="mb-4">Soient</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <LatexRenderer latex="A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}" />
                    </div>
                    <div className="text-center">
                      <LatexRenderer latex="B = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}" />
                    </div>
                  </div>
                  <ol className="list-[lower-alpha] list-inside ml-4 mt-4 space-y-2">
                    <li>Montrer que <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> ont même rang, même trace, et n'ont pas de valeurs propres réelles.</li>
                    <li>Déterminer les valeurs propres de <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> vues comme matrices de <LatexRenderer latex="\mathcal{M}_2(\mathbb{C})" />. En déduire que <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> ne sont pas semblables dans <LatexRenderer latex="\mathcal{M}_2(\mathbb{R})" />.</li>
                  </ol>
                </li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold mb-3">1) Matrices triangulaires supérieures 4×4</h5>
                
                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold mb-2">a) Invariants classiques identiques :</h6>
                    <div className="space-y-3">
                      <p><strong>Rang :</strong> <LatexRenderer latex="\text{rg}(A) = \text{rg}(B) = 4" /> (matrices triangulaires avec coefficients diagonaux non nuls)</p>
                      <p><strong>Trace :</strong> <LatexRenderer latex="\text{tr}(A) = \text{tr}(B) = 8" /></p>
                      <p><strong>Valeurs propres :</strong> <LatexRenderer latex="\text{Spec}(A) = \text{Spec}(B) = \{2\}" /> (multiplicité 4)</p>
                      <p><strong>Dimensions :</strong> <LatexRenderer latex="\dim E_2(A) = \dim E_2(B) = 2" /></p>
                    </div>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold mb-2">b) Calcul des puissances :</h6>
                    <div className="space-y-3">
                      <LatexRenderer latex="A - 2I_4 = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}" />
                      <LatexRenderer latex="(A - 2I_4)^2 = \begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix} \neq 0" />
                      
                      <LatexRenderer latex="B - 2I_4 = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}" />
                      <LatexRenderer latex="(B - 2I_4)^2 = 0" />
                      
                      <p><strong>Conclusion :</strong> Comme <LatexRenderer latex="(A - 2I_4)^2 \neq (B - 2I_4)^2" /> et que la similitude préserve les puissances, <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> ne sont pas semblables.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-3">2) Matrices de rotation 2×2</h5>
                
                <div className="space-y-4">
                  <div>
                    <h6 className="font-semibold mb-2">a) Propriétés dans ℝ :</h6>
                    <div className="space-y-2">
                      <p><strong>Rang :</strong> <LatexRenderer latex="\text{rg}(A) = \text{rg}(B) = 2" /></p>
                      <p><strong>Trace :</strong> <LatexRenderer latex="\text{tr}(A) = \text{tr}(B) = 0" /></p>
                      <p><strong>Valeurs propres réelles :</strong> Aucune (discriminants <LatexRenderer latex="\lambda^2 + 1" /> et <LatexRenderer latex="\lambda^2 + 4" /> toujours positifs)</p>
                    </div>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold mb-2">b) Valeurs propres complexes :</h6>
                    <div className="space-y-3">
                      <p><LatexRenderer latex="\text{Spec}_{\mathbb{C}}(A) = \{i, -i\}" /></p>
                      <p><LatexRenderer latex="\text{Spec}_{\mathbb{C}}(B) = \{2i, -2i\}" /></p>
                      <p><strong>Conclusion :</strong> Puisque les spectres complexes sont différents, <LatexRenderer latex="A" /> et <LatexRenderer latex="B" /> ne sont pas semblables dans <LatexRenderer latex="\mathcal{M}_2(\mathbb{R})" />.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="concours-8"
          title="Exercice 7.13 - Polynômes d'Hermite (D'après ESSEC 2002)"
          difficulty="Concours"
          content={
            <div>
              <div className="mb-4">
                <p>Soit <LatexRenderer latex="n \geq 2" />, et soit <LatexRenderer latex="\varphi : \mathbb{R}_n[X] \to \mathbb{R}[X]" /> défini par</p>
                <div className="text-center my-4">
                  <LatexRenderer latex="\varphi(P) = 2X P' - P''" />
                </div>
              </div>
              
              <ol className="list-decimal list-inside space-y-4 pl-4">
                <li>Montrer que <LatexRenderer latex="\varphi" /> est un endomorphisme de <LatexRenderer latex="\mathbb{R}_n[X]" />.</li>
                
                <li>Écrire la matrice de <LatexRenderer latex="\varphi" /> dans la base canonique de <LatexRenderer latex="\mathbb{R}_n[X]" />. En déduire les valeurs propres de <LatexRenderer latex="\varphi" /> et la dimension de ses sous-espaces propres.</li>
                
                <li>
                  <p>Montrer que, pour tout <LatexRenderer latex="p \in \llbracket 0,n \rrbracket" />, il existe un unique polynôme unitaire <LatexRenderer latex="H_p" /> tel que</p>
                  <div className="text-center my-3">
                    <LatexRenderer latex="H_p'' - 2X H_p' + 2p\,H_p = 0" />
                  </div>
                </li>
                
                <li>Montrer que, pour tout <LatexRenderer latex="p \in \llbracket 0,n \rrbracket" />, <LatexRenderer latex="H_p" /> est de degré <LatexRenderer latex="p" />.</li>
              </ol>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold mb-3">1) φ est un endomorphisme de ℝₙ[X]</h5>
                <div className="space-y-3">
                  <p><strong>Stabilité :</strong> Si <LatexRenderer latex="P \in \mathbb{R}_n[X]" />, alors <LatexRenderer latex="\deg(2XP') \leq n" /> et <LatexRenderer latex="\deg(P'') \leq n-2" />.</p>
                  <p>Donc <LatexRenderer latex="\deg(\varphi(P)) \leq n" /> et <LatexRenderer latex="\varphi(P) \in \mathbb{R}_n[X]" />.</p>
                  <p><strong>Linéarité :</strong> <LatexRenderer latex="\varphi(\lambda P + Q) = 2X(\lambda P' + Q') - (\lambda P'' + Q'') = \lambda \varphi(P) + \varphi(Q)" /></p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-3">2) Matrice et valeurs propres</h5>
                <div className="space-y-3">
                  <p><strong>Images de base :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><LatexRenderer latex="\varphi(1) = 0" /></li>
                    <li><LatexRenderer latex="\varphi(X) = 2X" /></li>
                    <li><LatexRenderer latex="\varphi(X^k) = 2kX^k - k(k-1)X^{k-2}" /> pour <LatexRenderer latex="k \geq 2" /></li>
                  </ul>
                  <p><strong>Matrice :</strong> Triangulaire supérieure avec diagonale <LatexRenderer latex="(0, 2, 4, \ldots, 2n)" /></p>
                  <p><strong>Valeurs propres :</strong> <LatexRenderer latex="\text{Spec}(\varphi) = \{2p : p = 0,1,\ldots,n\}" /></p>
                  <p><strong>Dimensions :</strong> <LatexRenderer latex="\dim E_{2p}(\varphi) = 1" /> pour tout <LatexRenderer latex="p" /></p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-3">3) Polynômes d'Hermite</h5>
                <div className="space-y-3">
                  <p><LatexRenderer latex="P \in E_{2p}(\varphi) \iff \varphi(P) = 2pP \iff 2XP' - P'' = 2pP \iff P'' - 2XP' + 2pP = 0" /></p>
                  <p>Comme <LatexRenderer latex="\dim E_{2p}(\varphi) = 1" />, il existe un unique polynôme unitaire <LatexRenderer latex="H_p" /> dans cet espace propre.</p>
                  <p><strong>Équation d'Hermite :</strong> <LatexRenderer latex="H_p'' - 2XH_p' + 2pH_p = 0" /></p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-3">4) Degré des polynômes d'Hermite</h5>
                <div className="space-y-3">
                  <p><strong>Méthode 1 :</strong> Si <LatexRenderer latex="H_p" /> est unitaire de degré <LatexRenderer latex="d" />, alors dans l'équation, le terme de plus haut degré vient de <LatexRenderer latex="-2XH_p' + 2pH_p" />.</p>
                  <p>Le coefficient de <LatexRenderer latex="X^d" /> donne <LatexRenderer latex="-2d + 2p = 0" />, donc <LatexRenderer latex="d = p" />.</p>
                  <p><strong>Méthode 2 :</strong> L'espace <LatexRenderer latex="\mathbb{R}_k[X]" /> est stable par <LatexRenderer latex="\varphi" />. La valeur propre <LatexRenderer latex="2p" /> n'apparaît dans <LatexRenderer latex="\mathbb{R}_{p-1}[X]" /> que si <LatexRenderer latex="p \leq p-1" />, ce qui est impossible. Donc tout vecteur propre pour <LatexRenderer latex="2p" /> est de degré exactement <LatexRenderer latex="p" />.</p>
                </div>
              </div>
            </div>
          }
        />

        {/* Conseil méthodologique */}
        <Card className="mt-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Conseil méthodologique
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Pour réussir les exercices sur les éléments propres :</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Toujours commencer par le calcul du polynôme caractéristique</li>
                <li>Vérifier systématiquement les dimensions des espaces propres</li>
                <li>Utiliser le théorème spectral pour les matrices symétriques</li>
                <li>Penser aux invariants de similitude pour les exercices avancés</li>
                <li>Maîtriser les liens entre polynôme minimal et diagonalisabilité</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre2EndomorphismesMatricesAvanceesExercicesPage;