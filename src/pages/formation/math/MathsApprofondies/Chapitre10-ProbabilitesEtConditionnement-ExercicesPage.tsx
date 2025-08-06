import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre10ProbabilitesEtConditionnementExercicesPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 10</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 10 : Probabilités & conditionnement
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices du chapitre 10
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Intersection et probabilités conditionnelles"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <p>On a une urne contenant 2 boules jaunes et 7 boules noires.</p>
              <p>On effectue <LatexRenderer latex={"n \\geq 2"} /> tirages :</p>
              <ul className="list-disc list-inside ml-4">
                <li>avec remise pour la question 1</li>
                <li>sans remise pour la question 2</li>
              </ul>
              <p>On définit :</p>
              <ul className="list-disc list-inside ml-4">
                  <li><LatexRenderer latex={"A"} /> : « aucun tirage n'amène de boule noire » (que des jaunes)</li>
                  <li><LatexRenderer latex={"B_k"} /> : « la 1<sup>ère</sup> boule jaune apparaît au <LatexRenderer latex={"k^e"} /> tirage »</li>
              </ul>
              <div>
                <strong className="font-semibold">Question 1 : </strong>
                <span>Calculer <LatexRenderer latex={"P(A)"} /> et <LatexRenderer latex={"P(B_k)"} /> dans le cas de tirages <strong>avec remise</strong>.</span>
              </div>
              <div>
                <strong className="font-semibold">Question 2 : </strong>
                <span>On note <LatexRenderer latex={"C"}/> : « les deux premiers tirages donnent une boule jaune ». Calculer <LatexRenderer latex={"P(C)"} /> dans le cas de tirages <strong>sans remise</strong>.</span>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1) Calcul de P(A) et P(B_k) (avec remise)</strong>
                <div className="mt-2 space-y-4">
                  <div>
                    <p><strong>a) Calcul de P(A)</strong></p>
                    <p>Soit <LatexRenderer latex={"J_i"}/> l'événement « une boule jaune est tirée au <LatexRenderer latex={"i^e"}/> tirage ». L'événement <LatexRenderer latex={"A"}/> correspond à obtenir une boule jaune à chaque tirage.</p>
                    <p>Les tirages étant indépendants (car avec remise), on a :</p>
                    <div className="text-center bg-blue-50 p-2 rounded">
                        <LatexRenderer latex={"P(A) = P(\\bigcap_{i=1}^n J_i) = \\prod_{i=1}^n P(J_i) = \\left( \\frac{2}{9} \\right)^n"} />
                    </div>
                  </div>
                  <div>
                    <p><strong>b) Calcul de P(B_k)</strong></p>
                    <p>L'événement <LatexRenderer latex={"B_k"}/> signifie que les <LatexRenderer latex={"k - 1"}/> premiers tirages ont donné une boule noire (événement <LatexRenderer latex={"\\overline{J_i}"}/>) et le <LatexRenderer latex={"k^e"}/> a donné une boule jaune.</p>
                    <div className="text-center bg-blue-50 p-2 rounded">
                        <LatexRenderer latex={"P(B_k) = P(\\overline{J_1}) \\times \\dots \\times P(\\overline{J_{k-1}}) \\times P(J_k) = \\left( \\frac{7}{9} \\right)^{k - 1} \\cdot \\frac{2}{9}"} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2) Tirages sans remise – probabilité de deux jaunes aux deux premiers tirages</strong>
                <div className="mt-2 space-y-4">
                  <p>On note <LatexRenderer latex={"C = J_1 \\cap J_2"}/>. On utilise la formule des probabilités composées :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"P(C) = P(J_1 \\cap J_2) = P(J_1) \\times P_{J_1}(J_2)"} />
                  </div>
                  <ul className="list-disc list-inside ml-4">
                    <li><LatexRenderer latex={"P(J_1) = \\frac{2}{9}"}/>.</li>
                    <li>Sachant <LatexRenderer latex={"J_1"}/>, il reste 1 boule jaune et 7 noires dans l'urne (8 boules au total). Donc <LatexRenderer latex={"P_{J_1}(J_2) = \\frac{1}{8}"}/>.</li>
                  </ul>
                  <p>Finalement :</p>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(C) = \\frac{2}{9} \\times \\frac{1}{8} = \\frac{2}{72} = \\frac{1}{36}"} />
                  </div>
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
            <div className="space-y-4">
              <h4 className="font-semibold">Intersection obtenue après un « au moins un » - Lancer de dés</h4>
              <p>On lance <LatexRenderer latex={"n"} /> dés à 6 faces, <LatexRenderer latex={"n \\in \\mathbb{N}^*"} />.</p>
              <p>On note <LatexRenderer latex={"A_n"} /> l'événement : « au moins un des <LatexRenderer latex={"n"} /> dés donne 6 ».</p>
              <div>
                <strong className="font-semibold">Question 1 : </strong>
                <span>Calculer <LatexRenderer latex={"P(A_n)"} />.</span>
              </div>
              <div>
                <strong className="font-semibold">Question 2 : </strong>
                <span>Étudier le comportement asymptotique de <LatexRenderer latex={"P(A_n)"} /> quand <LatexRenderer latex={"n \\to +\\infty"} />.</span>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1) Calcul de P(A_n)</strong>
                <div className="mt-2 space-y-4">
                  <p>Soit pour tout <LatexRenderer latex={"i \\in \\{1,\\dots,n\\}"}/>, <LatexRenderer latex={"B_i"}/> : « le <LatexRenderer latex={"i^\\text{e}"}/> dé a donné 6 ».</p>
                  <p>Alors :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"A_n = \\bigcup_{i=1}^n B_i \\Rightarrow P(A_n) = P\\left( \\bigcup_{i=1}^n B_i \\right)"} />
                  </div>
                  <p><strong>Complémentaire (formule de De Morgan) :</strong></p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P(A_n) = 1 - P\\left( \\bigcap_{i=1}^n \\overline{B_i} \\right)"} />
                    <LatexRenderer latex={"= 1 - \\prod_{i=1}^n P(\\overline{B_i})"} />
                    <LatexRenderer latex={"= 1 - \\left( \\frac{5}{6} \\right)^n"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(A_n) = 1 - \\left( \\frac{5}{6} \\right)^n"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2) Comportement asymptotique</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"\\lim_{n \\to +\\infty} \\left( \\frac{5}{6} \\right)^n = 0"} />
                    <LatexRenderer latex={"\\Rightarrow \\lim_{n \\to +\\infty} P(A_n) = 1"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"\\lim_{n \\to +\\infty} P(A_n) = 1 \\quad \\text{(on obtient presque sûrement un 6 quand } n \\text{ est grand)}"} />
                  </div>
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
            <div className="space-y-4">
              <h4 className="font-semibold">Formule de Bayes</h4>
              <p>Une usine produit des objets, avec :</p>
              <ul className="list-disc list-inside ml-4">
                <li>5% d'objets défectueux</li>
                <li>Un objet bon est accepté avec probabilité 0,96</li>
                <li>Un objet mauvais est refusé avec probabilité 0,98</li>
              </ul>
              <p>On choisit un objet au hasard et on effectue un contrôle.</p>
              <p>On définit :</p>
              <ul className="list-disc list-inside ml-4">
                <li><LatexRenderer latex={"M"} /> : « l'objet est mauvais »</li>
                <li><LatexRenderer latex={"A"} /> : « l'objet est accepté »</li>
                <li><LatexRenderer latex={"E"} /> : « il y a une erreur dans le contrôle »</li>
              </ul>
              <div>
                <strong className="font-semibold">Question 1 : </strong>
                <span>Calculer la probabilité d'une erreur de contrôle : <LatexRenderer latex={"P(E)"} />.</span>
              </div>
              <div>
                <strong className="font-semibold">Question 2 : </strong>
                <span>Calculer la probabilité qu'un objet accepté soit mauvais : <LatexRenderer latex={"P_A(M)"} />.</span>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1) Probabilité d'une erreur de contrôle : P(E)</strong>
                <div className="mt-2 space-y-4">
                  <p>Deux cas possibles :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"E = (M \\cap A) \\cup (\\overline{M} \\cap \\overline{A})"} />
                    <LatexRenderer latex={"\\Rightarrow P(E) = P(M \\cap A) + P(\\overline{M} \\cap \\overline{A})"} />
                  </div>
                  <p>Calcul des probabilités :</p>
                  <div className="space-y-2">
                    <LatexRenderer latex={"P(M) = \\frac{5}{100}, \\quad P(\\overline{M}) = \\frac{95}{100}"} />
                    <LatexRenderer latex={"P_M(A) = 1 - 0{,}98 = \\frac{2}{100}, \\quad P_{\\overline{M}}(\\overline{A}) = 1 - 0{,}96 = \\frac{4}{100}"} />
                  </div>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P(E) = \\frac{5}{100} \\cdot \\frac{2}{100} + \\frac{95}{100} \\cdot \\frac{4}{100}"} />
                    <LatexRenderer latex={"= \\frac{10 + 380}{10^4} = \\frac{390}{10000}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(E) = 0{,}039"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2) Probabilité qu'un objet accepté soit mauvais : P_A(M)</strong>
                <div className="mt-2 space-y-4">
                  <p>On applique la formule de Bayes :</p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P_{A}(M) = \\frac{P(M) \\cdot P_M(A)}{P(M) \\cdot P_M(A) + P(\\overline{M}) \\cdot P_{\\overline{M}}(A)}"} />
                    <LatexRenderer latex={"= \\frac{\\frac{5}{100} \\cdot \\frac{2}{100}}{\\frac{5}{100} \\cdot \\frac{2}{100} + \\frac{95}{100} \\cdot \\frac{96}{100}}"} />
                    <LatexRenderer latex={"= \\frac{10}{10 + 9120} = \\frac{10}{9130}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P_A(M) = \\frac{1}{913}"} />
                  </div>
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
            <div className="space-y-4">
              <h4 className="font-semibold">Formule des probabilités totales – suite arithmético-géométrique</h4>
              <p>On dispose de deux pièces :</p>
              <ul className="list-disc list-inside ml-4">
                <li>La pièce <LatexRenderer latex={"A"} /> est équilibrée : pile avec proba <LatexRenderer latex={"\\frac{1}{2}"} /></li>
                <li>La pièce <LatexRenderer latex={"B"} /> donne pile avec proba <LatexRenderer latex={"\\frac{1}{3}"} />, face avec proba <LatexRenderer latex={"\\frac{2}{3}"} /></li>
              </ul>
              <p>On effectue une suite illimitée de lancers :</p>
              <ul className="list-disc list-inside ml-4">
                <li>Le premier lancer est effectué avec la pièce <LatexRenderer latex={"A"} /></li>
                <li>Si le lancer donne pile, on conserve la même pièce</li>
                <li>Si le lancer donne face, on change de pièce</li>
              </ul>
              <p>Soit <LatexRenderer latex={"A_n"} /> : « le <LatexRenderer latex={"n^\\text{e}"} /> lancer se fait avec la pièce <LatexRenderer latex={"A"} /> », et <LatexRenderer latex={"a_n = P(A_n)"} />.</p>
              <div>
                <strong className="font-semibold">Question 1 : </strong>
                <span>Calculer <LatexRenderer latex={"a_1"} /> et <LatexRenderer latex={"a_2"} />.</span>
              </div>
              <div>
                <strong className="font-semibold">Question 2 : </strong>
                <span>Démontrer par probabilités totales une relation de récurrence pour <LatexRenderer latex={"a_{n+1}"} /> en fonction de <LatexRenderer latex={"a_n"} />.</span>
              </div>
              <div>
                <strong className="font-semibold">Question 3 : </strong>
                <span>Étudier la suite <LatexRenderer latex={"(a_n)"} /> et donner son terme général.</span>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1) Calcul de a₁ et a₂</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center">
                    <LatexRenderer latex={"a_1 = P(A_1) = 1"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"a_2 = P(\\text{obtenir pile avec } A) = \\frac{1}{2}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2) Démonstration par probabilités totales</strong>
                <div className="mt-2 space-y-4">
                  <p>À partir de <LatexRenderer latex={"n \\geq 2"} />, on utilise :</p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P(A_{n+1}) = P(A_n) \\cdot P(\\text{pile avec } A) + P(\\overline{A_n}) \\cdot P(\\text{face avec } B)"} />
                    <LatexRenderer latex={"= a_n \\cdot \\frac{1}{2} + (1 - a_n) \\cdot \\frac{2}{3}"} />
                    <LatexRenderer latex={"= \\frac{1}{2} a_n + \\frac{2}{3} (1 - a_n)"} />
                    <LatexRenderer latex={"= \\frac{1}{2} a_n + \\frac{2}{3} - \\frac{2}{3} a_n"} />
                    <LatexRenderer latex={"= a_n \\left( \\frac{1}{2} - \\frac{2}{3} \\right) + \\frac{2}{3}"} />
                    <LatexRenderer latex={"= -\\frac{1}{6} a_n + \\frac{2}{3}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"a_{n+1} = -\\frac{1}{6} a_n + \\frac{2}{3}"} />
                  </div>
                  <p><strong>Vérification pour n = 1 :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"a_1 = 1, \\quad a_2 = -\\frac{1}{6} \\cdot 1 + \\frac{2}{3} = \\frac{1}{2} \\quad \\text{✓ cohérent avec question 1}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">3) Étude de la suite (aₙ)</strong>
                <div className="mt-2 space-y-4">
                  <p>C'est une suite arithmético-géométrique :</p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"a_{n+1} = -\\frac{1}{6} a_n + \\frac{2}{3}"} />
                    <LatexRenderer latex={"\\text{Point fixe } c \\text{ tel que } c = -\\frac{1}{6} c + \\frac{2}{3}"} />
                    <LatexRenderer latex={"\\Rightarrow \\frac{7}{6} c = \\frac{2}{3} \\Rightarrow c = \\frac{12}{21} = \\frac{4}{7}"} />
                  </div>
                  <p>On pose :</p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"u_n = a_n - \\frac{4}{7} \\Rightarrow u_{n+1} = -\\frac{1}{6} u_n"} />
                    <LatexRenderer latex={"\\Rightarrow u_n = u_1 \\cdot \\left( -\\frac{1}{6} \\right)^{n - 1}"} />
                  </div>
                  <p>Or :</p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"u_1 = a_1 - \\frac{4}{7} = \\frac{3}{7}"} />
                    <LatexRenderer latex={"\\Rightarrow a_n = \\frac{4}{7} + \\left( -\\frac{1}{6} \\right)^{n-1} \\cdot \\frac{3}{7}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"\\forall n \\in \\mathbb{N}^*, \\quad P(A_n) = \\frac{3}{7} \\left( -\\frac{1}{6} \\right)^{n - 1} + \\frac{4}{7}"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex5"
          title="Exercice 5"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <h4 className="font-semibold">La reconstitution d'une paire</h4>
              <p>Une armoire contient 3 paires de chaussures, soit 6 chaussures différentes.</p>
              <p>On tire simultanément 4 chaussures au hasard, sans remise.</p>
              <p>On définit :</p>
              <ul className="list-disc list-inside ml-4">
                <li><LatexRenderer latex={"A_i"} /> : « la paire <LatexRenderer latex={"i \\in \\{1,2,3\\}"} /> est reconstituée »</li>
                <li><LatexRenderer latex={"B"} /> : « au moins une paire est reconstituée »</li>
              </ul>
              <div>
                <strong className="font-semibold">Question 1 : </strong>
                <span>Calculer <LatexRenderer latex={"P(A_i)"} />.</span>
              </div>
              <div>
                <strong className="font-semibold">Question 2 : </strong>
                <span>Calculer <LatexRenderer latex={"P(B)"} /> avec la formule de Poincaré.</span>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1) Calcul de P(Aᵢ)</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center">
                    <LatexRenderer latex={"\\text{Nombre total de tirages : } \\binom{6}{4} = 15"} />
                  </div>
                  <p>Pour que la paire <LatexRenderer latex={"i"} /> soit reconstituée, on tire ses 2 chaussures (1 manière), et 2 parmi les 4 restantes : <LatexRenderer latex={"\\binom{4}{2} = 6"} /></p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"\\text{Donc } \\text{Card}(A_i) = 6 \\quad \\Rightarrow P(A_i) = \\frac{6}{15} = \\frac{2}{5}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(A_1) = P(A_2) = P(A_3) = \\frac{2}{5}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2) Calcul de P(B) avec la formule de Poincaré</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center">
                    <LatexRenderer latex={"B = A_1 \\cup A_2 \\cup A_3"} />
                    <LatexRenderer latex={"\\Rightarrow P(B) = \\sum P(A_i) - \\sum P(A_i \\cap A_j) + P(A_1 \\cap A_2 \\cap A_3)"} />
                  </div>
                  <p><strong>Calcul des intersections deux à deux :</strong></p>
                  <p>Si <LatexRenderer latex={"A_i \\cap A_j"} /> : on choisit exactement les 4 chaussures des 2 paires → unique façon</p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\text{Card}(A_i \\cap A_j) = 1 \\Rightarrow P(A_i \\cap A_j) = \\frac{1}{15}"} />
                  </div>
                  <p><strong>Intersection triple :</strong></p>
                  <p>Impossible de choisir les 3 paires avec seulement 4 chaussures.</p>
                  <div className="text-center">
                    <LatexRenderer latex={"P(A_1 \\cap A_2 \\cap A_3) = 0"} />
                  </div>
                  <p><strong>Application de Poincaré :</strong></p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P(B) = 3 \\cdot \\frac{2}{5} - 3 \\cdot \\frac{1}{15} + 0 = \\frac{6}{5} - \\frac{3}{15} = \\frac{6}{5} - \\frac{1}{5}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(B) = 1"} />
                  </div>
                  <p><strong>Remarque :</strong> Ce résultat est logique : on tire 4 chaussures sur 6 distinctes, donc il est impossible de ne pas reconstituer au moins une paire.</p>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex6"
          title="Exercice 6"
          difficulty="Difficile"
          content={
            <div className="space-y-4">
              <h4 className="font-semibold">Formule du crible (ou de Poincaré)</h4>
              <p>Une urne contient 1 boule noire et 2 boules jaunes.</p>
              <p>On effectue 4 tirages avec remise.</p>
              <p>On considère les événements suivants :</p>
              <ul className="list-disc list-inside ml-4">
                <li><LatexRenderer latex={"A"} /> : les tirages 1 et 2 donnent une boule noire</li>
                <li><LatexRenderer latex={"B"} /> : les tirages 2 et 3 donnent une boule noire</li>
                <li><LatexRenderer latex={"C"} /> : les tirages 3 et 4 donnent une boule jaune</li>
              </ul>
              <p>On cherche à calculer : <LatexRenderer latex={"P(A \\cup B \\cup C)"} /></p>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">Formule de Poincaré (ou inclusion-exclusion)</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center">
                    <LatexRenderer latex={"P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)"} />
                  </div>
                  <p><strong>Notations :</strong> On pose :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"N_k : \\text{« tirage } k \\text{ donne une boule noire »}, \\quad J_k : \\text{« tirage } k \\text{ donne une boule jaune »}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"P(N_k) = \\frac{1}{3}, \\quad P(J_k) = \\frac{2}{3}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Calculs</strong>
                <div className="mt-2 space-y-4">
                  <p><strong>Probabilités simples :</strong></p>
                  <div className="space-y-2">
                    <LatexRenderer latex={"P(A) = P(N_1 \\cap N_2) = \\frac{1}{3} \\cdot \\frac{1}{3} = \\frac{1}{9}"} />
                    <LatexRenderer latex={"P(B) = P(N_2 \\cap N_3) = \\frac{1}{9}"} />
                    <LatexRenderer latex={"P(C) = P(J_3 \\cap J_4) = \\frac{2}{3} \\cdot \\frac{2}{3} = \\frac{4}{9}"} />
                  </div>
                  <p><strong>Probabilités doubles :</strong></p>
                  <div className="space-y-2">
                    <LatexRenderer latex={"P(A \\cap B) = P(N_1 \\cap N_2 \\cap N_3) = \\left( \\frac{1}{3} \\right)^3 = \\frac{1}{27}"} />
                    <LatexRenderer latex={"P(A \\cap C) = P(N_1 \\cap N_2 \\cap J_3 \\cap J_4) = \\frac{1}{3} \\cdot \\frac{1}{3} \\cdot \\frac{2}{3} \\cdot \\frac{2}{3} = \\frac{4}{81}"} />
                    <LatexRenderer latex={"P(B \\cap C) = 0 \\quad \\text{(car on ne peut avoir à la fois } N_3 \\text{ et } J_3\\text{)}"} />
                  </div>
                  <p><strong>Probabilité triple :</strong></p>
                  <div className="space-y-2">
                    <LatexRenderer latex={"P(A \\cap B \\cap C) = P(N_1 \\cap N_2 \\cap N_3 \\cap J_3 \\cap J_4) = 0"} />
                    <LatexRenderer latex={"\\text{(incompatible : } N_3 \\cap J_3 = \\varnothing\\text{)}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Conclusion</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P(A \\cup B \\cup C) = \\frac{1}{9} + \\frac{1}{9} + \\frac{4}{9} - \\frac{1}{27} - \\frac{4}{81}"} />
                    <LatexRenderer latex={"= \\frac{6}{9} - \\frac{3 + 4}{81} = \\frac{54 - 7}{81}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(A \\cup B \\cup C) = \\frac{47}{81}"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex7"
          title="Exercice 7"
          difficulty="Facile"
          content={
            <div className="space-y-4">
              <h4 className="font-semibold">Union finie d'événements incompatibles</h4>
              <p>On considère une urne contenant :</p>
              <ul className="list-disc list-inside ml-4">
                <li>1 boule noire</li>
                <li>2 boules jaunes</li>
              </ul>
              <p>On effectue 2 tirages avec remise.</p>
              <p>On note pour <LatexRenderer latex={"k \\in \\{1,2\\}"} /> :</p>
              <div className="text-center">
                <LatexRenderer latex={"N_k : \\text{« le } k^\\text{e} \\text{ tirage donne une boule noire »}, \\quad J_k : \\text{« le } k^\\text{e} \\text{ tirage donne une boule jaune »}"} />
              </div>
              <p><strong>Objectif :</strong> Calculer la probabilité de l'événement :</p>
              <div className="text-center">
                <LatexRenderer latex={"A = \\text{« on tire 2 boules de même couleur »}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">Méthode 1 — par définition directe</strong>
                <div className="mt-2 space-y-4">
                  <p>L'événement <LatexRenderer latex={"A"} /> est réalisé ssi :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>soit les deux tirages donnent une boule jaune</li>
                    <li>soit les deux tirages donnent une boule noire</li>
                  </ul>
                  <div className="text-center">
                    <LatexRenderer latex={"A = (J_1 \\cap J_2) \\cup (N_1 \\cap N_2)"} />
                  </div>
                  <p>Ce sont deux événements incompatibles ⇒</p>
                  <div className="text-center">
                    <LatexRenderer latex={"P(A) = P(J_1 \\cap J_2) + P(N_1 \\cap N_2)"} />
                  </div>
                  <p>Indépendance des tirages :</p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P(J_1 \\cap J_2) = P(J_1) \\cdot P(J_2) = \\left( \\frac{2}{3} \\right)^2 = \\frac{4}{9}"} />
                    <LatexRenderer latex={"P(N_1 \\cap N_2) = \\left( \\frac{1}{3} \\right)^2 = \\frac{1}{9}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(A) = \\frac{4}{9} + \\frac{1}{9} = \\frac{5}{9}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">Méthode 2 — par complémentaire</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center">
                    <LatexRenderer latex={"A = \\overline{A^c}, \\quad A^c = \\text{« on tire deux boules de couleurs différentes »}"} />
                  </div>
                  <p>Deux cas :</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>jaune puis noire : <LatexRenderer latex={"J_1 \\cap N_2"} /></li>
                    <li>noire puis jaune : <LatexRenderer latex={"N_1 \\cap J_2"} /></li>
                  </ul>
                  <div className="text-center">
                    <LatexRenderer latex={"A^c = (J_1 \\cap N_2) \\cup (N_1 \\cap J_2) \\quad \\text{(événements incompatibles)}"} />
                  </div>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P(A^c) = P(J_1) P(N_2) + P(N_1) P(J_2)"} />
                    <LatexRenderer latex={"= \\frac{2}{3} \\cdot \\frac{1}{3} + \\frac{1}{3} \\cdot \\frac{2}{3} = \\frac{2}{9} + \\frac{2}{9} = \\frac{4}{9}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(A) = 1 - P(A^c) = 1 - \\frac{4}{9} = \\frac{5}{9}"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex8"
          title="Exercice 8"
          difficulty="Moyen"
          content={
            <div className="space-y-4">
              <h4 className="font-semibold">Probabilités composées – 3 événements</h4>
              <p>Une urne contient 2 boules jaunes et 7 boules noires.</p>
              <p>On effectue trois tirages successifs sans remise.</p>
              <p>Pour tout <LatexRenderer latex={"k \\in \\{1,2,3\\}"} />, on note :</p>
              <ul className="list-disc list-inside ml-4">
                <li><LatexRenderer latex={"N_k"} /> : « on obtient une boule noire au <LatexRenderer latex={"k^\\text{e}"} /> tirage »</li>
                <li><LatexRenderer latex={"J_k"} /> : « on obtient une boule jaune au <LatexRenderer latex={"k^\\text{e}"} /> tirage »</li>
              </ul>
              <p><strong>Objectif :</strong> Calculer :</p>
              <div className="text-center">
                <LatexRenderer latex={"P(N_1 \\cap J_2 \\cap N_3) \\quad \\text{et} \\quad P(J_1 \\cap N_2 \\cap J_3)"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1) Calcul de P(N₁ ∩ J₂ ∩ N₃)</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center">
                    <LatexRenderer latex={"P(N_1 \\cap J_2 \\cap N_3) = P(N_1) \\cdot P_{N_1}(J_2) \\cdot P_{N_1 \\cap J_2}(N_3)"} />
                  </div>
                  <ul className="list-disc list-inside ml-4">
                    <li><LatexRenderer latex={"P(N_1) = \\frac{7}{9}"} /></li>
                    <li>Si <LatexRenderer latex={"N_1"} /> est réalisé : il reste 2 jaunes, 6 noires ⇒ <LatexRenderer latex={"P_{N_1}(J_2) = \\frac{2}{8} = \\frac{1}{4}"} /></li>
                    <li>Si <LatexRenderer latex={"N_1 \\cap J_2"} /> est réalisé : il reste 1 jaune, 6 noires ⇒ <LatexRenderer latex={"P(N_3) = \\frac{6}{7}"} /></li>
                  </ul>
                  <div className="text-center">
                    <LatexRenderer latex={"P(N_1 \\cap J_2 \\cap N_3) = \\frac{7}{9} \\cdot \\frac{1}{4} \\cdot \\frac{6}{7} = \\frac{1}{6}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(N_1 \\cap J_2 \\cap N_3) = \\frac{1}{6}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2) Calcul de P(J₁ ∩ N₂ ∩ J₃)</strong>
                <div className="mt-2 space-y-4">
                  <div className="text-center">
                    <LatexRenderer latex={"P(J_1 \\cap N_2 \\cap J_3) = P(J_1) \\cdot P_{J_1}(N_2) \\cdot P_{J_1 \\cap N_2}(J_3)"} />
                  </div>
                  <ul className="list-disc list-inside ml-4">
                    <li><LatexRenderer latex={"P(J_1) = \\frac{2}{9}"} /></li>
                    <li>Si <LatexRenderer latex={"J_1"} /> est réalisé : reste 1 jaune, 7 noires ⇒ <LatexRenderer latex={"P(N_2) = \\frac{7}{8}"} /></li>
                    <li>Si <LatexRenderer latex={"J_1 \\cap N_2"} /> est réalisé : reste 1 jaune, 6 noires ⇒ <LatexRenderer latex={"P(J_3) = \\frac{1}{7}"} /></li>
                  </ul>
                  <div className="text-center">
                    <LatexRenderer latex={"P(J_1 \\cap N_2 \\cap J_3) = \\frac{2}{9} \\cdot \\frac{7}{8} \\cdot \\frac{1}{7} = \\frac{1}{36}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"P(J_1 \\cap N_2 \\cap J_3) = \\frac{1}{36}"} />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex9"
          title="Exercice 9"
          difficulty="Difficile"
          content={
            <div className="space-y-4">
              <h4 className="font-semibold">Indépendance et lois sur le lancer de dés</h4>
              <p>On lance trois dés <LatexRenderer latex={"D_1, D_2, D_3"} />.</p>
              <p>Pour tout <LatexRenderer latex={"k \\in \\{1,2,3\\}"} /> et <LatexRenderer latex={"i \\in \\{1,2,3,4,5,6\\}"} />, on définit :</p>
              <ul className="list-disc list-inside ml-4">
                <li><LatexRenderer latex={"A_{k,i}"} /> : « le dé <LatexRenderer latex={"D_k"} /> donne un résultat <LatexRenderer latex={"\\leq i"} /> »</li>
                <li><LatexRenderer latex={"B_{k,i}"} /> : « le dé <LatexRenderer latex={"D_k"} /> donne un résultat <LatexRenderer latex={"\\geq i"} /> »</li>
                <li><LatexRenderer latex={"C_{k,i}"} /> : « le dé <LatexRenderer latex={"D_k"} /> donne exactement <LatexRenderer latex={"i"} /> »</li>
                <li><LatexRenderer latex={"M_i"} /> : « le maximum de <LatexRenderer latex={"D_1"} /> et <LatexRenderer latex={"D_2"} /> est <LatexRenderer latex={"\\leq i"} /> »</li>
                <li><LatexRenderer latex={"m_i"} /> : « le minimum de <LatexRenderer latex={"D_2"} /> et <LatexRenderer latex={"D_3"} /> est <LatexRenderer latex={"\\geq i"} /> »</li>
              </ul>
              <div>
                <strong className="font-semibold">Question 1 : </strong>
                <span>Calculer les probabilités <LatexRenderer latex={"P(M_i)"} /> et <LatexRenderer latex={"P(m_i)"} />.</span>
              </div>
              <div>
                <strong className="font-semibold">Question 2 : </strong>
                <span>Déterminer pour quelles valeurs de <LatexRenderer latex={"i"} /> les événements <LatexRenderer latex={"M_i"} /> et <LatexRenderer latex={"m_i"} /> sont indépendants.</span>
              </div>
            </div>
          }
          correction={
            <div className="space-y-6">
              <div>
                <strong className="text-blue-600">1) Calcul des probabilités P(Mᵢ) et P(mᵢ)</strong>
                <div className="mt-2 space-y-4">
                  <p><strong>Probabilité de Mᵢ :</strong></p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"M_i \\Leftrightarrow D_1 \\leq i \\text{ et } D_2 \\leq i \\Leftrightarrow A_{1,i} \\cap A_{2,i}"} />
                    <LatexRenderer latex={"\\Rightarrow P(M_i) = P(A_{1,i}) \\cdot P(A_{2,i}) = \\left( \\frac{i}{6} \\right)^2 = \\frac{i^2}{36}"} />
                  </div>
                  <p><strong>Probabilité de mᵢ :</strong></p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"m_i \\Leftrightarrow D_2 \\geq i \\text{ et } D_3 \\geq i \\Leftrightarrow B_{2,i} \\cap B_{3,i}"} />
                    <LatexRenderer latex={"\\Rightarrow P(m_i) = \\left( \\frac{7 - i}{6} \\right)^2 = \\frac{(7 - i)^2}{36}"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"\\forall i \\in \\{1,2,3,4,5,6\\}, \\quad P(M_i) = \\frac{i^2}{36}, \\quad P(m_i) = \\frac{(7 - i)^2}{36}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-blue-600">2) Indépendance des événements Mᵢ et mᵢ</strong>
                <div className="mt-2 space-y-4">
                  <p>On calcule :</p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"P(M_i \\cap m_i) = P(A_{1,i} \\cap C_{2,i} \\cap B_{3,i})"} />
                    <LatexRenderer latex={"= P(A_{1,i}) \\cdot P(C_{2,i}) \\cdot P(B_{3,i})"} />
                    <LatexRenderer latex={"= \\frac{i}{6} \\cdot \\frac{1}{6} \\cdot \\frac{7 - i}{6} = \\frac{i(7 - i)}{216}"} />
                  </div>
                  <p>On vérifie si :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"P(M_i \\cap m_i) = P(M_i) \\cdot P(m_i)"} />
                  </div>
                  <p>avec <LatexRenderer latex={"P(M_i) = \\frac{i^2}{36}"} />, <LatexRenderer latex={"P(m_i) = \\frac{(7 - i)^2}{36}"} /></p>
                  <div className="text-center space-y-2">
                    <LatexRenderer latex={"\\Rightarrow \\frac{i(7 - i)}{216} = \\frac{i^2(7 - i)^2}{1296}"} />
                    <LatexRenderer latex={"\\Rightarrow i(7 - i) = \\frac{i^2(7 - i)^2}{6}"} />
                    <LatexRenderer latex={"\\Rightarrow 6i(7 - i) = i^2(7 - i)^2"} />
                    <LatexRenderer latex={"\\Rightarrow 6 = i(7 - i)"} />
                    <LatexRenderer latex={"\\Rightarrow i^2 - 7i + 6 = 0"} />
                  </div>
                  <p>Résolution de l'équation :</p>
                  <div className="text-center">
                    <LatexRenderer latex={"i = \\frac{7 \\pm \\sqrt{49 - 24}}{2} = \\frac{7 \\pm 5}{2} \\Rightarrow i = 1 \\quad \\text{ou} \\quad i = 6"} />
                  </div>
                  <div className="text-center bg-blue-50 p-2 rounded">
                    <LatexRenderer latex={"M_i \\text{ et } m_i \\text{ sont indépendants si et seulement si } i \\in \\{1,6\\}"} />
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

export default Chapitre10ProbabilitesEtConditionnementExercicesPage;
