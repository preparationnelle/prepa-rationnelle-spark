import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { fundamentalsQuizQuestions } from '@/data/pythonQuizQuestions';

const PythonFundamentalsPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
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
                Module 1 - Les Fondamentaux
              </h1>
              <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700">Module 1</Badge>
            </div>
          </div>
        </div>

        {/* Objectifs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-blue-700">Objectifs du module Python</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              <li>• Maîtriser les types fondamentaux (int, float, bool, str) et la syntaxe de base.</li>
              <li>• Écrire et tester du code simple : fonctions, conditions, boucles.</li>
              <li>• Modéliser un raisonnement mathématique sous forme de programme Python.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Contenu principal */}
        <div className="space-y-6">
          
          {/* Section 1: Variables et types */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1. Variables et types fondamentaux</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Exemple de déclaration</TableHead>
                    <TableHead>Particularités</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">int</TableCell>
                    <TableCell className="font-mono bg-gray-50">a = 17</TableCell>
                    <TableCell>Entier</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">float</TableCell>
                    <TableCell className="font-mono bg-gray-50">y = 8.5</TableCell>
                    <TableCell>Nombre à virgule</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">bool</TableCell>
                    <TableCell className="font-mono bg-gray-50">flag = (a == 2)</TableCell>
                    <TableCell>Vaut True / False</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">str</TableCell>
                    <TableCell className="font-mono bg-gray-50">nom = "ESCP"</TableCell>
                    <TableCell>Chaîne de caractères</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p><strong>Commentaires :</strong> <code className="bg-gray-100 px-1 rounded">#</code></p>
                <p><strong>;</strong> (point‑virgule) : pour enchaîner plusieurs instructions sur la même ligne.</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Variables booléennes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2. Les variables booléennes</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="boolean-vars">
                  <AccordionTrigger>Comprendre les variables booléennes</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><code className="bg-gray-100 px-2 py-1 rounded">A==2</code> signifie « A est-il égal à 2 ?»</p>
                      <p><code className="bg-gray-100 px-2 py-1 rounded">E = (A == C)</code></p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Section 3: Opérateurs numériques */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3. Opérateurs numériques incontournables + − * / // % **</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Opérateur</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Signification</TableHead>
                    <TableHead>Exemple Python</TableHead>
                    <TableHead>Résultat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">+</TableCell>
                    <TableCell>a + b</TableCell>
                    <TableCell>Addition</TableCell>
                    <TableCell className="font-mono bg-gray-50">3 + 2</TableCell>
                    <TableCell className="font-mono">5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">-</TableCell>
                    <TableCell>a - b</TableCell>
                    <TableCell>Soustraction</TableCell>
                    <TableCell className="font-mono bg-gray-50">5 - 8</TableCell>
                    <TableCell className="font-mono">-3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">*</TableCell>
                    <TableCell>a * b</TableCell>
                    <TableCell>Multiplication</TableCell>
                    <TableCell className="font-mono bg-gray-50">4 * 3</TableCell>
                    <TableCell className="font-mono">12</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">/</TableCell>
                    <TableCell>a / b</TableCell>
                    <TableCell>Division (résultat float)</TableCell>
                    <TableCell className="font-mono bg-gray-50">7 / 2</TableCell>
                    <TableCell className="font-mono">3.5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">//</TableCell>
                    <TableCell>a // b</TableCell>
                    <TableCell>Division entière (quotient sans reste)</TableCell>
                    <TableCell className="font-mono bg-gray-50">7 // 2</TableCell>
                    <TableCell className="font-mono">3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">%</TableCell>
                    <TableCell>a % b</TableCell>
                    <TableCell>Modulo (reste de la division euclidienne)</TableCell>
                    <TableCell className="font-mono bg-gray-50">17 % 6</TableCell>
                    <TableCell className="font-mono">5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-blue-600">**</TableCell>
                    <TableCell>a ** b</TableCell>
                    <TableCell>Puissance (a exposant b)</TableCell>
                    <TableCell className="font-mono bg-gray-50">2 ** 4</TableCell>
                    <TableCell className="font-mono">16</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <div className="mt-4 space-y-2">
                <p><strong>Ex. :</strong> A % B renvoie le reste de la division euclidienne (17 % 3 → 2).</p>
                <p><strong>Affectation :</strong> l'opérateur = lie une étiquette à une valeur.</p>
              </div>
            </CardContent>
          </Card>

          {/* Section 4: Print et Input */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">4. Les instructions d'affichage print et input</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="print-input">
                  <AccordionTrigger>Instructions d'affichage et de saisie</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>L'instruction <code className="bg-gray-100 px-1 rounded">print</code> permet d'afficher ce qui est entre parenthèse.</p>
                      <p><strong>Affichage :</strong> <code className="bg-gray-100 px-1 rounded">print(a)</code> ou simplement taper le nom de la variable dans l'interpréteur.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Section 5: Fonctions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5. Créer ses propres fonctions (def)</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="functions">
                  <AccordionTrigger>Définition de fonctions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>def f(x):</div>
                        <div className="ml-4">"""Calcule 7x³ + 1."""</div>
                        <div className="ml-4">return 7*x**3 + 1</div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                        <div>def fpv(x, y, z):</div>
                        <div className="ml-4">"""Exemple à 3 paramètres : 3x + 100y + 10_000z."""</div>
                        <div className="ml-4">return 3*x + 100*y + 10000*z</div>
                      </div>
                      
                      <div className="space-y-2">
                        <p>• Le corps est indenté (4 espaces recommandés).</p>
                        <p>• Toujours fournir une docstring courte et un return.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Section 6: Listes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">6. Listes</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lists">
                  <AccordionTrigger>Manipulation des listes</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
                        <div>L = [2, 4, 6]            # En extension</div>
                        <div>L.append(8)              # Ajout</div>
                        <div>L.remove(4)              # Suppression</div>
                        <div>L2 = list(range(5))      # [0,1,2,3,4]</div>
                        <div>L3 = [k**2 for k in range(5)]  # Compréhension</div>
                      </div>
                      
                      <div className="space-y-2">
                        <p>• <strong>Indexation :</strong> L[0] (premier élément).</p>
                        <p>• <strong>Opérateurs :</strong> concaténation +, répétition *, appartenance in.</p>
                        <p>• <strong>Tri :</strong> L.sort() ou sorted(L).</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Section 7: Structures de contrôle */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">7. Structures de contrôle et boucles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Structure</TableHead>
                      <TableHead>Syntaxe minimale</TableHead>
                      <TableHead>Bonnes pratiques</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Condition</TableCell>
                      <TableCell className="font-mono bg-gray-50">if x&lt;0: ... elif x==0: ... else: ...</TableCell>
                      <TableCell>Utiliser elif pour éviter l'imbrication excessive</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Boucle for</TableCell>
                      <TableCell className="font-mono bg-gray-50">for k in range(a, b, p): ...</TableCell>
                      <TableCell>Préférer range aux boucles indice manuelles</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Boucle while</TableCell>
                      <TableCell className="font-mono bg-gray-50">while condition: ...</TableCell>
                      <TableCell>Toujours prévoir une condition de sortie clairement commentée</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="examples">
                    <AccordionTrigger>Exemples classiques</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6">
                        
                        <div>
                          <h4 className="font-semibold mb-2">Boucle for - Somme des i*j pour 1 ≤ i,j ≤ n</h4>
                          <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                            <div>n = int(input("n ? "))</div>
                            <div>S = 0</div>
                            <div>for i in range(1, n+1):</div>
                            <div className="ml-4">for j in range(1, n+1):</div>
                            <div className="ml-8">S += i*j</div>
                            <div>print(S)</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Boucle while - Suite u_n = 3n + 1, premier n tel que u_n &gt; 5000</h4>
                          <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                            <div>n = 0</div>
                            <div>while 3*n + 1 &lt;= 5000:</div>
                            <div className="ml-4">n += 1</div>
                            <div>print(n, 3*n + 1)</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Tester si un nombre est pair ou impair</h4>
                          <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                            <div>n = 5</div>
                            <div>if n % 2 == 0:</div>
                            <div className="ml-4">print("n est pair")</div>
                            <div>else:</div>
                            <div className="ml-4">print("n est impair")</div>
                          </div>
                        </div>

                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>

          {/* Section 8: Sommes, produits & factorielle */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">8. Sommes, produits & factorielle</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="math-operations">
                  <AccordionTrigger>Opérations mathématiques courantes</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      
                      <div>
                        <h4 className="font-semibold mb-2">Somme 1 + … + n :</h4>
                        <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                          <div>n = 8</div>
                          <div>total = sum(range(1, n+1))</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Factorielle sans math.factorial :</h4>
                        <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                          <div>def factorielle(n):</div>
                          <div className="ml-4">p = 1</div>
                          <div className="ml-4">for i in range(1, n+1):</div>
                          <div className="ml-8">p *= i</div>
                          <div className="ml-4">return p</div>
                        </div>
                      </div>

                      <div>
                        <p><strong>Produit de 2k + 1 pour k = 0…14 :</strong> initialise A=1, multiplie dans une boucle.</p>
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Section 9: Récapitulatif */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">9. Récapitulatif des commandes utiles</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="command-summary">
                  <AccordionTrigger>Tableau récapitulatif complet</AccordionTrigger>
                  <AccordionContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Action ou test</TableHead>
                          <TableHead>Syntaxe Python</TableHead>
                          <TableHead>Exemple</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Affecter une valeur</TableCell>
                          <TableCell className="font-mono">=</TableCell>
                          <TableCell className="font-mono bg-gray-50">A = 5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Afficher une valeur</TableCell>
                          <TableCell className="font-mono">print(...)</TableCell>
                          <TableCell className="font-mono bg-gray-50">print(A)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Connaître le type</TableCell>
                          <TableCell className="font-mono">type(...)</TableCell>
                          <TableCell className="font-mono bg-gray-50">type(A)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Addition</TableCell>
                          <TableCell className="font-mono">+</TableCell>
                          <TableCell className="font-mono bg-gray-50">A + B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Soustraction</TableCell>
                          <TableCell className="font-mono">-</TableCell>
                          <TableCell className="font-mono bg-gray-50">A - B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Multiplication</TableCell>
                          <TableCell className="font-mono">*</TableCell>
                          <TableCell className="font-mono bg-gray-50">A * B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Division réelle</TableCell>
                          <TableCell className="font-mono">/</TableCell>
                          <TableCell className="font-mono bg-gray-50">A / B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Division entière</TableCell>
                          <TableCell className="font-mono">//</TableCell>
                          <TableCell className="font-mono bg-gray-50">A // B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Modulo (reste de division)</TableCell>
                          <TableCell className="font-mono">%</TableCell>
                          <TableCell className="font-mono bg-gray-50">A % B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Puissance</TableCell>
                          <TableCell className="font-mono">**</TableCell>
                          <TableCell className="font-mono bg-gray-50">A ** B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Partie entière</TableCell>
                          <TableCell className="font-mono">int(...)</TableCell>
                          <TableCell className="font-mono bg-gray-50">int(6.4)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Entrée clavier utilisateur</TableCell>
                          <TableCell className="font-mono">input(...)</TableCell>
                          <TableCell className="font-mono bg-gray-50">x = input("Entrer x : ")</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Boucle for</TableCell>
                          <TableCell className="font-mono">for ... in range(...):</TableCell>
                          <TableCell className="font-mono bg-gray-50">for i in range(1, 5, 2):</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Boucle while</TableCell>
                          <TableCell className="font-mono">while ...:</TableCell>
                          <TableCell className="font-mono bg-gray-50">while A &lt; 5:</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Condition if</TableCell>
                          <TableCell className="font-mono">if ...:</TableCell>
                          <TableCell className="font-mono bg-gray-50">if A == 3:</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Condition elif</TableCell>
                          <TableCell className="font-mono">elif ...:</TableCell>
                          <TableCell className="font-mono bg-gray-50">elif A &lt;= 6:</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Condition else</TableCell>
                          <TableCell className="font-mono">else:</TableCell>
                          <TableCell className="font-mono bg-gray-50">else:</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Inférieur</TableCell>
                          <TableCell className="font-mono">&lt;</TableCell>
                          <TableCell className="font-mono bg-gray-50">A &lt; B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Supérieur</TableCell>
                          <TableCell className="font-mono">&gt;</TableCell>
                          <TableCell className="font-mono bg-gray-50">A &gt; B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Inférieur ou égal</TableCell>
                          <TableCell className="font-mono">&lt;=</TableCell>
                          <TableCell className="font-mono bg-gray-50">A &lt;= B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Supérieur ou égal</TableCell>
                          <TableCell className="font-mono">&gt;=</TableCell>
                          <TableCell className="font-mono bg-gray-50">A &gt;= B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Égalité</TableCell>
                          <TableCell className="font-mono">==</TableCell>
                          <TableCell className="font-mono bg-gray-50">A == B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Différence</TableCell>
                          <TableCell className="font-mono">!=</TableCell>
                          <TableCell className="font-mono bg-gray-50">A != B</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tester si pair</TableCell>
                          <TableCell className="font-mono">% 2 == 0</TableCell>
                          <TableCell className="font-mono bg-gray-50">A % 2 == 0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Tester si impair</TableCell>
                          <TableCell className="font-mono">% 2 == 1</TableCell>
                          <TableCell className="font-mono bg-gray-50">A % 2 == 1</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Section 10: Exercices */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">10. Exercices conseillés (à rendre)</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="exercises">
                  <AccordionTrigger>Exercices pratiques</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 border border-blue-200 rounded">
                        <ol className="space-y-3">
                          <li><strong>1.</strong> factorielle(n) : écrire la fonction et tester n = 6 (attendu : 720).</li>
                          <li><strong>2.</strong> Fonction f(x) = exp(x²) : calculer f(6).</li>
                          <li><strong>3.</strong> Suite (u_n) définie par u_0 = 1, u_{"{n+1}"} = 3u_n + 1 : afficher les cinq premiers termes et les stocker dans une liste.</li>
                          <li><strong>4.</strong> Écrire un algorithme qui calcule la somme des entiers impairs de 1 à 29.</li>
                        </ol>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

        </div>

        {/* Quiz Section */}
        <PythonModuleQuiz 
          title="🧠 Quiz Pratique - Module 1"
          questions={fundamentalsQuizQuestions}
          moduleColor="blue"
        />

        {/* Navigation footer */}
        <div className="mt-12 flex justify-between items-center">
          <Link to="/formation">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à la formation
            </Button>
          </Link>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">Module 1 terminé</Badge>
        </div>
      </div>
    </div>
  );
};

export default PythonFundamentalsPage;
