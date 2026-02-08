import React, { useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Loader2,
  AlertCircle,
  RefreshCw,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ColleHistoryCard } from '@/components/colle/ColleHistoryCard';
import { useColleHistory } from '@/hooks/useColleHistory';
import type { Langue } from '@/types/colle';

// --- Types pour les filtres locaux ---

type PeriodFilter = '7d' | '30d' | '3m' | 'all';

function getDateFromPeriod(period: PeriodFilter): Date | undefined {
  if (period === 'all') return undefined;
  const now = new Date();
  switch (period) {
    case '7d':
      now.setDate(now.getDate() - 7);
      return now;
    case '30d':
      now.setDate(now.getDate() - 30);
      return now;
    case '3m':
      now.setMonth(now.getMonth() - 3);
      return now;
    default:
      return undefined;
  }
}

const ColleHistoriquePage: React.FC = () => {
  const navigate = useNavigate();

  // --- Hooks ---
  const {
    sessions,
    loading,
    error,
    filters,
    pagination,
    setFilters,
    setPage,
    refresh,
  } = useColleHistory();

  // --- Etat filtre local pour le select de periode ---
  const [periodFilter, setPeriodFilter] = React.useState<PeriodFilter>('all');

  // --- Handlers Filtres ---
  const handleLangueChange = (value: string) => {
    const langue = value === 'all' ? undefined : (value as Langue);
    setFilters({ langue });
  };

  const handlePeriodChange = (value: string) => {
    const period = value as PeriodFilter;
    setPeriodFilter(period);
    const dateFrom = getDateFromPeriod(period);
    setFilters({ dateFrom, dateTo: undefined });
  };

  // --- Pagination ---
  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(pagination.total / pagination.pageSize)),
    [pagination.total, pagination.pageSize],
  );

  const handlePrevPage = () => {
    if (pagination.page > 1) {
      setPage(pagination.page - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination.page < totalPages) {
      setPage(pagination.page + 1);
    }
  };

  // --- Navigation vers detail ---
  const handleSessionClick = (sessionId: string) => {
    navigate(`/colle/detail/${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-6 sm:py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* ====== Header ====== */}
        <div className="mb-8 space-y-4">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/colle">Colle de Langues</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Historique</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Titre */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Historique des colles
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {pagination.total} session{pagination.total > 1 ? 's' : ''} au total
              </p>
            </div>
            <Button
              className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white gap-2 w-full sm:w-auto"
              onClick={() => navigate('/colle')}
            >
              <Rocket className="h-4 w-4" />
              Nouvelle colle
            </Button>
          </div>
        </div>

        {/* ====== Filtres ====== */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          {/* Filtre Langue */}
          <Select
            value={filters.langue || 'all'}
            onValueChange={handleLangueChange}
          >
            <SelectTrigger className="w-full sm:w-[180px]" aria-label="Filtrer par langue">
              <SelectValue placeholder="Toutes les langues" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les langues</SelectItem>
              <SelectItem value="en">Anglais</SelectItem>
              <SelectItem value="de">Allemand</SelectItem>
              <SelectItem value="es">Espagnol</SelectItem>
            </SelectContent>
          </Select>

          {/* Filtre Periode */}
          <Select value={periodFilter} onValueChange={handlePeriodChange}>
            <SelectTrigger className="w-full sm:w-[180px]" aria-label="Filtrer par periode">
              <SelectValue placeholder="Toute la periode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toute la periode</SelectItem>
              <SelectItem value="7d">7 derniers jours</SelectItem>
              <SelectItem value="30d">30 derniers jours</SelectItem>
              <SelectItem value="3m">3 derniers mois</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* ====== Contenu ====== */}

        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="h-10 w-10 animate-spin text-[#FF6A00]" />
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8 text-center space-y-4">
              <AlertCircle className="h-10 w-10 text-red-400 mx-auto" />
              <p className="text-sm text-red-500">{error}</p>
              <Button variant="outline" onClick={refresh} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Reessayer
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Empty state */}
        {!loading && !error && sessions.length === 0 && (
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-12 text-center space-y-4">
              <MessageCircle className="h-16 w-16 text-gray-300 mx-auto" />
              <h2 className="text-xl font-bold text-gray-900">
                Aucune colle trouvee
              </h2>
              <p className="text-muted-foreground">
                {filters.langue || periodFilter !== 'all'
                  ? 'Aucune session ne correspond a vos filtres. Essayez d\'elargir vos criteres.'
                  : 'Vous n\'avez pas encore passe de colle. Lancez-vous !'}
              </p>
              <Button
                className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white gap-2"
                onClick={() => navigate('/colle')}
              >
                <Rocket className="h-4 w-4" />
                Demarrer ma premiere colle
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Sessions grid */}
        {!loading && !error && sessions.length > 0 && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sessions.map((session) => (
                <ColleHistoryCard
                  key={session.id}
                  session={session}
                  onClick={() => handleSessionClick(session.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevPage}
                  disabled={pagination.page <= 1}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Precedent
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {pagination.page} sur {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextPage}
                  disabled={pagination.page >= totalPages}
                  className="gap-1"
                >
                  Suivant
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ColleHistoriquePage;
