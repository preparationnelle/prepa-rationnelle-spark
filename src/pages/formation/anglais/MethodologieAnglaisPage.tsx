import React from 'react';
import { Link } from "react-router-dom";
import { Home, ChevronRight, Target, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const chapters = [
  {
    id: 1,
    title: "Les Colles d’Anglais",
    description: "Méthode sobre pour réussir résumé et commentaire en colle.",
    to: "/formation/anglais/methodologie/colles"
  },
  {
    id: 2,
    title: "Partie synthèse (question 1)",
    description: "Répondre à la question sur les textes en 3 parties claires.",
    to: "/formation/anglais/methodologie/synthese-question-1"
  },
  {
    id: 3,
    title: "Question de réflexion personnelle – essai (question 2)",
    description: "Plan en 4 temps: opinion commune, contre-argument, solution, réponse.",
    to: "/formation/anglais/methodologie/essai-question-2"
  }
];

const MethodologieAnglaisPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-40 bg-gray-50/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-gray-500">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <Link to="/formation/anglais" className="hover:text-gray-800 transition-colors">Formation Anglais ECG</Link>
            <ChevronRight className="h-3 w-3 mx-1" />
            <span>Méthodologie</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-200">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Méthodologie Anglais</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Sélection de chapitres méthodologiques essentiels. Style sobre, efficace.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {chapters.map((c) => (
              <div key={c.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-700 text-lg">{c.id}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{c.title}</h3>
                    <p className="text-gray-600 mb-4">{c.description}</p>
                    <Link to={c.to}>
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-medium">
                        <Calendar className="mr-2 h-4 w-4" />
                        Étudier ce chapitre
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologieAnglaisPage;