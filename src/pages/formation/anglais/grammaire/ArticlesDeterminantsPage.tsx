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
} from 'lucide-react';

const ArticlesDeterminantsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
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
            <span className="text-gray-900 font-bold">Articles & Déterminants</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/anglais/grammaire">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la grammaire
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Fiche de Grammaire : Articles et Déterminants en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les articles (a/an/the) et déterminants (some, any, much, many, a lot of, etc.) sont indispensables pour exprimer quantité et spécificité en anglais.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Débutant - Intermédiaire</Badge>
            <Badge variant="outline">1-2 heures</Badge>
            <Badge className="bg-orange-600">Module essentiel</Badge>
          </div>
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
            <p>Cette fiche couvre : l’usage de <span className="font-semibold">a/an</span> et <span className="font-semibold">the</span>, les indéfinis <span className="font-semibold">some</span>, <span className="font-semibold">any</span>, <span className="font-semibold">a lot of</span>, les quantifieurs <span className="font-semibold">much, many, little, few</span>, et d’autres déterminants utiles.</p>
          </CardContent>
        </Card>

        {/* 1. Articles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Articles Indéfinis et Défini</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <section>
              <h3 className="text-xl font-semibold mb-2">A / AN (indéfini)</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : présenter un nom singulier non identifié ou non spécifique</p>
              <p><span className="text-orange-700 font-semibold">Forme</span> : <span className="font-semibold">a</span> devant son consonantique, <span className="font-semibold">an</span> devant son vocalique</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>I saw <span className="text-orange-700 font-semibold">a</span> cat in the garden.</li>
                <li>She is <span className="text-orange-700 font-semibold">an</span> engineer.</li>
                <li>Can I have <span className="text-orange-700 font-semibold">an</span> apple?</li>
                <li><span className="text-sm text-gray-600">Attention au son : <span className="italic">an</span> hour, <span className="italic">a</span> university.</span></li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">THE (défini)</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : nom spécifique, déjà mentionné ou unique</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>I saw <span className="text-orange-700 font-semibold">the</span> cat we talked about.</li>
                <li><span className="text-orange-700 font-semibold">The</span> sun rises in the east.</li>
                <li>Please close <span className="text-orange-700 font-semibold">the</span> door.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Zéro article</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : pluriels ou non comptables au sens général</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Cats are friendly animals.</li>
                <li>Water is essential.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 2. Some / Any / A lot of */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Some / Any / A lot of</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">SOME</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : quantités indéfinies dans affirmations positives, offres et demandes</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>I have <span className="text-orange-700 font-semibold">some</span> friends in London.</li>
                <li>Would you like <span className="text-orange-700 font-semibold">some</span> tea?</li>
                <li>She bought <span className="text-orange-700 font-semibold">some</span> bread.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">ANY</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : interrogatives et négatives</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Do you have <span className="text-orange-700 font-semibold">any</span> questions?</li>
                <li>I don’t have <span className="text-orange-700 font-semibold">any</span> money.</li>
                <li>Are there <span className="text-orange-700 font-semibold">any</span> cookies left?</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">A LOT OF / LOTS OF</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : grandes quantités, registre plutôt informel</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>They have <span className="text-orange-700 font-semibold">a lot of</span> work to do.</li>
                <li>There are <span className="text-orange-700 font-semibold">lots of</span> people here.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Quantifieurs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              3. Much / Many / Little / Few
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Mot</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Usage</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Forme</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">many</td><td className="border px-3 py-2">noms pluriels</td><td className="border px-3 py-2">many</td><td className="border px-3 py-2">She has many books.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">much</td><td className="border px-3 py-2">noms non comptables</td><td className="border px-3 py-2">much</td><td className="border px-3 py-2">I don’t have much time.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">few</td><td className="border px-3 py-2">petits nombres (pluriel)</td><td className="border px-3 py-2">few</td><td className="border px-3 py-2">Few students passed the exam.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">a few</td><td className="border px-3 py-2">quelques (pluriel)</td><td className="border px-3 py-2">a few</td><td className="border px-3 py-2">I have a few ideas.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">little</td><td className="border px-3 py-2">petite quantité (non comptable)</td><td className="border px-3 py-2">little</td><td className="border px-3 py-2">There is little milk left.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">a little</td><td className="border px-3 py-2">un peu (non comptable)</td><td className="border px-3 py-2">a little</td><td className="border px-3 py-2">I have a little money.</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 4. Autres déterminants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Autres Déterminants Utiles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">each / every</span> : Each student received a certificate. / Every day is a new beginning.</li>
                <li><span className="text-orange-700 font-semibold">either / neither</span> : You can choose either option. / Neither answer is correct.</li>
                <li><span className="text-orange-700 font-semibold">both / all</span> : Both candidates are qualified. / All participants must register.</li>
                <li><span className="text-orange-700 font-semibold">no</span> : No student was absent.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 5. Conseils & pièges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Conseils et Pièges à Éviter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Much</span> vs <span className="text-orange-700 font-semibold">Many</span> : many pour pluriel, much pour non comptable</li>
              <li><span className="text-orange-700 font-semibold">Some</span> vs <span className="text-orange-700 font-semibold">Any</span> : some en affirmatif, any en questions/négations</li>
              <li><span className="text-orange-700 font-semibold">A / An</span> : basé sur le <span className="text-orange-700 font-semibold">son</span> (an hour, a university)</li>
              <li><span className="text-orange-700 font-semibold">Zéro article</span> : pas d’article avec génériques pluriels et non comptables</li>
              <li><span className="text-orange-700 font-semibold">Each</span> vs <span className="text-orange-700 font-semibold">Every</span> : each = individuel, every = global</li>
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
            <p className="text-lg text-orange-700 mb-6">
              Après avoir étudié la fiche, lancez-vous dans les exercices pour consolider vos acquis.
            </p>
            <Link to="/formation/anglais/grammaire/articles/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Étudier ce chapitre
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArticlesDeterminantsPage;


