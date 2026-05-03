import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ChevronRight, Home, Construction } from 'lucide-react';

interface ChapterPageTemplateProps {
  title: string;
  chapterNumber: number;
  type: 'Cours' | 'Exercices' | 'Quiz';
  backToMain: string;
  nextPages: {
    cours?: string;
    exercices?: string;
    quiz?: string;
  };
}

const ChapterPageTemplate: React.FC<ChapterPageTemplateProps> = ({
  title,
  chapterNumber,
  type,
  backToMain,
  nextPages
}) => {
  const getMessage = () => {
    switch (type) {
      case 'Cours':
        return 'Le cours sur ' + title.toLowerCase() + ' sera disponible prochainement.';
      case 'Exercices':
        return 'Les exercices sur ' + title.toLowerCase() + ' seront disponibles prochainement.';
      case 'Quiz':
        return 'Le quiz sur ' + title.toLowerCase() + ' sera disponible prochainement.';
      default:
        return 'Cette page sera disponible prochainement.';
    }
  };

  const getDescription = () => {
    switch (type) {
      case 'Cours':
        return 'Nous travaillons actuellement à la création d\'un contenu adapté aux besoins spécifiques de la voie appliquée en prépa ECG.';
      case 'Exercices':
        return 'Nous travaillons actuellement à la création d\'exercices adaptés aux besoins spécifiques de la voie appliquée en prépa ECG.';
      case 'Quiz':
        return 'Nous travaillons actuellement à la création de questions interactives adaptées aux besoins spécifiques de la voie appliquée en prépa ECG.';
      default:
        return 'Nous travaillons actuellement à la création d\'un contenu adapté aux besoins spécifiques de la voie appliquée en prépa ECG.';
    }
  };

  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to={backToMain} className="hover:text-[#1e3a8a] transition-colors">
              Maths Appliquées
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-green-600 font-bold">Chapitre {chapterNumber} - {title}</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 mb-8">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <p className="text-slate-600 text-lg">
              {type} - Chapitre {chapterNumber} : Théorie approfondie et applications pratiques
            </p>
          </div>
        </Card>

        {/* Message temporaire */}
        <Card className="border-0 shadow-lg">
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {type} en cours de construction
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {getMessage()}
              <br />
              {getDescription()}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {nextPages.cours && type !== 'Cours' && (
                <Link to={nextPages.cours} className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  Cours
                </Link>
              )}
              {nextPages.exercices && type !== 'Exercices' && (
                <Link to={nextPages.exercices} className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                  Exercices
                </Link>
              )}
              {nextPages.quiz && type !== 'Quiz' && (
                <Link to={nextPages.quiz} className="inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                  Quiz
                </Link>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChapterPageTemplate;
