import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Target, FileText, Sparkles, BookOpen, Clock, Home, ChevronRight, PenTool, Users, MapPin, TreePine, Snowflake, Building, Ship, Cpu, DollarSign, Shield } from 'lucide-react';

const FormationGeopolitiquePage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

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
              <h3 className="font-bold text-2xl mb-4 text-center text-blue-600">Thèmes centraux</h3>
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
              Explorer les thèmes centraux
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

        {/* Études de cas - Section en bas avec style bleu simple */}
        <div className="mt-16 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Études de cas
              </h2>
              <p className="text-blue-700 text-lg max-w-3xl mx-auto">
                Découvrez nos études de cas approfondies sur les enjeux géopolitiques contemporains
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Forêt Amazonienne */}
              <Link
                to="/formation/geopolitique/etudes-de-cas/foret-amazonienne"
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TreePine className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Forêt Amazonienne</h3>
                <p className="text-gray-600 text-sm mb-4">
                  "Poumon de la planète" face à la déforestation accélérée. 20% de surface déboisée, enjeux climatiques majeurs.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Environnement • Climat • Biodiversité
                </div>
              </Link>

              {/* Antarctique */}
              <Link
                to="/formation/geopolitique/etudes-de-cas/antarctique"
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Antarctique</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ressources potentielles et traité de 1959. Tensions croissantes avec expansion chinoise et russe.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Droit international • Ressources • Climat
                </div>
              </Link>

              {/* Canada (guerre économique) */}
              <Link
                to="/formation/geopolitique/etudes-de-cas/canada-guerre-economique"
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Canada - Guerre économique</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ingérences chinoises et tariffs américains. Sécurité économique exposant 10-20% du PIB.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Économie • Sécurité • Commerce
                </div>
              </Link>

              {/* Dubai / The Line / Arabie Saoudite */}
              <Link
                to="/formation/geopolitique/etudes-de-cas/dubai-the-line"
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Dubai / The Line</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Vision 2030 et NEOM. Diversification économique post-pétrole, hubs touristiques et logistiques.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Économie • Tourisme • Énergie verte
                </div>
              </Link>

              {/* Canal de Suez */}
              <Link
                to="/formation/geopolitique/etudes-de-cas/canal-suez"
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Ship className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Canal de Suez</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chokepoint vital pour 12% du commerce mondial. Sécurité maritime et enjeux historiques.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Commerce • Sécurité maritime • Histoire
                </div>
              </Link>

              {/* NVIDIA IA (technologie) */}
              <Link
                to="/formation/geopolitique/etudes-de-cas/nvidia-ia"
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">NVIDIA - IA</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Leader en puces IA. Guerre technologique US-Chine, 80% du marché des GPU IA.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Technologie • Économie • Sécurité
                </div>
              </Link>

              {/* Guerre économique */}
              <Link
                to="/formation/geopolitique/etudes-de-cas/guerre-economique"
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Guerre économique</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Sanctions, tariffs et chokepoints. Déstabilisation des chaînes d'approvisionnement globales.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Économie • Commerce • Sécurité
                </div>
              </Link>

              {/* BRICS */}
              <Link
                to="/formation/geopolitique/etudes-de-cas/brics"
                className="bg-blue-50 rounded-lg p-6 shadow-md border border-blue-200 hover:shadow-lg hover:bg-blue-100 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">BRICS</h3>
                <p className="text-gray-600 text-sm mb-4">
                  10 membres, 55% population mondiale. Multipolarité, dé-dollarisation et contrepoids au G7.
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  Gouvernance • Économie émergente • Diplomatie
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <p className="text-blue-600 text-sm">
                Plus d'études de cas à venir...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationGeopolitiquePage;