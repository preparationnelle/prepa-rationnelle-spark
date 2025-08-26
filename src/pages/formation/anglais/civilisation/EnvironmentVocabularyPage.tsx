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

const EnvironmentVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Changement climatique / Climate Change
    { id: 1, french: "Changement climatique", english: "Climate Change", category: "Climate Change" },
    { id: 2, french: "Réchauffement climatique", english: "Global warming", category: "Climate Change" },
    { id: 3, french: "Effet de serre", english: "Greenhouse effect", category: "Climate Change" },
    { id: 4, french: "Gaz à effet de serre", english: "Greenhouse gas", category: "Climate Change" },
    { id: 5, french: "Dioxyde de carbone", english: "Carbon dioxide", category: "Climate Change" },
    { id: 6, french: "Méthane", english: "Methane", category: "Climate Change" },
    { id: 7, french: "Émissions", english: "Emissions", category: "Climate Change" },
    { id: 8, french: "Carbone neutre", english: "Carbon neutral", category: "Climate Change" },
    { id: 9, french: "Empreinte carbone", english: "Carbon footprint", category: "Climate Change" },
    { id: 10, french: "Dérèglement climatique", english: "Climate disruption", category: "Climate Change" },
    { id: 11, french: "Atténuation", english: "Mitigation", category: "Climate Change" },

    // 2. Énergie / Energy
    { id: 12, french: "Énergie renouvelable", english: "Renewable energy", category: "Energy" },
    { id: 13, french: "Énergie fossile", english: "Fossil fuel", category: "Energy" },
    { id: 14, french: "Énergie solaire", english: "Solar energy", category: "Energy" },
    { id: 15, french: "Énergie éolienne", english: "Wind energy", category: "Energy" },
    { id: 16, french: "Hydroélectricité", english: "Hydropower", category: "Energy" },
    { id: 17, french: "Biomasse", english: "Biomass", category: "Energy" },
    { id: 18, french: "Géothermie", english: "Geothermal energy", category: "Energy" },
    { id: 19, french: "Efficacité énergétique", english: "Energy efficiency", category: "Energy" },
    { id: 20, french: "Transition énergétique", english: "Energy transition", category: "Energy" },
    { id: 21, french: "Combustible", english: "Fuel", category: "Energy" },

    // 3. Biodiversité / Biodiversity
    { id: 22, french: "Biodiversité", english: "Biodiversity", category: "Biodiversity" },
    { id: 23, french: "Écosystème", english: "Ecosystem", category: "Biodiversity" },
    { id: 24, french: "Espèce menacée", english: "Endangered species", category: "Biodiversity" },
    { id: 25, french: "Extinction", english: "Extinction", category: "Biodiversity" },
    { id: 26, french: "Habitat", english: "Habitat", category: "Biodiversity" },
    { id: 27, french: "Conservation", english: "Conservation", category: "Biodiversity" },
    { id: 28, french: "Réserve naturelle", english: "Nature reserve", category: "Biodiversity" },
    { id: 29, french: "Déforestation", english: "Deforestation", category: "Biodiversity" },
    { id: 30, french: "Reforstation", english: "Reforestation", category: "Biodiversity" },
    { id: 31, french: "Faune", english: "Wildlife", category: "Biodiversity" },

    // 4. Pollution / Pollution
    { id: 32, french: "Pollution", english: "Pollution", category: "Pollution" },
    { id: 33, french: "Déchet", english: "Waste", category: "Pollution" },
    { id: 34, french: "Plastique à usage unique", english: "Single-use plastic", category: "Pollution" },
    { id: 35, french: "Recyclage", english: "Recycling", category: "Pollution" },
    { id: 36, french: "Pollution atmosphérique", english: "Air pollution", category: "Pollution" },
    { id: 37, french: "Pollution de l'eau", english: "Water pollution", category: "Pollution" },
    { id: 38, french: "Contamination", english: "Contamination", category: "Pollution" },
    { id: 39, french: "Microplastique", english: "Microplastic", category: "Pollution" },
    { id: 40, french: "Décharge", english: "Landfill", category: "Pollution" },
    { id: 41, french: "Incinération", english: "Incineration", category: "Pollution" },

    // 5. Ressources naturelles / Natural Resources
    { id: 42, french: "Ressource naturelle", english: "Natural resource", category: "Natural Resources" },
    { id: 43, french: "Eau potable", english: "Drinking water", category: "Natural Resources" },
    { id: 44, french: "Sol", english: "Soil", category: "Natural Resources" },
    { id: 45, french: "Érosion", english: "Erosion", category: "Natural Resources" },
    { id: 46, french: "Surexploitation", english: "Overexploitation", category: "Natural Resources" },
    { id: 47, french: "Pénurie", english: "Scarcity", category: "Natural Resources" },
    { id: 48, french: "Gestion durable", english: "Sustainable management", category: "Natural Resources" },
    { id: 49, french: "Forêt", english: "Forest", category: "Natural Resources" },
    { id: 50, french: "Minerai", english: "Mineral", category: "Natural Resources" },
    { id: 51, french: "Pétrole", english: "Oil", category: "Natural Resources" },

    // 6. Développement durable / Sustainable Development
    { id: 52, french: "Développement durable", english: "Sustainable development", category: "Sustainable Development" },
    { id: 53, french: "Économie circulaire", english: "Circular economy", category: "Sustainable Development" },
    { id: 54, french: "Consommation responsable", english: "Responsible consumption", category: "Sustainable Development" },
    { id: 55, french: "Éco-responsabilité", english: "Eco-responsibility", category: "Sustainable Development" },
    { id: 56, french: "Durabilité", english: "Sustainability", category: "Sustainable Development" },
    { id: 57, french: "Écologie", english: "Ecology", category: "Sustainable Development" },
    { id: 58, french: "Équité", english: "Equity", category: "Sustainable Development" },
    { id: 59, french: "Empreinte écologique", english: "Ecological footprint", category: "Sustainable Development" },
    { id: 60, french: "Sobriété", english: "Sobriety", category: "Sustainable Development" },
    { id: 61, french: "Résilience", english: "Resilience", category: "Sustainable Development" },

    // 7. Agriculture / Agriculture
    { id: 62, french: "Agriculture biologique", english: "Organic farming", category: "Agriculture" },
    { id: 63, french: "Agriculture intensive", english: "Intensive farming", category: "Agriculture" },
    { id: 64, french: "Pesticide", english: "Pesticide", category: "Agriculture" },
    { id: 65, french: "Engrais", english: "Fertilizer", category: "Agriculture" },
    { id: 66, french: "Dégradation des sols", english: "Soil degradation", category: "Agriculture" },
    { id: 67, french: "Agroécologie", english: "Agroecology", category: "Agriculture" },
    { id: 68, french: "Permaculture", english: "Permaculture", category: "Agriculture" },
    { id: 69, french: "Irrigation", english: "Irrigation", category: "Agriculture" },
    { id: 70, french: "Monoculture", english: "Monoculture", category: "Agriculture" },
    { id: 71, french: "Biodiversité agricole", english: "Agricultural biodiversity", category: "Agriculture" },

    // 8. Urbanisation / Urbanization
    { id: 72, french: "Urbanisation", english: "Urbanization", category: "Urbanization" },
    { id: 73, french: "Ville durable", english: "Sustainable city", category: "Urbanization" },
    { id: 74, french: "Mobilité verte", english: "Green mobility", category: "Urbanization" },
    { id: 75, french: "Transport en commun", english: "Public transport", category: "Urbanization" },
    { id: 76, french: "Pollution sonore", english: "Noise pollution", category: "Urbanization" },
    { id: 77, french: "Îlot de chaleur", english: "Urban heat island", category: "Urbanization" },
    { id: 78, french: "Espaces verts", english: "Green spaces", category: "Urbanization" },
    { id: 79, french: "Éco-quartier", english: "Eco-district", category: "Urbanization" },
    { id: 80, french: "Aménagement", english: "Planning", category: "Urbanization" },
    { id: 81, french: "Densification", english: "Densification", category: "Urbanization" },

    // 9. Politiques environnementales / Environmental Policies
    { id: 82, french: "Accord de Paris", english: "Paris Agreement", category: "Environmental Policies" },
    { id: 83, french: "Protocole de Kyoto", english: "Kyoto Protocol", category: "Environmental Policies" },
    { id: 84, french: "Réglementation", english: "Regulation", category: "Environmental Policies" },
    { id: 85, french: "Taxe carbone", english: "Carbon tax", category: "Environmental Policies" },
    { id: 86, french: "Subvention", english: "Subsidy", category: "Environmental Policies" },
    { id: 87, french: "Accord international", english: "International agreement", category: "Environmental Policies" },
    { id: 88, french: "Neutralité carbone", english: "Carbon neutrality", category: "Environmental Policies" },
    { id: 89, french: "Législation", english: "Legislation", category: "Environmental Policies" },
    { id: 90, french: "Objectifs climatiques", english: "Climate goals", category: "Environmental Policies" },
    { id: 91, french: "Coopération", english: "Cooperation", category: "Environmental Policies" },

    // 10. Phénomènes naturels / Natural Phenomena
    { id: 92, french: "Sécheresse", english: "Drought", category: "Natural Phenomena" },
    { id: 93, french: "Inondation", english: "Flood", category: "Natural Phenomena" },
    { id: 94, french: "Ouragan", english: "Hurricane", category: "Natural Phenomena" },
    { id: 95, french: "Canicule", english: "Heatwave", category: "Natural Phenomena" },
    { id: 96, french: "Fonte des glaces", english: "Ice melting", category: "Natural Phenomena" },
    { id: 97, french: "Élévation du niveau de la mer", english: "Sea level rise", category: "Natural Phenomena" },
    { id: 98, french: "Désertification", english: "Desertification", category: "Natural Phenomena" },
    { id: 99, french: "Tempête", english: "Storm", category: "Natural Phenomena" },
    { id: 100, french: "Glissement de terrain", english: "Landslide", category: "Natural Phenomena" },
    { id: 101, french: "Catastrophe naturelle", english: "Natural disaster", category: "Natural Phenomena" }
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
      'Climate Change': 'bg-red-500',
      'Energy': 'bg-yellow-500',
      'Biodiversity': 'bg-green-500',
      'Pollution': 'bg-gray-500',
      'Natural Resources': 'bg-blue-500',
      'Sustainable Development': 'bg-emerald-500',
      'Agriculture': 'bg-orange-500',
      'Urbanization': 'bg-purple-500',
      'Environmental Policies': 'bg-indigo-500',
      'Natural Phenomena': 'bg-pink-500'
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
          <h1 className="text-xl font-semibold text-gray-800">Vocabulaire Environnemental</h1>
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

export default EnvironmentVocabularyPage; 