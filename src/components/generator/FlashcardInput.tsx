
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Sparkles, PenLine, X, Plus, Lightbulb, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { FLASHCARD_CATEGORIES } from '@/hooks/useFlashcardGenerator';

interface FlashcardInputProps {
  language: 'fr' | 'en';
  isAiMode: boolean;
  setIsAiMode: (value: boolean) => void;
  frontInput: string;
  setFrontInput: (value: string) => void;
  backInput: string;
  setBackInput: (value: string) => void;
  hintInput: string;
  setHintInput: (value: string) => void;
  categoryInput: string;
  setCategoryInput: (value: string) => void;
  tagsInput: string[];
  setTagsInput: (value: string[]) => void;
  topicInput: string;
  setTopicInput: (value: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

const fieldClass =
  "bg-carnet-paper-2 border-pr-gray-light text-pr-black placeholder:text-pr-gray-mid focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 rounded-lg transition-colors";

const labelClass =
  "text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid";

const TOPIC_MAX = 280;

const QUICK_PROMPTS_FR = [
  { label: 'Dérivées & limites', topic: 'Les dérivées et limites en analyse', category: 'math' },
  { label: 'Boucles for Python', topic: 'Les boucles for en Python', category: 'python' },
  { label: 'Vocabulaire éco EN', topic: 'Vocabulaire économique en anglais — inflation, GDP, recession', category: 'vocabulary' },
  { label: 'Révolution française', topic: 'La Révolution française : causes, étapes, conséquences', category: 'history' },
  { label: 'Citations humanité', topic: 'Citations clés sur l\'humanité (Anders, Arendt, Sartre)', category: 'general' },
  { label: 'Probabilités ECG', topic: 'Lois de probabilité usuelles : binomiale, Poisson, normale', category: 'math' },
];

const QUICK_PROMPTS_EN = [
  { label: 'Derivatives', topic: 'Derivatives and limits in calculus', category: 'math' },
  { label: 'Python for-loops', topic: 'For loops in Python', category: 'python' },
  { label: 'Econ vocabulary', topic: 'Economics vocabulary — inflation, GDP, recession', category: 'vocabulary' },
  { label: 'French Revolution', topic: 'The French Revolution: causes, stages, consequences', category: 'history' },
  { label: 'Probability', topic: 'Common probability distributions: binomial, Poisson, normal', category: 'math' },
];

export const FlashcardInput = ({
  language,
  isAiMode,
  setIsAiMode,
  frontInput,
  setFrontInput,
  backInput,
  setBackInput,
  hintInput,
  setHintInput,
  categoryInput,
  setCategoryInput,
  tagsInput,
  setTagsInput,
  topicInput,
  setTopicInput,
  isGenerating,
  onGenerate
}: FlashcardInputProps) => {
  const [tagInputValue, setTagInputValue] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [previewFlipped, setPreviewFlipped] = useState(false);

  const topicRef = useRef<HTMLTextAreaElement>(null);
  const frontRef = useRef<HTMLTextAreaElement>(null);

  const quickPrompts = language === 'fr' ? QUICK_PROMPTS_FR : QUICK_PROMPTS_EN;

  // Auto-focus quand on (re)entre dans un mode
  useEffect(() => {
    const t = setTimeout(() => {
      if (isAiMode) topicRef.current?.focus();
      else frontRef.current?.focus();
    }, 50);
    return () => clearTimeout(t);
  }, [isAiMode]);

  const isAiReady = topicInput.trim().length > 0;
  const isManualReady = frontInput.trim().length > 0 && backInput.trim().length > 0;
  const canSubmit = isAiMode ? isAiReady : isManualReady;

  const missingMessage = (() => {
    if (canSubmit) return null;
    if (isAiMode) {
      return language === 'fr'
        ? 'Décris un sujet pour générer la carte.'
        : 'Describe a topic to generate the card.';
    }
    if (!frontInput.trim() && !backInput.trim()) {
      return language === 'fr' ? 'Remplis le recto et le verso.' : 'Fill in front and back.';
    }
    if (!frontInput.trim()) {
      return language === 'fr' ? 'Ajoute une question (recto).' : 'Add a question (front).';
    }
    return language === 'fr' ? 'Ajoute une réponse (verso).' : 'Add an answer (back).';
  })();

  const handleAddTag = () => {
    if (tagInputValue.trim() && !tagsInput.includes(tagInputValue.trim())) {
      setTagsInput([...tagsInput, tagInputValue.trim()]);
      setTagInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTagsInput(tagsInput.filter(tag => tag !== tagToRemove));
  };

  // Cmd/Ctrl+Enter dans n'importe quel champ → génère
  const handleSubmitShortcut = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      if (canSubmit && !isGenerating) onGenerate();
    }
  };

  const applyQuickPrompt = (p: { topic: string; category: string }) => {
    setTopicInput(p.topic);
    setCategoryInput(p.category);
    topicRef.current?.focus();
  };

  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);
  const cmdKey = isMac ? '⌘' : 'Ctrl';

