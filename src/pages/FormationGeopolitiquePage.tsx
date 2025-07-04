
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, BookOpen, Map, Newspaper, TrendingUp } from 'lucide-react';

const FormationGeopolitiquePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-orange-600 text-white">
            <Globe className="h-8 w-8" />
          </div>
          Formation Géopolitique ECG
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Formation complète en géopolitique pour les concours des Grandes Écoles de Commerce
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Avancé</Badge>
          <Badge variant="outline">10-12 heures</Badge>
          <Badge className="bg-orange-600">Bientôt disponible</Badge>
        </div>
      </div>

      <div className="grid gap-8 mb-12">
        <Card className="border-2 border-orange-200 bg-orange-50/50">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-700 flex items-center gap-3">
              <Globe className="h-6 w-6" />
              Formation en préparation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-6">
              Notre formation géopolitique complète est actuellement en développement. Elle couvrira tous les aspects essentiels pour réussir les épreuves de géopolitique aux concours ECG.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Contenu prévu
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    Analyses géopolitiques approfondies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    Cartes interactives et études de cas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    Actualités mondiales et enjeux contemporains
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    Méthodes de dissertation géopolitique
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Outils inclus
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    Atlas géopolitique interactif
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    Fiches de révision thématiques
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    Quiz et exercices pratiques
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    Veille géopolitique hebdomadaire
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Restez informé du lancement
          </h2>
          <p className="text-orange-700 mb-6">
            Inscrivez-vous pour être averti dès que notre formation géopolitique sera disponible
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700">
            M'informer du lancement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormationGeopolitiquePage;
