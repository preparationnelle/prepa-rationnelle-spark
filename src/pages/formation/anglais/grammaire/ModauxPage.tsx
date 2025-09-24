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

const ModauxPage = () => {
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
            <span className="text-gray-900 font-bold">Modal Verbs</span>
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
            Grammar Sheet: Modal Verbs and Auxiliaries in English
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Master the use of can, could, may, might, must, should, will, would, shall, and their nuances. Essential for expressing ability, permission, obligation, possibility, and advice.
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
            <p>Modal verbs are auxiliary verbs that express modality - they modify the meaning of the main verb to express ideas such as ability, permission, obligation, possibility, and advice.</p>
            <p>They have specific characteristics: they don't change form for person or number, they are followed by a bare infinitive, and they have no -s in the third person singular.</p>
          </CardContent>
        </Card>

        {/* 1. Can and Could */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Can and Could</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Can - Ability/Permission</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Present Ability:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>I <span className="text-orange-700 font-semibold">can</span> swim. (I know how to swim)</li>
                    <li>She <span className="text-orange-700 font-semibold">can</span> speak French. (She has the ability)</li>
                    <li><span className="text-orange-700 font-semibold">Can</span> you help me? (Are you able to help?)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Permission:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>You <span className="text-orange-700 font-semibold">can</span> go now. (You have permission)</li>
                    <li><span className="text-orange-700 font-semibold">Can</span> I use your phone? (May I use your phone?)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Could - Past Ability/Polite Requests</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Past Ability:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>When I was young, I <span className="text-orange-700 font-semibold">could</span> run very fast.</li>
                    <li>She <span className="text-orange-700 font-semibold">could</span> read when she was 4.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Polite Requests:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li><span className="text-orange-700 font-semibold">Could</span> you help me? (More polite than "Can you help me?")</li>
                    <li><span className="text-orange-700 font-semibold">Could</span> I borrow your book? (Very polite request)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Hypothetical Situations:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>I <span className="text-orange-700 font-semibold">could</span> live anywhere in the world. (It's possible)</li>
                    <li>You <span className="text-orange-700 font-semibold">could</span> try calling him. (Suggestion)</li>
                  </ul>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 2. May and Might */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. May and Might</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">May - Formal Permission/Possibility</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Formal Permission:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>You <span className="text-orange-700 font-semibold">may</span> leave now. (You have permission - formal)</li>
                    <li><span className="text-orange-700 font-semibold">May</span> I come in? (Request for permission - very formal)</li>
                    <li>Students <span className="text-orange-700 font-semibold">may</span> not use their phones in class. (School rule)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Possibility (Present/Future):</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>It <span className="text-orange-700 font-semibold">may</span> rain tomorrow. (It's possible)</li>
                    <li>She <span className="text-orange-700 font-semibold">may</span> be at home. (Perhaps she is at home)</li>
                    <li>The test <span className="text-orange-700 font-semibold">may</span> be difficult. (It's possible that it will be difficult)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Might - Less Certain Possibility</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Less Certain Possibility:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>It <span className="text-orange-700 font-semibold">might</span> rain later. (Less certain than "may")</li>
                    <li>She <span className="text-orange-700 font-semibold">might</span> call you. (It's possible but not very likely)</li>
                    <li>We <span className="text-orange-700 font-semibold">might</span> go to the cinema. (It's a possibility)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Polite Requests/Suggestions:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li><span className="text-orange-700 font-semibold">Might</span> I suggest an idea? (Very polite way to make a suggestion)</li>
                    <li>You <span className="text-orange-700 font-semibold">might</span> want to consider this option. (Gentle suggestion)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Past Possibility:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>She <span className="text-orange-700 font-semibold">might</span> have been ill. (Perhaps she was ill)</li>
                    <li>They <span className="text-orange-700 font-semibold">might</span> have missed the train. (It's possible they missed it)</li>
                  </ul>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 3. Must, Have to, and Should */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. Must, Have to, and Should</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Must - Strong Obligation/Deduction</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Strong Obligation (Personal/Internal):</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>I <span className="text-orange-700 font-semibold">must</span> study for the exam. (I feel it's necessary)</li>
                    <li>You <span className="text-orange-700 font-semibold">must</span> see this movie. (I strongly recommend it)</li>
                    <li>We <span className="text-orange-700 font-semibold">must</span> help them. (It's our duty)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Logical Deduction:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>The lights are off. She <span className="text-orange-700 font-semibold">must</span> be asleep. (Logical conclusion)</li>
                    <li>He's been working all day. He <span className="text-orange-700 font-semibold">must</span> be tired. (Obvious conclusion)</li>
                    <li>You <span className="text-orange-700 font-semibold">must</span> be joking! (I conclude you're joking)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Prohibition:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>You <span className="text-orange-700 font-semibold">must not</span> smoke here. (It's forbidden)</li>
                    <li>Students <span className="text-orange-700 font-semibold">must not</span> cheat. (It's not allowed)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Have to - External Obligation</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">External Obligation (Rules/Laws):</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>I <span className="text-orange-700 font-semibold">have to</span> wear a uniform at work. (Company rule)</li>
                    <li>You <span className="text-orange-700 font-semibold">have to</span> pay taxes. (Legal requirement)</li>
                    <li>Students <span className="text-orange-700 font-semibold">have to</span> attend classes. (School rule)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Past and Future:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>I <span className="text-orange-700 font-semibold">had to</span> work late yesterday. (Past obligation)</li>
                    <li>She <span className="text-orange-700 font-semibold">will have to</span> study harder. (Future obligation)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Should - Advice/Recommendation</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Advice/Recommendation:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>You <span className="text-orange-700 font-semibold">should</span> see a doctor. (I recommend it)</li>
                    <li>She <span className="text-orange-700 font-semibold">should</span> study more. (It's advisable)</li>
                    <li>We <span className="text-orange-700 font-semibold">should</span> leave now. (It's the right thing to do)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Expectation:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>The train <span className="text-orange-700 font-semibold">should</span> arrive soon. (I expect it will)</li>
                    <li>She <span className="text-orange-700 font-semibold">should</span> be here by now. (I expect her to be here)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Past Advice:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>You <span className="text-orange-700 font-semibold">should have</span> called first. (You ought to have called)</li>
                    <li>She <span className="text-orange-700 font-semibold">shouldn't have</span> eaten so much. (It was unwise)</li>
                  </ul>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 4. Will and Would */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Will and Would</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Will - Future/Promises/Spontaneous Decisions</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Future Actions:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>I <span className="text-orange-700 font-semibold">will</span> call you tomorrow. (Future intention)</li>
                    <li>It <span className="text-orange-700 font-semibold">will</span> rain soon. (Prediction)</li>
                    <li>The meeting <span className="text-orange-700 font-semibold">will</span> start at 3 PM. (Scheduled event)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Promises/Offers:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>I <span className="text-orange-700 font-semibold">will</span> help you with your homework. (Promise)</li>
                    <li><span className="text-orange-700 font-semibold">Will</span> you marry me? (Proposal)</li>
                    <li>Don't worry, everything <span className="text-orange-700 font-semibold">will</span> be fine. (Reassurance)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Spontaneous Decisions:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>A: The phone is ringing. B: I <span className="text-orange-700 font-semibold">will</span> answer it. (Spontaneous decision)</li>
                    <li>It's hot in here. I <span className="text-orange-700 font-semibold">will</span> open the window. (Impulsive action)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Would - Past Habits/Conditional/Polite Requests</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Past Habits:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>When I was a child, I <span className="text-orange-700 font-semibold">would</span> play in the park. (Regular past activity)</li>
                    <li>Every summer we <span className="text-orange-700 font-semibold">would</span> go to the beach. (Repeated action)</li>
                    <li>She <span className="text-orange-700 font-semibold">would</span> always help her friends. (Characteristic behavior)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Second Conditional:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>If I won the lottery, I <span className="text-orange-700 font-semibold">would</span> buy a house. (Hypothetical)</li>
                    <li>I <span className="text-orange-700 font-semibold">would</span> help you if I could. (Conditional)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Polite Requests:</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li><span className="text-orange-700 font-semibold">Would</span> you mind opening the window? (Very polite request)</li>
                    <li><span className="text-orange-700 font-semibold">Would</span> you like some tea? (Polite offer)</li>
                  </ul>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 5. Other Modals */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Other Important Modals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Shall - Future Plans/Offer/Suggestion (British English)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Shall</span> we go to the cinema? (Suggestion)</li>
                <li>I <span className="text-orange-700 font-semibold">shall</span> return tomorrow. (Formal future)</li>
                <li><span className="text-orange-700 font-semibold">Shall</span> I help you? (Offer of help)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Need - Necessity (Only with to in questions/negatives)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>You <span className="text-orange-700 font-semibold">needn't</span> come if you don't want to. (No necessity)</li>
                <li><span className="text-orange-700 font-semibold">Need</span> I say more? (Is it necessary for me to say more?)</li>
                <li>She <span className="text-orange-700 font-semibold">doesn't need to</span> work. (No obligation)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-orange-700">Dare - Courage (Rare, mostly negative)</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>How <span className="text-orange-700 font-semibold">dare</span> you speak to me like that! (How do you have the courage/audacity)</li>
                <li>I <span className="text-orange-700 font-semibold">daren't</span> tell him the truth. (I don't have the courage)</li>
                <li><span className="text-orange-700 font-semibold">Dare</span> you jump from there? (Do you have the courage?)</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 6. Summary Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              6. Modal Verbs Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Modal</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Meaning</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Can</td><td className="border px-3 py-2">Ability/Permission</td><td className="border px-3 py-2">I can swim.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Could</td><td className="border px-3 py-2">Past ability/Polite requests</td><td className="border px-3 py-2">Could you help me?</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">May</td><td className="border px-3 py-2">Formal permission/Possibility</td><td className="border px-3 py-2">May I come in?</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Might</td><td className="border px-3 py-2">Less certain possibility</td><td className="border px-3 py-2">It might rain.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Must</td><td className="border px-3 py-2">Strong obligation/Deduction</td><td className="border px-3 py-2">You must study.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Have to</td><td className="border px-3 py-2">External obligation</td><td className="border px-3 py-2">I have to work.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Should</td><td className="border px-3 py-2">Advice/Recommendation</td><td className="border px-3 py-2">You should rest.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Will</td><td className="border px-3 py-2">Future/Promises</td><td className="border px-3 py-2">I will help you.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Would</td><td className="border px-3 py-2">Past habits/Conditional</td><td className="border px-3 py-2">She would sing.</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 7. Common Errors */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">7. Common Errors to Avoid</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">1. Double modal</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ I can must go now.</p>
                <p>✅ I must go now.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">2. Wrong form after modal</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ She can to swim.</p>
                <p>✅ She can swim.</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">3. Confusing must/have to</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ I must wear uniform at school. (personal choice)</p>
                <p>✅ I have to wear uniform at school. (school rule)</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">4. May vs Can for permission</h3>
              <div className="bg-white/70 rounded-lg p-4 border border-orange-200 space-y-1">
                <p>❌ Can I smoke here? (in formal situations)</p>
                <p>✅ May I smoke here? (more formal)</p>
              </div>
            </section>
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
              After studying the sheet, launch into the exercises to consolidate your knowledge of modal verbs.
            </p>
            <Link to="/formation/anglais/grammaire/modaux/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Study this chapter
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

export default ModauxPage;
