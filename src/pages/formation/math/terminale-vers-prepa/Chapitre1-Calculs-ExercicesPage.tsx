import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LatexRenderer } from '@/components/LatexRenderer';

const Chapitre1CalculsExercicesPage = () => {
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
    <div className="min-h-screen carnet-paper carnet-cours-skin">
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
            <span className="text-gray-900 font-bold">Exercices - Chapitre 1</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exercices - Chapitre 1 : Calculs
          </h1>
          <p className="text-gray-700 text-lg">
            Exercices progressifs pour maîtriser les calculs avec les puissances et les expressions algébriques.
          </p>
        </div>

        <DifficultyHeader
          level="Module 1"
          title="Simplifications d'expressions avec puissances"
          icon={BookOpen}
        />

        <ExerciseCard
          id="ex1"
          title="Exercice 1"
          difficulty="Facile"
          content={
            <div>
              <p className="mb-4"><strong>Simplifier <span className="inline-block align-middle"><LatexRenderer latex={"A"} /></span> en faisant disparaître les barres de fractions :</strong></p>
              <div className="text-center my-4">
                <LatexRenderer latex={"A = \\frac{a^4 \\times \\left( \\frac{b}{a} \\right)}{a^6 b^3} \\div \\left( a^7 b^{-5} \\right)^4 \\times \\frac{a^{-3} b^8}{a^5 b^{10}}"} />
              </div>
              <p className="text-center text-sm text-gray-600">avec <span className="inline-block align-middle"><LatexRenderer latex={"(a, b) \\in (\\mathbb{R}^*)^2"} /></span></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Méthode :</strong>
                <p className="mt-2">On commence par supprimer les parenthèses et on finit par faire passer les éléments du dénominateur vers le numérateur.</p>
              </div>
              <div>
                <strong className="text-gray-900">Étape 1 : Simplification de la fraction interne</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\frac{b}{a} = b \\times a^{-1}"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Développement de la puissance</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\left( a^7 b^{-5} \\right)^4 = a^{28} b^{-20}"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 3 : Transformation de la division en multiplication</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"A = \\frac{a^4 \\times b \\times a^{-1}}{a^6 b^3} \\times \\frac{1}{a^{28} b^{-20}} \\times \\frac{a^{-3} b^8}{a^5 b^{10}}"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 4 : Regroupement des puissances</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"A = \\frac{a^{4 -1 -6 -28 -3 -5} \\cdot b^{1 -3 +20 +8 -10}}{1}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"A = a^{-39} b^{16}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"A = a^{-39} b^{16}"} />
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
              <p className="mb-4"><strong>Factoriser le trinôme <span className="inline-block align-middle"><LatexRenderer latex={"-2x^2 + 4x + 6"} /></span>.</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Étape 1 : Calcul du discriminant</strong>
                <p className="mt-2">Ici, le trinôme a pour discriminant :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\Delta = 4^2 - 4 \\times (-2) \\times 6 = 16 + 48 = 64 = 8^2 > 0"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Calcul des racines</strong>
                <p className="mt-2">Donc le trinôme admet deux racines distinctes :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"x_1 = -1 \\quad \\text{et} \\quad x_2 = 3"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 3 : Factorisation</strong>
                <p className="mt-2">Après calculs, on a alors :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"-2x^2 + 4x + 6 = -2(x - x_1)(x - x_2)"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= -2(x - (-1))(x - 3)"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"-2x^2 + 4x + 6 = -2(x + 1)(x - 3)"} />
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
              <p className="mb-4"><strong>Pour quelles valeurs de <span className="inline-block align-middle"><LatexRenderer latex={"x"} /></span> a-t-on <span className="inline-block align-middle"><LatexRenderer latex={"-2x^2 + 4x + 6 \\geq 0"} /></span> ?</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Étape 1 : Rappel du discriminant et des racines</strong>
                <p className="mt-2">Ici, <span className="inline-block align-middle"><LatexRenderer latex={"\\Delta = 64 = 8^2 > 0"} /></span> donc le trinôme admet deux racines distinctes :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"x_1 = -1 \\quad \\text{et} \\quad x_2 = 3"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Étude du signe</strong>
                <p className="mt-2">Le trinôme est du signe de <span className="inline-block align-middle"><LatexRenderer latex={"-2"} /></span>, c'est-à-dire :</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>strictement négatif</strong> sur <span className="inline-block align-middle"><LatexRenderer latex={"\\,]-\\infty, -1[\\, \\cup \\,]3, +\\infty[\\,"} /></span>,</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>strictement positif</strong> sur <span className="inline-block align-middle"><LatexRenderer latex={"\\,]-1, 3[\\,"} /></span> (car signe de <span className="inline-block align-middle"><LatexRenderer latex={"-(-2)"} /></span>),</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>nul</strong> en <span className="inline-block align-middle"><LatexRenderer latex={"x = -1"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"x = 3"} /></span>.</span>
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <p className="mt-2">Ainsi, on a :</p>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"-2x^2 + 4x + 6 \\geq 0 \\quad \\text{pour } x \\in [-1, 3]"} />
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
              <p className="mb-4"><strong>Résoudre l'inéquation <span className="inline-block align-middle"><LatexRenderer latex={"(I_1): \\dfrac{x}{x+1} \\leq \\dfrac{x+1}{x-1}"} /></span></strong></p>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-3 mt-4">
                <p className="text-gray-800"><strong>Erreur à éviter :</strong> le produit en croix ici est interdit car on ne connaît pas le signe des expressions en présence.</p>
              </div>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Étape 1 : Transformation de l'inéquation</strong>
                <p className="mt-2">On a :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"(I_1) \\Longleftrightarrow \\frac{x}{x+1} - \\frac{x+1}{x-1} \\leq 0"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"\\Longleftrightarrow \\frac{x(x-1) - (x+1)^2}{(x-1)(x+1)} \\leq 0"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"\\Longleftrightarrow \\frac{-3x - 1}{(x-1)(x+1)} \\leq 0"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Tableau de signes</strong>
                <p className="mt-2">On obtient le tableau de signes suivant :</p>
                <div className="mt-4 overflow-x-auto">
                  <div className="flex justify-center">
                    <table className="border-collapse border border-gray-400 text-center text-sm">
                      <tbody>
                        <tr className="border border-gray-400">
                          <td className="border border-gray-400 px-3 py-2 font-semibold"><LatexRenderer latex={"x"} /></td>
                          <td className="border border-gray-400 px-3 py-2"><LatexRenderer latex={"-\\infty"} /></td>
                          <td className="border border-gray-400 px-3 py-2"><LatexRenderer latex={"-1"} /></td>
                          <td className="border border-gray-400 px-3 py-2"><LatexRenderer latex={"-\\frac{1}{3}"} /></td>
                          <td className="border border-gray-400 px-3 py-2"><LatexRenderer latex={"1"} /></td>
                          <td className="border border-gray-400 px-3 py-2"><LatexRenderer latex={"+\\infty"} /></td>
                        </tr>
                        <tr className="border border-gray-400">
                          <td className="border border-gray-400 px-3 py-2 font-semibold"><LatexRenderer latex={"-3x - 1"} /></td>
                          <td className="border border-gray-400 px-3 py-2">+</td>
                          <td className="border border-gray-400 px-3 py-2">+</td>
                          <td className="border border-gray-400 px-3 py-2">0</td>
                          <td className="border border-gray-400 px-3 py-2">-</td>
                          <td className="border border-gray-400 px-3 py-2">-</td>
                        </tr>
                        <tr className="border border-gray-400">
                          <td className="border border-gray-400 px-3 py-2 font-semibold"><LatexRenderer latex={"x - 1"} /></td>
                          <td className="border border-gray-400 px-3 py-2">-</td>
                          <td className="border border-gray-400 px-3 py-2">-</td>
                          <td className="border border-gray-400 px-3 py-2">-</td>
                          <td className="border border-gray-400 px-3 py-2">0</td>
                          <td className="border border-gray-400 px-3 py-2">+</td>
                        </tr>
                        <tr className="border border-gray-400">
                          <td className="border border-gray-400 px-3 py-2 font-semibold"><LatexRenderer latex={"x + 1"} /></td>
                          <td className="border border-gray-400 px-3 py-2">-</td>
                          <td className="border border-gray-400 px-3 py-2">0</td>
                          <td className="border border-gray-400 px-3 py-2">+</td>
                          <td className="border border-gray-400 px-3 py-2">+</td>
                          <td className="border border-gray-400 px-3 py-2">+</td>
                        </tr>
                        <tr className="border border-gray-400">
                          <td className="border border-gray-400 px-3 py-2 font-semibold"><LatexRenderer latex={"\\frac{-3x - 1}{(x - 1)(x + 1)}"} /></td>
                          <td className="border border-gray-400 px-3 py-2">+</td>
                          <td className="border border-gray-400 px-3 py-2">||</td>
                          <td className="border border-gray-400 px-3 py-2">0</td>
                          <td className="border border-gray-400 px-3 py-2">||</td>
                          <td className="border border-gray-400 px-3 py-2">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="bg-gray-50 border-l-4 border-gray-400 p-3 mt-4">
                  <p className="text-gray-800"><strong>Remarque :</strong> un dénominateur ne doit pas être nul donc il y a deux double-barres en <span className="inline-block align-middle"><LatexRenderer latex={"x = -1"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"x = 1"} /></span>.</p>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <p className="mt-2">D'où :</p>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"S = \\left[ -1, -\\frac{1}{3} \\right] \\cup \\left] 1, +\\infty \\right["} />
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
              <p className="mb-4"><strong>Simplifier <span className="inline-block align-middle"><LatexRenderer latex={"B = \\sqrt{-16yx^2 + 4x^4 + 16y^2 - 4x^2}"} /></span> en faisant disparaître le symbole <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{\\phantom{x}}"} /></span></strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Étape 1 : Réorganisation de l'expression</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"B = \\sqrt{4x^4 - 16yx^2 + 16y^2 - 4x^2}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\sqrt{(2x^2)^2 - 2 \\cdot (2x^2) \\cdot (4y) + (4y)^2} - 4x^2"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Reconnaissance d'une identité remarquable</strong>
                <p className="mt-2">On reconnaît une identité remarquable usuelle et on obtient :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"B = \\sqrt{(2x^2 - 4y)^2} - 4x^2 = |2x^2 - 4y| - 4x^2"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 3 : Distinction de cas</strong>
                <p className="mt-2 font-semibold">Distinguons alors deux cas :</p>
                
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">1er cas : si <span className="inline-block align-middle"><LatexRenderer latex={"2x^2 - 4y \\leq 0"} /></span></p>
                    <p className="mt-2 text-gray-800">On a alors :</p>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"B = -(2x^2 - 4y) - 4x^2 = 4y - 6x^2"} />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">2ème cas : si <span className="inline-block align-middle"><LatexRenderer latex={"2x^2 - 4y > 0"} /></span></p>
                    <p className="mt-2 text-gray-800">On obtient alors :</p>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"B = (2x^2 - 4y) - 4x^2 = -2x^2 - 4y"} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"B = \\begin{cases} 4y - 6x^2 & \\text{si } 2x^2 - 4y \\leq 0 \\\\ -2x^2 - 4y & \\text{si } 2x^2 - 4y > 0 \\end{cases}"} />
                </div>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-3">💡 Commentaires et rappels importants</h4>
                <div className="space-y-2 text-gray-800">
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Astuce :</strong> pour faire disparaître la racine carrée, on a l'idée de faire apparaître un carré à l'intérieur de la racine.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Il s'agit ici d'une identité remarquable de la forme <span className="inline-block align-middle"><LatexRenderer latex={"(a - b)^2"} /></span>.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Règle :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\forall a \\in \\mathbb{R}, \\quad \\sqrt{a^2} = |a|"} /></span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Attention :</strong> on ne connaît pas le signe de <span className="inline-block align-middle"><LatexRenderer latex={"2x^2 - 4y"} /></span>, donc on doit distinguer deux cas.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Remarque :</strong> les candidats qui savent faire cette distinction seront souvent récompensés par un <em>bonus</em> le jour du concours.</span>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex6"
          title="Exercice 6"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>Exprimer <span className="inline-block align-middle"><LatexRenderer latex={"A = \\dfrac{8^7 \\times (0{,}5)^4}{2^{-6} \\times 4^3 \\times 16^{\\frac{1}{2}}}"} /></span> sous forme de puissances de 2</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Étape 1 : Conversion en puissances de 2</strong>
                <p className="mt-2">On a :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"A = \\frac{(2^3)^7 \\times (2^{-1})^4}{2^{-6} \\times (2^2)^3 \\times (2^4)^{\\frac{1}{2}}}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\frac{2^{3 \\times 7} \\times 2^{-4}}{2^{-6} \\times 2^{2 \\times 3} \\times 2^{4 \\times \\frac{1}{2}}}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\frac{2^{21} \\times 2^{-4}}{2^{-6} \\times 2^6 \\times 2^2}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Simplification des exposants</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"A = \\frac{2^{21 - 4}}{2^{-6 + 6 + 2}} = \\frac{2^{17}}{2^2} = 2^{15}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"A = 2^{15}"} />
                </div>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-3">💡 Commentaires et astuces</h4>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <strong>Astuce :</strong>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"0{,}5 = \\frac{1}{2} = 2^{-1}, \\quad 4 = 2^2, \\quad 8 = 2^3, \\quad 16 = 4 \\times 4 = 2^4"} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-sm">•</span>
                      <span>On supprime les parenthèses grâce aux règles sur les puissances : <span className="inline-block align-middle"><LatexRenderer latex={"(a^m)^n = a^{mn}"} /></span></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sm">•</span>
                      <span>On fait disparaître le dénominateur en soustrayant les exposants : <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{a^m}{a^n} = a^{m - n}"} /></span></span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-sm">•</span>
                      <span>On conclut avec une puissance unique de 2.</span>
                    </div>
                  </div>
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
              <p className="mb-4"><strong>Résoudre l'équation <span className="inline-block align-middle"><LatexRenderer latex={"(E_1) : 3x^4 + 5x^2 - 2 = 0"} /></span></strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Étape 1 : Changement de variable</strong>
                <p className="mt-2">En posant le changement de variable <span className="inline-block align-middle"><LatexRenderer latex={"X = x^2"} /></span>, l'équation devient :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"3X^2 + 5X - 2 = 0"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Résolution du trinôme</strong>
                <p className="mt-2">On reconnaît un trinôme du second degré et on calcule le discriminant :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\Delta = 5^2 - 4 \\times 3 \\times (-2) = 25 + 24 = 49 > 0"} />
                </div>
                <p className="mt-2">L'équation admet donc deux racines distinctes :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"X_1 = \\frac{-5 - \\sqrt{49}}{6} = \\frac{-12}{6} = -2"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"X_2 = \\frac{-5 + \\sqrt{49}}{6} = \\frac{2}{6} = \\frac{1}{3}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 3 : Retour à la variable x</strong>
                <div className="mt-2 space-y-3">
                  <div>
                    <p>L'équation <span className="inline-block align-middle"><LatexRenderer latex={"x^2 = -2"} /></span> n'admet pas de solution réelle.</p>
                  </div>
                  <div>
                    <p>L'équation <span className="inline-block align-middle"><LatexRenderer latex={"x^2 = \\frac{1}{3}"} /></span> admet les solutions :</p>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"x = \\pm \\frac{1}{\\sqrt{3}}"} />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <p className="mt-2">D'où :</p>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"S = \\left\\{ -\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}} \\right\\}"} />
                </div>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-3">💡 Commentaires et rappels</h4>
                <div className="space-y-2 text-gray-800">
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Astuce :</strong> poser <span className="inline-block align-middle"><LatexRenderer latex={"X = x^2"} /></span> pour ramener à un trinôme du second degré.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>On calcule le discriminant <span className="inline-block align-middle"><LatexRenderer latex={"\\Delta"} /></span> pour résoudre l'équation quadratique.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>On résout ensuite les équations <span className="inline-block align-middle"><LatexRenderer latex={"x^2 = -2"} /></span> (pas de solution réelle) et <span className="inline-block align-middle"><LatexRenderer latex={"x^2 = \\frac{1}{3}"} /></span>.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><strong>Rappel :</strong> Un carré est toujours positif. Si <span className="inline-block align-middle"><LatexRenderer latex={"x^2 = a"} /></span> avec <span className="inline-block align-middle"><LatexRenderer latex={"a > 0"} /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex={"x = \\pm \\sqrt{a}"} /></span>.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span><span className="inline-block align-middle"><LatexRenderer latex={"S"} /></span> représente l'ensemble des solutions de l'équation. On écrira de préférence les solutions dans l'ordre croissant.</span>
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
              <p className="mb-4"><strong>Simplifier <span className="inline-block align-middle"><LatexRenderer latex={"C = \\dfrac{1}{\\sqrt{x^3 - 2} + \\sqrt{x^2 + 1}}"} /></span> en faisant disparaître le symbole <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{\\phantom{x}}"} /></span> du dénominateur</strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Étape 1 : Multiplication par la quantité conjuguée</strong>
                <p className="mt-2">En multipliant en haut et en bas par la quantité conjuguée, on a :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"C = \\frac{1}{\\sqrt{x^3 - 2} + \\sqrt{x^2 + 1}} \\times \\frac{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Application de l'identité remarquable</strong>
                <p className="mt-2">En reconnaissant une identité remarquable au dénominateur, il vient :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"C = \\frac{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}{(\\sqrt{x^3 - 2})^2 - (\\sqrt{x^2 + 1})^2}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"= \\frac{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}{x^3 - 2 - (x^2 + 1)}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 3 : Simplification finale</strong>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"C = \\frac{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}{x^3 - x^2 - 3}"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"C = \\frac{\\sqrt{x^3 - 2} - \\sqrt{x^2 + 1}}{x^3 - x^2 - 3}"} />
                </div>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-3">💡 Commentaires et rappels</h4>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <p><strong>Astuce :</strong> pour supprimer une somme ou une soustraction de racines carrées, on utilise la <strong>quantité conjuguée</strong>, ce qui permet d'appliquer l'identité remarquable :</p>
                    <div className="mt-2 text-center">
                      <LatexRenderer latex={"(a - b)(a + b) = a^2 - b^2"} />
                    </div>
                  </div>
                  <div>
                    <p><strong>Remarque :</strong> ne sautez aucune étape ! Beaucoup d'élèves font des erreurs de signe en supprimant les parenthèses trop rapidement.</p>
                  </div>
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
              <p className="mb-4"><strong>Résoudre l'équation <span className="inline-block align-middle"><LatexRenderer latex={"(E_2) : e^x + e^{-x} = 2"} /></span></strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Étape 1 : Transformation de l'équation</strong>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"(E_2) \\Longleftrightarrow e^x + \\frac{1}{e^x} - 2 = 0"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"\\Longleftrightarrow \\frac{(e^x)^2 - 2e^x + 1}{e^x} = 0"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Reconnaissance d'une identité remarquable</strong>
                <p className="mt-2">On reconnaît une identité remarquable :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"(E_2) \\Longleftrightarrow \\frac{(e^x - 1)^2}{e^x} = 0"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"\\Longleftrightarrow (e^x - 1)^2 = 0"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"\\Longleftrightarrow e^x = 1"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"\\Longleftrightarrow x = 0"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <p className="mt-2">D'où :</p>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"S = \\{0\\}"} />
                </div>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-3">💡 Commentaires et rappels</h4>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <p><strong>Astuce :</strong> on remarque que <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x} = \\frac{1}{e^x}"} /></span>, puis on met au même dénominateur.</p>
                  </div>
                  <div>
                    <p><strong>Rappel :</strong></p>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-sm">•</span>
                        <span><span className="inline-block align-middle"><LatexRenderer latex={"\\frac{a}{b} = 0 \\Longleftrightarrow a = 0"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"b \\neq 0"} /></span></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-sm">•</span>
                        <span><span className="inline-block align-middle"><LatexRenderer latex={"\\forall (a, b) \\in \\mathbb{R}^2, \\quad e^a = e^b \\Longleftrightarrow a = b"} /></span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex10"
          title="Exercice 10"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>Résoudre l'équation <span className="inline-block align-middle"><LatexRenderer latex={"(E_3) : x = \\sqrt{x + 2}"} /></span></strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Conditions d'existence</strong>
                <p className="mt-2">Notons tout d'abord que l'équation n'a de sens que pour <span className="inline-block align-middle"><LatexRenderer latex={"x \\geq 0"} /></span>.</p>
              </div>
              <div>
                <strong className="text-gray-900">Changement de variable</strong>
                <p className="mt-2">En posant le changement de variable <span className="inline-block align-middle"><LatexRenderer latex={"X = \\sqrt{x}"} /></span>, l'équation devient :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"X^2 - X - 2 = 0"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">1ère méthode : Résolution par discriminant</strong>
                <p className="mt-2">On reconnaît un trinôme du second degré, et on calcule le discriminant :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\Delta = 1^2 - 4 \\times 1 \\times (-2) = 9 > 0"} />
                </div>
                <p className="mt-2">L'équation admet donc deux racines distinctes :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"X_1 = \\frac{1 - \\sqrt{9}}{2} = -1"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"X_2 = \\frac{1 + \\sqrt{9}}{2} = 2"} />
                  </div>
                </div>
                <p className="mt-3">L'équation <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{x} = -1"} /></span> n'a pas de solution réelle, tandis que <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{x} = 2"} /></span> admet pour solution :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"x = 4"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">2ème méthode : Recherche d'une racine évidente</strong>
                <p className="mt-2">En remarquant que <span className="inline-block align-middle"><LatexRenderer latex={"-1"} /></span> est racine évidente de l'équation, on peut effectuer une factorisation :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"X^2 - X - 2 = 0 \\Longleftrightarrow (X + 1)(X - 2) = 0"} />
                </div>
                <p className="mt-2">L'équation admet donc deux solutions distinctes :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"X_1 = -1 \\quad \\text{et} \\quad X_2 = 2"} />
                </div>
                <p className="mt-2">Ce qui donne, comme dans la première méthode :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"S = \\{4\\}"} />
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <p className="mt-2">D'où :</p>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"S = \\{4\\}"} />
                </div>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-3">💡 Commentaires et rappels</h4>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <p><strong>Rappel :</strong> la racine carrée d'un nombre négatif n'a pas de sens dans <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}"} /></span>.</p>
                  </div>
                  <div>
                    <p>Dans cette première méthode, on procède exactement comme pour l'équation <span className="inline-block align-middle"><LatexRenderer latex={"(E_1)"} /></span> en posant une variable auxiliaire pour transformer l'équation.</p>
                  </div>
                  <div>
                    <p>La seconde méthode permet de reconnaître une racine évidente pour factoriser le trinôme, mais il faut toujours vérifier qu'elle donne une solution réelle à l'équation de départ.</p>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 p-3 rounded">
                    <p className="text-gray-700"><strong>Complément :</strong> Pour repérer les racines évidentes, effectuer des factorisations ou divisions euclidiennes, étudiez le chapitre <strong>Polynômes</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <ExerciseCard
          id="ex11"
          title="Exercice 11"
          difficulty="Moyen"
          content={
            <div>
              <p className="mb-4"><strong>Résoudre l'équation <span className="inline-block align-middle"><LatexRenderer latex={"(E_4) : \\ln(x + 3) + \\ln(x - 1) = 2 \\ln 2"} /></span></strong></p>
            </div>
          }
          correction={
            <div className="space-y-4">
              <div>
                <strong className="text-gray-900">Conditions d'existence</strong>
                <p className="mt-2">L'équation n'a de sens que si <span className="inline-block align-middle"><LatexRenderer latex={"x + 3 > 0"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"x - 1 > 0"} /></span>, soit <span className="inline-block align-middle"><LatexRenderer latex={"x > 1"} /></span>.</p>
              </div>
              <div>
                <strong className="text-gray-900">Étape 1 : Utilisation des propriétés du logarithme</strong>
                <p className="mt-2">En utilisant les propriétés du logarithme :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"\\ln(x + 3) + \\ln(x - 1) = \\ln((x + 3)(x - 1))"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"2 \\ln 2 = \\ln(2^2) = \\ln 4"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 2 : Simplification de l'équation</strong>
                <p className="mt-2">L'équation devient :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"\\ln((x + 3)(x - 1)) = \\ln 4"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"(x + 3)(x - 1) = 4"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"x^2 + 2x - 3 = 4"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"x^2 + 2x - 7 = 0"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 3 : Résolution du trinôme</strong>
                <p className="mt-2">Calculons le discriminant :</p>
                <div className="mt-2 text-center">
                  <LatexRenderer latex={"\\Delta = 2^2 - 4 \\times 1 \\times (-7) = 4 + 28 = 32"} />
                </div>
                <p className="mt-2">Les solutions sont :</p>
                <div className="mt-2 space-y-2">
                  <div className="text-center">
                    <LatexRenderer latex={"x_1 = \\frac{-2 - \\sqrt{32}}{2} = \\frac{-2 - 4\\sqrt{2}}{2} = -1 - 2\\sqrt{2}"} />
                  </div>
                  <div className="text-center">
                    <LatexRenderer latex={"x_2 = \\frac{-2 + \\sqrt{32}}{2} = \\frac{-2 + 4\\sqrt{2}}{2} = -1 + 2\\sqrt{2}"} />
                  </div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Étape 4 : Vérification des conditions</strong>
                <p className="mt-2">Vérifions que <span className="inline-block align-middle"><LatexRenderer latex={"x > 1"} /></span> :</p>
                <div className="mt-2 space-y-2">
                  <div>• <span className="inline-block align-middle"><LatexRenderer latex={"x_1 = -1 - 2\\sqrt{2} < 0 < 1"} /></span> : ne convient pas</div>
                  <div>• <span className="inline-block align-middle"><LatexRenderer latex={"x_2 = -1 + 2\\sqrt{2} \\approx -1 + 2.83 = 1.83 > 1"} /></span> : convient</div>
                </div>
              </div>
              <div>
                <strong className="text-gray-900">Résultat final :</strong>
                <div className="mt-2 text-center bg-gray-50 p-3 rounded border">
                  <LatexRenderer latex={"S = \\{-1 + 2\\sqrt{2}\\}"} />
                </div>
              </div>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                <h4 className="font-semibold text-gray-800 mb-3">💡 Commentaires et rappels</h4>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <p><strong>Propriétés utilisées :</strong></p>
                    <div className="ml-4 space-y-1">
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln a + \\ln b = \\ln(ab)"} /></span></div>
                      <div>• <span className="inline-block align-middle"><LatexRenderer latex={"n \\ln a = \\ln(a^n)"} /></span></div>
                                              <div>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln a = \\ln b \\Longleftrightarrow a = b"} /></span> (pour <span className="inline-block align-middle"><LatexRenderer latex={"a, b > 0"} /></span>)</div>
                    </div>
                  </div>
                  <div>
                    <p><strong>Attention :</strong> Toujours vérifier que les solutions trouvées respectent les conditions d'existence du logarithme.</p>
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

export default Chapitre1CalculsExercicesPage;