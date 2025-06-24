import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  MessageSquare, Zap, Languages, Globe, TrendingUp,
  HelpCircle, Dices, BookOpen, Calculator, Code, Heart, User
} from 'lucide-react';

// IMPORT refactored components for each automation section:
import { GeneratorCategorySection } from '@/components/generator/GeneratorCategorySection';
import { AnswerAutomation } from '@/components/generator/AnswerAutomation';
import { EMLyonAutomation } from '@/components/generator/EMLyonAutomation';
import { EDHECAutomation } from '@/components/generator/EDHECAutomation';

// Import ALL generator components needed
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { GeopoliticsGenerator } from '@/components/generator/GeopoliticsGenerator';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { CaseStudyGenerator } from '@/components/generator/CaseStudyGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { SchoolProfileGenerator } from '@/components/generator/SchoolProfileGenerator';
import { MathTutorGenerator } from '@/components/generator/MathTutorGenerator';
import { PythonTutorGenerator } from '@/components/generator/PythonTutorGenerator';
import { PythonExerciseGenerator } from '@/components/generator/PythonExerciseGenerator';
import { PrepaChatbotGenerator } from '@/components/generator/PrepaChatbotGenerator';

import { useForm } from "react-hook-form";
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { useProgress } from "@/context/ProgressContext";

// Import type
import { AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { Answer } from '@/components/generator/ResponseTabs';

// MiniCard type
type AutomationKey =
  | 'answer'
  | 'flashcards'
  | 'languages'
  | 'geopolitics'
  | 'case-study'
  | 'emlyon'
  | 'edhec'
  | 'theme-grammar'
  | 'school-profile'
  | 'math-tutor'
  | 'python-tutor'
  | 'python-exercises'
  | 'prepa-chatbot';

interface Automation {
  key: AutomationKey;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  usage: string;
}

interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  automations: Automation[];
  gradient: string;
}

