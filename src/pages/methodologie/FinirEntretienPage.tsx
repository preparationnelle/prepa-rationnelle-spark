import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, Lightbulb, Clock, MessageCircle, Handshake, Target } from 'lucide-react';

const FinirEntretienPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/methodologie/entretiens-personnalite" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux entretiens de personnalité
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-black">Finir un </span>
            <span className="text-blue-600">Entretien</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez l'art de conclure votre entretien sur une note positive et mémorable qui marquera durablement le jury.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Pourquoi la fin d'entretien est-elle cruciale ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  La fin d'entretien est votre dernière chance de marquer les esprits. C'est le moment où vous laissez votre 
                  impression finale, posez vos questions stratégiques et montrez votre motivation. Une conclusion réussie peut 
                  transformer un entretien moyen en succès.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Structure de fin d'entretien */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Target className="w-8 h-8" />
              Les 4 phases d'une conclusion réussie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Synthèse personnelle
                </h4>
                <p className="text-gray-700">
                  Résumez en 1-2 minutes vos points forts et votre adéquation avec l'école en reprenant les éléments clés de l'entretien.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Questions au jury
                </h4>
                <p className="text-gray-700">
                  Posez 2-3 questions intelligentes qui montrent votre intérêt genuine et votre réflexion approfondie sur l'école.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Réaffirmation de motivation
                </h4>
                <p className="text-gray-700">
                  Confirmez votre motivation pour l'école de manière authentique et personnalisée.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                  Salutations et remerciements
                </h4>
                <p className="text-gray-700">
                  Terminez par des remerciements sincères et une attitude positive qui laisse une bonne dernière impression.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions à poser au jury */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <MessageCircle className="w-8 h-8" />
              Questions stratégiques à poser au jury
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-green-700 text-lg mb-4">✅ Questions recommandées</h4>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-semibold text-green-800 mb-2">Sur l'école et le programme</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "Quels sont les projets innovants en cours dans l'école ?"</li>
                        <li>• "Comment l'école évolue-t-elle face aux défis du digital ?"</li>
                        <li>• "Quelle est la spécificité pédagogique qui vous tient le plus à cœur ?"</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-semibold text-green-800 mb-2">Sur la vie étudiante</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "Quels sont les projets associatifs les plus marquants récemment ?"</li>
                        <li>• "Comment l'école accompagne-t-elle l'entrepreneuriat étudiant ?"</li>
                        <li>• "Quelle est l'évolution prévue du campus ?"</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h5 className="font-semibold text-green-800 mb-2">Sur votre profil</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "Quels conseils donneriez-vous pour réussir ma première année ?"</li>
                        <li>• "Comment puis-je me préparer au mieux avant la rentrée ?"</li>
                        <li>• "Y a-t-il des aspects de mon profil à développer ?"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-red-700 text-lg mb-4">❌ Questions à éviter</h4>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <h5 className="font-semibold text-red-800 mb-2">Questions basiques</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "Combien d'étudiants y a-t-il dans l'école ?"</li>
                        <li>• "Où se trouve le campus ?"</li>
                        <li>• "Combien coûtent les études ?"</li>
                        <li>• "Quand sont les vacances ?"</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <h5 className="font-semibold text-red-800 mb-2">Questions inappropriées</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "Quelles sont mes chances d'être admis ?"</li>
                        <li>• "Combien gagnent les diplômés ?"</li>
                        <li>• "Est-ce que l'école est difficile ?"</li>
                        <li>• "Y a-t-il beaucoup de travail ?"</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <h5 className="font-semibold text-red-800 mb-2">Questions négatives</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• "Quels sont les défauts de l'école ?"</li>
                        <li>• "Pourquoi votre école plutôt qu'HEC ?"</li>
                        <li>• "Les étudiants sont-ils stressés ?"</li>
                        <li>• "Y a-t-il beaucoup d'échecs ?"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timing et gestion du temps */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Clock className="w-8 h-8" />
              Gestion du timing en fin d'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-3">5 minutes restantes</h4>
                <p className="text-gray-700 text-sm">
                  Commencez à synthétiser vos points forts si le jury ne vous l'a pas encore demandé.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-3">3 minutes restantes</h4>
                <p className="text-gray-700 text-sm">
                  Posez votre première question au jury. Adaptez le nombre selon le temps disponible.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-3">1 minute restante</h4>
                <p className="text-gray-700 text-sm">
                  Réaffirmez votre motivation et remerciez chaleureusement le jury.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-800 mb-3">⚠️ Attention aux signaux du jury</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Regarde sa montre :</strong> Accélérez votre conclusion</li>
                <li>• <strong>Commence à ranger :</strong> Terminez rapidement</li>
                <li>• <strong>Dit "Bien" :</strong> Souvent signal de transition vers la fin</li>
                <li>• <strong>Vous demande vos questions :</strong> C'est le moment parfait</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Exemples de conclusions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Handshake className="w-8 h-8" />
              Exemples de conclusions réussies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-4">✅ Synthèse personnelle type</h4>
              <p className="text-gray-700 italic mb-4">
                "Pour résumer notre échange, je pense que mon profil correspond bien aux valeurs d'[École] grâce à 
                mon expérience en [domaine], ma passion pour [secteur] et ma capacité démontrée à [qualité]. 
                Mon projet de [objectif professionnel] s'aligne parfaitement avec les opportunités offertes par votre programme, 
                notamment [spécificité de l'école]."
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-4">✅ Réaffirmation de motivation</h4>
              <p className="text-gray-700 italic mb-4">
                "Cet échange renforce ma conviction que [École] est l'environnement idéal pour développer mon projet. 
                L'opportunité de [élément spécifique mentionné pendant l'entretien] correspond exactement à ce que je recherche. 
                J'ai vraiment hâte de contribuer à la communauté [École] et d'apprendre aux côtés d'étudiants aussi motivés."
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-4">✅ Remerciements finaux</h4>
              <p className="text-gray-700 italic mb-4">
                "Je vous remercie sincèrement pour cet échange enrichissant. Vous avez confirmé mon impression très positive 
                sur [École] et j'espère avoir l'opportunité de rejoindre votre communauté. Je vous souhaite une excellente 
                continuation de jurys."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs à éviter */}
        <Card className="mb-12 border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-red-800">
              <AlertCircle className="w-8 h-8" />
              Erreurs fatales en fin d'entretien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-red-700">❌ Attitudes problématiques</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Précipitation :</strong> Partir trop vite sans prendre le temps de conclure
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Mollesse :</strong> Finir sur une note passive ou désintéressée
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Insistance :</strong> Redemander ses chances d'admission
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Négativité :</strong> Critiquer d'autres écoles ou candidats
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-red-700">❌ Erreurs de communication</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Répétition :</strong> Ressasser les mêmes arguments
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Longueur :</strong> Monopoliser la parole trop longtemps
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Confusion :</strong> Se contredire ou changer de version
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Familiarité :</strong> Devenir trop décontracté
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist finale */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <CheckCircle className="w-8 h-8" />
              Checklist de fin d'entretien parfaite
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">📋 Contenu</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    J'ai synthétisé mes points forts
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    J'ai posé 2-3 questions pertinentes
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    J'ai réaffirmé ma motivation
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    J'ai remercié chaleureusement
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">⭐ Attitude</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    J'ai gardé un ton positif et énergique
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    J'ai respecté le timing du jury
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    J'ai maintenu le contact visuel
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    J'ai serré la main avec confiance
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-blue-200 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Prêt à maîtriser vos fins d'entretien ?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Entraînez-vous à conclure brillamment vos entretiens avec nos simulations personnalisées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/methodologie/entretiens-personnalite">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Voir toutes les méthodologies
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Coaching personnalisé
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FinirEntretienPage;
