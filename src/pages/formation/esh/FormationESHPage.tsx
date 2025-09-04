import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, MessageSquare, Target, ChevronRight, GraduationCap, TrendingUp, Users } from 'lucide-react';

const FormationESHPage = () => {

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <div className="h-3 w-3">🏠</div>
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-foreground font-medium">Formation ESH ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-4 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-bold">
              Formation ESH ECG
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
            Formation complète pour maîtriser l'économie et les sciences humaines aux concours des Grandes Écoles de Commerce
          </p>
        </div>
      </div>

      {/* Modules principaux */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        {/* Première année ESH */}
        <Link
          to="/formation/esh/premiere-annee"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[380px] justify-between border border-transparent hover:border-blue-300 hover:bg-blue-50 transform"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
              <BookOpen className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-center text-blue-700 group-hover:text-blue-800 transition-colors">Première année</h3>
            <p className="text-sm text-blue-700 mb-4 text-center leading-relaxed font-medium">Fondamentaux de l'économie<br/>et sciences sociales</p>
            <div className="space-y-2 text-sm mb-6 w-full">
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Microéconomie</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Sociologie</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Concepts de base</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
            <BookOpen className="mr-2 h-4 w-4" />
            Accéder à la Première année
          </Button>
        </Link>

        {/* Deuxième année ESH */}
        <Link
          to="/formation/esh/deuxieme-annee"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[380px] justify-between border border-transparent hover:border-blue-300 hover:bg-blue-50 transform"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
              <TrendingUp className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-center text-blue-700 group-hover:text-blue-800 transition-colors">Deuxième année</h3>
            <p className="text-sm text-blue-700 mb-4 text-center leading-relaxed font-medium">Approfondissement et analyse<br/>des mécanismes économiques</p>
            <div className="space-y-2 text-sm mb-6 w-full">
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Macroéconomie</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Histoire économique</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Analyse critique</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
            <TrendingUp className="mr-2 h-4 w-4" />
            Accéder à la Deuxième année
          </Button>
        </Link>

        {/* Ressources ESH */}
        <Link
          to="/formation/esh/ressources"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[380px] justify-between border border-transparent hover:border-blue-300 hover:bg-blue-50 transform"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
              <MessageSquare className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-center text-blue-700 group-hover:text-blue-800 transition-colors">Ressources</h3>
            <p className="text-sm text-blue-700 mb-4 text-center leading-relaxed font-medium">Application pratique des concepts<br/>économiques et sociaux</p>
            <div className="space-y-2 text-sm mb-6 w-full">
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Cas d'entreprises</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Études de marché</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Problématiques actuelles</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
            <MessageSquare className="mr-2 h-4 w-4" />
            Accéder aux Ressources
          </Button>
        </Link>

        {/* Méthodologie ESH */}
        <Link
          to="/formation/esh/methodologie"
          className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[380px] justify-between border border-transparent hover:border-blue-300 hover:bg-blue-50 transform"
        >
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-center text-blue-700 group-hover:text-blue-800 transition-colors">Méthodologie</h3>
            <p className="text-sm text-blue-700 mb-4 text-center leading-relaxed font-medium">Techniques et stratégies<br/>pour réussir les épreuves ESH</p>
            <div className="space-y-2 text-sm mb-6 w-full">
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Analyse de documents</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Raisonnement économique</span>
              </div>
              <div className="flex items-center text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
                <span className="mr-2 text-xs">✓</span>
                <span className="font-medium">Préparation aux colles</span>
              </div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
            <Target className="mr-2 h-4 w-4" />
            Accéder à la Méthodologie
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FormationESHPage;
