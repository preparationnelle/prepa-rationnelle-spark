import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Languages,
  Zap,
  BookOpen,
  Globe,
  Heart,
  Mic,
  Library
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
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      hoverBorder: 'hover:border-blue-200',
      features: [
        'Flashcards personnalisées',
        'Révision intelligente',
        'Suivi des progrès'
      ],
      link: '/generator/flashcards'
    },
    {
      id: 'languages-unified',
      title: 'Générateur Langues',
      description: 'Générez des paragraphes ou corrigez vos thèmes avec IA',
      icon: <Languages className="h-8 w-8" />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      hoverBorder: 'hover:border-green-200',
      features: [
        'Correction automatique',
        'Génération de paragraphes',
        'Thèmes corrigés'
      ],
      link: '/generator/languages-unified'
    },
    {
      id: 'geopolitics-unified',
      title: 'Générateur Géopo',
      description: 'Générez des études ou des fiches de géopolitique automatiquement',
      icon: <Globe className="h-8 w-8" />,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      hoverBorder: 'hover:border-orange-200',
      features: [
        'Études géopolitiques',
        'Fiches automatiques',
        'Analyse stratégique'
      ],
      link: '/generator/geopolitics-unified'
    },
    {
      id: 'culture-generale',
      title: 'Générateur Culture Générale',
      description: 'Thèmes, problématiques, plans et rédaction de paragraphes',
      icon: <Library className="h-8 w-8" />,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      hoverBorder: 'hover:border-amber-200',
      features: [
        'Définition de thèmes',
        'Problématiques rapides',
        'Plans détaillés'
      ],
      link: '/generator/culture-generale'
    },
    {
      id: 'orals-unified',
      title: 'Générateur Oraux',
      description: 'Générez vos réponses orales ou entraînez-vous avec des questions types',
      icon: <Mic className="h-8 w-8" />,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      hoverBorder: 'hover:border-purple-200',
      features: [
        'Questions types concours',
        'Réponses générées',
        'Entraînement oral'
      ],
      link: '/generator/orals-unified'
    },
    {
      id: 'prepa-chatbot',
      title: 'Chat-bot prépa',
      description: 'Conseils méthode, motivation & bien-être pour ta prépa',
      icon: <Heart className="h-8 w-8" />,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      hoverBorder: 'hover:border-pink-200',
      features: [
        'Conseils méthodologiques',
        'Motivation quotidienne',
        'Bien-être prépa'
      ],
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
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Orange bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-orange-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-orange-100 rounded-full opacity-10 animate-pulse"></div>

      {/* Section Générateurs IA */}
      <section className="py-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-black">Générateurs </span>
              <span className="text-orange-600">IA</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos outils IA pour gagner du temps en prépa
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainGenerators.map((generator) => (
                <Link
                  key={generator.id}
                  to={generator.link}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-orange-200 hover:bg-orange-50 flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 transition-all duration-300">
                    <div className="text-orange-600">
                      {generator.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-orange-800 transition-colors duration-300">{generator.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{generator.description}</p>
                  <div className="space-y-2 text-sm w-full">
                    {generator.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-orange-600">
                        <span className="mr-3 text-lg">✓</span>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratorPage;
