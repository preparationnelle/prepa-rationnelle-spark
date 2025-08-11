import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Eye, EyeOff, Globe } from 'lucide-react';
import { geopoliticsGlossary } from '@/data/geopoliticsGlossary';

export const GeopoliticsFlashcards: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const total = geopoliticsGlossary.length;
  const card = geopoliticsGlossary[index];

  const next = () => {
    if (index < total - 1) {
      setIndex(index + 1);
      setShowDefinition(false);
    }
  };
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setShowDefinition(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold flex items-center gap-2">
          <Globe className="h-6 w-6 text-orange-600" />
          Les 200 mots de la géopolitique
        </h3>
        <Badge variant="secondary">{index + 1} / {total}</Badge>
      </div>

      <Card className="min-h-[360px] border-2">
        <CardHeader>
          <CardTitle className="text-center">{card.term}</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center">
            {showDefinition ? (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {card.definition}
              </p>
            ) : (
              <p className="text-muted-foreground">Cliquez pour afficher la définition</p>
            )}

            <Button onClick={() => setShowDefinition(!showDefinition)} className="mt-6">
              {showDefinition ? <EyeOff className="h-4 w-4 mr-2"/> : <Eye className="h-4 w-4 mr-2"/>}
              {showDefinition ? 'Cacher' : 'Afficher'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-4">
        <Button onClick={prev} variant="outline" disabled={index === 0}>
          <ChevronLeft className="h-4 w-4 mr-2" /> Précédent
        </Button>
        <Button onClick={next} variant="outline" disabled={index === total - 1}>
          Suivant <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

