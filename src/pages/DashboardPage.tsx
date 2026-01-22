import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useStreak } from '@/hooks/useStreak';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Calculator,
  Code,
  Languages,
  Globe,
  GraduationCap,
  Target,
  Flame,
  ChevronRight,
  ArrowRight,
  BarChart3,
  Award,
  Clock,
  CheckCircle2,
  Zap,
  Sparkles,
  ListTodo,
  Play,
  Circle,
  CheckCircle,
  Brain,
  Timer,
  Lightbulb
} from 'lucide-react';

// Données des matières avec progression (mock data pour le design)
const subjectsData = [
  {
    id: 'maths',
    name: 'Mathématiques',
    icon: Calculator,
    progress: 45,
    chaptersCompleted: 9,
    totalChapters: 20,
    exercisesDone: 127,
    averageScore: 78,
    lastActivity: '2 heures',
    link: '/formation/maths'
  },
  {
    id: 'anglais',
    name: 'Anglais',
    icon: Languages,
    progress: 68,
    chaptersCompleted: 12,
    totalChapters: 18,
    exercisesDone: 89,
    averageScore: 82,
    lastActivity: '1 jour',
    link: '/formation/anglais'
  },
  {
    id: 'espagnol',
    name: 'Espagnol',
    icon: Languages,
    progress: 32,
    chaptersCompleted: 5,
    totalChapters: 16,
    exercisesDone: 45,
    averageScore: 75,
    lastActivity: '3 jours',
    link: '/formation/espagnol'
  },
  {
    id: 'geopolitique',
    name: 'Géopolitique',
    icon: Globe,
    progress: 55,
    chaptersCompleted: 8,
    totalChapters: 15,
    exercisesDone: 62,
    averageScore: 80,
    lastActivity: '5 heures',
    link: '/formation/geopolitique'
  },
  {
    id: 'esh',
    name: 'ESH',
    icon: GraduationCap,
    progress: 22,
    chaptersCompleted: 4,
    totalChapters: 18,
    exercisesDone: 28,
    averageScore: 71,
    lastActivity: '1 semaine',
    link: '/formation/esh'
  },
  {
    id: 'python',
    name: 'Python',
    icon: Code,
    progress: 85,
    chaptersCompleted: 4,
    totalChapters: 5,
    exercisesDone: 95,
    averageScore: 88,
    lastActivity: '4 heures',
    link: '/formation/python'
  }
];

// Stats globales (mock - sauf streak qui est réel)
const globalStats = {
  totalExercises: 446,
  averageScore: 79,
  totalHours: 48
};

// Session IA du jour (mock - générée par l'IA)
const dailySession = {
  greeting: "Bonjour ! Voici ta session personnalisée de 30 min",
  focusSubject: "ESH",
  focusReason: "Tu n'as pas révisé cette matière depuis 1 semaine",
  estimatedTime: "30 min",
  steps: [
    { id: 1, title: "Réviser le chapitre 5 - Croissance économique", duration: "10 min", completed: false, link: "/formation/esh/chapitre-5" },
    { id: 2, title: "Faire 5 exercices sur les théories de la croissance", duration: "12 min", completed: false, link: "/formation/esh/exercices" },
    { id: 3, title: "Générer une fiche de révision avec l'IA", duration: "5 min", completed: false, link: "/generator/flashcards" },
    { id: 4, title: "Quiz rapide pour valider tes acquis", duration: "3 min", completed: false, link: "/formation/esh/quiz" },
  ],
  todoList: [
    { id: 1, text: "Terminer le chapitre Maths sur les probabilités", priority: "high", completed: false },
    { id: 2, text: "Revoir les erreurs du thème d'anglais d'hier", priority: "medium", completed: false },
    { id: 3, text: "Préparer l'oral de géopolitique pour vendredi", priority: "high", completed: false },
  ],
  suggestions: [
    { title: "Espagnol - Vocabulaire commerce", reason: "Pas révisé depuis 3 jours", duration: "15 min", link: "/formation/espagnol/vocabulaire", icon: Languages },
    { title: "Maths - Exercices probabilités", reason: "Score de 78% à améliorer", duration: "20 min", link: "/formation/maths/probabilites", icon: Calculator },
    { title: "Géopolitique - Fiche Chine", reason: "Complète ta connaissance", duration: "10 min", link: "/formation/geopolitique/chine", icon: Globe },
  ]
};

