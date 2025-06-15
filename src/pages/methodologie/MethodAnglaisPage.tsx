
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MethodAnglaisPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle>
            Méthodologie Anglais : Réussir les épreuves en prépa ECG
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Article 1 */}
          <section>
            <p className="mb-4 font-semibold">
              Attention, ceci n’est pas une méthode pour apprendre l’anglais, c’est une méthode pour réussir les épreuves d’anglais en prépa HEC.
            </p>
            <h3 className="mt-6 font-bold text-primary text-lg">Traduction et Grammaire</h3>

            <div className="mb-2">
              <strong>Pourquoi est-ce crucial ?</strong>
              <p>
                La traduction est non seulement une épreuve des concours, c’est aussi un moyen efficace de maîtriser la grammaire anglaise !
              </p>
            </div>
            <div className="mb-2">
              <strong>Comment s’y prendre efficacement ?</strong>
              <p>
                Pratiquez régulièrement des phrases de thème, en utilisant les sujets vus en cours ou disponibles dans les annales des concours comme Ecricome LV2. Les corrigés sont détaillés et présentent souvent plein d’options de traduction.
              </p>
            </div>
            <h4 className="font-semibold mt-6 mb-2 text-primary">
              Exemple de thème grammatical ECRICOME 2008 LV2
            </h4>
            <div className="bg-accent/50 border-l-4 border-primary pl-4 py-3 rounded mb-4">
              <ol className="mb-2 space-y-4">
                <li>
                  <span className="block text-primary font-mono font-medium">Since the early 90s, Japan has been combatting deflation and sluggish growth.</span>
                  <span className="block mb-1">Depuis le début des années 90, le Japon se bat contre la déflation et une croissance faible.</span>
                </li>
                <li>
                  <span className="block text-primary font-mono font-medium">Had the economic recovery not been so modest, there would not have been so many factory closures.</span>
                  <span className="block mb-1">Si la reprise économique n’avait pas été si timide, il n’y aurait pas eu tant de fermetures d’usines.</span>
                </li>
                <li>
                  <span className="block text-primary font-mono font-medium">The less time you spend on social networks, the closer you will get to your true friends.</span>
                  <span className="block mb-1">Moins vous passerez de temps sur les réseaux sociaux, plus vous vous rapprocherez de vos vrais amis.</span>
                </li>
                <li>
                  <span className="block text-primary font-mono font-medium">When the United Kingdom is no longer a member of the European Union, English may not be as widespread as it is today.</span>
                  <span className="block mb-1">Quand le Royaume-Uni ne fera plus partie de l’Union européenne, l’anglais ne sera peut-être pas aussi répandu qu’aujourd’hui.</span>
                </li>
                <li>
                  <span className="block text-primary font-mono font-medium">You shouldn’t have left Wales before visiting Cardiff and its surroundings.</span>
                  <span className="block mb-1">Vous n’auriez pas dû quitter le Pays de Galles avant d’avoir visité Cardiff et ses environs.</span>
                </li>
                <li>
                  <span className="block text-primary font-mono font-medium">Hardly had the boss announced redundancies when some employees knew they wouldn’t be spared.</span>
                  <span className="block mb-1">À peine le patron avait-il annoncé des licenciements que certains salariés savaient qu’ils ne seraient pas épargnés.</span>
                </li>
                <li>
                  <span className="block text-primary font-mono font-medium">The information I received yesterday is not reliable. Let us check it before posting it on our website.</span>
                  <span className="block mb-1">Les informations que j’ai reçues hier ne sont pas fiables : vérifions-les avant de les publier sur notre site.</span>
                </li>
                <li>
                  <span className="block text-primary font-mono font-medium">Not only did she suggest he / she should work harder, she also reproached him / her for arriving late every morning.</span>
                  <span className="block mb-1">Non seulement elle lui suggéra de travailler plus, mais elle lui reprocha aussi d’arriver en retard tous les matins.</span>
                </li>
                <li>
                  <span className="block text-primary font-mono font-medium">He will be all the happier to hear such good news as he is not expecting it at all.</span>
                  <span className="block mb-1">Il sera d’autant plus heureux d’apprendre une aussi bonne nouvelle qu’il ne s’y attend pas du tout.</span>
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
          </section>
          {/* Article 2 */}
          <section className="mt-10">
            <h3 className="font-bold text-primary text-lg mb-3">Garder une trace de vos progrès : un point essentiel</h3>
            <strong className="block mb-2">Pourquoi ?</strong>
            <p className="mb-4">
              Prendre des notes structurées sur vos erreurs, vocabulaire et nouvelles structures rencontrées vous aide à progresser plus vite. Cela vous permet aussi de réviser efficacement sans repartir de zéro. Ceci est valable pour la traduction, et aussi pour les essais.
            </p>
            <ol className="list-decimal ml-6 mb-4 space-y-4">
              <li>
                <strong>Gérer vos erreurs en Trois Points</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    <span>Identifiez vos erreurs fréquentes&nbsp;: par exemple un problème d’accord (<span className="italic">"The informations are not reliable"</span> au lieu de <span className="italic">"The information is not reliable"</span>).</span>
                  </li>
                </ul>
                <div className="mt-2">
                  <span className="font-medium">Carnet d’erreurs&nbsp;:</span>
                  <ul className="list-disc ml-6">
                    <li>Notez l’erreur, sa correction, et pourquoi c’est faux. Exemple :</li>
                    <li>Erreur : <span className="italic">"She suggested me to work harder."</span></li>
                    <li>Correction : <span className="italic">"She suggested that I should work harder."</span></li>
                    <li>Explication : Le verbe <span className="italic">suggest</span> ne prend pas d’objet direct.</li>
                  </ul>
                  <p className="mt-2">
                    Répétez cette structure pour toutes les erreurs que vous faites et vous verrez vos progrès vont arriver très vite.
                  </p>
                </div>
                <strong className="block mt-3">Révision ciblée :</strong>
                <p>
                  Révisez régulièrement votre carnet pour éviter de refaire les mêmes fautes, vous pouvez avoir un carnet et les rentrer tous les WE sur Anki ou Quizlet.
                </p>
              </li>
              <li>
                <strong>Vocabulaire</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    Créer un carnet thématique&nbsp;: classez les mots par thèmes (environnement, économie, politique, société…).
                  </li>
                  <li>Ajoutez des synonymes et des exemples.</li>
                  <li>
                    Exemple : <span className="italic">"Sluggish growth"</span> → synonymes : <span className="italic">weak growth</span>
                    <br />Exemple : <span className="italic">"Japan has struggled with sluggish growth for decades."</span>
                  </li>
                  <li>
                    <span>Focus sur l’orthographe : Mettez un astérisque sur les mots souvent mal orthographiés et révisez-les régulièrement.</span>
                    <div className="ml-4 mt-1 italic">Exemple : accommodation, environment, indispensable.</div>
                  </li>
                  <li>
                    <span>Flashcards : Utilisez une appli comme Anki pour mémoriser vos mots clés et leurs contextes.</span>
                  </li>
                  <li>
                    <span>Rationalisez votre vocabulaire : Apprenez un ensemble limité mais stratégique de mots et expressions que vous maîtriserez parfaitement, y compris leur orthographe et leurs usages contextuels.</span>
                  </li>
                </ul>
                <div className="mt-2">
                  <span className="block font-medium">
                    Ce que je vous propose pour vous faire gagner du temps :
                  </span>
                  <span>
                    Des sets de vocabulaire pour apprendre les expressions indispensables en anglais pour la colle, l’essai et la synthèse.
                  </span>
                </div>
              </li>
            </ol>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
