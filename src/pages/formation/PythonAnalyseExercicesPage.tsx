
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PythonAnalyseExercicesPage = () => {
  return (
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
                <Badge variant="outline" className="mb-2">Cumul et analyse</Badge>
                <p className="text-sm text-muted-foreground">
                  Comprendre les fonctions de cumul et leurs applications
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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

        {/* Conseil pour la suite */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-amber-700">
              <Target className="h-6 w-6" />
              Conseils pour continuer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Ces exercices vous ont permis de maîtriser les concepts fondamentaux de l'analyse numérique avec NumPy. 
                Continuez avec les autres modules pour approfondir vos compétences.
              </p>
              <div className="flex gap-4">
                <Link to="/formation/python-analyse">
                  <Button variant="outline">
                    Revoir le cours
                  </Button>
                </Link>
                <Link to="/formation/python-probabilites">
                  <Button>
                    Module suivant : Probabilités
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PythonAnalyseExercicesPage;
