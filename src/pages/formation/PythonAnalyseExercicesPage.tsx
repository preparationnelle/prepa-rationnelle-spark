import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, Target, CheckCircle, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PythonModuleGuard } from '@/components/python/PythonModuleGuard';

const PythonAnalyseExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const exercises = [
    {
      id: 1,
      title: "Exercice 1 - Création de vecteurs",
      difficulty: "Facile",
      description: "En une seule ligne de commande, créer le vecteur x = (1, 1/4, 1/9, 1/16, ..., 1/100) sans saisir un à un les éléments.",
      color: "green"
    },
    {
      id: 2,
      title: "Exercice 2 - Somme géométrique",
      difficulty: "Facile",
      description: "En une seule ligne de commande, calculer la somme ∑(n=0 à 10) 1/2ⁿ",
      color: "green"
    },
    {
      id: 3,
      title: "Exercice 3 - Interprétation de commandes",
      difficulty: "Facile",
      description: "Interpréter les commandes utilisant np.ones(10) et np.cumsum() pour comprendre les opérations de cumul.",
      color: "green"
    },
    {
      id: 4,
      title: "Exercice 4 - Somme harmonique",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour calculer la somme harmonique définie par Sₙ = ∑(k=1 à n) 1/k",
      color: "orange"
    },
    {
      id: 5,
      title: "Exercice 5 - Condition d'arrêt",
      difficulty: "Moyen",
      description: "Compléter le script Python pour afficher le premier entier naturel non nul n vérifiant n²e⁻ⁿ < 10⁻⁴",
      color: "orange"
    },
    {
      id: 6,
      title: "Exercice 6 - Convergence de suite",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour trouver un entier naturel n vérifiant |uₙ - α| ≤ eps",
      color: "orange"
    },
    {
      id: 7,
      title: "Exercice 7 - Approximation par récurrence",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour renvoyer une valeur approchée de α à eps près en utilisant une suite récurrente.",
      color: "orange"
    },
    {
      id: 8,
      title: "Exercice 8 - Suite définie par récurrence",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour calculer le terme uₙ d'une suite définie par récurrence avec f(t) = 1/(1+e^t)",
      color: "orange"
    },
    {
      id: 9,
      title: "Exercice 9 - Tableau de suite",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour renvoyer un tableau contenant les m premiers termes de la suite (uₙ).",
      color: "orange"
    },
    {
      id: 10,
      title: "Exercice 10 - Approximation de série",
      difficulty: "Moyen",
      description: "Écrire un programme Python qui calcule une valeur approchée de la somme S = ∑(k=1 à ∞) 1/k² à ε près.",
      color: "orange"
    },
    {
      id: 11,
      title: "Exercice 11 - Somme exponentielle",
      difficulty: "Moyen",
      description: "Écrire une fonction Python qui calcule la somme ∑(k=1 à n) 2ᵏ/k pour un entier n donné.",
      color: "orange"
    },
    {
      id: 12,
      title: "Exercice 12 - Coefficient binomial",
      difficulty: "Moyen",
      description: "Définir une fonction binomiale(n, k) qui renvoie la valeur du coefficient binomial (n k).",
      color: "orange"
    },
    {
      id: 13,
      title: "Exercice 13 - Factorielle seuil",
      difficulty: "Moyen",
      description: "Écrire un script Python qui calcule le plus petit entier naturel k tel que k! > 1 000 000.",
      color: "orange"
    },
    {
      id: 14,
      title: "Exercice 14 - Fonction par cas",
      difficulty: "Moyen",
      description: "Écrire un script Python qui évalue une fonction g(x) définie par cas selon la valeur de x.",
      color: "orange"
    },
    {
      id: 15,
      title: "Exercice 15 - Sommes doubles",
      difficulty: "Moyen",
      description: "Calculer des sommes doubles avec boucles imbriquées : ∑∑ 1/(k+i) et ∑∑ k×i.",
      color: "orange"
    }
  ];

  if (selectedExercise) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 mb-6"
              onClick={() => setSelectedExercise(null)}
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux exercices
            </Button>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                {exercises[selectedExercise - 1].title}
              </h1>
              <Badge variant="secondary" className={`${
                exercises[selectedExercise - 1].color === 'green' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                {exercises[selectedExercise - 1].difficulty}
              </Badge>
            </div>
          </div>

          {/* Exercices 1-3 - Niveau Facile */}
          {selectedExercise === 1 && (
            <>
              {/* Exercice 1 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-amber-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 1
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Énoncé 1a */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">(a) Création de vecteur</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">En une seule ligne de commande, créer le vecteur :</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                          x = (1, 1/4, 1/9, 1/16, ..., 1/100)
                        </div>
                        <p className="text-sm mt-2 text-muted-foreground">sans saisir un à un les éléments.</p>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-1a">
                          <AccordionTrigger className="text-green-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 1(a)
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                On pourrait proposer l'instruction suivante, en faisant des opérations coefficient par coefficient :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <code>x = np.arange(1,11)**(-2)</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <p className="text-sm text-amber-800">
                                  <strong>⚠️ Attention :</strong> Python renvoie un message d'erreur, car on part d'un vecteur 
                                  <code className="bg-white px-1 rounded">np.arange(1,11)</code> d'entiers pour obtenir un vecteur 
                                  contenant a priori des flottants, ce que Python ne permet pas.
                                </p>
                              </div>
                              <p className="text-sm">
                                <strong>Solution :</strong> On va donc modifier le vecteur de départ pour qu'il contienne dès le début des flottants :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <code>x = np.arange(1.,11.)**(-2)</code>
                                </pre>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    {/* Énoncé 1b */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">(b) Calcul de somme</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Compléter la commande précédente pour qu'elle renvoie :</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                          ∑(k=1 à 10) 1/k²
                        </div>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-1b">
                          <AccordionTrigger className="text-green-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 1(b)
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Il suffit d'ajouter la fonction <code className="bg-slate-100 px-1 rounded">np.sum()</code> :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <code>np.sum(np.arange(1.,11.)**(-2))</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <p className="text-sm text-green-800">
                                  Cette commande calcule la somme des 10 premiers termes de la série harmonique d'ordre 2.
                                </p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {selectedExercise === 2 && (
            <>
              {/* Exercice 2 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-amber-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Calcul de somme géométrique</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">En une seule ligne de commande, calculer la somme :</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                          ∑(n=0 à 10) 1/2ⁿ
                        </div>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-2">
                          <AccordionTrigger className="text-green-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 2
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                La solution utilise les puissances de 2 avec NumPy :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <code>np.sum(1 / 2**np.arange(11))</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <p className="text-sm text-blue-800">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                  <li>• <code>np.arange(11)</code> crée [0, 1, 2, ..., 10]</li>
                                  <li>• <code>2**np.arange(11)</code> donne [1, 2, 4, 8, ..., 1024]</li>
                                  <li>• <code>1 / 2**np.arange(11)</code> produit [1, 1/2, 1/4, 1/8, ..., 1/1024]</li>
                                  <li>• <code>np.sum()</code> calcule la somme totale</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {selectedExercise === 3 && (
            <>
              {/* Exercice 3 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-amber-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 3
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Interprétation de commandes</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-3">Que calculent les commandes suivantes :</p>
                        
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">(a)</p>
                            <code className="text-sm">x = np.ones(10) ; y = np.cumsum(x)</code>
                          </div>
                          
                          <div className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">(b)</p>
                            <code className="text-sm">x = np.ones(10) ; y = np.sum(np.cumsum(x))</code>
                          </div>
                          
                          <div className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">(c)</p>
                            <code className="text-sm">x = np.ones(10) ; y = np.sum(np.cumsum(np.cumsum(x)))</code>
                          </div>
                        </div>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-3">
                          <AccordionTrigger className="text-green-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 3
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-semibold text-sm mb-2">(a) x = np.ones(10) ; y = np.cumsum(x)</h4>
                                <div className="bg-slate-900 rounded-lg p-4 mb-3">
                                  <pre className="text-green-400 text-sm">
                                    <code>x = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]</code>
                                    <br />
                                    <code>y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>
                                  </pre>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  <code>np.cumsum(x)</code> calcule les sommes cumulées : chaque élément est la somme des éléments précédents.
                                </p>
                              </div>

                              <div>
                                <h4 className="font-semibold text-sm mb-2">(b) x = np.ones(10) ; y = np.sum(np.cumsum(x))</h4>
                                <div className="bg-slate-900 rounded-lg p-4 mb-3">
                                  <pre className="text-green-400 text-sm">
                                    <code>np.cumsum(x) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>
                                    <br />
                                    <code>y = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55</code>
                                  </pre>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Cela calcule la somme des n premiers entiers : ∑(k=1 à 10) k = 10×11/2 = 55
                                </p>
                              </div>

                              <div>
                                <h4 className="font-semibold text-sm mb-2">(c) x = np.ones(10) ; y = np.sum(np.cumsum(np.cumsum(x)))</h4>
                                <div className="bg-slate-900 rounded-lg p-4 mb-3">
                                  <pre className="text-green-400 text-sm">
                                    <code>np.cumsum(x) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>
                                    <br />
                                    <code>np.cumsum(np.cumsum(x)) = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]</code>
                                    <br />
                                    <code>y = 1 + 3 + 6 + 10 + ... + 55 = 220</code>
                                  </pre>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Cela calcule la somme des nombres triangulaires : ∑(k=1 à 10) k(k+1)/2
                                </p>
                              </div>

                              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <p className="text-sm text-green-800">
                                  <strong>Astuce :</strong> La double somme cumulative permet de calculer des sommes de sommes, 
                                  très utile pour les séries de nombres triangulaires ou les calculs combinatoires.
                                </p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Exercices 4-9 - Niveau Moyen */}
          {selectedExercise === 4 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 4
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Somme harmonique</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                      <ul className="text-sm space-y-1 mb-3">
                        <li>• prenne en argument un entier naturel non nul n ;</li>
                        <li>• renvoie la somme harmonique définie par :</li>
                      </ul>
                      <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                        Sₙ = ∑(k=1 à n) 1/k
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-4">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 4
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici la fonction complète pour calculer la somme harmonique :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`def sommeHarmonique(n):
    S = 0
    for k in range(1, n+1):
        S += 1 / k
    return S`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On initialise S à 0</li>
                                <li>• On parcourt k de 1 à n inclus avec <code>range(1, n+1)</code></li>
                                <li>• On ajoute 1/k à S à chaque itération</li>
                                <li>• On retourne la somme totale S</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 5 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 5
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Condition d'arrêt</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">Compléter le script Python suivant pour qu'il affiche le premier entier naturel non nul n vérifiant :</p>
                      <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                        n²e⁻ⁿ &lt; 10⁻⁴
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-5">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 5
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici le script complet utilisant une boucle while :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`import numpy as np

n = 1
while (n**2) * np.exp(-n) >= 10**(-4):
    n += 1
print(n)`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On initialise n à 1</li>
                                <li>• Tant que n²e⁻ⁿ ≥ 10⁻⁴, on incrémente n</li>
                                <li>• On s'arrête dès que la condition n²e⁻ⁿ &lt; 10⁻⁴ est vérifiée</li>
                                <li>• On affiche la valeur de n trouvée</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 6 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 6
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Convergence de suite</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">On considère une suite (uₙ) et un réel α tels que :</p>
                      <div className="text-center text-lg font-mono bg-white p-3 rounded border mb-3">
                        |uₙ - α| ≤ 1/2ⁿ
                      </div>
                      <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                      <ul className="text-sm space-y-1">
                        <li>• prenne en argument un réel strictement positif eps</li>
                        <li>• renvoie un entier naturel n vérifiant : |uₙ - α| ≤ eps</li>
                      </ul>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-6">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 6
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici la fonction complète :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`def entier(eps):
    n = 0
    while 1 / (2**n) > eps:
        n += 1
    return n`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On initialise n à 0</li>
                                <li>• Tant que 1/2ⁿ &gt; eps, on incrémente n</li>
                                <li>• On s'arrête dès que 1/2ⁿ ≤ eps</li>
                                <li>• Comme |uₙ - α| ≤ 1/2ⁿ, on a alors |uₙ - α| ≤ eps</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 7 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Approximation par récurrence</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">On suppose maintenant que (uₙ) est définie par récurrence par :</p>
                      <p className="text-sm mb-2">On suppose aussi que la fonction f est déjà codée en Python.</p>
                      <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                      <ul className="text-sm space-y-1">
                        <li>• prenne en argument un réel strictement positif eps</li>
                        <li>• renvoie une valeur approchée de α à eps près.</li>
                      </ul>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-7">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 7
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici la fonction complète :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`def valApprox(eps):
    n, u = 0, 2
    while 1 / (2**n) > eps:
        n += 1
        u = f(u)
    return u`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On initialise n à 0 et u à 2 (valeur initiale supposée)</li>
                                <li>• Tant que 1/2ⁿ &gt; eps, on incrémente n et on calcule u = f(u)</li>
                                <li>• On s'arrête dès que la précision eps est atteinte</li>
                                <li>• On retourne la valeur u qui est une approximation de α</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 8 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 8
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Suite définie par récurrence</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">Soit la fonction f : t ↦ 1/(1+eᵗ).</p>
                      <p className="text-sm mb-2">On considère la suite (uₙ) définie par :</p>
                      <div className="bg-white p-3 rounded border mb-3">
                        <p className="text-sm font-mono">u₀ = 0</p>
                        <p className="text-sm font-mono">uₙ₊₁ = f(uₙ)</p>
                      </div>
                      <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                      <ul className="text-sm space-y-1">
                        <li>• prenne en argument un entier naturel n ;</li>
                        <li>• renvoie le terme uₙ de la suite.</li>
                      </ul>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-8">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 8
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici la fonction complète :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`import numpy as np

def suite(n):
    u = 0
    for k in range(n):
        u = 1 / (1 + np.exp(u))
    return u`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On initialise u à 0 (terme initial u₀)</li>
                                <li>• On itère n fois en appliquant la relation de récurrence</li>
                                <li>• À chaque étape, u devient f(u) = 1/(1+e^u)</li>
                                <li>• On retourne le terme uₙ calculé</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 9 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 9
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Tableau de suite</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">On considère la suite (uₙ) définie par :</p>
                      <div className="bg-white p-3 rounded border mb-3">
                        <p className="text-sm font-mono">u₀ = 3/2</p>
                        <p className="text-sm font-mono">uₙ₊₁ = ln(1 + uₙ) + uₙ²</p>
                      </div>
                      <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                      <ul className="text-sm space-y-1">
                        <li>• prenne en argument un entier naturel m ;</li>
                        <li>• renvoie un tableau contenant les m premiers termes de la suite (uₙ).</li>
                      </ul>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-9">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 9
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici la fonction complète :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`import numpy as np

def premSuiteUTab(m):
    T = np.zeros(m)
    T[0] = 3/2
    for i in range(1, m):
        T[i] = np.log(1 + T[i - 1]) + T[i - 1] ** 2
    return T`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On crée un tableau T de m zéros avec <code>np.zeros(m)</code></li>
                                <li>• On initialise T[0] = 3/2 (terme initial)</li>
                                <li>• On calcule chaque terme suivant avec la relation de récurrence</li>
                                <li>• On utilise <code>np.log()</code> pour le logarithme naturel</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Nouveaux exercices 10-15 */}
          {selectedExercise === 10 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 10
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Approximation de série</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">On admet que pour tout n ∈ ℕ*, on a :</p>
                      <div className="text-center text-lg font-mono bg-white p-3 rounded border mb-3">
                        0 ≤ ∑(k=1 à n) 1/k² + 1/n - S ≤ 1/n²
                      </div>
                      <p className="text-sm mb-2">où S = ∑(k=1 à ∞) 1/k²</p>
                      <p className="text-sm">Écrire un programme Python qui demande à l'utilisateur un réel positif ε (epsilon), puis calcule une valeur approchée de la somme S à ε près.</p>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-10">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 10
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici deux versions du programme :
                            </p>
                            
                            <div>
                              <h4 className="font-semibold text-sm mb-2">Version 1 - Avec NumPy</h4>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <code>{`import numpy as np

eps = float(input("Entrer la précision eps : "))
n = 1

while 1 / n**2 > eps:
    n += 1

k = np.arange(1, n + 1)
S_approx = np.sum(1 / k**2) + 1 / n

print("Valeur approchée de S :", S_approx)`}</code>
                                </pre>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-sm mb-2">Version 2 - Avec boucle</h4>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <code>{`eps = float(input("Entrer la précision eps : "))
n = 1
S = 1  # car 1/1^2 = 1

while 1 / n**2 > eps:
    n += 1
    S += 1 / n**2

S_approx = S + 1 / n
print("Valeur approchée de S :", S_approx)`}</code>
                                </pre>
                              </div>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On trouve n tel que 1/n² ≤ eps (condition d'arrêt)</li>
                                <li>• On calcule ∑(k=1 à n) 1/k²</li>
                                <li>• On ajoute 1/n pour obtenir l'approximation</li>
                                <li>• L'erreur est majorée par 1/n² ≤ eps</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 11 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 11
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Somme exponentielle</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">Écrire une fonction Python <code>somme_exponentielle(n)</code> qui prend en paramètre un entier naturel n et retourne la valeur de la somme suivante :</p>
                      <div className="text-center text-lg font-mono bg-white p-3 rounded border mb-3">
                        ∑(k=1 à n) 2ᵏ/k
                      </div>
                      <p className="text-sm">Puis écrire un script principal qui demande à l'utilisateur de saisir un entier n, et affiche la valeur de cette somme.</p>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-11">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 11
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici la fonction et le script principal :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`def somme_exponentielle(n):
    S = 0
    for k in range(1, n + 1):
        S += (2 ** k) / k
    return S

# Script principal
n = int(input("Entrer un entier n : "))
resultat = somme_exponentielle(n)
print("Somme =", resultat)`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• La fonction parcourt k de 1 à n</li>
                                <li>• À chaque étape, on calcule 2ᵏ/k et on l'ajoute à S</li>
                                <li>• <code>2 ** k</code> calcule 2 puissance k</li>
                                <li>• Le script principal appelle la fonction et affiche le résultat</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 12 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 12
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Coefficient binomial</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">Définir une fonction <code>binomiale(n, k)</code> qui renvoie la valeur du coefficient binomial (n k), défini par :</p>
                      <div className="bg-white p-3 rounded border mb-3">
                        <p className="text-sm font-mono">• 0 si k &gt; n</p>
                        <p className="text-sm font-mono">• 1 si k = 0</p>
                        <p className="text-sm font-mono">• n(n-1)...(n-k+1) / (1×2×...×k) si 1 ≤ k ≤ n</p>
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-12">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 12
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici la fonction complète :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`def binomiale(n, k):
    if k > n:
        return 0
    result = 1
    for i in range(1, k + 1):
        result = result * (n - i + 1) / i
    return int(result)`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Si k &gt; n, on retourne 0 directement</li>
                                <li>• On initialise result à 1</li>
                                <li>• On multiplie par (n-i+1) et divise par i pour chaque i de 1 à k</li>
                                <li>• Cette méthode évite les calculs de factorielles qui peuvent être très grandes</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 13 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 13
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Factorielle seuil</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">Écrire un script Python qui calcule le plus petit entier naturel k tel que la factorielle de k soit strictement supérieure à un million.</p>
                      <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                        Trouver le plus petit k tel que k! &gt; 1 000 000
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-13">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 13
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici le script complet :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`k = 1
fact = 1

while fact <= 10**6:
    k = k + 1
    fact = fact * k

print(k)`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On initialise k à 1 et fact à 1</li>
                                <li>• Tant que fact ≤ 1 000 000, on incrémente k et on calcule k!</li>
                                <li>• On calcule la factorielle de manière itérative : fact = fact × k</li>
                                <li>• Dès que k! &gt; 1 000 000, on affiche k</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                              <p className="text-sm text-green-800">
                                <strong>Résultat :</strong> Le plus petit entier k tel que k! &gt; 1 000 000 est k = 10.
                              </p>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 14 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 14
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Fonction par cas</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">On considère la fonction g définie sur ℝ par :</p>
                      <div className="bg-white p-3 rounded border mb-3">
                        <p className="text-sm font-mono">g(x) = 2 si x &lt; -1</p>
                        <p className="text-sm font-mono">g(x) = 0 si -1 ≤ x ≤ 1</p>
                        <p className="text-sm font-mono">g(x) = -2 si x &gt; 1</p>
                      </div>
                      <p className="text-sm">Écrire un script Python qui demande à l'utilisateur de saisir un réel x, puis qui affiche la valeur de g(x).</p>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-14">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 14
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p className="text-sm">
                              Voici le script complet :
                            </p>
                            <div className="bg-slate-900 rounded-lg p-4">
                              <pre className="text-green-400 text-sm">
                                <code>{`x = float(input("Entrer un réel x : "))

if x < -1:
    print("g(x) =", 2)
elif x <= 1:
    print("g(x) =", 0)
else:
    print("g(x) =", -2)`}</code>
                              </pre>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• On lit la valeur de x avec <code>float(input())</code></li>
                                <li>• On teste les conditions dans l'ordre logique</li>
                                <li>• <code>elif x &lt;= 1</code> couvre le cas -1 ≤ x ≤ 1</li>
                                <li>• <code>else</code> correspond au cas x &gt; 1</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {selectedExercise === 15 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-700">
                  <Calculator className="h-6 w-6" />
                  Exercice 15
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Sommes doubles</h3>
                    <div className="p-4 bg-slate-50 rounded-lg mb-4">
                      <p className="text-sm mb-2">Écrire des scripts Python pour calculer les sommes doubles suivantes :</p>
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded border">
                          <p className="font-semibold text-sm mb-1">(a) Somme 1 :</p>
                          <p className="text-sm font-mono">∑(k=1 à n) ∑(i=1 à k) 1/(k+i)</p>
                        </div>
                        <div className="bg-white p-3 rounded border">
                          <p className="font-semibold text-sm mb-1">(b) Somme 2 :</p>
                          <p className="text-sm font-mono">∑(k=1 à n) ∑(i=1 à p) k×i</p>
                        </div>
                      </div>
                    </div>

                    <Accordion type="single" collapsible>
                      <AccordionItem value="correction-15">
                        <AccordionTrigger className="text-orange-700 font-semibold">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Voir la correction 15
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-sm mb-2">(a) Première somme double</h4>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <code>{`n = int(input("Entrer n : "))
S = 0
for k in range(1, n + 1):
    for i in range(1, k + 1):
        S += 1 / (k + i)
print("Somme :", S)`}</code>
                                </pre>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-sm mb-2">(b) Deuxième somme double</h4>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-green-400 text-sm">
                                  <code>{`n = int(input("Entrer n : "))
p = int(input("Entrer p : "))
S = 0
for k in range(1, n + 1):
    for i in range(1, p + 1):
        S += k * i
print("Somme :", S)`}</code>
                                </pre>
                              </div>
                            </div>

                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-sm text-blue-800">
                                <strong>Explication :</strong>
                              </p>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Les boucles imbriquées permettent de parcourir tous les couples (k,i)</li>
                                <li>• Dans (a), i varie de 1 à k pour chaque k</li>
                                <li>• Dans (b), i varie de 1 à p pour chaque k</li>
                                <li>• On accumule chaque terme dans la variable S</li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation améliorée */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-amber-700">
                <Target className="h-6 w-6" />
                Navigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {selectedExercise > 1 ? (
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedExercise(selectedExercise - 1)}
                      className="flex items-center gap-2"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Exercice précédent
                    </Button>
                  ) : (
                    <div></div>
                  )}
                  
                  <Link to="/formation/python-analyse">
                    <Button variant="outline">
                      Revoir le cours
                    </Button>
                  </Link>
                  
                  {selectedExercise < exercises.length ? (
                    <Button 
                      onClick={() => setSelectedExercise(selectedExercise + 1)}
                      className="flex items-center gap-2"
                    >
                      Exercice suivant
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Link to="/formation/python-probabilites">
                      <Button className="flex items-center gap-2">
                        Module suivant : Probabilités
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground text-center">
                  Exercice {selectedExercise} sur {exercises.length}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <PythonModuleGuard moduleId={2} moduleName="Analyse">
      <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <Link to="/formation">
            <Button variant="outline" size="sm" className="flex items-center gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Retour à la formation
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Module 3 : Exercices - Analyse
            </h1>
            <p className="text-xl text-muted-foreground">
              Exercices pratiques sur l'analyse numérique avec NumPy
            </p>
          </div>
        </div>

        {/* Objectifs des exercices */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-amber-700">
              <Target className="h-6 w-6" />
              Objectifs des exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Vecteurs NumPy</Badge>
                <p className="text-sm text-muted-foreground">
                  Maîtriser la création de vecteurs avec des opérations mathématiques
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Sommes finies</Badge>
                <p className="text-sm text-muted-foreground">
                  Calculer des sommes de séries numériques avec NumPy
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Suites récurrentes</Badge>
                <p className="text-sm text-muted-foreground">
                  Implémenter des suites définies par récurrence
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liste des exercices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card 
              key={exercise.id} 
              className={`hover:shadow-lg transition-shadow cursor-pointer ${
                exercise.color === 'green' 
                  ? 'border border-green-200' 
                  : 'border border-orange-200'
              }`}
              onClick={() => setSelectedExercise(exercise.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className={`h-6 w-6 ${
                    exercise.color === 'green' ? 'text-green-600' : 'text-orange-600'
                  }`} />
                  <div>
                    <CardTitle className="text-lg">Exercice {exercise.id}</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className={`mt-1 ${
                        exercise.color === 'green' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className={`font-semibold mb-2 ${
                  exercise.color === 'green' ? 'text-green-700' : 'text-orange-700'
                }`}>
                  {exercise.title.replace(`Exercice ${exercise.id} - `, '')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {exercise.description}
                </p>
                <Button className={`w-full ${
                  exercise.color === 'green' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-orange-600 hover:bg-orange-700'
                }`}>
                  <Play className="h-4 w-4 mr-2" />
                  Commencer l'exercice
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </PythonModuleGuard>
  );
};

export default PythonAnalyseExercicesPage;
