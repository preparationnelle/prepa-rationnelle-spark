import React, { useState } from 'react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';

interface VocabularyItem {
  spanish: string;
  french: string;
  category: string;
}

const Module10VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Subtle bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

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
            <Link to="/formation/espagnol/civilisation/module10" className="hover:text-foreground transition-colors">
              China y Geopolítica Global
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Géopolitique Chinois</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
              <BookOpen className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-blue-700 font-bold">
                Vocabulaire Géopolitique Chinois
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for geopolitical vocabulary */}
          <UnifiedFlashcards
            data={geopoliticalVocabularyData}
            title="Vocabulaire Géopolitique espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

const geopoliticalVocabularyData = [
  // 1. Concepts géopolitiques
  {
    spanish: "Geopolítica",
    french: "Géopolitique",
    category: "Concepts géopolitiques"
  },
  {
    spanish: "Poder",
    french: "Pouvoir",
    category: "Concepts géopolitiques"
  },
  {
    spanish: "Influencia",
    french: "Influence",
    category: "Concepts géopolitiques"
  },
  {
    spanish: "Hegemonía",
    french: "Hégémonie",
    category: "Concepts géopolitiques"
  },
  {
    spanish: "Estrategia",
    french: "Stratégie",
    category: "Concepts géopolitiques"
  },

  // 2. Relations internationales
  {
    spanish: "Diplomacia",
    french: "Diplomatie",
    category: "Relations internationales"
  },
  {
    spanish: "Alianza",
    french: "Alliance",
    category: "Relations internationales"
  },
  {
    spanish: "Conflicto",
    french: "Conflit",
    category: "Relations internationales"
  },
  {
    spanish: "Negociación",
    french: "Négociation",
    category: "Relations internationales"
  },
  {
    spanish: "Tratado",
    french: "Traité",
    category: "Relations internationales"
  },

  // 3. Organisations internationales
  {
    spanish: "ONU",
    french: "ONU",
    category: "Organisations internationales"
  },
  {
    spanish: "OTAN",
    french: "OTAN",
    category: "Organisations internationales"
  },
  {
    spanish: "Unión Europea",
    french: "Union Européenne",
    category: "Organisations internationales"
  },
  {
    spanish: "Mercosur",
    french: "Mercosur",
    category: "Organisations internationales"
  },
  {
    spanish: "OEA",
    french: "OEA",
    category: "Organisations internationales"
  },

  // 4. Économie et commerce
  {
    spanish: "Globalización",
    french: "Mondialisation",
    category: "Économie et commerce"
  },
  {
    spanish: "Comercio Internacional",
    french: "Commerce International",
    category: "Économie et commerce"
  },
  {
    spanish: "Desarrollo",
    french: "Développement",
    category: "Économie et commerce"
  },
  {
    spanish: "Cooperación",
    french: "Coopération",
    category: "Économie et commerce"
  },
  {
    spanish: "Integración",
    french: "Intégration",
    category: "Économie et commerce"
  }
];

export default Module10VocabularyPage;
