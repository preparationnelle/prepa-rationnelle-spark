import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useStreak } from '@/hooks/useStreak';
import { useStudyTimeContext } from '@/context/StudyTimeContext';
import { useRoleAccess } from '@/hooks/useRoleAccess';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
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
  Trophy,
  GraduationCap as ProfIcon,
  StickyNote,
  Bot,
  Highlighter
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { getTotalPythonChapters } from '@/data/python-formation-structure';

const TeacherDashboardView = React.lazy(() => import('@/components/teacher/dashboard/TeacherDashboardView'));

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
    progress: 0,
    chaptersCompleted: 0,
    totalChapters: 0,
    exercisesDone: 0,
    averageScore: 0,
    lastActivity: '-',
    link: '/formation'
  }
];

const globalStats = {
  totalExercises: 446,
  averageScore: 79,
  totalHours: 48
};

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const { streak, isLoading: isStreakLoading, last7Days } = useStreak();
  const { totalWeekSeconds, weeklyRank, formatTime, isTracking } = useStudyTimeContext();
  const { isProfessor, loading: roleLoading } = useRoleAccess();
  const [isTeacherView, setIsTeacherView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { globalProgress: pythonProgress, progressData: pythonData } = usePythonProgress();

  const [subjectsData, setSubjectsData] = useState(initialSubjectsData);

  const [oteriaResults, setOteriaResults] = useState<any[]>([]);
  const [allQcmResults, setAllQcmResults] = useState<any[]>([]);
  const [isLoadingResults, setIsLoadingResults] = useState(true);
  const [averageQcm, setAverageQcm] = useState<number | null>(null);

  const [grammarStats, setGrammarStats] = useState<{
    en: { count: number; average: number; best: number };
    de: { count: number; average: number; best: number };
    es: { count: number; average: number; best: number };
  }>({
    en: { count: 0, average: 0, best: 0 },
    de: { count: 0, average: 0, best: 0 },
    es: { count: 0, average: 0, best: 0 }
  });
  const [commonErrors, setCommonErrors] = useState<Array<{
    error: string;
    count: number;
    language: string;
  }>>([]);
  const [weakPoints, setWeakPoints] = useState<Array<{
    point: string;
    count: number;
    language: string;
  }>>([]);
  const [isLoadingGrammar, setIsLoadingGrammar] = useState(true);

  const [userNotes, setUserNotes] = useState<any[]>([]);
  const [isLoadingNotes, setIsLoadingNotes] = useState(true);

  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(true);

  useEffect(() => {
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
            exercisesDone: completedPythonChapters,
            averageScore: 85,
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
        const { data: scoresData, error: scoresError } = await (supabase as any)
          .from('qcm_results')
          .select('score')
          .eq('user_id', currentUser.id);

        if (scoresError) throw scoresError;

        const allScores = scoresData || [];

        if (allScores.length > 0) {
          const totalScore = allScores.reduce((acc: number, curr: any) => acc + (curr.score || 0), 0);
          const avg = Math.round(totalScore / allScores.length);
          setAverageQcm(avg);
          setAllQcmResults(new Array(allScores.length).fill({}));
        } else {
          setAverageQcm(null);
          setAllQcmResults([]);
        }

        const { data: recentData, error: recentError } = await (supabase as any)
          .from('qcm_results')
          .select('id, title, score, created_at, max_score')
          .eq('user_id', currentUser.id)
          .order('created_at', { ascending: false })
          .limit(5);

        if (recentError) throw recentError;
        setOteriaResults(recentData || []);

      } catch (err) {
        console.error('Erreur chargement résultats:', err);
      } finally {
        setIsLoadingResults(false);
      }
    };

    fetchResults();
  }, [currentUser]);

  useEffect(() => {
    const fetchGrammarStats = async () => {
      if (!currentUser) return;

      try {
        // @ts-ignore
        const { data, error } = await supabase
          .from('language_grammar_results')
          .select('language, score, major_errors, weak_grammar_points')
          .eq('user_id', currentUser.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        const allGrammarResults = data || [];

        const stats = {
          en: { count: 0, total: 0, best: 0 },
          de: { count: 0, total: 0, best: 0 },
          es: { count: 0, total: 0, best: 0 }
        };

        const errorMap: Record<string, { error: string; count: number; language: string }> = {};
        const weakPointsMap: Record<string, { point: string; count: number; language: string }> = {};

        allGrammarResults.forEach((result: any) => {
          const lang = result.language as 'en' | 'de' | 'es';
          if (stats[lang]) {
            stats[lang].count++;
            stats[lang].total += result.score || 0;
            stats[lang].best = Math.max(stats[lang].best, result.score || 0);
          }

          if (result.major_errors && Array.isArray(result.major_errors)) {
            result.major_errors.forEach((err: any) => {
              const errorKey = `${lang}-${err.error || err}`;
              if (errorMap[errorKey]) {
                errorMap[errorKey].count++;
              } else {
                errorMap[errorKey] = {
                  error: err.error || err,
                  count: 1,
                  language: lang
                };
              }
            });
          }

          if (result.weak_grammar_points && Array.isArray(result.weak_grammar_points)) {
            result.weak_grammar_points.forEach((point: string) => {
              const pointKey = `${lang}-${point}`;
              if (weakPointsMap[pointKey]) {
                weakPointsMap[pointKey].count++;
              } else {
                weakPointsMap[pointKey] = {
                  point,
                  count: 1,
                  language: lang
                };
              }
            });
          }
        });

        setGrammarStats({
          en: {
            count: stats.en.count,
            average: stats.en.count > 0 ? Math.round(stats.en.total / stats.en.count) : 0,
            best: stats.en.best
          },
          de: {
            count: stats.de.count,
            average: stats.de.count > 0 ? Math.round(stats.de.total / stats.de.count) : 0,
            best: stats.de.best
          },
          es: {
            count: stats.es.count,
            average: stats.es.count > 0 ? Math.round(stats.es.total / stats.es.count) : 0,
            best: stats.es.best
          }
        });

        const sortedErrors = Object.values(errorMap)
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);
        setCommonErrors(sortedErrors);

        const sortedWeakPoints = Object.values(weakPointsMap)
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);
        setWeakPoints(sortedWeakPoints);

      } catch (err) {
        console.error('Erreur chargement thèmes grammaticaux:', err);
      } finally {
        setIsLoadingGrammar(false);
      }
    };

    fetchGrammarStats();
  }, [currentUser]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      if (!currentUser) return;

      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const days = Math.floor((now.getTime() - startOfYear.getTime()) / 86400000);
      const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);
      const year = now.getFullYear();

      try {
        const { data, error } = await (supabase as any)
          .from('study_sessions')
          .select('user_id, duration_seconds')
          .eq('week_number', weekNumber)
          .eq('year', year);

        if (error) throw error;

        const userTotals: Record<string, number> = {};
        (data || []).forEach((s: any) => {
          userTotals[s.user_id] = (userTotals[s.user_id] || 0) + (s.duration_seconds || 0);
        });

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
    const interval = setInterval(fetchLeaderboard, 60 * 1000);
    return () => clearInterval(interval);
  }, [currentUser]);

  useEffect(() => {
    const fetchUserNotes = async () => {
      if (!currentUser) return;
      try {
        const { data, error } = await (supabase as any)
          .from('user_notes')
          .from('user_notes')
          .select('id, title, created_at, tags')
          .eq('user_id', currentUser.id)
          .order('created_at', { ascending: false })
          .limit(10);
        if (error) throw error;
        setUserNotes(data || []);
      } catch (err) {
        console.error('Erreur chargement notes:', err);
      } finally {
        setIsLoadingNotes(false);
      }
    };
    fetchUserNotes();
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
      <div className="min-h-screen bg-[#F7F6F3] flex items-center justify-center px-4">
        <Card className="p-8 text-center max-w-md bg-white border border-[#D8D6CE] shadow-sm">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#FDF0EC] rounded-2xl flex items-center justify-center">
            <Target className="h-8 w-8 text-[#F4845F]" />
          </div>
          <h2 className="font-serif text-3xl mb-3 text-[#1A1A18]">Connexion requise</h2>
          <p className="text-[#1A1A18] mb-6">Connectez-vous pour accéder à votre dashboard personnalisé.</p>
          <Link to="/login">
            <Button className="w-full bg-[#F4845F] hover:bg-[#C45A35] text-white font-semibold py-6 rounded-lg shadow-none">
              Se connecter
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  const overallProgress = Math.round(subjectsData.reduce((acc, s) => acc + s.progress, 0) / subjectsData.length);

  return (
    <div className="min-h-screen bg-[#F7F6F3]">
      <div className="container mx-auto py-12 px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-14">
          {/* Streak badge */}
          <div className="fade-in-up inline-flex items-center gap-2 bg-[#FDF0EC] text-[#C45A35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-[#F9C4B0]">
            <Flame className="h-3.5 w-3.5" />
            {isStreakLoading ? '...' : streak} jour{streak > 1 ? 's' : ''} de suite
          </div>

          {/* 7 jours d'activité */}
          <div className="fade-in-up flex justify-center items-center gap-3 mb-8" style={{ animationDelay: '0.03s' }}>
            {last7Days.map((day) => (
              <div key={day.date} className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] text-[#1A1A18] font-semibold uppercase tracking-wide">{day.dayName}</span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    day.isActive
                      ? 'bg-[#F4845F] border border-[#F4845F]'
                      : 'bg-white border border-[#D8D6CE]'
                  }`}
                >
                  {day.isActive && <Flame className="h-4 w-4 text-white" />}
                </div>
              </div>
            ))}
          </div>

          {streak > 7 && (
            <p className="fade-in-up text-[#C45A35] font-semibold text-sm mb-5" style={{ animationDelay: '0.04s' }}>
              {streak} jours consécutifs — tu tiens le rythme.
            </p>
          )}

          <h1 className="fade-in-up font-serif text-5xl sm:text-6xl lg:text-7xl mb-4 text-[#1A1A18] leading-tight" style={{ animationDelay: '0.05s' }}>
            Mon <span className="text-[#F4845F]">Dashboard</span>
          </h1>
          <div className="fade-in-up flex justify-center mb-4" style={{ animationDelay: '0.07s' }}>
            <div className="h-[2px] w-16 bg-[#F4845F]" />
          </div>
          <p className="fade-in-up text-base sm:text-lg text-[#1A1A18] max-w-xl mx-auto" style={{ animationDelay: '0.1s' }}>
            Suivez votre progression et atteignez vos objectifs.
          </p>
        </div>

        {/* Toggle prof/étudiant */}
        {isProfessor && !roleLoading && (
          <div className="fade-in-up flex items-center justify-center gap-3 mb-10 bg-white border border-[#D8D6CE] rounded-xl p-3 max-w-md mx-auto" style={{ animationDelay: '0.15s' }}>
            <span className={`text-sm font-medium transition-colors ${!isTeacherView ? 'text-[#C45A35]' : 'text-[#1A1A18]'}`}>
              Interface Étudiant
            </span>
            <Switch
              checked={isTeacherView}
              onCheckedChange={setIsTeacherView}
              className="data-[state=checked]:bg-[#F4845F]"
            />
            <span className={`text-sm font-medium transition-colors ${isTeacherView ? 'text-[#C45A35]' : 'text-[#1A1A18]'}`}>
              Interface Professeur
            </span>
          </div>
        )}

        {isTeacherView ? (
          <React.Suspense fallback={<div className="flex justify-center py-20"><div className="animate-spin rounded-full h-10 w-10 border-2 border-[#F4845F] border-t-transparent"></div></div>}>
            <TeacherDashboardView />
          </React.Suspense>
        ) : (
          <>
            {/* Stats overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none overflow-hidden" style={{ animationDelay: '0.25s' }}>
                <div className="h-[3px] w-full bg-[#F4845F]" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 bg-[#FDF0EC] rounded-xl flex items-center justify-center">
                      <Target className="h-5 w-5 text-[#F4845F]" />
                    </div>
                    <span className="font-serif text-4xl text-[#F4845F] leading-none">{overallProgress}<span className="text-2xl">%</span></span>
                  </div>
                  <p className="text-xs font-semibold text-[#1A1A18] uppercase tracking-wider mb-3">Progression globale</p>
                  <div className="h-1.5 bg-[#F7F6F3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#F4845F] rounded-full transition-all duration-1000" style={{ width: `${overallProgress}%` }}></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none overflow-hidden" style={{ animationDelay: '0.3s' }}>
                <div className="h-[3px] w-full bg-[#F4845F]" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 bg-[#FDF0EC] rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-[#F4845F]" />
                    </div>
                    <span className="font-serif text-4xl text-[#1A1A18] leading-none">{globalStats.totalExercises}</span>
                  </div>
                  <p className="text-xs font-semibold text-[#1A1A18] uppercase tracking-wider">Exercices complétés</p>
                </CardContent>
              </Card>

              <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none overflow-hidden" style={{ animationDelay: '0.35s' }}>
                <div className="h-[3px] w-full bg-[#F4845F]" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 bg-[#FDF0EC] rounded-xl flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-[#F4845F]" />
                    </div>
                    <span className="font-serif text-4xl text-[#1A1A18] leading-none">
                      {averageQcm !== null ? <>{averageQcm}<span className="text-2xl">%</span></> : '—'}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#1A1A18] uppercase tracking-wider">Moyenne QCM</p>
                  {allQcmResults.length > 0 && (
                    <p className="text-xs text-[#1A1A18] mt-1.5">
                      Sur {allQcmResults.length} QCM{allQcmResults.length > 1 ? 's' : ''} passé{allQcmResults.length > 1 ? 's' : ''}
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card
                className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none overflow-hidden cursor-pointer hover:border-[#F4845F] transition-colors"
                style={{ animationDelay: '0.4s' }}
                onClick={() => document.getElementById('weekly-leaderboard')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="h-[3px] w-full bg-[#F4845F]" />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 bg-[#FDF0EC] rounded-xl flex items-center justify-center">
                      <Clock className="h-5 w-5 text-[#F4845F]" />
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-3xl text-[#1A1A18] leading-none">{formatTime(totalWeekSeconds)}</span>
                      {weeklyRank && (
                        <div className="flex items-center justify-end gap-1 mt-1.5">
                          <Trophy className="h-3 w-3 text-[#F4845F]" />
                          <span className="text-[10px] text-[#C45A35] font-semibold uppercase tracking-wide">#{weeklyRank} cette semaine</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-[#1A1A18] uppercase tracking-wider">Temps d'étude</p>
                    {isTracking && (
                      <span className="flex items-center gap-1 text-[10px] text-[#1A1A18] font-medium">
                        <span className="w-1.5 h-1.5 bg-[#F4845F] rounded-full animate-pulse"></span>
                        En cours
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-[#1A1A18] hover:text-[#F4845F] mt-2.5 transition-colors">Voir le classement →</p>
                </CardContent>
              </Card>
            </div>

            {/* Évaluations récentes */}
            <div className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <h2 className="fade-in-up font-serif text-3xl sm:text-4xl text-[#1A1A18] border-l-[3px] border-[#F4845F] pl-4">
                  Évaluations récentes
                </h2>
              </div>

              <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="divide-y divide-[#D8D6CE]">
                    {oteriaResults.length > 0 ? (
                      oteriaResults.map((result) => (
                        <div key={result.id} className="p-5 hover:bg-[#F7F6F3] transition-colors flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 bg-[#FDF0EC] rounded-xl flex items-center justify-center flex-shrink-0">
                              <Target className="h-5 w-5 text-[#F4845F]" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-[#1A1A18]">{result.title}</h4>
                              <p className="text-xs text-[#1A1A18] mt-0.5">
                                {new Date(result.created_at).toLocaleDateString('fr-FR', {
                                  day: 'numeric',
                                  month: 'long',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-[#F7F6F3] px-4 py-2 rounded-lg">
                            <Award className="h-4 w-4 text-[#F4845F]" />
                            <span className={`font-serif text-2xl ${
                              result.score >= 80 ? 'text-[#1A1A18]' :
                              result.score >= 50 ? 'text-[#F4845F]' : 'text-[#C45A35]'
                            }`}>
                              {result.score}<span className="text-base">%</span>
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-10 text-center">
                        <p className="text-[#1A1A18]">Aucune évaluation pour le moment.</p>
                        <Link to="/formation/oteria/logique-fondamentale-qcm" className="text-[#F4845F] hover:text-[#C45A35] font-semibold mt-3 inline-block transition-colors">
                          Commencer un QCM →
                        </Link>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progression par matière */}
            <div className="mb-14">
              <div className="flex items-end justify-between mb-6">
                <h2 className="fade-in-up font-serif text-3xl sm:text-4xl text-[#1A1A18] border-l-[3px] border-[#F4845F] pl-4">
                  Progression par matière
                </h2>
                <Link to="/formations" className="fade-in-up text-[#F4845F] hover:text-[#C45A35] font-semibold flex items-center gap-1 text-sm transition-colors">
                  Voir tout <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {subjectsData.map((subject, index) => (
                  <Link
                    key={subject.id}
                    to={subject.link}
                    className="fade-in-up group"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    <Card className="bg-white border border-[#D8D6CE] rounded-xl shadow-none hover:border-[#F4845F] transition-all duration-300 overflow-hidden h-full">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 bg-[#FDF0EC] rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                              <subject.icon className="h-5 w-5 text-[#F4845F]" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-base text-[#1A1A18]">{subject.name}</h3>
                              <p className="text-[10px] text-[#1A1A18] uppercase tracking-wide mt-0.5">Dernière activité · {subject.lastActivity}</p>
                            </div>
                          </div>
                          <div className="font-serif text-2xl text-[#F4845F]">{subject.progress}<span className="text-base">%</span></div>
                        </div>

                        {/* Progress bar */}
                        <div className="mb-5">
                          <div className="h-1.5 bg-[#F7F6F3] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#F4845F] rounded-full transition-all duration-1000"
                              style={{ width: `${subject.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-[#F7F6F3] rounded-lg p-2.5 text-center">
                            <p className="font-serif text-xl text-[#1A1A18] leading-none">{subject.chaptersCompleted}<span className="text-sm text-[#1A1A18]">/{subject.totalChapters}</span></p>
                            <p className="text-[10px] text-[#1A1A18] uppercase tracking-wide mt-1.5">Chapitres</p>
                          </div>
                          <div className="bg-[#F7F6F3] rounded-lg p-2.5 text-center">
                            <p className="font-serif text-xl text-[#1A1A18] leading-none">{subject.exercisesDone}</p>
                            <p className="text-[10px] text-[#1A1A18] uppercase tracking-wide mt-1.5">Exercices</p>
                          </div>
                          <div className="bg-[#FDF0EC] rounded-lg p-2.5 text-center">
                            <p className="font-serif text-xl text-[#F4845F] leading-none">{subject.averageScore}<span className="text-sm">%</span></p>
                            <p className="text-[10px] text-[#C45A35] uppercase tracking-wide mt-1.5">Moyenne</p>
                          </div>
                        </div>

                        <div className="mt-5 flex items-center justify-end text-[#1A1A18] group-hover:text-[#F4845F] transition-colors">
                          <span className="text-sm font-semibold mr-1">Continuer</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Classement de la semaine */}
            <div id="weekly-leaderboard" className="mb-14 scroll-mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="fade-in-up font-serif text-3xl sm:text-4xl text-[#1A1A18] border-l-[3px] border-[#F4845F] pl-4">
                  Classement de la semaine
                </h2>
              </div>

              <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="divide-y divide-[#D8D6CE]">
                    {isLoadingLeaderboard ? (
                      <div className="p-10 text-center text-[#1A1A18]">
                        <p>Chargement...</p>
                      </div>
                    ) : leaderboard.length > 0 ? (
                      leaderboard.map((entry, index) => (
                        <div
                          key={entry.userId}
                          className={`p-5 flex items-center justify-between gap-4 transition-colors ${
                            entry.isCurrentUser ? 'bg-[#FDF0EC] border-l-[3px] border-[#F4845F]' : 'hover:bg-[#F7F6F3]'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center font-serif text-lg ${
                              index === 0 ? 'bg-[#F4845F] text-white' :
                              index === 1 ? 'bg-[#FDF0EC] text-[#C45A35] border border-[#F9C4B0]' :
                              index === 2 ? 'bg-[#F7F6F3] text-[#1A1A18] border border-[#D8D6CE]' :
                              'bg-[#F7F6F3] text-[#1A1A18]'
                            }`}>
                              {index + 1}
                            </div>
                            <div>
                              <h4 className={`font-semibold ${entry.isCurrentUser ? 'text-[#C45A35]' : 'text-[#1A1A18]'}`}>
                                {entry.name} {entry.isCurrentUser && <span className="text-xs font-normal text-[#1A1A18]">(vous)</span>}
                              </h4>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-[#F7F6F3] px-4 py-2 rounded-lg">
                            <Clock className="h-4 w-4 text-[#F4845F]" />
                            <span className="font-serif text-lg text-[#1A1A18]">{formatTime(entry.totalSeconds)}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-10 text-center">
                        <Trophy className="h-10 w-10 mx-auto mb-4 text-[#D8D6CE]" />
                        <p className="text-[#1A1A18] font-semibold">Soyez le premier au classement cette semaine.</p>
                        <p className="text-sm text-[#1A1A18] mt-1.5">Passez du temps sur le site pour grimper.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Notes & IA */}
            <div className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <h2 className="fade-in-up font-serif text-3xl sm:text-4xl text-[#1A1A18] border-l-[3px] border-[#F4845F] pl-4">
                  Mes notes & IA
                </h2>
              </div>

              {/* Stats notes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FDF0EC] rounded-lg flex items-center justify-center">
                      <StickyNote className="h-4 w-4 text-[#F4845F]" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-[#1A1A18] leading-none">
                        {isLoadingNotes ? '…' : userNotes.filter(n => n.note_content && n.note_content !== 'Explication IA sauvegardée' && n.note_content !== 'Note sans commentaire').length}
                      </p>
                      <p className="text-[10px] text-[#1A1A18] font-semibold uppercase tracking-wide mt-1.5">Notes personnelles</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FDF0EC] rounded-lg flex items-center justify-center">
                      <Highlighter className="h-4 w-4 text-[#F4845F]" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-[#1A1A18] leading-none">
                        {isLoadingNotes ? '…' : userNotes.filter(n => !n.note_content || n.note_content === 'Note sans commentaire').length}
                      </p>
                      <p className="text-[10px] text-[#1A1A18] font-semibold uppercase tracking-wide mt-1.5">Surlignages</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FDF0EC] rounded-lg flex items-center justify-center">
                      <Bot className="h-4 w-4 text-[#F4845F]" />
                    </div>
                    <div>
                      <p className="font-serif text-2xl text-[#1A1A18] leading-none">
                        {isLoadingNotes ? '…' : userNotes.filter(n => n.ai_explanation).length}
                      </p>
                      <p className="text-[10px] text-[#1A1A18] font-semibold uppercase tracking-wide mt-1.5">Discussions IA</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Notes récentes */}
              <Card className="fade-in-up bg-white border border-[#D8D6CE] rounded-xl shadow-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="divide-y divide-[#D8D6CE]">
                    {isLoadingNotes ? (
                      <div className="p-10 text-center text-[#1A1A18]">
                        <p>Chargement...</p>
                      </div>
                    ) : userNotes.length > 0 ? (
                      userNotes.slice(0, 5).map((note) => {
                        const isAI = !!note.ai_explanation;
                        const isHighlight = !note.note_content || note.note_content === 'Note sans commentaire';
                        const TypeIcon = isAI ? Bot : isHighlight ? Highlighter : StickyNote;
                        const typeLabel = isAI ? 'IA' : isHighlight ? 'Surlignage' : 'Note';

                        return (
                          <div key={note.id} className="p-5 hover:bg-[#F7F6F3] transition-colors">
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 bg-[#FDF0EC] rounded-lg flex items-center justify-center flex-shrink-0">
                                <TypeIcon className="h-4 w-4 text-[#F4845F]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="text-[10px] font-semibold text-[#C45A35] uppercase tracking-wider bg-[#FDF0EC] px-2 py-0.5 rounded">{typeLabel}</span>
                                  {note.subject && (
                                    <span className="text-[10px] bg-[#F7F6F3] text-[#1A1A18] px-2 py-0.5 rounded font-medium">
                                      {note.subject}
                                    </span>
                                  )}
                                  <span className="text-[10px] text-[#1A1A18] ml-auto flex-shrink-0">
                                    {new Date(note.created_at).toLocaleDateString('fr-FR', {
                                      day: 'numeric',
                                      month: 'short',
                                    })}
                                  </span>
                                </div>
                                {note.selected_text && (
                                  <p className="text-sm text-[#1A1A18] italic line-clamp-1 mb-1">
                                    « {note.selected_text} »
                                  </p>
                                )}
                                {note.note_content && note.note_content !== 'Note sans commentaire' && note.note_content !== 'Explication IA sauvegardée' && (
                                  <p className="text-sm text-[#1A1A18] line-clamp-2">{note.note_content}</p>
                                )}
                                {note.ai_explanation && (
                                  <p className="text-sm text-[#1A1A18] line-clamp-2 mt-0.5">
                                    {note.ai_explanation.substring(0, 120)}...
                                  </p>
                                )}
                                {note.page_path && (
                                  <Link
                                    to={note.page_path}
                                    className="text-xs text-[#F4845F] hover:text-[#C45A35] mt-1.5 inline-block transition-colors font-semibold"
                                  >
                                    Voir la page →
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="p-10 text-center">
                        <StickyNote className="h-10 w-10 mx-auto mb-4 text-[#D8D6CE]" />
                        <p className="text-[#1A1A18] font-semibold">Aucune note pour le moment.</p>
                        <p className="text-sm text-[#1A1A18] mt-1.5">Sélectionnez du texte dans un cours pour commencer.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Card className="bg-white border border-[#D8D6CE] rounded-xl shadow-none overflow-hidden relative">
                <div className="h-[3px] w-full bg-[#F4845F]" />
                <CardContent className="p-10 sm:p-14 text-center">
                  <div className="inline-flex items-center gap-2 bg-[#FDF0EC] text-[#C45A35] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-[#F9C4B0]">
                    <Zap className="h-3.5 w-3.5" />
                    Boost ton apprentissage
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A18] mb-4 leading-tight">
                    Prêt à progresser <span className="text-[#F4845F]">encore plus</span> ?
                  </h3>
                  <p className="text-[#1A1A18] mb-8 max-w-xl mx-auto">
                    Utilise nos générateurs IA pour créer des exercices personnalisés.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/generator">
                      <Button className="px-7 py-6 text-base font-semibold bg-[#F4845F] hover:bg-[#C45A35] text-white rounded-lg shadow-none transition-colors">
                        <Zap className="mr-2 h-4 w-4" />
                        Générateurs IA
                      </Button>
                    </Link>
                    <Link to="/formations">
                      <Button variant="outline" className="px-7 py-6 text-base font-semibold bg-white hover:bg-[#F7F6F3] text-[#1A1A18] border border-[#D8D6CE] rounded-lg shadow-none transition-colors">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Voir les formations
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
