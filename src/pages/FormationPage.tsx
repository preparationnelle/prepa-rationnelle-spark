
import React from 'react';
import { VideoAndIntro } from '@/components/VideoAndIntro';
import { PythonQuizGenerator } from '@/components/python/PythonQuizGenerator';

const FormationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-4">
            Formation Python - Prépa ECG
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez Python pour les mathématiques en prépa ECG. 
            Toutes les commandes, fonctions et bibliothèques au programme officiel.
          </p>
        </div>

        {/* Video and Intro Section */}
        <VideoAndIntro />

        {/* Quiz Generator Section */}
        <div className="mt-16">
          <PythonQuizGenerator />
        </div>
      </div>
    </div>
  );
};

export default FormationPage;