const CATEGORIES: Category[] = [
  {
    title: "Outils pour les entretiens de personnalité",
    description: "Générateurs spécialisés pour réussir vos entretiens avec storytelling et préparation ciblée",
    icon: <User className="h-8 w-8 text-white" />,
    gradient: "bg-gradient-to-r from-orange-600 to-red-600",
    automations: [
      {
        key: 'answer',
        icon: <MessageSquare className="h-8 w-8 text-primary" />,
        title: "Réponse d'entretien",
        description: "Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté.",
        badge: "IA",
        usage: "Saisissez votre question d'entretien, remplissez vos informations personnelles (filière, école visée, expériences), et l'IA génère une réponse structurée avec des exemples concrets tirés de votre profil."
      },
      {
        key: 'emlyon',
        icon: <HelpCircle className="h-8 w-8 text-primary" />,
        title: "Questions EM Lyon",
        description: "Questions aléatoires pour l'entretien 'Flash' avec cartes thématiques.",
        badge: "Interactif",
        usage: "Cliquez sur 'Nouvelle question' pour obtenir une question aléatoire inspirée du format EM Lyon. Préparez votre réponse en 1 minute puis présentez-la comme à l'oral."
      },
      {
        key: 'edhec',
        icon: <Dices className="h-8 w-8 text-primary" />,
        title: "Générateur de mots EDHEC",
        description: "Générateur de mots aléatoires pour votre présentation EDHEC.",
        badge: "Rapide",
        usage: "Générez un mot aléatoire et préparez une présentation de 3 minutes en suivant le format EDHEC : définition, exemples personnels, et ouverture sur votre projet."
      },
      {
        key: 'school-profile',
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        title: "Fiche école personnalisée",
        description: "Automatise la recherche des infos-clés pour ton entretien : valeurs, assos, doubles diplômes, actu, etc.",
        badge: "Nouveau",
        usage: "Entrez le nom d'une école de commerce et obtenez automatiquement les informations essentielles : valeurs, associations phares, partenariats, actualités récentes pour briller en entretien."
      },
      {
        key: 'flashcards',
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Flashcards intelligentes",
        description: "Créez automatiquement des flashcards optimisées pour la mémorisation avec révision espacée intégrée.",
        badge: "Auto",
        usage: "Collez votre cours ou saisissez un thème, l'IA génère des flashcards avec questions-réponses optimisées. Système de révision espacée intégré pour mémoriser efficacement."
      },
      {
        key: 'prepa-chatbot',
        icon: <span className="inline-block p-1 rounded bg-gradient-to-br from-[#67e8f9] to-[#f472b6]"><Heart className="h-6 w-6 text-pink-600" /></span>,
        title: "Chatbot prépa",
        description: "Conseils motivation, méthode & bien-être. Ton assistant IA inspiré par Major-Prépa & Mister Prépa.",
        badge: "IA Coach",
        usage: "Posez vos questions sur la motivation, la méthode de travail, la gestion du stress, l'organisation... Obtenez des conseils personnalisés inspirés des meilleures ressources prépa."
      },
    ]
  },
  {
    title: "Langues",
    description: "Outils pour améliorer vos compétences linguistiques et réussir les épreuves de langues",
    icon: <Languages className="h-8 w-8 text-white" />,
    gradient: "bg-gradient-to-r from-purple-600 to-indigo-600",
    automations: [
      {
        key: 'languages',
        icon: <Languages className="h-8 w-8 text-primary" />,
        title: "Paragraphes de langues",
        description: "Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé.",
        badge: "Nouveau",
        usage: "Choisissez votre langue, saisissez un sujet ou thème, et obtenez un paragraphe structuré avec vocabulaire avancé, expressions idiomatiques et connecteurs logiques adaptés au niveau prépa."
      },
      {
        key: 'theme-grammar',
        icon: <Languages className="h-8 w-8 text-primary" />,
        title: "Thème Grammatical",
        description: "Générateur et correcteur de thèmes de traduction : notation détaillée instantanée.",
        badge: "Nouveau",
        usage: "Traduisez les phrases françaises vers l'allemand, puis comparez avec la correction détaillée. Analyse automatique des erreurs grammaticales avec explications pour progresser rapidement."
      },
    ]
  },
  {
    title: "Géopolitique",
    description: "Ressources complètes pour maîtriser la géopolitique et l'actualité internationale",
    icon: <Globe className="h-8 w-8 text-white" />,
    gradient: "bg-gradient-to-r from-blue-600 to-cyan-600",
    automations: [
      {
        key: 'geopolitics',
        icon: <Globe className="h-8 w-8 text-primary" />,
        title: "Contenu géopolitique complet",
        description: "Cours structurés, sujets de dissertation, actualités récentes et flashcards thématiques automatiquement générés.",
        badge: "Complet",
        usage: "Entrez un thème géopolitique (ex: 'Tensions en mer de Chine') et obtenez un cours structuré, des sujets de dissertation, les dernières actualités et des flashcards pour réviser."
      },
      {
        key: 'case-study',
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Études de cas d'actualité",
        description: "Transformez vos articles d'actualité en études de cas géopolitiques avec chiffres clés et sujets de dissertation.",
        badge: "Nouveau",
        usage: "Collez un article d'actualité ou une URL, l'IA extrait les informations clés, propose une analyse géopolitique structurée et génère des sujets de dissertation associés."
      },
    ]
  },
  {
    title: "Mathématiques & Informatique",
    description: "Assistants IA pour résoudre vos problèmes mathématiques et maîtriser la programmation",
    icon: <Calculator className="h-8 w-8 text-white" />,
    gradient: "bg-gradient-to-r from-green-600 to-teal-600",
    automations: [
      {
        key: 'math-tutor',
        icon: <Calculator className="h-8 w-8 text-primary" />,
        title: "Prof de maths virtuel",
        description: "Demande un indice, une explication ou la solution sur un exercice mathématiques.",
        badge: "IA",
        usage: "Photographiez ou saisissez votre exercice de maths, choisissez le niveau d'aide souhaité (indice, méthode, solution complète). L'IA s'adapte à votre niveau et explique étape par étape."
      },
      {
        key: 'python-tutor',
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Assistant Python IA",
        description: "Analyse ton code Python, détecte les erreurs et génère une version optimisée avec conseils adaptés à ton niveau.",
        badge: "Nouveau",
        usage: "Collez votre code Python, décrivez le problème rencontré. L'IA détecte les erreurs, propose des corrections et explique les bonnes pratiques pour améliorer votre code."
      },
      {
        key: 'python-exercises',
        icon: <span className="inline-block p-1 rounded bg-gradient-to-br from-[#136ae5] to-[#2ddcb3]"><BookOpen className="h-7 w-7 text-white" /></span>,
        title: "Exercices Python",
        description: "Génère des exercices pratiques Python (matrice, algèbre…) et complète tes fonctions !",
        badge: "Exos IA",
        usage: "Choisissez un thème (matrices, algorithmes, statistiques), spécifiez votre niveau. L'IA génère des exercices progressifs avec tests automatiques et corrections détaillées."
      },
    ]
  },
];

