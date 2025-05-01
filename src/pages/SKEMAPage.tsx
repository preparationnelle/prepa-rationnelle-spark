
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

const SKEMAPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">SKEMA Business School</h1>
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
              <span className="font-semibold">L'épreuve du CV projectif à 10 ans :</span> SKEMA se démarque par un format d'entretien 
              très orienté projection dans l'avenir. Ici, on vous demande en amont de construire un CV fictif vous représentant 
              dans 10 ans (soit 10 ans après votre entrée à SKEMA).
            </p>
            <p className="mb-4">
              Ce "CV projectif" détaille les études et postes que vous envisagez d'occuper pendant et après l'école, jusqu'à ce 
              10ème anniversaire. Le jour de l'oral, un membre du jury récupère votre CV avant de vous faire entrer.
            </p>
            <p className="mb-4">
              Puis l'entretien (25 min, coef. 20) s'engage quasi exclusivement sur la base de ce CV du futur : « Pourquoi avoir 
              choisi de travailler chez X en sortie d'école ? Pourquoi tel master spécialisé ? Pourquoi passer de telle entreprise 
              à telle autre ? » etc.
            </p>
            <p>
              Bien sûr, on aborde aussi vos motivations plus globales pour SKEMA, mais le fil rouge reste votre plan de carrière 
              simulé. C'est donc un entretien très orienté projet professionnel et cohérence du parcours.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que SKEMA valorise
            </h3>
            <p className="mb-4">
              SKEMA (School of Knowledge Economy and Management) valorise les profils internationaux, innovants et pragmatiques. 
              Avec le CV projectif, l'école veut des étudiants qui se projettent avec ambition et ont un plan structuré.
            </p>
            <p className="mb-4">
              La cohérence est le maître-mot : SKEMA apprécie qu'un candidat ait une vision de son avenir et qu'il ait aligné son 
              parcours fictif avec les spécificités de l'école. Par exemple, SKEMA a plusieurs campus à l'étranger – un candidat 
              qui intègre dans son CV un semestre à Raleigh ou Suzhou montre qu'il a capté l'esprit global de l'école.
            </p>
            <p className="mb-4">
              De même, c'est une école très branchée entreprises et emplois d'avenir : ils valoriseront un candidat dont le projet 
              correspond aux tendances actuelles (digital, conseil, finance durable… selon ses intérêts).
            </p>
            <p>
              SKEMA cherche aussi des étudiants ambitieux mais réalistes : il faut viser haut (montrer de l'ambition à 10 ans, 
              par ex. manager d'équipe, créer une entreprise, etc.) tout en ayant conscience des étapes nécessaires pour y 
              parvenir. Ils aiment les profils avec une progression logique (le CV doit montrer une montée en compétences). 
              Enfin, SKEMA prône l'esprit "Sky is the limit" : montrez que vous voulez utiliser leur programme pour aller loin.
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
                  <p className="font-medium">Durée : 25 minutes</p>
                  <p className="text-sm text-muted-foreground">Coefficient 20</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">CV projectif à 10 ans</p>
                  <p className="text-sm text-muted-foreground">À préparer en avance</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Focus sur votre projet</p>
                  <p className="text-sm text-muted-foreground">Cohérence et ambition</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Jury de 2-3 personnes</p>
                  <p className="text-sm text-muted-foreground">Style entretien d'embauche</p>
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
              Le jury (2 ou 3 personnes) aura lu votre CV fictif de 1-2 pages et commence souvent en vous demandant de vous présenter 
              brièvement (~2 minutes), puis d'expliquer la logique de votre CV. L'atmosphère est professionnelle et rythmée comme un 
              entretien d'embauche.
            </p>
            <p className="mb-4">
              Attendez-vous à des questions très précises : « Pourquoi avoir choisi de débuter chez L'Oréal et non pas LVMH ? » ou 
              « Vous indiquez un MBA à 30 ans – comment comptez-vous le financer ? ».
            </p>
            <p className="mb-4">
              Les jurés SKEMA peuvent être un peu tatillons sur les détails : ils traqueront la moindre incohérence temporelle ou 
              géographique dans votre CV (par ex., un poste dans tel pays alors que le master que vous voulez faire se passe ailleurs 
              la même année…). Mais ce n'est pas pour vous embêter gratuitement : c'est pour voir si vous avez construit un plan solide.
            </p>
            <p className="mb-4">
              Par ailleurs, ils évaluent votre réactivité et votre répartie face à leurs questions, comme dans un entretien pro. 
              Il peut y avoir un peu de stress si vous n'êtes pas sûr de votre coup, car vous êtes sur le terrain qu'vous avez 
              défini (votre projet).
            </p>
            <p>
              Toutefois, les jurés sont généralement bienveillants et peuvent même vous donner des conseils sur votre parcours en 
              fin d'entretien si ça s'est bien passé. Montrez de la conviction lorsque vous défendez vos choix, c'est important. 
              En somme, style sérieux, technique, mais juste : si votre CV est cohérent, l'échange sera fluide ; s'il a des failles, 
              on va les pointer pour voir comment vous réagissez.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien SKEMA</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Soignez votre CV projectif</AccordionTrigger>
                <AccordionContent>
                  Soignez la préparation du CV projectif : c'est la clé. Documentez-vous sur le programme SKEMA pour y intégrer 
                  des éléments concrets : par exemple, mentionnez que vous ferez le Master 2 en apprentissage à Paris si cela 
                  vous correspond, ou que vous suivrez la spécialisation en finance à Sophia Antipolis si c'est votre truc.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Créez un parcours crédible</AccordionTrigger>
                <AccordionContent>
                  Parcourez la brochure officielle de SKEMA pour connaître les parcours et choix possibles – rien ne doit sembler 
                  impossible dans votre CV du futur. Donc faites un CV crédible en termes de chronologie. Incluez des entreprises 
                  cohérentes avec votre secteur cible, et liez-les si possible (si vous changez d'entreprise dans votre CV, trouvez 
                  un lien logique).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Visez haut mais restez réaliste</AccordionTrigger>
                <AccordionContent>
                  Visez haut : SKEMA aime voir du leadership, donc n'hésitez pas à vous projeter sur un poste à responsabilités 
                  à 10 ans (chef de division, entrepreneur à la tête d'une start-up de 50 employés, etc.). Pensez à intégrer 
                  des aspects extra-professionnels dans votre CV : SKEMA apprécie les profils complets, donc pourquoi ne pas 
                  mentionner que vous serez président d'une association étudiante en 2e année.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Préparez la défense de chaque ligne</AccordionTrigger>
                <AccordionContent>
                  Entraînez-vous à défendre chaque ligne de ce CV. Imaginons que le jury vous dise « Pourquoi un MSc à Londres 
                  et pas rester à SKEMA ? », ayez une réponse (par ex. « Pour compléter ma formation par une approche anglo-saxonne 
                  et élargir mon réseau »). S'ils titillent « Directeur commercial à 28 ans, n'est-ce pas un peu ambitieux ? », 
                  assumez tout en restant crédible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Préparez votre motivation SKEMA</AccordionTrigger>
                <AccordionContent>
                  Ne négligez pas les questions de motivation classique. Préparez un bon « Pourquoi SKEMA » (parlez de l'innovation 
                  pédagogique, de la présence mondiale de SKEMA, de son incubateur de start-up si ça vous parle, etc.). Et « pourquoi vous » : 
                  mettez en avant comment vous allez utiliser toutes les opportunités SKEMA (campus à l'étranger, etc.) – ça prouvera 
                  en creux que vous êtes le candidat idéal pour exploiter leur programme au maximum.
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

export default SKEMAPage;
