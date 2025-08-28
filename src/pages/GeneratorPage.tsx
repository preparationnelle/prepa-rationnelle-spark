import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Languages,
  Zap,
  BookOpen,
  Globe,
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
    <div className="min-h-screen bg-white">
      {/* Section Générateurs IA */}
      <section className="pb-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="text-orange-600 font-bold">Générateurs IA</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
            Découvrez nos outils IA pour gagner du temps en prépa
          </p>

          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainGenerators.map((generator) => (
                <Link
                  key={generator.id}
                  to={generator.link}
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent ${generator.hoverBorder} flex flex-col items-center text-center group`}
                >
                  <div className={`w-16 h-16 ${generator.iconBg} rounded-full flex items-center justify-center mb-4 group-hover:bg-opacity-80 transition-colors`}>
                    <div className={generator.iconColor}>
                      {generator.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{generator.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{generator.description}</p>
                  <div className="space-y-1 text-xs text-left w-full">
                    {generator.features.map((feature, index) => (
                      <div key={index} className={`flex items-center ${generator.iconColor}`}>
                        <span className="mr-2">✓</span>
                        <span>{feature}</span>
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
