import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Target, Code, Brain, Star, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
const PythonArticlePage = () => {
  return <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 bg-primary text-white">
            +3 à 5 points sûrs
          </Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-6">
            Pourquoi travailler Python en prépa ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            (et pourquoi mon coaching est ta meilleure option)
          </p>
          
          {/* Témoignage en vedette */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <p className="text-lg italic text-blue-800 mb-4">
              « Dimitar est très pédagogue, à l'écoute et s'assure que tout soit parfaitement compris avant la fin du cours. 
              Il m'a aidée à démystifier Python, qui était au départ un gros point faible. 
              Grâce à lui, je suis plus confiante pour traiter les questions Python ! »
            </p>
            <p className="font-semibold text-blue-700">— Léa, 2ᵉ année ECG</p>
          </div>
        </div>

        {/* Section 1 - Le vrai poids de Python */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-6 w-6 text-orange-600" />
              1. Le vrai poids de Python aux concours : un gisement de points sous-estimé
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Depuis la réforme, Python remplace Scilab dans les épreuves de mathématiques appliquées comme approfondies. Résultat :</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>10 à 20 %</strong> selon les écoles (BCE, Ecricome, EDHEC, EM Lyon, HEC, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Présence systématique à l'oral :</strong> impossible de poursuivre l'entretien HEC sans répondre correctement à la question Python</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Questions souvent "cadeaux" :</strong> analyser un script, compléter une fonction, traduire une somme ou un raisonnement en code</span>
              </li>
            </ul>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <p className="text-orange-800">
                <strong>👉 Moralité :</strong> même si tu n'es « pas fan d'info », ignorer Python revient à laisser jusqu'à 5 points sur la table. 
                Dans une filière où chaque demi-point se paie d'heures de calcul intégral, c'est un luxe que tu ne peux pas te permettre.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Pourquoi la plupart passent à côté */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-red-600" />
              2. Pourquoi la plupart des préparationnaires passent à côté
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Effet de mode inversé :</strong> « tout le monde dit que Python, c'est facile » → donc personne ne l'approfondit vraiment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Absence de méthodo :</strong> on survole les commandes en TP, sans vraie feuille de route</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>Stress de l'install :</strong> certains n'ont jamais réussi à faire tourner Numpy sur leur PC ; d'autres découvrent Colab la veille du DS</span>
              </li>
            </ul>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-red-800">
                <strong>Résultat :</strong> le jour J, 80 % des candidats trébuchent sur trois erreurs classiques : 
                indices hors liste, confusion entre print et return, boucle mal initialisée.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - La stratégie gagnante */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-green-600" />
              3. La stratégie gagnante : régularité + feedback immédiat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Pour engranger les +3 à +5 pts sûrs, il suffit de :</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">1</div>
                <p className="text-sm">Mémoriser les <strong>95 commandes clés</strong> (import, boucles, Numpy, random, matplotlib)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">2</div>
                <p className="text-sm">S'entraîner <strong>1 h par semaine</strong> sur des questions type-concours</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">3</div>
                <p className="text-sm">Recevoir un <strong>feedback instantané</strong> qui corrige tes erreurs</p>
              </div>
            </div>
            <p className="text-center font-semibold">
              C'est exactement ce que j'ai empaqueté dans mon coaching Python « premium mais pas trop cher ».
            </p>
          </CardContent>
        </Card>

        {/* Section 4 - Ce que tu vas maîtriser */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Code className="h-6 w-6 text-purple-600" />
              4. Ce que tu vas maîtriser (et comment)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Bloc</th>
                    <th className="border border-gray-300 p-3 text-left">Objectif concret</th>
                    <th className="border border-gray-300 p-3 text-left">Outil d'apprentissage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Bases Python</td>
                    <td className="border border-gray-300 p-3">Entrées/sorties, boucles, conditions, fonctions</td>
                    <td className="border border-gray-300 p-3">Vidéos « micro-concepts » + quiz « 95 commandes »</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Algèbre & Numpy</td>
                    <td className="border border-gray-300 p-3">Inverser une matrice, résoudre Ax = b</td>
                    <td className="border border-gray-300 p-3">TP guidé sur Colab</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Analyse</td>
                    <td className="border border-gray-300 p-3">Tracer f(x), suite (uₙ) et chercher une racine</td>
                    <td className="border border-gray-300 p-3">Notebook interactif + corrigé vidéo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold">Probas/Stats</td>
                    <td className="border border-gray-300 p-3">Simuler loi binomiale, moyenne, médiane</td>
                    <td className="border border-gray-300 p-3">20 exos progressifs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Exos concours</td>
                    <td className="border border-gray-300 p-3">50 questions récurrentes (BCE/Ecricome)</td>
                    <td className="border border-gray-300 p-3">Plateforme IA qui corrige ton code en direct</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-500">
              <p className="text-blue-800">
                <strong>USP :</strong> l'évaluation interactive. Tu colles ton script → l'IA lance les tests → elle t'indique exactement où ça bloque et te propose un indice. 
                Tu corriges → tu relances → tu valides. Boucle <em>Lire → Coder → Tester → Corriger</em>, jusqu'à la réussite complète.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - L'offre en détail */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Star className="h-6 w-6 text-yellow-600" />
              5. L'offre en détail
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Produit cœur */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-lg text-orange-800 mb-3">Produit cœur</h4>
              <p className="text-orange-700 mb-2"><strong>6 h de coaching individuel</strong> (visioconf, colab partagé)</p>
              <ul className="text-orange-700 space-y-1">
                <li>– Analyse d'extraits de sujets 2021-2024</li>
                <li>– Algorithmes « à connaître par cœur » expliqués pas à pas</li>
              </ul>
            </div>

            {/* Bonus */}
            <div>
              <h4 className="font-bold text-lg mb-4">Bonus</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800">1. Pack 50 exercices</h5>
                  <p className="text-sm text-green-700">À maîtriser avant les concours (avec corrigés vidéo)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800">2. Cheatsheet PDF</h5>
                  <p className="text-sm text-blue-700">La fiche « 95 commandes » à coller sur ton bureau</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-800">3. WhatsApp privé 30 jours</h5>
                  <p className="text-sm text-purple-700">Questions illimitées, réponse en –24 h</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800">4. 1 h de contenu vidéo</h5>
                  <p className="text-sm text-yellow-700">Optimisations & pièges classiques</p>
                </div>
              </div>
            </div>

            {/* Lead magnet */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-2">Lead magnet gratuit</h4>
              <p className="text-gray-700">
                💡 Quiz interactif « Commandes Python essentiel•les » – 15 questions chronométrées pour évaluer ton niveau immédiatement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 6 - Prix */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-2xl">💰</span>
              6. Combien ça coûte ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border">
              <div className="text-3xl font-bold text-orange-600 mb-2">297 €</div>
              <p className="text-lg">Coaching 6 h + 4 bonus</p>
              <p className="text-sm text-gray-600">≈ 50 € l'heure, soit le tarif d'un cours particulier standard… avec tout le contenu numérique en prime.</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Paiement en 2 x sans frais disponible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Pas de garantie ? Exact : tu payes si – et seulement si – tu veux ce résultat. 
                (J'assume : mon taux de satisfaction est supérieur à 95 %, inutile de mettre un filet de sécurité artificiel.)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Témoignage détaillé */}
        <Card className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-600" />
              7. Témoignage éclair – Léa, 2ᵉ année ECG
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-lg italic text-blue-800 mb-4">« Dimitar a démystifié Python ; je partais de zéro. Résultat : sur mon dernier DS, j'ai réussi toutes les questions Python. Je me sens enfin sereine pour le concours. »</blockquote>
            <p className="text-blue-700 font-semibold">Si Léa peut le faire en quelques semaines, tu le peux aussi.</p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mb-8 bg-gradient-to-r from-primary/10 to-orange-500/10 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              8. OK, mais comment passer à l'action ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <span><strong>Teste-toi gratuitement :</strong> clique sur le lien ci-dessous, passe le quiz « Commandes Python »</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <span>Reçois ton score + plan d'attaque dans ta boîte mail</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="mb-2"><strong>Décide :</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Tu veux juste la fiche et le quiz ? Garde-les, c'est cadeau.</li>
                    <li>• Tu veux +3 à +5 pts sûrs et transformer Python en force ? Réserve ton créneau coaching avant que l'agenda ne se remplisse.</li>
                  </ul>
                </div>
              </li>
            </ol>
            <div className="text-center mt-6">
              <Link to="/formation">
                <Button size="lg" className="text-lg px-8 py-4">
                  🚀 Je passe le quiz et je réserve ma place !
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-2">
                (Places limitées : je n'accompagne qu'un petit nombre d'étudiants pour garantir la personnalisation.)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>9. FAQ express</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-blue-800">Q : Et si je n'ai jamais installé Python ?</p>
                <p className="text-blue-700">👉 On travaillera directement sur Google Colab : aucune installation, juste un navigateur.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-800">Q : Je vise HEC, pas EM Lyon ; c'est assez pointu ?</p>
                <p className="text-green-700">👉 Oui : on décortique les sujets HEC 2022-2024 et on pousse jusqu'aux pièges d'oraux.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-semibold text-orange-800">Q : 297 € pour 6 h, c'est vraiment « premium mais pas trop cher » ?</p>
                <p className="text-orange-700">👉 Regarde les prépas privées : 90 € l'heure, sans quiz, sans PDF, sans suivi WhatsApp. À toi de voir.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-gradient-to-br from-primary/10 to-orange-500/10 border-primary">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-lg">
              Python n'est pas la cerise sur le gâteau : <strong>c'est la part du barème la plus rentable du concours.</strong>
            </p>
            <p>
              Avec une heure de pratique hebdo et un feedback instantané, tu verrouilles +3 à +5 points que les autres laissent filer.
            </p>
            <p>
              Mon coaching te fournit : méthode, exercices, correction IA et accompagnement personnalisé. 
              Le tout en mode premium accessible.
            </p>
            <div className="mt-6">
              <Link to="/formation">
                <Button size="lg" className="text-lg px-8 py-4">
                  Prochain pas : découvre ton niveau et transforme Python en arme secrète ↗
                </Button>
              </Link>
            </div>
            <Link to="/offre/coaching-python" className="inline-block mt-4">
              <Button variant="outline" size="lg">
                En savoir plus sur le coaching Python
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default PythonArticlePage;