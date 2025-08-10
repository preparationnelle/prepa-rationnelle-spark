import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, BookOpen, ArrowLeft } from 'lucide-react';

const RoutineMathsBetonPage = () => {
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
            <span className="font-bold text-gray-900">Routine maths béton</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <Badge className="bg-gray-600 text-white mb-2">Méthodologie</Badge>
                <CardTitle className="text-3xl font-bold">Routine maths béton : discipline et clarté pour des progrès</CardTitle>
                <p className="text-lg text-gray-600 mt-2">Un plan d'attaque précis pour travailler efficacement, même sans motivation.</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Introduction</h3>
                <p className="text-gray-700 italic mb-4">
                  « Motivé ou pas, il faut avancer. »
                </p>
                <p className="text-gray-700">
                  En prépa ECG, beaucoup d'étudiants passent plus de temps à se demander quoi faire qu'à résoudre des équations. Résultat : révisions en dents de scie, progrès lents, stress avant chaque DS. La solution ? Mettre en place une routine simple et ultra‑claire : 20 chapitres, un plan d'attaque précis, zéro tergiversation.
                </p>
              </div>

              {/* Problème */}
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-500">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Le problème : le chaos mental qui tue l'efficacité en maths ECG</h3>
                <p className="text-gray-700 mb-3">
                  En prépa ECG, les maths représentent un défi majeur : algèbre, probas, intégrales... Sans routine, vous perdez du temps à vous poser mille questions inutiles avant même de démarrer. Motivation en berne ? Vous procrastinez, accumulez du retard.
                </p>
                <p className="text-gray-700">
                  Pire, dépendre uniquement de la motivation expose à des baisses imprévisibles. Un jour motivé, vous avancez ; le lendemain, rien. Cela crée un cercle vicieux : retards s'accumulent, stress monte, et les exercices difficiles restent intouchés.
                </p>
              </div>

              {/* Solution */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">La solution : routine, discipline et clarté pour travailler efficacement</h3>
                <p className="text-blue-700">
                  Passez à une approche structurée. Voici un guide pas-à-pas pour travailler les maths ECG avec efficacité, en équilibrant motivation et discipline.
                </p>
              </div>

              {/* Stratégies détaillées */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                    Adoptez une routine solide et suivez-la religieusement
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">La routine élimine les doutes. Planifiez des sessions fixes : 1-2 heures quotidiennes pour les maths ECG, intégrées à votre emploi du temps global.</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Définissez clairement</h5>
                        <p className="text-gray-700 text-sm">Lundi : révision d'un chapitre ; mardi : exercices d'application ; mercredi : problèmes difficiles.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Suivez sans faille</h5>
                        <p className="text-gray-700 text-sm">Commencez même sans envie. L'action déclenche souvent la motivation. Évaluez « Ai-je avancé ? » et ajustez.</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-800 font-semibold">Astuce anti-doute :</p>
                      <p className="text-blue-700">Ne vous posez pas 100 questions. Votre routine est le boss – lancez-vous, et les réponses viendront en travaillant.</p>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-800 font-semibold">Preuve d'efficacité :</p>
                      <p className="text-gray-700">Des étudiants en prépa ECG rapportent une productivité doublée après un mois de routine stricte, avec moins de stress.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                    Alliez motivation et discipline pour ne pas dépendre de l'humeur
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Deux moteurs propulsent votre travail : la motivation (l'étincelle initiale) et la discipline (le carburant constant).</p>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Cultivez les deux</h5>
                        <p className="text-gray-700 text-sm">Fixez des micro-objectifs, comme "5 exercices aujourd'hui", pour relancer la motivation via des victoires rapides.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Ne dépendez pas de la motivation</h5>
                        <p className="text-gray-700 text-sm">Que vous soyez en forme ou non, avancez. Discipline signifie travailler quotidiennement, transformant l'effort en habitude automatique.</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-blue-800 font-semibold">Conseil pratique :</p>
                        <p className="text-blue-700">Si la motivation flanche, commencez par 10 minutes — souvent, cela suffit à enchaîner.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                    Gagnez en clarté sur ce qu'il faut faire en maths ECG
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Avec 20 chapitres en première année, structurez votre approche pour chaque :</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Réviser et apprendre le cours</h5>
                        <p className="text-gray-700 text-sm">Lisez attentivement, notez définitions et théorèmes. Assurez une compréhension totale avant de passer.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Exercices d'application</h5>
                        <p className="text-gray-700 text-sm">Commencez par des basiques pour ancrer les concepts. Vérifiez immédiatement pour corriger.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Exercices difficiles</h5>
                        <p className="text-gray-700 text-sm">Passez aux complexes pour approfondir et simuler les épreuves BCE.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-800 mb-2">Progression globale</h5>
                        <p className="text-gray-700 text-sm">Revenez hebdomadairement sur les anciens chapitres pour consolider.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                    Bloqué ? Agissez intelligemment sans stagner
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-700">Quand un point résiste, ne paniquez pas :</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Soyez critique</strong> : posez-vous des questions ciblées : "Où bloque-je exactement ?" ou "Est-ce le cours ou un calcul ?"</li>
                      <li><strong>Cherchez de l'aide</strong> : demandez au prof, discutez avec un ami (expliquer clarifie souvent)</li>
                      <li><strong>Avancez malgré tout</strong> : notez le blocage et passez ; revenez plus tard avec une perspective fraîche</li>
                    </ul>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-800 font-semibold">Cette méthode évite les pertes de temps, maintenant le momentum.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Conclusion</h3>
                <p className="text-blue-700 mb-4">
                  Travailler efficacement les maths en prépa ECG se résume à une routine inébranlable, un mix motivation-discipline, et une clarté totale sur les chapitres. Ne laissez plus les doutes ou les baisses d'humeur freiner votre progression — avancez quotidiennement pour combler retards et prendre l'avance.
                </p>
                <p className="text-blue-700 font-semibold">
                  Appliquez ces étapes dès maintenant pour des résultats tangibles aux concours BCE. Votre discipline d'aujourd'hui forge vos top notes de demain — lancez-vous !
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

export default RoutineMathsBetonPage;