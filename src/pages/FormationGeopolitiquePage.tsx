import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Target, FileText, Sparkles, BookOpen, Clock, Home, ChevronRight, PenTool, Users, MapPin, TreePine, Snowflake, Building, Ship, Cpu, DollarSign, Shield, MessageCircle } from 'lucide-react';

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
        <div className="text-center mb-10">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Formation </span>
            <span className="text-blue-600">Géopolitique</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-black mb-6 max-w-4xl mx-auto">
            Analysez les enjeux mondiaux contemporains avec une méthode claire et des outils modernes
          </p>
        </div>

        {/* Niveaux d'étude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Première Année */}
          <Link
            to="/formation/geopolitique/premiere-annee"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
          >
            <div className="flex flex-row items-center gap-4 mb-4 w-full justify-center">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <BookOpen className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl text-blue-700 leading-tight">Première Année</h3>
                <p className="text-xs text-gray-600 font-medium">Fondamentaux & Méthodes</p>
              </div>
            </div>

            {/* Checklists removed for compactness */}

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 h-9 shadow-md rounded-lg mt-auto">
              Accéder aux modules
              <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>

          {/* Deuxième Année */}
          <Link
            to="/formation/geopolitique/deuxieme-annee"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
          >
            <div className="flex flex-row items-center gap-4 mb-4 w-full justify-center">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Globe className="h-7 w-7 text-blue-600" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl text-blue-700 leading-tight">Deuxième Année</h3>
                <p className="text-xs text-gray-600 font-medium">Géodynamiques & Enjeux</p>
              </div>
            </div>

            {/* Checklists removed for compactness */}

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 h-9 shadow-md rounded-lg mt-auto">
              Accéder aux modules
              <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
        </div>

        {/* Modules et Ressources Compacts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">

          {/* Pronostics 2025 */}
          <Link
            to="/formation/geopolitique/sujets-probables"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Target className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Pronostics 2025</h3>
            <p className="text-xs text-gray-500 leading-snug">Sujets probables</p>
          </Link>

          {/* Thèmes centraux */}
          <Link
            to="/formation/geopolitique/etudes-de-cas"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Thèmes centraux</h3>
            <p className="text-xs text-gray-500 leading-snug">19 analyses clés</p>
          </Link>

          {/* Chronologies */}
          <Link
            to="/formation/geopolitique/chronologies"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Chronologies</h3>
            <p className="text-xs text-gray-500 leading-snug">Repères historiques</p>
          </Link>

          {/* Méthodologie */}
          <Link
            to="/formation/geopolitique/methodologie"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <PenTool className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Méthodologie</h3>
            <p className="text-xs text-gray-500 leading-snug">Dissertations & E.C.</p>
          </Link>

          {/* Annales */}
          <Link
            to="/formation/geopolitique/annales"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Annales</h3>
            <p className="text-xs text-gray-500 leading-snug">25 ans de sujets</p>
          </Link>

          {/* Flashcards */}
          <Link
            to="/formation/geopolitique/flashcards"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Flashcards</h3>
            <p className="text-xs text-gray-500 leading-snug">Vocabulaire clé</p>
          </Link>

          {/* Générateur IA */}
          <Link
            to="/formation/geopolitique/generateur"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Sparkles className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Générateur IA</h3>
            <p className="text-xs text-gray-500 leading-snug">Contenu & Sujets</p>
          </Link>

          {/* Atlas ECG Chatbot */}
          <Link
            to="/formation/geopolitique/atlas-ecg"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <MessageCircle className="h-5 w-5 text-indigo-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Atlas ECG</h3>
            <p className="text-xs text-gray-500 leading-snug">Chatbot Géopolitique</p>
          </Link>

          {/* Références */}
          <Link
            to="/formation/geopolitique/references"
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col items-center text-center group"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-bold text-sm text-gray-900 mb-1">Références</h3>
            <p className="text-xs text-gray-500 leading-snug">Bibliographie</p>
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

            <div className="text-center mt-12">
              <Link
                to="/formation/geopolitique/cas-pratiques"
                className="inline-flex items-center justify-center px-8 py-3 bg-white border border-blue-200 text-blue-600 font-semibold rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Voir toutes les études de cas
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationGeopolitiquePage;