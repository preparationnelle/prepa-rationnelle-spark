
import React from 'react';
import { PrepaChatbotGenerator } from '@/components/generator/PrepaChatbotGenerator';

const PrepaChatbotGeneratorPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Chatbot Prépa
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conseils motivation, méthode & bien-être. Ton assistant IA inspiré par Major-Prépa & Mister Prépa
        </p>
      </div>

      <PrepaChatbotGenerator />
    </div>
  );
};

export default PrepaChatbotGeneratorPage;
