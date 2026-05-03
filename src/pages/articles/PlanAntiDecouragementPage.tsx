import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, CheckCircle2, ArrowLeft, AlertTriangle, Lightbulb } from 'lucide-react';

const PlanAntiDecouragementPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-800"><Home className="h-3 w-3" />Accueil</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
            <Link to="/formation/maths-choix" className="hover:text-gray-800">Choix option Maths</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
            <Link to="/formation/maths-methodologie" className="hover:text-gray-800">Méthodologie</Link>
            <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
            <span className="font-bold text-gray-900">Plan anti‑découragement</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <Badge className="bg-gray-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : résister quand les maths deviennent dures — plan anti‑découragement</CardTitle>
                <p className="text-lg text-gray-600 mt-2">Construire une régularité solide et transformer chaque échec en levier de progression.</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Introduction
                </h3>
                <p className="text-gray-700 italic mb-4">
                  « Une mauvaise note, deux, puis le doute s'installe… »
                </p>
                <p className="text-gray-700 mb-3">
                  En prépa ECG, la difficulté maths peut frapper sans prévenir : copies sévères, comparaison aux camarades, tentation de bachoter sans comprendre. Résultat ? Motivation en chute libre, routine explosée.
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-800 font-semibold">
                    Pourtant, persévérer reste la voie la plus sûre vers le concours BCE. Gardez les yeux sur la ligne d'arrivée, la montée en puissance commence aujourd'hui.
                  </p>
                </div>
              </div>

              {/* Problème */}
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Le problème : quand les difficultés en maths ECG vous submergent</h3>
                <p className="text-gray-700 mb-3">
                  Vous donnez tout — bachotage intensif, révisions marathon — mais les résultats stagnent. Pourquoi ? Souvent, c'est le manque de régularité qui creuse l'écart : on oublie les bases, et les lacunes s'accumulent.
                </p>
                <p className="text-gray-700 mb-3">
                  Ce cycle vicieux mine la confiance. Perdre motivation malgré un travail intensif ? C'est courant. Vous vous demandez si l'effort en vaut la peine, surtout face aux concours BCE où une note faible en maths plombe l'admission.
                </p>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-800 font-semibold">Les rapports jury BCE 2024 le confirment :</p>
                  <p className="text-gray-700">Les candidats irréguliers chutent, tandis que la persévérance élève les moyennes de 10 à 15/20.</p>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  La solution : stratégies pour résister et progresser en maths ECG
                </h3>
                <p className="text-blue-700">
                  Face à la difficulté, ne luttez pas seul. Voici un plan étape par étape pour résister, en misant sur la régularité et un mindset de gagnant.
                </p>
              </div>

              {/* Stratégies détaillées */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Adoptez une régularité inébranlable
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">La clé ? Travaillez quotidiennement, pas en rafales</h5>
                      <p className="text-gray-700 text-sm">Réservez du temps aux maths ECG. Revoyez les bases avant d'attaquer les complexes — notions fondamentales et exercices d'application d'abord.</p>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-800 font-semibold">Pourquoi ça marche ?</p>
                      <p className="text-gray-700">La régularité ancre les concepts ; bachoter crée des oublis rapides.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Fixez des objectifs clairs et orientés concours
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-700">Visez les concours BCE comme horizon. Définissez des buts précis :</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Objectifs spécifiques</h5>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• "Maîtriser les intégrales ECG d'ici fin semaine"</li>
                          <li>• "Atteindre 14/20 en prochain DS"</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Évitez les pièges</h5>
                        <p className="text-gray-700 text-sm">Évitez la comparaison toxique ; concentrez-vous sur votre progression personnelle.</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-semibold">Astuce :</p>
                      <p className="text-blue-700">Utilisez un journal : notez avancées quotidiennes. Cela motive quand les notes basses frappent.</p>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-800 font-semibold">Preuve :</p>
                      <p className="text-gray-700">Les jury BCE valorisent la persévérance – traiter 40% d'un sujet rigoureusement suffit pour une bonne note.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Gérez les moments de découragement
                  </h4>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-800 font-semibold mb-2">Quand la motivation plonge, posez-vous :</p>
                      <p className="text-gray-700 text-sm">Ai-je bien travaillé les bases et applications ? Si oui, persévérez — l'assimilation prend du temps, comme tout apprentissage.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Acceptez les plateaux</h5>
                        <p className="text-gray-700 text-sm">Ils précèdent souvent les bonds. La progression n'est jamais linéaire.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Ne vous découragez jamais</h5>
                        <p className="text-gray-700 text-sm">Une mauvaise colle ? Analysez erreurs, corrigez. Chacun a son rythme en prépa ECG.</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-semibold">Conseil pratique :</p>
                      <p className="text-blue-700">Prenez une pause active — marche ou discussion avec un pair — puis reprenez. 80% des admis BCE ont traversé ces phases.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    Transformez échecs en leçons concrètes
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 font-semibold">Mauvaises notes ? Utilisez-les.</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Méthode post-colle ratée</h5>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Listez faiblesses : calcul imprécis ? Rigueur manquante ?</li>
                        <li>• Intégrez à votre routine pour éviter la répétition</li>
                        <li>• Transformez l'erreur en automatisme préventif</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-800 font-semibold">Ces étapes créent une boucle vertueuse :</p>
                      <p className="text-gray-700">Régularité renforce objectifs, qui alimentent persévérance. Un étudiant en prépa ECG, après des 8/20 initiaux, a atteint 16 via ce focus.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Conclusion</h3>
                <p className="text-blue-700 mb-4">
                  Résister aux difficultés en maths ECG se joue sur régularité, objectifs clairs vers concours BCE, et une persévérance anti-découragement. Travaillez bases et applications ; acceptez que l'assimilation prenne du temps.
                </p>
                <p className="text-blue-700 font-semibold">
                  Cette approche transforme les frustrations en forces, boostant notes et confiance. La montée en puissance commence maintenant — persévérez !
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center py-8">
        <Link to="/formation/maths-methodologie"><Button variant="outline" className="gap-2"><ArrowLeft className="h-4 w-4" />Retour à la méthodologie</Button></Link>
      </div>
    </div>
  );
};

export default PlanAntiDecouragementPage;