import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Home, ChevronRight } from 'lucide-react';

const ReussirEpreuvesAllemandePage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue and orange bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <div className="h-3 w-3">🏠</div>
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/allemand" className="hover:text-foreground transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground">Épreuves</span>
          </div>
        </div>
      </nav>

      {/* Section Héro moderne */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-500 text-white shadow-lg">
                <Target className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-orange-600 bg-clip-text text-transparent font-bold">
                Prüfungserfolg
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
              Maîtrisez toutes les épreuves du concours d'allemand
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 text-sm font-medium bg-orange-100 text-orange-700 rounded-full">Épreuves écrites</span>
              <span className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">Épreuves orales</span>
              <span className="px-4 py-2 text-sm font-medium bg-orange-100 text-orange-700 rounded-full">Techniques d'excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contenu en cours de développement</h2>
            <p className="text-lg text-gray-600 mb-8">
              Cette section sera bientôt disponible avec un contenu complet sur les épreuves allemandes.
            </p>
            <Link
              to="/formation/allemand"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300"
            >
              Retour à la formation Allemand
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReussirEpreuvesAllemandePage;
