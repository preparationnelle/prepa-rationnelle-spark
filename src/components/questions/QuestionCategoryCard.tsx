
import React from 'react';
import { QuestionCategory } from '../../data/questionCards';
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Brain, Target, Users, Puzzle, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuestionCategoryCardProps {
  category: QuestionCategory;
}

const iconMap: Record<string, React.ReactNode> = {
  'brain': <Brain className="h-6 w-6 text-primary" />,
  'target': <Target className="h-6 w-6 text-primary" />,
  'users': <Users className="h-6 w-6 text-primary" />,
  'puzzle': <Puzzle className="h-6 w-6 text-primary" />,
  'values': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M8 13.5c0 2-2 3-4 3s-4-1-4-3 2-3 4-3 4 1 4 3z"/><path d="M12 4c0 2.5-2 3-4 3s-4-.5-4-3 2-3 4-3 4 .5 4 3z"/><path d="M16 5.5c0 1.5-1.5 2-3 2s-3-.5-3-2 1.5-2 3-2 3 .5 3 2z"/><path d="M16 10c0 2-1.5 3-3 3s-3-1-3-3 1.5-3 3-3 3 1 3 3z"/><path d="M15 17.5c0 1.5-1.5 2.5-3 2.5s-3-1-3-2.5 1.5-2.5 3-2.5 3 1 3 2.5z"/><path d="M19 18.5c0 1-1 1.5-2 1.5s-2-.5-2-1.5 1-1.5 2-1.5 2 .5 2 1.5z"/><path d="M20 13.5c0 1-1 1.5-2 1.5s-2-.5-2-1.5 1-1.5 2-1.5 2 .5 2 1.5z"/><path d="M20 8c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"/></svg>,
  'search': <Search className="h-6 w-6 text-primary" />,
};

export const QuestionCategoryCard: React.FC<QuestionCategoryCardProps> = ({ category }) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            {iconMap[category.icon]}
          </div>
          <CardTitle>{category.title}</CardTitle>
        </div>
        <CardDescription>{category.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {category.questions.slice(0, 3).map((question) => (
            <li key={question.id} className="text-sm text-muted-foreground">
              • {question.text}
            </li>
          ))}
          {category.questions.length > 3 && (
            <li className="text-sm text-muted-foreground">
              • Et {category.questions.length - 3} autres questions...
            </li>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to={`/questions/${category.id}`} className="w-full">
          <Button className="w-full" variant="outline">
            Explorer cette catégorie
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
