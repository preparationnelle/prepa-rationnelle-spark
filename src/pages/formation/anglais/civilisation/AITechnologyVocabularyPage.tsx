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

const AITechnologyVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Technologies de base / Basic Technologies
    { id: 1, french: "Ordinateur", english: "Computer", category: "Technologies de base" },
    { id: 2, french: "Microprocesseur", english: "Microprocessor", category: "Technologies de base" },
    { id: 3, french: "Puce électronique", english: "Chip", category: "Technologies de base" },
    { id: 4, french: "Matériel informatique", english: "Hardware", category: "Technologies de base" },
    { id: 5, french: "Logiciel", english: "Software", category: "Technologies de base" },
    { id: 6, french: "Système d'exploitation", english: "Operating system", category: "Technologies de base" },
    { id: 7, french: "Algorithme", english: "Algorithm", category: "Technologies de base" },
    { id: 8, french: "Base de données", english: "Database", category: "Technologies de base" },
    { id: 9, french: "Serveur", english: "Server", category: "Technologies de base" },
    { id: 10, french: "Réseau", english: "Network", category: "Technologies de base" },

    // 2. Internet et numérique / Internet and Digital
    { id: 11, french: "Internet", english: "Internet", category: "Internet et numérique" },
    { id: 12, french: "Moteur de recherche", english: "Search engine", category: "Internet et numérique" },
    { id: 13, french: "Site web", english: "Website", category: "Internet et numérique" },
    { id: 14, french: "Plateforme", english: "Platform", category: "Internet et numérique" },
    { id: 15, french: "Réseaux sociaux", english: "Social media", category: "Internet et numérique" },
    { id: 16, french: "Cloud computing", english: "Cloud computing", category: "Internet et numérique" },
    { id: 17, french: "Hébergement", english: "Hosting", category: "Internet et numérique" },
    { id: 18, french: "Adresse IP", english: "IP address", category: "Internet et numérique" },
    { id: 19, french: "Navigateur", english: "Browser", category: "Internet et numérique" },
    { id: 20, french: "Bande passante", english: "Bandwidth", category: "Internet et numérique" },

    // 3. Intelligence artificielle / Artificial Intelligence
    { id: 21, french: "Intelligence artificielle", english: "Artificial intelligence (AI)", category: "Intelligence artificielle" },
    { id: 22, french: "Apprentissage automatique", english: "Machine learning", category: "Intelligence artificielle" },
    { id: 23, french: "Apprentissage profond", english: "Deep learning", category: "Intelligence artificielle" },
    { id: 24, french: "Réseau de neurones", english: "Neural network", category: "Intelligence artificielle" },
    { id: 25, french: "Données", english: "Data", category: "Intelligence artificielle" },
    { id: 26, french: "Données massives", english: "Big data", category: "Intelligence artificielle" },
    { id: 27, french: "Traitement du langage naturel", english: "Natural language processing (NLP)", category: "Intelligence artificielle" },
    { id: 28, french: "Vision par ordinateur", english: "Computer vision", category: "Intelligence artificielle" },
    { id: 29, french: "Robotique", english: "Robotics", category: "Intelligence artificielle" },
    { id: 30, french: "Automatisation", english: "Automation", category: "Intelligence artificielle" },

    // 4. Outils et usages de l'IA / AI Tools and Applications
    { id: 31, french: "Chatbot", english: "Chatbot", category: "Outils et usages de l'IA" },
    { id: 32, french: "Assistant virtuel", english: "Virtual assistant", category: "Outils et usages de l'IA" },
    { id: 33, french: "Traduction automatique", english: "Machine translation", category: "Outils et usages de l'IA" },
    { id: 34, french: "Reconnaissance faciale", english: "Facial recognition", category: "Outils et usages de l'IA" },
    { id: 35, french: "Génération de texte", english: "Text generation", category: "Outils et usages de l'IA" },
    { id: 36, french: "Synthèse vocale", english: "Speech synthesis", category: "Outils et usages de l'IA" },
    { id: 37, french: "Voix artificielle", english: "Artificial voice", category: "Outils et usages de l'IA" },
    { id: 38, french: "Véhicule autonome", english: "Self-driving car", category: "Outils et usages de l'IA" },
    { id: 39, french: "Drone", english: "Drone", category: "Outils et usages de l'IA" },
    { id: 40, french: "Robot humanoïde", english: "Humanoid robot", category: "Outils et usages de l'IA" },

    // 5. Sécurité et risques / Security and Risks
    { id: 41, french: "Cybersécurité", english: "Cybersecurity", category: "Sécurité et risques" },
    { id: 42, french: "Hameçonnage", english: "Phishing", category: "Sécurité et risques" },
    { id: 43, french: "Piratage", english: "Hacking", category: "Sécurité et risques" },
    { id: 44, french: "Cyberattaque", english: "Cyberattack", category: "Sécurité et risques" },
    { id: 45, french: "Malware", english: "Malware", category: "Sécurité et risques" },
    { id: 46, french: "Ransomware", english: "Ransomware", category: "Sécurité et risques" },
    { id: 47, french: "Virus informatique", english: "Computer virus", category: "Sécurité et risques" },
    { id: 48, french: "Protection des données", english: "Data protection", category: "Sécurité et risques" },
    { id: 49, french: "Vie privée", english: "Privacy", category: "Sécurité et risques" },
    { id: 50, french: "Anonymat", english: "Anonymity", category: "Sécurité et risques" },

    // 6. Enjeux économiques / Economic Issues
    { id: 51, french: "Innovation", english: "Innovation", category: "Enjeux économiques" },
    { id: 52, french: "Disruption", english: "Disruption", category: "Enjeux économiques" },
    { id: 53, french: "Start-up", english: "Start-up", category: "Enjeux économiques" },
    { id: 54, french: "Licorne (entreprise valorisée >1 Md$)", english: "Unicorn", category: "Enjeux économiques" },
    { id: 55, french: "Capital-risque", english: "Venture capital", category: "Enjeux économiques" },
    { id: 56, french: "Bourse technologique", english: "Tech stock market", category: "Enjeux économiques" },
    { id: 57, french: "GAFAM", english: "Big Tech (Google, Apple, Facebook, Amazon, Microsoft)", category: "Enjeux économiques" },
    { id: 58, french: "Licences", english: "Licenses", category: "Enjeux économiques" },
    { id: 59, french: "Propriété intellectuelle", english: "Intellectual property", category: "Enjeux économiques" },
    { id: 60, french: "Brevet", english: "Patent", category: "Enjeux économiques" },

    // 7. Enjeux sociaux / Social Issues
    { id: 61, french: "Transformation numérique", english: "Digital transformation", category: "Enjeux sociaux" },
    { id: 62, french: "Télétravail", english: "Remote work", category: "Enjeux sociaux" },
    { id: 63, french: "Plateformes de streaming", english: "Streaming platforms", category: "Enjeux sociaux" },
    { id: 64, french: "E-commerce", english: "E-commerce", category: "Enjeux sociaux" },
    { id: 65, french: "Travail automatisé", english: "Automated work", category: "Enjeux sociaux" },
    { id: 66, french: "Destruction d'emplois", english: "Job destruction", category: "Enjeux sociaux" },
    { id: 67, french: "Création d'emplois", english: "Job creation", category: "Enjeux sociaux" },
    { id: 68, french: "Révolution numérique", english: "Digital revolution", category: "Enjeux sociaux" },
    { id: 69, french: "Inclusion numérique", english: "Digital inclusion", category: "Enjeux sociaux" },
    { id: 70, french: "Fracture numérique", english: "Digital divide", category: "Enjeux sociaux" },

    // 8. Éthique et politique / Ethics and Politics
    { id: 71, french: "Biais algorithmique", english: "Algorithmic bias", category: "Éthique et politique" },
    { id: 72, french: "Discrimination", english: "Discrimination", category: "Éthique et politique" },
    { id: 73, french: "Régulation", english: "Regulation", category: "Éthique et politique" },
    { id: 74, french: "Législation", english: "Legislation", category: "Éthique et politique" },
    { id: 75, french: "Surveillance de masse", english: "Mass surveillance", category: "Éthique et politique" },
    { id: 76, french: "Dérive autoritaire", english: "Authoritarian drift", category: "Éthique et politique" },
    { id: 77, french: "Transparence", english: "Transparency", category: "Éthique et politique" },
    { id: 78, french: "Responsabilité", english: "Accountability", category: "Éthique et politique" },
    { id: 79, french: "Confiance", english: "Trust", category: "Éthique et politique" },
    { id: 80, french: "Protection des mineurs", english: "Child protection", category: "Éthique et politique" },

    // 9. Technologies émergentes / Emerging Technologies
    { id: 81, french: "Métavers", english: "Metaverse", category: "Technologies émergentes" },
    { id: 82, french: "Réalité virtuelle", english: "Virtual reality (VR)", category: "Technologies émergentes" },
    { id: 83, french: "Réalité augmentée", english: "Augmented reality (AR)", category: "Technologies émergentes" },
    { id: 84, french: "Réalité mixte", english: "Mixed reality", category: "Technologies émergentes" },
    { id: 85, french: "Internet des objets", english: "Internet of Things (IoT)", category: "Technologies émergentes" },
    { id: 86, french: "5G", english: "5G", category: "Technologies émergentes" },
    { id: 87, french: "Informatique quantique", english: "Quantum computing", category: "Technologies émergentes" },
    { id: 88, french: "Chaîne de blocs", english: "Blockchain", category: "Technologies émergentes" },
    { id: 89, french: "Cryptomonnaie", english: "Cryptocurrency", category: "Technologies émergentes" },
    { id: 90, french: "NFT (jeton non fongible)", english: "NFT (Non-Fungible Token)", category: "Technologies émergentes" },

    // 10. Prospective et futur / Future and Prospects
    { id: 91, french: "Futur du travail", english: "Future of work", category: "Prospective et futur" },
    { id: 92, french: "Singularité technologique", english: "Technological singularity", category: "Prospective et futur" },
    { id: 93, french: "Transhumanisme", english: "Transhumanism", category: "Prospective et futur" },
    { id: 94, french: "Augmentation humaine", english: "Human enhancement", category: "Prospective et futur" },
    { id: 95, french: "Biotechnologies", english: "Biotechnologies", category: "Prospective et futur" },
    { id: 96, french: "Génétique", english: "Genetics", category: "Prospective et futur" },
    { id: 97, french: "Nanotechnologies", english: "Nanotechnologies", category: "Prospective et futur" },
    { id: 98, french: "Énergie renouvelable", english: "Renewable energy", category: "Prospective et futur" },
    { id: 99, french: "Ville intelligente", english: "Smart city", category: "Prospective et futur" },
    { id: 100, french: "Développement durable", english: "Sustainable development", category: "Prospective et futur" },
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
      'Technologies de base': 'bg-blue-500',
      'Internet et numérique': 'bg-green-500',
      'Intelligence artificielle': 'bg-purple-500',
      'Outils et usages de l\'IA': 'bg-orange-500',
      'Sécurité et risques': 'bg-red-500',
      'Enjeux économiques': 'bg-emerald-500',
      'Enjeux sociaux': 'bg-teal-500',
      'Éthique et politique': 'bg-indigo-500',
      'Technologies émergentes': 'bg-pink-500',
      'Prospective et futur': 'bg-cyan-500',
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
                IA et Technologie
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

export default AITechnologyVocabularyPage; 