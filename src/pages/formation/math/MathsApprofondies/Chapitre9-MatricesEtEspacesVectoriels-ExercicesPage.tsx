import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre9MatricesEtEspacesVectorielsExercicesPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 9</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 9 : Matrices & espaces vectoriels
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les matrices et les espaces vectoriels.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Calcul matriciel et puissances"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Moyen"
          content={
            <div>
              <p>On considère la matrice :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"J = \\begin{pmatrix} 2 & 2 & 2 \\\\ 2 & 2 & 2 \\\\ 2 & 2 & 2 \\end{pmatrix}"} />
              </div>
              <p>Montrer que :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"\\forall n \\in \\mathbb{N}^*, \\quad J^n = 6^{n-1} J"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Démonstration par récurrence :</strong>
                <p className="mt-2">Posons pour <LatexRenderer latex={"n \\in \\mathbb{N}^*"} />, <LatexRenderer latex={"\\mathcal{P}(n) : J^n = 6^{n-1} J"} />.</p>
              </div>
              
              <div>
                <strong className="text-blue-600">Initialisation (n = 1) :</strong>
                <div className="mt-2 space-y-2">
                  <p>D'une part : <LatexRenderer latex={"J^1 = J"} /></p>
                  <p>D'autre part : <LatexRenderer latex={"6^{1-1} J = 6^0 J = J"} /></p>
                  <p>Ainsi <LatexRenderer latex={"\\mathcal{P}(1)"} /> est vraie et la propriété est initialisée.</p>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Hérédité :</strong>
                <div className="mt-2 space-y-2">
                  <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}^*"} />, supposons <LatexRenderer latex={"\\mathcal{P}(n)"} /> vraie et montrons que <LatexRenderer latex={"\\mathcal{P}(n+1)"} /> est vraie.</p>
                  <div className="text-center">
                    <LatexRenderer latex={"J^{n+1} = J^n \\times J"} />
                  </div>
                  <p>Par hypothèse de récurrence :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"= 6^{n-1} J \\times J"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Calcul de J² :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"J^2 = \\begin{pmatrix} 2 & 2 & 2 \\\\ 2 & 2 & 2 \\\\ 2 & 2 & 2 \\end{pmatrix} \\times \\begin{pmatrix} 2 & 2 & 2 \\\\ 2 & 2 & 2 \\\\ 2 & 2 & 2 \\end{pmatrix}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\begin{pmatrix} 12 & 12 & 12 \\\\ 12 & 12 & 12 \\\\ 12 & 12 & 12 \\end{pmatrix} = 6J"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion de l'hérédité :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"J^{n+1} = 6^{n-1} \\times 6J = 6^n J"} />
                  </div>
                  <p><LatexRenderer latex={"\\mathcal{P}(n+1)"} /> est vraie et la propriété est héréditaire.</p>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <LatexRenderer latex={"\\forall n \\in \\mathbb{N}^*, \\quad J^n = 6^{n-1} J"} />
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
              <p>Soit la matrice :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}"} />
              </div>
              <p>Calculer <LatexRenderer latex={"A^2"} /> et <LatexRenderer latex={"A^3"} />. Que remarquez-vous ?</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Calcul de A² :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"A^2 = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix} \\times \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{pmatrix}"} />
                </div>
              </div>
              
              <div>
                <strong className="text-blue-600">Calcul de A³ :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"A^3 = A^2 \\times A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{pmatrix} \\times \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 3 & 3 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1 \\end{pmatrix}"} />
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Observation :</strong>
                <div className="mt-2 space-y-2">
                  <p>On remarque que A est une matrice triangulaire supérieure avec des 1 sur la diagonale.</p>
                  <p>Les coefficients non nuls suivent un motif lié aux coefficients binomiaux :</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><LatexRenderer latex={"A^1 : (1,1), (1,0)"} /></li>
                    <li><LatexRenderer latex={"A^2 : (1,2), (1,0)"} /></li>
                    <li><LatexRenderer latex={"A^3 : (1,3), (3,0)"} /></li>
                  </ul>
                  <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                    <p>Conjecture : <LatexRenderer latex={"A^n_{i,j} = \\binom{n}{j-i}"} /> si <LatexRenderer latex={"j \\geq i"} />, 0 sinon</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Facile"
          content={
            <div>
              <p>Calculer les puissances de la matrice diagonale :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"D = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}"} />
              </div>
              <p>Déterminer une formule générale pour <LatexRenderer latex={"D^n"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Calcul de D² :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"D^2 = \\begin{pmatrix} 4 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 9 \\end{pmatrix}"} />
                </div>
              </div>
              
              <div>
                <strong className="text-blue-600">Calcul de D³ :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"D^3 = \\begin{pmatrix} 8 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & 27 \\end{pmatrix}"} />
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Observation et formule générale :</strong>
                <div className="mt-2 space-y-2">
                  <p>Pour une matrice diagonale, les puissances se calculent facilement :</p>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"D^n = \\begin{pmatrix} 2^n & 0 & 0 \\\\ 0 & (-1)^n & 0 \\\\ 0 & 0 & 3^n \\end{pmatrix}"} />
                  </div>
                  <p><strong>Règle générale :</strong> Pour une matrice diagonale <LatexRenderer latex={"\\text{diag}(\\lambda_1, \\lambda_2, ..., \\lambda_k)"} />, on a <LatexRenderer latex={"D^n = \\text{diag}(\\lambda_1^n, \\lambda_2^n, ..., \\lambda_k^n)"} />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex4"
          title="Exercice 4"
          difficulty="Difficile"
          content={
            <div>
              <p>Soit la matrice :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"M = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}"} />
              </div>
              <p>Montrer par récurrence que :</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"M^n = \\begin{pmatrix} F_{n+1} & F_n \\\\ F_n & F_{n-1} \\end{pmatrix}"} />
              </div>
              <p>où <LatexRenderer latex={"F_n"} /> est le n-ième terme de la suite de Fibonacci avec <LatexRenderer latex={"F_0 = 0, F_1 = 1"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Rappel :</strong>
                <p className="mt-2">Suite de Fibonacci : <LatexRenderer latex={"F_0 = 0, F_1 = 1, F_{n+1} = F_n + F_{n-1}"} /></p>
                <p>Premiers termes : <LatexRenderer latex={"F_0 = 0, F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3, F_5 = 5, ..."} /></p>
              </div>

              <div>
                <strong className="text-blue-600">Initialisation (n = 1) :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"M^1 = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} F_2 & F_1 \\\\ F_1 & F_0 \\end{pmatrix}"} />
                  </div>
                  <p>La propriété est vérifiée pour n = 1.</p>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Hérédité :</strong>
                <div className="mt-2 space-y-2">
                  <p>Supposons <LatexRenderer latex={"M^n = \\begin{pmatrix} F_{n+1} & F_n \\\\ F_n & F_{n-1} \\end{pmatrix}"} /> vraie.</p>
                  <div className="text-center">
                    <LatexRenderer latex={"M^{n+1} = M^n \\times M = \\begin{pmatrix} F_{n+1} & F_n \\\\ F_n & F_{n-1} \\end{pmatrix} \\times \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\begin{pmatrix} F_{n+1} + F_n & F_{n+1} \\\\ F_n + F_{n-1} & F_n \\end{pmatrix}"} />
                  </div>
                  <p>En utilisant la relation de récurrence de Fibonacci :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\begin{pmatrix} F_{n+2} & F_{n+1} \\\\ F_{n+1} & F_n \\end{pmatrix}"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <LatexRenderer latex={"\\forall n \\geq 1, \\quad M^n = \\begin{pmatrix} F_{n+1} & F_n \\\\ F_n & F_{n-1} \\end{pmatrix}"} />
                </div>
                <p className="mt-2">Cette propriété établit un lien remarquable entre les puissances de matrices et la suite de Fibonacci.</p>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Moyen"
          content={
            <div>
              <p>Dans chacun des cas suivants, calculer <LatexRenderer latex={"A^2"} />, <LatexRenderer latex={"A^3"} />, <LatexRenderer latex={"A^4"} /> puis <LatexRenderer latex={"A^n"} /> pour <LatexRenderer latex={"n \\in \\mathbb{N}^*"} />.</p>
              <div className="space-y-3 mt-4">
                <div>1. <LatexRenderer latex={"A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}"} /></div>
                <div>2. <LatexRenderer latex={"A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}"} /></div>
                <div>3. <LatexRenderer latex={"B = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}"} /></div>
                <div>4. <LatexRenderer latex={"C = \\begin{pmatrix} 2 & 1 \\\\ 0 & 1 \\end{pmatrix}"} /></div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Cas A = (matrice de rotation) :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"A^2 = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -I_2"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"A^3 = A^2 \\cdot A = -I_2 \\cdot A = -A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"A^4 = A^3 \\cdot A = -A \\cdot A = -A^2 = I_2"} />
                  </div>
                  <div className="bg-blue-50 p-3 rounded mt-3">
                    <p><strong>Formule générale :</strong> Pour <LatexRenderer latex={"n \\in \\mathbb{N}^*"} /> :</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Si <LatexRenderer latex={"n = 4k"} />, alors <LatexRenderer latex={"A^n = I_2"} /></li>
                      <li>Si <LatexRenderer latex={"n = 4k + 1"} />, alors <LatexRenderer latex={"A^n = A"} /></li>
                      <li>Si <LatexRenderer latex={"n = 4k + 2"} />, alors <LatexRenderer latex={"A^n = -I_2"} /></li>
                      <li>Si <LatexRenderer latex={"n = 4k + 3"} />, alors <LatexRenderer latex={"A^n = -A"} /></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Cas A (matrice spéciale) :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"A^2 = \\begin{pmatrix} 2 & 0 & 2 \\\\ 0 & 0 & 0 \\\\ 2 & 0 & 2 \\end{pmatrix}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"A^3 = \\begin{pmatrix} 4 & 0 & 4 \\\\ 0 & 0 & 0 \\\\ 4 & 0 & 4 \\end{pmatrix}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"A^4 = \\begin{pmatrix} 8 & 0 & 8 \\\\ 0 & 0 & 0 \\\\ 8 & 0 & 8 \\end{pmatrix}"} />
                  </div>
                  <div className="bg-blue-50 p-3 rounded mt-3">
                    <p><strong>Conjecture :</strong> <LatexRenderer latex={"A^n = \\begin{pmatrix} 2^{n-1} & 0 & 2^{n-1} \\\\ 0 & 0 & 0 \\\\ 2^{n-1} & 0 & 2^{n-1} \\end{pmatrix}"} /></p>
                    <p className="mt-2">Cette formule se démontre par récurrence en utilisant la structure particulière de A.</p>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Cas B (matrice triangulaire supérieure) :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"B^2 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{pmatrix}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"B^3 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 3 \\\\ 0 & 0 & 1 \\end{pmatrix}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"B^4 = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 4 \\\\ 0 & 0 & 1 \\end{pmatrix}"} />
                  </div>
                  <div className="bg-blue-50 p-3 rounded mt-3">
                    <p><strong>Formule générale :</strong> <LatexRenderer latex={"B^n = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & n \\\\ 0 & 0 & 1 \\end{pmatrix}"} /></p>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">4. Cas C :</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"C^2 = \\begin{pmatrix} 4 & 3 \\\\ 0 & 1 \\end{pmatrix}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"C^3 = \\begin{pmatrix} 8 & 7 \\\\ 0 & 1 \\end{pmatrix}"} />
                  </div>
                  <div className="bg-blue-50 p-3 rounded mt-3">
                    <p><strong>Formule générale :</strong> <LatexRenderer latex={"C^n = \\begin{pmatrix} 2^n & 2^n - 1 \\\\ 0 & 1 \\end{pmatrix}"} /></p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <DifficultyHeader
          level="Module 2"
          title="Espaces vectoriels et sous-espaces"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex6"
          title="Exercice 6"
          difficulty="Moyen"
          content={
            <div>
              <p>Montrer que</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"F = \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} \\in M_{3,1}(\\mathbb{R}) \\mid 2x_1 - 5x_2 + x_3 = 0 \\text{ et } x_2 + x_3 = 0 \\right\\}"} />
              </div>
              <p>est un sous-espace vectoriel de <LatexRenderer latex={"M_{3,1}(\\mathbb{R})"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">1. Inclusion :</strong>
                <p className="mt-2">On a clairement <LatexRenderer latex={"F \\subset M_{3,1}(\\mathbb{R})"} />.</p>
              </div>
              
              <div>
                <strong className="text-blue-600">2. Élément neutre :</strong>
                <div className="mt-2 space-y-2">
                  <p><LatexRenderer latex={"\\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix} \\in F"} /> car :</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><LatexRenderer latex={"2 \\times 0 - 5 \\times 0 + 0 = 0"} /></li>
                    <li><LatexRenderer latex={"0 + 0 = 0"} /></li>
                  </ul>
                  <p>Ainsi <LatexRenderer latex={"F \\neq \\emptyset"} />.</p>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Stabilité :</strong>
                <div className="mt-2 space-y-2">
                  <p>Soient <LatexRenderer latex={"X = \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} \\in F"} />, <LatexRenderer latex={"Y = \\begin{pmatrix} y_1 \\\\ y_2 \\\\ y_3 \\end{pmatrix} \\in F"} /> et <LatexRenderer latex={"\\lambda \\in \\mathbb{R}"} />.</p>
                  
                  <p>On a <LatexRenderer latex={"\\lambda X + Y = \\begin{pmatrix} \\lambda x_1 + y_1 \\\\ \\lambda x_2 + y_2 \\\\ \\lambda x_3 + y_3 \\end{pmatrix}"} /></p>
                  
                  <p><strong>Vérification de la première condition :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"2(\\lambda x_1 + y_1) - 5(\\lambda x_2 + y_2) + (\\lambda x_3 + y_3)"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\lambda (2x_1 - 5x_2 + x_3) + (2y_1 - 5y_2 + y_3) = \\lambda \\cdot 0 + 0 = 0"} />
                  </div>
                  
                  <p><strong>Vérification de la seconde condition :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"(\\lambda x_2 + y_2) + (\\lambda x_3 + y_3) = \\lambda (x_2 + x_3) + (y_2 + y_3) = \\lambda \\cdot 0 + 0 = 0"} />
                  </div>
                  
                  <p>Ainsi <LatexRenderer latex={"\\lambda X + Y \\in F"} />.</p>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <p><LatexRenderer latex={"F"} /> est un sous-espace vectoriel de <LatexRenderer latex={"M_{3,1}(\\mathbb{R})"} />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex7"
          title="Exercice 7"
          difficulty="Moyen"
          content={
            <div>
              <p>Soit <LatexRenderer latex={"(a, b) \\in \\mathbb{R}^2"} />, montrer que l'ensemble des polynômes réels de degré 2 admettant <LatexRenderer latex={"a"} /> et <LatexRenderer latex={"b"} /> comme racines est un sous-espace vectoriel de <LatexRenderer latex={"\\mathbb{R}_2[x]"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">Définition de l'ensemble :</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"F = \\{ P \\in \\mathbb{R}_2[x] \\mid P(a) = P(b) = 0 \\}"} />
                </div>
              </div>
              
              <div>
                <strong className="text-blue-600">1. Inclusion :</strong>
                <p className="mt-2">On a clairement <LatexRenderer latex={"F \\subset \\mathbb{R}_2[x]"} />.</p>
              </div>
              
              <div>
                <strong className="text-blue-600">2. Élément neutre :</strong>
                <p className="mt-2">Le polynôme nul a tous les réels comme racines, donc il appartient à F et <LatexRenderer latex={"F \\neq \\emptyset"} />.</p>
              </div>

              <div>
                <strong className="text-blue-600">3. Stabilité :</strong>
                <div className="mt-2 space-y-2">
                  <p>Soient <LatexRenderer latex={"P, Q \\in F^2"} /> et <LatexRenderer latex={"\\lambda \\in \\mathbb{R}"} />.</p>
                  <p>Comme <LatexRenderer latex={"P(a) = P(b) = Q(a) = Q(b) = 0"} /> :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"(\\lambda P + Q)(a) = \\lambda P(a) + Q(a) = \\lambda \\cdot 0 + 0 = 0"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"(\\lambda P + Q)(b) = \\lambda P(b) + Q(b) = \\lambda \\cdot 0 + 0 = 0"} />
                  </div>
                  <p>Ainsi <LatexRenderer latex={"\\lambda P + Q \\in F"} />.</p>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <p><LatexRenderer latex={"F"} /> est un sous-espace vectoriel de <LatexRenderer latex={"\\mathbb{R}_2[x]"} />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 8"
          difficulty="Difficile"
          content={
            <div>
              <p>Montrer que</p>
              <div className="text-center my-4">
                <LatexRenderer latex={"F = \\{ (u_n) \\in \\mathbb{R}^\\mathbb{N} \\mid \\forall n \\in \\mathbb{N}, u_{n+2} = n u_{n+1} + u_n \\}"} />
              </div>
              <p>est un sous-espace vectoriel de <LatexRenderer latex={"\\mathbb{R}^\\mathbb{N}"} />.</p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-blue-600">1. Inclusion :</strong>
                <p className="mt-2">On a clairement <LatexRenderer latex={"F \\subset \\mathbb{R}^\\mathbb{N}"} />.</p>
              </div>
              
              <div>
                <strong className="text-blue-600">2. Élément neutre :</strong>
                <div className="mt-2 space-y-2">
                  <p>La suite nulle appartient bien à F car si pour tout <LatexRenderer latex={"n \\in \\mathbb{N}, u_n = 0"} />, on a clairement :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\forall n \\in \\mathbb{N}, \\quad 0 = n \\times 0 + 0"} />
                  </div>
                  <p>Ainsi <LatexRenderer latex={"F \\neq \\emptyset"} />.</p>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Stabilité :</strong>
                <div className="mt-2 space-y-2">
                  <p>Soient <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}, (v_n)_{n \\in \\mathbb{N}} \\in F^2"} /> et <LatexRenderer latex={"\\lambda \\in \\mathbb{R}"} />.</p>
                  <p>Soit <LatexRenderer latex={"n \\in \\mathbb{N}"} />, on a :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\lambda u_{n+2} + v_{n+2} = \\lambda (n u_{n+1} + u_n) + n v_{n+1} + v_n"} />
                  </div>
                  <p>car <LatexRenderer latex={"(u_n)_{n \\in \\mathbb{N}}, (v_n)_{n \\in \\mathbb{N}} \\in F^2"} /></p>
                  <div className="text-center">
                    <LatexRenderer latex={"= n (\\lambda u_{n+1} + v_{n+1}) + \\lambda u_n + v_n"} />
                  </div>
                  <p>Ainsi <LatexRenderer latex={"\\lambda (u_n)_{n \\in \\mathbb{N}} + (v_n)_{n \\in \\mathbb{N}} \\in F"} />.</p>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">Conclusion :</strong>
                <div className="mt-2 text-center bg-blue-50 p-2 rounded">
                  <p><LatexRenderer latex={"F"} /> est un sous-espace vectoriel de <LatexRenderer latex={"\\mathbb{R}^\\mathbb{N}"} />.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex9"
          title="Exercice 9"
          difficulty="Moyen"
          content={
            <div>
              <div className="space-y-3">
                <div>1. Soit <LatexRenderer latex={"A \\in M_3(\\mathbb{R})"} />. Démontrer que l'ensemble F des matrices M carrées d'ordre 3 qui commutent avec A est un sous-espace vectoriel de <LatexRenderer latex={"M_3(\\mathbb{R})"} />.</div>
                <div>2. Démontrer que l'ensemble G des matrices M symétriques d'ordre 3 est un sous-espace vectoriel de <LatexRenderer latex={"M_3(\\mathbb{R})"} />.</div>
                <div>3. L'ensemble H des matrices inversibles est-il un sous-espace vectoriel de <LatexRenderer latex={"M_3(\\mathbb{R})"} /> ?</div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1. Matrices qui commutent avec A :</strong>
                <div className="mt-2 space-y-2">
                  <p>On peut écrire : <LatexRenderer latex={"F = \\{ M \\in M_3(\\mathbb{R}) \\mid AM = MA \\}"} /></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Inclusion : <LatexRenderer latex={"F \\subset M_3(\\mathbb{R})"} /></li>
                    <li>Élément neutre : <LatexRenderer latex={"0_3 \\times A = A \\times 0_3"} /> donc <LatexRenderer latex={"0_3 \\in F"} /></li>
                    <li>Stabilité : Si <LatexRenderer latex={"M_1, M_2 \\in F"} /> et <LatexRenderer latex={"\\lambda \\in \\mathbb{R}"} /> :</li>
                  </ul>
                  <div className="text-center">
                    <LatexRenderer latex={"A(\\lambda M_1 + M_2) = \\lambda AM_1 + AM_2 = \\lambda M_1 A + M_2 A = (\\lambda M_1 + M_2)A"} />
                  </div>
                  <div className="bg-blue-50 p-2 rounded mt-2">
                    <p>Donc F est un sous-espace vectoriel de <LatexRenderer latex={"M_3(\\mathbb{R})"} />.</p>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">2. Matrices symétriques :</strong>
                <div className="mt-2 space-y-2">
                  <p>On peut écrire : <LatexRenderer latex={"G = \\{ M \\in M_3(\\mathbb{R}) \\mid M = M^t \\}"} /></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Inclusion : <LatexRenderer latex={"G \\subset M_3(\\mathbb{R})"} /></li>
                    <li>Élément neutre : La matrice nulle est symétrique</li>
                    <li>Stabilité : Si <LatexRenderer latex={"M_1, M_2 \\in G"} /> et <LatexRenderer latex={"\\lambda \\in \\mathbb{R}"} /> :</li>
                  </ul>
                  <div className="text-center">
                    <LatexRenderer latex={"(\\lambda M_1 + M_2)^t = \\lambda M_1^t + M_2^t = \\lambda M_1 + M_2"} />
                  </div>
                  <div className="bg-blue-50 p-2 rounded mt-2">
                    <p>Donc G est un sous-espace vectoriel de <LatexRenderer latex={"M_3(\\mathbb{R})"} />.</p>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-blue-600">3. Matrices inversibles :</strong>
                <div className="mt-2 space-y-2">
                  <p>La matrice nulle n'est pas inversible donc <LatexRenderer latex={"0_3 \\notin H"} />.</p>
                  <div className="bg-red-50 p-2 rounded border-l-4 border-red-400">
                    <p><strong>Conclusion :</strong> H ne peut pas être un sous-espace vectoriel de <LatexRenderer latex={"M_3(\\mathbb{R})"} />.</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Chapitre9MatricesEtEspacesVectorielsExercicesPage;
