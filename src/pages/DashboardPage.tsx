import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { useActivityHistory, ActivityHistoryEntry } from '@/hooks/useActivityHistory';
import ReactLazy = React.lazy;
const LazyActivityChart = React.lazy(() => import('@/components/teacher/dashboard/ActivityChart'));

const DashboardPage: React.FC = () => {
  const { currentUser } = useAuth();
  const { getActivityHistory, loading } = useActivityHistory();
  const [activities, setActivities] = useState<ActivityHistoryEntry[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getActivityHistory();
      setActivities(data);
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.id]);

  const connections = activities.filter(a => a.activity_type === 'login' || a.activity_type === 'logout');

  // Quick stats (placeholders from activity)
  const totalActivities = activities.length;
  const lastLogin = connections.find(c => c.activity_type === 'login')?.created_at;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Mon tableau de bord</h1>
        <p className="text-muted-foreground">Vue d'ensemble de mes connexions et de mon activité récente</p>
      </div>

      {/* Hero quick actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Dernière connexion</CardTitle></CardHeader>
          <CardContent className="text-2xl font-semibold">{lastLogin ? new Date(lastLogin).toLocaleString('fr-FR') : '—'}</CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Activités enregistrées</CardTitle></CardHeader>
          <CardContent className="text-2xl font-semibold">{totalActivities}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Progression générale</CardTitle></CardHeader>
          <CardContent>
            <Progress value={Math.min(100, totalActivities)} />
            <div className="text-xs text-muted-foreground mt-2">Basée sur les activités récentes</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">Actions rapides</CardTitle></CardHeader>
          <CardContent className="flex gap-2 flex-wrap">
            <Link to="/generator"><Button size="sm">Aller au Générateur</Button></Link>
            <Link to="/formations"><Button size="sm" variant="outline">Explorer les formations</Button></Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ActivityChartContainer />

        <Card>
          <CardHeader>
            <CardTitle>Mes connexions récentes</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-muted-foreground">Chargement…</p>
            ) : connections.length === 0 ? (
              <p className="text-sm text-muted-foreground">Aucune connexion enregistrée pour l'instant</p>
            ) : (
              <ul className="space-y-3">
                {connections.slice(0, 10).map(item => (
                  <li key={item.id} className="flex items-center justify-between">
                    <span className="text-sm">
                      {new Date(item.created_at).toLocaleString('fr-FR')}
                    </span>
                    <Badge variant={item.activity_type === 'login' ? 'default' : 'secondary'}>
                      {item.activity_type}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Mon activité récente</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-sm text-muted-foreground">Chargement…</p>
            ) : activities.length === 0 ? (
              <p className="text-sm text-muted-foreground">Aucune activité enregistrée</p>
            ) : (
              <ul className="space-y-3">
                {activities.slice(0, 15).map(item => (
                  <li key={item.id} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{item.activity_type}{item.generator_type ? ` (${item.generator_type})` : ''}</div>
                      <div className="text-xs text-muted-foreground">{new Date(item.created_at).toLocaleString('fr-FR')}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;

// Container with IntersectionObserver to lazy mount the chart only when visible
const ActivityChartContainer: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          break;
        }
      }
    }, { rootMargin: '200px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        <React.Suspense fallback={<Card><CardHeader><CardTitle>Activité des 7 derniers jours</CardTitle></CardHeader><CardContent><div className="h-[200px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div></CardContent></Card>}>
          <LazyActivityChart />
        </React.Suspense>
      ) : (
        <Card>
          <CardHeader><CardTitle>Activité des 7 derniers jours</CardTitle></CardHeader>
          <CardContent><div className="h-[200px] flex items-center justify-center text-sm text-muted-foreground">Chargement à la demande…</div></CardContent>
        </Card>
      )}
    </div>
  );
};

