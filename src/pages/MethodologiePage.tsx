import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "maths", label: "Maths" },
  { id: "geopolitique", label: "Géopolitique" },
  { id: "langues", label: "Langues (Anglais ECG)" },
  { id: "culturegenerale", label: "Culture Générale" },
  { id: "python", label: "Module Python (bonus)" }
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function MethodologiePage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in">
      <h1 className="text-3xl font-extrabold mb-6 text-primary text-center">
        Méthodologie Prépa ECG
      </h1>

      {/* Sommaire */}
      <nav className="mb-10 flex flex-wrap justify-center gap-4">
        {sections.map(section => (
          <button
            key={section.id}
            className="border px-4 py-2 rounded-lg text-primary font-semibold transition hover:bg-primary/10"
            onClick={() => scrollToSection(section.id)}
            type="button"
          >
            {section.label}
          </button>
        ))}
      </nav>

      {/* Maths */}
      <Card id="maths" className="mb-8">
        <CardHeader>
          <CardTitle>Maths</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Module en préparation – la méthodologie complète pour réussir en maths sera bientôt disponible ici !
          </p>
        </CardContent>
      </Card>

      {/* Géopolitique */}
      <Card id="geopolitique" className="mb-8">
        <CardHeader>
          <CardTitle>Géopolitique</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Module à venir – conseils méthodologiques, plans et astuces pour la géopolitique arriveront très bientôt !
          </p>
        </CardContent>
      </Card>

      {/* Langues - Anglais */}
      <Card id="langues" className="mb-8">
        <CardHeader>
          <CardTitle>Langues – Méthode Complète d’anglais prépa ECG</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 font-semibold">Attention, ceci n’est pas une méthode pour apprendre l’anglais, c’est une méthode pour <u>réussir les épreuves d’anglais en prépa HEC</u>.</p>
          <h3 className="mt-4 font-bold text-primary">Traduction et Grammaire</h3>
          <p className="mb-2">Pourquoi est-ce crucial ? La traduction est non seulement une épreuve des concours, c’est aussi un moyen efficace de maîtriser la grammaire anglaise !</p>
          <p className="mb-2"><span className="font-semibold">Comment s’y prendre efficacement ?</span> Pratiquez régulièrement des phrases de thème, en utilisant les sujets vus en cours ou dans les annales des concours (Ecricome LV2…).</p>
          
          <div className="border-l-4 border-primary pl-4 mb-4 bg-accent/50">
            <p className="font-semibold mb-1">Exemple de thème grammatical ECRICOME 2008 LV2 :</p>
            <ul className="mb-2 space-y-1">
              <li>1. Depuis le début des années 90, le Japon se bat contre la déflation et une croissance faible.<br/> <span className="italic text-primary">Since the early 90s, Japan has been combatting deflation and sluggish growth.</span></li>
              <li>2. Si la reprise économique n’avait pas été si timide, il n’y aurait pas eu tant de fermetures d’usines.<br/><span className="italic text-primary">Had the economic recovery not been so modest, there would not have been so many factory closures.</span></li>
              <li>3. Moins vous passerez de temps sur les réseaux sociaux, plus vous vous rapprocherez de vos vrais amis.<br/><span className="italic text-primary">The less time you spend on social networks, the closer you will get to your true friends.</span></li>
              <li>… (voir le corrigé complet)</li>
            </ul>
            <a href="https://www.ecricome.org/wp-content/uploads/2021/01/ANNALE-LV2-ANGLAISALLEMAND-ESPAGNOL-PRE%CC%81PA-2018.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Lien vers le corrigé complet</a>
          </div>
          <p className="mb-3">
            <span className="font-semibold">Ce que je propose pour gagner du temps</span> : <br />
            <span>
              Accès à un fichier Quizlet avec des centaines de phrases de thème corrigées.
            </span>
          </p>
          
          <h3 className="mt-5 font-bold text-primary">Garder une trace de vos progrès : un point essentiel</h3>
          <ol className="list-decimal ml-5 mb-3">
            <li>
              <span className="font-semibold">Gérer vos erreurs en Trois Points</span> : Identifiez vos erreurs fréquentes.
              <ul className="list-disc ml-4">
                <li>Carnet d’erreurs : Notez l’erreur, sa correction, et pourquoi c’est faux.</li>
                <li>Révision ciblée : Révisez votre carnet pour éviter de refaire les mêmes fautes (peut être sur Anki/Quizlet).</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Vocabulaire :</span>
              <ul className="list-disc ml-4">
                <li>Créer un carnet thématique, ajoutez des synonymes/exemples.</li>
                <li>Focus sur l'orthographe. Applis recommandées : Anki.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Approfondir les Thèmes qui tombent aux concours et l’actualité</span> : Identifiez les grandes thématiques et préparez des paragraphes types pour chacun.
            </li>
          </ol>

          <h4 className="font-bold mb-2 mt-4">Préparation Structurée des Colles</h4>
          <p>Maîtrisez des phrases types pour chaque partie : introduction, transitions, conclusion.<br/>
            <span className="italic">Ex : “This article sheds light on a significant issue:…” “In conclusion, this article raises important questions about…”</span>
          </p>

          <h4 className="font-bold mb-2 mt-4">Réussir Essais et Synthèses</h4>
          <ul className="list-disc ml-5 mb-2">
            <li>Structure claire de l’essai : une intro, deux ou trois parties, une conclusion.</li>
            <li>Utilisez des phrases type (disponibles sur Quizlet/Anki).</li>
          </ul>

          <h4 className="font-bold mb-2 mt-4">Maximisez votre travail à l’approche des concours</h4>
          <ul className="list-disc ml-5 mb-2">
            <li>Relisez et retravaillez vos anciens exercices.</li>
            <li>Multipliez les entraînements en conditions réelles.</li>
          </ul>
          <p className="mb-3">Routine quotidienne : travaillez un peu chaque jour (traduction, synthèse, essai, vocabulaire, etc). <br/>Utilisez les moments “perdus” !</p>

          <h4 className="font-bold mb-2 mt-4">Pour aller plus loin :</h4>
          <ul className="list-disc ml-5">
            <li>La méthode pour traduire efficacement</li>
            <li>La méthode de l’essai</li>
            <li>La méthode pour réussir une synthèse</li>
            <li>Méthodologie de la Colle d’anglais</li>
          </ul>
          <p className="mt-2 font-semibold">Envoie-moi un message pour en savoir plus ou obtenir les ressources !</p>
        </CardContent>
      </Card>
      
      {/* Culture Générale */}
      <Card id="culturegenerale" className="mb-8">
        <CardHeader>
          <CardTitle>Méthode de la Culture Générale</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold text-primary mb-2">Pourquoi les conseils classiques sont souvent inadaptés ?</h3>
          <ol className="list-decimal ml-5 mb-3 space-y-1">
            <li><span className="font-semibold">Pourquoi se méfier des cours magistraux en CG ?</span> Les cours sont souvent trop riches, risquent de noyer sous la masse d’informations. <br/><span className="text-muted-foreground">Solution : sélectionne et maîtrise uniquement ce qui est pertinent pour les concours !</span></li>
            <li><span className="font-semibold">Une méthode qui marche (et qui prend moins de temps)</span> :
              <ul className="list-disc ml-4">
                <li>Gagner du temps aux révisions</li>
                <li>Limiter l’aléa des épreuves</li>
                <li>Améliorer rapidement tes copies</li>
              </ul>
            </li>
            <li><span className="font-semibold">Si tu es en Première Année :</span> Focus sur la méthodologie (introduction, transitions, conclusion). <br/>Puis en deuxième année, applique la méthode sur le thème précis.</li>
            <li>
              <span className="font-semibold">Critères de jugement des correcteurs :</span>
              <ul className="list-disc ml-4">
                <li>Structure (plan)</li>
                <li>Lisibilité</li>
                <li>Orthographe</li>
                <li>Exemples</li>
                <li>Fond / réflexion personnelle</li>
              </ul>
            </li>
            <li><span className="font-semibold">Apprendre par cœur (Hack de la matière)</span> :
              <ul className="list-disc ml-4">
                <li>Réduire l’aléa : tu es prêt à tous les sujets</li>
                <li>Gain de temps le jour J</li>
                <li>Une méthode efficace, obtenue {'>'}16 aux concours</li>
              </ul>
            </li>
            <li><span className="font-semibold">Apprendre à utiliser les exemples</span> : Limite à 30 exemples clés, maîtrise-les parfaitement, adapte-les à tous les sujets !</li>
            <li><span className="font-semibold">Hacker une copie de CG (2 méthodes) :</span>
              <ul className="list-disc ml-4">
                <li>Soigner les moments stratégiques : intro, débuts de parties et paragraphes, autour de l’œuvre principale citée.</li>
              </ul>
            </li>
            <li><span className="font-semibold">Besoin d’aide supplémentaire ?</span> Contacte-moi pour un accompagnement, apprendre la méthode des paragraphes, organiser tes révisions, etc.</li>
          </ol>
          <p className="mb-4 text-muted-foreground">📩 N’hésite pas à me poser toutes tes questions, je suis là pour ça !</p>
        </CardContent>
      </Card>

      {/* Python Module à venir */}
      <Card id="python" className="mb-8">
        <CardHeader>
          <CardTitle>Python (bonus)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Ce module bonus sur Python pour les prépas ECG sera prochainement disponible ici !
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
