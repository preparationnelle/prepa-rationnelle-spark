import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
const PythonAnalysePage = () => {
  return <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/formation">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-500 bg-clip-text text-transparent">
                Module 3 - Analyse
              </h1>
              <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700">Module 3</Badge>
            </div>
          </div>
        </div>

        {/* Présentation générale */}
        <Card className="mb-8 border-blue-200 bg-gradient-to-br from-blue-50 to-violet-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">PRÉSENTATION GÉNÉRALE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Objectifs du module</h3>
                <p className="text-gray-700">
                  Ce module couvre les méthodes d'analyse numérique essentielles en Python : calcul de sommes et produits finis, 
                  étude des suites par récurrence, et méthodes d'approximation comme la dichotomie.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">Prérequis</h3>
                <p className="text-gray-700">
                  Maîtrise des modules 1 et 2 (fondamentaux Python et matrices NumPy). 
                  Connaissances de base en analyse mathématique.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calcul de sommes */}
        <Card className="mb-8 border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">1. CALCUL DE SOMMES EN PYTHON</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600 mb-2">Objectif</h3>
              <p className="text-gray-700 mb-4">
                Savoir calculer une somme de la forme S = ∑(k=1 à n) expression(k) en utilisant trois méthodes : boucle, liste, NumPy.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="methode-boucle">
                <AccordionTrigger className="text-gray-600">Méthode 1 – Boucle avec variable initialisée</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                      <div>n = 5</div>
                      <div>S = 0</div>
                      <div>for k in range(1, n+1):</div>
                      <div className="ml-4">S += k**2</div>
                      <div>print(S)</div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <p className="text-green-700">
                        ✔️ Méthode simple et lisible. Fonctionne dans tous les cas, même avec des doubles sommes.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="methode-liste">
                <AccordionTrigger className="text-gray-600">Méthode 2 – Liste + sum()</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                      <div>n = 5</div>
                      <div>L = [k**2 for k in range(1, n+1)]</div>
                      <div>S = sum(L)</div>
                      <div>print(S)</div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <p className="text-green-700">
                        ✔️ Permet de manipuler la liste des termes si besoin (affichage, tracé).
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="methode-numpy">
                <AccordionTrigger className="text-gray-600">Méthode 3 – Vectorisation avec NumPy</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                      <div>import numpy as np</div>
                      <div></div>
                      <div>n = 5</div>
                      <div>k = np.arange(1, n+1)</div>
                      <div>S = np.sum(k**2)</div>
                      <div>print(S)</div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <p className="text-green-700">
                        ✔️ Très rapide pour de grandes tailles. ⚠️ Moins intuitif pour débutants.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="comparatif-sommes">
                <AccordionTrigger className="text-gray-600">Comparatif synthétique</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Méthode</TableHead>
                        <TableHead>Avantages</TableHead>
                        <TableHead>Inconvénients</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Boucle for</TableCell>
                        <TableCell>Très claire, généralisable</TableCell>
                        <TableCell>Un peu plus longue</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Liste + sum()</TableCell>
                        <TableCell>Intermédiaire : claire et rapide</TableCell>
                        <TableCell>Consomme plus de mémoire</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">np.sum()</TableCell>
                        <TableCell>Très rapide pour grands n</TableCell>
                        <TableCell>Moins optimal pour petits n</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exemples-sommes">
                <AccordionTrigger className="text-gray-600">Exemples guidés</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Sommes à calculer</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• S₁ = ∑(k=1 à n) k²</li>
                        <li>• S₂ = ∑(k=1 à n) (k³ - 2k)</li>
                        <li>• S₃ = ∑(i=1 à n) ∑(j=1 à m) (i² + j³)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Méthode 1 – Boucles imbriquées</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                        <div>n = 5</div>
                        <div>m = 4</div>
                        <div></div>
                        <div>S1 = 0</div>
                        <div>for k in range(1, n+1):</div>
                        <div className="ml-4">S1 += k**2</div>
                        <div></div>
                        <div>S2 = 0</div>
                        <div>for k in range(1, n+1):</div>
                        <div className="ml-4">S2 += k**3 - 2*k</div>
                        <div></div>
                        <div>S3 = 0</div>
                        <div>for i in range(1, n+1):</div>
                        <div className="ml-4">for j in range(1, m+1):</div>
                        <div className="ml-8">S3 += i**2 + j**3</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Méthode 2 – Listes + compréhension</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                        <div>S1 = sum([k**2 for k in range(1, n+1)])</div>
                        <div>S2 = sum([k**3 - 2*k for k in range(1, n+1)])</div>
                        <div>S3 = sum([i**2 + j**3 for i in range(1, n+1) for j in range(1, m+1)])</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Méthode 3 – NumPy</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                        <div>import numpy as np</div>
                        <div></div>
                        <div>k = np.arange(1, n+1)</div>
                        <div>S1 = np.sum(k**2)</div>
                        <div>S2 = np.sum(k**3 - 2*k)</div>
                        <div>S3 = np.sum([i**2 + j**3 for i in range(1, n+1) for j in range(1, m+1)])</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Calcul de produits */}
        <Card className="mb-8 border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">2. CALCUL DE PRODUITS EN PYTHON</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600 mb-2">Objectif</h3>
              <p className="text-gray-700 mb-4">
                Savoir calculer un produit de la forme P = ∏(k=1 à n) expression(k) en utilisant une méthode par boucle, et éventuellement une version vectorisée.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="produit-boucle">
                <AccordionTrigger className="text-gray-600">Produit avec une boucle (méthode universelle)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                      <div>n = 5</div>
                      <div>P = 1</div>
                      <div>for k in range(1, n+1):</div>
                      <div className="ml-4">P *= k</div>
                      <div>print(P)</div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <p className="text-green-700">
                        ✔️ Lisible, robuste. Adaptée à toutes les situations.
                      </p>
                    </div>
                    <div className="p-3 bg-red-50 border border-red-200 rounded">
                      <p className="text-red-700">
                        ⚠️ Ne jamais initialiser à 0 : le produit serait annulé.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fonction-generique">
                <AccordionTrigger className="text-gray-600">Produit avec une fonction générique</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                      <div>def produit_fini(i0, i1, f):</div>
                      <div className="ml-4">P = 1</div>
                      <div className="ml-4">for k in range(i0, i1+1):</div>
                      <div className="ml-8">P *= f(k)</div>
                      <div className="ml-4">return P</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Exemple d'appel :</h4>
                      <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                        <div>produit_fini(1, 5, lambda k: k**2)</div>
                        <div># Renvoie 1² × 2² × 3² × 4² × 5² = 14400</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="produit-numpy">
                <AccordionTrigger className="text-gray-600">Produit avec NumPy (optionnel)</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                      <div>import numpy as np</div>
                      <div></div>
                      <div>k = np.arange(1, 6)</div>
                      <div>P = np.prod(k)</div>
                      <div>print(P)</div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded">
                      <p className="text-green-700">
                        ✔️ Plus rapide pour de grands n, mais moins souple pour des produits complexes.
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-yellow-700">
                        ⚠️ À utiliser uniquement si les termes sont tous connus à l'avance.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exemples-produits">
                <AccordionTrigger className="text-gray-600">Exemples types</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">➤ Calcul de n! (factorielle)</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>def factorielle(n):</div>
                        <div className="ml-4">P = 1</div>
                        <div className="ml-4">for k in range(1, n+1):</div>
                        <div className="ml-8">P *= k</div>
                        <div className="ml-4">return P</div>
                        <div></div>
                        <div>print(factorielle(6))  # 720</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">➤ Produit ∏(k=0 à 14) (2k+1)</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>P = 1</div>
                        <div>for k in range(0, 15):</div>
                        <div className="ml-4">P *= 2*k + 1</div>
                        <div>print(P)</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="comparatif-operations">
                <AccordionTrigger className="text-gray-600">Comparatif méthode produit vs somme</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Opération</TableHead>
                        <TableHead>Initialisation</TableHead>
                        <TableHead>Opérateur dans la boucle</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-semibold">Somme</TableCell>
                        <TableCell className="font-mono bg-gray-50">S = 0</TableCell>
                        <TableCell className="font-mono bg-gray-50">S += ...</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-semibold">Produit</TableCell>
                        <TableCell className="font-mono bg-gray-50">P = 1</TableCell>
                        <TableCell className="font-mono bg-gray-50">P *= ...</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Suites */}
        <Card className="mb-8 border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">3. SUITES EN PYTHON</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600 mb-2">Objectif</h3>
              <p className="text-gray-700 mb-4">
                Savoir simuler et analyser une suite définie par récurrence, en Python. 
                Utiliser les bons algorithmes selon le type d'exercice.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="definition-suite">
                <AccordionTrigger className="text-gray-600">Définition d'une suite par récurrence</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Structure générale</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>def terme_suite(u0, n, f):</div>
                        <div className="ml-4">u = u0</div>
                        <div className="ml-4">for _ in range(n):</div>
                        <div className="ml-8">u = f(u)</div>
                        <div className="ml-4">return u</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Exemple :</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>f = lambda u: 5*u + 3</div>
                        <div>print(terme_suite(2.4, 4, f))  # u₄</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Exemple avec conditions</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Suite définie par : u₀ = 4, u_{'{'}{'{n+1}'}{'}'}= 3u_n + 1 si u_n est pair, (u_n + 1)/2 si u_n est impair
                      </p>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>n = int(input('Entrer la valeur de n : '))</div>
                        <div>U = 4</div>
                        <div>for i in range(n):</div>
                        <div className="ml-4">if U % 2 == 0:</div>
                        <div className="ml-8">U = 3*U + 1</div>
                        <div className="ml-4">else:</div>
                        <div className="ml-8">U = (U + 1) / 2</div>
                        <div>print(U)</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="types-exercices">
                <AccordionTrigger className="text-gray-600">Types d'exercices autour des suites</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type de question</TableHead>
                        <TableHead>Structure de code</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>➤ Afficher un terme u_n</TableCell>
                        <TableCell>Boucle for simple</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>➤ Afficher les premiers termes u₀ à u_n</TableCell>
                        <TableCell>Boucle for avec affichage</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>➤ Trouver le plus petit n tel que u_n ≥ S</TableCell>
                        <TableCell>Boucle while avec incrément</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>➤ Trouver le plus grand n tel que u_n {'<'} S</TableCell>
                        <TableCell>Idem puis n - 1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>➤ Stocker les termes dans une liste</TableCell>
                        <TableCell>Liste + boucle</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>➤ Tracer la suite</TableCell>
                        <TableCell>Utiliser matplotlib</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exemples-code-suites">
                <AccordionTrigger className="text-gray-600">Exemples de code</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">➤ a) Afficher les 5 premiers termes</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>u = 2.4</div>
                        <div>f = lambda u: 5*u + 3</div>
                        <div>for i in range(5):</div>
                        <div className="ml-4">print(f"u{'{i}'} = {'{u}'}'")</div>
                        <div className="ml-4">u = f(u)</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">➤ b) Premier n tel que u_n ≥ 10 000</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>u = 2.4</div>
                        <div>n = 0</div>
                        <div>while u {'<'} 10_000:</div>
                        <div className="ml-4">u = 5*u + 3</div>
                        <div className="ml-4">n += 1</div>
                        <div>print("n =", n)</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">➤ c) Stocker dans une liste</h4>
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>U = []</div>
                        <div>u = 2.4</div>
                        <div>for _ in range(5):</div>
                        <div className="ml-4">U.append(u)</div>
                        <div className="ml-4">u = 5*u + 3</div>
                        <div>print(U)</div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fonctions-pretes">
                <AccordionTrigger className="text-gray-600">Fonctions prêtes à l'emploi</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                      <div>def plus_petit_n(u0, f, seuil):</div>
                      <div className="ml-4">u = u0</div>
                      <div className="ml-4">n = 0</div>
                      <div className="ml-4">while u {'<'} seuil:</div>
                      <div className="ml-8">u = f(u)</div>
                      <div className="ml-8">n += 1</div>
                      <div className="ml-4">return n</div>
                      <div></div>
                      <div>def plus_grand_n(u0, f, seuil):</div>
                      <div className="ml-4">u = u0</div>
                      <div className="ml-4">n = 0</div>
                      <div className="ml-4">while u {'<'} seuil:</div>
                      <div className="ml-8">u = f(u)</div>
                      <div className="ml-8">n += 1</div>
                      <div className="ml-4">return n - 1</div>
                      <div></div>
                      <div>def liste_termes(u0, N, f):</div>
                      <div className="ml-4">L = []</div>
                      <div className="ml-4">u = u0</div>
                      <div className="ml-4">for _ in range(N):</div>
                      <div className="ml-8">L.append(u)</div>
                      <div className="ml-8">u = f(u)</div>
                      <div className="ml-4">return L</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="visualisation">
                <AccordionTrigger className="text-gray-600">Visualisation avec Matplotlib</AccordionTrigger>
                <AccordionContent>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                    <div>import matplotlib.pyplot as plt</div>
                    <div></div>
                    <div>u = 2.4</div>
                    <div>f = lambda u: 5*u + 3</div>
                    <div>N = 10</div>
                    <div></div>
                    <div>U = [u]</div>
                    <div>for _ in range(1, N):</div>
                    <div className="ml-4">u = f(u)</div>
                    <div className="ml-4">U.append(u)</div>
                    <div></div>
                    <div>plt.plot(range(N), U, 'bo-')</div>
                    <div>plt.xlabel("n")</div>
                    <div>plt.ylabel("uₙ")</div>
                    <div>plt.title("Évolution de la suite")</div>
                    <div>plt.grid(True)</div>
                    <div>plt.show()</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Méthode de dichotomie */}
        <Card className="mb-8 border-blue-200 bg-gradient-to-br from-blue-50 to-violet-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">4. MÉTHODE DE DICHOTOMIE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600 mb-2">Objectif</h3>
              <p className="text-gray-700 mb-4">
                Savoir implémenter en Python une méthode rapide et rigoureuse pour approximer une racine réelle 
                d'une équation f(x) = 0 sur un intervalle donné.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="principe-mathematique">
                <AccordionTrigger className="text-blue-600">Principe mathématique</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p>La méthode de dichotomie repose sur :</p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>le théorème des valeurs intermédiaires :</strong> si f(a)·f(b) {'<'} 0, alors f s'annule entre a et b.</li>
                      <li>• <strong>une recherche par découpage successif :</strong> on remplace [a,b] par la moitié où le signe change.</li>
                    </ul>
                    <div className="p-3 bg-red-50 border border-red-200 rounded">
                      <p className="text-red-700 font-semibold">
                        Condition obligatoire : f(a)·f(b) {'<'} 0 (changement de signe)
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="algorithme-python">
                <AccordionTrigger className="text-blue-600">Algorithme Python – version commentée</AccordionTrigger>
                <AccordionContent>
                  <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                    <div>def dichotomie(f, a, b, precision=1e-6):</div>
                    
                    
                    <div className="ml-4"></div>
                    <div className="ml-4">while b - a {'>'} precision:</div>
                    <div className="ml-8">c = (a + b) / 2         # milieu de l'intervalle</div>
                    <div className="ml-8">if f(a) * f(c) {'<'}= 0:     # racine dans [a, c]</div>
                    <div className="ml-12">b = c</div>
                    <div className="ml-8">else:                   # racine dans [c, b]</div>
                    <div className="ml-12">a = c</div>
                    <div className="ml-4"></div>
                    <div className="ml-4">return (a + b) / 2          # approximation finale</div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="explication-ligne">
                <AccordionTrigger className="text-blue-600"> Explication ligne par ligne</AccordionTrigger>
                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ligne</TableHead>
                        <TableHead>Que fait-on ?</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-mono bg-gray-50">assert f(a)*f(b){'<'}0</TableCell>
                        <TableCell>Vérifie le prérequis mathématique</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono bg-gray-50">while b - a {'>'} precision</TableCell>
                        <TableCell>Tant que l'intervalle est trop large</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono bg-gray-50">c = (a + b)/2</TableCell>
                        <TableCell>On coupe l'intervalle en deux</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono bg-gray-50">if f(a)*f(c) {'<'}= 0</TableCell>
                        <TableCell>Si changement de signe entre a et c</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono bg-gray-50">b = c ou a = c</TableCell>
                        <TableCell>On garde l'intervalle où la racine se trouve</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-mono bg-gray-50">return</TableCell>
                        <TableCell>On retourne le milieu comme approximation finale</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exemple-utilisation">
                <AccordionTrigger className="text-blue-600"> Exemple d'utilisation</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Problème</h4>
                      <p>Résoudre f(x) = x³ - 2x - 1 = 0 sur l'intervalle [1,2]</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                      <div>def f(x):</div>
                      <div className="ml-4">return x**3 - 2*x - 1</div>
                      <div></div>
                      <div>r = dichotomie(f, 1, 2, 1e-6)</div>
                      <div>print(r)  # ≈ 1.618</div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Exercices d'entraînement */}
        <Card className="mb-8 border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-700">EXERCICES D'ENTRAÎNEMENT</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                <h4 className="font-semibold text-blue-800 mb-2">Exercices recommandés</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>1. Calculer ∑(k=0 à 14) (2k+1)</li>
                  <li>2. Calculer ∑(k=1 à n) 1/(k(k+1))</li>
                  <li>3. Calculer P = ∏(k=1 à n) (k+1)/k (doit valoir n+1)</li>
                  <li>4. Calculer ∏(k=1 à n) (1 + 1/k²)</li>
                  <li>5. Étudier la suite u₀ = 2, u_{'{n+1}'} = (u_n + 2/u_n)/2</li>
                  <li>6. Approximer √2 par dichotomie sur [1,2]</li>
                </ul>
              </div>

              <div className="p-4 bg-violet-50 border border-violet-200 rounded">
                <h4 className="font-semibold text-violet-800 mb-2">Fonctions génériques à implémenter</h4>
                <ul className="space-y-1 text-violet-700">
                  <li>• <code className="bg-violet-100 px-1 rounded">somme_finie(i0, i1, f)</code></li>
                  <li>• <code className="bg-violet-100 px-1 rounded">produit_general(i0, i1, expression)</code></li>
                  <li>• <code className="bg-violet-100 px-1 rounded">suite_convergente(u0, f, precision)</code></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation footer */}
        <div className="mt-12 flex justify-between items-center">
          <Link to="/formation">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la formation
            </Button>
          </Link>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">Module 3 terminé</Badge>
        </div>
      </div>
    </div>;
};
export default PythonAnalysePage;