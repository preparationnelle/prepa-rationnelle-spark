import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  MessageSquare, Zap, Languages, Globe, TrendingUp,
  HelpCircle, Dices, BookOpen
} from 'lucide-react';

// Import components des automatisations :
import { QuestionForm } from '@/components/generator/QuestionForm';
import { AdditionalInfoForm, AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { InfoPanel } from '@/components/generator/InfoPanel';
import { ResponseCard } from '@/components/generator/ResponseCard';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { FlashcardReviewer } from '@/components/flashcards/FlashcardReviewer';
import { GeopoliticsGenerator } from '@/components/generator/GeopoliticsGenerator';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { CaseStudyGenerator } from '@/components/generator/CaseStudyGenerator';
import { ThemeGrammaticalGenerator } from "@/components/grammar/ThemeGrammaticalGenerator";
import { SchoolProfileGenerator } from "@/components/generator/SchoolProfileGenerator";
import { MathTutorGenerator } from '@/components/generator/MathTutorGenerator';

// hooks
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { cn } from "@/lib/utils";

// react-hook-form
import { useForm } from "react-hook-form";
import { useProgress } from "@/context/ProgressContext";

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
  | 'math-tutor';

const AUTOMATIONS = [
  {
    key: 'answer' as AutomationKey,
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: "Réponse d'entretien",
    description:
      "Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté.",
    badge: "IA",
  },
  {
    key: 'flashcards' as AutomationKey,
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Flashcards intelligentes",
    description:
      "Créez automatiquement des flashcards optimisées pour la mémorisation avec révision espacée intégrée.",
    badge: "Auto",
  },
  {
    key: 'languages' as AutomationKey,
    icon: <Languages className="h-8 w-8 text-primary" />,
    title: "Paragraphes de langues",
    description:
      "Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé.",
    badge: "Nouveau",
  },
  {
    key: 'geopolitics' as AutomationKey,
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Contenu géopolitique complet",
    description:
      "Cours structurés, sujets de dissertation, actualités récentes et flashcards thématiques automatiquement générés.",
    badge: "Complet",
  },
  {
    key: 'case-study' as AutomationKey,
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Études de cas d'actualité",
    description:
      "Transformez vos articles d’actualité en études de cas géopolitiques avec chiffres clés et sujets de dissertation.",
    badge: "Nouveau",
  },
  {
    key: 'emlyon' as AutomationKey,
    icon: <HelpCircle className="h-8 w-8 text-primary" />,
    title: "Questions EM Lyon",
    description:
      "Questions aléatoires pour l'entretien 'Flash' avec cartes thématiques.",
    badge: "Interactif",
  },
  {
    key: 'edhec' as AutomationKey,
    icon: <Dices className="h-8 w-8 text-primary" />,
    title: "Générateur de mots EDHEC",
    description:
      "Générateur de mots aléatoires pour votre présentation EDHEC.",
    badge: "Rapide",
  },
  {
    key: 'theme-grammar' as AutomationKey,
    icon: <Languages className="h-8 w-8 text-primary" />,
    title: "Thème Grammatical",
    description:
      "Générateur et correcteur de thèmes de traduction : notation détaillée instantanée.",
    badge: "Nouveau",
  },
  {
    key: 'school-profile' as AutomationKey,
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Fiche école personnalisée",
    description:
      "Automatise la recherche des infos-clés pour ton entretien : valeurs, assos, doubles diplômes, actu, etc.",
    badge: "Nouveau",
  },
  {
    key: 'math-tutor' as AutomationKey,
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: "Prof de maths virtuel",
    description: "Demande un indice, une explication ou la solution sur un exercice mathématiques.",
    badge: "IA",
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

  // Form pour les infos additionnelles
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

  // Auth context
  const { currentUser } = useAuth();

  // Answer generation
  const {
    generating,
    wordCount,
    currentAnswer,
    setCurrentAnswer,
    generateAnswer
  } = useGenerateAnswer(currentUser?.id);

  // Example
  const loadExample = () => {
    setQuestion("Quels sont vos défauts ?");
    additionalInfoForm.setValue('trait', 'Je veux tout gérer moi-même');
    additionalInfoForm.setValue('filiere', 'ECE');
    additionalInfoForm.setValue('ecole', 'HEC');
    additionalInfoForm.setValue('associatif', 'Responsable du pôle finance de l\'association Junior Conseil');
    setShowAdditionalInfo(true);
  };

  // Handle answer generation
  const handleGenerate = async () => {
    const additionalInfo = additionalInfoForm.getValues();
    await generateAnswer(question, language, additionalInfo);
  };

  const handleFlashcardCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  // Automatisation sélectionnée
  const [selectedKey, setSelectedKey] = useState<AutomationKey | null>(null);

  // Pour garder le titre principal même quand on effectue un zoom sur une automation
  const renderAutomationContent = () => {
    switch (selectedKey) {
      case "answer":
        return (
          <>
            <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 mb-12">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">
                        Générer une nouvelle réponse
                      </CardTitle>
                      <CardDescription className="text-orange-100 mt-1">
                        Entrez une question d'entretien pour obtenir une réponse structurée avec du storytelling
                      </CardDescription>
                    </div>
                  </div>
                  <ToggleGroup
                    type="single"
                    value={language}
                    onValueChange={(value) => value && setLanguage(value as 'fr' | 'en')}
                    className="bg-white/20 backdrop-blur-sm"
                  >
                    <ToggleGroupItem value="fr" aria-label="Français" className="text-white hover:bg-white/30">
                      🇫🇷
                    </ToggleGroupItem>
                    <ToggleGroupItem value="en" aria-label="English" className="text-white hover:bg-white/30">
                      🇬🇧
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <QuestionForm
                  question={question}
                  setQuestion={setQuestion}
                  language={language}
                  showAdditionalInfo={showAdditionalInfo}
                  setShowAdditionalInfo={setShowAdditionalInfo}
                  loadExample={loadExample}
                  handleGenerate={handleGenerate}
                  generating={generating}
                />
                <AdditionalInfoForm
                  language={language}
                  showAdditionalInfo={showAdditionalInfo}
                  form={additionalInfoForm}
                />
              </CardContent>
            </Card>
            {currentAnswer && (
              <ResponseCard
                question={question}
                answer={currentAnswer}
                wordCount={wordCount}
                language={language}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onClearAnswer={() => setCurrentAnswer(null)}
              />
            )}
            {!currentAnswer && !generating && (
              <InfoPanel language={language} />
            )}
          </>
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
        return (
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/30">
            <CardHeader className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Questions d'entretien EM Lyon</div>
                  <div className="text-yellow-100 text-sm font-normal mt-1">
                    Questions aléatoires pour l'entretien "Flash" avec cartes thématiques
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <RandomWordGenerator type="emlyon" />
            </CardContent>
          </Card>
        );
      case "edhec":
        return (
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30">
            <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Dices className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold">Générateur de mots EDHEC</div>
                  <div className="text-rose-100 text-sm font-normal mt-1">
                    Générateur de mots aléatoires pour votre présentation EDHEC
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <RandomWordGenerator type="word" />
            </CardContent>
          </Card>
        );
      case "theme-grammar":
        return <ThemeGrammaticalGenerator />;
      case "school-profile":
        return <SchoolProfileGenerator />;
      case "math-tutor":
        return <MathTutorGenerator />;
      default:
        return null;
    }
  };

  // Tracking
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
            {AUTOMATIONS.map(auto => (
              <button
                key={auto.key}
                onClick={() => setSelectedKey(auto.key)}
                className={cn(
                  "group flex flex-col items-start p-6 rounded-lg bg-white/90 hover:shadow-xl hover:bg-primary/5 transition-all border border-border/40 relative ring-0 focus-visible:ring-2 focus-visible:ring-primary outline-none",
                )}
                style={{ minHeight: 170 }}
                tabIndex={0}
                aria-label={auto.title}
              >
                <div className="flex items-center gap-3 mb-2">
                  {auto.icon}
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium ml-2">
                    {auto.badge}
                  </span>
                </div>
                <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{auto.title}</div>
                <div className="text-sm text-muted-foreground mb-2">{auto.description}</div>
              </button>
            ))}
          </div>
          <div className="text-center mt-4 text-muted-foreground text-sm">
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
