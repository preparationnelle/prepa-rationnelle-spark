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
import { Button } from "@/components/ui/button";

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
      icon: <BookOpen className="h-10 w-10" />,
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
      icon: <Languages className="h-10 w-10" />,
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
      icon: <Globe className="h-10 w-10" />,
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
          {mainGenerators.map((generator) => (
            <Link
              key={generator.id}
              to={generator.link}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-110 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center min-h-[420px] justify-between border border-transparent hover:border-orange-300 hover:bg-orange-50 transform"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                  <div className="text-blue-600 group-hover:text-orange-600 transition-colors">
                    {generator.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-blue-700 group-hover:text-orange-800 transition-colors">
                  {generator.id === 'flashcards' && 'Flashcards'}
                  {generator.id === 'languages-unified' && 'Langues'}
                  {generator.id === 'geopolitics-unified' && 'Géopolitique'}
                  {generator.id === 'culture-generale' && 'Culture Générale'}
                  {generator.id === 'orals-unified' && 'Oraux'}
                  {generator.id === 'prepa-chatbot' && 'Chat-bot'}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {generator.id === 'flashcards' && 'Créez vos flashcards personnalisées'}
                  {generator.id === 'languages-unified' && 'Générez et corrigez vos textes'}
                  {generator.id === 'geopolitics-unified' && 'Études et fiches automatiques'}
                  {generator.id === 'culture-generale' && 'Thèmes et problématiques'}
                  {generator.id === 'orals-unified' && 'Questions et réponses orales'}
                  {generator.id === 'prepa-chatbot' && 'Conseils et motivation'}
                </p>
                <div className="space-y-1 text-xs w-full mb-4">
                  {generator.id === 'flashcards' && (
                    <>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Flashcards personnalisées</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Révision intelligente</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Suivi des progrès</span>
                      </div>
                    </>
                  )}
                  {generator.id === 'languages-unified' && (
                    <>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Correction automatique</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Génération de paragraphes</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Thèmes corrigés</span>
                      </div>
                    </>
                  )}
                  {generator.id === 'geopolitics-unified' && (
                    <>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Études géopolitiques</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Fiches automatiques</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Analyse stratégique</span>
                      </div>
                    </>
                  )}
                  {generator.id === 'culture-generale' && (
                    <>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Définition de thèmes</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Problématiques rapides</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Plans détaillés</span>
                      </div>
                    </>
                  )}
                  {generator.id === 'orals-unified' && (
                    <>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Questions types concours</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Réponses générées</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Entraînement oral</span>
                      </div>
                    </>
                  )}
                  {generator.id === 'prepa-chatbot' && (
                    <>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Conseils méthodologiques</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Motivation quotidienne</span>
                      </div>
                      <div className="flex items-center text-blue-600 group-hover:text-orange-600 transition-colors">
                        <span className="mr-2">✓</span>
                        <span>Bien-être prépa</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-lg rounded-lg">
                <Zap className="mr-2 h-4 w-4" />
                Utiliser le générateur
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;
