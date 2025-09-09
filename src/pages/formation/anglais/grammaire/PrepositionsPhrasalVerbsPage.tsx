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

const PrepositionsPhrasalVerbsPage = () => {
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
            <span className="text-gray-900 font-bold">Prépositions & Phrasal Verbs</span>
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
            Fiche de Grammaire : Prépositions et Particules (Phrasal Verbs)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prépositions et phrasal verbs sont essentiels pour la précision et la variété de l'expression. Cette fiche couvre l'emploi des prépositions clés, l'usage des phrasal verbs fréquents, les règles de séparabilité et un tableau récapitulatif.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Intermédiaire</Badge>
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
            <p>Cette fiche présente : l'emploi des <span className="font-semibold">prépositions essentielles</span>, la compréhension et l'usage des <span className="font-semibold">phrasal verbs</span> les plus fréquents, les <span className="font-semibold">règles de séparabilité</span>, ainsi qu'un <span className="font-semibold">tableau récapitulatif</span>.</p>
          </CardContent>
        </Card>

        {/* 1. Emploi des prépositions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Emploi des Prépositions Essentielles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-800">
            <section>
              <h3 className="text-xl font-semibold mb-2">Principales catégories</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Prépositions de <span className="text-orange-700">lieu</span></h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="text-orange-700 font-semibold">in</span> : à l’intérieur (in the room)</li>
                    <li><span className="text-orange-700 font-semibold">on</span> : sur (on the table)</li>
                    <li><span className="text-orange-700 font-semibold">at</span> : point précis (at the station)</li>
                    <li>under : sous (under the bed)</li>
                    <li>between : entre (between the trees)</li>
                  </ul>
                </div>
                <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Prépositions de <span className="text-orange-700">temps</span></h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="text-orange-700 font-semibold">in</span> : mois, année, période (in 2025, in the morning)</li>
                    <li><span className="text-orange-700 font-semibold">on</span> : jour, date (on Monday, on July 4th)</li>
                    <li><span className="text-orange-700 font-semibold">at</span> : heure, moment précis (at 6 PM, at noon)</li>
                    <li>before/after : avant/après (before dinner, after school)</li>
                    <li>during : pendant (during the meeting)</li>
                  </ul>
                </div>
                <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Prépositions de <span className="text-orange-700">mouvement</span></h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>to : direction (go to Paris)</li>
                    <li>into/out of : entrée/sortie (get into the car)</li>
                    <li>through : à travers (walk through the park)</li>
                    <li>across : de l’autre côté (go across the street)</li>
                    <li>past : devant (walk past the house)</li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h4 className="font-semibold text-orange-800">Prépositions composées (compound)</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>because of : à cause de</li>
                <li>in spite of : malgré</li>
                <li>according to : selon</li>
                <li>on behalf of : au nom de</li>
                <li>in front of : devant</li>
              </ul>
            </section>
            <section>
              <h4 className="font-semibold text-orange-800">Utilisation et combinaisons</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Verbe + préposition</span> : listen to, depend on</li>
                <li><span className="text-orange-700 font-semibold">Adjectif + préposition</span> : accustomed to, different from</li>
                <li><span className="text-orange-700 font-semibold">Nom + préposition</span> : solution to, reason for</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 2. Phrasal verbs essentiels */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Phrasal Verbs Essentiels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Un phrasal verb combine un <span className="text-orange-700 font-semibold">verbe</span> + une <span className="text-orange-700 font-semibold">particule</span> (adverbe ou préposition) pour former un sens spécifique.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Phrasal Verb</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Sens</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">call off</td><td className="border px-3 py-2">annuler</td><td className="border px-3 py-2">They called off the meeting.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">calm down</td><td className="border px-3 py-2">se calmer</td><td className="border px-3 py-2">Please calm down!</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">catch up (on)</td><td className="border px-3 py-2">rattraper</td><td className="border px-3 py-2">I need to catch up on my work.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">do over</td><td className="border px-3 py-2">refaire</td><td className="border px-3 py-2">I'll do the assignment over.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">eat out</td><td className="border px-3 py-2">manger au restaurant</td><td className="border px-3 py-2">Let's eat out tonight.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">figure out</td><td className="border px-3 py-2">comprendre</td><td className="border px-3 py-2">I figured out the solution.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">give up</td><td className="border px-3 py-2">abandonner</td><td className="border px-3 py-2">Don't give up!</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">look for</td><td className="border px-3 py-2">chercher</td><td className="border px-3 py-2">She is looking for her keys.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">look forward (to)</td><td className="border px-3 py-2">attendre avec impatience</td><td className="border px-3 py-2">I look forward to your reply.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">make up</td><td className="border px-3 py-2">inventer / se réconcilier</td><td className="border px-3 py-2">She made up an excuse.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">put off</td><td className="border px-3 py-2">remettre à plus tard</td><td className="border px-3 py-2">They put off the event.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">run out (of)</td><td className="border px-3 py-2">manquer, épuiser</td><td className="border px-3 py-2">We ran out of milk.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">show up</td><td className="border px-3 py-2">se présenter</td><td className="border px-3 py-2">He didn't show up at the party.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">take off</td><td className="border px-3 py-2">décoller / enlever</td><td className="border px-3 py-2">The plane took off.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">take over</td><td className="border px-3 py-2">prendre le contrôle</td><td className="border px-3 py-2">She will take over the project.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">turn down</td><td className="border px-3 py-2">refuser / baisser</td><td className="border px-3 py-2">He turned down the offer.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">turn up</td><td className="border px-3 py-2">arriver / augmenter</td><td className="border px-3 py-2">She turned up late.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">work out</td><td className="border px-3 py-2">résoudre / s'entraîner</td><td className="border px-3 py-2">Everything worked out fine.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">break down</td><td className="border px-3 py-2">tomber en panne / s'effondrer</td><td className="border px-3 py-2">The car broke down.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">bring up</td><td className="border px-3 py-2">évoquer / élever</td><td className="border px-3 py-2">She brought up an interesting point.</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 3. Séparabilité */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Séparabilité des Phrasal Verbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Separable vs Inseparable</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Separable</span> : She looked <span className="italic">the word</span> up. / She looked up <span className="italic">the word</span>.</li>
                <li><span className="text-orange-700 font-semibold">Inseparable</span> : They got along (with each other). (jamais "got each other along")</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Règles pratiques</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Pronoms</span> obligatoirement insérés : Put <span className="italic">it</span> off. (pas "put off it")</li>
                <li><span className="text-orange-700 font-semibold">Trois mots</span> (verb + 2 particules) : toujours inséparable</li>
                <li><span className="text-orange-700 font-semibold">Longs compléments</span> : préférer verbe + particule + objet</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 4. Conseils et pièges */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Conseils et Pièges à Éviter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <ul className="list-disc pl-6 space-y-1">
              <li>Choix de la préposition : depend <span className="text-orange-700 font-semibold">on</span> (pas <span className="line-through">of</span>)</li>
              <li>Différencier phrasal verb vs préposition simple : look <span className="text-orange-700 font-semibold">into</span> vs into</li>
              <li>Séparabilité : pronoms bien placés (take <span className="text-orange-700 font-semibold">it</span> off)</li>
              <li>Verbes intransitifs : pas de complément direct (arrive <span className="text-orange-700 font-semibold">at</span>)</li>
            </ul>
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
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Sens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Prépositions</td><td className="border px-3 py-2">in / on / at / under / between</td><td className="border px-3 py-2">lieu, temps, mouvement</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Compound Prep.</td><td className="border px-3 py-2">because of / in spite of</td><td className="border px-3 py-2">liaison complexe</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Phrasal Verbs</td><td className="border px-3 py-2">call off / run out / put off</td><td className="border px-3 py-2">annuler / manquer / remettre</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Separable PV</td><td className="border px-3 py-2">look up the definition</td><td className="border px-3 py-2">rechercher</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Inseparable PV</td><td className="border px-3 py-2">get along with someone</td><td className="border px-3 py-2">s'entendre</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion + CTA */}
        <Card className="mb-2">
          <CardHeader>
            <CardTitle className="text-2xl">Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>La maîtrise des prépositions et phrasal verbs enrichit l'expression et améliore la précision.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Mémoriser les prépositions de base et leurs emplois</li>
              <li>Apprendre les phrasal verbs clés par thème</li>
              <li>Pratiquer la séparation/inséparation avec des pronoms</li>
              <li>Utiliser le tableau récapitulatif pour des révisions rapides</li>
            </ul>
            <p><span className="text-orange-700 font-semibold">Conseil pratique</span> : repérez ces structures dans des textes authentiques pour les intégrer naturellement à l'écrit et à l'oral.</p>
          </CardContent>
        </Card>

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
            <Link to="/formation/anglais/grammaire/prepositions/exercices">
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

export default PrepositionsPhrasalVerbsPage;


