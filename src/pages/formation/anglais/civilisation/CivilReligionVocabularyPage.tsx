import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const CivilReligionVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Religion civile et spiritualité / Civil Religion and Spirituality
    { id: 1, french: "Religion civile", english: "Civil religion", category: "Religion civile et spiritualité" },
    { id: 2, french: "Religion d'État", english: "State religion", category: "Religion civile et spiritualité" },
    { id: 3, french: "Sécularisme", english: "Secularism", category: "Religion civile et spiritualité" },
    { id: 4, french: "Laïcité", english: "Laicity", category: "Religion civile et spiritualité" },
    { id: 5, french: "Spiritualité", english: "Spirituality", category: "Religion civile et spiritualité" },
    { id: 6, french: "Spiritualité nationale", english: "National spirituality", category: "Religion civile et spiritualité" },
    { id: 7, french: "Héritage religieux", english: "Religious heritage", category: "Religion civile et spiritualité" },
    { id: 8, french: "Sécularisation", english: "Secularization", category: "Religion civile et spiritualité" },
    { id: 9, french: "Identité religieuse", english: "Religious identity", category: "Religion civile et spiritualité" },
    { id: 10, french: "Croyances collectives", english: "Collective beliefs", category: "Religion civile et spiritualité" },

    // 2. Identité nationale et patriotisme / National Identity and Patriotism
    { id: 11, french: "Identité nationale", english: "National identity", category: "Identité nationale et patriotisme" },
    { id: 12, french: "Patriotisme", english: "Patriotism", category: "Identité nationale et patriotisme" },
    { id: 13, french: "Patriotisme constitutionnel", english: "Constitutional patriotism", category: "Identité nationale et patriotisme" },
    { id: 14, french: "Patriotisme économique", english: "Economic patriotism", category: "Identité nationale et patriotisme" },
    { id: 15, french: "Patriotisme militaire", english: "Military patriotism", category: "Identité nationale et patriotisme" },
    { id: 16, french: "Patriotisme culturel", english: "Cultural patriotism", category: "Identité nationale et patriotisme" },
    { id: 17, french: "Fierté nationale", english: "National pride", category: "Identité nationale et patriotisme" },
    { id: 18, french: "Idéal national", english: "National ideal", category: "Identité nationale et patriotisme" },
    { id: 19, french: "Souveraineté", english: "Sovereignty", category: "Identité nationale et patriotisme" },
    { id: 20, french: "Indépendance", english: "Independence", category: "Identité nationale et patriotisme" },

    // 3. Culture et valeurs civiques / Civic Culture and Values
    { id: 21, french: "Culture civique", english: "Civic culture", category: "Culture et valeurs civiques" },
    { id: 22, french: "Valeurs nationales", english: "National values", category: "Culture et valeurs civiques" },
    { id: 23, french: "Valeurs démocratiques", english: "Democratic values", category: "Culture et valeurs civiques" },
    { id: 24, french: "Valeurs universelles", english: "Universal values", category: "Culture et valeurs civiques" },
    { id: 25, french: "Liberté", english: "Freedom", category: "Culture et valeurs civiques" },
    { id: 26, french: "Égalité", english: "Equality", category: "Culture et valeurs civiques" },
    { id: 27, french: "Fraternité", english: "Fraternity", category: "Culture et valeurs civiques" },
    { id: 28, french: "Justice", english: "Justice", category: "Culture et valeurs civiques" },
    { id: 29, french: "Droits civiques", english: "Civil rights", category: "Culture et valeurs civiques" },
    { id: 30, french: "Idéal civique", english: "Civic ideal", category: "Culture et valeurs civiques" },

    // 4. Symboles et rituels / Symbols and Rituals
    { id: 31, french: "Symboles nationaux", english: "National symbols", category: "Symboles et rituels" },
    { id: 32, french: "Drapeau", english: "Flag", category: "Symboles et rituels" },
    { id: 33, french: "Hymne", english: "Anthem", category: "Symboles et rituels" },
    { id: 34, french: "Rituel", english: "Ritual", category: "Symboles et rituels" },
    { id: 35, french: "Rituel civique", english: "Civic ritual", category: "Symboles et rituels" },
    { id: 36, french: "Cérémonie", english: "Ceremony", category: "Symboles et rituels" },
    { id: 37, french: "Commémoration", english: "Commemoration", category: "Symboles et rituels" },
    { id: 38, french: "Célébration", english: "Celebration", category: "Symboles et rituels" },
    { id: 39, french: "Symbolisme", english: "Symbolism", category: "Symboles et rituels" },
    { id: 40, french: "Mythologie nationale", english: "National mythology", category: "Symboles et rituels" },

    // 5. Histoire et mémoire / History and Memory
    { id: 41, french: "Histoire", english: "History", category: "Histoire et mémoire" },
    { id: 42, french: "Légende", english: "Legend", category: "Histoire et mémoire" },
    { id: 43, french: "Héros national", english: "National hero", category: "Histoire et mémoire" },
    { id: 44, french: "Narratif national", english: "National narrative", category: "Histoire et mémoire" },
    { id: 45, french: "Identité historique", english: "Historical identity", category: "Histoire et mémoire" },
    { id: 46, french: "Mémoire collective", english: "Collective memory", category: "Histoire et mémoire" },
    { id: 47, french: "Mémoire nationale", english: "National memory", category: "Histoire et mémoire" },
    { id: 48, french: "Mémoire historique", english: "Historical memory", category: "Histoire et mémoire" },
    { id: 49, french: "Héritage", english: "Heritage", category: "Histoire et mémoire" },
    { id: 50, french: "Héritage colonial", english: "Colonial heritage", category: "Histoire et mémoire" },

    // 6. Citoyenneté et participation / Citizenship and Participation
    { id: 51, french: "Citoyenneté", english: "Citizenship", category: "Citoyenneté et participation" },
    { id: 52, french: "Devoir civique", english: "Civic duty", category: "Citoyenneté et participation" },
    { id: 53, french: "Participation", english: "Participation", category: "Citoyenneté et participation" },
    { id: 54, french: "Engagement", english: "Engagement", category: "Citoyenneté et participation" },
    { id: 55, french: "Identité civique", english: "Civic identity", category: "Citoyenneté et participation" },
    { id: 56, french: "Identité collective", english: "Collective identity", category: "Citoyenneté et participation" },
    { id: 57, french: "Identité politique", english: "Political identity", category: "Citoyenneté et participation" },
    { id: 58, french: "Identité moderne", english: "Modern identity", category: "Citoyenneté et participation" },
    { id: 59, french: "Identité inclusive", english: "Inclusive identity", category: "Citoyenneté et participation" },
    { id: 60, french: "Héritage démocratique", english: "Democratic heritage", category: "Citoyenneté et participation" },

    // 7. Diversité et intégration / Diversity and Integration
    { id: 61, french: "Diversité", english: "Diversity", category: "Diversité et intégration" },
    { id: 62, french: "Multiculturalisme", english: "Multiculturalism", category: "Diversité et intégration" },
    { id: 63, french: "Intégration", english: "Integration", category: "Diversité et intégration" },
    { id: 64, french: "Assimilation", english: "Assimilation", category: "Diversité et intégration" },
    { id: 65, french: "Identité culturelle", english: "Cultural identity", category: "Diversité et intégration" },
    { id: 66, french: "Identité ethnique", english: "Ethnic identity", category: "Diversité et intégration" },
    { id: 67, french: "Identité de genre", english: "Gender identity", category: "Diversité et intégration" },
    { id: 68, french: "Diversité sexuelle", english: "Sexual diversity", category: "Diversité et intégration" },
    { id: 69, french: "Pluralisme", english: "Pluralism", category: "Diversité et intégration" },
    { id: 70, french: "Tolérance", english: "Tolerance", category: "Diversité et intégration" },

    // 8. Cohésion et communauté / Cohesion and Community
    { id: 71, french: "Unité", english: "Unity", category: "Cohésion et communauté" },
    { id: 72, french: "Cohésion sociale", english: "Social cohesion", category: "Cohésion et communauté" },
    { id: 73, french: "Cohésion nationale", english: "National cohesion", category: "Cohésion et communauté" },
    { id: 74, french: "Solidarité", english: "Solidarity", category: "Cohésion et communauté" },
    { id: 75, french: "Communauté", english: "Community", category: "Cohésion et communauté" },
    { id: 76, french: "Inclusion", english: "Inclusion", category: "Cohésion et communauté" },
    { id: 77, french: "Exclusion", english: "Exclusion", category: "Cohésion et communauté" },
    { id: 78, french: "Conflit culturel", english: "Cultural conflict", category: "Cohésion et communauté" },
    { id: 79, french: "Intolérance", english: "Intolerance", category: "Cohésion et communauté" },
    { id: 80, french: "Polarisation", english: "Polarization", category: "Cohésion et communauté" },

    // 9. Identités contemporaines / Contemporary Identities
    { id: 81, french: "Post-colonialisme", english: "Post-colonialism", category: "Identités contemporaines" },
    { id: 82, french: "Identité post-moderne", english: "Postmodern identity", category: "Identités contemporaines" },
    { id: 83, french: "Identité post-nationale", english: "Post-national identity", category: "Identités contemporaines" },
    { id: 84, french: "Identité hybride", english: "Hybrid identity", category: "Identités contemporaines" },
    { id: 85, french: "Identité diasporique", english: "Diasporic identity", category: "Identités contemporaines" },
    { id: 86, french: "Globalisation", english: "Globalization", category: "Identités contemporaines" },
    { id: 87, french: "Identité globale", english: "Global identity", category: "Identités contemporaines" },
    { id: 88, french: "Cosmopolitisme", english: "Cosmopolitanism", category: "Identités contemporaines" },
    { id: 89, french: "Transnationalisme", english: "Transnationalism", category: "Identités contemporaines" },
    { id: 90, french: "Identité européenne", english: "European identity", category: "Identités contemporaines" },

    // 10. Débats et enjeux actuels / Current Debates and Issues
    { id: 91, french: "Débat identitaire", english: "Identity debate", category: "Débats et enjeux actuels" },
    { id: 92, french: "Nationalisme", english: "Nationalism", category: "Débats et enjeux actuels" },
    { id: 93, french: "Nationalisme extrême", english: "Extreme nationalism", category: "Débats et enjeux actuels" },
    { id: 94, french: "Populisme", english: "Populism", category: "Débats et enjeux actuels" },
    { id: 95, french: "Identité régionale", english: "Regional identity", category: "Débats et enjeux actuels" },
    { id: 96, french: "Décentralisation", english: "Devolution", category: "Débats et enjeux actuels" },
    { id: 97, french: "Autonomie", english: "Autonomy", category: "Débats et enjeux actuels" },
    { id: 98, french: "Identité locale", english: "Local identity", category: "Débats et enjeux actuels" },
    { id: 99, french: "Tradition", english: "Tradition", category: "Débats et enjeux actuels" },
    { id: 100, french: "Identité linguistique", english: "Linguistic identity", category: "Débats et enjeux actuels" },
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
      'Religion civile et spiritualité': 'bg-purple-500',
      'Identité nationale et patriotisme': 'bg-blue-500',
      'Culture et valeurs civiques': 'bg-green-500',
      'Symboles et rituels': 'bg-red-500',
      'Histoire et mémoire': 'bg-orange-500',
      'Citoyenneté et participation': 'bg-indigo-500',
      'Diversité et intégration': 'bg-pink-500',
      'Cohésion et communauté': 'bg-teal-500',
      'Identités contemporaines': 'bg-cyan-500',
      'Débats et enjeux actuels': 'bg-yellow-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-white">
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
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                Religion civile et Identité nationale
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
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte principale */}
        <Card className="mb-8 border-2 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50">
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
                  <h2 className="text-3xl font-bold text-purple-600 mb-4">
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
                <div>
                  <p className="font-semibold mb-2">Actions :</p>
                  <p>R : Recommencer</p>
                  <p>S : Mélanger</p>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        )}

        {/* Statistiques */}
        <Card className="border-2 border-gray-200">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-gray-600" />
              Statistiques du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-purple-600">{vocabularyData.length}</p>
                <p className="text-sm text-gray-600">Mots au total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.ceil(vocabularyData.length / 10)}
                </p>
                <p className="text-sm text-gray-600">Catégories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-600">
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

export default CivilReligionVocabularyPage; 