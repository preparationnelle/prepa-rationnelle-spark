import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { Users } from 'lucide-react';

interface GrowthData {
  date: string;
  inscriptions: number;
  cumul: number;
}

const UserGrowthChart: React.FC = () => {
  const [data, setData] = useState<GrowthData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGrowthData = async () => {
      try {
        const { data: profiles } = await supabase
          .from('profiles')
          .select('created_at')
          .order('created_at', { ascending: true });

        if (!profiles) return;

        // Group by date over last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const dailyCounts = new Map<string, number>();
        let totalBefore = 0;

        for (const profile of profiles) {
          const date = new Date(profile.created_at);
          if (date < thirtyDaysAgo) {
            totalBefore++;
            continue;
          }
          const key = date.toISOString().split('T')[0];
          dailyCounts.set(key, (dailyCounts.get(key) || 0) + 1);
        }

        const growthData: GrowthData[] = [];
        let cumul = totalBefore;

        for (let i = 30; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const key = d.toISOString().split('T')[0];
          const count = dailyCounts.get(key) || 0;
          cumul += count;
          growthData.push({
            date: d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }),
            inscriptions: count,
            cumul
          });
        }

        setData(growthData);
      } catch (error) {
        console.error('Error fetching user growth:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGrowthData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-5 w-5 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Croissance utilisateurs</h3>
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
        <Users className="h-5 w-5 text-orange-400" />
        <h3 className="text-lg font-semibold text-white">Croissance utilisateurs</h3>
        <span className="text-xs text-white/40 ml-auto">30 derniers jours</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="date" stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 11 }} interval={6} />
          <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
          />
          <Line type="monotone" dataKey="cumul" stroke="#f97316" strokeWidth={2} dot={false} name="Total inscrits" />
          <Line type="monotone" dataKey="inscriptions" stroke="#22d3ee" strokeWidth={2} dot={false} name="Nouvelles inscriptions" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserGrowthChart;
