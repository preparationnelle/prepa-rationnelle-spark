
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { School } from 'lucide-react';

interface SchoolCardProps {
  name: string;
  duration: string;
  feature: string;
  link: string;
}

export const SchoolCard = ({ name, duration, feature, link }: SchoolCardProps) => {
  return (
    <Link to={link} className="group">
      <div className="bg-card p-6 rounded-lg shadow-md border border-border transition-all hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 h-full flex flex-col group-hover:bg-orange-50 duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-all duration-300">
            <School className="h-6 w-6 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold text-blue-700 group-hover:text-orange-800 transition-colors duration-300">{name}</h3>
        </div>
        <div className="flex-grow">
          <p className="text-muted-foreground mb-1">
            {duration}
          </p>
          <p className="text-muted-foreground mb-4">
            {feature}
          </p>
        </div>
        <div className="flex justify-end">
          <Button variant="ghost" size="sm" className="text-blue-600 group-hover:text-orange-600 group-hover:underline transition-colors duration-300">
            En savoir plus
          </Button>
        </div>
      </div>
    </Link>
  );
};
