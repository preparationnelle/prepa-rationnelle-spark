
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
import { GraduationCap, Clock, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ESSECPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">ESSEC Business School</h1>
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
              <span className="font-semibold">L'entretien le plus long et exigeant :</span> L'ESSEC propose un entretien
              de personnalité de <span className="font-semibold">45 minutes</span>, avec un coefficient élevé (coef. 10).
              C'est un face-à-face individuel avec un jury d'au moins 3 personnes : 2 représentants du corps professoral
              ou cadres ESSEC, et 1 représentant du monde économique.
            </p>
            <p className="mb-4">
              <span className="font-semibold">Nouveau format depuis 2025 :</span> le questionnaire de personnalité préalable
              a été supprimé. L'entretien débute désormais par un <span className="font-semibold">pitch personnel libre de 3 à 5 minutes</span> dans
              lequel vous vous présentez sans support ni guide. C'est vous qui choisissez ce que vous mettez en avant —
              une liberté totale qui demande une préparation approfondie et une vraie réflexion sur votre identité.
            </p>
            <p>
              L'entretien inclut également une <span className="font-semibold">mise en situation</span> : le jury vous expose
              un cas d'entreprise ou un dilemme éthique/managérial et vous pose des questions pour évaluer votre raisonnement
              à chaud. Le reste de l'entretien est une libre conversation où le jury creuse votre personnalité, vos
              expériences et vos motivations dans le moindre détail.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que l'ESSEC valorise
            </h3>
            <p className="mb-4">
              Son credo étant "Enlighten.
Lead. Change", l'ESSEC cherche des étudiants à fort potentiel de croissance, 
              capables d'analyse poussée et dotés d'ouverture d'esprit.
            </p>
            <p className="mb-4">
              À travers son entretien exhaustif, l'ESSEC valorise la profondeur : profondeur dans la connaissance de soi
              (le pitch vous pousse à choisir ce qui vous définit vraiment, sans filet), profondeur dans vos réflexions
              (capacité à analyser une situation complexe en mise en situation), et profondeur dans vos motivations
              (ils vont vérifier la sincérité et la solidité de votre projet professionnel).
            </p>
            <p className="mb-4">
              L'ESSEC attend aussi de la créativité et de la souplesse d'esprit : le jury peut rebondir sur n'importe
              quel élément de votre pitch et partir dans des directions inattendues. La composante internationale est un
              plus (séjours à l'étranger, langues pratiquées, curiosité pour d'autres cultures).
            </p>
            <p>
              Enfin, l'ESSEC aime les candidats engagés et polyvalents, qui pourront tirer parti de son parcours flexible.
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
                  <p className="font-medium">Durée : 45 minutes</p>
                  <p className="text-sm text-muted-foreground">Coefficient 10</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Pitch personnel 3-5 min</p>
                  <p className="text-sm text-muted-foreground">Libre, sans support (remplace le questionnaire supprimé en 2025)</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Mise en situation initiale</p>
                  <p className="text-sm text-muted-foreground">Cas d'entreprise ou dilemme</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Jury de 3 personnes</p>
                  <p className="text-sm text-muted-foreground">Configuration en carré</p>
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
              <Award className="h-5 w-5" />
              Style de l'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Attendez-vous à un entretien très complet et parfois déstabilisant par sa durée. Les jurys ESSEC sont
              bienveillants mais exigeants : ils écoutent attentivement votre pitch d'ouverture, puis ils rebondissent
              sur chaque élément que vous avez mentionné — préparez-vous à tout défendre.
            </p>
            <p className="mb-4">
              Ils creusent dans le moindre détail. Si vous parlez de piano, attendez-vous à « Quelles œuvres préférez-vous
              jouer ? » ; si vous mentionnez un séjour à l'étranger, ils pourraient creuser la culture du pays, votre
              ressenti, ce que ça a changé en vous. Le jury veut vérifier la sincérité et la profondeur de ce que vous
              dites.
            </p>
            <p className="mb-4">
              Certains jurys adoptent un ton sec ou insistent sur un point pour vous challenger — tenez bon, restez poli
              et constant, c'est souvent un test de résistance délibéré de leur part.
            </p>
            <p>
              La mise en situation donne le ton dès le début : un problème d'entreprise ou un dilemme à résoudre à chaud,
              qui permet d'évaluer votre logique et votre sang-froid. Globalement, l'entretien ESSEC reste le plus
              exigeant de toutes les grandes écoles, mais aussi une vraie chance de vous exprimer : 45 minutes permettent
              de montrer toute l'étendue de votre personnalité.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien ESSEC</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Construisez votre pitch de 5 minutes</AccordionTrigger>
                <AccordionContent>
                  Le questionnaire ayant été supprimé, le pitch d'ouverture est désormais votre seule carte de visite.
                  Rédigez-le comme un récit cohérent : qui êtes-vous, ce qui vous a construit, ce qui vous anime, et
                  pourquoi l'ESSEC. Chronométrez-vous : 3 à 5 minutes, c'est très court. Chaque mot doit être choisi,
                  car le jury va rebondir sur tout ce que vous dites.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Préparez chaque détail de votre pitch</AccordionTrigger>
                <AccordionContent>
                  Entraînez-vous à développer chaque élément que vous mentionnez dans votre pitch. Si vous parlez d'un
                  hobby, d'un voyage, d'un engagement ou d'une valeur, préparez une version longue et une version courte
                  de chaque. Le jury ESSEC creuse tout : aucun mot de votre pitch ne doit vous surprendre en défaut.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Structurez votre mise en situation</AccordionTrigger>
                <AccordionContent>
                  Pour la mise en situation, adoptez une méthode simple : écoutez bien l'énoncé du problème, n'hésitez 
                  pas à structurer votre réponse (par exemple "J'analyserais d'abord… puis je proposerais…") et prenez 
                  en compte tous les facteurs (montrez que vous réfléchissez posément : cible, contexte, enjeux, etc.). 
                  On vous teste sur la logique et la prise de recul plus que sur la solution exacte.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Développez vos réponses en profondeur</AccordionTrigger>
                <AccordionContent>
                  Pendant l'entretien, soyez complet dans vos réponses : l'ESSEC aime la profondeur, donc n'hésitez pas 
                  à développer vos idées, à donner des exemples concrets. Regardez bien tous les jurés malgré la table en 
                  carré (tournez-vous vers chacun régulièrement).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Tenez la distance</AccordionTrigger>
                <AccordionContent>
                  Tenez la durée : ne montrez pas de signe de découragement ou de fatigue, restez enthousiaste jusqu'au
                  bout (vous pouvez tout à fait continuer d'être souriant et dynamique à la 45e minute !). Si vous avez
                  bien préparé votre pitch et que vous êtes vous-même, l'entretien ESSEC peut même devenir un plaisir
                  plus qu'une épreuve.
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

export default ESSECPage;
