import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const CrisesVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Crises sanitaires et pandémiques / Health and Pandemic Crises
    { id: 1, french: "Crise", english: "Crisis", category: "Crises sanitaires et pandémiques" },
    { id: 2, french: "Pandémie", english: "Pandemic", category: "Crises sanitaires et pandémiques" },
    { id: 3, french: "Réponse pandémique", english: "Pandemic response", category: "Crises sanitaires et pandémiques" },
    { id: 4, french: "Crise sanitaire", english: "Health crisis", category: "Crises sanitaires et pandémiques" },
    { id: 5, french: "Épidémie", english: "Epidemic", category: "Crises sanitaires et pandémiques" },
    { id: 6, french: "Vaccination", english: "Vaccination", category: "Crises sanitaires et pandémiques" },
    { id: 7, french: "Confinement", english: "Lockdown", category: "Crises sanitaires et pandémiques" },
    { id: 8, french: "Distanciation sociale", english: "Social distancing", category: "Crises sanitaires et pandémiques" },
    { id: 9, french: "Crise de la santé mentale", english: "Mental health crisis", category: "Crises sanitaires et pandémiques" },
    { id: 10, french: "Stress", english: "Stress", category: "Crises sanitaires et pandémiques" },

    // 2. Crises économiques et financières / Economic and Financial Crises
    { id: 11, french: "Inflation", english: "Inflation", category: "Crises économiques et financières" },
    { id: 12, french: "Récession", english: "Recession", category: "Crises économiques et financières" },
    { id: 13, french: "Dépression économique", english: "Economic depression", category: "Crises économiques et financières" },
    { id: 14, french: "Chômage", english: "Unemployment", category: "Crises économiques et financières" },
    { id: 15, french: "Crise financière", english: "Financial crisis", category: "Crises économiques et financières" },
    { id: 16, french: "Dette", english: "Debt", category: "Crises économiques et financières" },
    { id: 17, french: "Banqueroute", english: "Bankruptcy", category: "Crises économiques et financières" },
    { id: 18, french: "Pénurie de main-d'œuvre", english: "Labor shortage", category: "Crises économiques et financières" },
    { id: 19, french: "Crise logistique", english: "Logistic crisis", category: "Crises économiques et financières" },
    { id: 20, french: "Chaîne d'approvisionnement", english: "Supply chain", category: "Crises économiques et financières" },

    // 3. Crises environnementales et climatiques / Environmental and Climate Crises
    { id: 21, french: "Changement climatique", english: "Climate change", category: "Crises environnementales et climatiques" },
    { id: 22, french: "Crise environnementale", english: "Environmental crisis", category: "Crises environnementales et climatiques" },
    { id: 23, french: "Crise climatique", english: "Climate crisis", category: "Crises environnementales et climatiques" },
    { id: 24, french: "Pollution", english: "Pollution", category: "Crises environnementales et climatiques" },
    { id: 25, french: "Déforestation", english: "Deforestation", category: "Crises environnementales et climatiques" },
    { id: 26, french: "Extinction", english: "Extinction", category: "Crises environnementales et climatiques" },
    { id: 27, french: "Crise de l'eau", english: "Water crisis", category: "Crises environnementales et climatiques" },
    { id: 28, french: "Pénurie d'eau", english: "Water shortage", category: "Crises environnementales et climatiques" },
    { id: 29, french: "Érosion", english: "Erosion", category: "Crises environnementales et climatiques" },
    { id: 30, french: "Désertification", english: "Desertification", category: "Crises environnementales et climatiques" },

    // 4. Catastrophes naturelles / Natural Disasters
    { id: 31, french: "Catastrophe naturelle", english: "Natural disaster", category: "Catastrophes naturelles" },
    { id: 32, french: "Sécheresse", english: "Drought", category: "Catastrophes naturelles" },
    { id: 33, french: "Inondation", english: "Flood", category: "Catastrophes naturelles" },
    { id: 34, french: "Ouragan", english: "Hurricane", category: "Catastrophes naturelles" },
    { id: 35, french: "Canicule", english: "Heatwave", category: "Catastrophes naturelles" },
    { id: 36, french: "Crise écologique", english: "Ecological crisis", category: "Catastrophes naturelles" },
    { id: 37, french: "Solution durable", english: "Sustainable solution", category: "Catastrophes naturelles" },
    { id: 38, french: "Résilience", english: "Resilience", category: "Catastrophes naturelles" },
    { id: 39, french: "Adaptation", english: "Adaptation", category: "Catastrophes naturelles" },
    { id: 40, french: "Reconstruction", english: "Reconstruction", category: "Catastrophes naturelles" },

    // 5. Crises migratoires et humanitaires / Migration and Humanitarian Crises
    { id: 41, french: "Crise migratoire", english: "Migration crisis", category: "Crises migratoires et humanitaires" },
    { id: 42, french: "Crise humanitaire", english: "Humanitarian crisis", category: "Crises migratoires et humanitaires" },
    { id: 43, french: "Réfugié", english: "Refugee", category: "Crises migratoires et humanitaires" },
    { id: 44, french: "Déplacement forcé", english: "Forced displacement", category: "Crises migratoires et humanitaires" },
    { id: 45, french: "Réfugiés de guerre", english: "War refugees", category: "Crises migratoires et humanitaires" },
    { id: 46, french: "Aide humanitaire", english: "Humanitarian aid", category: "Crises migratoires et humanitaires" },
    { id: 47, french: "Crise post-conflit", english: "Post-conflict crisis", category: "Crises migratoires et humanitaires" },
    { id: 48, french: "Plan de relance", english: "Recovery plan", category: "Crises migratoires et humanitaires" },
    { id: 49, french: "Stabilité", english: "Stability", category: "Crises migratoires et humanitaires" },
    { id: 50, french: "Crise régionale", english: "Regional crisis", category: "Crises migratoires et humanitaires" },

    // 6. Crises politiques et conflits / Political Crises and Conflicts
    { id: 51, french: "Crise politique", english: "Political crisis", category: "Crises politiques et conflits" },
    { id: 52, french: "Crise politique internationale", english: "International political crisis", category: "Crises politiques et conflits" },
    { id: 53, french: "Conflit", english: "Conflict", category: "Crises politiques et conflits" },
    { id: 54, french: "Guerre", english: "War", category: "Crises politiques et conflits" },
    { id: 55, french: "Instabilité", english: "Instability", category: "Crises politiques et conflits" },
    { id: 56, french: "Coup d'État", english: "Coup", category: "Crises politiques et conflits" },
    { id: 57, french: "Terrorisme", english: "Terrorism", category: "Crises politiques et conflits" },
    { id: 58, french: "Crise diplomatique", english: "Diplomatic crisis", category: "Crises politiques et conflits" },
    { id: 59, french: "Sanctions", english: "Sanctions", category: "Crises politiques et conflits" },
    { id: 60, french: "Embargo", english: "Embargo", category: "Crises politiques et conflits" },

    // 7. Crises technologiques et cybersécurité / Technological and Cybersecurity Crises
    { id: 61, french: "Crise technologique", english: "Technological crisis", category: "Crises technologiques et cybersécurité" },
    { id: 62, french: "Cybersécurité", english: "Cybersecurity", category: "Crises technologiques et cybersécurité" },
    { id: 63, french: "Attaque informatique", english: "Cyberattack", category: "Crises technologiques et cybersécurité" },
    { id: 64, french: "Désinformation", english: "Disinformation", category: "Crises technologiques et cybersécurité" },
    { id: 65, french: "Désinformation de masse", english: "Mass disinformation", category: "Crises technologiques et cybersécurité" },
    { id: 66, french: "Crise de la vérité", english: "Truth crisis", category: "Crises technologiques et cybersécurité" },
    { id: 67, french: "Polarisation", english: "Polarization", category: "Crises technologiques et cybersécurité" },
    { id: 68, french: "Crise de confiance", english: "Trust crisis", category: "Crises technologiques et cybersécurité" },
    { id: 69, french: "Négociation", english: "Negotiation", category: "Crises technologiques et cybersécurité" },
    { id: 70, french: "Médiation", english: "Mediation", category: "Crises technologiques et cybersécurité" },

    // 8. Crises sociales et urbaines / Social and Urban Crises
    { id: 71, french: "Crise sociale", english: "Social crisis", category: "Crises sociales et urbaines" },
    { id: 72, french: "Inégalités", english: "Inequalities", category: "Crises sociales et urbaines" },
    { id: 73, french: "Pauvreté", english: "Poverty", category: "Crises sociales et urbaines" },
    { id: 74, french: "Crise urbaine", english: "Urban crisis", category: "Crises sociales et urbaines" },
    { id: 75, french: "Surpopulation", english: "Overpopulation", category: "Crises sociales et urbaines" },
    { id: 76, french: "Crise de logement", english: "Housing crisis", category: "Crises sociales et urbaines" },
    { id: 77, french: "Sans-abrisme", english: "Homelessness", category: "Crises sociales et urbaines" },
    { id: 78, french: "Crise des infrastructures", english: "Infrastructure crisis", category: "Crises sociales et urbaines" },
    { id: 79, french: "Blackout", english: "Blackout", category: "Crises sociales et urbaines" },
    { id: 80, french: "Protestation", english: "Protest", category: "Crises sociales et urbaines" },

    // 9. Crises alimentaires et agricoles / Food and Agricultural Crises
    { id: 81, french: "Crise alimentaire", english: "Food crisis", category: "Crises alimentaires et agricoles" },
    { id: 82, french: "Pénurie", english: "Shortage", category: "Crises alimentaires et agricoles" },
    { id: 83, french: "Crise agricole", english: "Agricultural crisis", category: "Crises alimentaires et agricoles" },
    { id: 84, french: "Famine", english: "Famine", category: "Crises alimentaires et agricoles" },
    { id: 85, french: "Crise énergétique", english: "Energy crisis", category: "Crises alimentaires et agricoles" },
    { id: 86, french: "Crise énergétique renouvelable", english: "Renewable energy crisis", category: "Crises alimentaires et agricoles" },
    { id: 87, french: "Dépendance énergétique", english: "Energy dependence", category: "Crises alimentaires et agricoles" },
    { id: 88, french: "Crise démographique", english: "Demographic crisis", category: "Crises alimentaires et agricoles" },
    { id: 89, french: "Vieillissement", english: "Aging", category: "Crises alimentaires et agricoles" },
    { id: 90, french: "Dépopulation", english: "Depopulation", category: "Crises alimentaires et agricoles" },

    // 10. Crises de gouvernance et électorales / Governance and Electoral Crises
    { id: 91, french: "Crise de gouvernance", english: "Governance crisis", category: "Crises de gouvernance et électorales" },
    { id: 92, french: "Corruption", english: "Corruption", category: "Crises de gouvernance et électorales" },
    { id: 93, french: "Transparence", english: "Transparency", category: "Crises de gouvernance et électorales" },
    { id: 94, french: "Crise électorale", english: "Electoral crisis", category: "Crises de gouvernance et électorales" },
    { id: 95, french: "Fraude", english: "Fraud", category: "Crises de gouvernance et électorales" },
    { id: 96, french: "Révolte", english: "Revolt", category: "Crises de gouvernance et électorales" },
    { id: 97, french: "Crise éducative", english: "Educational crisis", category: "Crises de gouvernance et électorales" },
    { id: 98, french: "Fermeture d'écoles", english: "School closures", category: "Crises de gouvernance et électorales" },
    { id: 99, french: "Anxiété", english: "Anxiety", category: "Crises de gouvernance et électorales" },
    { id: 100, french: "Dépression", english: "Depression", category: "Crises de gouvernance et électorales" },
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
      'Crises sanitaires et pandémiques': 'bg-red-500',
      'Crises économiques et financières': 'bg-orange-500',
      'Crises environnementales et climatiques': 'bg-green-500',
      'Catastrophes naturelles': 'bg-blue-500',
      'Crises migratoires et humanitaires': 'bg-purple-500',
      'Crises politiques et conflits': 'bg-indigo-500',
      'Crises technologiques et cybersécurité': 'bg-pink-500',
      'Crises sociales et urbaines': 'bg-teal-500',
      'Crises alimentaires et agricoles': 'bg-yellow-500',
      'Crises de gouvernance et électorales': 'bg-cyan-500',
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
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                Grandes crises contemporaines
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
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte principale */}
        <Card className="mb-8 border-2 border-red-200">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-yellow-600" />
                <span>Actions disponibles</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">R:</span>
                  <span className="text-gray-600">Recommencer</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">S:</span>
                  <span className="text-gray-600">Mélanger</span>
                </div>
              </div>
            </CardContent>        </Card>

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
                <span>Actions disponibles</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">R:</span>
                  <span className="text-gray-600">Recommencer</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">S:</span>
                  <span className="text-gray-600">Mélanger</span>
                </div>
              </div>
            </CardContent>          </Card>
        )}

        {/* Statistiques */}
        <Card className="border-2 border-gray-200">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-yellow-600" />
                <span>Actions disponibles</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">R:</span>
                  <span className="text-gray-600">Recommencer</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">S:</span>
                  <span className="text-gray-600">Mélanger</span>
                </div>
              </div>
            </CardContent>        </Card>
      </div>
    </div>
  );
};

export default CrisesVocabularyPage; 