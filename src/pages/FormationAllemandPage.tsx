
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Globe, Target, ChevronRight, Languages } from 'lucide-react';

const FormationAllemandPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Orange and blue bubbles */}
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
            <span className="text-foreground font-medium">Formation Allemand ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Hero Section */}
        <div className="text-center mb-16">
          {/* Hero Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-500 text-white shadow-lg">
              <Languages className="h-12 w-12" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-orange-600 bg-clip-text text-transparent font-bold">
              Formation Allemand ECG
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
            Formation complète pour maîtriser l'allemand aux concours des Grandes Écoles de Commerce
          </p>
        </div>

        {/* Modules principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {/* Vocabulaire Allemand */}
          <Link
            to="/formation/allemand/vocabulaire"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[420px] justify-between hover:scale-[1.02] transform"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                <Languages className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Vocabulaire Allemand</h3>
              <p className="text-sm text-orange-700 mb-8 text-center leading-relaxed font-medium">Maîtrisez le lexique essentiel de l'allemand : termes économiques, expressions courantes, vocabulaire académique et professionnel</p>
              <div className="space-y-3 text-sm mb-8 w-full">
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">200+ termes essentiels</span>
                </div>
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Vocabulaire thématique</span>
                </div>
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Flashcards interactives</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <Languages className="mr-2 h-4 w-4" />
              Accéder au Vocabulaire
            </Button>
          </Link>

          {/* Grammatik */}
          <Link
            to="/formation/allemand/grammaire"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[420px] justify-between hover:scale-[1.02] transform"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Grammatik</h3>
              <p className="text-sm text-orange-700 mb-8 text-center leading-relaxed font-medium">Maîtrisez tous les points de grammaire essentiels : déclinaisons, propositions relatives, passif, structure de la phrase et verbes irréguliers</p>
              <div className="space-y-3 text-sm mb-8 w-full">
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">6 fiches de grammaire complètes</span>
                </div>
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Exercices pratiques et exemples</span>
                </div>
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Toutes les formes de conjugaison</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Étudier la grammaire
            </Button>
          </Link>

          {/* Landeskunde */}
          <Link
            to="/formation/allemand/civilisation"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[420px] justify-between hover:scale-[1.02] transform"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <Globe className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Landeskunde</h3>
              <p className="text-sm text-orange-700 mb-8 text-center leading-relaxed font-medium">Découvrez l'Allemagne contemporaine : politique, démographie, écologie et géopolitique européenne</p>
              <div className="space-y-3 text-sm mb-8 w-full">
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">4 modules thématiques actualisés</span>
                </div>
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Culture allemande contemporaine</span>
                </div>
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Géopolitique européenne</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <Globe className="mr-2 h-4 w-4" />
              Explorer la civilisation
            </Button>
          </Link>

          {/* Prüfungserfolg */}
          <Link
            to="/formation/allemand/epreuves"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[420px] justify-between hover:scale-[1.02] transform"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                <Target className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Prüfungserfolg</h3>
              <p className="text-sm text-orange-700 mb-8 text-center leading-relaxed font-medium">Maîtrisez les différentes épreuves du concours : laisser, colle et synthèse de texte. Techniques, méthodologie et conseils pratiques</p>
              <div className="space-y-3 text-sm mb-8 w-full">
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Techniques pour tous les examens</span>
                </div>
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Méthodologie et conseils</span>
                </div>
                <div className="flex items-center text-orange-600 bg-orange-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Exemples pratiques</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <Target className="mr-2 h-4 w-4" />
              Réussir les épreuves
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationAllemandPage;
