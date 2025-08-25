import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, ChevronRight, BookOpen } from 'lucide-react';
import { GeopoliticsReferences } from '@/components/GeopoliticsReferences';

const GeopolitiquesReferencesPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-foreground transition-colors">
              Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Références</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Références Géopolitiques</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Bibliographie thématique complète pour approfondir vos connaissances géopolitiques
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <GeopoliticsReferences />
        </div>
      </div>
    </div>
  );
};

export default GeopolitiquesReferencesPage;