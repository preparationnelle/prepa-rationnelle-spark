import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Languages, Save, Trash2, History } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface FlashcardData {
  id?: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at?: string;
}

interface FlashcardGeneratorProps {
  language: 'fr' | 'en';
  onFlashcardCreated?: () => void;
}

export const FlashcardGenerator = ({ language, onFlashcardCreated }: FlashcardGeneratorProps) => {
  const [inputWord, setInputWord] = useState('');
  const [inputLanguage, setInputLanguage] = useState<'fr' | 'en'>('fr');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Load generated flashcards from localStorage on component mount
  const loadGeneratedFlashcards = () => {
    const stored = localStorage.getItem('generatedFlashcards');
    return stored ? JSON.parse(stored) : [];
  };
  
  const [generatedFlashcards, setGeneratedFlashcards] = useState<FlashcardData[]>(loadGeneratedFlashcards);
  const [savedFlashcards, setSavedFlashcards] = useState<FlashcardData[]>([]);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  // Save generated flashcards to localStorage whenever they change
  const updateGeneratedFlashcards = (newFlashcards: FlashcardData[]) => {
    setGeneratedFlashcards(newFlashcards);
    localStorage.setItem('generatedFlashcards', JSON.stringify(newFlashcards));
  };

  const generateFlashcard = async () => {
    if (!inputWord.trim()) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Veuillez entrer un mot" : "Please enter a word",
        variant: "destructive",
      });
      return;
    }

    if (!currentUser) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Vous devez être connecté" : "You must be logged in",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-flashcard', {
        body: {
          word: inputWord.trim(),
          language: inputLanguage,
          userId: currentUser.id,
        },
      });

      if (error) {
        console.error('Error generating flashcard:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' ? "Erreur lors de la génération" : "Error generating flashcard",
          variant: "destructive",
        });
        return;
      }

      // Add the new flashcard to the beginning of the generated list and save to localStorage
      const newGeneratedList = [data.flashcard, ...generatedFlashcards];
      updateGeneratedFlashcards(newGeneratedList);
      setInputWord(''); // Clear input after successful generation
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr' ? "Flashcard générée avec succès !" : "Flashcard generated successfully!",
      });

      // Refresh saved flashcards and notify parent
      await loadSavedFlashcards();
      if (onFlashcardCreated) {
        onFlashcardCreated();
      }

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Une erreur s'est produite" : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const loadSavedFlashcards = async () => {
    if (!currentUser) return;

    try {
      const { data, error } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error loading flashcards:', error);
        return;
      }

      setSavedFlashcards(data || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteFlashcard = async (id: string) => {
    try {
      const { error } = await supabase
        .from('flashcards')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting flashcard:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' ? "Erreur lors de la suppression" : "Error deleting flashcard",
          variant: "destructive",
        });
        return;
      }

      setSavedFlashcards(prev => prev.filter(card => card.id !== id));
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr' ? "Flashcard supprimée" : "Flashcard deleted",
      });

      // Notify parent of change
      if (onFlashcardCreated) {
        onFlashcardCreated();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearGeneratedHistory = () => {
    updateGeneratedFlashcards([]);
  };

  React.useEffect(() => {
    if (currentUser) {
      loadSavedFlashcards();
    }
  }, [currentUser]);

  return (
    <div className="space-y-6">
      {/* Generator Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5" />
            {language === 'fr' ? 'Générateur de Flashcards' : 'Flashcard Generator'}
          </CardTitle>
          <CardDescription>
            {language === 'fr' 
              ? 'Entrez un mot pour générer une flashcard bilingue avec des exemples de phrases'
              : 'Enter a word to generate a bilingual flashcard with example sentences'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <Input
                placeholder={language === 'fr' ? 'Entrez un mot...' : 'Enter a word...'}
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && generateFlashcard()}
              />
            </div>
            <ToggleGroup 
              type="single" 
              value={inputLanguage} 
              onValueChange={(value) => value && setInputLanguage(value as 'fr' | 'en')}
            >
              <ToggleGroupItem value="fr" aria-label="Français">
                🇫🇷 FR
              </ToggleGroupItem>
              <ToggleGroupItem value="en" aria-label="English">
                🇬🇧 EN
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <Button 
            onClick={generateFlashcard} 
            disabled={isGenerating || !inputWord.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {language === 'fr' ? 'Génération...' : 'Generating...'}
              </>
            ) : (
              <>
                <Languages className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Générer la flashcard' : 'Generate flashcard'}
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Flashcards History */}
      {generatedFlashcards.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                {language === 'fr' ? 'Flashcards générées' : 'Generated Flashcards'}
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={clearGeneratedHistory}
                className="text-muted-foreground"
              >
                {language === 'fr' ? 'Effacer l\'historique' : 'Clear history'}
              </Button>
            </div>
            <CardDescription>
              {generatedFlashcards.length} {language === 'fr' ? 'flashcard(s) générée(s) dans cette session' : 'flashcard(s) generated in this session'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {generatedFlashcards.map((flashcard, index) => (
                <div key={index} className={`border rounded-lg p-4 ${index === 0 ? 'border-primary bg-primary/5' : ''}`}>
                  {index === 0 && (
                    <div className="text-sm text-primary font-medium mb-2">
                      {language === 'fr' ? '✨ Dernière générée' : '✨ Latest generated'}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">🇫🇷 Français</h4>
                      <p className="font-medium">{flashcard.word_fr}</p>
                      <p className="text-sm text-muted-foreground italic">"{flashcard.sentence_fr}"</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">🇬🇧 English</h4>
                      <p className="font-medium">{flashcard.word_en}</p>
                      <p className="text-sm text-muted-foreground italic">"{flashcard.sentence_en}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Saved Flashcards */}
      {savedFlashcards.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Save className="h-5 w-5" />
                {language === 'fr' ? 'Flashcards sauvegardées' : 'Saved Flashcards'}
              </span>
              <span className="text-sm text-muted-foreground">
                {savedFlashcards.length} {language === 'fr' ? 'éléments' : 'items'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {savedFlashcards.map((flashcard) => (
                <div key={flashcard.id} className="border rounded-lg p-3 space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="grid grid-cols-2 gap-4 flex-1">
                      <div>
                        <span className="text-sm font-medium">{flashcard.word_fr}</span>
                        <p className="text-xs text-muted-foreground">🇫🇷</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium">{flashcard.word_en}</span>
                        <p className="text-xs text-muted-foreground">🇬🇧</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteFlashcard(flashcard.id!)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
