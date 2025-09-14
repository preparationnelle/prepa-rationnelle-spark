import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ParadoxeProblematiquePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Soft blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow" />

      <section className="py-10 px-4 sm:px-6 bg-transparent relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Trouver le paradoxe et la problématique d’un sujet</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-3">
              Méthode opérationnelle pour dégager la tension centrale d’un sujet de culture générale et la transformer en problématique.
            </p>
          </div>

          {/* 1. Pourquoi chercher un paradoxe ? */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl">1) Pourquoi chercher un paradoxe ?</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>
                Tout sujet sérieux repose sur une <strong>tension implicite</strong>. S’il n’y avait qu’une évidence, il n’y aurait rien à disserter. Le <strong>paradoxe</strong> met en lumière cette contradiction interne : il révèle ce qui rend le sujet <em>problématique</em> et donc intéressant.
              </p>
              <p>
                Formuler un paradoxe, c’est poser deux poids sur la balance : d’un côté ce qui rend le sujet <strong>évident/légitime</strong>, de l’autre ce qui le rend <strong>contestable/dangereux/limité</strong>. Ce déséquilibre oblige à poser une question plus profonde : <strong>la problématique</strong>.
              </p>
            </CardContent>
          </Card>

          {/* 2. Étapes pour dégager le paradoxe */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">2) Les étapes pour dégager le paradoxe</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">a) Définir les termes</h3>
                <p className="text-sm">
                  Travailler définitions, synonymes/antonymes, connotations et polysémie. On repère ainsi des <strong>sens opposés</strong>.
                </p>
                <p className="text-sm">Exemple (juger) : juger vise l’<strong>objectivité</strong>, mais exprime aussi une <strong>subjectivité</strong> — contradiction initiale.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">b) Exploiter la forme du sujet</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>« Peut‑on… ? » → capacité matérielle vs légitimité morale.</li>
                  <li>« Faut‑il… ? » → nécessité vs danger.</li>
                  <li>Sujet avec « et » → opposition ou fusion possible.</li>
                  <li>Article défini (« le jugement ») → essence supposée vs réalité plurielle.</li>
                </ul>
                <p className="text-sm">Exemple : <em>Peut‑on juger ?</em> — oui, l’homme juge (capacité), mais en a‑t‑il le droit ou les moyens objectifs (légitimité) ?</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">c) Croiser les filtres classiques</h3>
                <p className="text-sm">Analyser par grandes dimensions, chacune ouvrant une tension potentielle :</p>
                <ul className="list-disc list-inside text-sm grid md:grid-cols-2 gap-x-6">
                  <li>Le beau (jugement esthétique)</li>
                  <li>Le vrai (jugement de connaissance)</li>
                  <li>Le juste (jugement juridique)</li>
                  <li>Le bien (jugement moral)</li>
                  <li>Autrui (juger/être jugé)</li>
                  <li>Politique (peuple/gouvernants)</li>
                  <li>Liberté (juger librement vs juger contraint)</li>
                  <li>Culture (variabilité historique et sociale des critères)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 3. Couples paradoxaux */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">3) Les couples paradoxaux</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Couples généraux</h3>
                <ul className="list-disc list-inside text-sm grid md:grid-cols-2 gap-x-6">
                  <li>Immuable / Changeant</li>
                  <li>Inné / Acquis</li>
                  <li>Actif / Passif</li>
                  <li>Liberté choisie / Liberté subie</li>
                  <li>Individuel / Collectif</li>
                  <li>Possible / Impossible</li>
                  <li>En droit / En fait</li>
                  <li>Transcendant / Immanent</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Couples propres au thème « Juger »</h3>
                <ul className="list-disc list-inside text-sm grid md:grid-cols-2 gap-x-6">
                  <li>Vérité / Erreur</li>
                  <li>Justice / Injustice</li>
                  <li>Objectivité / Subjectivité</li>
                  <li>Reconnaissance / Condamnation</li>
                  <li>Nécessaire / Dangereux</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Formule type</h3>
                <p className="text-sm">« Juger apparaît comme [terme positif], mais force est de constater qu’il est en même temps [terme contradictoire]. »</p>
                <p className="text-sm italic">Ex. « Juger est nécessaire à la vie collective, mais il peut conduire à l’injustice la plus flagrante. »</p>
              </div>
            </CardContent>
          </Card>

          {/* 4. De la contradiction à la problématique */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">4) De la contradiction à la problématique</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>Le paradoxe ouvre sur une question plus profonde, la <strong>problématique</strong>. Formule type :</p>
              <p className="text-sm">« Comment comprendre alors que …, tandis que … ? »</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>« Comment comprendre alors que juger soit indispensable pour vivre ensemble, tandis qu’il enferme la complexité du réel dans des catégories simplificatrices ? »</li>
                <li>« Comment comprendre que juger soit une exigence de justice, tandis qu’il peut engendrer les injustices les plus flagrantes ? »</li>
              </ul>
              <p className="text-sm">On peut rehausser le style par une image :</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>« Juger n’est‑il pas l’épée de Damoclès : nécessaire à l’ordre, mais toujours menaçant ? »</li>
                <li>« Juger ne serait‑il pas la boîte de Pandore : une faculté inévitable, qui libère autant la vérité que le préjugé ? »</li>
              </ul>
            </CardContent>
          </Card>

          {/* 5. Résumé pratique */}
          <Card className="bg-white rounded-2xl shadow-md border border-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="text-2xl">5) Résumé pratique de la méthode</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="list-decimal list-inside space-y-1 text-sm">
                <li>Définir les termes et leurs tensions.</li>
                <li>Exploiter la forme du sujet.</li>
                <li>Passer le sujet au filtre beau / vrai / juste / bien / autrui / politique / liberté / culture.</li>
                <li>Tester couples paradoxaux (généraux + spécifiques).</li>
                <li>Formuler le paradoxe en une phrase.</li>
                <li>Transformer ce paradoxe en problématique claire.</li>
                <li>Si possible, ajouter une question rhétorique ou une métaphore.</li>
              </ul>
              <div className="pt-4">
                <Link to="/formation/culture-generale/articles">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Retour au menu des articles</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ParadoxeProblematiquePage;


