
import React from 'react';
import { Link } from 'react-router-dom';
import { questionCategories } from '../data/questionCards';
import { QuestionCategoryCard } from '../components/questions/QuestionCategoryCard';
import { Footer } from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const QuestionsPage = () => {
  return (
    <div className="min-h-screen bg-accent">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="hero-heading gradient-text mb-4">Préparez vos réponses</h1>
            <p className="text-lg text-gray-700 mb-8">
              Explorez notre bibliothèque de questions d'entretien structurées par catégorie et découvrez des exemples de réponses structurées et efficaces.
            </p>
            
            <Link to="/interview-simulator">
              <Button className="mb-8 mx-auto flex items-center gap-2" size="lg">
                <Play className="h-4 w-4" />
                Lancer la simulation d'entretien
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questionCategories.map((category) => (
              <QuestionCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionsPage;
