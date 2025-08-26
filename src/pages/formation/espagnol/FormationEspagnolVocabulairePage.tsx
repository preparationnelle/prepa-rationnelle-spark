import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { MessageSquare, Home, ChevronRight } from 'lucide-react';
import { SpanishVocabularyFlashcards } from '@/components/SpanishVocabularyFlashcards';

const FormationEspagnolVocabulairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Subtle bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-amber-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-amber-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-amber-100 rounded-full opacity-5 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
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
            <Link to="/formation/espagnol" className="hover:text-foreground transition-colors">
              Formation Espagnol ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Espagnol</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
              <MessageSquare className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-blue-700 font-bold">
              Vocabulaire Espagnol
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Maîtrisez le lexique essentiel pour vos épreuves de concours ECG
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">Flashcards Interactives</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">Plus de 70 termes</Badge>
            <Badge className="bg-blue-600 px-4 py-2 text-sm font-medium text-white">Concours ECG</Badge>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/formation/espagnol">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                ← Retour à la formation
              </button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-blue-100 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">Vocabulaire Politique Espagnol-Français</CardTitle>
              <p className="text-gray-600 text-lg leading-relaxed">
                Plus de 70 termes et expressions politiques classés par thématiques : institutions, élections, partis, législation, administration et relations internationales.
                Idéal pour maîtriser le vocabulaire spécifique aux concours ECG.
              </p>
            </CardHeader>
            <CardContent>
              <SpanishVocabularyFlashcards language={language} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormationEspagnolVocabulairePage;