
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link, useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  BookOpen, 
  Languages, 
  Code, 
  Zap,
  ArrowRight,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { GeneratorCategorySection } from '@/components/generator/GeneratorCategorySection';
import { useGenerateAnswer } from '@/hooks/useGenerateAnswer';
import { AnswerAutomation } from '@/components/generator/AnswerAutomation';

const GeneratorPage = () => {
  const navigate = useNavigate();
  const {
    question,
    setQuestion,
    language,
    setLanguage,
    activeTab,
    setActiveTab,
    generating,
    generatingQuestions,
    currentAnswer,
    setCurrentAnswer,
    wordCount,
    contextualQuestions,
    showContextualQuestions,
    handleGenerateQuestions,
    handleGenerateAnswer,
    resetFlow
  } = useGenerateAnswer();

  const mainGenerators = [
    {
      title: "Réponse d'entretien",
      description: "Générez des réponses structurées et personnalisées pour vos entretiens de personnalité avec du storytelling adapté.",
      icon: MessageSquare,
      badge: "IA",
      color: "from-orange-500 to-red-500",
      component: (
        <AnswerAutomation
          question={question}
          setQuestion={setQuestion}
          language={language}
          setLanguage={setLanguage}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          generating={generating}
          generatingQuestions={generatingQuestions}
          currentAnswer={currentAnswer}
          setCurrentAnswer={setCurrentAnswer}
          wordCount={wordCount}
          contextualQuestions={contextualQuestions}
          showContextualQuestions={showContextualQuestions}
          onGenerateQuestions={handleGenerateQuestions}
          onGenerateAnswer={handleGenerateAnswer}
          onResetFlow={resetFlow}
        />
      )
    }
  ];

  const otherGenerators = [
    {
      title: "Flashcards",
      description: "Créez des cartes de révision personnalisées à partir de vos cours et notes.",
      icon: BookOpen,
      path: "/generator/flashcards",
      badge: "Nouveau",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Langues",
      description: "Générez des exercices de langues, traductions et contenus linguistiques.",
      icon: Languages,
      path: "/generator/languages",
      badge: "Populaire",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Thème grammatical",
      description: "Corrigez et améliorez vos thèmes grammaticaux avec des explications détaillées.",
      icon: GraduationCap,
      path: "/generator/theme-grammar",
      badge: "IA",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Exercices Python",
      description: "Générez des exercices Python adaptés au programme de prépa ECG.",
      icon: Code,
      path: "/generator/python-exercises",
      badge: "Technique",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Outils IA pour prépa
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Générateurs IA
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des outils alimentés par l'intelligence artificielle pour optimiser vos révisions et préparations aux concours
          </p>
        </div>

        {/* Générateur principal - Réponse d'entretien */}
        <div className="mb-16">
          {mainGenerators[0].component}
        </div>

        <Separator className="my-16" />

        {/* Autres générateurs */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Autres générateurs</h2>
            <p className="text-muted-foreground">
              Explorez nos autres outils spécialisés pour différentes matières
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherGenerators.map((generator, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${generator.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${generator.color} text-white mb-4`}>
                      <generator.icon className="h-6 w-6" />
                    </div>
                    <Badge variant={generator.badge === "IA" ? "default" : "secondary"} className="text-xs">
                      {generator.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {generator.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6">
                    {generator.description}
                  </p>
                  <Link to={generator.path}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Zap className="mr-2 h-4 w-4" />
                      Accéder à l'outil
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">Plus d'outils bientôt disponibles</h3>
          <p className="text-muted-foreground mb-6">
            Nous développons constamment de nouveaux générateurs pour vous accompagner dans vos révisions
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              Suggérer un nouvel outil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GeneratorPage;
