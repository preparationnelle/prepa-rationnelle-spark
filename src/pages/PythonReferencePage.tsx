
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Copy, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonReferencePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const pythonCommands = {
    imports: {
      title: "Importation des modules",
      commands: [
        { command: "import numpy as np", description: "NumPy principal pour le calcul mathématique" },
        { command: "import numpy.linalg as al", description: "Sous-module algèbre linéaire" },
        { command: "import numpy.random as rd", description: "Génération de nombres aléatoires" },
        { command: "import matplotlib.pyplot as plt", description: "Tracé de courbes et graphiques" }
      ]
    },
    functions: {
      title: "Fonctions mathématiques de base",
      commands: [
        { command: "np.abs()", description: "Valeur absolue" },
        { command: "np.cos()", description: "Cosinus" },
        { command: "np.sin()", description: "Sinus" },
        { command: "np.log()", description: "Logarithme népérien" },
        { command: "np.exp()", description: "Exponentielle" },
        { command: "np.sqrt()", description: "Racine carrée" },
        { command: "np.floor()", description: "Partie entière" }
      ]
    },
    constants: {
      title: "Constantes",
      commands: [
        { command: "np.pi", description: "π (pi)" },
        { command: "np.e", description: "e (nombre d'Euler)" }
      ]
    },
    vectors: {
      title: "Création de vecteurs",
      commands: [
        { command: "np.array([u1,...,un])", description: "Créer un vecteur-ligne" },
        { command: "np.arange(a,b,r)", description: "Progression arithmétique de raison r" },
        { command: "np.linspace(a,b,n)", description: "n éléments équirépartis de a à b" },
        { command: "np.ones(n)", description: "Vecteur de n éléments égaux à 1" },
        { command: "np.zeros(n)", description: "Vecteur de n éléments égaux à 0" }
      ]
    },
    matrices: {
      title: "Création de matrices",
      commands: [
        { command: "np.array([[a1,1,...,a1,p],...,[an,1,...,an,p]])", description: "Création d'une matrice" },
        { command: "np.ones((n,p))", description: "Matrice n×p de 1" },
        { command: "np.zeros((n,p))", description: "Matrice n×p de 0" },
        { command: "np.eye(n,p)", description: "Matrice avec 1 sur la diagonale" }
      ]
    },
    operations: {
      title: "Opérations sur matrices/vecteurs",
      commands: [
        { command: "np.shape(A)", description: "Dimensions de la matrice A" },
        { command: "np.dot(A,B)", description: "Produit matriciel" },
        { command: "np.transpose(A)", description: "Transposée de A" },
        { command: "np.sum(A)", description: "Somme de tous les éléments" },
        { command: "np.mean(A)", description: "Moyenne de tous les éléments" },
        { command: "np.min(A)", description: "Minimum des éléments" },
        { command: "np.max(A)", description: "Maximum des éléments" },
        { command: "np.cumsum(A)", description: "Sommes cumulées" }
      ]
    },
    linalg: {
      title: "Algèbre linéaire",
      commands: [
        { command: "al.inv(A)", description: "Inverse de la matrice A" },
        { command: "al.matrix_rank(A)", description: "Rang de la matrice A" },
        { command: "al.matrix_power(A,n)", description: "Puissance n-ième de A" },
        { command: "al.solve(A,b)", description: "Résolution du système Ax = b" },
        { command: "al.eig(A)", description: "Valeurs propres et vecteurs propres" }
      ]
    },
    random: {
      title: "Variables aléatoires",
      commands: [
        { command: "rd.uniform(a,b)", description: "Loi uniforme sur [a,b]" },
        { command: "rd.randint(a,b)", description: "Entier uniforme sur [a,b-1]" },
        { command: "rd.binomial(n,p)", description: "Loi binomiale B(n,p)" },
        { command: "rd.geometric(p)", description: "Loi géométrique de paramètre p" },
        { command: "rd.exponential(1/lambda)", description: "Loi exponentielle" },
        { command: "rd.normal(m,sigma)", description: "Loi normale N(m,σ²)" },
        { command: "rd.poisson(lambda)", description: "Loi de Poisson P(λ)" },
        { command: "rd.gamma(nu)", description: "Loi gamma de paramètre ν" }
      ]
    },
    graphics: {
      title: "Représentations graphiques",
      commands: [
        { command: "plt.plot(x,y)", description: "Tracer une courbe" },
        { command: "plt.plot(x,y,'x')", description: "Nuage de points avec des croix" },
        { command: "plt.show()", description: "Afficher le graphique" },
        { command: "plt.figure(n)", description: "Créer une nouvelle figure" },
        { command: "plt.clf()", description: "Effacer le contenu" },
        { command: "plt.axis('scaled')", description: "Repère orthonormé" },
        { command: "plt.grid()", description: "Ajouter une grille" },
        { command: "plt.xlabel('texte')", description: "Légende axe x" },
        { command: "plt.ylabel('texte')", description: "Légende axe y" },
        { command: "plt.title('texte')", description: "Titre du graphique" },
        { command: "plt.legend()", description: "Afficher la légende" }
      ]
    }
  };

  const filteredCommands = Object.entries(pythonCommands).map(([key, section]) => ({
    ...section,
    key,
    commands: section.commands.filter(cmd => 
      cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.commands.length > 0);

  const CommandCard = ({ command, description }: { command: string; description: string }) => (
    <div className="bg-slate-50 p-4 rounded-lg border hover:border-blue-300 transition-colors group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <code className="text-sm font-mono text-blue-600 font-semibold">{command}</code>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(command)}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copiedCommand === command ? (
            <span className="text-green-600 text-xs">✓</span>
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-6">
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
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Référence Python ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Toutes les commandes Python au programme de prépa ECG
          </p>
          
          {/* Barre de recherche */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher une commande..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tabs pour les catégories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-6">
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="imports">Imports</TabsTrigger>
            <TabsTrigger value="functions">Fonctions</TabsTrigger>
            <TabsTrigger value="vectors">Vecteurs</TabsTrigger>
            <TabsTrigger value="matrices">Matrices</TabsTrigger>
            <TabsTrigger value="operations">Opérations</TabsTrigger>
            <TabsTrigger value="linalg">Algèbre</TabsTrigger>
            <TabsTrigger value="random">Aléatoire</TabsTrigger>
            <TabsTrigger value="graphics">Graphiques</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-8">
              {filteredCommands.map((section) => (
                <Card key={section.key}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {section.title}
                      <Badge variant="outline">{section.commands.length}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {section.commands.map((cmd, index) => (
                        <CommandCard key={index} command={cmd.command} description={cmd.description} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {Object.entries(pythonCommands).map(([key, section]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.commands.map((cmd, index) => (
                      <CommandCard key={index} command={cmd.command} description={cmd.description} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default PythonReferencePage;
