
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Map } from 'lucide-react';

const ProjectionScenariosPage = () => {
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
            <Map className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Projection & scénarios</h1>
            <p className="text-muted-foreground">Questions sur la projection dans l'avenir et les scénarios hypothétiques</p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Cette section explore votre capacité à vous projeter dans l'avenir et à réfléchir à différents scénarios.
          </p>
          <p className="text-gray-600">
            Les questions de projection permettent d'évaluer votre vision à long terme et votre capacité d'adaptation face à différentes situations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectionScenariosPage;
