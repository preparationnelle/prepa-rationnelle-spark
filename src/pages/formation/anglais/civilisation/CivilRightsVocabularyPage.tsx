import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const CivilRightsVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Droits fondamentaux / Fundamental Rights
    { id: 1, french: "Droits civiques", english: "Civil rights", category: "Droits fondamentaux" },
    { id: 2, french: "Droits humains", english: "Human rights", category: "Droits fondamentaux" },
    { id: 3, french: "Droits politiques", english: "Political rights", category: "Droits fondamentaux" },
    { id: 4, french: "Droits économiques", english: "Economic rights", category: "Droits fondamentaux" },
    { id: 5, french: "Droits culturels", english: "Cultural rights", category: "Droits fondamentaux" },
    { id: 6, french: "Droits des minorités", english: "Minority rights", category: "Droits fondamentaux" },
    { id: 7, french: "Droits des femmes", english: "Women's rights", category: "Droits fondamentaux" },
    { id: 8, french: "Droits des travailleurs", english: "Workers' rights", category: "Droits fondamentaux" },
    { id: 9, french: "Droits des enfants", english: "Children's rights", category: "Droits fondamentaux" },
    { id: 10, french: "Droits des LGBTQ+", english: "LGBTQ+ rights", category: "Droits fondamentaux" },

    // 2. Libertés individuelles / Individual Freedoms
    { id: 11, french: "Liberté", english: "Freedom", category: "Libertés individuelles" },
    { id: 12, french: "Liberté d'expression", english: "Freedom of speech", category: "Libertés individuelles" },
    { id: 13, french: "Liberté religieuse", english: "Religious freedom", category: "Libertés individuelles" },
    { id: 14, french: "Liberté d'association", english: "Freedom of association", category: "Libertés individuelles" },
    { id: 15, french: "Émancipation", english: "Emancipation", category: "Libertés individuelles" },
    { id: 16, french: "Émancipation sociale", english: "Social emancipation", category: "Libertés individuelles" },
    { id: 17, french: "Droits des réfugiés", english: "Refugee rights", category: "Libertés individuelles" },
    { id: 18, french: "Droits des autochtones", english: "Indigenous rights", category: "Libertés individuelles" },
    { id: 19, french: "Droits des personnes handicapées", english: "Disability rights", category: "Libertés individuelles" },
    { id: 20, french: "Droits des migrants", english: "Migrant rights", category: "Libertés individuelles" },

    // 3. Égalité et justice / Equality and Justice
    { id: 21, french: "Égalité", english: "Equality", category: "Égalité et justice" },
    { id: 22, french: "Justice sociale", english: "Social justice", category: "Égalité et justice" },
    { id: 23, french: "Égalité raciale", english: "Racial equality", category: "Égalité et justice" },
    { id: 24, french: "Égalité de genre", english: "Gender equality", category: "Égalité et justice" },
    { id: 25, french: "Égalité sociale", english: "Social equality", category: "Égalité et justice" },
    { id: 26, french: "Égalité économique", english: "Economic equality", category: "Égalité et justice" },
    { id: 27, french: "Égalité culturelle", english: "Cultural equality", category: "Égalité et justice" },
    { id: 28, french: "Égalité des chances", english: "Equal opportunity", category: "Égalité et justice" },
    { id: 29, french: "Égalité des droits", english: "Equal rights", category: "Égalité et justice" },
    { id: 30, french: "Égalité raciale globale", english: "Global racial equality", category: "Égalité et justice" },

    // 4. Mouvements sociaux / Social Movements
    { id: 31, french: "Mouvement social", english: "Social movement", category: "Mouvements sociaux" },
    { id: 32, french: "Mouvement féministe", english: "Feminist movement", category: "Mouvements sociaux" },
    { id: 33, french: "Mouvement ouvrier", english: "Labor movement", category: "Mouvements sociaux" },
    { id: 34, french: "Mouvement écologique", english: "Environmental movement", category: "Mouvements sociaux" },
    { id: 35, french: "Mouvement pacifiste", english: "Pacifist movement", category: "Mouvements sociaux" },
    { id: 36, french: "Mouvement étudiant", english: "Student movement", category: "Mouvements sociaux" },
    { id: 37, french: "Mouvement communautaire", english: "Community movement", category: "Mouvements sociaux" },
    { id: 38, french: "Mouvement de libération", english: "Liberation movement", category: "Mouvements sociaux" },
    { id: 39, french: "Mouvement anti-guerre", english: "Anti-war movement", category: "Mouvements sociaux" },
    { id: 40, french: "Mouvement progressiste", english: "Progressive movement", category: "Mouvements sociaux" },

    // 5. Mobilisation et résistance / Mobilization and Resistance
    { id: 41, french: "Mobilisation", english: "Mobilization", category: "Mobilisation et résistance" },
    { id: 42, french: "Mobilisation populaire", english: "Popular mobilization", category: "Mobilisation et résistance" },
    { id: 43, french: "Mobilisation des femmes", english: "Women's mobilization", category: "Mobilisation et résistance" },
    { id: 44, french: "Mobilisation des minorités", english: "Minority mobilization", category: "Mobilisation et résistance" },
    { id: 45, french: "Mobilisation écologique", english: "Ecological mobilization", category: "Mobilisation et résistance" },
    { id: 46, french: "Mobilisation internationale", english: "International mobilization", category: "Mobilisation et résistance" },
    { id: 47, french: "Résistance", english: "Resistance", category: "Mobilisation et résistance" },
    { id: 48, french: "Résistance non violente", english: "Nonviolent resistance", category: "Mobilisation et résistance" },
    { id: 49, french: "Résistance culturelle", english: "Cultural resistance", category: "Mobilisation et résistance" },
    { id: 50, french: "Résistance politique", english: "Political resistance", category: "Mobilisation et résistance" },

    // 6. Lutte et protestation / Struggle and Protest
    { id: 51, french: "Lutte", english: "Struggle", category: "Lutte et protestation" },
    { id: 52, french: "Lutte contre l'injustice", english: "Fight against injustice", category: "Lutte et protestation" },
    { id: 53, french: "Lutte pour la liberté", english: "Fight for freedom", category: "Lutte et protestation" },
    { id: 54, french: "Lutte contre la pauvreté", english: "Fight against poverty", category: "Lutte et protestation" },
    { id: 55, french: "Lutte pour l'inclusion", english: "Fight for inclusion", category: "Lutte et protestation" },
    { id: 56, french: "Protestation", english: "Protest", category: "Lutte et protestation" },
    { id: 57, french: "Manifestation", english: "Demonstration", category: "Lutte et protestation" },
    { id: 58, french: "Grève", english: "Strike", category: "Lutte et protestation" },
    { id: 59, french: "Boycott", english: "Boycott", category: "Lutte et protestation" },
    { id: 60, french: "Désobéissance civile", english: "Civil disobedience", category: "Lutte et protestation" },

    // 7. Solidarité et cohésion / Solidarity and Cohesion
    { id: 61, french: "Solidarité", english: "Solidarity", category: "Solidarité et cohésion" },
    { id: 62, french: "Solidarité internationale", english: "International solidarity", category: "Solidarité et cohésion" },
    { id: 63, french: "Solidarité ouvrière", english: "Workers' solidarity", category: "Solidarité et cohésion" },
    { id: 64, french: "Solidarité intergénérationnelle", english: "Intergenerational solidarity", category: "Solidarité et cohésion" },
    { id: 65, french: "Solidarité communautaire", english: "Community solidarity", category: "Solidarité et cohésion" },
    { id: 66, french: "Solidarité globale", english: "Global solidarity", category: "Solidarité et cohésion" },
    { id: 67, french: "Solidarité transnationale", english: "Transnational solidarity", category: "Solidarité et cohésion" },
    { id: 68, french: "Cohésion sociale", english: "Social cohesion", category: "Solidarité et cohésion" },
    { id: 69, french: "Intégration", english: "Integration", category: "Solidarité et cohésion" },
    { id: 70, french: "Multiculturalisme", english: "Multiculturalism", category: "Solidarité et cohésion" },

    // 8. Réforme et changement / Reform and Change
    { id: 71, french: "Réforme", english: "Reform", category: "Réforme et changement" },
    { id: 72, french: "Réforme institutionnelle", english: "Institutional reform", category: "Réforme et changement" },
    { id: 73, french: "Justice transitionnelle", english: "Transitional justice", category: "Réforme et changement" },
    { id: 74, french: "Mouvement pour les droits", english: "Rights movement", category: "Réforme et changement" },
    { id: 75, french: "Mouvement pour la justice", english: "Justice movement", category: "Réforme et changement" },
    { id: 76, french: "Mouvement pour la paix", english: "Peace movement", category: "Réforme et changement" },
    { id: 77, french: "Mouvement pour le changement", english: "Change movement", category: "Réforme et changement" },
    { id: 78, french: "Mouvement de base", english: "Grassroots movement", category: "Réforme et changement" },
    { id: 79, french: "Mouvement citoyen", english: "Citizen movement", category: "Réforme et changement" },
    { id: 80, french: "Mouvement des droits civiques", english: "Civil rights movement", category: "Réforme et changement" },

    // 9. Participation et inclusion / Participation and Inclusion
    { id: 81, french: "Inclusion", english: "Inclusion", category: "Participation et inclusion" },
    { id: 82, french: "Participation citoyenne", english: "Citizen participation", category: "Participation et inclusion" },
    { id: 83, french: "Participation politique", english: "Political participation", category: "Participation et inclusion" },
    { id: 84, french: "Éducation civique", english: "Civic education", category: "Participation et inclusion" },
    { id: 85, french: "Antiracisme", english: "Antiracism", category: "Participation et inclusion" },
    { id: 86, french: "Droits des jeunes", english: "Youth rights", category: "Participation et inclusion" },
    { id: 87, french: "Droits des aînés", english: "Elderly rights", category: "Participation et inclusion" },
    { id: 88, french: "Droits des animaux", english: "Animal rights", category: "Participation et inclusion" },
    { id: 89, french: "Droits environnementaux", english: "Environmental rights", category: "Participation et inclusion" },
    { id: 90, french: "Droits universels", english: "Universal rights", category: "Participation et inclusion" },

    // 10. Syndicalisme et travail / Trade Unionism and Work
    { id: 91, french: "Mouvement syndical", english: "Trade union movement", category: "Syndicalisme et travail" },
    { id: 92, french: "Activism", english: "Activism", category: "Syndicalisme et travail" },
    { id: 93, french: "Répression", english: "Repression", category: "Syndicalisme et travail" },
    { id: 94, french: "Révolte", english: "Revolt", category: "Syndicalisme et travail" },
    { id: 95, french: "Révolution", english: "Revolution", category: "Syndicalisme et travail" },
    { id: 96, french: "Ségrégation", english: "Segregation", category: "Syndicalisme et travail" },
    { id: 97, french: "Discrimination", english: "Discrimination", category: "Syndicalisme et travail" },
    { id: 98, french: "Injustice", english: "Injustice", category: "Syndicalisme et travail" },
    { id: 99, french: "Égalité devant la loi", english: "Equality before the law", category: "Syndicalisme et travail" },
    { id: 100, french: "Résistance institutionnelle", english: "Institutional resistance", category: "Syndicalisme et travail" },
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
      'Droits fondamentaux': 'bg-blue-500',
      'Libertés individuelles': 'bg-green-500',
      'Égalité et justice': 'bg-purple-500',
      'Mouvements sociaux': 'bg-orange-500',
      'Mobilisation et résistance': 'bg-red-500',
      'Lutte et protestation': 'bg-pink-500',
      'Solidarité et cohésion': 'bg-emerald-500',
      'Réforme et changement': 'bg-teal-500',
      'Participation et inclusion': 'bg-indigo-500',
      'Syndicalisme et travail': 'bg-cyan-500',
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
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Droits civiques et Mouvements sociaux
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
              <Shield className="h-5 w-5 text-gray-600" />
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

export default CivilRightsVocabularyPage; 