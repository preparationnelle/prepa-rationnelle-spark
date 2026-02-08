import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, History, ArrowRight, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ColleConfigForm } from '@/components/colle/ColleConfigForm';
import { ColleHistoryCard } from '@/components/colle/ColleHistoryCard';
import { useColleSession } from '@/hooks/useColleSession';
import { useColleHistory } from '@/hooks/useColleHistory';
import type { ColleConfig } from '@/types/colle';

const ColleAccueilPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // --- Hooks ---
  const {
    createSession,
    loading: sessionLoading,
    isGeneratingQuestions,
  } = useColleSession();

  const {
    sessions,
    loading: historyLoading,
    error: historyError,
    refresh: refreshHistory,
  } = useColleHistory();

  // Les 5 dernieres sessions
  const recentSessions = useMemo(() => sessions.slice(0, 5), [sessions]);

  // --- Etat local ---
  const [isCreating, setIsCreating] = useState(false);

  // --- Handlers ---
  const handleCreateSession = async (config: ColleConfig) => {
    setIsCreating(true);
    try {
      const sessionId = await createSession(config);
      toast({
        title: 'Colle creee avec succes !',
        description: 'Generation des questions en cours...',
      });
      navigate(`/colle/session/${sessionId}`);
    } catch (err: any) {
      toast({
        title: 'Erreur',
        description: err?.message || 'Impossible de creer la session.',
        variant: 'destructive',
      });
    } finally {
      setIsCreating(false);
    }
  };

  const handleSessionClick = (sessionId: string) => {
    navigate(`/colle/detail/${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* ====== Hero Section ====== */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-[#FF6A00] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageCircle className="h-4 w-4" />
            Colle de Langues
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entrainez-vous aux{' '}
            <span className="text-[#FF6A00]">colles de langues</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Generez des questions sur un article ou un theme, repondez a l'oral
            et recevez un feedback detaille sur vos performances.
          </p>
        </div>

        {/* ====== Grid principal ====== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* --- Colonne gauche : Formulaire (2/3) --- */}
          <div className="md:col-span-2">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Nouvelle colle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ColleConfigForm
                  onSubmit={handleCreateSession}
                  isLoading={isCreating || sessionLoading || isGeneratingQuestions}
                />
              </CardContent>
            </Card>
          </div>

          {/* --- Colonne droite : Historique recent (1/3) --- */}
          <div className="md:col-span-1">
            <Card className="shadow-sm h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <History className="h-5 w-5 text-[#FF6A00]" />
                    Historique recent
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Loading */}
                {historyLoading && (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-[#FF6A00]" />
                  </div>
                )}

                {/* Error */}
                {historyError && !historyLoading && (
                  <div className="text-center py-6 space-y-3">
                    <AlertCircle className="h-8 w-8 text-red-400 mx-auto" />
                    <p className="text-sm text-red-500">{historyError}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={refreshHistory}
                      className="gap-2"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      Reessayer
                    </Button>
                  </div>
                )}

                {/* Empty state */}
                {!historyLoading && !historyError && recentSessions.length === 0 && (
                  <div className="text-center py-8 space-y-2">
                    <MessageCircle className="h-10 w-10 text-gray-300 mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      Aucune colle pour le moment.
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Lancez votre premiere colle pour commencer !
                    </p>
                  </div>
                )}

                {/* Sessions list */}
                {!historyLoading && !historyError && recentSessions.length > 0 && (
                  <>
                    <div className="space-y-2">
                      {recentSessions.map((session) => (
                        <ColleHistoryCard
                          key={session.id}
                          session={session}
                          onClick={() => handleSessionClick(session.id)}
                        />
                      ))}
                    </div>

                    {/* Link to full history */}
                    <div className="pt-2">
                      <Button
                        variant="ghost"
                        className="w-full text-[#FF6A00] hover:text-[#FF6A00]/80 hover:bg-orange-50 gap-2"
                        onClick={() => navigate('/colle/historique')}
                      >
                        Voir tout l'historique
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColleAccueilPage;
