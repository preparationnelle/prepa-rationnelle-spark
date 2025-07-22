import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, Play } from 'lucide-react';

const SEMESTRE_1 = [
  { id: 1, slug: 'logique', title: 'Éléments de logique' },
  { id: 2, slug: 'ensembles', title: 'Ensembles et applications' },
  { id: 3, slug: 'entiers', title: 'Entiers' },
  { id: 4, slug: 'suites', title: 'Suites numériques' },
  { id: 5, slug: 'fonctions', title: 'Fonctions réelles — continuité' },
  { id: 6, slug: 'derivation', title: 'Dérivation' },
  { id: 7, slug: 'integration', title: 'Intégration' },
  { id: 8, slug: 'polynomes', title: 'Polynômes et trigonométrie' },
  { id: 9, slug: 'espaces-vectoriels', title: 'Espaces vectoriels' },
  { id: 10, slug: 'probabilites-finies', title: 'Probabilités sur un univers fini' },
];

const SEMESTRE_2 = [
  { id: 11, slug: 'espaces-vectoriels-complements', title: 'Espaces vectoriels : compléments' },
  { id: 12, slug: 'comparaisons', title: 'Comparaisons' },
  { id: 13, slug: 'series', title: 'Séries numériques' },
  { id: 14, slug: 'developpements-limites', title: 'Développements limités' },
  { id: 15, slug: 'fonctions-complements', title: 'Compléments sur l’étude de fonctions' },
  { id: 16, slug: 'integration-intervalle', title: 'Intégration sur un intervalle quelconque' },
  { id: 17, slug: 'probabilites-univers', title: 'Probabilités sur un univers quelconque' },
  { id: 18, slug: 'variables-aleatoires', title: 'Variables aléatoires réelles discrètes' },
  { id: 19, slug: 'inegalites', title: 'Inégalités et convergences' },
  { id: 20, slug: 'python', title: 'Python' },
];

const MathsFormationPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 mb-8">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Maths ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Formation Maths ECG</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Sommaire complet de la formation Maths ECG. Cliquez sur "Cours" ou "Exercice" pour chaque chapitre.
          </p>
        </div>

        {/* Semestre 1 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Semestre 1</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEMESTRE_1.map((chap) => (
              <Card key={chap.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">{chap.id}</Badge>
                    {chap.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mt-2">
                    <Link to={`/formation/maths-${chap.slug}`} className="w-1/2">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" /> Cours
                      </Button>
                    </Link>
                    <Link to={`/formation/maths-${chap.slug}-exercices`} className="w-1/2">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                        <Play className="h-4 w-4" /> Exercice
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Semestre 2 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Semestre 2</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEMESTRE_2.map((chap) => (
              <Card key={chap.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">{chap.id}</Badge>
                    {chap.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 mt-2">
                    <Link to={`/formation/maths-${chap.slug}`} className="w-1/2">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" /> Cours
                      </Button>
                    </Link>
                    <Link to={`/formation/maths-${chap.slug}-exercices`} className="w-1/2">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 flex items-center gap-2">
                        <Play className="h-4 w-4" /> Exercice
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathsFormationPage; 