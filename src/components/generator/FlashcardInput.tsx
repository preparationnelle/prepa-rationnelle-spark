
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Sparkles, PenLine, X, Plus, Lightbulb } from 'lucide-react';
import { FLASHCARD_CATEGORIES } from '@/hooks/useFlashcardGenerator';

interface FlashcardInputProps {
  language: 'fr' | 'en';
  // Universal mode
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

  const handleAddTag = () => {
    if (tagInputValue.trim() && !tagsInput.includes(tagInputValue.trim())) {
      setTagsInput([...tagsInput, tagInputValue.trim()]);
      setTagInputValue('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTagsInput(tagsInput.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onGenerate();
    }
  };

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex justify-center">
        <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
          <button
            onClick={() => setIsAiMode(true)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${isAiMode
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            <Sparkles className="w-4 h-4" />
            {language === 'fr' ? 'Mode IA' : 'AI Mode'}
          </button>
          <button
            onClick={() => setIsAiMode(false)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${!isAiMode
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
          >
            <PenLine className="w-4 h-4" />
            {language === 'fr' ? 'Mode Manuel' : 'Manual Mode'}
          </button>
        </div>
      </div>

      {/* AI Mode */}
      {isAiMode ? (
        <div className="space-y-5">
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {language === 'fr' ? 'Sujet ou concept' : 'Topic or concept'}
            </Label>
            <div className="relative">
              <Textarea
                placeholder={language === 'fr'
                  ? 'Ex: "Les dérivées en mathématiques", "La Révolution française", "Les boucles for en Python"...'
                  : 'Ex: "Derivatives in calculus", "The French Revolution", "For loops in Python"...'}
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="min-h-[100px] text-base bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl resize-none"
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs text-gray-400">
                <Lightbulb className="w-3 h-3" />
                {language === 'fr' ? "L'IA génère une Q/R" : "AI generates a Q&A"}
              </div>
            </div>
          </div>

          {/* Category Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {language === 'fr' ? 'Catégorie' : 'Category'}
            </Label>
            <Select value={categoryInput} onValueChange={setCategoryInput}>
              <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl">
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
        /* Manual Mode */
        <div className="space-y-5">
          {/* Front (Question) */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {language === 'fr' ? 'Question / Terme (Recto)' : 'Question / Term (Front)'}
            </Label>
            <Textarea
              placeholder={language === 'fr'
                ? 'La question ou le concept à mémoriser...'
                : 'The question or concept to memorize...'}
              value={frontInput}
              onChange={(e) => setFrontInput(e.target.value)}
              className="min-h-[80px] text-base bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl resize-none"
            />
          </div>

          {/* Back (Answer) */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {language === 'fr' ? 'Réponse / Définition (Verso)' : 'Answer / Definition (Back)'}
            </Label>
            <Textarea
              placeholder={language === 'fr'
                ? 'La réponse ou la définition...'
                : 'The answer or definition...'}
              value={backInput}
              onChange={(e) => setBackInput(e.target.value)}
              className="min-h-[80px] text-base bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl resize-none"
            />
          </div>

          {/* Hint (Optional) */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {language === 'fr' ? 'Indice (optionnel)' : 'Hint (optional)'}
            </Label>
            <Input
              placeholder={language === 'fr' ? 'Un indice pour aider...' : 'A hint to help...'}
              value={hintInput}
              onChange={(e) => setHintInput(e.target.value)}
              className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
            />
          </div>

          {/* Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {language === 'fr' ? 'Catégorie' : 'Category'}
              </Label>
              <Select value={categoryInput} onValueChange={setCategoryInput}>
                <SelectTrigger className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-xl">
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

            {/* Tags */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Tags
              </Label>
              <div className="flex gap-2">
                <Input
                  placeholder={language === 'fr' ? 'Ajouter un tag...' : 'Add a tag...'}
                  value={tagInputValue}
                  onChange={(e) => setTagInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:border-orange-500 focus:ring-orange-500/20 rounded-xl"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={handleAddTag}
                  className="shrink-0 rounded-xl"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Tags Display */}
          {tagsInput.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tagsInput.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 px-3 py-1 gap-1"
                >
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className="hover:text-orange-900">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Generate Button */}
      <Button
        onClick={onGenerate}
        disabled={isGenerating || (isAiMode ? !topicInput.trim() : !frontInput.trim() || !backInput.trim())}
        className="w-full h-14 text-lg bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {language === 'fr' ? 'Création en cours...' : 'Creating...'}
          </>
        ) : (
          <>
            {isAiMode ? <Sparkles className="mr-2 h-5 w-5" /> : <PenLine className="mr-2 h-5 w-5" />}
            {isAiMode
              ? (language === 'fr' ? 'Générer avec l\'IA' : 'Generate with AI')
              : (language === 'fr' ? 'Créer la flashcard' : 'Create flashcard')
            }
          </>
        )}
      </Button>
    </div>
  );
};
