import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const CommonwealthVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Commonwealth et Empire / Commonwealth and Empire
    { id: 1, french: "Commonwealth", english: "Commonwealth", category: "Commonwealth et Empire" },
    { id: 2, french: "Empire britannique", english: "British Empire", category: "Commonwealth et Empire" },
    { id: 3, french: "Héritage colonial", english: "Colonial legacy", category: "Commonwealth et Empire" },
    { id: 4, french: "Post-colonialisme", english: "Post-colonialism", category: "Commonwealth et Empire" },
    { id: 5, french: "Décolonisation", english: "Decolonization", category: "Commonwealth et Empire" },
    { id: 6, french: "Indépendance", english: "Independence", category: "Commonwealth et Empire" },
    { id: 7, french: "Souveraineté", english: "Sovereignty", category: "Commonwealth et Empire" },
    { id: 8, french: "Colonialisme économique", english: "Economic colonialism", category: "Commonwealth et Empire" },
    { id: 9, french: "Néocolonialisme", english: "Neocolonialism", category: "Commonwealth et Empire" },
    { id: 10, french: "Dépendance", english: "Dependence", category: "Commonwealth et Empire" },

    // 2. Relations et coopération / Relations and Cooperation
    { id: 11, french: "Relations bilatérales", english: "Bilateral relations", category: "Relations et coopération" },
    { id: 12, french: "Coopération", english: "Cooperation", category: "Relations et coopération" },
    { id: 13, french: "Coopération militaire", english: "Military cooperation", category: "Relations et coopération" },
    { id: 14, french: "Coopération régionale", english: "Regional cooperation", category: "Relations et coopération" },
    { id: 15, french: "Coopération économique", english: "Economic cooperation", category: "Relations et coopération" },
    { id: 16, french: "Alliance", english: "Alliance", category: "Relations et coopération" },
    { id: 17, french: "Partenariat", english: "Partnership", category: "Relations et coopération" },
    { id: 18, french: "Intégration", english: "Integration", category: "Relations et coopération" },
    { id: 19, french: "Traités", english: "Treaties", category: "Relations et coopération" },
    { id: 20, french: "Accord", english: "Agreement", category: "Relations et coopération" },

    // 3. Développement et économie / Development and Economy
    { id: 21, french: "Développement", english: "Development", category: "Développement et économie" },
    { id: 22, french: "Aide au développement", english: "Development aid", category: "Développement et économie" },
    { id: 23, french: "Développement durable", english: "Sustainable development", category: "Développement et économie" },
    { id: 24, french: "Économie", english: "Economy", category: "Développement et économie" },
    { id: 25, french: "Commerce", english: "Trade", category: "Développement et économie" },
    { id: 26, french: "Commerce équitable", english: "Fair trade", category: "Développement et économie" },
    { id: 27, french: "Investissement", english: "Investment", category: "Développement et économie" },
    { id: 28, french: "Économie informelle", english: "Informal economy", category: "Développement et économie" },
    { id: 29, french: "Dépendance économique", english: "Economic dependence", category: "Développement et économie" },
    { id: 30, french: "Ressources naturelles", english: "Natural resources", category: "Développement et économie" },

    // 4. Culture et identité / Culture and Identity
    { id: 31, french: "Culture", english: "Culture", category: "Culture et identité" },
    { id: 32, french: "Identité", english: "Identity", category: "Culture et identité" },
    { id: 33, french: "Identité nationale", english: "National identity", category: "Culture et identité" },
    { id: 34, french: "Identité post-coloniale", english: "Post-colonial identity", category: "Culture et identité" },
    { id: 35, french: "Identité hybride", english: "Hybrid identity", category: "Culture et identité" },
    { id: 36, french: "Héritage culturel", english: "Cultural heritage", category: "Culture et identité" },
    { id: 37, french: "Héritage linguistique", english: "Linguistic heritage", category: "Culture et identité" },
    { id: 38, french: "Héritage historique", english: "Historical heritage", category: "Culture et identité" },
    { id: 39, french: "Héritage institutionnel", english: "Institutional heritage", category: "Culture et identité" },
    { id: 40, french: "Tradition", english: "Tradition", category: "Culture et identité" },

    // 5. Éducation et formation / Education and Training
    { id: 41, french: "Éducation", english: "Education", category: "Éducation et formation" },
    { id: 42, french: "Éducation post-coloniale", english: "Post-colonial education", category: "Éducation et formation" },
    { id: 43, french: "Éducation coloniale", english: "Colonial education", category: "Éducation et formation" },
    { id: 44, french: "Éducation civique", english: "Civic education", category: "Éducation et formation" },
    { id: 45, french: "Post-colonial studies", english: "Post-colonial studies", category: "Éducation et formation" },
    { id: 46, french: "Langue", english: "Language", category: "Éducation et formation" },
    { id: 47, french: "Littérature", english: "Literature", category: "Éducation et formation" },
    { id: 48, french: "Art", english: "Art", category: "Éducation et formation" },
    { id: 49, french: "Échanges culturels", english: "Cultural exchanges", category: "Éducation et formation" },
    { id: 50, french: "Diplomatie culturelle", english: "Cultural diplomacy", category: "Éducation et formation" },

    // 6. Gouvernance et politique / Governance and Politics
    { id: 51, french: "Gouvernance", english: "Governance", category: "Gouvernance et politique" },
    { id: 52, french: "Démocratie", english: "Democracy", category: "Gouvernance et politique" },
    { id: 53, french: "Politique", english: "Politics", category: "Gouvernance et politique" },
    { id: 54, french: "Diplomatie", english: "Diplomacy", category: "Gouvernance et politique" },
    { id: 55, french: "Gouvernement", english: "Government", category: "Gouvernance et politique" },
    { id: 56, french: "Parlement", english: "Parliament", category: "Gouvernance et politique" },
    { id: 57, french: "Constitution", english: "Constitution", category: "Gouvernance et politique" },
    { id: 58, french: "Législation", english: "Legislation", category: "Gouvernance et politique" },
    { id: 59, french: "Droit", english: "Law", category: "Gouvernance et politique" },
    { id: 60, french: "Réforme", english: "Reform", category: "Gouvernance et politique" },

    // 7. Infrastructure et développement urbain / Infrastructure and Urban Development
    { id: 61, french: "Infrastructure", english: "Infrastructure", category: "Infrastructure et développement urbain" },
    { id: 62, french: "Infrastructures coloniales", english: "Colonial infrastructure", category: "Infrastructure et développement urbain" },
    { id: 63, french: "Urbanisation", english: "Urbanization", category: "Infrastructure et développement urbain" },
    { id: 64, french: "Ruralité", english: "Rurality", category: "Infrastructure et développement urbain" },
    { id: 65, french: "Modernisation", english: "Modernization", category: "Infrastructure et développement urbain" },
    { id: 66, french: "Agriculture", english: "Agriculture", category: "Infrastructure et développement urbain" },
    { id: 67, french: "Industrie", english: "Industry", category: "Infrastructure et développement urbain" },
    { id: 68, french: "Énergie", english: "Energy", category: "Infrastructure et développement urbain" },
    { id: 69, french: "Décentralisation", english: "Devolution", category: "Infrastructure et développement urbain" },
    { id: 70, french: "Autodétermination", english: "Self-determination", category: "Infrastructure et développement urbain" },

    // 8. Santé et environnement / Health and Environment
    { id: 71, french: "Santé", english: "Health", category: "Santé et environnement" },
    { id: 72, french: "Santé publique", english: "Public health", category: "Santé et environnement" },
    { id: 73, french: "Environnement", english: "Environment", category: "Santé et environnement" },
    { id: 74, french: "Changement climatique", english: "Climate change", category: "Santé et environnement" },
    { id: 75, french: "Sécurité", english: "Security", category: "Santé et environnement" },
    { id: 76, french: "Défense", english: "Defense", category: "Santé et environnement" },
    { id: 77, french: "Stabilité", english: "Stability", category: "Santé et environnement" },
    { id: 78, french: "Conflit", english: "Conflict", category: "Santé et environnement" },
    { id: 79, french: "Réconciliation", english: "Reconciliation", category: "Santé et environnement" },
    { id: 80, french: "Justice post-coloniale", english: "Post-colonial justice", category: "Santé et environnement" },

    // 9. Migration et mobilité / Migration and Mobility
    { id: 81, french: "Migration", english: "Migration", category: "Migration et mobilité" },
    { id: 82, french: "Migration post-coloniale", english: "Post-colonial migration", category: "Migration et mobilité" },
    { id: 83, french: "Diaspora", english: "Diaspora", category: "Migration et mobilité" },
    { id: 84, french: "Mobilité", english: "Mobility", category: "Migration et mobilité" },
    { id: 85, french: "Influence britannique", english: "British influence", category: "Migration et mobilité" },
    { id: 86, french: "Influence globale", english: "Global influence", category: "Migration et mobilité" },
    { id: 87, french: "Nationalisme", english: "Nationalism", category: "Migration et mobilité" },
    { id: 88, french: "Autonomie", english: "Autonomy", category: "Migration et mobilité" },
    { id: 89, french: "Mémoire collective", english: "Collective memory", category: "Migration et mobilité" },
    { id: 90, french: "Diversité", english: "Diversity", category: "Migration et mobilité" },

    // 10. Événements et activités / Events and Activities
    { id: 91, french: "Commonwealth Games", english: "Commonwealth Games", category: "Événements et activités" },
    { id: 92, french: "Sport", english: "Sport", category: "Événements et activités" },
    { id: 93, french: "Justice", english: "Justice", category: "Événements et activités" },
    { id: 94, french: "Multiculturalisme", english: "Multiculturalism", category: "Événements et activités" },
    { id: 95, french: "Inégalités", english: "Inequalities", category: "Événements et activités" },
    { id: 96, french: "Pauvreté", english: "Poverty", category: "Événements et activités" },
    { id: 97, french: "Richesse", english: "Wealth", category: "Événements et activités" },
    { id: 98, french: "Exploitation", english: "Exploitation", category: "Événements et activités" },
    { id: 99, french: "Réparation", english: "Reparation", category: "Événements et activités" },
    { id: 100, french: "Droits humains", english: "Human rights", category: "Événements et activités" },
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
      'Commonwealth et Empire': 'bg-blue-500',
      'Relations et coopération': 'bg-green-500',
      'Développement et économie': 'bg-purple-500',
      'Culture et identité': 'bg-orange-500',
      'Éducation et formation': 'bg-red-500',
      'Gouvernance et politique': 'bg-indigo-500',
      'Infrastructure et développement urbain': 'bg-pink-500',
      'Santé et environnement': 'bg-teal-500',
      'Migration et mobilité': 'bg-cyan-500',
      'Événements et activités': 'bg-yellow-500',
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
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Le Commonwealth et l'héritage post-colonial
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
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
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
              <Globe className="h-5 w-5 text-gray-600" />
              Statistiques du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">{vocabularyData.length}</p>
                <p className="text-sm text-gray-600">Mots au total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.ceil(vocabularyData.length / 10)}
                </p>
                <p className="text-sm text-gray-600">Catégories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">
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

export default CommonwealthVocabularyPage; 