import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Target, FileText, Sparkles, BookOpen, Clock, Home, ChevronRight, PenTool, Users, MapPin } from 'lucide-react';

const FormationGeopolitiquePage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
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
            <span className="text-foreground font-medium">
              Formation <span className="text-blue-600">Géopolitique</span>
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
            <span className="text-blue-600">Géopolitique</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-black mb-8 max-w-5xl mx-auto">
            Analysez les enjeux mondiaux contemporains avec une méthode claire et des outils modernes
          </p>
        </div>

        {/* Niveaux d'étude */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Première Année */}
          <Link
            to="/formation/geopolitique/premiere-annee"
            className="bg-[#F7F9FC] rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Première Année</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Fondamentaux géopolitiques<br/>et méthodes d'analyse essentielles</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Mutations mondiales 1913</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Outils d'analyse</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Bases fondamentales</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Accéder aux modules
            </Button>
          </Link>

          {/* Deuxième Année */}
          <Link
            to="/formation/geopolitique/deuxieme-annee"
            className="bg-[#F7F9FC] rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Deuxième Année</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Géodynamiques régionales<br/>et enjeux contemporains</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Europe, Afrique, Amériques</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Asie, Moyen-Orient</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Analyses détaillées</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <Globe className="mr-2 h-4 w-4" />
              Accéder aux modules
            </Button>
          </Link>
        </div>

        {/* Modules principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {/* Pronostics 2025 */}
          <Link
            to="/formation/geopolitique/sujets-probables"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Pronostics 2025</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Sujets probables géopolitiques<br/>analysés par des experts</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Plans détaillés</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Thématiques prioritaires</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Analyses d'experts</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <Target className="mr-2 h-4 w-4" />
              Découvrir les pronostics
            </Button>
          </Link>

          {/* Études de cas */}
          <Link
            to="/formation/geopolitique/etudes-de-cas"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Études de cas</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">19 analyses thématiques<br/>essentielles actualisées</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Migrations, transports</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Énergies, ressources</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Données 2024-2025</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <FileText className="mr-2 h-4 w-4" />
              Explorer les études de cas
            </Button>
          </Link>

          {/* Chronologies */}
          <Link
            to="/formation/geopolitique/chronologies"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <Clock className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Chronologies</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">6 régions avec repères<br/>historiques essentiels</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Europe, Moyen-Orient</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Amériques, Asie, Afrique</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Repères 1492-2025</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <Clock className="mr-2 h-4 w-4" />
              Explorer les chronologies
            </Button>
          </Link>

          {/* Méthodologie */}
          <Link
            to="/formation/geopolitique/methodologie"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <PenTool className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Méthodologie</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Méthodes de travail quotidien<br/>et techniques d'entraînement</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Études de cas types</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Dissertations efficaces</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Techniques d'entraînement</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <PenTool className="mr-2 h-4 w-4" />
              Découvrir la méthodologie
            </Button>
          </Link>
        </div>

        {/* Outils et Ressources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {/* Annales */}
          <Link
            to="/formation/geopolitique/annales"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Annales</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">25 ans de sujets<br/>ESSEC HGG et ESCP HGGMC</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">2000-2025</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">ESSEC & ESCP</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Analyses complètes</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Consulter les annales
            </Button>
          </Link>

          {/* Flashcards */}
          <Link
            to="/formation/geopolitique/flashcards"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Flashcards</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">200 mots de vocabulaire<br/>géopolitique essentiel</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Définitions clés</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Nuances indispensables</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Cartes de révision</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Accéder aux flashcards
            </Button>
          </Link>

          {/* Générateur IA */}
          <Link
            to="/formation/geopolitique/generateur"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <Sparkles className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Générateur IA</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Contenu géopolitique<br/>automatisé et personnalisé</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Cours structurés</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Sujets de dissertation</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Veille d'actualité</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Accéder au générateur
            </Button>
          </Link>

          {/* Références */}
          <Link
            to="/formation/geopolitique/references"
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-200 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                <FileText className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Références</h3>
              <p className="text-sm text-black mb-8 text-center leading-relaxed font-semibold">Bibliographie complète<br/>organisée par thématiques</p>
              <div className="space-y-2 text-sm mb-6 w-full">
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Ouvrages indispensables</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Organisation thématique</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg py-2 px-3">
                  <span className="mr-2 text-xs">✓</span>
                  <span className="font-medium">Approfondissement</span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
              <FileText className="mr-2 h-4 w-4" />
              Consulter les références
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationGeopolitiquePage;