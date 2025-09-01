import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Target, ArrowLeft } from 'lucide-react';

const Planning360Page = () => {
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
            <span className="font-bold text-gray-900">Intégrer les maths — méthode 360°</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <Target className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <Badge className="bg-gray-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Prépa ECG : intégrer les maths dans un planning chargé — méthode 360°</CardTitle>
                <p className="text-lg text-gray-600 mt-2">Insérer intelligemment les maths sans sacrifier les autres matières.</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Introduction</h3>
                <p className="text-gray-700">
                  Vous n'avez que 24 heures, mais 7 matières, des colles, des DS et un concours qui approche ? Dans une prépa ECG, la pression multimatières est constante : ESH, géopolitique, langues… et, bien sûr, les maths. Or les maths drainent l'énergie si l'on ne les structure pas.
                </p>
                <p className="text-gray-700 font-semibold mt-3">
                  La clef n'est pas de sacrifier les autres disciplines, mais d'insérer intelligemment les maths dans un emploi du temps déjà plein. Objectif : boost notes global, stress minimal, planning maîtrisé.
                </p>
              </div>

              {/* Problème */}
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Le problème : un planning surchargé qui sacrifie l'équilibre</h3>
                <p className="text-gray-700 mb-3">
                  En prépa ECG, avec 5-7 matières comme maths, économie, langues et plus, le temps manque cruellement. Colles orales, DS écrits, et devoirs maison s'enchaînent, laissant peu de marge pour tout couvrir.
                </p>
                <p className="text-gray-700 mb-3">
                  Résultat : les maths, pilier des concours BCE, sont souvent reléguées, ou pire, monopolisent tout, au détriment des autres. Vous lisez un cours vite fait, sautez les exercices complexes, et accumulez des lacunes.
                </p>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <p className="text-gray-800 font-semibold">Question critique :</p>
                  <p className="text-gray-700">Combien de matières sacrifiez-vous par manque de plan ?</p>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">La solution : intégrez les maths efficacement dans votre planning</h3>
                <p className="text-blue-700">
                  Les maths ECG ne sont pas une charge isolée ; elles structurent votre organisation en boostant logique et rigueur, utiles partout. Voici un plan pas-à-pas pour les insérer sans oublier le reste.
                </p>
              </div>

              {/* Stratégies détaillées */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Comprenez le rôle pivot des maths dans l'organisation globale
                  </h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Allocation temps</h5>
                        <p className="text-gray-700 text-sm">Allouez-leur 40% de votre temps hebdo (ex. : 20h sur 50), en les plaçant comme ancre. Par exemple, le matin avant les cours.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Équilibre matières</h5>
                        <p className="text-gray-700 text-sm">Divisez votre planning en blocs : 2h maths, 1h économie, 1h langues... Alternez pour éviter la monotonie.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Définissez les tâches essentielles en maths ECG
                  </h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Lire et comprendre le cours</h5>
                        <p className="text-gray-700 text-sm">Commencez par une lecture active ; notez questions et reliez aux chapitres précédents.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Réviser avec flashcards</h5>
                        <p className="text-gray-700 text-sm">Créez des cartes pour définitions et théorèmes – 15 min/jour pour ancrer sans bachotage.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Faire exercices simples</h5>
                        <p className="text-gray-700 text-sm">Appliquez directement pour tester la compréhension ; visez 5-10 par session.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Travailler exercices compliqués</h5>
                        <p className="text-gray-700 text-sm">Analysez pas à pas avec corrigé ; comparez votre approche pour identifier faiblesses.</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-800 mb-2">Une fois bon, cherchez plus complexes</h5>
                      <p className="text-gray-700 text-sm">Passez à des annales BCE ; notez erreurs dans un carnet pour éviter répétitions.</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-semibold">Intégrez cela dans des slots courts :</p>
                      <p className="text-blue-700">45 min maths avant une colle ESH, pour fluidité.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Insérez les maths dans un planning chargé sans négliger le reste
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 font-semibold">Pas de temps ? Rendez chaque minute rentable.</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Blocs hybrides</h5>
                        <p className="text-gray-700 text-sm">Associez maths à d'autres : réviser probas après économie pour liens croisés.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Priorisez</h5>
                        <p className="text-gray-700 text-sm">Colles et DS dictent le rythme ; allouez 60% du temps maths à la préparation immédiate, 40% à l'avance.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Outils d'organisation</h5>
                        <p className="text-gray-700 text-sm">Utilisez un agenda digital ; bloquez "maths flash" (20 min) entre matières pour réviser flashcards sans rupture.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Astuce anti-oubli</h5>
                        <p className="text-gray-700 text-sm">Revue hebdo : 1h pour checker équilibre – avez-vous couvert toutes matières ?</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    Soyez efficace : comprendre plutôt que bachoter
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Évitez le piège du volume ; focalisez sur la profondeur. Par exemple, un exercice complexe bien analysé vaut dix simples mal faits.</p>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-800 font-semibold">Preuves :</p>
                      <p className="text-gray-700">Jury BCE valorise la compréhension, pas la quantité – traiter 50% d'un sujet rigoureusement suffit pour 16/20.</p>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-800 font-semibold">Adaptez si bloqué :</p>
                      <p className="text-gray-700">Demandez au prof ou pair ; notez erreurs pour progression. Résultat : passez de 10 à 50% efficacité par session.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Conclusion</h3>
                <p className="text-blue-700 mb-4">
                  Intégrer les maths ECG dans un planning chargé repose sur leur rôle structurant, des tâches ciblées (lire, comprendre, flashcards, exercices croissants), et un équilibre matières sans faille. Cela rend votre prépa efficace, booste notes aux concours BCE, et prévient l'épuisement.
                </p>
                <p className="text-blue-700 font-semibold">
                  Agissez : refondez votre planning dès aujourd'hui pour un équilibre gagnant. Vos top écoles BCE s'approchent – optimisez maintenant !
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

export default Planning360Page;