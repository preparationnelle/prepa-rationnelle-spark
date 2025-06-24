
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function MethodGrammaireReglesPage() {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Règles de Grammaire Récurrentes
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          Points grammaticaux essentiels qui reviennent souvent aux concours
        </p>
      </div>

      <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
        <CardContent className="pt-6">
          <div className="prose prose-orange max-w-none">
            <p className="text-lg text-orange-800 font-medium mb-6">
              Cette fiche regroupe les points grammaticaux les plus fréquemment testés dans les épreuves de langues des concours. 
              Maîtriser ces règles vous permettra d'éviter les erreurs courantes et d'améliorer significativement vos notes.
            </p>
            
            <div className="bg-orange-100 p-4 rounded-lg border border-orange-200 mb-6">
              <p className="text-orange-800 font-medium">
                💡 Conseil : Révisez ces règles régulièrement et entraînez-vous à les appliquer dans vos thèmes et versions !
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Contenu en préparation</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-4">
              Les règles de grammaire récurrentes seront bientôt disponibles ici ! 
              Cette section comprendra :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Points grammaticaux les plus fréquents en anglais</li>
              <li>Règles essentielles en allemand</li>
              <li>Pièges classiques à éviter</li>
              <li>Exercices d'application</li>
              <li>Méthodes de révision efficaces</li>
            </ul>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <p className="text-amber-800">
                En attendant, n'hésitez pas à consulter notre générateur de thème grammatical 
                pour vous entraîner sur les points essentiels !
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Link to="/methodologie/grammaire">
          <Button variant="outline" className="border-[#ff9100] text-[#ff9100] hover:bg-[#ff9100] hover:text-white">
            ← Retour aux fiches de grammaire
          </Button>
        </Link>
        <Link to="/generator/theme-grammar">
          <Button className="bg-gradient-to-r from-[#ff9100] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
            Thème grammatical
          </Button>
        </Link>
      </div>
    </div>
  );
}
