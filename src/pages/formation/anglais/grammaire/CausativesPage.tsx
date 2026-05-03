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

const CausativesPage = () => {
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
            <span className="text-gray-900 font-bold">Structures Causatives</span>
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
            Fiche de Grammaire : Structures Causatives
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have/get something done, have someone do, get someone to do, make/let… maîtrisez les différentes structures pour exprimer la cause ou la délégation d’action.
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
            <p>Les structures causatives expriment que le sujet <span className="font-semibold">fait faire</span> l’action par quelqu’un d’autre, ou <span className="font-semibold">amène</span> quelqu’un à faire quelque chose.</p>
          </CardContent>
        </Card>

        {/* 1. Have/Get something done */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Have/Get something done (service, expérience subie)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <section>
              <h3 className="text-xl font-semibold mb-2">Structure</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">have/get + objet + Vpp</span> : I had my hair <span className="text-orange-700 font-semibold">cut</span>.</li>
                <li>Temps variés : We are having the house <span className="text-orange-700 font-semibold">painted</span>.</li>
                <li>Valeur « mauvaise expérience » possible : He had his wallet <span className="text-orange-700 font-semibold">stolen</span>.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 2. Have someone do / Get someone to do */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Faire faire à quelqu’un</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">have + personne + base</span> : I <span className="text-orange-700 font-semibold">had</span> the plumber <span className="text-orange-700 font-semibold">fix</span> the sink.</li>
              <li><span className="text-orange-700 font-semibold">get + personne + to + base</span> : I <span className="text-orange-700 font-semibold">got</span> him <span className="text-orange-700 font-semibold">to fix</span> it.</li>
              <li>Nuance : <span className="text-orange-700 font-semibold">have</span> = commande/organisation; <span className="text-orange-700 font-semibold">get</span> = persuasion/effort.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 3. Make / Let / Allow / Force */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Contraindre, permettre, autoriser</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">make + personne + base</span> : They <span className="text-orange-700 font-semibold">made</span> me <span className="text-orange-700 font-semibold">do</span> it. (contrainte)</li>
              <li><span className="text-orange-700 font-semibold">let + personne + base</span> : She <span className="text-orange-700 font-semibold">let</span> the kids <span className="text-orange-700 font-semibold">play</span>. (laisser)</li>
              <li><span className="text-orange-700 font-semibold">allow/permit + personne + to + base</span> : They <span className="text-orange-700 font-semibold">allowed</span> us <span className="text-orange-700 font-semibold">to enter</span>.</li>
              <li><span className="text-orange-700 font-semibold">force/compel + personne + to + base</span> : He <span className="text-orange-700 font-semibold">forced</span> them <span className="text-orange-700 font-semibold">to leave</span>.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4. Tableau récapitulatif */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              4. Tableau Récapitulatif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Structure</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Sens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">have/get sth done</td><td className="border px-3 py-2">We had the car repaired.</td><td className="border px-3 py-2">Service/délégation</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">have sb do</td><td className="border px-3 py-2">She had him clean.</td><td className="border px-3 py-2">Faire faire</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">get sb to do</td><td className="border px-3 py-2">He got them to help.</td><td className="border px-3 py-2">Obtenir/persuader</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">make sb do</td><td className="border px-3 py-2">They made us wait.</td><td className="border px-3 py-2">Contraindre</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">let sb do</td><td className="border px-3 py-2">Let me go.</td><td className="border px-3 py-2">Autoriser</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">allow sb to do</td><td className="border px-3 py-2">They allowed us to enter.</td><td className="border px-3 py-2">Autoriser (formel)</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Erreurs Courantes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confondre base/infinitif : ❌ have someone <span className="line-through">to do</span> → ✅ have someone <span className="text-orange-700 font-semibold">do</span>.</li>
              <li>Oublier le Vpp dans « have/get something done ».</li>
              <li>Interchanger make/let/allow à contre-sens.</li>
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
            <p className="text-lg text-orange-700 mb-6">Transformez des phrases actives en structures causatives et inversement.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/formation/anglais/grammaire/causatives/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/causatives/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/causatives/flashcards">
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

export default CausativesPage;


