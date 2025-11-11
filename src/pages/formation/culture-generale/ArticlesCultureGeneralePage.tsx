import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type ArticleItem = {
  number: number;
  title: string;
  description: string;
  route: string; // placeholder routes to be completed later
};

const articles: ArticleItem[] = [
  {
    number: 1,
    title: 'Les types de sujets — autour de « juger »',
    description: 'Distinguer les sens et les pièges du libellé pour problématiser efficacement.',
    route: '#',
  },
  {
    number: 2,
    title: 'Préjugés, impartialité et esprit critique',
    description: 'Comment juger sans préjuger ? Méthodes et repères pour limiter les biais.',
    route: '#',
  },
  {
    number: 3,
    title: 'Juger : connaître, évaluer, décider',
    description: 'Cartographier les finalités du jugement et leurs critères de validité.',
    route: '#',
  },
];

const ArticlesCultureGeneralePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Soft blue bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow" />

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Articles — Culture générale</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Retrouvez ici les fiches et analyses d’articles. Sélectionnez une fiche pour la découvrir.
            </p>
          </div>

          {/* Articles list */}
          <div className="space-y-6">
            {articles.map((a) => (
              <div
                key={a.number}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-200"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 md:w-2/3">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 font-bold text-lg">{a.number}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{a.title}</h3>
                      <p className="text-gray-600">{a.description}</p>
                    </div>
                  </div>
                  <div className="md:ml-auto md:w-auto">
                    {a.route === '#' ? (
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
                        Découvrir la fiche — GO
                      </Button>
                    ) : (
                      <Link to={a.route}>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
                          Découvrir la fiche — GO
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesCultureGeneralePage;


