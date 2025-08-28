import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const BrexitVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Brexit et référendum / Brexit and Referendum
    { id: 1, french: "Brexit", english: "Brexit", category: "Brexit et référendum" },
    { id: 2, french: "Référendum", english: "Referendum", category: "Brexit et référendum" },
    { id: 3, french: "Vote", english: "Vote", category: "Brexit et référendum" },
    { id: 4, french: "Campagne", english: "Campaign", category: "Brexit et référendum" },
    { id: 5, french: "Opinion publique", english: "Public opinion", category: "Brexit et référendum" },
    { id: 6, french: "Soutien public", english: "Public support", category: "Brexit et référendum" },
    { id: 7, french: "Opposition", english: "Opposition", category: "Brexit et référendum" },
    { id: 8, french: "Polarisation", english: "Polarization", category: "Brexit et référendum" },
    { id: 9, french: "Médias", english: "Media", category: "Brexit et référendum" },
    { id: 10, french: "Partis politiques", english: "Political parties", category: "Brexit et référendum" },

    // 2. Négociations et accords / Negotiations and Agreements
    { id: 11, french: "Négociation", english: "Negotiation", category: "Négociations et accords" },
    { id: 12, french: "Accord de retrait", english: "Withdrawal agreement", category: "Négociations et accords" },
    { id: 13, french: "Accord de transition", english: "Transition agreement", category: "Négociations et accords" },
    { id: 14, french: "Accord commercial", english: "Trade deal", category: "Négociations et accords" },
    { id: 15, french: "Accord futur", english: "Future agreement", category: "Négociations et accords" },
    { id: 16, french: "Négociations commerciales", english: "Trade negotiations", category: "Négociations et accords" },
    { id: 17, french: "Négociations post-Brexit", english: "Post-Brexit negotiations", category: "Négociations et accords" },
    { id: 18, french: "Protocole", english: "Protocol", category: "Négociations et accords" },
    { id: 19, french: "Désaccord", english: "Disagreement", category: "Négociations et accords" },
    { id: 20, french: "Traités", english: "Treaties", category: "Négociations et accords" },

    // 3. Union européenne et relations / European Union and Relations
    { id: 21, french: "Union européenne", english: "European Union (EU)", category: "Union européenne et relations" },
    { id: 22, french: "Relations UK-EU", english: "UK-EU relations", category: "Union européenne et relations" },
    { id: 23, french: "Relations bilatérales", english: "Bilateral relations", category: "Union européenne et relations" },
    { id: 24, french: "Relations transatlantiques", english: "Transatlantic relations", category: "Union européenne et relations" },
    { id: 25, french: "Relations avec l'Irlande", english: "Relations with Ireland", category: "Union européenne et relations" },
    { id: 26, french: "Coopération", english: "Cooperation", category: "Union européenne et relations" },
    { id: 27, french: "Coopération scientifique", english: "Scientific cooperation", category: "Union européenne et relations" },
    { id: 28, french: "Coopération militaire", english: "Military cooperation", category: "Union européenne et relations" },
    { id: 29, french: "Coopération transfrontalière", english: "Cross-border cooperation", category: "Union européenne et relations" },
    { id: 30, french: "Alliance", english: "Alliance", category: "Union européenne et relations" },

    // 4. Commerce et économie / Trade and Economy
    { id: 31, french: "Commerce", english: "Trade", category: "Commerce et économie" },
    { id: 32, french: "Marché unique", english: "Single market", category: "Commerce et économie" },
    { id: 33, french: "Marché commun", english: "Common market", category: "Commerce et économie" },
    { id: 34, french: "Marché intérieur", english: "Internal market", category: "Commerce et économie" },
    { id: 35, french: "Exportation", english: "Export", category: "Commerce et économie" },
    { id: 36, french: "Importation", english: "Import", category: "Commerce et économie" },
    { id: 37, french: "Douane", english: "Customs", category: "Commerce et économie" },
    { id: 38, french: "Tarif", english: "Tariff", category: "Commerce et économie" },
    { id: 39, french: "Barrière commerciale", english: "Trade barrier", category: "Commerce et économie" },
    { id: 40, french: "Économie", english: "Economy", category: "Commerce et économie" },

    // 5. Impact économique / Economic Impact
    { id: 41, french: "Impact économique", english: "Economic impact", category: "Impact économique" },
    { id: 42, french: "Investissement", english: "Investment", category: "Impact économique" },
    { id: 43, french: "Investissement étranger", english: "Foreign investment", category: "Impact économique" },
    { id: 44, french: "Dévaluation", english: "Devaluation", category: "Impact économique" },
    { id: 45, french: "Inflation", english: "Inflation", category: "Impact économique" },
    { id: 46, french: "Chômage", english: "Unemployment", category: "Impact économique" },
    { id: 47, french: "Croissance", english: "Growth", category: "Impact économique" },
    { id: 48, french: "Stabilité économique", english: "Economic stability", category: "Impact économique" },
    { id: 49, french: "Productivité", english: "Productivity", category: "Impact économique" },
    { id: 50, french: "Délocalisation", english: "Offshoring", category: "Impact économique" },

    // 6. Secteurs économiques / Economic Sectors
    { id: 51, french: "Secteur financier", english: "Financial sector", category: "Secteurs économiques" },
    { id: 52, french: "Industrie", english: "Industry", category: "Secteurs économiques" },
    { id: 53, french: "Agriculture", english: "Agriculture", category: "Secteurs économiques" },
    { id: 54, french: "Pêche", english: "Fishing", category: "Secteurs économiques" },
    { id: 55, french: "Emploi", english: "Employment", category: "Secteurs économiques" },
    { id: 56, french: "Régulation financière", english: "Financial regulation", category: "Secteurs économiques" },
    { id: 57, french: "Sécurité alimentaire", english: "Food security", category: "Secteurs économiques" },
    { id: 58, french: "Politique énergétique", english: "Energy policy", category: "Secteurs économiques" },
    { id: 59, french: "Recherche", english: "Research", category: "Secteurs économiques" },
    { id: 60, french: "Éducation", english: "Education", category: "Secteurs économiques" },

    // 7. Frontières et territoires / Borders and Territories
    { id: 61, french: "Frontière", english: "Border", category: "Frontières et territoires" },
    { id: 62, french: "Frontière irlandaise", english: "Irish border", category: "Frontières et territoires" },
    { id: 63, french: "Irlande du Nord", english: "Northern Ireland", category: "Frontières et territoires" },
    { id: 64, french: "Écosse", english: "Scotland", category: "Frontières et territoires" },
    { id: 65, french: "Pays de Galles", english: "Wales", category: "Frontières et territoires" },
    { id: 66, french: "Décentralisation", english: "Devolution", category: "Frontières et territoires" },
    { id: 67, french: "Indépendance régionale", english: "Regional independence", category: "Frontières et territoires" },
    { id: 68, french: "Union politique", english: "Political union", category: "Frontières et territoires" },
    { id: 69, french: "Séparation", english: "Separation", category: "Frontières et territoires" },
    { id: 70, french: "Stabilité régionale", english: "Regional stability", category: "Frontières et territoires" },

    // 8. Immigration et citoyenneté / Immigration and Citizenship
    { id: 71, french: "Immigration", english: "Immigration", category: "Immigration et citoyenneté" },
    { id: 72, french: "Citoyenneté", english: "Citizenship", category: "Immigration et citoyenneté" },
    { id: 73, french: "Liberté de mouvement", english: "Freedom of movement", category: "Immigration et citoyenneté" },
    { id: 74, french: "Passeport", english: "Passport", category: "Immigration et citoyenneté" },
    { id: 75, french: "Mobilité étudiante", english: "Student mobility", category: "Immigration et citoyenneté" },
    { id: 76, french: "Identité nationale", english: "National identity", category: "Immigration et citoyenneté" },
    { id: 77, french: "Identité européenne", english: "European identity", category: "Immigration et citoyenneté" },
    { id: 78, french: "Nationalisme", english: "Nationalism", category: "Immigration et citoyenneté" },
    { id: 79, french: "Populisme", english: "Populism", category: "Immigration et citoyenneté" },
    { id: 80, french: "Souveraineté", english: "Sovereignty", category: "Immigration et citoyenneté" },

    // 9. Politique et institutions / Politics and Institutions
    { id: 81, french: "Parlement", english: "Parliament", category: "Politique et institutions" },
    { id: 82, french: "Législation", english: "Legislation", category: "Politique et institutions" },
    { id: 83, french: "Réglementation", english: "Regulation", category: "Politique et institutions" },
    { id: 84, french: "Réforme", english: "Reform", category: "Politique et institutions" },
    { id: 85, french: "Crise politique", english: "Political crisis", category: "Politique et institutions" },
    { id: 86, french: "Stabilité politique", english: "Political stability", category: "Politique et institutions" },
    { id: 87, french: "Indépendance", english: "Independence", category: "Politique et institutions" },
    { id: 88, french: "Diplomatie", english: "Diplomacy", category: "Politique et institutions" },
    { id: 89, french: "Sécurité", english: "Security", category: "Politique et institutions" },
    { id: 90, french: "Défense", english: "Defense", category: "Politique et institutions" },

    // 10. Conséquences et héritage / Consequences and Legacy
    { id: 91, french: "Conséquences", english: "Consequences", category: "Conséquences et héritage" },
    { id: 92, french: "Héritage du Brexit", english: "Brexit legacy", category: "Conséquences et héritage" },
    { id: 93, french: "Transition", english: "Transition", category: "Conséquences et héritage" },
    { id: 94, french: "Influence internationale", english: "International influence", category: "Conséquences et héritage" },
    { id: 95, french: "Influence globale", english: "Global influence", category: "Conséquences et héritage" },
    { id: 96, french: "Renseignement", english: "Intelligence", category: "Conséquences et héritage" },
    { id: 97, french: "Santé", english: "Health", category: "Conséquences et héritage" },
    { id: 98, french: "Environnement", english: "Environment", category: "Conséquences et héritage" },
    { id: 99, french: "Réglementations environnementales", english: "Environmental regulations", category: "Conséquences et héritage" },
    { id: 100, french: "Changement climatique", english: "Climate change", category: "Conséquences et héritage" },
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
      'Brexit et référendum': 'bg-red-500',
      'Négociations et accords': 'bg-orange-500',
      'Union européenne et relations': 'bg-blue-500',
      'Commerce et économie': 'bg-green-500',
      'Impact économique': 'bg-purple-500',
      'Secteurs économiques': 'bg-pink-500',
      'Frontières et territoires': 'bg-indigo-500',
      'Immigration et citoyenneté': 'bg-teal-500',
      'Politique et institutions': 'bg-cyan-500',
      'Conséquences et héritage': 'bg-yellow-500',
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
                Brexit et ses conséquences
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

export default BrexitVocabularyPage; 