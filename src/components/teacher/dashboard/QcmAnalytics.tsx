import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { BarChart3, Target, Users, TrendingUp } from 'lucide-react';

interface QcmStats {
  totalQcm: number;
  averageScore: number;
  uniqueUsers: number;
  distribution: { range: string; count: number }[];
}

const QcmAnalytics: React.FC = () => {
  const [stats, setStats] = useState<QcmStats>({ totalQcm: 0, averageScore: 0, uniqueUsers: 0, distribution: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQcmStats = async () => {
      try {
        const { data: results } = await supabase
          .from('qcm_results')
          .select('score, user_id, created_at');

        if (!results || results.length === 0) {
          setLoading(false);
          return;
        }

        const totalQcm = results.length;
        const averageScore = Math.round(results.reduce((sum, r) => sum + (r.score || 0), 0) / totalQcm);
        const uniqueUsers = new Set(results.map(r => r.user_id)).size;

        // Distribution par tranches de score
        const ranges = [
          { range: '0-20%', min: 0, max: 20, count: 0 },
          { range: '20-40%', min: 20, max: 40, count: 0 },
          { range: '40-60%', min: 40, max: 60, count: 0 },
          { range: '60-80%', min: 60, max: 80, count: 0 },
          { range: '80-100%', min: 80, max: 101, count: 0 },
        ];

        for (const r of results) {
          const score = r.score || 0;
          for (const range of ranges) {
            if (score >= range.min && score < range.max) {
              range.count++;
              break;
            }
          }
        }

        setStats({
          totalQcm,
          averageScore,
          uniqueUsers,
          distribution: ranges.map(r => ({ range: r.range, count: r.count }))
        });
      } catch (error) {
        console.error('Error fetching QCM stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQcmStats();
  }, []);

  if (loading) {
    return (
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="h-5 w-5 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Statistiques QCM</h3>
        </div>
        <div className="h-[200px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-5 w-5 text-orange-400" />
        <h3 className="text-lg font-semibold text-white">Statistiques QCM</h3>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <Target className="h-4 w-4 text-orange-400 mx-auto mb-1" />
          <p className="text-xl font-bold text-white">{stats.totalQcm}</p>
          <p className="text-xs text-white/50">QCM passes</p>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <TrendingUp className="h-4 w-4 text-green-400 mx-auto mb-1" />
          <p className="text-xl font-bold text-white">{stats.averageScore}%</p>
          <p className="text-xs text-white/50">Score moyen</p>
        </div>
        <div className="bg-white/5 rounded-lg p-3 text-center">
          <Users className="h-4 w-4 text-cyan-400 mx-auto mb-1" />
          <p className="text-xl font-bold text-white">{stats.uniqueUsers}</p>
          <p className="text-xs text-white/50">Utilisateurs</p>
        </div>
      </div>

      {/* Score distribution chart */}
      {stats.distribution.length > 0 && (
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={stats.distribution}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="range" stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 10 }} />
            <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 10 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
            />
            <Bar dataKey="count" fill="#f97316" radius={[4, 4, 0, 0]} name="Nombre de QCM" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default QcmAnalytics;
