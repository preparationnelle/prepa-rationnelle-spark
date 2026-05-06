import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre7MatriceExercicesPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Exercices - Chapitre 7</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices - Chapitre 7 : Matrice
            </h1>
            <p className="text-slate-600 text-lg">
              Exercices progressifs pour maîtriser les matrices et leurs propriétés fondamentales.
            </p>
          </div>
        </Card>

        <DifficultyHeader
          level="Module 1"
          title="Matrices et dimensions"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-4"><strong>Soit :</strong></p>
              
              <div className="space-y-4 mb-4">
                <div className="text-center">
                  <LatexRenderer latex={"A = \\begin{pmatrix} 3 & 2 \\\\ 0 & 5 \\end{pmatrix}, \\quad B = \\begin{pmatrix} -3 & 5 & 1 \\\\ 2 & -4 & 0 \\end{pmatrix}, \\quad C = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}"} />
                </div>
                
                <div className="text-center">
                  <LatexRenderer latex={"D = \\begin{pmatrix} 1 & -2 \\end{pmatrix}, \\quad E = \\begin{pmatrix} 1 & 4 \\\\ 2 & -5 \\\\ -3 & 2 \\end{pmatrix}, \\quad F = \\begin{pmatrix} 3 \\\\ 1 \\\\ -2 \\\\ 0 \\end{pmatrix}"} />
                </div>
              </div>
              
              <p className="mb-2"><strong>Donner la dimension de chaque matrice.</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📏 Rappel sur les dimensions</h4>
                <p className="text-blue-800">Une matrice de dimension <span className="inline-block align-middle"><LatexRenderer latex={"m \\times n"} /></span> possède <strong>m lignes</strong> et <strong>n colonnes</strong>. On lit toujours : lignes × colonnes.</p>
              </div>

              <div>
                <strong className="text-green-600">Détermination des dimensions :</strong>
                <div className="mt-2 space-y-4">
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-400">
                    <div className="text-center mb-2">
                      <LatexRenderer latex={"A = \\begin{pmatrix} 3 & 2 \\\\ 0 & 5 \\end{pmatrix}"} />
                    </div>
                    <p className="text-center text-gray-700">
                      <strong>2 lignes, 2 colonnes</strong> → Matrice <span className="inline-block align-middle"><LatexRenderer latex={"2 \\times 2"} /></span>
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                    <div className="text-center mb-2">
                      <LatexRenderer latex={"B = \\begin{pmatrix} -3 & 5 & 1 \\\\ 2 & -4 & 0 \\end{pmatrix}"} />
                    </div>
                    <p className="text-center text-red-700">
                      <strong>2 lignes, 3 colonnes</strong> → Matrice <span className="inline-block align-middle"><LatexRenderer latex={"2 \\times 3"} /></span>
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <div className="text-center mb-2">
                      <LatexRenderer latex={"C = \\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}"} />
                    </div>
                    <p className="text-center text-green-700">
                      <strong>2 lignes, 1 colonne</strong> → Matrice <span className="inline-block align-middle"><LatexRenderer latex={"2 \\times 1"} /></span> (vecteur colonne)
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                    <div className="text-center mb-2">
                      <LatexRenderer latex={"D = \\begin{pmatrix} 1 & -2 \\end{pmatrix}"} />
                    </div>
                    <p className="text-center text-yellow-700">
                      <strong>1 ligne, 2 colonnes</strong> → Matrice <span className="inline-block align-middle"><LatexRenderer latex={"1 \\times 2"} /></span> (vecteur ligne)
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                    <div className="text-center mb-2">
                      <LatexRenderer latex={"E = \\begin{pmatrix} 1 & 4 \\\\ 2 & -5 \\\\ -3 & 2 \\end{pmatrix}"} />
                    </div>
                    <p className="text-center text-purple-700">
                      <strong>3 lignes, 2 colonnes</strong> → Matrice <span className="inline-block align-middle"><LatexRenderer latex={"3 \\times 2"} /></span>
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded border-l-4 border-indigo-400">
                    <div className="text-center mb-2">
                      <LatexRenderer latex={"F = \\begin{pmatrix} 3 \\\\ 1 \\\\ -2 \\\\ 0 \\end{pmatrix}"} />
                    </div>
                    <p className="text-center text-indigo-700">
                      <strong>4 lignes, 1 colonne</strong> → Matrice <span className="inline-block align-middle"><LatexRenderer latex={"4 \\times 1"} /></span> (vecteur colonne)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">📊 Récapitulatif des dimensions</h4>
                <div className="text-orange-800">
                  <table className="w-full border-collapse border border-orange-300">
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="border border-orange-300 p-3 font-semibold">Matrice</th>
                        <th className="border border-orange-300 p-3 font-semibold">Lignes</th>
                        <th className="border border-orange-300 p-3 font-semibold">Colonnes</th>
                        <th className="border border-orange-300 p-3 font-semibold">Dimension</th>
                        <th className="border border-orange-300 p-3 font-semibold">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-orange-300 p-3 text-center font-semibold">A</td>
                        <td className="border border-orange-300 p-3 text-center">2</td>
                        <td className="border border-orange-300 p-3 text-center">2</td>
                        <td className="border border-orange-300 p-3 text-center">2 × 2</td>
                        <td className="border border-orange-300 p-3 text-center">Matrice carrée</td>
                      </tr>
                      <tr>
                        <td className="border border-orange-300 p-3 text-center font-semibold">B</td>
                        <td className="border border-orange-300 p-3 text-center">2</td>
                        <td className="border border-orange-300 p-3 text-center">3</td>
                        <td className="border border-orange-300 p-3 text-center">2 × 3</td>
                        <td className="border border-orange-300 p-3 text-center">Matrice rectangulaire</td>
                      </tr>
                      <tr>
                        <td className="border border-orange-300 p-3 text-center font-semibold">C</td>
                        <td className="border border-orange-300 p-3 text-center">2</td>
                        <td className="border border-orange-300 p-3 text-center">1</td>
                        <td className="border border-orange-300 p-3 text-center">2 × 1</td>
                        <td className="border border-orange-300 p-3 text-center">Vecteur colonne</td>
                      </tr>
                      <tr>
                        <td className="border border-orange-300 p-3 text-center font-semibold">D</td>
                        <td className="border border-orange-300 p-3 text-center">1</td>
                        <td className="border border-orange-300 p-3 text-center">2</td>
                        <td className="border border-orange-300 p-3 text-center">1 × 2</td>
                        <td className="border border-orange-300 p-3 text-center">Vecteur ligne</td>
                      </tr>
                      <tr>
                        <td className="border border-orange-300 p-3 text-center font-semibold">E</td>
                        <td className="border border-orange-300 p-3 text-center">3</td>
                        <td className="border border-orange-300 p-3 text-center">2</td>
                        <td className="border border-orange-300 p-3 text-center">3 × 2</td>
                        <td className="border border-orange-300 p-3 text-center">Matrice rectangulaire</td>
                      </tr>
                      <tr>
                        <td className="border border-orange-300 p-3 text-center font-semibold">F</td>
                        <td className="border border-orange-300 p-3 text-center">4</td>
                        <td className="border border-orange-300 p-3 text-center">1</td>
                        <td className="border border-orange-300 p-3 text-center">4 × 1</td>
                        <td className="border border-orange-300 p-3 text-center">Vecteur colonne</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-teal-800 mb-3">🎯 Classification des matrices</h4>
                <div className="space-y-2 text-teal-800">
                  <div>• <strong>Matrice carrée :</strong> Même nombre de lignes et de colonnes (<span className="inline-block align-middle"><LatexRenderer latex={"n \\times n"} /></span>)</div>
                  <div>• <strong>Matrice rectangulaire :</strong> Nombre de lignes ≠ nombre de colonnes</div>
                  <div>• <strong>Vecteur ligne :</strong> Matrice <span className="inline-block align-middle"><LatexRenderer latex={"1 \\times n"} /></span> (1 ligne, plusieurs colonnes)</div>
                  <div>• <strong>Vecteur colonne :</strong> Matrice <span className="inline-block align-middle"><LatexRenderer latex={"m \\times 1"} /></span> (plusieurs lignes, 1 colonne)</div>
                  <div>• <strong>Scalaire :</strong> Matrice <span className="inline-block align-middle"><LatexRenderer latex={"1 \\times 1"} /></span> (un seul élément)</div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">💡 Points méthodologiques</h4>
                <div className="space-y-2 text-yellow-800">
                  <div>• <strong>Méthode :</strong> Compter d'abord les lignes (horizontales), puis les colonnes (verticales)</div>
                  <div>• <strong>Notation :</strong> Toujours écrire lignes × colonnes (dans cet ordre)</div>
                  <div>• <strong>Vocabulaire :</strong> On dit "matrice 2 par 3" pour une matrice <span className="inline-block align-middle"><LatexRenderer latex={"2 \\times 3"} /></span></div>
                  <div>• <strong>Convention :</strong> Les indices de position sont notés <span className="inline-block align-middle"><LatexRenderer latex={"a_{ij}"} /></span> (i = ligne, j = colonne)</div>
                </div>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-indigo-800 mb-3">🔍 Applications et utilité</h4>
                <div className="space-y-2 text-indigo-800">
                  <div>• <strong>Opérations :</strong> La dimension détermine quelles opérations sont possibles</div>
                  <div>• <strong>Multiplication :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"A \\times B"} /></span>, il faut que le nombre de colonnes de A = nombre de lignes de B</div>
                  <div>• <strong>Addition :</strong> Seules les matrices de même dimension peuvent être additionnées</div>
                  <div>• <strong>Systèmes linéaires :</strong> Les matrices représentent des systèmes d'équations</div>
                  <div>• <strong>Géométrie :</strong> Les vecteurs sont des matrices colonnes ou lignes</div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-3">✅ Vérification rapide</h4>
                <div className="space-y-2 text-green-800">
                  <div>Pour vérifier : comptez mentalement ou avec le doigt</div>
                  <div>• <strong>Lignes :</strong> Parcours horizontal (→)</div>
                  <div>• <strong>Colonnes :</strong> Parcours vertical (↓)</div>
                  <div>• <strong>Exemple :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} a & b & c \\\\ d & e & f \\end{pmatrix}"} /></span> → 2 lignes, 3 colonnes → <span className="inline-block align-middle"><LatexRenderer latex={"2 \\times 3"} /></span></div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex2"
          title="Exercice 2"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-4"><strong>Soit la matrice A définie par :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} 1 & 5 & 9 & -3 \\\\ 2 & 6 & -8 & 0 \\\\ 7 & -1 & -4 & 3 \\end{pmatrix}"} />
              </div>
              
              <div className="space-y-3">
                <div><strong>1.</strong> Quelle est la dimension de la matrice A ?</div>
                <div><strong>2.</strong> Que valent <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,2}"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"a_{3,3}"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"a_{2,4}"} /></span> ?</div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Objectifs de l'exercice</h4>
                <p className="text-purple-800">Cet exercice combine la <strong>détermination de dimension</strong> et la <strong>lecture d'éléments</strong> avec la notation d'indices. Il s'agit de maîtriser le repérage dans une matrice.</p>
              </div>

              <div>
                <strong className="text-green-600">Question 1 : Dimension de la matrice A</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">Analysons la matrice A :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"A = \\begin{pmatrix} 1 & 5 & 9 & -3 \\\\ 2 & 6 & -8 & 0 \\\\ 7 & -1 & -4 & 3 \\end{pmatrix}"} />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <div className="space-y-2">
                      <div>• <strong>Nombre de lignes :</strong> On compte 3 lignes horizontales</div>
                      <div>• <strong>Nombre de colonnes :</strong> On compte 4 colonnes verticales</div>
                    </div>
                  </div>

                  <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                    <strong>Réponse 1 :</strong> La matrice A est de dimension <LatexRenderer latex={"3 \\times 4"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Question 2 : Lecture des éléments avec notation d'indices</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-yellow-800 mb-3">📍 Rappel sur la notation</h4>
                    <p className="text-yellow-800">Pour un élément <span className="inline-block align-middle"><LatexRenderer latex={"a_{i,j}"} /></span> : <strong>i</strong> est le numéro de ligne, <strong>j</strong> est le numéro de colonne. On commence toujours la numérotation à 1.</p>
                  </div>

                  <div>
                    <p className="mb-2">Localisons chaque élément dans la matrice :</p>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded border-l-4 border-red-400">
                        <strong>Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,2}"} /></span> :</strong>
                        <div className="mt-2">
                          <div>• Ligne 1, colonne 2</div>
                          <div>• En regardant la matrice : ligne 1 = <span className="inline-block align-middle"><LatexRenderer latex={"(1, 5, 9, -3)"} /></span></div>
                          <div>• L'élément en position 2 de cette ligne est <strong>5</strong></div>
                          <div className="mt-2 text-center">
                            <strong>Donc : <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,2} = 5"} /></span></strong>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                        <strong>Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"a_{3,3}"} /></span> :</strong>
                        <div className="mt-2">
                          <div>• Ligne 3, colonne 3</div>
                          <div>• En regardant la matrice : ligne 3 = <span className="inline-block align-middle"><LatexRenderer latex={"(7, -1, -4, 3)"} /></span></div>
                          <div>• L'élément en position 3 de cette ligne est <strong>-4</strong></div>
                          <div className="mt-2 text-center">
                            <strong>Donc : <span className="inline-block align-middle"><LatexRenderer latex={"a_{3,3} = -4"} /></span></strong>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                        <strong>Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"a_{2,4}"} /></span> :</strong>
                        <div className="mt-2">
                          <div>• Ligne 2, colonne 4</div>
                          <div>• En regardant la matrice : ligne 2 = <span className="inline-block align-middle"><LatexRenderer latex={"(2, 6, -8, 0)"} /></span></div>
                          <div>• L'élément en position 4 de cette ligne est <strong>0</strong></div>
                          <div className="mt-2 text-center">
                            <strong>Donc : <span className="inline-block align-middle"><LatexRenderer latex={"a_{2,4} = 0"} /></span></strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                    <strong>Réponse 2 :</strong>
                    <div className="mt-2">
                      <LatexRenderer latex={"a_{1,2} = 5, \\quad a_{3,3} = -4, \\quad a_{2,4} = 0"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">🗺️ Méthode de repérage visuel</h4>
                <div className="text-orange-800">
                  <p className="mb-3">Pour localiser <span className="inline-block align-middle"><LatexRenderer latex={"a_{i,j}"} /></span> dans une matrice :</p>
                  <div className="space-y-2">
                    <div><strong>Étape 1 :</strong> Compter i lignes depuis le haut (↓)</div>
                    <div><strong>Étape 2 :</strong> Compter j colonnes depuis la gauche (→)</div>
                    <div><strong>Étape 3 :</strong> L'intersection donne l'élément recherché</div>
                  </div>
                  <div className="mt-3 p-3 bg-orange-100 rounded">
                    <strong>Exemple :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"a_{2,3}"} /></span> → 2e ligne, 3e colonne → <span className="inline-block align-middle"><LatexRenderer latex={"a_{2,3} = -8"} /></span>
                  </div>
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
              <p className="mb-4"><strong>Soit :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}"} />
              </div>
              
              <div className="space-y-3">
                <div><strong>1.</strong> Que vaut <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,3}"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"a_{3,1}"} /></span> ?</div>
                <div>
                  <strong>2.</strong> Calculer :
                  <div className="space-y-2 mt-2 ml-4">
                    <div><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{j,j}"} /></span></div>
                    <div><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{2,j}"} /></span></div>
                    <div><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{4-j,j}"} /></span></div>
                  </div>
                </div>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Objectifs avancés</h4>
                <p className="text-purple-800">Cet exercice introduit les <strong>sommes matricielles</strong> et la manipulation d'<strong>indices variables</strong>. Il s'agit de maîtriser la notation <span className="inline-block align-middle"><LatexRenderer latex={"\\sum"} /></span> appliquée aux matrices.</p>
              </div>

              <div>
                <strong className="text-green-600">Question 1 : Lecture d'éléments</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p className="mb-2">Localisons les éléments demandés dans la matrice :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}"} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <strong>Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,3}"} /></span> :</strong>
                      <div className="mt-2">
                        <div>• Ligne 1, colonne 3</div>
                        <div>• Dans la première ligne : <span className="inline-block align-middle"><LatexRenderer latex={"(1, 2, 3)"} /></span></div>
                        <div>• L'élément en position 3 est <strong>3</strong></div>
                        <div className="mt-2 text-center">
                          <strong>Donc : <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,3} = 3"} /></span></strong>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                      <strong>Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"a_{3,1}"} /></span> :</strong>
                      <div className="mt-2">
                        <div>• Ligne 3, colonne 1</div>
                        <div>• Dans la troisième ligne : <span className="inline-block align-middle"><LatexRenderer latex={"(7, 8, 9)"} /></span></div>
                        <div>• L'élément en position 1 est <strong>7</strong></div>
                        <div className="mt-2 text-center">
                          <strong>Donc : <span className="inline-block align-middle"><LatexRenderer latex={"a_{3,1} = 7"} /></span></strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center bg-green-50 p-3 rounded border-2 border-green-200">
                    <strong>Réponse 1 :</strong> <LatexRenderer latex={"a_{1,3} = 3 \\text{ et } a_{3,1} = 7"} />
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Question 2 : Calcul des sommes matricielles</strong>
                <div className="mt-2 space-y-4">
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <h4 className="font-semibold text-yellow-800 mb-3">📊 Rappel sur les sommes</h4>
                    <p className="text-yellow-800">La notation <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{i,j}"} /></span> signifie : additionner les termes <span className="inline-block align-middle"><LatexRenderer latex={"a_{i,1} + a_{i,2} + a_{i,3}"} /></span> en faisant varier j de 1 à 3.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400">
                      <strong>Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{j,j}"} /></span> (somme de la diagonale principale) :</strong>
                      <div className="mt-3 space-y-2">
                        <div>En développant : <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,1} + a_{2,2} + a_{3,3}"} /></span></div>
                        <div>En remplaçant : <span className="inline-block align-middle"><LatexRenderer latex={"1 + 5 + 9"} /></span></div>
                        <div className="text-center mt-2">
                          <strong><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{j,j} = 15"} /></span></strong>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-orange-100 rounded">
                        <strong>Note :</strong> Cette somme s'appelle la <strong>trace</strong> de la matrice.
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                      <strong>Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{2,j}"} /></span> (somme de la ligne 2) :</strong>
                      <div className="mt-3 space-y-2">
                        <div>En développant : <span className="inline-block align-middle"><LatexRenderer latex={"a_{2,1} + a_{2,2} + a_{2,3}"} /></span></div>
                        <div>En remplaçant : <span className="inline-block align-middle"><LatexRenderer latex={"4 + 5 + 6"} /></span></div>
                        <div className="text-center mt-2">
                          <strong><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{2,j} = 15"} /></span></strong>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-green-100 rounded">
                        <strong>Note :</strong> C'est la somme des éléments de la 2e ligne.
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                      <strong>Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{4-j,j}"} /></span> (somme de l'anti-diagonale) :</strong>
                      <div className="mt-3 space-y-2">
                        <div>En développant pour j = 1, 2, 3 :</div>
                        <div className="ml-4 space-y-1">
                          <div>• j = 1 : <span className="inline-block align-middle"><LatexRenderer latex={"a_{4-1,1} = a_{3,1} = 7"} /></span></div>
                          <div>• j = 2 : <span className="inline-block align-middle"><LatexRenderer latex={"a_{4-2,2} = a_{2,2} = 5"} /></span></div>
                          <div>• j = 3 : <span className="inline-block align-middle"><LatexRenderer latex={"a_{4-3,3} = a_{1,3} = 3"} /></span></div>
                        </div>
                        <div>Donc : <span className="inline-block align-middle"><LatexRenderer latex={"a_{3,1} + a_{2,2} + a_{1,3} = 7 + 5 + 3"} /></span></div>
                        <div className="text-center mt-2">
                          <strong><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{4-j,j} = 15"} /></span></strong>
                        </div>
                      </div>
                      <div className="mt-3 p-2 bg-purple-100 rounded">
                        <strong>Note :</strong> C'est la somme de l'<strong>anti-diagonale</strong> (diagonale secondaire).
                      </div>
                    </div>
                  </div>

                  <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                    <strong>Réponse 2 :</strong>
                    <div className="mt-2 space-y-1">
                      <div><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{j,j} = 15"} /></span></div>
                      <div><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{2,j} = 15"} /></span></div>
                      <div><span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{j=1}^{3} a_{4-j,j} = 15"} /></span></div>
                    </div>
                  </div>
                </div>
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
              <p className="mb-4"><strong>Soit :</strong></p>
              
              <div className="text-center my-4 space-y-3">
                <div>
                  <LatexRenderer latex={"I_2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}"} />
                  <span className="mx-4">et</span>
                  <LatexRenderer latex={"J = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} />
                </div>
              </div>
              
              <p className="text-center"><strong>Calculer la matrice <span className="inline-block align-middle"><LatexRenderer latex={"10I_2 - 7J"} /></span>.</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Objectifs des opérations matricielles</h4>
                <p className="text-purple-800">Cet exercice introduit les <strong>opérations fondamentales</strong> sur les matrices : <strong>multiplication par un scalaire</strong> et <strong>soustraction matricielle</strong>. Ces opérations sont la base de l'algèbre linéaire.</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📋 Rappel des opérations matricielles</h4>
                <div className="space-y-2 text-blue-800">
                  <div>• <strong>Multiplication par scalaire :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"k \\cdot A = (k \\cdot a_{i,j})"} /></span></div>
                  <div>• <strong>Soustraction :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"A - B = (a_{i,j} - b_{i,j})"} /></span></div>
                  <div>• <strong>Compatibilité :</strong> Les matrices doivent avoir les mêmes dimensions</div>
                  <div>• <strong>Élément par élément :</strong> On opère coordonnée par coordonnée</div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 1 : Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"10I_2"} /></span></strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="mb-2">Multiplions chaque élément de <span className="inline-block align-middle"><LatexRenderer latex={"I_2"} /></span> par 10 :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"10I_2 = 10 \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = \\begin{pmatrix} 10 \\times 1 & 10 \\times 0 \\\\ 10 \\times 0 & 10 \\times 1 \\end{pmatrix} = \\begin{pmatrix} 10 & 0 \\\\ 0 & 10 \\end{pmatrix}"} />
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                    <h4 className="font-semibold text-teal-800 mb-2">🔍 Remarque importante</h4>
                    <p className="text-teal-800"><span className="inline-block align-middle"><LatexRenderer latex={"I_2"} /></span> est la <strong>matrice identité</strong> d'ordre 2. La matrice <span className="inline-block align-middle"><LatexRenderer latex={"10I_2"} /></span> est donc une <strong>matrice scalaire</strong> (multiple de l'identité).</p>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"7J"} /></span></strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                    <p className="mb-2">Multiplions chaque élément de J par 7 :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"7J = 7 \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} = \\begin{pmatrix} 7 \\times 1 & 7 \\times 2 \\\\ 7 \\times 3 & 7 \\times 4 \\end{pmatrix} = \\begin{pmatrix} 7 & 14 \\\\ 21 & 28 \\end{pmatrix}"} />
                    </div>
                  </div>

                  <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ Vérification des calculs</h4>
                    <div className="space-y-1 text-red-800">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"7 \\times 1 = 7"} /></span> ✓</div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"7 \\times 2 = 14"} /></span> ✓</div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"7 \\times 3 = 21"} /></span> ✓</div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"7 \\times 4 = 28"} /></span> ✓</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"10I_2 - 7J"} /></span></strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <p className="mb-2">Soustrayons élément par élément :</p>
                    <div className="text-center space-y-2">
                      <div>
                        <LatexRenderer latex={"10I_2 - 7J = \\begin{pmatrix} 10 & 0 \\\\ 0 & 10 \\end{pmatrix} - \\begin{pmatrix} 7 & 14 \\\\ 21 & 28 \\end{pmatrix}"} />
                      </div>
                      <div>
                        <LatexRenderer latex={"= \\begin{pmatrix} 10-7 & 0-14 \\\\ 0-21 & 10-28 \\end{pmatrix}"} />
                      </div>
                      <div className="text-lg font-semibold">
                        <LatexRenderer latex={"= \\begin{pmatrix} 3 & -14 \\\\ -21 & -18 \\end{pmatrix}"} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 p-3 rounded border-l-4 border-indigo-400">
                    <h4 className="font-semibold text-indigo-800 mb-2">🔢 Détail des calculs</h4>
                    <div className="space-y-1 text-indigo-800">
                      <div>• Position (1,1) : <span className="inline-block align-middle"><LatexRenderer latex={"10 - 7 = 3"} /></span></div>
                      <div>• Position (1,2) : <span className="inline-block align-middle"><LatexRenderer latex={"0 - 14 = -14"} /></span></div>
                      <div>• Position (2,1) : <span className="inline-block align-middle"><LatexRenderer latex={"0 - 21 = -21"} /></span></div>
                      <div>• Position (2,2) : <span className="inline-block align-middle"><LatexRenderer latex={"10 - 28 = -18"} /></span></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                <strong>Réponse finale :</strong>
                <div className="mt-2 text-lg">
                  <LatexRenderer latex={"10I_2 - 7J = \\begin{pmatrix} 3 & -14 \\\\ -21 & -18 \\end{pmatrix}"} />
                </div>
              </div>

              <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-violet-800 mb-3">🎓 Notions avancées</h4>
                <div className="space-y-2 text-violet-800">
                  <div>• <strong>Matrice identité :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"I_n"} /></span> a des 1 sur la diagonale et des 0 ailleurs</div>
                  <div>• <strong>Matrice scalaire :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"kI_n"} /></span> est multiple de l'identité</div>
                  <div>• <strong>Propriété :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"AI_n = I_nA = A"} /></span> (élément neutre de la multiplication)</div>
                  <div>• <strong>Combinaison linéaire :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"aA + bB"} /></span> est une combinaison linéaire de matrices</div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-amber-800 mb-3">⚡ Méthode systématique</h4>
                <div className="space-y-2 text-amber-800">
                  <div><strong>1. Vérifier les dimensions :</strong> Les matrices doivent être compatibles</div>
                  <div><strong>2. Multiplication par scalaire :</strong> Multiplier chaque élément</div>
                  <div><strong>3. Opération matricielle :</strong> Additionner/soustraire élément par élément</div>
                  <div><strong>4. Vérification :</strong> Contrôler chaque calcul élémentaire</div>
                  <div><strong>5. Présentation :</strong> Écrire la matrice résultat sous forme standard</div>
                </div>
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
              <p className="mb-4"><strong>Soient <span className="inline-block align-middle"><LatexRenderer latex={"a > 0"} /></span> et :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} \\ln(a) & \\ln(a^2) \\\\ \\ln(a^3) & \\ln(a^4) \\end{pmatrix}"} />
              </div>
              
              <p className="text-center"><strong>Déterminer la matrice B telle que <span className="inline-block align-middle"><LatexRenderer latex={"A = \\ln(a) \\cdot B"} /></span>.</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Objectifs de la factorisation matricielle</h4>
                <p className="text-purple-800">Cet exercice combine <strong>logarithmes</strong> et <strong>factorisation matricielle</strong>. Il s'agit de factoriser une matrice en extrayant un <strong>facteur commun</strong> pour identifier la structure cachée.</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📋 Rappels sur les logarithmes</h4>
                <div className="space-y-2 text-blue-800">
                  <div>• <strong>Propriété fondamentale :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^n) = n \\ln(a)"} /></span></div>
                  <div>• <strong>Factorisation :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"k \\cdot \\ln(a) = \\ln(a) \\cdot k"} /></span> (commutativité)</div>
                  <div>• <strong>Condition :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a > 0"} /></span> pour que <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a)"} /></span> soit défini</div>
                  <div>• <strong>Base :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln"} /></span> est le logarithme népérien (base e)</div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 1 : Simplification des éléments de A</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="mb-2">Appliquons la propriété <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^n) = n \\ln(a)"} /></span> à chaque élément :</p>
                    <div className="space-y-2">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a) = 1 \\cdot \\ln(a)"} /></span></div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^2) = 2 \\cdot \\ln(a)"} /></span></div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^3) = 3 \\cdot \\ln(a)"} /></span></div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^4) = 4 \\cdot \\ln(a)"} /></span></div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-800 mb-2">🔍 Réécriture de la matrice A</h4>
                    <div className="text-center">
                      <LatexRenderer latex={"A = \\begin{pmatrix} \\ln(a) & \\ln(a^2) \\\\ \\ln(a^3) & \\ln(a^4) \\end{pmatrix} = \\begin{pmatrix} 1 \\cdot \\ln(a) & 2 \\cdot \\ln(a) \\\\ 3 \\cdot \\ln(a) & 4 \\cdot \\ln(a) \\end{pmatrix}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Factorisation du terme commun</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                    <p className="mb-2">Factorisons <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a)"} /></span> de chaque élément :</p>
                    <div className="text-center space-y-2">
                      <div>
                        <LatexRenderer latex={"A = \\begin{pmatrix} 1 \\cdot \\ln(a) & 2 \\cdot \\ln(a) \\\\ 3 \\cdot \\ln(a) & 4 \\cdot \\ln(a) \\end{pmatrix}"} />
                      </div>
                      <div>
                        <LatexRenderer latex={"= \\ln(a) \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">✨ Identification de la matrice B</h4>
                    <div className="text-center">
                      <p className="mb-2">Puisque <span className="inline-block align-middle"><LatexRenderer latex={"A = \\ln(a) \\cdot B"} /></span>, on identifie :</p>
                      <div className="text-lg font-semibold">
                        <LatexRenderer latex={"B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Vérification</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-indigo-50 p-3 rounded border-l-4 border-indigo-400">
                    <p className="mb-2">Vérifions notre résultat en calculant <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a) \\cdot B"} /></span> :</p>
                    <div className="text-center space-y-2">
                      <div>
                        <LatexRenderer latex={"\\ln(a) \\cdot B = \\ln(a) \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} />
                      </div>
                      <div>
                        <LatexRenderer latex={"= \\begin{pmatrix} \\ln(a) \\cdot 1 & \\ln(a) \\cdot 2 \\\\ \\ln(a) \\cdot 3 & \\ln(a) \\cdot 4 \\end{pmatrix}"} />
                      </div>
                      <div>
                        <LatexRenderer latex={"= \\begin{pmatrix} \\ln(a) & 2\\ln(a) \\\\ 3\\ln(a) & 4\\ln(a) \\end{pmatrix}"} />
                      </div>
                      <div>
                        <LatexRenderer latex={"= \\begin{pmatrix} \\ln(a) & \\ln(a^2) \\\\ \\ln(a^3) & \\ln(a^4) \\end{pmatrix} = A"} />
                      </div>
                    </div>
                    <div className="mt-2 text-center text-green-700 font-semibold">✓ Vérification réussie !</div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                <strong>Réponse finale :</strong>
                <div className="mt-2 text-lg">
                  <LatexRenderer latex={"B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} />
                </div>
              </div>

              <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-violet-800 mb-3">🎓 Concepts mathématiques avancés</h4>
                <div className="space-y-2 text-violet-800">
                  <div>• <strong>Factorisation matricielle :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"A = \\alpha \\cdot B"} /></span> où <span className="inline-block align-middle"><LatexRenderer latex={"\\alpha"} /></span> est un scalaire</div>
                  <div>• <strong>Matrice de coefficients :</strong> B contient la structure numérique pure</div>
                  <div>• <strong>Fonction transcendante :</strong> Le logarithme relie puissances et coefficients</div>
                  <div>• <strong>Homogénéité :</strong> Tous les éléments ont le même facteur <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a)"} /></span></div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-amber-800 mb-3">⚡ Méthode générale de factorisation</h4>
                <div className="space-y-2 text-amber-800">
                  <div><strong>1. Identifier le facteur commun :</strong> Chercher l'expression qui apparaît dans tous les éléments</div>
                  <div><strong>2. Simplifier les éléments :</strong> Utiliser les propriétés algébriques (ici, logarithmes)</div>
                  <div><strong>3. Factoriser :</strong> Mettre le facteur commun en évidence</div>
                  <div><strong>4. Identifier la matrice facteur :</strong> Ce qui reste après factorisation</div>
                  <div><strong>5. Vérifier :</strong> Multiplier pour retrouver la matrice originale</div>
                </div>
              </div>

              <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-rose-800 mb-3">🔍 Analyse de la structure</h4>
                <div className="space-y-2 text-rose-800">
                  <div>• <strong>Matrice B :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} /></span> contient les entiers consécutifs 1, 2, 3, 4</div>
                  <div>• <strong>Structure arithmétique :</strong> Les exposants de a deviennent les coefficients de B</div>
                  <div>• <strong>Progression :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^1, a^2, a^3, a^4"} /></span> → <span className="inline-block align-middle"><LatexRenderer latex={"1, 2, 3, 4"} /></span></div>
                  <div>• <strong>Logarithme :</strong> Transforme les puissances en produits par linéarité</div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-emerald-800 mb-3">🎯 Applications de la factorisation matricielle</h4>
                <div className="space-y-2 text-emerald-800">
                  <div>• <strong>Algèbre linéaire :</strong> Décomposition de matrices, valeurs propres</div>
                  <div>• <strong>Analyse numérique :</strong> Optimisation des calculs matriciels</div>
                </div>
              </div>

              <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-sky-800 mb-3">🔢 Propriétés des logarithmes en algèbre matricielle</h4>
                <div className="space-y-2 text-sky-800">
                  <div>• <strong>Linéarité :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^n) = n \\ln(a)"} /></span> facilite la factorisation</div>
                  <div>• <strong>Monotonie :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a > 1 \\Rightarrow \\ln(a) > 0"} /></span></div>
                  <div>• <strong>Croissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"n > m \\Rightarrow \\ln(a^n) > \\ln(a^m)"} /></span> si <span className="inline-block align-middle"><LatexRenderer latex={"a > 1"} /></span></div>
                  <div>• <strong>Limite :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\lim_{a \\to 1} \\ln(a) = 0"} /></span></div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">💡 Techniques de reconnaissance</h4>
                <div className="space-y-2 text-orange-800">
                  <div>• <strong>Motifs exponentiels :</strong> Chercher des expressions de type <span className="inline-block align-middle"><LatexRenderer latex={"f(a^n)"} /></span></div>
                  <div>• <strong>Facteurs communs :</strong> Identifier les éléments qui se répètent</div>
                  <div>• <strong>Propriétés fonctionnelles :</strong> Utiliser la linéarité des fonctions (ln, sin, cos...)</div>
                  <div>• <strong>Structure algébrique :</strong> Reconnaître les progressions arithmétiques/géométriques</div>
                  <div>• <strong>Vérification systématique :</strong> Toujours contrôler par remultiplication</div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🔄 Exemples de généralisations</h4>
                <div className="space-y-2 text-purple-800">
                  <div>• <strong>Autres fonctions :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\sin(n\\theta), \\cos(n\\theta), e^{n\\alpha}"} /></span></div>
                  <div>• <strong>Matrices 3×3 :</strong> Extension à des dimensions supérieures</div>
                  <div>• <strong>Facteurs multiples :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"A = \\alpha \\beta C"} /></span> avec plusieurs scalaires</div>
                  <div>• <strong>Factorisation mixte :</strong> Combinaison de facteurs numériques et fonctionnels</div>
                </div>
              </div>

              <div className="bg-cyan-50 border-l-4 border-cyan-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-cyan-800 mb-3">🎓 Niveau prépa : Connexions avancées</h4>
                <div className="space-y-2 text-cyan-800">
                  <div>• <strong>Diagonalisation :</strong> Recherche de <span className="inline-block align-middle"><LatexRenderer latex={"A = PDP^{-1}"} /></span></div>
                  <div>• <strong>Décomposition en valeurs singulières :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"A = U\\Sigma V^T"} /></span></div>
                  <div>• <strong>Rang matriciel :</strong> Impact de la factorisation sur le rang</div>
                  <div>• <strong>Espaces vectoriels :</strong> Factorisation et sous-espaces propres</div>
                  <div>• <strong>Applications linéaires :</strong> Interprétation géométrique des facteurs</div>
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
            <div>
              <p className="mb-4"><strong>Soient <span className="inline-block align-middle"><LatexRenderer latex={"a > 0"} /></span> et :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} \\ln(a) & \\ln(a^2) \\\\ \\ln(a^3) & \\ln(a^4) \\end{pmatrix}"} />
              </div>
              
              <p className="text-center"><strong>Déterminer la matrice B telle que <span className="inline-block align-middle"><LatexRenderer latex={"A = \\ln(a) \\cdot B"} /></span>.</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Méthode directe</h4>
                <p className="text-purple-800">Cette version simplifiée se concentre sur l'application directe de la propriété <strong><span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^n) = n \\ln(a)"} /></span></strong> pour factoriser immédiatement.</p>
              </div>

              <div>
                <strong className="text-green-600">Résolution :</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="mb-2">En appliquant <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^n) = n \\ln(a)"} /></span> :</p>
                    <div className="text-center space-y-2">
                      <div>
                        <LatexRenderer latex={"A = \\begin{pmatrix} \\ln(a) & \\ln(a^2) \\\\ \\ln(a^3) & \\ln(a^4) \\end{pmatrix}"} />
                      </div>
                      <div>
                        <LatexRenderer latex={"= \\begin{pmatrix} \\ln(a) & 2\\ln(a) \\\\ 3\\ln(a) & 4\\ln(a) \\end{pmatrix}"} />
                      </div>
                      <div>
                        <LatexRenderer latex={"= \\ln(a) \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                <strong>Donc :</strong>
                <div className="mt-2 text-lg">
                  <LatexRenderer latex={"B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"} />
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
            <div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-3">📚 Définition : Transposée d'une matrice</h4>
                <div className="text-blue-800">
                  <p className="mb-2">Soit A une matrice de dimension <span className="inline-block align-middle"><LatexRenderer latex={"n \\times p"} /></span>. On appelle <strong>transposée</strong> de A, notée <span className="inline-block align-middle"><LatexRenderer latex={"A^T"} /></span>, la matrice de dimension <span className="inline-block align-middle"><LatexRenderer latex={"p \\times n"} /></span> dont le coefficient <span className="inline-block align-middle"><LatexRenderer latex={"(i,j)"} /></span> vaut <span className="inline-block align-middle"><LatexRenderer latex={"a_{j,i}"} /></span>.</p>
                </div>
              </div>

              <p className="mb-4"><strong>Déterminer la transposée de la matrice :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} 2 & 0 & 1 \\\\ 4 & -1 & 3 \\end{pmatrix}"} />
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Méthode de transposition</h4>
                <p className="text-purple-800">Pour obtenir <span className="inline-block align-middle"><LatexRenderer latex={"A^T"} /></span>, on transforme les <strong>lignes en colonnes</strong> : la ligne i de A devient la colonne i de <span className="inline-block align-middle"><LatexRenderer latex={"A^T"} /></span>.</p>
              </div>

              <div>
                <strong className="text-green-600">Résolution :</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="mb-3">La matrice A est de dimension <span className="inline-block align-middle"><LatexRenderer latex={"2 \\times 3"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"A^T"} /></span> sera de dimension <span className="inline-block align-middle"><LatexRenderer latex={"3 \\times 2"} /></span>.</p>
                    
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <strong>Ligne 1 de A :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(2, 0, 1)"} /></span> → <strong>Colonne 1 de <span className="inline-block align-middle"><LatexRenderer latex={"A^T"} /></span> :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} 2 \\\\ 0 \\\\ 1 \\end{pmatrix}"} /></span>
                      </div>
                      
                      <div className="bg-white p-3 rounded border">
                        <strong>Ligne 2 de A :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(4, -1, 3)"} /></span> → <strong>Colonne 2 de <span className="inline-block align-middle"><LatexRenderer latex={"A^T"} /></span> :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\begin{pmatrix} 4 \\\\ -1 \\\\ 3 \\end{pmatrix}"} /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                <strong>Il s'agit de la matrice transposée suivante :</strong>
                <div className="mt-3 text-lg">
                  <LatexRenderer latex={"A^T = \\begin{pmatrix} 2 & 4 \\\\ 0 & -1 \\\\ 1 & 3 \\end{pmatrix}"} />
                </div>
              </div>

              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-teal-800 mb-3">🔍 Vérification</h4>
                <div className="text-teal-800">
                  <p className="mb-2">On peut vérifier élément par élément :</p>
                  <div className="space-y-1">
                    <div>• <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,1} = 2 \\rightarrow (A^T)_{1,1} = 2"} /></span> ✓</div>
                    <div>• <span className="inline-block align-middle"><LatexRenderer latex={"a_{1,2} = 0 \\rightarrow (A^T)_{2,1} = 0"} /></span> ✓</div>
                    <div>• <span className="inline-block align-middle"><LatexRenderer latex={"a_{2,3} = 3 \\rightarrow (A^T)_{3,2} = 3"} /></span> ✓</div>
                  </div>
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
              <p className="mb-4"><strong>Soit :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & 2 & 0 \\\\ -3 & 2 & 3 \\end{pmatrix}"} />
              </div>
              
              <div className="space-y-3">
                <p><strong>Montrer que <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = 2A"} /></span> et en déduire <span className="inline-block align-middle"><LatexRenderer latex={"A^n"} /></span> pour tout entier naturel n.</strong></p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Objectifs : Puissances de matrices</h4>
                <p className="text-purple-800">Cet exercice combine <strong>multiplication matricielle</strong> et <strong>raisonnement par récurrence</strong>. La propriété <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = 2A"} /></span> permet de déterminer toutes les puissances de A.</p>
              </div>

              <div>
                <strong className="text-green-600">Étape 1 : Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"A^2"} /></span></strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="mb-2">Calculons <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = A \\cdot A"} /></span> :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"A^2 = \\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & 2 & 0 \\\\ -3 & 2 & 3 \\end{pmatrix} \\cdot \\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & 2 & 0 \\\\ -3 & 2 & 3 \\end{pmatrix}"} />
                    </div>
                  </div>

                  <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-800 mb-2">🔢 Calculs détaillés</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Ligne 1 :</strong></div>
                      <div>• (1,1) : <span className="inline-block align-middle"><LatexRenderer latex={"(-1)(-1) + 2(0) + 1(-3) = 1 + 0 - 3 = -2"} /></span></div>
                      <div>• (1,2) : <span className="inline-block align-middle"><LatexRenderer latex={"(-1)(2) + 2(2) + 1(2) = -2 + 4 + 2 = 4"} /></span></div>
                      <div>• (1,3) : <span className="inline-block align-middle"><LatexRenderer latex={"(-1)(1) + 2(0) + 1(3) = -1 + 0 + 3 = 2"} /></span></div>
                      
                      <div><strong>Ligne 2 :</strong></div>
                      <div>• (2,1) : <span className="inline-block align-middle"><LatexRenderer latex={"0(-1) + 2(0) + 0(-3) = 0"} /></span></div>
                      <div>• (2,2) : <span className="inline-block align-middle"><LatexRenderer latex={"0(2) + 2(2) + 0(2) = 4"} /></span></div>
                      <div>• (2,3) : <span className="inline-block align-middle"><LatexRenderer latex={"0(1) + 2(0) + 0(3) = 0"} /></span></div>
                      
                      <div><strong>Ligne 3 :</strong></div>
                      <div>• (3,1) : <span className="inline-block align-middle"><LatexRenderer latex={"(-3)(-1) + 2(0) + 3(-3) = 3 + 0 - 9 = -6"} /></span></div>
                      <div>• (3,2) : <span className="inline-block align-middle"><LatexRenderer latex={"(-3)(2) + 2(2) + 3(2) = -6 + 4 + 6 = 4"} /></span></div>
                      <div>• (3,3) : <span className="inline-block align-middle"><LatexRenderer latex={"(-3)(1) + 2(0) + 3(3) = -3 + 0 + 9 = 6"} /></span></div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Résultat</h4>
                    <div className="text-center">
                      <LatexRenderer latex={"A^2 = \\begin{pmatrix} -2 & 4 & 2 \\\\ 0 & 4 & 0 \\\\ -6 & 4 & 6 \\end{pmatrix}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 2 : Vérification de <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = 2A"} /></span></strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                    <p className="mb-2">Calculons <span className="inline-block align-middle"><LatexRenderer latex={"2A"} /></span> :</p>
                    <div className="text-center space-y-2">
                      <div>
                        <LatexRenderer latex={"2A = 2 \\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & 2 & 0 \\\\ -3 & 2 & 3 \\end{pmatrix} = \\begin{pmatrix} -2 & 4 & 2 \\\\ 0 & 4 & 0 \\\\ -6 & 4 & 6 \\end{pmatrix}"} />
                      </div>
                      <div className="text-green-700 font-semibold">
                        Donc <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = 2A"} /></span> ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">Étape 3 : Détermination de <span className="inline-block align-middle"><LatexRenderer latex={"A^n"} /></span> par récurrence</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">🎯 Raisonnement par récurrence</h4>
                    <div className="space-y-2">
                      <div><strong>Hypothèse :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"A^n = 2^{n-1} A"} /></span> pour <span className="inline-block align-middle"><LatexRenderer latex={"n \\geq 1"} /></span></div>
                      <div><strong>Initialisation :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"n = 1"} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={"A^1 = 2^0 A = A"} /></span> ✓</div>
                      <div><strong>Hérédité :</strong> Si <span className="inline-block align-middle"><LatexRenderer latex={"A^n = 2^{n-1} A"} /></span>, alors :</div>
                      <div className="ml-4">
                        <LatexRenderer latex={"A^{n+1} = A^n \\cdot A = 2^{n-1} A \\cdot A = 2^{n-1} A^2 = 2^{n-1} \\cdot 2A = 2^n A"} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                    <h4 className="font-semibold text-teal-800 mb-2">📝 Formule générale</h4>
                    <div className="text-center">
                      <LatexRenderer latex={"A^n = 2^{n-1} A = 2^{n-1} \\begin{pmatrix} -1 & 2 & 1 \\\\ 0 & 2 & 0 \\\\ -3 & 2 & 3 \\end{pmatrix}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                <strong>Donc pour tout entier naturel n ≥ 1 :</strong>
                <div className="mt-3 text-lg">
                  <LatexRenderer latex={"A^n = \\begin{pmatrix} -2^{n-1} & 2^n & 2^{n-1} \\\\ 0 & 2^n & 0 \\\\ -3 \\cdot 2^{n-1} & 2^n & 3 \\cdot 2^{n-1} \\end{pmatrix}"} />
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-amber-800 mb-3">🎓 Concepts avancés</h4>
                <div className="space-y-2 text-amber-800">
                  <div>• <strong>Matrice nilpotente :</strong> Si <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = 0"} /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex={"A^n = 0"} /></span> pour <span className="inline-block align-middle"><LatexRenderer latex={"n \\geq 2"} /></span></div>
                  <div>• <strong>Matrice idempotente :</strong> Si <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = A"} /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex={"A^n = A"} /></span> pour <span className="inline-block align-middle"><LatexRenderer latex={"n \\geq 1"} /></span></div>
                  <div>• <strong>Cas général :</strong> Ici <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = 2A"} /></span> donne <span className="inline-block align-middle"><LatexRenderer latex={"A^n = 2^{n-1} A"} /></span></div>
                  <div>• <strong>Applications :</strong> Systèmes dynamiques, suites récurrentes matricielles</div>
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
            <div>
              <p className="mb-4"><strong>Soit :</strong></p>
              
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix}"} />
              </div>
              
              <div className="space-y-3">
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Calculer <span className="inline-block align-middle"><LatexRenderer latex={"A^2"} /></span></strong></li>
                  <li><strong>Vérifier que <span className="inline-block align-middle"><LatexRenderer latex={"A^2 + A = 2I_3"} /></span></strong></li>
                  <li><strong>En déduire que A est inversible et déterminer son inverse</strong></li>
                </ol>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Objectifs : Inversion matricielle par relation algébrique</h4>
                <p className="text-purple-800">Cet exercice montre comment **déterminer l'inverse d'une matrice** sans utiliser la méthode de Gauss, mais en exploitant une **relation algébrique** entre A et <span className="inline-block align-middle"><LatexRenderer latex={"A^2"} /></span>.</p>
              </div>

              <div>
                <strong className="text-green-600">1. Calcul de <span className="inline-block align-middle"><LatexRenderer latex={"A^2"} /></span></strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                    <p className="mb-2">Calculons <span className="inline-block align-middle"><LatexRenderer latex={"A^2 = A \\cdot A"} /></span> :</p>
                    <div className="text-center">
                      <LatexRenderer latex={"A^2 = \\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix} \\cdot \\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix}"} />
                    </div>
                  </div>

                  <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-800 mb-2">🔢 Calculs détaillés</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Ligne 1 :</strong></div>
                      <div>• (1,1) : <span className="inline-block align-middle"><LatexRenderer latex={"(-1)(-1) + 1(1) + 1(1) = 1 + 1 + 1 = 3"} /></span></div>
                      <div>• (1,2) : <span className="inline-block align-middle"><LatexRenderer latex={"(-1)(1) + 1(-1) + 1(1) = -1 - 1 + 1 = -1"} /></span></div>
                      <div>• (1,3) : <span className="inline-block align-middle"><LatexRenderer latex={"(-1)(1) + 1(1) + 1(-1) = -1 + 1 - 1 = -1"} /></span></div>
                      
                      <div><strong>Ligne 2 :</strong></div>
                      <div>• (2,1) : <span className="inline-block align-middle"><LatexRenderer latex={"1(-1) + (-1)(1) + 1(1) = -1 - 1 + 1 = -1"} /></span></div>
                      <div>• (2,2) : <span className="inline-block align-middle"><LatexRenderer latex={"1(1) + (-1)(-1) + 1(1) = 1 + 1 + 1 = 3"} /></span></div>
                      <div>• (2,3) : <span className="inline-block align-middle"><LatexRenderer latex={"1(1) + (-1)(1) + 1(-1) = 1 - 1 - 1 = -1"} /></span></div>
                      
                      <div><strong>Ligne 3 :</strong></div>
                      <div>• (3,1) : <span className="inline-block align-middle"><LatexRenderer latex={"1(-1) + 1(1) + (-1)(1) = -1 + 1 - 1 = -1"} /></span></div>
                      <div>• (3,2) : <span className="inline-block align-middle"><LatexRenderer latex={"1(1) + 1(-1) + (-1)(1) = 1 - 1 - 1 = -1"} /></span></div>
                      <div>• (3,3) : <span className="inline-block align-middle"><LatexRenderer latex={"1(1) + 1(1) + (-1)(-1) = 1 + 1 + 1 = 3"} /></span></div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Résultat</h4>
                    <div className="text-center">
                      <LatexRenderer latex={"A^2 = \\begin{pmatrix} 3 & -1 & -1 \\\\ -1 & 3 & -1 \\\\ -1 & -1 & 3 \\end{pmatrix}"} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">2. Vérification de <span className="inline-block align-middle"><LatexRenderer latex={"A^2 + A = 2I_3"} /></span></strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                    <p className="mb-2">Calculons <span className="inline-block align-middle"><LatexRenderer latex={"A^2 + A"} /></span> :</p>
                    <div className="text-center space-y-2">
                      <div>
                        <LatexRenderer latex={"A^2 + A = \\begin{pmatrix} 3 & -1 & -1 \\\\ -1 & 3 & -1 \\\\ -1 & -1 & 3 \\end{pmatrix} + \\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix}"} />
                      </div>
                      <div>
                        <LatexRenderer latex={"= \\begin{pmatrix} 3-1 & -1+1 & -1+1 \\\\ -1+1 & 3-1 & -1+1 \\\\ -1+1 & -1+1 & 3-1 \\end{pmatrix} = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}"} />
                      </div>
                      <div className="text-green-700 font-semibold">
                        Donc <span className="inline-block align-middle"><LatexRenderer latex={"A^2 + A = 2I_3"} /></span> ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <strong className="text-green-600">3. Détermination de l'inverse de A</strong>
                <div className="mt-2 space-y-3">
                  <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">🎯 Méthode algébrique</h4>
                    <div className="space-y-2">
                      <div>À partir de <span className="inline-block align-middle"><LatexRenderer latex={"A^2 + A = 2I_3"} /></span>, on factorise :</div>
                      <div className="text-center">
                        <LatexRenderer latex={"A(A + I_3) = 2I_3"} />
                      </div>
                      <div>En divisant par 2 :</div>
                      <div className="text-center">
                        <LatexRenderer latex={"A \\cdot \\frac{1}{2}(A + I_3) = I_3"} />
                      </div>
                      <div>Par définition de l'inverse matriciel :</div>
                      <div className="text-center bg-yellow-100 p-2 rounded">
                        <LatexRenderer latex={"A^{-1} = \\frac{1}{2}(A + I_3)"} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-3 rounded border-l-4 border-teal-400">
                    <h4 className="font-semibold text-teal-800 mb-2">📝 Calcul de l'inverse</h4>
                    <div className="space-y-2">
                      <div className="text-center">
                        <LatexRenderer latex={"A^{-1} = \\frac{1}{2}\\left(\\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix} + \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}\\right)"} />
                      </div>
                      <div className="text-center">
                        <LatexRenderer latex={"= \\frac{1}{2} \\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ 1 & 1 & 0 \\end{pmatrix}"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-green-50 p-4 rounded border-2 border-green-200 mt-4">
                <strong>Donc l'inverse de A est :</strong>
                <div className="mt-3 text-lg">
                  <LatexRenderer latex={"A^{-1} = \\begin{pmatrix} 0 & \\frac{1}{2} & \\frac{1}{2} \\\\ \\frac{1}{2} & 0 & \\frac{1}{2} \\\\ \\frac{1}{2} & \\frac{1}{2} & 0 \\end{pmatrix}"} />
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-amber-800 mb-3">🎓 Méthodes d'inversion matricielle</h4>
                <div className="space-y-2 text-amber-800">
                  <div>• <strong>Méthode de Gauss-Jordan :</strong> Augmentation de la matrice avec <span className="inline-block align-middle"><LatexRenderer latex={"I_n"} /></span> et réduction</div>
                  <div>• <strong>Méthode des cofacteurs :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)"} /></span></div>
                  <div>• <strong>Méthode algébrique :</strong> Exploitation d'une relation polynomiale (comme ici)</div>
                  <div>• <strong>Vérification :</strong> Toujours calculer <span className="inline-block align-middle"><LatexRenderer latex={"A \\cdot A^{-1} = I_n"} /></span></div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🔍 Vérification (optionnelle)</h4>
                <div className="text-blue-800">
                  <p className="mb-2">On peut vérifier que <span className="inline-block align-middle"><LatexRenderer latex={"A \\cdot A^{-1} = I_3"} /></span> :</p>
                  <div className="text-center text-sm">
                    <LatexRenderer latex={"\\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix} \\begin{pmatrix} 0 & \\frac{1}{2} & \\frac{1}{2} \\\\ \\frac{1}{2} & 0 & \\frac{1}{2} \\\\ \\frac{1}{2} & \\frac{1}{2} & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}"} />
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

export default Chapitre7MatriceExercicesPage;