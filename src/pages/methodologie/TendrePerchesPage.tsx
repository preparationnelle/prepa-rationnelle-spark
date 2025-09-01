import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, HandHeart, CheckCircle, AlertCircle, Lightbulb, Target, MessageSquare, Users } from 'lucide-react';

const TendrePerchesPage = () => {
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
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <HandHeart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-black">Tendre des </span>
            <span className="text-blue-600">Perches</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez l'art subtil d'orienter la conversation vers vos points forts et de créer des opportunités pour valoriser votre profil.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Qu'est-ce que "tendre des perches" ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tendre des perches consiste à introduire subtilement dans vos réponses des éléments qui incitent le jury 
                  à vous poser des questions sur vos points forts. C'est une technique avancée qui vous permet de prendre 
                  un contrôle partiel de l'entretien et de mettre en avant vos meilleurs atouts.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principe de base */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Target className="w-8 h-8" />
              Le principe du "teasing" intelligent
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Mentionner sans développer
                </h4>
                <p className="text-gray-700">
                  Évoquez brièvement une expérience, un projet ou une compétence intéressante sans entrer dans les détails, 
                  créant ainsi la curiosité du jury.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Créer l'appel d'air
                </h4>
                <p className="text-gray-700">
                  Utilisez des formules qui donnent naturellement envie d'en savoir plus : "notamment", "par exemple", 
                  "entre autres", "particulièrement"...
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Rester naturel
                </h4>
                <p className="text-gray-700">
                  La perche doit s'intégrer naturellement dans votre discours. Elle ne doit jamais paraître forcée 
                  ou artificielle au risque de produire l'effet inverse.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                  Préparer la suite
                </h4>
                <p className="text-gray-700">
                  Ayez toujours une anecdote complète et valorisante prête à développer si le jury "mord à l'hameçon" 
                  et vous pose la question attendue.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types de perches */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <MessageSquare className="w-8 h-8" />
              Types de perches efficaces
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              
              {/* Perches d'expérience */}
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-4">🎯 Perches d'expérience</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-3">Exemples de formulations</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• "Lors de mon stage notamment chez [entreprise prestigieuse]..."</li>
                      <li>• "Cette expérience m'a particulièrement marqué..."</li>
                      <li>• "J'ai eu la chance de travailler sur un projet innovant..."</li>
                      <li>• "Une situation complexe que j'ai dû gérer..."</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-3">Questions espérées</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• "Pouvez-vous nous en dire plus sur ce stage ?"</li>
                      <li>• "Qu'est-ce qui vous a marqué exactement ?"</li>
                      <li>• "En quoi ce projet était-il innovant ?"</li>
                      <li>• "Comment avez-vous géré cette situation ?"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Perches de compétence */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800 mb-4">💡 Perches de compétence</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-3">Exemples de formulations</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• "Grâce à mes compétences en [domaine technique]..."</li>
                      <li>• "Mon expérience en leadership m'a aidé..."</li>
                      <li>• "Mes capacités d'analyse ont été déterminantes..."</li>
                      <li>• "Ma maîtrise de [langue/outil] s'est avérée utile..."</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-700 mb-3">Questions espérées</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• "Comment avez-vous développé ces compétences ?"</li>
                      <li>• "Donnez-nous un exemple de votre leadership"</li>
                      <li>• "Comment procédez-vous pour analyser ?"</li>
                      <li>• "À quel niveau maîtrisez-vous [compétence] ?"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Perches de projet */}
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-800 mb-4">🚀 Perches de projet</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-orange-700 mb-3">Exemples de formulations</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• "Dans le cadre de mon projet entrepreneurial..."</li>
                      <li>• "L'association que j'ai créée a permis de..."</li>
                      <li>• "Le défi que je me suis lancé consistait à..."</li>
                      <li>• "Mon initiative personnelle a abouti à..."</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-700 mb-3">Questions espérées</h5>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• "Parlez-nous de ce projet entrepreneurial"</li>
                      <li>• "Comment avez-vous créé cette association ?"</li>
                      <li>• "Quel était exactement ce défi ?"</li>
                      <li>• "Quels ont été les résultats de votre initiative ?"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exemples concrets */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Users className="w-8 h-8" />
              Exemples concrets de perches réussies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-4">✅ Exemple 1 : Question sur le parcours</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Question du jury :</h5>
                  <p className="text-gray-700 italic">"Présentez-nous votre parcours"</p>
                </div>
                <div>
                  <h5 className="font-semibold text-green-700 mb-2">Réponse avec perche :</h5>
                  <p className="text-gray-700">
                    "Après mon bac S, j'ai intégré une prépa ECE où j'ai découvert ma passion pour l'économie. 
                    En parallèle, j'ai lancé une <strong>association d'aide aux devoirs qui compte aujourd'hui 50 bénévoles</strong>, 
                    ce qui m'a appris beaucoup sur le management. Mon stage chez Deloitte m'a confirmé mon intérêt 
                    pour le conseil en stratégie..."
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">Question probable du jury :</h5>
                  <p className="text-gray-700 italic">"Comment avez-vous réussi à développer cette association jusqu'à 50 bénévoles ?"</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800 mb-4">✅ Exemple 2 : Question sur les motivations</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Question du jury :</h5>
                  <p className="text-gray-700 italic">"Pourquoi avoir choisi cette école ?"</p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">Réponse avec perche :</h5>
                  <p className="text-gray-700">
                    "Votre école correspond parfaitement à mon projet de créer une start-up dans la FinTech. 
                    L'incubateur et le <strong>programme d'entrepreneuriat que j'ai pu découvrir lors de ma rencontre avec un alumni</strong> 
                    m'ont convaincu. De plus, mon expérience en développement web me permettrait d'apporter 
                    une expertise technique unique..."
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">Question probable du jury :</h5>
                  <p className="text-gray-700 italic">"Vous avez des compétences en développement web ? Comment les avez-vous acquises ?"</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-800 mb-4">✅ Exemple 3 : Question sur les qualités</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Question du jury :</h5>
                  <p className="text-gray-700 italic">"Quelles sont vos principales qualités ?"</p>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-700 mb-2">Réponse avec perche :</h5>
                  <p className="text-gray-700">
                    "Je dirais d'abord ma persévérance, qui m'a notamment permis d'apprendre le mandarin en autodidacte 
                    et d'obtenir le HSK 4. Ensuite, ma capacité d'adaptation, <strong>particulièrement mise à l'épreuve lors 
                    de mon séjour humanitaire de 3 mois au Cambodge</strong>. Enfin, mon sens de l'initiative..."
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-orange-700 mb-2">Question probable du jury :</h5>
                  <p className="text-gray-700 italic">"Parlez-nous de cette expérience au Cambodge, qu'y avez-vous fait exactement ?"</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs à éviter */}
        <Card className="mb-12 border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-red-800">
              <AlertCircle className="w-8 h-8" />
              Pièges à éviter avec les perches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-red-700">❌ Perches trop évidentes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Trop direct :</strong> "D'ailleurs, j'aimerais vous parler de mon stage chez Google..."
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Trop insistant :</strong> "Ce qui est particulièrement intéressant dans mon parcours, c'est..."
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Trop répétitif :</strong> Utiliser "notamment" dans chaque réponse
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-red-700">❌ Perches non préparées</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Manque de contenu :</strong> Tendre une perche sans avoir d'histoire à raconter
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Incohérence :</strong> Perche qui ne colle pas avec le reste du discours
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Exagération :</strong> Survendre une expérience banale
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stratégie avancée */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Target className="w-8 h-8" />
              Stratégie avancée : La carte de perches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-4">🎯 Préparez votre arsenal de perches</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-blue-700 mb-3">1. Identifiez vos 5 meilleurs atouts</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Expérience la plus impressionnante</li>
                    <li>• Compétence rare ou technique</li>
                    <li>• Projet personnel abouti</li>
                    <li>• Qualité différenciante</li>
                    <li>• Réussite mesurable</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-3">2. Préparez les "amorces"</h5>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Une phrase d'accroche pour chaque atout</li>
                    <li>• L'histoire complète développée</li>
                    <li>• Les chiffres et résultats précis</li>
                    <li>• Le lien avec votre projet/l'école</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded border-l-4 border-blue-500">
                <h5 className="font-semibold text-blue-800 mb-2">💡 Conseil d'expert</h5>
                <p className="text-gray-700 text-sm">
                  Planifiez dans quel ordre utiliser vos perches selon l'évolution de l'entretien. 
                  Gardez votre meilleur atout pour la fin si vous sentez que vous devez marquer des points.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-blue-200 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Maîtrisez l'art des perches</h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Apprenez à diriger subtilement vos entretiens vers vos points forts avec nos techniques avancées.
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

export default TendrePerchesPage;
