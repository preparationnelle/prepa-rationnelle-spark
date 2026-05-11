import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, BookOpen } from 'lucide-react';
import { UnifiedFlashcards } from "@/components/ui/UnifiedFlashcards";
import { migracionesDesplazamientosData } from '@/data/migracionesDesplazamientosData';

const Module4MigracionesDesplazamientosPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="carnet-paper min-h-screen relative overflow-hidden font-instrument text-carnet-ink">
      {/* Floating elements - Subtle bubbles */}

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-foreground transition-colors">
              Formation Espagnol ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <Link to="/formation/espagnol/civilisation" className="hover:text-foreground transition-colors">
              Civilisation Hispanique
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <Link to="/formation/espagnol/civilisation/module4" className="hover:text-foreground transition-colors">
              Migraciones y Desplazamientos
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute/50 mx-1" />
            <span className="text-foreground font-medium">Vocabulaire Migrations</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-carnet-red text-carnet-paper shadow-lg">
              <BookOpen className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-carnet-red font-bold">
                Vocabulaire Migrations
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Unified flashcards component for migrations vocabulary */}
          <UnifiedFlashcards
            data={migracionesDesplazamientosData}
            title="Vocabulaire Migrations espagnol-français"
          />
        </div>
      </div>
    </div>
  );
};

export default Module4MigracionesDesplazamientosPage;
