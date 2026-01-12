import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Award, BookOpen, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { allemandSESAMEQuestions, getCategories, getQuestionsByCategory, Question } from '@/data/sesame/allemand-questions';

const SESAMEAllemandPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
    const [showResults, setShowResults] = useState(false);
    const [showExplanation, setShowExplanation] = useState<{ [key: number]: boolean }>({});
    const [examMode, setExamMode] = useState(false); // Mode examen : toutes les questions affichées

    const categories = getCategories();
    const currentQuestions = selectedCategory
        ? getQuestionsByCategory(selectedCategory)
        : allemandSESAMEQuestions;

    const currentQuestion = currentQuestions[currentQuestionIndex];

    const handleAnswerSelect = (answer: string, questionId?: number) => {
        if (!showResults) {
            const qId = questionId || currentQuestion?.id;
            if (qId) {
                setUserAnswers({
                    ...userAnswers,
                    [qId]: answer
                });
                // Afficher automatiquement l'explication après sélection
                setShowExplanation({
                    ...showExplanation,
                    [qId]: true
                });
            }
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    const handleReset = () => {
        setUserAnswers({});
        setShowResults(false);
        setCurrentQuestionIndex(0);
        setShowExplanation({});
        setExamMode(false);
    };

    const toggleExplanation = (questionId: number) => {
        setShowExplanation({
            ...showExplanation,
            [questionId]: !showExplanation[questionId]
        });
    };

    const calculateScore = () => {
        let correct = 0;
        currentQuestions.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswer) {
                correct++;
            }
        });
        return {
            correct,
            total: currentQuestions.length,
            percentage: Math.round((correct / currentQuestions.length) * 100)
        };
    };

    const getAnswerClassName = (option: string, questionId: number) => {
        const question = currentQuestions.find(q => q.id === questionId);
        if (!question) return "";

        const isSelected = userAnswers[questionId] === option;
        const isCorrect = question.correctAnswer === option;
        const hasAnswered = userAnswers[questionId] !== undefined;

        // Si on a répondu à cette question (mode normal) ou si on est en résultats finaux
        if (hasAnswered || showResults) {
            if (isCorrect) {
                return "border-green-500 bg-green-50 text-green-900";
            }
            if (isSelected && !isCorrect) {
                return "border-red-500 bg-red-50 text-red-900";
            }
            return "border-gray-200 bg-gray-50 text-gray-500";
        }

        // Si pas encore répondu
        return "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
    };

    const score = showResults ? calculateScore() : null;

    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Floating elements */}
            <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
            <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>

            {/* Sticky Breadcrumb */}
            <nav className="sticky top-0 z-50 bg-white border-b border-border/40">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <span>Accueil</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formations" className="hover:text-foreground transition-colors">
                            Formations
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formation/allemand" className="hover:text-foreground transition-colors">
                            Allemand ECG
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <span className="text-foreground font-medium">Exercices Allemand</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto py-8 px-4">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-6">
                        <Award className="h-10 w-10 text-blue-600" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-blue-600">EXERCICES</span>
                        <span className="text-black"> - Allemand</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Entraînez-vous avec des exercices types du concours : Traduction, Ordre des mots, Modaux et Déclinaisons
                    </p>
                </div>

                {/* Category Selection */}
                {!selectedCategory && !showResults && (
                    <div className="max-w-4xl mx-auto mb-8">
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                            Choisissez un thème ou commencez l'entraînement complet
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setCurrentQuestionIndex(0);
                                    }}
                                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                            <BookOpen className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-lg text-gray-800">{category}</h3>
                                            <p className="text-sm text-gray-600">
                                                {getQuestionsByCategory(category).length} questions
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="text-center space-y-4">
                            <div className="flex gap-4 justify-center">
                                <Button
                                    onClick={() => {
                                        setSelectedCategory("all");
                                        setExamMode(false);
                                    }}
                                    size="lg"
                                    variant="outline"
                                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
                                >
                                    Mode Normal (question par question)
                                </Button>
                                <Button
                                    onClick={() => {
                                        setSelectedCategory("all");
                                        setExamMode(true);
                                    }}
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8"
                                >
                                    Mode Examen (toutes les questions)
                                </Button>
                            </div>
                            <p className="text-sm text-gray-600">
                                Mode normal : une question à la fois • Mode examen : toutes les questions affichées
                            </p>
                        </div>
                    </div>
                )}

                {/* Quiz Interface */}
                {(selectedCategory || showResults) && (
                    <div className="max-w-4xl mx-auto">
                        {/* Progress Bar - Only in normal mode */}
                        {!showResults && !examMode && (
                            <div className="mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-600">
                                        Question {currentQuestionIndex + 1} sur {currentQuestions.length}
                                    </span>
                                    <span className="text-sm font-medium text-gray-600">
                                        {selectedCategory && selectedCategory !== "all" ? selectedCategory : "Toutes catégories"}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                                        style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        )}

                        {/* Exam Mode Progress */}
                        {!showResults && examMode && (
                            <div className="mb-8">
                                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Award className="h-6 w-6 text-orange-600" />
                                            <h3 className="font-bold text-lg text-orange-900">Mode Examen</h3>
                                        </div>
                                        <div className="text-sm font-medium text-orange-700">
                                            {Object.keys(userAnswers).length} / {currentQuestions.length} réponses
                                        </div>
                                    </div>
                                    <p className="text-sm text-orange-700 mt-2">
                                        Toutes les questions sont affichées. Faites défiler pour répondre à toutes.
                                    </p>
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={Object.keys(userAnswers).length !== currentQuestions.length}
                                        className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white"
                                    >
                                        Terminer l'examen ({Object.keys(userAnswers).length}/{currentQuestions.length})
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Score Display */}
                        {showResults && score && (
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8 border-2 border-blue-200">
                                <div className="text-center">
                                    <Trophy className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Résultats</h2>
                                    <p className="text-5xl font-bold text-blue-600 mb-2">{score.percentage}%</p>
                                    <p className="text-xl text-gray-700">
                                        {score.correct} bonnes réponses sur {score.total}
                                    </p>
                                    <div className="mt-6 flex gap-4 justify-center">
                                        <Button
                                            onClick={handleReset}
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                        >
                                            <RotateCcw className="mr-2 h-4 w-4" />
                                            Recommencer
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                setSelectedCategory(null);
                                                handleReset();
                                            }}
                                            variant="outline"
                                        >
                                            Changer de thème
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Question Card - Normal Mode */}
                        {!showResults && !examMode && currentQuestion && (
                            <div className="bg-white rounded-xl border-2 border-gray-200 p-8 mb-6 shadow-lg">
                                <div className="mb-6">
                                    <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                                        {currentQuestion.category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        {currentQuestion.question}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {currentQuestion.options.map((option, index) => {
                                        const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
                                        const isCorrect = currentQuestion.correctAnswer === optionLetter;
                                        const isSelected = userAnswers[currentQuestion.id] === optionLetter;
                                        const hasAnswered = userAnswers[currentQuestion.id] !== undefined;

                                        return (
                                            <button
                                                key={index}
                                                onClick={() => handleAnswerSelect(optionLetter)}
                                                disabled={hasAnswered}
                                                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${getAnswerClassName(optionLetter, currentQuestion.id)} ${hasAnswered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-current flex items-center justify-center font-bold">
                                                        {optionLetter}
                                                    </div>
                                                    <div className="flex-1 pt-1">
                                                        <p className="font-medium">{option}</p>
                                                    </div>
                                                    {hasAnswered && isCorrect && (
                                                        <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                                                    )}
                                                    {hasAnswered && isSelected && !isCorrect && (
                                                        <XCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                                                    )}
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Explication automatique après réponse */}
                                {userAnswers[currentQuestion.id] && currentQuestion.explanation && (
                                    <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg shadow-sm">
                                        <div className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${userAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-orange-100 text-orange-700'
                                                }`}>
                                                {userAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? '✓' : 'ℹ'}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-900 mb-2">
                                                    {userAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                                                        ? '✅ Bonne réponse !'
                                                        : '❌ Réponse incorrecte'}
                                                </h4>

                                                {/* Afficher la réponse correcte complète */}
                                                <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                                    <p className="text-xs text-green-700 font-semibold mb-1">
                                                        ✓ Réponse correcte ({currentQuestion.correctAnswer}) :
                                                    </p>
                                                    <p className="text-sm text-green-900 font-medium">
                                                        {currentQuestion.options[currentQuestion.correctAnswer.charCodeAt(0) - 65]}
                                                    </p>
                                                </div>

                                                <p className="text-sm text-gray-700 mb-2">
                                                    <strong className="text-blue-800">Explication : </strong>
                                                    {currentQuestion.explanation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between items-center mt-8">
                                    <Button
                                        onClick={handlePrevious}
                                        disabled={currentQuestionIndex === 0}
                                        variant="outline"
                                    >
                                        Précédent
                                    </Button>

                                    <div className="text-sm text-gray-600">
                                        {Object.keys(userAnswers).length} / {currentQuestions.length} réponses
                                    </div>

                                    {currentQuestionIndex === currentQuestions.length - 1 ? (
                                        <Button
                                            onClick={handleSubmit}
                                            disabled={Object.keys(userAnswers).length !== currentQuestions.length}
                                            className="bg-green-600 hover:bg-green-700 text-white"
                                        >
                                            Terminer
                                        </Button>
                                    ) : (
                                        <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white">
                                            Suivant
                                        </Button>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* All Questions - Exam Mode */}
                        {!showResults && examMode && (
                            <div className="space-y-6">
                                {currentQuestions.map((question, qIndex) => (
                                    <div key={question.id} className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-lg">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 text-orange-800 font-bold flex items-center justify-center text-lg">
                                                {qIndex + 1}
                                            </div>
                                            <div className="flex-1">
                                                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                                                    {question.category}
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-800 mb-4">
                                                    {question.question}
                                                </h4>
                                                <div className="space-y-2">
                                                    {question.options.map((option, optIndex) => {
                                                        const optionLetter = String.fromCharCode(65 + optIndex);
                                                        const isSelected = userAnswers[question.id] === optionLetter;
                                                        return (
                                                            <button
                                                                key={optIndex}
                                                                onClick={() => handleAnswerSelect(optionLetter, question.id)}
                                                                className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${isSelected
                                                                    ? 'border-orange-500 bg-orange-50 text-orange-900'
                                                                    : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                                                                    }`}
                                                            >
                                                                <div className="flex items-start gap-2">
                                                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white border-2 border-current flex items-center justify-center font-bold text-sm">
                                                                        {optionLetter}
                                                                    </div>
                                                                    <div className="flex-1 pt-0.5">
                                                                        <p className="text-sm font-medium">{option}</p>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Results Review */}
                        {showResults && (
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Révision des réponses</h3>
                                {currentQuestions.map((question, qIndex) => {
                                    const userAnswer = userAnswers[question.id];
                                    const isCorrect = userAnswer === question.correctAnswer;

                                    return (
                                        <div key={question.id} className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {qIndex + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded mb-2">
                                                        {question.category}
                                                    </div>
                                                    <p className="font-medium text-gray-800 mb-3">{question.question}</p>

                                                    <div className="space-y-2 mb-3">
                                                        {question.options.map((option, optIndex) => {
                                                            const optionLetter = String.fromCharCode(65 + optIndex);
                                                            const isThisCorrect = optionLetter === question.correctAnswer;
                                                            const isThisSelected = optionLetter === userAnswer;

                                                            return (
                                                                <div
                                                                    key={optIndex}
                                                                    className={`p-3 rounded-lg border ${isThisCorrect
                                                                        ? 'border-green-500 bg-green-50'
                                                                        : isThisSelected
                                                                            ? 'border-red-500 bg-red-50'
                                                                            : 'border-gray-200 bg-gray-50'
                                                                        }`}
                                                                >
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="font-bold">{optionLetter}.</span>
                                                                        <span>{option}</span>
                                                                        {isThisCorrect && <CheckCircle2 className="h-5 w-5 text-green-600 ml-auto" />}
                                                                        {isThisSelected && !isThisCorrect && <XCircle className="h-5 w-5 text-red-600 ml-auto" />}
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>

                                                    {question.explanation && (
                                                        <button
                                                            onClick={() => toggleExplanation(question.id)}
                                                            className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-2"
                                                        >
                                                            {showExplanation[question.id] ? '− Masquer' : '+ Afficher'} l'explication
                                                        </button>
                                                    )}

                                                    {showExplanation[question.id] && question.explanation && (
                                                        <div className="mt-3 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                                                            <p className="text-sm text-gray-700">
                                                                <strong className="text-blue-800">Explication : </strong>
                                                                {question.explanation}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SESAMEAllemandPage;
