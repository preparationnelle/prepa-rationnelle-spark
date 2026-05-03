import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sparkles, CheckCircle, Globe, BookOpen, Target, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface Evaluation {
  sujet: string;
  problematique_candidat: string;
  diagnostic: string;
  notes: {
    clarte: number;
    paradoxe: number;
    ancrage: number;
    ouverture: number;
    pertinence: number;
    total: number;
  };
  points_forts: string[];
  limites: string[];
  suggestion: string;
}

const predefinedSubjects = [
  { id: 1, title: 'La puissance américaine aujourd\'hui' },
  { id: 2, title: 'La Chine, puissance révisionniste ?' },
  { id: 3, title: 'L\'Union européenne : puissance ou dépendance ?' },
  { id: 4, title: 'La mondialisation : intégration ou fragmentation ?' },
  { id: 5, title: 'Le changement climatique : menace ou moteur de coopération ?' },
  { id: 6, title: 'Les ressources énergétiques : instrument ou vulnérabilité de puissance ?' },
  { id: 7, title: 'L\'Amérique latine : périphérie ou acteur global ?' },
  { id: 8, title: 'Les conflits contemporains : retour du hard power ?' },
  { id: 9, title: 'Le cyberespace : nouvel espace de puissance ?' },
  { id: 10, title: 'L\'Afrique : continent d\'avenir ou champ de rivalités ?' }
];

interface GeopoliticsParadoxGeneratorProps {
  subjectFromParent?: string;
}

