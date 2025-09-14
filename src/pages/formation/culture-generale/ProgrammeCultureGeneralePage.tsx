import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgrammeCultureGeneralePage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Programme — Culture générale</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Aperçu des rubriques et ressources. Ajouts progressifs.</p>
      </div>
      <Card className="border-2">
        <CardHeader>
          <CardTitle>Programme à venir</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Ajout progressif d’articles thématiques, fiches notions et exemples argumentés.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgrammeCultureGeneralePage;


