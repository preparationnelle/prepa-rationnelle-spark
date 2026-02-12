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
}   Brain,
  Layers
} from 'lucide-react';

const ComparatifsSuperlatifsPage = () => {
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
            <span className="text-gray-900 font-bold">Comparatifs & Superlatifs</span>
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
            Fiche de Grammaire : Comparatifs et Superlatifs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formez et utilisez correctement les comparatifs (plus ... que) et superlatifs (le/la/les plus ...), y compris les irréguliers, les structures d’égalité et les modificateurs d’intensité.
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
            <p>Les comparatifs comparent deux éléments; les superlatifs expriment le degré extrême au sein d’un groupe.</p>
          </CardContent>
        </Card>

        {/* 1. Règles de formation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Règles de formation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <section>
              <h3 className="text-xl font-semibold mb-2">Adjectifs courts (1 syllabe, ou 2 avec terminaison légère)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Comparatif</span> : adj + <span className="text-orange-700 font-semibold">-er</span> + than → tall → taller than</li>
                <li><span className="text-orange-700 font-semibold">Superlatif</span> : the + adj + <span className="text-orange-700 font-semibold">-est</span> → tall → the tallest</li>
                <li>Adj terminant par <span className="text-orange-700 font-semibold">-y</span> → y → i : happy → happier / the happiest</li>
                <li>Consonne finale doublée si CVC : big → bigger / the biggest</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Adjectifs longs (≥ 2 syllabes)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Comparatif</span> : <span className="text-orange-700 font-semibold">more</span> + adj + than → more interesting than</li>
                <li><span className="text-orange-700 font-semibold">Superlatif</span> : the + <span className="text-orange-700 font-semibold">most</span> + adj → the most interesting</li>
                <li>Forme inverse (infériorité) : <span className="text-orange-700 font-semibold">less</span> / the <span className="text-orange-700 font-semibold">least</span></li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Irréguliers fréquents</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>good → <span className="text-orange-700 font-semibold">better</span> → the <span className="text-orange-700 font-semibold">best</span></li>
                <li>bad → <span className="text-orange-700 font-semibold">worse</span> → the <span className="text-orange-700 font-semibold">worst</span></li>
                <li>far → farther/further → the farthest/the furthest</li>
                <li>little → less → the least ; many/much → more → the most</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 2. Égalité, infériorité, intensificateurs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Structures utiles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Égalité et inégalité</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">as + adj + as</span> : She is as tall as her brother.</li>
                <li><span className="text-orange-700 font-semibold">not as/so + adj + as</span> : This test is not as hard as the last one.</li>
                <li><span className="text-orange-700 font-semibold">less + adj + than</span> : This book is less interesting than that one.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Modificateurs d’intensité</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>far, much, a lot → much/far/a lot <span className="text-orange-700 font-semibold">+ comparatif</span> : far better</li>
                <li>a little, slightly, a bit → <span className="text-orange-700 font-semibold">+ comparatif</span> : a bit cheaper</li>
                <li>by far → <span className="text-orange-700 font-semibold">+ superlatif</span> : by far the best</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Structures avancées</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">The more ..., the more/less ...</span> : The more you study, the better you get.</li>
                <li>Avoid double comparatives: ❌ more better → ✅ much better</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Tableau récapitulatif */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              3. Tableau Récapitulatif
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
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Comparatif court</td><td className="border px-3 py-2">adj+er + than</td><td className="border px-3 py-2">faster than</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Comparatif long</td><td className="border px-3 py-2">more + adj + than</td><td className="border px-3 py-2">more efficient than</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Superlatif court</td><td className="border px-3 py-2">the + adj+est</td><td className="border px-3 py-2">the fastest</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Superlatif long</td><td className="border px-3 py-2">the most + adj</td><td className="border px-3 py-2">the most efficient</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Infériorité</td><td className="border px-3 py-2">less / the least + adj</td><td className="border px-3 py-2">the least expensive</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Égalité</td><td className="border px-3 py-2">as + adj + as</td><td className="border px-3 py-2">as tall as</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Irréguliers</td><td className="border px-3 py-2">better/best; worse/worst</td><td className="border px-3 py-2">by far the best</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 4. Conseils & pièges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Conseils et Pièges</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-1">
              <li>Than + pronom objet : She is taller than <span className="text-orange-700 font-semibold">me</span> (not I).</li>
              <li>Ne pas doubler: ❌ more faster → ✅ much faster.</li>
              <li>Bien traiter -y → -ier, et les doublages CVC.</li>
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
              <Link to="/formation/anglais/grammaire/comparatifs/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/comparatifs/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/comparatifs/flashcards">
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

export default ComparatifsSuperlatifsPage;


