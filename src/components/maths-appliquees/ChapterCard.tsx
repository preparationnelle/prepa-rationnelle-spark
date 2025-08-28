import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, Target, LucideIcon } from 'lucide-react';

interface ChapterCardProps {
  id: number;
  slug: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description?: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({
  id,
  slug,
  title,
  icon: Icon,
  color,
  description = "Théorie approfondie et applications pratiques"
}) => {
  return (
    <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200">
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50/50">
          Chapitre {id}
        </Badge>
        <CardTitle className="text-lg font-semibold text-gray-800 mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">
          {description}
        </p>
        <div className="space-y-3">
          <Link to={`/formation/maths-${slug}`} className="w-full">
            <Button variant="default" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Cours
            </Button>
          </Link>
          <Link to={`/formation/maths-${slug}-exercices`} className="w-full">
            <Button variant="outline" className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium transition-all duration-300 hover:scale-105">
              <Play className="mr-2 h-4 w-4" />
              Exercices
            </Button>
          </Link>
          <Link to={`/formation/maths-${slug}-quiz`} className="w-full">
            <Button variant="outline" className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 font-medium transition-all duration-300 hover:scale-105">
              <Target className="mr-2 h-4 w-4" />
              Quiz
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterCard;