// Props et states propres à chaque automatisation
const GeneratorPage = () => {
  // Réponse entretien (etats internes)
  const [question, setQuestion] = useState('');
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [activeTab, setActiveTab] = useState('response');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const additionalInfoForm = useForm<AdditionalInfo>({
    defaultValues: {
      filiere: '',
      specialite: '',
      ecole: '',
      associatif: '',
      interets: '',
      voyages: '',
      sport: '',
      trait: '',
    }
  });

  const { currentUser } = useAuth();

  const {
    generating,
    wordCount,
    currentAnswer,
    setCurrentAnswer,
    generateAnswer
  } = useGenerateAnswer(currentUser?.id);

  const loadExample = () => {
    setQuestion("Quels sont vos défauts ?");
    additionalInfoForm.setValue('trait', 'Je veux tout gérer moi-même');
    additionalInfoForm.setValue('filiere', 'ECE');
    additionalInfoForm.setValue('ecole', 'HEC');
    additionalInfoForm.setValue('associatif', 'Responsable du pôle finance de l\'association Junior Conseil');
    setShowAdditionalInfo(true);
  };

  const handleGenerate = async () => {
    const additionalInfo = additionalInfoForm.getValues();
    await generateAnswer(question, language, additionalInfo);
  };

  const handleFlashcardCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const [selectedKey, setSelectedKey] = useState<AutomationKey | null>(null);

  // Pour garder le titre principal même quand on effectue un zoom sur une automation
  const renderAutomationContent = () => {
    switch (selectedKey) {
      case "answer":
        return (
          <AnswerAutomation
            question={question}
            setQuestion={setQuestion}
            language={language}
            setLanguage={setLanguage}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            showAdditionalInfo={showAdditionalInfo}
            setShowAdditionalInfo={setShowAdditionalInfo}
            loadExample={loadExample}
            handleGenerate={handleGenerate}
            generating={generating}
            currentAnswer={currentAnswer}
            setCurrentAnswer={setCurrentAnswer}
            wordCount={wordCount}
            additionalInfoForm={additionalInfoForm}
          />
        );
      case "flashcards":
        return <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />;
      case "languages":
        return <LanguageParagraphGenerator language={language} />;
      case "geopolitics":
        return <GeopoliticsGenerator language={language} />;
      case "case-study":
        return <CaseStudyGenerator language={language} />;
      case "emlyon":
        return <EMLyonAutomation />;
      case "edhec":
        return <EDHECAutomation />;
      case "theme-grammar":
        return <ThemeGrammaticalGenerator />;
      case "school-profile":
        return <SchoolProfileGenerator />;
      case "math-tutor":
        return <MathTutorGenerator />;
      case "python-tutor":
        return <PythonTutorGenerator />;
      case "python-exercises":
        return <PythonExerciseGenerator />;
      case "prepa-chatbot":
        return <PrepaChatbotGenerator />;
      default:
        return null;
    }
  };

  const handleKeySelect = (key: string) => {
    setSelectedKey(key as AutomationKey);
  };

  const { trackPageVisit } = useProgress();
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Générateurs IA
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Préparez vos entretiens avec nos générateurs intelligents : réponses personnalisées, flashcards, langues et géopolitique
        </p>
      </div>
      {!selectedKey && (
        <>
          <GeneratorCategorySection
            categories={CATEGORIES}
            onSelect={handleKeySelect}
          />
          <div className="text-center mt-8 text-muted-foreground text-sm">
            Cliquez sur une automatisation pour commencer&nbsp;!
          </div>
        </>
      )}
      {selectedKey && (
        <div>
          <button
            onClick={() => setSelectedKey(null)}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            ← Retour aux automatisations
          </button>
          <div>
            {renderAutomationContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratorPage;
