import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Home, ChevronRight, ArrowLeft, Target } from 'lucide-react';

const SyntaxeExercicesPage = () => {
  return (
    <div className="carnet-paper min-h-screen font-instrument text-carnet-ink">
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Formation Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-carnet-red transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes" className="hover:text-carnet-red transition-colors">
              Syntaxe et Structures Complexes
            </Link>
            <ChevronRight className="h-3 w-3 opacity-50 mx-2" />
            <span className="text-carnet-ink font-semibold">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/espagnol/grammaire/syntaxe-structures-complexes">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à Syntaxe et Structures Complexes
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-lora text-carnet-ink mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-carnet-red text-carnet-paper">
              <Target className="h-9 w-9" />
            </div>
            Exercices Syntaxe et Structures Complexes
          </h1>
          <p className="text-xl text-carnet-ink-mute max-w-3xl mx-auto">
            Testez vos connaissances avec ces exercices de niveau prépa ECG sur la syntaxe espagnole
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Niveau Prépa ECG</Badge>
            <Badge variant="outline">60 exercices</Badge>
            <Badge className="bg-carnet-red">Module essentiel</Badge>
          </div>
        </div>

        <Card className="mb-8 border-2 border-[rgba(193,68,58,0.25)] bg-gradient-to-r from-[rgba(193,68,58,0.05)] to-amber-50">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-carnet-red-deep">
              <Target className="h-5 w-5" />
              Page d'exercices en cours de chargement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-carnet-red">
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