
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Clock, Star, Award, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const KEDGEPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">KEDGE Business School</h1>
          <p className="text-muted-foreground">Fiche école - Entretien de personnalité</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Présentation de l'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              <span className="font-semibold">Entretien classique avec questionnaire "maison" :</span> KEDGE, école multi-campus 
              (Marseille, Bordeaux), utilise un format très proche de NEOMA/ESCP. Entretien individuel ~30 min (coef. 14). Il s'appuie 
              également sur un questionnaire de personnalité rempli par le candidat en amont et utilisé pendant l'oral.
            </p>
            <p className="mb-4">
              La structure est classique : présentation du candidat, motivations, projet pro, etc., guidée par les 
              questions du questionnaire. L'originalité de KEDGE est dans certaines questions spécifiques de son questionnaire.
            </p>
            <p className="mb-4">
              Par exemple, le questionnaire 2023 de KEDGE comprenait : « Le PGE KEDGE repose sur le Grow by Doing. Expliquez ce qui vous attire dans 
              cette approche. », « Quelle information nationale ou internationale a suscité le plus d'intérêt chez vous ces 3 derniers 
              mois ? Pourquoi ? », « Le PGE KEDGE recherche des "faiseurs" : parlez-nous de votre plus grand accomplissement concret ».
            </p>
            <p className="mb-4">
              On voit que KEDGE insiste sur son pédagogie "learning by doing" et sur l'esprit "faiseur" (concret, terrain). 
              Attendez-vous donc à orienter la discussion là-dessus.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que KEDGE valorise
            </h3>
            <p className="mb-4">
              KEDGE prône l'apprentissage par l'expérience et l'initiative, résumé par sa pédagogie "Grow by Doing". L'école veut des 
              étudiants concrets et entreprenants, des "faiseurs" qui n'hésitent pas à réaliser des projets et à apprendre sur le terrain.
            </p>
            <p className="mb-4">
              Elle valorise donc vos accomplissements tangibles (organisation d'événement, création d'un projet, engagement associatif), 
              mais aussi votre ouverture sur le monde (KEDGE a de nombreux partenaires internationaux).
            </p>
            <p className="mb-4">
              La question sur l'actualité récente vise à mesurer votre curiosité intellectuelle et votre capacité à analyser le monde qui 
              vous entoure.
            </p>
            <p>
              Globalement, KEDGE recherche des profils dynamiques, pragmatiques et ouverts, capables de tirer parti de son approche 
              pédagogique active.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Points clés
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium">Durée : 30 minutes</p>
                  <p className="text-sm text-muted-foreground">Coefficient 14</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Questionnaire préalable</p>
                  <p className="text-sm text-muted-foreground">À remplir avant l'entretien</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Focus "Grow by Doing"</p>
                  <p className="text-sm text-muted-foreground">Expériences et réalisations concrètes</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Multi-campus</p>
                  <p className="text-sm text-muted-foreground">Bordeaux et Marseille</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Style de l'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Le format est classique et bienveillant, très proche de NEOMA/ESCP. Le jury (2 ou 3 personnes) se base sur vos réponses au 
              questionnaire pour orienter l'échange.
            </p>
            <p className="mb-4">
              L'ambiance est professionnelle mais assez détendue – notamment sur le campus de Bordeaux ou Marseille, connus pour leur convivialité. 
            </p>
            <p className="mb-4">
              Le jury sera attentif à la cohérence de votre projet (surtout si vous mentionnez vouloir profiter du Grow by Doing : il s'attendra à 
              ce que vous citiez des expériences pratiques que vous voulez vivre en école).
            </p>
            <p className="mb-4">
              Attendez-vous à des questions précises sur ce que vous avez écrit : « Vous parlez de l'approche Grow by Doing, concrètement qu'aimeriez-vous 
              faire à KEDGE ? », « Racontez-nous la réalisation dont vous êtes le plus fier » ou « Quel est le fait d'actualité qui vous a marqué 
              récemment et pourquoi ? ».
            </p>
            <p>
              Le ton est généralement encourageant : les jurés cherchent à comprendre votre potentiel de "faiseur" et à évaluer si vous saurez vous 
              épanouir dans leur programme. Ils apprécieront que vous soyez enthousiaste et que vous ayez un esprit d'initiative.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien KEDGE</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Comprendre le "Grow by Doing"</AccordionTrigger>
                <AccordionContent>
                  Dans vos réponses, montrez que vous avez compris et adhérez au "Grow by Doing". Par exemple, expliquez que vous aimez 
                  apprendre en pratiquant et illustrez-le avec une expérience passée. Si on vous demande ce que cette approche vous inspire, 
                  mentionnez que vous avez hâte de participer à des projets concrets, des stages, des études de cas pour appliquer la théorie.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Mettre en avant vos réalisations</AccordionTrigger>
                <AccordionContent>
                  Préparez un exemple solide de ce que vous avez fait dont vous êtes fier. KEDGE adore les étudiants qui passent à l'action, donc 
                  mettez en avant un projet monté, un engagement bénévole avec résultats mesurables, etc. Montrez ce que vous avez appris à 
                  travers cette expérience concrète.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Préparer la question d'actualité</AccordionTrigger>
                <AccordionContent>
                  Pour la question d'actualité : ayez un sujet précis en tête (économie, société, environnement…) et expliquez clairement pourquoi
                  il vous a intéressé – cela montrera votre esprit d'analyse et vos valeurs. Évitez les sujets trop polémiques sauf si vous avez 
                  une analyse vraiment nuancée à présenter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Démontrer votre motivation</AccordionTrigger>
                <AccordionContent>
                  Démontrez votre motivation pour KEDGE : parlez de ce qui vous attire (par exemple, « la possibilité de faire un semestre sur le 
                  campus de Shanghai », ou « le parcours Start-up avec son incubateur »). Si vous visez un campus en particulier (Bordeaux ou 
                  Marseille), vous pouvez glisser un mot sur ce choix (affinités régionales, secteur économique local dynamique…).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Être proactif</AccordionTrigger>
                <AccordionContent>
                  Montrez-vous proactif pendant l'entretien : n'hésitez pas à poser une question au jury en fin d'échange si on vous y 
                  invite, par exemple sur une particularité du programme KEDGE qui vous intéresse. En somme, faites transparaître votre énergie 
                  de "faiseur" : un candidat qui donne l'image de quelqu'un de prêt à concrétiser ses idées et à s'engager pleinement dans la vie 
                  de l'école séduira particulièrement le jury de KEDGE.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-10">
        <Button asChild>
          <Link to="/generator">Générer un plan d'entraînement</Link>
        </Button>
      </div>
    </div>
  );
};

export default KEDGEPage;
