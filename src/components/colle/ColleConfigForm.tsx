import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import type {
  ColleConfigFormProps,
  ColleConfig,
  Langue,
  ModeColle,
  DureeCible,
} from '@/types/colle';

const LANGUES: { value: Langue; label: string; flag: string }[] = [
  { value: 'en', label: 'Anglais', flag: '🇬🇧' },
  { value: 'de', label: 'Allemand', flag: '🇩🇪' },
  { value: 'es', label: 'Espagnol', flag: '🇪🇸' },
];

const DUREES: { value: DureeCible; label: string }[] = [
  { value: 10, label: '10 minutes' },
  { value: 15, label: '15 minutes' },
  { value: 20, label: '20 minutes' },
];

export const ColleConfigForm: React.FC<ColleConfigFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [langue, setLangue] = useState<Langue | ''>('');
  const [mode, setMode] = useState<ModeColle>('article');
  const [texte, setTexte] = useState('');
  const [duree, setDuree] = useState<DureeCible | null>(null);
  const [touched, setTouched] = useState(false);

  const minLength = mode === 'article' ? 50 : 10;
  const placeholder =
    mode === 'article' ? "Coller l'article ici..." : 'Saisir le thème...';

  const errors = useMemo(() => {
    const errs: string[] = [];
    if (!langue) errs.push('Veuillez sélectionner une langue.');
    if (texte.length < minLength) {
      errs.push(
        mode === 'article'
          ? `L'article doit contenir au moins ${minLength} caractères (${texte.length}/${minLength}).`
          : `Le thème doit contenir au moins ${minLength} caractères (${texte.length}/${minLength}).`
      );
    }
    if (!duree) errs.push('Veuillez sélectionner une durée.');
    return errs;
  }, [langue, texte, minLength, mode, duree]);

  const isValid = errors.length === 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid || !langue || !duree) return;

    const config: ColleConfig = {
      langue,
      mode,
      theme: mode === 'theme' ? texte : '',
      article_texte: mode === 'article' ? texte : undefined,
      duree_cible: duree,
    };

    await onSubmit(config);
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Langue */}
          <div className="space-y-2">
            <Label htmlFor="langue">Langue</Label>
            <Select
              value={langue}
              onValueChange={(val) => setLangue(val as Langue)}
            >
              <SelectTrigger id="langue" aria-label="Sélectionner la langue">
                <SelectValue placeholder="Choisir une langue" />
              </SelectTrigger>
              <SelectContent>
                {LANGUES.map((l) => (
                  <SelectItem key={l.value} value={l.value}>
                    <span className="flex items-center gap-2">
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mode */}
          <div className="space-y-2">
            <Label>Mode</Label>
            <RadioGroup
              value={mode}
              onValueChange={(val) => {
                setMode(val as ModeColle);
                setTexte('');
                setTouched(false);
              }}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="article" id="mode-article" />
                <Label htmlFor="mode-article" className="cursor-pointer font-normal">
                  Article
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="theme" id="mode-theme" />
                <Label htmlFor="mode-theme" className="cursor-pointer font-normal">
                  Thématique
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Texte / Thème */}
          <div className="space-y-2">
            <Label htmlFor="texte">
              {mode === 'article' ? 'Article' : 'Thème'}
            </Label>
            <Textarea
              id="texte"
              value={texte}
              onChange={(e) => {
                setTexte(e.target.value);
                if (!touched) setTouched(true);
              }}
              placeholder={placeholder}
              rows={mode === 'article' ? 6 : 3}
              className="resize-y"
              aria-describedby="texte-error"
            />
            {touched && texte.length < minLength && (
              <p id="texte-error" className="text-sm text-red-500" role="alert">
                {mode === 'article'
                  ? `L'article doit contenir au moins ${minLength} caractères (${texte.length}/${minLength}).`
                  : `Le thème doit contenir au moins ${minLength} caractères (${texte.length}/${minLength}).`}
              </p>
            )}
          </div>

          {/* Durée */}
          <div className="space-y-2">
            <Label htmlFor="duree">Durée</Label>
            <Select
              value={duree ? String(duree) : ''}
              onValueChange={(val) => setDuree(Number(val) as DureeCible)}
            >
              <SelectTrigger id="duree" aria-label="Sélectionner la durée">
                <SelectValue placeholder="Choisir une durée" />
              </SelectTrigger>
              <SelectContent>
                {DUREES.map((d) => (
                  <SelectItem key={d.value} value={String(d.value)}>
                    {d.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bouton */}
          <Button
            type="submit"
            disabled={!isValid || isLoading}
            className="w-full bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Chargement...
              </>
            ) : (
              'Démarrer la colle'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ColleConfigForm;
