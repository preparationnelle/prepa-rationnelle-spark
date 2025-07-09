import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, Code, Activity, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PythonProbabilitesExercicesPage = () => {
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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Exercices Python - Probabilités
            </h1>
            <p className="text-xl text-muted-foreground">
              Exercices pratiques de simulation et de modélisation probabiliste
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <Badge variant="secondary">Module 3</Badge>
              <Badge variant="outline">Exercices corrigés</Badge>
              <Badge className="bg-purple-600">Probabilités</Badge>
            </div>
          </div>
        </div>

        {/* Exercice principal: Marche aléatoire */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Activity className="h-6 w-6" />
              Exercice : Marche aléatoire simple sur ℤ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/13c4b897-93dd-4ee7-912e-164d20d70848.png" 
                alt="Énoncé marche aléatoire" 
                className="w-full rounded-lg border shadow-sm" 
              />
            </div>
            
            <Accordion type="single" collapsible>
              <AccordionItem value="question-a">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4" />
                    Question 1 : Écrire la fonction position_finale(n)
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Fonction qui simule les n déplacements du mobile et renvoie la valeur de X_n.
                    </p>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`import random as rd

def position_finale(n):
    pos = 0  # Initialisation de la position à 0
    for i in range(n):
        if rd.random() < 0.5: 
            pos += 1
        else:                 
            pos -= 1
    return pos

# Test
print(position_finale(10))`}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="question-b">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Question 2 : Marche biaisée avec probabilité p
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Généralisation avec une probabilité p d'avancer et (1-p) de reculer.
                    </p>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`def position_biaisee(n, p):
    pos = 0
    for i in range(n):
        if rd.random() < p:  # p chance d'avancer
            pos += 1
        else:
            pos -= 1
    return pos

# Test avec une marche biaisée vers la droite
print(position_biaisee(10, p=0.7))`}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="question-c">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Question 3 : Compter les passages à l'origine
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Combien de fois le mobile repasse par l'origine (position 0) pendant la marche ?
                    </p>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`def passages_origine(n):
    pos = 0
    compte = 0
    for i in range(n):
        if rd.random() < 0.5:
            pos += 1
        else:
            pos -= 1
        if pos == 0:
            compte += 1
    return compte

# Test
print(passages_origine(100))`}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="question-d">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Question 4 : Temps de sortie d'un intervalle
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      On simule la marche jusqu'à ce que le mobile sorte de l'intervalle [-borne, +borne].
                    </p>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`def temps_sortie(borne, pos=0):
    n = 0
    while -borne <= pos <= borne:
        if rd.random() < 0.5:
            pos += 1
        else:
            pos -= 1
        n += 1
    return n

# Test avec borne = 5
print(temps_sortie(5))`}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="question-e">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Question 5 : Moyenne empirique sur plusieurs essais
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Simuler plusieurs marches et calculer la moyenne des positions finales.
                    </p>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`def moyenne_position(n, essais=1000):
    total = 0
    for _ in range(essais):
        pos = 0
        for i in range(n):
            if rd.random() < 0.5:
                pos += 1
            else:
                pos -= 1
        total += pos
    return total / essais

# Test : la moyenne devrait être proche de 0
print(moyenne_position(10, 10000))`}
                      </pre>
                    </div>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <strong>Théorie :</strong> Pour une marche équilibrée (p=0.5), l'espérance de la position finale est 0.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="question-f">
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Question 6 : Estimation empirique vs théorique
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Comparer les probabilités théoriques et empiriques pour chaque position finale possible.
                    </p>
                    <div className="bg-slate-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`from math import comb

def estimation_empirique(n, essais=50000):
    # Simulation
    positions = []
    for _ in range(essais):
        pos = 0
        for i in range(n):
            if rd.random() < 0.5:
                pos += 1
            else:
                pos -= 1
        positions.append(pos)
    
    # Comparaison théorie/empirique
    print(f"n = {n}, essais={essais}")
    print(" k  |  P_théorie  |  P_empirique")
    
    for k in range(-n, n+1, 2):  # seulement les valeurs de même parité que n
        p_theo = comb(n, (n+k)//2) / (2**n)
        p_emp = sum(1 for pos in positions if pos == k) / essais
        print(f"{k:3d} |    {p_theo:.5f} |    {p_emp:.5f}")

# Test
estimation_empirique(10, essais=50000)`}
                      </pre>
                    </div>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800">
                        <strong>Formule théorique :</strong> P(X_n = k) = C(n, (n+k)/2) / 2^n pour k de même parité que n.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Exercices supplémentaires */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Code className="h-6 w-6" />
              Exercices supplémentaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="exercice-2">
                <AccordionTrigger>
                  Exercice 2 : Marche aléatoire 2D
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

              <AccordionItem value="exercice-3">
                <AccordionTrigger>
                  Exercice 3 : Ruine du joueur
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

        {/* Conseils et techniques */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Target className="h-6 w-6" />
              Conseils et techniques
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">🎯 Simulation efficace</h4>
                <p className="text-sm text-blue-700">
                  Pour les grandes simulations, utilisez NumPy : <code>rd.choice([-1, 1], size=n)</code>
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">📊 Visualisation</h4>
                <p className="text-sm text-green-700">
                  Tracez les trajectoires avec <code>plt.plot()</code> pour mieux comprendre les marches
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">🔢 Convergence</h4>
                <p className="text-sm text-purple-700">
                  Augmentez le nombre d'essais pour des estimations plus précises
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">⚡ Optimisation</h4>
                <p className="text-sm text-orange-700">
                  Vectorisez vos calculs avec NumPy pour améliorer les performances
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PythonProbabilitesExercicesPage;