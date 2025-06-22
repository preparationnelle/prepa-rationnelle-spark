
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Calculator, Target, Clock, Code, CheckCircle, Sun } from 'lucide-react';

const MathsEteECG1ECG2Page = () => {
  return (
    <div className="min-h-screen bg-accent">
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <Sun className="h-4 w-4 mr-2" />
              Première année (rentrée en ECG2)
            </div>
            <h1 className="hero-heading gradient-text mb-4">
              Un été pour (re)prendre le contrôle en maths
            </h1>
            <p className="text-lg text-muted-foreground">
              Entre ECG1 et ECG2 : pas d'avance, mais de l'assurance
            </p>
          </div>

          {/* Article Content */}
          <div className="space-y-8">
            {/* Section 1 */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  1. Ce que tu cherches vraiment : être solide
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Pas besoin d'ouvrir les chapitres de l'an prochain. À ce stade, ce qui compte, c'est de ne plus douter sur les bases. Comprendre vraiment ce que tu as vu cette année. Te débarrasser de ce sentiment diffus de "je crois que j'ai compris… mais je ne suis pas sûr".
                </p>
                <p className="text-gray-700">
                  Prends le temps de repasser sur tout : un chapitre tous les deux jours suffit. Pose-toi les bonnes questions. Est-ce que je comprends le sens du théorème ? Est-ce que je saurais le démontrer, ou l'expliquer simplement ? Est-ce que je retombe toujours sur les mêmes erreurs ?
                </p>
              </CardContent>
            </Card>

            {/* Section 2 */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-primary" />
                  2. Relire ne suffit pas : il faut produire
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Tu peux relire ton cours autant que tu veux, ça ne remplacera jamais une rédaction. Quand tu penses avoir compris une méthode ou un résultat, force-toi à l'écrire. Pas juste dans ta tête. Noir sur blanc. Et vérifie que tout est exact.
                </p>
                <p className="text-gray-700">
                  Quand tu fais un exercice, ce n'est pas grave de te tromper. Ce qui compte, c'est de comprendre pourquoi tu t'es trompé. Et une fois le corrigé bien saisi, refais-le deux ou trois jours plus tard, sans aide.
                </p>
                <p className="text-gray-700 font-medium">
                  C'est comme ça que tu construis des réflexes fiables. Pas juste en ayant "vu" les choses une fois.
                </p>
              </CardContent>
            </Card>

            {/* Section 3 */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  3. Un peu tous les jours vaut mieux qu'un marathon
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Oublie les grosses journées de six heures tous les dix jours. Deux heures par jour, au calme, concentré, sans téléphone, c'est suffisant.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Alterne :</strong>
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>des moments de cours actif (reformulation, cartes mentales, flashcards si tu aimes ça),</li>
                  <li>et des moments de pratique ciblée (petits exercices, ou gros problème si tu veux te challenger).</li>
                </ul>
                <p className="text-gray-700 font-medium">
                  L'important, c'est de faire les deux. Pas l'un sans l'autre.
                </p>
              </CardContent>
            </Card>

            {/* Section 4 */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  4. N'attends pas la rentrée pour identifier tes lacunes
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Tu as du temps maintenant. Si un chapitre t'a toujours paru flou, c'est le moment. Pas de pression. Juste toi, un bon support (DUNO, cours, annales), et une démarche sincère de compréhension.
                </p>
                <p className="text-gray-700">
                  Évite de "sauter" un thème sous prétexte qu'il est "trop dur". C'est souvent ceux-là qui bloquent tout le reste.
                </p>
              </CardContent>
            </Card>

            {/* Section 5 */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" />
                  5. L'informatique ne s'oublie pas : garde un pied dedans
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  <strong>Quelques bases à revoir :</strong>
                </p>
                <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
                  <li>une fonction bien écrite, claire,</li>
                  <li>une boucle for propre, et une boucle while bien construite,</li>
                  <li>la méthode de la dichotomie : comprendre l'idée, savoir la coder sans bug.</li>
                </ul>
                <p className="text-gray-700">
                  Tu n'as pas besoin de faire des projets complexes. Juste quelques routines bien choisies. Dix minutes tous les deux jours, ça suffit.
                </p>
              </CardContent>
            </Card>

            {/* Section 6 */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">
                  6. Et surtout…
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Ne cherche pas à faire "plus". Cherche à faire mieux. Tu as déjà un programme chargé. L'objectif, ce n'est pas d'en rajouter, mais de renforcer. Tu veux te dire en septembre : "Ok, tout ce que j'ai vu l'an dernier, je le maîtrise."
                </p>
                
                <div className="bg-white p-6 rounded-lg border border-primary/20 mt-6">
                  <h4 className="font-semibold text-primary mb-3">Et si tu veux aller plus loin :</h4>
                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold">📄</span>
                      Je peux t'envoyer ma fiche complète avec toutes mes méthodes pour progresser en maths.
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-primary font-bold">💬</span>
                      Et si tu veux organiser ton été avec moi, ou recevoir des conseils dans une autre matière (culture G, éco, langues…), écris-moi. Je répondrai avec plaisir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Demander des conseils personnalisés
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MathsEteECG1ECG2Page;
