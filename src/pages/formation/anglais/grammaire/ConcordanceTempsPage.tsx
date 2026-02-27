import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  BookOpen,
  ArrowLeft,
  Table,
  HelpCircle,
  Target,
  Calendar
, Brain,
  Layers
} from 'lucide-react';

const ConcordanceTempsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais" className="hover:text-gray-900 transition-colors">
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais/grammaire" className="hover:text-gray-900 transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Concordance des Temps</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Fiche de Grammaire : Concordance des Temps en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La concordance des temps règle l'accord temporel entre proposition principale et subordonnée (discours indirect, relatifs, temporelles, conditionnelles). Elle garantit clarté et cohérence.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <HelpCircle className="h-6 w-6" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-700 space-y-3">
            <p>En anglais, après un verbe principal au passé, on emploie généralement des temps du passé dans la subordonnée (notion de <span className="font-semibold">backshift</span>), sauf vérités générales ou faits encore vrais.</p>
          </CardContent>
        </Card>

        {/* 1. Schémas de base */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              1. Schémas de Concordance (Principale au passé)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Relation temporelle</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Principale (passé)</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Subordonnée</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-2 text-orange-700 font-medium">Simultanéité</td>
                    <td className="border px-3 py-2">past simple</td>
                    <td className="border px-3 py-2">past simple / past continuous</td>
                    <td className="border px-3 py-2">He said she <span className="font-semibold">was</span> tired.</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 text-orange-700 font-medium">Antériorité</td>
                    <td className="border px-3 py-2">past simple</td>
                    <td className="border px-3 py-2">past perfect</td>
                    <td className="border px-3 py-2">She said she <span className="font-semibold">had finished</span>.</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 text-orange-700 font-medium">Postériorité</td>
                    <td className="border px-3 py-2">past simple</td>
                    <td className="border px-3 py-2">would + base</td>
                    <td className="border px-3 py-2">They said they <span className="font-semibold">would come</span>.</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-2 text-orange-700 font-medium">Postériorité accomplie</td>
                    <td className="border px-3 py-2">past simple</td>
                    <td className="border px-3 py-2">would have + Vpp</td>
                    <td className="border px-3 py-2">He said he <span className="font-semibold">would have finished</span> by Friday.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 2. Modaux : futur dans le passé */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Modaux et « Futur dans le passé »</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">will → would</span> | <span className="text-orange-700 font-semibold">shall → should</span> (rare) | <span className="text-orange-700 font-semibold">can → could</span> | <span className="text-orange-700 font-semibold">may → might</span> | <span className="text-orange-700 font-semibold">must → had to</span>.</li>
              <li>Formes parfaites : would have + Vpp, could have + Vpp, might have + Vpp.</li>
            </ul>
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <p>Ex : She said she <span className="text-orange-700 font-semibold">would</span> call. / He thought he <span className="text-orange-700 font-semibold">might have</span> lost it.</p>
            </div>
          </CardContent>
        </Card>

        {/* 3. Exceptions au backshift */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Exceptions au Backshift</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Vérités universelles</span> : The teacher said that water <span className="font-semibold">boils</span> at 100°C.</li>
              <li><span className="text-orange-700 font-semibold">Situation encore vraie</span> : He said he <span className="font-semibold">lives</span>/<span className="font-semibold">lived</span> in London.</li>
              <li><span className="text-orange-700 font-semibold">Verbe au présent/futur</span> : She says/She will tell you she <span className="font-semibold">is</span> busy.</li>
              <li><span className="text-orange-700 font-semibold">Modaux stables</span> : would, could, might, should, ought to ne changent pas.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4. Temps et subordonnées temporelles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Subordonnées Temporelles (when, after, before, until...)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Présent</span> après when/as soon as/before/after pour sens futur : Call me when you <span className="font-semibold">arrive</span>.</li>
              <li>Antériorité : When I <span className="font-semibold">had finished</span>, I left.</li>
              <li>Progressif pour simultanéité en arrière-plan : While she <span className="font-semibold">was working</span>, he cooked.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 5. Concordance et conditionnelles (rappel) */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Concordance et Conditionnelles (rappel)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-1">
              <li>Type 1 : If + present, <span className="text-orange-700 font-semibold">will</span> + base.</li>
              <li>Type 2 : If + past simple, <span className="text-orange-700 font-semibold">would</span> + base.</li>
              <li>Type 3 : If + past perfect, <span className="text-orange-700 font-semibold">would have</span> + Vpp.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 6. Tableau récapitulatif */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              6. Tableau Récapitulatif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Direct</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Concordance (principale au passé)</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple indirect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2">present simple</td><td className="border px-3 py-2">past simple</td><td className="border px-3 py-2">He said she <span className="font-semibold">worked</span>.</td></tr>
                  <tr><td className="border px-3 py-2">present continuous</td><td className="border px-3 py-2">past continuous</td><td className="border px-3 py-2">She said he <span className="font-semibold">was working</span>.</td></tr>
                  <tr><td className="border px-3 py-2">present perfect</td><td className="border px-3 py-2">past perfect</td><td className="border px-3 py-2">They said they <span className="font-semibold">had finished</span>.</td></tr>
                  <tr><td className="border px-3 py-2">past simple</td><td className="border px-3 py-2">past perfect</td><td className="border px-3 py-2">He said he <span className="font-semibold">had seen</span> her.</td></tr>
                  <tr><td className="border px-3 py-2">will</td><td className="border px-3 py-2">would</td><td className="border px-3 py-2">She said she <span className="font-semibold">would</span> come.</td></tr>
                  <tr><td className="border px-3 py-2">will have + Vpp</td><td className="border px-3 py-2">would have + Vpp</td><td className="border px-3 py-2">He said he <span className="font-semibold">would have finished</span>.</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 7. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">7. Erreurs Courantes à Éviter</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Garder un présent alors que la principale est au passé (sauf exceptions).</li>
              <li>Employer <span className="text-orange-700 font-semibold">will</span> dans une subordonnée temporelle future (préférer présent) : When she <span className="font-semibold">arrives</span>, we'll start.</li>
              <li>Confondre would/would have selon la postériorité.</li>
              <li>Oublier le past perfect pour l'antériorité claire.</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA exercices */}
        <Card className="mt-2 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Target className="h-6 w-6" />
              Prêt à mettre en pratique ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-orange-700 mb-6">Après avoir étudié la fiche, lancez-vous dans les exercices pour consolider vos acquis.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/formation/anglais/grammaire/concordance/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/concordance/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/concordance/flashcards">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Layers className="h-5 w-5 mr-2" />
                  Flashcards
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Bouton retour en bas */}
        <div className="flex justify-center mt-12">
          <Link to="/formation/anglais/grammaire">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour à la grammaire
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConcordanceTempsPage;


