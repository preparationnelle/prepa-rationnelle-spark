
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Target, Book, CheckCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonProbabilitesExercicesPage = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const exercices = [
    {
      id: 1,
      title: "Loi d'arrêt aléatoire",
      description: "Simuler X = rang d'obtention de deux Pile consécutifs au pile ou face.",
      difficulty: "Intermédiaire",
      badge: "Simulation"
    },
    {
      id: 2,
      title: "Processus de renforcement",
      description: "Simuler le processus de renforcement dans une urne avec règles spécifiques.",
      difficulty: "Intermédiaire", 
      badge: "Algorithme"
    },
    {
      id: 3,
      title: "Tirages dans une urne",
      description: "Simuler Z = rang d'apparition de la première boule rouge et Y_n = nombre de boules vertes.",
      difficulty: "Intermédiaire",
      badge: "Probabilités"
    },
    {
      id: 4,
      title: "Simulation d'un événement",
      description: "Simuler la réalisation d'un événement A de probabilité p avec Python.",
      difficulty: "Intermédiaire",
      badge: "Fondamental"
    },
    {
      id: 5,
      title: "Sauts aléatoires dans un escalier",
      description: "Un animal gravit un escalier de n marches en montant 1 ou 2 marches à chaque bond.",
      difficulty: "Intermédiaire",
      badge: "Simulation"
    },
    {
      id: 6,
      title: "Simulation de lois géométriques",
      description: "Estimer P(X = 2Y) où X et Y suivent des lois géométriques par méthode de Monte-Carlo.",
      difficulty: "Intermédiaire",
      badge: "Monte-Carlo"
    }
  ];

  const scrollToExercice = (exerciceId: number) => {
    const element = document.getElementById(`exercice-${exerciceId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Module 4 : Exercices - Probabilités et Simulations
            </h1>
            <p className="text-xl text-muted-foreground">
              Maîtrisez la simulation de processus aléatoires avec Python
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Target className="h-6 w-6" />
              Objectifs du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Simulation</Badge>
                <p className="text-sm text-muted-foreground">
                  Maîtriser la simulation de processus aléatoires
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Lois de probabilité</Badge>
                <p className="text-sm text-muted-foreground">
                  Simuler et analyser des lois de probabilité
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Monte-Carlo</Badge>
                <p className="text-sm text-muted-foreground">
                  Appliquer les méthodes de Monte-Carlo
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grille des exercices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {exercices.map((exercice) => (
            <Card key={exercice.id} className="border-2 hover:border-green-300 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <Book className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-green-700">
                        Exercice {exercice.id}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1 bg-green-100 text-green-800 border-green-300">
                        {exercice.difficulty}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    {exercice.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-gray-900">{exercice.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {exercice.description}
                </p>
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => scrollToExercice(exercice.id)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Commencer l'exercice
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Détails des exercices */}
        <div className="space-y-8">
          {/* Exercice 1 */}
          <Card id="exercice-1" className="border border-orange-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-orange-700">
                  <Book className="h-6 w-6" />
                  Exercice 1 : Loi d'arrêt aléatoire
                </CardTitle>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Intermédiaire
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">📋 Énoncé</h4>
                <p className="text-gray-700 mb-4">
                  Simuler X = rang d'obtention de deux Pile consécutifs au pile ou face.
                </p>
                <p className="text-sm text-gray-600">
                  On lance une pièce de monnaie jusqu'à obtenir deux "Pile" consécutifs. 
                  La variable X représente le nombre total de lancers nécessaires.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">💻 Code de départ</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <pre>{`import random as rd

def simulX():
    # TODO: Compléter la fonction
    # Simuler les lancers jusqu'à obtenir deux Pile consécutifs
    # Retourner le nombre de lancers effectués
    pass`}</pre>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="correction-1">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Voir la correction</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-green-700">✅ Solution</h5>
                        <div className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">{`import random as rd

def simulX():
    tirs = 0
    pile = 0  # Compteur de Pile consécutifs
    
    while pile < 2:
        if rd.random() < 1/2:  # Pile
            pile += 1
        else:  # Face
            pile = 0  # Remettre le compteur à zéro
        tirs += 1
    
    return tirs

# Test de la fonction
print(f"Nombre de lancers : {simulX()}")`}</pre>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-slate-800 border-slate-700 text-slate-300"
                            onClick={() => copyToClipboard(`import random as rd

def simulX():
    tirs = 0
    pile = 0  # Compteur de Pile consécutifs
    
    while pile < 2:
        if rd.random() < 1/2:  # Pile
            pile += 1
        else:  # Face
            pile = 0  # Remettre le compteur à zéro
        tirs += 1
    
    return tirs

# Test de la fonction
print(f"Nombre de lancers : {simulX()}")`)}
                          >
                            Copier le code
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-700">📚 Explications détaillées</h5>
                        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                          <p><strong>Logique de l'algorithme :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><code>pile</code> : compteur de Pile consécutifs (0, 1 ou 2)</li>
                            <li><code>tirs</code> : nombre total de lancers effectués</li>
                            <li>Si on obtient Pile : on incrémente le compteur</li>
                            <li>Si on obtient Face : on remet le compteur à 0</li>
                            <li>On s'arrête quand <code>pile = 2</code></li>
                          </ul>
                          <p><strong>Points clés :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>La probabilité théorique E[X] = 6 lancers en moyenne</li>
                            <li>Important de remettre le compteur à 0 après un Face</li>
                            <li>Utilisation de <code>rd.random() &lt; 0.5</code> pour simuler pile ou face</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Exercice 2 */}
          <Card id="exercice-2" className="border border-orange-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-orange-700">
                  <Book className="h-6 w-6" />
                  Exercice 2 : Processus de renforcement
                </CardTitle>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Intermédiaire
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">📋 Énoncé</h4>
                <p className="text-gray-700 mb-4">
                  Simuler le processus de renforcement dans une urne avec règles spécifiques.
                </p>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Règles :</strong></p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Urne initiale : 1 boule rouge, 1 boule verte</li>
                    <li>Si boule rouge tirée : ajouter 2 boules rouges</li>
                    <li>Si boule verte tirée : ajouter 1 boule rouge et 2 boules vertes</li>
                    <li>Simuler Y_n = rang d'obtention de n boules vertes</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">💻 Code de départ</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <pre>{`import random as rd

def simulY(n):
    # TODO: Compléter la fonction
    # Simuler le processus de renforcement
    # Retourner le rang d'obtention de n boules vertes
    pass`}</pre>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="correction-2">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Voir la correction</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-green-700">✅ Solution</h5>
                        <div className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">{`import random as rd

def simulY(n):
    r = 1  # nombre de boules rouges
    v = 1  # nombre de boules vertes
    Y = 0  # nombre de tirages
    
    while v < n:
        # Tirer une boule au hasard
        numero_boule = rd.randint(1, r + v)
        
        if numero_boule <= r:  # Boule rouge
            r += 2
        else:  # Boule verte
            r += 1
            v += 2
        
        Y += 1
    
    return Y

# Test de la fonction
print(f"Rang d'obtention de 5 boules vertes : {simulY(5)}")`}</pre>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-slate-800 border-slate-700 text-slate-300"
                            onClick={() => copyToClipboard(`import random as rd

def simulY(n):
    r = 1  # nombre de boules rouges
    v = 1  # nombre de boules vertes
    Y = 0  # nombre de tirages
    
    while v < n:
        # Tirer une boule au hasard
        numero_boule = rd.randint(1, r + v)
        
        if numero_boule <= r:  # Boule rouge
            r += 2
        else:  # Boule verte
            r += 1
            v += 2
        
        Y += 1
    
    return Y

# Test de la fonction
print(f"Rang d'obtention de 5 boules vertes : {simulY(5)}")`)}
                          >
                            Copier le code
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-700">📚 Explications détaillées</h5>
                        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                          <p><strong>Mécanisme du processus :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>On tire une boule parmi les r+v boules présentes</li>
                            <li>Les boules 1 à r sont rouges, les boules r+1 à r+v sont vertes</li>
                            <li>Le renforcement favorise la couleur tirée</li>
                          </ul>
                          <p><strong>Règles de renforcement :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Rouge → +2 rouges (renforcement fort)</li>
                            <li>Verte → +1 rouge + 2 vertes (renforcement modéré)</li>
                            <li>Cette asymétrie influence la dynamique du processus</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Exercice 3 */}
          <Card id="exercice-3" className="border border-orange-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-orange-700">
                  <Book className="h-6 w-6" />
                  Exercice 3 : Tirages dans une urne
                </CardTitle>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Intermédiaire
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">📋 Énoncé</h4>
                <p className="text-gray-700 mb-4">
                  Simuler Z = rang d'apparition de la première boule rouge et Y_n = nombre de boules vertes parmi les n premiers tirages.
                </p>
                <div className="text-sm text-gray-600">
                  <p>Urne contenant a boules rouges et b boules vertes (tirages avec remise).</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">💻 Code de départ</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <pre>{`import random as rd

def simulZ(a, b):
    # TODO: Simuler le rang d'apparition de la première boule rouge
    pass

def simulY(n, a, b):
    # TODO: Simuler le nombre de boules vertes parmi n tirages
    pass`}</pre>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="correction-3">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Voir la correction</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-green-700">✅ Solution</h5>
                        <div className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">{`import random as rd

def simulZ(a, b):
    """Simuler le rang d'apparition de la première boule rouge"""
    Z = 1
    # Continuer tant qu'on tire des boules vertes
    while rd.random() < b / (a + b):
        Z += 1
    return Z

def simulY(n, a, b):
    """Simuler le nombre de boules vertes parmi n tirages"""
    Y = 0
    for k in range(n):
        if rd.random() < b / (a + b):  # Boule verte
            Y += 1
    return Y

# Tests des fonctions
print(f"Première boule rouge au rang : {simulZ(3, 7)}")
print(f"Nombre de boules vertes sur 10 tirages : {simulY(10, 3, 7)}")`}</pre>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-slate-800 border-slate-700 text-slate-300"
                            onClick={() => copyToClipboard(`import random as rd

def simulZ(a, b):
    """Simuler le rang d'apparition de la première boule rouge"""
    Z = 1
    # Continuer tant qu'on tire des boules vertes
    while rd.random() < b / (a + b):
        Z += 1
    return Z

def simulY(n, a, b):
    """Simuler le nombre de boules vertes parmi n tirages"""
    Y = 0
    for k in range(n):
        if rd.random() < b / (a + b):  # Boule verte
            Y += 1
    return Y

# Tests des fonctions
print(f"Première boule rouge au rang : {simulZ(3, 7)}")
print(f"Nombre de boules vertes sur 10 tirages : {simulY(10, 3, 7)}")`)}
                          >
                            Copier le code
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-700">📚 Explications détaillées</h5>
                        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                          <p><strong>Probabilités et lois :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>P(boule verte) = b/(a+b), P(boule rouge) = a/(a+b)</li>
                            <li>Z suit une loi géométrique de paramètre p = a/(a+b)</li>
                            <li>Y suit une loi binomiale B(n, b/(a+b))</li>
                          </ul>
                          <p><strong>Algorithmes :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><code>simulZ</code> : on tire jusqu'à la première rouge</li>
                            <li><code>simulY</code> : on compte les vertes sur n tirages fixes</li>
                            <li>Espérances théoriques : E[Z] = (a+b)/a, E[Y] = nb/(a+b)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Exercice 4 */}
          <Card id="exercice-4" className="border border-orange-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-orange-700">
                  <Book className="h-6 w-6" />
                  Exercice 4 : Simulation d'un événement
                </CardTitle>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Intermédiaire
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">📋 Énoncé</h4>
                <p className="text-gray-700 mb-4">
                  Simuler la réalisation d'un événement A de probabilité p avec Python.
                </p>
                <div className="text-sm text-gray-600">
                  <p>Quelle commande Python utiliser pour simuler un événement de probabilité p ?</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">💻 Code de départ</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <pre>{`import random as rd

def simuler_evenement(p):
    # TODO: Retourner True si l'événement A se réalise, False sinon
    pass`}</pre>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="correction-4">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Voir la correction</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-green-700">✅ Solution</h5>
                        <div className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">{`import random as rd

def simuler_evenement(p):
    """Simuler un événement de probabilité p"""
    return rd.random() < p

# Exemples d'utilisation
print(f"Événement p=0.3 : {simuler_evenement(0.3)}")
print(f"Événement p=0.7 : {simuler_evenement(0.7)}")

# Test de fréquence
def test_frequence(p, n=10000):
    """Tester la fréquence sur n essais"""
    succès = sum(simuler_evenement(p) for _ in range(n))
    fréquence = succès / n
    print(f"Fréquence observée : {fréquence:.3f} (théorique : {p})")

test_frequence(0.3)`}</pre>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-slate-800 border-slate-700 text-slate-300"
                            onClick={() => copyToClipboard(`import random as rd

def simuler_evenement(p):
    """Simuler un événement de probabilité p"""
    return rd.random() < p

# Exemples d'utilisation
print(f"Événement p=0.3 : {simuler_evenement(0.3)}")
print(f"Événement p=0.7 : {simuler_evenement(0.7)}")

# Test de fréquence
def test_frequence(p, n=10000):
    """Tester la fréquence sur n essais"""
    succès = sum(simuler_evenement(p) for _ in range(n))
    fréquence = succès / n
    print(f"Fréquence observée : {fréquence:.3f} (théorique : {p})")

test_frequence(0.3)`)}
                          >
                            Copier le code
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-700">📚 Explications détaillées</h5>
                        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                          <p><strong>Principe fondamental :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li><code>rd.random()</code> génère un nombre aléatoire uniforme dans [0,1)</li>
                            <li>P(rd.random() &lt; p) = p par définition de la loi uniforme</li>
                            <li>C'est la méthode standard pour simuler un événement de Bernoulli</li>
                          </ul>
                          <p><strong>Applications :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Base de toutes les simulations probabilistes</li>
                            <li>Simulation de lois de Bernoulli, binomiales, géométriques...</li>
                            <li>Vérification par la loi des grands nombres</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Exercice 5 */}
          <Card id="exercice-5" className="border border-orange-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-orange-700">
                  <Book className="h-6 w-6" />
                  Exercice 5 : Sauts aléatoires dans un escalier
                </CardTitle>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Intermédiaire
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">📋 Énoncé</h4>
                <p className="text-gray-700 mb-4">
                  Un animal gravit un escalier de n marches en montant 1 ou 2 marches à chaque bond avec probabilité égale.
                </p>
                <div className="text-sm text-gray-600">
                  <p>Simuler le nombre de bonds nécessaires pour atteindre la marche n.</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">💻 Code de départ</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <pre>{`import numpy.random as rd

def saut_escalier(n):
    # TODO: Simuler le comportement de l'animal
    # Retourner le nombre de bonds pour atteindre la marche n
    pass`}</pre>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="correction-5">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Voir la correction</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-green-700">✅ Solution</h5>
                        <div className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">{`import numpy.random as rd

def saut_escalier(n):
    """Simuler les sauts de l'animal dans l'escalier"""
    marches = 0     # position actuelle
    sauts = 0       # nombre de bonds effectués
    
    while marches < n:
        r = rd.random()
        if r < 0.5:
            marches += 1  # Bond de 1 marche
        else:
            marches += 2  # Bond de 2 marches
        sauts += 1
    
    return sauts

# Tests et analyse
def analyser_escalier(n, simulations=1000):
    """Analyser la distribution du nombre de sauts"""
    résultats = [saut_escalier(n) for _ in range(simulations)]
    moyenne = sum(résultats) / len(résultats)
    minimum = min(résultats)
    maximum = max(résultats)
    
    print(f"Escalier de {n} marches sur {simulations} simulations :")
    print(f"Nombre moyen de sauts : {moyenne:.2f}")
    print(f"Min : {minimum}, Max : {maximum}")
    print(f"Théorique E[X] ≈ {2*n/3:.2f}")

analyser_escalier(10)`}</pre>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-slate-800 border-slate-700 text-slate-300"
                            onClick={() => copyToClipboard(`import numpy.random as rd

def saut_escalier(n):
    """Simuler les sauts de l'animal dans l'escalier"""
    marches = 0     # position actuelle
    sauts = 0       # nombre de bonds effectués
    
    while marches < n:
        r = rd.random()
        if r < 0.5:
            marches += 1  # Bond de 1 marche
        else:
            marches += 2  # Bond de 2 marches
        sauts += 1
    
    return sauts

# Tests et analyse
def analyser_escalier(n, simulations=1000):
    """Analyser la distribution du nombre de sauts"""
    résultats = [saut_escalier(n) for _ in range(simulations)]
    moyenne = sum(résultats) / len(résultats)
    minimum = min(résultats)
    maximum = max(résultats)
    
    print(f"Escalier de {n} marches sur {simulations} simulations :")
    print(f"Nombre moyen de sauts : {moyenne:.2f}")
    print(f"Min : {minimum}, Max : {maximum}")
    print(f"Théorique E[X] ≈ {2*n/3:.2f}")

analyser_escalier(10)`)}
                          >
                            Copier le code
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-700">📚 Explications détaillées</h5>
                        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                          <p><strong>Modélisation :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>À chaque bond : +1 marche (p=0.5) ou +2 marches (p=0.5)</li>
                            <li>On s'arrête dès qu'on atteint ou dépasse la marche n</li>
                            <li>Variable aléatoire : nombre de bonds nécessaires</li>
                          </ul>
                          <p><strong>Analyse théorique :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Espérance du nombre de marches par bond : (1+2)/2 = 1.5</li>
                            <li>Approximation : E[nombre de bonds] ≈ n/1.5 = 2n/3</li>
                            <li>En réalité légèrement plus car on peut dépasser n</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Exercice 6 */}
          <Card id="exercice-6" className="border border-orange-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-orange-700">
                  <Book className="h-6 w-6" />
                  Exercice 6 : Simulation de lois géométriques
                </CardTitle>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Intermédiaire
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-lg">📋 Énoncé</h4>
                <p className="text-gray-700 mb-4">
                  Estimer P(X = 2Y) où X suit une loi géométrique de paramètre p et Y suit une loi géométrique de paramètre q, par méthode de Monte-Carlo.
                </p>
                <div className="text-sm text-gray-600">
                  <p>Utiliser un grand nombre de simulations pour estimer cette probabilité.</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">💻 Code de départ</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <pre>{`import numpy.random as rd

def simulation_geom(p, q):
    # TODO: Estimer P(X = 2Y) par méthode de Monte-Carlo
    # Retourner l'estimation de la probabilité
    pass`}</pre>
                </div>
              </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="correction-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">Voir la correction</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold mb-2 text-green-700">✅ Solution</h5>
                        <div className="bg-slate-900 text-slate-50 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">{`import numpy.random as rd

def simulation_geom(p, q, essais=100000):
    """Estimer P(X = 2Y) par Monte-Carlo"""
    compteur = 0
    
    for _ in range(essais):
        X = rd.geometric(p)  # Loi géométrique paramètre p
        Y = rd.geometric(q)  # Loi géométrique paramètre q
        
        if X == 2 * Y:
            compteur += 1
    
    return compteur / essais

# Calcul théorique pour validation
def proba_theorique(p, q):
    """Calcul théorique de P(X = 2Y)"""
    somme = 0
    for k in range(1, 1000):  # Approximation par somme finie
        # P(Y = k) * P(X = 2k)
        py_k = (1-q)**(k-1) * q
        px_2k = (1-p)**(2*k-1) * p
        somme += py_k * px_2k
    return somme

# Tests comparatifs
def test_complet(p, q):
    """Test avec comparaison théorie/simulation"""
    print(f"Paramètres : p = {p}, q = {q}")
    
    # Simulation Monte-Carlo
    estimation = simulation_geom(p, q)
    print(f"Estimation Monte-Carlo : {estimation:.6f}")
    
    # Calcul théorique
    theorique = proba_theorique(p, q)
    print(f"Valeur théorique : {theorique:.6f}")
    
    # Erreur relative
    erreur = abs(estimation - theorique) / theorique * 100
    print(f"Erreur relative : {erreur:.2f}%")
    print()

# Exemples de tests
test_complet(0.3, 0.2)
test_complet(0.5, 0.4)`}</pre>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 bg-slate-800 border-slate-700 text-slate-300"
                            onClick={() => copyToClipboard(`import numpy.random as rd

def simulation_geom(p, q, essais=100000):
    """Estimer P(X = 2Y) par Monte-Carlo"""
    compteur = 0
    
    for _ in range(essais):
        X = rd.geometric(p)  # Loi géométrique paramètre p
        Y = rd.geometric(q)  # Loi géométrique paramètre q
        
        if X == 2 * Y:
            compteur += 1
    
    return compteur / essais

# Calcul théorique pour validation
def proba_theorique(p, q):
    """Calcul théorique de P(X = 2Y)"""
    somme = 0
    for k in range(1, 1000):  # Approximation par somme finie
        # P(Y = k) * P(X = 2k)
        py_k = (1-q)**(k-1) * q
        px_2k = (1-p)**(2*k-1) * p
        somme += py_k * px_2k
    return somme

# Tests comparatifs
def test_complet(p, q):
    """Test avec comparaison théorie/simulation"""
    print(f"Paramètres : p = {p}, q = {q}")
    
    # Simulation Monte-Carlo
    estimation = simulation_geom(p, q)
    print(f"Estimation Monte-Carlo : {estimation:.6f}")
    
    # Calcul théorique
    theorique = proba_theorique(p, q)
    print(f"Valeur théorique : {theorique:.6f}")
    
    # Erreur relative
    erreur = abs(estimation - theorique) / theorique * 100
    print(f"Erreur relative : {erreur:.2f}%")
    print()

# Exemples de tests
test_complet(0.3, 0.2)
test_complet(0.5, 0.4)`)}
                          >
                            Copier le code
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold mb-2 text-blue-700">📚 Explications détaillées</h5>
                        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
                          <p><strong>Méthode de Monte-Carlo :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>Simuler un grand nombre de couples (X,Y) indépendants</li>
                            <li>Compter combien de fois X = 2Y</li>
                            <li>La fréquence converge vers P(X = 2Y) (loi des grands nombres)</li>
                          </ul>
                          <p><strong>Calcul théorique :</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            <li>P(X = 2Y) = Σ P(Y = k) × P(X = 2k) pour k ≥ 1</li>
                            <li>P(Y = k) = (1-q)^(k-1) × q (loi géométrique)</li>
                            <li>P(X = 2k) = (1-p)^(2k-1) × p (loi géométrique)</li>
                            <li>Convergence rapide car termes décroissent exponentiellement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PythonProbabilitesExercicesPage;
