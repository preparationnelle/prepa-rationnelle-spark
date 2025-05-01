
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
import { GraduationCap, Clock, Star, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const AudenciaPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Audencia Business School</h1>
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
              <span className="font-semibold">L'entretien à orientation RSE :</span> Audencia, école nantaise réputée pour son 
              engagement en matière de responsabilité sociétale, propose un entretien de personnalité qui dure environ 30 minutes 
              (coefficient 10).
            </p>
            <p className="mb-4">
              L'entretien se déroule devant un jury de 2 personnes généralement (un professeur et un professionnel/alumni) et 
              suit un format assez conventionnel : présentation, parcours, motivations, et projets.
            </p>
            <p className="mb-4">
              La particularité d'Audencia réside dans sa forte orientation RSE (Responsabilité Sociétale des Entreprises) qui 
              peut transparaître dans certaines questions. On vous demandera souvent votre vision du rôle de l'entreprise dans la 
              société ou vos valeurs personnelles en matière d'engagement social ou environnemental.
            </p>
            <p>
              Il n'est pas rare qu'une partie de l'entretien soit réalisée en anglais, pour évaluer votre aisance. Audencia étant 
              une école à l'international développé, les compétences linguistiques sont valorisées.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce qu'Audencia valorise
            </h3>
            <p className="mb-4">
              Audencia met particulièrement l'accent sur la responsabilité sociétale, le développement durable et l'humanisme. 
              L'école valorise les candidats capables de porter un regard critique mais constructif sur notre société et son évolution.
            </p>
            <p className="mb-4">
              Les jurés apprécient les étudiants conscients des enjeux économiques, sociaux et environnementaux actuels, et qui ont une 
              réflexion personnelle sur ces sujets – plus que des réponses toutes faites. Ils cherchent des profils qui pourront 
              incarner leur devise "Never stop daring" tout en étant responsables.
            </p>
            <p>
              Audencia attend également des candidats qu'ils montrent leur ouverture internationale, leur capacité à travailler dans 
              des environnements multiculturels et leur intelligence émotionnelle. L'école met l'accent sur des valeurs d'équité, 
              d'inclusion et de promotion de la diversité qu'elle espère retrouver chez ses futurs étudiants.
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
                  <p className="text-sm text-muted-foreground">Coefficient 10</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Orientation RSE</p>
                  <p className="text-sm text-muted-foreground">Focus sur l'engagement</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Partie en anglais</p>
                  <p className="text-sm text-muted-foreground">Évaluation linguistique</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Jury de 2 personnes</p>
                  <p className="text-sm text-muted-foreground">Prof + professionnel</p>
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
              <BookOpen className="h-5 w-5" />
              Style de l'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              L'entretien Audencia est réputé pour être plutôt détendu et bienveillant, dans l'esprit de l'école. Les jurés cherchent 
              à découvrir votre personnalité plus qu'à vous stresser ou vous piéger.
            </p>
            <p className="mb-4">
              Les questions commencent généralement par du classique (parcours, activités extrascolaires), puis évoluent souvent vers 
              des sujets de société ou d'actualité avec une dimension RSE. Par exemple : « Quelle est pour vous l'entreprise la plus 
              responsable aujourd'hui et pourquoi ? » ou « Comment voyez-vous l'évolution du rôle des entreprises face aux défis 
              environnementaux ? ».
            </p>
            <p className="mb-4">
              La partie en anglais peut survenir à n'importe quel moment, souvent au milieu de l'entretien, avec une transition 
              du type "Now, let's continue in English for a while". Les questions en anglais restent généralement simples et portent 
              sur des sujets déjà abordés en français, pour se concentrer sur votre aisance linguistique plus que sur le fond.
            </p>
            <p>
              L'atmosphère est professionnelle mais décontractée. Le jury Audencia cherche avant tout à voir si vous correspondez à 
              l'esprit de l'école, qui mêle performance et valeurs humaines. Ils vous laisseront généralement le temps de développer 
              vos réponses et pourront rebondir avec des questions complémentaires pour approfondir votre pensée, dans une dynamique 
              d'échange plus que d'interrogatoire.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien Audencia</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Développez votre sensibilité RSE</AccordionTrigger>
                <AccordionContent>
                  Préparez-vous sur les thématiques RSE et développement durable. Sans tomber dans le discours convenu, informez-vous 
                  sur les grands enjeux actuels et réfléchissez à votre position personnelle. Connaître quelques exemples d'entreprises 
                  engagées dans une démarche RSE sérieuse peut être un plus (évitez les exemples de greenwashing).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Pratiquez votre anglais</AccordionTrigger>
                <AccordionContent>
                  Entraînez-vous à répondre à des questions basiques en anglais sur votre parcours, vos motivations et vos projets. 
                  La fluidité est plus importante que le vocabulaire technique. Préparez-vous aussi à parler d'un sujet d'actualité 
                  simple en anglais, comme le changement climatique ou la transformation digitale.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Connaissez Audencia</AccordionTrigger>
                <AccordionContent>
                  Renseignez-vous précisément sur les spécificités d'Audencia : ses programmes (notamment ceux qui vous intéressent), 
                  ses partenariats internationaux, son engagement RSE (labels, chaires, etc.), ses associations étudiantes les plus actives. 
                  Montrez que votre choix d'Audencia est réfléchi et correspond à vos valeurs personnelles.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Soyez authentique</AccordionTrigger>
                <AccordionContent>
                  Ne jouez pas un rôle ou ne récitez pas un discours appris. Audencia valorise l'authenticité et la sincérité. Si vous 
                  n'avez pas d'engagement associatif particulier, ne prétendez pas le contraire, mais expliquez plutôt ce qui vous 
                  motive ou vous intéresse dans ce domaine et ce que vous aimeriez développer à l'avenir.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Montrez votre ouverture d'esprit</AccordionTrigger>
                <AccordionContent>
                  L'intelligence émotionnelle et l'ouverture d'esprit sont essentielles pour Audencia. Démontrez votre capacité à 
                  comprendre différentes perspectives, à travailler en équipe et à vous adapter à des environnements diversifiés. 
                  Des exemples concrets de situations où vous avez fait preuve d'empathie ou d'adaptabilité seront appréciés.
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

export default AudenciaPage;
