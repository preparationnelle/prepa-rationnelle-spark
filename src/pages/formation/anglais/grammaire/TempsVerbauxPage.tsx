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

const TempsVerbauxPage = () => {
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
            <span className="text-gray-900 font-bold">Temps Verbaux</span>
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
            Fiche de Grammaire : Maîtrisez tous les Temps Verbaux Anglais
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les temps verbaux anglais permettent d'exprimer quand une action se déroule et comment elle se déroule. Cette fiche présente les 12 temps principaux avec leurs structures, utilisations et exemples concrets.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Intermédiaire</Badge>
            <Badge variant="outline">2-3 heures</Badge>
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
            <p>Les temps verbaux anglais permettent d'exprimer quand une action se déroule (passé, présent, futur) et comment elle se déroule (simple, continu, parfait, parfait continu).</p>
            <p>Cette fiche présente les 12 temps principaux avec leurs structures, utilisations et exemples concrets.</p>
          </CardContent>
        </Card>

        {/* Structure générale */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Structure Générale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-800">
            <p>Les temps anglais se divisent en 4 catégories principales :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Simple</strong> : actions habituelles, faits, vérités générales</li>
              <li><strong>Continu (Progressive)</strong> : actions en cours à un moment donné</li>
              <li><strong>Parfait (Perfect)</strong> : actions accomplies avec un lien temporel</li>
              <li><strong>Parfait Continu</strong> : durée d'une action jusqu'à un point précis</li>
            </ul>
          </CardContent>
        </Card>

        {/* Présent */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">1. Les Temps du Présent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Present Simple */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Present Simple (Présent Simple)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + Verbe (+ s/es à la 3ème personne)</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Habitudes et routines</li>
                  <li>Vérités générales et faits scientifiques</li>
                  <li>États permanents</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I work in a restaurant. (Je travaille dans un restaurant)</li>
                  <li>She goes to school every day. (Elle va à l'école tous les jours)</li>
                  <li>Water boils at 100°C. (L'eau bout à 100°C)</li>
                </ul>
              </section>

              {/* Present Continuous */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Present Continuous (Présent Continu)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + am/is/are + Verbe-ing</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actions en cours au moment présent</li>
                  <li>Plans futurs proches</li>
                  <li>Situations temporaires</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I am studying English right now. (J'étudie l'anglais en ce moment)</li>
                  <li>She is meeting her friend tomorrow. (Elle rencontre son ami demain)</li>
                  <li>They are living in Paris this year. (Ils vivent à Paris cette année)</li>
                </ul>
              </section>

              {/* Present Perfect */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Present Perfect (Présent Parfait)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + have/has + Participe passé</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actions accomplies récemment avec effet sur le présent</li>
                  <li>Expériences de vie</li>
                  <li>Actions répétées dans une période non terminée</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I have finished my homework. (J'ai terminé mes devoirs)</li>
                  <li>She has visited London three times. (Elle a visité Londres trois fois)</li>
                  <li>We have lived here since 2020. (Nous vivons ici depuis 2020)</li>
                </ul>
              </section>

              {/* Present Perfect Continuous */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Present Perfect Continuous (Présent Parfait Continu)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + have/has been + Verbe-ing</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actions commencées dans le passé et qui continuent</li>
                  <li>Insistance sur la durée d'une action</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I have been studying for three hours. (J'étudie depuis trois heures)</li>
                  <li>It has been raining all morning. (Il pleut depuis tout à l'heure)</li>
                  <li>She has been working here since January. (Elle travaille ici depuis janvier)</li>
                </ul>
              </section>
            </CardContent>
          </Card>

          {/* Passé */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">2. Les Temps du Passé</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Past Simple */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Past Simple (Passé Simple)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + Verbe au passé (-ed ou forme irrégulière)</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actions accomplies dans le passé à un moment précis</li>
                  <li>Habitudes passées</li>
                  <li>Succession d'événements passés</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I visited Paris last year. (J'ai visité Paris l'année dernière)</li>
                  <li>She studied medicine at university. (Elle a étudié la médecine à l'université)</li>
                  <li>They played football yesterday. (Ils ont joué au football hier)</li>
                </ul>
              </section>

              {/* Past Continuous */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Past Continuous (Passé Continu)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + was/were + Verbe-ing</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actions en cours à un moment du passé</li>
                  <li>Actions interrompues par d'autres événements</li>
                  <li>Atmosphère et description</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I was watching TV at 8 PM. (Je regardais la télé à 20h)</li>
                  <li>She was cooking when I called. (Elle cuisinait quand j'ai appelé)</li>
                  <li>They were sleeping when the alarm went off. (Ils dormaient quand l'alarme s'est déclenchée)</li>
                </ul>
              </section>

              {/* Past Perfect */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Past Perfect (Plus-que-parfait)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + had + Participe passé</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Action antérieure à un autre événement passé</li>
                  <li>Cause et conséquence dans le passé</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>She had already left when I arrived. (Elle était déjà partie quand je suis arrivé)</li>
                  <li>I had finished my work before the meeting. (J'avais terminé mon travail avant la réunion)</li>
                  <li>They had lived in London before moving to Paris. (Ils avaient vécu à Londres avant de déménager à Paris)</li>
                </ul>
              </section>

              {/* Past Perfect Continuous */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Past Perfect Continuous (Plus-que-parfait Continu)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + had been + Verbe-ing</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Durée d'une action jusqu'à un point du passé</li>
                  <li>Cause d'une situation passée</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I had been waiting for two hours when she finally arrived. (J'attendais depuis deux heures quand elle est enfin arrivée)</li>
                  <li>She was tired because she had been working all night. (Elle était fatiguée parce qu'elle avait travaillé toute la nuit)</li>
                  <li>They had been studying French for five years before they moved to France. (Ils étudiaient le français depuis cinq ans avant de déménager en France)</li>
                </ul>
              </section>
            </CardContent>
          </Card>

          {/* Futur */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">3. Les Temps du Futur</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Future Simple */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Future Simple (Futur Simple)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + will + Verbe à l'infinitif</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Prédictions sur l'avenir</li>
                  <li>Décisions spontanées</li>
                  <li>Promesses et offres</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I will call you tomorrow. (Je t'appellerai demain)</li>
                  <li>It will rain this afternoon. (Il pleuvra cet après-midi)</li>
                  <li>She will help you with your project. (Elle t'aidera avec ton projet)</li>
                </ul>
              </section>

              {/* Future Continuous */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Future Continuous (Futur Continu)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + will be + Verbe-ing</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actions en cours à un moment futur</li>
                  <li>Actions futures planifiées</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I will be working at 3 PM tomorrow. (Je travaillerai à 15h demain)</li>
                  <li>She will be studying when you arrive. (Elle étudiera quand tu arriveras)</li>
                  <li>They will be traveling to Spain next month. (Ils voyageront en Espagne le mois prochain)</li>
                </ul>
              </section>

              {/* Future Perfect */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Future Perfect (Futur Antérieur)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + will have + Participe passé</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Actions qui seront accomplies avant un moment futur</li>
                  <li>Prédictions sur des accomplissements futurs</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I will have finished the report by Friday. (J'aurai terminé le rapport d'ici vendredi)</li>
                  <li>She will have graduated by next summer. (Elle aura obtenu son diplôme d'ici l'été prochain)</li>
                  <li>They will have moved house by the end of the year. (Ils auront déménagé d'ici la fin de l'année)</li>
                </ul>
              </section>

              {/* Future Perfect Continuous */}
              <section>
                <h3 className="text-xl font-semibold mb-2">Future Perfect Continuous (Futur Antérieur Continu)</h3>
                <p><span className="text-orange-700 font-semibold">Structure</span> : Sujet + will have been + Verbe-ing</p>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Utilisations</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Durée d'une action jusqu'à un point futur</li>
                  <li>Insistance sur la continuité d'une action future</li>
                </ul>
                <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>By next year, I will have been teaching for 10 years. (L'année prochaine, cela fera 10 ans que j'enseigne)</li>
                  <li>She will have been studying English for 5 years by the time she graduates. (Elle étudiera l'anglais depuis 5 ans au moment de son diplôme)</li>
                  <li>They will have been living here for a decade next month. (Le mois prochain, cela fera dix ans qu'ils vivent ici)</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </div>

        {/* Conditionnels */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">4. Les Conditionnels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Zero Conditional (Conditionnel Zéro)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Présent simple, Présent simple</p>
              <p><span className="text-orange-700 font-semibold">Utilisation</span> : Vérités générales, lois scientifiques</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If you heat water to 100°C, it boils. (Si tu chauffes l'eau à 100°C, elle bout)</li>
                <li>If I eat too much, I feel sick. (Si je mange trop, je me sens malade)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">First Conditional (Première Conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Présent simple, will + Infinitif</p>
              <p><span className="text-orange-700 font-semibold">Utilisation</span> : Situations probables et leurs conséquences</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If it rains, I will stay home. (S'il pleut, je resterai à la maison)</li>
                <li>If you study hard, you will pass the exam. (Si tu étudies dur, tu réussiras l'examen)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Second Conditional (Deuxième Conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Passé simple, would + Infinitif</p>
              <p><span className="text-orange-700 font-semibold">Utilisation</span> : Situations hypothétiques ou improbables</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I won the lottery, I would buy a house. (Si je gagnais au loto, j'achèterais une maison)</li>
                <li>If I were you, I would take the job. (Si j'étais toi, je prendrais ce travail)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Third Conditional (Troisième Conditionnelle)</h3>
              <p><span className="text-orange-700 font-semibold">Structure</span> : If + Past Perfect, would have + Participe passé</p>
              <p><span className="text-orange-700 font-semibold">Utilisation</span> : Situations irréelles du passé et leurs conséquences</p>
              <p className="mt-1"><span className="text-orange-700 font-semibold">Exemples</span> :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>If I had studied harder, I would have passed the exam. (Si j'avais étudié plus dur, j'aurais réussi l'examen)</li>
                <li>If she had left earlier, she wouldn't have missed the train. (Si elle était partie plus tôt, elle n'aurait pas raté le train)</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* Modaux */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">5. Les Verbes Modaux</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2"><span className="text-orange-700">Can</span> / <span className="text-orange-700">Could</span></h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Can</strong> : capacité présente, permission – I can speak English. / Can I help you?</li>
                <li><strong>Could</strong> : capacité passée, politesse, possibilité – I could swim when I was young. / Could you help me?</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2"><span className="text-orange-700">Should</span> / <span className="text-orange-700">Would</span></h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Should</strong> : conseil, obligation morale, probabilité – You should see a doctor. / He should be here soon.</li>
                <li><strong>Would</strong> : habitude passée, politesse, conditionnel – I would visit my grandmother every Sunday. / Would you like some tea?</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2"><span className="text-orange-700">May</span> / <span className="text-orange-700">Might</span> / <span className="text-orange-700">Must</span></h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>May</strong> : permission formelle, possibilité – May I come in? / It may rain tomorrow.</li>
                <li><strong>Might</strong> : possibilité faible – She might call later.</li>
                <li><strong>Must</strong> : obligation forte, certitude – You must wear a seatbelt. / He must be tired.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* Voix Passive */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">6. La Voix Passive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>La voix passive met l'accent sur l'action plutôt que sur celui qui la fait.</p>
            <p><strong>Structure générale</strong> : Sujet + être (conjugué) + Participe passé + (by + agent)</p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Present Simple :</p>
                <p>Active : The chef cooks the meal. → Passive : The meal is cooked by the chef.</p>
              </div>
              <div>
                <p className="font-semibold">Past Simple :</p>
                <p>Active : Shakespeare wrote Hamlet. → Passive : Hamlet was written by Shakespeare.</p>
              </div>
              <div>
                <p className="font-semibold">Present Perfect :</p>
                <p>Active : Someone has stolen my bike. → Passive : My bike has been stolen.</p>
              </div>
              <div>
                <p className="font-semibold">Future Simple :</p>
                <p>Active : They will build a new school. → Passive : A new school will be built.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tableau récapitulatif */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Table className="h-6 w-6 text-orange-600" />
              7. Tableau Récapitulatif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 bg-white">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="border px-3 py-2 text-left text-orange-700">Temps</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Structure</th>
                    <th className="border px-3 py-2 text-left text-orange-700">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Present Simple</td><td className="border px-3 py-2">Sujet + V (+ s/es)</td><td className="border px-3 py-2">She works here.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Present Continuous</td><td className="border px-3 py-2">Sujet + am/is/are + V-ing</td><td className="border px-3 py-2">She is working now.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Present Perfect</td><td className="border px-3 py-2">Sujet + have/has + V3</td><td className="border px-3 py-2">She has worked here for 2 years.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Present Perf. Continuous</td><td className="border px-3 py-2">Sujet + have/has been + V-ing</td><td className="border px-3 py-2">She has been working since 9 AM.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Past Simple</td><td className="border px-3 py-2">Sujet + V2</td><td className="border px-3 py-2">She worked yesterday.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Past Continuous</td><td className="border px-3 py-2">Sujet + was/were + V-ing</td><td className="border px-3 py-2">She was working at 5 PM.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Past Perfect</td><td className="border px-3 py-2">Sujet + had + V3</td><td className="border px-3 py-2">She had worked before I arrived.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Past Perf. Continuous</td><td className="border px-3 py-2">Sujet + had been + V-ing</td><td className="border px-3 py-2">She had been working for hours.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Future Simple</td><td className="border px-3 py-2">Sujet + will + V</td><td className="border px-3 py-2">She will work tomorrow.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Future Continuous</td><td className="border px-3 py-2">Sujet + will be + V-ing</td><td className="border px-3 py-2">She will be working at 3 PM.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Future Perfect</td><td className="border px-3 py-2">Sujet + will have + V3</td><td className="border px-3 py-2">She will have worked 8 hours by then.</td></tr>
                  <tr><td className="border px-3 py-2 text-orange-700 font-medium">Future Perf. Continuous</td><td className="border px-3 py-2">Sujet + will have been + V-ing</td><td className="border px-3 py-2">She will have been working for 8 hours.</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Conseils pratiques */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">8. Conseils Pratiques</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-1">Signaux temporels utiles</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Present Simple</strong> : always, usually, often, sometimes, never</li>
                <li><strong>Present Continuous</strong> : now, at the moment, currently</li>
                <li><strong>Present Perfect</strong> : already, yet, just, ever, never, since, for</li>
                <li><strong>Past Simple</strong> : yesterday, last week, ago, in 1990</li>
                <li><strong>Future Simple</strong> : tomorrow, next week, in the future</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-1">Erreurs courantes à éviter</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ne pas confondre Present Perfect et Past Simple – ❌ I have seen him yesterday. ✅ I saw him yesterday.</li>
                <li>Attention aux verbes d'état (be, have, know, like) qui ne s'utilisent généralement pas au continu – ❌ I am knowing the answer. ✅ I know the answer.</li>
                <li>Respecter l'ordre des temps dans les conditionnelles – ❌ If I would have money, I will buy a car. ✅ If I had money, I would buy a car.</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        {/* CTA exercices */}
        <Card className="mt-8 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
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
            <Link to="/formation/anglais/grammaire/temps-verbaux/exercices">
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

export default TempsVerbauxPage;