export const GeopoliticsParadoxGenerator = ({ subjectFromParent }: GeopoliticsParadoxGeneratorProps) => {
  const [subject, setSubject] = useState(subjectFromParent || '');
  const [userParadox, setUserParadox] = useState('');
  const [userProblematic, setUserProblematic] = useState('');
  const [loading, setLoading] = useState(false);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [suggestedParadox, setSuggestedParadox] = useState('');
  const [suggestedProblematic, setSuggestedProblematic] = useState('');
  const [generatingSuggestion, setGeneratingSuggestion] = useState(false);

  const handleEvaluate = async () => {
    if (!subject.trim()) {
      toast.error('Veuillez entrer un sujet géopolitique');
      return;
    }
    if (!userParadox.trim()) {
      toast.error('Veuillez entrer votre paradoxe');
      return;
    }


    setLoading(true);
    setEvaluation(null);

    try {
      const { data, error } = await supabase.functions.invoke('evaluate-geopolitics-paradox', {
        body: { action: 'evaluate', subject: subject.trim(), userParadox: userParadox.trim() },
      });

      if (error) {
        throw new Error(error.message || "Erreur lors de l'appel à la fonction");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setEvaluation(data.evaluation);
      toast.success('Problématique évaluée !');
    } catch (error) {
      console.error('Error evaluating problematic:', error);
      toast.error('Erreur lors de l\'évaluation : ' + (error instanceof Error ? error.message : 'Erreur inconnue'));
    } finally {
      setLoading(false);
    }
  };

  const generateSuggestion = async (selectedSubject: string) => {
    if (!selectedSubject.trim()) return;

    setGeneratingSuggestion(true);
    try {
      const { data, error } = await supabase.functions.invoke('evaluate-geopolitics-paradox', {
        body: { action: 'suggest', subject: selectedSubject.trim() },
      });

      if (error) {
        throw new Error(error.message || "Erreur lors de l'appel à la fonction");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setSuggestedParadox(data.suggestion.paradoxe);

      toast.success('Suggestion générée automatiquement !');
    } catch (error) {
      console.error('Error generating suggestion:', error);
      toast.error('Erreur lors de la génération de la suggestion');
    } finally {
      setGeneratingSuggestion(false);
    }
  };

  const selectPredefinedSubject = (title: string) => {
    setSubject(title);
    setEvaluation(null);
    // Générer automatiquement une suggestion pour le sujet sélectionné
    if (title) {
      generateSuggestion(title);
    } else {
      setSuggestedParadox('');
      setSuggestedProblematic('');
    }
  };

  const useSuggestion = () => {
    setUserParadox(suggestedParadox);
    toast.success('Suggestion appliquée à votre formulaire !');
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="bg-orange-50/50 border border-orange-100 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-orange-100">
              <Sparkles className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Méthode du Paradoxe</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Une excellente problématique repose <strong>toujours</strong> sur un paradoxe.
                Il ne s'agit pas de poser une question simple, mais de mettre en tension deux réalités contradictoires.
                L'IA analysera votre proposition selon 5 critères d'excellence (Clarté, Paradoxe, Ancrage, Ouverture, Pertinence).
              </p>

              {!loading && !evaluation && (
                <div className="bg-white rounded-xl border border-orange-200/60 p-5 shadow-sm">
                  <div className="flex items-center justify-between cursor-pointer group" onClick={() => setSuggestedParadox(suggestedParadox ? '' : 'demo')}>
                    <span className="font-semibold text-orange-700 text-sm group-hover:text-orange-800 transition-colors">Voir un exemple d'excellence</span>
                    <Sparkles className="h-4 w-4 text-orange-400 group-hover:scale-110 transition-transform" />
                  </div>
                  {/* Hardcoded example for demo state when toggled or if we want to show it by default */}
                  <div className="mt-4 pt-4 border-t border-orange-50 space-y-4">
                    <div className="grid md:grid-cols-1 gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider bg-orange-50 px-2 py-1 rounded-full">Paradoxe</span>
                        <p className="text-sm font-medium text-gray-800 italic mt-1">"Continent d'avenir économique mais champ de rivalités exacerbées"</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Input form */}
      <Card className="border-0 shadow-xl shadow-slate-200/40 ring-1 ring-slate-200 bg-white">
        <CardHeader className="border-b border-slate-100 pb-6">
          <CardTitle className="text-xl font-bold text-slate-900 flex items-center gap-3">
            <Target className="h-5 w-5 text-orange-600" />
            Votre analyse
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-3">
            <Label className="text-base font-semibold text-slate-900 flex items-center gap-2">
              <Globe className="h-4 w-4 text-slate-400" />
              Sujet géopolitique
            </Label>
            <div className={`relative rounded-xl border transition-colors duration-200 ${subjectFromParent ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-500/10'}`}>
              <Textarea
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                readOnly={!!subjectFromParent}
                placeholder="Ex : La puissance américaine aujourd'hui"
                className="min-h-[60px] text-base border-0 focus-visible:ring-0 bg-transparent resize-none p-4"
              />
              {subjectFromParent && (
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-0 font-medium">Sujet Imposé</Badge>
                </div>
              )}
            </div>
            {!subjectFromParent && (
              <p className="text-xs text-slate-500 pl-1">Saisissez le sujet sur lequel vous travaillez.</p>
            )}
          </div>

          <div>
            <div className="space-y-3">
              <Label className="text-base font-semibold text-slate-900">
                Votre paradoxe
              </Label>
              <Textarea
                value={userParadox}
                onChange={(e) => setUserParadox(e.target.value)}
                placeholder="Ex : Les États-Unis sont simultanément la puissance dominante et une puissance en déclin relatif..."
                className="min-h-[160px] text-base border-slate-200 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl resize-none p-4 shadow-sm"
              />
            </div>


          </div>

          <Button
            onClick={handleEvaluate}
            disabled={loading || !subject.trim() || !userParadox.trim()}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin text-orange-500" />
                Analyse de votre problématique...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
                Lancer l'audit de la problématique
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Evaluation result */}
      {evaluation && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <Card className="border-0 shadow-2xl shadow-orange-900/10 ring-1 ring-slate-200 bg-white overflow-hidden">
            <CardHeader className="bg-slate-900 text-white border-b border-orange-500/30 pb-8 pt-8 px-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
                    <CheckCircle className="h-6 w-6 text-orange-400" />
                  </div>
                  Audit de votre problématique
                </CardTitle>
                <div className="flex items-center gap-3 bg-white/10 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                  <span className="text-sm font-medium text-slate-300 uppercase tracking-wider">Note Globale</span>
                  <div className="h-6 w-px bg-white/20"></div>
                  <span className="text-2xl font-bold text-orange-400">{evaluation.notes.total}/20</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-10">

              {/* Score Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { label: 'Clarté', score: evaluation.notes.clarte },
                  { label: 'Paradoxe', score: evaluation.notes.paradoxe },
                  { label: 'Ancrage', score: evaluation.notes.ancrage },
                  { label: 'Ouverture', score: evaluation.notes.ouverture },
                  { label: 'Pertinence', score: evaluation.notes.pertinence },
                ].map((crit, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center transition-all hover:shadow-md hover:border-orange-100 group">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 group-hover:text-slate-600 transition-colors">{crit.label}</div>
                    <div className={`text-2xl font-black ${crit.score >= 3 ? 'text-green-500' : crit.score >= 2 ? 'text-orange-500' : 'text-red-500'}`}>
                      {crit.score}/4
                    </div>
                  </div>
                ))}
              </div>

              {/* Diagnostic */}
              <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <h3 className="font-bold text-orange-900 mb-3 flex items-center gap-2 relative z-10">
                  <Target className="h-5 w-5 text-orange-600" /> Diagnostic Expert
                </h3>
                <p className="text-slate-700 leading-relaxed font-medium relative z-10">{evaluation.diagnostic}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Points forts */}
                {evaluation.points_forts && evaluation.points_forts.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      Points forts
                    </h3>
                    <ul className="space-y-3">
                      {evaluation.points_forts.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 bg-green-50/50 p-3 rounded-xl border border-green-100 text-slate-700 text-sm">
                          <span className="mt-0.5 block w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Limites */}
                {evaluation.limites && evaluation.limites.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                      </div>
                      Points à améliorer
                    </h3>
                    <ul className="space-y-3">
                      {evaluation.limites.map((limite, index) => (
                        <li key={index} className="flex items-start gap-3 bg-red-50/50 p-3 rounded-xl border border-red-100 text-slate-700 text-sm">
                          <span className="mt-0.5 block w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                          <span>{limite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Suggestion */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 text-white shadow-xl ring-1 ring-white/10">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-orange-400 mb-6 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Proposition de reformulation "Haut Niveau"
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Paradoxe Suggéré</div>
                      <p className="text-slate-200 italic border-l-2 border-orange-500 pl-4">{userParadox}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Problématique Suggérée</div>
                      <p className="text-white text-xl font-medium leading-relaxed font-serif">"{evaluation.suggestion}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

