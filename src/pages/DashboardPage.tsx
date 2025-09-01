import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useUserData } from '@/context/UserDataContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Star, 
  TrendingUp, 
  Calendar, 
  Languages, 
  Brain, 
  Target, 
  Clock,
  FileText,
  Lightbulb
} from 'lucide-react';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const { userData } = useUserData();

  if (!currentUser) {
  return (
      <div className="min-h-screen bg-[#F8FAFF] flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">Connexion requise</h2>
            <p className="text-gray-600 mb-6">Connectez-vous pour accéder à votre dashboard personnalisé.</p>
            <Link to="/login">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Se connecter
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'spanish': return 'bg-red-100 text-red-700 border-red-200';
      case 'english': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'german': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'flashcard': return <BookOpen className="h-4 w-4" />;
      case 'paragraph': return <FileText className="h-4 w-4" />;
      case 'essay': return <FileText className="h-4 w-4" />;
      case 'correction': return <Target className="h-4 w-4" />;
      case 'chat': return <Brain className="h-4 w-4" />;
      default: return <Lightbulb className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles only */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-black">Mon </span>
            <span className="text-blue-600">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bienvenue {currentUser.displayName || currentUser.email} ! 
            Retrouvez ici toutes vos activités et contenus personnalisés.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white border-2 border-blue-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Flashcards étudiées</p>
                  <p className="text-3xl font-bold text-blue-700">{userData.progress.totalFlashcardsStudied}</p>
                </div>
                <BookOpen className="h-12 w-12 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-green-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Cartes à revoir</p>
                  <p className="text-3xl font-bold text-green-700">{userData.flashcardsToReview.length}</p>
                </div>
                <Star className="h-12 w-12 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Contenu généré</p>
                  <p className="text-3xl font-bold text-purple-700">{userData.progress.totalContentGenerated}</p>
                </div>
                <Brain className="h-12 w-12 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-orange-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Matières étudiées</p>
                  <p className="text-3xl font-bold text-orange-700">{userData.progress.subjectsStudied.length}</p>
                </div>
                <TrendingUp className="h-12 w-12 text-orange-500" />
              </div>
          </CardContent>
        </Card>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Flashcards à revoir */}
          <Card className="bg-white border-2 border-blue-100 shadow-xl">
          <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Star className="h-6 w-6" />
                Flashcards à revoir ({userData.flashcardsToReview.length})
              </CardTitle>
          </CardHeader>
          <CardContent>
              {userData.flashcardsToReview.length === 0 ? (
                <div className="text-center py-8">
                  <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Aucune flashcard marquée pour révision</p>
                  <Link to="/formation/espagnol/vocabulaire" className="mt-4 inline-block">
                    <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                      Commencer l'étude
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {userData.flashcardsToReview.slice(0, 10).map((flashcard) => (
                    <div key={`${flashcard.id}-${flashcard.language}`} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={`text-xs ${getLanguageColor(flashcard.language)}`}>
                            {flashcard.language === 'spanish' ? 'Espagnol' : flashcard.language}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {flashcard.category}
                    </Badge>
                        </div>
                        <p className="font-medium text-gray-900">{flashcard.french}</p>
                        <p className="text-sm text-gray-600">→ {flashcard.translation}</p>
                        <p className="text-xs text-gray-400">
                          Marqué le {formatDate(flashcard.markedAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                  {userData.flashcardsToReview.length > 10 && (
                    <p className="text-sm text-gray-500 text-center mt-3">
                      Et {userData.flashcardsToReview.length - 10} autres...
                    </p>
                  )}
                  <div className="mt-4 flex gap-2">
                    <Link to="/formation/espagnol/vocabulaire" className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Réviser l'espagnol
                      </Button>
                    </Link>
                  </div>
                </div>
            )}
          </CardContent>
        </Card>

          {/* Contenu généré récemment */}
          <Card className="bg-white border-2 border-purple-100 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Brain className="h-6 w-6" />
                Contenu généré récemment
              </CardTitle>
            </CardHeader>
            <CardContent>
              {userData.generatedContent.length === 0 ? (
                <div className="text-center py-8">
                  <Brain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Aucun contenu généré</p>
                  <Link to="/generator" className="mt-4 inline-block">
                    <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                      Découvrir les générateurs IA
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {userData.generatedContent.slice(0, 5).map((content) => (
                    <div key={content.id} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        {getContentTypeIcon(content.type)}
                        <Badge variant="outline" className="text-xs">
                          {content.type}
                        </Badge>
                        {content.subject && (
                          <Badge className="text-xs bg-purple-100 text-purple-700">
                            {content.subject}
                          </Badge>
                        )}
                      </div>
                      <h4 className="font-medium text-gray-900 mb-1">{content.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{content.content.substring(0, 100)}...</p>
                      <p className="text-xs text-gray-400 mt-2">
                        Généré le {formatDate(content.generatedAt)}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Actions rapides */}
        <Card className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-center text-blue-800">Actions rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/formation/espagnol/vocabulaire">
                <Button className="w-full h-16 bg-red-600 hover:bg-red-700 text-white flex items-center gap-3">
                  <Languages className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">Flashcards Espagnol</div>
                    <div className="text-sm opacity-90">Étudier le vocabulaire</div>
                  </div>
                </Button>
              </Link>
              
              <Link to="/generator">
                <Button className="w-full h-16 bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-3">
                  <Brain className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">Générateurs IA</div>
                    <div className="text-sm opacity-90">Créer du contenu</div>
                  </div>
                </Button>
              </Link>
              
              <Link to="/formations">
                <Button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-3">
                  <BookOpen className="h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">Formations</div>
                    <div className="text-sm opacity-90">Explorer les cours</div>
                  </div>
                </Button>
              </Link>
                    </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;