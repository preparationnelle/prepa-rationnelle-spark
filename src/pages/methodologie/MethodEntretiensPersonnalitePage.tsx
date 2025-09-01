import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';
import { SchoolCard } from '@/components/SchoolCard';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { Bot, Users, GraduationCap, Puzzle, HelpCircle, BookOpen, Target, Brain, FileText, MessageSquare, School, Heart, CheckCircle, AlertTriangle, HandHeart, Presentation } from 'lucide-react';
const MethodEntretiensPersonnalitePage = () => {
  const {
    trackPageVisit
  } = useProgress();
  useEffect(() => {
    trackPageVisit('method');
  }, [trackPageVisit]);
  const schools = [{
    name: "ESSEC Business School",
    duration: "Entretien de 30-45 minutes, coefficient 10.",
    feature: "Format approfondi avec mise en situation initiale.",
    link: "/essec"
  }, {
    name: "ESCP Business School",
    duration: "Entretien de 30 minutes, coefficient 12.",
    feature: "Entretien structuré autour d'un questionnaire préalable.",
    link: "/escp"
  }, {
    name: "EDHEC Business School",
    duration: "Entretien de 1h30, coefficient 15.",
    feature: "Format tripartite avec présentation, travail de groupe et entretien.",
    link: "/edhec"
  }, {
    name: "EM Lyon Business School",
    duration: "Entretien de 25 minutes, coefficient 9.",
    feature: "Format ludique avec cartes thématiques et présentation en 1 minute.",
    link: "/emlyon"
  }, {
    name: "SKEMA Business School",
    duration: "Entretien de 25 minutes, coefficient 20.",
    feature: "CV fictif à 10 ans.",
    link: "/skema"
  }, {
    name: "Audencia Business School",
    duration: "Entretien de 30 minutes, coefficient 10.",
    feature: "Forte dimension responsabilité sociétale avec partie en anglais.",
    link: "/audencia"
  }, {
    name: "Grenoble École de Management",
    duration: "Entretien de 30 minutes, coefficient 10.",
    feature: "Format original avec entretien inversé.",
    link: "/gem"
  }, {
    name: "KEDGE Business School",
    duration: "Entretien de 30 minutes, coefficient 14.",
    feature: "Approche 'Grow by Doing' et questionnaire 'maison'.",
    link: "/kedge"
  }, {
    name: "NEOMA Business School",
    duration: "Entretien de 30 minutes, coefficient 12.",
    feature: "Format structuré autour de la 'réussite responsable'.",
    link: "/neoma"
  }];
  return <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles only */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-black">Entretiens de </span>
              <span className="text-blue-600">Personnalité</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto leading-relaxed">
              Toutes les ressources pour réussir vos entretiens de personnalité : méthodologie, outils de préparation, 
              et fiches écoles détaillées.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <div className="text-3xl font-bold text-blue-600 group-hover:text-orange-600 transition-colors duration-300 mb-2">9</div>
                <div className="text-sm text-gray-600 group-hover:text-orange-700 transition-colors duration-300">Écoles détaillées</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <div className="text-3xl font-bold text-blue-600 group-hover:text-orange-600 transition-colors duration-300 mb-2">8</div>
                <div className="text-sm text-gray-600 group-hover:text-orange-700 transition-colors duration-300">Modules méthodologie</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-2xl hover:scale-105 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <div className="text-3xl font-bold text-blue-600 group-hover:text-orange-600 transition-colors duration-300 mb-2">∞</div>
                <div className="text-sm text-gray-600 group-hover:text-orange-700 transition-colors duration-300">Questions générées IA</div>
              </div>
            </div>
          </div>

          {/* Méthodologie Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-black">Méthodologie </span>
                <span className="text-blue-600">Générale</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Maîtrisez les techniques essentielles pour briller lors de vos entretiens
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <Link to="/methodologie/storytelling" className="flex flex-col items-center gap-2 text-center">
                    <MessageSquare className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <span className="font-medium text-blue-700 group-hover:text-orange-800 transition-colors duration-300">Storytelling</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <Link to="/methodologie/motivation-ecole" className="flex flex-col items-center gap-2 text-center">
                    <School className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <span className="font-medium text-blue-700 group-hover:text-orange-800 transition-colors duration-300">Motivation école</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <Link to="/methodologie/projet-professionnel" className="flex flex-col items-center gap-2 text-center">
                    <Target className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <span className="font-medium text-blue-700 group-hover:text-orange-800 transition-colors duration-300">Projet professionnel</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <Link to="/methodologie/personnalite" className="flex flex-col items-center gap-2 text-center">
                    <Heart className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <span className="font-medium text-blue-700 group-hover:text-orange-800 transition-colors duration-300">Questions personnalité</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <Link to="/methodologie/finir-entretien" className="flex flex-col items-center gap-2 text-center">
                    <CheckCircle className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <span className="font-medium text-blue-700 group-hover:text-orange-800 transition-colors duration-300">Finir un entretien</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <Link to="/methodologie/erreur-entretien" className="flex flex-col items-center gap-2 text-center">
                    <AlertTriangle className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <span className="font-medium text-blue-700 group-hover:text-orange-800 transition-colors duration-300">Erreurs à éviter</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <Link to="/methodologie/tendre-perches" className="flex flex-col items-center gap-2 text-center">
                    <HandHeart className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <span className="font-medium text-blue-700 group-hover:text-orange-800 transition-colors duration-300">Tendre des perches</span>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardContent className="p-4">
                  <Link to="/methodologie/pitch-intro" className="flex flex-col items-center gap-2 text-center">
                    <Presentation className="h-8 w-8 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    <span className="font-medium text-blue-700 group-hover:text-orange-800 transition-colors duration-300">Pitch d'introduction</span>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Formats Spécialisés */}
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-black">Formats </span>
                <span className="text-blue-600">Spécialisés</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Guides détaillés pour les formats d'entretien uniques de certaines écoles
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-blue-700 group-hover:text-orange-800 transition-colors duration-300">
                    <Users className="h-5 w-5 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    Entretien inversé GEM
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Guide complet pour réussir cette partie unique de l'oral de GEM où vous menez l'entretien.
                  </p>
                  <Link to="/entretien-inverse-gem">
                    <Button variant="outline" className="w-full">Voir le guide</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-blue-700 group-hover:text-orange-800 transition-colors duration-300">
                    <FileText className="h-5 w-5 text-blue-600 group-hover:text-orange-600 transition-colors duration-300" />
                    CV Projectif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Tout savoir pour créer un CV projectif convaincant pour SKEMA et autres écoles.
                  </p>
                  <Link to="/cv-projectif">
                    <Button variant="outline" className="w-full">Voir le guide</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Outils de Préparation */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-black">Outils </span>
                <span className="text-blue-600">IA</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Préparez-vous avec nos générateurs intelligents personnalisés pour chaque école
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bot className="h-5 w-5" />
                    Générateur de Réponses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Générez des réponses structurées pour toutes vos questions d'entretien avec l'IA.
                  </p>
                  <Link to="/generator/answer">
                    <Button variant="outline" className="w-full">Utiliser le générateur</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5" />
                    Questions EM Lyon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Entraînez-vous avec des questions aléatoires format EM Lyon avec cartes thématiques.
                  </p>
                  <Link to="/generator/emlyon">
                    <Button variant="outline" className="w-full">Questions aléatoires</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Puzzle className="h-5 w-5" />
                    Mots EDHEC
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Générateur de mots aléatoires pour préparer votre présentation EDHEC.
                  </p>
                  <Link to="/generator/edhec">
                    <Button variant="outline" className="w-full">Mots aléatoires</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fiches Écoles */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-black">Fiches </span>
                <span className="text-blue-600">Écoles</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez les spécificités de chaque école et leurs attentes pour les entretiens
              </p>
            </div>
            

            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.map((school, index) => <SchoolCard key={index} name={school.name} duration={school.duration} feature={school.feature} link={school.link} />)}
            </div>
          </div>

          {/* Podcast Section */}
          <PodcastSection />

          {/* Testimonials Section - Moved after podcast */}
          <TestimonialsSection />

          {/* Navigation */}
          <div className="mt-16 flex justify-center gap-4">
            <Link to="/methodologie">
              
            </Link>
            <Link to="/nos-offres">
              <Button>Découvrir nos offres</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default MethodEntretiensPersonnalitePage;