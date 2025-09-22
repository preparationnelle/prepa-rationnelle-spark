import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TroisMethodesDissertationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Les 3 méthodes de dissertation en culture générale</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Panorama clair des approches les plus répandues: Anarchie, Parapersos et Dissertation parfaite.
            </p>
          </div>

          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">Comparatif rapide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm md:text-base">
                  <thead>
                    <tr className="text-gray-700">
                      <th className="p-3"></th>
                      <th className="p-3">Anarchie</th>
                      <th className="p-3">Parapersos</th>
                      <th className="p-3">Dissertation parfaite</th>
                    </tr>
                  </thead>
                  <tbody className="align-top text-gray-700">
                    <tr className="border-t">
                      <td className="p-3 font-semibold">Description</td>
                      <td className="p-3">Votre cours est votre unique support pour faire des dissertations.</td>
                      <td className="p-3">Une quarantaine de paragraphes préparés en amont, réutilisés dans vos dissertations.</td>
                      <td className="p-3">Une unique dissertation préparée en amont, adaptée à tous les sujets.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-semibold">Avantages</td>
                      <td className="p-3">Grande liberté de raisonnement.</td>
                      <td className="p-3">Gain de temps considérable au brouillon; références approfondies; limite les fautes d’orthographe.</td>
                      <td className="p-3">Travail unique et immuable; références approfondies; limite les fautes d’orthographe.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3 font-semibold">Inconvénients</td>
                      <td className="p-3">Difficile d’approfondir les raisonnements sur les références; vocabulaire limité — risque de copie “niveau lycée”.</td>
                      <td className="p-3">Tendance à s’enfermer dans ses paragraphes au risque de passer à côté du sujet.</td>
                      <td className="p-3">Difficulté à coller au sujet avec une DP préparée — faible liberté de penser.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">Quelle méthode choisir ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <p>
                Tout dépend de votre profil: niveau en philosophie, style d’écriture, vitesse de raisonnement. Une approche
                efficace et équilibrée est souvent la méthode des <strong>Parapersos</strong> : elle offre un spectre
                large de connaissances le jour J, tout en restant plaisante à construire. Les recherches sur des sujets
                atypiques nourrissent votre curiosité et, en créant vos propres paragraphes, vous vous appropriez vraiment les idées.
              </p>
              <p>
                Dans la suite du module, nous détaillerons la méthode des Parapersos et une grille d'analyse de sujet de type HEC (hors citation).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bouton retour en bas */}
      <div className="flex justify-center mt-12 pb-8">
        <Link to="/formation/culture-generale/methodes">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Retour au menu des méthodes</Button>
        </Link>
      </div>
    </div>
  );
};

export default TroisMethodesDissertationPage;


