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

const QuestionsInterrogatifsPage = () => {
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
            <span className="text-gray-900 font-bold">Questions & Interrogatifs</span>
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
            Fiche de Grammaire : Questions et Interrogatifs en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formez correctement les questions en anglais: yes/no, wh-questions, do-support, subject vs object questions, question tags et questions indirectes.
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
            <p>Les questions anglaises reposent sur l'<span className="font-semibold">inversion auxiliaire-sujet</span> (sauf questions sujet) et sur le <span className="font-semibold">do-support</span> au présent et au passé simples.</p>
          </CardContent>
        </Card>

        {/* 1. Yes/No questions & do-support */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Yes/No Questions & Do-support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <section>
              <h3 className="text-xl font-semibold mb-2">Structure générale</h3>
              <p><span className="text-orange-700 font-semibold">Auxiliaire</span> + sujet + verbe (base/participe/progressif selon le temps)</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><span className="text-orange-700 font-semibold">BE</span> : Are you ready? Was she tired?</li>
                <li><span className="text-orange-700 font-semibold">HAVE</span> (perfect) : Have they finished?</li>
                <li><span className="text-orange-700 font-semibold">MODAUX</span> : Can you drive? Should we leave?</li>
                <li><span className="text-orange-700 font-semibold">DO-SUPPORT</span> (present/past simple): Do you like coffee? Did he call?</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Do-support</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Affirmative: You like coffee. → Question: <span className="text-orange-700 font-semibold">Do</span> you like coffee?</li>
                <li>Past: He called. → <span className="text-orange-700 font-semibold">Did</span> he call?</li>
                <li>Pas avec BE, HAVE (aux.), ni modaux.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 2. Wh-questions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Wh-Questions (Questions ouvertes)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Mots interrogatifs</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">who</span>, <span className="text-orange-700 font-semibold">what</span>, <span className="text-orange-700 font-semibold">which</span>, <span className="text-orange-700 font-semibold">whose</span></li>
                <li><span className="text-orange-700 font-semibold">where</span>, <span className="text-orange-700 font-semibold">when</span>, <span className="text-orange-700 font-semibold">why</span>, <span className="text-orange-700 font-semibold">how</span> (+ much/many/long/often/old)</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Structure</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Wh-word + <span className="text-orange-700 font-semibold">auxiliaire</span> + sujet + verbe : Where <span className="text-orange-700 font-semibold">do</span> you live?</li>
                <li><span className="text-orange-700 font-semibold">Question sujet</span> (pas d'inversion): <span className="text-orange-700 font-semibold">Who</span> called you?</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Question tags */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Question Tags</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Affirmation + <span className="text-orange-700 font-semibold">, aux + pronom</span> (négatif si phrase affirmative et inversement).</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You're coming, <span className="text-orange-700 font-semibold">aren't you</span>?</li>
              <li>She can't drive, <span className="text-orange-700 font-semibold">can she</span>?</li>
              <li>Intonation montante (incertitude) / descendante (confirmation).</li>
            </ul>
          </CardContent>
        </Card>

        {/* 4. Questions indirectes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Questions Indirectes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Intro: Could you tell me..., Do you know..., I wonder... → <span className="text-orange-700 font-semibold">ordre sujet+verbe</span>, pas d'inversion, pas de point d'interrogation interne.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Direct: Where is she? → Indirect: Do you know <span className="text-orange-700 font-semibold">where she is</span>?</li>
              <li>Direct: Does he live here? → Indirect: Could you tell me <span className="text-orange-700 font-semibold">if/whether he lives</span> here?</li>
            </ul>
          </CardContent>
        </Card>

        {/* 5. Ponctuation & intonation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Ponctuation & Intonation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Yes/No & Wh-questions: <span className="text-orange-700 font-semibold">?</span></li>
              <li>Indirect questions: <span className="text-orange-700 font-semibold">.</span> (phrase déclarative)</li>
              <li>Tags: ?; sens dépend de l'intonation.</li>
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
                    <th className="border px-3 py-2 text-left text-orange-700">Type</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Structure</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Yes/No</td><td className="border px-3 py-2">Aux + sujet + verbe</td><td className="border px-3 py-2">Do you agree?</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Wh-</td><td className="border px-3 py-2">Wh + aux + sujet + verbe</td><td className="border px-3 py-2">Where do you live?</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Sujet</td><td className="border px-3 py-2">Wh + verbe (+ objet)</td><td className="border px-3 py-2">Who called?</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Tag</td><td className="border px-3 py-2">, aux + pron?</td><td className="border px-3 py-2">You're late, aren't you?</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Indirecte</td><td className="border px-3 py-2">Intro + sujet + verbe</td><td className="border px-3 py-2">Do you know where she is?</td></tr>
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
              <li>Oublier le <span className="text-orange-700 font-semibold">do-support</span> au present/past simple (❌ Do you are agree? → ✅ Do you agree?).</li>
              <li>Ordre incorrect en indirecte (❌ Do you know where <span className="line-through">is she</span>? → ✅ where she is).</li>
              <li>Inversion dans les questions sujet (❌ Who does called you? → ✅ Who called you?).</li>
              <li>Tag incorrect (polarity/auxiliaire/pronom).</li>
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
              <Link to="/formation/anglais/grammaire/questions/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/questions/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/questions/flashcards">
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

export default QuestionsInterrogatifsPage;


