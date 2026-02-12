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
  Calculator,
  Sparkles,
  Target,
  TrendingUp,
  MessageCircle
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
      id: 'ai-chat-hub',
      title: 'AI Chat Hub',
      description: 'Accédez à tous nos assistants IA spécialisés (Prépa, Maths, Géopo) en un seul endroit',
      icon: <Target className="h-10 w-10" />,
      features: [
        'Tous les assistants réunis',
        'Chat fluide et rapide',
        'Support multi-matières'
      ],
      link: '/generator/hub',
      badge: 'Nouveau'
    },
    {
      id: 'languages-unified',
      title: 'Générateur Langues',
      description: 'Feedback instantané sur vos erreurs pour progresser rapidement',
      icon: <Languages className="h-10 w-10" />,
      features: [
        'Correction instantanée IA',
        'Analyse détaillée des erreurs',
        'Progression rapide garantie'
      ],
      link: '/generator/languages-unified',
      badge: 'Le plus utilisé'
    },
    {
      id: 'flashcards',
      title: 'Générateur de Flashcards',
      description: 'Créez vos flashcards et révisez avec feedback immédiat',
      icon: <Brain className="h-10 w-10" />,
      features: [
        'Feedback instantané',
        'Suivi des erreurs',
        'Révision optimisée'
      ],
      link: '/generator/flashcards'
    },

    {
      id: 'paragraph',
      title: 'Générateur de Paragraphes',
      description: 'Générez et analysez vos paragraphes avec retour immédiat',
      icon: <FileText className="h-10 w-10" />,
      features: [
        'Feedback structure instantané',
        'Détection des erreurs',
        'Amélioration rapide'
      ],
      link: '/generator/paragraph'
    },
    {
      id: 'geopolitics-unified',
      title: 'Générateur Géopo',
      description: 'Feedback détaillé pour perfectionner vos analyses géopolitiques',
      icon: <Globe className="h-10 w-10" />,
      features: [
        'Notation instantanée sur 25',
        'Analyse des faiblesses',
        'Correction rapide des erreurs'
      ],
      link: '/generator/geopolitics-unified'
    },
    {
      id: 'culture-generale',
      title: 'Générateur Culture Générale',
      description: 'Feedback immédiat sur vos problématiques et plans',
      icon: <Library className="h-10 w-10" />,
      features: [
        'Validation instantanée',
        'Détection des erreurs logiques',
        'Amélioration continue'
      ],
      link: '/generator/culture-generale'
    },
    {
      id: 'orals-unified',
      title: 'Générateur Oraux',
      description: 'Entraînez-vous avec retour immédiat sur vos réponses',
      icon: <Mic className="h-10 w-10" />,
      features: [
        'Feedback instantané IA',
        'Correction des erreurs',
        'Progression rapide'
      ],
      link: '/generator/orals-unified'
    },
    {
      id: 'colle-langues',
      title: 'Colle de Langues',
      description: 'Simulez une vraie colle avec questions générées et feedback détaillé',
      icon: <MessageCircle className="h-10 w-10" />,
      features: [
        'Questions IA personnalisées',
        'Enregistrement et évaluation',
        'Feedback langue + civilisation'
      ],
      link: '/colle',
      badge: 'Nouveau'
    },
    {
      id: 'math-generator',
      title: 'Générateur Maths',
      description: 'Maîtrisez les théorèmes avec explications détaillées',
      icon: <Calculator className="h-10 w-10" />,
      features: [
        'Formules LaTeX',
        'Exemples instantanés',
        'Compréhension rapide'
      ],
      link: '/generator/math'
    },
    {
      id: 'prepa-chatbot',
      title: 'Chat-bot prépa',
      description: 'Conseils personnalisés et feedback sur votre méthodologie',
      icon: <Heart className="h-10 w-10" />,
      features: [
        'Conseils instantanés',
        'Feedback personnalisé',
        'Motivation quotidienne'
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
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animate-in');
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const handleGeneratorClick = (generator: any) => {
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
    <div className="min-h-screen bg-[#0a0f1a] relative overflow-hidden">
      {/* Decorative glows - More vibrant and visible */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-400/15 rounded-full blur-[140px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/10 rounded-full blur-[160px]"></div>

      <div className="container mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative z-10">
        {/* Header Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-500/30">
            <Zap className="h-4 w-4" />
            Powered by AI
          </div>

          {/* Main Title */}
          <h1 className="fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white" style={{ animationDelay: '0.05s' }}>
            Générateurs <span className="text-orange-400">IA</span>
          </h1>

          {/* Subtitle with emphasis on instant feedback */}
          <p className="fade-in-up text-xl sm:text-2xl text-white/70 mb-8 max-w-4xl mx-auto font-medium" style={{ animationDelay: '0.1s' }}>
            <span className="text-orange-400 font-bold">Feedback instantané</span> pour progresser le plus rapidement possible
          </p>

          {/* Value propositions */}
          <div className="fade-in-up flex flex-wrap justify-center gap-6 max-w-3xl mx-auto" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-2 text-white/80">
              <Target className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold">Détection instantanée des erreurs</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <TrendingUp className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold">Progression rapide garantie</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Sparkles className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold">IA ultra-performante</span>
            </div>
          </div>
        </div>

        {/* Modules principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {mainGenerators.map((generator, index) => (
            <Link
              key={generator.id}
              to={generator.link}
              className="fade-in-up group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border-2 border-white/10 hover:border-orange-400/50 overflow-hidden"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Badge if applicable */}
              {generator.badge && (
                <div className="relative z-10 mb-4">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-orange-500/30">
                    {generator.badge}
                  </span>
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mb-5 shadow-xl shadow-orange-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <div className="text-white">
                    {generator.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {generator.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/70 mb-4 leading-relaxed font-medium">
                  {generator.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {generator.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-orange-400 font-semibold">
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 group-hover:shadow-xl transition-all duration-300">
                  <Zap className="mr-2 h-4 w-4" />
                  Utiliser le générateur
                </Button>
              </div>
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

        .fade-in-up, .scale-in {
          opacity: 0;
        }

        .fade-in-up.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .scale-in.animate-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GeneratorPage;
