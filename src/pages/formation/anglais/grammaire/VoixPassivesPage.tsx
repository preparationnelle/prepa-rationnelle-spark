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

const VoixPassivesPage = () => {
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
            <span className="text-gray-900 font-bold">Passive Voice</span>
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
            Grammar Sheet: Passive Voice in English
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passive voice allows emphasis on the action or the object that undergoes it rather than on the agent. Essential for formal, academic, and professional writing.
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
            <p>The passive voice is a construction that emphasizes the action or the object rather than the agent.</p>
            <p>It is essential for formal, academic, and professional English.</p>
          </CardContent>
        </Card>

        {/* Active vs Passive */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Difference between Active Voice and Passive Voice</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 text-gray-800">
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-semibold mb-2">Active Voice</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: Subject + Verb + Object</p>
              <p className="mt-2">Example: The chef cooks the meal.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><span className="text-orange-700 font-semibold">Subject</span>: The chef</li>
                <li><span className="text-orange-700 font-semibold">Verb</span>: cooks</li>
                <li><span className="text-orange-700 font-semibold">Object</span>: the meal</li>
              </ul>
            </div>
            <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold mb-2">Passive Voice</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span>: Subject + be + Past Participle + (by + agent)</p>
              <p className="mt-2">Example: The meal is cooked by the chef.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><span className="text-orange-700 font-semibold">Subject</span>: The meal</li>
                <li><span className="text-orange-700 font-semibold">Passive verb</span>: is cooked</li>
                <li><span className="text-orange-700 font-semibold">Agent</span>: by the chef (optional)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 1. Formation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">1. Formation of the Passive Voice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p><span className="text-orange-700 font-semibold">General structure</span>: Subject + be (conjugated) + Past Participle + (by + agent)</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The object of the active becomes the subject of the passive</li>
              <li>The verb <span className="text-orange-700 font-semibold">be</span> is conjugated in the same tense as the active</li>
              <li>The main verb becomes the <span className="text-orange-700 font-semibold">past participle</span></li>
              <li>The active subject becomes the <span className="text-orange-700 font-semibold">agent</span> introduced by "by" (optional)</li>
            </ul>
            <div className="bg-white/70 rounded-lg p-4 border border-orange-200">
              <p className="font-semibold text-orange-800">Transformation example</p>
              <p>Active: Shakespeare wrote Hamlet. → Passive: Hamlet was written by Shakespeare.</p>
            </div>
          </CardContent>
        </Card>

        {/* 2. Tous les temps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">2. Passive Voice in All Tenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Present Tenses</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Present Simple</p>
                  <p><span className="text-orange-700 font-semibold">Formation</span> : am/is/are + Participe passé</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>She writes letters → Letters are written by her.</li>
                    <li>He cleans the room → The room is cleaned by him.</li>
                    <li>They make cars here → Cars are made here.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Present Continuous</p>
                  <p><span className="text-orange-700 font-semibold">Formation</span> : am/is/are + being + Participe passé</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>She is cooking dinner → Dinner is being cooked by her.</li>
                    <li>They are building a bridge → A bridge is being built.</li>
                    <li>He is washing the car → The car is being washed.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Present Perfect</p>
                  <p><span className="text-orange-700 font-semibold">Formation</span> : have/has + been + Participe passé</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>Someone has stolen my bike → My bike has been stolen.</li>
                    <li>They have completed the project → The project has been completed.</li>
                    <li>She has written three books → Three books have been written by her.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Temps du Passé</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Past Simple</p>
                  <p><span className="text-orange-700 font-semibold">Formation</span> : was/were + Participe passé</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>The police caught the thief → The thief was caught by the police.</li>
                    <li>Edison invented the light bulb → The light bulb was invented by Edison.</li>
                    <li>They built this house in 1990 → This house was built in 1990.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Past Continuous</p>
                  <p><span className="text-orange-700 font-semibold">Formation</span> : was/were + being + Participe passé</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>She was driving the car → The car was being driven by her.</li>
                    <li>They were painting the wall → The wall was being painted.</li>
                    <li>He was reading a book → A book was being read by him.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Past Perfect</p>
                  <p><span className="text-orange-700 font-semibold">Formation</span> : had + been + Participe passé</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>They had finished the work → The work had been finished.</li>
                    <li>Someone had broken the window → The window had been broken.</li>
                    <li>She had already sent the email → The email had already been sent.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Temps du Futur</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Future Simple</p>
                  <p><span className="text-orange-700 font-semibold">Formation</span> : will + be + Participe passé</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>They will build a new school → A new school will be built.</li>
                    <li>She will complete the report tomorrow → The report will be completed tomorrow.</li>
                    <li>The company will launch the product → The product will be launched.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Future Perfect</p>
                  <p><span className="text-orange-700 font-semibold">Formation</span> : will + have been + Participe passé</p>
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>They will have finished the project → The project will have been finished.</li>
                    <li>She will have written the book → The book will have been written.</li>
                  </ul>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* 3. Modaux */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">3. La Voix Passive avec les Verbes Modaux</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <p><span className="text-orange-700 font-semibold">Structure générale</span> : Modal + be + Participe passé</p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2"><span className="text-orange-700">Can</span> / <span className="text-orange-700">Could</span></h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>She can solve this problem → This problem can be solved by her.</li>
                <li>They could finish it yesterday → It could be finished yesterday.</li>
                <li>You can see the mountain → The mountain can be seen from here.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2"><span className="text-orange-700">Should</span> / <span className="text-orange-700">Must</span></h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>You should complete the form → The form should be completed.</li>
                <li>Students must submit assignments → Assignments must be submitted on time.</li>
                <li>We should clean the house → The house should be cleaned.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2"><span className="text-orange-700">May</span> / <span className="text-orange-700">Might</span></h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>They may deliver the package → The package may be delivered tomorrow.</li>
                <li>Someone might cancel the meeting → The meeting might be cancelled.</li>
              </ul>
            </section>
            <section>
              <p><span className="text-orange-700 font-semibold">Modaux parfaits</span> : Modal + have been + Participe passé</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>They could have completed it → It could have been completed on time.</li>
                <li>She should have informed us → We should have been informed.</li>
                <li>He might have stolen the money → The money might have been stolen.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 4. Formes avancées */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Formes Passives Avancées</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Infinitifs passifs</h3>
              <p><span className="text-orange-700 font-semibold">Formation</span> : to be + Vpp / to have been + Vpp</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>I want to be invited to the party.</li>
                <li>She seems to have been warned about the danger.</li>
                <li>The work needs to be finished today.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Gérondifs passifs</h3>
              <p><span className="text-orange-700 font-semibold">Formation</span> : being + Vpp / having been + Vpp</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>I enjoy being photographed.</li>
                <li>He regrets having been deceived.</li>
                <li>She hates being criticized.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 5. Quand utiliser */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Quand Utiliser la Voix Passive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Utilisations recommandées</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Agent inconnu ou non important (My car was stolen last night.)</li>
                <li>Mettre l'accent sur l'action ou le résultat</li>
                <li>Style formel et objectif</li>
                <li>Éviter la répétition du sujet</li>
                <li>Instructions et procédures</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Contextes spécifiques</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Écriture académique et scientifique</li>
                <li>Actualités et journalisme</li>
                <li>Rapports et documents officiels</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* 6. Quand éviter */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">6. Quand Éviter la Voix Passive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li>Quand l'agent est important (✅ Messi scored the goal.)</li>
              <li>Pour plus de clarté et de dynamisme</li>
              <li>Éviter la sur-utilisation dans un même paragraphe</li>
              <li>Conversation informelle : préférez l'actif</li>
            </ul>
          </CardContent>
        </Card>

        {/* 7. Temps impossibles / lourds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">7. Temps qui ne s'utilisent pas au Passif</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-6 space-y-1">
              <li>Present Perfect Continuous : ❌ has been being written</li>
              <li>Past Perfect Continuous : ❌ had been being written</li>
              <li>Future Perfect Continuous : ❌ will have been being written</li>
              <li>Future Continuous : ❌ will be being written</li>
            </ul>
            <p className="text-sm text-gray-600">Note : Constructions grammaticalement impossibles ou extrêmement lourdes.</p>
          </CardContent>
        </Card>

        {/* 8. Erreurs courantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">8. Erreurs Courantes à Éviter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="list-disc pl-6 space-y-1">
              <li>Oublier l'auxiliaire "be" (✅ The letter was written by him.)</li>
              <li>Mauvais temps de l'auxiliaire (✅ The book was written by Shakespeare.)</li>
              <li>Confondre participe passé et passé simple (✅ driven, not drove)</li>
              <li>Utiliser la voix passive avec verbes intransitifs (❌ The party was happened)</li>
              <li>Sur-utilisation alourdit le style</li>
            </ul>
          </CardContent>
        </Card>

        {/* 9. Tableau récapitulatif */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              9. Tableau Récapitulatif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Temps</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Voix Active</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Voix Passive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Present Simple</td><td className="border px-3 py-2">She writes letters</td><td className="border px-3 py-2">Letters are written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Present Continuous</td><td className="border px-3 py-2">She is writing letters</td><td className="border px-3 py-2">Letters are being written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Present Perfect</td><td className="border px-3 py-2">She has written letters</td><td className="border px-3 py-2">Letters have been written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Past Simple</td><td className="border px-3 py-2">She wrote letters</td><td className="border px-3 py-2">Letters were written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Past Continuous</td><td className="border px-3 py-2">She was writing letters</td><td className="border px-3 py-2">Letters were being written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Past Perfect</td><td className="border px-3 py-2">She had written letters</td><td className="border px-3 py-2">Letters had been written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Future Simple</td><td className="border px-3 py-2">She will write letters</td><td className="border px-3 py-2">Letters will be written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Future Perfect</td><td className="border px-3 py-2">She will have written letters</td><td className="border px-3 py-2">Letters will have been written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Modal (can)</td><td className="border px-3 py-2">She can write letters</td><td className="border px-3 py-2">Letters can be written by her</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Modal Perfect</td><td className="border px-3 py-2">She could have written letters</td><td className="border px-3 py-2">Letters could have been written by her</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 10. Expressions idiomatiques */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">10. Expressions Idiomatiques avec la Voix Passive</CardTitle>
          </CardHeader>
        	<CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Expressions courantes</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">It is said that...</span> He is very wealthy.</li>
                <li><span className="text-orange-700 font-semibold">It is believed that...</span> The treasure is buried here.</li>
                <li><span className="text-orange-700 font-semibold">It is thought that...</span> The meeting will be postponed.</li>
                <li><span className="text-orange-700 font-semibold">It is known that...</span> Smoking is harmful.</li>
              </ul>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-1">Constructions impersonnelles</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><span className="text-orange-700 font-semibold">Be supposed to</span> : Students are supposed to arrive on time.</li>
                <li><span className="text-orange-700 font-semibold">Be expected to</span> : The report is expected to be ready tomorrow.</li>
                <li><span className="text-orange-700 font-semibold">Be rumored to</span> : The actor is rumored to be dating a singer.</li>
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
            <p>La voix passive est un outil puissant pour varier le style, mettre l'accent sur l'action et adopter un ton formel et objectif.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><span className="text-orange-700 font-semibold">Structure de base</span> : être + participe passé</li>
              <li><span className="text-orange-700 font-semibold">Adaptation aux temps</span> : l'auxiliaire "être" s'accorde au temps voulu</li>
              <li><span className="text-orange-700 font-semibold">Usage approprié</span> : active pour la clarté, passive pour l'emphase</li>
              <li><span className="text-orange-700 font-semibold">Éviter la sur-utilisation</span> : alterner avec l'actif</li>
              <li><span className="text-orange-700 font-semibold">Contexte formel</span> : utile en académique, scientifique, professionnel</li>
            </ul>
            <p><span className="text-orange-700 font-semibold">Conseil pratique</span> : maîtrisez d'abord la voix passive aux temps simples avant les formes modales et parfaites.</p>
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/formation/anglais/grammaire/voix-passives/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Target className="h-5 w-5 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/voix-passives/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Brain className="h-5 w-5 mr-2" />
                  Quiz
                </Button>
              </Link>
              <Link to="/formation/anglais/grammaire/voix-passives/flashcards">
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
              Back to Grammar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VoixPassivesPage;


