
import React from 'react';
import { QuestionCategory } from '../../data/questionCards';
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { 
  User, Target, UsersRound, Sparkles, Map, Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuestionCategoryCardProps {
  category: QuestionCategory;
}

const iconMap: Record<string, React.ReactNode> = {
  'user': <User className="h-6 w-6 text-primary" />,
  'target': <Target className="h-6 w-6 text-primary" />,
  'users-round': <UsersRound className="h-6 w-6 text-primary" />,
  'sparkles': <Sparkles className="h-6 w-6 text-primary" />,
  'map': <Map className="h-6 w-6 text-primary" />,
  'heart': <Heart className="h-6 w-6 text-primary" />,
};

export const QuestionCategoryCard: React.FC<QuestionCategoryCardProps> = ({ category }) => {
  return (
    <Card className="hover:shadow-lg transition-all h-full flex flex-col border-0 bg-accent/50 group">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {iconMap[category.icon]}
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">{category.title}</CardTitle>
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
