import React, { useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Languages,
  Zap,
  BookOpen,
  Globe,
  Heart,
  Mic,
  Library,
  FileText,
  Brain,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";

const GeneratorPage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Générateurs principaux
  const mainGenerators = [
    {
      id: 'languages-unified',
      title: 'Générateur Langues',
      description: 'Générez et corrigez vos textes en langues étrangères - Notre automatisation la plus utilisée',
      icon: <Languages className="h-10 w-10" />,
      features: [
        'Correction automatique',
        'Génération de paragraphes',
        'Thèmes corrigés'
      ],
      link: '/generator/languages-unified',
      badge: 'Le plus utilisé'
    },
    {
      id: 'flashcards',
      title: 'Générateur de Flashcards',
      description: 'Créez des flashcards personnalisées pour réviser efficacement',
      icon: <Brain className="h-10 w-10" />,
      features: [
        'Flashcards personnalisées',
        'Révision intelligente',
        'Suivi des progrès'
      ],
      link: '/generator/flashcards'
    },
    {
      id: 'theme-grammar',
      title: 'Thème Grammatical',
      description: 'Entraînez-vous au thème grammatical avec correction IA',
      icon: <Languages className="h-10 w-10" />,
      features: [
        'Correction automatique IA',
        'Phrases spécialisées',
        'Feedback détaillé'
      ],
      link: '/generator/theme-grammar'
    },
    {
      id: 'paragraph',
      title: 'Générateur de Paragraphes',
      description: 'Générez des paragraphes argumentatifs en langues',
      icon: <FileText className="h-10 w-10" />,
      features: [
        'Anglais, Allemand, Espagnol',
        'Basé sur articles de presse',
        'Points-clés extraits'
      ],
      link: '/generator/paragraph'
    },
    {
      id: 'geopolitics-unified',
      title: 'Générateur Géopo',
      description: 'Générez des études ou des fiches de géopolitique automatiquement',
      icon: <Globe className="h-10 w-10" />,
      features: [
        'Études géopolitiques',
        'Fiches automatiques',
        'Analyse stratégique',
        'Génération de paradoxes',
        'Évaluation de problématiques',
        'Note détaillée sur 25'
      ],
      link: '/generator/geopolitics-unified'
    },
    {
      id: 'culture-generale',
      title: 'Générateur Culture Générale',
      description: 'Thèmes, problématiques, plans et rédaction de paragraphes',
      icon: <Library className="h-10 w-10" />,
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
      icon: <Mic className="h-10 w-10" />,
      features: [
        'Questions types concours',
        'Réponses générées',
        'Entraînement oral'
      ],
      link: '/generator/orals-unified'
    },
    {
      id: 'math-generator',
      title: 'Générateur Maths',
      description: 'Théorèmes du programme Maths Approfondies avec réponses en LaTeX',
      icon: <Calculator className="h-10 w-10" />,
      features: [
        'Programme Maths Approfondies 1ère/2ème année',
        'Théorèmes complets avec hypothèses',
        'Exemples détaillés',
        'Formules en LaTeX'
      ],
      link: '/generator/math'
    },
    {
      id: 'prepa-chatbot',
      title: 'Chat-bot prépa',
      description: 'Conseils méthode, motivation & bien-être pour ta prépa',
      icon: <Heart className="h-10 w-10" />,
      features: [
        'Conseils méthodologiques',
        'Motivation quotidienne',
        'Bien-être prépa'
      ],
      link: '/generator/prepa-chatbot'
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up, .fade-in, .scale-in');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
      // Force l'animation pour les éléments déjà visibles
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animate-in');
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);





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
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-5 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-400 rounded-full opacity-5 blur-3xl animate-float-delayed"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-300 rounded-full opacity-5 blur-3xl animate-float-slow"></div>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header Hero Section */}
        <div className="text-center mb-16">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-black">Générateurs </span>
            <span className="text-blue-600">IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto whitespace-nowrap">
            Découvrez nos outils IA pour gagner du temps en prépa
          </p>
        </div>

        {/* Modules principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {mainGenerators.map((generator, index) => (
            <Link
              key={generator.id}
              to={generator.link}
              className="fade-in-up bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-300 hover:bg-orange-50 transform"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                {generator.badge && (
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {generator.badge}
                    </span>
                  </div>
                )}
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300">
                  <div className="text-orange-600 transition-colors">
                    {generator.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-orange-800 transition-colors">
                  {generator.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {generator.description}
                </p>
                <div className="space-y-1 text-xs w-full mb-4">
                  {generator.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-orange-600 transition-colors">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg rounded-lg">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Styles pour les animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(15px) translateX(15px);
          }
        }

        .fade-in-up, .scale-in {
          opacity: 0;
        }

        .fade-in-up.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scale-in.animate-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default GeneratorPage;
