import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PRCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Card className="relative bg-white rounded-2xl border border-pr-gray-light overflow-hidden mt-6 first:mt-0">
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange" />
    <CardHeader className="pb-3">
      <CardTitle className="font-dm-serif text-xl md:text-2xl text-pr-black">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-pr-gray-dark">{children}</CardContent>
  </Card>
);

const TroisMethodesDissertationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              Culture générale · Méthode
            </p>
            <h1 className="font-dm-serif text-3xl md:text-5xl text-pr-black leading-tight mb-5">
              Les 3 méthodes de dissertation
            </h1>
            <div className="h-[3px] w-16 bg-pr-orange mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
              Panorama clair des approches les plus répandues pour traiter le thème <em>l&apos;humanité</em> :
              Anarchie, Parapersos et Dissertation parfaite.
            </p>
          </div>

          <PRCard title="Comparatif rapide">
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-left text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="p-3"></th>
                    <th className="p-3 font-dm-serif text-pr-black">Anarchie</th>
                    <th className="p-3 font-dm-serif text-pr-black">Parapersos</th>
                    <th className="p-3 font-dm-serif text-pr-black">Dissertation parfaite</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-t border-pr-gray-light">
                    <td className="p-3 font-semibold text-pr-orange-dark uppercase text-xs tracking-wider">Description</td>
                    <td className="p-3">Votre cours est votre unique support pour faire des dissertations.</td>
                    <td className="p-3">Une quarantaine de paragraphes préparés en amont, réutilisés dans vos dissertations.</td>
                    <td className="p-3">Une unique dissertation préparée en amont, adaptée à tous les sujets.</td>
                  </tr>
                  <tr className="border-t border-pr-gray-light bg-pr-gray-bg/50">
                    <td className="p-3 font-semibold text-pr-orange-dark uppercase text-xs tracking-wider">Avantages</td>
                    <td className="p-3">Grande liberté de raisonnement.</td>
                    <td className="p-3">Gain de temps considérable au brouillon ; références approfondies ; limite les fautes d&apos;orthographe.</td>
                    <td className="p-3">Travail unique et immuable ; références approfondies ; limite les fautes d&apos;orthographe.</td>
                  </tr>
                  <tr className="border-t border-pr-gray-light">
                    <td className="p-3 font-semibold text-pr-orange-dark uppercase text-xs tracking-wider">Inconvénients</td>
                    <td className="p-3">Difficile d&apos;approfondir les raisonnements sur les références ; vocabulaire limité — risque de copie « niveau lycée ».</td>
                    <td className="p-3">Tendance à s&apos;enfermer dans ses paragraphes au risque de passer à côté du sujet.</td>
                    <td className="p-3">Difficulté à coller au sujet avec une DP préparée — faible liberté de penser.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </PRCard>

          <PRCard title="Quelle méthode choisir ?">
            <div className="space-y-3 text-sm md:text-base">
              <p>
                Tout dépend de votre profil : niveau en philosophie, style d&apos;écriture, vitesse de raisonnement. Une approche
                efficace et équilibrée est souvent la méthode des <strong>Parapersos</strong> : elle offre un spectre
                large de connaissances le jour J, tout en restant plaisante à construire. Les recherches sur des sujets
                atypiques nourrissent votre curiosité et, en créant vos propres paragraphes, vous vous appropriez vraiment les idées.
              </p>
              <p>
                Dans la suite du module, nous détaillerons la méthode des Parapersos appliquée au thème <em>l&apos;humanité</em>
                (8 sous-thèmes du programme, références sourcées) et une grille d&apos;analyse de sujet de type HEC.
              </p>
            </div>
          </PRCard>

          <div className="flex justify-center mt-12">
            <Link to="/formation/culture-generale/methodes">
              <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6 py-2 rounded-md text-xs font-semibold uppercase tracking-[0.12em]">
                ← Retour au menu des méthodes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TroisMethodesDissertationPage;
