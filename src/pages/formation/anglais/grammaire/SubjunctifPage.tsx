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

const SubjunctifPage = () => {
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
            <span className="text-gray-900 font-bold">Subjunctif & Structures Subjectives</span>
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
            Fiche de Grammaire : Subjunctif et Structures Subjectives
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le subjunctif anglais exprime la nécessité, l'exigence, la suggestion ou l'hypothèse. Les structures subjectives mettent l'accent sur l'avis/volonté du locuteur (It is important that..., If I were you...).
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
            <p>Le <span className="font-semibold">subjunctif mandatif</span> s'emploie après des verbes/expressions d'exigence, recommandation ou nécessité; le <span className="font-semibold">subjunctif hypothétique</span> apparaît surtout avec <span className="font-semibold">If I were...</span> et certaines formules figées.</p>
          </CardContent>
        </Card>

        {/* 1. Subjunctif mandatif (that + base) */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Subjunctif mandatif (that + base verbale)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <section>
              <h3 className="text-xl font-semibold mb-2">Structure</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">that + sujet + base</span> (sans -s, y compris à la 3e personne) : It is essential that he <span className="text-orange-700 font-semibold">be</span> on time.</li>
                <li>Négation : that he <span className="text-orange-700 font-semibold">not be</span> late.</li>
                <li>Passif : that the report <span className="text-orange-700 font-semibold">be completed</span> by Friday.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Déclencheurs fréquents</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Verbes : <span className="text-orange-700 font-semibold">demand, require, insist, suggest, recommend, propose</span>.</li>
                <li>Expressions : <span className="text-orange-700 font-semibold">it is essential/important/necessary/urgent</span> that...</li>
                <li>Variante (surtout BrE) : <span className="text-orange-700 font-semibold">should</span> + base : It is essential that he <span className="text-orange-700 font-semibold">should be</span> on time.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 2. Subjunctif hypothétique (If I were...) */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Subjunctif hypothétique</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Forme et emploi</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">If I were</span> you, I would... (registre standard soigné; If I was courant mais moins soutenu)</li>
                <li>Souhaits/irréel : <span className="text-orange-700 font-semibold">I wish</span> I <span className="text-orange-700 font-semibold">were</span> taller. / <span className="text-orange-700 font-semibold">If only</span> he <span className="text-orange-700 font-semibold">were</span> here.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Formules figées</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">God save</span> the King/Queen.</li>
                <li><span className="text-orange-700 font-semibold">Long live</span> the King.</li>
                <li><span className="text-orange-700 font-semibold">Be that as it may</span>, ... / <span className="text-orange-700 font-semibold">So be it</span>.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Structures subjectives fréquentes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Structures subjectives fréquentes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">It is + adj + that + subjunctif</span> : It is crucial that the data <span className="text-orange-700 font-semibold">be</span> accurate.</li>
                <li><span className="text-orange-700 font-semibold">It is time (that) + prétérit</span> : It is time we <span className="text-orange-700 font-semibold">left</span>.</li>
                <li><span className="text-orange-700 font-semibold">I would rather + prétérit</span> : I would rather you <span className="text-orange-700 font-semibold">did</span> it now.</li>
                <li><span className="text-orange-700 font-semibold">Wish / If only</span> : present irreality → past simple; past regret → past perfect.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 4. Tableaux récapitulatifs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              4. Tableaux Récapitulatifs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
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
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">that + base</td><td className="border px-3 py-2">They insist that he <span className="font-semibold">be</span> present.</td><td className="border px-3 py-2">Exigence</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">that + not + base</td><td className="border px-3 py-2">They suggested that he <span className="font-semibold">not speak</span>.</td><td className="border px-3 py-2">Interdiction</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">passif</td><td className="border px-3 py-2">It is vital that the plan <span className="font-semibold">be approved</span>.</td><td className="border px-3 py-2">Résultat</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">If I were</td><td className="border px-3 py-2">If I were you, I would call.</td><td className="border px-3 py-2">Hypothèse/conseil</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Wish (présent)</td><td className="border px-3 py-2">I wish I <span className="font-semibold">knew</span>.</td><td className="border px-3 py-2">Regret présent</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Wish (passé)</td><td className="border px-3 py-2">I wish I <span className="font-semibold">had studied</span>.</td><td className="border px-3 py-2">Regret passé</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 5. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Erreurs Courantes à Éviter</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ajouter -s à la 3e personne au subjunctif (❌ It is vital he <span className="line-through">comes</span> → ✅ he <span className="text-orange-700 font-semibold">come</span>).</li>
              <li>Confondre <span className="text-orange-700 font-semibold">were/was</span> dans les hypothèses (registre soutenu : If I <span className="text-orange-700 font-semibold">were</span>...).</li>
              <li>Oublier la structure <span className="text-orange-700 font-semibold">that + base</span> après suggest/insist/recommend.</li>
              <li>Employer <span className="text-orange-700 font-semibold">will</span> après wish/if only (préférer prétérit/past perfect).</li>
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
              <Link to="/formation/anglais/grammaire/subjunctif/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/subjunctif/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/subjunctif/flashcards">
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

export default SubjunctifPage;


