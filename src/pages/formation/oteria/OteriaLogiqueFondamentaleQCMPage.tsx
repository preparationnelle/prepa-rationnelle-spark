import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { cn } from '@/lib/utils';

// Données du QCM
const qcmData = {
  title: "Logique & Raisonnement fondamentaux — QCM (20 questions)",
  questions: [
    {
      id: 1,
      question: "Laquelle des phrases est une proposition ?",
      choices: [
        { key: "a", text: "« 2+3=5 »" },
        { key: "b", text: "« x+1=4 »" },
        { key: "c", text: "« Dessine-moi un mouton »" },
        { key: "d", text: "« n est pair »" }
      ],
      answer: "a",
      explanation: "Une proposition a une valeur de vérité (vrai/faux). « 2+3=5 » est vraie. Les énoncés avec variables libres (b, d) ne sont pas des propositions fermées ; (c) n'a pas de valeur logique."
    },
    {
      id: 2,
      question: "La phrase « x+1=4 » est :",
      choices: [
        { key: "a", text: "Une proposition vraie" },
        { key: "b", text: "Une proposition fausse" },
        { key: "c", text: "Pas une proposition tant que x n'est pas précisé" },
        { key: "d", text: "Une tautologie" }
      ],
      answer: "c",
      explanation: "Énoncé ouvert : sa vérité dépend de x (vrai si x=3, faux si x=2)."
    },
    {
      id: 3,
      question: "La négation de « Tous les étudiants sont motivés » est :",
      choices: [
        { key: "a", text: "Aucun étudiant n'est motivé" },
        { key: "b", text: "Certains étudiants ne sont pas motivés" },
        { key: "c", text: "Tous les étudiants sont paresseux" },
        { key: "d", text: "Il existe un étudiant très motivé" }
      ],
      answer: "b",
      explanation: "¬(∀x, P(x)) ≡ ∃x, ¬P(x). Il suffit d'un contre-exemple."
    },
    {
      id: 4,
      question: "La négation de « Il existe un entier divisible par 7 et 11 » est :",
      choices: [
        { key: "a", text: "Aucun entier n'est divisible par 7" },
        { key: "b", text: "Aucun entier n'est divisible par 11" },
        { key: "c", text: "Aucun entier n'est divisible à la fois par 7 et 11" },
        { key: "d", text: "Tous les entiers sont divisibles par 7 ou 11" }
      ],
      answer: "c",
      explanation: "¬(∃x, P(x)) ≡ ∀x, ¬P(x). On nie l'existence par une universalité du contraire."
    },
    {
      id: 5,
      question: "La contraposée de « Si n² est pair, alors n est pair » est :",
      choices: [
        { key: "a", text: "Si n² est impair, alors n est impair" },
        { key: "b", text: "Si n est pair, alors n² est pair" },
        { key: "c", text: "Si n est impair, alors n² est impair" },
        { key: "d", text: "Si n² est impair, alors n est pair" }
      ],
      answer: "c",
      explanation: "Contraposée de P⇒Q : ¬Q⇒¬P. Ici Q≡« n pair », ¬Q≡« n impair » ; ¬P≡« n² impair »."
    },
    {
      id: 6,
      question: "Traduire ∀x∈ℝ, x² ≥ 0 :",
      choices: [
        { key: "a", text: "Pour tout réel x, x² est positif ou nul" },
        { key: "b", text: "Il existe un réel x tel que x² ≥ 0" },
        { key: "c", text: "Il existe un réel unique x tel que x² ≥ 0" },
        { key: "d", text: "Pour tout réel x, x² est strictement positif" }
      ],
      answer: "a",
      explanation: "Tout carré réel est ≥ 0."
    },
    {
      id: 7,
      question: "La négation de ∀x∈ℝ, x² ≥ 0 est :",
      choices: [
        { key: "a", text: "∃x∈ℝ, x² > 0" },
        { key: "b", text: "∃x∈ℝ, x² < 0" },
        { key: "c", text: "∀x∈ℝ, x² ≤ 0" },
        { key: "d", text: "∃x∈ℝ, x² = 0" }
      ],
      answer: "b",
      explanation: "¬∀ ≡ ∃ et on nie la propriété : x² ≥ 0 devient x² < 0 (même si c'est impossible en ℝ)."
    },
    {
      id: 8,
      question: "Traduire ∃!x∈ℝ, x² = 0 :",
      choices: [
        { key: "a", text: "Il existe au moins un réel dont le carré est nul" },
        { key: "b", text: "Il existe un réel dont le carré est nul et c'est le seul" },
        { key: "c", text: "Il existe un réel dont le carré est strictement positif" },
        { key: "d", text: "Tous les réels ont un carré nul" }
      ],
      answer: "b",
      explanation: "La solution unique est x=0 (unicité cruciale)."
    },
    {
      id: 9,
      question: "Si P=Vrai et Q=Faux, alors P∧Q vaut :",
      choices: [
        { key: "a", text: "Vrai" },
        { key: "b", text: "Faux" }
      ],
      answer: "b",
      explanation: "Conjonction vraie ⇔ les deux sont vrais. Ici Q est faux."
    },
    {
      id: 10,
      question: "La proposition « n multiple de 4 ⇒ n est pair » est :",
      choices: [
        { key: "a", text: "Toujours vraie" },
        { key: "b", text: "Toujours fausse" },
        { key: "c", text: "Vraie seulement pour certains n" },
        { key: "d", text: "Indécidable" }
      ],
      answer: "a",
      explanation: "Tout multiple de 4 est multiple de 2, donc pair."
    },
    {
      id: 11,
      question: "La disjonction de cas consiste à :",
      choices: [
        { key: "a", text: "Démontrer en testant des exemples au hasard" },
        { key: "b", text: "Diviser le problème en sous-cas couvrant toutes les possibilités" },
        { key: "c", text: "Démontrer en supposant le contraire" },
        { key: "d", text: "Utiliser la récurrence" }
      ],
      answer: "b",
      explanation: "On traite des cas exclusifs et exhaustifs (ex : n pair ou n impair)."
    },
    {
      id: 12,
      question: "Quelle méthode correspond à : « Supposons que √2 est rationnel et aboutissons à une contradiction » ?",
      choices: [
        { key: "a", text: "Preuve directe" },
        { key: "b", text: "Contraposée" },
        { key: "c", text: "Raisonnement par disjonction de cas" },
        { key: "d", text: "Raisonnement par l'absurde" }
      ],
      answer: "d",
      explanation: "On suppose la négation de l'énoncé à prouver et on obtient une impossibilité."
    },
    {
      id: 13,
      question: "La contraposée de « Si n² est impair, alors n est impair » est :",
      choices: [
        { key: "a", text: "Si n est impair, alors n² est impair" },
        { key: "b", text: "Si n est pair, alors n² est pair" },
        { key: "c", text: "Si n est impair, alors n² est pair" },
        { key: "d", text: "Si n² est pair, alors n est pair" }
      ],
      answer: "b",
      explanation: "P≡« n² impair », Q≡« n impair ». Contraposée : ¬Q⇒¬P, soit « n pair ⇒ n² pair »."
    },
    {
      id: 14,
      question: "Laquelle des phrases traduit correctement « P ⇔ Q » ?",
      choices: [
        { key: "a", text: "P⇒Q" },
        { key: "b", text: "Q⇒P" },
        { key: "c", text: "P⇒Q et Q⇒P" },
        { key: "d", text: "P∧Q" }
      ],
      answer: "c",
      explanation: "Équivalence = double implication."
    },
    {
      id: 15,
      question: "P est nécessaire pour Q si :",
      choices: [
        { key: "a", text: "P⇒Q" },
        { key: "b", text: "Q⇒P" },
        { key: "c", text: "P⇔Q" },
        { key: "d", text: "Ni l'un ni l'autre" }
      ],
      answer: "b",
      explanation: "Si Q est vrai, P doit l'être : Q⇒P (ex : être majeur est nécessaire pour voter)."
    },
    {
      id: 16,
      question: "La proposition ∀x∈ℝ, ∃y∈ℝ, x+y=0 est :",
      choices: [
        { key: "a", text: "Vraie" },
        { key: "b", text: "Fausse" }
      ],
      answer: "a",
      explanation: "Prendre y=−x pour chaque x."
    },
    {
      id: 17,
      question: "La proposition ∃y∈ℝ, ∀x∈ℝ, x+y=0 est :",
      choices: [
        { key: "a", text: "Vraie" },
        { key: "b", text: "Fausse" }
      ],
      answer: "b",
      explanation: "Aucun y unique ne convient pour tous les x (x=0 ⇒ y=0 ; x=1 ⇒ y=−1, contradiction)."
    },
    {
      id: 18,
      question: "Démontrer par récurrence consiste à :",
      choices: [
        { key: "a", text: "Vérifier la propriété pour n=0 (ou 1)" },
        { key: "b", text: "Supposer la propriété vraie pour n et montrer pour n+1" },
        { key: "c", text: "(a) et (b)" },
        { key: "d", text: "Aucun des deux" }
      ],
      answer: "c",
      explanation: "Deux étapes : initialisation + hérédité."
    },
    {
      id: 19,
      question: "Quelle méthode consiste à supposer le contraire et obtenir une contradiction ?",
      choices: [
        { key: "a", text: "Contraposée" },
        { key: "b", text: "Disjonction de cas" },
        { key: "c", text: "Raisonnement par l'absurde" },
        { key: "d", text: "Récurrence" }
      ],
      answer: "c",
      explanation: "Supposer ¬Énoncé et déduire une impossibilité."
    },
    {
      id: 20,
      question: "Les solutions de x²=9 par analyse–synthèse sont :",
      choices: [
        { key: "a", text: "3 seulement" },
        { key: "b", text: "-3 seulement" },
        { key: "c", text: "-3 et 3" },
        { key: "d", text: "0" }
      ],
      answer: "c",
      explanation: "Analyse : x=±3. Synthèse : vérification que -3 et 3 conviennent."
    }
  ]
};