// Évaluations récentes (mock)
const recentEvaluations = [
  { id: 1, subject: 'Mathématiques', title: 'Chapitre 9 - Probabilités', score: 85, date: 'Aujourd\'hui', icon: Calculator },
  { id: 2, subject: 'Anglais', title: 'Thème grammatical', score: 78, date: 'Hier', icon: Languages },
  { id: 3, subject: 'Géopolitique', title: 'Quiz Europe', score: 92, date: 'Il y a 2 jours', icon: Globe },
  { id: 4, subject: 'Python', title: 'Exercices NumPy', score: 95, date: 'Il y a 3 jours', icon: Code },
];

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const { streak, isLoading: isStreakLoading, last7Days } = useStreak();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [completedTodos, setCompletedTodos] = useState<number[]>([]);

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev =>
      prev.includes(stepId) ? prev.filter(id => id !== stepId) : [...prev, stepId]
    );
  };

  const toggleTodo = (todoId: number) => {
    setCompletedTodos(prev =>
      prev.includes(todoId) ? prev.filter(id => id !== todoId) : [...prev, todoId]
    );
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in-up, .fade-in, .scale-in');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('animate-in');
      }
    });

    return () => observerRef.current?.disconnect();
  }, []);

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center px-4">
        <Card className="p-8 text-center max-w-md bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/30">
            <Target className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-white">Connexion requise</h2>
          <p className="text-white/60 mb-6">Connectez-vous pour accéder à votre dashboard personnalisé.</p>
          <Link to="/login">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold py-6 rounded-xl shadow-lg shadow-orange-500/30">
              Se connecter
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const overallProgress = Math.round(subjectsData.reduce((acc, s) => acc + s.progress, 0) / subjectsData.length);
  const completedStepsCount = completedSteps.length;
  const totalSteps = dailySession.steps.length;

  return (
    <div className="min-h-screen bg-[#0a0f1a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-orange-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-orange-400/15 rounded-full blur-[100px]"></div>

      <div className="container mx-auto py-8 px-4 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Streak Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-5 shadow-lg shadow-orange-500/30">
            <Flame className="h-4 w-4" />
            {isStreakLoading ? '...' : streak} jour{streak > 1 ? 's' : ''} de suite !
          </div>

          {/* 7 Days Activity Visualization */}
          <div className="fade-in-up flex justify-center items-center gap-3 mb-6" style={{ animationDelay: '0.03s' }}>
            {last7Days.map((day, index) => (
              <div key={day.date} className="flex flex-col items-center gap-1">
                <span className="text-xs text-white/40 font-medium">{day.dayName}</span>
                <div
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${day.isActive
                      ? 'bg-gradient-to-br from-orange-500 to-orange-400 border-orange-400 shadow-lg shadow-orange-500/40'
                      : 'bg-white/5 border-white/20'
                    }`}
                >
                  {day.isActive && <Flame className="h-4 w-4 text-white" />}
                </div>
              </div>
            ))}
          </div>

          {/* Show total streak if > 7 days */}
          {streak > 7 && (
            <p className="fade-in-up text-orange-400 font-semibold text-sm mb-4" style={{ animationDelay: '0.04s' }}>
              🔥 Tu es en feu ! {streak} jours consécutifs !
            </p>
          )}

          <h1 className="fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white" style={{ animationDelay: '0.05s' }}>
            Mon <span className="text-orange-400">Dashboard</span>
          </h1>
          <p className="fade-in-up text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.1s' }}>
            Suivez votre progression et atteignez vos objectifs.
          </p>
        </div>

        {/* ============================================ */}
        {/* 🤖 AI DAILY SESSION - NOUVELLE SECTION */}
        {/* ============================================ */}
        <div className="mb-12">
          <Card className="fade-in-up bg-white/5 border-2 border-orange-500/30 backdrop-blur-sm overflow-hidden" style={{ animationDelay: '0.12s' }}>
            <CardContent className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/40 animate-pulse">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      <span>Session du jour</span>
                      <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full font-semibold">IA</span>
                    </h2>
                    <p className="text-white/60 text-sm">{dailySession.greeting}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center gap-2">
                    <Timer className="h-4 w-4 text-orange-400" />
                    <span className="text-white font-semibold">{dailySession.estimatedTime}</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                    <span className="text-orange-400 font-bold">{completedStepsCount}/{totalSteps}</span>
                    <span className="text-white/40 ml-1">étapes</span>
                  </div>
                </div>
              </div>

              {/* Focus Alert */}
              <div className="bg-[#1a1f2e] border border-orange-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Focus recommandé : <span className="text-orange-400">{dailySession.focusSubject}</span></p>
                    <p className="text-white/70 text-sm">{dailySession.focusReason}</p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="mb-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Play className="h-4 w-4 text-orange-400" />
                  Étapes de ta session
                </h3>
                <div className="space-y-3">
                  {dailySession.steps.map((step, index) => {
                    const isCompleted = completedSteps.includes(step.id);
                    return (
                      <div
                        key={step.id}
                        className={`flex items-center gap-4 bg-[#1a1f2e] border rounded-xl p-4 transition-all duration-300 cursor-pointer group hover:bg-[#252b3d] ${isCompleted ? 'border-orange-500/50' : 'border-white/10'}`}
                        onClick={() => toggleStep(step.id)}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isCompleted ? 'bg-gradient-to-br from-orange-500 to-orange-400' : 'bg-white/10 border border-white/30'}`}>
                          {isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-white" />
                          ) : (
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold transition-all ${isCompleted ? 'text-white/50 line-through' : 'text-white'}`}>
                            {step.title}
                          </p>
                          <p className="text-white/60 text-sm">{step.duration}</p>
                        </div>
                        <Link
                          to={step.link}
                          onClick={(e) => e.stopPropagation()}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white text-xs">
                            Commencer
                          </Button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-500"
                  style={{ width: `${(completedStepsCount / totalSteps) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Two Column Layout: To-Do + Suggestions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* To-Do List */}
          <Card className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden" style={{ animationDelay: '0.15s' }}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ListTodo className="h-5 w-5 text-orange-400" />
                Ma to-do list
              </h3>
              <div className="space-y-3">
                {dailySession.todoList.map((todo) => {
                  const isCompleted = completedTodos.includes(todo.id);
                  return (
                    <div
                      key={todo.id}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all hover:bg-white/5 ${isCompleted ? 'opacity-50' : ''}`}
                      onClick={() => toggleTodo(todo.id)}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${isCompleted ? 'bg-orange-500 border-orange-500' : 'border-white/30'}`}>
                        {isCompleted && <CheckCircle2 className="h-4 w-4 text-white" />}
                      </div>
                      <span className={`flex-1 ${isCompleted ? 'text-white/40 line-through' : 'text-white'}`}>
                        {todo.text}
                      </span>
                      {todo.priority === 'high' && !isCompleted && (
                        <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">Priorité</span>
                      )}
                    </div>
                  );
                })}
              </div>
              <Button className="w-full mt-4 bg-white/5 hover:bg-white/10 text-white border border-white/10">
                + Ajouter une tâche
              </Button>
            </CardContent>
          </Card>

          {/* AI Suggestions */}
          <Card className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-orange-400" />
                Suggestions IA
                <span className="text-xs text-white/40 font-normal ml-2">pour 30 min de révision</span>
              </h3>
              <div className="space-y-3">
                {dailySession.suggestions.map((suggestion, index) => {
                  const IconComponent = suggestion.icon;
                  return (
                    <Link
                      key={index}
                      to={suggestion.link}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white group-hover:text-orange-400 transition-colors">{suggestion.title}</p>
                        <p className="text-white/40 text-sm">{suggestion.reason}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-orange-400 font-semibold">{suggestion.duration}</span>
                        <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-orange-400 group-hover:translate-x-1 transition-all ml-auto mt-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <Card className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group" style={{ animationDelay: '0.25s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-orange-400">{overallProgress}%</span>
              </div>
              <p className="text-sm font-semibold text-white/60">Progression globale</p>
              <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000" style={{ width: `${overallProgress}%` }}></div>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-white">{globalStats.totalExercises}</span>
              </div>
              <p className="text-sm font-semibold text-white/60">Exercices complétés</p>
            </CardContent>
          </Card>

          <Card className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group" style={{ animationDelay: '0.35s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-white">{globalStats.averageScore}%</span>
              </div>
              <p className="text-sm font-semibold text-white/60">Moyenne générale</p>
            </CardContent>
          </Card>

          <Card className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-white">{globalStats.totalHours}h</span>
              </div>
              <p className="text-sm font-semibold text-white/60">Temps d'étude</p>
            </CardContent>
          </Card>
        </div>

        {/* Subject Progress Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="fade-in-up text-2xl sm:text-3xl font-bold text-white">
              Progression par <span className="text-orange-400">matière</span>
            </h2>
            <Link to="/formations" className="fade-in-up text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1 text-sm transition-colors">
              Voir tout <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectsData.map((subject, index) => (
              <Link
                key={subject.id}
                to={subject.link}
                className="fade-in-up group"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <subject.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-white">{subject.name}</h3>
                          <p className="text-xs text-white/40">Dernière activité: {subject.lastActivity}</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-orange-400">{subject.progress}%</div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000"
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                        <p className="text-lg font-bold text-white">{subject.chaptersCompleted}/{subject.totalChapters}</p>
                        <p className="text-xs text-white/40">Chapitres</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                        <p className="text-lg font-bold text-white">{subject.exercisesDone}</p>
                        <p className="text-xs text-white/40">Exercices</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                        <p className="text-lg font-bold text-orange-400">{subject.averageScore}%</p>
                        <p className="text-xs text-white/40">Moyenne</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="mt-4 flex items-center justify-end text-white/40 group-hover:text-orange-400 transition-colors">
                      <span className="text-sm font-semibold mr-1">Continuer</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Evaluations Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="fade-in-up text-2xl sm:text-3xl font-bold text-white">
              Évaluations <span className="text-orange-400">récentes</span>
            </h2>
          </div>

          <Card className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y divide-white/5">
                {recentEvaluations.map((evaluation) => {
                  const IconComponent = evaluation.icon;
                  return (
                    <div key={evaluation.id} className="p-4 sm:p-6 hover:bg-white/5 transition-colors flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{evaluation.title}</h4>
                          <p className="text-sm text-white/40">{evaluation.subject} • {evaluation.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                        <Award className="h-5 w-5 text-orange-400" />
                        <span className="text-xl font-bold text-orange-400">{evaluation.score}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-gradient-to-r from-orange-500 to-orange-400 border-0 shadow-2xl shadow-orange-500/30 overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center relative">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-bold mb-6">
                  <Zap className="h-4 w-4" />
                  Boost ton apprentissage
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Prêt à progresser encore plus ?
                </h3>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Utilise nos générateurs IA pour créer des exercices personnalisés.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/generator">
                    <Button className="px-8 py-6 text-lg font-bold bg-white hover:bg-gray-100 text-orange-500 rounded-xl shadow-xl transition-all duration-300 hover:scale-105">
                      <Zap className="mr-2 h-5 w-5" />
                      Générateurs IA
                    </Button>
                  </Link>
                  <Link to="/formations">
                    <Button className="px-8 py-6 text-lg font-bold bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 rounded-xl transition-all duration-300 hover:scale-105">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Voir les formations
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          opacity: 0;
        }

        .fade-in-up.animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;