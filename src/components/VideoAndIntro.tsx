
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const VideoAndIntro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Video Section */}
      <div className="w-full">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                title="Formation Prépa HEC - Introduction"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Intro Text Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Pourquoi choisir notre formation ?
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Notre programme de formation est spécialement conçu pour les étudiants de prépa HEC 
              qui souhaitent exceller dans leurs études et réussir leurs concours.
            </p>
            <p>
              Avec une approche pédagogique innovante, nous combinons théorie et pratique 
              pour vous offrir une préparation complète et efficace.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">📚 Contenu Expert</h3>
            <p className="text-sm text-muted-foreground">
              Cours créés par des professeurs expérimentés
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">🎯 Suivi Personnalisé</h3>
            <p className="text-sm text-muted-foreground">
              Accompagnement individualisé pour chaque étudiant
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">💡 Méthodes Innovantes</h3>
            <p className="text-sm text-muted-foreground">
              Techniques d'apprentissage modernes et efficaces
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-4">
            <h3 className="font-semibold text-primary mb-2">📈 Résultats Prouvés</h3>
            <p className="text-sm text-muted-foreground">
              Taux de réussite élevé aux concours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
