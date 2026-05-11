import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Clock, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';

const ESCPPage = () => {
  const { trackPageVisit } = useProgress();
  
  // Suivre la visite de la page
  useEffect(() => {
    trackPageVisit('school');
  }, [trackPageVisit]);
  
  return <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">ESCP Business School</h1>
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
              <span className="font-semibold">Un entretien classique mais très exigeant :</span> À l'ESCP,
              l'entretien de personnalité dure <span className="font-semibold">25 à 30 minutes</span> (coefficient 12 —
              soit près de 40 % de la note globale à l'oral). C'est l'épreuve phare des oraux ESCP, et depuis 2026 elle
              comporte une <span className="font-semibold">note éliminatoire fixée à 7/20</span> : en dessous de cette note,
              le candidat est éliminé du concours quelle que soit sa performance dans les autres épreuves.
            </p>
            <p className="mb-4">
              Avant l'entretien, vous remplissez un <span className="font-semibold">questionnaire de personnalité composé d'une page de présentation
              et de 6 questions</span> (disponible à la publication des résultats d'admissibilité). Vous le remettez en
              <span className="font-semibold"> 3 exemplaires</span> le jour J — un par membre du jury. Tout l'entretien
              s'articule autour de ce questionnaire, qui sert de trame principale.
            </p>
            <p>
              Le jury est composé de <span className="font-semibold">3 personnes</span> : 1 membre du corps enseignant ESCP,
              1 ancien élève (alumni), et 1 représentant du monde économique.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que l'ESCP valorise
            </h3>
            <p className="mb-4">
              L'ESCP, en tant qu'école multicampus européenne (Paris, Londres, Berlin, Turin, Madrid et Varsovie), valorise les profils ouverts sur le monde, 
              capables de s'adapter à des environnements variés. Ses valeurs mises en avant incluent l'excellence 
              académique, la créativité, la pluralité culturelle et l'humilité.
            </p>
            <p className="mb-4">
              Concrètement, à travers l'entretien, l'ESCP veut des candidats qui collent à ces valeurs d'ouverture 
              et de diversité. Ils apprécient particulièrement les candidats avec une expérience internationale 
              (séjours linguistiques, double culture…) et ceux qui font preuve d'originalité dans leur parcours 
              ou leurs passions (sans être farfelus).
            </p>
            <p>
              Mais attention, l'ESCP reste une "parisienne" sélective : elle attend aussi    
           beaucoup de motivation pour l'école (montrez-leur que 
              l'ESCP n'est pas un choix par défaut mais votre choix).
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
                  <p className="text-sm text-muted-foreground">Sert de trame à l'entretien</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Jury de 3 personnes</p>
                  <p className="text-sm text-muted-foreground">Corps enseignant + alumni + professionnel</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Note éliminatoire : 7/20</p>
                  <p className="text-sm text-muted-foreground">Nouveau depuis 2026 — en dessous = élimination du concours</p>
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
              Le jury de 3 personnes — 1 professeur ESCP, 1 alumni et 1 professionnel extérieur — lit votre questionnaire
              quelques minutes avant de vous faire entrer. L’entretien s’articule ensuite quasi exclusivement autour
              de vos 6 réponses écrites, que le jury reprend une à une.
            </p>
            <p className="mb-4">
              Attendez-vous à des questions directes sur chaque réponse : si vous avez écrit pratiquer la voile,
              on vous demandera de développer ; si vous indiquez un secteur cible, attendez-vous à justifier votre choix
              en profondeur. Le jury creuse méthodiquement chaque réponse.
            </p>
            <p className="mb-4">
              Le rythme est rapide : 25-30 minutes pour 6 questions, les jurés peuvent vous interrompre pour passer à
              la suivante — c’est normal, ils veulent tout couvrir dans le temps imparti. Entraînez-vous à répondre
              de façon concise et structurée.
            </p>
            <p>
              Point clé depuis 2026 : une note inférieure à <span className="font-semibold">7/20 entraîne l’élimination automatique du concours</span>,
              quels que soient vos autres résultats. Cet entretien pèse près de 40 % de votre note orale totale —
              préparez-le avec une rigueur absolue.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien ESCP</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Préparez votre questionnaire</AccordionTrigger>
                <AccordionContent>
                  Travaillez votre questionnaire très en amont. Il comporte une page de présentation (état civil, filière)
                  et 6 questions de personnalité (centres d'intérêt, expériences, projet professionnel, actualité, etc.).
                  Vous devez remettre 3 exemplaires le jour J — 1 par membre du jury. Soignez chaque réponse : pas de
                  faute, des réponses précises et développées. Tout ce que vous écrivez sera passé en revue.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Soyez cohérent</AccordionTrigger>
                <AccordionContent>
                  L'ESCP attache beaucoup d'importance à la cohérence de votre discours – ne vous contredisez pas. 
                  Si vous dites aimer le travail en équipe dans une réponse, ne dites plus tard préférer travailler seul.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Montrez votre dimension internationale</AccordionTrigger>
                <AccordionContent>
                  Mettez en avant votre dimension internationale si vous en avez une (cours en langue, voyages, 
                  curiosité pour d'autres cultures), car l'ESCP a des campus dans plusieurs pays.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Soyez concis et structuré</AccordionTrigger>
                <AccordionContent>
                  Vu le peu de temps, soyez concis dans vos réponses le jour J : entraînez-vous à répondre en allant 
                  à l'essentiel dès le début (technique du « front-loading » : annoncez tout de suite l'idée principale 
                  avant de détailler). Chaque réponse doit être bien structurée car ils n'hésiteront pas à vous couper 
                  au bout d'1-2 minutes pour passer à la suite.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Soignez la forme</AccordionTrigger>
                <AccordionContent>
                  Soyez impeccable sur la forme : questionnaire parfait, tenue professionnelle, etc., car l'attention 
                  aux détails compte dans une école prônant l'excellence.
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
    </div>;
};

export default ESCPPage;
