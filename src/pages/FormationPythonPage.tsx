import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { BookOpen, Code, BarChart3, Calculator, Play, TrendingUp } from 'lucide-react';

const FormationPythonPage = () => {
  const coursModules = [
    {
      id: 0,
      title: 'Les Fondamentaux',
      description: 'Variables, types, opérateurs, fonctions et structures de contrôle. Les bases essentielles pour débuter en Python.',
      icon: BookOpen,
      status: 'Disponible',
      color: 'bg-orange-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badgeColor: 'bg-black text-white',
      topics: [
        'Types fondamentaux (int, float, bool, str)',
        'Opérateurs numériques',
        'Fonctions et structures de contrôle',
        'Listes et boucles'
      ],
      link: '/formation/python/fondamentaux',
      buttonText: 'Commencer le module'
    }
  ];

  const exerciseModules = [
    {
      id: 1,
      title: 'Les Matrices NumPy',
      description: 'Introduction à NumPy pour le calcul scientifique et les opérations matricielles. Création, manipulation et analyse de matrices.',
      icon: Calculator,
      status: 'Disponible',
      color: 'bg-green-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      badgeColor: 'bg-green-500 text-white',
      topics: [
        'Création de matrices et vecteurs',
        'Opérations matricielles',
        'Fonctions d\'analyse statistique',
        'Applications pratiques'
      ],
      link: '/formation/python/matrices',
      buttonText: 'Commencer le module',
      hasTheoryButton: true
    },
    {
      id: 2,
      title: 'Analyse',
      description: 'Méthodes d\'analyse numérique : calcul de sommes et produits, étude des suites, et approximation par dichotomie.',
      icon: TrendingUp,
      status: 'Disponible',
      color: 'bg-blue-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      badgeColor: 'bg-blue-500 text-white',
      topics: [
        'Calcul de sommes et produits finis',
        'Suites définies par récurrence',
        'Méthode de dichotomie',
        'Visualisation avec Matplotlib'
      ],
      link: '/formation/python/analyse',
      buttonText: 'Commencer le module',
      hasTheoryButton: true
    },
    {
      id: 3,
      title: 'Probabilités',
      description: 'Applications probabilistes et statistiques avec Python : simulations, distributions et analyse de données.',
      icon: BarChart3,
      status: 'Bientôt disponible',
      color: 'bg-purple-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      badgeColor: 'bg-gray-500 text-white',
      topics: [
        'Simulations Monte Carlo',
        'Distributions de probabilité',
        'Tests statistiques',
        'Analyse de variance'
      ],
      link: '/formation/python/probabilites',
      buttonText: 'Bientôt disponible',
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold">Formation Python ECG</h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
              Formation complète en Python pour les concours des Grandes Écoles de Commerce
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-black text-white px-4 py-2">Débutant à avancé</Badge>
              <span className="text-muted-foreground">10-12 heures</span>
              <Badge className="bg-blue-500 text-white px-4 py-2">Complet</Badge>
            </div>
          </div>

          {/* Cours Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-orange-500" />
              Cours
            </h2>
            
            <div className="space-y-6">
              {coursModules.map((module) => {
                const IconComponent = module.icon;
                return (
                  <Card key={module.id} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 ${module.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`h-8 w-8 ${module.iconColor}`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">Module {module.id}</h3>
                            <Badge className={module.badgeColor}>{module.status}</Badge>
                          </div>
                          
                          <h4 className="text-lg font-semibold mb-3 text-orange-500">
                            {module.title}
                          </h4>
                          
                          <p className="text-muted-foreground mb-4">
                            {module.description}
                          </p>
                          
                          <ul className="space-y-1 mb-6">
                            {module.topics.map((topic, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-current rounded-full" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                          
                          <Link to={module.link}>
                            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                              <Play className="mr-2 h-4 w-4" />
                              {module.buttonText}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Exercices Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="h-6 w-6 text-orange-500" />
              Exercices
            </h2>
            
            <div className="space-y-6">
              {exerciseModules.map((module) => {
                const IconComponent = module.icon;
                return (
                  <Card key={module.id} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 ${module.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`h-8 w-8 ${module.iconColor}`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">Module {module.id}</h3>
                            <Badge className={module.badgeColor}>{module.status}</Badge>
                          </div>
                          
                          <h4 className="text-lg font-semibold mb-3 text-orange-500">
                            {module.title}
                          </h4>
                          
                          <p className="text-muted-foreground mb-4">
                            {module.description}
                          </p>
                          
                          <ul className="space-y-1 mb-6">
                            {module.topics.map((topic, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-current rounded-full" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex gap-3">
                            {module.hasTheoryButton && (
                              <Button variant="outline" className="flex-1">
                                <BookOpen className="mr-2 h-4 w-4" />
                                Voir le cours
                              </Button>
                            )}
                            
                            <Link to={module.link} className={module.hasTheoryButton ? "flex-1" : "w-full"}>
                              <Button 
                                className={`w-full ${module.color} hover:opacity-90 text-white`}
                                disabled={module.disabled}
                              >
                                <Play className="mr-2 h-4 w-4" />
                                {module.buttonText}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Prêt à maîtriser Python pour les concours ?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Rejoignez des milliers d'étudiants qui ont amélioré leurs résultats grâce à notre formation Python complète.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                      Commencer maintenant
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Nous contacter
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationPythonPage;