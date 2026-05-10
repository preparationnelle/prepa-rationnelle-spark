import React, { useState } from 'react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';

const Module8VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="relative relative overflow-hidden">
      {/* Floating elements - Subtle bubbles */}

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
            <Link to="/formation/espagnol/civilisation/module8" className="hover:text-foreground transition-colors">
              Historia y Memoria
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Historique</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-pr-orange-dark text-white shadow-lg">
              <BookOpen className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-pr-orange-dark font-bold">
                Vocabulaire Historique
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for history vocabulary */}
          <UnifiedFlashcards
            data={historyVocabularyData}
            title="Vocabulaire Historique espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

const historyVocabularyData = [
  // 1. Époques historiques
  {
    spanish: "Edad Antigua",
    french: "Antiquité",
    category: "Époques historiques"
  },
  {
    spanish: "Edad Media",
    french: "Moyen Âge",
    category: "Époques historiques"
  },
  {
    spanish: "Renacimiento",
    french: "Renaissance",
    category: "Époques historiques"
  },
  {
    spanish: "Ilustración",
    french: "Lumières",
    category: "Époques historiques"
  },
  {
    spanish: "Revolución Industrial",
    french: "Révolution Industrielle",
    category: "Époques historiques"
  },

  // 2. Civilisations et cultures
  {
    spanish: "Civilización",
    french: "Civilisation",
    category: "Civilisations et cultures"
  },
  {
    spanish: "Imperio",
    french: "Empire",
    category: "Civilisations et cultures"
  },
  {
    spanish: "Colonialismo",
    french: "Colonialisme",
    category: "Civilisations et cultures"
  },
  {
    spanish: "Independencia",
    french: "Indépendance",
    category: "Civilisations et cultures"
  },
  {
    spanish: "Revolución",
    french: "Révolution",
    category: "Civilisations et cultures"
  },

  // 3. Personnages historiques
  {
    spanish: "Conquistador",
    french: "Conquistador",
    category: "Personnages historiques"
  },
  {
    spanish: "Explorador",
    french: "Explorateur",
    category: "Personnages historiques"
  },
  {
    spanish: "Revolucionario",
    french: "Révolutionnaire",
    category: "Personnages historiques"
  },
  {
    spanish: "Dictador",
    french: "Dictateur",
    category: "Personnages historiques"
  },
  {
    spanish: "Demócrata",
    french: "Démocrate",
    category: "Personnages historiques"
  }
];

export default Module8VocabularyPage;
