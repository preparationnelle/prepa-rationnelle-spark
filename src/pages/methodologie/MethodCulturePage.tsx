
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MethodCulturePage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>Méthode de la Culture Générale</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-3 font-semibold">Pourquoi les conseils classiques en Culture Générale sont inadaptés et comment réussir ?</p>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              <span className="font-semibold">Pourquoi se méfier des cours magistraux en CG ?</span>
              <br />
              La majorité des professeurs de CG, philo ou français sont passionnés par leur matière. Leurs cours, souvent très riches, regorgent d'informations précieuses... mais bien trop nombreuses pour être utilisables efficacement aux concours.<br/>
              <span className="text-muted-foreground">
                Problème : Ces cours magistraux, bien que qualitatifs, risquent de te noyer sous une masse d’informations, souvent inutilisables faute de tri méthodique.<br/>
                <span className="font-semibold">Solution :</span> Adopte une approche pragmatique : sélectionne et maîtrise uniquement les éléments pertinents pour les concours. C'est toi qui dois décider de ce que tu retiens et quand tu le retiens, tu le retiens vraiment.
              </span>
            </li>
            <li>
              <span className="font-semibold">Une Méthode qui Marche (et Qui Prend Moins de Temps)</span>
              <ul className="list-disc ml-4">
                <li>Gagner du temps pendant les révisions et le concours.</li>
                <li>Limiter l’aléa des épreuves : tu seras prêt, quelle que soit la formulation du sujet.</li>
                <li>Améliorer rapidement tes copies : grâce à une structure claire, des exemples pertinents et une méthodologie béton.</li>
              </ul>
              <div className="mt-2 mb-3 text-primary font-medium">
                Accroche-toi et prends le temps de lire ce document jusqu’au bout, tu ne seras pas déçu. N’hésite pas à me poser toutes tes questions, je suis là pour ça !
              </div>
            </li>
            {/* Ajoute la suite de la méthode ici si besoin... Pour l'aperçu c'est suffisant */}
          </ol>
          <div className="mt-4">
            <span className="text-primary font-semibold">
              Découvre la méthode complète sur cette page prochainement.
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
