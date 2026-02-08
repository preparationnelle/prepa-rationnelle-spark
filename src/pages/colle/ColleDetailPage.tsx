import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Loader2,
  AlertCircle,
  RefreshCw,
  RotateCcw,
  ArrowLeft,
  Rocket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useToast } from '@/hooks/use-toast';
import { ColleFeedbackPanel } from '@/components/colle/ColleFeedbackPanel';
import { useColleHistory } from '@/hooks/useColleHistory';
import type { ColleSessionDetail, Langue } from '@/types/colle';

// --- Helpers ---

const LANGUE_LABELS: Record<Langue, string> = {
  en: 'Anglais',
  de: 'Allemand',
  es: 'Espagnol',
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

const ColleDetailPage: React.FC = () => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { fetchSessionDetail } = useColleHistory();

  // --- Etat local ---
  const [sessionDetail, setSessionDetail] = useState<ColleSessionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- Chargement au mount ---
  useEffect(() => {
    const load = async () => {
      if (!sessionId) {
        setError('Identifiant de session manquant.');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const detail = await fetchSessionDetail(sessionId);
        setSessionDetail(detail);
      } catch (err: any) {
        setError(err?.message || 'Impossible de charger le detail de la session.');
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [sessionId]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Retry ---
  const handleRetry = () => {
    if (!sessionId) return;
    setLoading(true);
    setError(null);
    fetchSessionDetail(sessionId)
      .then((detail) => setSessionDetail(detail))
      .catch((err) => setError(err?.message || 'Erreur'))
      .finally(() => setLoading(false));
  };

  // --- Relancer cette colle (meme config) ---
  const handleRelaunch = () => {
    if (!sessionDetail) return;
    navigate('/colle', {
      state: {
        prefill: {
          langue: sessionDetail.langue,
          mode: sessionDetail.mode,
          theme: sessionDetail.theme,
          article_texte: sessionDetail.article_texte,
          duree_cible: sessionDetail.duree_cible,
        },
      },
    });
  };

  // ============================================================================
  // Loading
  // ============================================================================

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <Loader2 className="h-12 w-12 animate-spin text-[#FF6A00] mx-auto" />
          <p className="text-lg text-gray-600 font-medium">
            Chargement de la session...
          </p>
        </div>
      </div>
    );
  }

  // ============================================================================
  // Error
  // ============================================================================

  if (error || !sessionDetail) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center space-y-4">
            <AlertCircle className="h-12 w-12 text-red-400 mx-auto" />
            <h2 className="text-xl font-bold text-gray-900">Session introuvable</h2>
            <p className="text-sm text-muted-foreground">
              {error || 'Cette session n\'existe pas ou a ete supprimee.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Button variant="outline" onClick={handleRetry} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                Reessayer
              </Button>
              <Button
                className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white"
                onClick={() => navigate('/colle/historique')}
              >
                Retour a l'historique
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // --- Session en cours (non terminee) ---
  const isTerminee = sessionDetail.status === 'terminee';

  // ============================================================================
  // Rendu principal
  // ============================================================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-6 sm:py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* ====== Header : Breadcrumb + Info session ====== */}
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
                <BreadcrumbLink asChild>
                  <Link to="/colle/historique">Historique</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Detail</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Info session */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Detail de la colle
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {formatDate(sessionDetail.created_at)}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">
                {LANGUE_LABELS[sessionDetail.langue]}
              </Badge>
              <Badge variant="outline" className="text-xs capitalize">
                {sessionDetail.mode === 'article' ? 'Article' : 'Theme'}
              </Badge>
              <Badge
                variant={isTerminee ? 'default' : 'secondary'}
                className={`text-xs ${isTerminee ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-orange-100 text-orange-800 border-orange-200'}`}
              >
                {isTerminee ? 'Terminee' : 'En cours'}
              </Badge>
              {sessionDetail.theme && (
                <Badge variant="secondary" className="text-xs max-w-[200px] truncate">
                  {sessionDetail.theme}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* ====== Feedback Panel (si terminee) ====== */}
        {isTerminee ? (
          <ColleFeedbackPanel session={sessionDetail} />
        ) : (
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-10 text-center space-y-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                <Loader2 className="h-8 w-8 text-[#FF6A00]" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">
                Session en cours
              </h2>
              <p className="text-sm text-muted-foreground">
                Cette session n'est pas encore terminee. Le feedback sera disponible une fois la colle terminee.
              </p>
              <Button
                className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white gap-2"
                onClick={() => navigate(`/colle/session/${sessionId}`)}
              >
                Reprendre la colle
              </Button>
            </CardContent>
          </Card>
        )}

        {/* ====== Actions ====== */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="outline"
            className="gap-2 w-full sm:w-auto"
            onClick={handleRelaunch}
          >
            <RotateCcw className="h-4 w-4" />
            Relancer cette colle
          </Button>
          <Button
            variant="outline"
            className="gap-2 w-full sm:w-auto"
            onClick={() => navigate('/colle/historique')}
          >
            <ArrowLeft className="h-4 w-4" />
            Retour a l'historique
          </Button>
          <Button
            className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white gap-2 w-full sm:w-auto"
            onClick={() => navigate('/colle')}
          >
            <Rocket className="h-4 w-4" />
            Nouvelle colle
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ColleDetailPage;
