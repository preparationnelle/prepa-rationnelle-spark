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
  Heart,
  Mic
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
      id: 'languages-unified',
      title: 'Générateur Langues',
      description: 'Générez des paragraphes ou corrigez vos thèmes avec IA',
      icon: <Languages className="h-8 w-8" />,
      color: 'bg-purple-500',
      badge: 'Nouveau',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/languages-unified'
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
      id: 'orals-unified',
      title: 'Générateur Oraux',
      description: 'Générez vos réponses orales ou entraînez-vous avec des questions types',
      icon: <Mic className="h-8 w-8" />,
      color: 'bg-purple-500',
      badge: 'IA',
      badgeColor: 'bg-black text-white',
      link: '/generator/orals-unified'
    },
    {
      id: 'prepa-chatbot',
      title: 'Chat-bot prépa',
      description: 'Conseils méthode, motivation & bien-être pour ta prépa',
      icon: <Heart className="h-8 w-8" />,
      color: 'bg-pink-500',
      badge: 'IA Coach',
      badgeColor: 'bg-orange-500 text-white',
      link: '/generator/prepa-chatbot'
    },
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
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-[#F36C00]" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Générateurs <span className="text-[#F36C00]">IA</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos outils d'intelligence artificielle spécialisés qui automatisent votre préparation 
            et vous font gagner des heures de travail.
          </p>
        </div>

        {/* Main Generators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-16">
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





        {/* Footer CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-8">Cliquez sur une automatisation pour commencer !</p>
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;
