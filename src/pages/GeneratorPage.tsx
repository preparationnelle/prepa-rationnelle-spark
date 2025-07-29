import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Languages, 
  Zap, 
  BookOpen, 
  Globe, 
  Users, 
  Calculator,
  Sparkles,
  ArrowRight,
  MessageSquare,
  User,
  ExternalLink,
  TrendingUp,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const GeneratorPage: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Générateurs principaux
  const mainGenerators = [
    {
      id: 'flashcards',
      title: 'Générateur de Flashcards',
      description: 'Créez des flashcards personnalisées pour réviser efficacement',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'bg-blue-500',
      badge: 'Populaire',
      badgeColor: 'bg-black text-white',
      link: '/generator/flashcards'
    },
    {
      id: 'python-exercises',
      title: 'Exercices Python',
      description: 'Générez des exercices pratiques Python avec solutions',
      icon: <Code className="h-8 w-8" />,
      color: 'bg-green-500',
      badge: 'Nouveau',
      badgeColor: 'bg-black text-white',
      link: '/python-exercices'
    },
    {
      id: 'theme-grammar',
      title: 'Thème Grammatical',
      description: 'Générateur et correcteur de thèmes de traduction',
      icon: <Languages className="h-8 w-8" />,
      color: 'bg-purple-500',
      badge: 'IA',
      badgeColor: 'bg-black text-white',
      link: '/generator/theme-grammar'
    },
    {
      id: 'geopolitics-unified',
      title: 'Générateur Géopo',
      description: 'Générez des études ou des fiches de géopolitique automatiquement',
      icon: <Globe className="h-8 w-8" />,
      color: 'bg-orange-500',
      badge: 'Nouveau',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/geopolitics-unified'
    },
    {
      id: 'math-assistant',
      title: 'Assistant Maths',
      description: 'Obtenez de l\'aide en mathématiques avec IA',
      icon: <Calculator className="h-8 w-8" />,
      color: 'bg-red-500',
      badge: 'IA',
      badgeColor: 'bg-black text-white',
      link: '/dashboard'
    }
  ];

  // Outils pour les entretiens de personnalité
  const interviewTools = [
    {
      id: 'interview-answer',
      title: 'Réponse d\'entretien',
      description: 'Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté.',
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badge: 'IA',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/answer'
    },
    {
      id: 'emlyon-questions',
      title: 'Questions EM Lyon',
      description: 'Questions aléatoires pour l\'entretien \'Flash\' avec cartes thématiques.',
      icon: <Sparkles className="h-6 w-6" />,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badge: 'Interactif',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/emlyon'
    },
    {
      id: 'edhec-words',
      title: 'Générateur de mots EDHEC',
      description: 'Générateur de mots aléatoires pour votre présentation EDHEC.',
      icon: <ExternalLink className="h-6 w-6" />,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badge: 'Rapide',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/edhec'
    },
    {
      id: 'school-profile',
      title: 'Fiche école personnalisée',
      description: 'Automatise la recherche des infos-clés pour ton entretien : valeurs, assos, doubles diplômes, actu, etc.',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badge: 'Nouveau',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/school-profile'
    },
    {
      id: 'prepa-chatbot',
      title: 'Chatbot prépa',
      description: 'Conseils motivation, méthode & bien-être. Ton assistant IA inspiré par Major-Prépa & Mister Prépa.',
      icon: <Heart className="h-6 w-6" />,
      color: 'bg-pink-100',
      iconColor: 'text-pink-600',
      badge: 'IA Coach',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/prepa-chatbot'
    }
  ];

  // Outils pour les langues
  const languageTools = [
    {
      id: 'language-paragraph',
      title: 'Paragraphe Langues',
      description: 'Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé.',
      icon: <Languages className="h-6 w-6" />,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badge: 'Nouveau',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/languages'
    },
    {
      id: 'theme-grammar-2',
      title: 'Thème Grammatical',
      description: 'Générateur et correcteur de thèmes de traduction : notation détaillée instantanée.',
      icon: <Languages className="h-6 w-6" />,
      color: 'bg-orange-100',
      iconColor: 'text-orange-600',
      badge: 'Nouveau',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/theme-grammar'
    }
  ];

  const handleGeneratorClick = (generator: any) => {
    // Seuls les générateurs Premium nécessitent une connexion
    if (!currentUser && generator.badge === 'Premium') {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour accéder aux générateurs Premium.",
        variant: "destructive",
      });
      return;
    }
    
    navigate(generator.link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-[#F36C00]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Générateurs <span className="text-[#F36C00]">IA</span>
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos outils d'intelligence artificielle spécialisés qui automatisent votre préparation 
            et vous font gagner des heures de travail.
          </p>
        </div>

        {/* Main Generators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {mainGenerators.map((generator) => (
            <Card 
              key={generator.id} 
              className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 bg-white cursor-pointer"
              onClick={() => handleGeneratorClick(generator)}
            >
              <CardHeader className="pb-4 relative">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-16 h-16 ${generator.color} rounded-full flex items-center justify-center text-white`}>
                    {generator.icon}
                  </div>
                  <Badge className={`text-xs ${generator.badgeColor} px-2 py-1 rounded`}>
                    {generator.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-[#F36C00] transition-colors">
                  {generator.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {generator.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#F36C00] font-medium group-hover:underline">
                    Essayer maintenant
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#F36C00] group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section Entretiens de Personnalité */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-8 mb-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-8 w-8" />
              <div>
                <h2 className="text-3xl font-bold">Outils pour les entretiens de personnalité</h2>
                <p className="text-orange-100 mt-2">Générateurs spécialisés pour réussir vos entretiens avec storytelling et préparation ciblée</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviewTools.map((tool) => (
              <Card 
                key={tool.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                onClick={() => handleGeneratorClick(tool)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                      <div className={tool.iconColor}>
                        {tool.icon}
                      </div>
                    </div>
                    <Badge className={`text-xs ${tool.badgeColor} px-2 py-1 rounded`}>
                      {tool.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition-colors">
                    {tool.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {tool.description}
                  </p>
                  
                  <Button className="w-full bg-[#F36C00] hover:bg-[#e66200] text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Accéder à l'outil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Langues */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl p-8 mb-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Languages className="h-8 w-8" />
              <div>
                <h2 className="text-3xl font-bold">Langues</h2>
                <p className="text-purple-100 mt-2">Outils pour améliorer vos compétences linguistiques et réussir les épreuves de langues</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languageTools.map((tool) => (
              <Card 
                key={tool.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                onClick={() => handleGeneratorClick(tool)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                      <div className={tool.iconColor}>
                        {tool.icon}
                      </div>
                    </div>
                    <Badge className={`text-xs ${tool.badgeColor} px-2 py-1 rounded`}>
                      {tool.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    {tool.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {tool.description}
                  </p>
                  
                  <Button className="w-full bg-[#F36C00] hover:bg-[#e66200] text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Accéder à l'outil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-8">Cliquez sur une automatisation pour commencer !</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;
