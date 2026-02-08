import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, UserCheck, TrendingUp, Activity, Clock } from 'lucide-react';
import UserGrowthChart from './UserGrowthChart';
import QcmAnalytics from './QcmAnalytics';
import PageVisitsChart from './PageVisitsChart';

// Inline dark-themed versions of stats and activity chart
// (avoids modifying existing light-themed components)

interface StatsData {
  totalUsers: number;
  activeUsers: number;
  totalStudyHours: number;
  totalQcm: number;
}

interface ActivityData {
  date: string;
  connections: number;
  activities: number;
}

const TeacherDashboardView: React.FC = () => {
  const [stats, setStats] = useState<StatsData>({ totalUsers: 0, activeUsers: 0, totalStudyHours: 0, totalQcm: 0 });
  const [activityData, setActivityData] = useState<ActivityData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Total users
        const { count: totalUsers } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        // Active users (last 7 days)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const { data: activeData } = await supabase
          .from('user_activity_history')
          .select('user_id')
          .gte('created_at', oneWeekAgo.toISOString());
        const activeUsers = new Set(activeData?.map(a => a.user_id) || []).size;

        // Total study hours
        const { data: studySessions } = await supabase
          .from('study_sessions')
          .select('duration_seconds');
        const totalStudyHours = Math.round(
          (studySessions?.reduce((sum, s) => sum + (s.duration_seconds || 0), 0) || 0) / 3600
        );

        // Total QCM taken
        const { count: totalQcm } = await supabase
          .from('qcm_results')
          .select('*', { count: 'exact', head: true });

        setStats({
          totalUsers: totalUsers || 0,
          activeUsers,
          totalStudyHours,
          totalQcm: totalQcm || 0
        });

        // Activity chart data (last 7 days)
        const chartData: ActivityData[] = [];
        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dateStr = date.toISOString().split('T')[0];
          const startDate = `${dateStr}T00:00:00.000Z`;
          const endDate = `${dateStr}T23:59:59.999Z`;

          const { data: activities } = await supabase
            .from('user_activity_history')
            .select('user_id')
            .gte('created_at', startDate)
            .lte('created_at', endDate);

          const uniqueUsers = new Set(activities?.map(a => a.user_id) || []).size;
          chartData.push({
            date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
            connections: uniqueUsers,
            activities: activities?.length || 0
          });
        }
        setActivityData(chartData);
      } catch (error) {
        console.error('Error fetching teacher dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const statCards = [
    { label: 'Utilisateurs inscrits', value: stats.totalUsers, icon: Users, color: 'text-orange-400' },
    { label: 'Actifs cette semaine', value: stats.activeUsers, icon: UserCheck, color: 'text-green-400' },
    { label: 'Heures d\'etude', value: stats.totalStudyHours, icon: Clock, color: 'text-cyan-400' },
    { label: 'QCM passes', value: stats.totalQcm, icon: TrendingUp, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-white">Tableau de bord Professeur</h2>
        <p className="text-white/50 text-sm">Vue d'ensemble de l'activite de la plateforme</p>
      </div>

      {/* Stats cards */}
      {loading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 animate-pulse">
              <div className="h-4 w-20 bg-white/10 rounded mb-3"></div>
              <div className="h-8 w-16 bg-white/10 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card, i) => (
            <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                  <card.icon className={`h-5 w-5 ${card.color}`} />
                </div>
                <span className={`text-2xl font-bold ${card.color}`}>{card.value}</span>
              </div>
              <p className="text-sm text-white/50">{card.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Activity chart + User growth */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Activity chart (dark themed, inline) */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-5 w-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Activite (7 jours)</h3>
          </div>
          {loading ? (
            <div className="h-[200px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 11 }} />
                <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                />
                <Line type="monotone" dataKey="connections" stroke="#f97316" strokeWidth={2} name="Connexions uniques" />
                <Line type="monotone" dataKey="activities" stroke="#22d3ee" strokeWidth={2} name="Activites totales" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        <UserGrowthChart />
      </div>

      {/* QCM Analytics + Page Visits */}
      <div className="grid gap-6 lg:grid-cols-2">
        <QcmAnalytics />
        <PageVisitsChart />
      </div>
    </div>
  );
};

export default TeacherDashboardView;
