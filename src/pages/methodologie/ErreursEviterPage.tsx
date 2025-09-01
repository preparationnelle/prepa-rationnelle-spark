import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Lightbulb, Shield, Eye, MessageSquare } from 'lucide-react';

const ErreursEviterPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>

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
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-black">Erreurs à </span>
            <span className="text-red-600">Éviter</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Identifiez et évitez les pièges les plus fréquents en entretien pour maximiser vos chances de réussite aux concours des grandes écoles.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-3">Pourquoi connaître les erreurs courantes ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  En entretien, certaines erreurs peuvent ruiner instantanément vos chances, même avec un excellent dossier. 
                  Connaître ces pièges vous permet de les éviter et de vous démarquer positivement des autres candidats 
                  qui tombent dans ces travers classiques.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs par catégorie */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-red-800">
              <XCircle className="w-8 h-8" />
              Les erreurs fatales par catégorie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            
            {/* Erreurs de préparation */}
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Erreurs de préparation
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">❌ Manque de connaissance de l'école</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Ne pas connaître le programme spécifique</li>
                    <li>• Confondre avec une autre école</li>
                    <li>• Ignorer les spécialisations offertes</li>
                    <li>• Ne pas connaître les partenariats</li>
                  </ul>
                  <div className="mt-3 p-3 bg-green-100 rounded border-l-4 border-green-500">
                    <p className="text-green-800 text-sm"><strong>✅ Solution :</strong> Passez 2h minimum sur le site officiel, lisez les actualités récentes, participez aux JPO.</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">❌ Projet professionnel flou</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• "Je veux faire du business"</li>
                    <li>• "Tout m'intéresse"</li>
                    <li>• Projet incohérent avec le parcours</li>
                    <li>• Aucune expérience validante</li>
                  </ul>
                  <div className="mt-3 p-3 bg-green-100 rounded border-l-4 border-green-500">
                    <p className="text-green-800 text-sm"><strong>✅ Solution :</strong> Définissez un secteur précis, justifiez par des expériences, montrez la cohérence.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Erreurs d'attitude */}
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Erreurs d'attitude et de comportement
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">❌ Arrogance et prétention</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• "Je suis le meilleur candidat"</li>
                    <li>• Dénigrer les autres écoles</li>
                    <li>• Critiquer ses professeurs/camarades</li>
                    <li>• Afficher sa supériorité intellectuelle</li>
                  </ul>
                  <div className="mt-3 p-3 bg-green-100 rounded border-l-4 border-green-500">
                    <p className="text-green-800 text-sm"><strong>✅ Solution :</strong> Restez humble, valorisez votre environnement, montrez votre capacité d'écoute.</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">❌ Manque de confiance excessif</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Voix tremblante et hésitante</li>
                    <li>• Éviter le contact visuel</li>
                    <li>• S'excuser constamment</li>
                    <li>• Minimiser ses réussites</li>
                  </ul>
                  <div className="mt-3 p-3 bg-green-100 rounded border-l-4 border-green-500">
                    <p className="text-green-800 text-sm"><strong>✅ Solution :</strong> Entraînez-vous, préparez vos exemples, assumez vos réussites avec simplicité.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Erreurs de communication */}
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                Erreurs de communication
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">❌ Réponses inappropriées</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Réponses trop courtes (monosyllabes)</li>
                    <li>• Réponses interminables sans structure</li>
                    <li>• Hors-sujet complet</li>
                    <li>• Langue de bois et clichés</li>
                  </ul>
                  <div className="mt-3 p-3 bg-green-100 rounded border-l-4 border-green-500">
                    <p className="text-green-800 text-sm"><strong>✅ Solution :</strong> Structurez vos réponses (intro-développement-conclusion), restez authentique et concret.</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-red-700 mb-3">❌ Expression orale défaillante</h5>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Langage familier ("ouais", "du coup")</li>
                    <li>• Tics de langage répétitifs</li>
                    <li>• Débit trop rapide ou trop lent</li>
                    <li>• Mots de liaison parasites</li>
                  </ul>
                  <div className="mt-3 p-3 bg-green-100 rounded border-l-4 border-green-500">
                    <p className="text-green-800 text-sm"><strong>✅ Solution :</strong> Enregistrez-vous, travaillez l'articulation, variez le rythme, soignez le vocabulaire.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top 10 des erreurs fatales */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-red-800">
              <AlertTriangle className="w-8 h-8" />
              Top 10 des erreurs qui éliminent instantanément
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-1 gap-4">
              {[
                {
                  rank: 1,
                  error: "Arriver en retard sans excuse valable",
                  consequence: "Montre un manque de respect et d'organisation"
                },
                {
                  rank: 2,
                  error: "Mentir sur son CV ou ses expériences",
                  consequence: "Perte totale de crédibilité si découvert"
                },
                {
                  rank: 3,
                  error: "Critiquer violemment ses professeurs ou son établissement",
                  consequence: "Révèle un manque de maturité et de loyauté"
                },
                {
                  rank: 4,
                  error: "Dire qu'on postule partout 'au cas où'",
                  consequence: "Montre un manque de motivation spécifique"
                },
                {
                  rank: 5,
                  error: "Avoir un téléphone qui sonne pendant l'entretien",
                  consequence: "Distraction majeure et manque de professionnalisme"
                },
                {
                  rank: 6,
                  error: "Prétendre que l'argent ne compte pas du tout",
                  consequence: "Naïveté et déconnexion de la réalité business"
                },
                {
                  rank: 7,
                  error: "Ne poser aucune question au jury",
                  consequence: "Manque d'intérêt et de curiosité apparent"
                },
                {
                  rank: 8,
                  error: "Adopter une posture trop décontractée",
                  consequence: "Manque de respect du cadre formel"
                },
                {
                  rank: 9,
                  error: "Répondre 'je ne sais pas' sans réfléchir",
                  consequence: "Manque d'effort et de réactivité"
                },
                {
                  rank: 10,
                  error: "Contredire agressivement le jury",
                  consequence: "Conflit et manque d'intelligence relationnelle"
                }
              ].map((item) => (
                <div key={item.rank} className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 flex items-start gap-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.rank}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-red-800 mb-2">{item.error}</h5>
                    <p className="text-gray-700 text-sm">{item.consequence}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Situations spécifiques à éviter */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Shield className="w-8 h-8" />
              Situations pièges et comment les éviter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold text-yellow-800 mb-3">⚠️ Piège : "Parlez-moi de vous"</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-700 mb-2">❌ Erreurs courantes</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Réciter son CV chronologiquement</li>
                      <li>• Parler de sa vie privée/familiale</li>
                      <li>• Être trop long (plus de 3 minutes)</li>
                      <li>• Manquer de structure claire</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">✅ Bonne approche</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Structurer : parcours → projet → motivation école</li>
                      <li>• Mettre en avant les expériences clés</li>
                      <li>• Rester synthétique (2-3 minutes max)</li>
                      <li>• Créer des ponts vers ses qualités</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold text-yellow-800 mb-3">⚠️ Piège : Questions sur l'actualité</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-700 mb-2">❌ Erreurs courantes</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• "Je ne suis pas l'actualité"</li>
                      <li>• Positions politiques tranchées</li>
                      <li>• Informations erronées ou datées</li>
                      <li>• Analyse trop superficielle</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">✅ Bonne approche</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Rester factuel et nuancé</li>
                      <li>• Montrer sa capacité d'analyse</li>
                      <li>• Faire des liens avec le business</li>
                      <li>• Reconnaître les limites de son analyse</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold text-yellow-800 mb-3">⚠️ Piège : "Avez-vous des questions ?"</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-700 mb-2">❌ Erreurs courantes</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• "Non, tout était très clair"</li>
                      <li>• Questions sur les notes de frais</li>
                      <li>• "Quelles sont mes chances ?"</li>
                      <li>• Questions trouvables sur Internet</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">✅ Bonne approche</h5>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Questions sur les projets innovants</li>
                      <li>• Évolution pédagogique de l'école</li>
                      <li>• Conseils pour réussir la première année</li>
                      <li>• Spécificités qui différencient l'école</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan d'action pour éviter les erreurs */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <CheckCircle className="w-8 h-8" />
              Plan d'action anti-erreurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">📚 Préparation (2-3 semaines avant)</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Recherche approfondie sur l'école
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Clarification du projet professionnel
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Préparation d'exemples concrets
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Suivi de l'actualité ciblée
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">🎭 Entraînement (1 semaine avant)</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Simulations avec proches
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Enregistrement vidéo/audio
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Travail de l'expression orale
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Préparation de questions au jury
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">⚡ Jour J (pendant l'entretien)</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Arriver 15 min en avance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Écouter attentivement les questions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Prendre 2-3 secondes pour réfléchir
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Rester positif jusqu'à la fin
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
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Évitez tous ces pièges avec notre coaching</h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Nos simulations d'entretien vous permettent d'identifier et corriger vos erreurs avant le jour J.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/methodologie/entretiens-personnalite">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Voir toutes les méthodologies
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Simulation d'entretien
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

export default ErreursEviterPage;
