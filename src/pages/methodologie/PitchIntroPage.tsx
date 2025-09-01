import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Presentation, CheckCircle, AlertCircle, Lightbulb, Clock, Target, Star } from 'lucide-react';

const PitchIntroPage = () => {
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
            <Presentation className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-black">Pitch </span>
            <span className="text-blue-600">d'Introduction</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Créez une première impression mémorable avec un pitch d'introduction percutant qui capte l'attention du jury dès les premières secondes.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">L'importance cruciale des premières minutes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Le pitch d'introduction est votre première impression. En 2-3 minutes, vous devez présenter qui vous êtes, 
                  d'où vous venez et où vous allez de manière à marquer positivement les esprits. Un bon pitch donne le ton 
                  de tout l'entretien et crée un élan favorable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Structure du pitch */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Target className="w-8 h-8" />
              Structure PASS pour un pitch efficace
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">P</span>
                  Parcours (30 secondes)
                </h4>
                <p className="text-gray-700">
                  Présentez votre parcours académique en quelques mots, en mettant l'accent sur les choix marquants 
                  et les transitions importantes.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">A</span>
                  Atouts (60 secondes)
                </h4>
                <p className="text-gray-700">
                  Mettez en avant 2-3 expériences clés qui révèlent vos qualités principales : stage, projet, responsabilités, 
                  réalisations concrètes.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">S</span>
                  Spécificité (30 secondes)
                </h4>
                <p className="text-gray-700">
                  Révélez votre élément différenciant : une passion, une compétence rare, une expérience atypique 
                  qui vous rend unique.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">S</span>
                  Suite (30 secondes)
                </h4>
                <p className="text-gray-700">
                  Concluez par votre projet professionnel et le lien avec l'école, créant une transition naturelle 
                  vers la suite de l'entretien.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timing détaillé */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Clock className="w-8 h-8" />
              Chronométrage optimal : 2-3 minutes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-2">0-30s</h4>
                <h5 className="font-semibold text-blue-700 mb-1">Parcours</h5>
                <p className="text-sm text-gray-600">Bac, prépa, années marquantes</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-2">30s-1m30</h4>
                <h5 className="font-semibold text-blue-700 mb-1">Atouts</h5>
                <p className="text-sm text-gray-600">Expériences clés et qualités</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-2">1m30-2m</h4>
                <h5 className="font-semibold text-blue-700 mb-1">Spécificité</h5>
                <p className="text-sm text-gray-600">Élément différenciant unique</p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg text-center">
                <h4 className="font-bold text-blue-800 text-lg mb-2">2m-2m30</h4>
                <h5 className="font-semibold text-blue-700 mb-1">Suite</h5>
                <p className="text-sm text-gray-600">Projet et motivation école</p>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-800 mb-3">⏱️ Règles de timing</h4>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Minimum 1m30 :</strong> Sinon vous paraissez trop concis et peu développé</li>
                <li>• <strong>Maximum 3 minutes :</strong> Au-delà, vous monopolisez trop la parole</li>
                <li>• <strong>Optimal 2-2m30 :</strong> Temps parfait pour un contenu riche sans lassitude</li>
                <li>• <strong>Adaptabilité :</strong> Préparez des versions courte (1m30) et longue (3m)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Exemples de pitch réussis */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Star className="w-8 h-8" />
              Exemples de pitch d'introduction réussis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-800 mb-4">✅ Exemple 1 : Profil scientifique vers business</h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>[Parcours]</strong> "Bonjour, je suis Marie. Après un bac S, j'ai intégré une prépa ECE où j'ai découvert 
                  ma passion pour l'économie et la gestion, en complément de mes bases scientifiques."
                </p>
                <p>
                  <strong>[Atouts]</strong> "Cette double compétence m'a permis de décrocher un stage chez Capgemini Consulting 
                  où j'ai travaillé sur la transformation digitale d'une banque. En parallèle, j'ai créé une association 
                  de tutorat en mathématiques qui accompagne aujourd'hui 200 lycéens et m'a appris à manager une équipe de 15 bénévoles."
                </p>
                <p>
                  <strong>[Spécificité]</strong> "Ce qui me caractérise, c'est ma capacité à vulgariser des concepts complexes, 
                  que ce soit en maths avec mes élèves ou en tech avec les équipes business chez Capgemini."
                </p>
                <p>
                  <strong>[Suite]</strong> "Mon objectif est de devenir consultante en innovation, en utilisant mes compétences 
                  techniques pour accompagner les entreprises traditionnelles. C'est pourquoi votre école m'attire particulièrement 
                  avec son programme Innovation & Entrepreneurship."
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-800 mb-4">✅ Exemple 2 : Profil international</h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>[Parcours]</strong> "Bonjour, je suis Thomas. Franco-allemand, j'ai grandi entre Paris et Berlin 
                  avant d'intégrer une prépa ECE, attiré par l'ouverture internationale du programme."
                </p>
                <p>
                  <strong>[Atouts]</strong> "Mon stage chez BMW à Munich m'a permis de travailler sur l'expansion européenne 
                  de leurs modèles électriques. Cette expérience a confirmé ma passion pour les enjeux de mobilité durable. 
                  En parallèle, j'ai organisé un programme d'échange entre ma prépa et une école berlinoise, 
                  accueillant 30 étudiants allemands."
                </p>
                <p>
                  <strong>[Spécificité]</strong> "Ma spécificité réside dans ma compréhension fine des marchés européens 
                  et ma capacité à naviguer entre différentes cultures business, notamment française et allemande."
                </p>
                <p>
                  <strong>[Suite]</strong> "Je souhaite me spécialiser dans le conseil en stratégie internationale, 
                  particulièrement dans l'automobile et les nouvelles mobilités. Votre partenariat avec Singapour 
                  et vos cours en anglais correspondent parfaitement à cette ambition."
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-800 mb-4">✅ Exemple 3 : Profil reconversion</h4>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>[Parcours]</strong> "Bonjour, je suis Sarah. Après un Master en droit et trois ans comme juriste 
                  d'entreprise, j'ai pris la décision de me réorienter vers le business en intégrant une prépa ECG."
                </p>
                <p>
                  <strong>[Atouts]</strong> "Mon expérience juridique m'a donné une vision globale des enjeux d'entreprise 
                  et une rigueur dans l'analyse. Mon stage chez Deloitte en M&A m'a confirmé que ma place était plutôt 
                  côté business. J'ai aussi créé un blog juridique pour entrepreneurs qui compte 10 000 lecteurs mensuels."
                </p>
                <p>
                  <strong>[Spécificité]</strong> "Ma valeur ajoutée réside dans cette double compétence juridique-business 
                  et ma maturité professionnelle qui me permet d'appréhender les enjeux avec recul."
                </p>
                <p>
                  <strong>[Suite]</strong> "Mon objectif est le conseil en fusions-acquisitions où ma formation juridique 
                  sera un atout précieux. Le programme Corporate Finance de votre école et vos partenariats avec 
                  les grands cabinets correspondent exactement à mon projet."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs courantes */}
        <Card className="mb-12 border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-red-800">
              <AlertCircle className="w-8 h-8" />
              Erreurs fatales dans le pitch d'introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-red-700">❌ Erreurs de contenu</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>CV chronologique :</strong> "En 2020 j'ai fait ci, en 2021 j'ai fait ça..."
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Trop personnel :</strong> Parler de sa famille, ses hobbies, sa ville natale
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Pas d'originalité :</strong> Parcours banal sans élément différenciant
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Incohérence :</strong> Pitch déconnecté du projet professionnel
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-red-700">❌ Erreurs de forme</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Trop long :</strong> Plus de 4 minutes = monopolisation excessive
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Trop court :</strong> Moins d'1 minute = impression de manquer de contenu
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Pas de structure :</strong> Discours décousu sans fil conducteur
                  </li>
                  <li className="bg-white p-3 rounded border-l-4 border-red-400">
                    <strong>Récité :</strong> Ton mécanique qui trahit l'apprentissage par cœur
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils de préparation */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-blue-800">
              <Lightbulb className="w-8 h-8" />
              Méthode de préparation du pitch parfait
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">📝 Étape 1 : Écriture</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Listez vos expériences marquantes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Identifiez votre élément différenciant
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Rédigez selon la structure PASS
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Chronométrez et ajustez
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">🎭 Étape 2 : Répétition</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Répétez devant un miroir
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Enregistrez-vous en vidéo
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Testez avec vos proches
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Travaillez la gestuelle
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-800 mb-4">⚡ Étape 3 : Naturalisation</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Intériorisez sans réciter
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Préparez des variantes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Adaptez selon l'école
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Restez spontané
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
              Checklist du pitch d'introduction parfait
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">📋 Contenu validé</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Structure PASS respectée
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Timing entre 2 et 3 minutes
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Élément différenciant mis en avant
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Lien clair avec le projet professionnel
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Cohérence avec le CV
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-blue-700 text-lg">🎯 Présentation maîtrisée</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Ton naturel et enthousiaste
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Contact visuel maintenu
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Gestuelle appropriée
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Débit adapté et articulé
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    Conclusion qui ouvre sur la suite
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
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Perfectionnez votre pitch d'introduction</h3>
              <p className="text-gray-600 mb-6 max-w-2xl">
                Créez un pitch percutant qui marque les esprits dès les premières secondes avec notre accompagnement personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/methodologie/entretiens-personnalite">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Voir toutes les méthodologies
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Coaching pitch personnalisé
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

export default PitchIntroPage;
