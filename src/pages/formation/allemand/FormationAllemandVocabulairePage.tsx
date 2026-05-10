import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Languages, Home, ChevronRight } from 'lucide-react';

const FormationAllemandVocabulairePage = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Blue and orange bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-carnet-red/20 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-carnet-red/20 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-carnet-red/10 rounded-full opacity-5 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
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
            <Link to="/formation/allemand" className="hover:text-foreground transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground">Vocabulaire</span>
          </div>
        </div>
      </nav>

      {/* Section Héro moderne */}
      <section className="bg-white py-8 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-pr-orange text-white shadow-lg">
              <Languages className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-carnet-red to-orange-600 bg-clip-text text-transparent font-bold">
              Vocabulaire Allemand
            </span>
          </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
              Maîtrisez le lexique essentiel de l'allemand pour les concours
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 text-sm font-medium bg-orange-100 text-orange-700 rounded-full">200+ termes essentiels</span>
              <span className="px-4 py-2 text-sm font-medium bg-carnet-red/10 text-carnet-red rounded-full">Vocabulaire thématique</span>
              <span className="px-4 py-2 text-sm font-medium bg-orange-100 text-orange-700 rounded-full">Flashcards interactives</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6 bg-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Vocabulaire Allemand - Flashcards</h2>
            <p className="text-lg text-gray-600 mb-8">
              Maîtrisez le vocabulaire allemand grâce à nos flashcards interactives organisées par thèmes
            </p>
          </div>

          {/* Modules principaux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Vocabulaire Politique */}
            <Link
              to="/formation/allemand/vocabulaire-politique"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Politique</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Vocabulaire politique, institutions et élections allemandes</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire politique
              </Button>
            </Link>

            {/* Vocabulaire Démographie */}
            <Link
              to="/formation/allemand/vocabulaire-demographie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Démographie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Population, migration, vieillissement et société</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire démographie
              </Button>
            </Link>

            {/* Vocabulaire Écologie */}
            <Link
              to="/formation/allemand/vocabulaire-ecologie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Écologie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Environnement, transition énergétique et développement durable</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire écologie
              </Button>
            </Link>

            {/* Vocabulaire Géopolitique */}
            <Link
              to="/formation/allemand/vocabulaire-geopolitique"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Géopolitique</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Relations internationales, UE et sécurité européenne</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire géopolitique
              </Button>
            </Link>

            {/* Vocabulaire Économie */}
            <Link
              to="/formation/allemand/vocabulaire-wirtschaft"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Économie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Industrie, commerce, finance et marché du travail allemand</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire économie
              </Button>
            </Link>

            {/* Vocabulaire Culture */}
            <Link
              to="/formation/allemand/vocabulaire-kultur"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Culture</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Identité culturelle, diversité et société allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire culture
              </Button>
            </Link>

            {/* Vocabulaire Éducation */}
            <Link
              to="/formation/allemand/vocabulaire-bildung"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Éducation</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Système éducatif, formation professionnelle et recherche</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire éducation
              </Button>
            </Link>

            {/* Vocabulaire Innovation */}
            <Link
              to="/formation/allemand/vocabulaire-innovation"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Innovation</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Technologie, recherche, start-ups et transformation numérique</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire innovation
              </Button>
            </Link>

            {/* Vocabulaire Femmes */}
            <Link
              to="/formation/allemand/vocabulaire-frauen"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Égalité des Genres</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Droits des femmes, égalité et politiques sociales en Allemagne</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire égalité
              </Button>
            </Link>

            {/* Vocabulaire Histoire */}
            <Link
              to="/formation/allemand/vocabulaire-geschichte"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pr-orange-pale/60 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-carnet-red/20 transition-all duration-300">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Histoire</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Mémoire collective, histoire contemporaine et travail de mémoire</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium transition-all duration-300">
                Vocabulaire histoire
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/formation/allemand"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pr-orange hover:from-orange-600 hover:to-pr-orange text-white font-medium rounded-lg transition-all duration-300"
            >
              Retour à la formation Allemand
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationAllemandVocabulairePage;
