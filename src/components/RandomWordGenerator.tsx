
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

const words = [
  "Silence", "Couleur", "Horizon", "Lien", "Parfum", "Puzzle", "Sable", "Souvenir", "Geste", "Paradoxe", 
  "Nuage", "Boussole", "Écho", "Rythme", "Porte", "Aventure", "Secret", "Regard", "Chemin", "Énergie", 
  "Livre", "Peinture", "Musique", "Recette", "Cinéma", "Danse", "Etoile", "Fleur", "Design", "Entreprise", 
  "Valeur", "Sentiment", "Ami", "Proverbe", "Enfance", "Ville", "Paysage", "Histoire", "Mode", "Publicité", 
  "Crise", "Voyage", "Lumière", "Corruption", "Cause", "Argent", "Liberté", "Théâtre", "Richesse", "Poésie", 
  "Photographie"
];

export const RandomWordGenerator: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  
  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };
  
  const startWordGeneration = () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    
    // Générer des mots rapidement pour créer l'effet d'animation
    const id = window.setInterval(() => {
      setCurrentWord(generateRandomWord());
    }, 100);
    
    setIntervalId(id);
    
    // Arrêter après 2 secondes et choisir un mot final
    setTimeout(() => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      setCurrentWord(generateRandomWord());
      setIsGenerating(false);
      setIntervalId(null);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Puzzle className="h-5 w-5" />
          Générateur de mot pour votre présentation
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <div className="bg-primary/10 px-6 py-8 rounded-lg mb-6 w-full text-center">
          <p className={`text-2xl font-bold ${isGenerating ? 'animate-pulse' : ''}`}>
            {currentWord || "Cliquez sur le bouton pour générer un mot"}
          </p>
        </div>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Utilisez ce mot aléatoire lors de votre présentation pour démontrer votre capacité d'adaptation et votre créativité.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button 
          onClick={startWordGeneration} 
          disabled={isGenerating}
          className="w-full md:w-auto"
        >
          {isGenerating ? "Génération en cours..." : "Générer un mot aléatoire"}
        </Button>
      </CardFooter>
    </Card>
  );
};
