
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
import { GraduationCap, Clock, Star, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const EDHECPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">EDHEC Business School</h1>
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
              <span className="font-semibold">Le "triptyque" de l'EDHEC : entretien + présentation + travail de groupe :</span> 
              À l'EDHEC, l'épreuve orale d'admission ne se limite pas à un entretien classique. Elle se déroule sous forme d'une 
              session globale d'environ 1h30 (coef. 15) comprenant trois volets successifs.
            </p>
            
            <h4 className="text-base font-semibold mt-4 mb-2">Présentation personnelle avec mot imposé (4 minutes) :</h4>
            <p className="mb-4">
              Les jurés se présentent brièvement, puis chaque candidat, l'un après l'autre, doit se présenter pendant 4 minutes 
              devant tout le monde. La spécificité : juste avant de commencer votre présentation, le jury vous donne un mot 
              aléatoire que vous devez intégrer spontanément dans votre présentation. Vous avez 60 secondes pour réfléchir à 
              comment caser ce mot, puis c'est parti pour votre présentation monologuée.
            </p>
            
            <h4 className="text-base font-semibold mt-4 mb-2">Travail de groupe (45 minutes) :</h4>
            <p className="mb-4">
              Après les présentations, les 6 candidats s'installent autour d'une table avec 3 ordinateurs partagés. 
              On vous projette une courte vidéo expliquant le cas d'une entreprise confrontée à un problème ou un choix 
              stratégique. Trois solutions possibles sont proposées. En groupe, vous devez débattre pour choisir l'une des 
              trois solutions et en tirer une synthèse écrite en fin d'exercice.
            </p>
            
            <h4 className="text-base font-semibold mt-4 mb-2">Entretien individuel (20 minutes) :</h4>
            <p className="mb-4">
              Enfin, chaque candidat passe un entretien classique de motivation d'environ 20 min avec un membre du jury. 
              Là, on retrouve un format questions-réponses habituel centré sur votre parcours, vos motivations pour l'EDHEC, etc.
            </p>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Ce que l'EDHEC valorise
            </h3>
            <p className="mb-4">
              L'EDHEC met clairement l'accent sur l'esprit d'équipe, l'adaptabilité et la créativité. Le mot imposé dans la 
              présentation sert à voir votre réactivité et votre sens de l'humour/détente face à l'imprévu (ils cherchent 
              des étudiants qui ne perdent pas leurs moyens et savent improviser avec le sourire).
            </p>
            <p className="mb-4">
              Le travail de groupe est là pour identifier les team players : l'EDHEC valorise les profils capables de travailler 
              collectivement, de communiquer efficacement, de mener sans écraser les autres. Ils apprécient les candidats qui 
              démontrent du leadership collaboratif : ni passivité, ni domination agressive, mais de la coopération intelligente.
            </p>
            <p>
              Sur le fond, l'EDHEC étant très orientée business concret, ils attendent que vous montriez un sens pratique et une 
              compréhension des réalités de l'entreprise. Enfin, l'EDHEC valorise les personnalités dynamiques et engagées 
              dans la vie associative (forte culture de l'associatif à l'EDHEC).
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
                  <p className="font-medium">Format tripartite</p>
                  <p className="text-sm text-muted-foreground">1h30, coefficient 15</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium">Présentation avec mot imposé</p>
                  <p className="text-sm text-muted-foreground">4 minutes chronométrées</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium">Travail de groupe</p>
                  <p className="text-sm text-muted-foreground">45 minutes, 6 candidats</p>
                </div>
              </li>
              <li className="flex gap-2">
                <div className="bg-primary/10 p-1 rounded-full flex items-center justify-center h-6 w-6 mt-0.5">
                  <span className="text-sm font-semibold text-primary">4</span>
                </div>
                <div>
                  <p className="font-medium">Entretien individuel</p>
                  <p className="text-sm text-muted-foreground">20 minutes de motivation</p>
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
              <Users className="h-5 w-5" />
              Style de l'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              L'ambiance EDHEC est généralement dynamique et bienveillante. Le fait d'être en groupe fait retomber la pression 
              initiale car vous n'êtes pas seul face au jury. D'ailleurs, l'EDHEC fait en sorte que tout se passe dans la même 
              salle pour éviter de trimballer les candidats partout.
            </p>
            <p className="mb-4">
              Les jurés (souvent profs ou entreprises partenaires) se montrent attentifs mais laissent beaucoup les candidats 
              interagir entre eux pendant l'exercice de groupe. Attendez-vous à ce que les jurés vous observent en silence 
              durant les 45 min de discussion – ce qui peut être impressionnant – mais dites-vous qu'ils observent tout le monde.
            </p>
            <p className="mb-4">
              Ils interviennent peu, sauf pour relancer si vraiment le groupe bloque. Le rythme est intense : en 1h30, vous passez 
              par toutes les émotions ! Le mot imposé peut donner lieu à des rires et détendre l'atmosphère d'emblée (ils choisissent 
              souvent des mots cocasses pour ça).
            </p>
            <p>
              Le travail de groupe peut être un peu chaotique si tout le monde parle en même temps : montrez que vous savez garder 
              votre calme et structurer. Lors de l'entretien individuel, le jury redevient très classique et cordial : c'est 
              généralement un échange tranquille pour mieux vous connaître, après l'effervescence du groupe.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Astuces pour réussir</CardTitle>
            <CardDescription>Conseils pratiques pour l'entretien EDHEC</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Entraînez-vous au mot imposé</AccordionTrigger>
                <AccordionContent>
                  Entraînez-vous à la présentation chronométrée avec mot surprise. Simulez en demandant à un proche de vous 
                  donner un mot au hasard et forcez-vous à l'inclure dans votre présentation. Le jury EDHEC cherche à vous 
                  voir sourire et jouer le jeu : si vous prenez le mot imposé avec humour, en faisant un petit clin d'œil 
                  dans votre présentation, c'est tout bon.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Trouvez l'équilibre en groupe</AccordionTrigger>
                <AccordionContent>
                  Pour le travail de groupe, deux écueils : l'effacement (rester muet) et le leadership autoritaire 
                  (imposer ses idées). Trouvez un entre-deux : parlez suffisamment pour qu'on vous entende et valorise vos 
                  idées, tout en jouant un rôle de facilitateur. Une astuce : dès le début du cas, mettez-vous d'accord 
                  rapidement en groupe pour organiser la discussion.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Retenez les prénoms</AccordionTrigger>
                <AccordionContent>
                  Pensez à utiliser les prénoms de vos coéquipiers (essayez de les retenir pendant les présentations !). 
                  Exemple : « Comme l'a dit Marie, l'option 2 semble meilleure sur le long terme… ». Ça montre votre 
                  esprit d'équipe. Si quelqu'un ne parvient pas à s'exprimer, invitez-le à parler. Le jury adore ce 
                  genre d'attention.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Soignez votre apport à la synthèse</AccordionTrigger>
                <AccordionContent>
                  Ne bâclez pas la synthèse écrite de fin de cas : elle compte aussi. Proposez, si vous êtes à l'aise, 
                  de rédiger ou de relire la synthèse – c'est risqué si vous n'êtes pas sûr de vous en rédaction rapide, 
                  sinon ça peut démontrer votre investissement jusqu'au bout.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Préparez votre motivation EDHEC</AccordionTrigger>
                <AccordionContent>
                  Pour l'entretien individuel, préparez bien vos motivations pour l'EDHEC : on peut vous demander 
                  « Pourquoi l'EDHEC et pas une autre école ? ». Parlez de ce qui distingue l'EDHEC. Mentionnez 
                  éventuellement une association EDHEC précise qui vous attire, pour montrer votre intérêt. Globalement, 
                  montrez votre esprit d'équipe et votre enthousiasme : l'EDHEC veut des étudiants impliqués.
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

export default EDHECPage;
