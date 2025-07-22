
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { Chapitre2Content } from '@/components/formation/chapitres/Chapitre2Content';

const MathsEnsemblesPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 mb-8">
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
            <Link to="/formation/maths" className="hover:text-foreground transition-colors">
              Formation Maths ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Ensembles et applications</span>
          </div>
        </div>
      </nav>

      <Chapitre2Content />
    </div>
  );
};

export default MathsEnsemblesPage;
