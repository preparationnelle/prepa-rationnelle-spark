
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

interface SchoolCardProps {
  name: string;
  description: string;
  link: string;
}

export const SchoolCard = ({ name, description, link }: SchoolCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all hover:shadow-lg hover:border-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{name}</h3>
        </div>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex justify-end">
          <Button variant="ghost" size="sm" className="text-primary group-hover:underline">
            En savoir plus
          </Button>
        </div>
      </div>
    </Link>
  );
};