  return (
    <div className="space-y-6 font-dm-sans" onKeyDown={handleSubmitShortcut}>
      {/* Mode toggle */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label={language === 'fr' ? 'Mode de saisie' : 'Input mode'}
          className="inline-flex items-center bg-pr-gray-bg border border-pr-gray-light rounded-full p-1"
        >
          <button
            role="tab"
            aria-selected={isAiMode}
            onClick={() => setIsAiMode(true)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
              isAiMode
                ? 'bg-pr-black text-white'
                : 'text-pr-gray-dark hover:text-pr-black'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            {language === 'fr' ? 'Mode IA' : 'AI Mode'}
          </button>
          <button
            role="tab"
            aria-selected={!isAiMode}
            onClick={() => setIsAiMode(false)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
              !isAiMode
                ? 'bg-pr-black text-white'
                : 'text-pr-gray-dark hover:text-pr-black'
            }`}
          >
            <PenLine className="w-4 h-4" />
            {language === 'fr' ? 'Mode Manuel' : 'Manual Mode'}
          </button>
        </div>
      </div>

      {isAiMode ? (
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label className={labelClass}>
                {language === 'fr' ? 'Sujet ou concept' : 'Topic or concept'}
              </Label>
              <span
                className={`text-[11px] tabular-nums font-semibold ${
                  topicInput.length > TOPIC_MAX ? 'text-pr-black' : 'text-pr-gray-mid'
                }`}
              >
                {topicInput.length}/{TOPIC_MAX}
              </span>
            </div>
            <div className="relative">
              <Textarea
                ref={topicRef}
                placeholder={language === 'fr'
                  ? 'Ex : « Les dérivées en mathématiques », « La Révolution française », « Les boucles for en Python »…'
                  : 'Ex: "Derivatives in calculus", "The French Revolution", "For loops in Python"...'}
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                maxLength={TOPIC_MAX + 50}
                className={`min-h-[110px] text-[15px] leading-relaxed resize-none ${fieldClass}`}
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-[11px] text-pr-gray-mid pointer-events-none">
                <Lightbulb className="w-3 h-3 text-pr-black" />
                {language === 'fr' ? "L'IA génère une Q/R" : 'AI generates a Q&A'}
              </div>
            </div>
          </div>

          {/* Chips de démarrage rapide */}
          <div className="space-y-2">
            <Label className={labelClass}>
              {language === 'fr' ? 'Idées rapides' : 'Quick ideas'}
            </Label>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => applyQuickPrompt(p)}
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pr-gray-bg border border-pr-gray-light text-[12px] font-medium text-pr-gray-dark hover:bg-pr-gray-bg hover:border-pr-gray-light/40 hover:text-pr-black transition-colors"
                >
                  {p.label}
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className={labelClass}>
              {language === 'fr' ? 'Catégorie' : 'Category'}
            </Label>
            <Select value={categoryInput} onValueChange={setCategoryInput}>
              <SelectTrigger className={fieldClass}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FLASHCARD_CATEGORIES.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.label[language]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="space-y-2">
            <Label className={labelClass}>
              {language === 'fr' ? 'Question / terme (recto)' : 'Question / Term (front)'}
            </Label>
            <Textarea
              ref={frontRef}
              placeholder={language === 'fr'
                ? 'La question ou le concept à mémoriser…'
                : 'The question or concept to memorize...'}
              value={frontInput}
              onChange={(e) => setFrontInput(e.target.value)}
              className={`min-h-[80px] text-[15px] leading-relaxed resize-none ${fieldClass}`}
            />
          </div>

          <div className="space-y-2">
            <Label className={labelClass}>
              {language === 'fr' ? 'Réponse / définition (verso)' : 'Answer / Definition (back)'}
            </Label>
            <Textarea
              placeholder={language === 'fr'
                ? 'La réponse ou la définition…'
                : 'The answer or definition...'}
              value={backInput}
              onChange={(e) => setBackInput(e.target.value)}
              className={`min-h-[80px] text-[15px] leading-relaxed resize-none ${fieldClass}`}
            />
          </div>

          <div className="space-y-2">
            <Label className={labelClass}>
              {language === 'fr' ? 'Indice (optionnel)' : 'Hint (optional)'}
            </Label>
            <Input
              placeholder={language === 'fr' ? 'Un indice pour aider…' : 'A hint to help...'}
              value={hintInput}
              onChange={(e) => setHintInput(e.target.value)}
              className={fieldClass}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className={labelClass}>
                {language === 'fr' ? 'Catégorie' : 'Category'}
              </Label>
              <Select value={categoryInput} onValueChange={setCategoryInput}>
                <SelectTrigger className={fieldClass}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {FLASHCARD_CATEGORIES.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.label[language]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className={labelClass}>Tags</Label>
              <div className="flex gap-2">
                <Input
                  placeholder={language === 'fr' ? 'Ajouter un tag…' : 'Add a tag...'}
                  value={tagInputValue}
                  onChange={(e) => setTagInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !(e.metaKey || e.ctrlKey)) {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  className={fieldClass}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleAddTag}
                  className="shrink-0 rounded-lg border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-gray-light/40"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {tagsInput.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tagsInput.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 bg-pr-gray-bg text-pr-black px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em]"
                >
                  {tag}
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-pr-black transition-colors"
                    aria-label={`remove ${tag}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Preview live */}
          {(frontInput.trim() || backInput.trim()) && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowPreview((v) => !v)}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-pr-gray-mid hover:text-pr-black transition-colors"
              >
                {showPreview ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showPreview
                  ? (language === 'fr' ? "Masquer l'aperçu" : 'Hide preview')
                  : (language === 'fr' ? "Aperçu de la flashcard" : 'Preview flashcard')}
              </button>

              {showPreview && (
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => setPreviewFlipped((v) => !v)}
                    className="w-full text-left bg-pr-gray-bg border border-pr-gray-light rounded-xl p-5 hover:border-pr-gray-light/40 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black">
                        {previewFlipped
                          ? (language === 'fr' ? 'Verso' : 'Back')
                          : (language === 'fr' ? 'Recto' : 'Front')}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.12em] text-pr-gray-mid group-hover:text-pr-black">
                        {language === 'fr' ? 'Cliquer pour retourner' : 'Click to flip'}
                      </span>
                    </div>
                    <div className="font-dm-serif text-lg text-pr-black leading-snug min-h-[2.5em] whitespace-pre-wrap">
                      {previewFlipped
                        ? (backInput || (language === 'fr' ? '— verso vide —' : '— empty back —'))
                        : (frontInput || (language === 'fr' ? '— recto vide —' : '— empty front —'))}
                    </div>
                    {!previewFlipped && hintInput.trim() && (
                      <div className="mt-3 pt-3 border-t border-pr-gray-light text-[12px] text-pr-gray-mid italic">
                        💡 {hintInput}
                      </div>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Bouton + raccourci + hint disabled */}
      <div className="space-y-2">
        <Button
          onClick={onGenerate}
          disabled={isGenerating || !canSubmit}
          className="w-full h-12 text-[15px] font-semibold bg-pr-black hover:bg-pr-black-dark text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {language === 'fr' ? 'Création en cours…' : 'Creating...'}
            </>
          ) : (
            <>
              {isAiMode ? <Sparkles className="mr-2 h-4 w-4" /> : <PenLine className="mr-2 h-4 w-4" />}
              {isAiMode
                ? (language === 'fr' ? "Générer avec l'IA" : 'Generate with AI')
                : (language === 'fr' ? 'Créer la flashcard' : 'Create flashcard')
              }
              <span className="ml-3 hidden sm:inline-flex items-center gap-1 text-[10px] opacity-80">
                <kbd className="px-1.5 py-0.5 rounded bg-white/20 border border-white/30 font-medium">{cmdKey}</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white/20 border border-white/30 font-medium">↵</kbd>
              </span>
            </>
          )}
        </Button>

        {missingMessage && !isGenerating && (
          <p className="text-center text-[12px] text-pr-gray-mid">
            {missingMessage}
          </p>
        )}
      </div>
    </div>
  );
};
