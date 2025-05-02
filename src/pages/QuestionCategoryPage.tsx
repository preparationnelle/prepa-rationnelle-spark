
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { questionCategories, QuestionCategory } from '../data/questionCards';
import { QuestionCard } from '../components/questions/QuestionCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, User, Target, UsersRound, Sparkles, Map, Heart } from 'lucide-react';

const QuestionCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [category, setCategory] = useState<QuestionCategory | null>(null);

  useEffect(() => {
    const foundCategory = questionCategories.find(
      (cat) => cat.id === categoryId
    );
    setCategory(foundCategory || null);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="min-h-screen bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Catégorie non trouvée</h1>
          <Link to="/questions">
            <Button>Retour aux questions</Button>
          </Link>
        </div>
      </div>
    );
  }

  const iconMap: Record<string, React.ReactNode> = {
    'user': <User className="text-primary" />,
    'target': <Target className="text-primary" />,
    'users-round': <UsersRound className="text-primary" />,
    'sparkles': <Sparkles className="text-primary" />,
    'map': <Map className="text-primary" />,
    'heart': <Heart className="text-primary" />,
  };

  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/questions">
            <Button variant="ghost" className="flex items-center gap-2">
              <ChevronLeft size={16} />
              Retour aux catégories
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            {iconMap[category.icon]}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{category.title}</h1>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {category.questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCategoryPage;
