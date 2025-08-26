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

const PoliticsVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Système politique / Political System
    { id: 1, french: "Système politique", english: "Political system", category: "Political System" },
    { id: 2, french: "Démocratie", english: "Democracy", category: "Political System" },
    { id: 3, french: "République", english: "Republic", category: "Political System" },
    { id: 4, french: "Monarchie constitutionnelle", english: "Constitutional monarchy", category: "Political System" },
    { id: 5, french: "Séparation des pouvoirs", english: "Separation of powers", category: "Political System" },
    { id: 6, french: "Checks and balances", english: "Checks and balances", category: "Political System" },
    { id: 7, french: "Fédéralisme", english: "Federalism", category: "Political System" },
    { id: 8, french: "Décentralisation", english: "Decentralization", category: "Political System" },
    { id: 9, french: "État de droit", english: "Rule of law", category: "Political System" },
    { id: 10, french: "Constitution", english: "Constitution", category: "Political System" },

    // 2. Partis politiques / Political Parties
    { id: 11, french: "Parti politique", english: "Political party", category: "Political Parties" },
    { id: 12, french: "Parti démocrate", english: "Democratic Party", category: "Political Parties" },
    { id: 13, french: "Parti républicain", english: "Republican Party", category: "Political Parties" },
    { id: 14, french: "Parti travailliste", english: "Labour Party", category: "Political Parties" },
    { id: 15, french: "Parti conservateur", english: "Conservative Party", category: "Political Parties" },
    { id: 16, french: "Parti libéral-démocrate", english: "Liberal Democrats", category: "Political Parties" },
    { id: 17, french: "Parti vert", english: "Green Party", category: "Political Parties" },
    { id: 18, french: "Parti indépendant", english: "Independent Party", category: "Political Parties" },
    { id: 19, french: "Coalition", english: "Coalition", category: "Political Parties" },
    { id: 20, french: "Opposition", english: "Opposition", category: "Political Parties" },

    // 3. Élections / Elections
    { id: 21, french: "Élection", english: "Election", category: "Elections" },
    { id: 22, french: "Élection présidentielle", english: "Presidential election", category: "Elections" },
    { id: 23, french: "Élection législative", english: "Legislative election", category: "Elections" },
    { id: 24, french: "Élection locale", english: "Local election", category: "Elections" },
    { id: 25, french: "Référendum", english: "Referendum", category: "Elections" },
    { id: 26, french: "Primaire", english: "Primary", category: "Elections" },
    { id: 27, french: "Caucus", english: "Caucus", category: "Elections" },
    { id: 28, french: "Suffrage universel", english: "Universal suffrage", category: "Elections" },
    { id: 29, french: "Bureau de vote", english: "Polling station", category: "Elections" },
    { id: 30, french: "Urne", english: "Ballot box", category: "Elections" },

    // 4. Institutions gouvernementales / Government Institutions
    { id: 31, french: "Gouvernement", english: "Government", category: "Government Institutions" },
    { id: 32, french: "Parlement", english: "Parliament", category: "Government Institutions" },
    { id: 33, french: "Congrès", english: "Congress", category: "Government Institutions" },
    { id: 34, french: "Sénat", english: "Senate", category: "Government Institutions" },
    { id: 35, french: "Chambre des représentants", english: "House of Representatives", category: "Government Institutions" },
    { id: 36, french: "Chambre des communes", english: "House of Commons", category: "Government Institutions" },
    { id: 37, french: "Chambre des lords", english: "House of Lords", category: "Government Institutions" },
    { id: 38, french: "Cour suprême", english: "Supreme Court", category: "Government Institutions" },
    { id: 39, french: "Cabinet", english: "Cabinet", category: "Government Institutions" },
    { id: 40, french: "Ministère", english: "Ministry", category: "Government Institutions" },

    // 5. Fonctions politiques / Political Functions
    { id: 41, french: "Président", english: "President", category: "Political Functions" },
    { id: 42, french: "Premier ministre", english: "Prime Minister", category: "Political Functions" },
    { id: 43, french: "Vice-président", english: "Vice President", category: "Political Functions" },
    { id: 44, french: "Ministre", english: "Minister", category: "Political Functions" },
    { id: 45, french: "Secrétaire d'État", english: "Secretary of State", category: "Political Functions" },
    { id: 46, french: "Député", english: "Member of Parliament", category: "Political Functions" },
    { id: 47, french: "Sénateur", english: "Senator", category: "Political Functions" },
    { id: 48, french: "Gouverneur", english: "Governor", category: "Political Functions" },
    { id: 49, french: "Maire", english: "Mayor", category: "Political Functions" },
    { id: 50, french: "Conseiller municipal", english: "City Councilor", category: "Political Functions" },

    // 6. Politiques publiques / Public Policies
    { id: 51, french: "Politique publique", english: "Public policy", category: "Public Policies" },
    { id: 52, french: "Politique sociale", english: "Social policy", category: "Public Policies" },
    { id: 53, french: "Politique économique", english: "Economic policy", category: "Public Policies" },
    { id: 54, french: "Politique étrangère", english: "Foreign policy", category: "Public Policies" },
    { id: 55, french: "Politique de défense", english: "Defense policy", category: "Public Policies" },
    { id: 56, french: "Politique environnementale", english: "Environmental policy", category: "Public Policies" },
    { id: 57, french: "Politique d'immigration", english: "Immigration policy", category: "Public Policies" },
    { id: 58, french: "Politique de santé", english: "Health policy", category: "Public Policies" },
    { id: 59, french: "Politique d'éducation", english: "Education policy", category: "Public Policies" },
    { id: 60, french: "Politique fiscale", english: "Fiscal policy", category: "Public Policies" },

    // 7. Lobbying et influence / Lobbying and Influence
    { id: 61, french: "Lobbying", english: "Lobbying", category: "Lobbying and Influence" },
    { id: 62, french: "Groupe de pression", english: "Pressure group", category: "Lobbying and Influence" },
    { id: 63, french: "Intérêt particulier", english: "Special interest", category: "Lobbying and Influence" },
    { id: 64, french: "Corruption", english: "Corruption", category: "Lobbying and Influence" },
    { id: 65, french: "Transparence", english: "Transparency", category: "Lobbying and Influence" },
    { id: 66, french: "Responsabilité", english: "Accountability", category: "Lobbying and Influence" },
    { id: 67, french: "Éthique", english: "Ethics", category: "Lobbying and Influence" },
    { id: 68, french: "Conflit d'intérêt", english: "Conflict of interest", category: "Lobbying and Influence" },
    { id: 69, french: "Financement des campagnes", english: "Campaign financing", category: "Lobbying and Influence" },
    { id: 70, french: "Reform", english: "Reform", category: "Lobbying and Influence" },

    // 8. Mouvements sociaux / Social Movements
    { id: 71, french: "Mouvement social", english: "Social movement", category: "Social Movements" },
    { id: 72, french: "Manifestation", english: "Protest", category: "Social Movements" },
    { id: 73, french: "Grève", english: "Strike", category: "Social Movements" },
    { id: 74, french: "Désobéissance civile", english: "Civil disobedience", category: "Social Movements" },
    { id: 75, french: "Activisme", english: "Activism", category: "Social Movements" },
    { id: 76, french: "Mobilisation", english: "Mobilization", category: "Social Movements" },
    { id: 77, french: "Résistance", english: "Resistance", category: "Social Movements" },
    { id: 78, french: "Révolution", english: "Revolution", category: "Social Movements" },
    { id: 79, french: "Réforme", english: "Reform", category: "Social Movements" },
    { id: 80, french: "Changement social", english: "Social change", category: "Social Movements" },

    // 9. Médias et politique / Media and Politics
    { id: 81, french: "Médias", english: "Media", category: "Media and Politics" },
    { id: 82, french: "Presse", english: "Press", category: "Media and Politics" },
    { id: 83, french: "Télévision", english: "Television", category: "Media and Politics" },
    { id: 84, french: "Radio", english: "Radio", category: "Media and Politics" },
    { id: 85, french: "Internet", english: "Internet", category: "Media and Politics" },
    { id: 86, french: "Réseaux sociaux", english: "Social media", category: "Media and Politics" },
    { id: 87, french: "Journalisme", english: "Journalism", category: "Media and Politics" },
    { id: 88, french: "Liberté de la presse", english: "Freedom of the press", category: "Media and Politics" },
    { id: 89, french: "Désinformation", english: "Disinformation", category: "Media and Politics" },
    { id: 90, french: "Fact-checking", english: "Fact-checking", category: "Media and Politics" },

    // 10. Concepts politiques / Political Concepts
    { id: 91, french: "Liberté", english: "Freedom", category: "Political Concepts" },
    { id: 92, french: "Égalité", english: "Equality", category: "Political Concepts" },
    { id: 93, french: "Justice", english: "Justice", category: "Political Concepts" },
    { id: 94, french: "Droits de l'homme", english: "Human rights", category: "Political Concepts" },
    { id: 95, french: "Citoyenneté", english: "Citizenship", category: "Political Concepts" },
    { id: 96, french: "Souveraineté", english: "Sovereignty", category: "Political Concepts" },
    { id: 97, french: "Légitimité", english: "Legitimacy", category: "Political Concepts" },
    { id: 98, french: "Autorité", english: "Authority", category: "Political Concepts" },
    { id: 99, french: "Pouvoir", english: "Power", category: "Political Concepts" },
    { id: 100, french: "Gouvernance", english: "Governance", category: "Political Concepts" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [cards, setCards] = useState(vocabularyData);
  const [progress, setProgress] = useState(0);

  // Calcul du progrès
  useEffect(() => {
    setProgress(((currentIndex + 1) / cards.length) * 100);
  }, [currentIndex, cards.length]);

  // Navigation avec les touches
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'Space':
        case 'Enter':
          event.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'KeyS':
          event.preventDefault();
          shuffleCards();
          break;
        case 'KeyR':
          event.preventDefault();
          resetCards();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  }, [cards.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  }, [cards.length]);

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const resetCards = () => {
    setCards(vocabularyData);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentCard = cards[currentIndex];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Political System': 'bg-blue-500',
      'Political Parties': 'bg-red-500',
      'Elections': 'bg-green-500',
      'Government Institutions': 'bg-purple-500',
      'Political Functions': 'bg-indigo-500',
      'Public Policies': 'bg-orange-500',
      'Lobbying and Influence': 'bg-pink-500',
      'Social Movements': 'bg-teal-500',
      'Media and Politics': 'bg-yellow-500',
      'Political Concepts': 'bg-gray-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/formation/anglais/civilisation" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Retour à la civilisation anglaise
          </Link>
          <h1 className="text-xl font-semibold text-gray-800">Vocabulaire Politique</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHelp(!showHelp)}
              className="flex items-center gap-2"
            >
              <HelpCircle className="h-4 w-4" />
              Aide
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Barre de progression */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Carte {currentIndex + 1} sur {cards.length}
              </span>
              <span className="text-sm text-gray-600">
                {Math.round(progress)}% complété
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Carte principale */}
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
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
                    <h2 className="text-3xl font-bold text-blue-600 mb-4">
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
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Précédent
            </Button>

            <Button
              onClick={() => setIsFlipped(!isFlipped)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Retourner
            </Button>

            <Button
              variant="outline"
              onClick={goToNext}
              disabled={currentIndex === cards.length - 1}
              className="flex items-center gap-2"
            >
              Suivant
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={shuffleCards}
              className="flex items-center gap-2"
            >
              <Shuffle className="h-4 w-4" />
              Mélanger
            </Button>
            <Button
              variant="outline"
              onClick={resetCards}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Réinitialiser
            </Button>
          </div>

          {/* Aide */}
          {showHelp && (
            <Card className="mt-8 border-2 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="text-orange-800">Raccourcis clavier</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Espace/Entrée:</span>
                      <span className="text-gray-600">Retourner la carte</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">← →:</span>
                      <span className="text-gray-600">Navigation</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">S:</span>
                      <span className="text-gray-600">Mélanger</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">R:</span>
                      <span className="text-gray-600">Réinitialiser</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PoliticsVocabularyPage; 