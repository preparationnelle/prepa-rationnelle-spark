import React, { useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Languages,
  Globe,
  Heart,
  Mic,
  Library,
  FileText,
  Brain,
  Calculator,
  Target,
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
    elements.forEach((el) => el.classList.add('animate-in'));

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
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-16 sm:py-20 lg:py-24">
        {/* Header — manuscrit & professoral, ambiance carnet */}
        <div className="relative max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="fade-in-up carnet-eyebrow flex items-center justify-center gap-3 mb-8">
            <span className="inline-block h-px w-6 bg-carnet-red/50" />
            Feedback IA
            <span className="inline-block h-px w-6 bg-carnet-red/50" />
          </div>

          <div className="relative inline-block">
            <h1
              className="fade-in-up font-lora text-[44px] sm:text-[56px] lg:text-[64px] text-carnet-ink leading-[1.05] tracking-tight"
              style={{ animationDelay: '0.05s' }}
            >
              Générateurs <em className="font-lora italic text-carnet-red">IA</em>
            </h1>

            <span
              className="hidden xl:flex fade-in-up carnet-hand absolute -right-52 top-1/2 -translate-y-1/2 -rotate-[5deg] text-[28px] leading-none items-center gap-1.5 whitespace-nowrap"
              style={{ animationDelay: '0.3s' }}
              aria-hidden="true"
            >
              <span className="text-3xl">↩</span> ton coach 24/7
            </span>
          </div>

          <div className="fade-in-up flex justify-center my-6" style={{ animationDelay: '0.08s' }}>
            <div className="h-0.5 w-12 bg-carnet-ink" />
          </div>

          <p
            className="fade-in-up font-instrument text-[17px] sm:text-[18px] text-carnet-ink-soft mb-10 leading-[1.6] max-w-2xl mx-auto"
            style={{ animationDelay: '0.1s' }}
          >
            Progresser avec un feedback{' '}
            <span className="carnet-hl font-lora italic text-carnet-ink">instantané</span>{' '}
            sur chacune de tes copies.
          </p>

          <ul
            className="fade-in-up inline-flex flex-wrap justify-center gap-x-8 gap-y-3"
            style={{ animationDelay: '0.15s' }}
          >
            {[
              'Détecte tes erreurs',
              'Progression rapide',
              'IA ultra-performante',
            ].map((label) => (
              <li key={label} className="flex items-center gap-2.5 font-instrument text-[14px] text-carnet-ink-soft">
                <span className="carnet-hand text-[24px] text-carnet-red leading-none">✓</span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Grille de générateurs — style carnet de la landing page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {mainGenerators.map((generator, index) => (
            <div
              key={generator.id}
              className={`fade-in-up ${index % 3 === 1 ? 'carnet-tilt-r' : index % 3 === 2 ? 'carnet-tilt-l' : ''}`}
              style={{ animationDelay: `${0.1 + index * 0.04}s` }}
            >
              <Link
                to={generator.link}
                className="carnet-card relative block p-8 h-full group hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
              >
                {generator.badge && (
                  <span className="absolute top-6 right-6 carnet-eyebrow text-[10px] text-carnet-red">
                    {generator.badge}
                  </span>
                )}

                <div className="carnet-hand text-[44px] font-semibold text-carnet-red leading-none mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />

                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[rgba(193,68,58,0.08)] flex items-center justify-center text-carnet-red flex-none">
                    {React.cloneElement(generator.icon as React.ReactElement, { className: 'h-4 w-4' })}
                  </div>
                  <h3 className="font-lora text-[22px] leading-[1.25] text-carnet-ink">
                    {generator.title}
                  </h3>
                </div>

                <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.55] mb-5">
                  {generator.description}
                </p>

                <ul className="space-y-2 pt-4 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                  {generator.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-instrument text-[13px] text-carnet-ink-soft">
                      <span className="carnet-hand text-[18px] leading-none mt-0.5">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-1.5 font-instrument text-[12px] font-semibold uppercase tracking-[0.1em] text-carnet-red group-hover:gap-2.5 transition-all">
                  Utiliser le générateur <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </div>
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
