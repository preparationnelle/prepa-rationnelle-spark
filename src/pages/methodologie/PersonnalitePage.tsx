import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, CheckCircle, AlertCircle, Lightbulb, Users, Star, Brain } from 'lucide-react';

const PersonnalitePage = () => {
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
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-black">Questions </span>
            <span className="text-blue-600">Personnalité</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez l'art de répondre aux questions personnelles en révélant vos qualités et votre authenticité de manière stratégique.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Pourquoi les questions de personnalité ?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Les questions de personnalité permettent au jury d'évaluer votre maturité, votre capacité d'introspection 
                  et votre adéquation avec les valeurs de l'école. Elles révèlent votre intelligence émotionnelle et votre 
                  potentiel de leadership.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types de questions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Brain className="w-8 h-8" />
              Catégories de questions personnelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  Qualités et défauts
                </h4>
                <p className="text-gray-700 mb-3">Questions sur vos forces et faiblesses personnelles.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Quelles sont vos 3 principales qualités ?"</li>
                  <li>• "Quel est votre principal défaut ?"</li>
                  <li>• "Comment vos amis vous décriraient-ils ?"</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  Expériences marquantes
                </h4>
                <p className="text-gray-700 mb-3">Questions sur vos réussites et échecs personnels.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Racontez-moi un échec dont vous êtes fier"</li>
                  <li>• "Quelle est votre plus grande réussite ?"</li>
                  <li>• "Décrivez un moment de leadership"</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  Valeurs et motivations
                </h4>
                <p className="text-gray-700 mb-3">Questions sur ce qui vous anime profondément.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Quelles sont vos valeurs essentielles ?"</li>
                  <li>• "Qu'est-ce qui vous motive au quotidien ?"</li>
                  <li>• "Quel est votre modèle de réussite ?"</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                  Situations hypothétiques
                </h4>
                <p className="text-gray-700 mb-3">Questions sur votre réaction face à des dilemmes.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Comment gérez-vous le stress ?"</li>
                  <li>• "Que feriez-vous face à un conflit ?"</li>
                  <li>• "Comment prenez-vous vos décisions ?"</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Méthode STAR */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Star className="w-8 h-8" />
              Méthode STAR pour structurer vos réponses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-2">S</h4>
                <h5 className="font-semibold text-blue-700 mb-1">Situation</h5>
                <p className="text-sm text-gray-600">Contexte précis de l'expérience</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-2">T</h4>
                <h5 className="font-semibold text-blue-700 mb-1">Tâche</h5>
                <p className="text-sm text-gray-600">Votre rôle et responsabilités</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-2">A</h4>
                <h5 className="font-semibold text-blue-700 mb-1">Action</h5>
                <p className="text-sm text-gray-600">Ce que vous avez fait concrètement</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-2">R</h4>
                <h5 className="font-semibold text-blue-700 mb-1">Résultat</h5>
                <p className="text-sm text-gray-600">Impact et apprentissages</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-3">✅ Exemple avec STAR : "Parlez-moi d'un échec"</h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>S:</strong> "Lors de ma première année associative, j'étais responsable communication pour un événement de 200 personnes."</p>
                <p><strong>T:</strong> "Je devais gérer la promotion sur les réseaux sociaux et attirer un maximum d'étudiants."</p>
                <p><strong>A:</strong> "J'ai sous-estimé l'importance du timing et lancé la communication trop tard, seulement 1 semaine avant."</p>
                <p><strong>R:</strong> "Résultat : seulement 80 participants. Cet échec m'a appris l'importance de la planification et depuis, je prépare toujours mes projets avec 3 semaines d'avance minimum."</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Qualités les plus recherchées */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Users className="w-8 h-8" />
              Qualités les plus valorisées en école de commerce
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">🎯 Leadership</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Capacité à fédérer
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Prise d'initiative
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Vision stratégique
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Charisme
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">🤝 Relations humaines</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Intelligence émotionnelle
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Empathie
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Travail en équipe
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Communication
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">⚡ Adaptabilité</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Résilience
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Créativité
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Curiosité intellectuelle
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Ouverture d'esprit
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gestion des défauts */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <AlertCircle className="w-8 h-8" />
              Comment parler de vos défauts intelligemment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700">✅ Défauts "acceptables"</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="bg-green-50 p-3 rounded">
                    <strong>Perfectionnisme :</strong> "Je peux parfois être trop perfectionniste, ce qui me fait perdre du temps sur des détails."
                  </li>
                  <li className="bg-green-50 p-3 rounded">
                    <strong>Impatience :</strong> "Je suis parfois impatient quand les projets n'avancent pas assez vite à mon goût."
                  </li>
                  <li className="bg-green-50 p-3 rounded">
                    <strong>Autonomie excessive :</strong> "J'ai tendance à vouloir tout faire moi-même plutôt que de déléguer."
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-red-700">❌ Défauts à éviter</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="bg-red-50 p-3 rounded">
                    <strong>Paresse :</strong> Incompatible avec l'exigence des études
                  </li>
                  <li className="bg-red-50 p-3 rounded">
                    <strong>Malhonnêteté :</strong> Valeur fondamentale en business
                  </li>
                  <li className="bg-red-50 p-3 rounded">
                    <strong>Mauvaise communication :</strong> Essentiel en management
                  </li>
                  <li className="bg-red-50 p-3 rounded">
                    <strong>Manque d'ambition :</strong> Contraire aux attentes
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-blue-800 mb-3">💡 Structure pour parler d'un défaut</h4>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1. Reconnaître le défaut</strong> avec sincérité</li>
                <li><strong>2. Donner un exemple concret</strong> de situation</li>
                <li><strong>3. Expliquer les conséquences</strong> que cela a eues</li>
                <li><strong>4. Présenter vos actions</strong> pour vous améliorer</li>
                <li><strong>5. Montrer les progrès</strong> déjà réalisés</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Questions pièges */}
        <Card className="mb-12 border-2 border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-orange-800">
              <AlertCircle className="w-8 h-8" />
              Questions pièges fréquentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-1 gap-6">
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">"Êtes-vous plutôt chef ou exécutant ?"</h4>
                  <p className="text-gray-700"><strong>Piège :</strong> Répondre "chef" paraît prétentieux, "exécutant" manque d'ambition.</p>
                  <p className="text-green-700"><strong>Réponse :</strong> "Je suis à l'aise dans les deux rôles selon le contexte. Quand j'ai l'expérience, j'aime prendre des responsabilités de leadership. Quand je découvre un domaine, je préfère d'abord bien comprendre en tant qu'exécutant."</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">"Que pensez-vous de l'argent ?"</h4>
                  <p className="text-gray-700"><strong>Piège :</strong> Dire que c'est important paraît vénale, dire que ce n'est pas important paraît naïf.</p>
                  <p className="text-green-700"><strong>Réponse :</strong> "L'argent est un moyen, pas une fin. Il représente la reconnaissance du travail accompli et permet la liberté de choix. Mais ce qui me motive vraiment, c'est l'impact de mon travail et l'épanouissement personnel."</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-800 mb-2">"Pourquoi vous et pas un autre ?"</h4>
                  <p className="text-gray-700"><strong>Piège :</strong> Dénigrer les autres ou paraître arrogant.</p>
                  <p className="text-green-700"><strong>Réponse :</strong> "Je ne connais pas les autres candidats et je respecte leurs qualités. Ce que je peux vous dire, c'est que j'apporte une combinaison unique d'expériences [préciser], une motivation authentique pour [votre projet], et une capacité démontrée à [exemple concret]."</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils pratiques */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Lightbulb className="w-8 h-8" />
              Conseils pratiques pour exceller
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">🎯 Préparation</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-bold mt-1">1</span>
                    Listez 5-6 expériences marquantes variées
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-bold mt-1">2</span>
                    Préparez des exemples pour chaque qualité
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-bold mt-1">3</span>
                    Identifiez vos valeurs fondamentales
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-xs font-bold mt-1">4</span>
                    Travaillez votre introspection
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">💬 Communication</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-600 rounded-full px-2 py-1 text-xs font-bold mt-1">1</span>
                    Soyez authentique et sincère
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-600 rounded-full px-2 py-1 text-xs font-bold mt-1">2</span>
                    Utilisez des exemples concrets
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-600 rounded-full px-2 py-1 text-xs font-bold mt-1">3</span>
                    Montrez votre évolution personnelle
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-600 rounded-full px-2 py-1 text-xs font-bold mt-1">4</span>
                    Gardez un ton positif
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
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Prêt à révéler votre personnalité ?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Travaillez vos réponses aux questions personnelles avec nos coachs expérimentés.
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

export default PersonnalitePage;
