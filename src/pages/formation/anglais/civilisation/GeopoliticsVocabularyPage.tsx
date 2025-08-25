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

const GeopoliticsVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Diplomatie et Coopération / Diplomacy and Cooperation
    { id: 1, french: "Diplomatie climatique", english: "Climate diplomacy", category: "Diplomatie et Coopération" },
    { id: 2, french: "Coopération internationale", english: "International cooperation", category: "Diplomatie et Coopération" },
    { id: 3, french: "Accord multilatéral", english: "Multilateral agreement", category: "Diplomatie et Coopération" },
    { id: 4, french: "Coopération bilatérale", english: "Bilateral cooperation", category: "Diplomatie et Coopération" },
    { id: 5, french: "Coopération régionale", english: "Regional cooperation", category: "Diplomatie et Coopération" },
    { id: 6, french: "Coopération transfrontalière", english: "Cross-border cooperation", category: "Diplomatie et Coopération" },
    { id: 7, french: "Coopération scientifique", english: "Scientific cooperation", category: "Diplomatie et Coopération" },
    { id: 8, french: "Coopération énergétique", english: "Energy cooperation", category: "Diplomatie et Coopération" },
    { id: 9, french: "Coopération multilatérale", english: "Multilateral cooperation", category: "Diplomatie et Coopération" },
    { id: 10, french: "Coopération humanitaire", english: "Humanitarian cooperation", category: "Diplomatie et Coopération" },

    // 2. Souveraineté et Conflits / Sovereignty and Conflicts
    { id: 11, french: "Souveraineté", english: "Sovereignty", category: "Souveraineté et Conflits" },
    { id: 12, french: "Conflit environnemental", english: "Environmental conflict", category: "Souveraineté et Conflits" },
    { id: 13, french: "Conflit hydrique", english: "Water conflict", category: "Souveraineté et Conflits" },
    { id: 14, french: "Conflit territorial", english: "Territorial conflict", category: "Souveraineté et Conflits" },
    { id: 15, french: "Conflit climatique", english: "Climate conflict", category: "Souveraineté et Conflits" },
    { id: 16, french: "Conflit économique", english: "Economic conflict", category: "Souveraineté et Conflits" },
    { id: 17, french: "Conflit de ressources", english: "Resource conflict", category: "Souveraineté et Conflits" },
    { id: 18, french: "Tensions géopolitiques", english: "Geopolitical tensions", category: "Souveraineté et Conflits" },
    { id: 19, french: "Crise migratoire", english: "Migration crisis", category: "Souveraineté et Conflits" },
    { id: 20, french: "Crise alimentaire", english: "Food crisis", category: "Souveraineté et Conflits" },

    // 3. Énergie et Ressources / Energy and Resources
    { id: 21, french: "Géopolitique de l'énergie", english: "Energy geopolitics", category: "Énergie et Ressources" },
    { id: 22, french: "Ressources stratégiques", english: "Strategic resources", category: "Énergie et Ressources" },
    { id: 23, french: "Accès à l'eau", english: "Water access", category: "Énergie et Ressources" },
    { id: 24, french: "Sécurité énergétique", english: "Energy security", category: "Énergie et Ressources" },
    { id: 25, french: "Gestion des ressources", english: "Resource management", category: "Énergie et Ressources" },
    { id: 26, french: "Compétition énergétique", english: "Energy competition", category: "Énergie et Ressources" },
    { id: 27, french: "Géopolitique de l'eau", english: "Water geopolitics", category: "Énergie et Ressources" },
    { id: 28, french: "Ressources partagées", english: "Shared resources", category: "Énergie et Ressources" },
    { id: 29, french: "Accès aux ressources", english: "Resource access", category: "Énergie et Ressources" },
    { id: 30, french: "Sécurité hydrique", english: "Water security", category: "Énergie et Ressources" },

    // 4. Sécurité et Gouvernance / Security and Governance
    { id: 31, french: "Sécurité alimentaire", english: "Food security", category: "Sécurité et Gouvernance" },
    { id: 32, french: "Sécurité environnementale", english: "Environmental security", category: "Sécurité et Gouvernance" },
    { id: 33, french: "Sécurité climatique", english: "Climate security", category: "Sécurité et Gouvernance" },
    { id: 34, french: "Sécurité globale", english: "Global security", category: "Sécurité et Gouvernance" },
    { id: 35, french: "Sécurité des ressources", english: "Resource security", category: "Sécurité et Gouvernance" },
    { id: 36, french: "Gouvernance mondiale", english: "Global governance", category: "Sécurité et Gouvernance" },
    { id: 37, french: "Gouvernance régionale", english: "Regional governance", category: "Sécurité et Gouvernance" },
    { id: 38, french: "Régulation mondiale", english: "Global regulation", category: "Sécurité et Gouvernance" },
    { id: 39, french: "Régimes internationaux", english: "International regimes", category: "Sécurité et Gouvernance" },
    { id: 40, french: "Gestion des crises", english: "Crisis management", category: "Sécurité et Gouvernance" },

    // 5. Influence et Pouvoir / Influence and Power
    { id: 41, french: "Soft power", english: "Soft power", category: "Influence et Pouvoir" },
    { id: 42, french: "Hard power", english: "Hard power", category: "Influence et Pouvoir" },
    { id: 43, french: "Influence géopolitique", english: "Geopolitical influence", category: "Influence et Pouvoir" },
    { id: 44, french: "Influence régionale", english: "Regional influence", category: "Influence et Pouvoir" },
    { id: 45, french: "Influence environnementale", english: "Environmental influence", category: "Influence et Pouvoir" },
    { id: 46, french: "Influence mondiale", english: "Global influence", category: "Influence et Pouvoir" },
    { id: 47, french: "Leadership climatique", english: "Climate leadership", category: "Influence et Pouvoir" },
    { id: 48, french: "Leadership régional", english: "Regional leadership", category: "Influence et Pouvoir" },
    { id: 49, french: "Compétition économique", english: "Economic competition", category: "Influence et Pouvoir" },
    { id: 50, french: "Compétition technologique", english: "Technological competition", category: "Influence et Pouvoir" },

    // 6. Organisations et Accords / Organizations and Agreements
    { id: 51, french: "Organisations internationales", english: "International organizations", category: "Organisations et Accords" },
    { id: 52, french: "Sommet climatique", english: "Climate summit", category: "Organisations et Accords" },
    { id: 53, french: "Traité international", english: "International treaty", category: "Organisations et Accords" },
    { id: 54, french: "Accord régional", english: "Regional agreement", category: "Organisations et Accords" },
    { id: 55, french: "Accords commerciaux", english: "Trade agreements", category: "Organisations et Accords" },
    { id: 56, french: "Partenariat international", english: "International partnership", category: "Organisations et Accords" },
    { id: 57, french: "Alliances stratégiques", english: "Strategic alliances", category: "Organisations et Accords" },
    { id: 58, french: "Partenariat stratégique", english: "Strategic partnership", category: "Organisations et Accords" },
    { id: 59, french: "Accord de coopération", english: "Cooperation agreement", category: "Organisations et Accords" },
    { id: 60, french: "Pacte environnemental", english: "Environmental pact", category: "Organisations et Accords" },

    // 7. Développement et Objectifs / Development and Goals
    { id: 61, french: "Agenda 2030", english: "Agenda 2030", category: "Développement et Objectifs" },
    { id: 62, french: "Objectifs de développement durable", english: "Sustainable Development Goals (SDGs)", category: "Développement et Objectifs" },
    { id: 63, french: "Développement durable", english: "Sustainable development", category: "Développement et Objectifs" },
    { id: 64, french: "Transition écologique", english: "Ecological transition", category: "Développement et Objectifs" },
    { id: 65, french: "Gestion des catastrophes", english: "Disaster management", category: "Développement et Objectifs" },
    { id: 66, french: "Gestion des migrations", english: "Migration management", category: "Développement et Objectifs" },
    { id: 67, french: "Gestion transnationale", english: "Transnational management", category: "Développement et Objectifs" },
    { id: 68, french: "Gestion des risques", english: "Risk management", category: "Développement et Objectifs" },
    { id: 69, french: "Gestion des tensions", english: "Tension management", category: "Développement et Objectifs" },
    { id: 70, french: "Planification écologique", english: "Ecological planning", category: "Développement et Objectifs" },

    // 8. Solidarité et Équité / Solidarity and Equity
    { id: 71, french: "Solidarité internationale", english: "International solidarity", category: "Solidarité et Équité" },
    { id: 72, french: "Solidarité climatique", english: "Climate solidarity", category: "Solidarité et Équité" },
    { id: 73, french: "Solidarité régionale", english: "Regional solidarity", category: "Solidarité et Équité" },
    { id: 74, french: "Équité climatique", english: "Climate equity", category: "Solidarité et Équité" },
    { id: 75, french: "Équité internationale", english: "International equity", category: "Solidarité et Équité" },
    { id: 76, french: "Équité environnementale", english: "Environmental equity", category: "Solidarité et Équité" },
    { id: 77, french: "Inégalités environnementales", english: "Environmental inequalities", category: "Solidarité et Équité" },
    { id: 78, french: "Partenariats Nord-Sud", english: "North-South partnerships", category: "Solidarité et Équité" },
    { id: 79, french: "Dialogue Nord-Sud", english: "North-South dialogue", category: "Solidarité et Équité" },
    { id: 80, french: "Résilience géopolitique", english: "Geopolitical resilience", category: "Solidarité et Équité" },

    // 9. Diplomatie et Dialogue / Diplomacy and Dialogue
    { id: 81, french: "Diplomatie économique", english: "Economic diplomacy", category: "Diplomatie et Dialogue" },
    { id: 82, french: "Diplomatie multilatérale", english: "Multilateral diplomacy", category: "Diplomatie et Dialogue" },
    { id: 83, french: "Diplomatie verte", english: "Green diplomacy", category: "Diplomatie et Dialogue" },
    { id: 84, french: "Diplomatie scientifique", english: "Scientific diplomacy", category: "Diplomatie et Dialogue" },
    { id: 85, french: "Diplomatie culturelle", english: "Cultural diplomacy", category: "Diplomatie et Dialogue" },
    { id: 86, french: "Diplomatie énergétique", english: "Energy diplomacy", category: "Diplomatie et Dialogue" },
    { id: 87, french: "Négociations climatiques", english: "Climate negotiations", category: "Diplomatie et Dialogue" },
    { id: 88, french: "Dialogue multilatéral", english: "Multilateral dialogue", category: "Diplomatie et Dialogue" },
    { id: 89, french: "Dialogue international", english: "International dialogue", category: "Diplomatie et Dialogue" },
    { id: 90, french: "Dialogue climatique", english: "Climate dialogue", category: "Diplomatie et Dialogue" },

    // 10. Crise et Résolution / Crisis and Resolution
    { id: 91, french: "Crise écologique", english: "Ecological crisis", category: "Crise et Résolution" },
    { id: 92, french: "Crise humanitaire", english: "Humanitarian crisis", category: "Crise et Résolution" },
    { id: 93, french: "Sécurité alimentaire mondiale", english: "Global food security", category: "Crise et Résolution" },
    { id: 94, french: "Réfugiés climatiques", english: "Climate refugees", category: "Crise et Résolution" },
    { id: 95, french: "Frontières écologiques", english: "Ecological borders", category: "Crise et Résolution" },
    { id: 96, french: "Médiation internationale", english: "International mediation", category: "Crise et Résolution" },
    { id: 97, french: "Résolution de conflits", english: "Conflict resolution", category: "Crise et Résolution" },
    { id: 98, french: "Fonds climatique", english: "Climate fund", category: "Crise et Résolution" },
    { id: 99, french: "Sanctions environnementales", english: "Environmental sanctions", category: "Crise et Résolution" },
    { id: 100, french: "Plan d'urgence", english: "Emergency plan", category: "Crise et Résolution" },
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
      'Diplomatie et Coopération': 'bg-blue-500',
      'Souveraineté et Conflits': 'bg-red-500',
      'Énergie et Ressources': 'bg-green-500',
      'Sécurité et Gouvernance': 'bg-purple-500',
      'Influence et Pouvoir': 'bg-orange-500',
      'Organisations et Accords': 'bg-indigo-500',
      'Développement et Objectifs': 'bg-teal-500',
      'Solidarité et Équité': 'bg-pink-500',
      'Diplomatie et Dialogue': 'bg-cyan-500',
      'Crise et Résolution': 'bg-amber-500',
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
                Géopolitique et Relations internationales
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
              <BookOpen className="h-5 w-5 text-gray-600" />
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

export default GeopoliticsVocabularyPage; 