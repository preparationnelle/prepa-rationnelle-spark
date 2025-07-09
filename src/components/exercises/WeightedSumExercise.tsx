import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Code } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const WeightedSumExercise: React.FC = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-purple-700">
          <BarChart3 className="h-6 w-6" />
          Exercice 2 : Simulation d'une somme pondérée de variables aléatoires
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <img 
            src="/lovable-uploads/06b8c246-77bb-4ba6-a942-3a9e7dfaf7c4.png" 
            alt="Énoncé somme pondérée" 
            className="w-full rounded-lg border shadow-sm" 
          />
        </div>
        
        <Accordion type="single" collapsible>
          <AccordionItem value="solution-simul">
            <AccordionTrigger className="text-left">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Solution : Fonction simul(n)
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Fonction qui calcule une réalisation de la variable aléatoire W_n = Σ(X_k/k) pour k=1 à n.
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">
{`import numpy as np
import numpy.random as rd

def simul(n):
    W = 0
    for k in range(1, n + 1):
        u = 2 * rd.binomial(1, 0.5) - 1  # génère ±1 avec probabilité 1/2
        W += u / k
    return W

# Test de la fonction
print(f"W_10 = {simul(10):.4f}")
print(f"W_100 = {simul(100):.4f}")

# Simulation de plusieurs réalisations
realisations = [simul(50) for _ in range(10)]
print(f"10 réalisations de W_50 : {realisations}")`}
                  </pre>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>Note :</strong> Cette somme converge presque sûrement car Σ(1/k) diverge mais Σ(Var(X_k/k)) = Σ(1/k²) converge.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};