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

const ExpressionsTempsPage = () => {
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
            <span className="text-gray-900 font-bold">Expressions de Temps</span>
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
            Fiche de Grammaire : Expressions de Temps en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez since/for/ago, already/yet/just/still, by/until, et les marqueurs temporels clés pour choisir le bon temps et placer correctement les adverbes.
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
            <p>Les marqueurs temporels orientent le choix du temps (present perfect, past simple, etc.) et la position des adverbes. Ils sont déterminants pour la précision et la fluidité.</p>
          </CardContent>
        </Card>

        {/* 1. Repères clés */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              1. Repères temporels clés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Expression</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Usage</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">since</td><td className="border px-3 py-2">point de départ</td><td className="border px-3 py-2">We have lived here <span className="font-semibold">since</span> 2020.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">for</td><td className="border px-3 py-2">durée</td><td className="border px-3 py-2">I have studied <span className="font-semibold">for</span> two hours.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">ago</td><td className="border px-3 py-2">durée écoulée (passé)</td><td className="border px-3 py-2">She left two hours <span className="font-semibold">ago</span>.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">already</td><td className="border px-3 py-2">action plus tôt que prévu</td><td className="border px-3 py-2">I have <span className="font-semibold">already</span> finished.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">yet</td><td className="border px-3 py-2">interrog./nég. (attente)</td><td className="border px-3 py-2">Have you finished <span className="font-semibold">yet</span>?</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">just</td><td className="border px-3 py-2">action très récente</td><td className="border px-3 py-2">She has <span className="font-semibold">just</span> arrived.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">still</td><td className="border px-3 py-2">continuité</td><td className="border px-3 py-2">He is <span className="font-semibold">still</span> sleeping.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">no longer / not anymore</td><td className="border px-3 py-2">cessation</td><td className="border px-3 py-2">They are <span className="font-semibold">no longer</span> here.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">by / by the time</td><td className="border px-3 py-2">deadline / antériorité</td><td className="border px-3 py-2">I will have finished <span className="font-semibold">by</span> Friday.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">until / till</td><td className="border px-3 py-2">jusqu’à (limite)</td><td className="border px-3 py-2">Wait <span className="font-semibold">until</span> I call.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">in / within</td><td className="border px-3 py-2">dans / d’ici</td><td className="border px-3 py-2">We will reply <span className="font-semibold">within</span> 24 hours.</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 2. Present perfect vs past simple */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Present Perfect vs Past Simple</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Indicateurs typiques</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Present Perfect</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>already, yet, just, ever, never</li>
                    <li>since, for (période non terminée)</li>
                  </ul>
                  <p className="mt-2">Ex : I have <span className="text-orange-700 font-semibold">already</span> seen it.</p>
                </div>
                <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Past Simple</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>yesterday, last week, ago, in 2010</li>
                    <li>période terminée</li>
                  </ul>
                  <p className="mt-2">Ex : I saw him two hours <span className="text-orange-700 font-semibold">ago</span>.</p>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Erreurs à éviter</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>❌ I have seen him yesterday. → ✅ I saw him yesterday.</li>
                <li>❌ I live here since 2020. → ✅ I have lived here since 2020.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Futur et planification */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Marqueurs du futur</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li>tomorrow, next week/month/year, in two days</li>
              <li>soon, later, from now on</li>
              <li>by + time (deadline) / until + event (continuité)</li>
            </ul>
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <p>Ex : By next Monday, we will have finished. / We will wait until she arrives.</p>
            </div>
          </CardContent>
        </Card>

        {/* 4. Position & ordre des adverbes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Position des adverbes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">always/often/sometimes/usually</span> : avant le verbe lexical; après BE.</li>
              <li><span className="text-orange-700 font-semibold">already</span> : avant le verbe principal; <span className="text-orange-700 font-semibold">yet</span> : fin de phrase (questions/négations).</li>
              <li><span className="text-orange-700 font-semibold">still</span> : avant le verbe; <span className="text-orange-700 font-semibold">no longer</span> : avant le verbe.</li>
            </ul>
            <p className="text-sm text-gray-600">Variante familière : not ... anymore (They don't live here anymore).</p>
          </CardContent>
        </Card>

        {/* 5. Tableau récapitulatif */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              5. Tableau Récapitulatif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Catégorie</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Mots clés</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Temps / Placement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Durée</td><td className="border px-3 py-2">since / for</td><td className="border px-3 py-2">present perfect; since/for en groupe prépositionnel</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Passé terminé</td><td className="border px-3 py-2">yesterday / last / ago / in + date</td><td className="border px-3 py-2">past simple</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Récence</td><td className="border px-3 py-2">just / already / yet</td><td className="border px-3 py-2">present perfect; already/just avant verbe; yet en fin</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Continuité/cessation</td><td className="border px-3 py-2">still / no longer / not anymore</td><td className="border px-3 py-2">avant verbe (ou BE); anymore en fin</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Deadline/limite</td><td className="border px-3 py-2">by / by the time / until</td><td className="border px-3 py-2">futur parfait / présent / selon contexte</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 6. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">6. Erreurs Courantes à Éviter</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confondre <span className="text-orange-700 font-semibold">since</span> (point) et <span className="text-orange-700 font-semibold">for</span> (durée).</li>
              <li>Employer present perfect avec marqueurs de passé terminé (yesterday/ago).</li>
              <li>Placer <span className="text-orange-700 font-semibold">yet</span> ailleurs qu’en fin de question/négation.</li>
              <li>Confondre <span className="text-orange-700 font-semibold">by</span> (avant une échéance) et <span className="text-orange-700 font-semibold">until</span> (jusqu’à un moment).</li>
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
              <Link to="/formation/anglais/grammaire/expressions-temps/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/expressions-temps/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/expressions-temps/flashcards">
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

export default ExpressionsTempsPage;


