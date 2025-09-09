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

const ConditionnelsPage = () => {
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
            <span className="text-gray-900 font-bold">Structures Conditionnelles</span>
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
            Fiche de Grammaire : Les Structures Conditionnelles en Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les structures conditionnelles sont essentielles pour exprimer hypothèses, possibilités, regrets ou vérités générales. Cette fiche couvre les quatre types principaux, les conditionnelles mixtes, les alternatives à "if", l'inversion, la ponctuation et les erreurs à éviter.
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
            <p>Les structures conditionnelles (ou conditionals) sont des phrases qui expriment une condition et sa conséquence. Elles suivent généralement le schéma : "Si ceci se produit, alors cela arrivera".</p>
            <p>Ces structures sont essentielles pour exprimer des hypothèses, des possibilités, des regrets ou des vérités générales en anglais.</p>
          </CardContent>
        </Card>

        {/* Structure de Base */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Structure de Base</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            <p>Toute phrase conditionnelle contient deux parties principales :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Proposition conditionnelle (if-clause)</span> : exprime la condition</li>
              <li><span className="text-orange-700 font-semibold">Proposition principale (main clause)</span> : exprime le résultat</li>
            </ul>
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <p className="font-semibold text-orange-800">Exemple :</p>
              <p className="mt-1">If it rains, I will stay home.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><span className="text-orange-700 font-semibold">Condition</span> : If it rains (s'il pleut)</li>
                <li><span className="text-orange-700 font-semibold">Résultat</span> : I will stay home (je resterai à la maison)</li>
              </ul>
              <p className="mt-3"><span className="text-orange-700 font-semibold">Important</span> : L'ordre peut être inversé sans changer le sens → I will stay home if it rains.</p>
            </div>
          </CardContent>
        </Card>

        {/* 1. Les quatre types principaux */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Les Quatre Types Principaux</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Zero Conditional */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Zero Conditional (Conditionnel Zéro)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Présent Simple, Présent Simple</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span> : Vérités générales, faits scientifiques, habitudes</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If you heat water to 100°C, it boils. (Si tu chauffes l'eau à 100°C, elle bout)</li>
                <li>If I eat too much, I feel sick. (Si je mange trop, je me sens malade)</li>
                <li>When the sun sets, it gets dark. (Quand le soleil se couche, il fait noir)</li>
              </ul>
              <p className="mt-2">Note : On peut utiliser <span className="text-orange-700 font-semibold">when</span> au lieu de <span className="text-orange-700 font-semibold">if</span> dans ce type.</p>
            </section>

            {/* First Conditional */}
            <section>
              <h3 className="text-xl font-semibold mb-2">First Conditional (Première Conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Présent Simple, will + Infinitif</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span> : Situations futures réelles et probables</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If it rains tomorrow, we will cancel the picnic. (S'il pleut demain, nous annulerons le pique-nique)</li>
                <li>If you study hard, you will pass the exam. (Si tu étudies dur, tu réussiras l'examen)</li>
                <li>If she arrives late, we will start without her. (Si elle arrive en retard, nous commencerons sans elle)</li>
              </ul>
            </section>

            {/* Second Conditional */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Second Conditional (Deuxième Conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Passé Simple, would + Infinitif</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span> : Situations hypothétiques, irréelles ou improbables au présent/futur</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I won the lottery, I would buy a house. (Si je gagnais au loto, j'achèterais une maison)</li>
                <li>If I were you, I would take that job. (Si j'étais toi, je prendrais ce travail)</li>
                <li>If she had more time, she would learn Spanish. (Si elle avait plus de temps, elle apprendrait l'espagnol)</li>
              </ul>
              <p className="mt-2">Particularité : Avec le verbe <span className="text-orange-700 font-semibold">be</span>, on utilise <span className="text-orange-700 font-semibold">were</span> pour toutes les personnes.</p>
            </section>

            {/* Third Conditional */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Third Conditional (Troisième Conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Past Perfect, would have + Participe passé</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span> : Situations irréelles du passé et leurs conséquences</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I had studied harder, I would have passed the exam. (Si j'avais étudié plus dur, j'aurais réussi l'examen)</li>
                <li>If we had left earlier, we wouldn't have missed the train. (Si nous étions partis plus tôt, nous n'aurions pas raté le train)</li>
                <li>If she had known about the meeting, she would have attended. (Si elle avait su pour la réunion, elle y aurait assisté)</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 2. Conditionnelles mixtes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Les Conditionnelles Mixtes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Type 1 : Condition passée → Résultat présent</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Past Perfect, would + Infinitif</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span> : Condition passée non réalisée qui affecte le présent</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I had studied medicine, I would be a doctor now. (Si j'avais étudié la médecine, je serais médecin maintenant)</li>
                <li>If we had invested in that company, we would be rich today. (Si nous avions investi dans cette société, nous serions riches aujourd'hui)</li>
                <li>If she had moved to Paris, she would speak French fluently. (Si elle avait déménagé à Paris, elle parlerait français couramment)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Type 2 : Condition présente → Résultat passé</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Passé Simple, would have + Participe passé</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span> : Situation présente hypothétique qui aurait changé le passé</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I weren't so afraid of heights, I would have climbed that mountain. (Si je n'avais pas si peur du vide, j'aurais escaladé cette montagne)</li>
                <li>If he were more organized, he would have finished on time. (S'il était plus organisé, il aurait terminé à temps)</li>
                <li>If she were here, she would have helped us yesterday. (Si elle était là, elle nous aurait aidés hier)</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Alternatives à "if" */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Alternatives à "if"</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Unless (Sauf si / À moins que)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : Unless + proposition affirmative = If + proposition négative</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Unless you hurry, you will be late. = If you don't hurry, you will be late.</li>
                <li>I won't go unless you come with me. = I won't go if you don't come with me.</li>
                <li>Unless it stops raining, we'll stay inside. = If it doesn't stop raining, we'll stay inside.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">As long as / So long as (Tant que / À condition que)</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : Insiste sur la condition nécessaire</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You can stay here as long as you keep quiet.</li>
                <li>I'll help you as long as you promise to work hard.</li>
                <li>So long as you have your passport, you can travel.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Provided (that) / Providing (that) (À condition que)</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : Plus formel que "as long as"</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You can borrow my car provided you return it by tonight.</li>
                <li>The bank will lend us money providing we can repay it.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">In case (Au cas où)</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : Précaution ou préparation pour une éventualité</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Take an umbrella in case it rains.</li>
                <li>I'll bring extra money in case we need it.</li>
                <li>Call me in case you have any problems.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Even if (Même si)</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : Insiste sur le fait que le résultat ne changerait pas</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Even if I won the lottery, I wouldn't quit my job.</li>
                <li>I'll go to the meeting even if I'm sick.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Suppose / Supposing (Supposons que)</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span> : Conversation familière pour introduire une hypothèse</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Suppose you lost your keys, what would you do?</li>
                <li>Supposing it rains tomorrow, shall we cancel the trip?</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 4. Inversion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Inversion dans les Conditionnelles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Should (Première conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Standard</span> : If you should need help, call me.</p>
              <p><span className="text-orange-700 font-semibold">Inversion</span> : Should you need help, call me.</p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Were (Deuxième conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Standard</span> : If I were in charge, I would change things.</p>
              <p><span className="text-orange-700 font-semibold">Inversion</span> : Were I in charge, I would change things.</p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Had (Troisième conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Standard</span> : If we had known earlier, we would have come.</p>
              <p><span className="text-orange-700 font-semibold">Inversion</span> : Had we known earlier, we would have come.</p>
            </section>
          </CardContent>
        </Card>

        {/* 5. Ponctuation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Règles de Ponctuation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Règle principale</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Virgule OBLIGATOIRE</span> quand l'if-clause vient en premier.</li>
                <li><span className="text-orange-700 font-semibold">Pas de virgule</span> quand la proposition principale vient en premier.</li>
              </ul>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 mt-3 space-y-1">
                <p>✅ If it rains, we will stay inside.</p>
                <p>✅ We will stay inside if it rains.</p>
                <p>❌ If it rains we will stay inside.</p>
                <p>❌ We will stay inside, if it rains.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Dans les questions</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>What will you do if it rains?</p>
                <p>If it rains, what will you do?</p>
              </div>
            </section>
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
                    <th className="border px-3 py-2 text-left text-orange-700">Usage</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Zero</td><td className="border px-3 py-2">If + présent, présent</td><td className="border px-3 py-2">Vérités générales</td><td className="border px-3 py-2">If you heat ice, it melts.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">First</td><td className="border px-3 py-2">If + présent, will + V</td><td className="border px-3 py-2">Futur probable</td><td className="border px-3 py-2">If it rains, I will stay home.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Second</td><td className="border px-3 py-2">If + passé, would + V</td><td className="border px-3 py-2">Hypothèse présent/futur</td><td className="border px-3 py-2">If I were rich, I would travel.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Third</td><td className="border px-3 py-2">If + past perfect, would have + V3</td><td className="border px-3 py-2">Regret passé</td><td className="border px-3 py-2">If I had known, I would have come.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Mixed 1</td><td className="border px-3 py-2">If + past perfect, would + V</td><td className="border px-3 py-2">Passé → Présent</td><td className="border px-3 py-2">If I had studied, I would be fluent now.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Mixed 2</td><td className="border px-3 py-2">If + passé, would have + V3</td><td className="border px-3 py-2">Présent → Passé</td><td className="border px-3 py-2">If I were braver, I would have tried.</td></tr>
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
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">1. Mélange des temps</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ If I will have time, I will help you.</p>
                <p>✅ If I have time, I will help you.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">2. Double modal</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ If I would win, I would be happy.</p>
                <p>✅ If I won, I would be happy.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">3. Past perfect mal utilisé</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ If I would have known, I would have come.</p>
                <p>✅ If I had known, I would have come.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">4. Unless avec négation</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ Unless you don't study, you won't pass.</p>
                <p>✅ Unless you study, you won't pass.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">5. Ponctuation incorrecte</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ I'll come if, you want me to.</p>
                <p>✅ I'll come if you want me to.</p>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 8. Expressions conditionnelles courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">8. Expressions Conditionnelles Courantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Expressions figées avec "if"</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">If necessary</span> : Call me if necessary.</li>
                <li><span className="text-orange-700 font-semibold">If possible</span> : I'd like a window seat if possible.</li>
                <li><span className="text-orange-700 font-semibold">If I were you</span> : If I were you, I would apologize.</li>
                <li><span className="text-orange-700 font-semibold">If only</span> : If only I had more time!</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Constructions avec "or / otherwise"</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Study hard, or you'll fail the exam.</li>
                <li>Leave now, otherwise you'll be late.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Maîtriser les structures conditionnelles vous permet d'exprimer avec précision différents degrés de probabilité, des regrets, des hypothèses et des conseils. La clé est de bien comprendre la relation temporelle entre la condition et le résultat, puis de choisir la structure appropriée.</p>
            <p><span className="text-orange-700 font-semibold">Conseil pratique</span> : Commencez par maîtriser les quatre types principaux avant d'aborder les conditionnelles mixtes et les alternatives à "if". La pratique régulière vous aidera à utiliser ces structures naturellement.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Chaque type de conditionnel exprime une relation temporelle différente</li>
              <li>La ponctuation suit des règles précises</li>
              <li>Les alternatives à "if" enrichissent votre expression</li>
              <li>L'inversion apporte un style plus formel</li>
              <li>Évitez les erreurs courantes de mélange des temps</li>
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
            <Link to="/formation/anglais/grammaire/conditionnels/exercices">
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

export default ConditionnelsPage;


