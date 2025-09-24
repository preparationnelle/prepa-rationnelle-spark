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
            <span className="text-gray-900 font-bold">Conditional Structures</span>
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
            Grammar Sheet: Conditional Structures in English
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conditional structures are essential for expressing hypotheses, possibilities, regrets, or general truths. This sheet covers the four main types, mixed conditionals, alternatives to "if", inversion, punctuation, and common errors to avoid.
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
            <p>Conditional structures (or conditionals) are sentences that express a condition and its consequence. They generally follow the pattern: "If this happens, then that will happen".</p>
            <p>These structures are essential for expressing hypotheses, possibilities, regrets, or general truths in English.</p>
          </CardContent>
        </Card>

        {/* Structure de Base */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Basic Structure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            <p>Every conditional sentence contains two main parts:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Conditional clause (if-clause)</span>: expresses the condition</li>
              <li><span className="text-orange-700 font-semibold">Main clause</span>: expresses the result</li>
            </ul>
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <p className="font-semibold text-orange-800">Example:</p>
              <p className="mt-1">If it rains, I will stay home.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><span className="text-orange-700 font-semibold">Condition</span>: If it rains</li>
                <li><span className="text-orange-700 font-semibold">Result</span>: I will stay home</li>
              </ul>
              <p className="mt-3"><span className="text-orange-700 font-semibold">Important</span>: The order can be reversed without changing the meaning → I will stay home if it rains.</p>
            </div>
          </CardContent>
        </Card>

        {/* 1. Les quatre types principaux */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. The Four Main Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Zero Conditional */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Zero Conditional</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: If + Present Simple, Present Simple</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span>: General truths, scientific facts, habits</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If you heat water to 100°C, it boils.</li>
                <li>If I eat too much, I feel sick.</li>
                <li>When the sun sets, it gets dark.</li>
              </ul>
              <p className="mt-2">Note: You can use <span className="text-orange-700 font-semibold">when</span> instead of <span className="text-orange-700 font-semibold">if</span> in this type.</p>
            </section>

            {/* First Conditional */}
            <section>
              <h3 className="text-xl font-semibold mb-2">First Conditional</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: If + Present Simple, will + infinitive</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span>: Real and probable future situations</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If it rains tomorrow, we will cancel the picnic.</li>
                <li>If you study hard, you will pass the exam.</li>
                <li>If she arrives late, we will start without her.</li>
              </ul>
            </section>

            {/* Second Conditional */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Second Conditional</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: If + Past Simple, would + infinitive</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span>: Hypothetical, unreal or improbable situations in present/future</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I won the lottery, I would buy a house.</li>
                <li>If I were you, I would take that job.</li>
                <li>If she had more time, she would learn Spanish.</li>
              </ul>
              <p className="mt-2">Special feature: With the verb <span className="text-orange-700 font-semibold">be</span>, we use <span className="text-orange-700 font-semibold">were</span> for all persons.</p>
            </section>

            {/* Third Conditional */}
            <section>
              <h3 className="text-xl font-semibold mb-2">Third Conditional</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: If + Past Perfect, would have + past participle</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span>: Unreal past situations and their consequences</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I had studied harder, I would have passed the exam.</li>
                <li>If we had left earlier, we wouldn't have missed the train.</li>
                <li>If she had known about the meeting, she would have attended.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 2. Conditionnelles mixtes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Mixed Conditionals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Type 1: Past condition → Present result</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: If + Past Perfect, would + infinitive</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span>: Unfulfilled past condition that affects the present</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I had studied medicine, I would be a doctor now.</li>
                <li>If we had invested in that company, we would be rich today.</li>
                <li>If she had moved to Paris, she would speak French fluently.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Type 2: Present condition → Past result</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: If + Past Simple, would have + past participle</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Usage</span>: Hypothetical present situation that would have changed the past</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I weren't so afraid of heights, I would have climbed that mountain.</li>
                <li>If he were more organized, he would have finished on time.</li>
                <li>If she were here, she would have helped us yesterday.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 3. Alternatives à "if" */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Alternatives to "if"</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Unless</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: Unless + affirmative clause = If + negative clause</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Unless you hurry, you will be late. = If you don't hurry, you will be late.</li>
                <li>I won't go unless you come with me. = I won't go if you don't come with me.</li>
                <li>Unless it stops raining, we'll stay inside. = If it doesn't stop raining, we'll stay inside.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">As long as / So long as</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span>: Emphasizes the necessary condition</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You can stay here as long as you keep quiet.</li>
                <li>I'll help you as long as you promise to work hard.</li>
                <li>So long as you have your passport, you can travel.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Provided (that) / Providing (that)</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span>: More formal than "as long as"</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>You can borrow my car provided you return it by tonight.</li>
                <li>The bank will lend us money providing we can repay it.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">In case</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span>: Precaution or preparation for a possible event</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Take an umbrella in case it rains.</li>
                <li>I'll bring extra money in case we need it.</li>
                <li>Call me in case you have any problems.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Even if</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span>: Emphasizes that the result wouldn't change</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Even if I won the lottery, I wouldn't quit my job.</li>
                <li>I'll go to the meeting even if I'm sick.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Suppose / Supposing</h3>
              <p><span className="text-orange-700 font-semibold">Usage</span>: Informal conversation to introduce a hypothesis</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Examples</span>:</p>
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
            <CardTitle className="text-2xl">4. Inversion in Conditionals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Should (First Conditional)</h3>
              <p><span className="text-orange-700 font-semibold">Standard</span>: If you should need help, call me.</p>
              <p><span className="text-orange-700 font-semibold">Inversion</span>: Should you need help, call me.</p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Were (Second Conditional)</h3>
              <p><span className="text-orange-700 font-semibold">Standard</span>: If I were in charge, I would change things.</p>
              <p><span className="text-orange-700 font-semibold">Inversion</span>: Were I in charge, I would change things.</p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Had (Third Conditional)</h3>
              <p><span className="text-orange-700 font-semibold">Standard</span>: If we had known earlier, we would have come.</p>
              <p><span className="text-orange-700 font-semibold">Inversion</span>: Had we known earlier, we would have come.</p>
            </section>
          </CardContent>
        </Card>

        {/* 5. Ponctuation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Punctuation Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Main Rule</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">COMMA REQUIRED</span> when the if-clause comes first.</li>
                <li><span className="text-orange-700 font-semibold">No comma</span> when the main clause comes first.</li>
              </ul>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 mt-3 space-y-1">
                <p>✅ If it rains, we will stay inside.</p>
                <p>✅ We will stay inside if it rains.</p>
                <p>❌ If it rains we will stay inside.</p>
                <p>❌ We will stay inside, if it rains.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">In Questions</h3>
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
              6. Summary Table
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
                    <th className="border px-3 py-2 text-left text-orange-700">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Zero</td><td className="border px-3 py-2">If + present, present</td><td className="border px-3 py-2">General truths</td><td className="border px-3 py-2">If you heat ice, it melts.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">First</td><td className="border px-3 py-2">If + present, will + V</td><td className="border px-3 py-2">Probable future</td><td className="border px-3 py-2">If it rains, I will stay home.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Second</td><td className="border px-3 py-2">If + past, would + V</td><td className="border px-3 py-2">Present/future hypothesis</td><td className="border px-3 py-2">If I were rich, I would travel.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Third</td><td className="border px-3 py-2">If + past perfect, would have + V3</td><td className="border px-3 py-2">Past regret</td><td className="border px-3 py-2">If I had known, I would have come.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Mixed 1</td><td className="border px-3 py-2">If + past perfect, would + V</td><td className="border px-3 py-2">Past → Present</td><td className="border px-3 py-2">If I had studied, I would be fluent now.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Mixed 2</td><td className="border px-3 py-2">If + past, would have + V3</td><td className="border px-3 py-2">Present → Past</td><td className="border px-3 py-2">If I were braver, I would have tried.</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 7. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">7. Common Errors to Avoid</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">1. Mixing tenses</h3>
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
              <h3 className="text-lg font-semibold mb-1">3. Incorrect past perfect</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ If I would have known, I would have come.</p>
                <p>✅ If I had known, I would have come.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">4. Unless with negation</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ Unless you don't study, you won't pass.</p>
                <p>✅ Unless you study, you won't pass.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">5. Incorrect punctuation</h3>
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
            <CardTitle className="text-2xl">8. Common Conditional Expressions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Fixed expressions with "if"</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">If necessary</span>: Call me if necessary.</li>
                <li><span className="text-orange-700 font-semibold">If possible</span>: I'd like a window seat if possible.</li>
                <li><span className="text-orange-700 font-semibold">If I were you</span>: If I were you, I would apologize.</li>
                <li><span className="text-orange-700 font-semibold">If only</span>: If only I had more time!</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Constructions with "or / otherwise"</h3>
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
            <p>Mastering conditional structures allows you to express different degrees of probability, regrets, hypotheses, and advice with precision. The key is to understand the temporal relationship between the condition and the result, then choose the appropriate structure.</p>
            <p><span className="text-orange-700 font-semibold">Practical tip</span>: Start by mastering the four main types before tackling mixed conditionals and alternatives to "if". Regular practice will help you use these structures naturally.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Each conditional type expresses a different temporal relationship</li>
              <li>Punctuation follows precise rules</li>
              <li>Alternatives to "if" enrich your expression</li>
              <li>Inversion brings a more formal style</li>
              <li>Avoid common errors of mixing tenses</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA exercices */}
        <Card className="mt-2 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-orange-800">
              <Target className="h-6 w-6" />
              Ready to practice?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-orange-700 mb-6">
              After studying the sheet, launch into the exercises to consolidate your knowledge.
            </p>
            <Link to="/formation/anglais/grammaire/conditionnels/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Target className="h-5 w-5 mr-2" />
                Start Exercises
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Bouton retour en bas */}
        <div className="flex justify-center mt-12">
          <Link to="/formation/anglais/grammaire">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Grammar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConditionnelsPage;


