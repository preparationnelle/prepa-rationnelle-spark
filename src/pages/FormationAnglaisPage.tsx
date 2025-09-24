import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Globe, ChevronRight, PenTool, Languages, Home } from 'lucide-react';

const FormationAnglaisPage = () => {

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">
              Formation <span className="text-blue-600">Anglais</span> ECG
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Hero Section */}
        <div className="text-center mb-16">
            {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-black">Formation </span>
            <span className="text-blue-600">Anglais</span>
            <span className="text-black"> ECG</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
            Formation complète pour maîtriser l'anglais aux concours des Grandes Écoles de Commerce
          </p>


        </div>

        {/* Modules principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {/* Vocabulaire Anglais */}
          <Link
            to="/formation/anglais/vocabulaire"
            className="bg-[#F7F9FC] rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-300 hover:bg-orange-50 transform"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600 group-hover:text-orange-800 transition-colors">Vocabulaire</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Maîtrisez le lexique essentiel<br/>pour vos épreuves de concours</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">200+ termes essentiels</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Flashcards interactives</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Système de révision</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Réviser le vocabulaire
            </Button>
          </Link>
          {/* Grammaire en Anglais */}
          <Link
            to="/formation/anglais/grammaire"
            className="bg-[#F7F9FC] rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-300 hover:bg-orange-50 transform"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600 group-hover:text-orange-800 transition-colors">Grammaire</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Maîtrisez les règles essentielles<br/>de grammaire anglaise</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Temps verbaux complexes</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Structures syntaxiques</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Style et expression</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Étudier la grammaire
            </Button>
          </Link>

          {/* Civilisation Anglophone */}
          <Link
            to="/formation/anglais/civilisation"
            className="bg-[#F7F9FC] rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-300 hover:bg-orange-50 transform"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600 group-hover:text-orange-800 transition-colors">Civilisation</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Enjeux contemporains<br/>du monde anglophone</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Politique et société</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Économie et technologie</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Culture et environnement</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <Globe className="mr-2 h-4 w-4" />
              Explorer la civilisation
            </Button>
          </Link>

          {/* Méthodologie Complète */}
          <Link
            to="/formation/anglais/methodologie-complete"
            className="bg-[#F7F9FC] rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-300 hover:bg-orange-50 transform"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <PenTool className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600 group-hover:text-orange-800 transition-colors">Méthodologie</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Méthode complète en 7 étapes<br/>pour réussir les épreuves</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Traduction et grammaire</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Essais et synthèses</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Préparation aux colles</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <PenTool className="mr-2 h-4 w-4" />
              Découvrir la méthode
            </Button>
          </Link>

        </div>


      </div>
    </div>
  );
};

export default FormationAnglaisPage;
