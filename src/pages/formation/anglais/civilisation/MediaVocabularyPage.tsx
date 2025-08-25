import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const MediaVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Plateformes et réseaux / Platforms and Networks
    { id: 1, french: "Médias sociaux", english: "Social media", category: "Plateformes et réseaux" },
    { id: 2, french: "Plateforme numérique", english: "Digital platform", category: "Plateformes et réseaux" },
    { id: 3, french: "Réseau social", english: "Social network", category: "Plateformes et réseaux" },
    { id: 4, french: "Réseau global", english: "Global network", category: "Plateformes et réseaux" },
    { id: 5, french: "Réseau de confiance", english: "Trust network", category: "Plateformes et réseaux" },
    { id: 6, french: "Réseaux professionnels", english: "Professional networks", category: "Plateformes et réseaux" },
    { id: 7, french: "Réseaux d'information", english: "Information networks", category: "Plateformes et réseaux" },
    { id: 8, french: "Réseaux éducatifs", english: "Educational networks", category: "Plateformes et réseaux" },
    { id: 9, french: "Réseaux de communication", english: "Communication networks", category: "Plateformes et réseaux" },
    { id: 10, french: "Réseaux globaux d'influence", english: "Global influence networks", category: "Plateformes et réseaux" },

    // 2. Influence et contenus / Influence and Content
    { id: 11, french: "Influenceur", english: "Influencer", category: "Influence et contenus" },
    { id: 12, french: "Contenu viral", english: "Viral content", category: "Influence et contenus" },
    { id: 13, french: "Influence culturelle", english: "Cultural influence", category: "Influence et contenus" },
    { id: 14, french: "Influence politique", english: "Political influence", category: "Influence et contenus" },
    { id: 15, french: "Influence sociale", english: "Social influence", category: "Influence et contenus" },
    { id: 16, french: "Influence économique", english: "Economic influence", category: "Influence et contenus" },
    { id: 17, french: "Influence mondiale", english: "Global influence", category: "Influence et contenus" },
    { id: 18, french: "Influence psychologique", english: "Psychological influence", category: "Influence et contenus" },
    { id: 19, french: "Influence des algorithmes", english: "Algorithmic influence", category: "Influence et contenus" },
    { id: 20, french: "Influence des tendances", english: "Trend influence", category: "Influence et contenus" },

    // 3. Désinformation et fact-checking / Disinformation and Fact-checking
    { id: 21, french: "Désinformation", english: "Disinformation", category: "Désinformation et fact-checking" },
    { id: 22, french: "Fact-checking", english: "Fact-checking", category: "Désinformation et fact-checking" },
    { id: 23, french: "Fake news", english: "Fake news", category: "Désinformation et fact-checking" },
    { id: 24, french: "Rumeur", english: "Rumor", category: "Désinformation et fact-checking" },
    { id: 25, french: "Réseaux de désinformation", english: "Disinformation networks", category: "Désinformation et fact-checking" },
    { id: 26, french: "Propagande", english: "Propaganda", category: "Désinformation et fact-checking" },
    { id: 27, french: "Bulle informationnelle", english: "Filter bubble", category: "Désinformation et fact-checking" },
    { id: 28, french: "Algorithme", english: "Algorithm", category: "Désinformation et fact-checking" },
    { id: 29, french: "Censure", english: "Censorship", category: "Désinformation et fact-checking" },
    { id: 30, french: "Modération", english: "Moderation", category: "Désinformation et fact-checking" },

    // 4. Libertés et éthique / Freedoms and Ethics
    { id: 31, french: "Liberté d'expression", english: "Freedom of speech", category: "Libertés et éthique" },
    { id: 32, french: "Vie privée", english: "Privacy", category: "Libertés et éthique" },
    { id: 33, french: "Éthique numérique", english: "Digital ethics", category: "Libertés et éthique" },
    { id: 34, french: "Éthique des médias", english: "Media ethics", category: "Libertés et éthique" },
    { id: 35, french: "Cyberéthique", english: "Cyberethics", category: "Libertés et éthique" },
    { id: 36, french: "Données personnelles", english: "Personal data", category: "Libertés et éthique" },
    { id: 37, french: "Surveillance numérique", english: "Digital surveillance", category: "Libertés et éthique" },
    { id: 38, french: "Réputation en ligne", english: "Online reputation", category: "Libertés et éthique" },
    { id: 39, french: "Controverse en ligne", english: "Online controversy", category: "Libertés et éthique" },
    { id: 40, french: "Contenu controversé", english: "Controversial content", category: "Libertés et éthique" },

    // 5. Engagement et participation / Engagement and Participation
    { id: 41, french: "Engagement", english: "Engagement", category: "Engagement et participation" },
    { id: 42, french: "Engagement civique", english: "Civic engagement", category: "Engagement et participation" },
    { id: 43, french: "Désengagement", english: "Disengagement", category: "Engagement et participation" },
    { id: 44, french: "Débat en ligne", english: "Online debate", category: "Engagement et participation" },
    { id: 45, french: "Communauté virtuelle", english: "Virtual community", category: "Engagement et participation" },
    { id: 46, french: "Réseaux d'opinion", english: "Opinion networks", category: "Engagement et participation" },
    { id: 47, french: "Réseaux militants", english: "Activist networks", category: "Engagement et participation" },
    { id: 48, french: "Réseaux de mobilisation", english: "Mobilization networks", category: "Engagement et participation" },
    { id: 49, french: "Réseaux de débat", english: "Debate networks", category: "Engagement et participation" },
    { id: 50, french: "Réseaux d'entraide", english: "Mutual aid networks", category: "Engagement et participation" },

    // 6. Contenu et médias / Content and Media
    { id: 51, french: "Médias traditionnels", english: "Traditional media", category: "Contenu et médias" },
    { id: 52, french: "Médias alternatifs", english: "Alternative media", category: "Contenu et médias" },
    { id: 53, french: "Médias indépendants", english: "Independent media", category: "Contenu et médias" },
    { id: 54, french: "Médias locaux", english: "Local media", category: "Contenu et médias" },
    { id: 55, french: "Médias internationaux", english: "International media", category: "Contenu et médias" },
    { id: 56, french: "Médias de masse", english: "Mass media", category: "Contenu et médias" },
    { id: 57, french: "Médias spécialisés", english: "Specialized media", category: "Contenu et médias" },
    { id: 58, french: "Médias citoyens", english: "Citizen media", category: "Contenu et médias" },
    { id: 59, french: "Médias d'opinion", english: "Opinion media", category: "Contenu et médias" },
    { id: 60, french: "Médias visuels", english: "Visual media", category: "Contenu et médias" },

    // 7. Types de contenu / Content Types
    { id: 61, french: "Contenu sponsorisé", english: "Sponsored content", category: "Types de contenu" },
    { id: 62, french: "Contenu généré par l'utilisateur", english: "User-generated content", category: "Types de contenu" },
    { id: 63, french: "Contenu éducatif", english: "Educational content", category: "Types de contenu" },
    { id: 64, french: "Contenu satirique", english: "Satirical content", category: "Types de contenu" },
    { id: 65, french: "Contenu politique", english: "Political content", category: "Types de contenu" },
    { id: 66, french: "Contenu interactif", english: "Interactive content", category: "Types de contenu" },
    { id: 67, french: "Contenu informatif", english: "Informative content", category: "Types de contenu" },
    { id: 68, french: "Contenu narratif", english: "Narrative content", category: "Types de contenu" },
    { id: 69, french: "Contenu engagé", english: "Engaged content", category: "Types de contenu" },
    { id: 70, french: "Mèmes", english: "Memes", category: "Types de contenu" },

    // 8. Campagnes et viralité / Campaigns and Virality
    { id: 71, french: "Campagne virale", english: "Viral campaign", category: "Campagnes et viralité" },
    { id: 72, french: "Campagne sociale", english: "Social campaign", category: "Campagnes et viralité" },
    { id: 73, french: "Campagne de sensibilisation", english: "Awareness campaign", category: "Campagnes et viralité" },
    { id: 74, french: "Viralité", english: "Virality", category: "Campagnes et viralité" },
    { id: 75, french: "Trending topic", english: "Trending topic", category: "Campagnes et viralité" },
    { id: 76, french: "Buzz", english: "Buzz", category: "Campagnes et viralité" },
    { id: 77, french: "Médiatisation", english: "Media coverage", category: "Campagnes et viralité" },
    { id: 78, french: "Médiatisation politique", english: "Political media coverage", category: "Campagnes et viralité" },
    { id: 79, french: "Médiatisation environnementale", english: "Environmental media coverage", category: "Campagnes et viralité" },
    { id: 80, french: "Influence des hashtags", english: "Hashtag influence", category: "Campagnes et viralité" },

    // 9. Cyberespace et culture numérique / Cyberspace and Digital Culture
    { id: 81, french: "Cyberespace", english: "Cyberspace", category: "Cyberespace et culture numérique" },
    { id: 82, french: "Cyberculture", english: "Cyberculture", category: "Cyberespace et culture numérique" },
    { id: 83, french: "Cyberinfluence", english: "Cyberinfluence", category: "Cyberespace et culture numérique" },
    { id: 84, french: "Cyberinfluenceurs", english: "Cyberinfluencers", category: "Cyberespace et culture numérique" },
    { id: 85, french: "Cyberactivisme", english: "Cyberactivism", category: "Cyberespace et culture numérique" },
    { id: 86, french: "Cyberdéfense", english: "Cyberdefense", category: "Cyberespace et culture numérique" },
    { id: 87, french: "Cyberharcèlement", english: "Cyberbullying", category: "Cyberespace et culture numérique" },
    { id: 88, french: "Détox numérique", english: "Digital detox", category: "Cyberespace et culture numérique" },
    { id: 89, french: "Réseautage", english: "Networking", category: "Cyberespace et culture numérique" },
    { id: 90, french: "Médias participatifs", english: "Participatory media", category: "Cyberespace et culture numérique" },

    // 10. Publicité et marketing / Advertising and Marketing
    { id: 91, french: "Publicité ciblée", english: "Targeted advertising", category: "Publicité et marketing" },
    { id: 92, french: "Analyse de sentiment", english: "Sentiment analysis", category: "Publicité et marketing" },
    { id: 93, french: "Influence des célébrités", english: "Celebrity influence", category: "Publicité et marketing" },
    { id: 94, french: "Journalisme citoyen", english: "Citizen journalism", category: "Publicité et marketing" },
    { id: 95, french: "Polarisation", english: "Polarization", category: "Publicité et marketing" },
    { id: 96, french: "Influence des réseaux", english: "Network influence", category: "Publicité et marketing" },
    { id: 97, french: "Influence culturelle globale", english: "Global cultural influence", category: "Publicité et marketing" },
    { id: 98, french: "Médias numériques", english: "Digital media", category: "Publicité et marketing" },
    { id: 99, french: "Support networks", english: "Support networks", category: "Publicité et marketing" },
    { id: 100, french: "Réseaux sociaux professionnels", english: "Professional social networks", category: "Publicité et marketing" },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  const currentCard = vocabularyData[currentCardIndex];

  const nextCard = useCallback(() => {
    setCurrentCardIndex((prev) => (prev + 1) % vocabularyData.length);
    setIsFlipped(false);
  }, [vocabularyData.length]);

  const previousCard = useCallback(() => {
    setCurrentCardIndex((prev) => (prev - 1 + vocabularyData.length) % vocabularyData.length);
    setIsFlipped(false);
  }, [vocabularyData.length]);

  const shuffleCards = useCallback(() => {
    const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5);
    vocabularyData.splice(0, vocabularyData.length, ...shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  }, []);

  const resetCards = useCallback(() => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setProgress(0);
  }, []);

  useEffect(() => {
    setProgress(((currentCardIndex + 1) / vocabularyData.length) * 100);
  }, [currentCardIndex, vocabularyData.length]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          previousCard();
          break;
        case 'ArrowRight':
          nextCard();
          break;
        case ' ':
          event.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case 'r':
        case 'R':
          resetCards();
          break;
        case 's':
        case 'S':
          shuffleCards();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [previousCard, nextCard, isFlipped, resetCards, shuffleCards]);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Plateformes et réseaux': 'bg-blue-500',
      'Influence et contenus': 'bg-green-500',
      'Désinformation et fact-checking': 'bg-red-500',
      'Libertés et éthique': 'bg-purple-500',
      'Engagement et participation': 'bg-orange-500',
      'Contenu et médias': 'bg-emerald-500',
      'Types de contenu': 'bg-teal-500',
      'Campagnes et viralité': 'bg-indigo-500',
      'Cyberespace et culture numérique': 'bg-pink-500',
      'Publicité et marketing': 'bg-cyan-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/formation/anglais/civilisation" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Retour à la civilisation anglaise
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
                Médias et Réseaux sociaux
              </Badge>
              <span className="text-sm text-gray-600">
                {currentCardIndex + 1} / {vocabularyData.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-pink-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte principale */}
        <Card className="mb-8 border-2 border-pink-200">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Badge className={`${getCategoryColor(currentCard.category)} text-white`}>
                  {currentCard.category}
                </Badge>
                <span className="text-sm text-gray-600">#{currentCard.id}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowHelp(!showHelp)}
              >
                <Keyboard className="h-4 w-4 mr-2" />
                Raccourcis
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="relative min-h-[300px] flex items-center justify-center cursor-pointer">
              {/* Face avant */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  isFlipped ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {currentCard.french}
                  </h2>
                  <p className="text-gray-600">Cliquez pour voir la traduction</p>
                </div>
              </div>

              {/* Face arrière */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-pink-600 mb-4">
                    {currentCard.english}
                  </h2>
                  <p className="text-gray-600">Traduction en anglais</p>
                </div>
              </div>

              {/* Zone cliquable */}
              <div 
                className="absolute inset-0 z-10"
                onClick={() => setIsFlipped(!isFlipped)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Contrôles */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="outline"
            onClick={previousCard}
            disabled={currentCardIndex === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Précédent
          </Button>

          <Button
            variant="outline"
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Retourner
          </Button>

          <Button
            variant="outline"
            onClick={nextCard}
            disabled={currentCardIndex === vocabularyData.length - 1}
            className="flex items-center gap-2"
          >
            Suivant
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Actions supplémentaires */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="outline"
            onClick={shuffleCards}
            className="flex items-center gap-2 bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
          >
            <Shuffle className="h-4 w-4" />
            Mélanger
          </Button>

          <Button
            variant="outline"
            onClick={resetCards}
            className="flex items-center gap-2 bg-red-50 border-red-200 text-red-700 hover:bg-red-100"
          >
            <RotateCcw className="h-4 w-4" />
            Recommencer
          </Button>
        </div>

        {/* Aide */}
        {showHelp && (
          <Card className="mb-8 border-2 border-yellow-200">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-yellow-600" />
                Raccourcis clavier
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Navigation :</p>
                  <p>← → : Carte précédente/suivante</p>
                  <p>Espace : Retourner la carte</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Actions :</p>
                  <p>R : Recommencer</p>
                  <p>S : Mélanger</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Statistiques */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gray-600" />
              Statistiques du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-pink-600">{vocabularyData.length}</p>
                <p className="text-sm text-gray-600">Mots au total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.ceil(vocabularyData.length / 10)}
                </p>
                <p className="text-sm text-gray-600">Catégories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-600">
                  {Math.round(progress)}%
                </p>
                <p className="text-sm text-gray-600">Progression</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-600">
                  {currentCardIndex + 1}
                </p>
                <p className="text-sm text-gray-600">Carte actuelle</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MediaVocabularyPage; 