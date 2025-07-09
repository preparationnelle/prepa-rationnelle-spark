import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Code } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const HistogramExercise: React.FC = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-purple-700">
          <BarChart3 className="h-6 w-6" />
          Exercice 3 : Représenter un histogramme avec diagramme en bâtons
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h4 className="font-semibold mb-2">Énoncé :</h4>
            <p className="text-sm text-muted-foreground mb-2">
              On considère une suite de 1000 variables aléatoires indépendantes suivant toutes la loi binomiale B(20, 0.6).
            </p>
            <p className="text-sm text-muted-foreground">
              L'objectif est de représenter la distribution empirique de ces valeurs sous forme de diagramme en bâtons, 
              en comptant le nombre d'occurrences (effectifs) de chaque valeur prise par la variable aléatoire.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <img 
            src="/lovable-uploads/046db721-d72c-427a-b4d3-8021cf4544fb.png" 
            alt="Diagramme en bâtons B(20, 0.6)" 
            className="w-full rounded-lg border shadow-sm" 
          />
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Exemple de résultat attendu : Diagramme en bâtons de la loi binomiale B(20, 0.6)
          </p>
        </div>
        
        <Accordion type="single" collapsible>
          <AccordionItem value="solution-histogram">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Solution complète avec matplotlib
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Programme complet pour générer et visualiser 1000 réalisations de B(20, 0.6).
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">
{`import matplotlib.pyplot as plt
import numpy as np
import numpy.random as rd

# 1. Génération de 1000 réalisations d'une variable B(20, 0.6)
X = rd.binomial(20, 0.6, 1000)

# 2. Valeurs possibles de la variable aléatoire : de 0 à 20
N = np.arange(0, 21)

# 3. Calcul des effectifs associés à chaque valeur
Effectif = np.zeros(21, dtype=int)
for k in range(21):
    Effectif[k] = np.sum(X == k)

# 4. Affichage du diagramme en bâtons
plt.figure(figsize=(12, 6))
plt.bar(N, Effectif, color='orange', alpha=0.8)
plt.xlabel("Valeur observée")
plt.ylabel("Effectif")
plt.title("Diagramme en bâtons de la loi binomiale B(20, 0.6)")
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.xticks(N)  # Afficher toutes les valeurs sur l'axe x
plt.show()

# Affichage des statistiques
print(f"Moyenne empirique : {np.mean(X):.2f}")
print(f"Moyenne théorique : {20 * 0.6:.2f}")
print(f"Variance empirique : {np.var(X):.2f}")
print(f"Variance théorique : {20 * 0.6 * 0.4:.2f}")`}
                  </pre>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>Explications :</strong>
                  </p>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• <code>rd.binomial(20, 0.6, 1000)</code> : génère 1000 valeurs de B(20, 0.6)</li>
                    <li>• <code>np.sum(X == k)</code> : compte les occurrences de la valeur k</li>
                    <li>• <code>plt.bar(...)</code> : trace le diagramme en bâtons</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};