import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PythonECGSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header avec icône */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Code className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              🐍 Python ECG
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Maîtrisez Python pour les concours : 4 modules progressifs avec exercices pratiques et coaching personnalisé.
          </p>

          {/* Fonctionnalités */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-blue-600">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">54 commandes essentielles</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">Exercices type concours</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="font-medium">+3 à 5 points garantis</span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/formation">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 w-full sm:w-auto">
                <BookOpen className="h-5 w-5 mr-2" />
                Accéder au module complet
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            
            <Link to="/python-reference">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 w-full sm:w-auto"
              >
                <Code className="h-5 w-5 mr-2" />
                Voir la liste des commandes Python
              </Button>
            </Link>
          </div>

          {/* Note en bas */}
          <p className="text-sm text-gray-500 mt-6">
            ✨ Accès gratuit à la liste des commandes | Formation complète avec code d'accès
          </p>
        </div>
      </div>
    </section>
  );
};