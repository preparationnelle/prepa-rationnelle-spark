
import React from 'react';
import { questionCategories } from '../data/questionCards';
import { QuestionCategoryCard } from '../components/questions/QuestionCategoryCard';

const QuestionsPage = () => {
  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="hero-heading gradient-text mb-4">Préparez vos réponses</h1>
          <p className="text-lg text-gray-700">
            Explorez notre bibliothèque de questions d'entretien structurées par catégorie et découvrez des exemples de réponses structurées et efficaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {questionCategories.map((category) => (
            <QuestionCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
