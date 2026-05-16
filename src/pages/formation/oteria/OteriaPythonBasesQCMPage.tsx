import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { OteriaPythonChapterTemplate } from '@/components/formation/OteriaPythonChapterTemplate';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quel est le type de la variable x = 5 en Python ?",
    options: ["float", "str", "int", "bool"],
    correctAnswer: 2,
    explanation: "5 est un nombre entier, donc son type est int (integer).",
    category: "Types"
  },
  {
    id: 2,
    question: "Quelle opération représente le symbole // en Python ?",
    options: ["Division", "Modulo", "Division entière", "Puissance"],
    correctAnswer: 2,
    explanation: "// effectue une division entière (quotient sans reste).",
    category: "Opérateurs"
  },
  {
    id: 3,
    question: "Comment créer une liste vide en Python ?",
    options: ["L = ()", "L = {}", "L = []", "L = list()"],
    correctAnswer: 2,
    explanation: "[] crée une liste vide, et list() est également valide.",
    category: "Listes"
  },
  {
    id: 4,
    question: "Quelle est la syntaxe correcte pour une boucle for de 0 à 4 ?",
    options: ["for i in range(5):", "for i in range(0, 5):", "Les deux sont correctes", "Aucune des deux"],
    correctAnswer: 2,
    explanation: "range(5) et range(0, 5) donnent tous deux [0, 1, 2, 3, 4].",
    category: "Boucles"
  },
  {
    id: 5,
    question: "Quel mot-clé permet de sortir d'une boucle ?",
    options: ["exit", "stop", "break", "end"],
    correctAnswer: 2,
    explanation: "break permet de sortir immédiatement d'une boucle for ou while.",
    category: "Boucles"
  },
  {
    id: 6,
    question: "Quelle est la valeur de 17 % 6 ?",
    options: ["2", "3", "5", "11"],
    correctAnswer: 2,
    explanation: "17 ÷ 6 = 2*6 + 5, donc le reste (modulo) est 5.",
    category: "Opérateurs"
  },
  {
    id: 7,
    question: "Comment accéder au premier élément d'une liste L ?",
    options: ["L[1]", "L[0]", "L.first()", "L.get(0)"],
    correctAnswer: 1,
    explanation: "Les indices de liste commencent à 0 en Python.",
    category: "Listes"
  },
  {
    id: 8,
    question: "Quelle librairie est utilisée pour les calculs numériques avancés ?",
    options: ["random", "math", "numpy", "os"],
    correctAnswer: 2,
    explanation: "numpy (souvent importé comme np) est spécialisée dans les calculs vectoriels et matriciels.",
    category: "Librairies"
  },
  {
    id: 9,
    question: "Quelle est la syntaxe pour définir une fonction ?",
    options: ["function nom():", "def nom():", "create nom():", "func nom():"],
    correctAnswer: 1,
    explanation: "Les fonctions se définissent avec le mot-clé def suivi du nom et des parenthèses.",
    category: "Fonctions"
  },
  {
    id: 10,
    question: "Comment générer un nombre aléatoire entre 1 et 10 ?",
    options: ["random.randint(1, 10)", "rd.random(1, 10)", "random.choice(1, 10)", "rd.uniform(1, 10)"],
    correctAnswer: 0,
    explanation: "random.randint(a, b) génère un entier aléatoire entre a et b inclus.",
    category: "Librairies"
  },
  {
    id: 11,
    question: "Quelle condition teste si un nombre n est pair ?",
    options: ["n == 2", "n % 2 = 0", "n % 2 == 0", "n / 2 == 0"],
    correctAnswer: 2,
    explanation: "n % 2 == 0 vérifie que le reste de la division par 2 est nul.",
    category: "Conditions"
  },
  {
    id: 12,
    question: "Comment ajouter un élément à la fin d'une liste L ?",
    options: ["L.add(element)", "L.insert(element)", "L.append(element)", "L.push(element)"],
    correctAnswer: 2,
    explanation: "append() ajoute un élément à la fin de la liste.",
    category: "Listes"
  },
  {
    id: 13,
    question: "Quelle librairie est utilisée pour tracer des graphiques ?",
    options: ["plotly", "matplotlib", "seaborn", "bokeh"],
    correctAnswer: 1,
    explanation: "matplotlib (souvent importé comme plt) est la librairie standard pour les graphiques.",
    category: "Librairies"
  },
  {
    id: 14,
    question: "Quel est le résultat de 2 ** 4 ?",
    options: ["6", "8", "16", "24"],
    correctAnswer: 2,
    explanation: "2 ** 4 = 2⁴ = 16 (opérateur de puissance).",
    category: "Opérateurs"
  },
  {
    id: 15,
    question: "Comment créer une liste de compréhension pour les carrés de 0 à 4 ?",
    options: ["[x^2 for x in range(5)]", "[x**2 for x in range(5)]", "[pow(x, 2) for x in range(5)]", "Les trois sont correctes"],
    correctAnswer: 1,
    explanation: "[x**2 for x in range(5)] crée [0, 1, 4, 9, 16].",
    category: "Listes"
  },
  {
    id: 16,
    question: "Quelle boucle permet de répéter tant qu'une condition est vraie ?",
    options: ["for", "while", "repeat", "loop"],
    correctAnswer: 1,
    explanation: "while condition: répète tant que la condition est vraie.",
    category: "Boucles"
  },
  {
    id: 17,
    question: "Quel type représente les valeurs True/False ?",
    options: ["int", "float", "str", "bool"],
    correctAnswer: 3,
    explanation: "Le type bool représente les valeurs booléennes True et False.",
    category: "Types"
  },
  {
    id: 18,
    question: "Comment obtenir la longueur d'une liste L ?",
    options: ["L.size()", "L.length()", "len(L)", "L.count()"],
    correctAnswer: 2,
    explanation: "len(L) retourne le nombre d'éléments dans la liste L.",
    category: "Listes"
  },
  {
    id: 19,
    question: "Quelle librairie gère les données tabulaires comme Excel ?",
    options: ["numpy", "pandas", "scipy", "sympy"],
    correctAnswer: 1,
    explanation: "pandas (souvent importé comme pd) est spécialisée dans la manipulation de données tabulaires.",
    category: "Librairies"
  },
  {
    id: 20,
    question: "Quel opérateur compare deux valeurs pour l'égalité ?",
    options: ["=", "==", "!=", "==="],
    correctAnswer: 1,
    explanation: "== teste l'égalité, tandis que = est l'opérateur d'affectation.",
    category: "Opérateurs"
  }
];

