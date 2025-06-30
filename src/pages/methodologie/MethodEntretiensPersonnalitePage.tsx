
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';
import { SchoolCard } from '@/components/SchoolCard';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PodcastSection } from '@/components/sections/PodcastSection';
import { 
  MessageSquare, 
  Bot, 
  Users, 
  GraduationCap, 
  Puzzle, 
  HelpCircle,
  BookOpen,
  Target,
  Brain,
  Calendar
} from 'lucide-react';

const MethodEntretiensPersonnalitePage = () => {
  const { trackPageVisit } = useProgress();
  
  useEffect(() => {
    trackPageVisit('method');
  }, [trackPageVisit]);

  const schools = [
    {
      name: "ESSEC Business School",
      duration: "Entretien de 30-45 minutes, coefficient 10.",
      feature: "Format approfondi avec mise en situation initiale.",
      link: "/essec"
    },
    {
      name: "ESCP Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Entretien structuré autour d'un questionnaire préalable.",
      link: "/escp"
    },
    {
      name: "EDHEC Business School",
      duration: "Entretien de 1h30, coefficient 15.",
      feature: "Format tripartite avec présentation, travail de groupe et entretien.",
      link: "/edhec"
    },
    {
      name: "EM Lyon Business School",
      duration: "Entretien de 25 minutes, coefficient 9.",
      feature: "Format ludique avec cartes thématiques et présentation en 1 minute.",
      link: "/emlyon"
    },
    {
      name: "SKEMA Business School",
      duration: "Entretien de 25 minutes, coefficient 20.",
      feature: "CV fictif à 10 ans.",
      link: "/skema"
    },
    {
      name: "Audencia Business School",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Forte dimension responsabilité sociétale avec partie en anglais.",
      link: "/audencia"
    },
    {
      name: "Grenoble École de Management",
      duration: "Entretien de 30 minutes, coefficient 10.",
      feature: "Format original avec entretien inversé.",
      link: "/gem"
    },
    {
      name: "KEDGE Business School",
      duration: "Entretien de 30 minutes, coefficient 14.",
      feature: "Approche 'Grow by Doing' et questionnaire 'maison'.",
      link: "/kedge"
    },
    {
      name: "NEOMA Business School",
      duration: "Entretien de 30 minutes, coefficient 12.",
      feature: "Format structuré autour de la 'réussite responsable'.",
      link: "/neoma"
    }
  ];

  return (
    <div className="min-h-screen bg-accent py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">
            <span className="gradient-text">Entretiens de Personnalité</span>
          </h1>
          
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto text-lg">
            Toutes les ressources pour réussir vos entretiens de personnalité : méthodologie, outils de préparation, 
            banque de questions et fiches écoles détaillées.
          </p>

          {/* Méthodologie Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <BookOpen className="h-7 w-7 text-primary" />
              Méthodologie
            </h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Méthode Personnalité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Apprenez à structurer vos réponses, présenter vos qualités et défauts avec des exemples concrets, 
                  et développer une introspection authentique qui impressionnera le jury.
                </p>
                <Link to="/methodes/personnalite">
                  <Button>Découvrir la méthodologie</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Outils de Préparation */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Brain className="h-7 w-7 text-primary" />
              Outils de Préparation IA
            </h2>
            
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

          {/* Banque de Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <MessageSquare className="h-7 w-7 text-primary" />
              Banque de Questions
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Questions par Catégories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Accédez à notre base complète de questions d'entretien organisées par thématiques : 
                  personnalité, motivation, projets, situations interpersonnelles et bien plus.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/questions">
                    <Button>Explorer les questions</Button>
                  </Link>
                  <Link to="/nos-offres">
                    <Button variant="outline">Découvrir nos offres détaillées</Button>
                  </Link>
                  <a href="https://calendly.com/prepa-rationnelle" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Faire le point sur ta situation
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fiches Écoles */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary" />
              Fiches Écoles
            </h2>
            
            <p className="text-gray-600 mb-8 text-center">
              Découvrez les spécificités de chaque école pour adapter votre préparation.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.map((school, index) => (
                <SchoolCard 
                  key={index}
                  name={school.name}
                  duration={school.duration}
                  feature={school.feature}
                  link={school.link}
                />
              ))}
            </div>
          </div>

          {/* Podcast Section */}
          <PodcastSection />

          {/* Testimonials Section - Moved after podcast */}
          <TestimonialsSection />

          {/* Navigation */}
          <div className="mt-16 flex justify-center gap-4">
            <Link to="/methodologie">
              <Button variant="outline">Retour à la méthodologie</Button>
            </Link>
            <Link to="/questions">
              <Button>Commencer l'entraînement</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodEntretiensPersonnalitePage;
