import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Home, ChevronRight, ArrowLeft, Target } from 'lucide-react';

const SyntaxeExercicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-gray-900 transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes" className="hover:text-gray-900 transition-colors">
              Syntaxe et Structures Complexes
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à Syntaxe et Structures Complexes
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <Target className="h-9 w-9" />
            </div>
            Exercices Syntaxe et Structures Complexes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testez vos connaissances avec ces exercices de niveau prépa ECG sur la syntaxe espagnole
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Niveau Prépa ECG</Badge>
            <Badge variant="outline">60 exercices</Badge>
            <Badge className="bg-orange-600">Module essentiel</Badge>
          </div>
        </div>

        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-orange-800">
              <Target className="h-5 w-5" />
              Page d'exercices en cours de chargement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-700">
              🚧 Cette page est temporairement simplifiée le temps de résoudre un problème technique. 
              Elle sera restaurée sous peu avec toutes les fonctionnalités.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SyntaxeExercicesPage;