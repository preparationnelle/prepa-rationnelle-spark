import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, ArrowLeft } from 'lucide-react';

const CarnetErreursPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF7]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-amber-700">
            <Link to="/" className="flex items-center gap-1 hover:text-amber-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-600/50 mx-1" />
            <Link to="/formations" className="hover:text-amber-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-600/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-amber-900 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-600/50 mx-1" />
            <Link to="/formation/maths-methodologie" className="hover:text-amber-900 transition-colors">
              Méthodologie
            </Link>
            <ChevronRight className="h-3 w-3 text-amber-600/50 mx-1" />
            <span className="text-amber-800 font-bold">Carnet d’erreurs : apprendre de ses erreurs</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <Badge className="bg-amber-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold text-gray-800">
                  Prépa ECG : transformer vos erreurs en points — le carnet d’erreurs
                </CardTitle>
                <p className="text-lg text-gray-600 mt-2">
                  Méthode et astuces pour structurer, alimenter et exploiter un carnet d’erreurs efficace.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <p className="text-gray-700">
                  Vous visez HEC, l’ESSEC ou l’ESCP ? Chaque faute laissée passer coûte des places. En prépa ECG, l’erreur est
                  inévitable ; la répéter est un choix. Le carnet d’erreurs agit comme un laboratoire personnel : on y dissèque ses
                  ratés, on en tire une stratégie, puis on convertit la bévue en points au concours BCE. Voici comment structurer cet
                  outil, l’alimenter semaine après semaine et l’utiliser pour booster vos notes en maths, ESH ou langues, à l’écrit comme à l’oral.
                </p>
                <p className="text-gray-700 mt-3">
                  Ignorer les erreurs crée un cercle vicieux : confiance érodée, progression stagnante, frustration. Sans analyse,
                  des heures de bachotage se perdent. Posez-vous la question : combien de points perdus pour des erreurs évitables ?
                </p>
              </section>

              {/* Méthode en 5 étapes */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Méthode en 5 étapes</h3>
                <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                  <li>
                    <strong>Notez le problème original</strong> — Transcrivez l’exercice/la question et le contexte (DS, colle, exercice maison).
                  </li>
                  <li>
                    <strong>Recopiez votre erreur</strong> — Décrivez précisément le faux pas (raisonnement, calcul, hypothèse oubliée).
                  </li>
                  <li>
                    <strong>Inscrivez la solution correcte</strong> — Comparez avec votre version, soulignez les écarts déterminants.
                  </li>
                  <li>
                    <strong>Analysez la cause profonde</strong> — Lacune de cours, manque de rigueur, distraction ? Identifiez les patterns récurrents.
                  </li>
                  <li>
                    <strong>Astuces d’usage</strong> — Tenue régulière (après chaque correction), classement par thèmes, relectures stratégiques avant DS/concours, état d’esprit positif.
                  </li>
                </ol>
              </section>

              {/* Pourquoi ça marche */}
              <section>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Pourquoi ça fonctionne</h3>
                <p className="text-gray-700">
                  La réflexion active transforme les lacunes en automatismes, prépare aux pièges des concours BCE et renforce la
                  confiance. Des étudiants constatent souvent un gain de 2–3 points après un mois d’utilisation assidue.
                </p>
              </section>

              {/* Conclusion */}
              <section className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-amber-900 mb-2">Conclusion</h3>
                <p className="text-amber-800">
                  Normalisez les faux pas, éradiquez les répétitions et visez les meilleures écoles : avec ce carnet, chaque erreur
                  devient une ressource. Mettez-le en place, maintenez-le avec rigueur et laissez vos notes suivre.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bouton retour */}
      <div className="text-center py-8">
        <Link to="/formation/maths-methodologie">
          <Button variant="outline" className="flex items-center gap-2 mx-auto">
            <ArrowLeft className="h-4 w-4" />
            Retour à la méthodologie
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarnetErreursPage;

