import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PlanJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Construire le plan — Thème « Juger »</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Modèle de plan et outillage lexical pour structurer efficacement une dissertation sur « juger ».
            </p>
          </div>

          {/* 1. Rappel de la logique du plan */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">1) Rappel de la logique du plan</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Partie I</strong> : analyser le sujet sous l’angle du <em>premier membre</em> du paradoxe (l’évidence, la face « positive » ou « nécessaire »).</li>
                <li><strong>Partie II</strong> : examiner le sujet sous l’angle du <em>second membre</em> (les limites, dangers, contradictions).</li>
                <li><strong>Partie III</strong> : dépasser l’opposition par la question <em>« sous quelles conditions ? »</em> (possibilité, légitimité, justesse).</li>
              </ul>
            </CardContent>
          </Card>

          {/* 2. Champ lexical utile */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">2) Champ lexical utile pour trouver les titres</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Jugement, juge, jugement dernier, tribunal, sanction, condamnation.</li>
                <li>Justice, équité, droit, loi, norme, règle, arbitre.</li>
                <li>Vérité, erreur, objectivité, subjectivité.</li>
                <li>Conscience, morale, préjugé, tolérance.</li>
              </ul>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Pouvoir, autorité, opinion publique, réseaux sociaux.</li>
                <li>Reconnaissance, évaluation, critique, goût.</li>
              </ul>
            </CardContent>
          </Card>

          {/* 3. Exemple de plan type */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">3) Exemple de plan type sur « Juger »</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Paradoxe de départ</h3>
                <p className="text-sm">Juger est indispensable pour vivre ensemble (nécessité de la justice, du discernement), mais il est en même temps risqué, car tout jugement peut être injuste, subjectif ou réducteur.</p>
                <h3 className="font-semibold mt-3 mb-1">Problématique</h3>
                <p className="text-sm">Comment comprendre que juger soit à la fois une exigence de justice et un risque d’injustice ? Sous quelles conditions juger peut‑il être légitime et éclairé ?</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Partie I – La nécessité de juger</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Juger pour dire le vrai : jugements de connaissance.</li>
                  <li>Juger pour dire le juste : rôle du juge, nécessité d’une justice sociale et politique.</li>
                  <li>Juger pour vivre ensemble : jugements moraux, esthétiques, reconnaissance mutuelle.</li>
                </ul>
                <p className="text-sm mt-1"><em>Idée centrale</em> : juger est constitutif de l’humain et indispensable au lien social.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Partie II – Les dangers du jugement</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Risque d’erreur et de préjugé : subjectivité, biais, stéréotypes.</li>
                  <li>Puissance d’exclure et de condamner : stigmatisation, injustice, tribunal médiatique.</li>
                  <li>Limites de la justice humaine : erreurs judiciaires, relativité des normes.</li>
                </ul>
                <p className="text-sm mt-1"><em>Idée centrale</em> : juger peut trahir son objet et produire plus d’injustice que de justice.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Partie III – Les conditions d’un jugement légitime</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Juger avec discernement : esprit critique, prudence (phronèsis).</li>
                  <li>Juger avec impartialité : règles de droit, séparation des pouvoirs, objectivité scientifique.</li>
                  <li>Juger avec humanité : tolérance, compréhension, possibilité de pardon.</li>
                </ul>
                <p className="text-sm mt-1"><em>Idée centrale</em> : juger n’est pas à rejeter mais doit être encadré, réfléchi, éclairé pour être juste.</p>
              </div>
            </CardContent>
          </Card>

          {/* 4. Résumé */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">4) Résumé</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>I : Juger, une nécessité pour l’homme et la société.</li>
                <li>II : Juger, un danger d’injustice et de subjectivité.</li>
                <li>III : Juger, à condition de le faire avec prudence, impartialité et humanité.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bouton retour en bas */}
      <div className="flex justify-center mt-12 pb-8">
        <Link to="/formation/culture-generale/articles">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Retour au menu des articles</Button>
        </Link>
      </div>
    </div>
  );
};

export default PlanJugerPage;


