import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, RotateCcw, Shuffle, HelpCircle, Keyboard, BookOpen, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const ImmigrationVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Immigration et migration / Immigration and Migration
    { id: 1, french: "Immigration", english: "Immigration", category: "Immigration et migration" },
    { id: 2, french: "Migration économique", english: "Economic migration", category: "Immigration et migration" },
    { id: 3, french: "Migration forcée", english: "Forced migration", category: "Immigration et migration" },
    { id: 4, french: "Migration interne", english: "Internal migration", category: "Immigration et migration" },
    { id: 5, french: "Migration saisonnière", english: "Seasonal migration", category: "Immigration et migration" },
    { id: 6, french: "Migration circulaire", english: "Circular migration", category: "Immigration et migration" },
    { id: 7, french: "Migration de retour", english: "Return migration", category: "Immigration et migration" },
    { id: 8, french: "Déplacement forcé", english: "Forced displacement", category: "Immigration et migration" },
    { id: 9, french: "Déplacement volontaire", english: "Voluntary displacement", category: "Immigration et migration" },
    { id: 10, french: "Déplacement massif", english: "Mass displacement", category: "Immigration et migration" },

    // 2. Réfugiés et asile / Refugees and Asylum
    { id: 11, french: "Réfugié", english: "Refugee", category: "Réfugiés et asile" },
    { id: 12, french: "Asile", english: "Asylum", category: "Réfugiés et asile" },
    { id: 13, french: "Réfugié climatique", english: "Climate refugee", category: "Réfugiés et asile" },
    { id: 14, french: "Réfugié politique", english: "Political refugee", category: "Réfugiés et asile" },
    { id: 15, french: "Réfugié de guerre", english: "War refugee", category: "Réfugiés et asile" },
    { id: 16, french: "Réfugié environnemental", english: "Environmental refugee", category: "Réfugiés et asile" },
    { id: 17, french: "Réfugié économique", english: "Economic refugee", category: "Réfugiés et asile" },
    { id: 18, french: "Réfugié statutaire", english: "Statutory refugee", category: "Réfugiés et asile" },
    { id: 19, french: "Réfugié temporaire", english: "Temporary refugee", category: "Réfugiés et asile" },
    { id: 20, french: "Réfugié mineur", english: "Minor refugee", category: "Réfugiés et asile" },

    // 3. Contrôle et sécurité / Control and Security
    { id: 21, french: "Contrôle des frontières", english: "Border control", category: "Contrôle et sécurité" },
    { id: 22, french: "Sécurité", english: "Security", category: "Contrôle et sécurité" },
    { id: 23, french: "Sécurité nationale", english: "National security", category: "Contrôle et sécurité" },
    { id: 24, french: "Sécurité des frontières", english: "Border security", category: "Contrôle et sécurité" },
    { id: 25, french: "Sécurité régionale", english: "Regional security", category: "Contrôle et sécurité" },
    { id: 26, french: "Surveillance", english: "Surveillance", category: "Contrôle et sécurité" },
    { id: 27, french: "Surveillance électronique", english: "Electronic surveillance", category: "Contrôle et sécurité" },
    { id: 28, french: "Surveillance aérienne", english: "Aerial surveillance", category: "Contrôle et sécurité" },
    { id: 29, french: "Patrouille", english: "Patrol", category: "Contrôle et sécurité" },
    { id: 30, french: "Contrôle douanier", english: "Customs control", category: "Contrôle et sécurité" },

    // 4. Frontières et zones / Borders and Zones
    { id: 31, french: "Frontière", english: "Border", category: "Frontières et zones" },
    { id: 32, french: "Frontière maritime", english: "Maritime border", category: "Frontières et zones" },
    { id: 33, french: "Mur frontalier", english: "Border wall", category: "Frontières et zones" },
    { id: 34, french: "Barrière", english: "Barrier", category: "Frontières et zones" },
    { id: 35, french: "Zone tampon", english: "Buffer zone", category: "Frontières et zones" },
    { id: 36, french: "Zone frontalière", english: "Border zone", category: "Frontières et zones" },
    { id: 37, french: "Contrôle maritime", english: "Maritime control", category: "Frontières et zones" },
    { id: 38, french: "Contrôle des flux", english: "Flow control", category: "Frontières et zones" },
    { id: 39, french: "Politique de frontière", english: "Border policy", category: "Frontières et zones" },
    { id: 40, french: "Réforme des frontières", english: "Border reform", category: "Frontières et zones" },

    // 5. Documents et identité / Documents and Identity
    { id: 41, french: "Visa", english: "Visa", category: "Documents et identité" },
    { id: 42, french: "Passeport", english: "Passport", category: "Documents et identité" },
    { id: 43, french: "Identité", english: "Identity", category: "Documents et identité" },
    { id: 44, french: "Identité nationale", english: "National identity", category: "Documents et identité" },
    { id: 45, french: "Contrôle d'identité", english: "Identity check", category: "Documents et identité" },
    { id: 46, french: "Contrôle des identités", english: "Identity control", category: "Documents et identité" },
    { id: 47, french: "Contrôle des visas", english: "Visa control", category: "Documents et identité" },
    { id: 48, french: "Résidence", english: "Residence", category: "Documents et identité" },
    { id: 49, french: "Séjour", english: "Stay", category: "Documents et identité" },
    { id: 50, french: "Résidence permanente", english: "Permanent residence", category: "Documents et identité" },

    // 6. Politiques et réglementation / Policies and Regulation
    { id: 51, french: "Politique migratoire", english: "Migration policy", category: "Politiques et réglementation" },
    { id: 52, french: "Politique d'asile", english: "Asylum policy", category: "Politiques et réglementation" },
    { id: 53, french: "Politique d'ouverture", english: "Open-door policy", category: "Politiques et réglementation" },
    { id: 54, french: "Politique restrictive", english: "Restrictive policy", category: "Politiques et réglementation" },
    { id: 55, french: "Politique d'exclusion", english: "Exclusion policy", category: "Politiques et réglementation" },
    { id: 56, french: "Politique humanitaire", english: "Humanitarian policy", category: "Politiques et réglementation" },
    { id: 57, french: "Politique migratoire globale", english: "Global migration policy", category: "Politiques et réglementation" },
    { id: 58, french: "Réglementation", english: "Regulation", category: "Politiques et réglementation" },
    { id: 59, french: "Quota", english: "Quota", category: "Politiques et réglementation" },
    { id: 60, french: "Restriction", english: "Restriction", category: "Politiques et réglementation" },

    // 7. Intégration et assimilation / Integration and Assimilation
    { id: 61, french: "Intégration", english: "Integration", category: "Intégration et assimilation" },
    { id: 62, french: "Assimilation", english: "Assimilation", category: "Intégration et assimilation" },
    { id: 63, french: "Intégration culturelle", english: "Cultural integration", category: "Intégration et assimilation" },
    { id: 64, french: "Intégration sociale", english: "Social integration", category: "Intégration et assimilation" },
    { id: 65, french: "Intégration économique", english: "Economic integration", category: "Intégration et assimilation" },
    { id: 66, french: "Intégration linguistique", english: "Linguistic integration", category: "Intégration et assimilation" },
    { id: 67, french: "Intégration politique", english: "Political integration", category: "Intégration et assimilation" },
    { id: 68, french: "Intégration urbaine", english: "Urban integration", category: "Intégration et assimilation" },
    { id: 69, french: "Intégration durable", english: "Sustainable integration", category: "Intégration et assimilation" },
    { id: 70, french: "Cohabitation", english: "Cohabitation", category: "Intégration et assimilation" },

    // 8. Citoyenneté et droits / Citizenship and Rights
    { id: 71, french: "Citoyenneté", english: "Citizenship", category: "Citoyenneté et droits" },
    { id: 72, french: "Naturalisation", english: "Naturalization", category: "Citoyenneté et droits" },
    { id: 73, french: "Droit d'asile", english: "Right of asylum", category: "Citoyenneté et droits" },
    { id: 74, french: "Travailleur migrant", english: "Migrant worker", category: "Citoyenneté et droits" },
    { id: 75, french: "Diaspora", english: "Diaspora", category: "Citoyenneté et droits" },
    { id: 76, french: "Mobilité", english: "Mobility", category: "Citoyenneté et droits" },
    { id: 77, french: "Exode", english: "Exodus", category: "Citoyenneté et droits" },
    { id: 78, french: "Réception", english: "Reception", category: "Citoyenneté et droits" },
    { id: 79, french: "Cohésion sociale", english: "Social cohesion", category: "Citoyenneté et droits" },
    { id: 80, french: "Réforme migratoire", english: "Migration reform", category: "Citoyenneté et droits" },

    // 9. Réinstallation et camps / Resettlement and Camps
    { id: 81, french: "Réinstallation", english: "Resettlement", category: "Réinstallation et camps" },
    { id: 82, french: "Réinstallation humanitaire", english: "Humanitarian resettlement", category: "Réinstallation et camps" },
    { id: 83, french: "Réinstallation durable", english: "Sustainable resettlement", category: "Réinstallation et camps" },
    { id: 84, french: "Réinstallation volontaire", english: "Voluntary resettlement", category: "Réinstallation et camps" },
    { id: 85, french: "Camp de réfugiés", english: "Refugee camp", category: "Réinstallation et camps" },
    { id: 86, french: "Crise migratoire", english: "Migration crisis", category: "Réinstallation et camps" },
    { id: 87, french: "Traite humaine", english: "Human trafficking", category: "Réinstallation et camps" },
    { id: 88, french: "Déportation", english: "Deportation", category: "Réinstallation et camps" },
    { id: 89, french: "Expulsion", english: "Expulsion", category: "Réinstallation et camps" },
    { id: 90, french: "Régularisation", english: "Regularization", category: "Réinstallation et camps" },

    // 10. Diversité et inclusion / Diversity and Inclusion
    { id: 91, french: "Multiculturalisme", english: "Multiculturalism", category: "Diversité et inclusion" },
    { id: 92, french: "Diversité", english: "Diversity", category: "Diversité et inclusion" },
    { id: 93, french: "Inclusion", english: "Inclusion", category: "Diversité et inclusion" },
    { id: 94, french: "Xénophobie", english: "Xenophobia", category: "Diversité et inclusion" },
    { id: 95, french: "Discrimination", english: "Discrimination", category: "Diversité et inclusion" },
    { id: 96, french: "Discrimination raciale", english: "Racial discrimination", category: "Diversité et inclusion" },
    { id: 97, french: "Ségrégation", english: "Segregation", category: "Diversité et inclusion" },
    { id: 98, french: "Conflit culturel", english: "Cultural conflict", category: "Diversité et inclusion" },
    { id: 99, french: "Immigration illégale", english: "Illegal immigration", category: "Diversité et inclusion" },
    { id: 100, french: "Cohésion sociale", english: "Social cohesion", category: "Diversité et inclusion" },
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
      'Immigration et migration': 'bg-blue-500',
      'Réfugiés et asile': 'bg-green-500',
      'Contrôle et sécurité': 'bg-red-500',
      'Frontières et zones': 'bg-orange-500',
      'Documents et identité': 'bg-purple-500',
      'Politiques et réglementation': 'bg-indigo-500',
      'Intégration et assimilation': 'bg-pink-500',
      'Citoyenneté et droits': 'bg-teal-500',
      'Réinstallation et camps': 'bg-cyan-500',
      'Diversité et inclusion': 'bg-yellow-500',
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
                Immigration et Contrôle des frontières
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
                  <h2 className="text-3xl font-bold text-orange-800 mb-4">
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
              <Globe2 className="h-5 w-5 text-gray-600" />
              Statistiques du module
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-orange-800">{vocabularyData.length}</p>
                <p className="text-sm text-gray-600">Mots au total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.ceil(vocabularyData.length / 10)}
                </p>
                <p className="text-sm text-gray-600">Catégories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-800">
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

export default ImmigrationVocabularyPage; 