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

const HealthVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Concepts généraux de santé / General Health Concepts
    { id: 1, french: "Santé", english: "Health", category: "Concepts généraux de santé" },
    { id: 2, french: "Maladie", english: "Disease / Illness", category: "Concepts généraux de santé" },
    { id: 3, french: "Infection", english: "Infection", category: "Concepts généraux de santé" },
    { id: 4, french: "Épidémie", english: "Epidemic", category: "Concepts généraux de santé" },
    { id: 5, french: "Pandémie", english: "Pandemic", category: "Concepts généraux de santé" },
    { id: 6, french: "Virus", english: "Virus", category: "Concepts généraux de santé" },
    { id: 7, french: "Bactérie", english: "Bacterium", category: "Concepts généraux de santé" },
    { id: 8, french: "Symptômes", english: "Symptoms", category: "Concepts généraux de santé" },
    { id: 9, french: "Diagnostic", english: "Diagnosis", category: "Concepts généraux de santé" },
    { id: 10, french: "Traitement", english: "Treatment", category: "Concepts généraux de santé" },

    // 2. Médecine et soins / Medicine and Care
    { id: 11, french: "Médecine", english: "Medicine", category: "Médecine et soins" },
    { id: 12, french: "Médecin généraliste", english: "General practitioner (GP)", category: "Médecine et soins" },
    { id: 13, french: "Spécialiste", english: "Specialist", category: "Médecine et soins" },
    { id: 14, french: "Infirmier / infirmière", english: "Nurse", category: "Médecine et soins" },
    { id: 15, french: "Chirurgien", english: "Surgeon", category: "Médecine et soins" },
    { id: 16, french: "Pharmacien", english: "Pharmacist", category: "Médecine et soins" },
    { id: 17, french: "Consultation", english: "Consultation", category: "Médecine et soins" },
    { id: 18, french: "Ordonnance", english: "Prescription", category: "Médecine et soins" },
    { id: 19, french: "Médicaments", english: "Medicines / Drugs", category: "Médecine et soins" },
    { id: 20, french: "Vaccin", english: "Vaccine", category: "Médecine et soins" },

    // 3. Hôpitaux et infrastructures / Hospitals and Infrastructure
    { id: 21, french: "Hôpital", english: "Hospital", category: "Hôpitaux et infrastructures" },
    { id: 22, french: "Clinique", english: "Clinic", category: "Hôpitaux et infrastructures" },
    { id: 23, french: "Urgences", english: "Emergency room (ER)", category: "Hôpitaux et infrastructures" },
    { id: 24, french: "Salle d'opération", english: "Operating room", category: "Hôpitaux et infrastructures" },
    { id: 25, french: "Soins intensifs", english: "Intensive care unit (ICU)", category: "Hôpitaux et infrastructures" },
    { id: 26, french: "Lit d'hôpital", english: "Hospital bed", category: "Hôpitaux et infrastructures" },
    { id: 27, french: "Service public de santé", english: "Public health service", category: "Hôpitaux et infrastructures" },
    { id: 28, french: "Infrastructure", english: "Infrastructure", category: "Hôpitaux et infrastructures" },
    { id: 29, french: "Équipement médical", english: "Medical equipment", category: "Hôpitaux et infrastructures" },
    { id: 30, french: "Ambulance", english: "Ambulance", category: "Hôpitaux et infrastructures" },

    // 4. Santé publique / Public Health
    { id: 31, french: "Santé publique", english: "Public health", category: "Santé publique" },
    { id: 32, french: "Prévention", english: "Prevention", category: "Santé publique" },
    { id: 33, french: "Campagne de vaccination", english: "Vaccination campaign", category: "Santé publique" },
    { id: 34, french: "Assurance maladie", english: "Health insurance", category: "Santé publique" },
    { id: 35, french: "Couverture maladie universelle", english: "Universal healthcare coverage", category: "Santé publique" },
    { id: 36, french: "Accès aux soins", english: "Access to healthcare", category: "Santé publique" },
    { id: 37, french: "Dépistage", english: "Screening", category: "Santé publique" },
    { id: 38, french: "Tabagisme", english: "Smoking", category: "Santé publique" },
    { id: 39, french: "Obésité", english: "Obesity", category: "Santé publique" },
    { id: 40, french: "Alcoolisme", english: "Alcoholism", category: "Santé publique" },

    // 5. Le système de santé britannique (UK) / British Healthcare System
    { id: 41, french: "NHS (Service national de santé)", english: "National Health Service (NHS)", category: "Système de santé britannique" },
    { id: 42, french: "Médecine gratuite à la livraison", english: "Free-at-the-point-of-use healthcare", category: "Système de santé britannique" },
    { id: 43, french: "Médecin de famille", english: "Family doctor", category: "Système de santé britannique" },
    { id: 44, french: "Attente (liste d'attente)", english: "Waiting list", category: "Système de santé britannique" },
    { id: 45, french: "Financement public", english: "Public funding", category: "Système de santé britannique" },
    { id: 46, french: "Sous-financement", english: "Underfunding", category: "Système de santé britannique" },
    { id: 47, french: "Privatisation partielle", english: "Partial privatization", category: "Système de santé britannique" },
    { id: 48, french: "Couper dans le budget", english: "Budget cuts", category: "Système de santé britannique" },
    { id: 49, french: "NHS trust", english: "NHS trust", category: "Système de santé britannique" },
    { id: 50, french: "Reformes du NHS", english: "NHS reforms", category: "Système de santé britannique" },

    // 6. Le système de santé américain (USA) / American Healthcare System
    { id: 51, french: "Système de santé privé", english: "Private healthcare system", category: "Système de santé américain" },
    { id: 52, french: "Assurance maladie", english: "Health insurance", category: "Système de santé américain" },
    { id: 53, french: "Mutuelle", english: "Private health plan", category: "Système de santé américain" },
    { id: 54, french: "Sans assurance", english: "Uninsured", category: "Système de santé américain" },
    { id: 55, french: "Facture médicale", english: "Medical bill", category: "Système de santé américain" },
    { id: 56, french: "Obamacare", english: "Affordable Care Act (Obamacare)", category: "Système de santé américain" },
    { id: 57, french: "Medicare (assurance pour les personnes âgées)", english: "Medicare", category: "Système de santé américain" },
    { id: 58, french: "Medicaid (aide pour les plus pauvres)", english: "Medicaid", category: "Système de santé américain" },
    { id: 59, french: "Coût des soins", english: "Cost of care", category: "Système de santé américain" },
    { id: 60, french: "Big Pharma", english: "Big Pharma", category: "Système de santé américain" },

    // 7. Enjeux sociaux et inégalités / Social Issues and Inequalities
    { id: 61, french: "Inégalités de santé", english: "Health inequalities", category: "Enjeux sociaux et inégalités" },
    { id: 62, french: "Accès limité", english: "Limited access", category: "Enjeux sociaux et inégalités" },
    { id: 63, french: "Zones rurales", english: "Rural areas", category: "Enjeux sociaux et inégalités" },
    { id: 64, french: "Médecine urbaine", english: "Urban medicine", category: "Enjeux sociaux et inégalités" },
    { id: 65, french: "Déserts médicaux", english: "Medical deserts", category: "Enjeux sociaux et inégalités" },
    { id: 66, french: "Pauvreté", english: "Poverty", category: "Enjeux sociaux et inégalités" },
    { id: 67, french: "Minorités", english: "Minorities", category: "Enjeux sociaux et inégalités" },
    { id: 68, french: "Discrimination", english: "Discrimination", category: "Enjeux sociaux et inégalités" },
    { id: 69, french: "Espérance de vie", english: "Life expectancy", category: "Enjeux sociaux et inégalités" },
    { id: 70, french: "Santé mentale", english: "Mental health", category: "Enjeux sociaux et inégalités" },

    // 8. Débats éthiques et politiques / Ethical and Political Debates
    { id: 71, french: "Bioéthique", english: "Bioethics", category: "Débats éthiques et politiques" },
    { id: 72, french: "Fin de vie", english: "End of life", category: "Débats éthiques et politiques" },
    { id: 73, french: "Euthanasie", english: "Euthanasia", category: "Débats éthiques et politiques" },
    { id: 74, french: "Suicide assisté", english: "Assisted suicide", category: "Débats éthiques et politiques" },
    { id: 75, french: "Avortement", english: "Abortion", category: "Débats éthiques et politiques" },
    { id: 76, french: "Recherche médicale", english: "Medical research", category: "Débats éthiques et politiques" },
    { id: 77, french: "Expérimentation", english: "Experimentation", category: "Débats éthiques et politiques" },
    { id: 78, french: "Confidentialité médicale", english: "Medical confidentiality", category: "Débats éthiques et politiques" },
    { id: 79, french: "Dossier médical électronique", english: "Electronic health record", category: "Débats éthiques et politiques" },
    { id: 80, french: "Consentement éclairé", english: "Informed consent", category: "Débats éthiques et politiques" },

    // 9. Santé mondiale et crises / Global Health and Crises
    { id: 81, french: "Organisation mondiale de la santé", english: "World Health Organization (WHO)", category: "Santé mondiale et crises" },
    { id: 82, french: "Aide humanitaire", english: "Humanitarian aid", category: "Santé mondiale et crises" },
    { id: 83, french: "Vaccins pour tous", english: "Vaccines for all", category: "Santé mondiale et crises" },
    { id: 84, french: "Accords internationaux", english: "International agreements", category: "Santé mondiale et crises" },
    { id: 85, french: "Santé mondiale", english: "Global health", category: "Santé mondiale et crises" },
    { id: 86, french: "Accès aux médicaments", english: "Access to medicine", category: "Santé mondiale et crises" },
    { id: 87, french: "Pandémie mondiale", english: "Global pandemic", category: "Santé mondiale et crises" },
    { id: 88, french: "Covid-19", english: "Covid-19", category: "Santé mondiale et crises" },
    { id: 89, french: "Confinement", english: "Lockdown", category: "Santé mondiale et crises" },
    { id: 90, french: "Gestes barrières", english: "Preventive measures", category: "Santé mondiale et crises" },

    // 10. Perspectives et réformes / Perspectives and Reforms
    { id: 91, french: "Dépenses de santé", english: "Healthcare spending", category: "Perspectives et réformes" },
    { id: 92, french: "Augmentation du budget", english: "Budget increase", category: "Perspectives et réformes" },
    { id: 93, french: "Système universel", english: "Universal system", category: "Perspectives et réformes" },
    { id: 94, french: "Système mixte", english: "Mixed system", category: "Perspectives et réformes" },
    { id: 95, french: "Privatisation", english: "Privatization", category: "Perspectives et réformes" },
    { id: 96, french: "Couverture universelle", english: "Universal coverage", category: "Perspectives et réformes" },
    { id: 97, french: "Médecine préventive", english: "Preventive medicine", category: "Perspectives et réformes" },
    { id: 98, french: "Télémédecine", english: "Telemedicine", category: "Perspectives et réformes" },
    { id: 99, french: "Médecine personnalisée", english: "Personalized medicine", category: "Perspectives et réformes" },
    { id: 100, french: "Innovation médicale", english: "Medical innovation", category: "Perspectives et réformes" },
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
      'Concepts généraux de santé': 'bg-blue-500',
      'Médecine et soins': 'bg-green-500',
      'Hôpitaux et infrastructures': 'bg-purple-500',
      'Santé publique': 'bg-orange-500',
      'Système de santé britannique': 'bg-red-500',
      'Système de santé américain': 'bg-emerald-500',
      'Enjeux sociaux et inégalités': 'bg-teal-500',
      'Débats éthiques et politiques': 'bg-indigo-500',
      'Santé mondiale et crises': 'bg-pink-500',
      'Perspectives et réformes': 'bg-cyan-500',
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
              <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
                Santé et Systèmes de santé
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
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte principale */}
        <Card className="mb-8 border-2 border-teal-200">
          <CardHeader className="bg-gradient-to-r from-teal-50 to-green-50">
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
                  <h2 className="text-3xl font-bold text-teal-600 mb-4">
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
                <p className="text-2xl font-bold text-teal-600">{vocabularyData.length}</p>
                <p className="text-sm text-gray-600">Mots au total</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {Math.ceil(vocabularyData.length / 10)}
                </p>
                <p className="text-sm text-gray-600">Catégories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-600">
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

export default HealthVocabularyPage; 