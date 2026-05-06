import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre6ProbabilitesExercicesPage = () => {
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
    <div className="min-h-screen carnet-paper carnet-cours-skin">
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
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-[#1e3a8a] transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 6</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 6 : Probabilités
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les probabilités et les événements conditionnels.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Probabilités et événements conditionnels"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>On lance deux fois un dé pipé tel que :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"P(1) = P(3) = P(4) = \\frac{1}{8}, \\quad P(2) = P(6) = \\frac{1}{4}"} />
              </div>
              
              <p className="mb-4"><strong>Quelle est la probabilité que la somme des points obtenus soit strictement supérieure à 10, sachant que :</strong></p>
              
              <div className="space-y-2">
                <div><strong>1.</strong> un des résultats est 6.</div>
                <div><strong>2.</strong> le premier résultat est 6.</div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-3">⚠️ Attention</h4>
                <p className="text-red-800">Toujours vérifier que la loi de probabilité est complète et distinguer clairement les différentes conditions données.</p>
              </div>

              <div>
                <strong className="text-green-600">Étape préliminaire : Calcul de P(5)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">On commence par calculer la probabilité manquante. La somme des probabilités doit être égale à 1 :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"P(1) + P(2) + P(3) + P(4) + P(5) + P(6) = 1"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"3 \\times \\frac{1}{8} + 2 \\times \\frac{1}{4} + P(5) = 1"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"\\frac{3}{8} + \\frac{2}{4} + P(5) = 1"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"\\frac{3}{8} + \\frac{4}{8} + P(5) = 1"} />
                      </div>
                      <div className="text-center bg-blue-50 p-2 rounded">
                        <LatexRenderer latex={"P(5) = 1 - \\frac{7}{8} = \\frac{1}{8}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Question 1 : Condition "un des résultats est 6"</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">Pour que la somme soit strictement supérieure à 10, nous avons besoin de :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"\\text{Somme} > 10 \\Rightarrow \\text{Somme} \\geq 11"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Si l'un des résultats est 6, pour obtenir une somme ≥ 11, l'autre résultat doit être 5 ou 6.</p>
                    <p className="mb-2">Les cas favorables sont :</p>
                    <div className="space-y-1">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"(6,5)"} /></span> avec probabilité <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{4} \\times \\frac{1}{8} = \\frac{1}{32}"} /></span></div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"(5,6)"} /></span> avec probabilité <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{8} \\times \\frac{1}{4} = \\frac{1}{32}"} /></span></div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"(6,6)"} /></span> avec probabilité <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}"} /></span></div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Probabilité des cas favorables :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"P(\\text{favorables}) = \\frac{1}{32} + \\frac{1}{32} + \\frac{1}{16} = \\frac{1}{32} + \\frac{1}{32} + \\frac{2}{32} = \\frac{4}{32} = \\frac{1}{8}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Probabilité de la condition "un des résultats est 6" :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"P(\\text{un 6}) = P((6,*)) + P((*,6)) - P((6,6))"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{4} \\times 1 + 1 \\times \\frac{1}{4} - \\frac{1}{4} \\times \\frac{1}{4}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{4} + \\frac{1}{4} - \\frac{1}{16} = \\frac{4}{16} + \\frac{4}{16} - \\frac{1}{16} = \\frac{7}{16}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Probabilité conditionnelle :</p>
                    <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                      <LatexRenderer latex={"P(\\text{somme} > 10 | \\text{un 6}) = \\frac{P(\\text{favorables})}{P(\\text{un 6})} = \\frac{\\frac{1}{8}}{\\frac{7}{16}} = \\frac{1}{8} \\times \\frac{16}{7} = \\frac{2}{7}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Question 2 : Condition "le premier résultat est 6"</strong>
                <div className="mt-2 space-y-3">
                  <div>
                                          <p className="mb-2">Si le premier résultat est 6, les cas favorables (somme <span className="inline-block align-middle"><LatexRenderer latex={"> 10"} /></span>) sont :</p>
                    <div className="space-y-1">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"(6,5)"} /></span> : somme = 11</div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"(6,6)"} /></span> : somme = 12</div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Probabilités :</p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"P((6,5)) = \\frac{1}{4} \\times \\frac{1}{8} = \\frac{1}{32}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"P((6,6)) = \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Probabilité des cas favorables :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"P(\\text{favorables}) = \\frac{1}{32} + \\frac{1}{16} = \\frac{1}{32} + \\frac{2}{32} = \\frac{3}{32}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Probabilité de la condition "le premier résultat est 6" :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"P(\\text{premier = 6}) = \\frac{1}{4}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2">Probabilité conditionnelle :</p>
                    <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                      <LatexRenderer latex={"P(\\text{somme} > 10 | \\text{premier = 6}) = \\frac{\\frac{3}{32}}{\\frac{1}{4}} = \\frac{3}{32} \\times \\frac{4}{1} = \\frac{3}{8}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">🔍 Analyse des conditions</h4>
                <div className="space-y-2 text-yellow-800">
                  <div>• <strong>"Un des résultats est 6" :</strong> Plus restrictif car on doit considérer tous les cas où au moins un 6 apparaît</div>
                  <div>• <strong>"Le premier résultat est 6" :</strong> Moins restrictif car on fixe seulement la première position</div>
                  <div>• <strong>Résultats :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{2}{7} \\approx 0.286"} /></span> vs <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{3}{8} = 0.375"} /></span></div>
                  <div>• <strong>Intuition :</strong> Fixer le premier résultat donne plus de liberté au second</div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">💡 Points méthodologiques</h4>
                <div className="space-y-2 text-orange-800">
                  <div>• <strong>Vérification :</strong> Toujours s'assurer que <span className="inline-block align-middle"><LatexRenderer latex={"\\sum P(i) = 1"} /></span></div>
                  <div>• <strong>Distinction :</strong> "Un des résultats" ≠ "Le premier résultat"</div>
                  <div>• <strong>Double comptage :</strong> Attention au cas (6,6) dans "un des résultats"</div>
                  <div>• <strong>Probabilité conditionnelle :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(A|B) = \\frac{P(A \\cap B)}{P(B)}"} /></span></div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📊 Récapitulatif des résultats</h4>
                <div className="space-y-2 text-blue-800">
                  <div><strong>Question 1 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(\\text{somme} > 10 | \\text{un 6}) = \\frac{2}{7}"} /></span></div>
                  <div><strong>Question 2 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(\\text{somme} > 10 | \\text{premier = 6}) = \\frac{3}{8}"} /></span></div>
                  <div><strong>Comparaison :</strong> La condition sur le premier résultat donne une probabilité plus élevée</div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex2"
          title="Exercice 2"
          difficulty="Difficile"
          content={
            <div>
              <p className="mb-4"><strong>Trois coffres notés <span className="inline-block align-middle"><LatexRenderer latex={"C_1, C_2, C_3"} /></span> ont chacun deux tiroirs. Dans chaque tiroir, il y a une pièce.</strong></p>
              
              <div className="space-y-2 mb-4">
                <div>• Le coffre <span className="inline-block align-middle"><LatexRenderer latex={"C_1"} /></span> contient 2 pièces d'or.</div>
                <div>• Le coffre <span className="inline-block align-middle"><LatexRenderer latex={"C_2"} /></span> contient 2 pièces d'argent.</div>
                <div>• Le coffre <span className="inline-block align-middle"><LatexRenderer latex={"C_3"} /></span> contient 1 pièce d'or et 1 pièce d'argent.</div>
              </div>
              
              <div className="space-y-3">
                <div><strong>1.</strong> On ouvre au hasard l'un des 6 tiroirs et on trouve une pièce d'argent. Quelle est la probabilité pour que l'on ait ouvert un tiroir du coffre <span className="inline-block align-middle"><LatexRenderer latex={"C_2"} /></span> ?</div>
                <div><strong>2.</strong> On ouvre à nouveau et indépendamment de la première fois l'un des 6 tiroirs et on trouve encore une pièce d'argent. Quelle est la probabilité pour que l'on ait ouvert deux fois le même coffre ?</div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🎯 Analyse du problème</h4>
                <div className="space-y-2 text-blue-800">
                  <div>• <strong>6 tiroirs au total :</strong> 2 tiroirs par coffre × 3 coffres</div>
                  <div>• <strong>Chaque tiroir :</strong> Probabilité <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{6}"} /></span> d'être ouvert</div>
                  <div>• <strong>Chaque coffre :</strong> Probabilité <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{3}"} /></span> d'être choisi</div>
                  <div>• <strong>Événement A :</strong> Tirer une pièce d'argent</div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Question 1 : Probabilité que le tiroir soit dans C₂ sachant qu'on a tiré de l'argent</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2"><strong>Étape 1 : Calcul de P(A) - Probabilité de tirer une pièce d'argent</strong></p>
                    <p className="mb-2">Utilisons la formule des probabilités totales :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"P(A) = P(A|C_1) \\times P(C_1) + P(A|C_2) \\times P(C_2) + P(A|C_3) \\times P(C_3)"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Probabilités conditionnelles :</strong></p>
                    <div className="space-y-1">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"P(A|C_1) = 0"} /></span> (pas d'argent dans <span className="inline-block align-middle"><LatexRenderer latex={"C_1"} /></span>)</div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"P(A|C_2) = 1"} /></span> (que de l'argent dans <span className="inline-block align-middle"><LatexRenderer latex={"C_2"} /></span>)</div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"P(A|C_3) = \\frac{1}{2}"} /></span> (1 pièce d'argent sur 2 dans <span className="inline-block align-middle"><LatexRenderer latex={"C_3"} /></span>)</div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Calcul :</strong></p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"P(A) = 0 \\times \\frac{1}{3} + 1 \\times \\frac{1}{3} + \\frac{1}{2} \\times \\frac{1}{3}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= 0 + \\frac{1}{3} + \\frac{1}{6} = \\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Étape 2 : Application de la formule de Bayes</strong></p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"P(C_2|A) = \\frac{P(A|C_2) \\times P(C_2)}{P(A)}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1 \\times \\frac{1}{3}}{\\frac{1}{2}} = \\frac{\\frac{1}{3}}{\\frac{1}{2}} = \\frac{1}{3} \\times \\frac{2}{1} = \\frac{2}{3}"} />
                      </div>
                    </div>
                  </div>

                  <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                    <strong>Réponse 1 :</strong> <LatexRenderer latex={"P(C_2|A) = \\frac{2}{3}"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Question 2 : Probabilité d'ouvrir deux fois le même coffre</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2"><strong>Analyse :</strong> On tire indépendamment deux fois et on trouve de l'argent à chaque fois.</p>
                    <p className="mb-2">Pour que ce soit le même coffre, il faut que les deux tirages viennent :</p>
                    <div className="space-y-1">
                      <div>• <strong>Soit tous les deux de <span className="inline-block align-middle"><LatexRenderer latex={"C_2"} /></span></strong> (seul coffre où on peut tirer 2 fois de l'argent)</div>
                      <div>• <strong>Soit tous les deux de <span className="inline-block align-middle"><LatexRenderer latex={"C_3"} /></span></strong> (mais avec seulement 1 pièce d'argent, impossible)</div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Calcul des probabilités :</strong></p>
                    <div className="space-y-2">
                      <div><strong>Cas 1 : Deux tirages de <span className="inline-block align-middle"><LatexRenderer latex={"C_2"} /></span></strong></div>
                      <div className="text-center">
                        <LatexRenderer latex={"P(\\text{2 tirages de } C_2 \\text{ et 2 argent}) = P(C_2) \\times P(A|C_2) \\times P(C_2) \\times P(A|C_2)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{3} \\times 1 \\times \\frac{1}{3} \\times 1 = \\frac{1}{9}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Cas 2 : Deux tirages de <span className="inline-block align-middle"><LatexRenderer latex={"C_3"} /></span></strong></p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"P(\\text{2 tirages de } C_3 \\text{ et 2 argent}) = P(C_3) \\times P(A|C_3) \\times P(C_3) \\times P(A|C_3)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{3} \\times \\frac{1}{2} \\times \\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{36}"} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Probabilité totale de tirer 2 fois de l'argent :</strong></p>
                    <div className="text-center">
                      <LatexRenderer latex={"P(\\text{2 argent}) = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Probabilité d'ouvrir le même coffre sachant qu'on a tiré 2 fois de l'argent :</strong></p>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"P(\\text{même coffre}|\\text{2 argent}) = \\frac{P(\\text{même coffre et 2 argent})}{P(\\text{2 argent})}"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{\\frac{1}{9} + \\frac{1}{36}}{\\frac{1}{4}} = \\frac{\\frac{4}{36} + \\frac{1}{36}}{\\frac{1}{4}} = \\frac{\\frac{5}{36}}{\\frac{1}{4}} = \\frac{5}{36} \\times \\frac{4}{1} = \\frac{5}{9}"} />
                      </div>
                    </div>
                  </div>

                  <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                    <strong>Réponse 2 :</strong> <LatexRenderer latex={"P(\\text{même coffre}|\\text{2 argent}) = \\frac{5}{9}"} />
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">⚠️ Pièges à éviter</h4>
                <div className="space-y-2 text-orange-800">
                  <div>• <strong>Question 1 :</strong> Ne pas confondre <span className="inline-block align-middle"><LatexRenderer latex={"P(C_2|A)"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"P(A|C_2)"} /></span></div>
                  <div>• <strong>Question 2 :</strong> Bien noter que les tirages sont <strong>indépendants</strong></div>
                  <div>• <strong>Attention :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"C_3"} /></span> ne peut donner 2 pièces d'argent que si on retombe sur le même tiroir</div>
                  <div>• <strong>Raisonnement :</strong> Conditionner sur l'événement "2 fois de l'argent"</div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🧠 Techniques utilisées</h4>
                <div className="space-y-2 text-purple-800">
                  <div>• <strong>Formule des probabilités totales :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(A) = \\sum_i P(A|B_i) P(B_i)"} /></span></div>
                  <div>• <strong>Formule de Bayes :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(B_i|A) = \\frac{P(A|B_i) P(B_i)}{P(A)}"} /></span></div>
                  <div>• <strong>Indépendance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(A \\cap B) = P(A) \\times P(B)"} /></span></div>
                  <div>• <strong>Probabilité conditionnelle :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(A|B) = \\frac{P(A \\cap B)}{P(B)}"} /></span></div>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-teal-800 mb-3">💡 Interprétation des résultats</h4>
                <div className="space-y-2 text-teal-800">
                  <div>• <strong>Question 1 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{2}{3}"} /></span> - Forte probabilité que ce soit <span className="inline-block align-middle"><LatexRenderer latex={"C_2"} /></span> (logique car c'est le seul à avoir que de l'argent)</div>
                  <div>• <strong>Question 2 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{5}{9} \\approx 0.56"} /></span> - Plus probable de retomber sur le même coffre que sur un différent</div>
                  <div>• <strong>Intuition :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"C_2"} /></span> domine les tirages d'argent (probabilité 1 vs 0.5 pour <span className="inline-block align-middle"><LatexRenderer latex={"C_3"} /></span>)</div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📊 Récapitulatif final</h4>
                <div className="space-y-2 text-blue-800">
                  <div><strong>Question 1 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(C_2|\\text{argent}) = \\frac{2}{3}"} /></span></div>
                  <div><strong>Question 2 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(\\text{même coffre}|\\text{2 argent}) = \\frac{5}{9}"} /></span></div>
                  <div><strong>Méthodes :</strong> Bayes + Probabilités totales + Indépendance</div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex3"
          title="Exercice 3"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>On considère deux urnes <span className="inline-block align-middle"><LatexRenderer latex={"U_1"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"U_2"} /></span>, contenant chacune 5 boules.</strong></p>
              
              <div className="space-y-2 mb-4">
                <div>• L'urne <span className="inline-block align-middle"><LatexRenderer latex={"U_1"} /></span> contient 3 boules blanches et 2 boules noires.</div>
                <div>• L'urne <span className="inline-block align-middle"><LatexRenderer latex={"U_2"} /></span> contient 2 boules blanches et 3 boules noires.</div>
              </div>
              
              <p className="mb-4">On tire successivement, <strong>sans remise</strong>, 2 boules dans chaque urne. On s'intéresse au nombre total de boules blanches obtenues.</p>
              
              <p className="mb-2"><strong>Déterminer la loi de probabilité de B (nombre total de boules blanches).</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Stratégie de résolution</h4>
                <p className="text-purple-800">Calculer d'abord les probabilités pour chaque urne séparément, puis combiner les résultats avec un <strong>arbre pondéré</strong> ou un <strong>tableau de probabilités</strong>.</p>
              </div>

              <div>
                <strong className="text-green-600">Étape 1 : Étude des issues de U₁</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">L'ensemble des tirages de 2 boules parmi 5 :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"|\\Omega_1| = \\binom{5}{2} = 10"} />
                    </div>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Probabilités selon le nombre de boules blanches tirées dans <span className="inline-block align-middle"><LatexRenderer latex={"U_1"} /></span> :</strong></p>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <div className="space-y-2">
                          <div>• <strong>0 blanche :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P_0 = \\frac{\\binom{2}{2}}{\\binom{5}{2}} = \\frac{1}{10} = 0{,}1"} /></span></div>
                          <div>• <strong>1 blanche :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P_1 = \\frac{\\binom{3}{1} \\cdot \\binom{2}{1}}{\\binom{5}{2}} = \\frac{6}{10} = 0{,}6"} /></span></div>
                          <div>• <strong>2 blanches :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P_2 = \\frac{\\binom{3}{2}}{\\binom{5}{2}} = \\frac{3}{10} = 0{,}3"} /></span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                    <p className="text-yellow-800"><strong>Vérification :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P_0 + P_1 + P_2 = 0{,}1 + 0{,}6 + 0{,}3 = 1"} /></span> ✓</p>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Étude des issues de U₂</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">De même, <span className="inline-block align-middle"><LatexRenderer latex={"|\\Omega_2| = \\binom{5}{2} = 10"} /></span></p>
                  </div>

                  <div>
                    <p className="mb-2"><strong>Probabilités selon le nombre de boules blanches tirées dans <span className="inline-block align-middle"><LatexRenderer latex={"U_2"} /></span> :</strong></p>
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded">
                        <div className="space-y-2">
                          <div>• <strong>0 blanche :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P_0' = \\frac{\\binom{3}{2}}{10} = \\frac{3}{10} = 0{,}3"} /></span></div>
                          <div>• <strong>1 blanche :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P_1' = \\frac{\\binom{2}{1} \\cdot \\binom{3}{1}}{10} = \\frac{6}{10} = 0{,}6"} /></span></div>
                          <div>• <strong>2 blanches :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P_2' = \\frac{\\binom{2}{2}}{10} = \\frac{1}{10} = 0{,}1"} /></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Distribution de B (nombre total de boules blanches)</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">La variable aléatoire B peut prendre les valeurs 0, 1, 2, 3, 4. Calculons chaque probabilité :</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-red-50 p-3 rounded">
                      <strong>B = 0 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{P}(B = 0) = P_0 \\times P_0' = 0{,}1 \\times 0{,}3 = 0{,}03"} /></span>
                    </div>

                    <div className="bg-orange-50 p-3 rounded">
                      <strong>B = 1 :</strong> 
                      <div className="mt-2">
                        <LatexRenderer latex={"\\mathbb{P}(B = 1) = P_0 \\times P_1' + P_1 \\times P_0'"} />
                      </div>
                      <div className="text-center mt-1">
                        <LatexRenderer latex={"= 0{,}1 \\times 0{,}6 + 0{,}6 \\times 0{,}3 = 0{,}06 + 0{,}18 = 0{,}24"} />
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-3 rounded">
                      <strong>B = 2 :</strong>
                      <div className="mt-2">
                        <LatexRenderer latex={"\\mathbb{P}(B = 2) = P_0 \\times P_2' + P_1 \\times P_1' + P_2 \\times P_0'"} />
                      </div>
                      <div className="text-center mt-1">
                        <LatexRenderer latex={"= 0{,}1 \\times 0{,}1 + 0{,}6 \\times 0{,}6 + 0{,}3 \\times 0{,}3"} />
                      </div>
                      <div className="text-center mt-1">
                        <LatexRenderer latex={"= 0{,}01 + 0{,}36 + 0{,}09 = 0{,}46"} />
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded">
                      <strong>B = 3 :</strong>
                      <div className="mt-2">
                        <LatexRenderer latex={"\\mathbb{P}(B = 3) = P_1 \\times P_2' + P_2 \\times P_1'"} />
                      </div>
                      <div className="text-center mt-1">
                        <LatexRenderer latex={"= 0{,}6 \\times 0{,}1 + 0{,}3 \\times 0{,}6 = 0{,}06 + 0{,}18 = 0{,}24"} />
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded">
                      <strong>B = 4 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{P}(B = 4) = P_2 \\times P_2' = 0{,}3 \\times 0{,}1 = 0{,}03"} /></span>
                    </div>
                  </div>

                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                    <strong>Loi de probabilité de B :</strong>
                    <div className="mt-3 space-y-2">
                      <div><LatexRenderer latex={"\\mathbb{P}(B = 0) = 0{,}03"} /></div>
                      <div><LatexRenderer latex={"\\mathbb{P}(B = 1) = 0{,}24"} /></div>
                      <div><LatexRenderer latex={"\\mathbb{P}(B = 2) = 0{,}46"} /></div>
                      <div><LatexRenderer latex={"\\mathbb{P}(B = 3) = 0{,}24"} /></div>
                      <div><LatexRenderer latex={"\\mathbb{P}(B = 4) = 0{,}03"} /></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">📊 Tableau récapitulatif</h4>
                <div className="text-orange-800">
                  <table className="w-full border-collapse border border-orange-300">
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="border border-orange-300 p-2">B</th>
                        <th className="border border-orange-300 p-2">0</th>
                        <th className="border border-orange-300 p-2">1</th>
                        <th className="border border-orange-300 p-2">2</th>
                        <th className="border border-orange-300 p-2">3</th>
                        <th className="border border-orange-300 p-2">4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-orange-300 p-2 font-semibold">P(B)</td>
                        <td className="border border-orange-300 p-2 text-center">0,03</td>
                        <td className="border border-orange-300 p-2 text-center">0,24</td>
                        <td className="border border-orange-300 p-2 text-center">0,46</td>
                        <td className="border border-orange-300 p-2 text-center">0,24</td>
                        <td className="border border-orange-300 p-2 text-center">0,03</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="mt-2"><strong>Vérification :</strong> 0,03 + 0,24 + 0,46 + 0,24 + 0,03 = 1 ✓</p>
                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-indigo-800 mb-3">🧠 Techniques utilisées</h4>
                <div className="space-y-2 text-indigo-800">
                  <div>• <strong>Combinaisons :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\binom{n}{k} = \\frac{n!}{k!(n-k)!}"} /></span> pour les tirages sans remise</div>
                  <div>• <strong>Indépendance :</strong> Les tirages dans <span className="inline-block align-middle"><LatexRenderer latex={"U_1"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"U_2"} /></span> sont indépendants</div>
                  <div>• <strong>Arbre pondéré :</strong> Multiplication des probabilités le long des branches</div>
                  <div>• <strong>Événements disjoints :</strong> Addition pour les différentes façons d'obtenir le même total</div>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-teal-800 mb-3">📈 Analyse statistique</h4>
                <div className="space-y-2 text-teal-800">
                  <div>• <strong>Mode :</strong> B = 2 (probabilité maximale 0,46)</div>
                  <div>• <strong>Symétrie :</strong> P(B = 0) = P(B = 4) et P(B = 1) = P(B = 3)</div>
                  <div>• <strong>Espérance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"E[B] = 0 \\times 0{,}03 + 1 \\times 0{,}24 + 2 \\times 0{,}46 + 3 \\times 0{,}24 + 4 \\times 0{,}03 = 2"} /></span></div>
                  <div>• <strong>Interprétation :</strong> En moyenne, on obtient 2 boules blanches au total</div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">💡 Points méthodologiques</h4>
                <div className="space-y-2 text-yellow-800">
                  <div>• <strong>Organisation :</strong> Traiter chaque urne séparément puis combiner</div>
                  <div>• <strong>Vérification :</strong> Contrôler que la somme des probabilités vaut 1</div>
                  <div>• <strong>Combinaisons :</strong> Attention aux tirages sans remise (hypergeométrique)</div>
                  <div>• <strong>Exhaustivité :</strong> Lister tous les cas pour chaque valeur de B</div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🎓 Modélisation probabiliste</h4>
                <div className="space-y-2 text-blue-800">
                  <div>• <strong>Loi hypergeométrique :</strong> Chaque urne suit une loi hypergeométrique</div>
                  <div>• <strong>Somme de variables :</strong> B est la somme de deux variables indépendantes</div>
                  <div>• <strong>Convolution :</strong> La loi de B est la convolution des lois de chaque urne</div>
                  <div>• <strong>Application :</strong> Modèle de contrôle qualité, sondages, etc.</div>
                </div>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
};

export default Chapitre6ProbabilitesExercicesPage;