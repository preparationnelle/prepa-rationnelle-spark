
import { Card, CardContent } from "@/components/ui/card";
import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PitchIntroMethodePage = () => (
  <div className="min-h-screen bg-background py-12 px-4">
    <div className="max-w-3xl mx-auto">
      <Card className="mb-8 shadow-lg">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-full">
              <Megaphone className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-orange-700">Réussir son Pitch d’introduction</h1>
          </div>
          <div className="prose prose-neutral max-w-none">
            <h2>🧠 Pourquoi le pitch est crucial</h2>
            <p>
              Le pitch d’introduction est le moment charnière de l’entretien de personnalité. Il donne la première impression et définit aussi le terrain de jeu : les éléments que tu choisis de mettre en avant seront ceux que le jury explorera ensuite.<br />
              <strong>Le pitch n’est pas un résumé de CV, ni un simple “je me présente” scolaire.</strong>
            </p>
            <ul>
              <li><strong>🎯 Le but :</strong> donner envie au jury de te découvrir. Pas tout dire. Juste susciter des questions.</li>
            </ul>
            <h2>🚫 Les erreurs à éviter</h2>
            <ul>
              <li>❌ Faire une chronologie scolaire (« J’ai fait une prépa ECG… »)</li>
              <li>❌ Réciter une lettre de motivation orale</li>
              <li>❌ Parler comme si tu écrivais un devoir</li>
              <li>❌ Tout dévoiler dès le départ</li>
              <li>❌ Être lisse et impersonnel</li>
            </ul>
            <h2>🎯 Les 4 objectifs d’un bon pitch</h2>
            <ul>
              <li>Captiver dès les premières secondes.</li>
              <li>Montrer qui tu es, pas ce que tu as fait.</li>
              <li>Faire sentir un moteur intérieur (passion, ambition, curiosité).</li>
              <li>Créer du mystère pour donner envie d’en savoir plus.</li>
            </ul>
            <h2>🧱 Structure simple et efficace</h2>
            <ol>
              <li>
                <strong>🪞 Une accroche personnelle</strong><br />
                <em>Commence par une phrase qui te situe humainement : anecdote, dualité, trait…</em><br />
                Exemple : “Ce qui me définit, c’est ma curiosité constante pour les autres cultures…”
              </li>
              <li>
                <strong>⚙️ Une expérience ou engagement fondateur</strong><br />
                <em>Suggère une histoire que le jury pourra creuser.</em><br />
                Exemple : “Pendant 6 ans, j’ai été bénévole dans un club de débat…”
              </li>
              <li>
                <strong>🌱 Une direction professionnelle</strong><br />
                <em>Projette une intention, sans prétendre tout maîtriser.</em><br />
                Exemple : “Je m’intéresse aujourd’hui à l’entrepreneuriat social…”
              </li>
              <li>
                <strong>🧭 Une connexion avec l’école</strong><br />
                <em>Montre que ton profil résonne avec les valeurs de l’école.</em><br />
                Exemple : “C’est pour cette raison que je me tourne vers l’ESCP…”
              </li>
            </ol>
            <h2>🎙️ Le bon ton à adopter</h2>
            <ul>
              <li>Naturel : tu parles, tu ne récites pas.</li>
              <li>Sincère, sobrement enthousiaste.</li>
              <li>Ouvert, tu invites au dialogue.</li>
            </ul>
            <h2>🧩 Exemples d’accroches inspirantes</h2>
            <ul>
              <li>“Depuis toujours, j’ai du mal à me contenter d’une seule discipline.”</li>
              <li>“Ma passion, c’est le fait d’apprendre en dehors du cadre.”</li>
              <li>“Je suis quelqu’un de multiculturel, pas juste par mon passeport…”</li>
            </ul>
            <h2>🪄 Bonus : astuces pour un pitch qui marque</h2>
            <ul>
              <li>🎯 Laisse des silences pour créer du rythme</li>
              <li>Prépare une version courte (1 min) et une longue (2 min)</li>
              <li>Teste-le auprès de plusieurs personnes</li>
              <li>Enregistre-toi pour t’écouter</li>
              <li>🧠 Mémorise les idées, pas les phrases</li>
            </ul>
            <h2>✨ En résumé</h2>
            <table>
              <thead>
                <tr><th>Ce que ce n’est pas</th><th>Ce que c’est</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Un CV récité</td>
                  <td>Une histoire personnelle vivante</td>
                </tr>
                <tr>
                  <td>Une lettre de motivation</td>
                  <td>Une invitation à discuter</td>
                </tr>
                <tr>
                  <td>Une chronologie scolaire</td>
                  <td>Un miroir de tes valeurs</td>
                </tr>
                <tr>
                  <td>Un discours fermé</td>
                  <td>Un tremplin pour le dialogue</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <div className="text-center">
        <Button asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  </div>
);

export default PitchIntroMethodePage;
