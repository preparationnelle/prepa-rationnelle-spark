import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExerciseHeaderProps {
  title: string;
  description: string;
  badges: Array<{ text: string; variant?: "default" | "secondary" | "outline" }>;
  backTo: string;
  backText: string;
}

export const ExerciseHeader: React.FC<ExerciseHeaderProps> = ({
  title,
  description,
  badges,
  backTo,
  backText
}) => {
  return (
    <div className="mb-8">
      <Link to={backTo}>
        <Button variant="outline" size="sm" className="flex items-center gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          {backText}
        </Button>
      </Link>
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {description}
        </p>
        <div className="flex justify-center gap-2 mt-4">
          {badges.map((badge, index) => (
            <Badge 
              key={index} 
              variant={badge.variant || "default"}
              className={badge.variant === "default" ? "bg-purple-600" : ""}
            >
              {badge.text}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};