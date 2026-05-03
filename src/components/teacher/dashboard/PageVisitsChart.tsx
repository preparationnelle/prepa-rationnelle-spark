import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { Eye } from 'lucide-react';

interface PageVisitData {
  page: string;
  visites: number;
}

// Map route paths to readable labels
const getPageLabel = (path: string): string => {
  const labels: Record<string, string> = {
    '/': 'Accueil',
    '/dashboard': 'Dashboard',
    '/login': 'Connexion',
    '/register': 'Inscription',
    '/formations': 'Formations',
    '/contact': 'Contact',
  };
  if (labels[path]) return labels[path];
  // Shorten long paths
  const parts = path.split('/').filter(Boolean);
  if (parts.length > 2) {
    return `/${parts.slice(-2).join('/')}`;
  }
  return path;
};

const PageVisitsChart: React.FC = () => {
  const [data, setData] = useState<PageVisitData[]>([]);
  const [totalVisits, setTotalVisits] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageVisits = async () => {
      try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const { data: visits } = await (supabase as any)
          .from('page_visits')
          .select('page_path')
          .gte('visited_at', sevenDaysAgo.toISOString());

        if (!visits || visits.length === 0) {
          setLoading(false);
          return;
        }

        setTotalVisits(visits.length);

        // Count visits per page
        const counts = new Map<string, number>();
        for (const v of visits) {
          counts.set(v.page_path, (counts.get(v.page_path) || 0) + 1);
        }

        // Sort by count and take top 10
        const sorted = Array.from(counts.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, 10)
          .map(([path, count]) => ({
            page: getPageLabel(path),
            visites: count
          }));

        setData(sorted);
      } catch (error) {
        console.error('Error fetching page visits:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPageVisits();
  }, []);

  if (loading) {
    return (
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Eye className="h-5 w-5 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Pages les plus visitees</h3>
        </div>
        <div className="h-[250px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Eye className="h-5 w-5 text-orange-400" />
        <h3 className="text-lg font-semibold text-white">Pages les plus visitees</h3>
        <span className="text-xs text-white/40 ml-auto">{totalVisits} visites (7 jours)</span>
      </div>

      {data.length === 0 ? (
        <p className="text-white/50 text-center py-8 text-sm">
          Pas encore de donnees. Les visites seront enregistrees au fur et a mesure.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis type="number" stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 11 }} />
            <YAxis type="category" dataKey="page" stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 11 }} width={120} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
            />
            <Bar dataKey="visites" fill="#f97316" radius={[0, 4, 4, 0]} name="Visites" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PageVisitsChart;
