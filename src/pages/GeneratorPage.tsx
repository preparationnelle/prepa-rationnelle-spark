import React, { useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Languages,
  Zap,
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
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const GeneratorPage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const mainGenerators = [
    {
      id: 'ai-chat-hub',
      title: 'AI Chat Hub',
      description: 'Accédez à tous nos assistants IA spécialisés (Prépa, Maths, Géopo) en un seul endroit',
      icon: <Target className="h-6 w-6" />,
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
      icon: <Languages className="h-6 w-6" />,
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
      icon: <Brain className="h-6 w-6" />,
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
      icon: <FileText className="h-6 w-6" />,
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
      icon: <Globe className="h-6 w-6" />,
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
      icon: <Library className="h-6 w-6" />,
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
      icon: <Mic className="h-6 w-6" />,
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
      icon: <MessageCircle className="h-6 w-6" />,
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
      icon: <Calculator className="h-6 w-6" />,
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
      icon: <Heart className="h-6 w-6" />,
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

    const elements = document.querySelectorAll('.fade-in-up');
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
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        {/* Header — épuré, charte PR */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          {/* Badge chip orange pâle */}
          <div className="fade-in-up inline-flex items-center gap-2 bg-pr-orange-pale text-pr-orange-dark px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] mb-8 font-dm-sans">
            <Sparkles className="h-3.5 w-3.5" />
            Powered by AI
          </div>

          {/* Titre — DM Serif Display */}
          <h1 className="fade-in-up font-dm-serif text-5xl sm:text-6xl lg:text-7xl text-pr-black mb-6 leading-[1.05]" style={{ animationDelay: '0.05s' }}>
            Générateurs <span className="text-pr-orange">IA</span>
          </h1>

          {/* Trait orange signature */}
          <div className="fade-in-up flex justify-center mb-8" style={{ animationDelay: '0.08s' }}>
            <div className="h-[3px] w-16 bg-pr-orange rounded-full" />
          </div>

          {/* Sous-titre */}
          <p className="fade-in-up text-lg sm:text-xl text-pr-gray-dark mb-10 font-dm-sans leading-relaxed" style={{ animationDelay: '0.1s' }}>
            <span className="text-pr-black font-semibold">Feedback instantané</span> pour progresser
            le plus rapidement possible.
          </p>

          {/* Trois value props sobres */}
          <div className="fade-in-up flex flex-wrap justify-center gap-x-8 gap-y-3 font-dm-sans" style={{ animationDelay: '0.15s' }}>
            <div className="flex items-center gap-2 text-pr-gray-dark">
              <Target className="h-4 w-4 text-pr-orange" />
              <span className="text-sm">Détection des erreurs</span>
            </div>
            <div className="flex items-center gap-2 text-pr-gray-dark">
              <TrendingUp className="h-4 w-4 text-pr-orange" />
              <span className="text-sm">Progression rapide</span>
            </div>
            <div className="flex items-center gap-2 text-pr-gray-dark">
              <Zap className="h-4 w-4 text-pr-orange" />
              <span className="text-sm">IA ultra-performante</span>
            </div>
          </div>
        </div>

        {/* Grille de générateurs — cartes blanches, charte PR */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {mainGenerators.map((generator, index) => (
            <Link
              key={generator.id}
              to={generator.link}
              className="fade-in-up group relative bg-white rounded-2xl overflow-hidden border border-pr-gray-light hover:border-pr-orange/60 hover:shadow-[0_8px_30px_-12px_rgba(244,132,95,0.25)] transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${0.1 + index * 0.04}s` }}
            >
              {/* Trait orange signature en haut */}
              <div className="h-[3px] w-full bg-pr-orange" />

              <div className="p-6 flex flex-col flex-1">
                {/* Header carte : icône + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-pr-orange-pale rounded-xl flex items-center justify-center text-pr-orange-dark group-hover:bg-pr-orange group-hover:text-white transition-colors duration-300">
                    {generator.icon}
                  </div>
                  {generator.badge && (
                    <span className="inline-block bg-pr-orange-pale text-pr-orange-dark px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.08em] font-dm-sans">
                      {generator.badge}
                    </span>
                  )}
                </div>

                {/* Titre — DM Serif Display */}
                <h3 className="font-dm-serif text-2xl text-pr-black mb-2 leading-tight group-hover:text-pr-orange-dark transition-colors">
                  {generator.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-pr-gray-dark mb-5 leading-relaxed font-dm-sans">
                  {generator.description}
                </p>

                {/* Features — puces fines, sans gras lourd */}
                <ul className="space-y-1.5 mb-6 font-dm-sans">
                  {generator.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-pr-gray-dark">
                      <span className="text-pr-orange mr-2 leading-5">→</span>
                      <span className="leading-5">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Lien CTA — minimaliste, alignement bas */}
                <div className="mt-auto pt-4 border-t border-pr-gray-light">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-pr-orange-dark font-dm-sans group-hover:gap-2.5 transition-all">
                    Utiliser le générateur
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          opacity: 0;
        }

        .fade-in-up.animate-in {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GeneratorPage;