const OteriaPythonBasesQCMPage = () => {
  const { currentUser } = useAuth();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [validated, setValidated] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleAnswerSelect = (questionId: number, optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length };
  };

  const handleValidation = async () => {
    setValidated(true);
    const { correct, total } = calculateScore();
    const scorePercentage = Math.round((correct / total) * 100);

    if (currentUser) {
      try {
        const { error } = await supabase
          .from('qcm_results')
          .insert({
            user_id: currentUser.id,
            qcm_id: 'oteria-python-bases',
            title: 'Bases de Python - QCM',
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
    setValidated(false);
    setSaveMessage('');
  };

  const { correct, total } = calculateScore();
  const scorePercentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const answeredCount = Object.keys(answers).length;

  return (
    <OteriaPythonChapterTemplate
      sessionNumber={2}
      sessionTitle="Bases de Python & Algorithmique"
      description="Testez vos connaissances sur les bases de Python avec ce QCM interactif."
      slug="python"
      courseSlug="python-bases-cours"
      flashcardsSlug="python-bases-flashcards"
      duration="4h"
      level="Débutant"
      activeSection="quiz"
      previousSession={{ slug: 'logique-fondamentale', title: 'Logique' }}
      nextSession={{ slug: 'recurrence-recursivite', title: 'Récurrence' }}
    >
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header du QCM */}
        <div className="border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-6 bg-carnet-paper-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-lora text-[24px] text-carnet-ink">
              QCM : Bases de Python
            </h2>
            {validated && (
              <div className="px-4 py-2 rounded-full font-instrument text-[14px] font-bold bg-carnet-ink text-carnet-paper">
                {correct}/{total} ({scorePercentage}%)
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {!validated ? (
              <button
                type="button"
                onClick={handleValidation}
                disabled={answeredCount < questions.length}
                className="inline-flex items-center gap-2 bg-carnet-ink hover:bg-carnet-red text-carnet-paper rounded-full font-instrument font-semibold px-5 h-10 text-[14px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CheckCircle className="h-4 w-4" />
                Valider ({answeredCount}/{questions.length})
              </button>
            ) : (
              <button
                type="button"
                onClick={resetQCM}
                className="inline-flex items-center gap-2 bg-transparent border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red rounded-full font-instrument font-semibold px-5 h-10 text-[14px] transition-colors"
              >
                <RotateCcw className="h-4 w-4" />
                Recommencer
              </button>
            )}
          </div>

          {saveMessage && (
            <div className={cn(
              "mt-4 font-instrument text-[14px] font-medium",
              saveMessage.includes('Erreur') ? 'text-carnet-ink-mute' : 'text-carnet-red'
            )}>
              {saveMessage}
            </div>
          )}
        </div>

        {/* Questions */}
        {questions.map((question, index) => {
          const userAnswer = answers[question.id];

          return (
            <div key={question.id} className="border border-dashed border-[rgba(78,55,30,0.18)] rounded-md overflow-hidden bg-carnet-paper-2">
              {/* Question header */}
              <div className="carnet-paper-2 border-b border-dashed border-[rgba(78,55,30,0.18)] px-6 py-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-carnet-ink text-carnet-paper rounded-full flex items-center justify-center font-instrument text-[13px] font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-lora text-[18px] text-carnet-ink leading-snug">
                      {question.question}
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center px-2 py-0.5 rounded font-instrument text-[11px] uppercase tracking-[0.12em] font-semibold text-carnet-red bg-[rgba(193,68,58,0.08)]">
                        {question.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Choices */}
              <div className="p-6 space-y-3">
                {question.options.map((option, optionIndex) => {
                  const isSelected = userAnswer === optionIndex;
                  const isCorrect = optionIndex === question.correctAnswer;
                  const showCorrectAnswer = validated && isCorrect;
                  const showWrongAnswer = validated && isSelected && !isCorrect;

                  return (
                    <div
                      key={optionIndex}
                      onClick={() => !validated && handleAnswerSelect(question.id, optionIndex)}
                      className={cn(
                        "p-4 rounded-md border transition-all duration-200",
                        !validated && "cursor-pointer hover:border-carnet-red",
                        validated && "cursor-default",
                        showCorrectAnswer && "border-carnet-red bg-[rgba(193,68,58,0.08)] carnet-hl",
                        showWrongAnswer && "border-[rgba(78,55,30,0.18)] bg-carnet-paper",
                        !showCorrectAnswer && !showWrongAnswer && isSelected && "border-carnet-red bg-carnet-paper",
                        !showCorrectAnswer && !showWrongAnswer && !isSelected && "border-[rgba(78,55,30,0.18)] bg-carnet-paper-2"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0",
                          showCorrectAnswer && "border-carnet-red bg-carnet-red",
                          showWrongAnswer && "border-carnet-ink-mute",
                          !showCorrectAnswer && !showWrongAnswer && isSelected && "border-carnet-red bg-carnet-red",
                          !showCorrectAnswer && !showWrongAnswer && !isSelected && "border-[rgba(78,55,30,0.18)]"
                        )}>
                          {(isSelected || showCorrectAnswer) && (
                            <div className="w-2 h-2 bg-carnet-paper rounded-full"></div>
                          )}
                        </div>
                        <span className={cn(
                          "font-instrument text-[14px] font-medium flex-1",
                          showCorrectAnswer && "text-carnet-ink",
                          showWrongAnswer && "text-carnet-ink-mute line-through",
                          !showCorrectAnswer && !showWrongAnswer && "text-carnet-ink"
                        )}>
                          {option}
                        </span>
                        {showCorrectAnswer && <CheckCircle className="h-5 w-5 text-carnet-red flex-shrink-0" />}
                        {showWrongAnswer && <XCircle className="h-5 w-5 text-carnet-ink-mute flex-shrink-0" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explication — toujours visible après validation */}
              {validated && (
                <div className="px-6 pb-6">
                  <div className="bg-carnet-paper border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-4">
                    <div className="carnet-eyebrow mb-2">Explication</div>
                    <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.65]">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}

      </div>
    </OteriaPythonChapterTemplate>
  );
};

export default OteriaPythonBasesQCMPage;
