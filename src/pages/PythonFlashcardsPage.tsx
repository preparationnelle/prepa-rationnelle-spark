import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, Menu, Code, Brain, Target, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const PythonFlashcardsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Fil d'Ariane identique aux autres pages */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation" className="hover:text-foreground transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Flashcards Python</span>
          </div>

          {/* Menu déroulant mobile/tablette */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/methodo">Méthodo/Conseil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/cours">Cours</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/exercices">Exercices</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/flashcards" className="font-semibold">Flashcards Python</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/reference">Référence Python</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* En-tête avec titre et navigation */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Flashcards Python ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Maîtrisez les 54 commandes essentielles avec nos flashcards interactives !
          </p>

          {/* Menu déroulant pour la navigation (version desktop) */}
          <div className="flex justify-center mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Menu className="h-4 w-4" />
                  Navigation
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/methodo" className="w-full">
                    Méthodo/Conseil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cours" className="w-full">
                    Cours
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/exercices" className="w-full">
                    Exercices
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="bg-accent">
                  <Link to="/flashcards" className="w-full font-medium">
                    Flashcards Python
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/reference" className="w-full">
                    Référence Python
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Navigation horizontale (version desktop) */}
          <div className="hidden md:flex justify-center border-b">
            <nav className="flex gap-1 p-1 bg-muted rounded-lg">
              {[
                { name: 'Méthodo', path: '/methodo' },
                { name: 'Cours', path: '/cours' },
                { name: 'Exercices', path: '/exercices' },
                { name: 'Flashcards', path: '/flashcards', active: true },
                { name: 'Référence', path: '/reference' }
              ].map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant={item.active ? 'default' : 'ghost'}
                  className={`rounded-md px-4 py-2 text-sm ${item.active ? 'bg-background shadow' : 'text-muted-foreground'}`}
                >
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              ))}
            </nav>
          </div>
        </div>

        {/* Flashcard interactive */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Question 1 sur 54</span>
              <span className="text-sm font-medium">Score: 0/0</span>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary">Création de vecteurs</Badge>
              <p className="text-lg">Que fait cette commande Python ?</p>
              <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded-md text-sm">
                np.arange(a,b,r)
              </code>
            </div>
            <Button className="gap-2">
              <RefreshCw className="h-4 w-4" />
              Mélanger
            </Button>
            <Button variant="outline">
              Révéler la réponse →
            </Button>
          </CardContent>
        </Card>

        {/* Section "Pourquoi ces flashcards ?" */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pourquoi ces flashcards ?</h2>
          <div className="max-w-md mx-auto text-center">
            <Button variant="link" className="text-orange-500">
              Une question sur la prépa ?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonFlashcardsPage;