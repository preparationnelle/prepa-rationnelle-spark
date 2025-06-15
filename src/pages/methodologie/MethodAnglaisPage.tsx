
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MethodAnglaisPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>Prépa Rationnelle : Méthode complète d’anglais en prépa ECG</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 font-semibold">
            Attention, ceci n’est pas une méthode pour apprendre l’anglais, c’est une méthode pour réussir les épreuves d’anglais en prépa HEC.
          </p>
          <h3 className="mt-6 font-bold text-primary text-lg">Traduction et Grammaire</h3>

          <div className="mb-2">
            <strong>Pourquoi est-ce crucial ?</strong>
            <p>
              La traduction est non seulement une épreuve des concours, c’est aussi un moyen efficace de maîtriser la grammaire anglaise !
            </p>
          </div>
          <div className="mb-2">
            <strong>Comment s’y prendre efficacement ?</strong>
            <p>
              Pratiquez régulièrement des phrases de thème, en utilisant les sujets vus en cours ou disponibles dans les annales des concours comme Ecricome LV2. Les corrigés sont détaillés et présentent souvent plein d’options de traduction.
            </p>
          </div>
          
          <h4 className="font-semibold mt-6 mb-2 text-primary">Exemple de thème grammatical ECRICOME 2008 LV2</h4>
          <div className="bg-accent/50 border-l-4 border-primary pl-4 py-3 rounded mb-4">
            <ol className="mb-2 list-decimal ml-5 space-y-4">
              <li>
                <span className="block text-primary font-mono font-medium">Since the early 90s, Japan has been combatting deflation and sluggish growth.</span>
                <span className="">Depuis le début des années 90, le Japon se bat contre la déflation et une croissance faible.</span>
              </li>
              <li>
                <span className="block text-primary font-mono font-medium">Had the economic recovery not been so modest, there would not have been so many factory closures.</span>
                <span>Si la reprise économique n’avait pas été si timide, il n’y aurait pas eu tant de fermetures d’usines.</span>
              </li>
              <li>
                <span className="block text-primary font-mono font-medium">The less time you spend on social networks, the closer you will get to your true friends.</span>
                <span>Moins vous passerez de temps sur les réseaux sociaux, plus vous vous rapprocherez de vos vrais amis.</span>
              </li>
              <li>
                <span className="block text-primary font-mono font-medium">When the United Kingdom is no longer a member of the European Union, English may not be as widespread as it is today.</span>
                <span>Quand le Royaume-Uni ne fera plus partie de l’Union européenne, l’anglais ne sera peut-être pas aussi répandu qu’aujourd’hui.</span>
              </li>
              <li>
                <span className="block text-primary font-mono font-medium">You shouldn’t have left Wales before visiting Cardiff and its surroundings.</span>
                <span>Vous n’auriez pas dû quitter le Pays de Galles avant d’avoir visité Cardiff et ses environs.</span>
              </li>
              <li>
                <span className="block text-primary font-mono font-medium">Hardly had the boss announced redundancies when some employees knew they wouldn’t be spared.</span>
                <span>À peine le patron avait-il annoncé des licenciements que certains salariés savaient qu’ils ne seraient pas épargnés.</span>
              </li>
              <li>
                <span className="block text-primary font-mono font-medium">
                  The information I received yesterday is not reliable. Let us check it before posting it on our website.
                </span>
                <span>Les informations que j’ai reçues hier ne sont pas fiables : vérifions-les avant de les publier sur notre site.</span>
              </li>
              <li>
                <span className="block text-primary font-mono font-medium">
                  Not only did she suggest he / she should work harder, she also reproached him / her for arriving late every morning.
                </span>
                <span>Non seulement elle lui suggéra de travailler plus, mais elle lui reprocha aussi d’arriver en retard tous les matins.</span>
              </li>
              <li>
                <span className="block text-primary font-mono font-medium">
                  He will be all the happier to hear such good news as he is not expecting it at all.
                </span>
                <span>Il sera d’autant plus heureux d’apprendre une aussi bonne nouvelle qu’il ne s’y attend pas du tout.</span>
              </li>
            </ol>

            <div className="mb-2 mt-1">
              <a
                href="https://www.ecricome.org/wp-content/uploads/2021/01/ANNALE-LV2-ANGLAISALLEMAND-ESPAGNOL-PRE%CC%81PA-2018.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-medium"
              >
                Lien vers le corrigé complet
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
