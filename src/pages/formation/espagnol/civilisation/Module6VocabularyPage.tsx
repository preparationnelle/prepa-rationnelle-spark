import React, { useState } from 'react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';

const Module6VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const povertyVocabularyData = [
    // Concepts de pauvreté et exclusion sociale
    {
      spanish: "Pobreza",
      french: "Pauvreté",
      category: "Concepts de pauvreté et exclusion sociale"
    },
    {
      spanish: "Indigencia",
      french: "Indigence",
      category: "Concepts de pauvreté et exclusion sociale"
    },
    {
      spanish: "Marginación",
      french: "Marginalisation",
      category: "Concepts de pauvreté et exclusion sociale"
    },
    {
      spanish: "Exclusión social",
      french: "Exclusion sociale",
      category: "Concepts de pauvreté et exclusion sociale"
    },
    {
      spanish: "Vulnerabilidad",
      french: "Vulnérabilité",
      category: "Concepts de pauvreté et exclusion sociale"
    },

    // Dépendance économique et vulnérabilité
    {
      spanish: "Dependencia económica",
      french: "Dépendance économique",
      category: "Dépendance économique et vulnérabilité"
    },
    {
      spanish: "Deuda externa",
      french: "Dette extérieure",
      category: "Dépendance économique et vulnérabilité"
    },
    {
      spanish: "Inflación",
      french: "Inflation",
      category: "Dépendance économique et vulnérabilité"
    },
    {
      spanish: "Desempleo",
      french: "Chômage",
      category: "Dépendance économique et vulnérabilité"
    },
    {
      spanish: "Precariedad laboral",
      french: "Précarité de l'emploi",
      category: "Dépendance économique et vulnérabilité"
    },

    // Politiques sociales et aides
    {
      spanish: "Política social",
      french: "Politique sociale",
      category: "Politiques sociales et aides"
    },
    {
      spanish: "Ayuda humanitaria",
      french: "Aide humanitaire",
      category: "Politiques sociales et aides"
    },
    {
      spanish: "Protección social",
      french: "Protection sociale",
      category: "Politiques sociales et aides"
    },
    {
      spanish: "Seguridad social",
      french: "Sécurité sociale",
      category: "Politiques sociales et aides"
    },
    {
      spanish: "Subsidio",
      french: "Subvention",
      category: "Politiques sociales et aides"
    }
  ];

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
            <Link to="/formation/espagnol/civilisation/module6" className="hover:text-foreground transition-colors">
              Pobreza y Dependencia Económica
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Économique et Social</span>
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
                Vocabulaire Économique et Social
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for poverty vocabulary */}
          <UnifiedFlashcards
            data={povertyVocabularyData}
            title="Vocabulaire Économique et Social espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

export default Module6VocabularyPage;
