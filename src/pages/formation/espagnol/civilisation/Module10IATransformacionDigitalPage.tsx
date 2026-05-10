import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, Cpu } from 'lucide-react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";
import { iaTransformacionDigitalData } from '@/data/iaTransformacionDigitalData';

interface VocabularyItem {
  spanish: string;
  french: string;
  category: string;
}

const Module10IATransformacionDigitalPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  // Convertir les données du format actuel vers le format attendu par UnifiedFlashcards
  const vocabularyData: VocabularyItem[] = iaTransformacionDigitalData.map(item => ({
    spanish: item.spanish,
    french: item.french,
    category: item.category
  }));

  return (
    <div className="relative relative overflow-hidden">
      {/* Floating elements - Bubbles like landing page */}

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40 relative z-10">
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
            <Link to="/formation/espagnol/civilisation" className="hover:text-foreground transition-colors">
              Civilisation Hispanique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">IA et Transformation Digitale</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-pr-orange-dark text-white shadow-lg">
              <Cpu className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-pr-orange-dark font-bold">
                IA et Transformation Digitale
              </span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vocabulaire spécialisé en intelligence artificielle et transformation numérique
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-orange-100 text-pr-orange-dark rounded-full text-sm font-medium">
              Module 10
            </span>
            <span className="px-3 py-1 bg-orange-100 text-pr-orange-dark rounded-full text-sm font-medium">
              100 termes clés
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Niveau Prépa
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for IA vocabulary */}
          <UnifiedFlashcards
            data={vocabularyData}
            title="Vocabulaire IA et transformation digitale espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

export default Module10IATransformacionDigitalPage;
