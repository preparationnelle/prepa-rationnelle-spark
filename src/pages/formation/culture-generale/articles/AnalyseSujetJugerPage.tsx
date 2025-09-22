import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AnalyseSujetJugerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Analyse d’un sujet — Thème « Juger »</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Grille de lecture rapide pour définir, contextualiser et décoder les formulations de sujet autour de « juger ».
            </p>
          </div>

          {/* 1) Définition */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">1) Définition</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                <strong>Juger</strong> : action par laquelle un sujet évalue, apprécie, décide ou condamne quelque chose ou quelqu’un à partir de critères.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Synonymes</h3>
                  <p className="text-sm">évaluer, apprécier, trancher, condamner, estimer, critiquer.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Antonymes</h3>
                  <p className="text-sm">suspendre son jugement, tolérer, ignorer, comprendre (sans juger).</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Famille de mots</h3>
                  <p className="text-sm">jugement, juge, justicier, juridiction, justesse.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Polysémie</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Juridique : appliquer une loi à un cas particulier.</li>
                    <li>Moral : décider du bien et du mal.</li>
                    <li>Esthétique : affirmer qu’une chose est belle ou laide.</li>
                    <li>Cognitif : affirmer ou nier une proposition (vrai/faux).</li>
                    <li>Social : opinion/critique sur autrui.</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Connotations</h3>
                <p className="text-sm">Souvent négatives (« tu me juges » = tu me condamnes), mais aussi positives (avoir du jugement = sagesse, discernement).</p>
              </div>
            </CardContent>
          </Card>

          {/* 2) Filtres */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">2) Filtres</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Modernité</h3>
                <p className="text-sm">
                  Réseaux sociaux et « tribunal médiatique »; débats moraux (écologie, bioéthique, IA) où les normes bougent vite.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Implications</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Causes : besoin de normes, d’ordre, de sens.</li>
                    <li>Conséquences : légitimation (jugement +), condamnation (jugement −), exclusion ou reconnaissance.</li>
                    <li>Moyens : juge (individu/institution/opinion), norme, possibilité de sanction ou reconnaissance.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Dimensions</h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Le beau — œuvre, style, performance.</li>
                    <li>Le vrai — vérité/erreur.</li>
                    <li>Le juste — équité et droit.</li>
                    <li>Le bien — évaluation morale.</li>
                    <li>Autrui — reconnaissance ou stigmatisation.</li>
                    <li>Politique — gouvernants, justice transitionnelle.</li>
                    <li>Liberté — esprit critique vs jugement hâtif.</li>
                    <li>Culture — diversité des critères selon époques/sociétés.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3) Forme du sujet */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">3) Forme du sujet</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Peut‑on juger ?</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Capacité : a‑t‑on les moyens d’un jugement objectif ?</li>
                  <li>Légitimité : a‑t‑on le droit moral de juger autrui ?</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Faut‑il juger ?</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Nécessité : indispensable pour vivre en société ?</li>
                  <li>Risque : danger d’injustice, d’exclusion ?</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Juger autrui</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Essence : inhérent au vivre‑ensemble ?</li>
                  <li>Limites : peut‑on juger ce qu’on ne vit pas ?</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Juger et comprendre</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Copulatif : comprendre avant de juger.</li>
                  <li>Adversatif : comprendre s’oppose à juger ?</li>
                  <li>Identitaire : juger, est‑ce déjà comprendre ?</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Le jugement</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Essence : le jugement est‑il inhérent à la pensée ?</li>
                  <li>Singularité : un jugement vrai existe‑t‑il, ou seulement des jugements situés ?</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Pourquoi juger ?</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Cause : l’homme ne peut pas ne pas juger (catégorisation spontanée).</li>
                  <li>Finalité : ordonner le réel, établir la justice, définir le vrai, réguler le vivre‑ensemble.</li>
                </ul>
              </div>

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

export default AnalyseSujetJugerPage;


