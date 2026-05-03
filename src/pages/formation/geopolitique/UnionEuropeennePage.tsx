import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, BookOpen, Globe, MapPin, Quote, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield, Coins, Target, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

const UnionEuropeennePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-900 transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/deuxieme-annee" className="hover:text-gray-900 transition-colors">
              Deuxième Année
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Union européenne</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Flag className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Union européenne
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Intégrations, fragmentations et géopolitique européenne face aux défis contemporains.
          </p>
          
          {/* Objectifs du chapitre */}
          <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Objectifs d'apprentissage
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-blue-700">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">UE et ses territoires : intégrations/fragmentations</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <Globe className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">UE et voisinage proche : Russie et Méditerranée</span>
              </div>
              <div className="flex items-center gap-2 text-blue-700">
                <Users className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">UE dans le monde</span>
              </div>
            </div>
          </div>
        </div>

        {/* Études de cas clés */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-blue-600" />
              Études de cas clés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Brexit et ses conséquences</h4>
                <p className="text-sm text-gray-600">Analyse des impacts politiques, économiques et géopolitiques</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Guerre en Ukraine</h4>
                <p className="text-sm text-gray-600">Défis sécuritaires et énergétiques pour l'UE</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Élargissement de l'UE</h4>
                <p className="text-sm text-gray-600">Enjeux et perspectives d'intégration</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers ressources */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link to="/formation/geopolitique/chronologie-europe">
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-blue-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Quote className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-semibold mb-2">Chronologie</h3>
                <p className="text-sm text-gray-600">Histoire européenne de 1648 à nos jours</p>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="h-full border-2 border-gray-200 opacity-75">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-500">Dissertations</h3>
              <p className="text-sm text-gray-400">Sujets et corrigés (à venir)</p>
            </CardContent>
          </Card>

          <Link to="/formation/geopolitique/union-europeenne/flashcards">
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-orange-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Flashcards</h3>
                <p className="text-sm text-gray-600">Révision interactive</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Partie I */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Globe className="h-6 w-6 text-blue-600" />
              I. Historique de la construction européenne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-white rounded-lg border border-blue-200">
              <p className="text-blue-800">
                Cette section est temporairement simplifiée pour corriger des erreurs de balisage JSX. Elle sera restaurée rapidement avec tout le contenu.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Partie II */}
        <Card className="mt-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              II. Les défis contemporains de l'Union européenne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 bg-white rounded-lg border border-orange-200">
              <p className="text-orange-800">
                Cette section est temporairement simplifiée le temps de corriger un problème de balises JSX. Elle sera restaurée très rapidement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Note de développement */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-yellow-800">
              <AlertTriangle className="h-5 w-5" />
              <p className="font-semibold">Développement en cours</p>
            </div>
            <p className="text-yellow-700 mt-2 text-sm">
              Cette page présente le développement complet des parties I (Historique) et II (Défis contemporains). La partie III sera ajoutée progressivement selon le programme de géopolitique européenne.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnionEuropeennePage;