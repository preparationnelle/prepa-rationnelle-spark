
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Youtube, Target } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';

const PourquoiPythonPrepaECGPage = () => {
  const { trackPageVisit } = useProgress();
  
  useEffect(() => {
    trackPageVisit('python-article');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              +3 à 5 points sûrs
            </div>
            <h1 className="text-4xl font-bold mb-4 text-orange-600">
              Pourquoi travailler Python en prépa ECG
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              (et pourquoi mon coaching est ta meilleure option)
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Youtube className="h-5 w-5 text-red-600" />
                  Vidéo explicative - L'importance de Python en prépa ECG
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.loom.com/embed/bb87a1911d4a494ba229aaca00ee88cb"
                    frameBorder="0"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="mb-8 bg-blue-50 border-l-4 border-blue-400">
            <CardContent className="p-6">
              <blockquote className="text-lg italic text-blue-800 mb-4">
                « Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin 
                du cours. Il m'a aidée à démystifier Python, qui était au départ un gros point faible. Grâce à lui, je 
                suis plus confiante pour traiter les questions Python ! »
              </blockquote>
              <cite className="text-blue-600 font-semibold">— Léa, 2ᵉ année ECG</cite>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-orange-600" />
                1. Le vrai poids de Python aux concours : un gisement de points sous-estimé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Depuis la réforme, Python remplace Scilab dans les épreuves de mathématiques appliquées comme 
                approfondies. Résultat :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Python représente désormais 30 à 40% des points en mathématiques appliquées</li>
                <li>Les questions Python sont souvent plus accessibles que les démonstrations pures</li>
                <li>C'est un moyen concret d'améliorer sa moyenne sans être un génie en maths</li>
                <li>La plupart des étudiants négligent cette matière = opportunité pour toi</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">
                2. Pourquoi Python est différent des autres matières
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Contrairement aux maths "classiques", Python est une compétence pratique qui s'apprend par la pratique, 
                pas par cœur. Il faut :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Comprendre la logique algorithmique</li>
                <li>Maîtriser la syntaxe spécifique</li>
                <li>Savoir déboguer et optimiser</li>
                <li>Connaître les bibliothèques essentielles (NumPy, Matplotlib, etc.)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link to="/formation">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Découvrir nos formations Python
              </Button>
            </Link>
          </div>

          {/* Navigation */}
          <div className="mt-16 flex justify-center gap-4">
            <Link to="/methodologie">
              <Button variant="outline">Retour à la méthodologie</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PourquoiPythonPrepaECGPage;
