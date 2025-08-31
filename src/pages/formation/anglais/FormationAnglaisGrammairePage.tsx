import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, ChevronRight, Home, FileText, Target } from 'lucide-react';

const FormationAnglaisGrammairePage = () => {
  const navigate = useNavigate();

  const grammarChapters = [
    {
      id: 'tenses',
      title: 'Temps Verbaux',
      description: 'Maîtrisez tous les temps verbaux anglais essentiels pour les concours',
      icon: BookOpen,
      color: 'bg-orange-600',
      route: '/formation/anglais/grammaire/tenses'
    },
    {
      id: 'conditionals',
      title: 'Conditionnels',
      description: 'Les structures conditionnelles et leur utilisation en contexte',
      icon: FileText,
      color: 'bg-blue-600',
      route: '/formation/anglais/grammaire/conditionals'
    },
    {
      id: 'passives',
      title: 'Voix Passives',
      description: 'Formation et utilisation des voix passives en anglais',
      icon: Target,
      color: 'bg-orange-600',
      route: '/formation/anglais/grammaire/passives'
    },
    {
      id: 'reported-speech',
      title: 'Discours Indirect',
      description: 'Transformation du discours direct en discours indirect',
      icon: BookOpen,
      color: 'bg-blue-600',
      route: '/formation/anglais/grammaire/reported-speech'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
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
              Formation <span className="text-orange-600">Anglais</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Grammaire Anglaise</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Grammaire Anglaise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Formation complète de grammaire anglaise pour maîtriser les épreuves des concours des Grandes Écoles de Commerce
          </p>
        </div>

        {/* Grammar Chapters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {grammarChapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={chapter.route}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-orange-100 hover:border-orange-200"
            >
              <div className={`w-16 h-16 ${chapter.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <chapter.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center">{chapter.title}</h3>
              <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">{chapter.description}</p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
                <chapter.icon className="mr-2 h-4 w-4" />
                Étudier ce chapitre
              </Button>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8 text-center border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Plus de chapitres à venir</h2>
            <p className="text-blue-700 mb-6">
              Nous travaillons actuellement sur l'ajout de nouveaux chapitres de grammaire anglaise.
              Restez connectés pour découvrir bientôt :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <span className="font-medium text-blue-900">Modaux et auxiliaires</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <span className="font-medium text-blue-900">Prépositions complexes</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <span className="font-medium text-blue-900">Structures syntaxiques</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationAnglaisGrammairePage;
