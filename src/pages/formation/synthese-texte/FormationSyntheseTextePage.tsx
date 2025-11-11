import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, MessageSquare, Target, ChevronRight, FileText, Calendar, BarChart3 } from 'lucide-react';

const FormationSyntheseTextePage = () => {

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue and orange bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-foreground font-medium">Formation Synthèse de Texte ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-4 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent font-bold">
              Formation Synthèse de Texte ECG
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
            Formation complète pour maîtriser l'épreuve de synthèse aux concours des Grandes Écoles de Commerce
          </p>
        </div>
      </div>

      {/* Modules principaux */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {/* Méthode de l'Épreuve */}
        <Link
          to="/formation/synthese-texte/methode"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[380px] justify-between hover:scale-[1.02] transform"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
              <Target className="h-10 w-10 text-orange-600" />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Méthode de l'Épreuve</h3>
            <p className="text-sm text-orange-700 mb-4 text-center leading-relaxed font-medium">Technique complète et stratégie<br/>pour réussir l'épreuve de synthèse</p>
            <div className="space-y-2 text-sm mb-6 w-full">
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Structure de synthèse</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Gestion du temps</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Critères d'évaluation</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
            <Target className="mr-2 h-4 w-4" />
            Accéder à la Méthode
          </Button>
        </Link>

        {/* Travail Annuel */}
        <Link
          to="/formation/synthese-texte/travail-annuel"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[380px] justify-between hover:scale-[1.02] transform"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
              <Calendar className="h-10 w-10 text-orange-600" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Travail Annuel</h3>
            <p className="text-sm text-orange-700 mb-4 text-center leading-relaxed font-medium">Organisation complète du travail<br/>sur toute l'année de prépa</p>
            <div className="space-y-2 text-sm mb-6 w-full">
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Planning annuel</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Préparation progressive</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Révision et entraînement</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
            <Calendar className="mr-2 h-4 w-4" />
            Accéder au Travail Annuel
          </Button>
        </Link>

        {/* Ressources et Exercices */}
        <Link
          to="/formation/synthese-texte/ressources"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[380px] justify-between hover:scale-[1.02] transform"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
              <BookOpen className="h-10 w-10 text-orange-600" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Ressources & Exercices</h3>
            <p className="text-sm text-orange-700 mb-4 text-center leading-relaxed font-medium">Outils, annales et exercices<br/>pour s'entraîner efficacement</p>
            <div className="space-y-2 text-sm mb-6 w-full">
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Annales corrigées</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Exercices pratiques</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Grilles d'évaluation</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
            <BookOpen className="mr-2 h-4 w-4" />
            Accéder aux Ressources
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FormationSyntheseTextePage;
