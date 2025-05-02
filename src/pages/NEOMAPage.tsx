
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

const NEOMAPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">NEOMA Business School</h1>
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
              <span className="font-semibold">Entretien classique avec questionnaire :</span> NEOMA (fusion Reims Management School 
              et Rouen Business School) propose un entretien de personnalité classique d'environ 30 minutes (coef. 12). Le format est 
              très similaire à celui de l'ESCP : un questionnaire à remplir, que le jury lit et utilise comme base de discussion.
            </p>
            <p className="mb-4">
              C'est un échange structuré autour de questions de motivation, de personnalité, de projet professionnel, guidé par les 
              questions du questionnaire. Le questionnaire NEOMA est renouvelé chaque année mais change peu dans le fond.
            </p>
            <p className="mb-4">
              Par exemple, le questionnaire 2024 de NEOMA posait des questions telles que : « De quelle réalisation personnelle êtes-vous 
              le(a) plus fier(e) ? Pourquoi ? », « Qu'attendez-vous du Programme Grande École de NEOMA ? », « Qu'appréciez-vous le plus et 
              le moins dans le travail en équipe ? », « Avez-vous déjà fait preuve de créativité ? À quelle occasion ? », etc.
            </p>
            <p className="mb-4">
              Ce sont des questions introspectives sur vos accomplissements, vos attentes, vos traits de personnalité en groupe, votre 
              créativité qui seront très probablement abordées à l'oral.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que NEOMA valorise
            </h3>
            <p className="mb-4">
              NEOMA met en avant la notion de "réussite responsable" et un esprit "engagé, agile, ouvert". À travers son entretien, l'école 
              valorise les candidats enthousiastes, adaptables et dotés d'un esprit d'équipe.
            </p>
            <p className="mb-4">
              Les questions sur le travail en équipe et la créativité révèlent que NEOMA aime les étudiants capables d'innover et de collaborer. 
              C'est une école qui a beaucoup misé sur la transformation digitale et l'expérience étudiante ces dernières années, donc des 
              candidats au fait de l'international et des nouvelles technologies peuvent marquer des points.
            </p>
            <p className="mb-4">
              L'école valorise aussi la dimension humaine : ils veulent des jeunes motivés qui contribueront activement à la vie de campus 
              sur Rouen ou Reims (donc qui aiment s'investir dans des projets, associations, etc.).
            </p>
            <p>
              En somme, NEOMA cherche des profils équilibrés : ambitieux mais humbles, créatifs mais avec les pieds sur terre, et surtout 
              très motivés par leur école pour la faire rayonner.
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
                  <p className="text-sm text-muted-foreground">Coefficient 12</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Questionnaire préalable</p>
                  <p className="text-sm text-muted-foreground">Base de l'entretien</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Format bienveillant</p>
                  <p className="text-sm text-muted-foreground">Atmosphère cordiale</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Deux campus</p>
                  <p className="text-sm text-muted-foreground">Reims et Rouen</p>
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
              Le déroulement est bienveillant et sans surprise. Pas d'épreuves exotiques ici : c'est vous, trois jurés environ, et une 
              discussion autour de votre parcours et de ce que vous avez écrit dans le questionnaire.
            </p>
            <p className="mb-4">
              L'ambiance dépend souvent du campus (Reims vs Rouen) mais en général les jurys NEOMA sont cordiaux. Le temps étant standard (30 min), 
              le jury prend le temps de creuser un peu chaque question du questionnaire.
            </p>
            <p className="mb-4">
              Par exemple, si vous avez écrit être fier d'une réalisation X, on va sûrement vous demander de la raconter en détail. S'il y a 
              un point faible dans votre dossier, le jury peut l'aborder gentiment (« Pourquoi telle note en math un peu en dessous ? ») pour voir 
              comment vous réagissez et si vous avez du recul.
            </p>
            <p className="mb-4">
              Globalement, c'est un entretien assez standard et positif, donc profitez-en pour montrer toute votre motivation. NEOMA n'est pas 
              connue pour mettre une pression inutile, au contraire.
            </p>
            <p>
              Ils savent qu'ils recrutent des personnalités qu'ils formeront pendant 3 ans sur deux campus où la cohésion est forte, 
              donc ils cherchent des gens avec qui le courant passe bien.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien NEOMA</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Soigner le questionnaire</AccordionTrigger>
                <AccordionContent>
                  Préparez le questionnaire NEOMA en réfléchissant à vos expériences marquantes. Par exemple, pour « réalisation dont vous êtes fier », 
                  ayez une histoire bien structurée (situation – action – résultat – apprentissage). Pour « contribution que vous apporterez à l'école », 
                  pensez aux clubs ou associations que vous rejoindrez et ce que vous y ferez.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Se projeter dans l'école</AccordionTrigger>
                <AccordionContent>
                  Sur « ce que vous attendez du Programme », mentionnez des éléments précis de NEOMA : par exemple, la pédagogie immersive (ils ont des 
                  simulations, le parcours Talent & Career, etc.), l'international (campus à Dublin ou échanges), ou une spécialisation qui vous intéresse. 
                  Montrez-leur que vous savez pourquoi vous venez chez eux.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Travail d'équipe</AccordionTrigger>
                <AccordionContent>
                  Concernant la question « équipe : ce que vous aimez ou pas », soyez honnête mais malin : vous pouvez dire « J'adore le travail d'équipe 
                  parce que cela permet d'échanger des idées et de progresser ensemble – par exemple j'ai vécu ça dans tel projet. Ce que j'aime le moins, 
                  c'est quand il y a un manque de communication, mais j'ai appris à y remédier en jouant souvent le rôle de coordinateur ».
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Attitude positive</AccordionTrigger>
                <AccordionContent>
                  Durant l'entretien, soyez chaleureux et enthousiaste : NEOMA attache de l'importance à la personnalité et à l'énergie positive. 
                  Vous pouvez glisser une touche d'humour si ça vient naturellement (un trait d'esprit sur une anecdote par exemple), car les jurys 
                  y sont sensibles si c'est authentique.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Personnaliser votre discours</AccordionTrigger>
                <AccordionContent>
                  Utilisez le nom de l'école de temps en temps dans vos réponses. « À NEOMA j'aimerais… », ça personnalise votre discours. N'oubliez 
                  pas que Reims et Rouen sont deux campus distincts – renseignez-vous sur celui où vous passerez l'oral, montrez un intérêt pour la ville. 
                  Cela montrera que vous vous projetez localement, ce qui plaît toujours.
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

export default NEOMAPage;
