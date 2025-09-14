import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const IntroductionJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Soft blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow" />

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Rédiger l’introduction — méthode et exemple (Juger)</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Architecture en 5 temps et modèle appliqué au sujet « Peut‑on juger sans condamner ? »
            </p>
          </div>

          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">1) La structure formelle de l’introduction</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Accroche</strong> — citation, fait historique, référence culturelle qui donne de la profondeur au sujet.</li>
                <li><strong>Analyse des termes</strong> — définir thème et mots clés (synonymes, antonymes, polysémie, connotations).</li>
                <li><strong>Annonce du paradoxe</strong> — mettre au jour la tension qui rend la réflexion nécessaire.</li>
                <li><strong>Problématique</strong> — transformer le paradoxe en question directrice.</li>
                <li><strong>Annonce du plan</strong> — présenter en une phrase la structure en trois parties.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">2) Application — « Peut‑on juger sans condamner ? »</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Accroche</h3>
                <p>
                  Dans Les Pensées, Pascal remarque que « l’homme n’aime point à être jugé ». Ce constat souligne que juger est immédiatement perçu comme une mise en accusation, une condamnation. Pourtant, juger ne consiste pas nécessairement à blâmer : un jury d’art décerne un prix, un professeur évalue un élève, un critique consacre un chef‑d’œuvre. L’acte de juger n’est donc pas toujours synonyme d’exclusion, mais peut aussi devenir reconnaissance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Analyse des termes</h3>
                <p>
                  Juger, au sens large, c’est évaluer, apprécier, décider de la valeur d’un acte, d’une idée ou d’une personne. Cet acte se décline dans de multiples registres : juger vrai ou faux dans la connaissance, juger beau ou laid dans l’esthétique, juger juste ou injuste dans la morale et le droit. Condamner, en revanche, désigne une sanction : attribuer une faute et infliger une peine ou une disqualification. Si juger englobe la possibilité de condamner, il peut également absoudre, féliciter, reconnaître. Ainsi, la tension du sujet réside dans le fait que, dans l’usage courant, juger se confond presque toujours avec condamner, alors qu’en droit et en philosophie, juger ne s’y réduit pas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Annonce du paradoxe</h3>
                <p>
                  Ainsi, juger apparaît comme un acte de discernement qui pourrait être neutre, impartial et même positif, mais force est de constater qu’il est spontanément associé à l’idée de sanction, de rejet ou d’humiliation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Problématique</h3>
                <p>
                  Comment comprendre alors que juger puisse relever de la simple faculté de discernement, tandis qu’il est presque toujours vécu comme un pouvoir de condamner ? Juger peut‑il être pensé en dehors de la peine et de la réprobation ?
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Annonce du plan</h3>
                <p>
                  Nous verrons d’abord pourquoi juger semble naturellement lié à la condamnation, notamment dans ses dimensions juridique et sociale (I). Nous montrerons ensuite que juger peut s’exercer sans punir, dans la connaissance, la critique ou la reconnaissance esthétique (II). Enfin, nous examinerons sous quelles conditions juger peut échapper à la pure logique de la condamnation pour devenir un acte éclairé, impartial et constructif (III).
                </p>
              </div>
              <div className="pt-2">
                <Link to="/formation/culture-generale/methodes">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Retour au menu des méthodes</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default IntroductionJugerPage;


