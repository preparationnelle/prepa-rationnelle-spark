import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Home, ChevronRight } from 'lucide-react';

const FormationAllemandCivilisationPage = () => {
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
            <span className="text-foreground">Civilisation</span>
          </div>
        </div>
      </nav>

      {/* Section Héro moderne */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-500 text-white shadow-lg">
                <Globe className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 via-blue-600 to-orange-600 bg-clip-text text-transparent font-bold">
                Civilisation Allemande
              </span>
          </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
              Découvrez l'Allemagne contemporaine et ses enjeux sociétaux
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-4 py-2 text-sm font-medium bg-orange-100 text-orange-700 rounded-full">Institutions allemandes</span>
              <span className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">Société moderne</span>
              <span className="px-4 py-2 text-sm font-medium bg-orange-100 text-orange-700 rounded-full">Enjeux européens</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Thèmes de Civilisation Allemande</h2>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez l'Allemagne contemporaine à travers ses différents aspects sociétaux, politiques et culturels
            </p>
          </div>

          {/* Modules principaux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Politique */}
            <Link
              to="/formation/allemand/politik"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Politik</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Système politique allemand, élections, partis politiques et gouvernements</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la politique
              </Button>
            </Link>

            {/* Démographie */}
            <Link
              to="/formation/allemand/demographie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Démographie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Évolution démographique, vieillissement, migration et société allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la démographie
              </Button>
            </Link>

            {/* Écologie */}
            <Link
              to="/formation/allemand/ecologie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Écologie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Transition énergétique, protection de l'environnement et développement durable</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'écologie
              </Button>
            </Link>

            {/* Économie et Industrie */}
            <Link
              to="/formation/allemand/industrie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Économie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Industrie 4.0, économie allemande, commerce international et innovation</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'économie
              </Button>
            </Link>

            {/* Géopolitique */}
            <Link
              to="/formation/allemand/geopolitique"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Géopolitique</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Union européenne, relations internationales et sécurité allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la géopolitique
              </Button>
            </Link>

            {/* Culture et Société */}
            <Link
              to="/formation/allemand/culture"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Culture</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Identité culturelle, diversité, histoire et mémoire collective allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la culture
              </Button>
            </Link>

            {/* Éducation */}
            <Link
              to="/formation/allemand/education"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Éducation</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Système éducatif allemand, formation professionnelle et excellence académique</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'éducation
              </Button>
            </Link>

            {/* Technologie */}
            <Link
              to="/formation/allemand/technologie"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Technologie</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Innovation technologique, recherche scientifique et start-ups allemandes</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer la technologie
              </Button>
            </Link>

            {/* Femmes et Égalité */}
            <Link
              to="/formation/allemand/femmes"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Égalité</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Droits des femmes, égalité des genres et politiques sociales en Allemagne</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'égalité
              </Button>
            </Link>

            {/* Histoire et Mémoire */}
            <Link
              to="/formation/allemand/geschichte"
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center min-h-[280px] justify-between hover:scale-[1.02] transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-200 group-hover:to-blue-200 transition-all duration-300">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="font-bold text-xl mb-4 text-center text-orange-700 group-hover:text-orange-800 transition-colors">Histoire</h3>
                <p className="text-sm text-orange-700 mb-6 text-center leading-relaxed">Mémoire collective, travail de mémoire et histoire contemporaine allemande</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-medium transition-all duration-300">
                Explorer l'histoire
              </Button>
            </Link>
          </div>

          <div className="text-center">
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

export default FormationAllemandCivilisationPage;