const OteriaLogiqueFondamentaleQCMPage = () => {
  const { currentUser } = useAuth();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleAnswerSelect = (questionId: number, choiceKey: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: choiceKey
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    qcmData.questions.forEach(question => {
      if (answers[question.id] === question.answer) {
        correct++;
      }
    });
    return { correct, total: qcmData.questions.length };
  };

  const handleValidation = async () => {
    setShowResults(true);
    const { correct, total } = calculateScore();
    const scorePercentage = Math.round((correct / total) * 100);

    if (currentUser) {
      try {
        const { error } = await supabase
          .from('qcm_results')
          .insert({
            user_id: currentUser.id,
            qcm_id: 'oteria-logique-fondamentale',
            title: qcmData.title,
            score: scorePercentage,
            total_questions: total,
            correct_answers: correct
          });

        if (error) throw error;
        setSaveMessage('✓ Résultat enregistré dans votre dashboard');
      } catch (error) {
        console.error('Erreur sauvegarde:', error);
        setSaveMessage('Erreur lors de la sauvegarde du résultat.');
      }
    }
  };

  const resetQCM = () => {
    setAnswers({});
    setShowResults(false);
    setShowExplanations(false);
    setSaveMessage('');
  };

  const { correct, total } = calculateScore();
  const scorePercentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const answeredCount = Object.keys(answers).length;

  return (
    <OteriaChapterTemplate
      sessionNumber={1}
      sessionTitle="Logique fondamentale & booléens"
      description="Testez vos connaissances avec 20 questions à choix multiples sur la logique et le raisonnement mathématique."
      slug="logique-fondamentale"
      duration="3h"
      level="Débutant"
      activeSection="quiz"
    >
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header du QCM */}
        <div className="border border-carnet-rule rounded-lg p-6 bg-carnet-paper-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">
              {qcmData.title}
            </h2>
            {showResults && (
              <div className={cn(
                "px-4 py-2 rounded-full text-sm font-bold",
                scorePercentage >= 80 && "bg-emerald-100 text-emerald-800",
                scorePercentage >= 60 && scorePercentage < 80 && "bg-amber-100 text-amber-800",
                scorePercentage < 60 && "bg-red-100 text-red-800"
              )}>
                {correct}/{total} ({scorePercentage}%)
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {!showResults ? (
              <Button
                onClick={handleValidation}
                disabled={answeredCount < qcmData.questions.length}
                className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Valider ({answeredCount}/{qcmData.questions.length})
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => setShowExplanations(!showExplanations)}
                  variant="outline"
                  className="border-carnet-rule text-carnet-ink hover:bg-carnet-paper"
                >
                  {showExplanations ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {showExplanations ? 'Masquer' : 'Afficher'} les explications
                </Button>
                <Button
                  onClick={resetQCM}
                  variant="outline"
                  className="border-carnet-rule text-carnet-ink hover:bg-carnet-paper"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Recommencer
                </Button>
              </>
            )}
          </div>

          {saveMessage && (
            <div className={cn(
              "mt-4 text-sm font-medium",
              saveMessage.includes('Erreur') ? 'text-red-600' : 'text-emerald-600'
            )}>
              {saveMessage}
            </div>
          )}
        </div>

        {/* Questions */}
        {qcmData.questions.map((question) => {
          const userAnswer = answers[question.id];
          const isAnswered = userAnswer !== undefined;

          return (
            <div key={question.id} className="border border-carnet-rule rounded-lg overflow-hidden bg-carnet-paper-2">
              {/* Question header */}
              <div className="bg-carnet-paper border-b border-carnet-rule px-6 py-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-carnet-red text-carnet-paper rounded-full flex items-center justify-center text-sm font-bold">
                    {question.id}
                  </span>
                  <h3 className="text-slate-900 font-medium leading-relaxed">
                    {question.question}
                  </h3>
                </div>
              </div>

              {/* Choices */}
              <div className="p-6 space-y-3">
                {question.choices.map((choice) => {
                  const isSelected = userAnswer === choice.key;
                  const isCorrect = choice.key === question.answer;
                  const showCorrectAnswer = showResults && isCorrect;
                  const showWrongAnswer = showResults && isSelected && !isCorrect;

                  return (
                    <div
                      key={choice.key}
                      onClick={() => !showResults && handleAnswerSelect(question.id, choice.key)}
                      className={cn(
                        "p-4 rounded-lg border-2 transition-all duration-200",
                        !showResults && "cursor-pointer hover:border-carnet-red/40",
                        showResults && "cursor-default",
                        showCorrectAnswer && "border-emerald-500 bg-emerald-50",
                        showWrongAnswer && "border-red-500 bg-red-50",
                        !showCorrectAnswer && !showWrongAnswer && isSelected && "border-carnet-red/60 bg-carnet-paper",
                        !showCorrectAnswer && !showWrongAnswer && !isSelected && "border-carnet-rule bg-carnet-paper-2"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                          showCorrectAnswer && "border-emerald-600 bg-emerald-600",
                          showWrongAnswer && "border-red-600 bg-red-600",
                          !showCorrectAnswer && !showWrongAnswer && isSelected && "border-carnet-red bg-carnet-red",
                          !showCorrectAnswer && !showWrongAnswer && !isSelected && "border-carnet-rule"
                        )}>
                          {(isSelected || showCorrectAnswer) && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className={cn(
                          "text-sm font-medium flex-1",
                          showCorrectAnswer && "text-emerald-900",
                          showWrongAnswer && "text-red-900",
                          !showCorrectAnswer && !showWrongAnswer && "text-slate-700"
                        )}>
                          <span className="font-bold">{choice.key.toUpperCase()})</span> {choice.text}
                        </span>
                        {showCorrectAnswer && <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />}
                        {showWrongAnswer && <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explication */}
              {showResults && showExplanations && (
                <div className="px-6 pb-6">
                  <div className="bg-slate-50 border border-carnet-rule rounded-lg p-4">
                    <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">
                      💡 Explication
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaLogiqueFondamentaleQCMPage;
