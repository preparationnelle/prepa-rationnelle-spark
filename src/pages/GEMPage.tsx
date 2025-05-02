
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

const GEMPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Grenoble École de Management</h1>
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
              <span className="font-semibold">L'entretien multi-parties avec "entretien inversé" :</span> GEM propose un entretien 
              d'admission en plusieurs séquences, assez particulier dans son déroulement. Durée ~30 minutes (coef. 10).
            </p>
            <p className="mb-4">
              <strong>Étape 1 - Exposé d'actualité (5 min) :</strong> En amont (avant le jour J), chaque candidat prépare une 
              présentation de 5 minutes sur un fait d'actualité récent de son choix, lié à une thématique au programme (géopolitique, 
              économie ou management de la tech, selon votre spécialité prépa). Vous présentez ce sujet pendant 5 min devant le jury.
            </p>
            <p className="mb-4">
              <strong>Étape 2 - Entretien inversé (10 min) :</strong> Là, vous endossez le rôle de l'interviewer. Vous choisissez l'un 
              des jurés et vous lui posez des questions pendant 9 minutes, comme si vous meniez l'entretien. Puis vous faites une courte 
              synthèse de 1 minute de ce qu'il vous a répondu.
            </p>
            <p className="mb-4">
              <strong>Étape 3 - Échange libre (15 min) :</strong> Retour au format classique, le jury reprend la main et vous pose des 
              questions de motivation, parcours, etc. C'est l'entretien de personnalité final où vous "bouclez" l'oral.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que GEM valorise
            </h3>
            <p className="mb-4">
              Grenoble EM, spécialisée dans le management de la technologie, aime les profils curieux, tournés vers l'actualité et 
              à l'aise à l'oral. Le sujet d'actualité permet de juger de votre esprit d'analyse et de votre culture générale sur des 
              enjeux contemporains.
            </p>
            <p className="mb-4">
              L'entretien inversé est là pour valoriser votre aisance relationnelle, votre écoute et votre capacité d'initiative (oser 
              poser des questions à un professionnel). GEM valorise beaucoup l'ouverture d'esprit et l'intérêt pour les autres : qui 
              de mieux qu'un candidat qui s'intéresse au parcours du juré ?
            </p>
            <p className="mb-4">
              Ils cherchent aussi des étudiants avec du leadership naturel (prendre les rênes de l'entretien montre une certaine confiance). 
              Enfin, GEM attend des candidats qui savent structurer leur pensée et faire preuve de synthèse (d'où l'exercice de 
              synthèse post-entretien inversé).
            </p>
            <p>
              En résumé, GEM valorise les communicants réfléchis : capables de parler d'un sujet sérieux, de mener une discussion et 
              de se livrer sur eux-mêmes ensuite.
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
                  <p className="font-medium">Exposé d'actualité (5 min)</p>
                  <p className="text-sm text-muted-foreground">Préparé avant l'entretien</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Entretien inversé (10 min)</p>
                  <p className="text-sm text-muted-foreground">Vous posez les questions</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Échange classique (15 min)</p>
                  <p className="text-sm text-muted-foreground">Questions sur vos motivations</p>
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
              Probablement l'un des plus originaux et stimulants. L'exposé d'actu donne souvent lieu à un mini-débat avec le jury 
              (ils peuvent vous poser une ou deux questions dessus pour vous challenger).
            </p>
            <p className="mb-4">
              L'entretien inversé est souvent un moment que les candidats apprécient : le juré choisi se prête au jeu et répond en général 
              volontiers, surtout si vos questions sont intéressantes. Cela crée presque une conversation détendue où les rôles sont renversés.
            </p>
            <p className="mb-4">
              Certains jurés adorent parler d'eux, donc si vous tombez sur quelqu'un de bavard, ça peut même tourner à votre avantage car 
              le temps file pendant qu'il parle (mais restez attentif, car vous devrez synthétiser !).
            </p>
            <p className="mb-4">
              Pendant ces 10 minutes, l'ambiance dépend aussi de vos talents d'interviewer : si vous rebondissez, relancez, ça devient 
              dynamique et agréable. Si vous êtes timide ou à court de questions, ça peut y perdre.
            </p>
            <p>
              Lors de l'échange libre final, ça redevient un entretien classique, possiblement plus serré car le temps restant est court et 
              ils n'ont pas encore parlé de votre motivation. L'ambiance globale reste constructive : GEM ne cherche pas à vous piéger, mais c'est 
              une école qui aime l'originalité, donc ils s'attendent à voir des candidats qui savent sortir du cadre.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien GEM</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Pour l'exposé d'actualité</AccordionTrigger>
                <AccordionContent>
                  Choisissez un sujet récent (moins de 2 semaines) et pas trop polémique. Idéalement, un sujet qui puisse vous toucher 
                  personnellement ou que vous pouvez relier à votre profil. Préparez votre exposé avec une structure claire (contexte – 
                  enjeux – analyse personnelle). N'hésitez pas à mentionner pourquoi ce sujet vous a intéressé. Entraînez-vous à le dire 
                  en 5 min exactement et préparez-vous aux questions complémentaires.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Pour l'entretien inversé</AccordionTrigger>
                <AccordionContent>
                  Préparez une trame de questions à l'avance qui puisse s'adapter à n'importe quel juré : par exemple, demander son parcours, 
                  ce qui l'a marqué dans sa carrière, un conseil qu'il donnerait à l'étudiant que vous êtes, ce qu'il pense de GEM ou de 
                  l'évolution de son secteur. Posez des questions ouvertes et écoutez bien ses réponses pour rebondir. Vous pouvez glisser 
                  quelques éléments de vous dans les questions pour créer du lien.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Pour la synthèse d'1 minute</AccordionTrigger>
                <AccordionContent>
                  Entraînez-vous à noter mentalement (ou sur un papier si autorisé) les points clés des réponses et à les reformuler clairement. 
                  Par exemple : « Si je résume, Monsieur X, vous nous avez partagé trois choses : d'abord l'importance de la passion dans le 
                  travail, ensuite l'écoute en management, enfin votre vision optimiste de l'avenir du marketing digital. »
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Pour la partie motivation</AccordionTrigger>
                <AccordionContent>
                  Ne l'oubliez pas dans votre préparation! Après deux exercices atypiques, il faudra quand même expliquer « Pourquoi GEM ? » 
                  et qui vous êtes. Préparez une bonne réponse sur ce qui vous attire à GEM (ex : spécialisation management tech, lab Digital, 
                  esprit d'innovation, etc.) et montrez que vous connaissez leurs spécificités (Serious Games, géopolitique au programme…).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Conseils généraux</AccordionTrigger>
                <AccordionContent>
                  Conservez une attitude positive et énergique jusqu'au bout. Si vous suivez ces conseils, vous montrerez au jury GEM que vous 
                  êtes d'ores et déjà un petit manager en devenir, capable d'analyser, de communiquer et de s'adapter en temps réel – 
                  exactement ce qu'ils recherchent.
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

export default GEMPage;
