import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, FileText, Sparkles } from 'lucide-react';

const FormationCultureGeneralePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-purple-600 text-white">
            <BookOpen className="h-8 w-8" />
          </div>
          Formation Culture générale
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Méthode d'analyse des libellés et articles de référence pour construire des copies solides
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Niveau prépa</Badge>
          <Badge variant="outline">Articles et méthodes</Badge>
          <Badge className="bg-purple-600">Nouveau</Badge>
        </div>
      </div>

      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="methodes">Méthodes</TabsTrigger>
          <TabsTrigger value="programme">Programme</TabsTrigger>
        </TabsList>

        {/* Articles */}
        <TabsContent value="articles">
          <Card className="border-2 hover:border-purple-500/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Sparkles className="h-5 w-5 text-purple-600" />
                Les types de sujets – autour de « juger »
              </CardTitle>
              <p className="text-muted-foreground">
                Distinguer les sens et les pièges du libellé pour problématiser efficacement.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <section>
                <h3 className="font-semibold mb-2">Génitif « du juger »</h3>
                <p className="text-muted-foreground mb-3">
                  Génitif subjectif vs objectif : questionner le rôle actif/passif (subir/provoquer).
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Subjectif (nominatif implicite) : « les jugements d’Hélène » → c’est Hélène qui juge.</li>
                  <li>Objectif (accusatif implicite) : « les jugements provoqués par Hélène » → Hélène est la cause.</li>
                  <li>
                    Plus encore, le génitif « du juger » entretient l’ambiguïté : s’il est subjectif, il désigne le
                    jugement propre au juger; s’il est objectif, il s’agit du jugement qui provient du juger, celui
                    qu’il impose aux êtres humains.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Tournures et grammaire du libellé</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Tournure impersonnelle → interroger « qui est le sujet ? »</li>
                  <li>
                    Infinitif : soit un constat (capacité/possibilité), soit une valeur injonctive (ordre/interdiction).
                  </li>
                  <li>Transitif (COD) → « juger quoi/qui ? » ; Intransitif (COI) → « juger de quoi/de qui ? »</li>
                  <li>Se demander si l’action est possible et par qui (dieux, société, hommes, objets dotés d’une conscience).</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Coordination « A et B »</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Conjonction : addition ou opposition, exclusif vs cumulatif.</li>
                  <li>Tester une éventuelle tautologie (ne pas redire deux fois la même chose).</li>
                  <li>Inverser le « et » en « contre » pour faire ressortir une tension éventuelle.</li>
                  <li>Le premier terme peut porter l’accent sémantique.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Articles et déterminants</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>« Le » : article de notoriété – suppose l’unicité → la questionner.</li>
                  <li>« Un » : interroger l’unité ou la pluralité → « un jugement » ou « des jugements » ?</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Être et Avoir – inversion possible</h3>
                <p className="text-sm text-muted-foreground">
                  Examiner si l’inversion change le sens ou met à jour un présupposé caché du sujet.
                </p>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Analogie et métaphore</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Bien évaluer la pertinence de l’analogie (ex. « le juger est-il une scène ? ») et justifier en quoi
                  l’image éclaire réellement le concept.
                </p>
                <p className="text-sm text-muted-foreground">
                  Exemple : « la scène du juger » – pourquoi et en quoi l’analogie est-elle heuristique ?
                </p>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Analyse du verbe « juger »</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    Étymologie : du latin <em>judicare</em> (de <em>jus</em>, droit, et <em>dicere</em>, dire) → « dire le droit ».
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Juridique : rendre un verdict.</li>
                    <li>Épistémologique : évaluer, former un avis.</li>
                    <li>Moral/éthique : apprécier la valeur d’un acte/personne.</li>
                    <li>Esthétique : juger une œuvre.</li>
                    <li>Cognitif : estimer/supposer (Kant : jugements analytique/synthétique).</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Actif vs passif : juger / être jugé.</li>
                    <li>Objectif vs subjectif : impartialité vs opinion personnelle.</li>
                    <li>Transitif vs intransitif : juger quelque chose / juger de quelque chose.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Présupposés généraux</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Existence d’une norme/critère (loi, morale, raison).</li>
                  <li>Un sujet qui juge et un objet jugé.</li>
                  <li>Possibilité d’erreur/partialité → question de l’objectivité.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Paradoxes</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Juger est nécessaire à l’ordre social, mais peut engendrer l’injustice.</li>
                  <li>Le jugement peut libérer (trancher) et contraindre (condamner).</li>
                  <li>Peut-on se juger soi-même impartialement ?</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold mb-2">Problématiques d’ensemble</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Comment juger sans préjugés ? (Husserl : suspension du jugement)</li>
                  <li>Juger : acte de pouvoir ou de connaissance ?</li>
                  <li>Le jugement est-il universel (Kant) ou relatif (Nietzsche) ?</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Méthodes */}
        <TabsContent value="methodes">
          <div className="space-y-8">
            <Card className="border-2 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Méthode de la culture générale
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <section>
                  <h3 className="font-semibold text-foreground mb-2">Pourquoi les conseils classiques en CG sont inadaptés ?</h3>
                  <p className="mb-3">Les cours magistraux sont souvent riches et passionnants… mais trop denses pour être opérationnels aux concours.</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Risque de noyade d’informations non hiérarchisées.</li>
                    <li>Utilisabilité faible sans tri méthodique préalable.</li>
                  </ul>
                  <p className="mt-2"><span className="font-medium text-foreground">Solution</span> : approche pragmatique et sélective. Tu choisis ce que tu retiens et tu l’apprends vraiment.</p>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">Une méthode qui marche (et prend moins de temps)</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Gagner du temps en révision et le jour J.</li>
                    <li>Limiter l’aléa des sujets : méthode adaptable à toute formulation.</li>
                    <li>Améliorer vite les copies : structure claire, exemples pertinents, méthodo béton.</li>
                  </ul>
                  <p className="mt-2 text-sm">Accroche-toi et lis tout: tu ne seras pas déçu. Pose tes questions, j’y réponds.</p>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">Première année : priorité à la méthodologie</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Introduction: accroche, définitions, problématique, plan.</li>
                    <li>Transitions: entre parties et paragraphes.</li>
                    <li>Conclusion: synthèse et ouverture.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">Les critères de jugement aux concours</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Structure: organisation logique et fluide.</li>
                    <li>Lisibilité: clarté et syntaxe impeccable.</li>
                    <li>Orthographe: zéro faute.</li>
                    <li>Exemples: pertinents, variés, bien exploités.</li>
                    <li>Fond: réflexion personnelle et profondeur.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">Hack: apprendre par cœur, pour être prêt</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Réduire l’aléa: prêt pour presque tous les sujets.</li>
                    <li>Gagner du temps: moins de brouillon, rédaction plus fluide.</li>
                    <li>Retour d’expérience: méthode éprouvée (&gt;16/20 aux concours).</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">Utiliser les exemples efficacement</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Limiter à 30 exemples clés (philo, littérature, histoire, contemporain).</li>
                    <li>Les maîtriser parfaitement: contexte, analyse, auteur.</li>
                    <li>Les adapter à tout sujet.</li>
                  </ul>
                  <p className="mt-2 text-sm">Objectif: 30 exemples = 30 paragraphes types prêts à être insérés/adaptés.</p>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">Deux méthodes pour « hacker » une copie</h3>
                  <p className="text-sm mb-2">Moments stratégiques scrutés par les correcteurs:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Introduction: accroche, problématique claire, plan annoncé.</li>
                    <li>Premières phrases des parties: direction de la réflexion.</li>
                    <li>Premières phrases des paragraphes: idée forte dès l’ouverture.</li>
                    <li>Autour de l’œuvre soulignée: exploitation intelligente et profonde.</li>
                    <li>Dernière sous-partie: chute qui marque.</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-semibold text-foreground mb-2">Besoin d’aller plus loin ?</h3>
                  <p className="text-sm">Accompagnement possible: méthode des paragraphes, tri et rédaction, plan de révisions jusqu’aux concours. 📩 Contacte-moi pour toute question.</p>
                </section>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Méthode express d’analyse d’un sujet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Découper le libellé (déterminants, conjonctions, modes/temps, nominalisations).</li>
                  <li>Tester les sens concurrents et les présupposés implicites.</li>
                  <li>Formuler une tension centrale → problématique en une question.</li>
                  <li>Bâtir un plan problématisé avec exemples contemporains pertinents.</li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Forme du sujet — décoder les formulations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm text-muted-foreground">
                {/* Sommaire cliquable */}
                <nav className="bg-purple-50 border border-purple-200 rounded-md p-3 text-foreground">
                  <div className="font-semibold mb-2">Sommaire</div>
                  <ul className="list-disc list-inside grid sm:grid-cols-2 gap-x-6">
                    {[
                      'Double génitif',
                      '« Peut‑on »',
                      'Article défini « le / la / les »',
                      '« Et »',
                      '« On »',
                      '« Un »',
                      '« Est‑il… ? / Est‑ce… ? »',
                      '« Pourquoi ? »',
                      '« Faut‑il ? »',
                    ].map((title, i) => (
                      <li key={i}><a href={`#forme-${i}`} className="hover:underline">{title}</a></li>
                    ))}
                  </ul>
                </nav>

                {/* Articles pliables */}
                <Accordion type="multiple" className="w-full">
                  <AccordionItem value="item-0" id="forme-0">
                    <AccordionTrigger className="text-left">Double génitif</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-2">Exemples: « les blessures de la mémoire », « le crépuscule de la vérité ».</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Objectif vs subjectif: inhérent à la chose ou effet qui en découle ?</li>
                        <li>Discuter l’antériorité: quelle notion précède/fonde l’autre ?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-1" id="forme-1">
                    <AccordionTrigger className="text-left">« Peut‑on »</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Capacité matérielle/physique: critère d’existence.</li>
                        <li>Dimension morale: « faut‑il » (légitimité) ?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" id="forme-2">
                    <AccordionTrigger className="text-left">Article défini « le / la / les »</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Essence: qualités constitutives — existence réellement attestée ?</li>
                        <li>Degré: un parmi d’autres, idéal, incarnation imaginaire ?</li>
                        <li>Singulier vs pluriel: abondance / assouvissement possible ?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" id="forme-3">
                    <AccordionTrigger className="text-left">« Et »</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Copulatif (enchaînement), adversatif (opposition) ou identitaire (le « et » devient « est ») ?</li>
                        <li>Si copulatif: que contient A qui implique B ?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" id="forme-4">
                    <AccordionTrigger className="text-left">« On »</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>« On » inclusif (je/nous) ou exclusif (ensemble de personnes) ?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" id="forme-5">
                    <AccordionTrigger className="text-left">« Un »</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Précision faible: nuancer avec l’article défini.</li>
                        <li>Pluralité possible/impossible ?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" id="forme-6">
                    <AccordionTrigger className="text-left">« Est‑il… ? / Est‑ce… ? »</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Essence (inhérent) vs accident (contingent) vs puissance (potentiel sous condition).</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" id="forme-7">
                    <AccordionTrigger className="text-left">« Pourquoi ? »</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Causes (par quels biais ?).</li>
                        <li>Finalités (pour quoi faire ?).</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" id="forme-8">
                    <AccordionTrigger className="text-left">« Faut‑il ? »</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Indispensable, judicieux, au regard des objectifs/valeurs invoqués ?</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Paradoxes */}
            <Card className="border-2 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Paradoxes — couples à mobiliser
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-4">
                <p>
                  Couples conceptuels utiles pour problématiser par tensions internes. À décliner et compléter selon le thème annuel.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Termes oxymoriques / pléonasmiques</li>
                    <li>Immuable (état) / changeant (processus)</li>
                    <li>Inné (immédiat) / acquis (temps long)</li>
                    <li>Sens actif (je peux…) / sens passif (on m’…)</li>
                    <li>Liberté: choisie (volontaire) / subie (mécanique)</li>
                    <li>Interne (sentiment) / externe (gestes, actions)</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Individuel / collectif</li>
                    <li>Envisageable / impossible</li>
                    <li>Contingent / nécessaire / possible</li>
                    <li>En acte (qui est) / en puissance (qui pourrait)</li>
                    <li>En droit, en théorie / en fait, en pratique</li>
                    <li>Transcendant (extérieur) / immanent (intérieur)</li>
                  </ul>
                </div>
                <p className="text-xs italic">Cette liste est volontairement ouverte et doit être enrichie par des couples spécifiques au thème de l’année.</p>
              </CardContent>
            </Card>

            {/* Plan en 3 parties */}
            <Card className="border-2 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Construire le plan — articulation en 3 parties
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-4">
                <p>Voici comment s’articulent vos trois parties.</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-medium text-foreground">Partie I</span> — Examen du sujet sous un premier angle, celui d’un des deux membres du paradoxe.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Partie II</span> — Examen d’un autre aspect découlant des réflexions de la I, celui de l’autre membre du paradoxe.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Partie III</span> — Approfondissement sous un autre angle (mise en perspective, dépassement, conditions).
                  </li>
                </ol>
                <div className="p-3 rounded-md bg-purple-50 border border-purple-200">
                  <div className="font-semibold text-foreground mb-1">Remarque</div>
                  <p>
                    La 3e partie répond souvent à « sous quelles conditions ? ». Faites apparaître ces conditions dès
                    l’annonce du plan.
                  </p>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Trouver les titres des grandes parties</div>
                  <p>Appuyez‑vous sur le champ lexical du sujet.</p>
                  <div className="mt-2 bg-gray-50 border rounded-md p-3">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Exemple</div>
                    <div className="text-foreground">« apprendre à aimer » → éducation, leçon, cultiver</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sous-parties, transitions, conclusion, conseils */}
            <Card className="border-2 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Sous-parties, transitions, conclusion — et conseils jour J
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-8">
                {/* Sous-parties */}
                <section>
                  <h4 className="font-semibold text-foreground mb-2">Construire les sous‑parties</h4>
                  <p className="mb-2">Dans chaque grande partie, faites progresser l'analyse selon une logique claire. Cette logique doit apparaître dans l’annonce des sous‑parties.</p>
                  <div className="space-y-2">
                    <div className="font-medium">Schémas de progression réutilisables</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Syllogisme: A → B → C</li>
                      <li>Distinction conceptuelle/définitoire
                        <ul className="list-disc list-inside ml-5 space-y-1">
                          <li>Civilisation = société + culture + histoire</li>
                          <li>Mémoire = stockage / faculté de rappel / mémoire collective</li>
                        </ul>
                      </li>
                      <li>Points de vue: collectif vs individuel</li>
                      <li>Progression dialectique: thèse (A) → antithèse (B) → synthèse (C)</li>
                    </ul>
                  </div>
                  <div className="mt-3 space-y-1">
                    <div className="font-medium">Relier stylistiquement les sous‑parties</div>
                    <ul className="list-disc list-inside space-y-1">
                      <li>« Tout d’abord… / On peut commencer par avancer que… »</li>
                      <li>« Il s’agit alors de comprendre… »</li>
                      <li>« Cependant / Pourtant / Toutefois… »</li>
                      <li>« Ainsi… / De ce fait… / Dès lors… »</li>
                    </ul>
                  </div>
                </section>

                {/* Transitions */}
                <section>
                  <h4 className="font-semibold text-foreground mb-2">Réussir les transitions</h4>
                  <p className="mb-2">En fin de partie, mettez en évidence une limite pour ouvrir la suivante. C’est le bon moment pour introduire le deuxième terme du paradoxe.</p>
                  <div className="bg-gray-50 border rounded-md p-3">
                    <div className="text-xs uppercase tracking-wide text-gray-600 mb-1">Modèle</div>
                    <p>« Puisque l’on a établi […], et qu’on atteint telle limite, il convient désormais de s’intéresser à […]. En effet, … »</p>
                  </div>
                </section>

                {/* Conclusion */}
                <section>
                  <h4 className="font-semibold text-foreground mb-2">Conclure efficacement</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Insister sur le <span className="font-medium text-foreground">raisonnement</span> parcouru (enchaînement des parties et sous‑parties), plutôt que répéter des thèses.</li>
                    <li>Mobiliser le vocabulaire technique des auteurs pour qualifier votre démonstration.</li>
                    <li>Ouverture: relire l’œuvre de l’accroche à la lumière de ce que vous avez montré (plutôt qu’une question hors‑sujet).
                      <div className="text-muted-foreground italic">« C’est peut‑être ce qui pousse … (personnage de l’introduction) »</div>
                    </li>
                  </ul>
                </section>

                {/* Conseils jour J */}
                <section>
                  <h4 className="font-semibold text-foreground mb-2">Conseils généraux le jour du concours</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Insérer une petite étoile entre chaque partie; trois étoiles entre l’introduction et I, puis entre III et la conclusion.</li>
                    <li>Soigner la graphie et l’orthographe.</li>
                  </ul>
                </section>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Programme (placeholder court) */}
        <TabsContent value="programme">
          <Card className="border-2 hover:border-purple-500/40 transition-colors">
            <CardHeader>
              <CardTitle>Programme à venir</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ajout progressif d’articles thématiques, de fiches concepts et d’exemples argumentés.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormationCultureGeneralePage;

