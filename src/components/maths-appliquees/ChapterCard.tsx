import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, Target, LucideIcon, Brain } from 'lucide-react';
import { getAllRoutePaths } from '@/config/routes';

interface ChapterCardProps {
  id: number;
  slug: string;
  title: string;
  icon: LucideIcon;
  color: string;
  symbol: string;
  description?: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({
  id,
  slug,
  title,
  icon: Icon,
  color,
  symbol,
  description = "Théorie approfondie et applications pratiques"
}) => {
  const allPaths = getAllRoutePaths();

  const coursePath = `/formation/maths-${slug}`;
  const exercisesPath = `/formation/maths-${slug}-exercices`;
  const flashcardsPath = `/formation/maths-${slug}-flashcards`;
  const quizPath = `/formation/maths-${slug}-quiz`;

  const hasCourse = allPaths.includes(coursePath);
  const hasExercises = allPaths.includes(exercisesPath);
  const hasFlashcards = allPaths.includes(flashcardsPath);

  // Liste explicite des slugs qui ont des quiz
  const quizSlugs = [
    'elements-de-logique',
    'ensembles-et-applications',
    'sommes-produits-coefficients-binomiaux',
    'suites-numeriques',
    'fonctions-d-une-variable-reelle',
    'derivation',
    'integration-sur-un-segment',
    'polynomes',
    'matrices-espaces-vectoriels',
    'algebre-bilineaire-espaces-euclidiens',
    'probabilites-conditionnement',
    'applications-lineaires-structures-vectorielles',
    'comparaison-negligeabilite-equivalence',
    'series-numeriques',
    'developpements-limites-formule-de-taylor',
    'integrales-impropres-criteres-de-convergence',
    'espaces-probabilises-conditionnement',
    'variables-aleatoires-discretes-lois',
    'convergences-theoremes-limites',
    'complements-algebre-lineaire',
    'endomorphismes-matrices-avancees',
    'algebre-bilineaire',
    'fonctions-multivariees-calcul-differentiel',
    'variables-aleatoires-densite',
    'n-uplets-variables-aleatoires',
    'couple-variables-aleatoires',
    'reduction-matrices-symetriques',
    'optimisation-multivariee-avancee',
    'convergences-approximations',
    'estimation-statistique-avancee'
  ];

  const hasQuiz = quizSlugs.includes(slug);

  const resolvedCourseHref = hasCourse ? coursePath : (hasExercises ? exercisesPath : undefined);

  return (
    <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-200 h-full flex flex-col">
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative`}>
          <span className="text-2xl font-bold text-white">{symbol}</span>
          <div className="absolute -top-1 -right-1 bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold border-2 border-blue-600 shadow-sm">
            <Brain className="h-3 w-3 mr-0.5" />
            {id}
          </div>
        </div>
        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50 text-center px-3 py-2 text-sm font-medium w-full flex items-center justify-center">
          Chapitre {id} : {title}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed flex-1">
          {description}
        </p>
        <div className="space-y-3 mt-auto">
          {resolvedCourseHref && (
            <Link to={resolvedCourseHref} className="w-full">
              <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                <BookOpen className="mr-2 h-4 w-4" />
                Cours
              </Button>
            </Link>
          )}

          {hasExercises && (
            <Link to={exercisesPath} className="w-full">
              <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                <Play className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            </Link>
          )}

          {hasFlashcards && (
            <Link to={flashcardsPath} className="w-full">
              <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                <Brain className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            </Link>
          )}

          {hasQuiz && (
            <Link to={quizPath} className="w-full">
              <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                <Target className="mr-2 h-4 w-4" />
                Quiz
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;
