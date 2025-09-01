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

const EconomyVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Concepts économiques de base / Basic Economic Concepts
    { id: 1, french: "Économie", english: "Economy", category: "Concepts économiques de base" },
    { id: 2, french: "Croissance économique", english: "Economic growth", category: "Concepts économiques de base" },
    { id: 3, french: "Développement", english: "Development", category: "Concepts économiques de base" },
    { id: 4, french: "PIB (Produit Intérieur Brut)", english: "GDP (Gross Domestic Product)", category: "Concepts économiques de base" },
    { id: 5, french: "Inflation", english: "Inflation", category: "Concepts économiques de base" },
    { id: 6, french: "Déflation", english: "Deflation", category: "Concepts économiques de base" },
    { id: 7, french: "Récession", english: "Recession", category: "Concepts économiques de base" },
    { id: 8, french: "Crise économique", english: "Economic crisis", category: "Concepts économiques de base" },
    { id: 9, french: "Stagnation", english: "Stagnation", category: "Concepts économiques de base" },
    { id: 10, french: "Relance", english: "Recovery", category: "Concepts économiques de base" },

    // 2. Politiques économiques / Economic Policies
    { id: 11, french: "Politique budgétaire", english: "Fiscal policy", category: "Politiques économiques" },
    { id: 12, french: "Politique monétaire", english: "Monetary policy", category: "Politiques économiques" },
    { id: 13, french: "Dépenses publiques", english: "Public spending", category: "Politiques économiques" },
    { id: 14, french: "Recettes fiscales", english: "Tax revenues", category: "Politiques économiques" },
    { id: 15, french: "Impôts", english: "Taxes", category: "Politiques économiques" },
    { id: 16, french: "Dette publique", english: "Public debt", category: "Politiques économiques" },
    { id: 17, french: "Déficit budgétaire", english: "Budget deficit", category: "Politiques économiques" },
    { id: 18, french: "Équilibre budgétaire", english: "Balanced budget", category: "Politiques économiques" },
    { id: 19, french: "Banques centrales", english: "Central banks", category: "Politiques économiques" },
    { id: 20, french: "Taux d'intérêt", english: "Interest rate", category: "Politiques économiques" },

    // 3. Commerce et mondialisation / Trade and Globalization
    { id: 21, french: "Commerce international", english: "International trade", category: "Commerce et mondialisation" },
    { id: 22, french: "Libre-échange", english: "Free trade", category: "Commerce et mondialisation" },
    { id: 23, french: "Protectionnisme", english: "Protectionism", category: "Commerce et mondialisation" },
    { id: 24, french: "Barrières douanières", english: "Trade barriers", category: "Commerce et mondialisation" },
    { id: 25, french: "Droits de douane", english: "Customs duties", category: "Commerce et mondialisation" },
    { id: 26, french: "Balance commerciale", english: "Trade balance", category: "Commerce et mondialisation" },
    { id: 27, french: "Balance des paiements", english: "Balance of payments", category: "Commerce et mondialisation" },
    { id: 28, french: "Excédent commercial", english: "Trade surplus", category: "Commerce et mondialisation" },
    { id: 29, french: "Déficit commercial", english: "Trade deficit", category: "Commerce et mondialisation" },
    { id: 30, french: "Échanges", english: "Exchanges", category: "Commerce et mondialisation" },

    // 4. Acteurs économiques / Economic Actors
    { id: 31, french: "Multinationale", english: "Multinational corporation (MNC)", category: "Acteurs économiques" },
    { id: 32, french: "Entreprise", english: "Company / Firm", category: "Acteurs économiques" },
    { id: 33, french: "PME (petite et moyenne entreprise)", english: "SME (Small and Medium-sized Enterprise)", category: "Acteurs économiques" },
    { id: 34, french: "Start-up", english: "Start-up", category: "Acteurs économiques" },
    { id: 35, french: "Actionnaire", english: "Shareholder", category: "Acteurs économiques" },
    { id: 36, french: "Investisseur", english: "Investor", category: "Acteurs économiques" },
    { id: 37, french: "Consommateur", english: "Consumer", category: "Acteurs économiques" },
    { id: 38, french: "Producteur", english: "Producer", category: "Acteurs économiques" },
    { id: 39, french: "Travailleur", english: "Worker", category: "Acteurs économiques" },
    { id: 40, french: "Syndicat", english: "Trade union", category: "Acteurs économiques" },

    // 5. Finances et marchés / Finance and Markets
    { id: 41, french: "Bourse", english: "Stock exchange", category: "Finances et marchés" },
    { id: 42, french: "Action", english: "Share / Stock", category: "Finances et marchés" },
    { id: 43, french: "Obligation", english: "Bond", category: "Finances et marchés" },
    { id: 44, french: "Fonds spéculatif", english: "Hedge fund", category: "Finances et marchés" },
    { id: 45, french: "Investissement", english: "Investment", category: "Finances et marchés" },
    { id: 46, french: "Capital-risque", english: "Venture capital", category: "Finances et marchés" },
    { id: 47, french: "Capitaux", english: "Capital", category: "Finances et marchés" },
    { id: 48, french: "Dividendes", english: "Dividends", category: "Finances et marchés" },
    { id: 49, french: "Fusion", english: "Merger", category: "Finances et marchés" },
    { id: 50, french: "Acquisition", english: "Acquisition", category: "Finances et marchés" },

    // 6. Mondialisation économique / Economic Globalization
    { id: 51, french: "Mondialisation", english: "Globalization", category: "Mondialisation économique" },
    { id: 52, french: "Délocalisation", english: "Offshoring", category: "Mondialisation économique" },
    { id: 53, french: "Externalisation", english: "Outsourcing", category: "Mondialisation économique" },
    { id: 54, french: "Compétitivité", english: "Competitiveness", category: "Mondialisation économique" },
    { id: 55, french: "Avantage comparatif", english: "Comparative advantage", category: "Mondialisation économique" },
    { id: 56, french: "Interdépendance", english: "Interdependence", category: "Mondialisation économique" },
    { id: 57, french: "Flux de capitaux", english: "Capital flows", category: "Mondialisation économique" },
    { id: 58, french: "Flux migratoires", english: "Migration flows", category: "Mondialisation économique" },
    { id: 59, french: "Flux commerciaux", english: "Trade flows", category: "Mondialisation économique" },
    { id: 60, french: "Libéralisation", english: "Liberalization", category: "Mondialisation économique" },

    // 7. Institutions internationales / International Institutions
    { id: 61, french: "OMC (Organisation mondiale du commerce)", english: "WTO (World Trade Organization)", category: "Institutions internationales" },
    { id: 62, french: "FMI", english: "IMF (International Monetary Fund)", category: "Institutions internationales" },
    { id: 63, french: "Banque mondiale", english: "World Bank", category: "Institutions internationales" },
    { id: 64, french: "OCDE", english: "OECD (Organisation for Economic Co-operation and Development)", category: "Institutions internationales" },
    { id: 65, french: "G7", english: "G7", category: "Institutions internationales" },
    { id: 66, french: "G20", english: "G20", category: "Institutions internationales" },
    { id: 67, french: "Union européenne", english: "European Union (EU)", category: "Institutions internationales" },
    { id: 68, french: "Zone euro", english: "Eurozone", category: "Institutions internationales" },
    { id: 69, french: "Banque centrale européenne", english: "European Central Bank (ECB)", category: "Institutions internationales" },
    { id: 70, french: "Accord commercial", english: "Trade agreement", category: "Institutions internationales" },

    // 8. Enjeux sociaux et travail / Social Issues and Work
    { id: 71, french: "Chômage", english: "Unemployment", category: "Enjeux sociaux et travail" },
    { id: 72, french: "Taux de chômage", english: "Unemployment rate", category: "Enjeux sociaux et travail" },
    { id: 73, french: "Emploi précaire", english: "Precarious job", category: "Enjeux sociaux et travail" },
    { id: 74, french: "Travail informel", english: "Informal work", category: "Enjeux sociaux et travail" },
    { id: 75, french: "Économie souterraine", english: "Underground economy", category: "Enjeux sociaux et travail" },
    { id: 76, french: "Salaire", english: "Wage / Salary", category: "Enjeux sociaux et travail" },
    { id: 77, french: "Salaire minimum", english: "Minimum wage", category: "Enjeux sociaux et travail" },
    { id: 78, french: "Pouvoir d'achat", english: "Purchasing power", category: "Enjeux sociaux et travail" },
    { id: 79, french: "Niveau de vie", english: "Standard of living", category: "Enjeux sociaux et travail" },
    { id: 80, french: "Inégalités", english: "Inequalities", category: "Enjeux sociaux et travail" },

    // 9. Défis de la mondialisation / Globalization Challenges
    { id: 81, french: "Délocalisation industrielle", english: "Industrial relocation", category: "Défis de la mondialisation" },
    { id: 82, french: "Désindustrialisation", english: "Deindustrialization", category: "Défis de la mondialisation" },
    { id: 83, french: "Dumping social", english: "Social dumping", category: "Défis de la mondialisation" },
    { id: 84, french: "Dumping fiscal", english: "Tax dumping", category: "Défis de la mondialisation" },
    { id: 85, french: "Concurrence déloyale", english: "Unfair competition", category: "Défis de la mondialisation" },
    { id: 86, french: "Crise financière", english: "Financial crisis", category: "Défis de la mondialisation" },
    { id: 87, french: "Spéculation", english: "Speculation", category: "Défis de la mondialisation" },
    { id: 88, french: "Endettement", english: "Indebtedness", category: "Défis de la mondialisation" },
    { id: 89, french: "Choc pétrolier", english: "Oil shock", category: "Défis de la mondialisation" },
    { id: 90, french: "Pénurie", english: "Shortage", category: "Défis de la mondialisation" },

    // 10. Perspectives et alternatives / Perspectives and Alternatives
    { id: 91, french: "Développement durable", english: "Sustainable development", category: "Perspectives et alternatives" },
    { id: 92, french: "Croissance verte", english: "Green growth", category: "Perspectives et alternatives" },
    { id: 93, french: "Transition énergétique", english: "Energy transition", category: "Perspectives et alternatives" },
    { id: 94, french: "Commerce équitable", english: "Fair trade", category: "Perspectives et alternatives" },
    { id: 95, french: "Responsabilité sociale des entreprises", english: "Corporate social responsibility (CSR)", category: "Perspectives et alternatives" },
    { id: 96, french: "Taux de change", english: "Exchange rate", category: "Perspectives et alternatives" },
    { id: 97, french: "Mondialisation heureuse", english: "Happy globalization", category: "Perspectives et alternatives" },
    { id: 98, french: "Souveraineté économique", english: "Economic sovereignty", category: "Perspectives et alternatives" },
    { id: 99, french: "Relocalisation", english: "Reshoring", category: "Perspectives et alternatives" },
    { id: 100, french: "Multipolarité", english: "Multipolarity", category: "Perspectives et alternatives" },
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
      'Concepts économiques de base': 'bg-blue-500',
      'Politiques économiques': 'bg-green-500',
      'Commerce et mondialisation': 'bg-purple-500',
      'Acteurs économiques': 'bg-orange-500',
      'Finances et marchés': 'bg-red-500',
      'Mondialisation économique': 'bg-emerald-500',
      'Institutions internationales': 'bg-teal-500',
      'Enjeux sociaux et travail': 'bg-indigo-500',
      'Défis de la mondialisation': 'bg-pink-500',
      'Perspectives et alternatives': 'bg-cyan-500',
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
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                Mondialisation et Économie
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
              className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte principale */}
        <Card className="mb-8 border-2 border-emerald-200">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
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
                  <h2 className="text-3xl font-bold text-emerald-600 mb-4">
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
              <BookOpen className="h-5 w-5 text-gray-600" />
              Statistiques du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-emerald-600">{vocabularyData.length}</p>
                <p className="text-sm text-gray-600">Mots au total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.ceil(vocabularyData.length / 10)}
                </p>
                <p className="text-sm text-gray-600">Catégories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-600">
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

export default EconomyVocabularyPage; 