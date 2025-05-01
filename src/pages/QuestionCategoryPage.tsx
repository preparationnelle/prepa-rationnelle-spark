
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { questionCategories, QuestionCategory } from '../data/questionCards';
import { QuestionCard } from '../components/questions/QuestionCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

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
    'brain': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
    'target': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    'users': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    'puzzle': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.179 3.178c.446.168.855.498.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/></svg>,
    'values': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8 13.5c0 2-2 3-4 3s-4-1-4-3 2-3 4-3 4 1 4 3z"/><path d="M12 4c0 2.5-2 3-4 3s-4-.5-4-3 2-3 4-3 4 .5 4 3z"/><path d="M16 5.5c0 1.5-1.5 2-3 2s-3-.5-3-2 1.5-2 3-2 3 .5 3 2z"/><path d="M16 10c0 2-1.5 3-3 3s-3-1-3-3 1.5-3 3-3 3 1 3 3z"/><path d="M15 17.5c0 1.5-1.5 2.5-3 2.5s-3-1-3-2.5 1.5-2.5 3-2.5 3 1 3 2.5z"/><path d="M19 18.5c0 1-1 1.5-2 1.5s-2-.5-2-1.5 1-1.5 2-1.5 2 .5 2 1.5z"/><path d="M20 13.5c0 1-1 1.5-2 1.5s-2-.5-2-1.5 1-1.5 2-1.5 2 .5 2 1.5z"/><path d="M20 8c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"/></svg>,
    'search': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
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
