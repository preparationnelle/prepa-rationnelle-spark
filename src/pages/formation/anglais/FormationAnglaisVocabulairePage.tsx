import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Home, ChevronRight } from 'lucide-react';
import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const FormationAnglaisVocabulairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
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
            <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
              Formation <span className="text-blue-600">Anglais</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">
              <span className="text-blue-600">Vocabulaire Anglais</span>
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
              <BookOpen className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            <span className="text-blue-700 font-bold">
              Vocabulaire Anglais
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Maîtrisez le lexique essentiel pour vos épreuves de concours avec plus de 200 termes essentiels
          </p>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/formation/anglais">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                ← Retour à la formation
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-blue-700">200+ Termes</h3>
                <p className="text-sm text-gray-600">Vocabulaire essentiel pour les concours ECG</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-blue-700">Flashcards Interactives</h3>
                <p className="text-sm text-gray-600">Système d'apprentissage adaptatif</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-blue-100 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-blue-700">Exemples Contextuels</h3>
                <p className="text-sm text-gray-600">Phrases d'exemple pour chaque terme</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Flashcards Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 border-blue-100 shadow-xl">
            <CardContent className="p-6">
              <VocabularyFlashcards language={language} />
            </CardContent>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-2 border-blue-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-blue-700">Vocabulaire par Thème</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 mb-6">
                Explorez le vocabulaire spécialisé par domaine de civilisation
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link to="/formation/anglais/civilisation/environment/vocabulary">
                  <Button variant="outline" className="w-full text-sm">
                    Environnement
                  </Button>
                </Link>
                <Link to="/formation/anglais/civilisation/politics/vocabulary">
                  <Button variant="outline" className="w-full text-sm">
                    Politique
                  </Button>
                </Link>
                <Link to="/formation/anglais/civilisation/economy/vocabulary">
                  <Button variant="outline" className="w-full text-sm">
                    Économie
                  </Button>
                </Link>
                <Link to="/formation/anglais/civilisation/health/vocabulary">
                  <Button variant="outline" className="w-full text-sm">
                    Santé
                  </Button>
                </Link>
                <Link to="/formation/anglais/civilisation/education/vocabulary">
                  <Button variant="outline" className="w-full text-sm">
                    Éducation
                  </Button>
                </Link>
                <Link to="/formation/anglais/civilisation/media/vocabulary">
                  <Button variant="outline" className="w-full text-sm">
                    Médias
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FormationAnglaisVocabulairePage;
