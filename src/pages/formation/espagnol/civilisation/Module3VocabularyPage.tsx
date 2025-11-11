import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";

interface VocabularyItem {
  spanish: string;
  french: string;
  category: string;
}

const Module3VocabularyPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const educationInequalitiesVocabularyData = [
    // 1. Système éducatif général
    {
      spanish: "Educación",
      french: "Éducation",
      category: "Système éducatif général"
    },
    {
      spanish: "Enseñanza",
      french: "Enseignement",
      category: "Système éducatif général"
    },
    {
      spanish: "Aprendizaje",
      french: "Apprentissage",
      category: "Système éducatif général"
    },
    {
      spanish: "Conocimiento",
      french: "Connaissance",
      category: "Système éducatif général"
    },
    {
      spanish: "Formación",
      french: "Formation",
      category: "Système éducatif général"
    },
    {
      spanish: "Pedagogía",
      french: "Pédagogie",
      category: "Système éducatif général"
    },
    {
      spanish: "Didáctica",
      french: "Didactique",
      category: "Système éducatif général"
    },
    {
      spanish: "Currículo",
      french: "Curriculum",
      category: "Système éducatif général"
    },
    {
      spanish: "Programa",
      french: "Programme",
      category: "Système éducatif général"
    },
    {
      spanish: "Evaluación",
      french: "Évaluation",
      category: "Système éducatif général"
    },

    // 2. Niveaux d'enseignement
    {
      spanish: "Infantil",
      french: "Maternelle",
      category: "Niveaux d'enseignement"
    },
    {
      spanish: "Primaria",
      french: "Primaire",
      category: "Niveaux d'enseignement"
    },
    {
      spanish: "Secundaria",
      french: "Secondaire",
      category: "Niveaux d'enseignement"
    },
    {
      spanish: "Bachillerato",
      french: "Baccalauréat",
      category: "Niveaux d'enseignement"
    },
    {
      spanish: "Universidad",
      french: "Université",
      category: "Niveaux d'enseignement"
    },
    {
      spanish: "Máster",
      french: "Master",
      category: "Niveaux d'enseignement"
    },
    {
      spanish: "Doctorado",
      french: "Doctorat",
      category: "Niveaux d'enseignement"
    },
    {
      spanish: "Formación Profesional",
      french: "Formation Professionnelle",
      category: "Niveaux d'enseignement"
    },
    {
      spanish: "Educación Superior",
      french: "Enseignement Supérieur",
      category: "Niveaux d'enseignement"
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
            <Link to="/formation/espagnol/civilisation/module3" className="hover:text-foreground transition-colors">
              Educación y Desigualdades
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Éducation</span>
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
                Vocabulaire Éducation
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for education/inequalities vocabulary */}
          <UnifiedFlashcards
            data={educationInequalitiesVocabularyData}
            title="Vocabulaire Éducation et Inégalités espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

export default Module3VocabularyPage;
