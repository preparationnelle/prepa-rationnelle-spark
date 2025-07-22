
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MathChapterTemplateProps {
  chapterNumber: number;
  chapterTitle: string;
  description: string;
  children?: React.ReactNode;
}

export const MathChapterTemplate: React.FC<MathChapterTemplateProps> = ({
  chapterNumber,
  chapterTitle,
  description,
  children
}) => {
  return (
    <div className="min-h-screen bg-background py-8">
      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 mb-8">
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
            <Link to="/formation/maths" className="hover:text-foreground transition-colors">
              Formation Maths ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">{chapterTitle}</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chapitre {chapterNumber} : {chapterTitle}
            </CardTitle>
            <p className="text-sm text-slate-600 mt-2 font-medium">
              {description} — Semestre {chapterNumber <= 10 ? '1' : '2'}, Prépa ECG Maths Approfondies
            </p>
          </CardHeader>
        </Card>

        {children || (
          /* Default placeholder content */
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardTitle className="text-xl flex items-center gap-3">
                <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                  📝
                </span>
                <span className="font-semibold">Contenu en préparation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="text-center py-12">
                <p className="text-lg text-slate-600 mb-4">
                  Le contenu de ce chapitre sera ajouté prochainement.
                </p>
                <p className="text-slate-500">
                  Les concepts et exercices seront détaillés ici.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Conclusion */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-white to-purple-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 italic font-medium">
                {children ? "Fin du chapitre" : "Contenu à compléter ultérieurement."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
