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

const DiscoursIndirectPage = () => {
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
            <span className="text-gray-900 font-bold">Discours Indirect</span>
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
            Fiche de Grammaire : Le Discours Indirect en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Le discours indirect (reported speech) permet de rapporter les paroles de quelqu'un sans les citer exactement. Cette fiche couvre les règles de transformation (pronoms, temps, marqueurs temporels/spatiaux), les questions, les ordres/demandes/conseils, les verbes introducteurs, les exceptions et les erreurs courantes.
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
            <p>Le discours indirect intègre les paroles prononcées dans notre propre énoncé, contrairement au discours direct qui cite mot à mot entre guillemets.</p>
          </CardContent>
        </Card>

        {/* Différence direct vs indirect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Différence entre Discours Direct et Indirect</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 text-gray-800">
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold mb-2">Discours Direct</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + verbe introducteur + "paroles exactes"</p>
              <p className="mt-2">Ex : She said, "I am tired."</p>
            </div>
            <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold mb-2">Discours Indirect</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + verbe introducteur + (that) + proposition transformée</p>
              <p className="mt-2">Ex : She said (that) she was tired.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Suppression des guillemets</li>
                <li>Ajout possible de <span className="text-orange-700 font-semibold">that</span></li>
                <li>Changement des temps, pronoms, marqueurs temporels</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 1. Règles fondamentales */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Règles Fondamentales de Transformation</CardTitle>
          </CardHeader>
        	<CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Règle 1 : Changement de Pronoms</h3>
              <p>Les pronoms s'adaptent à la perspective du rapporteur.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>He said, "I love my car." → He said (that) <span className="text-orange-700 font-semibold">he</span> loved <span className="text-orange-700 font-semibold">his</span> car.</li>
                <li>She told me, "You are right." → She told me (that) <span className="text-orange-700 font-semibold">I</span> was right.</li>
                <li>They said, "We will come tomorrow." → They said (that) <span className="text-orange-700 font-semibold">they</span> would come the next day.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Règle 2 : Le Backshift (Recul des Temps)</h3>
              <p>Avec un verbe introducteur au passé, les temps reculent d'un cran : <span className="text-orange-700 font-semibold">Présent → Passé</span>, <span className="text-orange-700 font-semibold">Passé → Plus-que-parfait</span>, <span className="text-orange-700 font-semibold">Futur → Conditionnel</span>.</p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Règle 3 : Changements des Expressions Temporelles et Spatiales</h3>
              <p>Les adverbes et déictiques s'adaptent au contexte du rapporteur.</p>
            </section>
          </CardContent>
        </Card>

        {/* 2. Backshift : changements des temps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Le Backshift : Changement des Temps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Temps du Présent</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Present Simple → Past Simple : "I work here." → He said he <span className="text-orange-700 font-semibold">worked</span> there.</li>
                <li>Present Continuous → Past Continuous : "I am studying." → She said she <span className="text-orange-700 font-semibold">was studying</span>.</li>
                <li>Present Perfect → Past Perfect : "I have finished." → He said he <span className="text-orange-700 font-semibold">had finished</span>.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Temps du Passé</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Past Simple → Past Perfect : "I went yesterday." → She said she <span className="text-orange-700 font-semibold">had gone</span> the day before.</li>
                <li>Past Continuous → Past Perfect Continuous : "I was sleeping." → He said he <span className="text-orange-700 font-semibold">had been sleeping</span>.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Futur et Modaux</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>will → would : "I will help you." → He said he <span className="text-orange-700 font-semibold">would</span> help.</li>
                <li>can → could : "I can speak French." → She said she <span className="text-orange-700 font-semibold">could</span> speak French.</li>
                <li>may → might : "It may rain." → They said it <span className="text-orange-700 font-semibold">might</span> rain.</li>
                <li>must → had to : "You must finish today." → The boss said I <span className="text-orange-700 font-semibold">had to</span> finish that day.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Changements temporels et spatiaux */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Changements des Expressions Temporelles et Spatiales</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Expressions de Temps</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border px-3 py-2 text-left text-orange-700">Discours Direct</th>
                      <th className="border px-3 py-2 text-left text-orange-700">Discours Indirect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-3 py-2">now</td><td className="border px-3 py-2">then, at that time</td></tr>
                    <tr><td className="border px-3 py-2">today</td><td className="border px-3 py-2">that day</td></tr>
                    <tr><td className="border px-3 py-2">tomorrow</td><td className="border px-3 py-2">the next day / the following day</td></tr>
                    <tr><td className="border px-3 py-2">yesterday</td><td className="border px-3 py-2">the day before / the previous day</td></tr>
                    <tr><td className="border px-3 py-2">last night</td><td className="border px-3 py-2">the night before</td></tr>
                    <tr><td className="border px-3 py-2">this week</td><td className="border px-3 py-2">that week</td></tr>
                    <tr><td className="border px-3 py-2">next year</td><td className="border px-3 py-2">the following year</td></tr>
                    <tr><td className="border px-3 py-2">two days ago</td><td className="border px-3 py-2">two days before / earlier</td></tr>
                    <tr><td className="border px-3 py-2">in an hour</td><td className="border px-3 py-2">an hour later</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Expressions de Lieu et Démonstratifs</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border px-3 py-2 text-left text-orange-700">Direct</th>
                      <th className="border px-3 py-2 text-left text-orange-700">Indirect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-3 py-2">here</td><td className="border px-3 py-2">there</td></tr>
                    <tr><td className="border px-3 py-2">this (place)</td><td className="border px-3 py-2">that (place)</td></tr>
                    <tr><td className="border px-3 py-2">these</td><td className="border px-3 py-2">those</td></tr>
                    <tr><td className="border px-3 py-2">this</td><td className="border px-3 py-2">that</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 4. Rapporter les questions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Rapporter les Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Questions fermées (Oui/Non)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : verbe introducteur + if/whether + proposition (ordre sujet + verbe, pas d'inversion)</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>"Are you coming?" → He asked if/whether I was coming.</li>
                <li>"Can you help me?" → She asked if/whether I could help her.</li>
                <li>"Have you finished?" → He asked if/whether I had finished.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Questions ouvertes (mots interrogatifs)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : verbe introducteur + mot interrogatif + proposition (ordre normal)</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>"Where do you live?" → He asked where I lived.</li>
                <li>"What time is it?" → She asked what time it was.</li>
                <li>"How long have you been here?" → She asked how long I had been there.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 5. Ordres, demandes, conseils */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Rapporter les Ordres, Demandes et Conseils</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Ordres et commandes</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : tell/order + objet + (not) to + infinitif</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>"Close the door!" → He told me to close the door.</li>
                <li>"Don't be late!" → She told us not to be late.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Demandes polies</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : ask + objet + (not) to + infinitif</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>"Could you help me, please?" → She asked me to help her.</li>
                <li>"Please don't smoke here." → He asked us not to smoke there.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Conseils et suggestions</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>"You should see a doctor." → He advised me to see a doctor.</li>
                <li>"Let's go to the cinema." → She suggested going to the cinema.</li>
                <li>"Why don't you take a break?" → He suggested that I take a break.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 6. Verbes introducteurs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">6. Verbes Introducteurs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Verbes de base</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">say</span> (sans objet) : She said (that) ...</li>
                <li><span className="text-orange-700 font-semibold">tell</span> (avec objet) : She told me (that) ...</li>
                <li><span className="text-orange-700 font-semibold">ask</span> : He asked if/whether ...</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Selon l'intention</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Affirmations : explain, mention, add, comment, remark, note</li>
                <li>Questions : ask, inquire, wonder, want to know</li>
                <li>Ordres : order, command, instruct, direct</li>
                <li>Demandes : request, beg, plead</li>
                <li>Conseils : advise, recommend, suggest, urge</li>
                <li>Promesses/Menaces : promise, threaten, warn, guarantee</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 7. Exceptions au backshift */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">7. Exceptions au Backshift</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li>Vérités universelles (scientifiques, générales) : pas de changement.</li>
              <li>Situations encore vraies : backshift optionnel (He said he lives/lived in London).</li>
              <li>Verbe introducteur au présent/futur : pas de backshift.</li>
              <li>Modaux inchangés : would, could, might, should, ought to.</li>
            </ul>
          </CardContent>
        </Card>

        {/* 8. Tableaux récapitulatifs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              8. Tableaux Récapitulatifs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Changements de Temps</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border px-3 py-2 text-left text-orange-700">Direct</th>
                      <th className="border px-3 py-2 text-left text-orange-700">Indirect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-3 py-2">Present Simple</td><td className="border px-3 py-2">Past Simple</td></tr>
                    <tr><td className="border px-3 py-2">Present Continuous</td><td className="border px-3 py-2">Past Continuous</td></tr>
                    <tr><td className="border px-3 py-2">Present Perfect</td><td className="border px-3 py-2">Past Perfect</td></tr>
                    <tr><td className="border px-3 py-2">Past Simple</td><td className="border px-3 py-2">Past Perfect</td></tr>
                    <tr><td className="border px-3 py-2">Past Continuous</td><td className="border px-3 py-2">Past Perfect Continuous</td></tr>
                    <tr><td className="border px-3 py-2">will</td><td className="border px-3 py-2">would</td></tr>
                    <tr><td className="border px-3 py-2">can</td><td className="border px-3 py-2">could</td></tr>
                    <tr><td className="border px-3 py-2">may</td><td className="border px-3 py-2">might</td></tr>
                    <tr><td className="border px-3 py-2">must</td><td className="border px-3 py-2">had to</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Changements de Mots</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 bg-white">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border px-3 py-2 text-left text-orange-700">Direct</th>
                      <th className="border px-3 py-2 text-left text-orange-700">Indirect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-3 py-2">I / me / my</td><td className="border px-3 py-2">he / she / him / her / his / hers</td></tr>
                    <tr><td className="border px-3 py-2">you / your</td><td className="border px-3 py-2">I / me / my (ou autre selon contexte)</td></tr>
                    <tr><td className="border px-3 py-2">we / us / our</td><td className="border px-3 py-2">they / them / their</td></tr>
                    <tr><td className="border px-3 py-2">here</td><td className="border px-3 py-2">there</td></tr>
                    <tr><td className="border px-3 py-2">this</td><td className="border px-3 py-2">that</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 9. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">9. Erreurs Courantes à Éviter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li>Oublier de changer les pronoms</li>
              <li>Mauvais usage de <span className="text-orange-700 font-semibold">say</span> et <span className="text-orange-700 font-semibold">tell</span></li>
              <li>Garder l'ordre interrogatif dans les questions rapportées (inversion)</li>
              <li>Utiliser <span className="text-orange-700 font-semibold">that</span> après <span className="text-orange-700 font-semibold">ask</span> pour une question</li>
              <li>Backshift inutile avec vérités universelles</li>
            </ul>
          </CardContent>
        </Card>

        {/* 10. Exemples pratiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">10. Exemples Pratiques Complets</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Transformations d'affirmations</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mary said, "I will finish tomorrow." → Mary said she would finish the next day.</li>
                <li>John told me, "I have been working here for five years." → John told me he had been working there for five years.</li>
                <li>The doctor said, "You must take this medicine." → The doctor said I had to take that medicine.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Transformations de questions</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>She asked, "Are you coming?" → She asked if I was coming.</li>
                <li>He asked, "What time does the meeting start?" → He asked what time the meeting started.</li>
                <li>They asked, "How long have you been waiting?" → They asked how long I had been waiting.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Transformations d'ordres et demandes</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>The teacher said, "Don't talk during the exam!" → The teacher told the students not to talk during the exam.</li>
                <li>She said, "Please help me with this problem." → She asked me to help her with that problem.</li>
                <li>The manager said, "Everyone must attend the meeting." → The manager said everyone had to attend the meeting.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* Conclusion + CTA */}
        <Card className="mb-2">
          <CardHeader>
            <CardTitle className="text-2xl">Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Pour maîtriser le discours indirect : travaillez les changements de temps, pronoms et marqueurs, choisissez le verbe introducteur adapté, et appliquez les exceptions lorsque nécessaire.</p>
            <p><span className="text-orange-700 font-semibold">Conseil pratique</span> : commencez par les affirmations simples, puis entraînez-vous avec les questions et les ordres/demandes.</p>
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
            <Link to="/formation/anglais/grammaire/discours-indirect/exercices">
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

export default DiscoursIndirectPage;


