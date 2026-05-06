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
    <div className="space-y-6">
      {/* Introduction */}
      <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <div className="h-[3px] w-full bg-pr-orange" />
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-pr-orange-pale rounded-xl border border-pr-orange-soft flex-shrink-0">
              <Sparkles className="h-5 w-5 text-pr-orange-dark" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-orange-dark mb-1">
                Géopolitique
              </div>
              <h3 className="font-dm-serif text-xl text-pr-black mb-2 leading-none">Méthode du paradoxe</h3>
              <p className="text-pr-gray-dark text-[14px] leading-relaxed mb-4">
                Une excellente problématique repose <strong className="text-pr-black">toujours</strong> sur un paradoxe.
                Il ne s'agit pas de poser une question simple, mais de mettre en tension deux réalités contradictoires.
                L'IA analysera votre proposition selon 5 critères d'excellence (Clarté, Paradoxe, Ancrage, Ouverture, Pertinence).
              </p>

              {!loading && !evaluation && (
                <div className="bg-pr-gray-bg rounded-xl border border-pr-gray-light p-4">
                  <div className="text-[10px] font-bold text-pr-orange-dark uppercase tracking-[0.12em] mb-1.5">Exemple d'excellence — Paradoxe</div>
                  <p className="font-lora italic text-[15px] text-pr-black leading-snug">« Continent d'avenir économique mais champ de rivalités exacerbées »</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Input form */}
      <Card className="bg-white rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <CardHeader className="px-6 pt-5 pb-4">
          <CardTitle className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
            <Target className="h-4 w-4 text-pr-orange" />
            Votre analyse
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 space-y-6">
          {/* Sujet */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Label className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-orange-pale text-pr-orange-dark text-[11px] font-bold">
                  1
                </span>
                Sujet géopolitique
              </Label>
              {subjectFromParent && (
                <Badge className="bg-pr-orange-pale text-pr-orange-dark border border-pr-orange-soft hover:bg-pr-orange-pale rounded-full font-semibold text-[11px] uppercase tracking-wider">
                  Sujet imposé
                </Badge>
              )}
            </div>
            <Textarea
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              readOnly={!!subjectFromParent}
              placeholder="Ex : La puissance américaine aujourd'hui"
              className={`min-h-[60px] text-[15px] resize-y rounded-xl p-4 transition-colors text-pr-black placeholder:text-pr-gray-mid ${subjectFromParent ? 'bg-pr-orange-pale/40 border-pr-orange-pale' : 'bg-white border-pr-gray-light focus:border-pr-orange focus:ring-2 focus:ring-pr-orange/20'}`}
            />
            {!subjectFromParent && (
              <p className="text-[13px] text-pr-gray-mid">Saisissez le sujet sur lequel vous travaillez.</p>
            )}
          </div>

          {/* Paradoxe */}
          <div className="space-y-3">
            <Label className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-orange-pale text-pr-orange-dark text-[11px] font-bold">
                2
              </span>
              Votre paradoxe
            </Label>
            <Textarea
              value={userParadox}
              onChange={(e) => setUserParadox(e.target.value)}
              placeholder="Ex : Les États-Unis sont simultanément la puissance dominante et une puissance en déclin relatif…"
              className="min-h-[160px] text-[15px] border-pr-gray-light focus:border-pr-orange focus:ring-2 focus:ring-pr-orange/20 rounded-xl resize-y p-4 transition-colors text-pr-black placeholder:text-pr-gray-mid bg-white"
            />
          </div>

          <Button
            onClick={handleEvaluate}
            disabled={loading || !subject.trim() || !userParadox.trim()}
            className="w-full bg-pr-orange hover:bg-pr-orange-dark text-white h-12 rounded-xl font-semibold text-[15px] shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyse de votre problématique…
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Lancer l'audit de la problématique
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Evaluation result */}
      {evaluation && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="bg-white rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)] overflow-hidden">
            <div className="h-[3px] w-full bg-pr-orange" />
            <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-pr-orange-soft flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-pr-orange-dark" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-orange-dark mb-0.5">
                      Audit de votre problématique
                    </div>
                    <CardTitle className="font-dm-serif text-xl text-pr-black leading-none">
                      Note globale
                    </CardTitle>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-pr-orange-soft">
                  <span className="text-[10px] font-semibold text-pr-gray-mid uppercase tracking-[0.12em]">Total</span>
                  <span className="font-dm-serif text-2xl text-pr-black leading-none">
                    {evaluation.notes.total}<span className="text-pr-gray-mid text-base">/20</span>
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-7 space-y-7">

              {/* Score Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { label: 'Clarté', score: evaluation.notes.clarte },
                  { label: 'Paradoxe', score: evaluation.notes.paradoxe },
                  { label: 'Ancrage', score: evaluation.notes.ancrage },
                  { label: 'Ouverture', score: evaluation.notes.ouverture },
                  { label: 'Pertinence', score: evaluation.notes.pertinence },
                ].map((crit, idx) => (
                  <div key={idx} className="bg-pr-gray-bg rounded-xl p-4 border border-pr-gray-light text-center">
                    <div className="text-[10px] uppercase tracking-[0.12em] text-pr-gray-mid font-semibold mb-2">{crit.label}</div>
                    <div className="font-dm-serif text-2xl text-pr-black leading-none">
                      {crit.score}<span className="text-pr-gray-mid text-base">/4</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Diagnostic */}
              <div className="bg-pr-orange-pale/60 rounded-xl p-5 border border-pr-orange-pale">
                <h3 className="text-[11px] font-semibold text-pr-orange-dark uppercase tracking-[0.14em] mb-2 flex items-center gap-2">
                  <Target className="h-3.5 w-3.5" /> Diagnostic expert
                </h3>
                <p className="text-pr-gray-dark text-[15px] leading-relaxed">{evaluation.diagnostic}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Points forts */}
                {evaluation.points_forts && evaluation.points_forts.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-pr-orange" />
                      Points forts
                    </h3>
                    <ul className="space-y-2">
                      {evaluation.points_forts.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 bg-pr-gray-bg p-3 rounded-lg border border-pr-gray-light text-pr-gray-dark text-[14px]">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pr-orange flex-shrink-0"></span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Limites */}
                {evaluation.limites && evaluation.limites.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                      <AlertTriangle className="h-3.5 w-3.5 text-pr-black" />
                      Points à améliorer
                    </h3>
                    <ul className="space-y-2">
                      {evaluation.limites.map((limite, index) => (
                        <li key={index} className="flex items-start gap-3 bg-pr-gray-bg p-3 rounded-lg border border-pr-gray-light text-pr-gray-dark text-[14px]">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pr-black flex-shrink-0"></span>
                          <span className="leading-relaxed">{limite}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Suggestion */}
              <div className="rounded-2xl bg-pr-black p-7 text-white">
                <h3 className="text-[11px] font-semibold text-pr-orange-soft uppercase tracking-[0.14em] mb-5 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Proposition de reformulation « haut niveau »
                </h3>
                <div className="space-y-5">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="text-[10px] uppercase tracking-[0.12em] text-white/60 font-semibold mb-1.5">Paradoxe suggéré</div>
                    <p className="text-white/90 italic border-l-2 border-pr-orange pl-4">{userParadox}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.12em] text-white/60 font-semibold mb-2">Problématique suggérée</div>
                    <p className="font-lora text-white text-xl font-medium leading-relaxed">« {evaluation.suggestion} »</p>
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

