import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const AdditionalExercises: React.FC = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-purple-700">
          <Code className="h-6 w-6" />
          Exercices supplémentaires
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="exercice-2d">
            <AccordionTrigger>
              Exercice 4 : Marche aléatoire 2D
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Simuler une marche aléatoire dans le plan : à chaque pas, le mobile se déplace aléatoirement dans une des 4 directions (Nord, Sud, Est, Ouest).
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">
{`def marche_2d(n):
    x, y = 0, 0
    for _ in range(n):
        direction = rd.randint(0, 4)
        if direction == 0:    # Nord
            y += 1
        elif direction == 1:  # Sud
            y -= 1
        elif direction == 2:  # Est
            x += 1
        else:                 # Ouest
            x -= 1
    return x, y

def distance_origine(n):
    x, y = marche_2d(n)
    return (x**2 + y**2)**0.5

# Test
print(f"Position finale après 100 pas : {marche_2d(100)}")
print(f"Distance à l'origine : {distance_origine(100):.2f}")`}
                  </pre>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="exercice-ruine">
            <AccordionTrigger>
              Exercice 5 : Ruine du joueur
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Un joueur commence avec k euros. À chaque partie, il gagne 1€ avec probabilité p ou perd 1€ avec probabilité (1-p). Il s'arrête quand il a 0€ (ruine) ou N€ (fortune).
                </p>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">
{`def ruine_joueur(k, N, p):
    """
    k : capital initial
    N : objectif de fortune
    p : probabilité de gagner 1€
    """
    capital = k
    while 0 < capital < N:
        if rd.random() < p:
            capital += 1
        else:
            capital -= 1
    return capital == N  # True si fortune atteinte, False si ruine

def proba_fortune(k, N, p, essais=10000):
    succes = sum(ruine_joueur(k, N, p) for _ in range(essais))
    return succes / essais

# Test : probabilité d'atteindre 10€ en partant de 5€
print(f"Probabilité de fortune : {proba_fortune(5, 10, 0.5):.3f}")`}
                  </pre>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};