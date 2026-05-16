import React from 'react';
import { Link } from 'react-router-dom';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Target, PenTool, Construction } from 'lucide-react';

const Chapitre23StatistiquesDescriptivesCoursPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={23}
      chapterTitle="Les statistiques descriptives"
      description="Théorie approfondie et applications pratiques [[memory:6842989]]"
      slug="statistiques-descriptives"
      showNavigation={true}
    >
      {/* Navigation vers les ressources */}
      <Card className="border-0 shadow-lg bg-pr-gray-bg">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-statistiques-descriptives">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white">
                <BookOpen className="mr-2 h-4 w-4" />
                Cours
              </Button>
            </Link>
            <Link to="/formation/maths-statistiques-descriptives-exercices">
              <Button variant="outline" className="border-carnet-red/40 text-carnet-red hover:bg-pr-gray-bg">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/maths-statistiques-descriptives-quiz">
              <Button variant="outline" className="border-carnet-red/40 text-carnet-red hover:bg-pr-gray-bg">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Message temporaire - En construction */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-carnet-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-carnet-red" />
          </div>
          <h2 className="text-2xl font-semibold text-carnet-ink mb-4">
            Cours en cours de construction
          </h2>
          <p className="text-carnet-ink-soft max-w-2xl mx-auto mb-8">
            Le cours sur les statistiques descriptives sera disponible prochainement.
            Nous travaillons actuellement à la création d'un contenu adapté aux besoins spécifiques de la voie appliquée en prépa ECG.
          </p>
        </CardContent>
      </Card>

      {/* Navigation secondaire */}
      <Card className="border-0 shadow-lg bg-carnet-paper">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/formation/maths-appliquees">
              <Button variant="outline" className="border-gray-300 text-carnet-ink-soft hover:bg-carnet-paper">
                Retour aux chapitres
              </Button>
            </Link>
            <Link to="/formation/maths-statistiques-descriptives-exercices">
              <Button className="bg-carnet-red hover:bg-carnet-red-deep text-white">
                <PenTool className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </MathChapterTemplate>
  );
};

export default Chapitre23StatistiquesDescriptivesCoursPage;
