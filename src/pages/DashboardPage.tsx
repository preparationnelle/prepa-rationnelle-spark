import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useStreak } from '@/hooks/useStreak';
import { useStudyTimeContext } from '@/context/StudyTimeContext';
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
  Trophy
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { getTotalPythonChapters } from '@/data/python-formation-structure';

// Données des matières avec progression (mock data pour le design)
const initialSubjectsData = [
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
    progress: 0, // Placeholder, will be updated
    chaptersCompleted: 0,
    totalChapters: 0,
    exercisesDone: 0,
    averageScore: 0,
    lastActivity: '-',
    link: '/formation' // Directed to main formation page
  }
];

// Stats globales (mock - sauf streak qui est réel)
const globalStats = {
  totalExercises: 446,
  averageScore: 79,
  totalHours: 48
};

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const { streak, isLoading: isStreakLoading, last7Days } = useStreak();
  const { totalWeekSeconds, weeklyRank, formatTime, isTracking } = useStudyTimeContext();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Python Progress Hook
  const { globalProgress: pythonProgress, progressData: pythonData } = usePythonProgress();

  const [subjectsData, setSubjectsData] = useState(initialSubjectsData);

  // État pour les résultats QCM
  const [oteriaResults, setOteriaResults] = useState<any[]>([]); // 5 derniers pour affichage
  const [allQcmResults, setAllQcmResults] = useState<any[]>([]); // Tous les résultats pour la moyenne
  const [isLoadingResults, setIsLoadingResults] = useState(true);
  const [averageQcm, setAverageQcm] = useState<number | null>(null);

  // État pour le leaderboard
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(true);

  useEffect(() => {
    // Update Python data in subjects list
    if (currentUser) {
      const totalPythonChapters = getTotalPythonChapters();
      const completedPythonChapters = Object.values(pythonData).filter((v: any) => v.status === 'completed').length;

      setSubjectsData(prev => prev.map(sub => {
        if (sub.id === 'python') {
          return {
            ...sub,
            progress: pythonProgress,
            chaptersCompleted: completedPythonChapters,
            totalChapters: totalPythonChapters,
            exercisesDone: completedPythonChapters, // Using same count for now
            averageScore: 85, // Placeholder or calculate from scores
            lastActivity: 'Aujourd\'hui'
          };
        }
        return sub;
      }));
    }
  }, [pythonProgress, pythonData, currentUser]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!currentUser) return;

      try {
        // Récupérer TOUS les résultats QCM pour calculer la moyenne générale
        const { data, error } = await (supabase as any)
          .from('qcm_results')
          .select('*')
          .eq('user_id', currentUser.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        const allResults = data || [];
        setAllQcmResults(allResults);

        // Garder seulement les 5 derniers pour l'affichage
        setOteriaResults(allResults.slice(0, 5));

        // Calculer la moyenne générale de tous les QCM
        if (allResults.length > 0) {
          const totalScore = allResults.reduce((acc: number, curr: any) => acc + (curr.score || 0), 0);
          const avg = Math.round(totalScore / allResults.length);
          setAverageQcm(avg);
        } else {
          setAverageQcm(null);
        }
      } catch (err) {
        console.error('Erreur chargement résultats:', err);
      } finally {
        setIsLoadingResults(false);
      }
    };

    fetchResults();
  }, [currentUser]);

  // Fetch weekly leaderboard
  useEffect(() => {
    const fetchLeaderboard = async () => {
      if (!currentUser) return;

      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const days = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000);
      const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);
      const year = now.getFullYear();

      try {
        // Fetch all sessions for this week
        const { data, error } = await (supabase as any)
          .from('study_sessions')
          .select('user_id, duration_seconds')
          .eq('week_number', weekNumber)
          .eq('year', year);

        if (error) throw error;

        // Aggregate by user
        const userTotals: Record<string, number> = {};
        (data || []).forEach((s: any) => {
          userTotals[s.user_id] = (userTotals[s.user_id] || 0) + (s.duration_seconds || 0);
        });

        // Get user names
        const userIds = Object.keys(userTotals);
        if (userIds.length === 0) {
          setLeaderboard([]);
          setIsLoadingLeaderboard(false);
          return;
        }

        const { data: profiles, error: profilesError } = await (supabase as any)
          .from('profiles')
          .select('id, first_name')
          .in('id', userIds);

        if (profilesError) throw profilesError;

        // Build leaderboard
        const leaderboardData = Object.entries(userTotals)
          .map(([userId, seconds]) => {
            const profile = (profiles || []).find((p: any) => p.id === userId);
            return {
              userId,
              name: profile?.first_name || 'Utilisateur',
              totalSeconds: seconds,
              isCurrentUser: userId === currentUser.id
            };
          })
          .sort((a, b) => b.totalSeconds - a.totalSeconds)
          .slice(0, 10);

        setLeaderboard(leaderboardData);
      } catch (err) {
        console.error('Erreur chargement leaderboard:', err);
      } finally {
        setIsLoadingLeaderboard(false);
      }
    };

    fetchLeaderboard();
    // Refresh every minute
    const interval = setInterval(fetchLeaderboard, 60 * 1000);
    return () => clearInterval(interval);
  }, [currentUser]);



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
                <span className={`text-3xl font-bold ${averageQcm !== null && averageQcm >= 80 ? 'text-green-400' : averageQcm !== null && averageQcm >= 50 ? 'text-orange-400' : 'text-white'}`}>
                  {averageQcm !== null ? `${averageQcm}%` : '-'}
                </span>
              </div>
              <p className="text-sm font-semibold text-white/60">Moyenne QCM</p>
              {allQcmResults.length > 0 && (
                <p className="text-xs text-white/40 mt-1">
                  Sur {allQcmResults.length} QCM{allQcmResults.length > 1 ? 's' : ''} passé{allQcmResults.length > 1 ? 's' : ''}
                </p>
              )}
            </CardContent>
          </Card>

          <Card
            className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 overflow-hidden group cursor-pointer"
            style={{ animationDelay: '0.4s' }}
            onClick={() => document.getElementById('weekly-leaderboard')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-white">{formatTime(totalWeekSeconds)}</span>
                  {weeklyRank && (
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <Trophy className="h-3 w-3 text-orange-400" />
                      <span className="text-xs text-orange-400 font-semibold">#{weeklyRank} cette semaine</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white/60">Temps d'étude (semaine)</p>
                {isTracking && (
                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    En cours
                  </span>
                )}
              </div>
              <p className="text-xs text-orange-400/60 mt-2 group-hover:text-orange-400 transition-colors">Cliquez pour voir le classement →</p>
            </CardContent>
          </Card>
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
                {oteriaResults.length > 0 ? (
                  oteriaResults.map((result) => (
                    <div key={result.id} className="p-4 sm:p-6 hover:bg-white/5 transition-colors flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{result.title}</h4>
                          <p className="text-sm text-white/40">
                            {new Date(result.created_at).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                        <Award className="h-5 w-5 text-orange-400" />
                        <span className={`text-xl font-bold ${result.score >= 80 ? 'text-green-400' :
                          result.score >= 50 ? 'text-orange-400' : 'text-red-400'
                          }`}>
                          {result.score}%
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-white/40">
                    <p>Aucune évaluation pour le moment.</p>
                    <Link to="/formation/oteria/logique-fondamentale-qcm" className="text-orange-400 hover:underline mt-2 inline-block">
                      Commencer un QCM
                    </Link>
                  </div>
                )}
              </div>
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

        {/* Weekly Leaderboard Section */}
        <div id="weekly-leaderboard" className="mb-12 scroll-mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="fade-in-up text-2xl sm:text-3xl font-bold text-white">
              Classement <span className="text-orange-400">de la semaine</span>
            </h2>
          </div>

          <Card className="fade-in-up bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y divide-white/5">
                {isLoadingLeaderboard ? (
                  <div className="p-8 text-center text-white/40">
                    <p>Chargement...</p>
                  </div>
                ) : leaderboard.length > 0 ? (
                  leaderboard.map((entry, index) => (
                    <div
                      key={entry.userId}
                      className={`p-4 sm:p-6 flex items-center justify-between gap-4 transition-colors ${entry.isCurrentUser ? 'bg-orange-500/10 border-l-4 border-orange-500' : 'hover:bg-white/5'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                          index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                            index === 2 ? 'bg-gradient-to-br from-orange-600 to-orange-800 text-white' :
                              'bg-white/10 text-white/60'
                          }`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className={`font-bold ${entry.isCurrentUser ? 'text-orange-400' : 'text-white'}`}>
                            {entry.name} {entry.isCurrentUser && '(vous)'}
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                        <Clock className="h-4 w-4 text-orange-400" />
                        <span className="text-lg font-bold text-white">{formatTime(entry.totalSeconds)}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-white/40">
                    <Trophy className="h-12 w-12 mx-auto mb-4 text-white/20" />
                    <p>Soyez le premier à vous inscrire au classement cette semaine !</p>
                    <p className="text-sm mt-2">Passez du temps sur le site pour grimper dans le classement.</p>
                  </div>
                )}
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
      </div >

      {/* Animations CSS */}
      < style > {`
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
      `}</style >
    </div >
  );
};

export default DashboardPage;